'use client';

import React, { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import 'leaflet/dist/leaflet.css';
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
  BarChart3, Filter
} from 'lucide-react';
import {
  getGradeInfo, getLesson, getCleanTitle, getUnitContextFromTitle,
  generateQuizQuestions, parseActivities, generateUAELinks, generateWarmUp,
  saveQuizResult, getAllQuizResults, getResultsByGrade, exportResultsAsCSV,
  getPlatformStats,
  type QuizQuestion, type ActivityItem, type UAELink, type WarmUpActivity,
  type QuizResult, type GradeInfo, type TermInfo, type UnitInfo, type LessonData,
} from '@/lib/lessons';

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
  en: { subtitle: 'Moral, Social & Cultural Studies', tagline: 'Making Learning Active, Not Passive', interactivePlatform: '— Interactive Learning Platform —', whyTitle: 'Why MSCS Academy?', feature1: 'Interactive Learning', feature1d: 'Quizzes, timelines, maps, and drag-and-drop activities that make learning unforgettable', feature2: 'Standards-Aligned', feature2d: 'Every lesson follows UAE curriculum standards with clear objectives and success criteria', feature3: 'UAE & Real-World Links', feature3d: 'Every lesson connects to UAE culture, values, and real-life applications', feature4: 'Built-in Timers', feature4d: 'Structured activities with countdown timers keep lessons on pace', feature5: 'Instant Feedback', feature5d: 'Quizzes with immediate scoring and explanations help students learn from mistakes', feature6: 'Student-Centered', feature6d: 'KWL charts, Venn diagrams, and collaborative activities put students first', meetInstructor: 'Meet Your Instructor', instructorDesc: 'Dedicated educator specializing in Moral, Social, and Cultural Studies for UAE students. Creating engaging, standards-aligned lessons that bring history and culture to life.', footerTagline: 'MSCS Academy: Making Learning Active, Not Passive', about: 'About', studentLogin: 'Student Login', parentalConsent: 'Parental Consent', selectGrade: 'Select your grade to begin' },
  ar: { subtitle: 'الدراسات الأخلاقية والاجتماعية والثقافية', tagline: 'نجعل التعلم نشطاً، وليس سلبياً', interactivePlatform: '— منصة تعلم تفاعلية —', whyTitle: 'لماذا أكاديمية MSCS؟', feature1: 'تعلم تفاعلي', feature1d: 'اختبارات وخطوط زمنية وخرائط وأنشطة سحب وإفلات تجعل التعلم لا يُنسى', feature2: 'ملاءمة للمعايير', feature2d: 'كل درس يتبع معايير المنهج الإماراتي بأهداف واضحة ومعايير نجاح', feature3: 'روابط الإمارات والعالم الحقيقي', feature3d: 'كل درس يرتبط بثقافة الإمارات وقيمها والتطبيقات الواقعية', feature4: 'مؤقتات مدمجة', feature4d: 'أنشطة منظمة بمؤقتات عد تنازلي تحافظ على وتيرة الدرس', feature5: 'تغذية راجعة فورية', feature5d: 'اختبارات مع تسجيل فوري وشروحات تساعد الطلاب على التعلم من أخطائهم', feature6: 'محوره الطالب', feature6d: 'رسوم KWL ومخططات فين وأنشطة تعاونية تضع الطالب في المقام الأول', meetInstructor: 'تعرف على معلمك', instructorDesc: 'معلم متخصص في الدراسات الأخلاقية والاجتماعية والثقافية لطلاب الإمارات.', footerTagline: 'أكاديمية MSCS: نجعل التعلم نشطاً، وليس سلبياً', about: 'حول', studentLogin: 'تسجيل دخول الطالب', parentalConsent: 'موافقة الوالدين', selectGrade: 'اختر صفك للبدء' },
  ur: { subtitle: 'اخلاقی، سماجی اور ثقافتی علوم', tagline: 'سیکھنے کو فعال بنانا، غیر فعال نہیں', interactivePlatform: '— انٹرایکٹو لرننگ پلیٹ فارم —', whyTitle: 'MSCS اکیڈمی کیوں؟', feature1: 'انٹرایکٹو لرننگ', feature1d: 'کوئز، ٹائم لائن، نقشے اور ڈریگ اینڈ ڈراپ سرگرمیاں', feature2: 'معیارات کے مطابق', feature2d: 'ہر سبق یو اے ای کریکولم معیارات کی پیروی کرتا ہے', feature3: 'یو اے ای اور حقیقی دنیا کے روابط', feature3d: 'ہر سبق یو اے ای کی ثقافت سے جڑتا ہے', feature4: 'بلٹ ان ٹائمرز', feature4d: 'کاؤنٹ ڈاؤن ٹائمرز کے ساتھ منظم سرگرمیاں', feature5: 'فوری فیڈبیک', feature5d: 'فوری اسکورنگ اور وضاحت کے ساتھ کوئز', feature6: 'طلباء مرکزی', feature6d: 'KWL چارٹس اور تعاون کی سرگرمیاں', meetInstructor: 'اپنے استاد سے ملیں', instructorDesc: 'یو اے ای کے طلباء کے لیے متخصص معلم۔', footerTagline: 'MSCS اکیڈمی: سیکھنے کو فعال بنانا', about: 'ہمارے بارے میں', studentLogin: 'طالب علم لاگ ان', parentalConsent: 'والدین کی رضامندی', selectGrade: 'شروع کرنے کے لیے اپنا گریڈ منتخب کریں' },
  fa: { subtitle: 'مطالعات اخلاقی، اجتماعی و فرهنگی', tagline: 'یادگیری را فعال می‌کنیم، نه غیرفعال', interactivePlatform: '— پلتفرم یادگیری تعاملی —', whyTitle: 'چرا آکادمی MSCS؟', feature1: 'یادگیری تعاملی', feature1d: 'آزمون‌ها، خط زمانی، نقشه‌ها و فعالیت‌های تعاملی', feature2: 'همسو با استانداردها', feature2d: 'هر درس از استانداردهای امارات پیروی می‌کند', feature3: 'ارتباط امارات و دنیای واقعی', feature3d: 'هر درس به فرهنگ امارات متصل است', feature4: 'تایمرهای داخلی', feature4d: 'فعالیت‌های ساختاریافته با تایمر', feature5: 'بازخورد فوری', feature5d: 'آزمون‌ها با امتیازدهی فوری', feature6: 'دانش‌آموز محور', feature6d: 'نمودارهای KWL و فعالیت‌های مشارکتی', meetInstructor: 'با معلم خود آشنا شوید', instructorDesc: 'معلم متخصص در مطالعات MSCS برای دانش‌آمویان امارات.', footerTagline: 'آکادمی MSCS: یادگیری فعال', about: 'درباره ما', studentLogin: 'ورود دانش‌آموز', parentalConsent: 'رضایت والدین', selectGrade: 'پایه خود را انتخاب کنید' },
  es: { subtitle: 'Estudios Morales, Sociales y Culturales', tagline: 'Haciendo el Aprendizaje Activo, No Pasivo', interactivePlatform: '— Plataforma de Aprendizaje Interactivo —', whyTitle: '¿Por qué MSCS Academy?', feature1: 'Aprendizaje Interactivo', feature1d: 'Cuestionarios, líneas de tiempo, mapas y actividades interactivas', feature2: 'Alineado con Estándares', feature2d: 'Cada lección sigue los estándares del plan de estudios de EAU', feature3: 'Conexiones EAU y Mundo Real', feature3d: 'Cada lección conecta con la cultura de EAU', feature4: 'Temporizadores Integrados', feature4d: 'Actividades estructuradas con temporizadores', feature5: 'Retroalimentación Instantánea', feature5d: 'Cuestionarios con puntuación inmediata', feature6: 'Centrado en el Estudiante', feature6d: 'Gráficos KWL y actividades colaborativas', meetInstructor: 'Conoce a Tu Instructor', instructorDesc: 'Educador especializado en Estudios MSCS para estudiantes de EAU.', footerTagline: 'MSCS Academy: Aprendizaje Activo', about: 'Acerca de', studentLogin: 'Inicio de Sesión del Estudiante', parentalConsent: 'Consentimiento de los Padres', selectGrade: 'Selecciona tu grado para comenzar' },
  ru: { subtitle: 'Нравственные, социальные и культурные исследования', tagline: 'Делаем обучение активным, а не пассивным', interactivePlatform: '— Интерактивная обучающая платформа —', whyTitle: 'Почему MSCS Academy?', feature1: 'Интерактивное обучение', feature1d: 'Тесты, временные шкалы, карты и интерактивные задания', feature2: 'Соответствие стандартам', feature2d: 'Каждый урок следует стандартам ОАЭ', feature3: 'Связи ОАЭ и реального мира', feature3d: 'Каждый урок связан с культурой ОАЭ', feature4: 'Встроенные таймеры', feature4d: 'Структурированные задания с таймерами', feature5: 'Мгновенная обратная связь', feature5d: 'Тесты с мгновенным оцениванием', feature6: 'Ориентировано на студента', feature6d: 'Диаграммы KWL и совместные задания', meetInstructor: 'Познакомьтесь с преподавателем', instructorDesc: 'Преподаватель, специализирующийся на MSCS для студентов ОАЭ.', footerTagline: 'MSCS Academy: Активное обучение', about: 'О нас', studentLogin: 'Вход для студентов', parentalConsent: 'Согласие родителей', selectGrade: 'Выберите свой класс' },
  tr: { subtitle: 'Ahlaki, Sosyal ve Kültürel Çalışmalar', tagline: 'Öğrenmeyi Aktif Kılıyoruz, Pasif Değil', interactivePlatform: '— İnteraktif Öğrenme Platformu —', whyTitle: 'Neden MSCS Academy?', feature1: 'İnteraktif Öğrenme', feature1d: 'Testler, zaman çizelgeleri, haritalar ve interaktif etkinlikler', feature2: 'Standartlara Uygun', feature2d: 'Her ders BAE müfredat standartlarını takip eder', feature3: 'BAE ve Gerçek Dünya Bağlantıları', feature3d: 'Her ders BAE kültürüyle bağlantılıdır', feature4: 'Dahili Zamanlayıcılar', feature4d: 'Geri sayım zamanlayıcılarıyla yapılandırılmış etkinlikler', feature5: 'Anında Geri Bildirim', feature5d: 'Anında puanlama ve açıklamalarla testler', feature6: 'Öğrenci Merkezli', feature6d: 'KWL çizelgeleri ve işbirlikçi etkinlikler', meetInstructor: 'Eğitmeninizle Tanışın', instructorDesc: 'BAE öğrencileri için MSCS alanında uzmanlaşmış eğitmen.', footerTagline: 'MSCS Academy: Aktif Öğrenme', about: 'Hakkımızda', studentLogin: 'Öğrenci Girişi', parentalConsent: 'Ebeveyn Onayı', selectGrade: 'Başlamak için sınıfınızı seçin' },
  fr: { subtitle: 'Études Morales, Sociales et Culturelles', tagline: "Rendre l'Apprentissage Actif, Non Passif", interactivePlatform: "— Plateforme d'Apprentissage Interactif —", whyTitle: 'Pourquoi MSCS Academy?', feature1: 'Apprentissage Interactif', feature1d: 'Quiz, chronologies, cartes et activités interactives', feature2: 'Aligné sur les Normes', feature2d: 'Chaque leçon suit les normes du programme des EAU', feature3: 'Liens EAU et Monde Réel', feature3d: 'Chaque leçon se connecte à la culture des EAU', feature4: 'Minuteries Intégrées', feature4d: 'Activités structurées avec minuteries', feature5: 'Retour Instantané', feature5d: 'Quiz avec notation immédiate', feature6: "Centré sur l'Étudiant", feature6d: 'Tableaux KWL et activités collaboratives', meetInstructor: 'Rencontrez Votre Instructeur', instructorDesc: "Éducateur spécialisé dans les Études MSCS pour les étudiants des EAU.", footerTagline: "MSCS Academy: Apprentissage Actif", about: 'À Propos', studentLogin: 'Connexion Étudiant', parentalConsent: 'Consentement Parental', selectGrade: 'Sélectionnez votre niveau' },
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
        <div className={`inline-flex items-center justify-center w-28 h-28 rounded-full border-4 ${
          percentage >= 75 ? 'border-emerald-400 bg-emerald-50' : percentage >= 50 ? 'border-amber-400 bg-amber-50' : 'border-rose-400 bg-rose-50'
        }`}>
          <div>
            <div className={`text-3xl font-bold ${percentage >= 75 ? 'text-emerald-600' : percentage >= 50 ? 'text-amber-600' : 'text-rose-600'}`}>
              {score}/{questions.length}
            </div>
            <div className={`text-sm font-medium ${percentage >= 75 ? 'text-emerald-500' : percentage >= 50 ? 'text-amber-500' : 'text-rose-500'}`}>
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
            <div key={q.id} className={`flex items-center gap-2 text-sm px-4 py-2 rounded-lg ${
              answers[q.id] === q.correctAnswer ? 'bg-emerald-50 text-emerald-700' : 'bg-rose-50 text-rose-700'
            }`}>
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
            <div key={i} className={`w-2 h-2 rounded-full ${i < currentQ ? 'bg-[#D4AF37]' : i === currentQ ? 'bg-[#722F37]' : 'bg-gray-200'}`} />
          ))}
        </div>
      </div>
      <div className="bg-gradient-to-br from-amber-50 to-rose-50 rounded-xl p-4 border border-amber-200">
        <h4 className="font-bold text-gray-800 text-sm mb-3">{question.question}</h4>
        <div className="space-y-2">
          {question.options?.map((option, idx) => {
            const isSelected = answers[question.id] === idx;
            const isCorrectOption = question.correctAnswer === idx;
            let optionClass = 'border-gray-200 bg-white hover:border-[#D4AF37] hover:bg-amber-50 cursor-pointer';
            if (isAnswered) {
              if (isCorrectOption) optionClass = 'border-emerald-400 bg-emerald-50 ring-2 ring-emerald-200';
              else if (isSelected && !isCorrectOption) optionClass = 'border-rose-400 bg-rose-50 ring-2 ring-rose-200';
              else optionClass = 'border-gray-200 bg-gray-50 opacity-50';
            }
            return (
              <button key={idx} onClick={() => handleAnswer(idx)} disabled={isAnswered}
                className={`w-full text-left px-4 py-2.5 rounded-lg border-2 text-sm transition-all ${optionClass}`}>
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
        <div className={`p-3 rounded-lg border text-xs ${isCorrect ? 'bg-emerald-50 border-emerald-200 text-emerald-800' : 'bg-amber-50 border-amber-200 text-amber-800'}`}>
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
      <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono font-bold ${
        isComplete ? 'bg-emerald-100 text-emerald-700' : timeLeft < 60 ? 'bg-rose-100 text-rose-700' : 'bg-amber-100 text-amber-700'
      }`}>
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

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-3 gap-3">
        {[
          { title: leftTitle, items: leftItems, color: 'amber' },
          { title: centerTitle, items: centerItems, color: 'rose' },
          { title: rightTitle, items: rightItems, color: 'emerald' },
        ].map((col, i) => (
          <div key={i} className={`rounded-xl border-2 border-${col.color}-300 bg-${col.color}-50 overflow-hidden`}>
            <div className={`bg-${col.color}-200 px-3 py-2.5 text-center`}>
              <h4 className="text-sm font-bold text-gray-800">{col.title}</h4>
            </div>
            <div className="p-3 space-y-2">
              {col.items.map((item, j) => (
                <div key={j} className={`bg-${col.color}-100 border border-${col.color}-200 rounded-lg px-3 py-1.5 text-xs text-gray-700 font-medium`}>
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
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [studentName, setStudentName] = useState('');
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);
  const [language, setLanguage] = useState('en');
  const [dashboardGrade, setDashboardGrade] = useState<number>(0);

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

  // Color map for grades
  const gradeColorMap: Record<number, { gradient: string; accent: string }> = {
    6: { gradient: 'from-amber-600 to-amber-800', accent: '#D97706' },
    7: { gradient: 'from-emerald-600 to-emerald-800', accent: '#047857' },
    8: { gradient: 'from-rose-700 to-[#722F37]', accent: '#722F37' },
    9: { gradient: 'from-teal-600 to-teal-800', accent: '#0D9488' },
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
          <select value={language} onChange={e => setLanguage(e.target.value)}
            className="bg-white/10 backdrop-blur-md border border-[#D4AF37]/30 rounded-lg px-3 py-2 text-sm text-white cursor-pointer hover:bg-white/20 transition-colors">
            <option value="en" className="text-black">🇬🇧 English</option>
            <option value="ar" className="text-black">🇸🇦 العربية</option>
            <option value="ur" className="text-black">🇵🇰 اردو</option>
            <option value="fa" className="text-black">🇮🇷 فارسی</option>
            <option value="es" className="text-black">🇪🇸 Español</option>
            <option value="ru" className="text-black">🇷🇺 Русский</option>
            <option value="tr" className="text-black">🇹🇷 Türkçe</option>
            <option value="fr" className="text-black">🇫🇷 Français</option>
          </select>
        </div>

        <div className="absolute top-20 left-10 w-24 h-24 border border-[#D4AF37]/20 rounded-full animate-pulse" />
        <div className="absolute top-40 right-20 w-16 h-16 border border-[#D4AF37]/15 rotate-45 animate-bounce" style={{ animationDuration: '3s' }} />
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
          <p className="text-sm sm:text-base text-amber-200/70 mb-8 italic">{t('interactivePlatform')}</p>

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

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
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
              { icon: <Brain className="w-8 h-8" />, title: t('feature1'), desc: t('feature1d'), color: 'text-amber-600', bg: 'bg-amber-50', border: 'border-amber-200' },
              { icon: <Target className="w-8 h-8" />, title: t('feature2'), desc: t('feature2d'), color: 'text-emerald-600', bg: 'bg-emerald-50', border: 'border-emerald-200' },
              { icon: <MapPin className="w-8 h-8" />, title: t('feature3'), desc: t('feature3d'), color: 'text-rose-600', bg: 'bg-rose-50', border: 'border-rose-200' },
              { icon: <Timer className="w-8 h-8" />, title: t('feature4'), desc: t('feature4d'), color: 'text-teal-600', bg: 'bg-teal-50', border: 'border-teal-200' },
              { icon: <Award className="w-8 h-8" />, title: t('feature5'), desc: t('feature5d'), color: 'text-orange-600', bg: 'bg-orange-50', border: 'border-orange-200' },
              { icon: <Users className="w-8 h-8" />, title: t('feature6'), desc: t('feature6d'), color: 'text-purple-600', bg: 'bg-purple-50', border: 'border-purple-200' },
            ].map((feature, i) => (
              <Card key={i} className={`${feature.border} ${feature.bg} border-2 hover:shadow-lg transition-shadow`}>
                <CardContent className="p-6 text-center">
                  <div className={`${feature.color} flex justify-center mb-3`}>{feature.icon}</div>
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
        <div className={`relative bg-gradient-to-r ${colors.gradient} py-12 px-4`}>
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
                  const lessonCount = unitData ? unitData.lessons.length : unit.lessonsCount;

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
        <div className={`relative bg-gradient-to-r ${gradeColorMap[selectedGrade.number].gradient} py-8 px-4`}>
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
    const totalSlides = 8;
    const cleanTitle = getCleanTitle(lesson.title);
    const unitContext = getUnitContextFromTitle(lesson.title);
    const lessonId = getLessonId(selectedGrade.key, selectedTerm.key, selectedUnit.key, selectedLessonIndex);
    const quizQuestions = generateQuizQuestions(lesson, selectedGrade.key, selectedTerm.key, selectedUnit.key, selectedLessonIndex);
    const activities = parseActivities(lesson.activities);
    const uaeLinks = generateUAELinks(lesson);
    const warmUp = generateWarmUp(lesson);

    // Standards from SLO codes
    const standards = lesson.slo_codes.split(',').map(s => s.trim()).filter(s => s.length > 0);
    // Objectives from lesson objective
    const objectives = lesson.objective.replace(/^SWBAT\s*/i, '').split(/[;.]/).map(s => s.trim()).filter(s => s.length > 10).slice(0, 4);
    // Success criteria
    const successCriteria = lesson.success_criteria.replace(/^Student can:\s*/i, '').split(/[;(]/).map(s => s.trim().replace(/^\(\d+\)\s*/, '')).filter(s => s.length > 5).slice(0, 5);

    // Map markers based on lesson topic
    const mapMarkers = generateMapMarkers(lesson);

    const slides = [
      // SLIDE 1: Title & Introduction
      {
        id: 1, type: 'title' as const, title: cleanTitle,
        content: (
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-[#722F37] to-[#5A1A23] rounded-xl p-6 text-white relative overflow-hidden">
              <ArabicPattern opacity={0.06} color="#D4AF37" />
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-4">
                  <Landmark className="w-8 h-8 text-[#D4AF37]" />
                  <h2 className="text-2xl sm:text-3xl font-bold">{cleanTitle}</h2>
                </div>
                {unitContext && <p className="text-amber-100 text-sm">{unitContext}</p>}
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
                      <li key={i}>{i + 1}. {obj.length > 80 ? obj.substring(0, 77) + '...' : obj}</li>
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
                      <span>{c.length > 80 ? c.substring(0, 77) + '...' : c}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <DisclaimerBanner />
          </div>
        ),
      },

      // SLIDE 2: Prior Learning / KWL
      {
        id: 2, type: 'prior-learning' as const, title: 'Prior Learning',
        content: (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-emerald-600 to-teal-700 rounded-xl p-5 text-white">
              <div className="flex items-center gap-2 mb-2">
                <Brain className="w-6 h-6 text-amber-300" />
                <h3 className="text-xl font-bold">What Do You Already Know?</h3>
              </div>
              <p className="text-emerald-100 text-sm">Before we begin, let&apos;s activate our prior knowledge</p>
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
      },

      // SLIDE 3: Warm-Up / Hook
      {
        id: 3, type: 'warmup' as const, title: 'Warm-Up Activity',
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
      },

      // SLIDE 4: Core Activities
      {
        id: 4, type: 'activities' as const, title: 'Core Activities',
        content: (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-amber-600 to-orange-600 rounded-xl p-5 text-white">
              <div className="flex items-center gap-2 mb-2">
                <Swords className="w-6 h-6 text-amber-200" />
                <h3 className="text-xl font-bold">Core Activities</h3>
              </div>
              <p className="text-amber-100 text-sm">Work through each activity — use the timers to stay on track!</p>
            </div>

            {activities.map((activity, idx) => (
              <Card key={activity.id} className={`border-2 overflow-hidden ${idx % 2 === 0 ? 'border-amber-200' : 'border-rose-200'}`}>
                <div className={`px-4 py-3 ${idx % 2 === 0 ? 'bg-amber-50' : 'bg-rose-50'}`}>
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <div className="flex items-center gap-2">
                      <Badge className={`${
                        activity.type === 'interactive' ? 'bg-[#D4AF37] text-white' :
                        activity.type === 'read' ? 'bg-amber-200 text-amber-800' :
                        activity.type === 'discuss' ? 'bg-rose-200 text-rose-800' :
                        activity.type === 'creative' ? 'bg-emerald-200 text-emerald-800' :
                        'bg-teal-200 text-teal-800'
                      }`}>
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
      },

      // SLIDE 5: UAE & Real-Life Links
      {
        id: 5, type: 'links' as const, title: 'UAE & Real-Life Connections',
        content: (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl p-5 text-white">
              <div className="flex items-center gap-2 mb-2">
                <Globe className="w-6 h-6 text-emerald-200" />
                <h3 className="text-xl font-bold">UAE & Real-Life Connections</h3>
              </div>
              <p className="text-emerald-100 text-sm">How does this lesson connect to our lives in the UAE?</p>
            </div>

            {uaeLinks.map((link, i) => {
              const icons = { building: <Landmark className="w-5 h-5" />, star: <Star className="w-5 h-5" />, globe: <Globe className="w-5 h-5" />, mountain: <Mountain className="w-5 h-5" />, heart: <Heart className="w-5 h-5" /> };
              const colors = ['emerald', 'amber', 'rose', 'teal', 'purple'];
              const color = colors[i % colors.length];
              return (
                <Card key={i} className={`border-2 border-${color}-200 bg-${color}-50/30`}>
                  <CardContent className="p-5">
                    <div className="flex items-start gap-3">
                      <div className={`w-10 h-10 rounded-full bg-${color}-100 border border-${color}-300 flex items-center justify-center shrink-0 text-${color}-600`}>
                        {icons[link.icon]}
                      </div>
                      <div>
                        <h4 className={`font-bold text-${color}-800 text-sm`}>{link.title}</h4>
                        <p className="text-xs text-gray-600 mt-1 leading-relaxed">{link.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}

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
      },

      // SLIDE 6: Homework
      {
        id: 6, type: 'homework' as const, title: 'Homework & Extended Learning',
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
      },

      // SLIDE 7: Quiz
      {
        id: 7, type: 'quiz' as const, title: 'Formative Assessment',
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
                <Badge className="bg-white/20 text-white border-white/30 text-[10px]">{quizQuestions.length} Questions</Badge>
              </div>
            </div>

            <QuizEngine
              questions={quizQuestions}
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
      },

      // SLIDE 8: Thank You
      {
        id: 8, type: 'thankyou' as const, title: 'Thank You!',
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
      },
    ];

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
                  className={`flex items-center gap-1 px-2 py-1 rounded-md text-[10px] font-medium transition-all whitespace-nowrap ${
                    i === currentSlide ? 'bg-[#722F37] text-white' : i < currentSlide ? 'bg-amber-100 text-amber-700' : 'bg-gray-100 text-gray-400'
                  }`}>
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
                <div key={i} className={`w-2 h-2 rounded-full transition-all cursor-pointer ${
                  i === currentSlide ? 'bg-[#722F37] w-4' : i < currentSlide ? 'bg-[#D4AF37]' : 'bg-gray-300'
                }`} onClick={() => { setSlideDirection(i > currentSlide ? 'right' : 'left'); setCurrentSlide(i); }} />
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
              { label: 'Total Students', value: totalStudents, icon: <Users className="w-5 h-5" />, color: 'text-amber-600', bg: 'bg-amber-50', border: 'border-amber-200' },
              { label: 'Quizzes Completed', value: totalQuizzes, icon: <Trophy className="w-5 h-5" />, color: 'text-emerald-600', bg: 'bg-emerald-50', border: 'border-emerald-200' },
              { label: 'Average Score', value: `${avgScore}%`, icon: <Target className="w-5 h-5" />, color: 'text-rose-600', bg: 'bg-rose-50', border: 'border-rose-200' },
              { label: 'Highest Score', value: `${highestScore}%`, icon: <Award className="w-5 h-5" />, color: 'text-[#D4AF37]', bg: 'bg-amber-50', border: 'border-[#D4AF37]' },
            ].map((stat, i) => (
              <Card key={i} className={`border-2 ${stat.border} ${stat.bg}`}>
                <CardContent className="p-4 text-center">
                  <div className={`${stat.color} flex justify-center mb-2`}>{stat.icon}</div>
                  <div className={`text-2xl font-bold ${stat.color}`}>{stat.value}</div>
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
                          <Badge className={`${student.avgScore >= 75 ? 'bg-emerald-100 text-emerald-700' : student.avgScore >= 50 ? 'bg-amber-100 text-amber-700' : 'bg-rose-100 text-rose-700'} border-0`}>
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
                          <Badge className={`${result.percentage >= 75 ? 'bg-emerald-100 text-emerald-700' : result.percentage >= 50 ? 'bg-amber-100 text-amber-700' : 'bg-rose-100 text-rose-700'} border-0 text-[10px]`}>
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

  const renderLoginPage = () => (
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
                <Input value={loginCode} onChange={e => { setLoginCode(e.target.value.toUpperCase()); setLoginError(''); }}
                  placeholder="MSCS-7A-2026-014" className="text-center font-mono text-lg tracking-wider" />
                <p className="text-xs text-gray-400 mt-1">Format: MSCS-Grade-Section-Year-Number</p>
              </div>
              {loginError && (
                <div className="bg-rose-50 border border-rose-200 rounded-lg p-3 text-sm text-rose-700 flex items-center gap-2">
                  <XCircle className="w-4 h-4 shrink-0" />{loginError}
                </div>
              )}
              <Button onClick={() => {
                if (loginCode === 'MSCS-MASTER-2026-ADMIN') {
                  setIsLoggedIn(true); setStudentName('MASTER'); navigateTo('teacherDashboard'); return;
                }
                const pattern = /^MSCS-\d[A-Z]-\d{4}-\d{3}$/;
                if (pattern.test(loginCode)) {
                  setIsLoggedIn(true); setStudentName(loginCode); navigateTo('landing');
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
                <p className="text-xs text-gray-400">Demo: Enter any valid format like MSCS-8A-2026-001</p>
                <p className="text-xs text-gray-400 mt-1">Teacher: MSCS-MASTER-2026-ADMIN</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );

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
    <div className="min-h-screen">
      {view === 'landing' && renderLanding()}
      {view === 'gradeSelect' && renderGradeSelect()}
      {view === 'unitSelect' && renderUnitSelect()}
      {view === 'lessonView' && renderLessonViewer()}
      {view === 'aboutPage' && renderAboutPage()}
      {view === 'loginPage' && renderLoginPage()}
      {view === 'consentPage' && renderConsentPage()}
      {view === 'teacherDashboard' && renderTeacherDashboard()}
    </div>
  );
}
