'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import {
  BookOpen, Star, Clock, ChevronLeft, ChevronRight, ChevronDown,
  GraduationCap, MapPin, Users, Trophy, ArrowRight, Play,
  CheckCircle2, XCircle, AlertCircle, Home as HomeIcon, Info, LogIn,
  Sparkles, Crown, Shield, Globe, Heart, Lightbulb,
  Timer, FileText, Map, Brain, Target, Award, ExternalLink,
  Mountain, Landmark, Scroll, Swords, Calendar, Eye
} from 'lucide-react';

// ═══════════════════════════════════════════════════════════════
// TYPES & INTERFACES
// ═══════════════════════════════════════════════════════════════

type ViewType = 'landing' | 'gradeSelect' | 'termSelect' | 'unitSelect' | 'lessonView' | 'aboutPage' | 'loginPage' | 'consentPage';

interface QuizQuestion {
  id: string;
  question: string;
  type: 'multiple-choice' | 'fill-blank' | 'true-false';
  options?: string[];
  correctAnswer: string | number;
  explanation?: string;
}

interface Activity {
  id: string;
  title: string;
  duration: number;
  description: string;
  type: 'read' | 'discuss' | 'interactive' | 'creative' | 'research';
  content?: string;
}

interface LessonSlide {
  id: number;
  type: 'title' | 'prior-learning' | 'warmup' | 'activities' | 'links' | 'homework' | 'quiz' | 'thankyou';
  title: string;
  content: React.ReactNode;
}

interface Unit {
  id: string;
  title: string;
  lessons: number;
  priority: boolean;
  description: string;
}

interface Term {
  id: string;
  number: number;
  title: string;
  units: Unit[];
  color: string;
}

interface Grade {
  id: number;
  title: string;
  color: string;
  bgColor: string;
  borderColor: string;
  icon: React.ReactNode;
  tagline: string;
  terms: Term[];
}

// ═══════════════════════════════════════════════════════════════
// SAMPLE LESSON DATA — Ottoman Empire
// ═══════════════════════════════════════════════════════════════

const ottomanQuizQuestions: QuizQuestion[] = [
  {
    id: 'q1',
    question: 'Who founded the Ottoman Empire?',
    type: 'multiple-choice',
    options: ['Muhammad al-Fatih', 'Selim I', 'Uthman I in 1299', 'Sulayman the Magnificent'],
    correctAnswer: 2,
    explanation: 'Uthman I (Osman I) founded the Ottoman Empire in 1299, leading a small Turkoman principality in Anatolia that would grow into one of history\'s greatest empires.',
  },
  {
    id: 'q2',
    question: 'The Battle of Manzikert (1071) was fought by which empire?',
    type: 'multiple-choice',
    options: ['Ottoman Empire', 'Great Seljuk Empire', 'Mamluk Sultanate', 'Byzantine Empire alone'],
    correctAnswer: 1,
    explanation: 'The Battle of Manzikert was fought by the Great Seljuk Empire under Sultan Alp Arslan against the Byzantine Empire. This was NOT an Ottoman battle — it happened over 200 years before the Ottomans existed!',
  },
  {
    id: 'q3',
    question: 'Why was the conquest of Constantinople (1453) so significant?',
    type: 'multiple-choice',
    options: [
      'It was the fulfillment of a Prophetic glad tiding',
      'It simply made the Ottomans wealthy',
      'It was the first city ever conquered by Muslims',
      'It had no religious significance',
    ],
    correctAnswer: 0,
    explanation: 'The conquest fulfilled the famous hadith of Prophet Muhammad (PBUH): "You shall conquer Constantinople. Blessed is its commander and blessed is its army." Sultan Muhammad al-Fatih achieved this at just 21 years old.',
  },
  {
    id: 'q4',
    question: 'What title did the Ottoman Sultan take after conquering the Arab lands?',
    type: 'multiple-choice',
    options: ['King of the Middle East', 'Khadim al-Haramayn al-Sharifayn', 'Emperor of Rome', 'Commander of the Indian Ocean'],
    correctAnswer: 1,
    explanation: '"Khadim al-Haramayn al-Sharifayn" means "Servant of the Two Noble Sanctuaries" — referring to Makkah and Madinah. This title showed the Sultan\'s responsibility as protector of Islam\'s holiest sites.',
  },
];

const ottomanActivities: Activity[] = [
  {
    id: 'a1',
    title: 'Read & Discuss — What Was the Ottoman Empire?',
    duration: 8,
    type: 'read',
    description: 'Read about the Ottoman Empire — one of the longest-lasting and most powerful empires in world history, spanning over 600 years across three continents.',
    content: 'The Ottoman Empire (1299–1922) was one of the largest and longest-lasting empires in history. At its height, it stretched across Southeast Europe, Western Asia, and North Africa. It was founded by Turkoman tribes from Central Asia who migrated into Anatolia (modern-day Turkey). The empire was known for its powerful military, advanced administration, and rich cultural achievements in architecture, art, and science.',
  },
  {
    id: 'a2',
    title: 'How Did the Ottomans Begin?',
    duration: 7,
    type: 'discuss',
    description: 'Explore the origins: Battle of Manzikert (1071) opened Anatolia to Turkic peoples, and Uthman I founded the empire in 1299.',
    content: 'The Battle of Manzikert (1071) was a turning point — the Great Seljuk Empire defeated the Byzantine Empire, opening Anatolia to Turkic migration. Over 200 years later, Uthman I (Osman Gazi) established a small principality that would become the Ottoman Empire in 1299. From these humble beginnings, his successors expanded the territory steadily.',
  },
  {
    id: 'a3',
    title: 'Interactive Timeline — Place Key Events',
    duration: 8,
    type: 'interactive',
    description: 'Drag and place the key Ottoman events on the timeline in chronological order.',
  },
  {
    id: 'a4',
    title: 'The Conquest of Constantinople',
    duration: 7,
    type: 'read',
    description: 'Learn about Sultan Muhammad al-Fatih\'s legendary conquest and its connection to Prophetic tradition.',
    content: 'In 1453, the 21-year-old Sultan Muhammad al-Fatih (Mehmed II) conquered Constantinople, ending the 1,000-year Byzantine Empire. This conquest fulfilled the hadith: "You shall conquer Constantinople. Blessed is its commander and blessed is its army." The city was renamed Istanbul and became the Ottoman capital. Sultan Selim I later conquered the Arab lands (1516–1517), including the holy cities of Makkah and Madinah, taking the title "Khadim al-Haramayn al-Sharifayn."',
  },
];

// ═══════════════════════════════════════════════════════════════
// CURRICULUM DATA
// ═══════════════════════════════════════════════════════════════

