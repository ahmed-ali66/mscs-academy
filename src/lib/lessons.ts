import curriculumData from './curriculum_mapping.json';

// ═══════════════════════════════════════════════════════════════
// TYPES
// ═══════════════════════════════════════════════════════════════

export interface QuizQuestion {
  id: string;
  question: string;
  type: string;
  options: string[];
  correctAnswer: string | number;
  explanation?: string;
}

export interface ActivityItem {
  id: string;
  title: string;
  duration: number;
  type: string;
  description: string;
  content?: string;
}

export interface UAELink {
  title: string;
  content: string;
  icon?: 'building' | 'star' | 'globe' | 'mountain' | 'heart';
}

export interface WarmUpActivity {
  type: string;
  content: string;
  attribution?: string;
  subtitle?: string;
  discussionPrompt?: string;
}

export interface QuizResult {
  studentCode: string;
  lessonId: string;
  grade: number;
  term: number;
  unit: string;
  lessonTitle: string;
  score: number;
  total: number;
  percentage: number;
  dok_level: string;
  domains: string;
  completedAt: string;
}

export interface GradeInfo {
  key: string;
  number: number;
  title: string;
  tagline: string;
  icon: string;
  iconType: 'heart' | 'globe' | 'landmark' | 'crown';
  terms: TermInfo[];
  totalLessons: number;
}

export interface TermInfo {
  key: string;
  number: number;
  title: string;
  units: UnitInfo[];
}

export interface UnitInfo {
  key: string;
  title: string;
  lessonCount: number;
  isPriority: boolean;
  description: string;
}

export interface LessonData {
  title: string;
  week: number;
  domains: string;
  dok: string;
  slo_codes: string;
  objective: string;
  success_criteria: string;
  prior_learning: string;
  activities: string;
  assessment: string;
  resources: string;
  homework: string;
  assessment_type: string;
}

// ═══════════════════════════════════════════════════════════════
// QUIZ QUESTION BANKS PER DOMAIN
// ═══════════════════════════════════════════════════════════════

const domainQuizTemplates: Record<string, { q: string; options: string[]; correct: number; explanation: string }[]> = {
  'S1': [
    { q: 'Which historical event had the most significant impact on the topic discussed?', options: ['The Industrial Revolution', 'The event described in this lesson', 'The French Revolution', 'World War II'], correct: 1, explanation: 'The event described in this lesson is the most directly relevant to the topic being studied.' },
    { q: 'Why is understanding historical chronology important for this topic?', options: ['It helps us memorize dates', 'It shows cause and effect relationships over time', 'It is only needed for exams', 'History has no patterns'], correct: 1, explanation: 'Understanding chronology reveals cause-and-effect relationships and helps us see how events connect across time.' },
    { q: 'What is the primary difference between a primary source and a secondary source?', options: ['Primary sources are more interesting', 'Primary sources are created during the time period studied; secondary sources analyze them later', 'Secondary sources are more accurate', 'There is no difference'], correct: 1, explanation: 'Primary sources are firsthand accounts or evidence from the time period, while secondary sources are later analyses or interpretations.' },
    { q: 'How does studying history help us understand the present?', options: ['It does not help', 'Past events and decisions shape current societies, governments, and cultures', 'It only helps with trivia', 'History repeats itself exactly'], correct: 1, explanation: 'Historical events and decisions directly influence the political, social, and cultural structures we see today.' },
    { q: 'Which skill is MOST important when analyzing historical evidence?', options: ['Memorization', 'Critical thinking and evaluating sources', 'Speed reading', 'Artistic ability'], correct: 1, explanation: 'Critical thinking allows us to evaluate the reliability, bias, and significance of historical evidence.' },
  ],
  'S2': [
    { q: 'What is the primary purpose of government in society?', options: ['To control citizens', 'To organize and protect the community while ensuring rights', 'To collect taxes only', 'To limit freedom'], correct: 1, explanation: 'Government exists to organize society, protect citizens, and ensure their rights are maintained.' },
    { q: 'Which of the following BEST describes civic responsibility?', options: ['Paying taxes only', 'The duties and obligations of citizens to participate in society', 'Voting in elections only', 'Following laws without question'], correct: 1, explanation: 'Civic responsibility encompasses all the duties citizens have to actively participate in and contribute to their community.' },
    { q: 'Why is the rule of law important in a society?', options: ['It allows leaders to do whatever they want', 'It ensures everyone, including leaders, is held to the same standards', 'It only applies to ordinary citizens', 'It limits economic growth'], correct: 1, explanation: 'The rule of law ensures that no one is above the law, creating fairness and accountability in society.' },
    { q: 'How does consultative governance benefit society?', options: ['It slows down decision-making', 'It allows diverse voices to be heard before making decisions', 'It gives all power to one person', 'It eliminates the need for laws'], correct: 1, explanation: 'Consultative governance ensures multiple perspectives are considered, leading to more balanced and representative decisions.' },
    { q: 'What is the relationship between rights and responsibilities?', options: ['They are unrelated', 'Rights come with corresponding responsibilities to exercise them properly', 'Responsibilities are more important', 'Rights are optional'], correct: 1, explanation: 'Every right carries a responsibility — for example, the right to free speech comes with the responsibility to use it respectfully.' },
  ],
  'S3': [
    { q: 'How does geography influence the way people live?', options: ['It has no effect', 'It determines climate, resources, and trade routes that shape cultures and economies', 'It only affects agriculture', 'People adapt geography to fit their needs completely'], correct: 1, explanation: 'Geography fundamentally shapes human civilization through climate, available resources, and access to trade routes.' },
    { q: 'Which geographic feature would MOST likely encourage trade between civilizations?', options: ['A vast desert with no oases', 'A navigable river connecting different regions', 'A high mountain range with no passes', 'A dense jungle with no clear paths'], correct: 1, explanation: 'Navigable rivers provide natural transportation routes that connect different communities and facilitate trade.' },
    { q: 'Why is map literacy an important skill for social studies?', options: ['It is only useful for navigation', 'It helps us understand spatial relationships, patterns, and connections between places', 'Maps are always accurate', 'It is an outdated skill'], correct: 1, explanation: 'Map literacy enables us to visualize and analyze spatial relationships, helping us understand how geography shapes human activity.' },
    { q: 'What is the difference between physical geography and human geography?', options: ['There is no difference', 'Physical geography studies natural features; human geography studies human activities and settlements', 'Physical geography is more important', 'Human geography only studies cities'], correct: 1, explanation: 'Physical geography focuses on natural landforms and climate, while human geography examines how people interact with and shape their environment.' },
    { q: 'How do natural resources affect a country\'s development?', options: ['They have no impact', 'Abundant resources can drive economic growth, while scarcity can create challenges', 'More resources always mean more problems', 'Resources only matter for agriculture'], correct: 1, explanation: 'Natural resources play a crucial role in economic development, trade, and geopolitical influence.' },
  ],
  'S4': [
    { q: 'What is the BEST definition of social cohesion?', options: ['Everyone thinking the same way', 'The willingness of members of a society to cooperate and trust one another', 'Having no disagreements', 'Living in the same neighborhood'], correct: 1, explanation: 'Social cohesion refers to the bonds that hold a society together through trust, cooperation, and shared values, even amid diversity.' },
    { q: 'How does diversity strengthen a community?', options: ['It creates conflict', 'It brings different perspectives, skills, and experiences that enrich society', 'It weakens traditions', 'It has no effect'], correct: 1, explanation: 'Diversity introduces varied perspectives and approaches that lead to innovation, cultural richness, and stronger problem-solving.' },
    { q: 'What is the sociological definition of a community?', options: ['People living in the same building', 'A group of people who share common interests, values, or geographic location', 'Only people related by blood', 'A group with identical opinions'], correct: 1, explanation: 'A community is defined by shared connections — whether geographic, cultural, or interest-based — that create a sense of belonging.' },
    { q: 'Why is tolerance important in a multicultural society?', options: ['It eliminates all differences', 'It allows people with different beliefs and backgrounds to live together peacefully', 'It means agreeing with everything', 'It is only important during festivals'], correct: 1, explanation: 'Tolerance enables peaceful coexistence by respecting differences while maintaining social harmony.' },
    { q: 'How do social institutions (family, school, religion) shape individual behavior?', options: ['They have no influence', 'They teach norms, values, and expectations that guide how people act in society', 'They only affect children', 'They control people completely'], correct: 1, explanation: 'Social institutions are the primary means through which societies transmit values, norms, and behavioral expectations to individuals.' },
  ],
  'S5': [
    { q: 'What is the relationship between needs and wants in economics?', options: ['They are the same thing', 'Needs are essential for survival; wants are desires that improve quality of life', 'Wants are more important', 'Economics only studies needs'], correct: 1, explanation: 'Understanding the difference between needs (necessities) and wants (desires) is fundamental to economic decision-making.' },
    { q: 'Why is financial literacy important for young people?', options: ['It is only for adults', 'It helps them make informed decisions about saving, spending, and investing', 'It only matters for business owners', 'It is not relevant to students'], correct: 1, explanation: 'Financial literacy empowers young people to manage money responsibly and make informed economic choices throughout their lives.' },
    { q: 'What role does entrepreneurship play in an economy?', options: ['It only creates problems', 'It drives innovation, creates jobs, and contributes to economic growth', 'It is only for wealthy people', 'It has minimal impact'], correct: 1, explanation: 'Entrepreneurs create businesses, innovate new solutions, generate employment, and stimulate economic growth.' },
    { q: 'How does the concept of scarcity affect economic decisions?', options: ['It has no effect', 'Limited resources require individuals and societies to make choices about allocation', 'Scarcity only affects poor countries', 'It means there is always enough for everyone'], correct: 1, explanation: 'Scarcity — the fundamental economic problem of limited resources — forces individuals and societies to make choices about how to allocate resources.' },
    { q: 'What is the difference between saving and investing?', options: ['They are the same', 'Saving preserves money with low risk; investing puts money to work for potential growth with higher risk', 'Investing is always better', 'Saving is only for emergencies'], correct: 1, explanation: 'Saving keeps money safe with minimal growth, while investing accepts some risk for the potential of higher returns over time.' },
  ],
  'S6': [
    { q: 'What is the MOST important skill for evaluating online information?', options: ['Reading speed', 'Critical evaluation of source credibility, accuracy, and bias', 'Number of followers the author has', 'How professional the website looks'], correct: 1, explanation: 'Critical evaluation helps determine whether information is reliable, accurate, and free from bias before accepting it as truth.' },
    { q: 'Why is it important to verify information from multiple sources?', options: ['It wastes time', 'It helps confirm accuracy and identify potential bias or misinformation', 'One source is always enough', 'Only academic sources matter'], correct: 1, explanation: 'Cross-referencing multiple sources helps identify inconsistencies, bias, and misinformation, leading to more accurate understanding.' },
    { q: 'What is digital literacy?', options: ['Knowing how to type fast', 'The ability to find, evaluate, create, and communicate information using digital technologies', 'Only knowing how to use social media', 'Being able to code'], correct: 1, explanation: 'Digital literacy encompasses the full range of skills needed to effectively and safely navigate, evaluate, and create content in the digital world.' },
    { q: 'How can you identify potential bias in a news article?', options: ['All news is unbiased', 'Look for one-sided language, missing perspectives, and emotional appeals', 'Check how long the article is', 'See if it has pictures'], correct: 1, explanation: 'Bias can be detected through loaded language, selective presentation of facts, emotional manipulation, and omission of opposing viewpoints.' },
    { q: 'What is the danger of echo chambers in online information consumption?', options: ['There is no danger', 'They reinforce existing beliefs by only exposing people to similar viewpoints, limiting critical thinking', 'They help people learn faster', 'They create better friendships'], correct: 1, explanation: 'Echo chambers limit exposure to diverse perspectives, reinforcing biases and making it harder to develop well-rounded, critical understanding.' },
  ],
  'S7': [
    { q: 'What is the first step in the research process?', options: ['Writing the conclusion', 'Formulating a clear research question', 'Finding sources', 'Creating a presentation'], correct: 1, explanation: 'A clear research question provides focus and direction for the entire research process.' },
    { q: 'Why is it important to cite sources in academic work?', options: ['It makes the paper longer', 'It gives credit to original authors, allows verification, and avoids plagiarism', 'Only teachers care about citations', 'It is optional for short assignments'], correct: 1, explanation: 'Proper citation acknowledges others\' intellectual property, enables verification of claims, and maintains academic integrity.' },
    { q: 'What is the difference between qualitative and quantitative research?', options: ['They are identical', 'Qualitative explores experiences and meanings; quantitative measures numerical data and statistics', 'Quantitative is always better', 'Qualitative is only for arts subjects'], correct: 1, explanation: 'Qualitative research focuses on understanding experiences and meanings through interviews and observations, while quantitative research uses numerical data and statistical analysis.' },
    { q: 'How can you determine if a source is reliable for research?', options: ['If it appears first in search results', 'Check author credentials, publication date, peer review status, and potential bias', 'If it agrees with your opinion', 'If it has a professional website design'], correct: 1, explanation: 'Evaluating author expertise, currency of information, peer review, and objectivity helps determine source reliability.' },
    { q: 'What is the purpose of synthesizing information from multiple sources?', options: ['To copy information directly', 'To create a comprehensive understanding by combining insights from various perspectives', 'To prove one source is wrong', 'To make the research longer'], correct: 1, explanation: 'Synthesis combines and integrates information from multiple sources to create a deeper, more nuanced understanding of a topic.' },
  ],
  'S8': [
    { q: 'What is the difference between morals and ethics?', options: ['They are the same', 'Morals are personal beliefs about right and wrong; ethics are systematic frameworks for moral decision-making', 'Ethics are personal; morals are societal', 'Neither matters in daily life'], correct: 1, explanation: 'Morals are individual beliefs about right and wrong, while ethics provide structured frameworks for making moral decisions in specific contexts.' },
    { q: 'Why is empathy important in moral decision-making?', options: ['It is not relevant', 'It helps us understand others\' perspectives and make more compassionate choices', 'It only matters in personal relationships', 'It makes decisions harder'], correct: 1, explanation: 'Empathy allows us to consider how our actions affect others, leading to more compassionate and ethically sound decisions.' },
    { q: 'What is the Golden Rule in moral philosophy?', options: ['He who has the gold makes the rules', 'Treat others as you would want to be treated', 'Always put yourself first', 'Rules are meant to be broken'], correct: 1, explanation: 'The Golden Rule — treating others as you wish to be treated — is a universal moral principle found across cultures and religions.' },
    { q: 'How do cultural values influence moral judgments?', options: ['They have no influence', 'Cultural values shape what a society considers right or wrong, affecting laws, norms, and behaviors', 'All cultures share identical moral views', 'Cultural values only affect traditions'], correct: 1, explanation: 'Cultural values provide the framework through which societies determine acceptable behavior, influencing both individual and collective moral judgments.' },
    { q: 'What is moral responsibility?', options: ['Blaming others for problems', 'The obligation to act according to moral principles and accept consequences of one\'s actions', 'Following orders without question', 'Only applicable to adults'], correct: 1, explanation: 'Moral responsibility means being accountable for one\'s actions and their consequences, guided by ethical principles.' },
  ],
  'S9': [
    { q: 'What is the significance of the UAE\'s Year of Tolerance (2019)?', options: ['It was just a slogan', 'It demonstrated the UAE\'s commitment to promoting tolerance as a core national value', 'It only applied to that year', 'It was only for tourists'], correct: 1, explanation: 'The Year of Tolerance reflected the UAE\'s deep commitment to making tolerance a fundamental part of society, culture, and policy.' },
    { q: 'How does the UAE promote cultural heritage preservation?', options: ['It does not prioritize heritage', 'Through UNESCO sites, museums, cultural festivals, and government initiatives', 'Only through oral traditions', 'Heritage preservation is left to private organizations only'], correct: 1, explanation: 'The UAE actively preserves heritage through multiple channels including UNESCO World Heritage sites, national museums, and cultural festivals.' },
    { q: 'Why is the majlis system important in UAE governance?', options: ['It is outdated and unused', 'It embodies the traditional Emirati value of consultative decision-making and open dialogue', 'It is only for ceremonial purposes', 'It has been replaced entirely by modern systems'], correct: 1, explanation: 'The majlis represents the UAE\'s tradition of inclusive consultation, allowing community members to voice concerns and participate in governance.' },
    { q: 'How has the UAE\'s approach to tolerance influenced its international relations?', options: ['It has no international impact', 'It has positioned the UAE as a global model for peaceful coexistence and interfaith dialogue', 'It has created conflicts', 'It only affects tourism'], correct: 1, explanation: 'The UAE\'s commitment to tolerance has made it a global leader in promoting peaceful coexistence, hosting interfaith dialogues, and building bridges between cultures.' },
    { q: 'What role does the UAE Constitution play in protecting citizens\' rights?', options: ['It is only symbolic', 'It establishes fundamental rights, freedoms, and the legal framework that protects all residents', 'It only protects UAE nationals', 'It is the same as other countries\' constitutions'], correct: 1, explanation: 'The UAE Constitution establishes the legal foundation for rights, freedoms, and protections that apply to all people in the UAE.' },
  ],
};

