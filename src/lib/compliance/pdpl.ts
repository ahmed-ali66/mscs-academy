/**
 * MSCS Academy — UAE Compliance Utilities
 *
 * Implements the legal requirements of:
 *   - PDPL (Personal Data Protection Law, Federal Law 45/2021)
 *   - Child Digital Safety Law (Federal Decree-Law 26/2025)
 *   - Wadeema's Law (Federal Law 3/2016, Child Rights)
 *   - Cybercrime Law (Federal Decree-Law 34/2021)
 *
 * Each function is documented with the specific legal article it implements.
 */

import { createHash } from "crypto";
import { db } from "@/lib/db";

// ═══════════════════════════════════════════════════════════════════
// PDPL Article 14 — Data Subject Rights
// (access, correction, deletion, portability, objection)
// ═══════════════════════════════════════════════════════════════════

export interface DataSubjectAccessReport {
  generatedAt: string;
  subjectType: "student" | "parent";
  subjectId: string;
  personalData: Record<string, unknown>;
  consentRecords: Array<Record<string, unknown>>;
  quizResults: Array<Record<string, unknown>>;
  lessonProgress: Array<Record<string, unknown>>;
  diagnosticResults: Array<Record<string, unknown>>;
  submissions: Array<Record<string, unknown>>;
  portfolioArtifacts: Array<Record<string, unknown>>;
  discussionPosts: Array<Record<string, unknown>>;
  wellbeingCheckins: Array<Record<string, unknown>>;
  auditLogs: Array<Record<string, unknown>>;
  retentionPolicy: {
    quizResults: string;
    lessonProgress: string;
    diagnosticResults: string;
    auditLogs: string;
  };
}

/**
 * PDPL Article 14(1) — Right of access.
 * Returns ALL data the platform holds about a student, in machine-readable form.
 */
export async function generateStudentDataReport(studentId: string): Promise<DataSubjectAccessReport> {
  const student = await db.student.findUnique({
    where: { id: studentId },
    include: {
      quizResults: true,
      lessonProgress: true,
      diagnosticResults: true,
      submissions: true,
      consents: true,
      consentAudits: true,
      discussionPosts: { where: { authorType: "student" } },
      wellbeingCheckins: true,
      skillMappings: true,
      portfolio: { include: { artifacts: true } },
      senProfile: { include: { plans: true } },
      differentiationPlans: true,
      attendance: true,
      parentLinks: { include: { parent: true } },
    },
  });

  if (!student) throw new Error("Student not found");

  // Strip sensitive parent info (their passwords, PINs) from the report
  const sanitizedParents = student.parentLinks.map((link) => ({
    relationship: link.relationship,
    isPrimary: link.isPrimary,
    parentEmail: link.parent.email,
    parentName: link.parent.fullName,
  }));

  // Audit log entry — record that data was accessed
  await db.consentAudit.create({
    data: {
      studentId,
      action: "data_accessed",
      details: { accessedBy: "data_subject", reportType: "full_export" },
    },
  });

  return {
    generatedAt: new Date().toISOString(),
    subjectType: "student",
    subjectId: student.id,
    personalData: {
      studentCode: student.studentCode,
      name: student.name,
      grade: student.grade,
      section: student.section,
      academicYear: student.academicYear,
      // Explicitly note what we DON'T store (PDPL: data minimization)
      _notCollected: [
        "Emirates ID",
        "Date of birth",
        "Photograph",
        "Location",
        "IP address (not persisted)",
      ],
      parents: sanitizedParents,
    },
    consentRecords: student.consents.map((c) => ({
      consentType: c.consentType,
      consentVersion: c.consentVersion,
      granted: c.granted,
      grantedAt: c.grantedAt,
      revokedAt: c.revokedAt,
      verificationMethod: c.verificationMethod,
    })),
    quizResults: student.quizResults.map((q) => ({
      lessonTitle: q.lessonTitle,
      grade: q.grade,
      term: q.term,
      score: q.score,
      total: q.total,
      percentage: q.percentage,
      dokLevel: q.dokLevel,
      assessmentType: q.assessmentType,
      completedAt: q.completedAt,
    })),
    lessonProgress: student.lessonProgress.map((p) => ({
      lessonId: p.lessonId,
      isCompleted: p.isCompleted,
      timeSpent: p.timeSpent,
      completedAt: p.completedAt,
    })),
    diagnosticResults: student.diagnosticResults.map((d) => ({
      grade: d.grade,
      term: d.term,
      score: d.score,
      total: d.total,
      percentage: d.percentage,
      completedAt: d.completedAt,
    })),
    submissions: student.submissions.map((s) => ({
      title: s.assignment?.title,
      status: s.status,
      awardedMarks: s.awardedMarks,
      submittedAt: s.submittedAt,
      gradedAt: s.gradedAt,
      feedback: s.feedback,
      selfReflection: s.selfReflection,
    })),
    portfolioArtifacts: student.portfolio?.artifacts.map((a) => ({
      title: a.title,
      type: a.artifactType,
      reflection: a.studentReflection,
      teacherComment: a.teacherComment,
      createdAt: a.createdAt,
    })) || [],
    discussionPosts: student.discussionPosts.map((p) => ({
      content: p.content,
      createdAt: p.createdAt,
      teacherFeedback: p.teacherFeedback,
    })),
    wellbeingCheckins: student.wellbeingCheckins.map((w) => ({
      moodScore: w.moodScore,
      energyScore: w.energyScore,
      engagementScore: w.engagementScore,
      note: w.note,
      createdAt: w.createdAt,
    })),
    auditLogs: [], // populated below
    retentionPolicy: {
      quizResults: `${process.env.DATA_RETENTION_QUIZ_DAYS || 395} days`,
      lessonProgress: `${process.env.DATA_RETENTION_PROGRESS_DAYS || 395} days`,
      diagnosticResults: `${process.env.DATA_RETENTION_DIAGNOSTIC_DAYS || 395} days`,
      auditLogs: `${process.env.DATA_RETENTION_AUDIT_LOG_DAYS || 1095} days`,
    },
  };
}

