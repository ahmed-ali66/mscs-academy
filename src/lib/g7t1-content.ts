// ═══════════════════════════════════════════════════════════════
// G7 TERM 1 — REAL TEXTBOOK CONTENT
// Extracted from MoE MSCS Student Textbook Grade 7 Volume 1
// ═══════════════════════════════════════════════════════════════

export interface LessonContent {
  lessonId: string;
  keyVocabulary: string[];
  reading1Title: string;
  reading1Content: string;
  reading2Title?: string;
  reading2Content?: string;
  reading1Time?: number;
  reading2Time?: number;
  kwlExplanation?: string;
  discussionQuestions: string[];
  keyFacts: string[];
  visualType: 'none' | 'map' | 'timeline' | 'diagram' | 'chart' | 'venn' | 'mindmap' | 'piechart';
  visualData?: Record<string, unknown>;
  quizQuestions: {
    id: string;
    question: string;
    options: string[];
    correctAnswer: number;
    explanation: string;
  }[];
  interactiveStrategies?: {
    strategy: string;
    description: string;
    duration: number;
    instructions: string;
  }[];
}

const KWL_EXPLANATION = "KWL stands for Know, Want to know, Learned. It's a thinking tool that helps you track your learning. Start by writing what you already Know about the topic, then write what you Want to know, and after the lesson write what you Learned!";

// ═══════════════════════════════════════════════════════════════
// UNIT 1: INDIVIDUAL RESPONSIBILITIES AND DUTIES (5 lessons)
// ═══════════════════════════════════════════════════════════════