// ═══════════════════════════════════════════════════════════════
// OTTOMAN EMPIRE SPECIFIC QUIZ
// ═══════════════════════════════════════════════════════════════

const ottomanQuizQuestions: QuizQuestion[] = [
  { id: 'oq1', question: 'Who founded the Ottoman Empire?', type: 'multiple-choice', options: ['Muhammad al-Fatih', 'Selim I', 'Uthman I in 1299', 'Sulayman the Magnificent'], correctAnswer: 2, explanation: 'Uthman I (Osman I) founded the Ottoman Empire in 1299, leading a small Turkoman principality in Anatolia.' },
  { id: 'oq2', question: 'The Battle of Manzikert (1071) was fought by which empire?', type: 'multiple-choice', options: ['Ottoman Empire', 'Great Seljuk Empire', 'Mamluk Sultanate', 'Byzantine Empire alone'], correctAnswer: 1, explanation: 'The Battle of Manzikert was fought by the Great Seljuk Empire under Sultan Alp Arslan — over 200 years before the Ottomans existed!' },
  { id: 'oq3', question: 'Why was the conquest of Constantinople (1453) so significant?', type: 'multiple-choice', options: ['It was the fulfillment of a Prophetic glad tiding', 'It simply made the Ottomans wealthy', 'It was the first city ever conquered by Muslims', 'It had no religious significance'], correctAnswer: 0, explanation: 'The conquest fulfilled the hadith: "You shall conquer Constantinople. Blessed is its commander and blessed is its army."' },
  { id: 'oq4', question: 'What title did the Ottoman Sultan take after conquering the Arab lands?', type: 'multiple-choice', options: ['King of the Middle East', 'Khadim al-Haramayn al-Sharifayn', 'Emperor of Rome', 'Commander of the Indian Ocean'], correctAnswer: 1, explanation: '"Khadim al-Haramayn al-Sharifayn" means "Servant of the Two Noble Sanctuaries" — Makkah and Madinah.' },
  { id: 'oq5', question: 'Which battle opened Anatolia to Turkic migration over 200 years before the Ottoman Empire was founded?', type: 'multiple-choice', options: ['Battle of Mohács (1526)', 'Battle of Manzikert (1071)', 'Battle of Lepanto (1571)', 'Battle of Vienna (1683)'], correctAnswer: 1, explanation: 'The Battle of Manzikert (1071) opened Anatolia to Turkic migration, setting the stage for the Ottoman Empire\'s founding.' },
];

// ═══════════════════════════════════════════════════════════════
// TOPIC-SPECIFIC QUIZ BANKS
// ═══════════════════════════════════════════════════════════════

