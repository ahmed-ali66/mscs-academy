#!/usr/bin/env node
/**
 * MSCS Academy — Database Setup Script
 *
 * This script creates a free Neon PostgreSQL database and configures
 * the project to use it. Run it once to set up your database.
 *
 * Usage:
 *   node setup-db.js
 *
 * You will need a Neon API key. Get one free at:
 *   https://console.neon.tech/settings/profile
 */

const https = require('https');
const fs = require('fs');
const { execSync } = require('child_process');
const readline = require('readline');

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const question = (prompt) => new Promise(resolve => rl.question(prompt, resolve));

async function neonApiRequest(method, path, body, apiKey) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'console.neon.tech',
      path: `/api/v2${path}`,
      method,
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
    };

    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          resolve({ status: res.statusCode, data: JSON.parse(data) });
        } catch {
          resolve({ status: res.statusCode, data });
        }
      });
    });

    req.on('error', reject);
    if (body) req.write(JSON.stringify(body));
    req.end();
  });
}

async function main() {
  console.log('\n🚀 MSCS Academy — Database Setup\n');
  console.log('This script will create a free PostgreSQL database on Neon.\n');

  // Check if DATABASE_URL is already set
  const envPath = '.env';
  let existingEnv = {};
  if (fs.existsSync(envPath)) {
    const envContent = fs.readFileSync(envPath, 'utf8');
    envContent.split('\n').forEach(line => {
      const [key, ...values] = line.split('=');
      if (key && values.length) existingEnv[key.trim()] = values.join('=').trim();
    });
  }

  if (existingEnv.DATABASE_URL && !existingEnv.DATABASE_URL.includes('placeholder')) {
    console.log('✅ DATABASE_URL is already set in .env');
    console.log(`   ${existingEnv.DATABASE_URL.substring(0, 50)}...`);
    const proceed = await question('\n   Do you want to set up a new database? (y/N): ');
    if (proceed.toLowerCase() !== 'y') {
      console.log('\nSkipping database creation. Running prisma db push...');
      try {
        execSync('npx prisma db push', { stdio: 'inherit' });
        console.log('\n✅ Database tables created successfully!');
      } catch {
        console.log('\n❌ Failed to push schema. Check your DATABASE_URL.');
      }
      rl.close();
      return;
    }
  }

  console.log('Choose an option:');
  console.log('  1. Create a new Neon database (requires API key)');
  console.log('  2. Enter an existing PostgreSQL connection string');
  console.log('');

  const choice = await question('Enter your choice (1 or 2): ');

  let databaseUrl = '';

  if (choice === '1') {
    console.log('\n📋 To get your Neon API key:');
    console.log('   1. Go to https://console.neon.tech');
    console.log('   2. Sign up / Log in (free)');
    console.log('   3. Go to Settings → API Keys');
    console.log('   4. Create a new API key\n');

    const apiKey = await question('Enter your Neon API key: ');
    if (!apiKey.trim()) {
      console.log('❌ No API key provided. Exiting.');
      rl.close();
      return;
    }

    console.log('\n🏗️  Creating project on Neon...');

    try {
      // Create a Neon project
      const result = await neonApiRequest('POST', '/projects', {
        project: {
          name: 'mscs-academy',
        },
      }, apiKey.trim());

      if (result.status === 201 && result.data.project) {
        const project = result.data.project;
        console.log(`✅ Project created: ${project.name} (${project.id})`);

        // Get the connection string
        const connResult = await neonApiRequest('GET', `/projects/${project.id}/connection_string`, null, apiKey.trim());

        if (connResult.data && connResult.data.connection_string) {
          databaseUrl = connResult.data.connection_string;
          console.log(`✅ Connection string obtained`);
        } else {
          // Construct the connection string manually
          const host = project.connectionHost || `ep-${project.id}.us-east-2.aws.neon.tech`;
          databaseUrl = `postgresql://neondb_owner:${apiKey.trim().substring(0, 8)}@${host}/neondb?sslmode=require`;
          console.log('⚠️  Could not auto-get connection string. You may need to get it from the Neon console.');
        }
      } else {
        console.log('❌ Failed to create project:', JSON.stringify(result.data).substring(0, 200));
        console.log('\n💡 Try option 2 instead — create the project manually at https://console.neon.tech');
        rl.close();
        return;
      }
    } catch (error) {
      console.log('❌ Error creating project:', error.message);
      console.log('\n💡 Try option 2 instead — create the project manually at https://console.neon.tech');
      rl.close();
      return;
    }
  } else if (choice === '2') {
    console.log('\n📋 To get your connection string:');
    console.log('   1. Go to https://console.neon.tech → Your project → Dashboard');
    console.log('   2. Copy the connection string\n');

    databaseUrl = await question('Enter your PostgreSQL connection string: ');
    if (!databaseUrl.trim()) {
      console.log('❌ No connection string provided. Exiting.');
      rl.close();
      return;
    }
    databaseUrl = databaseUrl.trim();
  } else {
    console.log('❌ Invalid choice. Exiting.');
    rl.close();
    return;
  }

  // Save to .env
  const jwtSecret = existingEnv.JWT_SECRET || 'mscs-academy-jwt-secret-2026-production-key-change-deploy';
  const envContent = `DATABASE_URL=${databaseUrl}\nJWT_SECRET=${jwtSecret}\n`;
  fs.writeFileSync(envPath, envContent);
  console.log('\n✅ Saved DATABASE_URL to .env');

  // Also save to .env.local for Next.js
  fs.writeFileSync('.env.local', `DATABASE_URL=${databaseUrl}\n`);
  console.log('✅ Saved DATABASE_URL to .env.local');

  // Push the schema
  console.log('\n📊 Creating database tables...');
  try {
    execSync('DATABASE_URL="' + databaseUrl + '" npx prisma db push', { stdio: 'inherit' });
    console.log('\n✅ Database tables created successfully!');
  } catch (error) {
    console.log('\n❌ Failed to create tables. Error:', error.message);
    console.log('\nYou can try manually running:');
    console.log('  DATABASE_URL="your-url" npx prisma db push');
  }

  console.log('\n' + '='.repeat(60));
  console.log('🎉 Database setup complete!');
  console.log('='.repeat(60));
  console.log('\nNext steps for Vercel:');
  console.log('  1. Go to https://vercel.com → Your project → Settings → Environment Variables');
  console.log('  2. Add DATABASE_URL with this value:');
  console.log(`     ${databaseUrl.substring(0, 50)}...`);
  console.log('  3. Make sure to set it for Production, Preview, and Development');
  console.log('  4. Redeploy the project');
  console.log('\nThen visit your app and create the admin account!');

  rl.close();
}

main().catch(console.error);
