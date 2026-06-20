import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "MSCS Academy Privacy Policy — compliant with UAE Personal Data Protection Law (PDPL), Child Digital Safety Law 26/2025, and Wadeema's Law.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-background">
      <article className="max-w-3xl mx-auto px-6 py-16 prose prose-stone">
        <header className="mb-10 pb-6 border-b border-[var(--border)]">
          <p className="text-[11px] uppercase tracking-[0.25em] font-semibold text-[var(--bronze)] mb-2">
            Last updated: August 2026
          </p>
          <h1 className="text-4xl font-bold text-[var(--ink)] mb-2" style={{ fontFamily: "var(--font-serif)" }}>
            Privacy Policy
          </h1>
          <p className="text-[var(--muted-foreground)] italic">
            MSCS Academy — operated by Mr. Ahmed Ali, ADEK-licensed educator
          </p>
        </header>

        <section className="space-y-6 text-[var(--ink)] leading-relaxed">
          <p className="text-lg">
            This Privacy Policy explains how MSCS Academy (&ldquo;we&rdquo;,
            &ldquo;the Platform&rdquo;) collects, uses, and protects your
            personal data, in compliance with:
          </p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>UAE Personal Data Protection Law (PDPL, Federal Law 45/2021)</li>
            <li>Child Digital Safety Law (Federal Decree-Law 26/2025)</li>
            <li>Wadeema&rsquo;s Law (Federal Law 3/2016, Child Rights)</li>
            <li>UAE Cybercrime Law (Federal Decree-Law 34/2021)</li>
          </ul>
        </section>

        <Section title="1. Data We Collect" number="1">
          <p>
            We follow the principle of <strong>data minimization</strong> (PDPL
            Article 5). We collect only the data necessary for the educational
            function of the Platform.
          </p>
          <h4 className="font-semibold mt-4 mb-2">Data we DO collect:</h4>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li><strong>Student code</strong> — a teacher-generated alphanumeric code (e.g., MSCS-7A-2026-014). We do NOT collect Emirates ID, real names beyond what the teacher enters, photographs, or dates of birth.</li>
            <li><strong>Quiz & assessment scores</strong> — to track learning progress.</li>
            <li><strong>Lesson completion data</strong> — which lessons the student has viewed and completed.</li>
            <li><strong>Assignment submissions</strong> — text, files, and reflections submitted for grading.</li>
            <li><strong>Parent email & phone</strong> — for consent management and progress communication.</li>
            <li><strong>Audit logs</strong> — login times, IP addresses (transient), and key actions.</li>
          </ul>
          <h4 className="font-semibold mt-4 mb-2">Data we DO NOT collect:</h4>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>Emirates ID numbers</li>
            <li>Date of birth (age bracket only: under-13 / 13-17 / 18+)</li>
            <li>Photographs or biometric data</li>
            <li>Precise location data</li>
            <li>IP addresses (not persisted — used transiently for security only)</li>
            <li>Device identifiers</li>
            <li>Browsing history outside the Platform</li>
          </ul>
        </Section>

        <Section title="2. Legal Basis for Processing" number="2">
          <p>Per PDPL Article 4, we process personal data on the following legal bases:</p>
          <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
            <li><strong>Consent</strong> (Article 7) — for all student data, given by the parent or guardian.</li>
            <li><strong>Legitimate interest</strong> (Article 4) — for aggregate usage analytics that do not identify individuals.</li>
            <li><strong>Legal obligation</strong> (Article 4) — for retaining certain records as required by ADEK or other UAE authorities.</li>
          </ul>
        </Section>

        <Section title="3. Your Rights (PDPL Article 14)" number="3">
          <p>As a data subject (or parent/guardian of a minor data subject), you have the right to:</p>
          <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
            <li><strong>Access</strong> — request a complete export of your data via <code>GET /api/parent/data-access</code>.</li>
            <li><strong>Correction</strong> — request correction of inaccurate data.</li>
            <li><strong>Erasure</strong> — request deletion of your data via <code>POST /api/parent/data-delete</code>. Deletion occurs within 30 days.</li>
            <li><strong>Portability</strong> — receive your data in a structured, machine-readable JSON format.</li>
            <li><strong>Objection</strong> — object to specific processing activities.</li>
            <li><strong>Withdraw consent</strong> — at any time, without affecting the lawfulness of prior processing.</li>
          </ul>
          <p className="mt-3">
            To exercise these rights, contact our Data Protection Officer at{" "}
            <a
              href={`mailto:${process.env.DPO_EMAIL || "dpo@yourdomain.com"}`}
              className="text-[var(--teal)] underline"
            >
              {process.env.DPO_EMAIL || "dpo@yourdomain.com"}
            </a>.
          </p>
        </Section>

        <Section title="4. Data Retention" number="4">
          <p>We retain data only as long as necessary for the purposes described:</p>
          <table className="w-full text-sm border border-[var(--border)] mt-3">
            <thead className="bg-[var(--muted)]">
              <tr>
                <th className="text-left p-2 border-b border-[var(--border)]">Data Type</th>
                <th className="text-left p-2 border-b border-[var(--border)]">Retention Period</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="p-2 border-b border-[var(--border)]">Quiz & assessment results</td><td className="p-2 border-b border-[var(--border)]">Academic year + 1 month</td></tr>
              <tr><td className="p-2 border-b border-[var(--border)]">Lesson progress</td><td className="p-2 border-b border-[var(--border)]">Academic year + 1 month</td></tr>
              <tr><td className="p-2 border-b border-[var(--border)]">Diagnostic results</td><td className="p-2 border-b border-[var(--border)]">Academic year + 1 month</td></tr>
              <tr><td className="p-2 border-b border-[var(--border)]">Audit logs</td><td className="p-2 border-b border-[var(--border)]">3 years (legal requirement)</td></tr>
              <tr><td className="p-2 border-b border-[var(--border)]">Consent records</td><td className="p-2 border-b border-[var(--border)]">Duration of account + 3 years</td></tr>
              <tr><td className="p-2">Account (after deactivation)</td><td className="p-2">30 days, then hard delete</td></tr>
            </tbody>
          </table>
        </Section>

        <Section title="5. Child Protection (Child Digital Safety Law 26/2025)" number="5">
          <p>
            For users under 13 years old, we require explicit parental consent
            before any data processing. Parents verify their identity via email
            or phone OTP, and must confirm they are 18 years or older.
          </p>
          <p className="mt-2">
            Parents have a dedicated dashboard with full visibility into their
            child&rsquo;s activity, and can revoke consent at any time —
            triggering data deletion per Section 3 above.
          </p>
        </Section>

        <Section title="6. Security Measures" number="6">
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>All data encrypted in transit (TLS 1.3) and at rest (AES-256 via database provider)</li>
            <li>Passwords hashed with bcrypt (12 rounds)</li>
            <li>JWT tokens signed with HS256, 8-hour expiry</li>
            <li>Content-Security-Policy enforced on all routes</li>
            <li>Rate limiting on all authentication endpoints</li>
            <li>CSRF protection on all state-changing requests</li>
            <li>Strict security headers (HSTS, X-Frame-Options: DENY, etc.)</li>
            <li>No third-party analytics or advertising trackers</li>
          </ul>
        </Section>

        <Section title="7. Data Breach Notification" number="7">
          <p>
            Per PDPL, in the event of a data breach affecting your personal
            data, we will notify the UAE Data Office and affected data subjects
            within 72 hours of becoming aware of the breach.
          </p>
        </Section>

        <Section title="8. Changes to This Policy" number="8">
          <p>
            We will notify all parents via email of any material changes to
            this Privacy Policy. Continued use after the effective date
            constitutes acceptance, but we will re-request explicit consent
            for any change that materially expands the data we collect or
            the purposes for which we use it.
          </p>
        </Section>

        <Section title="9. Contact" number="9">
          <p>
            <strong>Data Protection Officer:</strong>{" "}
            <a
              href={`mailto:${process.env.DPO_EMAIL || "dpo@yourdomain.com"}`}
              className="text-[var(--teal)] underline"
            >
              {process.env.DPO_EMAIL || "dpo@yourdomain.com"}
            </a>
          </p>
          <p>
            <strong>Operator:</strong> Mr. Ahmed Ali — ADEK-licensed MSCS teacher
          </p>
          <p>
            <strong>Complaints:</strong> You may lodge a complaint with the
            UAE Data Office if you believe your rights under PDPL have been
            infringed.
          </p>
        </Section>
      </article>
    </main>
  );
}

function Section({ title, number, children }: { title: string; number: string; children: React.ReactNode }) {
  return (
    <section className="mt-10">
      <h2 className="text-2xl font-bold text-[var(--ink)] mb-3" style={{ fontFamily: "var(--font-serif)" }}>
        <span className="text-[var(--bronze)] mr-2">{number}.</span>
        {title.replace(/^\d+\.\s*/, "")}
      </h2>
      <div className="text-[var(--ink)] leading-relaxed space-y-3">{children}</div>
    </section>
  );
}
