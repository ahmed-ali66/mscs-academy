/**
 * English UI messages — primary MSCS Academy UI chrome.
 * Lesson content has its own per-lesson content files; this file is
 * only for shared navigation, buttons, and page metadata.
 */
export const en = {
  // Brand
  brand: {
    name: "MSCS Academy",
    tagline: "Making Learning Active, Not Passive",
    subtitle: "Moral, Social & Cultural Studies",
    interactivePlatform: "An interactive platform for Grades 6–9, grounded in UAE heritage",
  },
  // Navigation
  nav: {
    home: "Home",
    about: "About",
    login: "Login",
    studentLogin: "Student Login",
    teacherLogin: "Teacher Login",
    adminLogin: "Admin Login",
    parentalConsent: "Parental Consent",
    privacy: "Privacy Policy",
    terms: "Terms & Conditions",
  },
  // Landing
  landing: {
    whyTitle: "Why MSCS Academy?",
    meetInstructor: "Meet Your Instructor",
    instructorDesc:
      "ADEK-licensed MSCS teacher specializing in interactive, 21st-century pedagogy for UAE Grades 6–9. Grounded in Islamic scholarship and UAE heritage.",
    footerTagline: "Teacher-Created Study Material",
    copyright: "© 2026 Mr. Ahmed Ali. All rights reserved.",
  },
  // Features
  features: {
    f1Title: "Critical Thinking",
    f1Desc: "DOK-leveled activities that move beyond recall into analysis, evaluation, and creation.",
    f2Title: "21st-Century Skills",
    f2Desc: "The 4Cs (Critical thinking, Collaboration, Creativity, Communication) tagged on every lesson.",
    f3Title: "Interactive Maps",
    f3Desc: "Real Leaflet maps for geography lessons — explore regions, trade routes, and civilizations.",
    f4Title: "Time-Bound Activities",
    f4Desc: "Every activity has a timer, enforcing the 80/20 student-teacher ratio ADEK expects.",
    f5Title: "Authentic Assessment",
    f5Desc: "Rubric-based grading, portfolios, and self-reflection — not just multiple-choice quizzes.",
    f6Title: "Inclusive Design",
    f6Desc: "SEN profiles and differentiation plans for every learner — Irtiq'aa protection domain.",
  },
  // Auth
  auth: {
    welcomeBack: "Welcome back",
    signIn: "Sign in",
    signOut: "Sign out",
    studentCode: "Student Access Code",
    teacherUsername: "Teacher Username or Email",
    adminUsername: "Admin Username",
    password: "Password",
    forgotPassword: "Forgot password?",
    noAccount: "Don't have an account?",
    needConsent: "Your parent needs to grant consent before you can take assessments.",
  },
  // Consent
  consent: {
    title: "Parental Consent",
    intro:
      "UAE Child Digital Safety Law 26/2025 requires explicit parental consent for students under 13. Please verify your identity and review the terms below.",
    parentName: "Parent/Guardian Full Name",
    parentEmail: "Parent/Guardian Email",
    parentPhone: "Parent/Guardian Phone (UAE)",
    studentCode: "Student Access Code (provided by teacher)",
    verifyAge: "I confirm I am 18 years or older",
    agreeTerms: "I have read and agree to the Terms & Conditions and Privacy Policy",
    grantConsent: "Grant Consent",
    revokeConsent: "Revoke Consent",
    revokeWarning:
      "Revoking consent will permanently delete your child's data within 30 days, per PDPL Article 14.",
  },
  // Dashboard
  dashboard: {
    welcome: "Welcome, {name}",
    overview: "Overview",
    students: "Students",
    lessons: "Lessons",
    quizzes: "Quizzes",
    assignments: "Assignments",
    liveClasses: "Live Classes",
    discussions: "Discussions",
    portfolio: "Portfolio",
    analytics: "Analytics",
    irtiqaa: "Irtiq'aa Self-Assessment",
    wellbeing: "Wellbeing",
    settings: "Settings",
  },
  // Common
  common: {
    loading: "Loading…",
    save: "Save",
    cancel: "Cancel",
    delete: "Delete",
    edit: "Edit",
    close: "Close",
    back: "Back",
    next: "Next",
    previous: "Previous",
    submit: "Submit",
    confirm: "Confirm",
    yes: "Yes",
    no: "No",
    search: "Search",
    filter: "Filter",
    sortBy: "Sort by",
    noResults: "No results found",
    error: "Something went wrong",
    success: "Success",
    retry: "Try again",
  },
  // Errors
  errors: {
    required: "This field is required",
    invalidEmail: "Please enter a valid email address",
    invalidPhone: "Please enter a valid UAE phone number",
    passwordTooShort: "Password must be at least 8 characters",
    rateLimited: "Too many attempts. Please try again later.",
    unauthorized: "You are not authorized to perform this action",
    consentRequired: "Parental consent is required before this action",
  },
} as const;

export type Messages = typeof en;