export const g7t1Unit1: LessonContent[] = [
  {
    lessonId: 'G7_T1_Unit 1_l1',
    keyVocabulary: ['duty', 'responsibility', 'obligation', 'accountability', 'commitment'],
    reading1Title: 'Understanding Duties and Responsibilities',
    reading1Content: `Every person has duties and responsibilities that shape how they interact with their family, community, and society. A duty is something you are required to do — it is an obligation that comes from your role in life. A responsibility is something you should do — it involves being accountable for your actions and their consequences.

Duties can come from different sources. Some duties come from the law — for example, all UAE citizens have a duty to obey the laws of the country. Other duties come from moral or religious beliefs — for example, the duty to be honest and truthful. Still other duties come from social roles — for example, a teacher has a duty to educate students, and a doctor has a duty to care for patients.

In Islam, duties are known as "fara'id" (obligatory acts) and "wajib" (required actions). These include the Five Pillars of Islam — Shahada (declaration of faith), Salah (prayer), Zakat (charity), Sawm (fasting during Ramadan), and Hajj (pilgrimage to Makkah). These are not optional; they are fundamental duties that every Muslim must fulfil to the best of their ability.

Responsibilities, on the other hand, often go beyond what is strictly required. Being responsible means taking ownership of your actions, making good choices even when no one is watching, and considering how your behaviour affects others. A responsible student completes their homework on time, helps classmates who are struggling, and takes care of school property.

The UAE Constitution outlines both rights and responsibilities for citizens and residents. Article 7 states that the UAE society is based on the principles of solidarity, tolerance, and cooperation. This means that every person in the UAE has a responsibility to contribute to these principles through their daily actions and interactions.`,
    reading2Title: 'Wadeema\'s Law: Protecting Children\'s Rights',
    reading2Content: `One of the most important legal frameworks in the UAE regarding duties towards children is Federal Law No. 3 of 2016, commonly known as "Wadeema's Law." This law was named after a young girl whose tragic case highlighted the urgent need for stronger child protection legislation in the UAE.

Wadeema's Law establishes clear duties and responsibilities for parents, guardians, and the state towards children. Key provisions include:

1. The right of every child to life, security, and care — parents must provide food, shelter, clothing, education, and healthcare
2. Protection from all forms of abuse, neglect, and exploitation
3. The right to education — parents must enrol their children in school and ensure regular attendance
4. Protection from violence — children must not be subjected to physical or psychological punishment that harms their dignity
5. The right to express opinions — children have the right to be heard in matters that affect them

The law also places duties on the community and institutions. Schools must report suspected child abuse. Healthcare providers must report injuries that may indicate abuse. Government agencies must provide support services for children in need.

This law demonstrates how duties and responsibilities operate at multiple levels — individual, family, community, and government. When everyone fulfils their duties, children are protected and society as a whole benefits.`,
    reading1Time: 7,
    reading2Time: 5,
    kwlExplanation: KWL_EXPLANATION,
    discussionQuestions: [
      'What is the difference between a duty and a responsibility? Give an example of each from your daily life.',
      'How do Islamic duties like the Five Pillars shape a Muslim\'s daily life and decisions?',
      'Why was Wadeema\'s Law necessary, and what duties does it place on parents?',
      'What responsibilities do schools and communities have towards protecting children?',
      'How do the principles of the UAE Constitution connect to the idea of duties and responsibilities?',
    ],
    keyFacts: [
      'A duty is an obligation you are required to fulfil; a responsibility is being accountable for your actions',
      'Duties can come from law, religion, or social roles',
      'The Five Pillars of Islam are fundamental duties (fara\'id) for every Muslim',
      'Wadeema\'s Law (Federal Law No. 3 of 2016) protects children\'s rights in the UAE',
      'Parents have a legal duty to provide food, shelter, education, and healthcare for their children',
      'Schools and healthcare providers have a duty to report suspected child abuse',
      'The UAE Constitution is built on principles of solidarity, tolerance, and cooperation',
      'Responsibilities go beyond what is required — they involve making good choices independently',
    ],
    visualType: 'venn',
    visualData: {
      leftTitle: 'Duties',
      rightTitle: 'Responsibilities',
      centerTitle: 'Both',
      leftItems: ['Required by law', 'Religious obligations', 'Social role expectations', 'Cannot be ignored'],
      rightItems: ['Voluntary accountability', 'Personal choice', 'Ethical behaviour', 'Beyond minimum'],
      centerItems: ['Affect others', 'Shape character', 'Build society', 'UAE values'],
    },
    quizQuestions: [
      { id: 'u1l1q1', question: 'What is the key difference between a duty and a responsibility?', options: ['They are the same thing', 'A duty is required; a responsibility involves being accountable for your choices', 'Responsibilities are more important', 'Duties only apply to adults'], correctAnswer: 1, explanation: 'A duty is an obligation you must fulfil, while a responsibility involves taking ownership of your actions and their consequences.' },
      { id: 'u1l1q2', question: 'Which of the following is one of the Five Pillars of Islam?', options: ['Reciting the Quran daily', 'Zakat (charity)', 'Travelling to Madinah', 'Fasting every Monday'], correctAnswer: 1, explanation: 'Zakat (charitable giving) is one of the Five Pillars of Islam, along with Shahada, Salah, Sawm, and Hajj.' },
      { id: 'u1l1q3', question: 'What is Wadeema\'s Law?', options: ['A law about traffic safety', 'Federal Law No. 3 of 2016 protecting children\'s rights in the UAE', 'A law about school uniforms', 'A law about environmental protection'], correctAnswer: 1, explanation: 'Wadeema\'s Law (Federal Law No. 3 of 2016) establishes legal protections for children including the right to life, education, and protection from abuse.' },
      { id: 'u1l1q4', question: 'What duty does Wadeema\'s Law place on schools?', options: ['To provide free meals', 'To report suspected child abuse', 'To give students extra homework', 'To organize field trips'], correctAnswer: 1, explanation: 'Under Wadeema\'s Law, schools have a legal duty to report any suspected child abuse to the authorities.' },
      { id: 'u1l1q5', question: 'According to the UAE Constitution, what principles is UAE society based on?', options: ['Competition and individualism', 'Solidarity, tolerance, and cooperation', 'Wealth and power', 'Tradition and modernity only'], correctAnswer: 1, explanation: 'Article 7 of the UAE Constitution states that society is based on the principles of solidarity, tolerance, and cooperation.' },
    ],
    interactiveStrategies: [
      { strategy: 'Think-Pair-Share', description: 'Identify your own duties and responsibilities in daily life', duration: 5, instructions: 'Think about 3 duties and 3 responsibilities you have. Share with your partner and compare how they are similar or different.' },
      { strategy: 'Role Playing', description: 'Act out a scenario showing duties vs responsibilities in a family', duration: 7, instructions: 'In groups of 3, role-play a family situation where one person has a duty and another has a responsibility. Show how both contribute to the family\'s well-being.' },
    ],
  },
  {
    lessonId: 'G7_T1_Unit 1_l2',
    keyVocabulary: ['parenthood', 'nurture', 'protection', 'upbringing', 'Wadeema\'s Law'],
    reading1Title: 'The Duties of Parents Towards Their Children',
    reading1Content: `Parents have some of the most important duties in any society. The relationship between parents and children is the foundation of the family, and the family is the building block of the community. In the UAE, both Islamic teachings and national law recognise the critical importance of parental duties.

Islamic teachings emphasise the duties of parents extensively. The Prophet Muhammad (peace be upon him) said: "Each of you is a shepherd and each of you is responsible for his flock." This hadith establishes that parents are responsible for the well-being, education, and moral development of their children. Parental duties in Islam include:

1. Providing for basic needs — food, clothing, shelter, and healthcare
2. Providing education — both religious and worldly knowledge
3. Teaching moral values — honesty, kindness, respect, and compassion
4. Protecting children from harm — physical, emotional, and spiritual
5. Treating all children fairly and justly — no favouritism based on gender

The UAE has incorporated these principles into its legal framework. Under UAE law, parents are legally obligated to:
- Ensure their children attend school regularly
- Provide a safe and healthy home environment
- Protect children from all forms of abuse and neglect
- Make decisions in the best interest of the child
- Teach children respect for the law and for others

When parents fail in their duties, the state has the authority and responsibility to intervene. This is where Wadeema's Law plays a crucial role — it provides the legal mechanism to protect children when parental duties are not being fulfilled. The law sets minimum standards for parental care and establishes consequences for neglect or abuse.`,
    reading2Title: 'The Story of Wadeema and Child Protection in the UAE',
    reading2Content: `The case of Wadeema, a young Emirati girl who suffered terrible abuse, became a turning point in UAE child protection legislation. Her story shocked the nation and led directly to the drafting and passing of Federal Law No. 3 of 2016, known as Wadeema's Law.

Before Wadeema's Law, there was no comprehensive federal legislation specifically addressing child protection in the UAE. Cases of child abuse were handled under general criminal law, which did not adequately address the unique vulnerabilities of children or the specific duties of parents and guardians towards them.

Wadeema's Law established several key protections:

1. Definition of the child — anyone under the age of 18
2. Comprehensive prohibition of all forms of child abuse, neglect, and exploitation
3. Mandatory reporting requirements for professionals who work with children
4. Establishment of child protection units within government agencies
5. Provisions for removing children from dangerous environments
6. Penalties for those who fail in their duty to protect children

The law also recognises that child protection is a shared responsibility. While parents have primary duties, the entire community — including teachers, doctors, neighbours, and religious leaders — has a responsibility to report concerns and support children in need.

Since its enactment, Wadeema's Law has been complemented by additional measures including the Child Protection Centre under the Ministry of Interior, hotlines for reporting abuse, and school-based awareness programmes that educate children about their rights.`,
    reading1Time: 7,
    reading2Time: 6,
    kwlExplanation: KWL_EXPLANATION,
    discussionQuestions: [
      'What does the hadith "Each of you is a shepherd" teach about parental responsibilities?',
      'How does UAE law reinforce Islamic teachings about parental duties?',
      'Why was Wadeema\'s Law necessary, and what gap did it fill in UAE legislation?',
      'What are the mandatory reporting requirements, and who must follow them?',
      'How is child protection a shared responsibility between parents, community, and the state?',
    ],
    keyFacts: [
      'Parents have primary duties to provide for, educate, and protect their children',
      'Islam teaches that parents are "shepherds" responsible for their flock',
      'Islamic parental duties include providing basic needs, education, moral guidance, and protection',
      'UAE law requires parents to ensure school attendance and provide a safe home',
      'Wadeema\'s Law (2016) was the first comprehensive federal child protection legislation',
      'Before Wadeema\'s Law, child abuse was handled under general criminal law',
      'Professionals working with children have mandatory reporting duties',
      'Child protection is a shared responsibility: parents, community, and state',
    ],
    visualType: 'timeline',
    visualData: {
      title: 'Child Protection Milestones in the UAE',
      events: [
        { year: 'Before 2016', event: 'No comprehensive federal child protection law existed' },
        { year: '2016', event: 'Wadeema\'s Law (Federal Law No. 3) enacted' },
        { year: '2017', event: 'Child Protection Centre established under Ministry of Interior' },
        { year: '2018+', event: 'School awareness programmes and reporting hotlines launched' },
      ],
    },
    quizQuestions: [
      { id: 'u1l2q1', question: 'What does the hadith "Each of you is a shepherd" teach about parenthood?', options: ['Parents should treat children like animals', 'Parents are responsible for the well-being and development of their children', 'Only fathers have responsibilities', 'Children should take care of their parents'], correctAnswer: 1, explanation: 'The hadith establishes that parents, like shepherds, are responsible for guiding, protecting, and caring for those under their charge.' },
      { id: 'u1l2q2', question: 'What gap did Wadeema\'s Law fill in UAE legislation?', options: ['It created traffic laws', 'It provided the first comprehensive federal child protection legislation', 'It regulated school fees', 'It established prayer times'], correctAnswer: 1, explanation: 'Before 2016, there was no comprehensive federal law specifically addressing child protection in the UAE.' },
      { id: 'u1l2q3', question: 'Which of these is a legal duty of parents under UAE law?', options: ['Buying expensive toys', 'Ensuring children attend school regularly', 'Letting children choose their own bedtime', 'Giving children pocket money'], correctAnswer: 1, explanation: 'UAE law requires parents to ensure regular school attendance as part of their legal duty towards their children.' },
      { id: 'u1l2q4', question: 'Who has mandatory reporting duties under Wadeema\'s Law?', options: ['Only police officers', 'Professionals who work with children, including teachers and doctors', 'Only family members', 'No one — reporting is voluntary'], correctAnswer: 1, explanation: 'Wadeema\'s Law requires professionals who work with children to report suspected abuse or neglect.' },
      { id: 'u1l2q5', question: 'According to the lesson, child protection is whose responsibility?', options: ['Only parents', 'Only the government', 'Only teachers', 'A shared responsibility of parents, community, and the state'], correctAnswer: 3, explanation: 'Child protection is a shared responsibility — parents have primary duties, but the community and state also play crucial roles.' },
    ],
    interactiveStrategies: [
      { strategy: 'Case Study Analysis', description: 'Analyze a scenario where parental duties are not being met', duration: 8, instructions: 'Read the scenario provided by your teacher. Identify which parental duties are being neglected and what actions could be taken under Wadeema\'s Law. Present your analysis to the class.' },
      { strategy: 'Collaborative Work', description: 'Create a "Duties of Parents" poster with Islamic and legal perspectives', duration: 7, instructions: 'In groups of 4, create a poster comparing Islamic teachings and UAE law on parental duties. Use one side for Islamic duties and one side for legal duties. Highlight where they overlap.' },
    ],
  },
  {
    lessonId: 'G7_T1_Unit 1_l3',
    keyVocabulary: ['filial piety', 'respect', 'care', 'gratitude', 'honour'],
    reading1Title: 'The Duties of Sons and Daughters Towards Their Parents',
    reading1Content: `Just as parents have duties towards their children, children also have important duties towards their parents. In Islamic tradition, the duty of children to honour and care for their parents is second only to the duty to worship Allah. This concept is deeply embedded in both religious teachings and Emirati cultural values.

The Quran emphasises this duty in several verses. In Surah Al-Isra (17:23), Allah says: "Your Lord has decreed that you worship none but Him, and that you be kind to parents. Whether one or both of them attain old age in your life, say not to them a word of contempt, nor repel them, but address them in terms of honour." This verse establishes kindness to parents as a divine commandment — not a suggestion, but a decree.

The duties of children towards their parents include:

1. Respect and honour — speaking to parents with kindness and never using harsh language
2. Obedience — following parents' reasonable instructions and guidance
3. Care in old age — providing physical, emotional, and financial support when parents become elderly
4. Gratitude — acknowledging and appreciating the sacrifices parents have made
5. Du'a (supplication) — praying for parents' well-being and forgiveness

The Prophet Muhammad (peace be upon him) emphasised these duties repeatedly. He said: "The pleasure of Allah lies in the pleasure of the parent, and the anger of Allah lies in the anger of the parent." This hadith shows that how we treat our parents is directly connected to our relationship with Allah.

In UAE culture, these Islamic teachings are reinforced by strong cultural traditions. Emirati families are typically close-knit, with multiple generations often living together or near each other. The majlis tradition allows elders to share wisdom and experience with younger family members, and children are expected to serve and respect their elders.`,
    reading2Title: 'Balancing Rights and Duties in the Family',
    reading2Content: `A healthy family is built on a balance of rights and duties. Parents have rights over their children, and children have rights over their parents. This reciprocity — where each family member both gives and receives — is what creates a strong, resilient family unit.

In the UAE, this balance is reflected in both law and culture. The Personal Status Law recognises the mutual obligations between family members. Children must obey and respect their parents, but parents must also treat their children fairly, provide for their needs, and make decisions in their best interest.

The concept of "birr al-walidayn" (righteousness towards parents) in Islam goes beyond simple obedience. It includes:
- Speaking gently and respectfully, even when disagreeing
- Visiting and maintaining contact regularly
- Supporting them financially when they are in need
- Caring for them when they are ill or elderly
- Continuing to pray for them after their passing

However, this duty is not unlimited. Islamic scholars emphasise that children should not obey parents in matters that contradict Islamic teachings or that cause harm. The principle is: "There is no obedience to any creation in disobedience to the Creator." This means that while children must be respectful even when declining a parent's unreasonable request, their ultimate duty is to Allah.

The UAE's family values reflect this balanced approach. The government supports families through policies that make it easier to care for elderly parents, including home care services and retirement communities that honour the dignity of older Emiratis.`,
    reading1Time: 7,
    reading2Time: 5,
    kwlExplanation: KWL_EXPLANATION,
    discussionQuestions: [
      'What does the Quran say about how children should treat their parents?',
      'How does the hadith connect the pleasure of Allah to the pleasure of parents?',
      'What are the limits of obedience to parents according to Islamic teachings?',
      'How do UAE cultural traditions reinforce Islamic teachings about filial duties?',
      'Why is a balance of rights and duties important for a healthy family?',
    ],
    keyFacts: [
      'Kindness to parents is a divine commandment in Islam, second only to worshipping Allah',
      'Surah Al-Isra (17:23) commands children to speak to parents with honour and respect',
      'Children\'s duties include respect, obedience, care in old age, gratitude, and du\'a',
      '"The pleasure of Allah lies in the pleasure of the parent" — Hadith',
      'Birr al-walidayn (righteousness towards parents) goes beyond simple obedience',
      'There is no obedience to creation in disobedience to the Creator',
      'UAE culture reinforces filial duties through close-knit family structures and the majlis tradition',
      'The UAE government supports families caring for elderly parents through various policies',
    ],
    visualType: 'diagram',
    visualData: {
      title: 'Children\'s Duties Towards Parents',
      items: [
        { label: 'Respect & Honour', description: 'Speak kindly, never use harsh language' },
        { label: 'Obedience', description: 'Follow reasonable guidance and instructions' },
        { label: 'Care in Old Age', description: 'Physical, emotional, and financial support' },
        { label: 'Gratitude', description: 'Acknowledge sacrifices parents made' },
        { label: 'Du\'a', description: 'Pray for parents\' well-being and forgiveness' },
      ],
    },
    quizQuestions: [
      { id: 'u1l3q1', question: 'In Islam, what is the duty of children towards parents ranked after?', options: ['Wealth accumulation', 'Only worshipping Allah', 'Community service', 'Education'], correctAnswer: 1, explanation: 'In Islam, kindness to parents is second only to the duty to worship Allah, as stated in the Quran and hadith.' },
      { id: 'u1l3q2', question: 'What does "birr al-walidayn" mean?', options: ['Financial support for parents', 'Righteousness towards parents — going beyond simple obedience', 'Living with parents forever', 'Obeying parents in everything'], correctAnswer: 1, explanation: 'Birr al-walidayn means righteousness towards parents, which includes respect, care, gentleness, and praying for them — far beyond mere obedience.' },
      { id: 'u1l3q3', question: 'What is the Islamic principle when a parent asks something that contradicts Islamic teachings?', options: ['Obey the parent anyway', 'There is no obedience to creation in disobedience to the Creator', 'Argue aggressively with the parent', 'Ignore the parent completely'], correctAnswer: 1, explanation: 'Islamic scholars establish that while respect must always be maintained, a child should not obey parents in matters that contradict Islamic principles.' },
      { id: 'u1l3q4', question: 'How does the majlis tradition reinforce filial duties in the UAE?', options: ['It has no connection to family duties', 'It allows elders to share wisdom and children to serve and respect them', 'It is only for government decisions', 'It replaces the need for family care'], correctAnswer: 1, explanation: 'The majlis tradition creates a space where elders share wisdom and experience, and younger family members demonstrate respect and service.' },
      { id: 'u1l3q5', question: 'According to Surah Al-Isra (17:23), how should children address their parents?', options: ['However they want', 'In terms of honour, never with contempt', 'Only when spoken to first', 'Only in formal settings'], correctAnswer: 1, explanation: 'The Quran specifically commands children to address their parents in terms of honour and never use words of contempt.' },
    ],
    interactiveStrategies: [
      { strategy: 'Reflective Writing', description: 'Write a letter of gratitude to your parents or guardians', duration: 6, instructions: 'Take 6 minutes to write a heartfelt letter to your parents or guardians. Thank them for specific things they have done for you. Include at least one way you will show more gratitude in the future.' },
      { strategy: 'Group Discussion', description: 'Discuss the balance between rights and duties in your own family', duration: 7, instructions: 'In groups of 4, discuss: What are your rights as a child? What are your duties? How do these create balance? Share one insight with the class.' },
    ],
  },
  {
    lessonId: 'G7_T1_Unit 1_l4',
    keyVocabulary: ['moral rule', 'moral imperative', 'ethics', 'conscience', 'universal values'],
    reading1Title: 'Moral Rules and the Moral Imperative',
    reading1Content: `Moral rules are the principles that guide human behaviour towards what is right and away from what is wrong. They exist in every society and every religion, forming the foundation of how people interact with each other and make decisions. But where do moral rules come from, and why should we follow them?

Sources of moral rules include:
1. Divine revelation — Commands from Allah as revealed in the Quran and the teachings of the Prophet Muhammad (peace be upon him)
2. Reason — Human intellect can determine right from wrong through logical thinking
3. Conscience — The inner sense that tells us when something is right or wrong
4. Social consensus — Agreed-upon rules within a community or society
5. Natural law — Universal principles that can be observed in the nature of human beings

In Islamic tradition, moral rules are not merely suggestions — they are commanded by Allah and carry both worldly and spiritual consequences. The Quran describes itself as a "guidance for the righteous" (Surah Al-Baqarah 2:2), establishing that moral rules are divinely ordained for human benefit.

A moral imperative goes beyond a regular moral rule. It is a principle that must be followed unconditionally, regardless of circumstances or personal preference. For example, the prohibition against killing innocent people is a moral imperative — it is not optional and cannot be overridden by personal desire.

The concept of moral imperative is closely linked to the idea of "maqasid al-shariah" (the objectives of Islamic law), which identifies five essential values that must be protected:
1. Life (hifz al-nafs)
2. Religion (hifz al-din)
3. Intellect (hifz al-aql)
4. Lineage (hifz al-nasl)
5. Property (hifz al-mal)

These five objectives provide the framework for understanding why certain moral rules exist and why they are imperative rather than optional.`,
    reading2Title: 'The Earth Charter: A Universal Moral Framework',
    reading2Content: `The Earth Charter is a declaration of fundamental ethical principles for building a just, sustainable, and peaceful global society. Created through a decade-long, worldwide, cross-cultural dialogue, it was launched at The Hague in 2000 and has since been endorsed by thousands of organisations and individuals around the world.

The Earth Charter contains four main pillars:
1. Respect and Care for the Community of Life
2. Ecological Integrity
3. Social and Economic Justice
4. Democracy, Nonviolence, and Peace

While the Earth Charter is a secular document, its principles align closely with Islamic teachings. The Quran emphasises that human beings are "khalifa" (stewards) on Earth, with a responsibility to care for the environment and all of creation. The Prophet Muhammad (peace be upon him) taught that planting a tree, feeding an animal, and preserving water are all acts of worship.

In the UAE, environmental stewardship has become a national priority. The UAE government has established initiatives such as:
- Masdar City — a pioneer in sustainable urban development
- The UAE Energy Strategy 2050 — aiming for 50% clean energy
- The Ministry of Climate Change and Environment — protecting natural resources
- The Zayed International Foundation for the Environment — continuing Sheikh Zayed's environmental legacy

Sheikh Zayed bin Sultan Al Nahyan was renowned for his love of nature and his commitment to environmental conservation. He said: "On land and in the sea, our forefathers lived and survived in this environment. They were able to do so only because they recognised the need to conserve it, to take from it only what they needed to live, and to preserve it for succeeding generations."

Voluntary work is another expression of moral imperative. When people choose to help others without expecting reward, they are acting on a moral imperative that goes beyond legal requirements. The UAE has one of the highest rates of volunteerism in the region, with initiatives like the UAE Volunteers platform connecting people with service opportunities.`,
    reading1Time: 8,
    reading2Time: 6,
    kwlExplanation: KWL_EXPLANATION,
    discussionQuestions: [
      'What are the five sources of moral rules, and which do you think is most important?',
      'What is the difference between a moral rule and a moral imperative?',
      'How do the maqasid al-shariah (five objectives of Islamic law) explain why certain rules are imperative?',
      'How does the Earth Charter align with Islamic teachings about environmental stewardship?',
      'What role does voluntary work play in fulfilling moral imperatives in the UAE?',
    ],
    keyFacts: [
      'Moral rules guide behaviour towards right and away from wrong',
      'Sources of moral rules: divine revelation, reason, conscience, social consensus, natural law',
      'A moral imperative must be followed unconditionally regardless of circumstances',
      'Maqasid al-shariah protects five essential values: life, religion, intellect, lineage, property',
      'The Earth Charter (2000) is a universal ethical framework for sustainability and justice',
      'Islam teaches that humans are "khalifa" (stewards) on Earth with environmental responsibilities',
      'The UAE has launched major environmental initiatives including Masdar City and Energy Strategy 2050',
      'Sheikh Zayed was known for his environmental conservation and stewardship',
      'Voluntary work is an expression of moral imperative beyond legal requirements',
    ],
    visualType: 'diagram',
    visualData: {
      title: 'Maqasid al-Shariah: Five Essential Values',
      items: [
        { label: 'Life (Hifz al-Nafs)', description: 'Protection of human life and physical well-being' },
        { label: 'Religion (Hifz al-Din)', description: 'Freedom to practise faith and maintain spiritual life' },
        { label: 'Intellect (Hifz al-Aql)', description: 'Preservation of reason, knowledge, and education' },
        { label: 'Lineage (Hifz al-Nasl)', description: 'Protection of family structure and future generations' },
        { label: 'Property (Hifz al-Mal)', description: 'Protection of wealth and economic rights' },
      ],
    },
    quizQuestions: [
      { id: 'u1l4q1', question: 'What makes a moral imperative different from a regular moral rule?', options: ['It is optional', 'It must be followed unconditionally regardless of circumstances', 'It only applies to religious people', 'It is always a law'], correctAnswer: 1, explanation: 'A moral imperative is a principle that must be followed without exception, unlike a regular moral rule which may allow for situational flexibility.' },
      { id: 'u1l4q2', question: 'What are the five essential values protected by maqasid al-shariah?', options: ['Wealth, power, fame, beauty, intelligence', 'Life, religion, intellect, lineage, property', 'Faith, charity, fasting, pilgrimage, prayer', 'Education, health, economy, politics, culture'], correctAnswer: 1, explanation: 'Maqasid al-shariah identifies five essential values: life, religion, intellect, lineage, and property — these must be protected by Islamic law.' },
      { id: 'u1l4q3', question: 'What does "khalifa" mean in the context of environmental stewardship?', options: ['King', 'Steward or guardian — responsible for caring for the Earth', 'Servant with no responsibility', 'Priest'], correctAnswer: 1, explanation: 'Khalifa means steward or guardian — humans are appointed as caretakers of the Earth with a responsibility to preserve it.' },
      { id: 'u1l4q4', question: 'Which UAE initiative is a pioneer in sustainable urban development?', options: ['Dubai Mall', 'Masdar City', 'Burj Khalifa', 'Abu Dhabi Corniche'], correctAnswer: 1, explanation: 'Masdar City in Abu Dhabi is a pioneering development in sustainable urban living and renewable energy.' },
      { id: 'u1l4q5', question: 'What did Sheikh Zayed say about environmental conservation?', options: ['It is not important', 'Our forefathers survived by recognising the need to conserve the environment for future generations', 'Only the government should protect the environment', 'The environment will take care of itself'], correctAnswer: 1, explanation: 'Sheikh Zayed taught that our forefathers survived by conserving the environment, taking only what they needed and preserving it for future generations.' },
    ],
    interactiveStrategies: [
      { strategy: 'Debate', description: 'Debate: Is conscience or divine revelation a more reliable source of moral rules?', duration: 10, instructions: 'Split into two groups. Group A argues that conscience is the most reliable source. Group B argues that divine revelation is the most reliable source. Each group has 3 minutes to present, then 2 minutes for rebuttal.' },
      { strategy: 'Community Service Planning', description: 'Design a voluntary work project for your school', duration: 8, instructions: 'In groups of 4, plan a voluntary work project that addresses a need in your school or community. Include: the need, your plan, resources needed, and how it connects to moral imperatives discussed in this lesson.' },
    ],
  },
  {
    lessonId: 'G7_T1_Unit 1_l5',
    keyVocabulary: ['voluntary work', 'community service', 'civic duty', 'social responsibility', 'philanthropy'],
    reading1Title: 'Voluntary Work and Social Responsibility',
    reading1Content: `Voluntary work — also known as community service or volunteering — is the act of giving your time, energy, and skills to help others without expecting payment or personal gain. In Islam, voluntary work is highly encouraged and is considered a form of "sadaqah" (charity), which encompasses far more than financial giving.

The Prophet Muhammad (peace be upon him) said: "Every good deed is charity. Verily, it is a good deed to meet your brother with a cheerful face, and to pour what is left from your bucket into the vessel of your brother." This hadith expands the concept of charity beyond money to include every act of kindness, including giving time and effort.

Types of voluntary work in the UAE include:
1. Educational volunteering — tutoring, mentoring, school activities
2. Environmental volunteering — clean-up campaigns, tree planting, conservation
3. Social volunteering — visiting the elderly, helping families in need, food distribution
4. Health volunteering — blood donation, health awareness campaigns, hospital support
5. Cultural volunteering — preserving heritage, organizing cultural events, museum guides

The UAE has made significant efforts to promote and organize volunteerism. The UAE Volunteers platform (volunteers.ae) connects volunteers with opportunities across the country. During the COVID-19 pandemic, thousands of UAE volunteers stepped forward to help with testing, distributing supplies, and supporting vulnerable community members.

Sheikh Zayed bin Sultan Al Nahyan set a powerful example of voluntary work and philanthropy. He established the Abu Dhabi Fund for Development, supported humanitarian causes worldwide, and encouraged Emiratis to be generous with their time and resources. His legacy continues through the Zayed Charitable and Humanitarian Foundation and numerous other initiatives.`,
    reading2Title: 'Voluntary Work as a Moral Imperative in the UAE',
    reading2Content: `While voluntary work is technically a choice, many ethicists and religious scholars argue that it approaches the level of a moral imperative — especially for those who have the ability to help. In a society as prosperous as the UAE, the capacity to help others comes with an increased responsibility to do so.

The Earth Charter, which we studied in the previous lesson, explicitly calls for voluntary action to promote social and economic justice. Its principles state that "we must join together to bring forth a sustainable global society founded on respect for nature, universal human rights, economic justice, and a culture of peace."

In the UAE, voluntary work is seen as both a civic duty and a religious obligation:

Civic perspective: The UAE government actively encourages volunteerism as part of building a cohesive society. Year of Giving (2017) was designated to promote a culture of giving across the nation. The UAE ranks among the world's most generous countries in foreign aid relative to national income.

Religious perspective: Islam encourages voluntary acts of goodness as a path to spiritual growth. The Quran states: "Whoever volunteers good, Allah is Appreciative and Knowing" (Surah Al-Baqarah 2:158). This verse establishes that voluntary good deeds are recognised and rewarded by Allah.

Practical perspective: Volunteering develops important life skills including empathy, teamwork, communication, and leadership. It also creates social bonds and strengthens community resilience. Students who volunteer regularly report greater life satisfaction and a stronger sense of purpose.

The UAE has enshrined the value of voluntary work in its national vision. The Emirati Volunteer Programme, the National Volunteer Programme for Emergencies, and school-based community service requirements all reflect the belief that giving back is not optional — it is essential to building a strong, compassionate society.`,
    reading1Time: 7,
    reading2Time: 5,
    kwlExplanation: KWL_EXPLANATION,
    discussionQuestions: [
      'Why is voluntary work considered a form of "sadaqah" in Islam?',
      'How did the UAE respond to the COVID-19 pandemic through volunteerism?',
      'Is voluntary work a moral imperative or a personal choice? Defend your position.',
      'How does volunteering benefit both the volunteer and the community?',
      'What was the significance of the UAE\'s "Year of Giving" in 2017?',
    ],
    keyFacts: [
      'Voluntary work is giving time and effort without expecting payment',
      'In Islam, voluntary work is a form of sadaqah (charity)',
      '"Every good deed is charity" — Hadith of the Prophet Muhammad',
      'UAE volunteerism includes educational, environmental, social, health, and cultural activities',
      'The UAE Volunteers platform (volunteers.ae) connects volunteers with opportunities',
      'Sheikh Zayed was a model of philanthropy and voluntary service',
      'The UAE designated 2017 as the "Year of Giving" to promote volunteerism',
      'The UAE ranks among the world\'s most generous countries in foreign aid',
      'Volunteering develops empathy, teamwork, communication, and leadership skills',
    ],
    visualType: 'piechart',
    visualData: {
      title: 'Types of Voluntary Work in the UAE',
      items: [
        { label: 'Educational', value: 25, description: 'Tutoring, mentoring, school activities' },
        { label: 'Social', value: 25, description: 'Helping families, elderly support, food distribution' },
        { label: 'Environmental', value: 20, description: 'Clean-ups, tree planting, conservation' },
        { label: 'Health', value: 15, description: 'Blood donation, health awareness' },
        { label: 'Cultural', value: 15, description: 'Heritage preservation, cultural events' },
      ],
    },
    quizQuestions: [
      { id: 'u1l5q1', question: 'How does Islam view voluntary work?', options: ['It is only for wealthy people', 'It is a form of sadaqah (charity) and is highly encouraged', 'It is not relevant to religion', 'It replaces prayer'], correctAnswer: 1, explanation: 'Islam considers voluntary work as sadaqah — a form of charity that goes beyond money to include any act of kindness and giving.' },
      { id: 'u1l5q2', question: 'What was the UAE\'s "Year of Giving"?', options: ['2015', '2017', '2020', '2010'], correctAnswer: 1, explanation: 'The UAE designated 2017 as the Year of Giving to promote a culture of volunteerism and generosity across the nation.' },
      { id: 'u1l5q3', question: 'What platform connects UAE volunteers with opportunities?', options: ['UAE Helpers', 'volunteers.ae', 'UAE Care', 'Good Deeds UAE'], correctAnswer: 1, explanation: 'The UAE Volunteers platform at volunteers.ae is the official national platform connecting volunteers with service opportunities.' },
      { id: 'u1l5q4', question: 'Why might voluntary work be considered a moral imperative?', options: ['Because it is legally required', 'Because those with the ability to help have an increased responsibility to do so', 'Because everyone has unlimited free time', 'Because it is the only way to be religious'], correctAnswer: 1, explanation: 'Many ethicists argue that the capacity to help others creates a moral responsibility to do so, making voluntary work approach the level of a moral imperative.' },
      { id: 'u1l5q5', question: 'What personal benefits does volunteering provide?', options: ['Financial profit', 'Empathy, teamwork, communication, and leadership skills', 'Academic grades', 'Free meals'], correctAnswer: 1, explanation: 'Volunteering develops important life skills including empathy, teamwork, communication, and leadership while also creating social bonds.' },
    ],
    interactiveStrategies: [
      { strategy: 'Project-Based Learning', description: 'Design and plan a volunteer initiative for your school community', duration: 10, instructions: 'In groups of 4, design a volunteer project. Include: (1) The community need, (2) Your project plan, (3) Resources needed, (4) Timeline, (5) How it connects to Islamic values and UAE national values. Present to the class.' },
      { strategy: 'Jigsaw Reading', description: 'Each group researches one type of volunteering and teaches the class', duration: 8, instructions: 'Each group of 3 takes one type of voluntary work (educational, environmental, social, health, cultural). Research examples in the UAE and prepare a 2-minute presentation for the class.' },
    ],
  },
];