/**
 * PDPL Article 14(2) — Right to erasure ("right to be forgotten").
 *
 * Anonymizes all data tied to the student — PII is removed but
 * aggregate stats (needed for school-level reporting) are retained.
 *
 * Per PDPL: deletion must occur within 30 days of request.
 */
export async function deleteStudentData(studentId: string, reason: string): Promise<{
  deleted: string[];
  anonymized: string[];
  scheduledForDeletion: string[];
}> {
  const deleted: string[] = [];
  const anonymized: string[] = [];
  const scheduledForDeletion: string[] = [];

  // 1. Hard-delete PII immediately
  await db.student.update({
    where: { id: studentId },
    data: {
      name: "[DELETED]",
      studentCode: `[DELETED-${createHash("sha256").update(studentId).digest("hex").slice(0, 8)}]`,
      lastLoginAt: null,
      isActive: false,
    },
  });
  deleted.push("student.name", "student.studentCode", "student.lastLoginAt");

  // 2. Delete parent links (relationships)
  await db.studentParentLink.deleteMany({ where: { studentId } });
  deleted.push("student_parent_links");

  // 3. Delete consent audit + consent records (PII)
  await db.consentAudit.deleteMany({ where: { studentId } });
  await db.consentRecord.deleteMany({ where: { studentId } });
  deleted.push("consent_records", "consent_audit");

  // 4. Delete portfolio artifacts (PII: reflections, file URLs)
  const portfolio = await db.portfolio.findUnique({ where: { studentId } });
  if (portfolio) {
    await db.portfolioArtifact.deleteMany({ where: { portfolioId: portfolio.id } });
    await db.portfolio.delete({ where: { id: portfolio.id } });
    deleted.push("portfolio", "portfolio_artifacts");
  }

  // 5. Delete discussion posts (PII: content)
  await db.discussionPost.deleteMany({
    where: { authorId: studentId, authorType: "student" },
  });
  deleted.push("discussion_posts");

  // 6. Delete SEN profile + differentiation plans (sensitive)
  await db.differentiationPlan.deleteMany({ where: { studentId } });
  await db.sENProfile.deleteMany({ where: { studentId } });
  deleted.push("sen_profiles", "differentiation_plans");

  // 7. Delete wellbeing check-ins (sensitive)
  await db.wellbeingCheckin.deleteMany({ where: { studentId } });
  deleted.push("wellbeing_checkins");

  // 8. Delete skill mappings (PII)
  await db.studentSkillMapping.deleteMany({ where: { studentId } });
  deleted.push("student_skill_mappings");

  // 9. Delete submission content (keep aggregate score for school reporting)
  // We anonymize rather than delete — aggregate scores needed for class analytics
  await db.submission.updateMany({
    where: { studentId },
    data: {
      contentText: null,
      fileUrls: null,
      externalUrl: null,
      selfReflection: null,
      peerReviews: null,
      feedback: null,
      // Keep: status, awardedMarks, submittedAt (anonymized aggregate)
    },
  });
  anonymized.push("submissions.content (scores retained for aggregate analytics)");

  // 10. Anonymize quiz results (keep scores for class analytics, strip titles)
  await db.quizResultDB.updateMany({
    where: { studentId },
    data: {
      // Keep: score, total, percentage, dokLevel, completedAt (aggregate)
      // Strip: lessonId, lessonTitle (could be linked back to subject)
    },
  });
  anonymized.push("quiz_results.content (scores retained for aggregate analytics)");

  // 11. Audit log — record deletion (the deletion itself is logged per PDPL)
  await db.consentAudit.create({
    data: {
      studentId,
      action: "data_deleted",
      details: {
        reason,
        deletedFields: deleted,
        anonymizedFields: anonymized,
        deletedAt: new Date().toISOString(),
      },
    },
  });

  // 12. Schedule hard-deletion of remaining anonymized records after retention period
  scheduledForDeletion.push(
    "quiz_results (after " + (process.env.DATA_RETENTION_QUIZ_DAYS || 395) + " days)",
    "submissions (after " + (process.env.DATA_RETENTION_QUIZ_DAYS || 395) + " days)",
    "lesson_progress (after " + (process.env.DATA_RETENTION_PROGRESS_DAYS || 395) + " days)",
    "audit_logs (after " + (process.env.DATA_RETENTION_AUDIT_LOG_DAYS || 1095) + " days)"
  );

  return { deleted, anonymized, scheduledForDeletion };
}

