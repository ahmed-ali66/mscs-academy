/**
 * MSCS Academy — Irtiq'aa Framework Data
 *
 * Maps directly to ADEK's Irtiq'aa inspection framework domains.
 * Used by:
 *   - Teacher self-assessment dashboard
 *   - Evidence vault (IrtiqaaEvidence model)
 *   - Inspection-ready report generation
 *
 * Each domain has:
 *   - Standard ADEK 1-5 rating scale (1=Developing, 2=Adequate,
 *     3=Good, 4=Outstanding/Very Good, 5=Outstanding+)
 *     — Note: ADEK uses "Outstanding" as the top classification;
 *     scale here uses 4=Outstanding per spec.
 *   - Specific indicators that inspectors look for
 *   - Evidence types the platform can produce to demonstrate each
 */

export interface IrtiqaaIndicator {
  code: string;
  description: string;
  evidenceTypes: string[];
}

export interface IrtiqaaDomain {
  code: string;
  name: string;
  description: string;
  targetLevel: number; // 1-5 (4 = Outstanding, our target)
  indicators: IrtiqaaIndicator[];
}

export const IRTIQAA_DOMAINS: IrtiqaaDomain[] = [
  {
    code: "leadership",
    name: "Leadership & Management",
    description:
      "Vision, governance, and capacity to drive continuous improvement. Inspectors look for clear strategic direction, distributed leadership, and data-informed decision-making.",
    targetLevel: 4,
    indicators: [
      {
        code: "L1",
        description: "Clear educational vision communicated to all stakeholders",
        evidenceTypes: ["policy_doc", "parent_communication"],
      },
      {
        code: "L2",
        description: "Self-evaluation is accurate, honest, and drives improvement",
        evidenceTypes: ["data_report", "self_assessment"],
      },
      {
        code: "L3",
        description: "Resources allocated strategically to priorities",
        evidenceTypes: ["data_report"],
      },
      {
        code: "L4",
        description: "Safeguarding, welfare, and H&S are embedded",
        evidenceTypes: ["policy_doc"],
      },
    ],
  },
  {
    code: "teaching",
    name: "Teaching & Learning",
    description:
      "Quality of instruction, lesson design, and student engagement. Inspectors look for active learning, differentiation, and 21st-century skill development.",
    targetLevel: 4,
    indicators: [
      {
        code: "T1",
        description: "Lessons have clear objectives and success criteria",
        evidenceTypes: ["lesson_plan"],
      },
      {
        code: "T2",
        description: "Active learning dominates (80/20 student-teacher ratio)",
        evidenceTypes: ["lesson_plan", "student_artifact"],
      },
      {
        code: "T3",
        description: "Differentiation meets the needs of all learners (SEN, gifted, EAL)",
        evidenceTypes: ["lesson_plan", "data_report"],
      },
      {
        code: "T4",
        description: "Technology is used purposefully to enhance learning",
        evidenceTypes: ["lesson_plan", "student_artifact"],
      },
      {
        code: "T5",
        description: "21st-century skills (4Cs) are explicitly developed",
        evidenceTypes: ["student_artifact", "data_report"],
      },
    ],
  },
  {
    code: "assessment",
    name: "Assessment & Curriculum",
    description:
      "Quality and use of assessment data to inform teaching. Curriculum breadth, balance, and UAE/MSCS alignment.",
    targetLevel: 4,
    indicators: [
      {
        code: "A1",
        description: "Diagnostic, formative, and summative assessments are used appropriately",
        evidenceTypes: ["data_report", "lesson_plan"],
      },
      {
        code: "A2",
        description: "DOK distribution matches 30/30/30/10 target",
        evidenceTypes: ["data_report"],
      },
      {
        code: "A3",
        description: "Rubric-based assessment is used for authentic tasks",
        evidenceTypes: ["student_artifact", "data_report"],
      },
      {
        code: "A4",
        description: "Student self- and peer-assessment is embedded",
        evidenceTypes: ["student_artifact"],
      },
    ],
  },
  {
    code: "wellbeing",
    name: "Student Wellbeing & Personal Development",
    description:
      "Student voice, emotional health, character development, and UAE national identity.",
    targetLevel: 4,
    indicators: [
      {
        code: "W1",
        description: "Students feel safe, respected, and heard",
        evidenceTypes: ["data_report"],
      },
      {
        code: "W2",
        description: "Character and values education is embedded",
        evidenceTypes: ["lesson_plan", "student_artifact"],
      },
      {
        code: "W3",
        description: "UAE national identity and heritage are celebrated",
        evidenceTypes: ["student_artifact", "policy_doc"],
      },
      {
        code: "W4",
        description: "Student wellbeing check-ins flag at-risk students for follow-up",
        evidenceTypes: ["data_report"],
      },
    ],
  },
  {
    code: "innovation",
    name: "Innovation & Future Readiness",
    description:
      "Use of innovative pedagogy, future skills, and continuous improvement culture.",
    targetLevel: 4,
    indicators: [
      {
        code: "I1",
        description: "Innovative pedagogy (PBL, inquiry, gamification) is practiced",
        evidenceTypes: ["lesson_plan", "student_artifact"],
      },
      {
        code: "I2",
        description: "Student portfolios demonstrate growth over time",
        evidenceTypes: ["student_artifact"],
      },
      {
        code: "I3",
        description: "Digital literacy is explicitly taught and assessed",
        evidenceTypes: ["lesson_plan", "data_report"],
      },
      {
        code: "I4",
        description: "Distance + in-class learning is integrated seamlessly",
        evidenceTypes: ["lesson_plan", "data_report"],
      },
    ],
  },
  {
    code: "protection",
    name: "Protection, Care & Inclusion",
    description:
      "Safeguarding, child protection, and inclusive education for all learners including SEN.",
    targetLevel: 4,
    indicators: [
      {
        code: "P1",
        description: "All students have documented SEN profiles where applicable",
        evidenceTypes: ["policy_doc", "data_report"],
      },
      {
        code: "P2",
        description: "Differentiation plans (Tier 1/2/3) are implemented",
        evidenceTypes: ["lesson_plan", "data_report"],
      },
      {
        code: "P3",
        description: "Child Digital Safety Law compliance (parental consent, age verification)",
        evidenceTypes: ["policy_doc", "data_report"],
      },
      {
        code: "P4",
        description: "Anti-bullying, anti-cyberbullying measures are embedded",
        evidenceTypes: ["policy_doc", "data_report"],
      },
    ],
  },
  {
    code: "parent_engagement",
    name: "Parent & Community Engagement",
    description:
      "Quality of communication with parents and partnership with the wider community.",
    targetLevel: 4,
    indicators: [
      {
        code: "PE1",
        description: "Parents have real-time visibility into their child's progress",
        evidenceTypes: ["data_report", "parent_communication"],
      },
      {
        code: "PE2",
        description: "Parental consent and rights (PDPL) are fully respected",
        evidenceTypes: ["policy_doc", "data_report"],
      },
      {
        code: "PE3",
        description: "Two-way communication channels are effective",
        evidenceTypes: ["parent_communication"],
      },
    ],
  },
];

// ─── Rating scale ─────────────────────────────────────────────────
export const IRTIQAA_SCALE = [
  { level: 1, label: "Developing", color: "#B5532A" },
  { level: 2, label: "Adequate", color: "#C68A2E" },
  { level: 3, label: "Good", color: "#7C5B2E" },
  { level: 4, label: "Outstanding", color: "#4A6B3E" },
  { level: 5, label: "Outstanding+", color: "#0F5C5E" },
] as const;

export function getScaleLabel(level: number): string {
  return IRTIQAA_SCALE.find((s) => s.level === level)?.label || "Unknown";
}

export function getScaleColor(level: number): string {
  return IRTIQAA_SCALE.find((s) => s.level === level)?.color || "#8B7E63";
}