// ═══════════════════════════════════════════════════════════════
// UNIT 2: MAKING GOOD DECISIONS (5 lessons)
// ═══════════════════════════════════════════════════════════════

export const g7t1Unit2: LessonContent[] = [
  {
    lessonId: 'G7_T1_Unit 2_l1',
    keyVocabulary: ['safety', 'harm', 'risk', 'prevention', 'awareness', 'response'],
    reading1Title: 'Staying Safe and Responding to Harmful Situations',
    reading1Content: `Safety is a fundamental human right and a shared responsibility. Every person — regardless of age — has the right to live in an environment free from harm, and every person has a duty to contribute to the safety of themselves and others. In the UAE, safety is not just a personal concern; it is a national value embedded in the country's laws, institutions, and cultural practices.

Harmful situations can take many forms:
- Physical harm — violence, accidents, unsafe environments
- Emotional harm — bullying, manipulation, verbal abuse
- Online harm — cyberbullying, inappropriate content, online predators
- Social harm — peer pressure, exclusion, discrimination

Recognising harmful situations is the first step to responding effectively. Warning signs that a situation may be harmful include:
1. Feeling uncomfortable or scared
2. Being asked to keep secrets from trusted adults
3. Someone crossing your personal boundaries
4. Feeling pressured to do something you know is wrong
5. Being threatened or intimidated

When you recognise a harmful situation, the recommended response follows the "Three Rs" model:
1. Recognise — Identify that the situation is potentially harmful
2. Respond — Take action to protect yourself (leave the situation, say no, seek help)
3. Report — Tell a trusted adult what happened

In the UAE, there are multiple channels for reporting harmful situations:
- The Child Protection Centre hotline (116111)
- School counsellors and trusted teachers
- Parents and family members
- Police emergency number (999)

Remember: asking for help is not a sign of weakness — it is a sign of strength and wisdom. Even the bravest people seek help when they need it.`,
    reading2Title: 'Safety in the UAE: Laws and Support Systems',
    reading2Content: `The UAE has established comprehensive legal and institutional frameworks to protect people — especially children — from harm. These frameworks reflect both Islamic values of protecting the vulnerable and modern international standards of human rights.

Key UAE safety legislation includes:
- Federal Law No. 3 of 2016 (Wadeema's Law) — comprehensive child protection
- Federal Decree-Law No. 34 of 2021 — combating rumours and cybercrimes
- Federal Law No. 5 of 2012 — combating cybercrimes (predecessor to the 2021 law)
- The UAE Penal Code — criminalising all forms of abuse and violence

The UAE has also established dedicated institutions for safety:
- The Ministry of Community Development — family and child protection services
- The Child Protection Centre — under the Ministry of Interior
- The Dubai Foundation for Women and Children — supporting victims of abuse
- The Ewa Shelters — providing safe housing for women and children in need

School safety is a particular priority. UAE schools are required to have:
- Child protection policies and designated safeguarding leads
- Anti-bullying policies and reporting mechanisms
- Regular safety drills (fire, evacuation, lockdown)
- Counselling services for students
- Age-appropriate safety education programmes

The concept of safety in Islam goes beyond physical protection. The Prophet Muhammad (peace be upon him) said: "A Muslim is the one from whose tongue and hands other Muslims are safe." This hadith establishes that safety is both a right and a duty — we have the right to be safe, and we have the duty to ensure the safety of others.`,
    reading1Time: 7,
    reading2Time: 5,
    kwlExplanation: KWL_EXPLANATION,
    discussionQuestions: [
      'What are the four types of harmful situations, and can you give an example of each?',
      'What are the warning signs that a situation might be harmful?',
      'Explain the "Three Rs" model for responding to harmful situations.',
      'What UAE institutions can help someone who is in a harmful situation?',
      'How does the hadith about safety connect rights and duties?',
    ],
    keyFacts: [
      'Safety is a fundamental right and a shared responsibility',
      'Harm can be physical, emotional, online, or social',
      'Warning signs of harm include feeling uncomfortable, being asked to keep secrets, or feeling pressured',
      'The "Three Rs" model: Recognise, Respond, Report',
      'UAE Child Protection Centre hotline: 116111',
      'Wadeema\'s Law provides comprehensive legal protection for children',
      'Federal Decree-Law No. 34 of 2021 combats cybercrimes',
      '"A Muslim is the one from whose tongue and hands other Muslims are safe" — Hadith',
      'UAE schools must have child protection policies, anti-bullying measures, and counselling services',
    ],
    visualType: 'diagram',
    visualData: {
      title: 'The Three Rs: Recognise, Respond, Report',
      items: [
        { label: 'Recognise', description: 'Identify that the situation is potentially harmful' },
        { label: 'Respond', description: 'Take action: leave, say no, seek help' },
        { label: 'Report', description: 'Tell a trusted adult what happened' },
      ],
    },
    quizQuestions: [
      { id: 'u2l1q1', question: 'What are the four types of harmful situations?', options: ['Physical, emotional, online, and social', 'Big, small, medium, and tiny', 'School, home, street, and park', 'Day, night, morning, and evening'], correctAnswer: 0, explanation: 'Harmful situations can be categorised as physical (violence, accidents), emotional (bullying, manipulation), online (cyberbullying, predators), and social (peer pressure, discrimination).' },
      { id: 'u2l1q2', question: 'What is the "Three Rs" model for responding to harm?', options: ['Run, Hide, Fight', 'Recognise, Respond, Report', 'Read, Write, Review', 'Relax, React, Recover'], correctAnswer: 1, explanation: 'The Three Rs model teaches: Recognise the harmful situation, Respond by protecting yourself, and Report to a trusted adult.' },
      { id: 'u2l1q3', question: 'What is the UAE Child Protection Centre hotline number?', options: ['999', '116111', '111', '911'], correctAnswer: 1, explanation: 'The UAE Child Protection Centre hotline is 116111 — a dedicated number for reporting child safety concerns.' },
      { id: 'u2l1q4', question: 'What does the hadith "A Muslim is the one from whose tongue and hands other Muslims are safe" teach?', options: ['Muslims should not talk', 'Safety is both a right and a duty — we should not harm others with our words or actions', 'Only hands are dangerous', 'Safety is only about physical protection'], correctAnswer: 1, explanation: 'This hadith establishes that we have both the right to be safe and the duty to ensure others are safe from our words and actions.' },
      { id: 'u2l1q5', question: 'Which UAE law specifically combats cybercrimes?', options: ['Wadeema\'s Law', 'Federal Decree-Law No. 34 of 2021', 'Traffic Law', 'Property Law'], correctAnswer: 1, explanation: 'Federal Decree-Law No. 34 of 2021 is the UAE\'s legislation specifically addressing cybercrimes and online safety.' },
    ],
    interactiveStrategies: [
      { strategy: 'Scenario Analysis', description: 'Identify harmful situations and practise the Three Rs response', duration: 8, instructions: 'Your teacher will present 3 scenarios. For each one, identify: What type of harm is this? What warning signs are present? How would you apply the Three Rs? Discuss with your partner.' },
      { strategy: 'Poster Creation', description: 'Create a "Staying Safe" poster for your school', duration: 7, instructions: 'Design a poster that shows: the Three Rs, warning signs of harm, and UAE reporting channels. Make it clear and appropriate for students your age.' },
    ],
  },
  {
    lessonId: 'G7_T1_Unit 2_l2',
    keyVocabulary: ['first aid', 'emergency', 'CPR', 'wound care', 'response time'],
    reading1Title: 'First Aid Basics: Saving Lives Through Knowledge',
    reading1Content: `First aid is the immediate care given to a person who has been injured or suddenly becomes ill, before professional medical help arrives. Knowing basic first aid can mean the difference between life and death in an emergency situation. In Islam, saving a life is one of the greatest acts of worship — the Quran states: "Whoever saves one life, it is as if they have saved all of humanity" (Surah Al-Ma'idah 5:32).

Basic first aid principles everyone should know:

1. DR ABC — The primary survey approach:
   - Danger: Check for dangers to yourself and the casualty
   - Response: Check if the person is conscious
   - Airway: Ensure the airway is open and clear
   - Breathing: Check if the person is breathing normally
   - Circulation: Check for severe bleeding

2. Common first aid situations:
   - Burns: Cool the burn under running water for at least 20 minutes. Never apply ice, butter, or toothpaste.
   - Bleeding: Apply direct pressure to the wound with a clean cloth. Elevate the injured area if possible.
   - Choking: Encourage coughing. If the person cannot cough, use back blows and abdominal thrusts (Heimlich manoeuvre).
   - Fainting: Lay the person flat and elevate their legs. Loosen tight clothing.
   - Nosebleed: Sit up and lean slightly forward. Pinch the soft part of the nose for 10 minutes.

3. When to call emergency services (999 in the UAE):
   - The person is unconscious
   - There is severe bleeding that won't stop
   - The person is having difficulty breathing
   - There are signs of a heart attack or stroke
   - There has been a severe head injury

The UAE has a modern and efficient emergency medical system. Ambulances are equipped with advanced life-support equipment and are typically dispatched within minutes. The Dubai Corporation for Ambulance Services and the National Ambulance service provide emergency medical care across the country.`,
    reading2Title: 'First Aid in Daily Life: UAE Context',
    reading2Content: `In the UAE, first aid knowledge is increasingly recognised as an essential life skill. Schools are incorporating basic first aid training into their curricula, and organisations like the Red Crescent and Dubai Ambulance offer first aid certification courses to the public.

Heat-related emergencies are particularly common in the UAE due to the extreme temperatures during summer months. Two of the most important heat-related conditions to recognise are:

Heat Exhaustion: Symptoms include heavy sweating, weakness, nausea, headache, and dizziness. Treatment: Move to a cool place, drink water slowly, and apply cool wet cloths to the skin.

Heatstroke: This is a medical emergency. Symptoms include high body temperature (above 40°C), hot and dry skin (no sweating), confusion, and loss of consciousness. Treatment: Call 999 immediately, move to a cool place, and try to cool the person rapidly with water and fanning.

School first aid requirements in the UAE:
- Every school must have a designated first aid officer
- First aid kits must be available and regularly checked
- Staff must be trained in basic first aid and CPR
- Emergency contact information for all students must be kept up to date
- Schools must have clear procedures for medical emergencies

The Prophet Muhammad (peace be upon him) encouraged the seeking of medical knowledge and treatment. He said: "Make use of medical treatment, for Allah has not made a disease without appointing a remedy for it." This hadith encourages Muslims to learn about health and medicine, including first aid, as a form of seeking the cures that Allah has provided.`,
    reading1Time: 8,
    reading2Time: 5,
    kwlExplanation: KWL_EXPLANATION,
    discussionQuestions: [
      'What does DR ABC stand for, and why is it important in an emergency?',
      'How should you treat a burn according to first aid guidelines?',
      'What is the difference between heat exhaustion and heatstroke?',
      'How does the Quranic verse about saving lives connect to learning first aid?',
      'What first aid resources and requirements exist in UAE schools?',
    ],
    keyFacts: [
      'First aid is immediate care given before professional medical help arrives',
      '"Whoever saves one life, it is as if they have saved all of humanity" — Quran 5:32',
      'DR ABC: Danger, Response, Airway, Breathing, Circulation',
      'For burns: cool under running water for at least 20 minutes, never apply ice or butter',
      'For bleeding: apply direct pressure and elevate the injured area',
      'UAE emergency number: 999',
      'Heat exhaustion: heavy sweating, weakness, nausea — move to cool place, drink water',
      'Heatstroke is a medical emergency: high temperature, hot dry skin, confusion — call 999',
      'UAE schools must have designated first aid officers and properly stocked kits',
      'The Prophet Muhammad encouraged seeking medical knowledge and treatment',
    ],
    visualType: 'diagram',
    visualData: {
      title: 'DR ABC: Emergency Response Steps',
      items: [
        { label: 'D - Danger', description: 'Check for dangers to yourself and the casualty' },
        { label: 'R - Response', description: 'Check if the person is conscious' },
        { label: 'A - Airway', description: 'Ensure the airway is open and clear' },
        { label: 'B - Breathing', description: 'Check if the person is breathing normally' },
        { label: 'C - Circulation', description: 'Check for severe bleeding' },
      ],
    },
    quizQuestions: [
      { id: 'u2l2q1', question: 'What does DR ABC stand for in first aid?', options: ['Drink, Rest, Apply, Bandage, Call', 'Danger, Response, Airway, Breathing, Circulation', 'Distance, Run, Alert, Back, Cover', 'Direct, Reach, Assess, Begin, Care'], correctAnswer: 1, explanation: 'DR ABC is the primary survey approach: check Danger, then Response, then Airway, then Breathing, then Circulation.' },
      { id: 'u2l2q2', question: 'How should you treat a burn?', options: ['Apply ice directly', 'Apply butter or toothpaste', 'Cool under running water for at least 20 minutes', 'Cover with a tight bandage immediately'], correctAnswer: 2, explanation: 'Burns should be cooled under running water for at least 20 minutes. Never apply ice, butter, or toothpaste as these can worsen the injury.' },
      { id: 'u2l2q3', question: 'What is the key difference between heat exhaustion and heatstroke?', options: ['They are the same condition', 'Heat exhaustion involves heavy sweating; heatstroke involves hot, dry skin and is a medical emergency', 'Heatstroke is less serious', 'Heat exhaustion only affects elderly people'], correctAnswer: 1, explanation: 'Heat exhaustion involves heavy sweating and weakness, while heatstroke is characterised by hot, dry skin, confusion, and is a life-threatening medical emergency.' },
      { id: 'u2l2q4', question: 'What does the Quran say about saving a life?', options: ['It is only important for doctors', 'Saving one life is as if saving all of humanity', 'It is not relevant to first aid', 'Only saving Muslim lives matters'], correctAnswer: 1, explanation: 'The Quran (5:32) states that saving one life is as if saving all of humanity, making first aid a profoundly important act.' },
      { id: 'u2l2q5', question: 'What is the emergency number in the UAE?', options: ['911', '112', '999', '111'], correctAnswer: 2, explanation: 'The emergency number in the UAE is 999 for police, ambulance, and fire services.' },
    ],
    interactiveStrategies: [
      { strategy: 'Practical Demonstration', description: 'Practise basic first aid techniques with a partner', duration: 10, instructions: 'With a partner, practise: (1) Checking DR ABC on each other, (2) The recovery position, (3) Applying a bandage to a "wound." Your teacher will demonstrate first, then guide you.' },
      { strategy: 'Scenario Cards', description: 'Respond to first aid scenarios using the DR ABC approach', duration: 7, instructions: 'Each group receives a scenario card describing an emergency. Walk through DR ABC step by step and decide what actions to take. Present your response to the class.' },
    ],
  },
  {
    lessonId: 'G7_T1_Unit 2_l3',
    keyVocabulary: ['crime', 'protection', 'prevention', 'cybercrime', 'online safety', 'digital citizenship'],
    reading1Title: 'Protection Against Crimes and Ways of Protection',
    reading1Content: `Crime is any act that violates the law and is punishable by the state. Understanding crime and how to protect yourself is essential for personal safety and community well-being. In the UAE, the legal system provides strong protections for residents, and the crime rate is among the lowest in the world.

Types of crime that young people should be aware of include:
1. Theft and robbery — taking someone else's property without permission
2. Assault — causing physical harm to another person
3. Fraud — deceiving someone for personal gain
4. Vandalism — deliberately damaging property
5. Cybercrime — criminal activities conducted online
6. Bullying and harassment — repeated aggressive behaviour towards another person

Ways to protect yourself from crime:
- Be aware of your surroundings and trust your instincts
- Avoid walking alone in unfamiliar areas, especially at night
- Keep valuables secure and out of sight
- Lock doors and windows at home
- Never share personal information with strangers
- Report suspicious activities to authorities
- Stay with trusted friends in public places

The UAE has implemented various crime prevention measures:
- Advanced surveillance and security systems
- Community policing programmes
- Public awareness campaigns
- Strict laws and swift justice
- Rehabilitation programmes for offenders
- Youth engagement programmes to prevent juvenile delinquency

The Prophet Muhammad (peace be upon him) taught that preventing harm is better than treating it. He said: "There should be neither harming nor reciprocating harm." This principle supports the idea that prevention and protection are better than dealing with the consequences of crime.`,
    reading2Title: 'Cybercrime and Online Safety',
    reading2Content: `As our lives become increasingly digital, cybercrime has emerged as one of the fastest-growing types of crime worldwide. The UAE, with its advanced digital infrastructure and high internet penetration rate, takes cybercrime very seriously and has enacted comprehensive legislation to combat it.

Federal Decree-Law No. 34 of 2021 on Combating Rumours and Cybercrimes defines and criminalises a wide range of online offences, including:
- Online fraud and identity theft
- Cyberbullying and online harassment
- Hacking and unauthorised access to information systems
- Spreading false information and rumours
- Online blackmail and extortion
- Violating personal privacy

Protecting yourself online:
1. Use strong, unique passwords for each account
2. Never share personal information (address, phone number, school name) with strangers online
3. Think before you post — everything online can be permanent
4. Be cautious about clicking links from unknown sources
5. Report cyberbullying or suspicious online behaviour to a trusted adult
6. Use privacy settings on social media accounts
7. Never meet someone in person that you only know online without telling a parent

The UAE has established the National Electronic Security Authority (NESA) and the UAE Computer Emergency Response Team (aeCERT) to protect the nation's digital infrastructure and assist individuals with cyber threats.

Schools in the UAE are required to teach digital citizenship and online safety. This includes understanding your digital footprint, recognising online risks, and knowing how to report concerns. The TRA (Telecommunications and Digital Government Regulatory Authority) also provides online safety resources through the Salim Initiative, which promotes safe and responsible internet use.`,
    reading1Time: 7,
    reading2Time: 6,
    kwlExplanation: KWL_EXPLANATION,
    discussionQuestions: [
      'What are the main types of crime that young people should be aware of?',
      'How does the UAE prevent crime, and why is its crime rate so low?',
      'What is cybercrime, and how does UAE law address it?',
      'What steps can you take to protect your personal safety and online safety?',
      'How does the Islamic principle "neither harming nor reciprocating harm" relate to crime prevention?',
    ],
    keyFacts: [
      'Crime is any act that violates the law and is punishable by the state',
      'The UAE has one of the lowest crime rates in the world',
      'Types of crime: theft, assault, fraud, vandalism, cybercrime, bullying',
      'Cybercrime is the fastest-growing type of crime globally',
      'Federal Decree-Law No. 34 of 2021 combats cybercrimes in the UAE',
      'Online safety rules: use strong passwords, never share personal info, think before posting',
      'The UAE has NESA and aeCERT for digital protection',
      'The Salim Initiative promotes safe and responsible internet use in the UAE',
      '"There should be neither harming nor reciprocating harm" — Hadith',
    ],
    visualType: 'venn',
    visualData: {
      leftTitle: 'Physical Crime',
      rightTitle: 'Cybercrime',
      centerTitle: 'Both',
      leftItems: ['Theft', 'Assault', 'Vandalism', 'Requires physical presence'],
      rightItems: ['Hacking', 'Identity theft', 'Online harassment', 'Can be remote'],
      centerItems: ['Fraud', 'Bullying', 'Punishable by law', 'Prevention is key'],
    },
    quizQuestions: [
      { id: 'u2l3q1', question: 'Which UAE law specifically addresses cybercrime?', options: ['Wadeema\'s Law', 'Federal Decree-Law No. 34 of 2021', 'Traffic Law', 'Property Law'], correctAnswer: 1, explanation: 'Federal Decree-Law No. 34 of 2021 is the UAE\'s comprehensive legislation combating rumours and cybercrimes.' },
      { id: 'u2l3q2', question: 'What is the best approach to online safety?', options: ['Share everything online', 'Use strong passwords, protect personal info, and think before posting', 'Only use social media at night', 'Delete all social media accounts'], correctAnswer: 1, explanation: 'A comprehensive approach to online safety includes strong passwords, protecting personal information, and being thoughtful about what you post.' },
      { id: 'u2l3q3', question: 'What does the hadith "neither harming nor reciprocating harm" teach about crime?', options: ['Harm is acceptable if someone harmed you first', 'Prevention and protection are better than dealing with consequences', 'Only physical harm matters', 'Crime cannot be prevented'], correctAnswer: 1, explanation: 'This hadith establishes that both causing harm and retaliating with harm are forbidden, supporting the principle of prevention over reaction.' },
      { id: 'u2l3q4', question: 'What UAE initiative promotes safe internet use?', options: ['The Digital Shield', 'The Salim Initiative', 'The Safe Net', 'Cyber Guard UAE'], correctAnswer: 1, explanation: 'The Salim Initiative, run by the TRA, promotes safe and responsible internet use across the UAE.' },
      { id: 'u2l3q5', question: 'What should you do if you experience cyberbullying?', options: ['Retaliate online', 'Keep it to yourself', 'Report to a trusted adult and use platform reporting tools', 'Delete your account and do nothing'], correctAnswer: 2, explanation: 'The correct response to cyberbullying is to report it to a trusted adult and use the reporting tools available on the platform — never retaliate.' },
    ],
    interactiveStrategies: [
      { strategy: 'Digital Citizenship Pledge', description: 'Create a personal online safety pledge', duration: 6, instructions: 'Write a personal pledge with at least 5 commitments for online safety. Include specific actions you will take. Sign it and keep it in your notebook as a reminder.' },
      { strategy: 'Case Study Analysis', description: 'Analyze a cybercrime scenario and identify protections', duration: 8, instructions: 'Read the scenario your teacher provides. Identify: (1) What type of cybercrime occurred, (2) What laws were broken, (3) How the victim could have protected themselves, (4) What you would do differently.' },
    ],
  },
  {
    lessonId: 'G7_T1_Unit 2_l4',
    keyVocabulary: ['decision-making', 'consequences', 'critical thinking', 'judgement', 'values-based decision'],
    reading1Title: 'Making Good Decisions: A Framework for Life',
    reading1Content: `Every day, we make hundreds of decisions — from what to eat for breakfast to how to respond when someone is unkind. Some decisions are small and have limited consequences, while others can change the course of our lives. Learning how to make good decisions is one of the most important skills you can develop.

A good decision-making framework involves these steps:
1. Identify the decision — What exactly do you need to decide?
2. Gather information — What facts do you need to make an informed choice?
3. Consider options — What are the possible choices you could make?
4. Evaluate consequences — What are the likely outcomes of each option?
5. Apply your values — Which option aligns with your moral principles?
6. Make the decision — Choose the option that best balances consequences and values
7. Reflect on the outcome — What did you learn from this decision?

In Islam, decision-making is guided by the principle of "istikhara" — seeking guidance from Allah when making important decisions. The Prophet Muhammad (peace be upon him) taught the prayer of istikhara for times when we are uncertain about which path to choose. This practice combines practical deliberation with spiritual trust.

Critical thinking is essential for good decision-making. It means:
- Questioning assumptions and not accepting things at face value
- Considering multiple perspectives before forming an opinion
- Evaluating evidence and distinguishing fact from opinion
- Recognising bias — both in others and in yourself
- Being willing to change your mind when presented with new evidence

The UAE places great value on critical thinking and decision-making skills. The national curriculum emphasises these skills across subjects, and initiatives like the Mohammed bin Rashid Smart Majlis encourage young people to contribute their ideas and perspectives to national development.`,
    reading2Title: 'Decision-Making in Real-Life Situations',
    reading2Content: `Applying good decision-making to real-life situations requires practice and self-awareness. Here are some common scenarios where young people need strong decision-making skills:

Peer Pressure: When friends encourage you to do something you know is wrong, the decision framework helps you evaluate the consequences and act according to your values. Remember: true friends respect your decisions.

Online Choices: Every click, post, and share is a decision. Before posting online, ask yourself: Is this true? Is this kind? Is this necessary? Would I want my parents or teachers to see this?

Safety Decisions: When faced with a potentially dangerous situation, quick decision-making is critical. This is where preparation matters — if you have already thought through what you would do in an emergency, you are more likely to make the right choice quickly.

Academic Decisions: Choosing how to spend your study time, whether to complete an assignment honestly, and how to handle academic challenges are all decisions that shape your future.

The concept of "taqwa" (God-consciousness) in Islam provides a powerful framework for decision-making. Taqwa means being aware that Allah is watching your actions at all times, even when no one else can see you. This awareness naturally guides you towards better decisions because you are accountable to a higher authority than peer pressure or social expectation.

The Prophet Muhammad (peace be upon him) gave practical advice for decision-making: "The best of people are those most beneficial to others." When making any decision, ask yourself: Will this choice benefit others, or could it cause harm? This simple question can guide you towards decisions that align with both Islamic values and good citizenship in the UAE.`,
    reading1Time: 7,
    reading2Time: 5,
    kwlExplanation: KWL_EXPLANATION,
    discussionQuestions: [
      'What are the seven steps in the decision-making framework?',
      'How does istikhara combine practical deliberation with spiritual trust?',
      'What is taqwa, and how does it help with decision-making?',
      'Apply the decision-making framework to a scenario involving peer pressure.',
      'How does the hadith "The best of people are those most beneficial to others" guide our choices?',
    ],
    keyFacts: [
      'Good decision-making involves 7 steps: identify, gather, consider, evaluate, apply values, decide, reflect',
      'Istikhara is the Islamic practice of seeking Allah\'s guidance for important decisions',
      'Critical thinking involves questioning assumptions, considering perspectives, and evaluating evidence',
      'Taqwa (God-consciousness) provides a powerful decision-making framework',
      'Before posting online, ask: Is it true? Is it kind? Is it necessary?',
      '"The best of people are those most beneficial to others" — Hadith',
      'Peer pressure, online choices, safety, and academics all require strong decision-making',
      'The UAE curriculum emphasises critical thinking and decision-making skills',
    ],
    visualType: 'diagram',
    visualData: {
      title: '7-Step Decision-Making Framework',
      items: [
        { label: '1. Identify', description: 'What decision do you need to make?' },
        { label: '2. Gather Info', description: 'What facts do you need?' },
        { label: '3. Consider Options', description: 'What are your possible choices?' },
        { label: '4. Evaluate Consequences', description: 'What are the likely outcomes?' },
        { label: '5. Apply Values', description: 'Which option aligns with your principles?' },
        { label: '6. Decide', description: 'Choose the best balanced option' },
        { label: '7. Reflect', description: 'What did you learn from this decision?' },
      ],
    },
    quizQuestions: [
      { id: 'u2l4q1', question: 'What is the first step in the decision-making framework?', options: ['Make the decision immediately', 'Identify what exactly you need to decide', 'Ask your friends what to do', 'Ignore the problem'], correctAnswer: 1, explanation: 'The first step is to clearly identify what decision you need to make. Without this clarity, all subsequent steps lack direction.' },
      { id: 'u2l4q2', question: 'What does "taqwa" mean in the context of decision-making?', options: ['Fear of other people', 'God-consciousness — being aware that Allah watches your actions at all times', 'Avoiding all difficult decisions', 'Only making decisions in groups'], correctAnswer: 1, explanation: 'Taqwa means God-consciousness — being aware that Allah is watching, which naturally guides better decisions even when no one else is around.' },
      { id: 'u2l4q3', question: 'What three questions should you ask before posting online?', options: ['Is it funny? Is it popular? Is it trending?', 'Is this true? Is this kind? Is this necessary?', 'Will I get likes? Will people share it? Will it go viral?', 'Can I delete it later? Will anyone see it? Is my account private?'], correctAnswer: 1, explanation: 'Before posting, ask: Is it true? Is it kind? Is it necessary? These questions align with both Islamic values and responsible digital citizenship.' },
      { id: 'u2l4q4', question: 'What is istikhara?', options: ['A type of food', 'The Islamic practice of seeking Allah\'s guidance for important decisions', 'A traditional dance', 'A school subject'], correctAnswer: 1, explanation: 'Istikhara is the Islamic practice of seeking guidance from Allah when making important decisions, combining practical deliberation with spiritual trust.' },
      { id: 'u2l4q5', question: 'According to the hadith, who are the "best of people"?', options: ['The wealthiest people', 'Those most beneficial to others', 'Those who pray the most', 'Those who never make mistakes'], correctAnswer: 1, explanation: 'The Prophet Muhammad said: "The best of people are those most beneficial to others," guiding us to make decisions that benefit the community.' },
    ],
    interactiveStrategies: [
      { strategy: 'Decision-Making Practice', description: 'Apply the 7-step framework to real-life scenarios', duration: 10, instructions: 'Each group receives a scenario card (peer pressure, online choice, safety, academic). Walk through all 7 steps of the decision-making framework. Present your process and conclusion to the class.' },
      { strategy: 'Reflective Journal', description: 'Write about a recent decision and analyze it using the framework', duration: 6, instructions: 'Think of a decision you made recently. Write about: What was the decision? Did you follow any of the 7 steps? What was the outcome? What would you do differently?' },
    ],
  },
  {
    lessonId: 'G7_T1_Unit 2_l5',
    keyVocabulary: ['juvenile delinquency', 'rehabilitation', 'consequence', 'deterrence', 'restorative justice'],
    reading1Title: 'Thinking About Crime: Causes and Consequences',
    reading1Content: `Understanding why people commit crimes is essential for preventing crime and building a safer society. Criminologists — people who study crime — have identified several factors that can contribute to criminal behaviour:

1. Social factors — Poverty, lack of education, broken families, and peer pressure can push people towards crime
2. Psychological factors — Mental health issues, anger, and low self-esteem can contribute to criminal behaviour
3. Environmental factors — Growing up in a neighbourhood with high crime rates can normalise criminal behaviour
4. Economic factors — Unemployment and financial desperation can drive people to commit crimes like theft or fraud

However, it is important to understand that these factors do not excuse crime. Everyone is responsible for their own choices, regardless of their circumstances. Islam teaches that each person is accountable for their own actions on the Day of Judgement, and this accountability begins in this life through the legal system.

Consequences of crime affect everyone:
- For the victim: Physical harm, emotional trauma, financial loss, and fear
- For the criminal: Legal punishment, damaged reputation, loss of freedom, and broken relationships
- For the family: Shame, financial burden, and emotional distress
- For society: Cost of law enforcement, reduced safety, and weakened trust

The UAE takes a comprehensive approach to dealing with crime that includes:
1. Deterrence — Strict laws and punishments to discourage crime
2. Prevention — Education, social programmes, and community engagement
3. Rehabilitation — Programmes to help offenders reform and reintegrate into society
4. Restorative justice — Approaches that focus on repairing harm done to victims and communities

For young people, the UAE has special provisions under the Juvenile Justice Law. Minors who commit crimes are handled differently from adults, with emphasis on rehabilitation rather than punishment. The law recognises that young people's brains are still developing and that they may not fully understand the consequences of their actions.`,
    reading2Title: 'Rehabilitation and the Path to Reform',
    reading2Content: `Rehabilitation is the process of helping someone who has committed a crime to change their behaviour and become a productive member of society. In Islamic tradition, the concept of "tawba" (repentance) teaches that anyone who sincerely repents and reforms can be forgiven. The Quran says: "Except for those who repent, believe, and do righteous work. For them, Allah will replace their evil deeds with good. And ever is Allah Forgiving and Merciful" (Surah Al-Furqan 25:70).

The UAE's approach to rehabilitation includes:

For adults:
- Educational and vocational training programmes in correctional facilities
- Psychological counselling and substance abuse treatment
- Religious and spiritual guidance programmes
- Post-release support to help reintegrate into society

For juveniles (under 18):
- Separation from adult offenders
- Mandatory education and skills training
- Family counselling and reunification programmes
- Community service as an alternative to detention
- Sealing of juvenile records to prevent lifelong stigma

The UAE has also implemented innovative programmes like the Inma Initiative, which provides financial support and training to inmates to help them start businesses after release. This reflects the belief that giving people a legitimate path to earn a living reduces the likelihood of reoffending.

Restorative justice is an approach that focuses on the harm caused by crime and involves the offender, the victim, and the community in finding solutions. This can include:
- The offender apologising and making amends to the victim
- Community service that benefits those affected by the crime
- Mediation between the offender and the victim
- Agreements for the offender to attend counselling or education programmes

Islam supports the concept of restorative justice through the practice of "sulh" (reconciliation) and "diyah" (compensation). The Quran encourages victims to forgive and offenders to make amends, while also recognising that justice must be served.`,
    reading1Time: 7,
    reading2Time: 6,
    kwlExplanation: KWL_EXPLANATION,
    discussionQuestions: [
      'What are the four main factors that contribute to criminal behaviour?',
      'Do these factors excuse crime? Why or why not?',
      'How does the UAE approach rehabilitation differently for juveniles and adults?',
      'What is restorative justice, and how does it relate to Islamic concepts like sulh and diyah?',
      'What is the Inma Initiative, and how does it help prevent reoffending?',
    ],
    keyFacts: [
      'Crime can be caused by social, psychological, environmental, and economic factors',
      'These factors do not excuse crime — everyone is responsible for their own choices',
      'Consequences of crime affect the victim, criminal, family, and society',
      'The UAE uses deterrence, prevention, rehabilitation, and restorative justice',
      'Juvenile Justice Law handles young offenders with emphasis on rehabilitation',
      'Tawba (repentance) teaches that sincere reform leads to forgiveness',
      'The Inma Initiative provides financial support and training for inmates',
      'Restorative justice focuses on repairing harm and involves victim, offender, and community',
      'Islam supports restorative justice through sulh (reconciliation) and diyah (compensation)',
    ],
    visualType: 'venn',
    visualData: {
      leftTitle: 'Punishment',
      rightTitle: 'Rehabilitation',
      centerTitle: 'Both',
      leftItems: ['Deters crime', 'Legal consequences', 'Protects society', 'Justice for victims'],
      rightItems: ['Reforms behaviour', 'Prevents reoffending', 'Education and training', 'Reintegration'],
      centerItems: ['UAE justice system', 'Accountability', 'Public safety', 'Long-term solutions'],
    },
    quizQuestions: [
      { id: 'u2l5q1', question: 'Which factors contribute to criminal behaviour?', options: ['Only poverty', 'Social, psychological, environmental, and economic factors', 'Only bad friends', 'Genetics only'], correctAnswer: 1, explanation: 'Crime is caused by a complex combination of social, psychological, environmental, and economic factors — never a single cause.' },
      { id: 'u2l5q2', question: 'What is the UAE\'s emphasis for juvenile offenders?', options: ['Strict punishment', 'Rehabilitation and reform', 'Permanent detention', 'Public shaming'], correctAnswer: 1, explanation: 'The UAE\'s Juvenile Justice Law emphasises rehabilitation for minors, recognising that young people may not fully understand the consequences of their actions.' },
      { id: 'u2l5q3', question: 'What does "tawba" mean in Islamic tradition?', options: ['Punishment', 'Repentance — sincere reform that leads to forgiveness', 'Revenge', 'Exile'], correctAnswer: 1, explanation: 'Tawba means sincere repentance — turning away from wrongdoing and reforming one\'s behaviour, which Islam teaches leads to Allah\'s forgiveness.' },
      { id: 'u2l5q4', question: 'What is the Inma Initiative?', options: ['A sports programme', 'Financial support and training for inmates to start businesses after release', 'A school lunch programme', 'A tourism campaign'], correctAnswer: 1, explanation: 'The Inma Initiative provides financial support and vocational training to inmates, helping them start legitimate businesses after release to prevent reoffending.' },
      { id: 'u2l5q5', question: 'What Islamic concepts support restorative justice?', options: ['Jihad and hijra', 'Sulh (reconciliation) and diyah (compensation)', 'Zakat and sawm', 'Salah and wudu'], correctAnswer: 1, explanation: 'Sulh (reconciliation) and diyah (compensation) are Islamic concepts that support restorative justice by encouraging offenders to make amends and victims to seek reconciliation.' },
    ],
    interactiveStrategies: [
      { strategy: 'Socratic Seminar', description: 'Discuss: Should rehabilitation or punishment be the primary goal of the justice system?', duration: 10, instructions: 'Form a circle. Each student shares one argument for rehabilitation or punishment. Build on each other\'s points. Use evidence from the lesson and Islamic teachings. No interrupting — raise your hand to speak next.' },
      { strategy: 'Problem-Solving', description: 'Design a youth crime prevention programme for your community', duration: 8, instructions: 'In groups of 4, design a crime prevention programme targeting youth. Include: (1) What type of crime it addresses, (2) Prevention strategies, (3) How it uses Islamic values, (4) Resources needed, (5) How success would be measured.' },
    ],
  },
];