const topicQuizBanks: Record<string, QuizQuestion[]> = {
  'Equality and Justice': [
    { id: 'eq1', question: 'What is the difference between equality and equity?', type: 'multiple-choice', options: ['They mean the same thing', 'Equality gives everyone the same; equity gives everyone what they need to succeed', 'Equity is more important than equality', 'Equality only applies to law'], correctAnswer: 1, explanation: 'Equality means treating everyone the same, while equity means providing each person with what they need to have equal opportunity.' },
    { id: 'eq2', question: 'Which of the following is an example of distributive justice?', type: 'multiple-choice', options: ['Everyone receives the same salary regardless of job', 'Resources are allocated based on need, contribution, and fairness', 'The government controls all resources', 'Only the wealthy receive resources'], correctAnswer: 1, explanation: 'Distributive justice considers multiple factors including need, contribution, and fairness when allocating resources.' },
    { id: 'eq3', question: 'How does the UAE promote equality among its residents?', type: 'multiple-choice', options: ['By treating everyone exactly the same', 'Through laws that protect rights regardless of background, and initiatives promoting inclusion', 'By ignoring differences', 'Equality is not a UAE value'], correctAnswer: 1, explanation: 'The UAE promotes equality through constitutional protections, anti-discrimination laws, and inclusive national initiatives.' },
    { id: 'eq4', question: 'What role does fairness play in leadership?', type: 'multiple-choice', options: ['It is not relevant', 'Fair leaders build trust, ensure justice, and create conditions for everyone to thrive', 'Fairness means treating everyone identically', 'Leaders should focus on efficiency, not fairness'], correctAnswer: 1, explanation: 'Fair leadership builds trust and creates an environment where all members of society can contribute and succeed.' },
    { id: 'eq5', question: 'Why is justice considered a foundation of a stable society?', type: 'multiple-choice', options: ['It is not necessary for stability', 'It ensures rights are protected, disputes are resolved fairly, and people trust institutions', 'Justice only matters in courts', 'Stability comes from power, not justice'], correctAnswer: 1, explanation: 'Justice creates the conditions for social stability by ensuring fair treatment, protecting rights, and maintaining public trust in institutions.' },
  ],
  'Physical Health': [
    { id: 'ph1', question: 'What are the three pillars of a healthy lifestyle?', type: 'multiple-choice', options: ['Medication, rest, and supplements', 'Balanced diet, regular exercise, and adequate sleep', 'Only exercise matters', 'Avoiding all unhealthy food'], correctAnswer: 1, explanation: 'A healthy lifestyle is built on three essential pillars: proper nutrition, physical activity, and sufficient rest.' },
    { id: 'ph2', question: 'How does regular exercise benefit mental health?', type: 'multiple-choice', options: ['It has no effect on mental health', 'It releases endorphins, reduces stress, and improves mood and cognitive function', 'It only benefits physical health', 'Exercise causes more stress'], correctAnswer: 1, explanation: 'Exercise triggers the release of endorphins and other neurotransmitters that reduce stress and improve mental well-being.' },
    { id: 'ph3', question: 'What is the difference between communicable and non-communicable diseases?', type: 'multiple-choice', options: ['They are the same thing', 'Communicable diseases spread between people; non-communicable diseases develop from other factors', 'Non-communicable diseases are more contagious', 'Communicable diseases are always more serious'], correctAnswer: 1, explanation: 'Communicable diseases can spread from person to person, while non-communicable diseases develop from genetic, environmental, or lifestyle factors.' },
    { id: 'ph4', question: 'Why is disease prevention more effective than treatment?', type: 'multiple-choice', options: ['Treatment is always better', 'Prevention reduces suffering, costs less, and protects entire communities', 'Prevention only works for some diseases', 'Disease is inevitable'], correctAnswer: 1, explanation: 'Prevention is more effective because it avoids suffering, reduces healthcare costs, and can protect entire populations through vaccination and hygiene.' },
    { id: 'ph5', question: 'How does the UAE support public health?', type: 'multiple-choice', options: ['It does not prioritize health', 'Through healthcare infrastructure, public health campaigns, vaccination programs, and health insurance', 'Only through private hospitals', 'Healthcare is only for citizens'], correctAnswer: 1, explanation: 'The UAE invests heavily in public health through world-class hospitals, preventive campaigns, mandatory health insurance, and vaccination programs.' },
  ],
  'East Asia': [
    { id: 'ea1', question: 'Which geographic feature MOST influenced the development of Chinese civilization?', type: 'multiple-choice', options: ['The Himalayan Mountains', 'The Yellow River (Huang He) valley providing fertile land and water', 'The Pacific Ocean coastline', 'The Gobi Desert'], correctAnswer: 1, explanation: 'The Yellow River valley provided the fertile soil and water resources that enabled early Chinese civilization to flourish.' },
    { id: 'ea2', question: 'What was the significance of the Great Wall of China?', type: 'multiple-choice', options: ['It was only symbolic', 'It served as a defensive barrier against northern invasions and helped unify Chinese territories', 'It was built in a single dynasty', 'It separated China from Japan'], correctAnswer: 1, explanation: 'The Great Wall served as both a military defense and a symbol of Chinese unity, built and maintained across multiple dynasties.' },
    { id: 'ea3', question: 'Which Chinese invention had the GREATEST impact on the spread of knowledge?', type: 'multiple-choice', options: ['Gunpowder', 'Paper and the printing press', 'The compass', 'Silk'], correctAnswer: 1, explanation: 'Paper and printing technology revolutionized the spread of knowledge, making books accessible and enabling the preservation and dissemination of ideas.' },
    { id: 'ea4', question: 'What was the Joseon Dynasty known for?', type: 'multiple-choice', options: ['Military conquest', 'Cultural achievements, Confucian scholarship, and Hangul script creation', 'Isolation from all trade', 'Only warfare'], correctAnswer: 1, explanation: 'The Joseon Dynasty (1392-1910) is renowned for its cultural achievements, particularly the creation of Hangul, the Korean alphabet, and advances in Confucian scholarship.' },
    { id: 'ea5', question: 'How did the Silk Road connect East Asia to the rest of the world?', type: 'multiple-choice', options: ['It was only for silk trade', 'It facilitated trade, cultural exchange, and the spread of ideas, religions, and technologies', 'It connected only China and Europe', 'It was a single road'], correctAnswer: 1, explanation: 'The Silk Road was a network of trade routes that exchanged not just goods but also culture, religion, technology, and ideas between East and West.' },
  ],
  'Global Ethics': [
    { id: 'ge1', question: 'What distinguishes a global ethical issue from a local one?', type: 'multiple-choice', options: ['There is no difference', 'Global ethical issues affect people across nations and require international cooperation to address', 'Global issues are always more important', 'Local issues cannot become global'], correctAnswer: 1, explanation: 'Global ethical issues transcend national boundaries and affect humanity as a whole, requiring coordinated international responses.' },
    { id: 'ge2', question: 'How does the UAE contribute to addressing global ethical challenges?', type: 'multiple-choice', options: ['It does not participate in global issues', 'Through humanitarian aid, peacekeeping, climate initiatives, and hosting international dialogues', 'Only through financial donations', 'By focusing only on local issues'], correctAnswer: 1, explanation: 'The UAE actively contributes through foreign aid, peacekeeping missions, renewable energy investments, and hosting international forums for dialogue.' },
    { id: 'ge3', question: 'Why is international cooperation essential for solving global challenges?', type: 'multiple-choice', options: ['Countries can solve all problems alone', 'Global challenges cross borders and require coordinated resources, knowledge, and policies', 'Cooperation always fails', 'Only wealthy nations need to act'], correctAnswer: 1, explanation: 'Global challenges like climate change, pandemics, and poverty transcend borders and require collective action that no single nation can achieve alone.' },
    { id: 'ge4', question: 'What is the relationship between human rights and global ethics?', type: 'multiple-choice', options: ['They are unrelated', 'Human rights provide the universal moral framework that underpins global ethical standards', 'Human rights only apply locally', 'Global ethics overrides human rights'], correctAnswer: 1, explanation: 'Human rights establish universal moral standards that form the foundation for global ethical decision-making and international law.' },
    { id: 'ge5', question: 'How can individuals contribute to global ethical solutions?', type: 'multiple-choice', options: ['Individuals cannot make a difference', 'Through informed choices, advocacy, community engagement, and responsible consumption', 'Only governments can solve global problems', 'Donating money is the only way'], correctAnswer: 1, explanation: 'Individuals contribute through everyday choices, raising awareness, participating in community initiatives, and holding institutions accountable.' },
  ],
  'Financial Awareness': [
    { id: 'fa1', question: 'What is the difference between needs and wants in financial planning?', type: 'multiple-choice', options: ['They are the same', 'Needs are essential for survival; wants improve quality of life but are not essential', 'Wants are always bad purchases', 'Needs only include food'], correctAnswer: 1, explanation: 'Distinguishing needs from wants is the foundation of smart financial planning and responsible spending.' },
    { id: 'fa2', question: 'Why is saving money important even for young people?', type: 'multiple-choice', options: ['It is only important for adults', 'It builds financial security, teaches discipline, and prepares for future opportunities and emergencies', 'Saving means never spending', 'Young people don\'t earn enough to save'], correctAnswer: 1, explanation: 'Early saving habits build financial security, create opportunities, and develop the discipline needed for lifelong financial health.' },
    { id: 'fa3', question: 'What makes an entrepreneur successful?', type: 'multiple-choice', options: ['Only having a lot of money', 'Identifying problems, creating solutions, taking calculated risks, and persevering through challenges', 'Being lucky', 'Copying what others do'], correctAnswer: 1, explanation: 'Successful entrepreneurs combine problem-solving, innovation, risk management, and persistence to create value.' },
    { id: 'fa4', question: 'How can wealth be a force for good in society?', type: 'multiple-choice', options: ['Wealth only benefits the wealthy', 'Through philanthropy, job creation, investment in community development, and supporting education', 'Wealth always causes problems', 'It cannot benefit society'], correctAnswer: 1, explanation: 'Responsible wealth management includes giving back through philanthropy, creating employment, and investing in community development.' },
    { id: 'fa5', question: 'What is the concept of opportunity cost?', type: 'multiple-choice', options: ['The price of a product', 'The value of the next best alternative you give up when making a choice', 'The cost of opportunities', 'A business term only'], correctAnswer: 1, explanation: 'Opportunity cost is the value of what you sacrifice when choosing one option over another — a key concept in all financial decisions.' },
  ],
  'UAE History': [
    { id: 'uh1', question: 'What is the significance of Jebel Faya in UAE history?', type: 'multiple-choice', options: ['It is just a mountain', 'It contains archaeological evidence of some of the earliest human settlement in the region', 'It is a modern tourist attraction', 'It was the site of a major battle'], correctAnswer: 1, explanation: 'Jebel Faya has yielded stone tools dating back over 125,000 years, providing evidence of early human migration and settlement.' },
    { id: 'uh2', question: 'How did the falaj system transform life in the UAE?', type: 'multiple-choice', options: ['It had no significant impact', 'It enabled agriculture in arid areas by distributing water through underground channels', 'It was only used for drinking water', 'It was imported from Europe'], correctAnswer: 1, explanation: 'The falaj irrigation system was an engineering marvel that allowed communities to farm in desert conditions by efficiently channeling water from underground sources.' },
    { id: 'uh3', question: 'What role did Ed-Dur play in ancient Arabian Gulf trade?', type: 'multiple-choice', options: ['It was a minor village', 'It was a major trading port connecting Mesopotamia, India, and the Mediterranean', 'It was only a fishing village', 'It had no trade connections'], correctAnswer: 1, explanation: 'Ed-Dur was one of the most important trading ports in the region, facilitating trade between major civilizations across the ancient world.' },
    { id: 'uh4', question: 'Why is the Bronze Age important in UAE history?', type: 'multiple-choice', options: ['It has no relevance', 'It marks the beginning of metallurgy, long-distance trade, and more complex social structures', 'It was a time of decline', 'Only the Iron Age matters'], correctAnswer: 1, explanation: 'The Bronze Age saw technological advances in metalworking, the establishment of trade networks, and the development of more complex societies in the UAE.' },
    { id: 'uh5', question: 'How did shipbuilding contribute to UAE\'s historical development?', type: 'multiple-choice', options: ['It was only for fishing', 'It enabled pearl diving, trade, and cultural exchange across the Arabian Gulf and Indian Ocean', 'Ships were built by foreign workers only', 'It had no economic impact'], correctAnswer: 1, explanation: 'Shipbuilding was essential to the UAE\'s economy, enabling the pearl industry, international trade, and cultural connections that shaped the region.' },
  ],
  'African Civilizations': [
    { id: 'ac1', question: 'Which African civilization was known for its wealth and trade routes across the Sahara?', type: 'multiple-choice', options: ['The Zulu Kingdom', 'The Mali Empire and Songhai Empire', 'The Roman Empire', 'The Ottoman Empire'], correctAnswer: 1, explanation: 'The Mali and Songhai Empires controlled major trans-Saharan trade routes and were among the wealthiest civilizations of their time.' },
    { id: 'ac2', question: 'What role did Islam play in West African civilizations?', type: 'multiple-choice', options: ['It had no influence', 'It influenced law, education, architecture, and trade connections across the Muslim world', 'It was only practiced by rulers', 'It replaced all indigenous traditions'], correctAnswer: 1, explanation: 'Islam profoundly shaped West African civilizations through educational institutions like Timbuktu, legal systems, architecture, and trade networks.' },
    { id: 'ac3', question: 'What was the significance of Timbuktu?', type: 'multiple-choice', options: ['It was only a trading post', 'It was a center of Islamic learning with one of the world\'s oldest universities and extensive libraries', 'It was a military fortress', 'It was an unimportant village'], correctAnswer: 1, explanation: 'Timbuktu was a renowned center of scholarship, housing the University of Sankore and hundreds of thousands of manuscripts.' },
    { id: 'ac4', question: 'How did Africa\'s geography influence its civilizations?', type: 'multiple-choice', options: ['Geography had no effect', 'Diverse landscapes from Sahara to rainforests created different civilizations with unique adaptations', 'Only the coast was inhabitable', 'The entire continent was desert'], correctAnswer: 1, explanation: 'Africa\'s diverse geography — from the Sahara to savannas to rainforests — shaped distinct civilizations with unique cultural and economic systems.' },
    { id: 'ac5', question: 'What impact did colonialism have on African civilizations?', type: 'multiple-choice', options: ['It had no lasting effects', 'It disrupted societies, exploited resources, imposed borders, and created challenges that persist today', 'It only brought positive changes', 'Colonialism lasted only a few years'], correctAnswer: 1, explanation: 'Colonialism profoundly disrupted African societies, exploited natural resources, imposed arbitrary borders, and created political and economic challenges that continue to affect the continent.' },
  ],
  'South Asia': [
    { id: 'sa1', question: 'Which river system was the cradle of ancient Indian civilization?', type: 'multiple-choice', options: ['The Nile', 'The Indus River valley', 'The Amazon', 'The Danube'], correctAnswer: 1, explanation: 'The Indus Valley Civilization, one of the world\'s oldest, flourished along the Indus River in what is now Pakistan and northwest India.' },
    { id: 'sa2', question: 'What was the Mauryan Empire known for?', type: 'multiple-choice', options: ['Only military conquest', 'Political unity, Ashoka\'s Buddhist reforms, and advances in governance and trade', 'Its isolation from the world', 'Only religious activities'], correctAnswer: 1, explanation: 'The Mauryan Empire unified much of South Asia and is particularly known for Emperor Ashoka\'s embrace of Buddhism and welfare policies.' },
    { id: 'sa3', question: 'How did Islamic civilization influence South Asia?', type: 'multiple-choice', options: ['It had no significant impact', 'It introduced new architectural styles, legal systems, languages, and cultural traditions', 'It only affected religion', 'It replaced all existing cultures'], correctAnswer: 1, explanation: 'Islamic civilization brought Persian-influenced architecture, new literary traditions, legal systems, and a rich cultural synthesis that shaped South Asian identity.' },
    { id: 'sa4', question: 'What was the impact of British colonialism on South Asia?', type: 'multiple-choice', options: ['It had no lasting effects', 'It modernized infrastructure but exploited resources and created social and political divisions', 'It only brought benefits', 'British rule was welcomed by all'], correctAnswer: 1, explanation: 'British colonialism introduced modern infrastructure but exploited resources, created communal divisions, and left lasting political challenges.' },
    { id: 'sa5', question: 'What is the significance of the Silk Road for South Asia?', type: 'multiple-choice', options: ['It bypassed South Asia entirely', 'It connected South Asia to Central Asia, China, and Europe, facilitating trade and cultural exchange', 'It was only used for silk', 'It was unimportant for the region'], correctAnswer: 1, explanation: 'The Silk Road made South Asia a crucial hub connecting East and West, enabling the exchange of goods, ideas, and cultural practices.' },
  ],
  'Central Asia': [
    { id: 'ca1', question: 'What was the primary purpose of the Silk Road?', type: 'multiple-choice', options: ['Military conquest', 'Trade and cultural exchange between East and West', 'Only transporting silk', 'Religious pilgrimages only'], correctAnswer: 1, explanation: 'The Silk Road was a vast network of trade routes connecting civilizations, facilitating exchange of goods, ideas, religions, and technologies.' },
    { id: 'ca2', question: 'Which Central Asian country has the largest economy?', type: 'multiple-choice', options: ['Kyrgyzstan', 'Kazakhstan', 'Tajikistan', 'Turkmenistan'], correctAnswer: 1, explanation: 'Kazakhstan has the largest economy in Central Asia, driven by its vast oil, gas, and mineral resources.' },
    { id: 'ca3', question: 'How did the Soviet era affect Central Asia?', type: 'multiple-choice', options: ['It had no impact', 'It industrialized the region but also suppressed local cultures and created environmental damage', 'It only brought prosperity', 'Central Asia was not part of the USSR'], correctAnswer: 1, explanation: 'Soviet rule brought industrialization and education but also suppressed local traditions, restructured societies, and caused significant environmental damage.' },
    { id: 'ca4', question: 'What cultural traditions are shared across Central Asian countries?', type: 'multiple-choice', options: ['They share no traditions', 'Nomadic heritage, hospitality customs, similar cuisine, and Islamic cultural influence', 'Only religious practices', 'Only modern Western culture'], correctAnswer: 1, explanation: 'Central Asian countries share deep nomadic roots, strong hospitality traditions, similar foods like plov, and centuries of Islamic cultural influence.' },
    { id: 'ca5', question: 'Why is Uzbekistan historically significant?', type: 'multiple-choice', options: ['It has no historical significance', 'It contains Samarkand and Bukhara, major Silk Road cities that were centers of trade and learning', 'It was always isolated', 'It was only important in modern times'], correctAnswer: 1, explanation: 'Uzbekistan\'s cities of Samarkand and Bukhara were among the most important and cultured cities on the Silk Road, known for scholarship, trade, and stunning architecture.' },
  ],
  'North and South America': [
    { id: 'na1', question: 'Which indigenous civilization built Machu Picchu?', type: 'multiple-choice', options: ['The Aztecs', 'The Inca', 'The Maya', 'The Navajo'], correctAnswer: 1, explanation: 'Machu Picchu was built by the Inca Empire in the Andes Mountains of modern-day Peru.' },
    { id: 'na2', question: 'What was the impact of European colonization on indigenous peoples of the Americas?', type: 'multiple-choice', options: ['It had no negative effects', 'It caused disease, displacement, cultural destruction, and loss of land and sovereignty', 'It only brought technology', 'Indigenous peoples benefited equally'], correctAnswer: 1, explanation: 'European colonization devastated indigenous populations through disease, forced displacement, cultural suppression, and systematic loss of land and autonomy.' },
    { id: 'na3', question: 'What was the main cause of the American Civil War?', type: 'multiple-choice', options: ['Taxation disputes', 'Disagreements over slavery and states\' rights versus federal authority', 'Border disputes with Mexico', 'Religious conflicts'], correctAnswer: 1, explanation: 'The Civil War was fundamentally caused by the conflict between slave-holding Southern states and abolitionist Northern states over the future of slavery and federal authority.' },
    { id: 'na4', question: 'How did the Age of Discovery affect the Americas?', type: 'multiple-choice', options: ['It had no lasting impact', 'It led to European colonization, the Columbian Exchange, and the transformation of both hemispheres', 'It only affected Europe', 'Indigenous peoples welcomed all explorers'], correctAnswer: 1, explanation: 'The Age of Discovery initiated European colonization and the Columbian Exchange, permanently transforming both the Americas and Europe through the exchange of peoples, goods, and ideas.' },
    { id: 'na5', question: 'What geographic feature dominates South America?', type: 'multiple-choice', options: ['Deserts', 'The Amazon Rainforest and the Andes Mountains', 'Grasslands only', 'Arctic tundra'], correctAnswer: 1, explanation: 'The Amazon Rainforest — the world\'s largest — and the Andes — the longest continental mountain range — define South America\'s geography.' },
  ],
  'Governance': [
    { id: 'gv1', question: 'What is the purpose of the UAE Federal National Council (FNC)?', type: 'multiple-choice', options: ['It has no real purpose', 'It serves as the consultative body representing the people in federal legislation and oversight', 'It only meets once a year', 'It replaces the rulers of each emirate'], correctAnswer: 1, explanation: 'The FNC is the UAE\'s consultative parliamentary body that reviews legislation, questions ministers, and represents the interests of citizens.' },
    { id: 'gv2', question: 'How does the UAE Constitution divide power?', type: 'multiple-choice', options: ['All power is with one person', 'It establishes federal authorities (executive, legislative, judicial) while preserving emirate-level governance', 'There is no division of power', 'Each emirate is completely independent'], correctAnswer: 1, explanation: 'The UAE Constitution creates a federal system with distinct executive, legislative, and judicial authorities while respecting the autonomy of individual emirates.' },
    { id: 'gv3', question: 'What is the role of the majlis in UAE governance?', type: 'multiple-choice', options: ['It is only a social gathering', 'It provides a traditional forum for citizens to voice concerns directly to their rulers', 'It replaces all modern governance', 'It is only for important occasions'], correctAnswer: 1, explanation: 'The majlis is a cornerstone of Emirati governance, providing direct access to leaders for consultation, problem-solving, and community engagement.' },
    { id: 'gv4', question: 'Why is the rule of law important in the UAE?', type: 'multiple-choice', options: ['It is not relevant', 'It ensures equality before the law, protects rights, and provides stability for society and economy', 'It only applies to certain people', 'It limits development'], correctAnswer: 1, explanation: 'The rule of law creates a stable, predictable environment where rights are protected, businesses can thrive, and all individuals are treated fairly.' },
    { id: 'gv5', question: 'How does the UAE balance tradition and modernization in governance?', type: 'multiple-choice', options: ['It chooses one over the other', 'It preserves traditional consultative practices while adopting modern technologies and systems', 'Tradition is abandoned', 'Modernization is resisted'], correctAnswer: 1, explanation: 'The UAE successfully integrates traditional governance values like the majlis with cutting-edge smart government initiatives and digital services.' },
  ],
  'Diversity': [
    { id: 'dv1', question: 'What is the difference between tolerance and acceptance?', type: 'multiple-choice', options: ['They mean the same thing', 'Tolerance endures differences; acceptance embraces and values them as positive', 'Tolerance is better than acceptance', 'Acceptance means agreeing with everything'], correctAnswer: 1, explanation: 'Tolerance means putting up with differences, while acceptance goes further by genuinely embracing and valuing diversity.' },
    { id: 'dv2', question: 'How does the UAE model cultural diversity?', type: 'multiple-choice', options: ['It does not prioritize diversity', 'It hosts over 200 nationalities living and working together, supported by tolerance policies', 'Only Emirati culture is valued', 'Diversity creates problems in the UAE'], correctAnswer: 1, explanation: 'The UAE is one of the world\'s most diverse nations, with over 200 nationalities coexisting under policies that promote tolerance and mutual respect.' },
    { id: 'dv3', question: 'What is prejudice and how can it be overcome?', type: 'multiple-choice', options: ['Prejudice cannot be overcome', 'Prejudice is a preconceived negative judgment; it can be overcome through education, contact, and empathy', 'Prejudice is always justified', 'Ignoring differences eliminates prejudice'], correctAnswer: 1, explanation: 'Prejudice is a negative judgment made without knowledge. Education, meaningful intergroup contact, and empathy are proven strategies for reducing prejudice.' },
    { id: 'dv4', question: 'Why is celebrating diversity important in schools?', type: 'multiple-choice', options: ['It is not important', 'It creates inclusive environments, reduces bullying, and prepares students for a globalized world', 'It creates division', 'Schools should focus only on academics'], correctAnswer: 1, explanation: 'Celebrating diversity in schools creates safe, inclusive environments that foster respect and prepare students for life in a multicultural world.' },
    { id: 'dv5', question: 'What is the UAE Anti-Discrimination Law?', type: 'multiple-choice', options: ['It does not exist', 'It prohibits all forms of discrimination based on religion, race, ethnicity, or origin', 'It only applies to citizens', 'It only covers workplace discrimination'], correctAnswer: 1, explanation: 'The UAE\'s Anti-Discrimination Law comprehensively prohibits discrimination and hate speech based on religion, race, ethnicity, or national origin.' },
  ],
  'Digital Challenge': [
    { id: 'dc1', question: 'What is the MOST important step to protect your privacy online?', type: 'multiple-choice', options: ['Never use the internet', 'Being cautious about what personal information you share and with whom', 'Using only social media', 'Deleting your accounts'], correctAnswer: 1, explanation: 'Being mindful about what personal information you share online is the first and most important step in protecting your digital privacy.' },
    { id: 'dc2', question: 'What is cyberbullying and how should you respond to it?', type: 'multiple-choice', options: ['It is not a real problem', 'It is bullying using digital technologies; respond by saving evidence, reporting, and seeking support', 'You should respond with aggression', 'It will stop on its own'], correctAnswer: 1, explanation: 'Cyberbullying is harassment through digital means. The correct response is to document evidence, report to authorities, and seek support.' },
    { id: 'dc3', question: 'How can you identify a phishing attempt?', type: 'multiple-choice', options: ['All emails are safe', 'Look for urgent language, suspicious links, requests for personal information, and incorrect sender addresses', 'Phishing only happens on social media', 'It is impossible to identify phishing'], correctAnswer: 1, explanation: 'Phishing attempts often use urgent language, fake sender addresses, suspicious links, and requests for personal information.' },
    { id: 'dc4', question: 'Why is it important to think critically about information found online?', type: 'multiple-choice', options: ['All online information is accurate', 'Anyone can publish online, so not all information is reliable or truthful', 'Only academic websites have accurate information', 'Critical thinking is not needed online'], correctAnswer: 1, explanation: 'The open nature of the internet means anyone can publish content, making critical evaluation essential for identifying reliable information.' },
    { id: 'dc5', question: 'What is a digital footprint?', type: 'multiple-choice', options: ['It has no consequences', 'It is the trail of data you leave online through your activities and posts', 'It is only about social media', 'It disappears over time'], correctAnswer: 1, explanation: 'Your digital footprint is the permanent record of your online activities. It can affect future opportunities and reputation.' },
  ],
  'Heritage': [
    { id: 'ht1', question: 'Why is preserving cultural heritage important?', type: 'multiple-choice', options: ['It is not important', 'It maintains identity, connects generations, supports tourism, and preserves knowledge and traditions', 'Only old buildings matter', 'Heritage prevents modernization'], correctAnswer: 1, explanation: 'Cultural heritage preservation maintains community identity, transmits knowledge across generations, and supports economic development through tourism.' },
    { id: 'ht2', question: 'What are the UAE\'s UNESCO World Heritage Sites?', type: 'multiple-choice', options: ['The UAE has no UNESCO sites', 'Al Ain (including Hili, Hafit, Bidaa Bint Saud, and the oases)', 'Only modern buildings in Dubai', 'All heritage sites are in Abu Dhabi city'], correctAnswer: 1, explanation: 'Al Ain\'s cultural sites, including Hili Tombs, Jebel Hafit tombs, Bidaa Bint Saud, and the oases system, are the UAE\'s first UNESCO World Heritage Site.' },
    { id: 'ht3', question: 'How can young people contribute to heritage preservation?', type: 'multiple-choice', options: ['They cannot contribute', 'By learning about traditions, documenting oral histories, visiting heritage sites, and sharing knowledge', 'Only old people can preserve heritage', 'Heritage is only the government\'s responsibility'], correctAnswer: 1, explanation: 'Young people play a vital role by learning, documenting, and actively participating in preserving and transmitting cultural heritage.' },
    { id: 'ht4', question: 'What is the difference between tangible and intangible heritage?', type: 'multiple-choice', options: ['There is no difference', 'Tangible heritage includes physical sites and objects; intangible includes traditions, skills, and practices', 'Intangible heritage is less important', 'Only tangible heritage needs protection'], correctAnswer: 1, explanation: 'Tangible heritage includes buildings, artifacts, and sites, while intangible heritage encompasses traditions, oral histories, crafts, and cultural practices.' },
    { id: 'ht5', question: 'How does heritage tourism benefit the UAE?', type: 'multiple-choice', options: ['It has no economic benefit', 'It creates jobs, promotes cultural understanding, generates revenue, and encourages preservation efforts', 'It only benefits foreign tourists', 'It damages heritage sites'], correctAnswer: 1, explanation: 'Heritage tourism drives economic growth through job creation, cultural exchange, revenue generation, and provides funding incentives for preservation.' },
  ],
  'Conflict': [
    { id: 'cf1', question: 'What is the difference between internal and external conflicts?', type: 'multiple-choice', options: ['They are the same', 'Internal conflicts occur within a person or group; external conflicts occur between different groups or nations', 'External conflicts are always worse', 'Internal conflicts only affect individuals'], correctAnswer: 1, explanation: 'Internal conflicts happen within a community or individual, while external conflicts occur between separate groups, nations, or organizations.' },
    { id: 'cf2', question: 'What is the MOST effective approach to resolving conflicts?', type: 'multiple-choice', options: ['Avoiding the conflict', 'Open communication, understanding different perspectives, and finding mutually acceptable solutions', 'Always compromising', 'Letting the strongest side win'], correctAnswer: 1, explanation: 'Effective conflict resolution requires active listening, understanding all perspectives, and working toward solutions that address the needs of all parties.' },
    { id: 'cf3', question: 'How does the UAE promote peace and conflict resolution internationally?', type: 'multiple-choice', options: ['It does not participate in peace efforts', 'Through diplomatic mediation, hosting peace talks, humanitarian aid, and supporting international organizations', 'Only through military intervention', 'By avoiding all international conflicts'], correctAnswer: 1, explanation: 'The UAE actively promotes peace through diplomatic initiatives, mediating conflicts, providing humanitarian assistance, and supporting international peacekeeping.' },
    { id: 'cf4', question: 'What role does empathy play in conflict resolution?', type: 'multiple-choice', options: ['It is not helpful', 'It helps parties understand each other\'s feelings and perspectives, reducing hostility and opening dialogue', 'Empathy means agreeing with the other side', 'It only works in personal conflicts'], correctAnswer: 1, explanation: 'Empathy allows conflicting parties to see situations from each other\'s perspectives, creating the understanding needed for meaningful dialogue and resolution.' },
    { id: 'cf5', question: 'What are the long-term consequences of unresolved conflicts?', type: 'multiple-choice', options: ['Conflicts always resolve naturally', 'They can escalate, cause lasting damage to relationships, create cycles of violence, and destabilize societies', 'They only affect the people directly involved', 'Time always heals conflicts'], correctAnswer: 1, explanation: 'Unresolved conflicts tend to escalate over time, damaging relationships, creating cycles of retaliation, and potentially destabilizing entire communities or nations.' },
  ],
  'Citizen': [
    { id: 'cz1', question: 'What does it mean to be an active citizen?', type: 'multiple-choice', options: ['Only voting in elections', 'Participating in community life, respecting laws, contributing to society, and advocating for positive change', 'Paying taxes only', 'Following rules without questioning them'], correctAnswer: 1, explanation: 'Active citizenship goes beyond basic obligations — it means engaging with your community, contributing positively, and working to improve society.' },
    { id: 'cz2', question: 'How does the UAE encourage civic engagement among youth?', type: 'multiple-choice', options: ['It does not involve youth', 'Through youth councils, volunteer programs, leadership initiatives, and educational programs', 'Only through school activities', 'Youth are too young for civic engagement'], correctAnswer: 1, explanation: 'The UAE actively engages youth through structured programs like youth councils, volunteer platforms, and leadership development initiatives.' },
    { id: 'cz3', question: 'What are the responsibilities of UAE citizens?', type: 'multiple-choice', options: ['They have no responsibilities', 'Respecting the constitution, obeying laws, contributing to national development, and preserving heritage', 'Only paying taxes', 'Military service only'], correctAnswer: 1, explanation: 'UAE citizens have responsibilities including respecting the constitution, following laws, contributing to national progress, and preserving Emirati heritage and values.' },
    { id: 'cz4', question: 'How can civic engagement strengthen a community?', type: 'multiple-choice', options: ['It creates more problems', 'It builds social bonds, addresses community needs, and creates a sense of shared responsibility', 'It is only for leaders', 'It weakens individual rights'], correctAnswer: 1, explanation: 'Civic engagement strengthens communities by building connections between people, addressing shared challenges, and fostering collective responsibility.' },
    { id: 'cz5', question: 'What is the relationship between rights and civic duties?', type: 'multiple-choice', options: ['They are unrelated', 'Rights are protected when citizens fulfill their duties; duties give meaning to rights', 'Rights are more important', 'Duties are more important'], correctAnswer: 1, explanation: 'Rights and duties are interdependent — citizens enjoy rights when they fulfill their responsibilities, and fulfilling duties gives purpose and protection to those rights.' },
  ],
  '21st Century': [
    { id: 'tc1', question: 'What is the knowledge economy?', type: 'multiple-choice', options: ['An economy based only on manufacturing', 'An economy where growth depends on information, technology, and intellectual capabilities', 'It is the same as a traditional economy', 'It only applies to developed nations'], correctAnswer: 1, explanation: 'A knowledge economy relies on intellectual capabilities and information technology rather than physical inputs as the primary drivers of growth.' },
    { id: 'tc2', question: 'How is the UAE transitioning to a knowledge economy?', type: 'multiple-choice', options: ['It is not transitioning', 'Through investments in education, technology, innovation hubs, and diversifying beyond oil', 'By reducing all technology', 'By copying other countries exactly'], correctAnswer: 1, explanation: 'The UAE is investing heavily in education, R&D, smart infrastructure, and innovation to build a post-oil knowledge economy.' },
    { id: 'tc3', question: 'What role does sustainability play in the UAE\'s future?', type: 'multiple-choice', options: ['It is not a priority', 'It ensures long-term development by balancing economic growth with environmental protection and social well-being', 'Sustainability slows development', 'It only applies to energy'], correctAnswer: 1, explanation: 'Sustainability ensures that current development meets present needs without compromising the ability of future generations to meet their own needs.' },
    { id: 'tc4', question: 'What is the significance of UAE Vision 2031?', type: 'multiple-choice', options: ['It has no significance', 'It provides a comprehensive roadmap for the UAE\'s development across economic, social, and cultural domains', 'It is only about economics', 'It replaces all previous plans'], correctAnswer: 1, explanation: 'UAE Vision 2031 establishes strategic goals for national development, guiding policy and investment across all sectors for the next decade.' },
    { id: 'tc5', question: 'How do smart initiatives improve daily life in the UAE?', type: 'multiple-choice', options: ['They make life more complicated', 'They enhance efficiency, accessibility, and quality of services through digital technology and AI', 'They only benefit businesses', 'They are only in Abu Dhabi and Dubai'], correctAnswer: 1, explanation: 'Smart government initiatives use technology to make services faster, more accessible, and more efficient for all residents of the UAE.' },
  ],
  'Europe': [
    { id: 'eu1', question: 'What was the Renaissance and why did it begin in Italy?', type: 'multiple-choice', options: ['It was a war that started in Italy', 'It was a cultural rebirth of classical learning and arts, sparked by Italy\'s trade wealth and connection to ancient Roman heritage', 'It was a religious movement', 'It began in Northern Europe'], correctAnswer: 1, explanation: 'The Renaissance began in Italy due to its wealthy city-states, trade connections, and direct connection to the classical Roman heritage being rediscovered.' },
    { id: 'eu2', question: 'How did the printing press transform European society?', type: 'multiple-choice', options: ['It had little impact', 'It democratized knowledge, spread ideas rapidly, fueled the Reformation, and accelerated scientific progress', 'It only helped the wealthy', 'It was invented in the 20th century'], correctAnswer: 1, explanation: 'Gutenberg\'s printing press made books affordable, spread ideas rapidly, and fundamentally transformed education, religion, and science in Europe.' },
    { id: 'eu3', question: 'What motivated European exploration during the Age of Discovery?', type: 'multiple-choice', options: ['Only curiosity', 'Desire for trade routes, wealth, religious expansion, and national competition', 'Only religious reasons', 'Europeans were forced to explore'], correctAnswer: 1, explanation: 'The Age of Discovery was driven by economic motives (new trade routes), religious zeal, competition between nations, and the desire for wealth and prestige.' },
    { id: 'eu4', question: 'What was the impact of the East India Company on global trade?', type: 'multiple-choice', options: ['It had no impact', 'It established colonial trade networks that reshaped economies, politics, and cultures across Asia and Europe', 'It only traded in tea', 'It was a small local business'], correctAnswer: 1, explanation: 'The East India Company became a powerful colonial force that reshaped global trade, politics, and cultural exchange between Europe and Asia.' },
    { id: 'eu5', question: 'How did the spice trade connect Europe to the rest of the world?', type: 'multiple-choice', options: ['It did not connect Europe to others', 'It created trade routes linking Europe to Asia, the Middle East, and eventually the Americas', 'Spices were only grown in Europe', 'The spice trade was unimportant'], correctAnswer: 1, explanation: 'The spice trade was one of the most powerful drivers of global exploration and trade, connecting Europe to Asia and reshaping world history.' },
  ],
  'Ottoman': [
    { id: 'ot1', question: 'Who was Mimar Sinan and why is he significant?', type: 'multiple-choice', options: ['He was an Ottoman Sultan', 'He was the greatest Ottoman architect who designed over 300 structures including the Suleymaniye Mosque', 'He was a military general', 'He was a poet'], correctAnswer: 1, explanation: 'Mimar Sinan (c.1488-1588) was the chief Ottoman architect who revolutionized Islamic architecture with over 300 magnificent structures.' },
    { id: 'ot2', question: 'Why was Sultan Suleyman called "Qanuni" (the Lawgiver)?', type: 'multiple-choice', options: ['Because he broke many laws', 'Because he reformed and systematized Ottoman law, creating a comprehensive legal framework', 'It was just a nickname', 'Because he was against laws'], correctAnswer: 1, explanation: 'Suleyman earned the title "Qanuni" for his comprehensive legal reforms that organized and systematized Ottoman law across the empire.' },
    { id: 'ot3', question: 'What was the significance of the Janissary corps?', type: 'multiple-choice', options: ['They were ordinary soldiers', 'They were elite infantry that formed the Sultan\'s personal guard and were one of the first standing armies in Europe', 'They were only ceremonial', 'They were foreign mercenaries'], correctAnswer: 1, explanation: 'The Janissaries were an elite military corps that served as the Sultan\'s personal guard and became one of the most formidable military forces in history.' },
    { id: 'ot4', question: 'How did the Ottoman Empire impact the Arabian Peninsula?', type: 'multiple-choice', options: ['It had no impact', 'It provided protection for holy sites, facilitated pilgrimage routes, and maintained stability in the region', 'It only conquered the area', 'It destroyed Islamic heritage'], correctAnswer: 1, explanation: 'The Ottomans protected the holy cities of Makkah and Madinah, maintained safe pilgrimage routes, and provided stability across the Arabian Peninsula for centuries.' },
    { id: 'ot5', question: 'What led to the decline of the Ottoman Empire?', type: 'multiple-choice', options: ['A single event caused its decline', 'A combination of military defeats, economic challenges, internal reform failures, and the rise of European powers', 'It collapsed overnight', 'Only World War I caused the decline'], correctAnswer: 1, explanation: 'The Ottoman decline was gradual, caused by military setbacks, economic competition from European industrialization, internal resistance to reform, and the shifting balance of global power.' },
  ],
  'Community': [
    { id: 'cm1', question: 'What defines a community?', type: 'multiple-choice', options: ['Only geographic proximity', 'A group of people who share common interests, values, location, or identity', 'Only people related by blood', 'People who work together'], correctAnswer: 1, explanation: 'A community is defined by shared connections — whether geographic, cultural, interest-based, or identity-based — that create a sense of belonging.' },
    { id: 'cm2', question: 'How do communities ensure the safety of their members?', type: 'multiple-choice', options: ['Through isolation from others', 'Through laws, social norms, emergency services, and mutual support systems', 'Only through police enforcement', 'Safety is not a community responsibility'], correctAnswer: 1, explanation: 'Communities ensure safety through a combination of formal structures (laws, emergency services) and informal systems (social norms, mutual support).' },
    { id: 'cm3', question: 'What role do social groups play in UAE society?', type: 'multiple-choice', options: ['They have no role', 'They preserve cultural traditions, provide support networks, and contribute to social cohesion', 'They create division', 'They only exist in rural areas'], correctAnswer: 1, explanation: 'Social groups in the UAE help maintain cultural identity, provide mutual support, and strengthen the bonds that hold society together.' },
    { id: 'cm4', question: 'How can individuals contribute to their community?', type: 'multiple-choice', options: ['They cannot make a difference', 'Through volunteering, participating in community events, supporting neighbors, and following laws', 'Only through financial donations', 'Community contribution is only for leaders'], correctAnswer: 1, explanation: 'Every individual can strengthen their community through active participation, service, and responsible citizenship.' },
    { id: 'cm5', question: 'Why is community participation important for democracy?', type: 'multiple-choice', options: ['It is not important', 'It ensures diverse voices are heard, holds leaders accountable, and strengthens civic institutions', 'Only voting matters', 'Community participation slows down democracy'], correctAnswer: 1, explanation: 'Active community participation ensures government remains responsive, accountable, and representative of the people it serves.' },
  ],
  'Decisions': [
    { id: 'dc1', question: 'What is the decision-making process?', type: 'multiple-choice', options: ['Making random choices', 'Identifying options, evaluating consequences, and choosing the best course of action', 'Always choosing the easiest option', 'Letting others decide for you'], correctAnswer: 1, explanation: 'Effective decision-making involves identifying alternatives, considering consequences, and selecting the option that best aligns with your values and goals.' },
    { id: 'dc2', question: 'What should you do if you encounter a harmful situation?', type: 'multiple-choice', options: ['Ignore it', 'Assess the danger, seek help from a trusted adult, and call emergency services if needed', 'Handle it alone', 'Run away without telling anyone'], correctAnswer: 1, explanation: 'When facing a harmful situation, the priority is safety — assess the danger, get to safety, and seek help from trusted adults or emergency services.' },
    { id: 'dc3', question: 'What are basic first aid principles everyone should know?', type: 'multiple-choice', options: ['First aid is only for medical professionals', 'Check for danger, call for help, apply basic care like pressure on wounds and recovery position', 'You should never try to help', 'First aid always requires special equipment'], correctAnswer: 1, explanation: 'Basic first aid principles — checking safety, calling for help, and applying simple care — can save lives in emergencies before professional help arrives.' },
    { id: 'dc4', question: 'How can you protect yourself against crime?', type: 'multiple-choice', options: ['Crime cannot be prevented', 'By being aware of surroundings, avoiding risky situations, trusting your instincts, and reporting suspicious activity', 'By carrying weapons', 'By never leaving your home'], correctAnswer: 1, explanation: 'Personal safety involves situational awareness, avoiding risky situations, trusting your instincts, and reporting concerns to authorities.' },
    { id: 'dc5', question: 'Why is it important to think before acting in difficult situations?', type: 'multiple-choice', options: ['Quick reactions are always better', 'Thoughtful responses lead to better outcomes and prevent impulsive decisions you might regret', 'Thinking wastes time', 'Instincts are always right'], correctAnswer: 1, explanation: 'Taking a moment to think before acting helps you consider consequences, avoid impulsive mistakes, and make choices that align with your values.' },
  ],
  'Needs': [
    { id: 'hn1', question: 'What are the basic needs every human being requires?', type: 'multiple-choice', options: ['A smartphone and internet', 'Food, water, shelter, clothing, and safety', 'Education and entertainment', 'Luxury goods and services'], correctAnswer: 1, explanation: 'Basic needs are the minimum requirements for human survival: food, water, shelter, clothing, and safety.' },
    { id: 'hn2', question: 'How does the UAE support people whose basic needs are not met?', type: 'multiple-choice', options: ['It does not provide support', 'Through social welfare programs, housing assistance, food support, and healthcare access', 'Only through charity organizations', 'Support is only for citizens'], correctAnswer: 1, explanation: 'The UAE provides comprehensive social support including housing, financial assistance, healthcare, and food programs for those in need.' },
    { id: 'hn3', question: 'What is the connection between unmet needs and conflict?', type: 'multiple-choice', options: ['There is no connection', 'When basic needs are not met, desperation can lead to competition, social unrest, and conflict', 'Conflict only happens because of religion', 'Unmet needs only affect individuals'], correctAnswer: 1, explanation: 'Unmet basic needs create conditions of desperation and competition that can escalate into social tensions and conflict at community or national levels.' },
    { id: 'hn4', question: 'What is the value of human life in ethical frameworks?', type: 'multiple-choice', options: ['It depends on the person', 'Human life has inherent dignity and value that must be protected regardless of circumstances', 'Only some lives are valuable', 'Value is determined by wealth'], correctAnswer: 1, explanation: 'In ethical frameworks across cultures and religions, human life has inherent, irreplaceable value and dignity that demands protection.' },
    { id: 'hn5', question: 'How can communities work together to meet the needs of all members?', type: 'multiple-choice', options: ['Communities cannot help', 'Through cooperation, resource sharing, volunteerism, and supporting social safety nets', 'Only governments can meet needs', 'Individuals must solve their own problems'], correctAnswer: 1, explanation: 'Communities thrive when members cooperate, share resources, volunteer, and support systems that ensure everyone\'s needs are met.' },
  ],
  'Globalisation': [
    { id: 'gl1', question: 'What is globalization?', type: 'multiple-choice', options: ['It is only about trade', 'The increasing interconnection of countries through trade, technology, culture, and communication', 'It is a new concept', 'It only affects wealthy nations'], correctAnswer: 1, explanation: 'Globalization describes how countries have become increasingly connected and interdependent through trade, technology, media, and cultural exchange.' },
    { id: 'gl2', question: 'How has globalization affected the UAE?', type: 'multiple-choice', options: ['It has had no effect', 'It has transformed the UAE into a global hub for trade, tourism, finance, and cultural exchange', 'It has only brought problems', 'The UAE avoids globalization'], correctAnswer: 1, explanation: 'The UAE has embraced globalization to become a major international hub for business, tourism, aviation, and cultural exchange.' },
    { id: 'gl3', question: 'What are the advantages of globalization?', type: 'multiple-choice', options: ['There are no advantages', 'Access to diverse products, cultural exchange, faster communication, and economic opportunities', 'Only economic benefits', 'It only helps corporations'], correctAnswer: 1, explanation: 'Globalization brings economic opportunities, cultural enrichment, technological advancement, and improved access to goods and services.' },
    { id: 'gl4', question: 'What are the disadvantages of globalization?', type: 'multiple-choice', options: ['There are no disadvantages', 'Cultural homogenization, economic inequality, environmental challenges, and loss of local traditions', 'Only job losses', 'It only affects poor countries'], correctAnswer: 1, explanation: 'Globalization can erode local cultures, widen economic inequality, create environmental pressures, and make communities vulnerable to global disruptions.' },
    { id: 'gl5', question: 'How can individuals navigate a globalized world responsibly?', type: 'multiple-choice', options: ['By avoiding global connections', 'By being informed global citizens who respect cultures, think critically, and make ethical choices', 'By accepting everything without question', 'By focusing only on local issues'], correctAnswer: 1, explanation: 'Responsible global citizenship requires cultural awareness, critical thinking about global issues, and making ethical choices in an interconnected world.' },
  ],
};

