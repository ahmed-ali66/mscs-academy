#!/usr/bin/env python3
"""
Script to add is_mapped and lesson_number fields to each lesson in G6-G9 grades.
Uses word-overlap F1 scoring with stop word filtering and colon-splitting.
"""

import json
import re
from pathlib import Path

JSON_PATH = Path("/home/z/my-project/src/lib/curriculum_mapping.json")

STOP_WORDS = {
    "a", "an", "the", "of", "and", "in", "to", "for", "is", "are", "was",
    "were", "by", "with", "from", "that", "this", "it", "on", "at", "or",
    "be", "as", "not", "but", "its", "can", "my", "their", "how", "what",
    "when", "where", "who", "which", "up", "do", "does", "did", "has",
    "have", "had", "will", "would", "could", "should", "may", "might",
    "about", "into", "through", "during", "before", "after", "above",
    "below", "between", "under", "over", "then", "here", "there", "why",
    "both", "each", "few", "more", "most", "other", "some", "such", "than",
    "too", "very", "just", "also", "now", "he", "she", "we", "they",
    "i", "me", "him", "her", "us", "them", "you", "your",
}

MAPPED_LESSONS = {
    "G6": {
        "T1": [
            (1, "Setting Classroom Rules & Diagnostic Assessment"),
            (2, "Aspects of Equality Among People"),
            (3, "Distributive Justice"),
            (4, "How Healthy Is Your Lifestyle?"),
            (5, "Challenges to Health and Getting Help"),
            (6, "After the Fall of the Roman Empire"),
            (7, "The High Middle Ages of Europe"),
            (8, "The Republic of Venice"),
            (9, "The Late Middle Ages"),
            (10, "Crises of the Late Middle Ages"),
        ],
        "T2": [
            (1, "Tolerance and Its Relation to Diversity"),
            (2, "Exploring Our Own Beliefs and Attitudes"),
            (3, "Museums in the UAE"),
            (4, "The Renaissance"),
            (5, "The Printing Press"),
            (6, "The Age of Discovery"),
            (7, "The Fur and Spice Trades"),
        ],
        "T3": [
            (1, "How the Government Functions"),
            (2, "How the Government Functions (Continued)"),
            (3, "Modern Political Systems"),
            (4, "How Laws are Made"),
            (5, "How Laws are Interpreted"),
            (6, "Comprehensive Worksheet: Lessons 1–4"),
            (7, "Human Rights and Responsibilities"),
            (8, "Civic Engagement Project & Real-World Application"),
        ],
    },
    "G7": {
        "T1": [
            (1, "Setting Classroom Rules & Diagnostic Assessment"),
            (2, "What Is Meant by Duties and Responsibilities?"),
            (3, "Duties and Responsibilities of Sons and Daughters"),
            (4, "Staying Safe at Home and Outside"),
            (5, "First Aid"),
            (6, "The Geography of East Asia"),
            (7, "Engineering and Civilization in Ancient China"),
            (8, "Chinese Technology Science and Medicine"),
            (9, "Spreading Cultures in China and Southeast Asia"),
            (10, "Culture through Art in China in 1770"),
        ],
        "T2": [
            (1, "Understanding Globalisation"),
            (2, "Globalisation and the UAE"),
            (3, "Life Necessities"),
            (4, "The Geography of South Asia"),
            (5, "Ancient Civilizations of South Asia"),
            (6, "Ancient India — Mauryan to Gupta Empires"),
            (7, "Arrival of Islamic Civilization in India"),
        ],
        "T3": [
            (1, "Introduction to Central Asia"),
            (2, "Introduction to Central Asia (Continued)"),
            (3, "The Silk Road"),
            (4, "The Culture of Central Asia"),
            (5, "Kazakhstan — Economy & People"),
            (6, "Comprehensive Worksheet: Lessons 1–4"),
            (7, "Kyrgyzstan and Tajikistan"),
            (8, "Turkmenistan and Uzbekistan"),
        ],
    },
    "G8": {
        "T1": [
            (1, "Setting Classroom Rules & Diagnostic Assessment"),
            (2, "Definition of Community"),
            (3, "The Form of Our Communities"),
            (4, "Understanding Diversity and Equality"),
            (5, "Can I See Beyond Appearances?"),
            (6, "Land and Resources of Africa"),
            (7, "Ancient African Civilizations"),
            (8, "Traditional African Art"),
            (9, "West African Islamic Civilizations"),
            (10, "Africa from Colonialism to Independence"),
        ],
        "T2": [
            (1, "Majlis: The Traditional Means of Consultation"),
            (2, "The Consultative Governance in the UAE"),
            (3, "Understanding State and Government"),
            (4, "The Land and Physical Geography of North America"),
            (5, "Indigenous People of North America"),
            (6, "Colonial North America"),
            (7, "American Civil War and Reconstruction"),
        ],
        "T3": [
            (1, "Geography of West Asia"),
            (2, "Geography of West Asia (Continued)"),
            (3, "Geography of North Africa"),
            (4, "Origins & Early Expansion (Rise of Ottoman Empire Part 1)"),
            (5, "Consolidation & Growth (Rise of Ottoman Empire Part 2)"),
            (6, "Comprehensive Worksheet: Lessons 1–3"),
            (7, "Suleyman I and His Conquests — Part 1"),
            (8, "Ottoman Istanbul & Architecture — Part 2"),
        ],
    },
    "G9": {
        "T1": [
            (1, "Setting Classroom Rules & Diagnostic Assessment"),
            (2, "Global Ethics in the Context of Global Issues"),
            (3, "Global Ethical Challenges"),
            (4, "Dealing with Global Ethical Challenges"),
            (5, "Realising the Value of Money"),
            (6, "How Wealth Can Be a Force for Good?"),
            (7, "Becoming an Entrepreneur"),
            (8, "The UAE Landscape and Jebel Faya"),
            (9, "The Impact of the Falaj during the Iron Age"),
            (10, "Shipbuilding and Trade: Ed-Dur and the Arabian Gulf"),
        ],
        "T2": [
            (1, "The Importance of Heritage"),
            (2, "Preserving the Cultural and Natural Heritage"),
            (3, "Exploring the UAE Constitution and Government System"),
            (4, "Federal Authorities of the UAE"),
            (5, "The Rise of Islamic Civilisations in the Land of the UAE"),
            (6, "The British Maritime System and National Identity"),
            (7, "The Trucial States Leading up to Nationalisation"),
        ],
        "T3": [
            (1, "Civic Engagement"),
            (2, "Civic Engagement (Continued)"),
            (3, "The Good Citizen"),
            (4, "The Good Citizens in My Country"),
            (5, "The Good Citizens in My Country (Continued)"),
            (6, "Differentiated Consolidation Worksheets: Lessons 1–3"),
            (7, "Developing Competencies for Civic Engagement"),
            (8, "Youth Civic Engagement & the United Nations"),
        ],
    },
}


