'use client';

import React, { useState, useEffect, useCallback, useRef, useMemo, Component, ReactNode } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import {
  BookOpen, Star, Clock, ChevronLeft, ChevronRight, ChevronDown,
  GraduationCap, MapPin, Users, Trophy, ArrowRight, Play,
  CheckCircle2, XCircle, AlertCircle, Home as HomeIcon, Info, LogIn,
  Sparkles, Crown, Shield, Globe, Heart, Lightbulb,
  Timer, FileText, Map, Brain, Target, Award, ExternalLink,
  Mountain, Landmark, Scroll, Swords, Calendar, Eye, Download,
  BarChart3, Filter, LogOut
} from 'lucide-react';
import {
  getGradeInfo, getUnitData, getLesson, getLessonId, getCleanTitle, getUnitContextFromTitle,
  generateQuizQuestions, parseActivities, generateUAELinks, generateWarmUp,
  saveQuizResult, getAllQuizResults, getResultsByGrade, exportResultsAsCSV,
  getPlatformStats, verifyMasterPassword,
  type QuizQuestion, type ActivityItem, type UAELink, type WarmUpActivity,
  type QuizResult, type GradeInfo, type TermInfo, type UnitInfo, type LessonData,
} from '@/lib/lessons';
import { getLessonContentByPath, type LessonContent } from '@/lib/g6t1-content';
import { getG6T2LessonContent } from '@/lib/g6t2-content';
import { getG6T3LessonContent } from '@/lib/g6t3-content';
import { getG7T1LessonContent } from '@/lib/g7t1-content';

// ═══════════════════════════════════════════════════════════════
// CONTENT LOOKUP — Find rich textbook content for a lesson
// ═══════════════════════════════════════════════════════════════

function getRichLessonContent(gradeKey: string, termKey: string, unitKey: string, lessonIndex: number): LessonContent | null {
  // Try the unified path-based lookup first (covers G6T1 and G6T2 via g6t1-content.ts)
  const byPath = getLessonContentByPath(gradeKey, termKey, unitKey, lessonIndex);
  if (byPath) return byPath;
  // Try G6T2 lookup
  const g6t2 = getG6T2LessonContent(`${gradeKey}_${termKey}_${unitKey}_l${lessonIndex + 1}`);
  if (g6t2) return g6t2;
  // Try G6T3 lookup
  const g6t3 = getG6T3LessonContent(`${gradeKey}_${termKey}_${unitKey}_l${lessonIndex + 1}`);
  if (g6t3) return g6t3;
  // Try G7T1 lookup
  const g7t1 = getG7T1LessonContent(`${gradeKey}_${termKey}_${unitKey}_l${lessonIndex + 1}`);
  if (g7t1) return g7t1;
  return null;
}

// Helper to split long reading text into halves
function splitReading(content: string): [string, string] {
  if (content.length <= 1500) return [content, ''];
  const mid = Math.floor(content.length / 2);
  // Find nearest paragraph break after midpoint
  let splitAt = content.indexOf('\n\n', mid);
  if (splitAt === -1 || splitAt > mid + 300) splitAt = content.indexOf('. ', mid);
  if (splitAt === -1 || splitAt > mid + 300) splitAt = mid;
  return [content.substring(0, splitAt).trim(), content.substring(splitAt).trim()];
}

// ═══════════════════════════════════════════════════════════════
// SOUND EFFECTS
// ═══════════════════════════════════════════════════════════════

const SoundFX = {
  correct: () => {
    if (typeof window === 'undefined') return;
    try {
      const ctx = new AudioContext();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain); gain.connect(ctx.destination);
      osc.type = 'sine';
      osc.frequency.setValueAtTime(523.25, ctx.currentTime);
      osc.frequency.setValueAtTime(659.25, ctx.currentTime + 0.1);
      osc.frequency.setValueAtTime(783.99, ctx.currentTime + 0.2);
      gain.gain.setValueAtTime(0.3, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.4);
      osc.start(ctx.currentTime); osc.stop(ctx.currentTime + 0.4);
    } catch (_e) { /* ignore */ }
  },
  incorrect: () => {
    if (typeof window === 'undefined') return;
    try {
      const ctx = new AudioContext();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain); gain.connect(ctx.destination);
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(200, ctx.currentTime);
      osc.frequency.setValueAtTime(150, ctx.currentTime + 0.15);
      gain.gain.setValueAtTime(0.15, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.3);
      osc.start(ctx.currentTime); osc.stop(ctx.currentTime + 0.3);
    } catch (_e) { /* ignore */ }
  },
  celebrate: () => {
    if (typeof window === 'undefined') return;
    try {
      const ctx = new AudioContext();
      [523.25, 659.25, 783.99, 1046.50].forEach((freq, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain); gain.connect(ctx.destination);
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, ctx.currentTime + i * 0.15);
        gain.gain.setValueAtTime(0.2, ctx.currentTime + i * 0.15);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + i * 0.15 + 0.3);
        osc.start(ctx.currentTime + i * 0.15); osc.stop(ctx.currentTime + i * 0.15 + 0.3);
      });
    } catch (_e) { /* ignore */ }
  },
};

// ═══════════════════════════════════════════════════════════════
// CONFETTI CELEBRATION
// ═══════════════════════════════════════════════════════════════

function ConfettiCelebration() {
  const particles = useMemo(() =>
    Array.from({ length: 50 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: 6 + Math.random() * 8,
      color: ['#D4AF37', '#722F37', '#047857', '#D97706', '#7C3AED', '#EF4444'][Math.floor(Math.random() * 6)],
      isCircle: Math.random() > 0.5,
      delay: Math.random() * 2,
      duration: 2 + Math.random() * 3,
    })), []
  );
  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {particles.map((p) => (
        <div key={p.id} className="absolute animate-confetti" style={{
          left: `${p.left}%`, top: '-10px', width: `${p.size}px`, height: `${p.size}px`,
          backgroundColor: p.color, borderRadius: p.isCircle ? '50%' : '0',
          animationDelay: `${p.delay}s`, animationDuration: `${p.duration}s`,
        }} />
      ))}
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════
// TRANSLATIONS
// ═══════════════════════════════════════════════════════════════