// ═══════════════════════════════════════════════════════════════
// HELPER: Find matching quiz bank for a topic
// ═══════════════════════════════════════════════════════════════

function findTopicQuiz(title: string): QuizQuestion[] {
  const topicMap: Record<string, string> = {
    'Equality': 'Equality and Justice', 'Justice': 'Equality and Justice', 'Fairness': 'Equality and Justice', 'Distributive': 'Equality and Justice',
    'Health': 'Physical Health', 'Diet': 'Physical Health', 'Disease': 'Physical Health', 'Exercise': 'Physical Health',
    'East Asia': 'East Asia', 'China': 'East Asia', 'Korea': 'East Asia', 'Chinese': 'East Asia',
    'Global Ethics': 'Global Ethics', 'Ethical Challenges': 'Global Ethics',
    'Financial': 'Financial Awareness', 'Money': 'Financial Awareness', 'Entrepreneur': 'Financial Awareness', 'Wealth': 'Financial Awareness',
    'UAE History': 'UAE History', 'Jebel Faya': 'UAE History', 'Bronze Age': 'UAE History', 'Falaj': 'UAE History', 'Ed-Dur': 'UAE History', 'Shipbuilding': 'UAE History',
    'African': 'African Civilizations', 'Africa': 'African Civilizations',
    'South Asia': 'South Asia', 'India': 'South Asia', 'Mauryan': 'South Asia', 'Islamic Civilization in India': 'South Asia',
    'Central Asia': 'Central Asia', 'Silk Road': 'Central Asia', 'Kazakhstan': 'Central Asia', 'Kyrgyzstan': 'Central Asia', 'Uzbekistan': 'Central Asia',
    'America': 'North and South America', 'Indigenous': 'North and South America', 'Colonial': 'North and South America', 'Civil War': 'North and South America',
    'Governance': 'Governance', 'Majlis': 'Governance', 'FNC': 'Governance', 'Constitution': 'Governance', 'Government': 'Governance', 'Judiciary': 'Governance',
    'Diversity': 'Diversity', 'Tolerance': 'Diversity', 'Prejudice': 'Diversity',
    'Digital': 'Digital Challenge', 'Online': 'Digital Challenge', 'Privacy': 'Digital Challenge', 'Cyberbully': 'Digital Challenge',
    'Heritage': 'Heritage', 'Preserv': 'Heritage', 'Museum': 'Heritage',
    'Conflict': 'Conflict', 'Resolving': 'Conflict',
    'Citizen': 'Citizen', 'Civic': 'Citizen', 'Engagement': 'Citizen',
    '21st Century': '21st Century', 'Knowledge economy': '21st Century', 'Smart': '21st Century', 'Sustainability': '21st Century',
    'Renaissance': 'Europe', 'Printing Press': 'Europe', 'Discovery': 'Europe', 'Spice': 'Europe', 'East India': 'Europe',
    'Ottoman': 'Ottoman', 'Suleyman': 'Ottoman', 'Istanbul': 'Ottoman',
    'Community': 'Community', 'Communities': 'Community',
    'Decision': 'Decisions', 'First Aid': 'Decisions', 'Safety': 'Decisions', 'Crime': 'Decisions',
    'Human Needs': 'Needs', 'Life Necessities': 'Needs', 'Basic Needs': 'Needs',
    'Globalisation': 'Globalisation', 'Globalized': 'Globalisation', 'Trade': 'Globalisation',
  };

  for (const [keyword, topic] of Object.entries(topicMap)) {
    if (title.toLowerCase().includes(keyword.toLowerCase())) {
      return topicQuizBanks[topic] || [];
    }
  }
  return [];
}