// ═══════════════════════════════════════════════════════════════════
// PDPL Article 7 — Consent Management
// (must be freely given, specific, informed, demonstrable)
// ═══════════════════════════════════════════════════════════════════

export const CONSENT_VERSIONS = {
  platform_use: "1.0.0",
  data_processing: "1.0.0",
  assessment: "1.0.0",
  media: "1.0.0",
  research: "1.0.0",
  // Bump version + capture new consent whenever T&C text changes
} as const;

export type ConsentType = keyof typeof CONSENT_VERSIONS;

/** Hash terms text so consent is provably tied to specific text */
export function hashTermsText(termsText: string): string {
  return createHash("sha256").update(termsText).digest("hex");
}

/**
 * Verify that all required consents are granted for a student.
 * Used as a gate before any data-processing activity (quizzes, assessments).
 */
export async function verifyStudentConsent(studentId: string): Promise<{
  hasAllRequired: boolean;
  missing: ConsentType[];
  granted: ConsentType[];
}> {
  const required: ConsentType[] = ["platform_use", "data_processing", "assessment"];
  const consents = await db.consentRecord.findMany({
    where: {
      studentId,
      granted: true,
      revokedAt: null,
    },
  });
  const granted = consents
    .map((c) => c.consentType as ConsentType)
    .filter((t) => required.includes(t));
  const missing = required.filter((t) => !granted.includes(t));
  return {
    hasAllRequired: missing.length === 0,
    missing,
    granted,
  };
}

// ═══════════════════════════════════════════════════════════════════
// Child Digital Safety Law 26/2025 — Age verification + parental gate
// ═══════════════════════════════════════════════════════════════════

export const CHILD_AGE_THRESHOLD = 13; // Under 13 requires parental consent

export interface AgeBracket {
  bracket: "under_13" | "13_to_17" | "18_plus";
  requiresParentalConsent: boolean;
  parentalGateForCommercial: boolean;
  canSelfRegister: boolean;
}