const translations: Record<string, Record<string, string>> = {
  en: { subtitle: 'Moral, Social & Cultural Studies', tagline: 'Making Learning Active, Not Passive', interactivePlatform: '— Interactive Learning Platform —', whyTitle: 'Why MSCS Academy?', feature1: 'Interactive Learning', feature1d: 'Quizzes, timelines, maps, and drag-and-drop activities that make learning unforgettable', feature2: 'Standards-Aligned', feature2d: 'Every lesson follows UAE curriculum standards with clear objectives and success criteria', feature3: 'UAE & Real-World Links', feature3d: 'Every lesson connects to UAE culture, values, and real-life applications', feature4: 'Built-in Timers', feature4d: 'Structured activities with countdown timers keep lessons on pace', feature5: 'Instant Feedback', feature5d: 'Quizzes with immediate scoring and explanations help students learn from mistakes', feature6: 'Student-Centered', feature6d: 'KWL charts, Venn diagrams, and collaborative activities put students first', meetInstructor: 'Meet Your Instructor', instructorDesc: 'Dedicated educator specializing in Moral, Social, and Cultural Studies for UAE students. Creating engaging, standards-aligned lessons that bring history and culture to life.', footerTagline: 'MSCS Academy: Making Learning Active, Not Passive', about: 'About', studentLogin: 'Student Login', parentalConsent: 'Parental Consent', selectGrade: 'Select your grade to begin', adminAccess: 'Admin Access', logout: 'Log Out', copyright: '© 2026 All Rights Reserved', standards: 'Standards', objectives: 'Learning Objectives', successCriteria: 'Success Criteria', hookQuestion: 'Think About This', reading1: 'Reading One', reading2: 'Reading Two', summary1: 'Key Takeaways from Reading One', summary2: 'Key Takeaways from Reading Two', visualAnalysis: 'Visual Analysis', strategiesAndActivities: 'Learning Strategies & Activities', uaeAndRealLife: 'UAE & Real-Life Connections', homeworkAndClosure: 'Homework & Lesson Closure', formativeAssessment: 'Formative Assessment', thankYou: 'Thank You!', loginRequired: 'Please log in to take the quiz and track your progress', loginToContinue: 'Login to Continue', aboutTitle: 'About MSCS Academy', aboutDesc: 'MSCS Academy is an interactive learning platform designed for UAE students in Grades 6-9 studying Moral, Social, and Cultural Studies. Every lesson is carefully aligned with the UAE Ministry of Education curriculum standards and follows the ADEK pedagogical framework. The platform transforms traditional textbook content into engaging, interactive experiences that promote active learning, critical thinking, and real-world application of knowledge.', aboutCredentials: 'Credentials', aboutC1: 'ADEK-approved MSCS specialist for UAE education', aboutC2: 'Experienced curriculum developer aligned with UAE Ministry of Education standards', aboutC3: 'Interactive lesson design with technology integration', aboutC4: 'Committed to student-centered, active learning approaches', aboutDisclaimer: 'This platform is developed independently by Mr. Ahmed Ali as an educational resource. All content is aligned with UAE curriculum standards but is not officially endorsed by any educational authority. Teacher-Created Study Material — Not an Official ADEK Resource. Student data is not collected or stored on servers. All interactive elements work locally in the browser.', consentTitle: 'Parental Consent Information', consentSubtitle: 'Understanding how we protect your child\'s learning experience', consentCommitment: 'Our Commitment to Student Safety', consentCommitmentDesc: 'MSCS Academy is committed to providing a safe, secure, and age-appropriate learning environment for all students. We follow strict data protection practices and ensure that no personal student information is collected or stored on our platform.', consentKnow: 'What Parents Need to Know', consentK1Title: 'No Personal Data Collection', consentK1Desc: 'The platform does not collect, store, or transmit any personal student data. All interactive elements work locally in the browser.', consentK2Title: 'Curriculum-Aligned Content', consentK2Desc: 'All lessons follow UAE Ministry of Education standards for Moral, Social, and Cultural Studies.', consentK3Title: 'Age-Appropriate Material', consentK3Desc: 'Content is specifically designed for students in Grades 6-9 (ages 11-15) and is reviewed for appropriateness.', consentK4Title: 'No External Communication', consentK4Desc: 'The platform has no chat features, social elements, or ways for students to communicate with others.', consentK5Title: 'Optional Access', consentK5Desc: 'Student login is optional and uses a code-based system. No email addresses or personal identifiers are required.', consentProcess: 'Consent Process', consentS1: 'School distributes access codes', consentS1d: 'Each student receives a unique code in the format MSCS-Grade-Section-Year-Number', consentS2: 'Parent reviews platform', consentS2d: 'Parents are encouraged to explore the platform with their child', consentS3: 'Student accesses lessons', consentS3d: 'Using their code, students can access grade-appropriate interactive lessons', consentS4: 'Ongoing transparency', consentS4d: 'All content is accessible for parental review at any time' },
  ar: { subtitle: 'الدراسات الأخلاقية والاجتماعية والثقافية', tagline: 'نجعل التعلم نشطاً، وليس سلبياً', interactivePlatform: '— منصة تعلم تفاعلية —', whyTitle: 'لماذا أكاديمية MSCS؟', feature1: 'تعلم تفاعلي', feature1d: 'اختبارات وخطوط زمنية وخرائط وأنشطة سحب وإفلات تجعل التعلم لا يُنسى', feature2: 'ملاءمة للمعايير', feature2d: 'كل درس يتبع معايير المنهج الإماراتي بأهداف واضحة ومعايير نجاح', feature3: 'روابط الإمارات والعالم الحقيقي', feature3d: 'كل درس يرتبط بثقافة الإمارات وقيمها والتطبيقات الواقعية', feature4: 'مؤقتات مدمجة', feature4d: 'أنشطة منظمة بمؤقتات عد تنازلي تحافظ على وتيرة الدرس', feature5: 'تغذية راجعة فورية', feature5d: 'اختبارات مع تسجيل فوري وشروحات تساعد الطلاب على التعلم من أخطائهم', feature6: 'محوره الطالب', feature6d: 'رسوم KWL ومخططات فين وأنشطة تعاونية تضع الطالب في المقام الأول', meetInstructor: 'تعرف على معلمك', instructorDesc: 'معلم متخصص في الدراسات الأخلاقية والاجتماعية والثقافية لطلاب الإمارات. يصمم دروساً تفاعلية مبنية على المعايير تُحيي التاريخ والثقافة.', footerTagline: 'أكاديمية MSCS: نجعل التعلم نشطاً، وليس سلبياً', about: 'حول', studentLogin: 'تسجيل دخول الطالب', parentalConsent: 'موافقة الوالدين', selectGrade: 'اختر صفك للبدء', adminAccess: 'دخول المسؤول', logout: 'تسجيل الخروج', copyright: '© 2026 جميع الحقوق محفوظة', standards: 'المعايير', objectives: 'أهداف التعلم', successCriteria: 'معايير النجاح', hookQuestion: 'فكر في هذا', reading1: 'القراءة الأولى', reading2: 'القراءة الثانية', summary1: 'النقاط الرئيسية من القراءة الأولى', summary2: 'النقاط الرئيسية من القراءة الثانية', visualAnalysis: 'التحليل البصري', strategiesAndActivities: 'استراتيجيات التعلم والأنشطة', uaeAndRealLife: 'روابط الإمارات والحياة الواقعية', homeworkAndClosure: 'الواجب المنزلي وختم الدرس', formativeAssessment: 'التقييم التكويني', thankYou: 'شكراً لكم!', loginRequired: 'يرجى تسجيل الدخول لإجراء الاختبار وتتبع تقدمكم', loginToContinue: 'سجل الدخول للمتابعة', aboutTitle: 'عن أكاديمية MSCS', aboutDesc: 'أكاديمية MSCS هي منصة تعلم تفاعلية مصممة لطلاب الإمارات في الصفوف 6-9 الذين يدرسون الدراسات الأخلاقية والاجتماعية والثقافية. كل درس محاذٍ بدقة لمعايير المنهج لوزارة التربية والتعليم الإماراتية ويتبع إطار التربية والتعليم في أبوظبي. تحوّل المنصة محتوى الكتاب المدرسي التقليدي إلى تجارب تفاعلية جذابة تعزز التعلم النشط والتفكير النقدي والتطبيق العملي للمعرفة.', aboutCredentials: 'المؤهلات', aboutC1: 'متخصص معتمد من أدك في الدراسات الأخلاقية والاجتماعية والثقافية للتعليم الإماراتي', aboutC2: 'مطور مناهج ذو خبرة محاذٍ لمعايير وزارة التربية والتعليم الإماراتية', aboutC3: 'تصميم دروس تفاعلية مع دمج التكنولوجيا', aboutC4: 'ملتزم بأساليب التعلم النشط المحورها الطالب', aboutDisclaimer: 'تم تطوير هذه المنصة بشكل مستقل من قبل الأستاذ أحمد علي كمصدر تعليمي. جميع المحتوى محاذٍ لمعايير المنهج الإماراتي لكنه غير معتمد رسمياً من أي سلطة تعليمية. مادة دراسية من إعداد المعلم — ليست مصدراً رسمياً لأدك. لا يتم جمع أو تخزين بيانات الطلاب على خوادم. جميع العناصر التفاعلية تعمل محلياً في المتصفح.', consentTitle: 'معلومات موافقة الوالدين', consentSubtitle: 'فهم كيف نحمي تجربة تعلم طفلك', consentCommitment: 'التزامنا بسلامة الطلاب', consentCommitmentDesc: 'أكاديمية MSCS ملتزمة بتوفير بيئة تعلم آمنة ومأمونة ومناسبة للعمر لجميع الطلاب. نتبع ممارسات صارمة لحماية البيانات ونضمن عدم جمع أو تخزين أي معلومات شخصية للطلاب على منصتنا.', consentKnow: 'ما يحتاج الوالدان لمعرفته', consentK1Title: 'عدم جمع بيانات شخصية', consentK1Desc: 'المنصة لا تجمع أو تخزن أو تنقل أي بيانات شخصية للطلاب. جميع العناصر التفاعلية تعمل محلياً في المتصفح.', consentK2Title: 'محتوى محاذٍ للمنهج', consentK2Desc: 'جميع الدروس تتبع معايير وزارة التربية والتعليم الإماراتية للدراسات الأخلاقية والاجتماعية والثقافية.', consentK3Title: 'محتوى مناسب للعمر', consentK3Desc: 'المحتوى مصمم خصيصاً لطلاب الصفوف 6-9 (أعمار 11-15 سنة) ويتم مراجعته لضمان المناسبة.', consentK4Title: 'بدون تواصل خارجي', consentK4Desc: 'المنصة لا تحتوي على ميزات دردشة أو عناصر اجتماعية أو طرق للتواصل مع الآخرين.', consentK5Title: 'وصول اختياري', consentK5Desc: 'تسجيل دخول الطالب اختياري ويستخدم نظام رموز. لا حاجة لعناوين بريد إلكتروني أو معرفات شخصية.', consentProcess: 'عملية الموافقة', consentS1: 'المدرسة توزع رموز الوصول', consentS1d: 'يتلقى كل طالب رمزاً فريداً بالتنسيق MSCS-الصف-الشعبة-السنة-الرقم', consentS2: 'ولي الأمر يراجع المنصة', consentS2d: 'يُشجع أولياء الأمور على استكشاف المنصة مع أبنائهم', consentS3: 'الطالب يصل إلى الدروس', consentS3d: 'باستخدام رمزهم، يمكن للطلاب الوصول إلى الدروس التفاعلية المناسبة لصفهم', consentS4: 'شفافية مستمرة', consentS4d: 'جميع المحتوى متاح لمراجعة أولياء الأمور في أي وقت' },
  ur: { subtitle: 'اخلاقی، سماجی اور ثقافتی علوم', tagline: 'سیکھنے کو فعال بنانا، غیر فعال نہیں', interactivePlatform: '— انٹرایکٹو لرننگ پلیٹ فارم —', whyTitle: 'MSCS اکیڈمی کیوں؟', feature1: 'انٹرایکٹو لرننگ', feature1d: 'کوئز، ٹائم لائن، نقشے اور ڈریگ اینڈ ڈراپ سرگرمیاں جو سیکھنے کو ناقابل فراموش بناتی ہیں', feature2: 'معیارات کے مطابق', feature2d: 'ہر سبق یو اے ای کریکولم معیارات کی پیروی کرتا ہے واضح مقاصد اور کامیابی کے معیار کے ساتھ', feature3: 'یو اے ای اور حقیقی دنیا کے روابط', feature3d: 'ہر سبق یو اے ای کی ثقافت، اقدار اور عملی اطلاقات سے جڑتا ہے', feature4: 'بلٹ ان ٹائمرز', feature4d: 'کاؤنٹ ڈاؤن ٹائمرز کے ساتھ منظم سرگرمیاں سبق کی رفتار برقرار رکھتی ہیں', feature5: 'فوری فیڈبیک', feature5d: 'فوری اسکورنگ اور وضاحت کے ساتھ کوئز طلباء کو غلطیوں سے سیکھنے میں مدد دیتے ہیں', feature6: 'طلباء مرکزی', feature6d: 'KWL چارٹس، وین ڈایاگرام اور تعاون کی سرگرمیاں طلباء کو پہلے رکھتی ہیں', meetInstructor: 'اپنے استاد سے ملیں', instructorDesc: 'یو اے ای کے طلباء کے لیے اخلاقی، سماجی اور ثقافتی علوم میں متخصص معلم۔ معیارات پر مبنی دلچسپ سبق ڈیزائن کرتے ہیں جو تاریخ اور ثقافت کو زندہ کرتے ہیں۔', footerTagline: 'MSCS اکیڈمی: سیکھنے کو فعال بنانا، غیر فعال نہیں', about: 'ہمارے بارے میں', studentLogin: 'طالب علم لاگ ان', parentalConsent: 'والدین کی رضامندی', selectGrade: 'شروع کرنے کے لیے اپنا گریڈ منتخب کریں', adminAccess: 'ایڈمن رسائی', logout: 'لاگ آؤٹ', copyright: '© 2026 جملہ حقوق محفوظ ہیں', standards: 'معیارات', objectives: 'تعلیمی مقاصد', successCriteria: 'کامیابی کے معیار', hookQuestion: 'اس کے بارے میں سوچیں', reading1: 'پہلی قراءت', reading2: 'دوسری قراءت', summary1: 'پہلی قراءت کے اہم نکات', summary2: 'دوسری قراءت کے اہم نکات', visualAnalysis: 'بصری تجزیہ', strategiesAndActivities: 'سیکھنے کی حکمت عملی اور سرگرمیاں', uaeAndRealLife: 'یو اے ای اور حقیقی زندگی کے روابط', homeworkAndClosure: 'ہوم ورک اور سبق کا اختتام', formativeAssessment: 'تکوینی جائزہ', thankYou: 'شکریہ!', loginRequired: 'کوئز دینے اور اپنی ترقی ٹریک کرنے کے لیے لاگ ان کریں', loginToContinue: 'جاری رکھنے کے لیے لاگ ان کریں', aboutTitle: 'MSCS اکیڈمی کے بارے میں', aboutDesc: 'MSCS اکیڈمی یو اے ای کے گریڈ 6-9 کے طلباء کے لیے ایک انٹرایکٹو لرننگ پلیٹ فارم ہے جو اخلاقی، سماجی اور ثقافتی علوم پڑھاتا ہے۔ ہر سبق یو اے ای وزارت تعلیم کے کریکولم معیارات کے ساتھ محافظ ہے۔', aboutCredentials: 'اہلیت', aboutC1: 'یو اے ای تعلیم کے لیے ادک منظور شدہ MSCS ماہر', aboutC2: 'یو اے ای وزارت تعلیم کے معیارات کے مطابق تجربہ کار نصاب ترجمان', aboutC3: 'ٹیکنالوجی انضمام کے ساتھ انٹرایکٹو سبق ڈیزائن', aboutC4: 'طلباء مرکزی فعال سیکھنے کے طریقوں کے لیے پرعزم', aboutDisclaimer: 'یہ پلیٹ فارم آزادانہ طور پر مسٹر احمد علی کے ذریعہ تعلیمی وسیلہ کے طور پر تیار کیا گیا ہے۔ تمام مواد یو اے ای کریکولم معیارات کے مطابق ہے لیکن کسی تعلیمی اتھارٹی کی سرکاری توثیق نہیں ہے۔', consentTitle: 'والدین کی رضامندی کی معلومات', consentSubtitle: 'سمجھیں کہ ہم آپ کے بچے کی سیکھنے کی تجربہ کو کیسے محفوظ رکھتے ہیں', consentCommitment: 'طلباء کی حفاظت کے لیے ہمارا عہد', consentCommitmentDesc: 'MSCS اکیڈمی تمام طلباء کے لیے محفوظ، محفوظ اور عمر کے مناسب سیکھنے کے ماحول فراہم کرنے کی عزمند ہے۔', consentKnow: 'والدین کو کیا جاننا چاہیے', consentK1Title: 'ذاتی ڈیٹا اکٹھا نہیں کیا جاتا', consentK1Desc: 'پلیٹ فارم کوئی ذاتی طالب علم ڈیٹا اکٹھا، ذخیرہ یا منتقل نہیں کرتا۔', consentK2Title: 'نصاب سے ہم آہنگ مواد', consentK2Desc: 'تمام سبق یو اے ای وزارت تعلیم کے معیارات کی پیروی کرتے ہیں۔', consentK3Title: 'عمر کے مناسب مواد', consentK3Desc: 'مواد مخصوص طور پر گریڈ 6-9 کے طلباء کے لیے ڈیزائن کیا گیا ہے۔', consentK4Title: 'کوئی بیرونی مواصلت نہیں', consentK4Desc: 'پلیٹ فارم میں چیٹ فیچرز یا سماجی عناصر نہیں ہیں۔', consentK5Title: 'اختیاری رسائی', consentK5Desc: 'طالب علم لاگ ان اختیاری ہے اور کوڈ پر مبنی سسٹم استعمال کرتا ہے۔', consentProcess: 'رضامندی کا عمل', consentS1: 'اسکول رسائی کوڈ تقسیم کرتا ہے', consentS1d: 'ہر طالب علم کو منفرد کوڈ ملتا ہے', consentS2: 'والدین پلیٹ فارم کا جائزہ لیتے ہیں', consentS2d: 'والدین کو اپنے بچے کے ساتھ پلیٹ فارم دریافت کرنے کی ترغیب دی جاتی ہے', consentS3: 'طالب علم سبق تک رسائی حاصل کرتا ہے', consentS3d: 'اپنے کوڈ کا استعمال کرکے طلباء گریڈ کے مناسب سبق تک رسائی حاصل کر سکتے ہیں', consentS4: 'مسلسل شفافیت', consentS4d: 'تمام مواد والدین کی جائزہ کے لیے ہر وقت دستیاب ہے' },
  fa: { subtitle: 'مطالعات اخلاقی، اجتماعی و فرهنگی', tagline: 'یادگیری را فعال می‌کنیم، نه غیرفعال', interactivePlatform: '— پلتفرم یادگیری تعاملی —', whyTitle: 'چرا آکادمی MSCS؟', feature1: 'یادگیری تعاملی', feature1d: 'آزمون‌ها، خط زمانی، نقشه‌ها و فعالیت‌های تعاملی که یادگیری را فراموش‌نشدنی می‌کنند', feature2: 'همسو با استانداردها', feature2d: 'هر درس از استانداردهای برنامه درسی امارات با اهداف و معیارهای موفقیت واضح پیروی می‌کند', feature3: 'ارتباط امارات و دنیای واقعی', feature3d: 'هر درس به فرهنگ، ارزش‌ها و کاربردهای واقعی امارات متصل است', feature4: 'تایمرهای داخلی', feature4d: 'فعالیت‌های ساختاریافته با تایمر شمارش معکوس که سرعت درس را حفظ می‌کنند', feature5: 'بازخورد فوری', feature5d: 'آزمون‌ها با امتیازدهی و توضیحات فوری به دانش‌آموزان کمک می‌کنند از اشتباهات بیاموزند', feature6: 'دانش‌آموز محور', feature6d: 'نمودارهای KWL، نمودارهای ون و فعالیت‌های مشارکتی دانش‌آموز را در اولویت قرار می‌دهند', meetInstructor: 'با معلم خود آشنا شوید', instructorDesc: 'معلم متخصص در مطالعات اخلاقی، اجتماعی و فرهنگی برای دانش‌آمویان امارات. طراحی دروس تعاملی مبتنی بر استانداردها که تاریخ و فرهنگ را زنده می‌کند.', footerTagline: 'آکادمی MSCS: یادگیری فعال، نه غیرفعال', about: 'درباره ما', studentLogin: 'ورود دانش‌آموز', parentalConsent: 'رضایت والدین', selectGrade: 'پایه خود را انتخاب کنید', adminAccess: 'دسترسی مدیر', logout: 'خروج', copyright: '© 2026 تمامی حقوق محفوظ است', standards: 'استانداردها', objectives: 'اهداف یادگیری', successCriteria: 'معیارهای موفقیت', hookQuestion: 'درباره این فکر کنید', reading1: 'خواندن اول', reading2: 'خواندن دوم', summary1: 'نکات کلیدی خواندن اول', summary2: 'نکات کلیدی خواندن دوم', visualAnalysis: 'تحلیل بصری', strategiesAndActivities: 'استراتژی‌ها و فعالیت‌های یادگیری', uaeAndRealLife: 'ارتباط امارات و زندگی واقعی', homeworkAndClosure: 'تکلیف و پایان درس', formativeAssessment: 'ارزیابی تکوینی', thankYou: 'متشکریم!', loginRequired: 'لطفاً برای شرکت در آزمون و پیگیری پیشرفت خود وارد شوید', loginToContinue: 'برای ادامه وارد شوید', aboutTitle: 'درباره آکادمی MSCS', aboutDesc: 'آکادمی MSCS یک پلتفرم یادگیری تعاملی است که برای دانش‌آمویان امارات در پایه‌های ۶-۹ طراحی شده است.', aboutCredentials: 'صلاحیت‌ها', aboutC1: 'متخصص MSCS تأییدشده توسط ADEK برای آموزش امارات', aboutC2: 'توسعه‌دهنده برنامه درسی باتجربه همسو با استانداردهای وزارت آموزش امارات', aboutC3: 'طراحی دروس تعاملی با ادغام فناوری', aboutC4: 'متعهد به رویکردهای یادگیری فعال دانش‌آموز محور', aboutDisclaimer: 'این پلتفرم به صورت مستقل توسط آقای احمد علی به عنوان منبع آموزشی توسعه یافته است. تمام محتوا همسو با استانداردهای برنامه درسی امارات است اما تأیید رسمی هیچ مرجع آموزشی ندارد.', consentTitle: 'اطلاعات رضایت والدین', consentSubtitle: 'درک نحوه محافظت از تجربه یادگیری فرزندتان', consentCommitment: 'تعهد ما به ایمنی دانش‌آموزان', consentCommitmentDesc: 'آکادمی MSCS متعهد به ارائه محیط یادگیری ایمن و مناسب سن برای همه دانش‌آموزان است.', consentKnow: 'آنچه والدین باید بدانند', consentK1Title: 'عدم جمع‌آوری داده‌های شخصی', consentK1Desc: 'این پلتفرم هیچ داده شخصی دانش‌آموزی جمع‌آوری، ذخیره یا منتقل نمی‌کند.', consentK2Title: 'محتوای همسو با برنامه درسی', consentK2Desc: 'تمام دروس از استانداردهای وزارت آموزش امارات پیروی می‌کنند.', consentK3Title: 'محتوای مناسب سن', consentK3Desc: 'محتوا مخصوص دانش‌آمویان پایه ۶-۹ طراحی شده است.', consentK4Title: 'بدون ارتباط خارجی', consentK4Desc: 'این پلتفرم ویژگی چت یا عناصر اجتماعی ندارد.', consentK5Title: 'دسترسی اختیاری', consentK5Desc: 'ورود دانش‌آموز اختیاری است و از سیستم مبتنی بر کد استفاده می‌کند.', consentProcess: 'فرآیند رضایت', consentS1: 'مدرسه کدهای دسترسی را توزیع می‌کند', consentS1d: 'هر دانش‌آموز یک کد منحصر به فرد دریافت می‌کند', consentS2: 'والدین پلتفرم را بررسی می‌کنند', consentS2d: 'از والدین دعوت می‌شود پلتفرم را با فرزندشان کاش کنند', consentS3: 'دانش‌آموز به دروس دسترسی پیدا می‌کند', consentS3d: 'با استفاده از کد خود، دانش‌آموزان می‌توانند به دروس تعاملی مناسب پایه خود دسترسی داشته باشند', consentS4: 'شفافیت مستمر', consentS4d: 'تمام محتوا برای بررسی والدین در هر زمان در دسترس است' },
  es: { subtitle: 'Estudios Morales, Sociales y Culturales', tagline: 'Haciendo el Aprendizaje Activo, No Pasivo', interactivePlatform: '— Plataforma de Aprendizaje Interactivo —', whyTitle: '¿Por qué MSCS Academy?', feature1: 'Aprendizaje Interactivo', feature1d: 'Cuestionarios, líneas de tiempo, mapas y actividades interactivas que hacen el aprendizaje inolvidable', feature2: 'Alineado con Estándares', feature2d: 'Cada lección sigue los estándares del plan de estudios de EAU con objetivos y criterios de éxito claros', feature3: 'Conexiones EAU y Mundo Real', feature3d: 'Cada lección conecta con la cultura, los valores y las aplicaciones reales de EAU', feature4: 'Temporizadores Integrados', feature4d: 'Actividades estructuradas con temporizadores de cuenta regresiva que mantienen el ritmo', feature5: 'Retroalimentación Instantánea', feature5d: 'Cuestionarios con puntuación inmediata y explicaciones que ayudan a aprender de los errores', feature6: 'Centrado en el Estudiante', feature6d: 'Gráficos KWL, diagramas de Venn y actividades colaborativas ponen al estudiante primero', meetInstructor: 'Conoce a Tu Instructor', instructorDesc: 'Educador dedicado especializado en Estudios Morales, Sociales y Culturales para estudiantes de EAU. Creando lecciones interactivas alineadas con estándares que dan vida a la historia y la cultura.', footerTagline: 'MSCS Academy: Aprendizaje Activo, No Pasivo', about: 'Acerca de', studentLogin: 'Inicio de Sesión del Estudiante', parentalConsent: 'Consentimiento de los Padres', selectGrade: 'Selecciona tu grado para comenzar', adminAccess: 'Acceso Administrativo', logout: 'Cerrar Sesión', copyright: '© 2026 Todos los Derechos Reservados', standards: 'Estándares', objectives: 'Objetivos de Aprendizaje', successCriteria: 'Criterios de Éxito', hookQuestion: 'Piensa en Esto', reading1: 'Lectura Uno', reading2: 'Lectura Dos', summary1: 'Puntos Clave de la Lectura Uno', summary2: 'Puntos Clave de la Lectura Dos', visualAnalysis: 'Análisis Visual', strategiesAndActivities: 'Estrategias y Actividades de Aprendizaje', uaeAndRealLife: 'Conexiones EAU y Vida Real', homeworkAndClosure: 'Tarea y Cierre de Lección', formativeAssessment: 'Evaluación Formativa', thankYou: '¡Gracias!', loginRequired: 'Inicie sesión para realizar el cuestionario y rastrear su progreso', loginToContinue: 'Iniciar Sesión para Continuar', aboutTitle: 'Acerca de MSCS Academy', aboutDesc: 'MSCS Academy es una plataforma de aprendizaje interactiva diseñada para estudiantes de EAU de grados 6-9 que estudian Estudios Morales, Sociales y Culturales.', aboutCredentials: 'Credenciales', aboutC1: 'Especialista MSCS aprobado por ADEK para educación de EAU', aboutC2: 'Desarrollador de currículo experimentado alineado con los estándares del Ministerio de Educación de EAU', aboutC3: 'Diseño de lecciones interactivas con integración tecnológica', aboutC4: 'Comprometido con enfoques de aprendizaje activo centrados en el estudiante', aboutDisclaimer: 'Esta plataforma es desarrollada independientemente por el Sr. Ahmed Ali como recurso educativo. Todo el contenido está alineado con los estándares del currículo de EAU pero no está respaldado oficialmente por ninguna autoridad educativa.', consentTitle: 'Información de Consentimiento Parental', consentSubtitle: 'Comprender cómo protegemos la experiencia de aprendizaje de su hijo', consentCommitment: 'Nuestro Compromiso con la Seguridad Estudiantil', consentCommitmentDesc: 'MSCS Academy está comprometida a proporcionar un entorno de aprendizaje seguro y apropiado para la edad de todos los estudiantes.', consentKnow: 'Lo que los Padres Deben Saber', consentK1Title: 'Sin Recopilación de Datos Personales', consentK1Desc: 'La plataforma no recopila, almacena ni transmite datos personales de estudiantes.', consentK2Title: 'Contenido Alineado con el Currículo', consentK2Desc: 'Todas las lecciones siguen los estándares del Ministerio de Educación de EAU.', consentK3Title: 'Material Apropiado para la Edad', consentK3Desc: 'El contenido está diseñado específicamente para estudiantes de grados 6-9.', consentK4Title: 'Sin Comunicación Externa', consentK4Desc: 'La plataforma no tiene funciones de chat ni elementos sociales.', consentK5Title: 'Acceso Opcional', consentK5Desc: 'El inicio de sesión del estudiante es opcional y utiliza un sistema basado en códigos.', consentProcess: 'Proceso de Consentimiento', consentS1: 'La escuela distribuye códigos de acceso', consentS1d: 'Cada estudiante recibe un código único', consentS2: 'Los padres revisan la plataforma', consentS2d: 'Se anima a los padres a explorar la plataforma con su hijo', consentS3: 'El estudiante accede a las lecciones', consentS3d: 'Usando su código, los estudiantes pueden acceder a lecciones interactivas apropiadas para su grado', consentS4: 'Transparencia continua', consentS4d: 'Todo el contenido está accesible para revisión parental en cualquier momento' },
  ru: { subtitle: 'Нравственные, социальные и культурные исследования', tagline: 'Делаем обучение активным, а не пассивным', interactivePlatform: '— Интерактивная обучающая платформа —', whyTitle: 'Почему MSCS Academy?', feature1: 'Интерактивное обучение', feature1d: 'Тесты, временные шкалы, карты и интерактивные задания, делающие обучение незабываемым', feature2: 'Соответствие стандартам', feature2d: 'Каждый урок следует стандартам ОАЭ с чёткими целями и критериями успешности', feature3: 'Связи ОАЭ и реального мира', feature3d: 'Каждый урок связан с культурой, ценностями и реальными приложениями ОАЭ', feature4: 'Встроенные таймеры', feature4d: 'Структурированные задания с таймерами обратного отсчёта для поддержания темпа', feature5: 'Мгновенная обратная связь', feature5d: 'Тесты с мгновенным оцениванием и объяснениями помогают учиться на ошибках', feature6: 'Ориентировано на студента', feature6d: 'Диаграммы KWL, диаграммы Венна и совместные задания ставят студента на первое место', meetInstructor: 'Познакомьтесь с преподавателем', instructorDesc: 'Преданный преподаватель, специализирующийся на нравственных, социальных и культурных исследованиях для студентов ОАЭ.', footerTagline: 'MSCS Academy: Активное обучение, а не пассивное', about: 'О нас', studentLogin: 'Вход для студентов', parentalConsent: 'Согласие родителей', selectGrade: 'Выберите свой класс', adminAccess: 'Доступ администратора', logout: 'Выход', copyright: '© 2026 Все права защищены', standards: 'Стандарты', objectives: 'Цели обучения', successCriteria: 'Критерии успешности', hookQuestion: 'Подумайте об этом', reading1: 'Чтение первое', reading2: 'Чтение второе', summary1: 'Ключевые выводы из первого чтения', summary2: 'Ключевые выводы из второго чтения', visualAnalysis: 'Визуальный анализ', strategiesAndActivities: 'Стратегии и деятельности обучения', uaeAndRealLife: 'Связи ОАЭ и реальной жизни', homeworkAndClosure: 'Домашнее задание и завершение урока', formativeAssessment: 'Формирующее оценивание', thankYou: 'Спасибо!', loginRequired: 'Пожалуйста, войдите для прохождения теста и отслеживания прогресса', loginToContinue: 'Войдите, чтобы продолжить', aboutTitle: 'Об академии MSCS', aboutDesc: 'Академия MSCS — интерактивная обучающая платформа для студентов ОАЭ 6-9 классов.', aboutCredentials: 'Квалификация', aboutC1: 'Одобренный ADEK специалист MSCS для образования ОАЭ', aboutC2: 'Опытный разработчик учебных программ по стандартам Министерства образования ОАЭ', aboutC3: 'Интерактивный дизайн уроков с технологической интеграцией', aboutC4: 'Приверженность студенчески-ориентированным подходам активного обучения', aboutDisclaimer: 'Эта платформа разработана независимо г-ном Ахмедом Али как образовательный ресурс. Весь контент соответствует стандартам учебной программы ОАЭ, но не имеет официального одобрения.', consentTitle: 'Информация о согласии родителей', consentSubtitle: 'Понимание того, как мы защищаем учебный опыт вашего ребёнка', consentCommitment: 'Наша приверженность безопасности студентов', consentCommitmentDesc: 'Академия MSCS обязуется обеспечивать безопасную учебную среду для всех студентов.', consentKnow: 'Что должны знать родители', consentK1Title: 'Без сбора личных данных', consentK1Desc: 'Платформа не собирает, не хранит и не передаёт личные данные студентов.', consentK2Title: 'Контент, соответствующий учебной программе', consentK2Desc: 'Все уроки следуют стандартам Министерства образования ОАЭ.', consentK3Title: 'Материал, соответствующий возрасту', consentK3Desc: 'Контент специально разработан для студентов 6-9 классов.', consentK4Title: 'Без внешней коммуникации', consentK4Desc: 'Платформа не имеет чатов или социальных элементов.', consentK5Title: 'Необязательный доступ', consentK5Desc: 'Вход студента необязателен и использует систему на основе кодов.', consentProcess: 'Процесс согласия', consentS1: 'Школа распределяет коды доступа', consentS1d: 'Каждый студент получает уникальный код', consentS2: 'Родители проверяют платформу', consentS2d: 'Родителям рекомендуется изучить платформу вместе с ребёнком', consentS3: 'Студент получает доступ к урокам', consentS3d: 'Используя свой код, студенты могут получать доступ к интерактивным урокам', consentS4: 'Постоянная прозрачность', consentS4d: 'Весь контент доступен для родительской проверки в любое время' },
  tr: { subtitle: 'Ahlaki, Sosyal ve Kültürel Çalışmalar', tagline: 'Öğrenmeyi Aktif Kılıyoruz, Pasif Değil', interactivePlatform: '— İnteraktif Öğrenme Platformu —', whyTitle: 'Neden MSCS Academy?', feature1: 'İnteraktif Öğrenme', feature1d: 'Öğrenmeyi unutulmaz kılan testler, zaman çizelgeleri, haritalar ve interaktif etkinlikler', feature2: 'Standartlara Uygun', feature2d: 'Her ders açık hedefler ve başarı kriterleriyle BAE müfredat standartlarını takip eder', feature3: 'BAE ve Gerçek Dünya Bağlantıları', feature3d: 'Her ders BAE kültürü, değerleri ve gerçek yaşam uygulamalarıyla bağlantılıdır', feature4: 'Dahili Zamanlayıcılar', feature4d: 'Geri sayım zamanlayıcılarıyla yapılandırılmış etkinlikler dersi tempoda tutar', feature5: 'Anında Geri Bildirim', feature5d: 'Anında puanlama ve açıklamalarla testler öğrencilerin hatalarından öğrenmesine yardımcı olur', feature6: 'Öğrenci Merkezli', feature6d: 'KWL çizelgeleri, Venn diyagramları ve işbirlikçi etkinlikler öğrenciyi ön plana koyar', meetInstructor: 'Eğitmeninizle Tanışın', instructorDesc: 'BAE öğrencileri için Ahlaki, Sosyal ve Kültürel Çalışmalarda uzmanlaşmış eğitmen. Tarihi ve kültürü hayata geçiren standartlara uyumlu etkileşimli dersler tasarlıyor.', footerTagline: 'MSCS Academy: Aktif Öğrenme, Pasif Değil', about: 'Hakkımızda', studentLogin: 'Öğrenci Girişi', parentalConsent: 'Ebeveyn Onayı', selectGrade: 'Başlamak için sınıfınızı seçin', adminAccess: 'Yönetici Erişimi', logout: 'Çıkış Yap', copyright: '© 2026 Tüm Hakları Saklıdır', standards: 'Standartlar', objectives: 'Öğrenme Hedefleri', successCriteria: 'Başarı Kriterleri', hookQuestion: 'Bunu Düşünün', reading1: 'Birinci Okuma', reading2: 'İkinci Okuma', summary1: 'Birinci Okumanın Ana Noktaları', summary2: 'İkinci Okumanın Ana Noktaları', visualAnalysis: 'Görsel Analiz', strategiesAndActivities: 'Öğrenme Stratejileri ve Etkinlikler', uaeAndRealLife: 'BAE ve Gerçek Yaşam Bağlantıları', homeworkAndClosure: 'Ödev ve Ders Kapanışı', formativeAssessment: 'Formatif Değerlendirme', thankYou: 'Teşekkürler!', loginRequired: 'Testi çözmek ve ilerlemenizi takip etmek için giriş yapın', loginToContinue: 'Devam etmek için giriş yapın', aboutTitle: 'MSCS Academy Hakkında', aboutDesc: 'MSCS Academy, BAE 6-9. sınıf öğrencileri için interaktif bir öğrenme platformudur.', aboutCredentials: 'Nitelikler', aboutC1: 'BAE eğitimi için ADEK onaylı MSCS uzmanı', aboutC2: 'BAE Milli Eğitim standartlarına uyumlu deneyimli müfredat geliştirici', aboutC3: 'Teknoloji entegrasyonu ile interaktif ders tasarımı', aboutC4: 'Öğrenci merkezli aktif öğrenme yaklaşımlarına bağlı', aboutDisclaimer: 'Bu platform bağımsız olarak Sn. Ahmed Ali tarafından eğitim kaynağı olarak geliştirilmiştir.', consentTitle: 'Ebeveyn Onay Bilgileri', consentSubtitle: 'Çocuğunuzun öğrenme deneyimini nasıl koruduğumuzu anlayın', consentCommitment: 'Öğrenci Güvenliğine Taahhüdümüz', consentCommitmentDesc: 'MSCS Academy tüm öğrenciler için güvenli bir öğrenme ortamı sağlamaya committedir.', consentKnow: 'Ebeveynlerin Bilmesi Gerekenler', consentK1Title: 'Kişisel Veri Toplama Yok', consentK1Desc: 'Platform öğrenci kişisel verisi toplamaz, depolamaz veya iletmez.', consentK2Title: 'Müfredata Uygun İçerik', consentK2Desc: 'Tüm dersler BAE Milli Eğitim standartlarını takip eder.', consentK3Title: 'Yaşa Uygun Materyal', consentK3Desc: 'İçerik özellikle 6-9. sınıf öğrencileri için tasarlanmıştır.', consentK4Title: 'Dış İletişim Yok', consentK4Desc: 'Platformda sohbet özellikleri veya sosyal öğeler yoktur.', consentK5Title: 'İsteğe Bağlı Erişim', consentK5Desc: 'Öğrenci girişi isteğe bağlıdır ve kod tabanlı bir sistem kullanır.', consentProcess: 'Onay Süreci', consentS1: 'Okul erişim kodlarını dağıtır', consentS1d: 'Her öğrenci benzersiz bir kod alır', consentS2: 'Ebeveynler platformu inceler', consentS2d: 'Ebeveynlere çocuklarıyla platformu keşfetmeleri teşvik edilir', consentS3: 'Öğrenci derslere erişir', consentS3d: 'Kodunu kullanarak öğrenciler sınıf düzeyine uygun derslere erişebilir', consentS4: 'Sürekli şeffaflık', consentS4d: 'Tüm içerik her zaman ebeveyn incelemesine açıktır' },
  fr: { subtitle: 'Études Morales, Sociales et Culturelles', tagline: "Rendre l'Apprentissage Actif, Non Passif", interactivePlatform: "— Plateforme d'Apprentissage Interactif —", whyTitle: 'Pourquoi MSCS Academy?', feature1: 'Apprentissage Interactif', feature1d: 'Quiz, chronologies, cartes et activités interactives qui rendent l\'apprentissage inoubliable', feature2: 'Aligné sur les Normes', feature2d: 'Chaque leçon suit les normes du programme des EAU avec des objectifs et critères de réussite clairs', feature3: 'Liens EAU et Monde Réel', feature3d: 'Chaque leçon se connecte à la culture, aux valeurs et aux applications réelles des EAU', feature4: 'Minuteries Intégrées', feature4d: 'Activités structurées avec minuteries à rebours qui maintiennent le rythme', feature5: 'Retour Instantané', feature5d: 'Quiz avec notation immédiate et explications qui aident à apprendre des erreurs', feature6: "Centré sur l'Étudiant", feature6d: "Tableaux KWL, diagrammes de Venn et activités collaboratives placent l'étudiant en premier", meetInstructor: 'Rencontrez Votre Instructeur', instructorDesc: 'Éducateur dévoué spécialisé dans les Études Morales, Sociales et Culturelles pour les étudiants des EAU. Créant des leçons interactives alignées sur les normes qui donnent vie à l\'histoire et à la culture.', footerTagline: "MSCS Academy: Apprentissage Actif, Non Passif", about: 'À Propos', studentLogin: 'Connexion Étudiant', parentalConsent: 'Consentement Parental', selectGrade: 'Sélectionnez votre niveau', adminAccess: 'Accès Administrateur', logout: 'Déconnexion', copyright: '© 2026 Tous Droits Réservés', standards: 'Normes', objectives: "Objectifs d'Apprentissage", successCriteria: 'Critères de Réussite', hookQuestion: 'Réfléchissez à Ceci', reading1: 'Première Lecture', reading2: 'Deuxième Lecture', summary1: 'Points Clés de la Première Lecture', summary2: 'Points Clés de la Deuxième Lecture', visualAnalysis: 'Analyse Visuelle', strategiesAndActivities: 'Stratégies et Activités d\'Apprentissage', uaeAndRealLife: 'Connexions EAU et Vie Réelle', homeworkAndClosure: 'Devoirs et Clôture de Leçon', formativeAssessment: 'Évaluation Formative', thankYou: 'Merci!', loginRequired: 'Veuillez vous connecter pour passer le quiz et suivre vos progrès', loginToContinue: 'Connectez-vous pour Continuer', aboutTitle: 'À Propos de MSCS Academy', aboutDesc: "MSCS Academy est une plateforme d'apprentissage interactive conçue pour les étudiants des EAU de 6e à 9e année.", aboutCredentials: 'Références', aboutC1: 'Spécialiste MSCS approuvé par ADEK pour l\'éducation aux EAU', aboutC2: 'Développeur de programme expérimenté aligné sur les normes du Ministère de l\'Éducation des EAU', aboutC3: 'Conception de leçons interactives avec intégration technologique', aboutC4: "Engagé envers les approches d'apprentissage actif centrées sur l'étudiant", aboutDisclaimer: 'Cette plateforme est développée indépendamment par M. Ahmed Ali comme ressource éducative. Tout le contenu est aligné sur les normes du programme des EAU mais n\'est pas officiellement approuvé.', consentTitle: 'Informations sur le Consentement Parental', consentSubtitle: "Comprendre comment nous protégeons l'expérience d'apprentissage de votre enfant", consentCommitment: 'Notre Engagement envers la Sécurité des Étudiants', consentCommitmentDesc: "MSCS Academy s'engage à fournir un environnement d'apprentissage sûr et approprié à l'âge pour tous les étudiants.", consentKnow: 'Ce que les Parents Doivent Savoir', consentK1Title: 'Aucune Collecte de Données Personnelles', consentK1Desc: "La plateforme ne collecte, ne stocke ni ne transmet aucune donnée personnelle d'étudiant.", consentK2Title: 'Contenu Aligné sur le Programme', consentK2Desc: "Toutes les leçons suivent les normes du Ministère de l'Éducation des EAU.", consentK3Title: 'Matériel Approprié à l\'Âge', consentK3Desc: 'Le contenu est spécialement conçu pour les étudiants de 6e à 9e année.', consentK4Title: 'Aucune Communication Externe', consentK4Desc: 'La plateforme n\'a pas de fonctionnalités de chat ou d\'éléments sociaux.', consentK5Title: 'Accès Facultatif', consentK5Desc: "La connexion étudiant est facultative et utilise un système basé sur des codes.", consentProcess: 'Processus de Consentement', consentS1: "L'école distribue les codes d'accès", consentS1d: 'Chaque étudiant reçoit un code unique', consentS2: 'Les parents examinent la plateforme', consentS2d: 'Les parents sont encouragés à explorer la plateforme avec leur enfant', consentS3: "L'étudiant accède aux leçons", consentS3d: 'En utilisant leur code, les étudiants peuvent accéder aux leçons interactives appropriées', consentS4: 'Transparence continue', consentS4d: 'Tout le contenu est accessible pour examen parental à tout moment' },
};