// ═══════════════════════════════════════════════════════════════
// GRADE METADATA
// ═══════════════════════════════════════════════════════════════

const gradeMeta: Record<number, { title: string; tagline: string; icon: string; iconType: 'heart' | 'globe' | 'landmark' | 'crown' }> = {
  6: { title: 'Grade 6', tagline: 'Building Foundations of Understanding', icon: 'heart', iconType: 'heart' },
  7: { title: 'Grade 7', tagline: 'Exploring Connections & Perspectives', icon: 'globe', iconType: 'globe' },
  8: { title: 'Grade 8', tagline: 'Deepening Analysis & Critical Thinking', icon: 'landmark', iconType: 'landmark' },
  9: { title: 'Grade 9', tagline: 'Mastering Synthesis & Global Awareness', icon: 'crown', iconType: 'crown' },
};

const unitDescriptions: Record<string, string> = {
  'Unit 1': 'Core concepts and foundational knowledge',
  'Unit 2': 'Applied skills and real-world connections',
  'Unit 3': 'Extended thinking and priority content',
  'Unit 4': 'Deepening understanding and new perspectives',
  'Unit 5': 'Integration and application',
  'Unit 6': 'Priority content and advanced analysis',
  'Unit 7': 'Synthesis and citizenship',
  'Unit 8': 'Review and assessment preparation',
  'Unit 9': 'Cumulative review and project work',
  'General': 'Assessments, exams, and administrative lessons',
};

// ═══════════════════════════════════════════════════════════════
// HELPER: Get raw unit data from JSON
// ═══════════════════════════════════════════════════════════════

interface RawLesson {
  week_number: number;
  date_range: string;
  phase: string;
  lesson_title: string;
  domains: string;
  slo_codes: string;
  dok_level: string;
  learning_activity: string;
  assessment: string;
  resources: string;
  scope_sequence_detail?: {
    learning_objective?: string;
    success_criteria?: string;
    prior_learning_engagement?: string;
    teaching_learning_activities?: string;
    assessment_closure?: string;
    resources_materials?: string;
    homework_extension?: string;
    moe_standard?: string;
    learning_domain?: string;
  };
}

function getRawUnitData(gradeKey: string, termKey: string, unitKey: string) {
  const gradeData = (curriculumData as Record<string, unknown>).grades as Record<string, { terms: Record<string, { units: Record<string, { unit_name: string; lesson_count: number; lessons: RawLesson[] }> }> }>;
  const gd = gradeData?.[gradeKey];
  if (!gd) return null;
  const td = gd.terms?.[termKey];
  if (!td) return null;
  const ud = td.units?.[unitKey];
  if (!ud) return null;
  return ud;
}

// ═══════════════════════════════════════════════════════════════
// getLessonId
// ═══════════════════════════════════════════════════════════════

export function getLessonId(gradeKey: string, termKey: string, unitKey: string, lessonIndex: number): string {
  return `${gradeKey}_${termKey}_${unitKey}_l${lessonIndex + 1}`;
}

// ═══════════════════════════════════════════════════════════════
// getGradeInfo
// ═══════════════════════════════════════════════════════════════

export function getGradeInfo(): GradeInfo[] {
  const gradeKeys = ['G6', 'G7', 'G8', 'G9'];
  const gradeNumbers = [6, 7, 8, 9];
  const gradeData = (curriculumData as Record<string, unknown>).grades as Record<string, { terms: Record<string, { term_name: string; units: Record<string, { unit_name: string; lesson_count: number; lessons: RawLesson[] }> }> }>;

  return gradeKeys.map((gk, gi) => {
    const num = gradeNumbers[gi];
    const meta = gradeMeta[num];
    const gd = gradeData?.[gk];
    const terms: TermInfo[] = [];

    if (gd?.terms) {
      for (const tk of ['T1', 'T2', 'T3']) {
        const td = gd.terms[tk];
        if (!td) continue;
        const termNum = parseInt(tk.replace('T', ''));
        const units: UnitInfo[] = [];

        if (td.units) {
          for (const [uk, uv] of Object.entries(td.units)) {
            // Filter to only instructional lessons for lessonCount
            const instructionalLessons = (uv.lessons || []).filter(l => l.phase === 'Instruction');
            const isPriority = uv.lessons?.some(l => (l.lesson_title || '').includes('★')) ?? false;
            const unitTitle = (uv.lessons?.find(l => l.lesson_title?.includes(':'))?.lesson_title || '')
              .replace(/[★]/g, '').split(':')[0].trim() || uk;

            units.push({
              key: uk,
              title: unitTitle,
              lessonCount: instructionalLessons.length,
              isPriority,
              description: unitDescriptions[uk] || `${unitTitle} lessons`,
            });
          }
        }

        terms.push({
          key: tk,
          number: termNum,
          title: td.term_name || `Term ${termNum}`,
          units,
        });
      }
    }

    const totalLessons = terms.reduce((acc, t) => acc + t.units.reduce((a, u) => a + u.lessonCount, 0), 0);

    return {
      key: gk,
      number: num,
      title: meta.title,
      tagline: meta.tagline,
      icon: meta.icon,
      iconType: meta.iconType,
      terms,
      totalLessons,
    };
  });
}

// ═══════════════════════════════════════════════════════════════
// getUnitData — returns { lessons: LessonData[] } for a unit
// ═══════════════════════════════════════════════════════════════

export function getUnitData(gradeKey: string, termKey: string, unitKey: string): { lessons: LessonData[] } | null {
  const unitData = getRawUnitData(gradeKey, termKey, unitKey);
  if (!unitData) return null;

  const lessons: LessonData[] = (unitData.lessons || [])
    .filter((l: RawLesson) => l.phase === 'Instruction')
    .map((l: RawLesson) => {
      const ss = l.scope_sequence_detail || {};
      return {
        title: l.lesson_title || '',
        week: l.week_number || 0,
        domains: l.domains || '',
        dok: l.dok_level || 'DOK 1-3',
        slo_codes: l.slo_codes || '',
        objective: ss.learning_objective || '',
        success_criteria: ss.success_criteria || '',
        prior_learning: ss.prior_learning_engagement || '',
        activities: ss.teaching_learning_activities || '',
        assessment: ss.assessment_closure || l.assessment || '',
        resources: ss.resources_materials || l.resources || '',
        homework: ss.homework_extension || '',
        assessment_type: l.assessment || '',
      };
    });

  return { lessons };
}

// ═══════════════════════════════════════════════════════════════
// getLesson
// ═══════════════════════════════════════════════════════════════

export function getLesson(gradeKey: string, termKey: string, unitKey: string, lessonIndex: number): LessonData {
  const unitData = getUnitData(gradeKey, termKey, unitKey);
  if (!unitData || lessonIndex >= unitData.lessons.length) {
    return {
      title: '', week: 0, domains: '', dok: '', slo_codes: '',
      objective: '', success_criteria: '', prior_learning: '',
      activities: '', assessment: '', resources: '', homework: '', assessment_type: '',
    };
  }
  return unitData.lessons[lessonIndex];
}

// ═══════════════════════════════════════════════════════════════
// getCleanTitle
// ═══════════════════════════════════════════════════════════════

export function getCleanTitle(title: string): string {
  let clean = title.replace(/[★]/g, '').replace(/PRIORITY UNIT/gi, '').trim();
  // Remove multiple spaces
  clean = clean.replace(/\s+/g, ' ').trim();
  // Extract text after colon if present
  const colonIdx = clean.indexOf(':');
  if (colonIdx > 0 && colonIdx < clean.length - 1) {
    return clean.substring(colonIdx + 1).trim();
  }
  return clean;
}

// ═══════════════════════════════════════════════════════════════
// getUnitContextFromTitle
// ═══════════════════════════════════════════════════════════════

export function getUnitContextFromTitle(title: string): string {
  let clean = title.replace(/[★]/g, '').replace(/PRIORITY UNIT/gi, '').trim();
  clean = clean.replace(/\s+/g, ' ').trim();
  const colonIdx = clean.indexOf(':');
  if (colonIdx > 0 && colonIdx < clean.length - 1) {
    return clean.substring(0, colonIdx).trim();
  }
  return '';
}

// ═══════════════════════════════════════════════════════════════
// generateQuizQuestions
// ═══════════════════════════════════════════════════════════════