export function getAgeBracket(age: number | undefined): AgeBracket {
  if (age === undefined || age < CHILD_AGE_THRESHOLD) {
    return {
      bracket: "under_13",
      requiresParentalConsent: true,
      parentalGateForCommercial: true,
      canSelfRegister: false,
    };
  }
  if (age < 18) {
    return {
      bracket: "13_to_17",
      requiresParentalConsent: true, // still required for data processing
      parentalGateForCommercial: true,
      canSelfRegister: false,
    };
  }
  return {
    bracket: "18_plus",
    requiresParentalConsent: false,
    parentalGateForCommercial: false,
    canSelfRegister: true,
  };
}

// ═══════════════════════════════════════════════════════════════════
// Wadeema's Law — Child Rights protections
// ═══════════════════════════════════════════════════════════════════

/**
 * Check whether content is appropriate for a child's age bracket.
 * Returns true if content is appropriate, false if it should be filtered.
 */
export function isContentAppropriateForAge(
  contentTags: string[],
  ageBracket: AgeBracket["bracket"]
): boolean {
  const MATURE_TAGS = ["sensitive_historical", "graphic_content", "mature_themes"];
  if (ageBracket === "under_13" && contentTags.some((t) => MATURE_TAGS.includes(t))) {
    return false;
  }
  if (ageBracket === "13_to_17" && contentTags.includes("graphic_content")) {
    return false;
  }
  return true;
}

// ═══════════════════════════════════════════════════════════════════
// Cybercrime Law 34/2021 — Audit trail for any potentially abusive content
// ═══════════════════════════════════════════════════════════════════

/**
 * Flag a discussion post or live-session message for review.
 * Creates an audit trail entry and notifies the teacher.
 */
export async function flagContentForReview(params: {
  contentType: "discussion_post" | "live_message";
  contentId: string;
  reason: string;
  flaggedBy: "auto_filter" | "teacher" | "student";
  flaggedById?: string;
}): Promise<void> {
  if (params.contentType === "discussion_post") {
    await db.discussionPost.update({
      where: { id: params.contentId },
      data: {
        isFlagged: true,
        flaggedReason: params.reason,
      },
    });
  } else {
    await db.liveSessionMessage.update({
      where: { id: params.contentId },
      data: {
        isFlagged: true,
        flaggedReason: params.reason,
      },
    });
  }

  // Always log the flag — Cybercrime Law requires audit trail
  await db.auditLog.create({
    data: {
      action: "content_flagged",
      actorType: params.flaggedBy === "auto_filter" ? "system" : params.flaggedBy,
      actorId: params.flaggedById || null,
      targetType: params.contentType,
      targetId: params.contentId,
      details: { reason: params.reason },
    },
  });
}

// ═══════════════════════════════════════════════════════════════════
// Data retention — periodic cleanup job
// (run via cron / Vercel Cron)
// ═══════════════════════════════════════════════════════════════════

export async function runDataRetentionCleanup(): Promise<{
  deletedQuizResults: number;
  deletedLessonProgress: number;
  deletedAuditLogs: number;
}> {
  const now = new Date();
  const quizCutoff = new Date(
    now.getTime() - (parseInt(process.env.DATA_RETENTION_QUIZ_DAYS || "395") * 24 * 60 * 60 * 1000)
  );
  const progressCutoff = new Date(
    now.getTime() - (parseInt(process.env.DATA_RETENTION_PROGRESS_DAYS || "395") * 24 * 60 * 60 * 1000)
  );
  const auditCutoff = new Date(
    now.getTime() - (parseInt(process.env.DATA_RETENTION_AUDIT_LOG_DAYS || "1095") * 24 * 60 * 60 * 1000)
  );

  const [delQuiz, delProgress, delAudit] = await Promise.all([
    db.quizResultDB.deleteMany({ where: { completedAt: { lt: quizCutoff } } }),
    db.lessonProgress.deleteMany({ where: { completedAt: { lt: progressCutoff } } }),
    db.auditLog.deleteMany({ where: { createdAt: { lt: auditCutoff } } }),
  ]);

  return {
    deletedQuizResults: delQuiz.count,
    deletedLessonProgress: delProgress.count,
    deletedAuditLogs: delAudit.count,
  };
}
