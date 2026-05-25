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

export const g7t2Unit6: LessonContent[] = [
  // ============================================================
  // LESSON 1: Geography of South Asia
  // ============================================================
  {
    lessonId: 'G7_T2_Unit 6_l1',
    keyVocabulary: ['tributary', 'valley', 'delta', 'plain', 'glacier'],
    reading1Title: 'The Physical Geography of South Asia',
    reading1Content: `South Asia is a vast and diverse region that includes the countries of India, Pakistan, Bangladesh, Nepal, Bhutan, Sri Lanka, and Afghanistan. The geography of this region has played a crucial role in shaping its history, culture, and civilisations. There are four major geographic features that define South Asia.

The first feature is the northern mountain ranges. The Himalayas form a massive natural barrier along the northern edge of South Asia. These mountains include Mount Everest, the tallest peak in the world at 8,849 metres. The Himalayas have protected the subcontinent from invasions from the north for thousands of years while also influencing weather patterns.

The second feature is the Ganges Plain, also called the Indo-Gangetic Plain. This is a vast, flat, and extremely fertile area stretching across northern India and parts of Pakistan. The rich alluvial soil deposited by rivers makes this one of the most productive agricultural regions in the world, supporting hundreds of millions of people.

The third feature is the Vindhya-Deccan Plateau. This volcanic rock plateau occupies much of central and southern India. The Vindhya and Satpura mountain ranges separate the northern plains from the Deccan Plateau, effectively dividing north from south both geographically and culturally.

The fourth feature is the extensive coastline. South Asia has long coastlines along the Arabian Sea, the Indian Ocean, and the Bay of Bengal. These coastlines enabled ancient maritime trade with the Middle East, East Africa, and Southeast Asia, much like the UAE's modern role as a global trade hub connecting East and West.

The word "India" comes from the Greeks, who called the region "Indos," referring to the Indus River. Major rivers include the Indus, which gave India its name and flows through Pakistan; the Ganges, sacred to Hindus, which flows through northern India; and the Brahmaputra, which flows through Assam and Bangladesh. Mountain passes such as the Gomal Pass and the Khyber Pass were historically important as trade and invasion routes connecting South Asia to Central Asia and the Middle East. The monsoon seasons bring winds from the southwest Indian Ocean, delivering heavy rainfall from June to September that sustains agriculture across the region.`,
    reading2Title: 'Climate and Water in South Asia',
    reading2Content: `Climate and water are defining forces in South Asia. The monsoon system is the most important weather phenomenon in the region, shaping agriculture, daily life, and even the economy. To understand how dramatic the rainfall difference can be, compare Bangladesh and the UAE. Bangladesh receives over 2,000 millimetres of rain annually, while the UAE receives less than 100 millimetres. This enormous contrast shows how geography determines the availability of water and the types of civilisations that can develop in a region.

The Ganges River is the lifeline of northern India. It originates from the Gangotri Glacier in the Himalayas, at an altitude of about 3,892 metres. From there, it flows 2,525 kilometres through the northern plains of India before emptying into the Bay of Bengal, where it forms the world's largest delta. The Ganges is considered sacred by Hindus, who believe that bathing in its waters purifies the soul. Today, the Ganges basin supports over 400 million people, making it one of the most densely populated river basins on Earth.

The Indus River is equally significant. It originates in Tibet near Lake Manasarovar, flows through the Ladakh region of India, and then traverses the entire length of Pakistan before reaching the Arabian Sea. The Indus gave India its name and was the cradle of one of the world's earliest civilisations — the Indus Valley Civilisation, which flourished around 2600 BCE. The Indus remains vital to Pakistan's agriculture and economy today.

Geography has profoundly shaped civilisation in South Asia. Rivers provided the water needed for agriculture, which allowed settlements to grow into cities and eventually civilisations. Mountains provided natural protection from invaders, creating a degree of security that allowed cultures to develop over long periods. Mountain passes, however, served as gateways for trade and cultural exchange, connecting South Asia to the broader world. This pattern of geography shaping civilisation is similar to how the UAE's strategic location at the crossroads of trade routes has shaped its development from ancient pearl diving communities to a modern global hub.

The monsoon winds also enabled predictable sailing schedules in the Indian Ocean, connecting South Asia to the Arabian Peninsula, East Africa, and beyond in a network of trade and cultural exchange that lasted for millennia.`,
    reading1Time: 8,
    reading2Time: 8,
    kwlExplanation: KWL_EXPLANATION,
    discussionQuestions: [
      'How do the Himalayas act as both a protector and an influence on South Asian climate?',
      'Why is the Ganges River considered sacred, and how does it support daily life for millions of people?',
      'Compare the rainfall of Bangladesh and the UAE — how does water availability shape the development of civilisations?',
      'Why were mountain passes like the Khyber Pass so important in ancient times?',
      'How do the monsoon seasons affect agriculture and daily life in South Asia?'
    ],
    keyFacts: [
      'The Himalayas include Mount Everest, the tallest mountain in the world at 8,849 metres.',
      'The Ganges Plain is one of the most fertile agricultural regions on Earth due to alluvial soil deposited by rivers.',
      'The Vindhya and Satpura ranges separate northern India from the Deccan Plateau.',
      'The word "India" comes from the Greek word "Indos," referring to the Indus River.',
      'The Ganges originates from the Gangotri Glacier and flows 2,525 km to the Bay of Bengal.',
      'The Indus River gave India its name and was the cradle of the Indus Valley Civilisation.',
      'The Khyber Pass and Gomal Pass were critical trade and invasion routes connecting South Asia to Central Asia.',
      'Monsoon winds from the southwest Indian Ocean bring heavy rain from June to September.',
      'Bangladesh receives over 2,000 mm of rain annually, while the UAE receives less than 100 mm.',
      'South Asia\'s coastlines enabled ancient maritime trade with the Middle East, East Africa, and Southeast Asia.'
    ],
    visualType: 'map',
    visualData: {
      title: 'South Asia: Rivers, Mountains, and Passes',
      regions: [
        { name: 'Himalayas', type: 'mountain_range', description: 'Northern mountain barrier including Mount Everest' },
        { name: 'Vindhya Range', type: 'mountain_range', description: 'Separates northern plains from the Deccan Plateau' },
        { name: 'Deccan Plateau', type: 'plateau', description: 'Volcanic rock plateau in central and southern India' }
      ],
      rivers: [
        { name: 'Indus', origin: 'Tibet', flowsThrough: 'Ladakh, Pakistan', emptiesInto: 'Arabian Sea' },
        { name: 'Ganges', origin: 'Gangotri Glacier', flowsThrough: 'Northern India', emptiesInto: 'Bay of Bengal' },
        { name: 'Brahmaputra', origin: 'Tibet', flowsThrough: 'Assam, Bangladesh', emptiesInto: 'Bay of Bengal' }
      ],
      passes: [
        { name: 'Khyber Pass', connects: 'Afghanistan and Pakistan' },
        { name: 'Gomal Pass', connects: 'Afghanistan and Pakistan' }
      ],
      coastlines: ['Arabian Sea', 'Indian Ocean', 'Bay of Bengal']
    },
    quizQuestions: [
      {
        id: 'G7T2U6L1Q1',
        question: 'Which mountain range forms a natural barrier along the northern edge of South Asia?',
        options: ['The Andes', 'The Himalayas', 'The Alps', 'The Rockies'],
        correctAnswer: 1,
        explanation: 'The Himalayas form a massive natural barrier along the northern edge of South Asia, including Mount Everest, the tallest peak in the world.'
      },
      {
        id: 'G7T2U6L1Q2',
        question: 'Where does the Ganges River originate?',
        options: ['Lake Manasarovar', 'The Gangotri Glacier in the Himalayas', 'The Deccan Plateau', 'The Vindhya Mountains'],
        correctAnswer: 1,
        explanation: 'The Ganges originates from the Gangotri Glacier in the Himalayas at an altitude of about 3,892 metres.'
      },
      {
        id: 'G7T2U6L1Q3',
        question: 'Which river gave India its name?',
        options: ['The Ganges', 'The Brahmaputra', 'The Indus', 'The Narmada'],
        correctAnswer: 2,
        explanation: 'The Indus River gave India its name. The Greeks called the region "Indos," referring to the Indus River.'
      },
      {
        id: 'G7T2U6L1Q4',
        question: 'Approximately how much annual rainfall does Bangladesh receive compared to the UAE?',
        options: ['About the same amount', 'Bangladesh receives over 2,000 mm while the UAE receives less than 100 mm', 'The UAE receives more rain than Bangladesh', 'Both receive between 500-1,000 mm'],
        correctAnswer: 1,
        explanation: 'Bangladesh receives over 2,000 mm of rain annually, while the UAE receives less than 100 mm, showing how geography determines water availability.'
      },
      {
        id: 'G7T2U6L1Q5',
        question: 'During which months do the monsoon winds bring heavy rain to South Asia?',
        options: ['December to March', 'March to May', 'June to September', 'October to November'],
        correctAnswer: 2,
        explanation: 'Monsoon winds from the southwest Indian Ocean bring heavy rain from June to September, sustaining agriculture across the region.'
      }
    ],
    interactiveStrategies: [
      {
        strategy: 'KWL Chart',
        description: 'Students complete a KWL chart about the geography of South Asia, tracking what they Know, Want to know, and have Learned.',
        duration: 15,
        instructions: 'Before reading, students fill in the "Know" column with facts they already know about South Asian geography. Then they write questions in the "Want to Know" column. After completing both readings, students fill in the "Learned" column with new information they discovered. Finally, students share one surprising fact with a partner.'
      },
      {
        strategy: 'Map Labelling Activity',
        description: 'Students label a blank map of South Asia with key geographic features including rivers, mountain ranges, and passes.',
        duration: 20,
        instructions: 'Provide students with a blank outline map of South Asia. Using the reading content and the visual map data, students should label: the Himalayas, the Vindhya Range, the Deccan Plateau, the Indus River, the Ganges River, the Brahmaputra River, the Khyber Pass, the Gomal Pass, and the surrounding bodies of water. Students then colour-code the regions by geographic feature type and write a one-sentence description of why each feature was historically important.'
      }
    ]
  },

  // ============================================================
  // LESSON 2: Ancient Civilizations of South Asia
  // ============================================================
  {
    lessonId: 'G7_T2_Unit 6_l2',
    keyVocabulary: ['civilization', 'archaeology', 'empire', 'monument', 'excavation'],
    reading1Title: 'Mehrgarh and the Harappan Civilization',
    reading1Content: `The story of civilisation in South Asia begins with some of the earliest farming settlements in the world. Mehrgarh, dating back to around 7000 BCE, is one of the earliest known farming settlements in South Asia. Located in present-day Balochistan, Pakistan, Mehrgarh provides crucial evidence of the transition from nomadic life to settled agriculture. Archaeologists have found evidence of wheat and barley cultivation, as well as domesticated animals including goats, sheep, and cattle. The people of Mehrgarh also produced distinctive pottery and beads, showing early signs of craft specialisation and trade.

The Harappan Civilisation, also known as the Indus Valley Civilisation, flourished from approximately 2600 to 1700 BCE. It was one of the world's earliest urban civilisations, alongside Mesopotamia and Ancient Egypt. The civilisation covered a vast area, stretching from present-day Afghanistan to western India, making it the largest of the ancient civilisations.

Two of the most important Harappan cities were Mohenjo-Daro and Dholavira. Mohenjo-Daro, located in present-day Sindh, Pakistan, was remarkable for its urban planning. The city featured baked bricks, a well-organised street grid, and an advanced drainage system that was far ahead of its time. Houses had indoor bathrooms and the city had public wells, demonstrating a high level of public health awareness.

Dholavira, located in present-day Gujarat, India, also showed sophisticated brick construction and a rectangular planned layout. One of the most fascinating discoveries at Harappan sites is the sunken structures, which archaeologists believe were pools, baths, wells, and water channels. These structures reveal a sophisticated water management system that was essential in a region with seasonal monsoon rainfall.

The Harappan Civilisation also had standardised weights and measures, which suggests a well-organised system of trade and governance. Trade networks reached as far as Mesopotamia, where Harappan goods have been found. Despite decades of study, the Harappan writing system remains undeciphered, making it one of the great mysteries of ancient history. The archaeological excavation of these sites continues to reveal new information about this remarkable civilisation, just as archaeological work in the UAE at sites like Sir Bani Yas reveals the region's ancient past.`,
    reading2Title: 'The Vedic Age and Pre-Mauryan Era',
    reading2Content: `The Vedic Age (approximately 1700-600 BCE) marks a significant period of cultural transformation in South Asia. During this time, cultural and linguistic changes took place in the subcontinent. Many scholars believe that groups speaking Indo-European languages migrated into the region from Central Asia, bringing new cultural elements and social structures. However, this "Aryan migration" theory is debated among historians and archaeologists, and some scholars propose alternative explanations for the cultural changes observed during this period. The term "Aryan" in ancient texts refers to people who spoke an Indo-European language and composed the sacred texts known as the Vedas.

Brahmins were the priestly class who preserved the Vedas, the sacred texts of Hinduism. The four Vedas are: the Rigveda, the oldest and most important, containing hymns and prayers; the Samaveda, which consists of musical chants; the Yajurveda, containing ritual formulas and instructions; and the Atharvaveda, which includes spells and incantations for daily life. These texts provide invaluable information about the social, religious, and cultural life of ancient South Asia.

The caste system also emerged during the Vedic period. This social hierarchy divided society into four main groups: Brahmins (priests and scholars), Kshatriyas (warriors and rulers), Vaishyas (merchants and farmers), and Shudras (labourers). Over time, this system became increasingly rigid and hereditary, shaping Indian society for thousands of years.

The Pre-Mauryan Era (600-321 BCE) saw the rise of independent kingdoms and republics known as Mahajanapadas. Sixteen major Mahajanapadas are mentioned in ancient texts, each with its own government, army, and territory. This period was characterised by political competition, philosophical debates, and the founding of new religions including Buddhism and Jainism.

A pivotal moment in this era was the invasion of Alexander the Great in 326 BCE. Alexander crossed the Indus River and defeated King Porus at the Battle of the Hydaspes. However, when Alexander's army reached the Beas River, his soldiers refused to advance further into India. Exhausted by years of campaigning and intimidated by the powerful Nanda Empire that lay ahead, the army mutinied. Alexander was forced to turn back, and he died in Babylon in 323 BCE. This encounter between Greek and Indian cultures had lasting effects, influencing art, architecture, and trade for centuries. The resulting power vacuum in northwestern India helped Chandragupta Maurya rise to power and establish the Mauryan Empire, much like how political transitions have shaped the histories of many regions including the Gulf states.`,
    reading1Time: 8,
    reading2Time: 8,
    kwlExplanation: KWL_EXPLANATION,
    discussionQuestions: [
      'What does the advanced urban planning of Mohenjo-Daro tell us about Harappan society?',
      'Why is the undeciphered Harappan script such a significant mystery for historians?',
      'How did the Vedic period shape the social structure of South Asian societies?',
      'What were the consequences of Alexander the Great\'s invasion of India?',
      'Compare the water management systems of the Harappan cities to modern water management challenges in the UAE.'
    ],
    keyFacts: [
      'Mehrgarh (7000 BCE) is one of the earliest farming settlements in South Asia, located in present-day Balochistan, Pakistan.',
      'The Harappan Civilisation (2600-1700 BCE) was one of the world\'s earliest urban civilisations.',
      'Mohenjo-Daro featured baked bricks, street planning, and an advanced drainage system.',
      'Dholavira showed brick construction and a rectangular planned layout.',
      'Sunken structures at Harappan sites are believed to be pools, baths, wells, and water channels.',
      'The Harappan writing system remains undeciphered to this day.',
      'The four Vedas are the Rigveda, Samaveda, Yajurveda, and Atharvaveda.',
      'Alexander the Great invaded India in 326 BCE but his army mutinied at the Beas River.',
      'The caste system emerged during the Vedic period with four main groups: Brahmins, Kshatriyas, Vaishyas, and Shudras.',
      'Sixteen Mahajanapadas (independent kingdoms) rose during the Pre-Mauryan Era.'
    ],
    visualType: 'timeline',
    visualData: {
      title: 'Ancient Civilisations of South Asia',
      events: [
        { year: '7000 BCE', label: 'Mehrgarh — earliest farming settlement', type: 'settlement' },
        { year: '2600 BCE', label: 'Harappan Civilisation begins', type: 'civilization' },
        { year: '1700 BCE', label: 'Harappan Civilisation declines; Vedic Age begins', type: 'transition' },
        { year: '600 BCE', label: 'Pre-Mauryan Era — rise of Mahajanapadas', type: 'political' },
        { year: '326 BCE', label: 'Alexander the Great invades India', type: 'invasion' },
        { year: '321 BCE', label: 'Chandragupta Maurya founds the Mauryan Empire', type: 'empire' }
      ]
    },
    quizQuestions: [
      {
        id: 'G7T2U6L2Q1',
        question: 'What was significant about Mehrgarh?',
        options: ['It was the capital of the Mauryan Empire', 'It was one of the earliest farming settlements in South Asia, dating to 7000 BCE', 'It was the site of Alexander the Great\'s final battle', 'It was where the Vedas were first written'],
        correctAnswer: 1,
        explanation: 'Mehrgarh, dating back to around 7000 BCE, is one of the earliest known farming settlements in South Asia, providing evidence of the transition from nomadic life to settled agriculture.'
      },
      {
        id: 'G7T2U6L2Q2',
        question: 'Which Harappan city was known for its baked bricks, street planning, and advanced drainage?',
        options: ['Dholavira', 'Mehrgarh', 'Mohenjo-Daro', 'Pataliputra'],
        correctAnswer: 2,
        explanation: 'Mohenjo-Daro was remarkable for its urban planning, featuring baked bricks, a well-organised street grid, and an advanced drainage system.'
      },
      {
        id: 'G7T2U6L2Q3',
        question: 'What happened when Alexander the Great\'s army reached the Beas River?',
        options: ['They conquered the Nanda Empire', 'They discovered the Vedas', 'The soldiers mutinied and refused to advance further', 'They founded a new city'],
        correctAnswer: 2,
        explanation: 'When Alexander\'s army reached the Beas River, his exhausted soldiers refused to advance further into India, and the army mutinied, forcing Alexander to turn back.'
      },
      {
        id: 'G7T2U6L2Q4',
        question: 'Which of the following is NOT one of the four Vedas?',
        options: ['Rigveda', 'Samaveda', 'Arthashastra', 'Atharvaveda'],
        correctAnswer: 2,
        explanation: 'The four Vedas are the Rigveda, Samaveda, Yajurveda, and Atharvaveda. The Arthashastra is a treatise on statecraft written by Kautilya, not a Veda.'
      },
      {
        id: 'G7T2U6L2Q5',
        question: 'Why is the Harappan writing system significant?',
        options: ['It was the first alphabet ever created', 'It was written on paper', 'It remains undeciphered, making it one of the great mysteries of ancient history', 'It was translated by Alexander the Great'],
        correctAnswer: 2,
        explanation: 'Despite decades of study, the Harappan writing system remains undeciphered, making it one of the great mysteries of ancient history and limiting our understanding of this civilisation.'
      }
    ],
    interactiveStrategies: [
      {
        strategy: 'Archaeological Dig Simulation',
        description: 'Students simulate an archaeological excavation by analysing descriptions of Harappan artefacts and making inferences about the civilisation.',
        duration: 20,
        instructions: 'Divide students into small groups of 4-5. Each group receives a set of "artefact cards" describing items found at Harappan sites (baked bricks, drainage pipes, standardised weights, seals with undeciphered script, beads). For each artefact, students must: (1) Describe what the artefact is, (2) Infer what it tells us about Harappan society, (3) Write one question they still have. Groups present their findings to the class, and the teacher helps connect their inferences to the actual archaeological evidence.'
      },
      {
        strategy: 'Timeline Construction',
        description: 'Students construct a visual timeline of ancient South Asian civilisations using the key dates from the lesson.',
        duration: 15,
        instructions: 'Provide each student with a blank timeline strip. Using the reading content, students place the following events in order: Mehrgarh (7000 BCE), Harappan Civilisation (2600-1700 BCE), Vedic Age (1700-600 BCE), Rise of Mahajanapadas (600 BCE), Alexander\'s Invasion (326 BCE). For each event, students write a 1-2 sentence description and draw a simple symbol or icon. Students then compare their timelines with a partner and discuss which event they think had the greatest lasting impact and why.'
      }
    ]
  },

  // ============================================================
  // LESSON 3: Ancient India — Mauryan to Gupta Empires
  // ============================================================
  {
    lessonId: 'G7_T2_Unit 6_l3',
    keyVocabulary: ['empire', 'pillar', 'monument', 'edict', 'dynasty'],
    reading1Title: 'The Mauryan Empire',
    reading1Content: `The Mauryan Empire (321-184 BCE) was one of the largest and most powerful empires in ancient Indian history. It was founded by Chandragupta Maurya, who overthrew the Nanda Dynasty with the guidance of his brilliant advisor Kautilya, also known as Chanakya. Kautilya was the author of the Arthashastra, an ancient treatise on statecraft, economics, and military strategy that remains one of the most important political texts in world history. The Arthashastra covers topics including governance, law, diplomacy, warfare, and espionage, and it provided Chandragupta with a comprehensive blueprint for building and maintaining an empire.

Chandragupta Maurya established his capital at Pataliputra (modern-day Patna) and built a vast empire that stretched across much of the Indian subcontinent. He even successfully fought against the forces left behind by Alexander the Great in the northwest. According to some accounts, Chandragupta later renounced his throne and became a Jain monk, spending his final years in meditation and fasting.

The most famous Mauryan ruler, however, was Ashoka the Great, who reigned from approximately 268 to 232 BCE. Early in his reign, Ashoka was known as a ruthless and ambitious conqueror. In approximately 261 BCE, he waged a devastating war against the state of Kalinga (modern-day Odisha). The Kalinga War was extraordinarily bloody — according to Ashoka's own inscriptions, over 100,000 people were killed and many more were displaced.

The horror of this slaughter transformed Ashoka. He embraced Buddhism and the principle of non-violence (ahimsa), becoming one of history's most remarkable examples of a ruler who changed his ways after witnessing the consequences of war. Ashoka erected stone pillars across his empire, carved with edicts promoting moral behaviour, religious tolerance, and the welfare of his subjects. These Ashoka pillars and stupas are among the most important monuments from ancient India. The Ashoka Chakra, a wheel with 24 spokes that appears on several of these pillars, is now featured on India's national flag as a symbol of the eternal law of dharma.

After Ashoka's death, the Mauryan Empire gradually declined. During the Post-Mauryan Period, local landlords and regional powers claimed authority as central control weakened. The last Mauryan ruler was assassinated around 184 BCE, bringing the dynasty to an end. The legacy of the Mauryan Empire, particularly Ashoka's emphasis on ethical governance, continues to influence Indian political thought today, just as the UAE's leadership emphasises tolerance and welfare for all residents.`,
    reading2Title: 'The Gupta Empire and Later Dynasties',
    reading2Content: `The Gupta Empire (320-550 CE) is widely regarded as India's "Golden Age." Founded by Chandragupta I, the empire reached its height under Chandragupta II (also called Vikramaditya). During this period, India achieved extraordinary advances in science, mathematics, astronomy, literature, and art that would influence the world for centuries.

One of the most significant contributions of the Gupta period was in mathematics. Indian scholars developed the concept of zero as a number and refined the decimal system. These innovations, which later spread to the Islamic world and then to Europe, revolutionised mathematics globally. The mathematician Aryabhata, who lived during the Gupta period, calculated the value of pi to four decimal places and proposed that the Earth rotates on its axis.

In astronomy, Gupta-era scholars made accurate calculations of solar and lunar eclipses and proposed that the Earth is spherical. In literature, the Gupta court was home to the great poet and playwright Kalidasa, whose works such as "Shakuntala" are considered masterpieces of Sanskrit literature. In art, the Gupta period saw the creation of some of the finest Buddhist and Hindu sculptures and cave paintings, including the famous Ajanta cave paintings.

As the Gupta Empire declined, local landlords claimed power and autonomy, leading to political fragmentation. Several important regional dynasties emerged in the following centuries. The Chandella Dynasty (950-1050 CE) is known for building large stone structures, most famously the temples of Khajuraho. These temples, now a UNESCO World Heritage Site, are celebrated for their intricate carvings and represent a high point of medieval Indian architecture and art.

The Vijayanagara Empire (1346-1646 CE) was a powerful South Indian empire with its capital at Hampi. Named after its capital city, which means "City of Victory," the Vijayanagara Empire was known for its magnificent temple architecture, efficient administration, and flourishing trade networks that connected India to distant markets. The empire's kings patronised the arts and supported a vibrant cultural life. However, the Vijayanagara Empire was eventually defeated by a coalition of Deccan Sultanates at the Battle of Talikota in 1565, though it lingered in diminished form until 1646. The ruins of Hampi are now a UNESCO World Heritage Site, attracting visitors from around the world, much like the heritage sites in Al Ain that preserve the UAE's history.`,
    reading1Time: 8,
    reading2Time: 8,
    kwlExplanation: KWL_EXPLANATION,
    discussionQuestions: [
      'How did the Kalinga War transform Ashoka, and what were the consequences of his transformation?',
      'Why is the Gupta period called India\'s "Golden Age"? What made it so remarkable?',
      'What was the significance of the concept of zero and the decimal system developed during the Gupta period?',
      'How did the decline of central empires lead to the rise of regional dynasties like the Chandellas and Vijayanagara?',
      'Compare Ashoka\'s edicts on moral governance with modern principles of good leadership. What similarities do you see?'
    ],
    keyFacts: [
      'The Mauryan Empire was founded by Chandragupta Maurya in 321 BCE with guidance from his advisor Kautilya.',
      'Kautilya wrote the Arthashastra, an ancient treatise on statecraft, economics, and military strategy.',
      'Ashoka the Great embraced Buddhism and non-violence after the brutal Kalinga War (~261 BCE).',
      'Ashoka erected stone pillars with edicts promoting moral behaviour, religious tolerance, and welfare.',
      'The Ashoka Chakra (24-spoked wheel) is now featured on India\'s national flag.',
      'The Gupta Empire (320-550 CE) is considered India\'s "Golden Age" for its achievements in science, mathematics, and art.',
      'Indian scholars during the Gupta period developed the concept of zero and the decimal system.',
      'The Chandella Dynasty built the temples of Khajuraho, now a UNESCO World Heritage Site.',
      'The Vijayanagara Empire (1346-1646 CE) was a powerful South Indian empire with its capital at Hampi.',
      'The mathematician Aryabhata calculated the value of pi and proposed that the Earth rotates on its axis.'
    ],
    visualType: 'timeline',
    visualData: {
      title: 'Empires and Dynasties of South Asia',
      events: [
        { year: '321 BCE', label: 'Chandragupta Maurya founds the Mauryan Empire', type: 'empire' },
        { year: '~261 BCE', label: 'Ashoka embraces Buddhism after the Kalinga War', type: 'turning_point' },
        { year: '184 BCE', label: 'Mauryan Empire ends', type: 'decline' },
        { year: '320 CE', label: 'Gupta Empire begins — India\'s Golden Age', type: 'empire' },
        { year: '550 CE', label: 'Gupta Empire declines', type: 'decline' },
        { year: '950-1050 CE', label: 'Chandella Dynasty — Khajuraho temples', type: 'dynasty' },
        { year: '1346-1646 CE', label: 'Vijayanagara Empire — Hampi', type: 'empire' }
      ]
    },
    quizQuestions: [
      {
        id: 'G7T2U6L3Q1',
        question: 'Who was the author of the Arthashastra?',
        options: ['Ashoka the Great', 'Chandragupta Maurya', 'Kautilya (Chanakya)', 'Aryabhata'],
        correctAnswer: 2,
        explanation: 'Kautilya, also known as Chanakya, was Chandragupta Maurya\'s advisor and the author of the Arthashastra, an ancient treatise on statecraft, economics, and military strategy.'
      },
      {
        id: 'G7T2U6L3Q2',
        question: 'What event caused Ashoka to embrace Buddhism and non-violence?',
        options: ['The founding of the Mauryan Empire', 'A pilgrimage to Nepal', 'The Kalinga War', 'The death of his father'],
        correctAnswer: 2,
        explanation: 'The devastating Kalinga War, in which over 100,000 people were killed, transformed Ashoka. He embraced Buddhism and the principle of non-violence after witnessing the horrors of war.'
      },
      {
        id: 'G7T2U6L3Q3',
        question: 'Which mathematical concept was developed during the Gupta period?',
        options: ['Algebra', 'The concept of zero and the decimal system', 'Calculus', 'Geometry'],
        correctAnswer: 1,
        explanation: 'Indian scholars during the Gupta period developed the concept of zero as a number and refined the decimal system, innovations that revolutionised mathematics globally.'
      },
      {
        id: 'G7T2U6L3Q4',
        question: 'What is the Ashoka Chakra?',
        options: ['A type of weapon used in the Mauryan army', 'A 24-spoked wheel on Ashoka\'s pillars, now on India\'s national flag', 'A Buddhist temple built by Ashoka', 'A trade route established during the Mauryan period'],
        correctAnswer: 1,
        explanation: 'The Ashoka Chakra is a wheel with 24 spokes that appears on several of Ashoka\'s pillars. It symbolises the eternal law of dharma and is now featured on India\'s national flag.'
      },
      {
        id: 'G7T2U6L3Q5',
        question: 'Which dynasty built the temples of Khajuraho?',
        options: ['The Mauryan Dynasty', 'The Gupta Dynasty', 'The Chandella Dynasty', 'The Vijayanagara Dynasty'],
        correctAnswer: 2,
        explanation: 'The Chandella Dynasty (950-1050 CE) built the temples of Khajuraho, now a UNESCO World Heritage Site, celebrated for their intricate carvings and medieval Indian architecture.'
      }
    ],
    interactiveStrategies: [
      {
        strategy: 'Edict Writing Activity',
        description: 'Students write their own edicts in the style of Ashoka, focusing on moral principles and good governance.',
        duration: 20,
        instructions: 'After learning about Ashoka\'s edicts, students imagine they are rulers of a modern country. They must write 4-5 edicts (short statements carved on "pillars") that promote: (1) Moral behaviour, (2) Religious tolerance, (3) Welfare of people, (4) Environmental protection. Each edict should be 2-3 sentences. Students then share their edicts with the class and discuss which ones would be most effective in modern society and why. Connect to the UAE\'s principles of tolerance and welfare for all residents.'
      },
      {
        strategy: 'Golden Age Gallery Walk',
        description: 'Students create posters about different achievements of the Gupta period and participate in a gallery walk to learn from each other.',
        duration: 25,
        instructions: 'Divide the class into 5 groups. Each group is assigned one area of Gupta achievement: (1) Mathematics (zero, decimal system), (2) Astronomy (Aryabhata\'s discoveries), (3) Literature (Kalidasa\'s works), (4) Art and Architecture (Ajanta caves, sculptures), (5) Science and Medicine. Each group creates a poster with: key facts, an illustration, and a connection to how this achievement affects us today. Posters are displayed around the room. Students do a gallery walk, taking notes on each poster. After the walk, students write a paragraph explaining which achievement they think was most important and why.'
      }
    ]
  },

  // ============================================================
  // LESSON 4: Arrival of Islamic Civilization
  // ============================================================
  {
    lessonId: 'G7_T2_Unit 6_l4',
    keyVocabulary: ['Sultanate', 'complex', 'Islamic architecture', 'sandstone', 'marble'],
    reading1Title: 'The Delhi Sultanate',
    reading1Content: `The Delhi Sultanate was established in 1206 CE and marked the beginning of Islamic political rule in much of the Indian subcontinent. This period brought significant changes to South Asian politics, culture, and architecture that would shape the region for centuries.

Qutb-ud-din Aibak, a general from Afghanistan, came to India and established the Sultanate after the decline of the Ghurid Empire. He was originally a slave who rose through the ranks to become a powerful military commander. Aibak began the construction of the Qutb Minar, one of the most iconic monuments of Islamic architecture in India.

Iltutmish, who ruled from 1211 to 1236 CE, succeeded Aibak and consolidated the Sultanate. He expanded its territory, reformed the administration, and completed the construction of the Qutb Minar. Iltutmish also established a system of governance that would be followed by subsequent rulers of the Sultanate.

The Qutb Minar is a remarkable achievement of Islamic architecture. Standing at 73 metres tall, it is one of the tallest brick minarets in the world. The minaret was built to mark the arrival of Islamic rule in India and to serve as a place from which the call to prayer could be heard. Its intricate carvings and inscriptions from the Quran make it both a religious and artistic monument. The Qutb complex also contains the first mosque built in India after the Islamic conquest, the Quwwat-ul-Islam Mosque.

Within the Qutb complex stands Ashoka's Iron Pillar, dating from the 4th century CE. This pillar is remarkable for its rust-resistant composition, which has puzzled scientists for centuries. Despite being over 1,600 years old and exposed to the elements, the pillar shows virtually no signs of corrosion. This demonstrates the advanced state of ancient Indian metallurgy, which was far ahead of its time.

An important aspect of this period was the parallel development of different cultures. Islamic civilisation prospered in the North under the Delhi Sultanate, while the Vijayanagara Empire thrived in the South. This coexistence of different political and cultural systems created a rich and diverse landscape. The architectural innovations of the Sultanate period, including the use of domes, arches, and minarets, introduced new elements to South Asian architecture that would reach their peak during the Mughal period. This blending of architectural traditions is similar to how the UAE blends traditional Islamic architecture with modern design in buildings like the Sheikh Zayed Grand Mosque.`,
    reading2Title: 'The Mughal Empire',
    reading2Content: `The Mughal Empire was one of the most powerful and culturally rich empires in South Asian history. It originated from Central Asia, with its founders tracing their lineage to both Genghis Khan and Timur (Tamerlane), two of history's most famous conquerors.

Babur founded the Mughal Empire in 1526 after defeating the Sultan of Delhi at the First Battle of Panipat. Babur was a skilled military commander and a cultured ruler who wrote poetry and kept detailed diaries. His son Humayun succeeded him but was temporarily driven out of India by the Afghan ruler Sher Shah Suri. Humayun spent years in exile before eventually reclaiming the throne with Persian support.

Akbar, who became emperor at the age of 13, grew into one of the greatest Mughal rulers. He is known for his religious tolerance and administrative reforms. Akbar abolished the tax on non-Muslim pilgrims, promoted interfaith dialogue, and created a diverse court that included Hindu, Muslim, and Christian advisors. His administrative system, including the land revenue system, became the foundation for Mughal governance for generations.

Shah Jahan, another great Mughal emperor, is best known for his architectural achievements. He built the Red Fort in Delhi, a massive palace complex with high defensive walls and towers made of red sandstone. The Red Fort symbolised power and strength, serving as both a military fortress and the seat of Mughal government. Today it is a UNESCO World Heritage Site and the site of India's Independence Day celebrations.

Shah Jahan also built the Taj Mahal, arguably the most famous building in the world. The Taj Mahal was constructed as a mausoleum for his beloved wife Mumtaz Mahal, who died during childbirth. The Taj Mahal is made of smooth white marble and features gardens and reflective pools that create a sense of calm and tranquillity. It represents the Mughal ideal of paradise on earth.

Islamic architecture uses symbolism through building materials. Red sandstone represents power and strength, while white marble represents peace and purity. This symbolism is evident in many Mughal buildings, where the two materials are often used together. The use of red sandstone and white marble in Mughal architecture parallels the use of similar symbolic materials in Islamic architecture across the world, including in the UAE, where traditional building materials carried cultural and practical significance.`,
    reading1Time: 8,
    reading2Time: 8,
    kwlExplanation: KWL_EXPLANATION,
    discussionQuestions: [
      'What does the Qutb Minar reveal about the arrival of Islamic civilisation in South Asia?',
      'How did the parallel development of the Delhi Sultanate and the Vijayanagara Empire contribute to South Asian diversity?',
      'Why is Ashoka\'s Iron Pillar considered remarkable, and what does it tell us about ancient Indian technology?',
      'How did Akbar\'s religious tolerance affect the Mughal Empire?',
      'What symbolism do red sandstone and white marble carry in Islamic architecture, and how is this seen in the Taj Mahal?'
    ],
    keyFacts: [
      'The Delhi Sultanate was established in 1206 CE by Qutb-ud-din Aibak, who came from Afghanistan.',
      'Iltutmish ruled from 1211-1236 CE and consolidated the Sultanate.',
      'The Qutb Minar is a 73-metre tall minaret — one of the tallest brick minarets in the world.',
      'Ashoka\'s Iron Pillar in the Qutb complex is over 1,600 years old and virtually rust-free, demonstrating advanced ancient Indian metallurgy.',
      'Islamic civilisation prospered in the North while the Vijayanagara Empire thrived in the South — a period of parallel cultural development.',
      'Babur founded the Mughal Empire in 1526 after the First Battle of Panipat.',
      'Akbar became emperor at age 13 and was known for religious tolerance and administrative reforms.',
      'Shah Jahan built the Red Fort (red sandstone, symbolising power) and the Taj Mahal (white marble, symbolising peace).',
      'The Taj Mahal was built as a mausoleum for Mumtaz Mahal and represents the Mughal ideal of paradise on earth.',
      'In Islamic architecture, red sandstone symbolises power and strength, while white marble symbolises peace and purity.'
    ],
    visualType: 'venn',
    visualData: {
      title: 'Delhi Sultanate vs Mughal Empire',
      leftSet: {
        label: 'Delhi Sultanate (1206-1526 CE)',
        items: [
          'Founded by Qutb-ud-din Aibak from Afghanistan',
          'Qutb Minar — 73m brick minaret',
          'Consolidated by Iltutmish',
          'Introduced domes, arches, minarets to Indian architecture',
          'Parallel development with Vijayanagara in the South'
        ]
      },
      rightSet: {
        label: 'Mughal Empire (1526-1857 CE)',
        items: [
          'Founded by Babur from Central Asia',
          'Taj Mahal — white marble mausoleum',
          'Akbar\'s religious tolerance and reforms',
          'Red Fort — symbol of power',
          'Peak of Islamic architecture in India'
        ]
      },
      intersection: {
        label: 'Shared Features',
        items: [
          'Both were Islamic dynasties ruling from Delhi',
          'Both built monumental architecture',
          'Both used red sandstone and white marble',
          'Both influenced South Asian culture and art',
          'Both contributed to a rich Indo-Islamic heritage'
        ]
      }
    },
    quizQuestions: [
      {
        id: 'G7T2U6L4Q1',
        question: 'Who established the Delhi Sultanate in 1206 CE?',
        options: ['Babur', 'Iltutmish', 'Qutb-ud-din Aibak', 'Akbar'],
        correctAnswer: 2,
        explanation: 'Qutb-ud-din Aibak, a general from Afghanistan, established the Delhi Sultanate in 1206 CE after the decline of the Ghurid Empire.'
      },
      {
        id: 'G7T2U6L4Q2',
        question: 'How tall is the Qutb Minar?',
        options: ['50 metres', '73 metres', '100 metres', '120 metres'],
        correctAnswer: 1,
        explanation: 'The Qutb Minar stands at 73 metres tall, making it one of the tallest brick minarets in the world.'
      },
      {
        id: 'G7T2U6L4Q3',
        question: 'Why is the Taj Mahal considered a symbol of tranquillity?',
        options: ['It is surrounded by military fortifications', 'It is made of smooth white marble with gardens and reflective pools', 'It was built with red sandstone', 'It is the tallest building in India'],
        correctAnswer: 1,
        explanation: 'The Taj Mahal is made of smooth white marble and features gardens and reflective pools that create a sense of calm and tranquillity, representing the Mughal ideal of paradise on earth.'
      },
      {
        id: 'G7T2U6L4Q4',
        question: 'What does red sandstone symbolise in Islamic architecture?',
        options: ['Peace and purity', 'Power and strength', 'Knowledge and wisdom', 'Nature and growth'],
        correctAnswer: 1,
        explanation: 'In Islamic architecture, red sandstone represents power and strength, while white marble represents peace and purity.'
      },
      {
        id: 'G7T2U6L4Q5',
        question: 'What is remarkable about Ashoka\'s Iron Pillar?',
        options: ['It is the tallest structure in the Qutb complex', 'It was built by the Mughals', 'It is over 1,600 years old and shows virtually no signs of rust', 'It contains writings in Arabic'],
        correctAnswer: 2,
        explanation: 'Ashoka\'s Iron Pillar is remarkable for its rust-resistant composition. Despite being over 1,600 years old and exposed to the elements, it shows virtually no signs of corrosion, demonstrating advanced ancient Indian metallurgy.'
      }
    ],
    interactiveStrategies: [
      {
        strategy: 'Venn Diagram Comparison',
        description: 'Students complete a Venn diagram comparing the Delhi Sultanate and the Mughal Empire using information from the readings.',
        duration: 15,
        instructions: 'Draw a large Venn diagram on paper with "Delhi Sultanate" on the left and "Mughal Empire" on the right. Using information from both readings, students identify: (1) Unique features of the Delhi Sultanate, (2) Unique features of the Mughal Empire, (3) Shared features of both. Students should include at least 3 items in each section. After completing the diagram, students write a summary paragraph explaining which empire they think had a greater lasting impact on South Asia and why. Compare the parallel development of these two Islamic empires with the way different emirates in the UAE maintain their own identity while sharing common cultural elements.'
      },
      {
        strategy: 'Architecture Symbolism Poster',
        description: 'Students create a poster explaining the symbolism of red sandstone and white marble in Islamic architecture using examples from the lesson.',
        duration: 20,
        instructions: 'Students create a visual poster divided into two sections: "Red Sandstone — Power and Strength" and "White Marble — Peace and Purity." For each section, students include: (1) A description of the symbolism, (2) Examples from the readings (Red Fort for sandstone, Taj Mahal for marble), (3) A drawing or description of how the material is used. At the bottom, students write a reflection on how architecture can communicate messages about a ruler\'s values and power. Students can also research and include a modern example of symbolic architecture, such as the Sheikh Zayed Grand Mosque in the UAE.'
      }
    ]
  },

  // ============================================================
  // LESSON 5: Origins of Science in South Asia
  // ============================================================
  {
    lessonId: 'G7_T2_Unit 6_l5',
    keyVocabulary: ['Indian arithmetic', 'circumference', 'navigation', 'observatory', 'innovation'],
    reading1Title: 'Scientific Achievements of South Asia',
    reading1Content: `South Asia has a long and remarkable history of scientific achievement that has profoundly influenced the development of knowledge worldwide. One of the most fascinating examples of cross-cultural knowledge exchange involves Ibn Sina (Avicenna), one of the greatest scholars of the Islamic Golden Age. Ibn Sina was tutored by an Indian teacher, demonstrating that the flow of knowledge between South Asia and the Islamic world was a two-way street. This exchange of ideas across cultures enriched both traditions and ultimately benefited all of humanity.

Indian arithmetic represents one of the most important scientific contributions in world history. The concept of zero as a number and the decimal place-value system revolutionised mathematics. Before these innovations, calculations were extremely difficult, requiring complex systems like Roman numerals or abacuses. The Indian system, with its ten symbols (0-9) and place-value notation, made arithmetic accessible and efficient. This system spread through the Islamic world — where it became known as the "Hindu-Arabic numeral system" — and eventually reached Europe, where it replaced Roman numerals and made modern mathematics possible.

Al-Biruni (973-1048 CE) was a Persian scholar who spent years in India studying its science, mathematics, and culture. He made extraordinary contributions to multiple fields. His most famous achievement was measuring the Earth's circumference with remarkable accuracy — his calculation was within 1 percent of the modern value. This was an extraordinary feat for the 11th century, achieved using trigonometric methods and careful observation.

Al-Biruni also studied tides and their connection to the moon, recognising that the gravitational pull of the moon caused the regular rising and falling of sea levels. He observed and described solar and lunar eclipses with great precision, contributing to our understanding of astronomical phenomena. His work "Kitab al-Hind" (Book of India) is one of the most comprehensive accounts of Indian science, religion, and society written by a foreign observer.

The Jantar Mantar observatory in Jaipur, built in the 18th century by Maharaja Jai Singh II, represents the continuation of India's astronomical tradition. This remarkable complex contains massive architectural astronomical instruments, including the world's largest stone sundial. These instruments could measure time, predict eclipses, track stars, and determine the declination of celestial bodies. The observatory demonstrates that India's tradition of scientific observation and innovation continued for centuries, much as the UAE today invests in space exploration and scientific research through initiatives like the Mars Mission.`,
    reading2Title: 'Public Health, Navigation and Innovation',
    reading2Content: `South Asian civilisations made significant contributions to public health, navigation, and innovation that influenced the broader world. The Shalimar Gardens in Lahore, built during the Mughal period, are a stunning example of how public health awareness and cleanliness were valued in Islamic South Asia. The gardens included elaborate water channels, fountains, and pools that served both aesthetic and practical purposes. The flowing water provided natural cooling in the hot climate and promoted hygiene and cleanliness. The design of these gardens reflected the Islamic emphasis on cleanliness as part of religious practice and the belief that beautiful, well-maintained public spaces contributed to the well-being of the community.

The invention of paper by the Chinese was another innovation that transformed the world. Although paper was invented in China during the Han Dynasty, it eventually spread to the Islamic world through trade along the Silk Road. Muslim scholars and craftsmen improved paper-making techniques and established paper mills across the Islamic world, from Samarkand to Baghdad to Damascus. From there, paper reached Europe, where it revolutionised communication, record-keeping, and the spread of knowledge. Without paper, the preservation and transmission of scientific, literary, and religious texts would have been far more difficult, and the progress of civilisation would have been much slower.

Navigation techniques developed in the Indian Ocean represent another crucial area of innovation. Sailors in the Indian Ocean developed sophisticated methods for long-distance sea travel, using the predictable patterns of monsoon winds to plan their voyages. The southwest monsoon (June to September) carried ships from East Africa and the Arabian Peninsula to India, while the northeast monsoon (November to March) carried them back. This predictable cycle allowed merchants to plan trading voyages with remarkable accuracy, creating one of the world's oldest and most extensive maritime trade networks.

Al-Biruni's contributions to understanding the connection between tides and the moon were particularly significant. By carefully observing tidal patterns and correlating them with lunar cycles, he helped establish the scientific basis for understanding this phenomenon. This knowledge was crucial for navigation, fishing, and coastal planning.

South Asian science and innovation influenced the broader world primarily through trade routes and cultural exchange. The same trade networks that carried spices, textiles, and precious stones also carried ideas, knowledge, and technological innovations. The UAE's modern commitment to scientific advancement, including its space programme, renewable energy initiatives, and research institutions, parallels these ancient traditions of knowledge exchange. Just as ancient scholars travelled between India, Persia, and the Arab world to share knowledge, the UAE today serves as a global hub for scientific collaboration and innovation.`,
    reading1Time: 8,
    reading2Time: 8,
    kwlExplanation: KWL_EXPLANATION,
    discussionQuestions: [
      'How did the concept of zero and the decimal system change mathematics worldwide?',
      'Why was Al-Biruni\'s measurement of the Earth\'s circumference so remarkable for his time?',
      'How did the Shalimar Gardens reflect public health awareness in Islamic South Asia?',
      'Why were monsoon wind patterns so important for Indian Ocean navigation?',
      'How does the UAE\'s modern investment in science compare to ancient South Asian traditions of knowledge exchange?'
    ],
    keyFacts: [
      'Ibn Sina (Avicenna) was tutored by an Indian teacher, showing cross-cultural knowledge exchange.',
      'Indian arithmetic — the concept of zero and the decimal system — revolutionised mathematics worldwide.',
      'Al-Biruni (973-1048 CE) measured the Earth\'s circumference to within 1% of the modern value.',
      'Al-Biruni studied tides and their connection to the moon, and observed and described eclipses.',
      'The Jantar Mantar observatory in Jaipur contains the world\'s largest stone sundial and other astronomical instruments.',
      'The Shalimar Gardens in Lahore demonstrated public health awareness and cleanliness in Islamic South Asia.',
      'Chinese paper-making spread through the Islamic world and then to Europe, revolutionising communication and record-keeping.',
      'Indian Ocean sailors used predictable monsoon wind patterns for navigation.',
      'The southwest monsoon (June-September) carried ships from East Africa and Arabia to India.',
      'Trade networks carried not just goods but also ideas, knowledge, and technological innovations across civilisations.'
    ],
    visualType: 'diagram',
    visualData: {
      title: 'Scientific Achievements of South Asia',
      centreNode: 'South Asian Scientific Innovation',
      branches: [
        {
          label: 'Indian Arithmetic',
          items: ['Concept of zero', 'Decimal place-value system', 'Hindu-Arabic numerals', 'Revolutionised mathematics globally']
        },
        {
          label: 'Al-Biruni\'s Measurements',
          items: ['Earth\'s circumference (within 1% accuracy)', 'Tides and moon connection', 'Eclipse observations', 'Kitab al-Hind']
        },
        {
          label: 'Observatories',
          items: ['Jantar Mantar, Jaipur', 'World\'s largest stone sundial', 'Astronomical instruments', '18th century continuation of tradition']
        },
        {
          label: 'Navigation',
          items: ['Monsoon wind patterns', 'Predictable sailing schedules', 'Indian Ocean trade networks', 'Connection between civilisations']
        },
        {
          label: 'Paper & Communication',
          items: ['Chinese invention', 'Spread through Islamic world', 'Improved by Muslim craftsmen', 'Revolutionised record-keeping']
        }
      ]
    },
    quizQuestions: [
      {
        id: 'G7T2U6L5Q1',
        question: 'What was Al-Biruni\'s most famous scientific achievement?',
        options: ['Inventing the telescope', 'Measuring the Earth\'s circumference to within 1% of the modern value', 'Discovering paper-making', 'Building the Taj Mahal'],
        correctAnswer: 1,
        explanation: 'Al-Biruni measured the Earth\'s circumference with remarkable accuracy — his calculation was within 1% of the modern value, an extraordinary feat for the 11th century.'
      },
      {
        id: 'G7T2U6L5Q2',
        question: 'How did Indian arithmetic change mathematics worldwide?',
        options: ['It introduced Roman numerals', 'It developed the concept of zero and the decimal system', 'It created the abacus', 'It invented geometry'],
        correctAnswer: 1,
        explanation: 'The concept of zero as a number and the decimal place-value system revolutionised mathematics, making calculations accessible and efficient, and eventually replacing Roman numerals in Europe.'
      },
      {
        id: 'G7T2U6L5Q3',
        question: 'What was the significance of the Shalimar Gardens in Lahore?',
        options: ['They were only decorative gardens', 'They demonstrated public health awareness and cleanliness with water channels for cooling and hygiene', 'They were used exclusively for religious ceremonies', 'They were built by Ashoka the Great'],
        correctAnswer: 1,
        explanation: 'The Shalimar Gardens demonstrated public health awareness and cleanliness in Islamic South Asia, with water channels that provided natural cooling and promoted hygiene.'
      },
      {
        id: 'G7T2U6L5Q4',
        question: 'How did sailors navigate the Indian Ocean using monsoon winds?',
        options: ['They used compasses only', 'The southwest monsoon carried ships from East Africa and Arabia to India, and the northeast monsoon carried them back', 'They followed the stars exclusively', 'They used steam-powered ships'],
        correctAnswer: 1,
        explanation: 'Sailors used the predictable monsoon wind patterns: the southwest monsoon (June-September) carried ships from East Africa and Arabia to India, while the northeast monsoon (November-March) carried them back.'
      },
      {
        id: 'G7T2U6L5Q5',
        question: 'What is the Jantar Mantar observatory known for?',
        options: ['Being the oldest university in India', 'Containing the world\'s largest stone sundial and architectural astronomical instruments', 'Being the birthplace of Al-Biruni', 'Housing the original Vedas'],
        correctAnswer: 1,
        explanation: 'The Jantar Mantar observatory in Jaipur contains massive architectural astronomical instruments, including the world\'s largest stone sundial, and represents the continuation of India\'s astronomical tradition.'
      }
    ],
    interactiveStrategies: [
      {
        strategy: 'Knowledge Exchange Map',
        description: 'Students create a visual map showing how scientific ideas travelled between South Asia, the Islamic world, and Europe.',
        duration: 20,
        instructions: 'Students draw a simple map showing South Asia, the Middle East, and Europe. Using arrows, they trace the paths of the following ideas/inventions: (1) Zero and decimal system (India → Islamic world → Europe), (2) Paper (China → Islamic world → Europe), (3) Al-Biruni\'s astronomical knowledge (Persia/India → Islamic world), (4) Navigation techniques (Indian Ocean → broader world). For each arrow, students write a brief note explaining what knowledge was exchanged. At the end, students discuss: How does this compare to the UAE\'s modern role as a hub for knowledge and innovation exchange?'
      },
      {
        strategy: 'Scientific Achievement Jigsaw',
        description: 'Students become experts on one area of South Asian science and teach their peers using the jigsaw method.',
        duration: 25,
        instructions: 'Divide the class into 5 expert groups. Each group studies one topic: (1) Indian Arithmetic (zero, decimals), (2) Al-Biruni\'s Measurements, (3) Observatories (Jantar Mantar), (4) Navigation (monsoon winds), (5) Public Health & Paper. Each expert group reads the relevant section and prepares a 3-minute presentation. Then, regroup students into mixed groups with one expert from each topic. Each expert teaches their topic to the new group. After all presentations, each student writes a "One-Minute Paper" summarising the most important thing they learned and one question they still have.'
      }
    ]
  },

  // ============================================================
  // LESSON 6: The British in India
  // ============================================================
  {
    lessonId: 'G7_T2_Unit 6_l6',
    keyVocabulary: ['rebellion', 'raj', 'imports', 'world trade', 'partition'],
    reading1Title: 'From Trade to Colonial Rule',
    reading1Content: `The British presence in India began not with conquest but with commerce. The East India Company arrived in the 1600s as a trading organisation, seeking to profit from India's valuable spices, textiles, and other goods. The Company established trading posts along the coast, with Calcutta (now Kolkata) becoming their primary base of operations. Initially, the British were just one of many European trading groups operating in India, alongside the Portuguese, Dutch, and French.

However, the nature of the British presence changed dramatically over time. In 1757, after the Battle of Plassey, formal British occupation began. The East India Company defeated the Nawab of Bengal, partly through bribery and deception, and gained control of one of India's wealthiest provinces. This victory marked the beginning of British territorial expansion in India. Over the following decades, the Company used its military power to conquer or subdue kingdoms across the subcontinent.

The British Raj followed, which means direct British Crown rule over India. After the Indian Rebellion of 1857 (also called the Sepoy Mutiny or the First War of Independence), the British government dissolved the East India Company and took direct control of India. The Raj lasted from 1858 until Indian independence in 1947. Under the Raj, India was transformed economically and socially to serve British interests. Indian raw materials were exported to Britain, and manufactured British goods were sold in India, devastating local industries, particularly the once-thriving textile industry.

The Rajput Princes maintained local authority under British oversight. These local rulers were allowed to keep their titles and some degree of self-governance in exchange for accepting British supremacy. This arrangement allowed the British to control vast territories with relatively few administrators.

The movement for independence grew stronger through the early 20th century. Mahatma Gandhi became the leader of the non-violent independence movement, using civil disobedience, the famous Salt March of 1930, and the principle of satyagraha (truth force) to challenge British rule. Gandhi's philosophy of non-violent resistance inspired movements for civil rights and freedom across the world, including the civil rights movement in the United States. The independence movement gained momentum after World War II, when Britain was weakened and could no longer sustain its colonial empire. The struggle for Indian independence shares parallels with the national journeys of many countries in the Gulf region, including the UAE, which gained its independence in 1971 and formed a federation of emirates.`,
    reading2Title: 'Partition and Independence',
    reading2Content: `The end of British rule in India came with a devastating cost. In 1947, Earl Mountbatten, the last Viceroy of India, oversaw the partition of the subcontinent. India was divided into two independent nations: India, with a Hindu majority, and Pakistan, with a Muslim majority. The decision to partition was driven by political and religious tensions that had been building for decades, with the Muslim League, led by Muhammad Ali Jinnah, demanding a separate nation for Muslims.

The human cost of partition was catastrophic. Approximately 14 million people were relocated — one of the largest mass migrations in human history. Hindus and Sikhs moved from Pakistan to India, while Muslims moved from India to Pakistan. The migration was accompanied by horrific communal violence. Estimates suggest that between 500,000 and 2 million people were killed in the riots and massacres that accompanied partition, and countless more were injured, raped, or lost their homes and livelihoods.

Key leaders shaped the post-independence landscape of South Asia. Jawaharlal Nehru became India's first Prime Minister and led the country for 17 years, establishing India as a secular, democratic republic. Indira Gandhi, his daughter, later served as Prime Minister and was one of the most powerful leaders in Indian history. Muhammad Ali Jinnah became the first Governor-General of Pakistan and is revered in Pakistan as its founding father. Chandrika Kumaratunga later became President of Sri Lanka, one of the few female heads of state in South Asia.

The map of South Asia continued to change after 1947. Bangladesh gained independence from Pakistan in 1971 after a bloody liberation war. The Bengali people of East Pakistan felt marginalised by the government in West Pakistan, and after a brutal military crackdown, they fought for and achieved independence with support from India. Sri Lanka became a republic in 1972, severing its remaining ties to the British Crown and adopting a new constitution.

The lasting effects of partition continue to shape South Asia today. Ongoing tensions between India and Pakistan, particularly over the disputed region of Kashmir, have led to multiple wars and remain one of the world's most dangerous geopolitical flashpoints. Border disputes, nuclear arms races, and the human cost of division continue to affect millions of people. The experience of partition serves as a powerful reminder of the consequences of dividing communities along religious lines. While South Asian nations grapple with these legacies, the UAE provides a contrasting model of unity in diversity, where people of many faiths and nationalities live together peacefully under a single federation.`,
    reading1Time: 8,
    reading2Time: 8,
    kwlExplanation: KWL_EXPLANATION,
    discussionQuestions: [
      'How did the East India Company transform from a trading organisation into a colonial power?',
      'What methods did Gandhi use to challenge British rule, and why was non-violence so effective?',
      'Why was partition such a devastating event, and what were its human costs?',
      'How did the independence of Bangladesh from Pakistan in 1971 reflect ongoing tensions in South Asia?',
      'Compare the post-independence experiences of South Asian countries with the UAE\'s experience of forming a federation in 1971.'
    ],
    keyFacts: [
      'The East India Company arrived in the 1600s as traders, with Calcutta as their base.',
      'Formal British occupation began after the Battle of Plassey in 1757.',
      'The British Raj (1858-1947) was direct British Crown rule over India.',
      'The Indian Rebellion of 1857 led to the end of East India Company rule.',
      'Rajput Princes maintained local authority under British oversight.',
      'Mahatma Gandhi led the non-violent independence movement using civil disobedience, the Salt March, and satyagraha (truth force).',
      'Partition in 1947 by Earl Mountbatten divided India into India (Hindu majority) and Pakistan (Muslim majority).',
      '14 million people were relocated during partition — one of the largest mass migrations in human history.',
      'Jawaharlal Nehru became India\'s first Prime Minister; Muhammad Ali Jinnah was the founder of Pakistan.',
      'Bangladesh gained independence from Pakistan in 1971; Sri Lanka became a republic in 1972.'
    ],
    visualType: 'timeline',
    visualData: {
      title: 'From Trade to Independence: British India',
      events: [
        { year: '1600s', label: 'East India Company arrives as traders', type: 'trade' },
        { year: '1757', label: 'Battle of Plassey — formal occupation begins', type: 'conflict' },
        { year: '1857', label: 'Indian Rebellion — end of Company rule', type: 'rebellion' },
        { year: '1858', label: 'British Raj begins — direct Crown rule', type: 'governance' },
        { year: '1930', label: 'Gandhi\'s Salt March', type: 'independence' },
        { year: '1947', label: 'Partition and Independence', type: 'independence' },
        { year: '1971', label: 'Bangladesh gains independence from Pakistan', type: 'independence' },
        { year: '1972', label: 'Sri Lanka becomes a republic', type: 'governance' }
      ]
    },
    quizQuestions: [
      {
        id: 'G7T2U6L6Q1',
        question: 'What event in 1757 marked the beginning of formal British occupation in India?',
        options: ['The Salt March', 'The Indian Rebellion', 'The Battle of Plassey', 'The founding of the East India Company'],
        correctAnswer: 2,
        explanation: 'In 1757, the Battle of Plassey marked the beginning of formal British occupation, when the East India Company defeated the Nawab of Bengal and gained control of one of India\'s wealthiest provinces.'
      },
      {
        id: 'G7T2U6L6Q2',
        question: 'What does "satyagraha" mean?',
        options: ['Military conquest', 'Truth force', 'Religious pilgrimage', 'Economic boycott'],
        correctAnswer: 1,
        explanation: 'Satyagraha means "truth force" and was Gandhi\'s principle of non-violent resistance, using civil disobedience and moral courage to challenge unjust laws and British colonial rule.'
      },
      {
        id: 'G7T2U6L6Q3',
        question: 'Who oversaw the partition of India in 1947?',
        options: ['Mahatma Gandhi', 'Jawaharlal Nehru', 'Muhammad Ali Jinnah', 'Earl Mountbatten'],
        correctAnswer: 3,
        explanation: 'Earl Mountbatten, the last Viceroy of India, oversaw the partition of the subcontinent in 1947, dividing it into India and Pakistan.'
      },
      {
        id: 'G7T2U6L6Q4',
        question: 'Approximately how many people were relocated during the partition of India?',
        options: ['1 million', '5 million', '8 million', '14 million'],
        correctAnswer: 3,
        explanation: 'Approximately 14 million people were relocated during partition, making it one of the largest mass migrations in human history.'
      },
      {
        id: 'G7T2U6L6Q5',
        question: 'When did Bangladesh gain independence from Pakistan?',
        options: ['1947', '1956', '1965', '1971'],
        correctAnswer: 3,
        explanation: 'Bangladesh gained independence from Pakistan in 1971 after a bloody liberation war, when the Bengali people of East Pakistan fought for and achieved independence with support from India.'
      }
    ],
    interactiveStrategies: [
      {
        strategy: 'Cause and Effect Chain',
        description: 'Students create a cause-and-effect chain showing how British trade led to colonial rule and eventually to independence.',
        duration: 20,
        instructions: 'Provide students with a set of cards, each containing one event: East India Company arrives (1600s), Battle of Plassey (1757), British Raj begins (1858), Indian textile industry destroyed, Gandhi\'s Salt March (1930), World War II weakens Britain, Partition (1947). Students work in pairs to arrange the cards in chronological order and draw arrows showing cause-and-effect relationships between events. For each arrow, students write a brief explanation of how one event led to the next. Pairs then compare their chains with another pair and discuss any differences. Finally, students write a paragraph answering: Was partition inevitable? Why or why not?'
      },
      {
        strategy: 'Perspective Journal',
        description: 'Students write journal entries from the perspectives of different people affected by British rule and partition.',
        duration: 25,
        instructions: 'Students choose one perspective from the following: (1) An Indian textile worker whose livelihood was destroyed by British imports, (2) A Rajput Prince navigating British oversight, (3) A participant in Gandhi\'s Salt March, (4) A family displaced during partition, (5) Jawaharlal Nehru on the eve of independence. Students write a journal entry (8-10 sentences) describing their experiences, feelings, and hopes for the future. Entries should include specific historical details from the readings. Students share their entries in small groups and discuss how different perspectives change our understanding of history. Conclude by reflecting on how the UAE\'s peaceful formation in 1971 contrasts with the violent partition of South Asia.'
      }
    ]
  },

  // ============================================================
  // LESSON 7: Economy and Cities of South Asia
  // ============================================================
  {
    lessonId: 'G7_T2_Unit 6_l7',
    keyVocabulary: ['exports', 'imports', 'trade deficit', 'textiles', 'capital'],
    reading1Title: 'Economies of South Asian Countries',
    reading1Content: `The economies of South Asian countries are diverse but share some common characteristics. Understanding these economies provides insight into the challenges and opportunities facing the region today.

Pakistan's economy is significantly driven by its textile industry. The country's exports total approximately $24.8 billion, with textiles dominating the export portfolio. Pakistan is one of the world's largest producers of cotton, and the textile sector employs millions of workers across the country. However, this heavy reliance on textiles makes Pakistan's economy vulnerable to fluctuations in global demand and competition from other textile-producing nations.

Bangladesh has emerged as one of the world's largest garment exporters. Its exports total approximately $38.2 billion, with an astonishing 91 percent coming from the textile and garment sector. The ready-made garment industry has been the engine of Bangladesh's impressive economic growth over the past two decades, lifting millions out of poverty. However, the country faces challenges including factory safety concerns, low wages, and the same vulnerability to global market changes that affects Pakistan.

Sri Lanka presents a different economic picture. The country's exports total approximately $12 billion, while its imports reach $21 billion, resulting in a trade deficit of $9 billion. Sri Lanka's economy relies on tea, rubber, coconut products, and increasingly on tourism and services. The trade deficit indicates that the country spends significantly more on imports than it earns from exports, creating economic challenges.

The heavy reliance on textiles in both Pakistan and Bangladesh makes their economies vulnerable to global market changes. Factors such as changing fashion trends, competition from other countries, trade policies, and economic downturns in major markets can all have significant impacts. This contrasts with the UAE's diversified economy, which spans oil and gas, tourism, finance, logistics, and technology. Economic diversification provides greater stability and resilience against market fluctuations, a lesson that South Asian countries are increasingly taking to heart as they seek to develop other sectors of their economies.

The capital cities of South Asian countries serve as their political and often economic centres: Dhaka (Bangladesh), Thimphu (Bhutan), Kathmandu (Nepal), Islamabad (Pakistan), Kabul (Afghanistan), Colombo (Sri Lanka), and New Delhi (India). Each of these cities reflects the unique history, culture, and aspirations of its nation, much as Abu Dhabi serves as the capital of the UAE, representing the federation's unity and vision for the future.`,
    reading2Title: 'Historical Cities and Their Legacy',
    reading2Content: `The cities of South Asia carry the deep imprints of centuries of history, each telling a unique story of the civilisations that built, conquered, and transformed them. Understanding these historical cities helps us appreciate how the past continues to shape the present.

Mohenjo-Daro, the ancient Indus Valley city dating back to around 2600 BCE, is one of the world's earliest planned urban centres. Its advanced urban planning, including a grid layout, sophisticated drainage system, and public baths, demonstrates that South Asian civilisation had achieved a remarkable level of urban sophistication over 4,000 years ago. The city's ruins continue to provide valuable insights into early urban life.

Lahore served as the cultural capital of the Mughal Empire and remains one of South Asia's most important cultural centres. The city is home to the Shalimar Gardens, a masterpiece of Mughal garden design, and the Badshahi Mosque, one of the largest mosques in the world. Lahore's architecture, cuisine, and artistic traditions reflect the rich blending of Islamic and South Asian cultures that characterised the Mughal period.

Kathmandu, the capital of Nepal, was the centre of the ancient Newar civilisation. The city is famous for its Buddhist and Hindu temples, stupas, and palaces, many of which are UNESCO World Heritage Sites. The Kathmandu Valley has been a crossroads of civilisations for centuries, where Indian, Tibetan, and Central Asian influences converged.

Hampi, the capital of the Vijayanagara Empire, contains stunning temple complexes and ruins that stretch across a vast landscape. The city was one of the largest and wealthiest in the world during the 14th to 16th centuries. Delhi has been the seat of multiple empires — from the Mauryan period through the Delhi Sultanate, the Mughal Empire, and finally the British Raj. Each era left its architectural and cultural mark, making Delhi one of the most historically layered cities in the world. Agra served as the Mughal capital and is home to the Taj Mahal and Agra Fort. Mumbai, known as Bombay under British rule, has transformed into India's financial capital and the heart of the Bollywood film industry.

The UAE has its own historical cities that carry deep significance. Al Ain, a UNESCO World Heritage Site, is known as the "Garden City" and contains important archaeological sites. Sir Bani Yas Island preserves evidence of early Christian and Islamic settlements. The UAE's commitment to preserving its heritage while developing modern infrastructure provides a model for how nations can honour their past while building for the future. The importance of preserving heritage while developing modern infrastructure is a challenge shared by South Asian cities and the UAE alike, as both regions seek to balance rapid development with cultural preservation.`,
    reading1Time: 8,
    reading2Time: 8,
    kwlExplanation: KWL_EXPLANATION,
    discussionQuestions: [
      'Why does Bangladesh\'s heavy reliance on textiles (91% of exports) create both opportunities and vulnerabilities?',
      'How does the UAE\'s diversified economy compare to the economies of Pakistan and Bangladesh?',
      'What causes a trade deficit, and how does Sri Lanka\'s $9 billion trade deficit affect its economy?',
      'How have historical cities like Delhi and Lahore been shaped by the different empires that ruled them?',
      'Why is it important to preserve heritage sites while developing modern infrastructure, and how does the UAE balance these goals?'
    ],
    keyFacts: [
      'Pakistan\'s exports total approximately $24.8 billion, dominated by textiles.',
      'Bangladesh\'s exports total approximately $38.2 billion, with 91% from textiles — one of the world\'s largest garment exporters.',
      'Sri Lanka has a trade deficit of $9 billion ($12 billion exports vs $21 billion imports).',
      'Heavy reliance on textiles makes Pakistan and Bangladesh vulnerable to global market changes.',
      'The UAE\'s diversified economy spans oil/gas, tourism, finance, logistics, and technology.',
      'Capital cities of South Asia: Dhaka, Thimphu, Kathmandu, Islamabad, Kabul, Colombo, New Delhi.',
      'Mohenjo-Daro was one of the world\'s earliest planned urban centres (2600 BCE) with a grid layout and drainage system.',
      'Lahore is home to the Shalimar Gardens and the Badshahi Mosque, reflecting Mughal cultural heritage.',
      'Delhi has been the seat of multiple empires — Mauryan, Sultanate, Mughal, and British.',
      'The UAE preserves its heritage at sites like Al Ain (UNESCO World Heritage Site) and Sir Bani Yas Island.'
    ],
    visualType: 'chart',
    visualData: {
      title: 'South Asian Export Comparison',
      chartType: 'bar',
      data: [
        {
          country: 'Bangladesh',
          exports: 38.2,
          primaryIndustry: 'Textiles (91%)',
          imports: null
        },
        {
          country: 'Pakistan',
          exports: 24.8,
          primaryIndustry: 'Textiles (dominant)',
          imports: null
        },
        {
          country: 'Sri Lanka',
          exports: 12,
          primaryIndustry: 'Tea, rubber, tourism',
          imports: 21
        }
      ],
      unit: 'billion USD',
      note: 'Sri Lanka has a trade deficit of $9 billion (imports exceed exports)'
    },
    quizQuestions: [
      {
        id: 'G7T2U6L7Q1',
        question: 'What percentage of Bangladesh\'s exports come from textiles?',
        options: ['50%', '70%', '80%', '91%'],
        correctAnswer: 3,
        explanation: 'An astonishing 91% of Bangladesh\'s $38.2 billion in exports comes from the textile and garment sector, making it one of the world\'s largest garment exporters.'
      },
      {
        id: 'G7T2U6L7Q2',
        question: 'What is Sri Lanka\'s trade deficit?',
        options: ['$3 billion', '$5 billion', '$7 billion', '$9 billion'],
        correctAnswer: 3,
        explanation: 'Sri Lanka has a trade deficit of $9 billion, with $12 billion in exports and $21 billion in imports, meaning the country spends significantly more on imports than it earns from exports.'
      },
      {
        id: 'G7T2U6L7Q3',
        question: 'Which ancient city was one of the world\'s earliest planned urban centres with a grid layout and drainage system?',
        options: ['Lahore', 'Delhi', 'Mohenjo-Daro', 'Agra'],
        correctAnswer: 2,
        explanation: 'Mohenjo-Daro, dating back to around 2600 BCE, was one of the world\'s earliest planned urban centres, featuring a grid layout, sophisticated drainage system, and public baths.'
      },
      {
        id: 'G7T2U6L7Q4',
        question: 'How does the UAE\'s economy differ from those of Pakistan and Bangladesh?',
        options: ['The UAE relies only on oil', 'The UAE has a more diversified economy spanning oil/gas, tourism, finance, logistics, and technology', 'The UAE\'s economy is dominated by textiles', 'The UAE has a larger trade deficit than South Asian countries'],
        correctAnswer: 1,
        explanation: 'The UAE\'s diversified economy spans oil and gas, tourism, finance, logistics, and technology, providing greater stability and resilience compared to the textile-dependent economies of Pakistan and Bangladesh.'
      },
      {
        id: 'G7T2U6L7Q5',
        question: 'Which city has served as the seat of multiple empires including the Mauryan, Sultanate, Mughal, and British?',
        options: ['Agra', 'Mumbai', 'Lahore', 'Delhi'],
        correctAnswer: 3,
        explanation: 'Delhi has been the seat of multiple empires — from the Mauryan period through the Delhi Sultanate, the Mughal Empire, and the British Raj — making it one of the most historically layered cities in the world.'
      }
    ],
    interactiveStrategies: [
      {
        strategy: 'Economic Data Analysis',
        description: 'Students analyse the export and import data of South Asian countries and compare it with the UAE\'s diversified economy.',
        duration: 20,
        instructions: 'Provide students with a data sheet containing: Pakistan exports $24.8B (textiles dominant), Bangladesh exports $38.2B (91% textiles), Sri Lanka exports $12B / imports $21B (trade deficit $9B). Students work in pairs to: (1) Create a bar chart comparing exports, (2) Calculate what percentage of each country\'s GDP might be at risk if global textile demand drops by 20%, (3) Identify two strategies each country could use to diversify their economies, (4) Compare these strategies with the UAE\'s approach to economic diversification. Pairs present their analysis to the class and discuss which diversification strategies they think would be most effective.'
      },
      {
        strategy: 'Historical Cities Travel Guide',
        description: 'Students create a travel guide for one historical South Asian city, highlighting its significance across different periods of history.',
        duration: 25,
        instructions: 'Each student selects one city from the lesson: Mohenjo-Daro, Lahore, Kathmandu, Hampi, Delhi, Agra, or Mumbai. Using information from the readings and additional research, students create a one-page travel guide that includes: (1) The city\'s name and country, (2) Three historical periods the city has lived through, (3) Key monuments or sites from each period, (4) One "Did You Know?" fact, (5) A connection to the UAE (e.g., how trade connected the city to the Gulf, or how preservation efforts compare). Students display their travel guides around the room and do a gallery walk, adding sticky notes with questions or comments on at least three other guides.'
      }
    ]
  }
];

export function getG7T2Unit6LessonContent(lessonId: string): LessonContent | null {
  return g7t2Unit6.find(l => l.lessonId === lessonId) || null;
}