export function generateQuizQuestions(lesson: LessonData, gradeKey: string, termKey: string, unitKey: string, lessonIndex: number): QuizQuestion[] {
  const lessonId = getLessonId(gradeKey, termKey, unitKey, lessonIndex);
  const title = lesson.title;

  // Check for Ottoman-specific quiz first
  if (/ottoman|suleyman|istanbul|constantinople|rise of/i.test(title)) {
    return ottomanQuizQuestions.map((q, i) => ({ ...q, id: `${lessonId}_oq${i + 1}` }));
  }

  // Try topic-specific quiz bank
  const topicQuiz = findTopicQuiz(title);
  if (topicQuiz.length >= 5) {
    return topicQuiz.map((q, i) => ({ ...q, id: `${lessonId}_tq${i + 1}` }));
  }

  // Fall back to domain-based quiz
  const domainList = lesson.domains.split(',').map(d => d.trim());
  const questions: QuizQuestion[] = [];

  for (const domain of domainList) {
    const domainCode = domain.replace(/[^A-Z0-9]/g, '');
    const matchingKey = Object.keys(domainQuizTemplates).find(k => domainCode.startsWith(k));
    if (matchingKey && domainQuizTemplates[matchingKey]) {
      const domainQuestions = domainQuizTemplates[matchingKey];
      for (const q of domainQuestions) {
        if (questions.length < 7) {
          questions.push({
            id: `${lessonId}_dq${questions.length + 1}`,
            question: q.q,
            type: 'multiple-choice',
            options: q.options,
            correctAnswer: q.correct,
            explanation: q.explanation,
          });
        }
      }
    }
  }

  // If still not enough, use generic questions
  if (questions.length < 5) {
    const genericQuestions: QuizQuestion[] = [
      { id: `${lessonId}_gq1`, question: `What is the main topic of this lesson?`, type: 'multiple-choice', options: [getCleanTitle(title), 'An unrelated topic', 'A different subject entirely', 'None of the above'], correctAnswer: 0, explanation: 'This lesson focuses on the topic stated in the title.' },
      { id: `${lessonId}_gq2`, question: `Which domains of learning are covered in this lesson?`, type: 'multiple-choice', options: [lesson.domains, 'Only mathematics', 'Only science', 'Only language arts'], correctAnswer: 0, explanation: `This lesson covers the ${lesson.domains} domains of learning.` },
      { id: `${lessonId}_gq3`, question: `What cognitive level does this lesson target?`, type: 'multiple-choice', options: ['Only memorization', lesson.dok || 'DOK 1-3 across multiple levels', 'Only creative thinking', 'No cognitive skills'], correctAnswer: 1, explanation: `This lesson targets ${lesson.dok || 'multiple DOK levels'} to develop deep understanding.` },
      { id: `${lessonId}_gq4`, question: `Why is connecting this topic to the UAE important?`, type: 'multiple-choice', options: ['It is not important', 'Understanding local connections makes learning relevant and meaningful', 'It is only for Emirati students', 'UAE connections are always about history'], correctAnswer: 1, explanation: 'Making connections to the UAE context helps students see how global concepts apply to their own lives and society.' },
      { id: `${lessonId}_gq5`, question: `What skill is MOST important for understanding this topic?`, type: 'multiple-choice', options: ['Only memorization', 'Critical thinking and applying knowledge to real situations', 'Only reading ability', 'Only writing skills'], correctAnswer: 1, explanation: 'Critical thinking and application are essential for deeply understanding and using knowledge from this topic.' },
    ];
    while (questions.length < 5) {
      questions.push(genericQuestions[questions.length] || genericQuestions[0]);
    }
  }

  return questions.slice(0, 7);
}

// ═══════════════════════════════════════════════════════════════
// parseActivities
// ═══════════════════════════════════════════════════════════════

export function parseActivities(activitiesText: string): ActivityItem[] {
  if (!activitiesText) return [];

  const lines = activitiesText.split('\n').filter(l => l.trim());
  const activities: ActivityItem[] = [];
  let currentActivity: Partial<ActivityItem> | null = null;
  let actIdx = 0;

  for (const line of lines) {
    const trimmed = line.trim();
    const match = trimmed.match(/^(\d+)[)\.]\s*(.+)/);
    if (match) {
      if (currentActivity && currentActivity.title) {
        activities.push(currentActivity as ActivityItem);
      }
      actIdx++;
      const titleText = match[2].trim();
      const isInteractive = /interactive|drag|drop|map|timeline|digital|online|game|kahoot|quizlet|nearpod|padlet|flipgrid/i.test(titleText);
      const isDiscuss = /discuss|share|think-pair|jigsaw|group|collaborat|peer/i.test(titleText);
      const isCreative = /create|design|draw|poster|infographic|mind map|visual|model/i.test(titleText);
      const isResearch = /research|investigat|source|analys|find/i.test(titleText);

      currentActivity = {
        id: `a${actIdx}`,
        title: titleText.length > 80 ? titleText.substring(0, 77) + '...' : titleText,
        duration: isInteractive ? 8 : isDiscuss ? 7 : 6,
        type: isInteractive ? 'interactive' : isDiscuss ? 'discuss' : isCreative ? 'creative' : isResearch ? 'research' : 'read',
        description: titleText,
      };
    } else if (currentActivity && trimmed) {
      currentActivity.content = (currentActivity.content ? currentActivity.content + ' ' : '') + trimmed;
    }
  }

  if (currentActivity && currentActivity.title) {
    activities.push(currentActivity as ActivityItem);
  }

  if (activities.length < 3) {
    const base: ActivityItem[] = [
      { id: 'a1', title: 'Read & Discuss', duration: 8, description: 'Read and discuss the key concepts from this lesson', type: 'read' },
      { id: 'a2', title: 'Collaborative Thinking', duration: 7, description: 'Work with a partner to explore and analyze the main ideas', type: 'discuss' },
      { id: 'a3', title: 'Creative Application', duration: 8, description: 'Apply what you learned through a creative activity', type: 'creative' },
    ];
    while (activities.length < 3) {
      activities.push(base[activities.length]);
    }
  }

  return activities.slice(0, 5);
}

// ═══════════════════════════════════════════════════════════════
// generateUAELinks
// ═══════════════════════════════════════════════════════════════

export function generateUAELinks(lesson: LessonData): UAELink[] {
  const title = lesson.title.toLowerCase();
  const links: UAELink[] = [];

  if (/equality|justice|fairness|distributive/i.test(title)) {
    links.push(
      { title: 'UAE Anti-Discrimination Law', content: 'The UAE has enacted comprehensive anti-discrimination legislation (Federal Law No. 2 of 2015) that prohibits all forms of discrimination based on religion, race, ethnicity, or national origin.', icon: 'building' },
      { title: 'Emirati Values of Justice', content: 'The UAE Constitution guarantees equality and justice for all. The concept of "Adl" (justice) is a core Islamic and Emirati value reflected in governance and daily life.', icon: 'star' },
      { title: 'UAE Gender Balance Council', content: 'Established in 2015, the UAE Gender Balance Council works to position the UAE as a global model for gender balance and equal opportunities.', icon: 'heart' },
    );
  } else if (/health|diet|disease|exercise|wellbeing|well-being/i.test(title)) {
    links.push(
      { title: 'UAE Healthcare System', content: 'The UAE provides world-class healthcare through public and private hospitals. Mandatory health insurance ensures access for all residents.', icon: 'heart' },
      { title: 'Dubai Fitness Challenge', content: 'The annual Dubai Fitness Challenge encourages 30 minutes of activity for 30 days, promoting healthy lifestyles across the UAE.', icon: 'star' },
      { title: 'UAE National Nutrition Strategy', content: 'The UAE promotes healthy eating through national nutrition guidelines, school canteen regulations, and public awareness campaigns.', icon: 'globe' },
    );
  } else if (/tolerance|diversity|respect|coexistence/i.test(title)) {
    links.push(
      { title: 'UAE Year of Tolerance', content: 'In 2019, the UAE celebrated the Year of Tolerance, highlighting the nation\'s commitment to peaceful coexistence and mutual respect among over 200 nationalities.', icon: 'heart' },
      { title: 'Ministry of Tolerance', content: 'The UAE established a dedicated Ministry of Tolerance to promote the values of tolerance, coexistence, and peace nationally and internationally.', icon: 'building' },
      { title: 'Abrahamic Family House', content: 'This landmark interfaith complex in Abu Dhabi houses a mosque, church, and synagogue, symbolizing the UAE\'s commitment to interfaith dialogue.', icon: 'star' },
    );
  } else if (/east asia|china|korea|japan/i.test(title)) {
    links.push(
      { title: 'UAE-China Relations', content: 'The UAE is a major trading partner with China. The Belt and Road Initiative connects to UAE infrastructure and economic vision.', icon: 'globe' },
      { title: 'UAE-Korea Cultural Exchange', content: 'The UAE and South Korea share strong cultural and economic ties, with Korean culture (K-culture) growing popular among UAE youth.', icon: 'star' },
      { title: 'Silk Road Legacy in the UAE', content: 'The UAE continues the Silk Road tradition as a global trade hub connecting East and West through its ports and airports.', icon: 'mountain' },
    );
  } else if (/ottoman|suleyman|istanbul/i.test(title)) {
    links.push(
      { title: 'Islamic Heritage in the UAE', content: 'The Ottoman Empire\'s legacy of protecting Islamic holy sites connects to the UAE\'s own commitment to preserving Islamic heritage and values.', icon: 'building' },
      { title: 'UAE-Turkey Relations', content: 'The UAE and Turkey maintain diplomatic and cultural relations, with shared Islamic heritage connecting both nations.', icon: 'globe' },
      { title: 'Architectural Heritage', content: 'Ottoman architectural principles influence modern Islamic architecture in the UAE, including mosque design and geometric patterns.', icon: 'star' },
    );
  } else if (/africa|african/i.test(title)) {
    links.push(
      { title: 'UAE-Africa Relations', content: 'The UAE is a major investor and development partner across Africa, providing humanitarian aid and building economic partnerships.', icon: 'globe' },
      { title: 'Islamic Scholarship Legacy', content: 'Centers of learning like Timbuktu share a tradition of Islamic scholarship with the UAE, which supports education globally.', icon: 'building' },
      { title: 'UAE Humanitarian Aid to Africa', content: 'Through organizations like the Emirates Red Crescent, the UAE provides significant humanitarian assistance across the African continent.', icon: 'heart' },
    );
  } else if (/south asia|india|mauryan|gupta/i.test(title)) {
    links.push(
      { title: 'UAE-India Relations', content: 'India is one of the UAE\'s largest trading partners, with over 3.5 million Indian residents contributing to UAE society.', icon: 'globe' },
      { title: 'Cultural Exchange', content: 'The UAE celebrates Indian cultural festivals and traditions, reflecting the deep cultural ties between both nations.', icon: 'star' },
      { title: 'UAE as a Global Trade Hub', content: 'The UAE continues the historical tradition of South Asian trade routes, serving as a modern hub connecting East and West.', icon: 'mountain' },
    );
  } else if (/governance|government|constitution|federal|judiciary|law/i.test(title)) {
    links.push(
      { title: 'UAE Federal Government', content: 'The UAE operates a unique federal system where each emirate maintains autonomy while the federal government handles national matters.', icon: 'building' },
      { title: 'The Majlis Tradition', content: 'The majlis is a traditional Emirati forum where citizens can directly voice concerns to their rulers, embodying consultative governance.', icon: 'star' },
      { title: 'UAE Constitution', content: 'Adopted in 1971, the UAE Constitution establishes the legal framework for the federation, protecting rights and defining governance structures.', icon: 'heart' },
    );
  } else if (/heritage|preserv|museum|culture/i.test(title)) {
    links.push(
      { title: 'Al Ain UNESCO World Heritage Site', content: 'The cultural sites of Al Ain, including Hili Tombs and the oases system, are the UAE\'s first UNESCO World Heritage Site.', icon: 'mountain' },
      { title: 'UAE Museums', content: 'The UAE invests in world-class museums like the Louvre Abu Dhabi and the Museum of the Future to preserve and celebrate heritage.', icon: 'building' },
      { title: 'Intangible Heritage', content: 'The UAE actively preserves intangible heritage including falconry, Al Sadu weaving, and coffee traditions through national programs.', icon: 'star' },
    );
  } else if (/global|ethics|citizen|civic/i.test(title)) {
    links.push(
      { title: 'UAE Global Initiatives', content: 'The UAE leads global initiatives in sustainability, peace, and humanitarian aid, reflecting its commitment to global citizenship.', icon: 'globe' },
      { title: 'UAE Youth Programs', content: 'The UAE empowers youth through youth councils, leadership programs, and volunteer platforms to develop active citizens.', icon: 'star' },
      { title: 'UAE and the UN', content: 'The UAE is an active UN member, contributing to peacekeeping, climate action, and sustainable development globally.', icon: 'building' },
    );
  } else if (/financial|money|entrepreneur|wealth/i.test(title)) {
    links.push(
      { title: 'UAE Economic Vision', content: 'The UAE\'s economic diversification strategy moves beyond oil to build a knowledge-based economy with opportunities for all.', icon: 'star' },
      { title: 'UAE Entrepreneurship Ecosystem', content: 'The UAE ranks among the best places to start a business, with free zones, startup incubators, and government support for entrepreneurs.', icon: 'building' },
      { title: 'Financial Literacy in UAE Schools', content: 'The UAE promotes financial literacy through educational programs and initiatives to prepare youth for economic participation.', icon: 'heart' },
    );
  } else if (/central asia|silk road|kazakhstan/i.test(title)) {
    links.push(
      { title: 'UAE-Central Asia Relations', content: 'The UAE is a growing economic partner with Central Asian nations, investing in energy, logistics, and infrastructure projects.', icon: 'globe' },
      { title: 'Silk Road Legacy', content: 'The UAE continues the Silk Road tradition as a global logistics and trade hub connecting Asia, Europe, and Africa.', icon: 'mountain' },
      { title: 'Cultural Connections', content: 'The UAE and Central Asian nations share Islamic heritage, nomadic traditions, and cultural practices that bridge their histories.', icon: 'star' },
    );
  } else {
    links.push(
      { title: 'UAE Connection', content: 'This topic connects to the UAE\'s commitment to education, tolerance, and development as outlined in the national vision.', icon: 'globe' },
      { title: 'Real-World Application', content: 'Understanding this topic helps students appreciate how global concepts apply to their daily lives in the UAE.', icon: 'star' },
      { title: 'UAE Values', content: 'The UAE\'s values of respect, tolerance, and innovation are reflected in the study of this topic and its applications.', icon: 'heart' },
    );
  }

  return links.slice(0, 3);
}

// ═══════════════════════════════════════════════════════════════
// generateWarmUp
// ═══════════════════════════════════════════════════════════════

export function generateWarmUp(lesson: LessonData): WarmUpActivity {
  const title = lesson.title.toLowerCase();

  if (/equality|justice|fairness/i.test(title)) {
    return { type: 'Think-Pair-Share', content: 'Think about a time when you felt something was unfair. What made it unfair? How did it feel? Share with a partner.', attribution: 'UAE Value: Justice (Adl)' };
  }
  if (/health|diet|exercise|wellbeing/i.test(title)) {
    return { type: 'Quick Write', content: 'List 3 things you did yesterday that contributed to your health. What is one thing you would change today?', attribution: 'UAE Fitness Challenge' };
  }
  if (/tolerance|diversity|respect/i.test(title)) {
    return { type: 'Brainstorm', content: 'How many different nationalities do you think are in your school? Why is having different cultures around us a good thing?', attribution: 'UAE Year of Tolerance' };
  }
  if (/east asia|china|korea/i.test(title)) {
    return { type: 'Map Discovery', content: 'Look at a map of East Asia. What countries can you identify? What geographic features do you notice that might affect how people live?', attribution: 'UAE-China Relations' };
  }
  if (/ottoman|suleyman|istanbul/i.test(title)) {
    return { type: 'Historical Inquiry', content: 'Have you heard of the Ottoman Empire? What do you know about it? Why might an empire that ended 100 years ago still matter today?', attribution: 'Islamic Heritage' };
  }
  if (/africa|african/i.test(title)) {
    return { type: 'KWL Chart', content: 'What do you Know about Africa? What do you Want to know? Fill in the first two columns of a KWL chart.', attribution: 'UAE-Africa Relations' };
  }
  if (/south asia|india/i.test(title)) {
    return { type: 'Visual Thinking', content: 'Look at images of South Asian landmarks (Taj Mahal, Indus Valley ruins). What do they tell you about the civilizations that built them?', attribution: 'UAE-India Cultural Exchange' };
  }
  if (/governance|government|constitution|federal/i.test(title)) {
    return { type: 'Discussion Starter', content: 'Who makes decisions in your school? How are those decisions made? How is this similar to or different from how a country is governed?', attribution: 'UAE Majlis Tradition' };
  }
  if (/heritage|preserv|museum/i.test(title)) {
    return { type: 'Personal Connection', content: 'What is something from your family\'s past that you would want to preserve for future generations? Why is it important?', attribution: 'UAE Heritage Preservation' };
  }
  if (/financial|money|entrepreneur/i.test(title)) {
    return { type: 'Scenario Think', content: 'If you were given 1000 AED today, what would you do with it? Save, spend, or invest? Explain your choice.', attribution: 'UAE Financial Literacy' };
  }
  if (/central asia|silk road/i.test(title)) {
    return { type: 'Trade Simulation', content: 'Imagine you are a trader on the Silk Road 1000 years ago. What goods would you trade? What dangers would you face?', attribution: 'UAE Trade Hub Legacy' };
  }
  if (/global|ethics|citizen|civic/i.test(title)) {
    return { type: 'Reflection', content: 'What does it mean to be a good citizen? List 3 things you do that make your community better.', attribution: 'UAE Civic Values' };
  }

  return {
    type: 'KWL Activation',
    content: `What do you already know about "${getCleanTitle(lesson.title)}"? What questions do you have?`,
    attribution: 'UAE National Values',
  };
}