// ═══════════════════════════════════════════════════════════════
// TYPES
// ═══════════════════════════════════════════════════════════════

type ViewType = 'landing' | 'gradeSelect' | 'unitSelect' | 'lessonView' | 'aboutPage' | 'loginPage' | 'consentPage' | 'teacherDashboard';

// ═══════════════════════════════════════════════════════════════
// HELPER COMPONENTS
// ═══════════════════════════════════════════════════════════════

function AhmedAliLink({ className = '', size = 'sm' }: { className?: string; size?: 'sm' | 'md' | 'lg' }) {
  const sizeClasses = { sm: 'text-xs', md: 'text-sm', lg: 'text-base' };
  return (
    <a href="https://mr-ahmed-ali.vercel.app" target="_blank" rel="noopener noreferrer"
      className={`inline-flex items-center gap-1 font-semibold text-[#D4AF37] hover:text-amber-600 transition-colors ${sizeClasses[size]} ${className}`}>
      <GraduationCap className={size === 'lg' ? 'w-4 h-4' : 'w-3 h-3'} />
      Mr. Ahmed Ali
      <ExternalLink className="w-2.5 h-2.5 opacity-60" />
    </a>
  );
}

function ArabicPattern({ opacity = 0.08, color = '#D4AF37' }: { opacity?: number; color?: string }) {
  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity }} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="ap1" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
          <path d="M30 0L60 30L30 60L0 30Z" fill="none" stroke={color} strokeWidth="0.5" />
          <path d="M30 10L50 30L30 50L10 30Z" fill="none" stroke={color} strokeWidth="0.3" />
          <circle cx="30" cy="30" r="4" fill="none" stroke={color} strokeWidth="0.3" />
        </pattern>
        <pattern id="ap2" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
          <rect width="120" height="120" fill="url(#ap1)" />
          <path d="M60 0L120 60L60 120L0 60Z" fill="none" stroke={color} strokeWidth="0.8" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#ap2)" />
    </svg>
  );
}

function DecorativeBorder({ color = '#D4AF37' }: { color?: string }) {
  return (
    <div className="flex items-center gap-2 w-full my-3">
      <div className="flex-1 h-px" style={{ background: `linear-gradient(to right, transparent, ${color})` }} />
      <div className="w-2 h-2 rotate-45" style={{ border: `1px solid ${color}` }} />
      <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: color }} />
      <div className="w-2 h-2 rotate-45" style={{ border: `1px solid ${color}` }} />
      <div className="flex-1 h-px" style={{ background: `linear-gradient(to left, transparent, ${color})` }} />
    </div>
  );
}

function DisclaimerBanner() {
  return (
    <div className="bg-amber-50 border border-amber-200 rounded-lg px-3 py-1.5 text-center">
      <p className="text-[10px] text-amber-700">Teacher-Created Study Material — Not an Official ADEK Resource</p>
    </div>
  );
}

// KWL Chart
function KWLColumn({ title, icon, items, onAdd, onUpdate, color, bgColor, borderColor }: {
  title: string; icon: React.ReactNode; items: string[];
  onAdd: () => void; onUpdate: (index: number, value: string) => void;
  color: string; bgColor: string; borderColor: string;
}) {
  return (
    <div className={`flex-1 min-w-0 rounded-xl border-2 ${borderColor} ${bgColor} p-3`}>
      <div className={`flex items-center gap-2 mb-3 font-bold ${color}`}>
        {icon}<span className="text-sm">{title}</span>
      </div>
      <div className="space-y-2">
        {items.map((item, idx) => (
          <Input key={idx} value={item} onChange={(e) => onUpdate(idx, e.target.value)}
            placeholder={`${title}...`} className="text-xs bg-white/80 border-0 focus:ring-1 focus:ring-amber-400" />
        ))}
        <Button variant="ghost" size="sm" onClick={onAdd} className="w-full text-xs h-7">+ Add</Button>
      </div>
    </div>
  );
}

function KWLChart() {
  const [knowItems, setKnowItems] = useState<string[]>(['']);
  const [wantItems, setWantItems] = useState<string[]>(['']);
  const [learnedItems, setLearnedItems] = useState<string[]>(['']);

  return (
    <div className="flex gap-3 overflow-x-auto pb-2">
      <KWLColumn title="What I Know" icon={<Eye className="w-4 h-4" />} items={knowItems}
        onAdd={() => setKnowItems([...knowItems, ''])} onUpdate={(i, v) => { const a = [...knowItems]; a[i] = v; setKnowItems(a); }}
        color="text-amber-700" bgColor="bg-amber-50/50" borderColor="border-amber-300" />
      <KWLColumn title="Want to Know" icon={<Lightbulb className="w-4 h-4" />} items={wantItems}
        onAdd={() => setWantItems([...wantItems, ''])} onUpdate={(i, v) => { const a = [...wantItems]; a[i] = v; setWantItems(a); }}
        color="text-emerald-700" bgColor="bg-emerald-50/50" borderColor="border-emerald-300" />
      <KWLColumn title="What I Learned" icon={<CheckCircle2 className="w-4 h-4" />} items={learnedItems}
        onAdd={() => setLearnedItems([...learnedItems, ''])} onUpdate={(i, v) => { const a = [...learnedItems]; a[i] = v; setLearnedItems(a); }}
        color="text-rose-700" bgColor="bg-rose-50/50" borderColor="border-rose-300" />
    </div>
  );
}

// Interactive Map (generic)
function InteractiveMap({ markers }: { markers: Array<{ name: string; desc: string; lat: number; lng: number; color: string }> }) {
  const [mapReady, setMapReady] = useState(false);
  const mapRef = useRef<HTMLDivElement>(null);
  const leafletMapRef = useRef<ReturnType<typeof import('leaflet').default.map> | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined' || !mapRef.current || leafletMapRef.current) return;
    // Inject leaflet CSS dynamically to avoid SSR crash
    if (!document.querySelector('link[data-leaflet-css]')) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.css';
      link.setAttribute('data-leaflet-css', '1');
      document.head.appendChild(link);
    }
    let cancelled = false;
    import('leaflet').then((L) => {
      if (cancelled || !mapRef.current || leafletMapRef.current) return;
      delete (L.Icon.Default.prototype as Record<string, unknown>)._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
        iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
      });
      const center = markers.length > 0 ? [markers.reduce((s, m) => s + m.lat, 0) / markers.length, markers.reduce((s, m) => s + m.lng, 0) / markers.length] as [number, number] : [25, 55];
      const map = L.map(mapRef.current, { center, zoom: 4, scrollWheelZoom: true });
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>', maxZoom: 10,
      }).addTo(map);
      markers.forEach(m => {
        L.circleMarker([m.lat, m.lng], { radius: 8, fillColor: m.color, color: '#fff', weight: 2, opacity: 1, fillOpacity: 0.8 })
          .addTo(map).bindPopup(`<strong style="color:${m.color}">${m.name}</strong><p style="font-size:12px;margin:4px 0">${m.desc}</p>`);
      });
      leafletMapRef.current = map;
      setMapReady(true);
      setTimeout(() => map.invalidateSize(), 200);
    });
    return () => { cancelled = true; if (leafletMapRef.current) { leafletMapRef.current.remove(); leafletMapRef.current = null; } };
  }, [markers]);

  return (
    <div className="relative rounded-xl border-2 border-amber-200 overflow-hidden" style={{ height: '350px' }}>
      <div ref={mapRef} className="w-full h-full" />
      {!mapReady && (
        <div className="absolute inset-0 bg-gradient-to-b from-amber-50 to-rose-50 flex items-center justify-center">
          <div className="text-center"><Globe className="w-10 h-10 text-[#D4AF37] mx-auto mb-2 animate-pulse" /><p className="text-sm text-amber-700 font-medium">Loading map...</p></div>
        </div>
      )}
    </div>
  );
}

