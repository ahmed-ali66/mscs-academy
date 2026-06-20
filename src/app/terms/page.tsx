import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "MSCS Academy Terms & Conditions for parents, students, and teachers using the platform.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-background">
      <article className="max-w-3xl mx-auto px-6 py-16">
        <header className="mb-10 pb-6 border-b border-[var(--border)]">
          <p className="text-[11px] uppercase tracking-[0.25em] font-semibold text-[var(--bronze)] mb-2">
            Last updated: August 2026
          </p>
          <h1 className="text-4xl font-bold text-[var(--ink)] mb-2" style={{ fontFamily: "var(--font-serif)" }}>
            Terms &amp; Conditions
          </h1>
          <p className="text-[var(--muted-foreground)] italic">
            MSCS Academy — operated by Mr. Ahmed Ali
          </p>
        </header>

        <div className="space-y-8 text-[var(--ink)] leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold mb-3" style={{ fontFamily: "var(--font-serif)" }}>
              <span className="text-[var(--bronze)] mr-2">1.</span>
              Parties
            </h2>
            <p>
              These Terms are between <strong>Mr. Ahmed Ali</strong>
              (&ldquo;Provider&rdquo;), an individual educator licensed by ADEK,
              and the Parent/Guardian (&ldquo;Account Holder&rdquo;) who is 18
              years or older and agrees to these Terms on behalf of their child
              (&ldquo;Student&rdquo;).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3" style={{ fontFamily: "var(--font-serif)" }}>
              <span className="text-[var(--bronze)] mr-2">2.</span>
              Nature of the Platform
            </h2>
            <p>
              The Platform is a <strong>free educational supplement</strong>{" "}
              to the ADEK-approved MSCS curriculum. It is <strong>not</strong>{" "}
              a replacement for school instruction, an official ADEK resource,
              or a substitute for the MoE-approved textbook. All content is
              teacher-created study material.
            </p>
            <p className="mt-2">
              The disclaimer &ldquo;Teacher-Created Study Material — Not an
              Official ADEK Resource&rdquo; appears on every page of the
              Platform.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3" style={{ fontFamily: "var(--font-serif)" }}>
              <span className="text-[var(--bronze)] mr-2">3.</span>
              User Responsibilities
            </h2>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>The Student will use the Platform only for educational purposes.</li>
              <li>The Student will not share their access code with others.</li>
              <li>The Parent will supervise use for Students under 13.</li>
              <li>The Parent will notify the Provider of any change in consent preferences.</li>
              <li>Users will not attempt to access other users&rsquo; data or disrupt Platform operation.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3" style={{ fontFamily: "var(--font-serif)" }}>
              <span className="text-[var(--bronze)] mr-2">4.</span>
              Monetization (Zero Cost to Students)
            </h2>
            <p>
              The Platform is <strong>always free for students</strong>. There
              is no path by which a student is ever asked to pay. Optional
              premium features (advanced teacher analytics, parent detailed
              reports) may be offered as paid upgrades to teachers or parents,
              never to students.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3" style={{ fontFamily: "var(--font-serif)" }}>
              <span className="text-[var(--bronze)] mr-2">5.</span>
              Intellectual Property
            </h2>
            <p>
              All Platform content (lessons, activities, quizzes, design) is
              the intellectual property of Mr. Ahmed Ali. Curriculum content is
              aligned with — but does not reproduce — the MoE-approved MSCS
              textbook. Student submissions remain the student&rsquo;s
              intellectual property; the Provider has a limited license to use
              them for educational and assessment purposes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3" style={{ fontFamily: "var(--font-serif)" }}>
              <span className="text-[var(--bronze)] mr-2">6.</span>
              Privacy
            </h2>
            <p>
              Our handling of personal data is described in the{" "}
              <a href="/privacy" className="text-[var(--teal)] underline">
                Privacy Policy
              </a>
              , which is incorporated into these Terms by reference.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3" style={{ fontFamily: "var(--font-serif)" }}>
              <span className="text-[var(--bronze)] mr-2">7.</span>
              Limitation of Liability
            </h2>
            <p>
              The Platform is provided &ldquo;as is&rdquo; without warranty of
              any kind. To the maximum extent permitted by UAE law, the
              Provider shall not be liable for indirect, incidental, or
              consequential damages arising from use of the Platform. The
              Provider&rsquo;s total liability shall not exceed the amount paid
              by the Account Holder to the Provider in the preceding 12 months
              (which, for the free tier, is zero).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3" style={{ fontFamily: "var(--font-serif)" }}>
              <span className="text-[var(--bronze)] mr-2">8.</span>
              Termination
            </h2>
            <p>
              Either party may terminate this agreement at any time. Upon
              termination, all of the Student&rsquo;s data will be deleted
              within 30 days per the Privacy Policy, except where retention is
              required by law (e.g., audit logs).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3" style={{ fontFamily: "var(--font-serif)" }}>
              <span className="text-[var(--bronze)] mr-2">9.</span>
              Governing Law
            </h2>
            <p>
              These Terms are governed by the laws of the United Arab
              Emirates. Any disputes shall be resolved in the courts of Abu
              Dhabi, UAE.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3" style={{ fontFamily: "var(--font-serif)" }}>
              <span className="text-[var(--bronze)] mr-2">10.</span>
              Contact
            </h2>
            <p>
              For questions about these Terms, contact Mr. Ahmed Ali at{" "}
              <a
                href="https://mr-ahmed-ali.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--teal)] underline"
              >
                mr-ahmed-ali.vercel.app
              </a>{" "}
              or the Data Protection Officer at{" "}
              <a
                href={`mailto:${process.env.DPO_EMAIL || "dpo@yourdomain.com"}`}
                className="text-[var(--teal)] underline"
              >
                {process.env.DPO_EMAIL || "dpo@yourdomain.com"}
              </a>.
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}