// ═══════════════════════════════════════════════════════════════
// QUIZ RESULT STORAGE (localStorage)
// ═══════════════════════════════════════════════════════════════

const STORAGE_KEY = 'mscs_quiz_results';

export function saveQuizResult(result: QuizResult): void {
  if (typeof window === 'undefined') return;
  try {
    const existing = getAllQuizResults();
    existing.push(result);
    const encoded = btoa(JSON.stringify(existing));
    localStorage.setItem(STORAGE_KEY, encoded);
  } catch { /* ignore */ }
}

export function getAllQuizResults(): QuizResult[] {
  if (typeof window === 'undefined') return [];
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    if (!data) return [];
    // Try decoded (new format) first, fallback to plain JSON (legacy)
    try {
      const decoded = atob(data);
      return JSON.parse(decoded);
    } catch {
      return JSON.parse(data);
    }
  } catch {
    return [];
  }
}

export function getResultsByGrade(grade: number): QuizResult[] {
  return getAllQuizResults().filter(r => r.grade === grade);
}

export function exportResultsAsCSV(): string {
  const results = getAllQuizResults();
  if (results.length === 0) return '';

  const headers = ['Student Code', 'Lesson ID', 'Grade', 'Term', 'Unit', 'Lesson Title', 'Score', 'Total', 'Percentage', 'DOK Level', 'Domains', 'Completed At'];
  const rows = results.map(r => [
    r.studentCode, r.lessonId, r.grade.toString(), r.term.toString(), r.unit,
    `"${r.lessonTitle}"`, r.score.toString(), r.total.toString(), r.percentage.toString(),
    r.dok_level, r.domains, r.completedAt,
  ]);

  return [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
}

// ═══════════════════════════════════════════════════════════════
// getPlatformStats
// ═══════════════════════════════════════════════════════════════

export function getPlatformStats(): { totalGrades: number; totalLessons: number; totalActivities: number } {
  const grades = getGradeInfo();
  let totalLessons = 0;
  let totalActivities = 0;

  for (const grade of grades) {
    for (const term of grade.terms) {
      for (const unit of term.units) {
        totalLessons += unit.lessonCount;
        const unitData = getRawUnitData(grade.key, term.key, unit.key);
        if (unitData?.lessons) {
          for (const lesson of unitData.lessons) {
            if (lesson.phase === 'Instruction') {
              const acts = (lesson.scope_sequence_detail?.teaching_learning_activities || '').split('\n').filter(l => /^\d+[).]/.test(l.trim()));
              totalActivities += Math.max(acts.length, 3);
            }
          }
        }
      }
    }
  }

  return {
    totalGrades: grades.length,
    totalLessons,
    totalActivities,
  };
}

// ═══════════════════════════════════════════════════════════════
// CYBERSECURITY UTILITIES
// ═══════════════════════════════════════════════════════════════

export const MASTER_PASSWORD_HASH = btoa('AhmedAli@MSCS2026');
export const MASTER_LOGIN_CODE = 'MSCS-MASTER-2026-ADMIN';
export const SESSION_TIMEOUT_MS = 30 * 60 * 1000; // 30 minutes

export function verifyMasterPassword(input: string): boolean {
  return btoa(input) === MASTER_PASSWORD_HASH;
}

// Rate limiting for login attempts
const LOGIN_ATTEMPTS_KEY = 'mscs_login_attempts';
const MAX_LOGIN_ATTEMPTS = 5;
const LOCKOUT_DURATION_MS = 5 * 60 * 1000; // 5 minutes

interface LoginAttempt {
  count: number;
  lockoutUntil: number;
}

export function checkLoginRateLimit(): { allowed: boolean; remainingAttempts: number; lockoutUntil: number } {
  if (typeof window === 'undefined') return { allowed: true, remainingAttempts: MAX_LOGIN_ATTEMPTS, lockoutUntil: 0 };
  try {
    const data = localStorage.getItem(LOGIN_ATTEMPTS_KEY);
    const attempt: LoginAttempt = data ? JSON.parse(data) : { count: 0, lockoutUntil: 0 };
    const now = Date.now();

    if (attempt.lockoutUntil && now < attempt.lockoutUntil) {
      return { allowed: false, remainingAttempts: 0, lockoutUntil: attempt.lockoutUntil };
    }

    if (attempt.lockoutUntil && now >= attempt.lockoutUntil) {
      attempt.count = 0;
      attempt.lockoutUntil = 0;
    }

    return { allowed: attempt.count < MAX_LOGIN_ATTEMPTS, remainingAttempts: MAX_LOGIN_ATTEMPTS - attempt.count, lockoutUntil: 0 };
  } catch {
    return { allowed: true, remainingAttempts: MAX_LOGIN_ATTEMPTS, lockoutUntil: 0 };
  }
}

export function recordFailedLogin(): void {
  if (typeof window === 'undefined') return;
  try {
    const data = localStorage.getItem(LOGIN_ATTEMPTS_KEY);
    const attempt: LoginAttempt = data ? JSON.parse(data) : { count: 0, lockoutUntil: 0 };
    attempt.count += 1;
    if (attempt.count >= MAX_LOGIN_ATTEMPTS) {
      attempt.lockoutUntil = Date.now() + LOCKOUT_DURATION_MS;
    }
    localStorage.setItem(LOGIN_ATTEMPTS_KEY, JSON.stringify(attempt));
  } catch { /* ignore */ }
}

export function resetLoginAttempts(): void {
  if (typeof window === 'undefined') return;
  try { localStorage.removeItem(LOGIN_ATTEMPTS_KEY); } catch { /* ignore */ }
}

// Session management
const SESSION_KEY = 'mscs_session_last_activity';

export function updateSessionActivity(): void {
  if (typeof window === 'undefined') return;
  try { localStorage.setItem(SESSION_KEY, Date.now().toString()); } catch { /* ignore */ }
}

export function isSessionExpired(): boolean {
  if (typeof window === 'undefined') return false;
  try {
    const lastActivity = localStorage.getItem(SESSION_KEY);
    if (!lastActivity) return true;
    return Date.now() - parseInt(lastActivity) > SESSION_TIMEOUT_MS;
  } catch { return false; }
}

// ═══════════════════════════════════════════════════════════════
// LESSON COMPLETION TRACKING
// ═══════════════════════════════════════════════════════════════

const COMPLETION_KEY = 'mscs_lesson_completions';

export interface LessonCompletion {
  lessonId: string;
  studentCode: string;
  completedAt: string;
  gradeKey: string;
}

export function markLessonComplete(lessonId: string, studentCode: string, gradeKey: string): void {
  if (typeof window === 'undefined') return;
  try {
    const completions = getLessonCompletions();
    const existing = completions.find(c => c.lessonId === lessonId && c.studentCode === studentCode);
    if (!existing) {
      completions.push({ lessonId, studentCode, completedAt: new Date().toISOString(), gradeKey });
      localStorage.setItem(COMPLETION_KEY, btoa(JSON.stringify(completions)));
    }
  } catch { /* ignore */ }
}

export function getLessonCompletions(): LessonCompletion[] {
  if (typeof window === 'undefined') return [];
  try {
    const data = localStorage.getItem(COMPLETION_KEY);
    if (!data) return [];
    try { return JSON.parse(atob(data)); } catch { return JSON.parse(data); }
  } catch { return []; }
}

export function isLessonCompleted(lessonId: string, studentCode: string): boolean {
  return getLessonCompletions().some(c => c.lessonId === lessonId && c.studentCode === studentCode);
}

export function getGradeCompletionPercentage(gradeKey: string, studentCode: string): number {
  const grade = getGradeInfo().find(g => g.key === gradeKey);
  if (!grade) return 0;
  const completions = getLessonCompletions().filter(c => c.gradeKey === gradeKey && c.studentCode === studentCode);
  let totalLessons = 0;
  for (const term of grade.terms) {
    for (const unit of term.units) {
      totalLessons += unit.lessonCount;
    }
  }
  return totalLessons > 0 ? Math.round((completions.length / totalLessons) * 100) : 0;
}

export function getNextLesson(gradeKey: string, termKey: string, unitKey: string, currentLessonIndex: number): { gradeKey: string; termKey: string; unitKey: string; lessonIndex: number } | null {
  const grade = getGradeInfo().find(g => g.key === gradeKey);
  if (!grade) return null;
  const allUnits: { termKey: string; unitKey: string; lessonCount: number }[] = [];
  for (const term of grade.terms) {
    for (const unit of term.units) {
      allUnits.push({ termKey: term.key, unitKey: unit.key, lessonCount: unit.lessonCount });
    }
  }
  const currentUnitIdx = allUnits.findIndex(u => u.termKey === termKey && u.unitKey === unitKey);
  if (currentUnitIdx === -1) return null;
  if (currentLessonIndex + 1 < allUnits[currentUnitIdx].lessonCount) {
    return { gradeKey, termKey, unitKey, lessonIndex: currentLessonIndex + 1 };
  }
  if (currentUnitIdx + 1 < allUnits.length) {
    return { gradeKey, termKey: allUnits[currentUnitIdx + 1].termKey, unitKey: allUnits[currentUnitIdx + 1].unitKey, lessonIndex: 0 };
  }
  return null;
}

// ═══════════════════════════════════════════════════════════════
// STUDENT DATA MANAGEMENT
// ═══════════════════════════════════════════════════════════════

export function deleteStudentData(studentCode: string): void {
  if (typeof window === 'undefined') return;
  try {
    // Remove quiz results
    const results = getAllQuizResults().filter(r => r.studentCode !== studentCode);
    localStorage.setItem(STORAGE_KEY, btoa(JSON.stringify(results)));
    // Remove completions
    const completions = getLessonCompletions().filter(c => c.studentCode !== studentCode);
    localStorage.setItem(COMPLETION_KEY, btoa(JSON.stringify(completions)));
  } catch { /* ignore */ }
}

// ═══════════════════════════════════════════════════════════════
// DIAGNOSTIC ASSESSMENT STORAGE
// ═══════════════════════════════════════════════════════════════

const DIAGNOSTIC_KEY = 'mscs_diagnostic_results';

export interface DiagnosticResult {
  studentCode: string;
  gradeKey: string;
  grade: number;
  score: number;
  total: number;
  percentage: number;
  completedAt: string;
  answers: Record<string, number | string>;
}

export function saveDiagnosticResult(result: DiagnosticResult): void {
  if (typeof window === 'undefined') return;
  try {
    const existing = getDiagnosticResults();
    existing.push(result);
    localStorage.setItem(DIAGNOSTIC_KEY, btoa(JSON.stringify(existing)));
  } catch { /* ignore */ }
}

export function getDiagnosticResults(): DiagnosticResult[] {
  if (typeof window === 'undefined') return [];
  try {
    const data = localStorage.getItem(DIAGNOSTIC_KEY);
    if (!data) return [];
    try { return JSON.parse(atob(data)); } catch { return JSON.parse(data); }
  } catch { return []; }
}

export function hasDiagnosticResult(studentCode: string, gradeKey: string): boolean {
  return getDiagnosticResults().some(r => r.studentCode === studentCode && r.gradeKey === gradeKey);
}

// ═══════════════════════════════════════════════════════════════
// DIAGNOSTIC ASSESSMENT QUESTIONS
// Cumulative, progressively challenging, DOK1→DOK4
// Target: top students score ~50-65%
// ═══════════════════════════════════════════════════════════════