// Quiz Engine
function QuizEngine({ questions, lessonId, studentCode, gradeNum, termNum, unitKey, lessonTitle, dokLevel, domains, onComplete }: {
  questions: QuizQuestion[]; lessonId: string; studentCode: string;
  gradeNum: number; termNum: number; unitKey: string; lessonTitle: string;
  dokLevel: string; domains: string; onComplete?: (score: number) => void;
}) {
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number | string>>({});
  const [showExplanation, setShowExplanation] = useState(false);
  const [quizComplete, setQuizComplete] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [markSaved, setMarkSaved] = useState(false);

  const question = questions[currentQ];
  const isAnswered = answers[question.id] !== undefined;
  const isCorrect = isAnswered && answers[question.id] === question.correctAnswer;

  const handleAnswer = (answer: number | string) => {
    if (isAnswered) return;
    setAnswers(prev => ({ ...prev, [question.id]: answer }));
    setShowExplanation(true);
    if (answer === question.correctAnswer) SoundFX.correct(); else SoundFX.incorrect();
  };

  const nextQuestion = () => {
    if (currentQ < questions.length - 1) {
      setCurrentQ(currentQ + 1);
      setShowExplanation(false);
    } else {
      const finalScore = questions.reduce((acc, q) => acc + (answers[q.id] === q.correctAnswer ? 1 : 0), 0);
      const pct = Math.round((finalScore / questions.length) * 100);
      setQuizComplete(true);
      saveQuizResult({
        studentCode: studentCode || 'anonymous',
        lessonId, grade: gradeNum, term: termNum, unit: unitKey,
        lessonTitle, score: finalScore, total: questions.length,
        percentage: pct, dok_level: dokLevel, domains,
        completedAt: new Date().toISOString(),
      });
      setMarkSaved(true);
      if (pct >= 60) { SoundFX.celebrate(); setShowConfetti(true); setTimeout(() => setShowConfetti(false), 4000); }
      onComplete?.(finalScore);
    }
  };

  const score = questions.reduce((acc, q) => acc + (answers[q.id] === q.correctAnswer ? 1 : 0), 0);

  if (quizComplete) {
    const percentage = Math.round((score / questions.length) * 100);
    return (
      <div className="text-center space-y-4 py-6">
        {showConfetti && <ConfettiCelebration />}
        <div className="inline-flex items-center justify-center w-28 h-28 rounded-full border-4" style={{
          borderColor: percentage >= 75 ? '#34d399' : percentage >= 50 ? '#fbbf24' : '#fb7185',
          backgroundColor: percentage >= 75 ? '#ecfdf5' : percentage >= 50 ? '#fffbeb' : '#fff1f2',
        }}>
          <div>
            <div className="text-3xl font-bold" style={{ color: percentage >= 75 ? '#059669' : percentage >= 50 ? '#d97706' : '#e11d48' }}>
              {score}/{questions.length}
            </div>
            <div className="text-sm font-medium" style={{ color: percentage >= 75 ? '#10b981' : percentage >= 50 ? '#f59e0b' : '#f43f5e' }}>
              {percentage}%
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-800">
            {percentage >= 75 ? '🌟 Excellent Work!' : percentage >= 50 ? '📚 Good Effort!' : '💪 Keep Learning!'}
          </h3>
          <p className="text-gray-600 text-sm mt-1">You scored {percentage}% on this quiz</p>
        </div>
        {markSaved && <Badge className="bg-emerald-100 text-emerald-700 border-emerald-300"><CheckCircle2 className="w-3 h-3 mr-1" /> Mark Saved</Badge>}
        <div className="space-y-2">
          {questions.map((q) => (
            <div key={q.id} className="flex items-center gap-2 text-sm px-4 py-2 rounded-lg" style={{
              backgroundColor: answers[q.id] === q.correctAnswer ? '#ecfdf5' : '#fff1f2',
              color: answers[q.id] === q.correctAnswer ? '#047857' : '#be123c',
            }}>
              {answers[q.id] === q.correctAnswer ? <CheckCircle2 className="w-4 h-4" /> : <XCircle className="w-4 h-4" />}
              <span className="text-left">{q.question}</span>
            </div>
          ))}
        </div>
        <Button onClick={() => { setQuizComplete(false); setCurrentQ(0); setAnswers({}); setShowExplanation(false); setMarkSaved(false); }}
          className="bg-[#722F37] hover:bg-[#5A1A23] text-white">Try Again</Button>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs font-medium text-gray-500">Question {currentQ + 1} of {questions.length}</span>
        <div className="flex gap-1">
          {questions.map((_, i) => (
            <div key={i} className="w-2 h-2 rounded-full" style={{ backgroundColor: i < currentQ ? '#D4AF37' : i === currentQ ? '#722F37' : '#e5e7eb' }} />
          ))}
        </div>
      </div>
      <div className="bg-gradient-to-br from-amber-50 to-rose-50 rounded-xl p-4 border border-amber-200">
        <h4 className="font-bold text-gray-800 text-sm mb-3">{question.question}</h4>
        <div className="space-y-2">
          {question.options?.map((option, idx) => {
            const isSelected = answers[question.id] === idx;
            const isCorrectOption = question.correctAnswer === idx;
            let optionStyle: React.CSSProperties = { borderColor: '#e5e7eb', backgroundColor: '#ffffff', cursor: 'pointer' };
            let optionHoverClass = 'hover:border-[#D4AF37] hover:bg-amber-50';
            if (isAnswered) {
              optionHoverClass = '';
              if (isCorrectOption) optionStyle = { borderColor: '#34d399', backgroundColor: '#ecfdf5', boxShadow: '0 0 0 2px #a7f3d0' };
              else if (isSelected && !isCorrectOption) optionStyle = { borderColor: '#fb7185', backgroundColor: '#fff1f2', boxShadow: '0 0 0 2px #fecdd3' };
              else optionStyle = { borderColor: '#e5e7eb', backgroundColor: '#f9fafb', opacity: 0.5 };
            }
            return (
              <button key={idx} onClick={() => handleAnswer(idx)} disabled={isAnswered}
                className={`w-full text-left px-4 py-2.5 rounded-lg border-2 text-sm transition-all ${optionHoverClass}`}
                style={optionStyle}>
                <span className="font-medium mr-2 text-gray-500">{String.fromCharCode(65 + idx)})</span>
                {option}
                {isAnswered && isCorrectOption && <CheckCircle2 className="inline w-4 h-4 ml-2 text-emerald-600" />}
                {isAnswered && isSelected && !isCorrectOption && <XCircle className="inline w-4 h-4 ml-2 text-rose-600" />}
              </button>
            );
          })}
        </div>
      </div>
      {showExplanation && question.explanation && (
        <div className="p-3 rounded-lg border text-xs" style={{
          backgroundColor: isCorrect ? '#ecfdf5' : '#fffbeb',
          borderColor: isCorrect ? '#a7f3d0' : '#fde68a',
          color: isCorrect ? '#065f46' : '#92400e',
        }}>
          <div className="flex items-start gap-2">
            {isCorrect ? <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0" /> : <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />}
            <div><span className="font-bold">{isCorrect ? 'Correct!' : 'Not quite!'}</span><p className="mt-0.5">{question.explanation}</p></div>
          </div>
        </div>
      )}
      {isAnswered && (
        <Button onClick={nextQuestion} className="w-full bg-[#722F37] hover:bg-[#5A1A23] text-white">
          {currentQ < questions.length - 1 ? 'Next Question →' : 'See Results'}
        </Button>
      )}
    </div>
  );
}

// Activity Timer
function ActivityTimer({ duration }: { duration: number }) {
  const [timeLeft, setTimeLeft] = useState(duration * 60);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (isRunning && timeLeft > 0) {
      intervalRef.current = setInterval(() => {
        setTimeLeft(prev => { if (prev <= 1) { setIsRunning(false); return 0; } return prev - 1; });
      }, 1000);
    }
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [isRunning, timeLeft]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const progress = ((duration * 60 - timeLeft) / (duration * 60)) * 100;
  const isComplete = timeLeft === 0;

  return (
    <div className="flex items-center gap-3">
      <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono font-bold" style={{
        backgroundColor: isComplete ? '#d1fae5' : timeLeft < 60 ? '#ffe4e6' : '#fef3c7',
        color: isComplete ? '#047857' : timeLeft < 60 ? '#be123c' : '#b45309',
      }}>
        <Timer className="w-3 h-3" />{String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
      </div>
      <Progress value={progress} className="flex-1 h-2" />
      {!isComplete && (
        <Button size="sm" variant={isRunning ? 'outline' : 'default'}
          onClick={() => setIsRunning(!isRunning)}
          className={`text-xs h-7 ${!isRunning ? 'bg-[#D4AF37] hover:bg-amber-600 text-white' : ''}`}>
          {isRunning ? 'Pause' : 'Start'}
        </Button>
      )}
      {isComplete && <Badge className="bg-emerald-100 text-emerald-700 border-emerald-300 text-xs"><CheckCircle2 className="w-3 h-3 mr-1" /> Done</Badge>}
    </div>
  );
}

// Grade Icon
function GradeIcon({ type, className = 'w-8 h-8' }: { type: 'heart' | 'globe' | 'landmark' | 'crown'; className?: string }) {
  switch (type) {
    case 'heart': return <Heart className={className} />;
    case 'globe': return <Globe className={className} />;
    case 'landmark': return <Landmark className={className} />;
    case 'crown': return <Crown className={className} />;
  }
}

// Reading continuation component — shows "Continue Reading" button for long texts
function ReadingContinuation({ content }: { content: string }) {
  const [expanded, setExpanded] = useState(false);
  if (expanded) {
    return <div className="prose prose-sm max-w-none text-gray-700 leading-relaxed whitespace-pre-line text-sm mt-3">{content}</div>;
  }
  return (
    <div className="mt-3 text-center">
      <Button variant="outline" size="sm" onClick={() => setExpanded(true)} className="border-amber-300 text-amber-700 hover:bg-amber-50">
        <BookOpen className="w-3 h-3 mr-1" /> Continue Reading
      </Button>
    </div>
  );
}