def normalize_title(title: str) -> str:
    if not title:
        return ""
    t = title
    t = re.sub(r'\[Content Note:[^\]]*\]', '', t)
    t = re.sub(r'\[[^\]]*Content Note[^\]]*\]', '', t)
    t = t.replace("★", "")
    t = re.sub(r'PRIORITY\s+UNIT', '', t)
    t = re.sub(r'\s*\(L\d+\)\s*', ' ', t)
    t = re.sub(r'\s*\(\d+\)', ' ', t)
    unit_prefix_match = re.match(r'^\s*Unit\s+\d+\s*:\s*[^:]+?\s*:\s*', t)
    if unit_prefix_match:
        t = t[unit_prefix_match.end():]
    t = re.sub(r'[()]', ' ', t)
    t = t.replace('—', ' ').replace('–', ' ').replace('−', ' ')
    t = t.replace(',', '')
    t = t.replace('?', '').replace('.', '')
    t = t.replace('&', 'and')
    t = re.sub(r'\s+', ' ', t).strip()
    t = t.lower()
    return t


def simple_stem(word: str) -> str:
    if word.endswith('ies') and len(word) > 3:
        return word[:-3] + 'y'
    if word.endswith('es') and len(word) > 2:
        return word[:-2]
    if word.endswith('s') and not word.endswith('ss') and len(word) > 2:
        return word[:-1]
    return word


def get_content_words(normalized_title: str) -> set:
    words = normalized_title.split()
    content_words = set()
    for w in words:
        if w not in STOP_WORDS and len(w) > 0:
            content_words.add(simple_stem(w))
    return content_words


def get_lesson_title(lesson: dict) -> str:
    return lesson.get("lesson_title", "") or lesson.get("title", "") or ""


def is_instructional_lesson(lesson: dict) -> bool:
    phase = lesson.get("phase", "Instruction")
    if phase and phase != "Instruction":
        return False
    title = get_lesson_title(lesson).lower()
    non_instructional = ["mid-term exam", "final exam", "mid-term break", "review & exam prep", "term review", "review & exam"]
    for kw in non_instructional:
        if kw in title:
            return False
    return True


def score_word_overlap(lesson_content_words: set, mapped_content_words: set) -> float:
    """Compute F1-based score from two sets of content words."""
    if not lesson_content_words or not mapped_content_words:
        return 0
    
    overlap = lesson_content_words & mapped_content_words
    if not overlap:
        return 0
    
    precision = len(overlap) / len(mapped_content_words)
    recall = len(overlap) / len(lesson_content_words)
    
    if precision + recall == 0:
        return 0
    f1 = 2 * precision * recall / (precision + recall)
    
    base_score = f1 * 900
    
    # Short title rule: if ALL lesson content words are in the mapped title
    # (100% recall) and score is reasonable, boost to ensure match
    if recall >= 1.0 and base_score >= 350:
        base_score = max(base_score, 560)
    
    return base_score