export const diagnosticQuestions: Record<string, QuizQuestion[]> = {
  'G6': [
    { id: 'g6d1', question: 'Which of the following BEST defines "social justice"?', type: 'multiple-choice', options: ['Treating everyone exactly the same regardless of circumstances', 'Ensuring fair distribution of resources, opportunities, and rights within a society', 'Following laws without questioning them', 'Giving the most resources to the most powerful people'], correctAnswer: 1, explanation: 'Social justice involves the fair and equitable distribution of wealth, opportunities, and privileges within a society, considering both equality and equity.' },
    { id: 'g6d2', question: 'A school provides free lunch to students from low-income families while other students pay. Which principle does this illustrate?', type: 'multiple-choice', options: ['Equality (treating everyone the same)', 'Equity (giving each person what they need to succeed)', 'Favoritism', 'Discrimination'], correctAnswer: 1, explanation: 'Equity recognizes that different people need different support to reach the same outcome — this is different from equality, which treats everyone identically.' },
    { id: 'g6d3', question: 'Which historical document FIRST established the principle that rulers are subject to the law?', type: 'multiple-choice', options: ['The Universal Declaration of Human Rights', 'The Magna Carta (1215)', 'The UAE Constitution', 'The United Nations Charter'], correctAnswer: 1, explanation: 'The Magna Carta, signed in 1215, was the first document to establish that even kings were subject to the law — a revolutionary concept that shaped modern governance.' },
    { id: 'g6d4', question: 'A community has 100 people. Decision A benefits 60 people but harms 40. Decision B benefits everyone equally but less. According to utilitarian ethics, which decision is preferable?', type: 'multiple-choice', options: ['Decision B because it is fair', 'Decision A because it maximizes total benefit for the majority', 'Neither, because any harm is unacceptable', 'It depends on who the 60 people are'], correctAnswer: 1, explanation: 'Utilitarianism, developed by philosophers like Bentham and Mill, argues that the right action is the one that produces the greatest good for the greatest number.' },
    { id: 'g6d5', question: 'How does the UAE\'s majlis system compare to ancient Athenian democracy?', type: 'multiple-choice', options: ['They are identical systems', 'Both involve citizen participation, but the majlis is consultative while Athens used direct voting', 'The majlis is more democratic than Athens', 'Athens had no citizen participation'], correctAnswer: 1, explanation: 'Both systems value citizen input, but the Athenian model used direct voting on laws, while the majlis is a consultative tradition where leaders hear concerns before making decisions.' },
    { id: 'g6d6', question: 'A student argues that "if something is legal, it must be moral." Which counterexample BEST challenges this claim?', type: 'multiple-choice', options: ['Speeding is illegal and also immoral', 'Historically, slavery was legal in many countries yet was deeply immoral', 'Murder is both illegal and immoral', 'Taxes are legal but some people dislike them'], correctAnswer: 1, explanation: 'The fact that slavery was once legal but universally recognized as immoral today proves that legality and morality are separate concepts — laws can be unjust.' },
    { id: 'g6d7', question: 'Why might two people observe the same historical event and describe it differently?', type: 'multiple-choice', options: ['One of them is lying', 'Different perspectives, cultural backgrounds, and biases shape how people interpret events', 'History is always objective', 'It is impossible to know what really happened'], correctAnswer: 1, explanation: 'Historical interpretation is influenced by perspective, cultural context, and personal bias — this is why historians emphasize examining multiple sources and viewpoints.' },
    { id: 'g6d8', question: 'Which concept BEST explains why a country with abundant oil reserves might still have poor citizens?', type: 'multiple-choice', options: ['Scarcity', 'The resource curse (paradox of plenty)', 'Opportunity cost', 'Supply and demand'], correctAnswer: 1, explanation: 'The resource curse describes how countries with abundant natural resources often experience slower economic growth, corruption, and inequality because resource wealth is not distributed equitably.' },
    { id: 'g6d9', question: 'If you could design a perfect society, which philosophical approach would prioritize individual freedoms over collective welfare?', type: 'multiple-choice', options: ['Utilitarianism', 'Communitarianism', 'Libertarianism', 'Socialism'], correctAnswer: 2, explanation: 'Libertarianism emphasizes individual liberty as the highest political priority, arguing that people should be free to make their own choices with minimal government interference.' },
    { id: 'g6d10', question: 'A philosopher argues: "The right thing to do is whatever a virtuous person would do." Which ethical framework is this?', type: 'multiple-choice', options: ['Consequentialism (judging actions by outcomes)', 'Virtue ethics (judging actions by the character they express)', 'Deontology (judging actions by rules and duties)', 'Pragmatism (judging actions by practical results)'], correctAnswer: 1, explanation: 'Virtue ethics, originating with Aristotle, focuses not on rules or outcomes but on developing good character — the right action is what a person of wisdom and virtue would choose.' },
  ],
  'G7': [
    { id: 'g7d1', question: 'What is the PRIMARY difference between a nation and a state in political science?', type: 'multiple-choice', options: ['They are identical terms', 'A nation is a cultural community sharing identity; a state is a political entity with sovereign territory', 'A state is always larger than a nation', 'Nations have armies but states do not'], correctAnswer: 1, explanation: 'A nation refers to a group of people who share common culture, language, or identity, while a state is a political organization with defined territory, government, and sovereignty.' },
    { id: 'g7d2', question: 'Which governing principle is MOST similar between the Iroquois Confederacy and the UAE\'s federal system?', type: 'multiple-choice', options: ['They share no similarities', 'Both unite distinct political entities under a central authority while preserving individual autonomy', 'Both are military alliances only', 'Both have exactly the same structure'], correctAnswer: 1, explanation: 'The Iroquois Confederacy united six nations under a Great Council while preserving each nation\'s autonomy — similar to how the UAE federation unites seven emirates under federal authority while preserving local governance.' },
    { id: 'g7d3', question: 'In economics, what does the "invisible hand" refer to?', type: 'multiple-choice', options: ['Government regulation of markets', 'The self-regulating nature of markets where individual self-interest can benefit society', 'A conspiracy by wealthy merchants', 'Charitable donations by businesses'], correctAnswer: 1, explanation: 'Adam Smith\'s "invisible hand" describes how individuals pursuing their own self-interest in a free market can unintentionally create social benefits, as if guided by an unseen force.' },
    { id: 'g7d4', question: 'Which of the following is an example of "soft power" in international relations?', type: 'multiple-choice', options: ['Military intervention', 'Economic sanctions', 'Cultural diplomacy and educational exchange programs', 'Trade embargoes'], correctAnswer: 2, explanation: 'Soft power, a concept by Joseph Nye, refers to influencing others through attraction and persuasion rather than coercion — cultural diplomacy and educational exchanges are classic examples.' },
    { id: 'g7d5', question: 'A government censors news about a protest. A citizen shares the information on social media. Which ethical framework would MOST strongly support the citizen\'s action?', type: 'multiple-choice', options: ['Authoritarianism', 'Social contract theory (citizens have rights that governments must respect)', 'Legal positivism (whatever the law says is right)', 'Cultural relativism'], correctAnswer: 1, explanation: 'Social contract theory holds that governments derive their authority from the consent of the governed, and citizens retain fundamental rights — including free expression — that governments cannot legitimately suppress.' },
    { id: 'g7d6', question: 'What is the "tragedy of the commons" and how does it relate to environmental policy?', type: 'multiple-choice', options: ['It refers to natural disasters that affect everyone', 'It describes how shared resources are depleted when individuals act in self-interest, requiring regulation', 'It means common people suffer most from environmental damage', 'It is a historical event'], correctAnswer: 1, explanation: 'The tragedy of the commons occurs when individuals overuse a shared resource (like fishing grounds) for personal gain, depleting it for everyone — this is why environmental regulations are necessary.' },
    { id: 'g7d7', question: 'How does the concept of "cultural relativism" differ from "universal human rights"?', type: 'multiple-choice', options: ['They are the same concept', 'Cultural relativism argues values are culture-specific; universal human rights asserts some rights apply to all people regardless of culture', 'Cultural relativism is always wrong', 'Universal human rights only apply in Western countries'], correctAnswer: 1, explanation: 'Cultural relativism holds that moral standards vary between cultures, while universal human rights theory argues that certain fundamental rights exist regardless of cultural differences — creating an important philosophical tension.' },
    { id: 'g7d8', question: 'Which factor MOST significantly contributed to the fall of the Ottoman Empire?', type: 'multiple-choice', options: ['A single military defeat', 'Internal stagnation, failure to industrialize, rising nationalism, and external pressure from European powers', 'Religious conflict alone', 'Natural disasters'], correctAnswer: 1, explanation: 'The Ottoman Empire declined due to a complex combination of internal factors (stagnation, resistance to reform) and external pressures (industrialized Europe, nationalist movements), not any single cause.' },
    { id: 'g7d9', question: 'In a research study, a researcher intentionally excludes data that contradicts their hypothesis. Which principle does this violate?', type: 'multiple-choice', options: ['Efficiency principle', 'Academic integrity and objectivity', 'Cost-benefit analysis', 'Pragmatic research principle'], correctAnswer: 1, explanation: 'Cherry-picking data to support a hypothesis violates academic integrity and objectivity — researchers must report all findings honestly, even those that contradict their expectations.' },
    { id: 'g7d10', question: 'A country has high GDP but also high income inequality. Which measure would give a MORE accurate picture of average citizen well-being?', type: 'multiple-choice', options: ['GDP alone', 'GDP per capita adjusted for the Gini coefficient (inequality measure)', 'Total exports', 'Population size'], correctAnswer: 1, explanation: 'GDP alone does not reveal income distribution. Adjusting for the Gini coefficient — which measures inequality — gives a more accurate picture of how wealth is actually distributed among citizens.' },
  ],
  'G8': [
    { id: 'g8d1', question: 'Which philosopher argued that the social contract requires citizens to obey laws ONLY if those laws reflect the "general will" of the people?', type: 'multiple-choice', options: ['Thomas Hobbes', 'John Locke', 'Jean-Jacques Rousseau', 'Niccolò Machiavelli'], correctAnswer: 2, explanation: 'Rousseau\'s concept of the "general will" holds that legitimate political authority comes from the collective will of citizens, not from monarchy or force.' },
    { id: 'g8d2', question: 'What is the "Iron Law of Oligarchy" and how does it challenge democratic ideals?', type: 'multiple-choice', options: ['It means all governments use iron weapons', 'It argues that even democratic organizations inevitably evolve into oligarchies controlled by a small elite', 'It is a law about iron production', 'It means oligarchy is the best form of government'], correctAnswer: 1, explanation: 'Robert Michels\' Iron Law of Oligarchy suggests that even in democratic organizations, a small group eventually consolidates power due to specialization, information control, and organizational complexity.' },
    { id: 'g8d3', question: 'How does the concept of "manifest destiny" compare to contemporary concepts of cultural imperialism?', type: 'multiple-choice', options: ['They are unrelated', 'Both justify expansion of influence, but manifest destiny was framed as divine right while cultural imperialism operates through economic and media influence', 'Manifest destiny was beneficial while cultural imperialism is harmful', 'They are the exact same concept in different time periods'], correctAnswer: 1, explanation: 'Manifest destiny was the 19th-century belief that American expansion was divinely ordained, while modern cultural imperialism spreads influence through media, economics, and technology rather than territorial conquest.' },
    { id: 'g8d4', question: 'A country\'s constitution guarantees freedom of speech, but also prohibits hate speech. Which constitutional principle does this tension illustrate?', type: 'multiple-choice', options: ['Constitutional contradiction', 'Balancing of competing rights and legitimate limitations on freedoms', 'Government hypocrisy', 'A flawed constitution'], correctAnswer: 1, explanation: 'All constitutions must balance competing rights — freedom of expression versus protection from harm. This is not a contradiction but a necessary limitation to protect the rights and safety of others.' },
    { id: 'g8d5', question: 'In the context of global trade, what is "comparative advantage" and why does it matter?', type: 'multiple-choice', options: ['It means one country is better at everything', 'It means countries benefit from specializing in what they produce most efficiently and trading for the rest', 'It only applies to wealthy nations', 'It is the same as absolute advantage'], correctAnswer: 1, explanation: 'Comparative advantage, developed by David Ricardo, shows that even if one country is better at producing everything, both countries benefit from trade when each specializes in their most efficient production.' },
    { id: 'g8d6', question: 'Which statement BEST describes the relationship between industrialization and social inequality during the 19th century?', type: 'multiple-choice', options: ['Industrialization eliminated all inequality', 'Industrialization created new forms of inequality even as it increased overall wealth', 'Industrialization only benefited the wealthy', 'Social inequality was unchanged by industrialization'], correctAnswer: 1, explanation: 'The Industrial Revolution generated unprecedented wealth but also created harsh working conditions and new class divisions, demonstrating that economic growth alone does not ensure social justice.' },
    { id: 'g8d7', question: 'What is the fundamental difference between criminal justice and restorative justice?', type: 'multiple-choice', options: ['There is no difference', 'Criminal justice focuses on punishment of offenders; restorative justice focuses on repairing harm to victims and communities', 'Restorative justice is less effective', 'Criminal justice is only used in Western countries'], correctAnswer: 1, explanation: 'Criminal justice asks "what law was broken and how should the offender be punished?" while restorative justice asks "who was harmed and how can the harm be repaired?" — fundamentally different approaches.' },
    { id: 'g8d8', question: 'A historian discovers that a widely-accepted historical account was based on forged documents. Which methodological principle should guide their response?', type: 'multiple-choice', options: ['Ignore the discovery to maintain consensus', 'Apply source criticism, verify through independent evidence, and revise the historical narrative accordingly', 'Assume all historical documents are forged', 'Only trust documents from the last 100 years'], correctAnswer: 1, explanation: 'Source criticism — evaluating the authenticity, reliability, and bias of evidence — is fundamental to historical methodology. When forgeries are discovered, historians must revise their accounts based on verified evidence.' },
    { id: 'g8d9', question: 'Which concept BEST explains why democracies sometimes make decisions that most citizens disagree with?', type: 'multiple-choice', options: ['Democratic failure', 'The principal-agent problem (elected representatives may not act according to constituents\' preferences)', 'Voter ignorance', 'Conspiracy theories'], correctAnswer: 1, explanation: 'The principal-agent problem describes the disconnect between voters (principals) and their elected representatives (agents), who may pursue their own interests rather than those of their constituents.' },
    { id: 'g8d10', question: 'In ethical reasoning, what is the difference between a "right" and a "duty"?', type: 'multiple-choice', options: ['They are the same thing', 'A right is an entitlement to something; a duty is an obligation to act or refrain from acting', 'Rights are more important than duties', 'Duties only apply to governments'], correctAnswer: 1, explanation: 'Rights and duties are correlative — for every right, there is a corresponding duty. Your right to education creates a duty for society to provide it, and your right to safety creates a duty for others not to harm you.' },
  ],
  'G9': [
    { id: 'g9d1', question: 'Which political theorist argued that power is not merely repressive but also productive — meaning it shapes knowledge, norms, and social realities?', type: 'multiple-choice', options: ['Karl Marx', 'John Stuart Mill', 'Michel Foucault', 'Plato'], correctAnswer: 2, explanation: 'Foucault\'s analysis of power showed that it doesn\'t merely suppress — it actively produces knowledge, norms, and social categories that shape how we think and behave.' },
    { id: 'g9d2', question: 'What is the "democratic peace theory" and what evidence supports it?', type: 'multiple-choice', options: ['It claims democracy brings world peace', 'It argues that democracies rarely go to war with each other, supported by statistical analysis of historical conflicts', 'It means only democracies have armies', 'It was proven false by all historical evidence'], correctAnswer: 1, explanation: 'Democratic peace theory, supported by extensive empirical research, holds that while democracies fight wars, they rarely fight wars against other democracies — though the reasons for this remain debated.' },
    { id: 'g9d3', question: 'In international law, what is the doctrine of "Responsibility to Protect" (R2P) and how does it challenge state sovereignty?', type: 'multiple-choice', options: ['It means powerful countries can invade any country', 'It holds that sovereignty includes the duty to protect citizens, and when a state fails, the international community has a responsibility to intervene', 'It eliminates all national sovereignty', 'It only applies to economic sanctions'], correctAnswer: 1, explanation: 'R2P, adopted by the UN in 2005, redefines sovereignty as a responsibility rather than an absolute right — if a state fails to protect its citizens from mass atrocities, the international community may intervene.' },
    { id: 'g9d4', question: 'Which economic concept explains why foreign aid sometimes fails to improve conditions in developing countries?', type: 'multiple-choice', options: ['Aid is always harmful', 'Institutional capture (aid can be diverted by corrupt elites and weaken local institutions)', 'Developing countries do not need aid', 'Aid only works in small amounts'], correctAnswer: 1, explanation: 'Institutional capture occurs when aid flows through corrupt channels, enriching elites rather than helping the intended beneficiaries, and can even undermine local governance and economic development.' },
    { id: 'g9d5', question: 'What is the "banality of evil" as described by Hannah Arendt, and how does it apply to civic responsibility?', type: 'multiple-choice', options: ['It means evil is always obvious', 'It describes how ordinary people can commit terrible acts by simply following orders without critical thinking', 'It only applies to historical events', 'It means evil is banal and unimportant'], correctAnswer: 1, explanation: 'Arendt\'s concept, based on the Eichmann trial, shows that great evil does not require monstrous people — it can result from ordinary individuals who fail to think critically about their actions and responsibilities.' },
    { id: 'g9d6', question: 'How does Amartya Sen\'s "capability approach" differ from GDP as a measure of development?', type: 'multiple-choice', options: ['They measure the same thing', 'GDP measures economic output; the capability approach measures what people are actually able to do and be', 'Sen\'s approach is only theoretical', 'GDP is always more accurate'], correctAnswer: 1, explanation: 'Sen\'s capability approach argues that development should be measured by the real freedoms and capabilities people have — such as the ability to be healthy, educated, and politically engaged — not just economic output.' },
    { id: 'g9d7', question: 'In the context of digital governance, what is the "digital divide" and how does it threaten democratic participation?', type: 'multiple-choice', options: ['It refers to broken computers', 'It describes unequal access to digital technology and literacy, which can exclude disadvantaged groups from civic participation in an increasingly digital society', 'It only affects elderly people', 'It is being solved naturally by technology'], correctAnswer: 1, explanation: 'The digital divide creates a two-tier society where those without digital access cannot participate fully in modern civic life, access government services, or engage in digital democracy — deepening existing inequalities.' },
    { id: 'g9d8', question: 'A country implements a universal basic income (UBI). Which philosophical argument BEST supports this policy?', type: 'multiple-choice', options: ['UBI is always the cheapest option', 'UBI ensures all citizens have the minimum material conditions necessary to exercise their freedoms meaningfully', 'UBI eliminates the need for government', 'UBI is supported by all economists'], correctAnswer: 1, explanation: 'The philosophical case for UBI rests on the idea that meaningful freedom requires material security — you cannot truly exercise your liberties if you are struggling to meet basic needs.' },
    { id: 'g9d9', question: 'What is the fundamental critique that post-colonial theory makes of Western development models?', type: 'multiple-choice', options: ['Western models are perfect', 'They impose Western cultural and economic assumptions as universal, ignoring indigenous knowledge and perpetuating dependency', 'Post-colonial theory rejects all development', 'Only Western countries can develop'], correctAnswer: 1, explanation: 'Post-colonial theorists argue that Western development models often replicate colonial power structures by presenting Western cultural and economic norms as universal standards that "developing" nations must adopt.' },
    { id: 'g9d10', question: 'In evaluating conflicting historical narratives about a colonial event, which methodological approach is MOST rigorous?', type: 'multiple-choice', options: ['Accept the narrative from the more powerful country', 'Triangulate multiple independent sources from different perspectives, evaluate source reliability, and identify systematic biases', 'Only trust written documents', 'Choose the most recent interpretation'], correctAnswer: 1, explanation: 'Triangulation — comparing multiple independent sources from different perspectives — is the most rigorous method for evaluating conflicting historical narratives, as it helps identify bias and approach closer to truth.' },
  ],
};
