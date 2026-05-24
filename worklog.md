---
Task ID: 1
Agent: Main Agent
Task: Implement Curriculum Mapping star markers and Scope & Sequence lesson numbering

Work Log:
- Read and analyzed 4 uploaded xlsx files: MSCS_Curriculum_Mapping_2026-2027.xlsx, MSCS_Scope_Sequence_Term1/2/3
- Extracted mapped lessons from Curriculum Mapping xlsx for G6-G9 (all 3 terms)
- Cross-referenced Curriculum Mapping with Scope & Sequence documents
- Built scope_sequence_mapping.json reference file
- Wrote Python script (update_mapping.py) to match JSON lessons against mapped lessons using fuzzy matching
- Added `is_mapped` (boolean) and `lesson_number` (number|null) fields to every lesson in curriculum_mapping.json
- Updated LessonData TypeScript interface with new optional fields
- Updated getUnitData() to pass through is_mapped and lesson_number from JSON
- Updated getLesson() default return to include new fields
- Updated page.tsx lesson list UI: star markers (⭐) for mapped lessons, gold "Mapped" badges, lesson number display (L1, L2, etc. from Scope & Sequence order)
- Updated page.tsx unit cards: priority unit star markers, mapped lesson count indicators
- Updated page.tsx title slide: star indicator and lesson number badge
- Added visual distinction: mapped lessons get burgundy gradient cards, textbook-only lessons get gray styling with "(textbook supplement)" label
- Fixed G9 T3 lesson numbering issue (Developing Competencies lessons)
- Build verified successful (zero errors)
- Deployed to mscs-academy.vercel.app

Stage Summary:
- 93 lessons marked as mapped (⭐) per Curriculum Mapping & Scope & Sequence
- 64 textbook-only lessons kept but displayed as supplements
- Week 1 "Setting Classroom Rules & Diagnostic Assessment" is always mapped for all grades
- Priority units (Unit 3 in T1, Unit 6 in T2) have all their lessons marked with both ⭐ and PRIORITY indicators
- Non-mapped textbook lessons are preserved, numbered in their original order, and visually distinct