const gradesData: Grade[] = [
  {
    id: 6,
    title: 'Grade 6',
    color: 'text-amber-700',
    bgColor: 'bg-amber-50',
    borderColor: 'border-amber-300',
    icon: <Heart className="w-8 h-8" />,
    tagline: 'Building Moral Foundations',
    terms: [
      {
        id: 'g6t1', number: 1, title: 'Term 1', color: 'amber',
        units: [
          { id: 'g6u1', title: 'Equality and Justice as Fairness', lessons: 5, priority: false, description: 'Distributive justice, fairness, and leadership' },
          { id: 'g6u2', title: 'Physical Health and Diet', lessons: 5, priority: false, description: 'Healthy lifestyle, exercise, disease prevention' },
          { id: 'g6u3', title: 'Perspectives of People through Time', lessons: 5, priority: true, description: 'Historical perspectives and inquiry' },
        ],
      },
      {
        id: 'g6t2', number: 2, title: 'Term 2', color: 'amber',
        units: [
          { id: 'g6u4', title: 'Respect and Tolerance in a Diverse Community', lessons: 5, priority: false, description: 'Cultural diversity, prejudice, tolerance' },
          { id: 'g6u5', title: 'How the UAE Grew into a Diverse Society', lessons: 5, priority: false, description: 'Museums, cultural change, exhibits' },
          { id: 'g6u6', title: 'Impacts of Transitions in Europe', lessons: 7, priority: true, description: 'Renaissance, Age of Discovery, trade companies' },
        ],
      },
      {
        id: 'g6t3', number: 3, title: 'Term 3', color: 'amber',
        units: [
          { id: 'g6u7', title: 'Government Services', lessons: 5, priority: true, description: 'How government functions, laws, rights & responsibilities' },
        ],
      },
    ],
  },
  {
    id: 7,
    title: 'Grade 7',
    color: 'text-emerald-700',
    bgColor: 'bg-emerald-50',
    borderColor: 'border-emerald-300',
    icon: <Globe className="w-8 h-8" />,
    tagline: 'Exploring Our World',
    terms: [
      {
        id: 'g7t1', number: 1, title: 'Term 1', color: 'emerald',
        units: [
          { id: 'g7u1', title: 'Individual Responsibilities and Moral Obligations', lessons: 5, priority: false, description: 'Duties, moral rules, the moral imperative' },
          { id: 'g7u2', title: 'Making Good Decisions', lessons: 5, priority: false, description: 'Safety, first aid, protection against crime' },
          { id: 'g7u3', title: 'East Asia', lessons: 6, priority: true, description: 'Geography, ancient China, Korea\'s Renaissance' },
        ],
      },
      {
        id: 'g7t2', number: 2, title: 'Term 2', color: 'emerald',
        units: [
          { id: 'g7u4', title: 'Trade, Travel & Communications: UAE in a Globalised World', lessons: 5, priority: false, description: 'Globalisation, UAE connectivity, cultural exchange' },
          { id: 'g7u5', title: 'Human Needs', lessons: 5, priority: false, description: 'Life necessities, basic needs, value of human life' },
          { id: 'g7u6', title: 'Developments in South Asia', lessons: 7, priority: true, description: 'Ancient India, Islamic civilization, British in India' },
        ],
      },
      {
        id: 'g7t3', number: 3, title: 'Term 3', color: 'emerald',
        units: [
          { id: 'g7u7', title: 'Digital Challenge', lessons: 5, priority: false, description: 'Online safety, privacy, smart information selection' },
          { id: 'g7u8', title: 'Moral Education in Action', lessons: 1, priority: false, description: 'Applied moral education project' },
          { id: 'g7u9', title: 'Central Asia', lessons: 7, priority: true, description: 'Silk Road, Kazakhstan, Kyrgyzstan, Uzbekistan, Cold War' },
        ],
      },
    ],
  },
  {
    id: 8,
    title: 'Grade 8',
    color: 'text-rose-700',
    bgColor: 'bg-rose-50',
    borderColor: 'border-rose-300',
    icon: <Landmark className="w-8 h-8" />,
    tagline: 'Understanding Empires & Civilizations',
    terms: [
      {
        id: 'g8t1', number: 1, title: 'Term 1', color: 'rose',
        units: [
          { id: 'g8u1', title: 'Ethics in the Context of Communities', lessons: 5, priority: false, description: 'Community definition, role, safety, UAE social groups' },
          { id: 'g8u2', title: 'Valuing Diversity', lessons: 5, priority: false, description: 'Diversity, tolerance, celebrating great attitudes' },
          { id: 'g8u3', title: 'African Civilizations', lessons: 5, priority: true, description: 'Land & resources, ancient civilizations, Islamic West Africa' },
        ],
      },
      {
        id: 'g8t2', number: 2, title: 'Term 2', color: 'rose',
        units: [
          { id: 'g8u4', title: 'The Growth of Consultative Governance in the UAE', lessons: 5, priority: false, description: 'Majlis, Sheikh Zayed, FNC, smart governance' },
          { id: 'g8u5', title: 'Morality in the Context of States', lessons: 5, priority: false, description: 'State & government, laws, good governance, UAE government' },
          { id: 'g8u6', title: 'North and South America', lessons: 7, priority: true, description: 'Geography, indigenous peoples, colonial era, civil war' },
        ],
      },
      {
        id: 'g8t3', number: 3, title: 'Term 3', color: 'rose',
        units: [
          { id: 'g8u7', title: 'Dealing with Conflict', lessons: 5, priority: false, description: 'Internal conflicts, external conflicts, resolution' },
          { id: 'g8u8', title: 'Moral Education in Action', lessons: 1, priority: false, description: 'Applied moral education project' },
          { id: 'g8u9', title: 'The Ottoman Empire', lessons: 5, priority: true, description: 'Rise & expansion, Suleyman I, architecture, WWI' },
        ],
      },
    ],
  },
  {
    id: 9,
    title: 'Grade 9',
    color: 'text-teal-700',
    bgColor: 'bg-teal-50',
    borderColor: 'border-teal-300',
    icon: <Crown className="w-8 h-8" />,
    tagline: 'Leadership & Global Perspectives',
    terms: [
      {
        id: 'g9t1', number: 1, title: 'Term 1', color: 'teal',
        units: [
          { id: 'g9u1', title: 'Introduction to Global Ethics', lessons: 5, priority: false, description: 'Global ethics, UAE international relations, moral challenges' },
          { id: 'g9u2', title: 'Financial Awareness', lessons: 5, priority: false, description: 'Value of money, wealth, entrepreneurship' },
          { id: 'g9u3', title: 'UAE History and Heritage', lessons: 5, priority: true, description: 'Jebel Faya, Bronze Age, Falaj, Ed-Dur, Arabian Gulf trade' },
        ],
      },
      {
        id: 'g9t2', number: 2, title: 'Term 2', color: 'teal',
        units: [
          { id: 'g9u4', title: 'What Should Be Preserved and How?', lessons: 5, priority: false, description: 'Heritage importance, Emirati heritage, preservation' },
          { id: 'g9u5', title: 'Governments, Authority & Judiciary in the UAE', lessons: 5, priority: false, description: 'Constitution, federal system, law & order' },
          { id: 'g9u6', title: 'Developments Leading up to the Founding of the UAE', lessons: 4, priority: true, description: 'Islamic civilization, Bani Yas, British era, Trucial States' },
        ],
      },
      {
        id: 'g9t3', number: 3, title: 'Term 3', color: 'teal',
        units: [
          { id: 'g9u7', title: 'Being an Active Citizen', lessons: 5, priority: false, description: 'Civic engagement, good citizen, competencies' },
          { id: 'g9u8', title: 'The UAE in the 21st Century', lessons: 10, priority: true, description: 'Knowledge economy, smart initiatives, sustainability, future' },
        ],
      },
    ],
  },
];

// ═══════════════════════════════════════════════════════════════
// HELPER: Mr. Ahmed Ali link
// ═══════════════════════════════════════════════════════════════

function AhmedAliLink({ className = '', size = 'sm' }: { className?: string; size?: 'sm' | 'md' | 'lg' }) {
  const sizeClasses = { sm: 'text-xs', md: 'text-sm', lg: 'text-base' };
  return (
    <a
      href="https://mr-ahmed-ali.vercel.app"
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-1 font-semibold text-[#D4AF37] hover:text-amber-600 transition-colors ${sizeClasses[size]} ${className}`}
    >
      <GraduationCap className={`${size === 'lg' ? 'w-4 h-4' : size === 'md' ? 'w-3 h-3' : 'w-3 h-3'}`} />
      Mr. Ahmed Ali
      <ExternalLink className="w-2.5 h-2.5 opacity-60" />
    </a>
  );
}

// ═══════════════════════════════════════════════════════════════
// COMPONENT: Arabic Geometric Pattern (CSS-only)
// ═══════════════════════════════════════════════════════════════

function ArabicPattern({ opacity = 0.08, color = '#D4AF37' }: { opacity?: number; color?: string }) {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern id="arabicPattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
          <path d="M30 0L60 30L30 60L0 30Z" fill="none" stroke={color} strokeWidth="0.5" />
          <path d="M30 10L50 30L30 50L10 30Z" fill="none" stroke={color} strokeWidth="0.3" />
          <circle cx="30" cy="30" r="4" fill="none" stroke={color} strokeWidth="0.3" />
          <circle cx="0" cy="0" r="3" fill="none" stroke={color} strokeWidth="0.3" />
          <circle cx="60" cy="0" r="3" fill="none" stroke={color} strokeWidth="0.3" />
          <circle cx="0" cy="60" r="3" fill="none" stroke={color} strokeWidth="0.3" />
          <circle cx="60" cy="60" r="3" fill="none" stroke={color} strokeWidth="0.3" />
          <path d="M15 0L30 15L15 30L0 15Z" fill="none" stroke={color} strokeWidth="0.2" />
          <path d="M45 0L60 15L45 30L30 15Z" fill="none" stroke={color} strokeWidth="0.2" />
          <path d="M15 30L30 45L15 60L0 45Z" fill="none" stroke={color} strokeWidth="0.2" />
          <path d="M45 30L60 45L45 60L30 45Z" fill="none" stroke={color} strokeWidth="0.2" />
        </pattern>
        <pattern id="arabicPattern2" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
          <rect width="120" height="120" fill="url(#arabicPattern)" />
          <path d="M60 0L120 60L60 120L0 60Z" fill="none" stroke={color} strokeWidth="0.8" />
          <path d="M60 20L100 60L60 100L20 60Z" fill="none" stroke={color} strokeWidth="0.5" />
          <path d="M60 35L85 60L60 85L35 60Z" fill="none" stroke={color} strokeWidth="0.3" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#arabicPattern2)" />
    </svg>
  );
}

// ═══════════════════════════════════════════════════════════════
// COMPONENT: Decorative Border
// ═══════════════════════════════════════════════════════════════

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

// ═══════════════════════════════════════════════════════════════
// COMPONENT: KWL Chart
// ═══════════════════════════════════════════════════════════════

function KWLColumn({
  title, icon, items, onAdd, onUpdate, color, bgColor, borderColor,
}: {
  title: string; icon: React.ReactNode; items: string[];
  onAdd: () => void; onUpdate: (index: number, value: string) => void;
  color: string; bgColor: string; borderColor: string;
}) {
  return (
    <div className={`flex-1 min-w-0 rounded-xl border-2 ${borderColor} ${bgColor} p-3`}>
      <div className={`flex items-center gap-2 mb-3 font-bold ${color}`}>
        {icon}
        <span className="text-sm">{title}</span>
      </div>
      <div className="space-y-2">
        {items.map((item, idx) => (
          <Input
            key={idx}
            value={item}
            onChange={(e) => onUpdate(idx, e.target.value)}
            placeholder={`${title}...`}
            className="text-xs bg-white/80 border-0 focus:ring-1 focus:ring-amber-400"
          />
        ))}
        <Button
          variant="ghost"
          size="sm"
          onClick={onAdd}
          className="w-full text-xs h-7"
        >
          + Add
        </Button>
      </div>
    </div>
  );
}

