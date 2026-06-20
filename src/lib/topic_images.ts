/**
 * MSCS Academy — Topic Image Library
 *
 * Real photos/paintings fetched from Wikimedia Commons (free, educational use).
 * Used to give each lesson/unit a real visual hook tied to the actual topic.
 *
 * All images are CC-licensed or Public Domain. Attribution stored alongside URL.
 */

import topicImagesData from './topic_images.json';

export interface TopicImage {
  url: string;
  original_url: string;
  license: string;
  artist: string;
  source: string;
  width: number;
  height: number;
  title: string;
}

const TOPIC_IMAGES = topicImagesData as Record<string, TopicImage>;

/**
 * Map a lesson/unit title to a topic image key.
 * Returns the best-matching image based on keywords in the title.
 */
export function getTopicImageForTitle(title: string): TopicImage | null {
  const t = title.toLowerCase();

  // Grade 6 mappings
  if (t.includes('equality') || t.includes('justice') || t.includes('fair'))
    return TOPIC_IMAGES['g6-equality-justice'] || null;
  if (t.includes('health') || t.includes('diet') || t.includes('lifestyle'))
    return TOPIC_IMAGES['g6-physical-health'] || null;
  if (t.includes('perspective') || t.includes('people through time'))
    return TOPIC_IMAGES['g6-perspectives-time'] || null;
  if (t.includes('respect') || t.includes('tolerance') || t.includes('diverse community'))
    return TOPIC_IMAGES['g6-respect-tolerance'] || null;
  if (t.includes('museum') || t.includes('uae grew'))
    return TOPIC_IMAGES['g6-uae-museums'] || null;
  if (t.includes('renaissance') || t.includes('europe') || t.includes('transitions'))
    return TOPIC_IMAGES['g6-transitions-europe'] || null;
  if (t.includes('government') || t.includes('political') || t.includes('laws'))
    return TOPIC_IMAGES['g6-government-services'] || null;

  // Grade 7 mappings
  if (t.includes('duties') || t.includes('responsibilities') || t.includes('parents') || t.includes('sons and daughters'))
    return TOPIC_IMAGES['g7-duties-responsibilities'] || null;
  if (t.includes('decisions') || t.includes('safety') || t.includes('first aid') || t.includes('harmful'))
    return TOPIC_IMAGES['g7-making-decisions'] || null;
  if (t.includes('east asia') || t.includes('china') || t.includes('korea'))
    return TOPIC_IMAGES['g7-east-asia'] || null;
  if (t.includes('trade') || t.includes('travel') || t.includes('globalisation') || t.includes('globalized'))
    return TOPIC_IMAGES['g7-trade-travel'] || null;
  if (t.includes('human needs') || t.includes('life necessities'))
    return TOPIC_IMAGES['g7-human-needs'] || null;
  if (t.includes('south asia') || t.includes('india'))
    return TOPIC_IMAGES['g7-south-asia'] || null;
  if (t.includes('central asia') || t.includes('silk road') || t.includes('kazakhstan') || t.includes('kyrgyzstan'))
    return TOPIC_IMAGES['g7-central-asia'] || null;

  // Grade 8 mappings
  if (t.includes('ethics') || t.includes('community') || t.includes('communities'))
    return TOPIC_IMAGES['g8-ethics-communities'] || null;
  if (t.includes('diversity') || t.includes('valuing diversity'))
    return TOPIC_IMAGES['g8-valuing-diversity'] || null;
  if (t.includes('africa') || t.includes('african'))
    return TOPIC_IMAGES['g8-african-civilizations'] || null;
  if (t.includes('majlis') || t.includes('consultative') || t.includes('governance'))
    return TOPIC_IMAGES['g8-consultative-governance'] || null;
  if (t.includes('morality') || t.includes('state') || t.includes('government'))
    return TOPIC_IMAGES['g8-morality-states'] || null;
  if (t.includes('america') || t.includes('americas') || t.includes('indigenous'))
    return TOPIC_IMAGES['g8-americas'] || null;
  if (t.includes('ottoman') || t.includes('suleyman') || t.includes('istanbul'))
    return TOPIC_IMAGES['g8-ottoman-empire'] || null;
  if (t.includes('west asia') || t.includes('north africa'))
    return TOPIC_IMAGES['g8-ottoman-empire'] || null; // reuse

  // Grade 9 mappings
  if (t.includes('global ethics'))
    return TOPIC_IMAGES['g9-global-ethics'] || null;
  if (t.includes('financial') || t.includes('money') || t.includes('wealth') || t.includes('entrepreneur'))
    return TOPIC_IMAGES['g9-financial-awareness'] || null;
  if (t.includes('uae history') || t.includes('jebel faya') || t.includes('falaj') || t.includes('ed-dur') || t.includes('shipbuilding'))
    return TOPIC_IMAGES['g9-uae-history'] || null;
  if (t.includes('heritage') || t.includes('preserv'))
    return TOPIC_IMAGES['g9-preserving-heritage'] || null;
  if (t.includes('government') || t.includes('authority') || t.includes('judiciary') || t.includes('federal'))
    return TOPIC_IMAGES['g9-uae-government'] || null;
  if (t.includes('founding') || t.includes('trucial') || t.includes('british mandate') || t.includes('rise of islam'))
    return TOPIC_IMAGES['g9-founding-uae'] || null;
  if (t.includes('civic engagement') || t.includes('citizen') || t.includes('united nations'))
    return TOPIC_IMAGES['g9-civic-engagement'] || null;

  return null;
}

/**
 * Map a grade number + subject area to a default topic image
 * (used when no specific lesson image is found).
 */
export function getDefaultTopicImage(grade: number, subject: string = 'general'): TopicImage | null {
  const gradeKey = `g${grade}`;
  const subjectMap: Record<string, string> = {
    history: 'transitions-europe',
    civics: 'government-services',
    geography: 'east-asia',
    sociology: 'respect-tolerance',
    economics: 'financial-awareness',
    ethics: 'ethics-communities',
    uae_heritage: 'uae-history',
    general: 'perspectives-time',
  };
  const suffix = subjectMap[subject] || 'perspectives-time';
  return TOPIC_IMAGES[`${gradeKey}-${suffix}`] || null;
}

export function getAllTopicImages(): Record<string, TopicImage> {
  return TOPIC_IMAGES;
}
