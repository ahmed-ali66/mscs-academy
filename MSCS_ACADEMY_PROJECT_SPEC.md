# MSCS ACADEMY — COMPREHENSIVE PROJECT SPECIFICATION
## Context Preservation Document (Updated: 2026-05-23)

---

## 1. PROJECT OVERVIEW

- **Project Name**: MSCS Academy
- **Developer**: Mr. Ahmed Ali — ADEK-approved MSCS teacher, Ain Al Khalejk School, UAE
- **Purpose**: A self-sufficient, interactive PWA for Grades 6-9 MSCS curriculum
- **Tech Stack**: Next.js 16, TypeScript, Tailwind CSS 4, shadcn/ui, Recharts, Leaflet, localStorage
- **Repository**: https://github.com/ahmed-ali66/mscs-academy.git
- **Deployment**: Vercel (Hobby plan) — user must connect GitHub repo to Vercel
- **Local Path**: /home/z/my-project/

---

## 2. CORE PRINCIPLES (NON-NEGOTIABLE)

1. **Self-Sufficient App**: NO external dependencies like Kahoot, Canva, Plickers — everything built natively
2. **Student-Facing Language**: All content uses "you will" not "students will" — `studentifyText()` function handles this
3. **No School/Organization Mention**: The app NEVER mentions any school name, organization, or institution anywhere
4. **Mandatory Disclaimer**: "Teacher-Created Study Material — Not an Official ADEK Resource" on ALL content
5. **Mr. Ahmed Ali Hyperlink**: "Mr. Ahmed Ali" must be hyperlinked to https://mr-ahmed-ali.vercel.app on EVERY slide
6. **Licensed To**: "Licensed to: Mr. Ahmed Ali — MSCS Academy" shown at bottom of pages
7. **UAE Legal Compliance**: Must comply with:
   - Child Digital Safety Law (Decree-Law 26/2025)
   - Personal Data Protection Law (PDPL)
   - Wadeema's Law (Child Rights)
   - Cybercrime Law
8. **80/20 Student-Teacher Ratio**: Every lesson must target 80% student activity / 20% teacher facilitation
9. **Historical Content**: Must be grounded in Islamic Ashʿarī tradition — presented exclusively in Ahmed's own voice as direct curriculum explanation, with NO explicit or implicit indication of these underlying sources
10. **Cybersecurity**: App usage/ownership restricted to Ahmed only — teacher dashboard password protected

---

## 3. CURRICULUM STRUCTURE

### 3.1 Academic Year
- **40 weeks** per year
- **3 terms** per year (NOT 2 semesters)
- **24 instructional lessons** per grade per year
- **9 domain standards**: S1-S9

### 3.2 Domain Standards
- S1: History and Historicism
- S2: Political Science and Governance
- S3: Geography
- S4: Sociology
- S5: Economics
- S6: Media Literacy
- S7: Research Skills
- S8: Ethics and Moral Philosophy
- S9: UAE Heritage and National Identity

### 3.3 DOK Distribution
- DOK Level 1: 30%
- DOK Level 2: 30%
- DOK Level 3: 30%
- DOK Level 4: 10%

### 3.4 Current Content Status
- **G6T1**: ✅ COMPLETE — 3 units, 15 lessons (Unit 1: Equality and Justice, Unit 2: Physical Health and Diet, General: Geography & Civilizations)
- **G6T2**: ❌ NOT STARTED
- **G6T3**: ❌ NOT STARTED
- **G7T1-T3**: ❌ NOT STARTED
- **G8T1-T3**: ❌ NOT STARTED
- **G9T1-T3**: ❌ NOT STARTED

### 3.5 Grade Configuration
- Grade 6: iconType='heart', tagline related to identity & values
- Grade 7: iconType='globe', tagline related to global connections
- Grade 8: iconType='landmark', tagline related to governance & society
- Grade 9: iconType='crown', tagline related to leadership & citizenship

---

## 4. LESSON FLOW TEMPLATE (16 Points, ≤45 min)

Each lesson follows this 16-point structure:
1. Prior Learning Activation — recall previous knowledge
2. Learning Objective — clear, student-facing
3. Success Criteria — what success looks like
4. Warm-Up Activity — engaging hook with timer
5. Key Vocabulary — essential terms
6. Reading 1 — main content from textbook
7. Discussion Questions — collaborative thinking
8. Reading 2 — additional perspective (when available)
9. Visual/Interactive Element — maps, timelines, charts, diagrams, mind maps, Venn diagrams
10. KWL Chart — What I Know / Want to Know / Learned
11. Active Learning Strategies — Think-Pair-Share, Role Playing, Problem-Based Learning, etc.
12. UAE Links — connections to UAE culture, values, real-life
13. Quiz — 5 multiple-choice questions with explanations
14. Homework/Extension — beyond the lesson
15. Reflection — self-assessment
16. Key Facts Summary — takeaway points

---