def compute_match_score(lesson_title: str, mapped_title: str) -> float:
    """
    Compute match score using word-overlap F1 with stop word filtering.
    Also tries colon-splitting to match the lesson-specific part of titles.
    """
    norm_lesson = normalize_title(lesson_title)
    norm_mapped = normalize_title(mapped_title)
    
    if not norm_lesson or not norm_mapped:
        return 0
    
    # Exact match
    if norm_lesson == norm_mapped:
        return 1000
    
    mapped_words = get_content_words(norm_mapped)
    if not mapped_words:
        return 0
    
    best_score = 0
    
    # Try 1: Match against the full normalized lesson title
    lesson_words = get_content_words(norm_lesson)
    score = score_word_overlap(lesson_words, mapped_words)
    best_score = max(best_score, score)
    
    # Try 2: Match against each colon-separated part of the lesson title
    # This handles cases like "Unit Name: Lesson Title" where the unit prefix
    # wasn't stripped by the regex (e.g., no "Unit N:" prefix)
    if ':' in norm_lesson:
        parts = norm_lesson.split(':')
        for part in parts:
            part = part.strip()
            if not part:
                continue
            part_words = get_content_words(part)
            if not part_words:
                continue
            score = score_word_overlap(part_words, mapped_words)
            best_score = max(best_score, score)
    
    return best_score


def find_best_mapping(lesson: dict, grade: str, term: str) -> tuple:
    title = get_lesson_title(lesson)
    
    if not is_instructional_lesson(lesson):
        return (False, None)
    
    term_mappings = MAPPED_LESSONS.get(grade, {}).get(term, [])
    
    best_score = 0
    best_lesson_number = None
    
    for lesson_number, mapped_title in term_mappings:
        score = compute_match_score(title, mapped_title)
        if score > best_score:
            best_score = score
            best_lesson_number = lesson_number
    
    MIN_SCORE = 550
    
    if best_score >= MIN_SCORE:
        return (True, best_lesson_number)
    
    return (False, None)


def process_json(data: dict) -> dict:
    grades = data.get("grades", {})
    
    for grade_key in ["G6", "G7", "G8", "G9"]:
        if grade_key not in grades:
            print(f"WARNING: Grade {grade_key} not found!")
            continue
        grade_data = grades[grade_key]
        terms = grade_data.get("terms", {})
        for term_key, term_data in terms.items():
            units = term_data.get("units", {})
            for unit_key, unit_data in units.items():
                lessons = unit_data.get("lessons", [])
                for lesson in lessons:
                    is_mapped, lesson_number = find_best_mapping(lesson, grade_key, term_key)
                    lesson["is_mapped"] = is_mapped
                    lesson["lesson_number"] = lesson_number
    return data


def verify_results(data: dict):
    grades = data.get("grades", {})
    print("\n" + "=" * 80)
    print("VERIFICATION SUMMARY")
    print("=" * 80)
    
    for grade_key in ["G6", "G7", "G8", "G9"]:
        if grade_key not in grades:
            continue
        grade_data = grades[grade_key]
        terms = grade_data.get("terms", {})
        print(f"\n{'─' * 60}")
        print(f"  {grade_key}")
        print(f"{'─' * 60}")
        
        for term_key in ["T1", "T2", "T3"]:
            if term_key not in terms:
                continue
            term_data = terms[term_key]
            units = term_data.get("units", {})
            mapped_count = 0
            unmapped_count = 0
            non_inst_count = 0
            expected = len(MAPPED_LESSONS.get(grade_key, {}).get(term_key, []))
            print(f"\n  {term_key} (expected up to {expected} mapped):")
            
            for unit_key, unit_data in units.items():
                lessons = unit_data.get("lessons", [])
                for lesson in lessons:
                    title = get_lesson_title(lesson)
                    is_mapped = lesson.get("is_mapped", False)
                    lesson_number = lesson.get("lesson_number")
                    phase = lesson.get("phase", "")
                    display = title[:70] + "..." if len(title) > 70 else title
                    
                    if is_mapped:
                        mapped_count += 1
                        print(f"    ✅ L{lesson_number:>2}: {display}")
                    elif phase and phase != "Instruction":
                        non_inst_count += 1
                    else:
                        unmapped_count += 1
                        print(f"    ❌ UNMAPPED: {display}")
            
            total = mapped_count + unmapped_count + non_inst_count
            print(f"    Total: {total} | Mapped: {mapped_count} | Unmapped inst: {unmapped_count} | Non-inst: {non_inst_count}")


def main():
    print(f"Reading {JSON_PATH}...")
    with open(JSON_PATH, "r", encoding="utf-8") as f:
        data = json.load(f)
    
    if "grades" not in data:
        print("ERROR: 'grades' key not found!")
        return
    
    print("Processing G6-G9 grades...")
    data = process_json(data)
    verify_results(data)
    
    print(f"\nSaving to {JSON_PATH}...")
    with open(JSON_PATH, "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
    print("Done!")


if __name__ == "__main__":
    main()
