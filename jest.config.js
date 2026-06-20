const nextJest = require("next/jest.js");

const createJestConfig = nextJest({
  dir: "./",
});

/** @type {import('jest').Config} */
const config = {
  coverageProvider: "v8",
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  testPathIgnorePatterns: [
    "<rootDir>/node_modules/",
    "<rootDir>/.next/",
    "<rootDir>/e2e/",
    "<rootDir>/examples/",
    "<rootDir>/skills/",
  ],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  collectCoverageFrom: [
    "src/lib/**/*.ts",
    "src/lib/**/*.tsx",
    "!src/lib/**/*.d.ts",
    "!src/lib/db.ts",
    "!src/lib/auth/**",
    "!src/lib/compliance/**",
  ],
  coverageThreshold: {
    global: {
      branches: 20,
      functions: 20,
      lines: 25,
      statements: 25,
    },
  },
  transform: {
    "^.+\\.(ts|tsx)$": ["babel-jest", { presets: ["next/babel"] }],
  },
};

module.exports = createJestConfig(config);