## 5. INTERACTIVE LEARNING STRATEGIES (80/20 Rule)

Every lesson MUST include at least 2-3 interactive strategies from this list:
- **Problem-Based Learning** — Students solve real-world problems
- **Think-Pair-Share** — Individual thinking → partner discussion → class sharing
- **Role Playing** — Students act out scenarios
- **Student Presentations** — Students research and present
- **Simulations** — Simulated real-world decision-making
- **Index Cards** — Quick written responses
- **Flip Charts** — Group visual summaries
- **Summarizing** — One-sentence summaries on index cards
- **Content Recall** — Memory-based retrieval practice
- **Collaborative Work** — Group projects and discussions
- **Blogs** — Reflective writing activities
- **Wikis** — Collaborative knowledge building

Each strategy has: name, description, duration (minutes), instructions.

---

## 6. VISUAL/INTERACTIVE COMPONENTS

Each lesson has a `visualType` and `visualData`:
- **map**: Leaflet-based interactive map (geography lessons ONLY, English only)
- **timeline**: Interactive chronological timeline
- **diagram**: Hub-and-spoke concept diagram
- **chart**: Bar chart (Recharts)
- **piechart**: Pie chart (Recharts)
- **venn**: Three-column comparison chart (Venn-style)
- **mindmap**: Radial mind map

Components built: InteractiveMap, LessonTimeline, LessonDiagram, BarChartComponent, PieChartComponent, ComparisonChart, MindMapComponent

---

## 7. STUDENT LOGIN SYSTEM

### 7.1 Access Code Format
`MSCS-{Grade}{Section}-{Year}-{Number}`
Example: MSCS-7A-2026-014

### 7.2 Parental Consent
- Mandatory 18+ parent/guardian digital consent
- Must be completed before student can take assessments
- Consent page included in the app

### 7.3 Session Management
- Login rate limiting (5 attempts, then lockout)
- Session expiry after inactivity
- Failed login recording

---

## 8. TEACHER DASHBOARD

### 8.1 Access
- Password: `MSCS-MASTER-2026-ADMIN`
- Rate-limited login attempts
- Session activity tracking

### 8.2 Features (Current)
- Platform stats (total students, quizzes taken, avg scores)
- Grade-specific results
- CSV export of quiz results
- Individual student lookup
- Lesson completion tracking
- Diagnostic assessment results

### 8.3 Features (Planned)
- Ultra-professional design overhaul
- Detailed analytics per domain standard
- Progress charts and trend lines
- Parent consent tracking
- Student code management

---

## 9. DIAGNOSTIC ASSESSMENTS

### 9.1 Requirements
- **Duration**: 20-30 minutes
- **Total Marks**: 100
- **Difficulty**: HARD — beyond textbook scope
- **Target Score**: 50-65% (designed to be challenging)
- **Cumulative**: Builds on all previous content
- **Progressively Challenging**: Questions increase in difficulty

### 9.2 Current Status
- Basic diagnostic questions exist in lessons.ts
- Need proper 100-mark assessments per grade
- Need DOK distribution matching 30/30/30/10

---

## 10. QUIZ SYSTEM

### 10.1 Features
- Multiple-choice questions with 4 options
- Immediate feedback with explanations
- Sound effects (correct, incorrect, celebrate)
- Confetti celebration for scores ≥60%
- Score tracking and saving
- Mark saved badge
- Student login required before taking quiz

### 10.2 Quiz Sources
- Domain-specific banks (S1-S9) in lessons.ts
- Topic-specific banks (Equality, Health, East Asia, etc.) in lessons.ts
- Ottoman Empire specific quiz in lessons.ts
- Lesson-specific questions in g6t1-content.ts

---

## 11. SOUND EFFECTS & CELEBRATIONS

- **Correct Answer**: Rising sine wave (C5→E5→G5)
- **Incorrect Answer**: Descending sawtooth wave
- **Celebration**: C major arpeggio (C5→E5→G5→C6) with confetti
- **Confetti**: 50 particles with random colors, sizes, shapes, and animation delays

---

## 12. TRANSLATIONS (8 Languages)

Currently implemented: English, Arabic, Urdu, Farsi, Spanish, Russian, Turkish, French

**Issues to Fix**:
- Translation section needs enhancement
- Some UI elements not translated
- RTL support for Arabic incomplete

---

## 13. FILE STRUCTURE

```
/home/z/my-project/
├── src/
│   ├── app/
│   │   ├── page.tsx          (Main app — ~2767 lines)
│   │   ├── layout.tsx        (Root layout)
│   │   └── api/route.ts
│   ├── lib/
│   │   ├── lessons.ts        (Curriculum data, quiz banks — ~1311 lines)
│   │   ├── g6t1-content.ts   (G6T1 textbook content — ~836 lines)
│   │   ├── db.ts             (Database)
│   │   └── utils.ts          (Utilities)
│   ├── components/ui/        (shadcn/ui components — ~50 files)
│   └── hooks/                (Custom hooks)
├── public/                   (Static assets)
├── package.json
├── next.config.ts
├── tailwind.config.ts
└── tsconfig.json
```