function KWLChart() {
  const [knowItems, setKnowItems] = useState<string[]>(['']);
  const [wantItems, setWantItems] = useState<string[]>(['']);
  const [learnedItems, setLearnedItems] = useState<string[]>(['']);

  const addK = () => setKnowItems([...knowItems, '']);
  const addW = () => setWantItems([...wantItems, '']);
  const addL = () => setLearnedItems([...learnedItems, '']);

  const updateK = (idx: number, val: string) => {
    const a = [...knowItems]; a[idx] = val; setKnowItems(a);
  };
  const updateW = (idx: number, val: string) => {
    const a = [...wantItems]; a[idx] = val; setWantItems(a);
  };
  const updateL = (idx: number, val: string) => {
    const a = [...learnedItems]; a[idx] = val; setLearnedItems(a);
  };

  return (
    <div className="flex gap-3 overflow-x-auto pb-2">
      <KWLColumn title="What I Know" icon={<Eye className="w-4 h-4" />} items={knowItems} onAdd={addK} onUpdate={updateK} color="text-amber-700" bgColor="bg-amber-50/50" borderColor="border-amber-300" />
      <KWLColumn title="Want to Know" icon={<Lightbulb className="w-4 h-4" />} items={wantItems} onAdd={addW} onUpdate={updateW} color="text-emerald-700" bgColor="bg-emerald-50/50" borderColor="border-emerald-300" />
      <KWLColumn title="What I Learned" icon={<CheckCircle2 className="w-4 h-4" />} items={learnedItems} onAdd={addL} onUpdate={updateL} color="text-rose-700" bgColor="bg-rose-50/50" borderColor="border-rose-300" />
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════
// COMPONENT: Interactive Timeline
// ═══════════════════════════════════════════════════════════════

interface TimelineEvent {
  id: string;
  year: number;
  title: string;
  description: string;
}

const timelineEvents: TimelineEvent[] = [
  { id: 't1', year: 1071, title: 'Battle of Manzikert', description: 'Great Seljuk victory opens Anatolia to Turkic peoples' },
  { id: 't2', year: 1299, title: 'Uthman I Founds the Empire', description: 'Small principality established in Anatolia' },
  { id: 't3', year: 1453, title: 'Conquest of Constantinople', description: 'Muhammad al-Fatih conquers the Byzantine capital' },
  { id: 't4', year: 1516, title: 'Conquest of Arab Lands', description: 'Selim I conquers Syria, Egypt, and Hijaz' },
  { id: 't5', year: 1517, title: 'Khadim al-Haramayn Title', description: 'Ottoman Sultan becomes protector of Makkah and Madinah' },
];

function InteractiveTimeline() {
  const [placedEvents, setPlacedEvents] = useState<Record<string, boolean>>({});
  const [selectedEvent, setSelectedEvent] = useState<string | null>(null);

  const minYear = 1050;
  const maxYear = 1550;
  const range = maxYear - minYear;

  const getPosition = (year: number) => ((year - minYear) / range) * 100;

  const handlePlaceEvent = (eventId: string) => {
    setPlacedEvents((prev) => ({ ...prev, [eventId]: true }));
    setSelectedEvent(null);
  };

  const allPlaced = timelineEvents.every((e) => placedEvents[e.id]);

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2 mb-4">
        {timelineEvents.filter((e) => !placedEvents[e.id]).map((event) => (
          <button
            key={event.id}
            onClick={() => setSelectedEvent(selectedEvent === event.id ? null : event.id)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium border-2 transition-all cursor-pointer ${
              selectedEvent === event.id
                ? 'border-[#D4AF37] bg-amber-50 text-amber-800 shadow-md'
                : 'border-amber-200 bg-white text-amber-700 hover:border-amber-400'
            }`}
          >
            <span className="font-bold">{event.year}</span> — {event.title}
          </button>
        ))}
        {allPlaced && (
          <Badge className="bg-emerald-100 text-emerald-700 border-emerald-300">
            <CheckCircle2 className="w-3 h-3 mr-1" /> All events placed!
          </Badge>
        )}
      </div>

      <div className="relative bg-gradient-to-r from-amber-50 via-rose-50 to-amber-50 rounded-xl p-6 border-2 border-amber-200 overflow-x-auto">
        <div className="relative h-32 min-w-[500px]">
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-amber-300 via-[#D4AF37] to-amber-300 rounded-full" />

          {timelineEvents.map((event) => {
            const pos = getPosition(event.year);
            const isPlaced = placedEvents[event.id];
            const isSelected = selectedEvent === event.id;

            return (
              <div
                key={event.id}
                className="absolute cursor-pointer group"
                style={{ left: `${pos}%`, top: '50%', transform: 'translate(-50%, -50%)' }}
                onClick={() => {
                  if (isSelected) handlePlaceEvent(event.id);
                }}
              >
                <div
                  className={`w-6 h-6 rounded-full border-3 flex items-center justify-center transition-all z-10 relative ${
                    isPlaced
                      ? 'bg-[#D4AF37] border-amber-600 shadow-lg shadow-amber-200'
                      : isSelected
                      ? 'bg-amber-300 border-[#D4AF37] animate-pulse'
                      : 'bg-white border-amber-300 hover:border-[#D4AF37]'
                  }`}
                >
                  {isPlaced && <CheckCircle2 className="w-3.5 h-3.5 text-white" />}
                </div>

                {isPlaced && (
                  <div className="absolute top-8 left-1/2 -translate-x-1/2 text-center w-28 z-10">
                    <div className="text-xs font-bold text-amber-800">{event.year}</div>
                    <div className="text-[10px] text-amber-600 leading-tight mt-0.5">{event.title}</div>
                  </div>
                )}

                <div className="absolute -top-16 left-1/2 -translate-x-1/2 text-center w-32 opacity-0 group-hover:opacity-100 transition-opacity z-20 pointer-events-none">
                  <div className="bg-[#722F37] text-white text-[10px] p-2 rounded-lg shadow-xl">
                    <div className="font-bold">{event.year}: {event.title}</div>
                    <div className="text-rose-200 mt-1">{event.description}</div>
                  </div>
                </div>
              </div>
            );
          })}

          <div className="absolute top-1/2 -translate-y-1/2 left-0 text-[10px] text-amber-500 font-mono">{minYear}</div>
          <div className="absolute top-1/2 -translate-y-1/2 right-0 text-[10px] text-amber-500 font-mono">{maxYear}</div>
        </div>

        <p className="text-center text-xs text-amber-600 mt-4">
          {selectedEvent
            ? '⬆ Click the matching point on the timeline to place this event'
            : '👆 Click an event above, then click its position on the timeline'}
        </p>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════
// COMPONENT: Interactive Venn Diagram
// ═══════════════════════════════════════════════════════════════

function VennDiagram() {
  const [leftItems, setLeftItems] = useState<string[]>(['Turkoman origins', 'Anatolia-based', 'Founded 1299']);
  const [rightItems, setRightItems] = useState<string>(['Protects holy sites', 'Title: Khadim al-Haramayn', 'Conquered Arab lands']);
  const [centerItems, setCenterItems] = useState<string[]>(['Islamic empire', 'Conquered by Sultan', 'Expanded across continents']);
  const [newItem, setNewItem] = useState('');
  const [target, setTarget] = useState<'left' | 'center' | 'right'>('left');

  const addItemToDiagram = () => {
    if (!newItem.trim()) return;
    if (target === 'left') setLeftItems([...leftItems, newItem.trim()]);
    else if (target === 'center') setCenterItems([...centerItems, newItem.trim()]);
    else setRightItems([...rightItems, newItem.trim()]);
    setNewItem('');
  };

  return (
    <div className="space-y-4">
      <div className="relative flex justify-center items-center h-64">
        {/* Left circle */}
        <div className="absolute w-44 h-44 rounded-full border-3 border-amber-400 bg-amber-100/40 flex items-center justify-center" style={{ left: 'calc(50% - 100px)' }}>
          <div className="text-center space-y-1 w-24">
            <div className="text-[10px] font-bold text-amber-800 mb-1">Ottoman Origins</div>
            {leftItems.map((item, i) => (
              <div key={i} className="text-[9px] text-amber-700 bg-amber-200/50 rounded px-1 py-0.5">{item}</div>
            ))}
          </div>
        </div>
        {/* Right circle */}
        <div className="absolute w-44 h-44 rounded-full border-3 border-emerald-400 bg-emerald-100/40 flex items-center justify-center" style={{ left: 'calc(50% - 12px)' }}>
          <div className="text-center space-y-1 w-24">
            <div className="text-[10px] font-bold text-emerald-800 mb-1">Holy Sites Role</div>
            {rightItems.map((item, i) => (
              <div key={i} className="text-[9px] text-emerald-700 bg-emerald-200/50 rounded px-1 py-0.5">{item}</div>
            ))}
          </div>
        </div>
        {/* Center overlap */}
        <div className="absolute z-10 bg-white/60 rounded-full w-16 h-16 flex items-center justify-center" style={{ left: 'calc(50% - 32px)' }}>
          <div className="text-center space-y-0.5 w-14">
            <div className="text-[8px] font-bold text-rose-800">Both</div>
            {centerItems.slice(0, 2).map((item, i) => (
              <div key={i} className="text-[8px] text-rose-700 leading-tight">{item}</div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex gap-2 items-center">
        <Input
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder="Add a comparison point..."
          className="text-xs flex-1"
          onKeyDown={(e) => e.key === 'Enter' && addItemToDiagram()}
        />
        <select
          value={target}
          onChange={(e) => setTarget(e.target.value as 'left' | 'center' | 'right')}
          className="text-xs border rounded px-2 py-1.5 bg-white"
        >
          <option value="left">Origins</option>
          <option value="center">Both</option>
          <option value="right">Holy Sites</option>
        </select>
        <Button size="sm" onClick={addItemToDiagram} className="text-xs bg-[#D4AF37] hover:bg-amber-600 text-white">
          Add
        </Button>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════
// COMPONENT: SVG Map
// ═══════════════════════════════════════════════════════════════

function OttomanMap() {
  const [hoveredRegion, setHoveredRegion] = useState<string | null>(null);

  const regions = [
    { id: 'anatolia', name: 'Anatolia (Turkey)', color: '#D4AF37', desc: 'Heart of the Ottoman Empire' },
    { id: 'istanbul', name: 'Istanbul (Constantinople)', color: '#722F37', desc: 'Conquered in 1453 by Muhammad al-Fatih' },
    { id: 'arabia', name: 'Arabian Peninsula & Hijaz', color: '#047857', desc: 'Makkah & Madinah — protected after 1517' },
    { id: 'egypt', name: 'Egypt & North Africa', color: '#D97706', desc: 'Conquered by Selim I in 1516-1517' },
    { id: 'balkans', name: 'Balkans & SE Europe', color: '#7C3AED', desc: 'Expanded into Europe from 1354' },
  ];

  return (
    <div className="space-y-3">
      <div className="relative bg-gradient-to-b from-amber-50 to-rose-50 rounded-xl border-2 border-amber-200 p-4 overflow-hidden">
        <ArabicPattern opacity={0.03} color="#722F37" />
        <svg viewBox="0 0 500 300" className="w-full h-auto relative z-10">
          {/* Simplified map regions */}
          {/* Balkans */}
          <path
            d="M180,40 L260,30 L280,60 L270,100 L220,110 L170,90 Z"
            fill={hoveredRegion === 'balkans' ? '#A78BFA' : '#C4B5FD'}
            stroke="#7C3AED"
            strokeWidth="1.5"
            className="cursor-pointer transition-all"
            onMouseEnter={() => setHoveredRegion('balkans')}
            onMouseLeave={() => setHoveredRegion(null)}
          />
          {/* Anatolia */}
          <path
            d="M220,110 L310,90 L350,120 L340,170 L280,180 L220,160 Z"
            fill={hoveredRegion === 'anatolia' ? '#D4AF37' : '#E8D48B'}
            stroke="#B8941F"
            strokeWidth="1.5"
            className="cursor-pointer transition-all"
            onMouseEnter={() => setHoveredRegion('anatolia')}
            onMouseLeave={() => setHoveredRegion(null)}
          />
          {/* Istanbul */}
          <circle
            cx="265"
            cy="75"
            r="12"
            fill={hoveredRegion === 'istanbul' ? '#9B2335' : '#722F37'}
            stroke="#5A1A23"
            strokeWidth="1.5"
            className="cursor-pointer transition-all"
            onMouseEnter={() => setHoveredRegion('istanbul')}
            onMouseLeave={() => setHoveredRegion(null)}
          />
          <text x="265" y="79" textAnchor="middle" fill="white" fontSize="7" fontWeight="bold">★</text>
          {/* Arabia */}
          <path
            d="M220,180 L340,175 L370,220 L350,270 L280,280 L210,260 L190,220 Z"
            fill={hoveredRegion === 'arabia' ? '#047857' : '#6EE7B7'}
            stroke="#047857"
            strokeWidth="1.5"
            className="cursor-pointer transition-all"
            onMouseEnter={() => setHoveredRegion('arabia')}
            onMouseLeave={() => setHoveredRegion(null)}
          />
          {/* Makkah marker */}
          <circle cx="280" cy="250" r="6" fill="#D4AF37" stroke="#B8941F" strokeWidth="1" />
          <text x="280" y="253" textAnchor="middle" fill="#722F37" fontSize="5" fontWeight="bold">🕋</text>
          {/* Egypt */}
          <path
            d="M190,180 L220,180 L210,260 L190,260 L160,220 Z"
            fill={hoveredRegion === 'egypt' ? '#D97706' : '#FCD34D'}
            stroke="#D97706"
            strokeWidth="1.5"
            className="cursor-pointer transition-all"
            onMouseEnter={() => setHoveredRegion('egypt')}
            onMouseLeave={() => setHoveredRegion(null)}
          />
          {/* Cairo marker */}
          <circle cx="195" cy="210" r="5" fill="#722F37" stroke="#5A1A23" strokeWidth="1" />
          {/* Labels */}
          <text x="265" y="60" textAnchor="middle" fill="#5A1A23" fontSize="8" fontWeight="bold">Istanbul</text>
          <text x="290" y="145" textAnchor="middle" fill="#6B4C11" fontSize="9" fontWeight="bold">Anatolia</text>
          <text x="230" y="95" textAnchor="middle" fill="#5B21B6" fontSize="8" fontWeight="bold">Balkans</text>
          <text x="290" y="240" textAnchor="middle" fill="#064E3B" fontSize="8" fontWeight="bold">Arabia</text>
          <text x="180" y="215" textAnchor="middle" fill="#92400E" fontSize="8" fontWeight="bold" transform="rotate(-20, 180, 215)">Egypt</text>
          {/* Sea labels */}
          <text x="150" y="140" fill="#94A3B8" fontSize="7" fontStyle="italic">Mediter.</text>
          <text x="350" y="160" fill="#94A3B8" fontSize="7" fontStyle="italic">Arabian Sea</text>
        </svg>
      </div>

      {hoveredRegion && (
        <div className="bg-white rounded-lg border border-amber-200 p-3 shadow-md animate-in fade-in duration-200">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: regions.find((r) => r.id === hoveredRegion)?.color }} />
            <span className="font-bold text-sm text-gray-800">{regions.find((r) => r.id === hoveredRegion)?.name}</span>
          </div>
          <p className="text-xs text-gray-600 mt-1">{regions.find((r) => r.id === hoveredRegion)?.desc}</p>
        </div>
      )}
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════
// COMPONENT: Quiz Engine
// ═══════════════════════════════════════════════════════════════

function QuizEngine({ questions, onComplete }: { questions: QuizQuestion[]; onComplete?: (score: number) => void }) {
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number | string>>({});
  const [showResult, setShowResult] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const [quizComplete, setQuizComplete] = useState(false);

  const question = questions[currentQ];
  const isAnswered = answers[question.id] !== undefined;
  const isCorrect = isAnswered && answers[question.id] === question.correctAnswer;

  const handleAnswer = (answer: number | string) => {
    if (isAnswered) return;
    setAnswers((prev) => ({ ...prev, [question.id]: answer }));
    setShowExplanation(true);
  };

  const nextQuestion = () => {
    if (currentQ < questions.length - 1) {
      setCurrentQ(currentQ + 1);
      setShowExplanation(false);
    } else {
      const score = questions.reduce((acc, q) => acc + (answers[q.id] === q.correctAnswer ? 1 : 0), 0);
      setQuizComplete(true);
      onComplete?.(score);
    }
  };

  const score = questions.reduce((acc, q) => acc + (answers[q.id] === q.correctAnswer ? 1 : 0), 0);

  if (quizComplete) {
    const percentage = Math.round((score / questions.length) * 100);
    return (
      <div className="text-center space-y-4 py-6">
        <div className={`inline-flex items-center justify-center w-24 h-24 rounded-full border-4 ${
          percentage >= 75 ? 'border-emerald-400 bg-emerald-50' : percentage >= 50 ? 'border-amber-400 bg-amber-50' : 'border-rose-400 bg-rose-50'
        }`}>
          <div>
            <div className={`text-3xl font-bold ${
              percentage >= 75 ? 'text-emerald-600' : percentage >= 50 ? 'text-amber-600' : 'text-rose-600'
            }`}>
              {score}/{questions.length}
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-800">
            {percentage >= 75 ? '🌟 Excellent Work!' : percentage >= 50 ? '📚 Good Effort!' : '💪 Keep Learning!'}
          </h3>
          <p className="text-gray-600 text-sm mt-1">You scored {percentage}% on this quiz</p>
        </div>
        <div className="space-y-2">
          {questions.map((q, i) => (
            <div key={q.id} className={`flex items-center gap-2 text-sm px-4 py-2 rounded-lg ${
              answers[q.id] === q.correctAnswer ? 'bg-emerald-50 text-emerald-700' : 'bg-rose-50 text-rose-700'
            }`}>
              {answers[q.id] === q.correctAnswer ? <CheckCircle2 className="w-4 h-4" /> : <XCircle className="w-4 h-4" />}
              <span className="text-left">{q.question}</span>
            </div>
          ))}
        </div>
        <Button onClick={() => { setQuizComplete(false); setCurrentQ(0); setAnswers({}); setShowExplanation(false); }} className="bg-[#722F37] hover:bg-[#5A1A23] text-white">
          Try Again
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs font-medium text-gray-500">Question {currentQ + 1} of {questions.length}</span>
        <div className="flex gap-1">
          {questions.map((_, i) => (
            <div key={i} className={`w-2 h-2 rounded-full ${
              i < currentQ ? 'bg-[#D4AF37]' : i === currentQ ? 'bg-[#722F37]' : 'bg-gray-200'
            }`} />
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
            } else if (isSelected) {
              optionClass = 'border-[#D4AF37] bg-amber-50';
            }

            return (
              <button
                key={idx}
                onClick={() => handleAnswer(idx)}
                disabled={isAnswered}
                className={`w-full text-left px-4 py-2.5 rounded-lg border-2 text-sm transition-all ${optionClass}`}
              >
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
        <div className={`p-3 rounded-lg border text-xs ${
          isCorrect ? 'bg-emerald-50 border-emerald-200 text-emerald-800' : 'bg-amber-50 border-amber-200 text-amber-800'
        }`}>
          <div className="flex items-start gap-2">
            {isCorrect ? <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0" /> : <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />}
            <div>
              <span className="font-bold">{isCorrect ? 'Correct!' : 'Not quite!'}</span>
              <p className="mt-0.5">{question.explanation}</p>
            </div>
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

// ═══════════════════════════════════════════════════════════════
// COMPONENT: Activity Timer
// ═══════════════════════════════════════════════════════════════

function ActivityTimer({ duration, onComplete }: { duration: number; onComplete?: () => void }) {
  const [timeLeft, setTimeLeft] = useState(duration * 60);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (isRunning && timeLeft > 0) {
      intervalRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            setIsRunning(false);
            onComplete?.();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isRunning, timeLeft, onComplete]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const progress = ((duration * 60 - timeLeft) / (duration * 60)) * 100;
  const isComplete = timeLeft === 0;

  return (
    <div className="flex items-center gap-3">
      <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono font-bold ${
        isComplete ? 'bg-emerald-100 text-emerald-700' : timeLeft < 60 ? 'bg-rose-100 text-rose-700' : 'bg-amber-100 text-amber-700'
      }`}>
        <Timer className="w-3 h-3" />
        {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
      </div>
      <Progress value={progress} className="flex-1 h-2" />
      {!isComplete && (
        <Button
          size="sm"
          variant={isRunning ? 'outline' : 'default'}
          onClick={() => setIsRunning(!isRunning)}
          className={`text-xs h-7 ${!isRunning ? 'bg-[#D4AF37] hover:bg-amber-600 text-white' : ''}`}
        >
          {isRunning ? 'Pause' : 'Start'}
        </Button>
      )}
      {isComplete && (
        <Badge className="bg-emerald-100 text-emerald-700 border-emerald-300 text-xs">
          <CheckCircle2 className="w-3 h-3 mr-1" /> Done
        </Badge>
      )}
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════
// MAIN APPLICATION COMPONENT
// ═══════════════════════════════════════════════════════════════

export default function Home() {
  const [view, setView] = useState<ViewType>('landing');
  const [selectedGrade, setSelectedGrade] = useState<Grade | null>(null);
  const [selectedTerm, setSelectedTerm] = useState<Term | null>(null);
  const [selectedUnit, setSelectedUnit] = useState<Unit | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideDirection, setSlideDirection] = useState<'left' | 'right'>('right');
  const [isAnimating, setIsAnimating] = useState(false);
  const [loginCode, setLoginCode] = useState('');
  const [loginError, setLoginError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [studentName, setStudentName] = useState('');
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);

  // Scroll indicator effect
  useEffect(() => {
    const handleScroll = () => setShowScrollIndicator(window.scrollY < 100);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateTo = (newView: ViewType) => {
    setView(newView);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateSlide = (direction: 'left' | 'right') => {
    setSlideDirection(direction);
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 400);
  };

  // ───────────────────────────────────────────────────────────
  // LANDING PAGE
  // ───────────────────────────────────────────────────────────

  const renderLanding = () => (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#722F37] via-[#5A1A23] to-[#3D0F15]" />
        {/* Real painting background */}
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'url(/hero-pattern.png)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <ArabicPattern opacity={0.08} color="#D4AF37" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-black/30" />

        {/* Floating decorative elements */}
        <div className="absolute top-20 left-10 w-24 h-24 border border-[#D4AF37]/20 rounded-full animate-pulse" />
        <div className="absolute top-40 right-20 w-16 h-16 border border-[#D4AF37]/15 rotate-45 animate-bounce" style={{ animationDuration: '3s' }} />
        <div className="absolute bottom-40 left-20 w-20 h-20 border border-[#D4AF37]/20 rounded-full animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-20 right-10 w-12 h-12 border border-[#D4AF37]/15 rotate-45 animate-bounce" style={{ animationDuration: '2.5s' }} />

        {/* Main content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          {/* Decorative top ornament */}
          <div className="flex justify-center mb-6">
            <div className="flex items-center gap-2">
              <div className="w-12 h-px bg-gradient-to-r from-transparent to-[#D4AF37]" />
              <div className="w-3 h-3 rotate-45 border border-[#D4AF37]" />
              <div className="w-2 h-2 rounded-full bg-[#D4AF37]" />
              <div className="w-3 h-3 rotate-45 border border-[#D4AF37]" />
              <div className="w-12 h-px bg-gradient-to-l from-transparent to-[#D4AF37]" />
            </div>
          </div>

          {/* Title */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-2 tracking-tight">
            <span style={{ color: '#D4AF37' }}>MSCS</span> Academy
          </h1>

          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#D4AF37]/60" />
            <Scroll className="w-5 h-5 text-[#D4AF37]/60" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#D4AF37]/60" />
          </div>

          <p className="text-lg sm:text-xl md:text-2xl text-amber-100/90 mb-4 font-light">
            Moral, Social & Cultural Studies
          </p>
          <p className="text-sm sm:text-base text-amber-200/70 mb-8 italic">
            — Interactive Learning Platform —
          </p>

          {/* Mr. Ahmed Ali prominence */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-[#D4AF37]/30 rounded-full px-6 py-3 mb-8">
            <GraduationCap className="w-5 h-5 text-[#D4AF37]" />
            <a
              href="https://mr-ahmed-ali.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-bold text-[#D4AF37] hover:text-amber-300 transition-colors"
            >
              Mr. Ahmed Ali
            </a>
            <ExternalLink className="w-3 h-3 text-[#D4AF37]/60" />
          </div>

          {/* Tagline */}
          <p className="text-base sm:text-lg text-white/80 mb-12 font-medium">
            ✨ Making Learning <span className="text-[#D4AF37] font-bold">Active</span>, Not Passive ✨
          </p>

          {/* Decorative bottom ornament */}
          <div className="flex justify-center mb-12">
            <div className="flex items-center gap-1">
              <div className="w-8 h-px bg-[#D4AF37]/40" />
              <div className="w-1.5 h-1.5 rotate-45 bg-[#D4AF37]/40" />
              <div className="w-8 h-px bg-[#D4AF37]/40" />
            </div>
          </div>

          {/* Grade Selection */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {gradesData.map((grade) => (
              <button
                key={grade.id}
                onClick={() => {
                  setSelectedGrade(grade);
                  navigateTo('gradeSelect');
                }}
                className="group relative overflow-hidden rounded-xl border-2 border-[#D4AF37]/30 bg-white/10 backdrop-blur-sm p-5 text-center transition-all duration-300 hover:border-[#D4AF37] hover:bg-white/20 hover:scale-105 hover:shadow-xl hover:shadow-[#D4AF37]/10"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10">
                  <div className="text-[#D4AF37] mb-2 flex justify-center group-hover:scale-110 transition-transform">
                    {grade.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1">{grade.title}</h3>
                  <p className="text-xs text-amber-200/70">{grade.tagline}</p>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        {showScrollIndicator && (
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
            <span className="text-xs text-amber-200/60">Explore</span>
            <ChevronDown className="w-5 h-5 text-[#D4AF37]/60" />
          </div>
        )}
      </section>

      {/* Features Section */}
      <section className="relative bg-[#FFF9F0] py-16 px-4">
        <ArabicPattern opacity={0.03} color="#722F37" />
        <div className="relative z-10 max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#722F37] mb-3">Why MSCS Academy?</h2>
          <DecorativeBorder color="#D4AF37" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {[
              { icon: <Brain className="w-8 h-8" />, title: 'Interactive Learning', desc: 'Quizzes, timelines, maps, and drag-and-drop activities that make learning unforgettable', color: 'text-amber-600', bg: 'bg-amber-50', border: 'border-amber-200' },
              { icon: <Target className="w-8 h-8" />, title: 'Standards-Aligned', desc: 'Every lesson follows UAE curriculum standards with clear objectives and success criteria', color: 'text-emerald-600', bg: 'bg-emerald-50', border: 'border-emerald-200' },
              { icon: <MapPin className="w-8 h-8" />, title: 'UAE & Real-World Links', desc: 'Every lesson connects to UAE culture, values, and real-life applications', color: 'text-rose-600', bg: 'bg-rose-50', border: 'border-rose-200' },
              { icon: <Timer className="w-8 h-8" />, title: 'Built-in Timers', desc: 'Structured activities with countdown timers keep lessons on pace', color: 'text-teal-600', bg: 'bg-teal-50', border: 'border-teal-200' },
              { icon: <Award className="w-8 h-8" />, title: 'Instant Feedback', desc: 'Quizzes with immediate scoring and explanations help students learn from mistakes', color: 'text-orange-600', bg: 'bg-orange-50', border: 'border-orange-200' },
              { icon: <Users className="w-8 h-8" />, title: 'Student-Centered', desc: 'KWL charts, Venn diagrams, and collaborative activities put students first', color: 'text-purple-600', bg: 'bg-purple-50', border: 'border-purple-200' },
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

      {/* About Preview */}
      <section className="relative bg-gradient-to-br from-[#722F37] to-[#5A1A23] py-16 px-4">
        <ArabicPattern opacity={0.06} color="#D4AF37" />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-3">Meet Your Instructor</h2>
          <DecorativeBorder color="#D4AF37" />
          <div className="mt-8 bg-white/10 backdrop-blur-sm rounded-xl border border-[#D4AF37]/20 p-8">
            <div className="w-20 h-20 rounded-full bg-[#D4AF37]/20 border-2 border-[#D4AF37] flex items-center justify-center mx-auto mb-4">
              <GraduationCap className="w-10 h-10 text-[#D4AF37]" />
            </div>
            <a
              href="https://mr-ahmed-ali.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl font-bold text-[#D4AF37] hover:text-amber-300 transition-colors inline-flex items-center gap-2"
            >
              Mr. Ahmed Ali
              <ExternalLink className="w-5 h-5" />
            </a>
            <p className="text-amber-100/80 mt-3 text-sm leading-relaxed">
              Dedicated educator specializing in Moral, Social, and Cultural Studies for UAE students.
              Creating engaging, standards-aligned lessons that bring history and culture to life.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Badge className="bg-[#D4AF37]/20 text-[#D4AF37] border-[#D4AF37]/30">MSCS Specialist</Badge>
              <Badge className="bg-[#D4AF37]/20 text-[#D4AF37] border-[#D4AF37]/30">UAE Curriculum</Badge>
              <Badge className="bg-[#D4AF37]/20 text-[#D4AF37] border-[#D4AF37]/30">Interactive Learning</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a0a0c] text-white/60 py-8 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm">
            <a href="https://mr-ahmed-ali.vercel.app" target="_blank" rel="noopener noreferrer" className="text-[#D4AF37] hover:text-amber-400 transition-colors font-semibold">
              Mr. Ahmed Ali
            </a>
            {' '}— MSCS Academy: Making Learning Active, Not Passive
          </p>
          <div className="flex justify-center gap-4 mt-4">
            <button onClick={() => navigateTo('aboutPage')} className="text-xs text-white/40 hover:text-[#D4AF37] transition-colors">About</button>
            <button onClick={() => navigateTo('loginPage')} className="text-xs text-white/40 hover:text-[#D4AF37] transition-colors">Student Login</button>
            <button onClick={() => navigateTo('consentPage')} className="text-xs text-white/40 hover:text-[#D4AF37] transition-colors">Parental Consent</button>
          </div>
        </div>
      </footer>
    </div>
  );

  // ───────────────────────────────────────────────────────────
  // GRADE SELECT PAGE
  // ───────────────────────────────────────────────────────────

  const renderGradeSelect = () => {
    if (!selectedGrade) return null;
    const grade = selectedGrade;

    const colorMap: Record<number, { gradient: string; accent: string; text: string }> = {
      6: { gradient: 'from-amber-600 to-amber-800', accent: '#D97706', text: 'text-amber-700' },
      7: { gradient: 'from-emerald-600 to-emerald-800', accent: '#047857', text: 'text-emerald-700' },
      8: { gradient: 'from-rose-700 to-[#722F37]', accent: '#722F37', text: 'text-rose-700' },
      9: { gradient: 'from-teal-600 to-teal-800', accent: '#0D9488', text: 'text-teal-700' },
    };
    const colors = colorMap[grade.id];

    return (
      <div className="min-h-screen bg-[#FFF9F0]">
        {/* Header */}
        <div className={`relative bg-gradient-to-r ${colors.gradient} py-12 px-4`}>
          <ArabicPattern opacity={0.08} color="#D4AF37" />
          <div className="relative z-10 max-w-4xl mx-auto">
            <Button
              variant="ghost"
              onClick={() => navigateTo('landing')}
              className="text-white/80 hover:text-white hover:bg-white/10 mb-4"
            >
              <ChevronLeft className="w-4 h-4 mr-1" /> Back to Home
            </Button>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-white/10 border-2 border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37]">
                {grade.icon}
              </div>
              <div>
                <h1 className="text-3xl sm:text-4xl font-bold text-white">{grade.title}</h1>
                <p className="text-white/80">{grade.tagline}</p>
              </div>
            </div>
            <div className="mt-4 flex items-center gap-2">
              <AhmedAliLink size="md" />
            </div>
          </div>
        </div>

        {/* Terms */}
        <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
          {grade.terms.map((term) => (
            <div key={term.id}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#722F37] to-[#5A1A23] flex items-center justify-center text-white font-bold text-sm">
                  T{term.number}
                </div>
                <h2 className="text-xl font-bold text-gray-800">{term.title}</h2>
                <div className="flex-1 h-px bg-gray-200" />
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {term.units.map((unit) => (
                  <Card
                    key={unit.id}
                    className={`border-2 hover:shadow-lg transition-all cursor-pointer group ${
                      unit.priority ? 'border-[#D4AF37] bg-amber-50/50' : 'border-gray-200 bg-white hover:border-amber-300'
                    }`}
                    onClick={() => {
                      setSelectedTerm(term);
                      setSelectedUnit(unit);
                      // Only Grade 8 Term 3 Unit 1 has the interactive lesson
                      if (unit.id === 'g8u7') {
                        setCurrentSlide(0);
                        navigateTo('lessonView');
                      } else {
                        navigateTo('unitSelect');
                      }
                    }}
                  >
                    <CardHeader className="pb-2">
                      <div className="flex items-start justify-between">
                        <CardTitle className="text-sm font-bold text-gray-800 leading-tight group-hover:text-[#722F37] transition-colors">
                          {unit.title}
                        </CardTitle>
                        {unit.priority && (
                          <Badge className="bg-[#D4AF37] text-white border-0 shrink-0 ml-2">
                            <Star className="w-3 h-3 mr-1" /> Priority
                          </Badge>
                        )}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-xs text-gray-500 mb-2">{unit.description}</p>
                      <div className="flex items-center gap-3 text-xs text-gray-400">
                        <span className="flex items-center gap-1"><BookOpen className="w-3 h-3" /> {unit.lessons} lessons</span>
                        {unit.id === 'g8u7' && (
                          <Badge className="bg-emerald-100 text-emerald-700 border-emerald-200 text-[10px]">
                            <Play className="w-2.5 h-2.5 mr-0.5" /> Interactive Demo
                          </Badge>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  // ───────────────────────────────────────────────────────────
  // UNIT SELECT PAGE (for units without interactive lesson)
  // ───────────────────────────────────────────────────────────

  const renderUnitSelect = () => {
    if (!selectedGrade || !selectedUnit) return null;

    return (
      <div className="min-h-screen bg-[#FFF9F0]">
        <div className="relative bg-gradient-to-r from-rose-700 to-[#722F37] py-8 px-4">
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

        <div className="max-w-4xl mx-auto px-4 py-12 text-center">
          <div className="bg-white rounded-2xl border-2 border-amber-200 p-12 shadow-sm">
            <div className="w-20 h-20 rounded-full bg-amber-50 border-2 border-[#D4AF37] flex items-center justify-center mx-auto mb-6">
              <BookOpen className="w-10 h-10 text-[#D4AF37]" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">Coming Soon!</h2>
            <p className="text-gray-600 max-w-md mx-auto">
              The interactive lesson for <strong>{selectedUnit.title}</strong> is being prepared.
              Check back soon for the full interactive experience!
            </p>
            <p className="text-xs text-gray-400 mt-4">This unit has {selectedUnit.lessons} lessons planned</p>

            {selectedGrade.id === 8 && (
              <Button
                onClick={() => {
                  const ottomanUnit = gradesData[2].terms[2].units[0];
                  setSelectedGrade(gradesData[2]);
                  setSelectedTerm(gradesData[2].terms[2]);
                  setSelectedUnit(ottomanUnit);
                  setCurrentSlide(0);
                  navigateTo('lessonView');
                }}
                className="mt-6 bg-[#722F37] hover:bg-[#5A1A23] text-white"
              >
                <Play className="w-4 h-4 mr-2" /> Try the Ottoman Empire Demo Lesson
              </Button>
            )}
          </div>
        </div>
      </div>
    );
  };

  // ───────────────────────────────────────────────────────────
  // LESSON VIEWER — Ottoman Empire
  // ───────────────────────────────────────────────────────────

  const renderLessonViewer = () => {
    const totalSlides = 8;

    const slides: LessonSlide[] = [
      // SLIDE 1: Title & Introduction
      {
        id: 1,
        type: 'title',
        title: 'The Rise and Expansion (1299–1517)',
        content: (
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-[#722F37] to-[#5A1A23] rounded-xl p-6 text-white relative overflow-hidden">
              <ArabicPattern opacity={0.06} color="#D4AF37" />
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-4">
                  <Landmark className="w-8 h-8 text-[#D4AF37]" />
                  <h2 className="text-2xl sm:text-3xl font-bold">The Rise and Expansion</h2>
                </div>
                <p className="text-amber-100 text-sm">The Ottoman Empire: 1299–1517</p>
                <DecorativeBorder color="#D4AF37" />
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
                    {['C2-G8-S1.3', 'C2-G8-S1.6', 'C2-G8-S2.1', 'C2-G8-S3.1', 'C2-G8-S3.3'].map((s) => (
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
                    <li>1. Trace origins from Central Asian Turkoman tribes to Uthman I (1299)</li>
                    <li>2. Explain significance of Battle of Manzikert (1071)</li>
                    <li>3. Describe conquest of Constantinople (1453) by Muhammad al-Fatih</li>
                    <li>4. Identify Sultan Selim I&apos;s conquests of Arab lands (1516–1517)</li>
                    <li>5. Create a historical timeline of key events</li>
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
                  {[
                    'I can create a timeline of 5+ key events',
                    'I can explain who founded the empire and when',
                    'I can distinguish Battle of Manzikert from Ottoman conquests',
                    'I can describe why Constantinople conquest was significant including the hadith',
                    'I can identify 3+ regions on a map',
                  ].map((c, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-rose-700">
                      <CheckCircle2 className="w-3 h-3 mt-0.5 shrink-0" />
                      <span>{c}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        ),
      },

      // SLIDE 2: Prior Learning / KWL
      {
        id: 2,
        type: 'prior-learning',
        title: 'Prior Learning',
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
                <CardTitle className="text-sm font-bold text-gray-800">Quick Questions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="bg-amber-50 rounded-lg p-4 border border-amber-200">
                  <p className="text-sm text-amber-800 font-medium">🤔 Have you heard of Istanbul?</p>
                  <p className="text-xs text-amber-600 mt-1">What do you know about this city and its history?</p>
                </div>
                <div className="bg-rose-50 rounded-lg p-4 border border-rose-200">
                  <p className="text-sm text-rose-800 font-medium">🏰 Do you know what empire ruled the Middle East for 600 years?</p>
                  <p className="text-xs text-rose-600 mt-1">Think about the region&apos;s history before modern nations existed</p>
                </div>
              </CardContent>
            </Card>

            <div>
              <h4 className="text-sm font-bold text-gray-700 mb-3 flex items-center gap-2">
                <Lightbulb className="w-4 h-4 text-[#D4AF37]" /> KWL Chart
              </h4>
              <KWLChart />
            </div>
          </div>
        ),
      },

      // SLIDE 3: Warm-Up / Hook
      {
        id: 3,
        type: 'warmup',
        title: 'Warm-Up Activity',
        content: (
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-[#722F37] via-[#5A1A23] to-[#3D0F15] rounded-xl p-8 text-center relative overflow-hidden">
              <ArabicPattern opacity={0.08} color="#D4AF37" />
              <div className="relative z-10">
                <div className="flex justify-center mb-4">
                  <div className="w-14 h-14 rounded-full bg-[#D4AF37]/20 border-2 border-[#D4AF37] flex items-center justify-center">
                    <Scroll className="w-7 h-7 text-[#D4AF37]" />
                  </div>
                </div>
                <blockquote className="text-lg sm:text-xl font-semibold text-[#D4AF37] italic leading-relaxed">
                  &ldquo;You shall conquer Constantinople. Blessed is its commander and blessed is its army.&rdquo;
                </blockquote>
                <div className="mt-4 text-amber-200/80 text-sm">
                  — Prophet Muhammad ﷺ (peace be upon him)
                </div>
                <DecorativeBorder color="#D4AF37" />
              </div>
            </div>

            <Card className="border-2 border-[#D4AF37] bg-amber-50/30">
              <CardContent className="p-6 text-center">
                <div className="flex items-center justify-center gap-2 mb-3">
                  <Sparkles className="w-5 h-5 text-[#D4AF37]" />
                  <h3 className="text-lg font-bold text-gray-800">Discussion Question</h3>
                </div>
                <p className="text-gray-700 text-sm max-w-lg mx-auto">
                  This prophecy was made over 800 years before it was fulfilled.
                  <strong className="text-[#722F37]"> What makes this prophecy so remarkable?</strong>
                </p>
                <p className="text-xs text-gray-500 mt-3">Take 2 minutes to think and share your thoughts</p>
              </CardContent>
            </Card>
          </div>
        ),
      },

      // SLIDE 4: Core Activities
      {
        id: 4,
        type: 'activities',
        title: 'Core Activities',
        content: (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-amber-600 to-orange-600 rounded-xl p-5 text-white">
              <div className="flex items-center gap-2 mb-2">
                <Swords className="w-6 h-6 text-amber-200" />
                <h3 className="text-xl font-bold">Core Activities</h3>
              </div>
              <p className="text-amber-100 text-sm">Work through each activity — use the timers to stay on track!</p>
            </div>

            {ottomanActivities.map((activity, idx) => (
              <Card key={activity.id} className={`border-2 overflow-hidden ${
                idx % 2 === 0 ? 'border-amber-200' : 'border-rose-200'
              }`}>
                <div className={`px-4 py-3 ${
                  idx % 2 === 0 ? 'bg-amber-50' : 'bg-rose-50'
                }`}>
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <div className="flex items-center gap-2">
                      <Badge className={`${
                        activity.type === 'interactive' ? 'bg-[#D4AF37] text-white' :
                        activity.type === 'read' ? 'bg-amber-200 text-amber-800' :
                        'bg-rose-200 text-rose-800'
                      }`}>
                        {activity.type === 'interactive' ? <Sparkles className="w-3 h-3 mr-1" /> :
                         activity.type === 'read' ? <BookOpen className="w-3 h-3 mr-1" /> :
                         <Users className="w-3 h-3 mr-1" />}
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
                {activity.type === 'interactive' && (
                  <CardContent className="pt-0 pb-4">
                    <InteractiveTimeline />
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        ),
      },

      // SLIDE 5: UAE / Real-Life Links
      {
        id: 5,
        type: 'links',
        title: 'UAE & Real-Life Connections',
        content: (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl p-5 text-white">
              <div className="flex items-center gap-2 mb-2">
                <Globe className="w-6 h-6 text-emerald-200" />
                <h3 className="text-xl font-bold">UAE & Real-Life Connections</h3>
              </div>
              <p className="text-emerald-100 text-sm">How does the Ottoman Empire connect to our lives today?</p>
            </div>

            <div className="space-y-4">
              <Card className="border-2 border-emerald-200 bg-emerald-50/30">
                <CardContent className="p-5">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-emerald-100 border border-emerald-300 flex items-center justify-center shrink-0">
                      <Mountain className="w-5 h-5 text-emerald-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-emerald-800 text-sm">The Ottoman Empire & the Arabian Peninsula</h4>
                      <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                        The Ottoman Empire maintained a significant relationship with the Arabian Peninsula, particularly the Hijaz region.
                        The empire provided protection for pilgrims traveling to Makkah and Madinah — a role that resonates deeply with
                        the UAE&apos;s commitment to serving the Two Holy Mosques.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-[#D4AF37] bg-amber-50/30">
                <CardContent className="p-5">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-amber-100 border border-amber-300 flex items-center justify-center shrink-0">
                      <Star className="w-5 h-5 text-[#D4AF37]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-amber-800 text-sm">
                        Khadim al-Haramayn al-Sharifayn
                      </h4>
                      <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                        This title — &ldquo;Servant of the Two Noble Sanctuaries&rdquo; — was first used by Ottoman Sultans after
                        Selim I conquered the Hijaz in 1517. Today, the UAE continues this spirit of reverence and service
                        to Makkah and Madinah, reflecting the same values of respect and devotion to Islam&apos;s holiest sites.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-rose-200 bg-rose-50/30">
                <CardContent className="p-5">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-rose-100 border border-rose-300 flex items-center justify-center shrink-0">
                      <Globe className="w-5 h-5 text-rose-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-rose-800 text-sm">Modern Turkey-UAE Diplomatic Relations</h4>
                      <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                        Today, the UAE and Turkey maintain active diplomatic and economic relations. Understanding
                        the historical connections helps us appreciate the deep cultural and religious bonds that
                        continue to shape regional cooperation.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <h4 className="text-sm font-bold text-gray-700 mb-3 flex items-center gap-2">
                <Map className="w-4 h-4 text-emerald-600" /> Interactive Map
              </h4>
              <OttomanMap />
            </div>

            <div>
              <h4 className="text-sm font-bold text-gray-700 mb-3 flex items-center gap-2">
                <Brain className="w-4 h-4 text-rose-600" /> Comparison: Ottoman Origins vs. Holy Sites Role
              </h4>
              <VennDiagram />
            </div>
          </div>
        ),
      },

      // SLIDE 6: Homework
      {
        id: 6,
        type: 'homework',
        title: 'Homework & Extended Learning',
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
                    <h4 className="font-bold text-amber-800">Research Task: Digital Timeline</h4>
                    <p className="text-sm text-gray-600 mt-1">
                      Create a digital timeline of <strong>5+ key Ottoman events</strong> using any tool (Canva, Google Slides, Timeline JS, etc.)
                    </p>
                    <div className="mt-3 bg-white rounded-lg p-3 border border-amber-200">
                      <p className="text-xs text-gray-500 font-medium mb-2">Suggested events to include:</p>
                      <div className="flex flex-wrap gap-1.5">
                        {['Battle of Manzikert (1071)', 'Uthman I founds empire (1299)', 'Battle of Kosovo (1389)', 'Conquest of Constantinople (1453)', 'Selim I conquers Arab lands (1516-1517)'].map((e, i) => (
                          <Badge key={i} variant="outline" className="text-[10px] border-amber-300 text-amber-700">{e}</Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-emerald-200 bg-emerald-50/30">
              <CardContent className="p-5">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 border-2 border-emerald-500 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-emerald-700" />
                  </div>
                  <div>
                    <h4 className="font-bold text-emerald-800">Map Task: Locate Key Cities</h4>
                    <p className="text-sm text-gray-600 mt-1">
                      Use Google Maps to locate and mark these historically significant cities:
                    </p>
                    <div className="mt-3 grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {[
                        { city: 'Istanbul', note: 'Former Constantinople' },
                        { city: 'Marj Dabiq', note: 'Site of 1516 battle' },
                        { city: 'Cairo', note: 'Mamluk capital' },
                        { city: 'Makkah', note: 'Holiest city in Islam' },
                        { city: 'Madinah', note: 'Second holiest city' },
                      ].map((loc, i) => (
                        <div key={i} className="bg-white rounded-lg p-2 border border-emerald-200 text-center">
                          <div className="text-xs font-bold text-emerald-800">{loc.city}</div>
                          <div className="text-[10px] text-gray-500">{loc.note}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-rose-200 bg-rose-50/30">
              <CardContent className="p-5">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-rose-100 border-2 border-rose-400 flex items-center justify-center shrink-0">
                    <Lightbulb className="w-5 h-5 text-rose-700" />
                  </div>
                  <div>
                    <h4 className="font-bold text-rose-800">Bonus Challenge</h4>
                    <p className="text-sm text-gray-600 mt-1">
                      Research the hadith about conquering Constantinople and write a short paragraph explaining
                      why its fulfillment is considered miraculous. How long was the gap between the prophecy and
                      its fulfillment?
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        ),
      },

      // SLIDE 7: Closure Quiz
      {
        id: 7,
        type: 'quiz',
        title: 'Formative Assessment',
        content: (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-rose-700 to-[#722F37] rounded-xl p-5 text-white">
              <div className="flex items-center gap-2 mb-2">
                <Trophy className="w-6 h-6 text-[#D4AF37]" />
                <h3 className="text-xl font-bold">Formative Assessment</h3>
              </div>
              <p className="text-rose-100 text-sm">Test your understanding — you&apos;ve got this! 💪</p>
            </div>

            <QuizEngine questions={ottomanQuizQuestions} />
          </div>
        ),
      },

      // SLIDE 8: Thank You
      {
        id: 8,
        type: 'thankyou',
        title: 'Thank You!',
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
              <a
                href="https://mr-ahmed-ali.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl font-bold text-[#D4AF37] hover:text-amber-600 transition-colors inline-flex items-center gap-2"
              >
                <GraduationCap className="w-6 h-6" />
                Mr. Ahmed Ali
                <ExternalLink className="w-4 h-4" />
              </a>
              <p className="text-sm text-gray-600 mt-2">Your MSCS Educator</p>
            </div>

            <Card className="border-2 border-rose-200 bg-rose-50/30 max-w-md mx-auto">
              <CardContent className="p-5">
                <h4 className="font-bold text-rose-800 flex items-center justify-center gap-2 mb-2">
                  <ArrowRight className="w-4 h-4" />
                  Coming Up Next
                </h4>
                <p className="text-sm text-gray-700">
                  <strong>Managing the Empire & Rivalry with Europe</strong>
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  Explore how the Ottomans governed their vast territories and faced European rivals
                </p>
              </CardContent>
            </Card>

            <div className="flex justify-center gap-3">
              <Button
                onClick={() => { setCurrentSlide(0); }}
                className="bg-[#722F37] hover:bg-[#5A1A23] text-white"
              >
                <Play className="w-4 h-4 mr-2" /> Restart Lesson
              </Button>
              <Button
                variant="outline"
                onClick={() => navigateTo('gradeSelect')}
                className="border-[#D4AF37] text-[#D4AF37]"
              >
                <HomeIcon className="w-4 h-4 mr-2" /> Back to Grade 8
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
                <Button variant="ghost" size="sm" onClick={() => navigateTo('gradeSelect')} className="shrink-0">
                  <HomeIcon className="w-4 h-4" />
                </Button>
                <Separator orientation="vertical" className="h-5" />
                <div className="min-w-0">
                  <h1 className="text-xs font-bold text-gray-800 truncate">Ottoman Empire: The Rise and Expansion</h1>
                  <AhmedAliLink />
                </div>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <span className="text-xs text-gray-500">{currentSlide + 1}/{totalSlides}</span>
              </div>
            </div>

            {/* Progress bar */}
            <div className="mt-2">
              <Progress value={((currentSlide + 1) / totalSlides) * 100} className="h-1.5" />
            </div>

            {/* Slide indicators */}
            <div className="flex gap-1 mt-2 overflow-x-auto pb-1">
              {slides.map((slide, i) => (
                <button
                  key={slide.id}
                  onClick={() => {
                    setSlideDirection(i > currentSlide ? 'right' : 'left');
                    setCurrentSlide(i);
                  }}
                  className={`flex items-center gap-1 px-2 py-1 rounded-md text-[10px] font-medium transition-all whitespace-nowrap ${
                    i === currentSlide
                      ? 'bg-[#722F37] text-white'
                      : i < currentSlide
                      ? 'bg-amber-100 text-amber-700'
                      : 'bg-gray-100 text-gray-400'
                  }`}
                >
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
          <div
            className="transition-all duration-300"
            style={{
              opacity: isAnimating ? 0 : 1,
              transform: isAnimating
                ? `translateX(${slideDirection === 'right' ? '30px' : '-30px'})`
                : 'translateX(0)',
            }}
          >
            <div className="mb-4">
              <Badge className="bg-[#722F37] text-white mb-2">
                Slide {currentSlide + 1} of {totalSlides}
              </Badge>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800">{currentSlideData.title}</h2>
            </div>
            {currentSlideData.content}
          </div>
        </div>

        {/* Bottom navigation */}
        <div className="sticky bottom-0 bg-white/95 backdrop-blur border-t border-amber-200 shadow-lg">
          <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
            <Button
              variant="outline"
              onClick={() => {
                if (currentSlide > 0) {
                  setSlideDirection('left');
                  navigateSlide('left');
                  setCurrentSlide(currentSlide - 1);
                }
              }}
              disabled={currentSlide === 0}
              className="border-[#722F37] text-[#722F37] hover:bg-rose-50"
            >
              <ChevronLeft className="w-4 h-4 mr-1" /> Previous
            </Button>

            <div className="flex gap-1">
              {slides.map((_, i) => (
                <div
                  key={i}
                  className={`w-2 h-2 rounded-full transition-all cursor-pointer ${
                    i === currentSlide ? 'bg-[#722F37] w-4' : i < currentSlide ? 'bg-[#D4AF37]' : 'bg-gray-300'
                  }`}
                  onClick={() => {
                    setSlideDirection(i > currentSlide ? 'right' : 'left');
                    setCurrentSlide(i);
                  }}
                />
              ))}
            </div>

            <Button
              onClick={() => {
                if (currentSlide < totalSlides - 1) {
                  setSlideDirection('right');
                  navigateSlide('right');
                  setCurrentSlide(currentSlide + 1);
                }
              }}
              disabled={currentSlide === totalSlides - 1}
              className="bg-[#722F37] hover:bg-[#5A1A23] text-white"
            >
              Next <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
        </div>
      </div>
    );
  };

  // ───────────────────────────────────────────────────────────
  // ABOUT PAGE
  // ───────────────────────────────────────────────────────────

  const renderAboutPage = () => (
    <div className="min-h-screen bg-[#FFF9F0]">
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

      <div className="max-w-3xl mx-auto px-4 py-8 space-y-6">
        <Card className="border-2 border-[#D4AF37] overflow-hidden">
          <div className="bg-gradient-to-r from-amber-50 to-rose-50 p-6">
            <div className="flex items-start gap-4">
              <div className="w-20 h-20 rounded-full bg-[#722F37] border-3 border-[#D4AF37] flex items-center justify-center shrink-0">
                <GraduationCap className="w-10 h-10 text-[#D4AF37]" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-[#722F37]">Mr. Ahmed Ali</h2>
                <p className="text-sm text-gray-600 mt-1">MSCS Educator & Curriculum Developer</p>
                <a
                  href="https://mr-ahmed-ali.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-[#D4AF37] hover:text-amber-600 mt-2 font-medium"
                >
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
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                  Specialist in Moral, Social & Cultural Studies for UAE education
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                  Experienced curriculum developer aligned with UAE Ministry of Education standards
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                  Interactive lesson design with technology integration
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                  Committed to student-centered, active learning approaches
                </li>
              </ul>
            </div>

            <Separator />

            <div>
              <h3 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
                <Info className="w-4 h-4 text-[#D4AF37]" /> Platform Information
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                MSCS Academy is an interactive learning platform designed for UAE students in Grades 6-9
                studying Moral, Social, and Cultural Studies. The platform provides engaging, standards-aligned
                lessons with interactive components including quizzes, timelines, maps, and collaborative activities.
              </p>
            </div>

            <div className="bg-amber-50 rounded-lg p-4 border border-amber-200">
              <h3 className="font-bold text-amber-800 text-sm mb-2 flex items-center gap-2">
                <AlertCircle className="w-4 h-4" /> Disclaimer
              </h3>
              <p className="text-xs text-amber-700 leading-relaxed">
                This platform is developed independently by Mr. Ahmed Ali as an educational resource.
                All content is aligned with UAE curriculum standards but is not officially endorsed by
                any educational authority. The platform is designed for educational purposes only.
                Student data is not collected or stored. All interactive elements work locally in the browser.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  // ───────────────────────────────────────────────────────────
  // LOGIN PAGE
  // ───────────────────────────────────────────────────────────

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
                <Input
                  value={loginCode}
                  onChange={(e) => {
                    setLoginCode(e.target.value.toUpperCase());
                    setLoginError('');
                  }}
                  placeholder="MSCS-7A-2026-014"
                  className="text-center font-mono text-lg tracking-wider"
                />
                <p className="text-xs text-gray-400 mt-1">Format: MSCS-Grade-Section-Year-Number</p>
              </div>

              {loginError && (
                <div className="bg-rose-50 border border-rose-200 rounded-lg p-3 text-sm text-rose-700 flex items-center gap-2">
                  <XCircle className="w-4 h-4 shrink-0" />
                  {loginError}
                </div>
              )}

              <Button
                onClick={() => {
                  const pattern = /^MSCS-\d[A-Z]-\d{4}-\d{3}$/;
                  if (pattern.test(loginCode)) {
                    setIsLoggedIn(true);
                    setStudentName(loginCode);
                    navigateTo('landing');
                  } else {
                    setLoginError('Invalid code format. Use: MSCS-7A-2026-014');
                  }
                }}
                className="w-full bg-[#722F37] hover:bg-[#5A1A23] text-white"
              >
                <LogIn className="w-4 h-4 mr-2" /> Sign In
              </Button>

              {isLoggedIn && (
                <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-3 text-sm text-emerald-700 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  Logged in as {studentName}
                </div>
              )}

              <div className="text-center">
                <p className="text-xs text-gray-400">Demo: Enter any valid format like MSCS-8A-2026-001</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  // ───────────────────────────────────────────────────────────
  // PARENTAL CONSENT PAGE
  // ───────────────────────────────────────────────────────────

  const renderConsentPage = () => (
    <div className="min-h-screen bg-[#FFF9F0]">
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

      <div className="max-w-3xl mx-auto px-4 py-8 space-y-6">
        <Card className="border-2 border-teal-200">
          <CardContent className="p-6 space-y-4">
            <div className="flex items-start gap-3">
              <Shield className="w-8 h-8 text-teal-600 shrink-0" />
              <div>
                <h3 className="font-bold text-gray-800">Our Commitment to Student Safety</h3>
                <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                  MSCS Academy is committed to providing a safe, secure, and age-appropriate learning
                  environment for all students. We follow strict data protection practices and ensure
                  that no personal student information is collected or stored on our platform.
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
              ].map((item) => (
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
          <p className="text-xs text-gray-400 mt-2">
            For questions or concerns, please contact through the portfolio website
          </p>
        </div>
      </div>
    </div>
  );

  // ───────────────────────────────────────────────────────────
  // MAIN RENDER
  // ───────────────────────────────────────────────────────────

  return (
    <div className="min-h-screen">
      {view === 'landing' && renderLanding()}
      {view === 'gradeSelect' && renderGradeSelect()}
      {view === 'termSelect' && renderGradeSelect()}
      {view === 'unitSelect' && renderUnitSelect()}
      {view === 'lessonView' && renderLessonViewer()}
      {view === 'aboutPage' && renderAboutPage()}
      {view === 'loginPage' && renderLoginPage()}
      {view === 'consentPage' && renderConsentPage()}
    </div>
  );
}