// ═══════════════════════════════════════════════════════════════
// UNIT 3: EAST ASIA (5 lessons)
// ═══════════════════════════════════════════════════════════════

export const g7t1Unit3: LessonContent[] = [
  {
    lessonId: 'G7_T1_Unit 3_l1',
    keyVocabulary: ['geography', 'climate', 'monsoon', 'topography', 'natural resources', 'population density'],
    reading1Title: 'The Geography of East Asia',
    reading1Content: `East Asia is a vast and diverse region that includes China, Japan, the Korean Peninsula (North Korea and South Korea), Mongolia, and Taiwan. This region covers approximately 12 million square kilometres and is home to over 1.6 billion people — roughly one-fifth of the world's population.

The geography of East Asia is characterised by dramatic contrasts:
- Mountain ranges — The Himalayas, Kunlun Mountains, and Tien Shan form natural barriers in the west
- River systems — The Yellow River (Huang He) and Yangtze River (Chang Jiang) are the cradles of Chinese civilisation
- Plains and plateaus — The North China Plain and the Tibetan Plateau (the "Roof of the World")
- Coastlines — Over 30,000 km of coastline along the Pacific Ocean, supporting trade and fishing
- Islands — Japan alone consists of nearly 7,000 islands

Climate in East Asia varies enormously due to the region's size and topography:
- Northern regions (Mongolia, northern China) experience harsh, cold winters and short summers
- Central regions have a temperate climate with four distinct seasons
- Southern regions (southern China, Taiwan) are subtropical to tropical
- The monsoon system dominates weather patterns, bringing heavy rainfall in summer

The monsoon is perhaps the most important climatic feature of East Asia. The word "monsoon" comes from the Arabic word "mausim" meaning season. During summer, warm, moist air from the Pacific brings heavy rains that are essential for rice cultivation. During winter, cold, dry air from Central Asia brings dry conditions. Understanding and adapting to the monsoon has been central to East Asian civilisations for thousands of years.

Natural resources in East Asia include coal, iron ore, petroleum, natural gas, mercury, tin, tungsten, and rare earth minerals. China alone possesses the world's largest reserves of rare earth elements, which are essential for modern technology including smartphones, electric vehicles, and military equipment.`,
    reading2Title: 'How Geography Shaped East Asian Civilisations',
    reading2Content: `Geography has profoundly shaped the development of East Asian civilisations. The natural barriers — mountains, deserts, and oceans — that surround the region created conditions for unique cultural development while also facilitating trade and exchange through specific routes.

The Yellow River (Huang He) is often called the "Mother River of China" and the "Cradle of Chinese Civilisation." Its fertile valley supported some of the earliest agricultural settlements in East Asia, dating back over 7,000 years. However, the Yellow River is also called "China's Sorrow" because of its devastating floods, which have killed millions throughout history. Learning to control the river through levees, dams, and irrigation systems was one of the greatest achievements of ancient Chinese civilisation.

The Yangtze River (Chang Jiang) is the longest river in Asia and the third longest in the world. Its basin is the most productive agricultural region in China, producing over half of the country's rice. The Three Gorges Dam on the Yangtze is the world's largest hydroelectric power station.

The Korean Peninsula's geography — mountainous with limited arable land — influenced its historical development. Korea developed a distinct culture that was influenced by but never conquered by China. The peninsula's location between China and Japan made it a cultural bridge between the two civilisations.

Japan's island geography created unique conditions. Isolated from the Asian mainland by the Sea of Japan, Japan developed a distinctive culture while selectively adopting and adapting elements from China and Korea. Japan's limited arable land (only about 11% of the total area is farmable) led to intensive agricultural practices and a strong emphasis on community cooperation.

The Silk Road connected East Asia to Central Asia, the Middle East, and Europe through a network of trade routes. These routes passed through the Gansu Corridor (Hexi Corridor) in western China, one of the most important geographic choke points in world history. Through these routes, goods, ideas, religions, and technologies flowed between East and West for centuries.`,
    reading1Time: 8,
    reading2Time: 6,
    kwlExplanation: KWL_EXPLANATION,
    discussionQuestions: [
      'What are the major geographic features of East Asia?',
      'Why is the Yellow River called both the "Mother River" and "China\'s Sorrow"?',
      'How did Japan\'s island geography influence its cultural development?',
      'What role did the monsoon system play in shaping East Asian civilisations?',
      'How did the Silk Road connect East Asia to the rest of the world?',
    ],
    keyFacts: [
      'East Asia includes China, Japan, Korea, Mongolia, and Taiwan',
      'The region is home to over 1.6 billion people — one-fifth of the world\'s population',
      'The Yellow River is the "Cradle of Chinese Civilisation" but also "China\'s Sorrow"',
      'The Yangtze is the longest river in Asia and third longest in the world',
      'The monsoon (from Arabic "mausim") dominates East Asian weather patterns',
      'Japan consists of nearly 7,000 islands; only 11% of land is farmable',
      'China has the world\'s largest reserves of rare earth elements',
      'The Gansu Corridor was a crucial choke point on the Silk Road',
      'Korea served as a cultural bridge between China and Japan',
    ],
    visualType: 'map',
    visualData: {
      title: 'East Asia: Key Geographic Features',
      markers: [
        { name: 'Yellow River', lat: 35.5, lng: 104.1, color: '#D4AF37' },
        { name: 'Yangtze River', lat: 30.5, lng: 112.0, color: '#047857' },
        { name: 'Beijing', lat: 39.9, lng: 116.4, color: '#722F37' },
        { name: 'Seoul', lat: 37.6, lng: 127.0, color: '#D97706' },
        { name: 'Tokyo', lat: 35.7, lng: 139.7, color: '#7C3AED' },
        { name: 'Tibetan Plateau', lat: 31.0, lng: 89.0, color: '#0D9488' },
      ],
    },
    quizQuestions: [
      { id: 'u3l1q1', question: 'Why is the Yellow River called the "Mother River of China"?', options: ['Because it is the longest river', 'Because its fertile valley supported the earliest Chinese agricultural settlements', 'Because it never floods', 'Because it is the cleanest river'], correctAnswer: 1, explanation: 'The Yellow River\'s fertile valley supported some of the earliest agricultural settlements in East Asia, earning it the name "Mother River."' },
      { id: 'u3l1q2', question: 'What does the word "monsoon" mean, and what language does it come from?', options: ['Storm in Chinese', 'Season in Arabic (mausim)', 'Wind in Japanese', 'Rain in Korean'], correctAnswer: 1, explanation: 'The word monsoon comes from the Arabic word "mausim" meaning season, reflecting the seasonal wind patterns that bring heavy summer rains.' },
      { id: 'u3l1q3', question: 'What percentage of Japan\'s land is farmable?', options: ['50%', '30%', '11%', '75%'], correctAnswer: 2, explanation: 'Only about 11% of Japan\'s total land area is arable, which led to intensive agricultural practices and community cooperation.' },
      { id: 'u3l1q4', question: 'What geographic feature served as a cultural bridge between China and Japan?', options: ['The Gobi Desert', 'The Korean Peninsula', 'The Himalayas', 'The Pacific Ocean'], correctAnswer: 1, explanation: 'Korea\'s location between China and Japan made it a cultural bridge, transmitting ideas and influences between the two civilisations.' },
      { id: 'u3l1q5', question: 'What is the Three Gorges Dam?', options: ['A defensive wall in Korea', 'The world\'s largest hydroelectric power station on the Yangtze River', 'An ancient temple in Beijing', 'A trade route through Central Asia'], correctAnswer: 1, explanation: 'The Three Gorges Dam on the Yangtze River is the world\'s largest hydroelectric power station, demonstrating China\'s engineering achievements.' },
    ],
    interactiveStrategies: [
      { strategy: 'Map Labelling', description: 'Label key geographic features of East Asia on a blank map', duration: 8, instructions: 'Using the blank map provided, label: the Yellow River, Yangtze River, Himalayas, Tibetan Plateau, Gobi Desert, Sea of Japan, and the capital cities of China, Japan, and South Korea. Add the Silk Road route.' },
      { strategy: 'Comparative Analysis', description: 'Compare how geography influenced two East Asian civilisations', duration: 7, instructions: 'Choose two countries from East Asia. Create a comparison table showing: geography, climate, natural resources, and how each shaped the civilisation\'s development. Present your findings.' },
    ],
  },
  {
    lessonId: 'G7_T1_Unit 3_l2',
    keyVocabulary: ['engineering', 'civilization', 'dynasty', 'Great Wall', 'Grand Canal', 'innovation'],
    reading1Title: 'Engineering and Civilization in Ancient China',
    reading1Content: `Ancient China produced some of the most remarkable engineering achievements in human history. These feats were not merely technical accomplishments — they were expressions of a civilisation that valued order, harmony, and the collective good. Chinese engineering was driven by practical needs: controlling rivers, defending borders, transporting goods, and unifying a vast empire.

The Great Wall of China is perhaps the most famous engineering project in history. Construction began during the Qin Dynasty (221-206 BCE) under Emperor Qin Shi Huang, who ordered the linking of existing walls to create a unified defence against northern nomadic tribes. The wall was built and rebuilt over many centuries, with most of the current structure dating from the Ming Dynasty (1368-1644 CE).

Key facts about the Great Wall:
- Total length: over 21,000 km including all branches
- Built by millions of workers over approximately 2,000 years
- Made of rammed earth, stone, and brick — materials varied by region
- Included watchtowers, garrison stations, and signal towers
- Not visible from the Moon (a common myth), but an extraordinary achievement nonetheless

The Grand Canal is another marvel of Chinese engineering. Begun in the 5th century BCE and expanded under the Sui Dynasty (581-618 CE), it is the longest artificial waterway in the world at approximately 1,776 km. The canal connected the Yellow River valley in the north with the Yangtze River valley in the south, enabling the transport of grain, troops, and information across the empire. At its peak, over 800,000 tonnes of grain were transported annually along the canal.

Chinese engineering achievements extended to many other fields:
- Papermaking — invented during the Han Dynasty (c. 105 CE), revolutionising communication
- Printing — woodblock printing by the 7th century, movable type by the 11th century
- Iron and steel production — China produced cast iron centuries before Europe
- Bridge building — the Zhaozhou Bridge (c. 605 CE) is the world's oldest open-spandrel arch bridge
- Shipbuilding — Chinese junks were the most advanced ships of their time`,
    reading2Title: 'Islamic Connections: Trade and Exchange with China',
    reading2Content: `The relationship between the Islamic world and China dates back to the earliest days of Islam. Trade between the Middle East and China existed long before Islam, but the expansion of the Islamic empire created new opportunities for cultural and technological exchange.

Historical connections include:
- Tang Dynasty (618-907 CE): Arab and Persian merchants established communities in Chinese port cities like Guangzhou and Quanzhou
- The Battle of Talas (751 CE): A conflict between the Abbasid Caliphate and the Tang Dynasty that led to the transfer of papermaking technology from China to the Islamic world
- Song Dynasty (960-1279 CE): Flourishing maritime trade between Muslim merchants and Chinese ports
- Yuan Dynasty (1271-1368 CE): The Mongol rulers employed Muslim administrators, engineers, and astronomers

The transfer of papermaking from China to the Islamic world after the Battle of Talas was transformative. Within decades, paper mills were operating in Samarkand, Baghdad, Damascus, and Cairo. The availability of paper revolutionised Islamic scholarship, enabling the creation of vast libraries and the preservation of knowledge that would later fuel the European Renaissance.

The Zheng He expeditions (1405-1433) represent another remarkable connection. Admiral Zheng He, a Muslim Chinese explorer, led seven naval expeditions that reached as far as East Africa and the Arabian Peninsula. His fleets, consisting of over 300 ships and 27,000 crew members, were the largest the world had ever seen. Zheng He visited Jeddah and is believed to have performed the Hajj pilgrimage to Makkah.

These historical connections demonstrate that civilisations do not develop in isolation. The exchange of ideas, technologies, and cultural practices between China and the Islamic world enriched both civilisations and contributed to the advancement of human knowledge as a whole.`,
    reading1Time: 8,
    reading2Time: 6,
    kwlExplanation: KWL_EXPLANATION,
    discussionQuestions: [
      'What practical needs drove Chinese engineering achievements?',
      'How was the Great Wall built, and why was it important?',
      'What was the Grand Canal, and how did it unite the Chinese empire?',
      'How did the Battle of Talas (751 CE) change the course of history?',
      'What were the Zheng He expeditions, and what do they reveal about China\'s connections to the Islamic world?',
    ],
    keyFacts: [
      'The Great Wall stretches over 21,000 km and was built over approximately 2,000 years',
      'The Grand Canal (1,776 km) is the longest artificial waterway in the world',
      'Papermaking was invented in China c. 105 CE during the Han Dynasty',
      'The Battle of Talas (751 CE) transferred papermaking from China to the Islamic world',
      'Admiral Zheng He (a Muslim explorer) led seven naval expeditions reaching East Africa and Arabia',
      'Zheng He\'s fleets had over 300 ships and 27,000 crew — the largest in history at the time',
      'The Zhaozhou Bridge (c. 605 CE) is the world\'s oldest open-spandrel arch bridge',
      'Paper mills spread from Samarkand to Baghdad, Damascus, and Cairo after 751 CE',
    ],
    visualType: 'timeline',
    visualData: {
      title: 'Chinese Engineering Through the Ages',
      events: [
        { year: 'c. 500 BCE', event: 'Grand Canal construction begins' },
        { year: '221 BCE', event: 'Great Wall construction begins under Qin Dynasty' },
        { year: 'c. 105 CE', event: 'Papermaking invented during Han Dynasty' },
        { year: 'c. 605 CE', event: 'Zhaozhou Bridge built' },
        { year: '751 CE', event: 'Battle of Talas — papermaking transfers to Islamic world' },
        { year: '1405-1433', event: 'Zheng He\'s seven expeditions' },
      ],
    },
    quizQuestions: [
      { id: 'u3l2q1', question: 'Which dynasty began construction of the Great Wall?', options: ['Han Dynasty', 'Ming Dynasty', 'Qin Dynasty', 'Song Dynasty'], correctAnswer: 2, explanation: 'Emperor Qin Shi Huang of the Qin Dynasty (221-206 BCE) ordered the linking of existing walls to create the first unified Great Wall.' },
      { id: 'u3l2q2', question: 'What happened at the Battle of Talas (751 CE)?', options: ['China conquered Central Asia', 'Papermaking technology transferred from China to the Islamic world', 'The Great Wall was completed', 'Islam was introduced to China'], correctAnswer: 1, explanation: 'The Battle of Talas between the Abbasid Caliphate and Tang Dynasty led to Chinese papermakers being captured, transferring this revolutionary technology to the Islamic world.' },
      { id: 'u3l2q3', question: 'What was significant about Admiral Zheng He?', options: ['He built the Great Wall', 'He was a Muslim Chinese explorer who led the largest fleets the world had seen', 'He invented paper', 'He conquered Japan'], correctAnswer: 1, explanation: 'Zheng He was a Muslim Chinese admiral who led seven expeditions with fleets of 300+ ships, reaching East Africa and Arabia.' },
      { id: 'u3l2q4', question: 'What was the Grand Canal used for?', options: ['Only for fishing', 'Transporting grain, troops, and information across the Chinese empire', 'Only for irrigation', 'Military training'], correctAnswer: 1, explanation: 'The Grand Canal connected northern and southern China, enabling transport of grain (800,000+ tonnes annually), troops, and communications.' },
      { id: 'u3l2q5', question: 'What happened to papermaking after it reached the Islamic world?', options: ['It was banned', 'Paper mills spread to Samarkand, Baghdad, Damascus, and Cairo, revolutionising scholarship', 'It was forgotten', 'It was only used for money'], correctAnswer: 1, explanation: 'Paper spread rapidly through the Islamic world, enabling vast libraries and the preservation of knowledge that later fuelled the European Renaissance.' },
    ],
    interactiveStrategies: [
      { strategy: 'Engineering Challenge', description: 'Design a model of a Chinese engineering achievement', duration: 10, instructions: 'In groups of 4, choose one Chinese engineering achievement. Sketch a diagram showing how it works and what materials were used. Explain: What problem did it solve? How did it work? Why was it innovative?' },
      { strategy: 'Debate', description: 'Was the Great Wall worth the human cost of building it?', duration: 8, instructions: 'Split into two groups. Group A argues the Wall was worth the cost (defence, trade, unity). Group B argues it was not worth the cost (deaths, forced labour, resources). Use evidence from the lesson.' },
    ],
  },
  {
    lessonId: 'G7_T1_Unit 3_l3',
    keyVocabulary: ['innovation', 'compass', 'gunpowder', 'printing', 'medicine', 'acupuncture'],
    reading1Title: 'Chinese Technology, Science, and Medicine',
    reading1Content: `Ancient China produced the "Four Great Inventions" that changed the course of world history: papermaking, printing, gunpowder, and the compass. Each of these innovations originated in China centuries before reaching Europe, and each had profound effects on global civilisation.

Papermaking: Invented during the Han Dynasty around 105 CE by Cai Lun, paper replaced bamboo strips, silk, and other expensive writing materials. The invention made writing accessible to more people and enabled the spread of knowledge.

Printing: Woodblock printing was developed by the 7th century CE, and Bi Sheng invented movable type printing around 1040 CE during the Song Dynasty. This technology made books affordable and widespread, democratising knowledge long before the European printing press.

Gunpowder: Discovered accidentally by Chinese alchemists seeking an elixir of immortality during the Tang Dynasty (9th century CE), gunpowder was initially used for fireworks and signals. By the Song Dynasty, it was being used in military weapons including fire arrows, bombs, and early cannons. Gunpowder reached the Islamic world and then Europe through trade routes.

The Compass: The magnetic compass was developed in China during the Han Dynasty (2nd century BCE) as a divination tool. By the Song Dynasty (11th century CE), it was being used for navigation, enabling Chinese ships to travel far from sight of land. This technology revolutionised maritime trade and exploration.

Beyond the Four Great Inventions, Chinese science and technology made many other contributions:
- Astronomy: Chinese astronomers recorded solar eclipses, comets, and supernovae with remarkable accuracy
- Mathematics: The decimal system, negative numbers, and algebra were developed independently in China
- Seismology: Zhang Heng invented the first seismograph in 132 CE
- Agriculture: The seed drill, iron plough, and water-powered mills increased food production dramatically`,
    reading2Title: 'Traditional Chinese Medicine and Its Legacy',
    reading2Content: `Traditional Chinese Medicine (TCM) is one of the oldest medical systems in the world, with a history spanning over 2,500 years. Based on the concept of balance between yin (dark, cold, passive) and yang (light, hot, active), TCM views health as a state of harmony and disease as a state of imbalance.

Key principles of TCM include:
- Qi (chi): The vital energy that flows through the body along pathways called meridians
- Yin and Yang: Opposing but complementary forces that must be balanced for health
- Five Elements: Wood, Fire, Earth, Metal, and Water — each connected to specific organs and emotions
- Diagnosis through observation: examining the tongue, pulse, complexion, and voice

TCM treatment methods include:
- Acupuncture: Inserting thin needles at specific points along meridians to restore energy flow
- Herbal medicine: Using combinations of plants, minerals, and animal products
- Moxibustion: Burning herbs near the skin to stimulate acupuncture points
- Cupping: Creating suction on the skin to improve blood flow
- Tai Chi and Qigong: Movement and breathing exercises for health maintenance

The most famous TCM text is the "Huangdi Neijing" (Yellow Emperor's Inner Canon), compiled around 200 BCE. This text established the theoretical foundation of TCM and is still studied today.

Islamic medicine and Chinese medicine had historical connections through trade routes. During the Tang and Song Dynasties, Muslim physicians contributed to Chinese medical knowledge, and Chinese medical texts were translated into Arabic and Persian. The concept of "prophetic medicine" (al-tibb al-nabawi) in Islam shares some principles with TCM, including the emphasis on prevention, the use of natural remedies, and the belief that health involves the whole person — body, mind, and spirit.

Today, TCM is practised worldwide and is increasingly integrated with modern medicine. The World Health Organization (WHO) has recognised acupuncture as an effective treatment for dozens of conditions, and many modern drugs have been developed from traditional Chinese herbal remedies, including artemisinin — a breakthrough treatment for malaria discovered by Chinese scientist Tu Youyou, who won the Nobel Prize in 2015.`,
    reading1Time: 8,
    reading2Time: 6,
    kwlExplanation: KWL_EXPLANATION,
    discussionQuestions: [
      'What are the Four Great Inventions of China, and how did each change the world?',
      'How did gunpowder transform from a discovery by alchemists to a military technology?',
      'What are the key principles of Traditional Chinese Medicine?',
      'How did Islamic and Chinese medical traditions influence each other?',
      'What is the significance of Tu Youyou\'s Nobel Prize for traditional medicine?',
    ],
    keyFacts: [
      'The Four Great Inventions: papermaking, printing, gunpowder, and the compass',
      'Papermaking was invented around 105 CE by Cai Lun during the Han Dynasty',
      'Movable type printing was invented by Bi Sheng around 1040 CE',
      'Gunpowder was discovered by alchemists seeking immortality in the 9th century',
      'The magnetic compass was used for navigation by the 11th century',
      'Zhang Heng invented the first seismograph in 132 CE',
      'TCM is based on balance between yin and yang and the flow of qi',
      'The Huangdi Neijing (Yellow Emperor\'s Inner Canon, c. 200 BCE) is the foundational TCM text',
      'Tu Youyou won the 2015 Nobel Prize for discovering artemisinin from traditional Chinese herbs',
    ],
    visualType: 'timeline',
    visualData: {
      title: 'Chinese Scientific and Medical Achievements',
      events: [
        { year: 'c. 200 BCE', event: 'Huangdi Neijing compiled' },
        { year: 'c. 105 CE', event: 'Papermaking invented by Cai Lun' },
        { year: '132 CE', event: 'Zhang Heng invents the seismograph' },
        { year: '7th century', event: 'Woodblock printing developed' },
        { year: '9th century', event: 'Gunpowder discovered by alchemists' },
        { year: 'c. 1040 CE', event: 'Movable type printing invented' },
        { year: '11th century', event: 'Compass used for navigation' },
        { year: '2015', event: 'Tu Youyou wins Nobel Prize for artemisinin' },
      ],
    },
    quizQuestions: [
      { id: 'u3l3q1', question: 'What are the "Four Great Inventions" of China?', options: ['Wheel, fire, agriculture, writing', 'Papermaking, printing, gunpowder, and the compass', 'Tea, silk, porcelain, and jade', 'Sword, shield, bow, and armour'], correctAnswer: 1, explanation: 'The Four Great Inventions — papermaking, printing, gunpowder, and the compass — originated in China and profoundly changed world history.' },
      { id: 'u3l3q2', question: 'How was gunpowder discovered?', options: ['By military engineers', 'Accidentally by alchemists seeking an elixir of immortality', 'By a farmer mixing chemicals', 'Through a dream'], correctAnswer: 1, explanation: 'Gunpowder was discovered accidentally by Chinese alchemists who were trying to create an elixir of immortality during the Tang Dynasty.' },
      { id: 'u3l3q3', question: 'What is the foundational text of Traditional Chinese Medicine?', options: ['The Art of War', 'The Huangdi Neijing (Yellow Emperor\'s Inner Canon)', 'The Analects', 'The I Ching'], correctAnswer: 1, explanation: 'The Huangdi Neijing (Yellow Emperor\'s Inner Canon), compiled around 200 BCE, is the foundational text of TCM and is still studied today.' },
      { id: 'u3l3q4', question: 'What did Tu Youyou discover that earned her the Nobel Prize?', options: ['A new type of compass', 'Artemisinin — a breakthrough malaria treatment from traditional Chinese herbs', 'A new printing technique', 'A cure for the common cold'], correctAnswer: 1, explanation: 'Tu Youyou discovered artemisinin from sweet wormwood, a traditional Chinese herb, creating a breakthrough malaria treatment that won her the 2015 Nobel Prize.' },
      { id: 'u3l3q5', question: 'What is "qi" in Traditional Chinese Medicine?', options: ['A type of food', 'The vital energy that flows through the body along meridians', 'A mathematical concept', 'A type of medicine'], correctAnswer: 1, explanation: 'Qi (chi) is the vital energy that flows through the body along pathways called meridians — its proper flow is essential for health in TCM.' },
    ],
    interactiveStrategies: [
      { strategy: 'Invention Impact Analysis', description: 'Analyze how one Chinese invention changed the world', duration: 8, instructions: 'Choose one of the Four Great Inventions. Research: (1) How was it invented? (2) How did it spread to other civilisations? (3) What impact did it have? (4) How different would the world be without it? Present your analysis.' },
      { strategy: 'Comparative Chart', description: 'Compare TCM with modern medicine or Islamic prophetic medicine', duration: 7, instructions: 'Create a comparison chart: diagnosis methods, treatment approaches, philosophy, strengths, and limitations. Show where they complement each other and where they differ.' },
    ],
  },
  {
    lessonId: 'G7_T1_Unit 3_l4',
    keyVocabulary: ['calligraphy', 'porcelain', 'silk', 'painting', 'cultural exchange', 'Buddhism'],
    reading1Title: 'Spreading Cultures Through Art in China',
    reading1Content: `Art has been one of the most powerful means of cultural exchange throughout human history. Chinese art — from calligraphy to porcelain to silk — not only expressed the values and aesthetics of Chinese civilisation but also served as a vehicle for spreading Chinese culture across Asia and beyond.

Chinese calligraphy is considered the supreme art form in Chinese culture. Using a brush, ink, paper, and inkstone (the "Four Treasures of the Study"), calligraphers create characters that are both meaningful and beautiful. Chinese calligraphy is not merely writing — it is a meditative practice that reveals the artist's character, discipline, and spiritual state. The great calligrapher Wang Xizhi (303-361 CE) is known as the "Sage of Calligraphy," and his work "Preface to the Poems Collected from the Orchid Pavilion" is considered the greatest piece of calligraphy ever created.

Chinese painting developed alongside calligraphy and shares many of the same principles. Traditional Chinese painting uses the same brush and ink as calligraphy and emphasises:
- Expression of spirit rather than realistic depiction
- Harmony between humanity and nature
- The use of empty space as an integral part of the composition
- Landscapes (shanshui) as the highest form of painting

Porcelain — often called "china" in English because of its Chinese origins — is perhaps China's most famous artistic export. Chinese potters developed porcelain during the Eastern Han Dynasty (25-220 CE), and by the Tang Dynasty, Chinese porcelain was being exported across the Indian Ocean to the Middle East and East Africa. The cobalt blue designs of Ming Dynasty porcelain (1368-1644) became so iconic that the colour scheme is still known as "blue and white" worldwide.

Silk production (sericulture) was a closely guarded Chinese secret for over 3,000 years. According to legend, Empress Leizu discovered silk when a cocoon fell into her tea and she unravelled the fine thread. Silk became China's most valuable export, and the trade routes that carried silk to the West became known as the "Silk Road." The Islamic world was one of the largest markets for Chinese silk, and silk production eventually spread to Persia, the Byzantine Empire, and eventually Europe.`,
    reading2Title: 'Cultural Exchange Along the Silk Road',
    reading2Content: `The Silk Road was not a single road but a vast network of trade routes connecting China to Central Asia, the Middle East, Africa, and Europe. Named by the German geographer Ferdinand von Richthofen in 1877, the Silk Road facilitated not just the exchange of goods but also the exchange of ideas, religions, technologies, and artistic traditions.

Goods that travelled along the Silk Road:
- From China: silk, porcelain, tea, paper, gunpowder, compass, bronze work
- From Central Asia: horses, jade, wool, carpets
- From the Islamic world: glass, carpets, spices, incense, scientific instruments
- From India: cotton, spices, precious stones, Buddhism

Religions that spread along the Silk Road:
- Buddhism travelled from India to China along the Silk Road, profoundly influencing Chinese art, architecture, and philosophy
- Islam spread eastward along the Silk Road, with Muslim communities established in Chinese cities by the Tang Dynasty
- Nestorian Christianity also reached China via the Silk Road, as evidenced by the Nestorian Stele of 781 CE

The Silk Road also facilitated the exchange of artistic styles. Chinese Buddhist art shows clear influences from Indian and Central Asian traditions, while Islamic pottery and ceramics were influenced by Chinese porcelain techniques. The blue cobalt used in Ming Dynasty porcelain was actually imported from the Islamic world, creating a beautiful example of cultural exchange: Chinese porcelain using Islamic materials.

The UAE occupies a strategic position in this historical network. The port cities of the Arabian Gulf — including what is now the UAE — served as important trading hubs connecting the Silk Road's maritime routes with overland routes. Archaeological sites like Ed-Dur in Umm Al Quwain reveal extensive trade connections with China dating back over 2,000 years.

The legacy of the Silk Road lives on in modern China's Belt and Road Initiative, which seeks to revive the ancient trade routes through infrastructure investment and economic cooperation. The UAE is a key partner in this initiative, reflecting the enduring connection between East Asia and the Gulf region.`,
    reading1Time: 8,
    reading2Time: 6,
    kwlExplanation: KWL_EXPLANATION,
    discussionQuestions: [
      'Why is calligraphy considered the supreme art form in Chinese culture?',
      'How did Chinese porcelain spread to the Islamic world?',
      'What was the Silk Road, and what types of things were exchanged along it?',
      'How did Buddhism travel from India to China, and how did it influence Chinese art?',
      'What is the connection between the ancient Silk Road and the UAE?',
    ],
    keyFacts: [
      'Chinese calligraphy uses the "Four Treasures of the Study": brush, ink, paper, inkstone',
      'Wang Xizhi (303-361 CE) is the "Sage of Calligraphy"',
      'Chinese porcelain was developed during the Eastern Han Dynasty (25-220 CE)',
      'Ming Dynasty blue-and-white porcelain used cobalt imported from the Islamic world',
      'Silk production was a Chinese secret for over 3,000 years',
      'The Silk Road was a network of trade routes, not a single road',
      'Buddhism spread from India to China along the Silk Road',
      'Islam reached China via the Silk Road by the Tang Dynasty',
      'UAE port cities were important hubs in the Silk Road maritime network',
      'China\'s Belt and Road Initiative revives the ancient Silk Road connections',
    ],
    visualType: 'diagram',
    visualData: {
      title: 'Silk Road Exchange: Goods and Ideas',
      items: [
        { label: 'From China', description: 'Silk, porcelain, tea, paper, gunpowder, compass' },
        { label: 'From Central Asia', description: 'Horses, jade, wool, carpets' },
        { label: 'From Islamic World', description: 'Glass, carpets, spices, scientific instruments' },
        { label: 'From India', description: 'Cotton, spices, precious stones, Buddhism' },
        { label: 'Shared Ideas', description: 'Religions, artistic styles, technologies, medicine' },
      ],
    },
    quizQuestions: [
      { id: 'u3l4q1', question: 'Why is Chinese porcelain called "china" in English?', options: ['Because it was invented in a country called China', 'Because of its Chinese origins — China was the birthplace of porcelain', 'Because it sounds nice', 'Because it was only made in one city'], correctAnswer: 1, explanation: 'Porcelain is called "china" in English because it originated in China, where potters developed this ceramic technology over 2,000 years ago.' },
      { id: 'u3l4q2', question: 'What is the connection between Ming Dynasty porcelain and the Islamic world?', options: ['There is no connection', 'The blue cobalt used in Ming porcelain was imported from the Islamic world', 'Islamic artists painted Chinese porcelain', 'China copied Islamic pottery designs'], correctAnswer: 1, explanation: 'The cobalt blue pigment used in famous Ming blue-and-white porcelain was imported from the Islamic world, creating a beautiful example of cultural exchange.' },
      { id: 'u3l4q3', question: 'What religions spread along the Silk Road?', options: ['Only Islam', 'Buddhism, Islam, and Nestorian Christianity', 'Only Buddhism', 'Only Christianity'], correctAnswer: 1, explanation: 'The Silk Road facilitated the spread of multiple religions including Buddhism (from India to China), Islam (eastward to China), and Nestorian Christianity.' },
      { id: 'u3l4q4', question: 'How long was silk production a Chinese secret?', options: ['100 years', '500 years', 'Over 3,000 years', '50 years'], correctAnswer: 2, explanation: 'Silk production was closely guarded as a Chinese secret for over 3,000 years before eventually spreading to other regions.' },
      { id: 'u3l4q5', question: 'What was the UAE\'s role in the Silk Road?', options: ['No role', 'UAE port cities were important trading hubs connecting maritime and overland routes', 'The UAE blocked the Silk Road', 'The UAE only participated in modern trade'], correctAnswer: 1, explanation: 'UAE port cities served as important trading hubs on the Silk Road\'s maritime routes, connecting sea and overland trade networks for over 2,000 years.' },
    ],
    interactiveStrategies: [
      { strategy: 'Art Analysis', description: 'Analyze a piece of Chinese art for cultural meaning and Silk Road influences', duration: 8, instructions: 'Your teacher will show you images of Chinese art (calligraphy, porcelain, painting). For each piece, identify: (1) What artistic principles does it show? (2) What cultural values does it express? (3) Can you see any influences from other cultures?' },
      { strategy: 'Trade Route Simulation', description: 'Simulate Silk Road trade and cultural exchange', duration: 10, instructions: 'Each group represents a Silk Road city. You have goods and ideas to trade. Move around the classroom "trading" with other cities. After 7 minutes, discuss: What did you gain? What did you give? How did cultural exchange happen?' },
    ],
  },
  {
    lessonId: 'G7_T1_Unit 3_l5',
    keyVocabulary: ['Joseon', 'Hangul', 'Confucianism', 'renaissance', 'cultural achievement', 'scholarship'],
    reading1Title: "Korea's Renaissance: The Joseon Dynasty",
    reading1Content: `While Europe experienced its Renaissance between the 14th and 17th centuries, Korea was undergoing its own remarkable cultural flowering under the Joseon Dynasty (1392-1910). This period is often called "Korea's Renaissance" because of its extraordinary achievements in science, technology, literature, and the arts.

The Joseon Dynasty was founded by Yi Seong-gye in 1392, establishing a Confucian state that would last for over 500 years. Confucianism — a philosophy based on the teachings of Confucius (551-479 BCE) — emphasised moral cultivation, social harmony, filial piety, and the importance of education. These values shaped every aspect of Joseon society, from government to family life.

Key achievements of the Joseon Dynasty include:

1. Hangul — The Korean Alphabet: King Sejong the Great (r. 1418-1450) commissioned the creation of Hangul, the Korean alphabet, which was officially promulgated in 1446. Before Hangul, Koreans used Chinese characters (hanja) for writing, which were extremely difficult to learn and kept literacy limited to the elite. Hangul was designed to be so logical and simple that "a wise man can acquaint himself with them before the morning is over; even a stupid man can learn them in the space of ten days." Today, Hangul is considered one of the most scientific and efficient writing systems ever created.

2. Scientific achievements: The Joseon Dynasty produced remarkable scientific instruments and knowledge:
- The Cheomseongdae observatory — one of the oldest surviving astronomical observatories in the world
- Rain gauges (1441) — the first standardised rain measurement devices in the world
- Water clocks and sundials — for precise timekeeping
- The Honcheonsigye — an astronomical clock that showed the movements of celestial bodies

3. Printing innovation: Korea developed metal movable type printing (c. 1234) over 200 years before Gutenberg's printing press in Europe. The Jikji, printed in 1377, is the oldest extant book printed with metal movable type.

4. Literature and scholarship: Joseon scholars produced encyclopaedic works on medicine, agriculture, astronomy, and history. The "Veritable Records of the Joseon Dynasty" is the longest continuous chronicle of a single dynasty in world history, comprising 1,893 volumes.`,
    reading2Title: 'The Legacy of King Sejong and Korean-Islamic Connections',
    reading2Content: `King Sejong the Great is widely regarded as the greatest ruler in Korean history. His reign (1418-1450) was marked by extraordinary cultural, scientific, and social achievements that transformed Korean society.

King Sejong's most famous achievement was the creation of Hangul, but his contributions extended far beyond the alphabet:
- Established the Hall of Worthies (Jiphyeonjeon) — a royal research institute that attracted Korea's finest scholars
- Promoted scientific research in astronomy, medicine, agriculture, and music
- Reformed the legal system to be more fair and humane
- Expanded Korea's territory and strengthened its defences
- Promoted music and the arts as essential to moral cultivation

The creation of Hangul faced significant opposition from the Korean aristocracy (yangban), who saw Chinese characters as a mark of their elite status. King Sejong persisted because he believed that all people — not just the educated elite — deserved access to knowledge and the ability to express themselves in writing. This democratic vision was revolutionary for its time.

Korean-Islamic connections are less well-known than Chinese-Islamic connections but are nonetheless significant:
- During the Goryeo Dynasty (918-1392), Muslim merchants traded in Korean ports, and Korean pottery shows Islamic influences
- The Korean royal court employed Muslim astronomers and physicians
- Islamic scientific knowledge, including astronomy and mathematics, influenced Korean scholarship
- Some Korean words have Arabic origins, reflecting historical trade connections

The UAE and South Korea have a strong modern relationship. South Korea was one of the first countries to establish diplomatic relations with the UAE in 1980. Today, the UAE is South Korea's largest trading partner in the Middle East, and Korean cultural exports — from K-pop to Korean drama to technology — are popular among Emirati youth. The Barakah Nuclear Energy Plant in Abu Dhabi, the first nuclear power plant in the Arab world, was built with Korean technology and expertise.

The legacy of Korea's Renaissance teaches us that cultural achievement flourishes when leaders invest in education, science, and the well-being of their people — a lesson that resonates strongly with the UAE's own development vision.`,
    reading1Time: 8,
    reading2Time: 6,
    kwlExplanation: KWL_EXPLANATION,
    discussionQuestions: [
      'Why is the Joseon Dynasty called "Korea\'s Renaissance"?',
      'What was the significance of Hangul, and why did King Sejong create it?',
      'What scientific achievements did the Joseon Dynasty produce?',
      'How did Korea develop metal movable type printing before Europe?',
      'What are the connections between Korea and the Islamic world, both historical and modern?',
    ],
    keyFacts: [
      'The Joseon Dynasty (1392-1910) is called "Korea\'s Renaissance"',
      'King Sejong the Great created Hangul, the Korean alphabet, in 1446',
      'Hangul is considered one of the most scientific writing systems ever created',
      'Korea invented metal movable type printing (c. 1234), over 200 years before Gutenberg',
      'The Jikji (1377) is the oldest extant book printed with metal movable type',
      'Joseon scientists invented rain gauges (1441) — the world\'s first standardised ones',
      'The "Veritable Records of the Joseon Dynasty" is the longest continuous dynastic chronicle',
      'Muslim merchants and scholars had connections with Korea during the Goryeo Dynasty',
      'The UAE and South Korea have strong modern diplomatic and economic relations',
      'The Barakah Nuclear Energy Plant in Abu Dhabi was built with Korean technology',
    ],
    visualType: 'timeline',
    visualData: {
      title: 'Korean Renaissance Timeline',
      events: [
        { year: '918-1392', event: 'Goryeo Dynasty — Muslim trade connections' },
        { year: 'c. 1234', event: 'Metal movable type printing invented in Korea' },
        { year: '1392', event: 'Joseon Dynasty founded by Yi Seong-gye' },
        { year: '1418-1450', event: 'Reign of King Sejong the Great' },
        { year: '1441', event: 'World\'s first standardised rain gauge invented' },
        { year: '1446', event: 'Hangul (Korean alphabet) officially promulgated' },
        { year: '1377', event: 'Jikji printed — oldest extant metal type book' },
        { year: '1980', event: 'UAE-South Korea diplomatic relations established' },
      ],
    },
    quizQuestions: [
      { id: 'u3l5q1', question: 'Who created the Korean alphabet (Hangul)?', options: ['A group of Buddhist monks', 'King Sejong the Great', 'Confucius', 'A Korean merchant'], correctAnswer: 1, explanation: 'King Sejong the Great commissioned the creation of Hangul in 1446, making literacy accessible to all Koreans, not just the educated elite.' },
      { id: 'u3l5q2', question: 'When was metal movable type printing invented in Korea?', options: ['After Gutenberg in 1450', 'Around 1234 — over 200 years before Gutenberg', 'In the 16th century', 'It was never invented in Korea'], correctAnswer: 1, explanation: 'Korea developed metal movable type printing around 1234, over 200 years before Gutenberg\'s printing press in Europe.' },
      { id: 'u3l5q3', question: 'Why did the Korean aristocracy oppose Hangul?', options: ['Because it was ugly', 'Because Chinese characters were a mark of their elite status and literacy', 'Because it was too easy to learn', 'Because the King forced them to use it'], correctAnswer: 1, explanation: 'The yangban aristocracy opposed Hangul because Chinese characters were a mark of their elite status, and a simple alphabet would democratise literacy.' },
      { id: 'u3l5q4', question: 'What is the connection between the UAE and Korean technology?', options: ['None', 'The Barakah Nuclear Energy Plant in Abu Dhabi was built with Korean technology', 'Korea buys oil from the UAE only', 'They have no diplomatic relations'], correctAnswer: 1, explanation: 'The Barakah Nuclear Energy Plant, the first nuclear power plant in the Arab world, was built with Korean technology and expertise, demonstrating strong UAE-Korea cooperation.' },
      { id: 'u3l5q5', question: 'What was the Hall of Worthies (Jiphyeonjeon)?', options: ['A royal palace', 'A royal research institute that attracted Korea\'s finest scholars', 'A military training ground', 'A religious temple'], correctAnswer: 1, explanation: 'The Hall of Worthies was a royal research institute established by King Sejong that brought together Korea\'s best scholars for scientific and cultural research.' },
    ],
    interactiveStrategies: [
      { strategy: 'Comparative Analysis', description: 'Compare Korea\'s Renaissance with the European Renaissance', duration: 8, instructions: 'In pairs, create a comparison chart: timing, key achievements, philosophy, scientific innovations, and lasting impact. Identify at least 3 similarities and 3 differences. Share your findings.' },
      { strategy: 'Creative Writing', description: 'Write a diary entry as a Korean student learning Hangul for the first time', duration: 7, instructions: 'Imagine you are a young Korean in 1446 hearing about the new alphabet for the first time. Write a diary entry: How do you feel? What does this mean for your future? What might the aristocrats think?' },
    ],
  },
];

// ═══════════════════════════════════════════════════════════════
// LOOKUP FUNCTION
// ═══════════════════════════════════════════════════════════════

export function getG7T1LessonContent(lessonId: string): LessonContent | null {
  const all = [...g7t1Unit1, ...g7t1Unit2, ...g7t1Unit3];
  return all.find(l => l.lessonId === lessonId) || null;
}