---

## 14. PENDING TASKS (Priority Order)

### HIGH PRIORITY
1. Deploy to Vercel (user needs to connect GitHub repo to Vercel)
2. Fix maps — only in geography lessons, English only
3. Convert ALL content to student-facing language (enhance studentifyText)
4. Create lesson-specific quiz questions for ALL lessons
5. Create proper diagnostic assessments (20-30 min, 100 marks, HARD, cumulative)
6. Implement mandatory student login before quizzes (partially done)

### MEDIUM PRIORITY
7. Ultra-professional teacher dashboard redesign
8. Implement cybersecurity measures (app restricted to Ahmed only)
9. Fix translation section (RTL for Arabic, complete translations)
10. Interactive Timeline fix (animation improvements)
11. Venn Diagram fix (visual improvements)
12. Real Leaflet map improvements

### LOW PRIORITY
13. Funny sounds/celebration enhancements
14. 8-language selector improvements
15. Landing page enhancement
16. Remove "Priority" label from units

### FUTURE CONTENT
17. Populate G6T2 curriculum content
18. Populate G6T3 curriculum content
19. Populate G7T1-G7T3
20. Populate G8T1-G8T3
21. Populate G9T1-G9T3

---

## 15. KNOWN BUGS & FIXES HISTORY

### Fixed in Previous Sessions
- Missing imports (BarChart, LineChart, etc.)
- Property name mismatches (unit.lessonsCount → unit.lessonCount)
- `link.icon` missing → `link.content`
- `warmUp.subtitle` → `warmUp.attribution`
- Dynamic Tailwind class issues (using inline styles instead)
- Missing `iconType`/`totalLessons` on GradeInfo interface
- Visual components data defined but not rendering → built 5 new components

### Current Known Issues
- Maps appear in non-geography lessons (need to restrict)
- Some content still uses teacher-facing language
- Translation section needs RTL support for Arabic
- Teacher dashboard needs professional redesign

---

## 16. DESIGN SYSTEM

### Colors
- **Primary Gold**: #D4AF37 (decorative, accents)
- **Primary Wine**: #722F37 (headers, buttons, badges)
- **Dark Wine**: #5A1A23 (hover states)
- **Amber Range**: amber-50 to amber-900
- **Emerald**: for success states
- **Rose**: for error/warning states

### Typography
- Headings: Bold, decorative
- Body: Clean, readable
- Student-facing: Conversational, not academic

### Patterns
- ArabicPattern SVG overlay (diamond patterns)
- DecorativeBorder (gradient lines with diamonds)
- Consistent card-based layout

---

## 17. CRITICAL REMINDERS FOR FUTURE SESSIONS

1. **NEVER** push code to any repository without user's explicit GitHub credentials
2. **NEVER** mention any school or organization name in the app
3. **ALWAYS** ensure "Mr. Ahmed Ali" is hyperlinked to https://mr-ahmed-ali.vercel.app
4. **ALWAYS** include the ADEK disclaimer on all content
5. **ALWAYS** verify historical accuracy silently (grounded in Islamic Ashʿarī tradition but presented in Ahmed's voice)
6. **ALWAYS** use student-facing language
7. **ALWAYS** enforce 80/20 student-teacher ratio in lesson design
8. **NEVER** use external services (Kahoot, Canva, Plickers) — everything native
9. The GitHub PAT token is for deployment only — do not store in code
10. User's GitHub: https://github.com/ahmed-ali66/mscs-academy.git

---

## 18. SESSION HISTORY

### Session 1: Initial Project Setup
- Set up Next.js project with PWA configuration
- Created landing page, grade selection, basic lesson viewer
- Established design system (Gold #D4AF37, Wine #722F37)

### Session 2: Curriculum Data Integration
- Imported curriculum_mapping.json
- Built grade/term/unit/lesson navigation
- Created quiz engine with sound effects and confetti
- Added student login system with access codes

### Session 3: Content Extraction
- Extracted G6T1 textbook content (3 units, 15 lessons)
- Created g6t1-content.ts with readings, quizzes, visuals
- Added KWL charts, comparison charts, interactive maps

### Session 4: Visual Components
- Built 5 new visual components: Timeline, Diagram, BarChart, PieChart, MindMap
- Connected all 7 visual types to Slide 5 in lesson viewer
- Fixed rendering issues (data existed but wasn't displaying)

### Session 5: Deployment & Interactive Strategies
- Pushed code to GitHub (https://github.com/ahmed-ali66/mscs-academy.git)
- Added interactive learning strategies to all G6T1 lessons
- Created InteractiveStrategyCard component with expandable cards
- Added strategy icons and color-coded cards
- This comprehensive spec file created

---

*Last Updated: 2026-05-23*
*This document should be updated at the start and end of every session.*