// Visual renderer for rich content visuals
function VisualRenderer({ type, data }: { type: string; data: Record<string, unknown> }) {
  if (type === 'venn') {
    const vd = data as { leftTitle?: string; rightTitle?: string; centerTitle?: string; leftItems?: string[]; rightItems?: string[]; centerItems?: string[] };
    return (
      <ComparisonChart
        leftTitle={vd.leftTitle || 'Left'} rightTitle={vd.rightTitle || 'Right'} centerTitle={vd.centerTitle || 'Both'}
        leftItems={vd.leftItems || []} rightItems={vd.rightItems || []} centerItems={vd.centerItems || []}
      />
    );
  }
  if (type === 'diagram' || type === 'chart' || type === 'mindmap' || type === 'piechart') {
    const vd = data as { title?: string; items?: unknown[] };
    return (
      <Card className="border-2 border-amber-200 bg-amber-50/20">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-bold text-amber-800 flex items-center gap-2">
            <BarChart3 className="w-4 h-4" /> {vd.title || 'Visual'}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {(vd.items || []).map((item, i) => {
              const label = typeof item === 'string' ? item : (item as Record<string, unknown>)?.label || `Item ${i + 1}`;
              const desc = typeof item === 'string' ? '' : (item as Record<string, unknown>)?.description || '';
              return (
                <div key={i} className="bg-white border border-amber-200 rounded-lg px-3 py-2 text-xs">
                  <span className="font-bold text-gray-800">{label}</span>
                  {desc && <p className="text-gray-500 mt-0.5">{String(desc)}</p>}
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    );
  }
  if (type === 'timeline') {
    const vd = data as { title?: string; events?: Array<{ year?: string; event?: string }> };
    return (
      <Card className="border-2 border-amber-200 bg-amber-50/20">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-bold text-amber-800 flex items-center gap-2">
            <Calendar className="w-4 h-4" /> {vd.title || 'Timeline'}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {(vd.events || []).map((evt, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-16 text-right font-bold text-amber-700 text-xs shrink-0">{evt.year}</div>
                <div className="w-3 h-3 rounded-full bg-[#722F37] shrink-0" />
                <div className="text-xs text-gray-700">{evt.event}</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    );
  }
  return null;
}

// Venn Diagram (generic)
function ComparisonChart({ leftTitle, rightTitle, centerTitle, leftItems: initialLeft, rightItems: initialRight, centerItems: initialCenter }: {
  leftTitle: string; rightTitle: string; centerTitle: string;
  leftItems: string[]; rightItems: string[]; centerItems: string[];
}) {
  const [leftItems, setLeftItems] = useState(initialLeft);
  const [rightItems, setRightItems] = useState(initialRight);
  const [centerItems, setCenterItems] = useState(initialCenter);
  const [newItem, setNewItem] = useState('');
  const [target, setTarget] = useState<'left' | 'center' | 'right'>('left');

  const addItem = () => {
    if (!newItem.trim()) return;
    if (target === 'left') setLeftItems([...leftItems, newItem.trim()]);
    else if (target === 'center') setCenterItems([...centerItems, newItem.trim()]);
    else setRightItems([...rightItems, newItem.trim()]);
    setNewItem('');
  };

  const colorStyles: Record<string, { border: string; bg: string; bgLight: string; bgHeader: string; bgItem: string; borderItem: string }> = {
    amber: { border: '#fcd34d', bg: '#fffbeb', bgLight: '#fef3c7', bgHeader: '#fde68a', bgItem: '#fef3c7', borderItem: '#fde68a' },
    rose: { border: '#fda4af', bg: '#fff1f2', bgLight: '#ffe4e6', bgHeader: '#fecdd3', bgItem: '#ffe4e6', borderItem: '#fecdd3' },
    emerald: { border: '#6ee7b7', bg: '#ecfdf5', bgLight: '#d1fae5', bgHeader: '#a7f3d0', bgItem: '#d1fae5', borderItem: '#a7f3d0' },
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-3 gap-3">
        {[
          { title: leftTitle, items: leftItems, color: 'amber' },
          { title: centerTitle, items: centerItems, color: 'rose' },
          { title: rightTitle, items: rightItems, color: 'emerald' },
        ].map((col, i) => (
          <div key={i} className="rounded-xl border-2 overflow-hidden" style={{ borderColor: colorStyles[col.color].border, backgroundColor: colorStyles[col.color].bg }}>
            <div className="px-3 py-2.5 text-center" style={{ backgroundColor: colorStyles[col.color].bgHeader }}>
              <h4 className="text-sm font-bold text-gray-800">{col.title}</h4>
            </div>
            <div className="p-3 space-y-2">
              {col.items.map((item, j) => (
                <div key={j} className="border rounded-lg px-3 py-1.5 text-xs text-gray-700 font-medium" style={{ backgroundColor: colorStyles[col.color].bgItem, borderColor: colorStyles[col.color].borderItem }}>
                  {item}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="flex gap-2 items-center">
        <Input value={newItem} onChange={e => setNewItem(e.target.value)} placeholder="Add a comparison point..."
          className="text-sm flex-1" onKeyDown={e => e.key === 'Enter' && addItem()} />
        <select value={target} onChange={e => setTarget(e.target.value as 'left' | 'center' | 'right')}
          className="text-sm border rounded-md px-3 py-2 bg-white">
          <option value="left">{leftTitle}</option>
          <option value="center">{centerTitle}</option>
          <option value="right">{rightTitle}</option>
        </select>
        <Button size="sm" onClick={addItem} className="text-sm bg-[#D4AF37] hover:bg-amber-600 text-white">Add</Button>
      </div>
    </div>
  );
}


// ═══════════════════════════════════════════════════════════════
// ERROR BOUNDARY
// ═══════════════════════════════════════════════════════════════


interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
  errorInfo: { componentStack: string } | null;
}

class ErrorBoundary extends Component<{ children: ReactNode }, ErrorBoundaryState> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }
  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }
  componentDidCatch(error: Error, errorInfo: { componentStack: string }) {
    console.error('MSCS Academy Error:', error, errorInfo);
    this.setState({ errorInfo });
  }
  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ color: '#722F37', marginBottom: '10px' }}>Something went wrong</h2>
          <div style={{ background: '#fff1f2', border: '2px solid #fca5a5', borderRadius: '8px', padding: '16px', marginBottom: '16px' }}>
            <p style={{ fontWeight: 'bold', color: '#dc2626', marginBottom: '8px' }}>{this.state.error?.message}</p>
            <pre style={{ fontSize: '11px', overflow: 'auto', color: '#7f1d1d', whiteSpace: 'pre-wrap' }}>{this.state.error?.stack}</pre>
          </div>
          {this.state.errorInfo && (
            <div style={{ background: '#fef3c7', border: '2px solid #fcd34d', borderRadius: '8px', padding: '16px' }}>
              <p style={{ fontWeight: 'bold', marginBottom: '8px' }}>Component Stack:</p>
              <pre style={{ fontSize: '11px', overflow: 'auto', whiteSpace: 'pre-wrap' }}>{this.state.errorInfo.componentStack}</pre>
            </div>
          )}
          <button onClick={() => { this.setState({ hasError: false, error: null, errorInfo: null }); window.location.href = '/'; }}
            style={{ marginTop: '16px', padding: '8px 16px', background: '#722F37', color: 'white', borderRadius: '8px', border: 'none', cursor: 'pointer' }}>
            Go Home
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

// ═══════════════════════════════════════════════════════════════
// MAIN APPLICATION
// ═══════════════════════════════════════════════════════════════

export default function Home() {
  const [view, setView] = useState<ViewType>('landing');
  const [selectedGrade, setSelectedGrade] = useState<GradeInfo | null>(null);
  const [selectedTerm, setSelectedTerm] = useState<TermInfo | null>(null);
  const [selectedUnit, setSelectedUnit] = useState<UnitInfo | null>(null);
  const [selectedLesson, setSelectedLesson] = useState<LessonData | null>(null);
  const [selectedLessonIndex, setSelectedLessonIndex] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideDirection, setSlideDirection] = useState<'left' | 'right'>('right');
  const [isAnimating, setIsAnimating] = useState(false);
  const [loginCode, setLoginCode] = useState('');
  const [loginError, setLoginError] = useState('');
  const [adminPassword, setAdminPassword] = useState('');
  const [showAdminPassword, setShowAdminPassword] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [studentName, setStudentName] = useState('');
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);
  const [language, setLanguage] = useState('en');
  const [dashboardGrade, setDashboardGrade] = useState<number>(0);
  const [showClassroomRules, setShowClassroomRules] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  const gradeInfoList = useMemo(() => getGradeInfo(), []);
  const platformStats = useMemo(() => getPlatformStats(), []);

  const t = useCallback((key: string) => translations[language]?.[key] || translations.en[key] || key, [language]);

  useEffect(() => {
    const handleScroll = () => setShowScrollIndicator(window.scrollY < 100);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateTo = (newView: ViewType) => { setView(newView); window.scrollTo({ top: 0, behavior: 'smooth' }); };
  const navigateSlide = (direction: 'left' | 'right') => { setSlideDirection(direction); setIsAnimating(true); setTimeout(() => setIsAnimating(false), 400); };

  // Color map for grades — uses inline CSS gradient strings (NOT Tailwind classes) to avoid production purging
  const gradeColorMap: Record<number, { gradientBg: string; accent: string }> = {
    6: { gradientBg: 'linear-gradient(to right, #d97706, #92400e)', accent: '#D97706' },
    7: { gradientBg: 'linear-gradient(to right, #047857, #065f46)', accent: '#047857' },
    8: { gradientBg: 'linear-gradient(to right, #be123c, #722F37)', accent: '#722F37' },
    9: { gradientBg: 'linear-gradient(to right, #0d9488, #115e59)', accent: '#0D9488' },
  };

  // ════════════════════════════════════════════════════════════
  // LANDING PAGE
  // ════════════════════════════════════════════════════════════

  const renderLanding = () => (
    <div className="min-h-screen flex flex-col">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#722F37] via-[#5A1A23] to-[#3D0F15]" />
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'url(/hero-pattern.png)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <ArabicPattern opacity={0.08} color="#D4AF37" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-black/30" />

        <div className="absolute top-4 right-4 z-20">
          <div className="relative">
            <button onClick={() => setLangOpen(!langOpen)} className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-[#D4AF37]/30 flex items-center justify-center text-white hover:bg-white/20 transition-colors" title="Language">
              <Globe className="w-5 h-5" />
            </button>
            {langOpen && (
              <div className="absolute right-0 mt-2 bg-white/95 backdrop-blur-md rounded-xl shadow-xl border border-gray-200 py-2 min-w-[160px] z-50">
                {[
                  { value: 'en', flag: '🇬🇧', label: 'English' },
                  { value: 'ar', flag: '🇸🇦', label: 'العربية' },
                  { value: 'ur', flag: '🇵🇰', label: 'اردو' },
                  { value: 'fa', flag: '🇮🇷', label: 'فارسی' },
                  { value: 'es', flag: '🇪🇸', label: 'Español' },
                  { value: 'ru', flag: '🇷🇺', label: 'Русский' },
                  { value: 'tr', flag: '🇹🇷', label: 'Türkçe' },
                  { value: 'fr', flag: '🇫🇷', label: 'Français' },
                ].map(lang => (
                  <button key={lang.value} onClick={() => { setLanguage(lang.value); setLangOpen(false); }}
                    className={`w-full text-left px-4 py-2 text-sm hover:bg-amber-50 transition-colors ${language === lang.value ? 'bg-amber-50 font-bold text-[#722F37]' : 'text-gray-700'}`}>
                    {lang.flag} {lang.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="absolute top-28 left-10 w-24 h-24 border border-[#D4AF37]/20 rounded-full animate-pulse" />
        <div className="absolute top-48 right-20 w-16 h-16 border border-[#D4AF37]/15 rotate-45 animate-bounce" style={{ animationDuration: '3s' }} />
        <div className="absolute bottom-40 left-20 w-20 h-20 border border-[#D4AF37]/20 rounded-full animate-pulse" style={{ animationDuration: '4s' }} />

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="flex justify-center mb-6">
            <div className="flex items-center gap-2">
              <div className="w-12 h-px bg-gradient-to-r from-transparent to-[#D4AF37]" />
              <div className="w-3 h-3 rotate-45 border border-[#D4AF37]" />
              <div className="w-2 h-2 rounded-full bg-[#D4AF37]" />
              <div className="w-3 h-3 rotate-45 border border-[#D4AF37]" />
              <div className="w-12 h-px bg-gradient-to-l from-transparent to-[#D4AF37]" />
            </div>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-2 tracking-tight">
            <span style={{ color: '#D4AF37' }}>MSCS</span> Academy
          </h1>

          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#D4AF37]/60" />
            <Scroll className="w-5 h-5 text-[#D4AF37]/60" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#D4AF37]/60" />
          </div>

          <p className="text-lg sm:text-xl md:text-2xl text-amber-100/90 mb-4 font-light">{t('subtitle')}</p>
          <p className="text-sm sm:text-base text-amber-200/70 mb-3 italic">{t('interactivePlatform')}</p>

          <div className="flex items-center justify-center gap-3 mb-6 flex-wrap">
            <Button onClick={() => navigateTo('aboutPage')} className="bg-white/15 backdrop-blur-sm border border-[#D4AF37]/30 text-white hover:bg-white/25 text-sm">
              <Info className="w-4 h-4 mr-2" /> {t('about')}
            </Button>
            <Button onClick={() => navigateTo('loginPage')} className="bg-white/15 backdrop-blur-sm border border-[#D4AF37]/30 text-white hover:bg-white/25 text-sm">
              <LogIn className="w-4 h-4 mr-2" /> {t('studentLogin')}
            </Button>
            <Button onClick={() => navigateTo('consentPage')} className="bg-white/15 backdrop-blur-sm border border-[#D4AF37]/30 text-white hover:bg-white/25 text-sm">
              <Shield className="w-4 h-4 mr-2" /> {t('parentalConsent')}
            </Button>
          </div>

          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-[#D4AF37]/30 rounded-full px-6 py-3 mb-8">
            <GraduationCap className="w-5 h-5 text-[#D4AF37]" />
            <a href="https://mr-ahmed-ali.vercel.app" target="_blank" rel="noopener noreferrer"
              className="text-lg font-bold text-[#D4AF37] hover:text-amber-300 transition-colors">Mr. Ahmed Ali</a>
            <ExternalLink className="w-3 h-3 text-[#D4AF37]/60" />
          </div>

          <p className="text-base sm:text-lg text-white/80 mb-4 font-medium">{t('tagline')}</p>

          <div className="flex items-center justify-center gap-4 sm:gap-6 mb-10 text-white/60 text-xs sm:text-sm">
            <span className="flex items-center gap-1.5"><GraduationCap className="w-4 h-4 text-[#D4AF37]" /> {platformStats.totalGrades} Grades</span>
            <span className="w-1 h-1 rounded-full bg-[#D4AF37]/40" />
            <span className="flex items-center gap-1.5"><BookOpen className="w-4 h-4 text-[#D4AF37]" /> {platformStats.totalLessons} Lessons</span>
            <span className="w-1 h-1 rounded-full bg-[#D4AF37]/40" />
            <span className="flex items-center gap-1.5"><Sparkles className="w-4 h-4 text-[#D4AF37]" /> {platformStats.totalActivities}+ Activities</span>
          </div>

          <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {gradeInfoList.map(grade => (
              <button key={grade.key} onClick={() => { setSelectedGrade(grade); navigateTo('gradeSelect'); }}
                className="group relative overflow-hidden rounded-xl border-2 border-[#D4AF37]/30 bg-white/10 backdrop-blur-sm p-5 text-center transition-all duration-300 hover:border-[#D4AF37] hover:bg-white/20 hover:scale-105 hover:shadow-xl hover:shadow-[#D4AF37]/10">
                <div className="relative z-10">
                  <div className="text-[#D4AF37] mb-2 flex justify-center group-hover:scale-110 transition-transform">
                    <GradeIcon type={grade.iconType} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1">{grade.title}</h3>
                  <p className="text-xs text-amber-200/70">{grade.tagline}</p>
                </div>
              </button>
            ))}
          </div>
        </div>

        {showScrollIndicator && (
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
            <span className="text-xs text-amber-200/60">Explore</span>
            <ChevronDown className="w-5 h-5 text-[#D4AF37]/60" />
          </div>
        )}
      </section>

      {/* Features */}
      <section className="relative bg-[#FFF9F0] py-16 px-4">
        <ArabicPattern opacity={0.03} color="#722F37" />
        <div className="relative z-10 max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#722F37] mb-3">{t('whyTitle')}</h2>
          <DecorativeBorder color="#D4AF37" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {[
              { icon: <Brain className="w-8 h-8" />, title: t('feature1'), desc: t('feature1d'), color: '#d97706', bg: '#fffbeb', border: '#fde68a' },
              { icon: <Target className="w-8 h-8" />, title: t('feature2'), desc: t('feature2d'), color: '#059669', bg: '#ecfdf5', border: '#a7f3d0' },
              { icon: <MapPin className="w-8 h-8" />, title: t('feature3'), desc: t('feature3d'), color: '#e11d48', bg: '#fff1f2', border: '#fecdd3' },
              { icon: <Timer className="w-8 h-8" />, title: t('feature4'), desc: t('feature4d'), color: '#0d9488', bg: '#f0fdfa', border: '#99f6e4' },
              { icon: <Award className="w-8 h-8" />, title: t('feature5'), desc: t('feature5d'), color: '#ea580c', bg: '#fff7ed', border: '#fed7aa' },
              { icon: <Users className="w-8 h-8" />, title: t('feature6'), desc: t('feature6d'), color: '#9333ea', bg: '#faf5ff', border: '#e9d5ff' },
            ].map((feature, i) => (
              <Card key={i} className="border-2 hover:shadow-lg transition-shadow" style={{ borderColor: feature.border, backgroundColor: feature.bg }}>
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-3" style={{ color: feature.color }}>{feature.icon}</div>
                  <h3 className="font-bold text-gray-800 mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Instructor */}
      <section className="relative bg-gradient-to-br from-[#722F37] to-[#5A1A23] py-16 px-4">
        <ArabicPattern opacity={0.06} color="#D4AF37" />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-3">{t('meetInstructor')}</h2>
          <DecorativeBorder color="#D4AF37" />
          <div className="mt-8 bg-white/10 backdrop-blur-sm rounded-xl border border-[#D4AF37]/20 p-8">
            <div className="w-20 h-20 rounded-full bg-[#D4AF37]/20 border-2 border-[#D4AF37] flex items-center justify-center mx-auto mb-4">
              <GraduationCap className="w-10 h-10 text-[#D4AF37]" />
            </div>
            <a href="https://mr-ahmed-ali.vercel.app" target="_blank" rel="noopener noreferrer"
              className="text-2xl font-bold text-[#D4AF37] hover:text-amber-300 transition-colors inline-flex items-center gap-2">
              Mr. Ahmed Ali <ExternalLink className="w-5 h-5" />
            </a>
            <p className="text-amber-100/80 mt-3 text-sm leading-relaxed">{t('instructorDesc')}</p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Badge className="bg-[#D4AF37]/20 text-[#D4AF37] border-[#D4AF37]/30">MSCS Specialist</Badge>
              <Badge className="bg-[#D4AF37]/20 text-[#D4AF37] border-[#D4AF37]/30">UAE Curriculum</Badge>
              <Badge className="bg-[#D4AF37]/20 text-[#D4AF37] border-[#D4AF37]/30">Interactive Learning</Badge>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#1a0a0c] text-white/60 py-8 px-4 text-center mt-auto">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm">
            <a href="https://mr-ahmed-ali.vercel.app" target="_blank" rel="noopener noreferrer" className="text-[#D4AF37] hover:text-amber-400 transition-colors font-semibold">Mr. Ahmed Ali</a>
            {' '}— {t('footerTagline')}
          </p>
          <p className="text-[10px] text-white/30 mt-2">Teacher-Created Study Material — Not an Official ADEK Resource</p>
          <p className="text-xs text-white/40 mt-3">{t('copyright')}</p>
          <div className="flex justify-center gap-4 mt-4">
            <button onClick={() => navigateTo('aboutPage')} className="text-xs text-white/40 hover:text-[#D4AF37] transition-colors">{t('about')}</button>
            <button onClick={() => navigateTo('loginPage')} className="text-xs text-white/40 hover:text-[#D4AF37] transition-colors">{t('studentLogin')}</button>
            <button onClick={() => navigateTo('consentPage')} className="text-xs text-white/40 hover:text-[#D4AF37] transition-colors">{t('parentalConsent')}</button>
          </div>
        </div>
      </footer>
    </div>
  );

  // ════════════════════════════════════════════════════════════
  // GRADE SELECT PAGE
  // ════════════════════════════════════════════════════════════

  const renderGradeSelect = () => {
    if (!selectedGrade) return null;
    const grade = selectedGrade;
    const colors = gradeColorMap[grade.number];

    return (
      <div className="min-h-screen bg-[#FFF9F0] flex flex-col">
        <div className="relative py-12 px-4" style={{ background: colors.gradientBg }}>
          <ArabicPattern opacity={0.08} color="#D4AF37" />
          <div className="relative z-10 max-w-4xl mx-auto">
            <Button variant="ghost" onClick={() => navigateTo('landing')} className="text-white/80 hover:text-white hover:bg-white/10 mb-4">
              <ChevronLeft className="w-4 h-4 mr-1" /> Back to Home
            </Button>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-white/10 border-2 border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37]">
                <GradeIcon type={grade.iconType} className="w-8 h-8" />
              </div>
              <div>
                <h1 className="text-3xl sm:text-4xl font-bold text-white">{grade.title}</h1>
                <p className="text-white/80">{grade.tagline}</p>
                <p className="text-white/60 text-sm mt-1">{grade.totalLessons} lessons across {grade.terms.length} terms</p>
              </div>
            </div>
            <div className="mt-4 flex items-center gap-2">
              <AhmedAliLink size="md" />
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 py-8 space-y-8 flex-1">
          {grade.terms.map(term => (
            <div key={term.key}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#722F37] to-[#5A1A23] flex items-center justify-center text-white font-bold text-sm">
                  T{term.number}
                </div>
                <h2 className="text-xl font-bold text-gray-800">{term.title}</h2>
                <div className="flex-1 h-px bg-gray-200" />
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {term.units.map(unit => {
                  // Fetch actual lessons for this unit
                  const unitData = getUnitData(grade.key, term.key, unit.key);
                  const lessonCount = unitData ? unitData.lessons.length : unit.lessonCount;

                  return (
                    <Card key={unit.key} className="border-2 hover:shadow-lg transition-all cursor-pointer group border-gray-200 bg-white hover:border-amber-300"
                      onClick={() => { setSelectedTerm(term); setSelectedUnit(unit); navigateTo('unitSelect'); }}>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-bold text-gray-800 leading-tight group-hover:text-[#722F37] transition-colors">
                          {unit.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-xs text-gray-500 mb-2">{unit.description}</p>
                        <div className="flex items-center gap-3 text-xs text-gray-400">
                          <span className="flex items-center gap-1"><BookOpen className="w-3 h-3" /> {lessonCount} lessons</span>
                          <Badge className="bg-emerald-100 text-emerald-700 border-emerald-200 text-[10px]">
                            <Play className="w-2.5 h-2.5 mr-0.5" /> Interactive
                          </Badge>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <footer className="bg-[#1a0a0c] text-white/40 py-4 px-4 text-center">
          <AhmedAliLink size="sm" className="text-[#D4AF37]/60" />
          <p className="text-[10px] text-white/30 mt-1">Teacher-Created Study Material — Not an Official ADEK Resource</p>
        </footer>
      </div>
    );
  };

  // ════════════════════════════════════════════════════════════
  // UNIT SELECT PAGE — Shows ALL lessons
  // ════════════════════════════════════════════════════════════

  const renderUnitSelect = () => {
    if (!selectedGrade || !selectedTerm || !selectedUnit) return null;

    const unitData = getUnitData(selectedGrade.key, selectedTerm.key, selectedUnit.key);
    const lessons = unitData ? unitData.lessons : [];

    return (
      <div className="min-h-screen bg-[#FFF9F0] flex flex-col">
        <div className="relative py-8 px-4" style={{ background: gradeColorMap[selectedGrade.number].gradientBg }}>
          <ArabicPattern opacity={0.06} color="#D4AF37" />
          <div className="relative z-10 max-w-4xl mx-auto">
            <Button variant="ghost" onClick={() => navigateTo('gradeSelect')} className="text-white/80 hover:text-white hover:bg-white/10 mb-3">
              <ChevronLeft className="w-4 h-4 mr-1" /> Back to {selectedGrade.title}
            </Button>
            <h1 className="text-2xl font-bold text-white">{selectedUnit.title}</h1>
            <p className="text-white/70 text-sm mt-1">{selectedUnit.description}</p>
            <AhmedAliLink className="mt-2" />
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 py-8 flex-1">
          <div className="grid gap-4">
            {lessons.map((lesson, idx) => {
              const cleanTitle = getCleanTitle(lesson.title);
              const unitContext = getUnitContextFromTitle(lesson.title);
              const isPriority = lesson.title.includes('PRIORITY UNIT');

              return (
                <Card key={idx} className="border-2 hover:shadow-lg transition-all cursor-pointer group border-amber-200 bg-white hover:border-[#D4AF37]"
                  onClick={() => {
                    setSelectedLesson(lesson);
                    setSelectedLessonIndex(idx);
                    setCurrentSlide(0);
                    setShowClassroomRules(true);
                    navigateTo('lessonView');
                  }}>
                  <CardContent className="p-5">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#722F37] to-[#5A1A23] flex items-center justify-center text-white font-bold text-sm shrink-0">
                        L{idx + 1}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-bold text-gray-800 group-hover:text-[#722F37] transition-colors text-sm">
                          {cleanTitle}
                        </h3>
                        {unitContext && (
                          <p className="text-xs text-amber-600 mt-0.5">{unitContext}</p>
                        )}
                        <p className="text-xs text-gray-500 mt-1 line-clamp-2">{lesson.objective.replace(/^SWBAT\s*/i, '').substring(0, 120)}...</p>
                        <div className="flex items-center gap-3 mt-2 flex-wrap">
                          <Badge variant="outline" className="text-[10px] border-amber-300 text-amber-700">
                            Week {lesson.week}
                          </Badge>
                          <Badge variant="outline" className="text-[10px] border-emerald-300 text-emerald-700">
                            {lesson.dok}
                          </Badge>
                          <Badge variant="outline" className="text-[10px] border-rose-300 text-rose-700">
                            {lesson.domains}
                          </Badge>
                          <Badge className="bg-[#722F37] text-white text-[10px]">
                            <Play className="w-2.5 h-2.5 mr-0.5" /> Start Lesson
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        <footer className="bg-[#1a0a0c] text-white/40 py-4 px-4 text-center">
          <AhmedAliLink size="sm" className="text-[#D4AF37]/60" />
          <p className="text-[10px] text-white/30 mt-1">Teacher-Created Study Material — Not an Official ADEK Resource</p>
        </footer>
      </div>
    );
  };


  // ════════════════════════════════════════════════════════════
  // LESSON VIEWER — Dynamic for ALL lessons
  // ════════════════════════════════════════════════════════════

  const renderLessonViewer = () => {
    if (!selectedGrade || !selectedTerm || !selectedUnit || !selectedLesson) return null;

    const lesson = selectedLesson;
    const cleanTitle = getCleanTitle(lesson.title);
    const unitContext = getUnitContextFromTitle(lesson.title);
    const lessonId = getLessonId(selectedGrade.key, selectedTerm.key, selectedUnit.key, selectedLessonIndex);
    const quizQuestions = generateQuizQuestions(lesson, selectedGrade.key, selectedTerm.key, selectedUnit.key, selectedLessonIndex);
    const activities = parseActivities(lesson.activities);
    const uaeLinks = generateUAELinks(lesson);
    const warmUp = generateWarmUp(lesson);

    // Rich content lookup
    const richContent = getRichLessonContent(selectedGrade.key, selectedTerm.key, selectedUnit.key, selectedLessonIndex);

    // Standards from SLO codes
    const standards = lesson.slo_codes.split(',').map(s => s.trim()).filter(s => s.length > 0);
    // Objectives from lesson objective — split on semicolons only, not periods (periods break sentences mid-way)
    const objectives = lesson.objective.replace(/^SWBAT\s*/i, '').split(/[;]/).map(s => s.trim()).filter(s => s.length > 5).slice(0, 4);
    // Success criteria — split on numbered items pattern like (1), (2), etc., then fallback to semicolons
    const successCriteria = (() => {
      const cleaned = lesson.success_criteria.replace(/^Student can:\s*/i, '');
      const numberedMatch = cleaned.match(/\(\d+\)/);
      if (numberedMatch) {
        // Split on numbered items like (1), (2), etc.
        return cleaned.split(/\(\d+\)/).map(s => s.trim()).filter(s => s.length > 5);
      }
      return cleaned.split(/[;]/).map(s => s.trim()).filter(s => s.length > 5).slice(0, 5);
    })();

    // Map markers based on lesson topic
    const mapMarkers = generateMapMarkers(lesson);

    // Lesson-specific hero images for G6T3
    const getLessonHeroImage = (): string | null => {
      const title = lesson.title.toLowerCase();
      if (selectedGrade?.number === 6 && selectedTerm?.number === 3) {
        if (title.includes('government functions')) return '/images/g6t3/government-functions.png';
        if (title.includes('political systems') || title.includes('modern political')) return '/images/g6t3/political-systems.png';
        if (title.includes('laws are made') || title.includes('how laws are made')) return '/images/g6t3/laws-made.png';
        if (title.includes('laws are interpreted') || title.includes('how laws are interpreted')) return '/images/g6t3/laws-interpreted.png';
        if (title.includes('rights and responsibilities') || title.includes('human rights')) return '/images/g6t3/rights-responsibilities.png';
      }
      // G7 T1 lesson hero images
      if (selectedGrade?.number === 7 && selectedTerm?.number === 1) {
        if (title.includes('duties and responsibilities') || title.includes('meant by duties')) return '/images/g7t1/duties-responsibilities.png';
        if (title.includes('parents towards their children')) return '/images/g7t1/parents-children.png';
        if (title.includes('sons and daughters')) return '/images/g7t1/sons-daughters.png';
        if (title.includes('moral rules') || title.includes('moral imperative')) return '/images/g7t1/moral-rules.png';
        if (title.includes('staying safe')) return '/images/g7t1/staying-safe.png';
        if (title.includes('harmful situations') || title.includes('responding to harmful')) return '/images/g7t1/harmful-situations.png';
        if (title.includes('first aid')) return '/images/g7t1/first-aid.png';
        if (title.includes('protection against crimes') || title.includes('ways of protection')) return '/images/g7t1/protection-crimes.png';
        if (title.includes('thinking about crime')) return '/images/g7t1/thinking-crime.png';
        if (title.includes('geography of east asia')) return '/images/g7t1/geography-east-asia.png';
        if (title.includes('engineering and civilization') || title.includes('ancient china')) return '/images/g7t1/engineering-china.png';
        if (title.includes('chinese technology') || title.includes('science and medicine')) return '/images/g7t1/chinese-technology.png';
        if (title.includes('spreading cultures')) return '/images/g7t1/spreading-cultures.png';
        if (title.includes('culture through art') || title.includes('art in china')) return '/images/g7t1/culture-art.png';
        if (title.includes("korea's renaissance") || title.includes('korea')) return '/images/g7t1/korea-renaissance.png';
      }
      // Ottoman hero for G8T3
      if (title.includes('ottoman') || title.includes('suleyman') || title.includes('istanbul')) return '/ottoman-hero.png';
      return null;
    };
    const heroImage = getLessonHeroImage();

    // Build dynamic slides array — rich content when available, generic otherwise
    const slides: Array<{ id: number; type: string; title: string; content: React.ReactNode }> = [];

    // SLIDE 1: Title & Introduction (always present, enhanced with rich content)
    slides.push({
      id: 1, type: 'title', title: cleanTitle,
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-[#722F37] to-[#5A1A23] rounded-xl p-6 text-white relative overflow-hidden">
            <ArabicPattern opacity={0.06} color="#D4AF37" />
            {heroImage && (
              <div className="absolute inset-0 opacity-15" style={{ backgroundImage: `url(${heroImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
            )}
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-4">
                <Landmark className="w-8 h-8 text-[#D4AF37]" />
                <h2 className="text-2xl sm:text-3xl font-bold">{cleanTitle}</h2>
              </div>
              {unitContext && <p className="text-amber-100 text-sm">{unitContext}</p>}
              {richContent && richContent.keyVocabulary.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {richContent.keyVocabulary.map(v => (
                    <Badge key={v} className="bg-white/15 text-amber-200 border-amber-400/30 text-[10px]">{v}</Badge>
                  ))}
                </div>
              )}
              <DecorativeBorder color="#D4AF37" />
              <AhmedAliLink size="md" className="text-amber-300" />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <Card className="border-2 border-amber-200 bg-amber-50/50">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-bold text-amber-800 flex items-center gap-2">
                  <FileText className="w-4 h-4" /> Standards
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-1.5">
                  {standards.map(s => (
                    <Badge key={s} variant="outline" className="text-[10px] border-amber-300 text-amber-700">{s}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-emerald-200 bg-emerald-50/50">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-bold text-emerald-800 flex items-center gap-2">
                  <Target className="w-4 h-4" /> Objectives
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="space-y-1.5 text-xs text-emerald-700">
                  {objectives.map((obj, i) => (
                    <li key={i}>{i + 1}. {obj}</li>
                  ))}
                </ol>
              </CardContent>
            </Card>
          </div>

          <Card className="border-2 border-rose-200 bg-rose-50/50">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-bold text-rose-800 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" /> Success Criteria
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid sm:grid-cols-2 gap-2">
                {successCriteria.map((c, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-rose-700">
                    <CheckCircle2 className="w-3 h-3 mt-0.5 shrink-0" />
                    <span>{c}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <DisclaimerBanner />
        </div>
      ),
    });

    // SLIDE 2: Prior Learning / KWL (always present)
    slides.push({
      id: 2, type: 'prior-learning', title: 'Prior Learning',
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-emerald-600 to-teal-700 rounded-xl p-5 text-white">
            <div className="flex items-center gap-2 mb-2">
              <Brain className="w-6 h-6 text-amber-300" />
              <h3 className="text-xl font-bold">What Do You Already Know?</h3>
            </div>
            <p className="text-emerald-100 text-sm">Before we begin, let&apos;s activate our prior knowledge</p>
            {richContent?.kwlExplanation && (
              <div className="mt-3 bg-white/10 rounded-lg p-3 text-sm text-emerald-50">
                <Lightbulb className="w-4 h-4 inline mr-1 text-amber-300" />
                {richContent.kwlExplanation}
              </div>
            )}
          </div>

          <Card className="border-2 border-amber-200">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-bold text-gray-800">Prior Learning</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-700 leading-relaxed">{lesson.prior_learning}</p>
            </CardContent>
          </Card>

          <div>
            <h4 className="text-sm font-bold text-gray-700 mb-3 flex items-center gap-2">
              <Lightbulb className="w-4 h-4 text-[#D4AF37]" /> KWL Chart
            </h4>
            <KWLChart />
          </div>

          <AhmedAliLink />
          <DisclaimerBanner />
        </div>
      ),
    });

    // SLIDE 3: Warm-Up / Hook (always present)
    slides.push({
      id: 3, type: 'warmup', title: 'Warm-Up Activity',
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-[#722F37] via-[#5A1A23] to-[#3D0F15] rounded-xl p-8 text-center relative overflow-hidden">
            <ArabicPattern opacity={0.08} color="#D4AF37" />
            <div className="relative z-10">
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 rounded-full bg-[#D4AF37]/20 border-2 border-[#D4AF37] flex items-center justify-center">
                  <Sparkles className="w-7 h-7 text-[#D4AF37]" />
                </div>
              </div>
              <blockquote className="text-lg sm:text-xl font-semibold text-[#D4AF37] italic leading-relaxed">
                &ldquo;{warmUp.content}&rdquo;
              </blockquote>
              {warmUp.subtitle && (
                <div className="mt-4 text-amber-200/80 text-sm">{warmUp.subtitle}</div>
              )}
              <DecorativeBorder color="#D4AF37" />
            </div>
          </div>

          <Card className="border-2 border-[#D4AF37] bg-amber-50/30">
            <CardContent className="p-6 text-center">
              <div className="flex items-center justify-center gap-2 mb-3">
                <Users className="w-5 h-5 text-[#D4AF37]" />
                <h3 className="text-lg font-bold text-gray-800">Discussion</h3>
              </div>
              <p className="text-gray-700 text-sm max-w-lg mx-auto">
                {warmUp.discussionPrompt || 'Take 2 minutes to think and share your thoughts with a partner.'}
              </p>
            </CardContent>
          </Card>

          <AhmedAliLink />
          <DisclaimerBanner />
        </div>
      ),
    });

    // SLIDES 4-5: Reading 1 & Reading 2 (rich content only)
    if (richContent) {
      const [r1First, r1Second] = splitReading(richContent.reading1Content);
      slides.push({
        id: 4, type: 'reading1', title: richContent.reading1Title,
        content: (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-amber-600 to-orange-600 rounded-xl p-5 text-white">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <BookOpen className="w-6 h-6 text-amber-200" />
                  <h3 className="text-xl font-bold">📖 Reading: {richContent.reading1Title}</h3>
                </div>
                {richContent.reading1Time && (
                  <div className="flex items-center gap-1.5 bg-white/20 rounded-full px-3 py-1 text-sm">
                    <Clock className="w-4 h-4" /> {richContent.reading1Time} min
                  </div>
                )}
              </div>
              <p className="text-amber-100 text-sm">Read carefully — you&apos;ll discuss this text afterward</p>
            </div>

            {heroImage && (
              <div className="rounded-xl overflow-hidden border-2 border-amber-200 shadow-md">
                <img src={heroImage} alt={cleanTitle} className="w-full h-40 sm:h-48 object-cover" />
              </div>
            )}

            <Card className="border-2 border-amber-200">
              <CardContent className="p-5">
                <div className="prose prose-sm max-w-none text-gray-700 leading-relaxed whitespace-pre-line text-sm">
                  {r1First}
                </div>
                {r1Second && (
                  <ReadingContinuation content={r1Second} />
                )}
              </CardContent>
            </Card>

            <AhmedAliLink />
            <DisclaimerBanner />
          </div>
        ),
      });

      if (richContent.reading2Title && richContent.reading2Content) {
        const [r2First, r2Second] = splitReading(richContent.reading2Content);
        slides.push({
          id: 5, type: 'reading2', title: richContent.reading2Title,
          content: (
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-teal-600 to-emerald-700 rounded-xl p-5 text-white">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-6 h-6 text-teal-200" />
                    <h3 className="text-xl font-bold">📖 Reading: {richContent.reading2Title}</h3>
                  </div>
                  {richContent.reading2Time && (
                    <div className="flex items-center gap-1.5 bg-white/20 rounded-full px-3 py-1 text-sm">
                      <Clock className="w-4 h-4" /> {richContent.reading2Time} min
                    </div>
                  )}
                </div>
                <p className="text-teal-100 text-sm">A second perspective on today&apos;s topic</p>
              </div>

              <Card className="border-2 border-teal-200">
                <CardContent className="p-5">
                  <div className="prose prose-sm max-w-none text-gray-700 leading-relaxed whitespace-pre-line text-sm">
                    {r2First}
                  </div>
                  {r2Second && (
                    <ReadingContinuation content={r2Second} />
                  )}
                </CardContent>
              </Card>

              <AhmedAliLink />
              <DisclaimerBanner />
            </div>
          ),
        });
      }
    }

    // SLIDE: Discussion Questions (rich content) or Core Activities (generic)
    if (richContent && richContent.discussionQuestions.length > 0) {
      slides.push({
        id: slides.length + 1, type: 'discussion', title: 'Discussion Questions',
        content: (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-rose-600 to-[#722F37] rounded-xl p-5 text-white">
              <div className="flex items-center gap-2 mb-2">
                <Users className="w-6 h-6 text-rose-200" />
                <h3 className="text-xl font-bold">Discussion Questions</h3>
              </div>
              <p className="text-rose-100 text-sm">Think deeply and share your ideas with the class</p>
            </div>

            <div className="space-y-3">
              {richContent.discussionQuestions.map((q, i) => (
                <Card key={i} className="border-2 border-rose-200 bg-rose-50/30">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-rose-100 border-2 border-rose-300 flex items-center justify-center shrink-0 text-rose-700 font-bold text-sm">
                        {i + 1}
                      </div>
                      <p className="text-sm text-gray-700 leading-relaxed pt-1">{q}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <AhmedAliLink />
            <DisclaimerBanner />
          </div>
        ),
      });
    }

    // SLIDE: Key Facts (rich content)
    if (richContent && richContent.keyFacts.length > 0) {
      slides.push({
        id: slides.length + 1, type: 'keyfacts', title: 'Key Facts to Remember',
        content: (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-amber-600 to-amber-800 rounded-xl p-5 text-white">
              <div className="flex items-center gap-2 mb-2">
                <Star className="w-6 h-6 text-amber-200" />
                <h3 className="text-xl font-bold">⭐ Key Facts to Remember</h3>
              </div>
              <p className="text-amber-100 text-sm">These are the essential takeaways from today&apos;s lesson</p>
            </div>

            <div className="grid sm:grid-cols-2 gap-3">
              {richContent.keyFacts.map((fact, i) => (
                <Card key={i} className="border-2 border-amber-200 bg-amber-50/30">
                  <CardContent className="p-3">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-amber-600 mt-0.5 shrink-0" />
                      <p className="text-xs text-gray-700 leading-relaxed">{fact}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {richContent.visualType !== 'none' && richContent.visualData && (
              <VisualRenderer type={richContent.visualType} data={richContent.visualData} />
            )}

            <AhmedAliLink />
            <DisclaimerBanner />
          </div>
        ),
      });
    }

    // SLIDE: Interactive Strategies (rich content) or Core Activities (generic)
    if (richContent && richContent.interactiveStrategies && richContent.interactiveStrategies.length > 0) {
      slides.push({
        id: slides.length + 1, type: 'strategies', title: 'Interactive Strategies',
        content: (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-emerald-600 to-teal-700 rounded-xl p-5 text-white">
              <div className="flex items-center gap-2 mb-2">
                <Swords className="w-6 h-6 text-emerald-200" />
                <h3 className="text-xl font-bold">Interactive Strategies</h3>
              </div>
              <p className="text-emerald-100 text-sm">Engage with the material through these activities</p>
            </div>

            {richContent.interactiveStrategies.map((s, i) => (
              <Card key={i} className="border-2 overflow-hidden" style={{ borderColor: i % 2 === 0 ? '#a7f3d0' : '#fde68a' }}>
                <div className="px-4 py-3" style={{ backgroundColor: i % 2 === 0 ? '#ecfdf5' : '#fffbeb' }}>
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <div className="flex items-center gap-2">
                      <Badge style={{
                        backgroundColor: i % 2 === 0 ? '#a7f3d0' : '#fde68a',
                        color: i % 2 === 0 ? '#065f46' : '#92400e',
                      }}>
                        {s.strategy}
                      </Badge>
                      <span className="font-bold text-sm text-gray-800">Strategy {i + 1}</span>
                    </div>
                    <ActivityTimer duration={s.duration} />
                  </div>
                  <h4 className="font-bold text-gray-800 mt-2">{s.description}</h4>
                  <p className="text-xs text-gray-600 mt-1">{s.instructions}</p>
                </div>
              </Card>
            ))}

            <AhmedAliLink />
            <DisclaimerBanner />
          </div>
        ),
      });
    } else if (!richContent) {
      // Generic activities slide when no rich content
      slides.push({
        id: slides.length + 1, type: 'activities', title: 'Core Activities',
        content: (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-amber-600 to-orange-600 rounded-xl p-5 text-white">
              <div className="flex items-center gap-2 mb-2">
                <Swords className="w-6 h-6 text-amber-200" />
                <h3 className="text-xl font-bold">Core Activities</h3>
              </div>
              <p className="text-amber-100 text-sm">Work through each activity — use the timers to stay on track!</p>
            </div>

            {heroImage && (
              <div className="rounded-xl overflow-hidden border-2 border-amber-200 shadow-md">
                <img src={heroImage} alt={cleanTitle} className="w-full h-40 sm:h-48 object-cover" />
              </div>
            )}

            {activities.map((activity, idx) => (
              <Card key={activity.id} className="border-2 overflow-hidden" style={{
                borderColor: idx % 2 === 0 ? '#fde68a' : '#fecdd3',
              }}>
                <div className="px-4 py-3" style={{
                  backgroundColor: idx % 2 === 0 ? '#fffbeb' : '#fff1f2',
                }}>
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <div className="flex items-center gap-2">
                      <Badge style={{
                        backgroundColor: activity.type === 'interactive' ? '#D4AF37' :
                        activity.type === 'read' ? '#fde68a' :
                        activity.type === 'discuss' ? '#fecdd3' :
                        activity.type === 'creative' ? '#a7f3d0' : '#99f6e4',
                        color: activity.type === 'interactive' ? '#ffffff' :
                        activity.type === 'read' ? '#92400e' :
                        activity.type === 'discuss' ? '#9f1239' :
                        activity.type === 'creative' ? '#065f46' : '#115e59',
                      }}>
                        {activity.type === 'interactive' ? <Sparkles className="w-3 h-3 mr-1" /> :
                         activity.type === 'read' ? <BookOpen className="w-3 h-3 mr-1" /> :
                         activity.type === 'discuss' ? <Users className="w-3 h-3 mr-1" /> :
                         activity.type === 'creative' ? <Lightbulb className="w-3 h-3 mr-1" /> :
                         <Brain className="w-3 h-3 mr-1" />}
                        {activity.type.charAt(0).toUpperCase() + activity.type.slice(1)}
                      </Badge>
                      <span className="font-bold text-sm text-gray-800">Activity {idx + 1}</span>
                    </div>
                    <ActivityTimer duration={activity.duration} />
                  </div>
                  <h4 className="font-bold text-gray-800 mt-2">{activity.title}</h4>
                  <p className="text-xs text-gray-600 mt-1">{activity.description}</p>
                </div>
                {activity.content && (
                  <CardContent className="pt-3 pb-4">
                    <div className="bg-gray-50 rounded-lg p-4 text-sm text-gray-700 leading-relaxed border border-gray-100">
                      {activity.content}
                    </div>
                  </CardContent>
                )}
              </Card>
            ))}

            <AhmedAliLink />
            <DisclaimerBanner />
          </div>
        ),
      });
    }

    // SLIDE: UAE & Real-Life Links (always present)
    slides.push({
      id: slides.length + 1, type: 'links', title: 'UAE & Real-Life Connections',
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl p-5 text-white">
            <div className="flex items-center gap-2 mb-2">
              <Globe className="w-6 h-6 text-emerald-200" />
              <h3 className="text-xl font-bold">UAE & Real-Life Connections</h3>
            </div>
            <p className="text-emerald-100 text-sm">How does this lesson connect to our lives in the UAE?</p>
          </div>

          {(() => {
            const linkColorMap: Record<string, { bg: string; border: string; iconBg: string; iconBorder: string; iconText: string; titleText: string }> = {
              emerald: { bg: '#ecfdf5', border: '#a7f3d0', iconBg: '#d1fae5', iconBorder: '#6ee7b7', iconText: '#059669', titleText: '#065f46' },
              amber: { bg: '#fffbeb', border: '#fde68a', iconBg: '#fef3c7', iconBorder: '#fcd34d', iconText: '#d97706', titleText: '#92400e' },
              rose: { bg: '#fff1f2', border: '#fecdd3', iconBg: '#ffe4e6', iconBorder: '#fda4af', iconText: '#e11d48', titleText: '#9f1239' },
              teal: { bg: '#f0fdfa', border: '#99f6e4', iconBg: '#ccfbf1', iconBorder: '#5eead4', iconText: '#0d9488', titleText: '#115e59' },
              purple: { bg: '#faf5ff', border: '#e9d5ff', iconBg: '#f3e8ff', iconBorder: '#c4b5fd', iconText: '#7c3aed', titleText: '#6b21a8' },
            };
            const colorKeys = ['emerald', 'amber', 'rose', 'teal', 'purple'];
            return uaeLinks.map((link, i) => {
              const icons = { building: <Landmark className="w-5 h-5" />, star: <Star className="w-5 h-5" />, globe: <Globe className="w-5 h-5" />, mountain: <Mountain className="w-5 h-5" />, heart: <Heart className="w-5 h-5" /> };
              const colorKey = colorKeys[i % colorKeys.length];
              const cs = linkColorMap[colorKey];
              return (
                <Card key={i} className="border-2" style={{ borderColor: cs.border, backgroundColor: cs.bg }}>
                  <CardContent className="p-5">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: cs.iconBg, border: `1px solid ${cs.iconBorder}`, color: cs.iconText }}>
                        {icons[link.icon]}
                      </div>
                      <div>
                        <h4 className="font-bold text-sm" style={{ color: cs.titleText }}>{link.title}</h4>
                        <p className="text-xs text-gray-600 mt-1 leading-relaxed">{link.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            });
          })()}

          {mapMarkers.length > 0 && (
            <div>
              <h4 className="text-sm font-bold text-gray-700 mb-3 flex items-center gap-2">
                <Map className="w-4 h-4 text-emerald-600" /> Interactive Map
              </h4>
              <InteractiveMap markers={mapMarkers} />
            </div>
          )}

          <ComparisonChart
            leftTitle="Key Concepts" rightTitle="UAE Application" centerTitle="Shared"
            leftItems={standards.slice(0, 3).map(s => `Standard: ${s}`)}
            rightItems={['UAE national values', 'Local community context', 'Emirati cultural perspective']}
            centerItems={['Critical thinking', 'Real-world relevance', 'Active citizenship']}
          />

          <AhmedAliLink />
          <DisclaimerBanner />
        </div>
      ),
    });

    // SLIDE: Homework (always present)
    slides.push({
      id: slides.length + 1, type: 'homework', title: 'Homework & Extended Learning',
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-amber-600 to-amber-800 rounded-xl p-5 text-white">
            <div className="flex items-center gap-2 mb-2">
              <FileText className="w-6 h-6 text-amber-200" />
              <h3 className="text-xl font-bold">Homework & Extended Learning</h3>
            </div>
            <p className="text-amber-100 text-sm">Continue your learning journey beyond the classroom</p>
          </div>

          <Card className="border-2 border-amber-200 bg-amber-50/30">
            <CardContent className="p-5">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-amber-100 border-2 border-[#D4AF37] flex items-center justify-center shrink-0">
                  <Calendar className="w-5 h-5 text-amber-700" />
                </div>
                <div>
                  <h4 className="font-bold text-amber-800">Homework Task</h4>
                  <p className="text-sm text-gray-600 mt-1 leading-relaxed">{lesson.homework}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-emerald-200 bg-emerald-50/30">
            <CardContent className="p-5">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-100 border-2 border-emerald-500 flex items-center justify-center shrink-0">
                  <BookOpen className="w-5 h-5 text-emerald-700" />
                </div>
                <div>
                  <h4 className="font-bold text-emerald-800">Resources</h4>
                  <p className="text-sm text-gray-600 mt-1 leading-relaxed">{lesson.resources}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-rose-200 bg-rose-50/30">
            <CardContent className="p-5">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-rose-100 border-2 border-rose-400 flex items-center justify-center shrink-0">
                  <Target className="w-5 h-5 text-rose-700" />
                </div>
                <div>
                  <h4 className="font-bold text-rose-800">Assessment</h4>
                  <p className="text-sm text-gray-600 mt-1 leading-relaxed">{lesson.assessment}</p>
                  <Badge className="mt-2 bg-rose-100 text-rose-700 border-rose-200 text-[10px]">
                    {lesson.assessment_type}
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <AhmedAliLink />
          <DisclaimerBanner />
        </div>
      ),
    });

    // SLIDE: Quiz — use rich content quiz questions if available
    const quizQs = (richContent && richContent.quizQuestions.length > 0)
      ? richContent.quizQuestions.map(q => ({ ...q, options: q.options, correctAnswer: q.correctAnswer }))
      : quizQuestions;
    slides.push({
      id: slides.length + 1, type: 'quiz', title: 'Formative Assessment',
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-rose-700 to-[#722F37] rounded-xl p-5 text-white">
            <div className="flex items-center gap-2 mb-2">
              <Trophy className="w-6 h-6 text-[#D4AF37]" />
              <h3 className="text-xl font-bold">Formative Assessment</h3>
            </div>
            <p className="text-rose-100 text-sm">Test your understanding — you&apos;ve got this! 💪</p>
            <div className="flex items-center gap-2 mt-2">
              <Badge className="bg-white/20 text-white border-white/30 text-[10px]">{lesson.dok}</Badge>
              <Badge className="bg-white/20 text-white border-white/30 text-[10px]">{quizQs.length} Questions</Badge>
              {richContent && <Badge className="bg-[#D4AF37]/30 text-[#D4AF37] border-[#D4AF37]/50 text-[10px]">Textbook-Based</Badge>}
            </div>
          </div>

          <QuizEngine
            questions={quizQs}
            lessonId={lessonId}
            studentCode={studentName || 'anonymous'}
            gradeNum={selectedGrade.number}
            termNum={selectedTerm.number}
            unitKey={selectedUnit.key}
            lessonTitle={cleanTitle}
            dokLevel={lesson.dok}
            domains={lesson.domains}
          />

          <AhmedAliLink />
          <DisclaimerBanner />
        </div>
      ),
    });

    // SLIDE: Thank You (always present)
    slides.push({
      id: slides.length + 1, type: 'thankyou', title: 'Thank You!',
      content: (
        <div className="text-center space-y-8 py-8">
          <div className="relative inline-block">
            <div className="bg-gradient-to-br from-[#722F37] to-[#5A1A23] rounded-2xl p-10 relative overflow-hidden">
              <ArabicPattern opacity={0.1} color="#D4AF37" />
              <div className="relative z-10">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-[#D4AF37]/20 border-2 border-[#D4AF37] flex items-center justify-center">
                    <Award className="w-8 h-8 text-[#D4AF37]" />
                  </div>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-[#D4AF37] mb-3">MashaAllah!</h2>
                <p className="text-white text-lg">You completed the lesson!</p>
                <DecorativeBorder color="#D4AF37" />
              </div>
            </div>
          </div>

          <div className="bg-amber-50 rounded-xl p-6 border-2 border-[#D4AF37] max-w-md mx-auto">
            <a href="https://mr-ahmed-ali.vercel.app" target="_blank" rel="noopener noreferrer"
              className="text-xl font-bold text-[#D4AF37] hover:text-amber-600 transition-colors inline-flex items-center gap-2">
              <GraduationCap className="w-6 h-6" /> Mr. Ahmed Ali <ExternalLink className="w-4 h-4" />
            </a>
            <p className="text-sm text-gray-600 mt-2">Your MSCS Educator</p>
          </div>

          <DisclaimerBanner />

          <div className="flex justify-center gap-3">
            <Button onClick={() => setCurrentSlide(0)} className="bg-[#722F37] hover:bg-[#5A1A23] text-white">
              <Play className="w-4 h-4 mr-2" /> Restart Lesson
            </Button>
            <Button variant="outline" onClick={() => navigateTo('gradeSelect')} className="border-[#D4AF37] text-[#D4AF37]">
              <HomeIcon className="w-4 h-4 mr-2" /> Back to {selectedGrade.title}
            </Button>
          </div>
        </div>
      ),
    });

    const totalSlides = slides.length;

    const currentSlideData = slides[currentSlide];

    return (
      <div className="min-h-screen bg-[#FFF9F0] flex flex-col">
        {/* Top navigation bar */}
        <div className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-amber-200 shadow-sm">
          <div className="max-w-4xl mx-auto px-4 py-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 min-w-0">
                <Button variant="ghost" size="sm" onClick={() => navigateTo('unitSelect')} className="shrink-0">
                  <HomeIcon className="w-4 h-4" />
                </Button>
                <Separator orientation="vertical" className="h-5" />
                <div className="min-w-0">
                  <h1 className="text-xs font-bold text-gray-800 truncate">{cleanTitle}</h1>
                  <AhmedAliLink />
                </div>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <Badge className="bg-[#722F37] text-white text-[10px]">{lesson.dok}</Badge>
                <span className="text-xs text-gray-500">{currentSlide + 1}/{totalSlides}</span>
              </div>
            </div>
            <div className="mt-2">
              <Progress value={((currentSlide + 1) / totalSlides) * 100} className="h-1.5" />
            </div>
            <div className="flex gap-1 mt-2 overflow-x-auto pb-1">
              {slides.map((slide, i) => (
                <button key={slide.id} onClick={() => { setSlideDirection(i > currentSlide ? 'right' : 'left'); setCurrentSlide(i); }}
                  className="flex items-center gap-1 px-2 py-1 rounded-md text-[10px] font-medium transition-all whitespace-nowrap"
                  style={{
                    backgroundColor: i === currentSlide ? '#722F37' : i < currentSlide ? '#fef3c7' : '#f3f4f6',
                    color: i === currentSlide ? '#ffffff' : i < currentSlide ? '#b45309' : '#9ca3af',
                  }}>
                  {i < currentSlide && <CheckCircle2 className="w-2.5 h-2.5" />}
                  {slide.type === 'title' && <FileText className="w-2.5 h-2.5" />}
                  {slide.type === 'prior-learning' && <Brain className="w-2.5 h-2.5" />}
                  {slide.type === 'warmup' && <Sparkles className="w-2.5 h-2.5" />}
                  {slide.type === 'activities' && <Swords className="w-2.5 h-2.5" />}
                  {slide.type === 'links' && <Globe className="w-2.5 h-2.5" />}
                  {slide.type === 'homework' && <FileText className="w-2.5 h-2.5" />}
                  {slide.type === 'quiz' && <Trophy className="w-2.5 h-2.5" />}
                  {slide.type === 'thankyou' && <Award className="w-2.5 h-2.5" />}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Slide content */}
        <div className="flex-1 max-w-4xl mx-auto w-full px-4 py-6">
          <div className="transition-all duration-300" style={{
            opacity: isAnimating ? 0 : 1,
            transform: isAnimating ? `translateX(${slideDirection === 'right' ? '30px' : '-30px'})` : 'translateX(0)',
          }}>
            <div className="mb-4">
              <Badge className="bg-[#722F37] text-white mb-2">Slide {currentSlide + 1} of {totalSlides}</Badge>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800">{currentSlideData.title}</h2>
            </div>
            {currentSlideData.content}
          </div>
        </div>

        {/* Bottom navigation */}
        <div className="sticky bottom-0 bg-white/95 backdrop-blur border-t border-amber-200 shadow-lg">
          <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
            <Button variant="outline" onClick={() => { if (currentSlide > 0) { setSlideDirection('left'); navigateSlide('left'); setCurrentSlide(currentSlide - 1); } }}
              disabled={currentSlide === 0} className="border-[#722F37] text-[#722F37] hover:bg-rose-50">
              <ChevronLeft className="w-4 h-4 mr-1" /> Previous
            </Button>
            <div className="flex gap-1">
              {slides.map((_, i) => (
                <div key={i} className="w-2 h-2 rounded-full transition-all cursor-pointer"
                  style={{
                    backgroundColor: i === currentSlide ? '#722F37' : i < currentSlide ? '#D4AF37' : '#d1d5db',
                    width: i === currentSlide ? '16px' : '8px',
                  }}
                  onClick={() => { setSlideDirection(i > currentSlide ? 'right' : 'left'); setCurrentSlide(i); }} />
              ))}
            </div>
            <Button onClick={() => { if (currentSlide < totalSlides - 1) { setSlideDirection('right'); navigateSlide('right'); setCurrentSlide(currentSlide + 1); } }}
              disabled={currentSlide === totalSlides - 1} className="bg-[#722F37] hover:bg-[#5A1A23] text-white">
              Next <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
        </div>
      </div>
    );
  };

  // Helper to generate map markers based on lesson topic
  function generateMapMarkers(lesson: LessonData): Array<{ name: string; desc: string; lat: number; lng: number; color: string }> {
    const title = lesson.title.toLowerCase();

    // Ottoman Empire specific markers
    if (title.includes('ottoman')) {
      return [
        { name: 'Istanbul (Constantinople)', desc: 'Conquered in 1453 by Muhammad al-Fatih', lat: 41.0082, lng: 28.9784, color: '#722F37' },
        { name: 'Anatolia (Turkey)', desc: 'Heart of the Ottoman Empire', lat: 39.9334, lng: 32.8597, color: '#D4AF37' },
        { name: 'Arabian Peninsula & Hijaz', desc: 'Makkah & Madinah — protected after 1517', lat: 24.0, lng: 42.0, color: '#047857' },
        { name: 'Egypt & North Africa', desc: 'Conquered by Selim I in 1516-1517', lat: 30.0444, lng: 31.2357, color: '#D97706' },
        { name: 'Balkans & SE Europe', desc: 'Expanded into Europe from 1354', lat: 44.0, lng: 20.0, color: '#7C3AED' },
      ];
    }

    // UAE specific markers
    if (title.includes('uae') || title.includes('emirat') || title.includes('zayed') || title.includes('heritage') || title.includes('government') || title.includes('governance') || title.includes('federal') || title.includes('citizen') || title.includes('constitution')) {
      return [
        { name: 'Abu Dhabi', desc: 'Capital of the UAE, seat of federal government', lat: 24.4539, lng: 54.3773, color: '#722F37' },
        { name: 'Dubai', desc: 'Major commercial and financial hub', lat: 25.2048, lng: 55.2708, color: '#D4AF37' },
        { name: 'Al Ain', desc: 'Garden city, UNESCO World Heritage sites', lat: 24.1915, lng: 55.7606, color: '#047857' },
        { name: 'Sharjah', desc: 'Cultural capital of the UAE', lat: 25.3463, lng: 55.4209, color: '#D97706' },
      ];
    }

    // East Asia markers
    if (title.includes('east asia') || title.includes('china') || title.includes('korea')) {
      return [
        { name: 'Beijing', desc: 'Capital of China, ancient imperial center', lat: 39.9042, lng: 116.4074, color: '#722F37' },
        { name: 'Seoul', desc: 'Capital of South Korea', lat: 37.5665, lng: 126.978, color: '#D4AF37' },
        { name: 'Great Wall', desc: 'Ancient Chinese defensive structure', lat: 40.4319, lng: 116.5704, color: '#047857' },
      ];
    }

    // South Asia markers
    if (title.includes('south asia') || title.includes('india')) {
      return [
        { name: 'Delhi', desc: 'Historic capital of multiple empires', lat: 28.6139, lng: 77.2090, color: '#722F37' },
        { name: 'Mumbai', desc: 'Major port city on the Arabian Sea', lat: 19.076, lng: 72.8777, color: '#D4AF37' },
        { name: 'Taj Mahal', desc: 'Mughal architectural masterpiece', lat: 27.1751, lng: 78.0421, color: '#047857' },
      ];
    }

    // Central Asia markers
    if (title.includes('central asia') || title.includes('silk road') || title.includes('kazakhstan')) {
      return [
        { name: 'Samarkand', desc: 'Ancient Silk Road city in Uzbekistan', lat: 39.6547, lng: 66.9597, color: '#722F37' },
        { name: 'Astana', desc: 'Capital of Kazakhstan', lat: 51.1694, lng: 71.4491, color: '#D4AF37' },
        { name: 'Bishkek', desc: 'Capital of Kyrgyzstan', lat: 42.8746, lng: 74.5698, color: '#047857' },
      ];
    }

    // Africa markers
    if (title.includes('africa') || title.includes('african')) {
      return [
        { name: 'Cairo', desc: 'Ancient capital of Egypt', lat: 30.0444, lng: 31.2357, color: '#722F37' },
        { name: 'Timbuktu', desc: 'Historic center of Islamic learning', lat: 16.7735, lng: -3.0074, color: '#D4AF37' },
        { name: 'Great Zimbabwe', desc: 'Medieval African civilization', lat: -20.2713, lng: 30.9338, color: '#047857' },
      ];
    }

    // Americas markers
    if (title.includes('america') || title.includes('american')) {
      return [
        { name: 'Washington D.C.', desc: 'Capital of the United States', lat: 38.9072, lng: -77.0369, color: '#722F37' },
        { name: 'Mexico City', desc: 'Ancient Aztec capital, now Mexico City', lat: 19.4326, lng: -99.1332, color: '#D4AF37' },
        { name: 'Machu Picchu', desc: 'Inca civilization site in Peru', lat: -13.1631, lng: -72.545, color: '#047857' },
      ];
    }

    // Europe / Renaissance markers
    if (title.includes('europe') || title.includes('renaissance') || title.includes('medieval') || title.includes('middle ages') || title.includes('venice')) {
      return [
        { name: 'Rome', desc: 'Center of the Roman Empire and the Renaissance', lat: 41.9028, lng: 12.4964, color: '#722F37' },
        { name: 'Venice', desc: 'Maritime republic and trade hub', lat: 45.4408, lng: 12.3155, color: '#D4AF37' },
        { name: 'Florence', desc: 'Birthplace of the Renaissance', lat: 43.7696, lng: 11.2558, color: '#047857' },
      ];
    }

    // Default: UAE centered
    return [
      { name: 'UAE', desc: 'United Arab Emirates — our home', lat: 23.4241, lng: 53.8478, color: '#D4AF37' },
      { name: 'Abu Dhabi', desc: 'Capital city', lat: 24.4539, lng: 54.3773, color: '#722F37' },
      { name: 'Al Ain', desc: 'The Garden City', lat: 24.1915, lng: 55.7606, color: '#047857' },
    ];
  }


  // ════════════════════════════════════════════════════════════
  // TEACHER DASHBOARD
  // ════════════════════════════════════════════════════════════

  const renderTeacherDashboard = () => {
    const allResults = getAllQuizResults();
    const filteredResults = dashboardGrade > 0 ? allResults.filter(r => r.grade === dashboardGrade) : allResults;

    // Calculate stats
    const totalStudents = new Set(filteredResults.map(r => r.studentCode)).size;
    const totalQuizzes = filteredResults.length;
    const avgScore = totalQuizzes > 0 ? Math.round(filteredResults.reduce((acc, r) => acc + r.percentage, 0) / totalQuizzes) : 0;
    const highestScore = filteredResults.length > 0 ? Math.max(...filteredResults.map(r => r.percentage)) : 0;

    // Group by student
    const studentMap = new Map<string, QuizResult[]>();
    filteredResults.forEach(r => {
      if (!studentMap.has(r.studentCode)) studentMap.set(r.studentCode, []);
      studentMap.get(r.studentCode)!.push(r);
    });
    const studentList = Array.from(studentMap.entries()).map(([code, results]) => ({
      code,
      totalQuizzes: results.length,
      avgScore: Math.round(results.reduce((acc, r) => acc + r.percentage, 0) / results.length),
      lastActive: results.sort((a, b) => new Date(b.completedAt).getTime() - new Date(a.completedAt).getTime())[0].completedAt,
      results,
    }));

    // Semester accumulation
    const termScores = [1, 2, 3].map(term => {
      const termResults = filteredResults.filter(r => r.term === term);
      return {
        term,
        totalQuizzes: termResults.length,
        totalScore: termResults.reduce((acc, r) => acc + r.score, 0),
        totalPossible: termResults.reduce((acc, r) => acc + r.total, 0),
        avgPercentage: termResults.length > 0 ? Math.round(termResults.reduce((acc, r) => acc + r.percentage, 0) / termResults.length) : 0,
      };
    });

    const yearTotal = filteredResults.reduce((acc, r) => acc + r.score, 0);
    const yearPossible = filteredResults.reduce((acc, r) => acc + r.total, 0);

    const handleExport = () => {
      const csv = exportResultsAsCSV();
      if (!csv) return;
      const blob = new Blob([csv], { type: 'text/csv' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url; a.download = 'mscs_grades_export.csv'; a.click();
      URL.revokeObjectURL(url);
    };

    return (
      <div className="min-h-screen bg-[#FFF9F0]">
        <div className="relative bg-gradient-to-r from-[#722F37] to-[#5A1A23] py-8 px-4">
          <ArabicPattern opacity={0.06} color="#D4AF37" />
          <div className="relative z-10 max-w-6xl mx-auto">
            <Button variant="ghost" onClick={() => navigateTo('landing')} className="text-white/80 hover:text-white hover:bg-white/10 mb-4">
              <ChevronLeft className="w-4 h-4 mr-1" /> Back to Home
            </Button>
            <div className="flex items-center gap-4 flex-wrap">
              <div className="w-14 h-14 rounded-2xl bg-[#D4AF37]/20 border-2 border-[#D4AF37] flex items-center justify-center">
                <Shield className="w-7 h-7 text-[#D4AF37]" />
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold text-white">Teacher Dashboard</h1>
                <p className="text-amber-200/80 text-sm">MSCS Academy — Student Performance Overview</p>
              </div>
              <div className="ml-auto">
                <AhmedAliLink size="md" />
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 py-8 space-y-6">
          {/* Grade filter */}
          <div className="flex items-center gap-3 flex-wrap">
            <Filter className="w-4 h-4 text-gray-500" />
            <span className="text-sm font-medium text-gray-600">Filter by Grade:</span>
            {[
              { value: 0, label: 'All Grades' },
              { value: 6, label: 'Grade 6' },
              { value: 7, label: 'Grade 7' },
              { value: 8, label: 'Grade 8' },
              { value: 9, label: 'Grade 9' },
            ].map(opt => (
              <Button key={opt.value} size="sm" variant={dashboardGrade === opt.value ? 'default' : 'outline'}
                onClick={() => setDashboardGrade(opt.value)}
                className={dashboardGrade === opt.value ? 'bg-[#722F37] text-white' : 'border-[#722F37]/30 text-[#722F37]'}>
                {opt.label}
              </Button>
            ))}
            <Button size="sm" variant="outline" onClick={handleExport} className="ml-auto border-emerald-300 text-emerald-700 hover:bg-emerald-50">
              <Download className="w-3 h-3 mr-1" /> Export CSV
            </Button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { label: 'Total Students', value: totalStudents, icon: <Users className="w-5 h-5" />, color: '#d97706', bg: '#fffbeb', border: '#fde68a' },
              { label: 'Quizzes Completed', value: totalQuizzes, icon: <Trophy className="w-5 h-5" />, color: '#059669', bg: '#ecfdf5', border: '#a7f3d0' },
              { label: 'Average Score', value: `${avgScore}%`, icon: <Target className="w-5 h-5" />, color: '#e11d48', bg: '#fff1f2', border: '#fecdd3' },
              { label: 'Highest Score', value: `${highestScore}%`, icon: <Award className="w-5 h-5" />, color: '#D4AF37', bg: '#fffbeb', border: '#D4AF37' },
            ].map((stat, i) => (
              <Card key={i} className="border-2" style={{ borderColor: stat.border, backgroundColor: stat.bg }}>
                <CardContent className="p-4 text-center">
                  <div className="flex justify-center mb-2" style={{ color: stat.color }}>{stat.icon}</div>
                  <div className="text-2xl font-bold" style={{ color: stat.color }}>{stat.value}</div>
                  <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Semester Accumulation */}
          <Card className="border-2 border-amber-200 overflow-hidden">
            <div className="bg-gradient-to-r from-amber-50 to-rose-50 p-4 border-b border-amber-200">
              <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-[#D4AF37]" /> Semester Score Accumulation
              </h3>
            </div>
            <CardContent className="p-4">
              <div className="grid grid-cols-3 gap-4 mb-4">
                {termScores.map(ts => (
                  <div key={ts.term} className="text-center p-3 rounded-lg bg-gray-50 border">
                    <div className="text-sm font-bold text-gray-700">Term {ts.term}</div>
                    <div className="text-2xl font-bold text-[#722F37] mt-1">
                      {ts.totalPossible > 0 ? `${ts.totalScore}/${ts.totalPossible}` : '—'}
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                      {ts.totalQuizzes} quizzes • Avg {ts.avgPercentage}%
                    </div>
                    {ts.totalPossible > 0 && (
                      <Progress value={ts.avgPercentage} className="mt-2 h-2" />
                    )}
                  </div>
                ))}
              </div>
              <div className="text-center p-4 rounded-lg bg-gradient-to-r from-[#722F37]/10 to-[#D4AF37]/10 border-2 border-[#D4AF37]">
                <div className="text-sm font-bold text-gray-700">Year Total</div>
                <div className="text-3xl font-bold text-[#722F37]">
                  {yearPossible > 0 ? `${yearTotal}/${yearPossible}` : '—'}
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  {yearPossible > 0 ? `${Math.round((yearTotal / yearPossible) * 100)}% overall` : 'No data yet'}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Per-Student Table */}
          <Card className="border-2 border-amber-200 overflow-hidden">
            <div className="bg-gradient-to-r from-amber-50 to-rose-50 p-4 border-b border-amber-200">
              <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2">
                <Users className="w-5 h-5 text-[#D4AF37]" /> Student Performance
              </h3>
            </div>
            <div className="overflow-x-auto max-h-96">
              {studentList.length === 0 ? (
                <div className="p-8 text-center">
                  <BookOpen className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                  <h4 className="font-bold text-gray-400">No Quiz Results Yet</h4>
                  <p className="text-sm text-gray-400 mt-1">Results will appear here automatically when students complete quizzes.</p>
                </div>
              ) : (
                <table className="w-full text-sm">
                  <thead className="sticky top-0 bg-gray-50">
                    <tr className="border-b">
                      <th className="text-left px-4 py-3 font-semibold text-gray-600">Student Code</th>
                      <th className="text-center px-4 py-3 font-semibold text-gray-600">Quizzes</th>
                      <th className="text-center px-4 py-3 font-semibold text-gray-600">Avg Score</th>
                      <th className="text-left px-4 py-3 font-semibold text-gray-600">Last Active</th>
                    </tr>
                  </thead>
                  <tbody>
                    {studentList.map(student => (
                      <tr key={student.code} className="border-b hover:bg-amber-50/50 transition-colors">
                        <td className="px-4 py-3">
                          <span className="font-mono text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded">{student.code}</span>
                        </td>
                        <td className="px-4 py-3 text-center font-bold">{student.totalQuizzes}</td>
                        <td className="px-4 py-3 text-center">
                          <Badge className="border-0" style={{
                            backgroundColor: student.avgScore >= 75 ? '#d1fae5' : student.avgScore >= 50 ? '#fef3c7' : '#ffe4e6',
                            color: student.avgScore >= 75 ? '#047857' : student.avgScore >= 50 ? '#b45309' : '#be123c',
                          }}>
                            {student.avgScore}%
                          </Badge>
                        </td>
                        <td className="px-4 py-3 text-xs text-gray-500">
                          {new Date(student.lastActive).toLocaleDateString('en-US', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </Card>

          {/* Per-Lesson Scores for each student */}
          {studentList.length > 0 && (
            <Card className="border-2 border-emerald-200 overflow-hidden">
              <div className="bg-gradient-to-r from-emerald-50 to-teal-50 p-4 border-b border-emerald-200">
                <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-emerald-600" /> Per-Lesson Scores
                </h3>
              </div>
              <div className="overflow-x-auto max-h-96">
                <table className="w-full text-xs">
                  <thead className="sticky top-0 bg-gray-50">
                    <tr className="border-b">
                      <th className="text-left px-3 py-2 font-semibold text-gray-600">Student</th>
                      <th className="text-left px-3 py-2 font-semibold text-gray-600">Lesson</th>
                      <th className="text-center px-3 py-2 font-semibold text-gray-600">Score</th>
                      <th className="text-center px-3 py-2 font-semibold text-gray-600">%</th>
                      <th className="text-left px-3 py-2 font-semibold text-gray-600">Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredResults.sort((a, b) => new Date(b.completedAt).getTime() - new Date(a.completedAt).getTime()).map((result, idx) => (
                      <tr key={idx} className="border-b hover:bg-emerald-50/30 transition-colors">
                        <td className="px-3 py-2"><span className="font-mono text-[10px] bg-amber-100 text-amber-800 px-1.5 py-0.5 rounded">{result.studentCode}</span></td>
                        <td className="px-3 py-2 text-gray-700 max-w-[200px] truncate">{result.lessonTitle}</td>
                        <td className="px-3 py-2 text-center font-bold">{result.score}/{result.total}</td>
                        <td className="px-3 py-2 text-center">
                          <Badge className="border-0 text-[10px]" style={{
                            backgroundColor: result.percentage >= 75 ? '#d1fae5' : result.percentage >= 50 ? '#fef3c7' : '#ffe4e6',
                            color: result.percentage >= 75 ? '#047857' : result.percentage >= 50 ? '#b45309' : '#be123c',
                          }}>
                            {result.percentage}%
                          </Badge>
                        </td>
                        <td className="px-3 py-2 text-gray-500">{new Date(result.completedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          )}

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-center">
            <p className="text-xs text-amber-700">
              <strong>Note:</strong> Data stored locally in the browser. Export periodically for permanent records.
              Teacher-Created Study Material — Not an Official ADEK Resource.
            </p>
          </div>
        </div>
      </div>
    );
  };

  // ════════════════════════════════════════════════════════════
  // ABOUT PAGE
  // ════════════════════════════════════════════════════════════

  const renderAboutPage = () => (
    <div className="min-h-screen bg-[#FFF9F0] flex flex-col">
      <div className="relative bg-gradient-to-r from-[#722F37] to-[#5A1A23] py-12 px-4">
        <ArabicPattern opacity={0.08} color="#D4AF37" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <Button variant="ghost" onClick={() => navigateTo('landing')} className="text-white/80 hover:text-white hover:bg-white/10 mb-4">
            <ChevronLeft className="w-4 h-4 mr-1" /> Back to Home
          </Button>
          <h1 className="text-3xl font-bold text-white">About MSCS Academy</h1>
          <AhmedAliLink size="lg" className="mt-2" />
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-8 space-y-6 flex-1">
        <Card className="border-2 border-[#D4AF37] overflow-hidden">
          <div className="bg-gradient-to-r from-amber-50 to-rose-50 p-6">
            <div className="flex items-start gap-4">
              <div className="w-20 h-20 rounded-full bg-[#722F37] border-3 border-[#D4AF37] flex items-center justify-center shrink-0">
                <GraduationCap className="w-10 h-10 text-[#D4AF37]" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-[#722F37]">Mr. Ahmed Ali</h2>
                <p className="text-sm text-gray-600 mt-1">MSCS Educator & Curriculum Developer</p>
                <a href="https://mr-ahmed-ali.vercel.app" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-[#D4AF37] hover:text-amber-600 mt-2 font-medium">
                  Visit Portfolio <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
          <CardContent className="p-6 space-y-4">
            <div>
              <h3 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
                <Shield className="w-4 h-4 text-[#D4AF37]" /> Credentials
              </h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" /> Specialist in Moral, Social & Cultural Studies for UAE education</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" /> Experienced curriculum developer aligned with UAE Ministry of Education standards</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" /> Interactive lesson design with technology integration</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" /> Committed to student-centered, active learning approaches</li>
              </ul>
            </div>
            <Separator />
            <div>
              <h3 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
                <Info className="w-4 h-4 text-[#D4AF37]" /> Platform Information
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                MSCS Academy is an interactive learning platform designed for UAE students in Grades 6-9 studying Moral, Social, and Cultural Studies. The platform provides {platformStats.totalLessons} engaging, standards-aligned lessons with interactive components including quizzes, timelines, maps, and collaborative activities.
              </p>
            </div>
            <div className="bg-amber-50 rounded-lg p-4 border border-amber-200">
              <h3 className="font-bold text-amber-800 text-sm mb-2 flex items-center gap-2">
                <AlertCircle className="w-4 h-4" /> Disclaimer
              </h3>
              <p className="text-xs text-amber-700 leading-relaxed">
                This platform is developed independently by Mr. Ahmed Ali as an educational resource.
                All content is aligned with UAE curriculum standards but is not officially endorsed by any educational authority.
                Teacher-Created Study Material — Not an Official ADEK Resource.
                Student data is not collected or stored on servers. All interactive elements work locally in the browser.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  // ════════════════════════════════════════════════════════════
  // LOGIN PAGE
  // ════════════════════════════════════════════════════════════

  const renderLoginPage = () => {
    // Detect if the code looks like an admin code
    const isPotentialAdminCode = loginCode.trim().toUpperCase().startsWith('MSCS-ADMIN') || loginCode.trim().toUpperCase().startsWith('MSCS-STAFF');

    return (
    <div className="min-h-screen bg-[#FFF9F0] flex items-center justify-center p-4">
      <ArabicPattern opacity={0.03} color="#722F37" />
      <div className="relative z-10 w-full max-w-md">
        <Button variant="ghost" onClick={() => navigateTo('landing')} className="mb-4 text-gray-500">
          <ChevronLeft className="w-4 h-4 mr-1" /> Back to Home
        </Button>
        <Card className="border-2 border-[#D4AF37] overflow-hidden">
          <div className="bg-gradient-to-r from-[#722F37] to-[#5A1A23] p-6 text-center">
            <div className="w-14 h-14 rounded-full bg-[#D4AF37]/20 border-2 border-[#D4AF37] flex items-center justify-center mx-auto mb-3">
              <LogIn className="w-7 h-7 text-[#D4AF37]" />
            </div>
            <h2 className="text-xl font-bold text-white">Student Login</h2>
            <p className="text-rose-200 text-sm mt-1">Enter your access code to continue</p>
          </div>
          <CardContent className="p-6">
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-700 mb-1.5 block">Access Code</label>
                <Input value={loginCode} onChange={e => { setLoginCode(e.target.value.toUpperCase()); setLoginError(''); setShowAdminPassword(false); }}
                  placeholder="MSCS-7A-2026-014" className="text-center font-mono text-lg tracking-wider" />
                <p className="text-xs text-gray-400 mt-1">Format: MSCS-Grade-Section-Year-Number</p>
              </div>

              {isPotentialAdminCode && (
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-1.5 block flex items-center gap-2">
                    <Shield className="w-4 h-4" /> Admin Password
                  </label>
                  <Input type="password" value={adminPassword} onChange={e => { setAdminPassword(e.target.value); setLoginError(''); }}
                    placeholder="Enter admin password" className="text-center font-mono" />
                  <p className="text-xs text-gray-400 mt-1">Staff access requires authorization</p>
                </div>
              )}

              {loginError && (
                <div className="bg-rose-50 border border-rose-200 rounded-lg p-3 text-sm text-rose-700 flex items-center gap-2">
                  <XCircle className="w-4 h-4 shrink-0" />{loginError}
                </div>
              )}
              <Button onClick={() => {
                const trimmedCode = loginCode.trim().toUpperCase();
                setLoginCode(trimmedCode);
                // Admin access — requires both code AND password verification
                if (isPotentialAdminCode) {
                  if (!adminPassword.trim()) {
                    setLoginError('Admin password is required');
                    return;
                  }
                  if (verifyMasterPassword(adminPassword.trim())) {
                    setIsLoggedIn(true); setStudentName('TEACHER'); navigateTo('teacherDashboard');
                  } else {
                    setLoginError('Invalid admin credentials');
                  }
                  return;
                }
                // Student access
                const pattern = /^MSCS-\d{1,2}[A-Z]-\d{4}-\d{1,3}$/;
                if (pattern.test(trimmedCode)) {
                  setIsLoggedIn(true); setStudentName(trimmedCode); navigateTo('landing');
                } else {
                  setLoginError('Invalid code format. Use: MSCS-7A-2026-014');
                }
              }} className="w-full bg-[#722F37] hover:bg-[#5A1A23] text-white">
                <LogIn className="w-4 h-4 mr-2" /> Sign In
              </Button>
              {isLoggedIn && (
                <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-3 text-sm text-emerald-700 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 shrink-0" /> Logged in as {studentName}
                </div>
              )}
              <div className="text-center">
                <p className="text-xs text-gray-400">Enter your school-issued access code</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
  };

  // ════════════════════════════════════════════════════════════
  // PARENTAL CONSENT PAGE
  // ════════════════════════════════════════════════════════════

  const renderConsentPage = () => (
    <div className="min-h-screen bg-[#FFF9F0] flex flex-col">
      <div className="relative bg-gradient-to-r from-teal-600 to-emerald-700 py-12 px-4">
        <ArabicPattern opacity={0.06} color="#D4AF37" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <Button variant="ghost" onClick={() => navigateTo('landing')} className="text-white/80 hover:text-white hover:bg-white/10 mb-4">
            <ChevronLeft className="w-4 h-4 mr-1" /> Back to Home
          </Button>
          <h1 className="text-3xl font-bold text-white">Parental Consent Information</h1>
          <p className="text-teal-100 text-sm mt-1">Understanding how we protect your child&apos;s learning experience</p>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-4 py-8 space-y-6 flex-1">
        <Card className="border-2 border-teal-200">
          <CardContent className="p-6 space-y-4">
            <div className="flex items-start gap-3">
              <Shield className="w-8 h-8 text-teal-600 shrink-0" />
              <div>
                <h3 className="font-bold text-gray-800">Our Commitment to Student Safety</h3>
                <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                  MSCS Academy is committed to providing a safe, secure, and age-appropriate learning environment for all students.
                  We follow strict data protection practices and ensure that no personal student information is collected or stored on our platform.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="border-2 border-emerald-200">
          <CardContent className="p-6 space-y-3">
            <h3 className="font-bold text-gray-800">What Parents Need to Know</h3>
            {[
              { title: 'No Personal Data Collection', desc: 'The platform does not collect, store, or transmit any personal student data. All interactive elements work locally in the browser.' },
              { title: 'Curriculum-Aligned Content', desc: 'All lessons follow UAE Ministry of Education standards for Moral, Social, and Cultural Studies.' },
              { title: 'Age-Appropriate Material', desc: 'Content is specifically designed for students in Grades 6-9 (ages 11-15) and is reviewed for appropriateness.' },
              { title: 'No External Communication', desc: 'The platform has no chat features, social elements, or ways for students to communicate with others.' },
              { title: 'Optional Access', desc: 'Student login is optional and uses a code-based system. No email addresses or personal identifiers are required.' },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-2 bg-emerald-50/50 rounded-lg p-3 border border-emerald-100">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                <div>
                  <span className="font-semibold text-sm text-gray-800">{item.title}</span>
                  <p className="text-xs text-gray-600 mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
        <Card className="border-2 border-amber-200">
          <CardContent className="p-6">
            <h3 className="font-bold text-gray-800 mb-3">Consent Process</h3>
            <div className="space-y-4">
              {[
                { step: 1, title: 'School distributes access codes', desc: 'Each student receives a unique code in the format MSCS-Grade-Section-Year-Number' },
                { step: 2, title: 'Parent reviews platform', desc: 'Parents are encouraged to explore the platform with their child' },
                { step: 3, title: 'Student accesses lessons', desc: 'Using their code, students can access grade-appropriate interactive lessons' },
                { step: 4, title: 'Ongoing transparency', desc: 'All content is accessible for parental review at any time' },
              ].map(item => (
                <div key={item.step} className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-amber-100 border-2 border-[#D4AF37] flex items-center justify-center shrink-0">
                    <span className="text-sm font-bold text-amber-700">{item.step}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-gray-800">{item.title}</h4>
                    <p className="text-xs text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        <div className="text-center">
          <AhmedAliLink size="md" />
          <p className="text-xs text-gray-400 mt-2">For questions or concerns, please contact through the portfolio website</p>
        </div>
      </div>
    </div>
  );

  // ════════════════════════════════════════════════════════════
  // MAIN RENDER
  // ════════════════════════════════════════════════════════════

  return (
    <ErrorBoundary>
    <div className="min-h-screen">
      {view === 'landing' && renderLanding()}
      {view === 'gradeSelect' && renderGradeSelect()}
      {view === 'unitSelect' && renderUnitSelect()}
      {view === 'lessonView' && renderLessonViewer()}
      {view === 'aboutPage' && renderAboutPage()}
      {view === 'loginPage' && renderLoginPage()}
      {view === 'consentPage' && renderConsentPage()}
      {view === 'teacherDashboard' && renderTeacherDashboard()}

      {/* Logout Button - visible when logged in on student/teacher views */}
      {isLoggedIn && (view === 'gradeSelect' || view === 'unitSelect' || view === 'lessonView' || view === 'teacherDashboard') && (
        <div className="fixed top-3 right-3 z-50">
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              setIsLoggedIn(false);
              setStudentName('');
              setLoginCode('');
              navigateTo('landing');
            }}
            className="bg-white/95 backdrop-blur-sm border-[#722F37]/30 shadow-lg hover:bg-rose-50 hover:border-[#722F37] text-[#722F37] gap-2 text-xs"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span className="max-w-[120px] truncate">{studentName}</span>
          </Button>
        </div>
      )}

      {/* Classroom Rules Popup */}
      {showClassroomRules && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4" onClick={() => setShowClassroomRules(false)}>
          <div className="bg-white rounded-2xl max-w-lg w-full shadow-2xl overflow-hidden animate-in fade-in zoom-in-95" onClick={e => e.stopPropagation()}>
            <div className="bg-gradient-to-r from-[#722F37] to-[#5A1A23] p-5 relative overflow-hidden">
              <ArabicPattern opacity={0.1} color="#D4AF37" />
              <div className="relative z-10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#D4AF37]/20 border-2 border-[#D4AF37] flex items-center justify-center">
                    <Shield className="w-5 h-5 text-[#D4AF37]" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-white">Classroom Rules</h2>
                    <p className="text-amber-200/80 text-xs">Based on ADEK & UAE Ministry of Education Guidelines</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-5 space-y-3 max-h-[60vh] overflow-y-auto">
              <p className="text-sm text-gray-600 italic mb-3">Welcome! Before we begin, please read and acknowledge these classroom expectations:</p>
              {[
                { icon: '🤝', title: 'Respect Everyone', desc: 'Treat your classmates, teacher, and all members of the school community with respect and kindness, regardless of background, culture, or beliefs.' },
                { icon: '👂', title: 'Listen Attentively', desc: 'Pay close attention when the teacher or classmates are speaking. Raise your hand and wait for permission before sharing your thoughts.' },
                { icon: '📖', title: 'Come Prepared', desc: 'Bring all required materials, complete homework on time, and be ready to participate actively in every lesson.' },
                { icon: '✋', title: 'Be Honest & Trustworthy', desc: 'Always tell the truth, complete your own work, and never copy from others. Academic integrity is a core value in UAE schools.' },
                { icon: '🛡️', title: 'Keep Our Space Safe', desc: 'Follow all safety rules, move calmly in the classroom and corridors, and report anything that could harm others.' },
                { icon: '🌱', title: 'Embrace Diversity', desc: 'UAE is home to over 200 nationalities. Celebrate our differences, be tolerant, and learn from each other\'s cultures and perspectives.' },
                { icon: '🎯', title: 'Strive for Excellence', desc: 'Give your best effort in everything you do. The UAE values ambition, hard work, and continuous self-improvement.' },
                { icon: '⚖️', title: 'Follow School Rules', desc: 'Observe the school dress code, arrive on time, use devices appropriately, and follow all rules set by the school administration and ADEK.' },
              ].map((rule, i) => (
                <div key={i} className="flex items-start gap-3 p-2.5 rounded-lg bg-gray-50 border border-gray-100">
                  <span className="text-lg shrink-0">{rule.icon}</span>
                  <div>
                    <h4 className="text-sm font-bold text-gray-800">{rule.title}</h4>
                    <p className="text-xs text-gray-600 leading-relaxed">{rule.desc}</p>
                  </div>
                </div>
              ))}
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 mt-3">
                <p className="text-xs text-amber-800 leading-relaxed">
                  <strong>Remember:</strong> These rules are aligned with the UAE Ministry of Education Code of Conduct, ADEK Behaviour Management Policy, and the UAE Values of Respect, Responsibility, and Integrity.
                </p>
              </div>
            </div>
            <div className="p-4 border-t bg-gray-50">
              <Button onClick={() => setShowClassroomRules(false)}
                className="w-full bg-[#722F37] hover:bg-[#5A1A23] text-white font-bold py-3">
                <CheckCircle2 className="w-4 h-4 mr-2" /> I Understand & Will Follow These Rules
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
    </ErrorBoundary>
  );
}