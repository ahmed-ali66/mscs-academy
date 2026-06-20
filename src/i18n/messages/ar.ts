/**
 * Arabic UI messages — نسخة عربية لواجهة المنصة
 *
 * Note: This is the UI chrome only. Lesson content (readings, quizzes)
 * remains in English by default — Arabic content translation is a
 * separate per-lesson effort and is tracked as a follow-up task.
 */
import type { Messages } from "./en";

export const ar: Messages = {
  // Brand
  brand: {
    name: "أكاديمية MSCS",
    tagline: "نجعل التعلم نشطًا، لا سلبيًا",
    subtitle: "الدراسات الأخلاقية والاجتماعية والثقافية",
    interactivePlatform: "منصة تفاعلية للصفوف 6–9، متجذرة في تراث الإمارات",
  },
  // Navigation
  nav: {
    home: "الرئيسية",
    about: "حول",
    login: "تسجيل الدخول",
    studentLogin: "دخول الطالب",
    teacherLogin: "دخول المعلم",
    adminLogin: "دخول المسؤول",
    parentalConsent: "موافقة الوالدين",
    privacy: "سياسة الخصوصية",
    terms: "الشروط والأحكام",
  },
  // Landing
  landing: {
    whyTitle: "لماذا أكاديمية MSCS؟",
    meetInstructor: "تعرّف على معلمك",
    instructorDesc:
      "معلم MSCS مرخّص من ADEK متخصص في التربوية التفاعلية للقرن الحادي والعشرين لطلاب الإمارات من الصفوف 6–9. متجذر في العلم الإسلامي وتراث الإمارات.",
    footerTagline: "مادة دراسية من إعداد المعلم",
    copyright: "© 2026 الأستاذ أحمد علي. جميع الحقوق محفوظة.",
  },
  // Features
  features: {
    f1Title: "التفكير النقدي",
    f1Desc: "أنشطة مصنّفة حسب مستويات DOK تتجاوز الاستظهار إلى التحليل والتقييم والإبداع.",
    f2Title: "مهارات القرن 21",
    f2Desc: "مهارات الـ 4C (التفكير النقدي، التعاون، الإبداع، التواصل) مُوسومة على كل درس.",
    f3Title: "خرائط تفاعلية",
    f3Desc: "خرائط Leaflet حقيقية لدروس الجغرافيا — استكشف المناطق وطرق التجارة والحضارات.",
    f4Title: "أنشطة محددة بزمن",
    f4Desc: "لكل نشاط مؤقّت، يطبّق نسبة 80/20 بين الطالب والمعلم التي تتطلبها ADEK.",
    f5Title: "تقييم أصيل",
    f5Desc: "تصحيح بالروبريك، ملف إنجاز، وتأمل ذاتي — لا مجرد اختبارات اختيار من متعدد.",
    f6Title: "تصميم شامل",
    f6Desc: "ملفات احتياجات خاصة وخطط تفاضل لكل متعلم — مجال الحماية في إرتقاء.",
  },
  // Auth
  auth: {
    welcomeBack: "مرحبًا بعودتك",
    signIn: "تسجيل الدخول",
    signOut: "تسجيل الخروج",
    studentCode: "رمز دخول الطالب",
    teacherUsername: "اسم المستخدم أو البريد الإلكتروني للمعلم",
    adminUsername: "اسم المستخدم للمسؤول",
    password: "كلمة المرور",
    forgotPassword: "نسيت كلمة المرور؟",
    noAccount: "ليس لديك حساب؟",
    needConsent: "يجب على ولي أمرك منح الموافقة قبل أن تتمكن من أداء التقييمات.",
  },
  // Consent
  consent: {
    title: "موافقة ولي الأمر",
    intro:
      "يتطلب قانون سلامة الطفل الرقمي 26/2025 موافقة ولي أمر صريحة للطلاب دون 13 عامًا. يرجى التحقق من هويتك ومراجعة الشروط أدناه.",
    parentName: "الاسم الكامل لولي الأمر",
    parentEmail: "البريد الإلكتروني لولي الأمر",
    parentPhone: "هاتف ولي الأمر (الإمارات)",
    studentCode: "رمز دخول الطالب (يقدمه المعلم)",
    verifyAge: "أؤكد أن عمري 18 عامًا أو أكثر",
    agreeTerms: "لقد قرأت وأوافق على الشروط والأحكام وسياسة الخصوصية",
    grantConsent: "منح الموافقة",
    revokeConsent: "إلغاء الموافقة",
    revokeWarning:
      "سيؤدي إلغاء الموافقة إلى حذف بيانات طفلك نهائيًا خلال 30 يومًا، وفقًا للمادة 14 من PDPL.",
  },
  // Dashboard
  dashboard: {
    welcome: "مرحبًا، {name}",
    overview: "نظرة عامة",
    students: "الطلاب",
    lessons: "الدروس",
    quizzes: "الاختبارات",
    assignments: "التكليفات",
    liveClasses: "الحصص المباشرة",
    discussions: "المناقشات",
    portfolio: "ملف الإنجاز",
    analytics: "التحليلات",
    irtiqaa: "التقييم الذاتي لإرتقاء",
    wellbeing: "الرفاهية",
    settings: "الإعدادات",
  },
  // Common
  common: {
    loading: "جارٍ التحميل…",
    save: "حفظ",
    cancel: "إلغاء",
    delete: "حذف",
    edit: "تعديل",
    close: "إغلاق",
    back: "رجوع",
    next: "التالي",
    previous: "السابق",
    submit: "إرسال",
    confirm: "تأكيد",
    yes: "نعم",
    no: "لا",
    search: "بحث",
    filter: "تصفية",
    sortBy: "ترتيب حسب",
    noResults: "لا توجد نتائج",
    error: "حدث خطأ ما",
    success: "تم بنجاح",
    retry: "حاول مرة أخرى",
  },
  // Errors
  errors: {
    required: "هذا الحقل مطلوب",
    invalidEmail: "يرجى إدخال بريد إلكتروني صالح",
    invalidPhone: "يرجى إدخال رقم هاتف إماراتي صالح",
    passwordTooShort: "يجب أن تكون كلمة المرور 8 أحرف على الأقل",
    rateLimited: "محاولات كثيرة. يرجى المحاولة لاحقًا.",
    unauthorized: "غير مصرح لك بتنفيذ هذا الإجراء",
    consentRequired: "موافقة ولي الأمر مطلوبة قبل هذا الإجراء",
  },
};
