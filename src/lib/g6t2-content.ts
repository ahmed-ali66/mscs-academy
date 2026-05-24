// ═══════════════════════════════════════════════════════════════
// G6 TERM 2 — REAL TEXTBOOK CONTENT
// Extracted from MoE MSCS Student Textbook Grade 6 Volume 2
// ═══════════════════════════════════════════════════════════════

export interface LessonContent {
  lessonId: string;
  keyVocabulary: string[];
  reading1Title: string;
  reading1Content: string;
  reading2Title?: string;
  reading2Content?: string;
  reading1Time?: number;  // minutes assigned for reading Reading 1
  reading2Time?: number;  // minutes assigned for reading Reading 2
  kwlExplanation?: string; // Explanation of what KWL is for students
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
    duration: number; // minutes
    instructions: string;
  }[];
}

const KWL_EXPLANATION = "KWL stands for Know, Want to know, Learned. It's a thinking tool that helps you track your learning. Start by writing what you already Know about the topic, then write what you Want to know, and after the lesson write what you Learned!";

// ═══════════════════════════════════════════════════════════════
// UNIT 4: RESPECT AND TOLERANCE IN A DIVERSE COMMUNITY (2 lessons)
// ═══════════════════════════════════════════════════════════════

export const g6t2Unit4: LessonContent[] = [
  // Lesson 1: Tolerance and Its Relation to Diversity
  {
    lessonId: 'G6_T2_Unit 4_l1',
    keyVocabulary: ['culture', 'cultural significance', 'attitude', 'communication'],
    reading1Title: 'Abdul\'s Great Idea',
    reading1Content: `No matter where you live in the world, there are chances to meet people from other cultures and backgrounds. Our knowledge of our own culture comes from our family, friends, school and society. However, our experience of this culture depends on a range of factors including gender, social class, intellectual and physical abilities and age.

Our views are shaped by our surroundings, and as young children we assume that everyone in the world looks, thinks and behaves just like we do. As we grow, we realise that this is not the case. The world is made up of people with different backgrounds and cultures from ours. It is important to acknowledge our similarities and understand our differences. Respect and tolerance of other cultures is not about changing people's views to see, think and behave like ourselves. Rather, it is about exploring and getting to know the differences that exist among us.

Many believe that the key to making world peace possible is respect and tolerance to our differences. The more we know and understand about other cultures, the easier it is for us to show them tolerance and respect.

Abdul was a young boy who lived in a small town in the UAE. One day, a new family moved into his neighbourhood. They were from a different country and spoke a different language. At first, the children in the neighbourhood were unsure about the new family. They dressed differently and ate different food. Abdul, however, had an idea. He invited the new family's children to play football with him and his friends. Through playing together, they learned that despite their differences, they shared many things in common — a love of games, laughter, and friendship. Abdul's great idea showed that tolerance begins with a simple act of reaching out.`,
    reading2Title: 'The Universal Declaration of Human Rights',
    reading2Content: `In Paris in 1948, the Universal Declaration of Human Rights (UDHR) was adopted by the United Nations General Assembly. This was a historic moment for humanity, as it was the first time that countries from around the world agreed on a list of rights that belong to every person, regardless of where they live, what they believe, or how they look.

The UDHR contains 30 articles, each describing a fundamental human right. Some of the most important articles include:

Article 2 — Freedom from discrimination: Everyone is entitled to all the rights and freedoms listed in the Declaration, without distinction of any kind such as race, colour, sex, language, religion, political opinion, national or social origin, property, birth or other status.

Article 19 — Freedom of opinion: Everyone has the right to freedom of opinion and expression. This right includes freedom to hold opinions without interference and to seek, receive and share information and ideas through any media.

Article 26 — Right to education: Everyone has the right to education. Education shall be free, at least in the elementary and fundamental stages. Elementary education shall be compulsory. Education shall be directed to the full development of the human personality and to the strengthening of respect for human rights and fundamental freedoms.

Article 27 — Right to participate in cultural life: Everyone has the right freely to participate in the cultural life of the community, to enjoy the arts and to share in scientific advancement and its benefits.

The UDHR has been translated into more than 300 languages, making it the most translated document in the world. It remains a powerful reminder that all human beings are born free and equal in dignity and rights.`,
    reading1Time: 6,
    reading2Time: 4,
    kwlExplanation: KWL_EXPLANATION,
    discussionQuestions: [
      'Why is it important to respect the beliefs and traditions of others?',
      'How can talking about our own prejudices help us overcome them?',
      'Why was the UDHR created, and what problem does it try to solve?',
      'How does the iceberg metaphor help us understand culture?',
      'What cultural symbol would you draw for a tourist visiting the UAE?',
    ],
    keyFacts: [
      'Culture shapes our views from childhood — we assume everyone thinks like us until we grow and learn otherwise',
      'Tolerance means exploring and understanding differences, not changing people to be like ourselves',
      'The UDHR was adopted in 1948 by the United Nations General Assembly in Paris',
      'The UDHR has 30 articles and has been translated into more than 300 languages',
      'Article 27 gives everyone the right to participate in the cultural life of the community',
      'Culture is like an iceberg — only a small part is visible (food, dress, language), while deeper aspects (values, beliefs, attitudes) are hidden',
      'The UAE is a top international destination with people from over 200 nationalities',
    ],
    visualType: 'venn',
    visualData: {
      leftTitle: 'Emirati Culture',
      rightTitle: 'Another Culture',
      centerTitle: 'Shared Human Values',
      leftItems: ['Kandura & Abaya', 'Arabic Language', 'Islamic Faith', 'Dates & Machboos', 'Al-Ayyalah Dance'],
      rightItems: ['Western Dress', 'English Language', 'Various Faiths', 'Pizza & Pasta', 'Pop Music'],
      centerItems: ['Family Values', 'Respect for Elders', 'Love of Learning', 'Community Spirit', 'Celebrating Heritage'],
    },
    quizQuestions: [
      { id: 'u4l1q1', question: 'What does tolerance of other cultures truly mean?', options: ['Changing other people\'s views to match our own', 'Exploring and getting to know the differences that exist among us', 'Ignoring other cultures completely', 'Agreeing with everything other cultures believe'], correctAnswer: 1, explanation: 'Tolerance is not about changing people to be like ourselves. It is about exploring and understanding the differences that exist among us.' },
      { id: 'u4l1q2', question: 'When was the Universal Declaration of Human Rights adopted?', options: ['1945', '1948', '1950', '1960'], correctAnswer: 1, explanation: 'The UDHR was adopted by the United Nations General Assembly in Paris in 1948.' },
      { id: 'u4l1q3', question: 'Which article of the UDHR gives everyone the right to participate in cultural life?', options: ['Article 2', 'Article 19', 'Article 26', 'Article 27'], correctAnswer: 3, explanation: 'Article 27 of the UDHR gives everyone the right freely to participate in the cultural life of the community and to enjoy the arts.' },
      { id: 'u4l1q4', question: 'How does the iceberg metaphor help us understand culture?', options: ['It shows that culture is cold and distant', 'It shows that only a small visible part of culture is seen, while deeper aspects like values and beliefs are hidden', 'It shows that cultures can crash into each other', 'It shows that culture floats on the surface'], correctAnswer: 1, explanation: 'The iceberg metaphor shows that only visible aspects of culture (food, dress, language) are above the surface, while deeper aspects (values, beliefs, attitudes) are hidden beneath.' },
      { id: 'u4l1q5', question: 'How many languages has the UDHR been translated into?', options: ['100+', '200+', '300+', '500+'], correctAnswer: 2, explanation: 'The UDHR has been translated into more than 300 languages, making it the most translated document in the world.' },
    ],
    interactiveStrategies: [
      { strategy: 'Think-Pair-Share', description: 'Discuss cultural differences and similarities with a partner', duration: 5, instructions: 'Think about a culture different from your own. Share with your partner: What do you know about it? What would you like to learn? How are you similar?' },
      { strategy: 'Jigsaw', description: 'Research different UDHR articles in expert groups', duration: 8, instructions: 'Each group researches one UDHR article (2, 19, 26, or 27). Become experts on your article, then share with classmates who studied different articles. Together, create a summary of all four articles.' },
      { strategy: 'Summarizing', description: 'Write a one-sentence summary of the main idea about tolerance', duration: 3, instructions: 'In one sentence, summarize the main lesson about tolerance from today\'s readings. Write it on your index card and share with the class.' },
    ],
  },

  // Lesson 2: Exploring Our Own Beliefs and Attitudes
  {
    lessonId: 'G6_T2_Unit 4_l2',
    keyVocabulary: ['enriched culture', 'tolerance', 'creativity'],
    reading1Title: 'A Student\'s Experience with Dyslexia',
    reading1Content: `When I look back on my school days, I realise that tolerance and acceptance made those years bearable for me. I was diagnosed with dyslexia when I was seven years old. Dyslexia is a learning disability that affects reading and writing. For me, letters would sometimes swap places on the page, and spelling was incredibly difficult.

At first, I was afraid to tell my classmates. I thought they would laugh at me or think I was not smart. But when my teacher explained dyslexia to the class, something wonderful happened. My classmates showed tolerance and acceptance. They didn't judge me or make fun of me. Instead, they offered to help.

One classmate would read instructions out loud for me. Another would check my spelling in group work. The teacher gave me extra time on tests and allowed me to type my answers instead of writing by hand. These small acts of tolerance and acceptance made a huge difference.

Over time, I discovered that having dyslexia also gave me certain strengths. I became very good at thinking creatively and solving problems in different ways. I could see patterns that others missed. My experience taught me that being different is not the same as being less — it can actually be an advantage.

When I look back on my school days, I realise that tolerance and acceptance made those years bearable for me. Without the understanding of my teachers and classmates, school would have been a much harder place. But because they chose to accept me for who I am, I was able to thrive and discover my own strengths.`,
    reading2Title: 'Diversity in the Workplace and Dubai\'s Enriched Culture',
    reading2Content: `Research has shown that diverse groups are more innovative than homogeneous ones. When people from different backgrounds come together, they bring different perspectives, experiences, and ideas. This variety of viewpoints leads to more creative solutions and better decision-making.

Think about an aeronautical team that designs aeroplanes. The team needs engineers, designers, safety experts, materials scientists, and many other specialists. Each person brings a different area of expertise, and together they create something that no single person could design alone. This is the power of diversity — different perspectives working together towards a common goal.

Dubai has built its reputation on being open to different ideas and people from around the world. The spirit of freedom and acceptance that characterises Dubai has enriched many lives. People from every continent have chosen to make Dubai their home, and in doing so, they have contributed to the city's growth and success.

His Highness Sheikh Mohammed bin Rashid Al Maktoum said: "To be creative is to add something new to life." Dubai's enriched culture is a living example of this principle. When diverse cultures come together with mutual respect and tolerance, the result is a society that is richer, more vibrant, and more innovative than any single culture could be on its own.

An international company benefits from diverse employees because they bring different perspectives to problem-solving, understand different markets, and can communicate with a wider range of customers. Diversity is not just about fairness — it is also about excellence.`,
    reading1Time: 6,
    reading2Time: 5,
    kwlExplanation: KWL_EXPLANATION,
    discussionQuestions: [
      'Why does the writer say acceptance made school bearable?',
      'What role should teachers play in supporting students with learning difficulties?',
      'Why can being different be an advantage rather than a disadvantage?',
      'How do different cultures enrich Dubai?',
      'How would an international company benefit from diverse employees?',
    ],
    keyFacts: [
      'Diverse groups are more innovative than homogeneous groups',
      'Multiple perspectives improve creativity and problem-solving',
      'Dyslexia is a learning disability affecting reading and writing, but it can also bring creative strengths',
      'Dubai\'s spirit of freedom and openness has enriched many lives',
      'Quote by HH Mohammed bin Rashid: "To be creative is to add something new to life"',
      'An aeronautical team needs diverse expertise to design aeroplanes effectively',
    ],
    visualType: 'mindmap',
    visualData: {
      center: 'Enriched Culture',
      branches: [
        { label: 'Innovation', children: ['Diverse Teams', 'Creative Solutions'] },
        { label: 'Tolerance', children: ['Acceptance', 'Understanding'] },
        { label: 'Dubai Model', children: ['Open-mindedness', 'Global Centre'] },
        { label: 'Workplace', children: ['Multiple Perspectives', 'Better Design'] },
      ],
    },
    quizQuestions: [
      { id: 'u4l3q1', question: 'What is dyslexia?', options: ['A physical disability affecting movement', 'A learning disability that affects reading and writing', 'A hearing impairment', 'A behavioural disorder'], correctAnswer: 1, explanation: 'Dyslexia is a learning disability that affects reading and writing. Letters may appear to swap places, and spelling can be very difficult for people with dyslexia.' },
      { id: 'u4l3q2', question: 'Why are diverse groups more innovative than homogeneous ones?', options: ['They argue more', 'Different perspectives lead to more creative solutions and better decision-making', 'They have more money', 'They work faster'], correctAnswer: 1, explanation: 'When people from different backgrounds come together, they bring different perspectives, experiences, and ideas, which leads to more creative solutions.' },
      { id: 'u4l3q3', question: 'What did the student with dyslexia discover about their condition?', options: ['That it made school impossible', 'That being different can actually be an advantage, giving creative strengths', 'That it could be cured easily', 'That no one could help'], correctAnswer: 1, explanation: 'The student discovered that dyslexia also gave them certain strengths — they became good at creative thinking and could see patterns that others missed.' },
      { id: 'u4l3q4', question: 'What did HH Sheikh Mohammed bin Rashid say about creativity?', options: ['Creativity is only for artists', '"To be creative is to add something new to life"', 'Creativity cannot be learned', 'Creativity is the same as intelligence'], correctAnswer: 1, explanation: 'HH Sheikh Mohammed bin Rashid said: "To be creative is to add something new to life." This connects creativity with diversity — different perspectives create something new.' },
      { id: 'u4l3q5', question: 'How has Dubai built its reputation according to the reading?', options: ['By having the tallest buildings', 'By being open to different ideas and people from around the world', 'By limiting immigration', 'By focusing only on oil'], correctAnswer: 1, explanation: 'Dubai has built its reputation on being open to different ideas and people from around the world. The spirit of freedom and acceptance has enriched many lives.' },
    ],
    interactiveStrategies: [
      { strategy: 'Think-Pair-Share', description: 'Discuss the jigsaw puzzle activity — how each piece is different but needed', duration: 5, instructions: 'Think about a jigsaw puzzle: every piece is different, but all are needed to complete the picture. Share with your partner: How is a diverse classroom like a jigsaw puzzle? What unique piece do you bring?' },
      { strategy: 'Problem-Based Learning', description: 'Design a diverse team to solve a real-world problem', duration: 8, instructions: 'Your challenge: Design a team to build a new school in a diverse neighbourhood. What different skills, backgrounds, and perspectives would you need? List at least 6 different team members and explain why each is important.' },
      { strategy: 'Summarizing', description: 'Write a one-sentence summary about diversity and innovation', duration: 3, instructions: 'In one sentence, summarize the connection between diversity and innovation that you learned today. Write it on your index card.' },
    ],
  },
];
// ═══════════════════════════════════════════════════════════════
// UNIT 5: HOW THE UAE GREW INTO A DIVERSE, INCLUSIVE SOCIETY (1 lesson)
// ═══════════════════════════════════════════════════════════════

export const g6t2Unit5: LessonContent[] = [
  // Lesson 1: Museums in the UAE
  {
    lessonId: 'G6_T2_Unit 5_l1',
    keyVocabulary: ['museum', 'archaeology', 'heritage', 'culture'],
    reading1Title: 'Zafar\'s Visit to the Sharjah Museum of Islamic Civilisation',
    reading1Content: `"Do I have to go?" Zafar groaned as his father announced they were visiting the Sharjah Museum of Islamic Civilisation. Zafar would much rather stay at home and play video games. Museums sounded boring — just old things in glass cases, he thought.

But from the moment they walked through the doors, Zafar was amazed. The first thing that caught his eye was the magnificent golden dome that crowned the building. It gleamed and shimmered in the light, and Zafar couldn't stop staring.

As they entered the first gallery, Zafar saw rare manuscripts with beautiful Arabic calligraphy written hundreds of years ago. He was surprised by how intricate and detailed the writing was — each letter was a work of art in itself. Then they came to the collection of Islamic coins from different centuries and regions. Some were made of gold, others of silver and copper, and each told a story about the civilisation that created it.

But it was the Ibn Al-Haytham Gallery of Science and Technology that truly captured Zafar's imagination. The gallery was named after the great Muslim scientist who made pioneering discoveries in optics and vision. Zafar saw an astrolabe — an ancient instrument used to measure the height of stars above the horizon. This helped sailors navigate the seas and scholars determine the time for prayers. He also learned about the water clock, the camera obscura, and many other inventions from the golden age of Islamic science.

"These are all part of who you are," his father said gently. "Your heritage, your civilisation, your history."

By the end of the visit, Zafar didn't want to leave. He had discovered that museums were not boring at all — they were treasure houses of knowledge and wonder.`,
    reading2Title: 'The Blacas Ewer',
    reading2Content: `The Blacas Ewer is one of the most important objects in the history of Islamic metalwork. Made in the mid-13th century in Mosul, which is in present-day Iraq, this brass ewer is a masterpiece of Islamic art and craftsmanship.

The ewer is named after Pierre Louis, Duc de Blacas, a French nobleman who once owned it. It is decorated with beautiful inlaid decoration depicting court life — scenes of rulers, musicians, hunters, and scholars, all rendered in silver and copper inlay against the brass background. The level of detail is extraordinary, with tiny figures and intricate patterns covering nearly every surface.

The Blacas Ewer tells us a great deal about Islamic heritage and the civilisation that produced it. The court scenes show how rulers lived, the musicians reveal the importance of art and entertainment, and the scholars remind us of the Islamic world's dedication to learning and knowledge.

Today, the Blacas Ewer is displayed in the British Museum in London, one of the world's greatest museums. It stands as a testament to the skill and artistry of Islamic craftsmen and the rich cultural heritage of the Islamic world. While it is housed far from where it was made, it continues to educate and inspire people from all over the world about the achievements of Islamic civilisation.`,
    reading1Time: 7,
    reading2Time: 4,
    kwlExplanation: KWL_EXPLANATION,
    discussionQuestions: [
      'Why did Zafar\'s father think visiting the museum was important?',
      'Why was Zafar particularly interested in the Science gallery?',
      'What does "These are all part of who you are" mean?',
      'Why is the Blacas Ewer important?',
      'What does the Blacas Ewer tell us about Islamic heritage?',
    ],
    keyFacts: [
      'The Louvre Abu Dhabi is the largest art museum in the Arabian Peninsula',
      'The Sharjah Museum of Islamic Civilisation has over 5,000 artefacts',
      'An astrolabe measures the height of stars above the horizon for navigation and timekeeping',
      'The Blacas Ewer dates from the mid-13th century and was made in Mosul, Iraq',
      'Museums illuminate our past and preserve our heritage for future generations',
      'Ibn Al-Haytham was a great Muslim scientist who made pioneering discoveries in optics',
    ],
    visualType: 'map',
    visualData: {
      markers: [
        { name: 'Sharjah Museum of Islamic Civilisation', desc: '5,000+ Islamic artefacts, golden dome', lat: 25.3573, lng: 55.3905, color: '#722F37' },
        { name: 'Louvre Abu Dhabi', desc: 'Largest art museum in Arabian Peninsula', lat: 24.5337, lng: 54.3986, color: '#D4AF37' },
        { name: 'British Museum', desc: 'Home to the Blacas Ewer and global artefacts', lat: 51.5194, lng: -0.1270, color: '#047857' },
      ],
    },
    quizQuestions: [
      { id: 'u5l1q1', question: 'What is the largest art museum in the Arabian Peninsula?', options: ['Sharjah Museum of Islamic Civilisation', 'Louvre Abu Dhabi', 'Dubai Museum', 'Qatar National Museum'], correctAnswer: 1, explanation: 'The Louvre Abu Dhabi is the largest art museum in the Arabian Peninsula.' },
      { id: 'u5l1q2', question: 'What instrument did Zafar see that measures the height of stars?', options: ['A telescope', 'A microscope', 'An astrolabe', 'A compass'], correctAnswer: 2, explanation: 'An astrolabe is an ancient instrument used to measure the height of stars above the horizon, helping with navigation and timekeeping.' },
      { id: 'u5l1q3', question: 'Where was the Blacas Ewer made?', options: ['Baghdad', 'Damascus', 'Mosul', 'Cairo'], correctAnswer: 2, explanation: 'The Blacas Ewer was made in Mosul, in present-day Iraq, during the mid-13th century.' },
      { id: 'u5l1q4', question: 'How many artefacts does the Sharjah Museum of Islamic Civilisation have?', options: ['1,000+', '3,000+', '5,000+', '10,000+'], correctAnswer: 2, explanation: 'The Sharjah Museum of Islamic Civilisation has over 5,000 artefacts.' },
      { id: 'u5l1q5', question: 'What did Zafar\'s father mean by "These are all part of who you are"?', options: ['Zafar should become a scientist', 'The museum artefacts represent his cultural heritage and civilisation', 'Zafar needed to buy souvenirs', 'The museum was his home'], correctAnswer: 1, explanation: 'Zafar\'s father meant that the artefacts in the museum represent their cultural heritage, civilisation, and history — they are part of Zafar\'s identity.' },
    ],
    interactiveStrategies: [
      { strategy: 'Think-Pair-Share', description: 'Discuss what you found most interesting about museums', duration: 5, instructions: 'Think about a museum you have visited or would like to visit. Share with your partner: What did you see? What did you learn? Why are museums important?' },
      { strategy: 'Jigsaw', description: 'Research different museums around the world', duration: 8, instructions: 'Each group researches one museum: Sharjah Museum, Louvre Abu Dhabi, British Museum, or Dubai Museum. Find out what it contains, why it\'s important, and one interesting fact. Share with the class.' },
      { strategy: 'Summarizing', description: 'Write a one-sentence summary about why museums matter', duration: 3, instructions: 'In one sentence, summarize why museums are important for preserving heritage. Write it on your index card.' },
    ],
  },
];

// ═══════════════════════════════════════════════════════════════
// UNIT 6: IMPACTS OF TRANSITIONS IN EUROPE (7 lessons)
// ═══════════════════════════════════════════════════════════════

export const g6t2Unit6: LessonContent[] = [
  // Lesson 1: The Renaissance
  {
    lessonId: 'G6_T2_Unit 6_l1',
    keyVocabulary: ['statue', 'peasantry', 'flourish', 'space', 'cannon', 'principle', 'approach', 'foundation'],
    reading1Title: 'The Renaissance',
    reading1Content: `After the devastation of the Black Death, which killed millions of people across Europe in the 14th century, Italy experienced a remarkable period of rebirth and renewal. This period came to be known as the Renaissance — a word that means "rebirth" in French.

The Renaissance transformed European society in profound ways. Before this period, Europe had been organised under the feudal system, which divided society into three main classes: the nobility at the top, the lords and vassals in the middle, and the peasantry at the bottom. The peasantry worked the land and had very few rights, while the nobility lived in luxury.

As trade and commerce grew, a new class of people emerged — the burghers. These were merchants, bankers, and craftsmen who lived in cities and built their wealth through business rather than land ownership. The burghers became the new leaders of city life and helped drive the cultural and intellectual changes of the Renaissance.

Artists like Leonardo da Vinci, Michelangelo, and Raphael created masterpieces that still inspire awe today. Leonardo da Vinci painted the Mona Lisa around 1503 CE — perhaps the most famous painting in the world. These artists developed new techniques in perspective, anatomy, and realism that revolutionised art.

One of the most important scientific breakthroughs of the Renaissance was the heliocentric theory. In 1532 CE, the Polish astronomer Nicolaus Copernicus published his theory that the Earth and other planets orbit the Sun — challenging the long-held belief that the Earth was the centre of the universe.

However, Copernicus was not the first to propose this idea. The ancient Greek astronomer Aristarchus of Samos had proposed a heliocentric theory nearly 1,800 years earlier! And even before that, the Indian philosopher Yajnavalkya had described the Sun as the centre of the solar system. These earlier ideas were largely forgotten during the Middle Ages.

In 1609 CE, the Italian scientist Galileo Galilei used a telescope to observe the moons of Jupiter and the phases of Venus, providing powerful evidence that confirmed Copernicus's heliocentric theory. This was a turning point in the history of science, as it showed that observation and evidence could challenge long-held beliefs about the universe.`,
    reading1Time: 8,
    kwlExplanation: KWL_EXPLANATION,
    discussionQuestions: [
      'What does Renaissance mean, and why is this period called a "rebirth"?',
      'How did cities grow and change during the Renaissance?',
      'What did Copernicus prove, and why was it controversial?',
      'Was the heliocentric idea really new? Who had proposed it before?',
      'Why was the Renaissance important for the development of Europe?',
    ],
    keyFacts: [
      'Renaissance means "rebirth" in French',
      'The Black Death led to the Renaissance by changing European society',
      'The feudal system had three classes: nobility, lords/vassals, and peasantry',
      'Burghers were the new city leaders — merchants, bankers, and craftsmen',
      'Copernicus published the heliocentric theory in 1532 CE',
      'Aristarchus of Samos proposed the same theory nearly 1,800 years earlier',
      'Galileo confirmed the heliocentric theory using a telescope in 1609 CE',
    ],
    visualType: 'timeline',
    visualData: {
      title: 'The Renaissance Timeline',
      events: [
        { year: '1347 CE', event: 'Black Death devastates Europe' },
        { year: '1400s', event: 'Renaissance begins in Italy' },
        { year: '1503 CE', event: 'Leonardo da Vinci paints the Mona Lisa' },
        { year: '1532 CE', event: 'Copernicus publishes heliocentric theory' },
        { year: '1609 CE', event: 'Galileo confirms Earth orbits the Sun with telescope' },
      ],
    },
    quizQuestions: [
      { id: 'u6l1q1', question: 'What does the word "Renaissance" mean?', options: ['Revolution', 'Rebirth', 'Destruction', 'Discovery'], correctAnswer: 1, explanation: 'Renaissance means "rebirth" in French, referring to the period of cultural and intellectual renewal that followed the Black Death.' },
      { id: 'u6l1q2', question: 'What were the three classes in the feudal system?', options: ['Kings, soldiers, farmers', 'Nobility, lords/vassals, peasantry', 'Rich, middle, poor', 'Clergy, knights, serfs'], correctAnswer: 1, explanation: 'The feudal system divided society into three main classes: the nobility at the top, lords and vassals in the middle, and the peasantry at the bottom.' },
      { id: 'u6l1q3', question: 'Who proposed the heliocentric theory nearly 1,800 years before Copernicus?', options: ['Galileo', 'Aristarchus of Samos', 'Yajnavalkya', 'Michelangelo'], correctAnswer: 1, explanation: 'Aristarchus of Samos, an ancient Greek astronomer, proposed a heliocentric theory nearly 1,800 years before Copernicus published his in 1532 CE.' },
      { id: 'u6l1q4', question: 'How did Galileo confirm the heliocentric theory?', options: ['By reading ancient texts', 'By using a telescope to observe Jupiter\'s moons and Venus\'s phases', 'By sailing around the world', 'By measuring shadows'], correctAnswer: 1, explanation: 'In 1609 CE, Galileo used a telescope to observe the moons of Jupiter and the phases of Venus, providing powerful evidence that confirmed the heliocentric theory.' },
      { id: 'u6l1q5', question: 'Who were the burghers?', options: ['Nobility who owned land', 'Merchants, bankers, and craftsmen who built wealth through business', 'Peasants who worked the fields', 'Religious leaders'], correctAnswer: 1, explanation: 'Burghers were merchants, bankers, and craftsmen who lived in cities and built their wealth through business rather than land ownership. They became the new leaders of city life.' },
    ],
    interactiveStrategies: [
      { strategy: 'Think-Pair-Share', description: 'Discuss the meaning of "rebirth" in the context of the Renaissance', duration: 5, instructions: 'Think about why the period after the Black Death was called a "rebirth." Share with your partner: What was reborn? How did society change? What would a "rebirth" look like today?' },
      { strategy: 'Concept Mapping', description: 'Create a concept map of Renaissance changes', duration: 7, instructions: 'Create a concept map showing the key changes of the Renaissance. Start with "Renaissance" in the center and add branches for: social changes, artistic developments, scientific discoveries, and new ideas. Include at least 2 details per branch.' },
      { strategy: 'Summarizing', description: 'Write a one-sentence summary of the Renaissance', duration: 3, instructions: 'In one sentence, summarize what the Renaissance was and why it mattered. Write it on your index card and share with the class.' },
    ],
  },

  // Lesson 2: The Printing Press
  {
    lessonId: 'G6_T2_Unit 6_l2',
    keyVocabulary: ['ink', 'durable', 'investor', 'transformation', 'illiterate'],
    reading1Title: 'The Printing Press',
    reading1Content: `The invention of the printing press was one of the most transformative events in human history. It changed the way information was shared, the way people learned, and ultimately the way societies were organised.

The story of printing begins long before the European Renaissance. In China, people had been using wooden blocks for printing since around 200 CE. They would carve characters into wooden blocks, apply ink, and press paper onto the blocks to create copies. This method worked, but it was slow and each block could only be used for one page.

In 1041 CE, a Chinese inventor named Pi Sheng made a breakthrough. He created movable type — individual characters made from clay that could be rearranged to form different pages. This was a major advance because the same characters could be reused for different texts. However, the Chinese writing system had thousands of characters, which made movable type less practical than it would later become in Europe.

In Europe, the 26-letter alphabet made movable type far more practical. Around 1436 CE, a German goldsmith named Johannes Gutenberg designed a printing press that used metal movable type. His press was based on the wine presses used in the Rhine Valley, but adapted for printing. The metal type was durable and could be reused many times, making the process efficient and cost-effective.

In 1450 CE, a wealthy businessman named Johann Fust invested in Gutenberg's printing press, providing the financial support needed to make the project a reality. This partnership between inventor and investor was crucial to the success of the printing press.

By 1454 CE, the first printed book in Europe — the Gutenberg Bible — was produced. By 1550 CE, most classical texts were available in print, and the number of books in Europe had grown enormously.

The mass printing of books transformed European society. Before the printing press, most people were illiterate, and books were so rare and expensive that only the wealthy and the Church could afford them. After the printing press made books affordable and widely available, literacy rates began to rise. An educated middle class emerged, and ideas could spread quickly across Europe. The printing press truly changed the world.`,
    reading1Time: 8,
    kwlExplanation: KWL_EXPLANATION,
    discussionQuestions: [
      'How did the printing press change society?',
      'Why was movable type easier to use in Europe than in China?',
      'What caused the transformation from an illiterate society to an educated middle class?',
      'Why is literacy important for individuals and societies?',
      'How does the printing press compare to the internet as a tool for spreading ideas?',
    ],
    keyFacts: [
      'Chinese used wooden blocks for printing since 200 CE',
      'Pi Sheng invented movable type in China in 1041 CE',
      'Gutenberg designed the metal printing press in Europe around 1436 CE',
      'The 26-letter alphabet made movable type practical in Europe',
      'Johann Fust invested in the printing press in 1450 CE',
      'By 1550 CE, most classical texts were available in print',
      'Mass printing transformed an illiterate society into an educated middle class',
    ],
    visualType: 'timeline',
    visualData: {
      title: 'History of Printing',
      events: [
        { year: '200 CE', event: 'Chinese use wooden blocks for printing' },
        { year: '1041 CE', event: 'Pi Sheng invents movable type in China' },
        { year: '1436 CE', event: 'Gutenberg designs metal printing press' },
        { year: '1450 CE', event: 'Johann Fust invests in printing press' },
        { year: '1454 CE', event: 'First printed book in Europe' },
        { year: '1550 CE', event: 'Most classical texts available in print' },
      ],
    },
    quizQuestions: [
      { id: 'u6l2q1', question: 'When did the Chinese first use wooden blocks for printing?', options: ['500 CE', '200 CE', '1000 CE', '1436 CE'], correctAnswer: 1, explanation: 'The Chinese used wooden blocks for printing since around 200 CE, long before the printing press was invented in Europe.' },
      { id: 'u6l2q2', question: 'Why was movable type more practical in Europe than in China?', options: ['Europeans had better ink', 'The 26-letter alphabet was much smaller than thousands of Chinese characters', 'Chinese paper was too thin', 'Europeans had more money'], correctAnswer: 1, explanation: 'The 26-letter alphabet used in Europe required far fewer individual type pieces than the thousands of Chinese characters, making movable type much more practical.' },
      { id: 'u6l2q3', question: 'Who designed the metal printing press in Europe?', options: ['Pi Sheng', 'Johann Fust', 'Johannes Gutenberg', 'Leonardo da Vinci'], correctAnswer: 2, explanation: 'Johannes Gutenberg, a German goldsmith, designed the metal printing press around 1436 CE.' },
      { id: 'u6l2q4', question: 'What role did Johann Fust play in the history of printing?', options: ['He invented the press', 'He was the first author printed', 'He invested money in Gutenberg\'s printing press', 'He banned printing'], correctAnswer: 2, explanation: 'Johann Fust was a wealthy businessman who invested in Gutenberg\'s printing press in 1450 CE, providing the financial support needed to make it a reality.' },
      { id: 'u6l2q5', question: 'What was the major social impact of the printing press?', options: ['It made books more expensive', 'It transformed an illiterate society into an educated middle class', 'It decreased the number of books available', 'It only affected religious texts'], correctAnswer: 1, explanation: 'Mass printing made books affordable and widely available, leading to rising literacy rates and the emergence of an educated middle class in Europe.' },
    ],
    interactiveStrategies: [
      { strategy: 'Concept Mapping', description: 'Map the connections between printing and social change', duration: 7, instructions: 'Create a concept map showing how the printing press led to social changes. Start with "Printing Press" in the center and add branches for: cheaper books, rising literacy, spread of ideas, educated middle class, and scientific progress.' },
      { strategy: 'Problem-Based Learning', description: 'Consider how to spread an important idea without the internet', duration: 8, instructions: 'Imagine you live in 1450 CE and have discovered an important scientific idea. How would you spread it without the internet or social media? Design a plan using the tools available at the time. Present your plan.' },
      { strategy: 'Summarizing', description: 'Write a one-sentence summary about the printing press', duration: 3, instructions: 'In one sentence, summarize the most important impact of the printing press on society. Write it on your index card.' },
    ],
  },

  // Lesson 3: The Age of Discovery
  {
    lessonId: 'G6_T2_Unit 6_l3',
    keyVocabulary: ['journey', 'curiosity', 'sophisticated', 'colony', 'warfare'],
    reading1Title: 'The Age of Discovery',
    reading1Content: `Before the 14th century, European maps of the world were wildly inaccurate. Large parts of the globe were unknown to Europeans, and many maps showed sea monsters and mythical lands in the blank spaces. This began to change during the Age of Discovery in the early 15th century.

The Age of Discovery was driven by curiosity, the desire for wealth, and the need for new trade routes. European explorers from Italy, Spain, England, Portugal, and the Netherlands set sail across the world's oceans, seeking new lands, new resources, and new trading partners.

But Europeans were not the first to explore the world. The Vikings, fierce sailors from Scandinavia, had reached Greenland and possibly even Canada around 1000 CE — nearly 500 years before Columbus set sail. Leif Erikson is believed to have established a settlement in Newfoundland, Canada, though it did not last long.

Marco Polo, the famous Venetian merchant, may have reached China around 1269 CE. His travels took him along the Silk Road, and he spent many years in the court of Kublai Khan. His book about his adventures, "The Travels of Marco Polo," inspired generations of explorers.

In 1492 CE, Christopher Columbus sailed from Spain with three ships, hoping to find a shorter route to the silk and spices of Asia. Instead, he landed in the Caribbean, reaching the island of Cuba. Columbus never realised he had found a new continent — he believed until his death that he had reached Asia.

Ferdinand Magellan led an expedition that crossed the Pacific Ocean and reached the Philippines in 1521 CE. Although Magellan was killed in a battle there, one of his ships eventually completed the first circumnavigation of the globe, proving that the Earth was indeed round and that the oceans were connected.

Other important explorers included Bartolomeu Dias, who rounded the southern tip of Africa in 1487 CE, and Vasco da Gama, who sailed from Portugal to India in 1497 CE, opening a direct sea route to the East.

The Age of Discovery made Europe a global power. European nations established colonies around the world, which brought wealth and influence but also led to the exploitation and suffering of indigenous peoples. The Age of Discovery changed the world forever, connecting continents and cultures in ways that had never been done before.`,
    reading1Time: 8,
    kwlExplanation: KWL_EXPLANATION,
    discussionQuestions: [
      'What made people want to explore the unknown?',
      'What was the impact of the Age of Discovery on both Europeans and indigenous peoples?',
      'How did the Renaissance contribute to the Age of Discovery?',
      'Was trade or force more effective for obtaining resources from other lands?',
      'How might history have been different if the Vikings\' settlements in North America had survived?',
    ],
    keyFacts: [
      'European maps before the 14th century were inaccurate',
      'Vikings reached Greenland and Canada around 1000 CE',
      'Columbus sailed from Spain to Cuba in 1492 CE',
      'Magellan crossed the Pacific and reached the Philippines in 1521 CE',
      'The Age of Discovery made Europe a global power',
      'Explorers established colonies worldwide, which brought wealth but also exploitation',
    ],
    visualType: 'map',
    visualData: {
      markers: [
        { name: 'Greenland/Canada', desc: 'Vikings ~1000 CE', lat: 64.0, lng: -51.0, color: '#722F37' },
        { name: 'Caribbean/Cuba', desc: 'Columbus 1492 CE', lat: 22.0, lng: -79.5, color: '#D4AF37' },
        { name: 'Philippines', desc: 'Magellan 1521 CE', lat: 12.0, lng: 122.0, color: '#047857' },
        { name: 'South Africa', desc: 'Dias 1487 CE', lat: -33.0, lng: 18.0, color: '#7C3AED' },
        { name: 'India', desc: 'Vasco da Gama 1497 CE', lat: 15.0, lng: 74.0, color: '#D97706' },
      ],
    },
    quizQuestions: [
      { id: 'u6l3q1', question: 'Who reached North America nearly 500 years before Columbus?', options: ['Marco Polo', 'The Vikings', 'Magellan', 'Vasco da Gama'], correctAnswer: 1, explanation: 'The Vikings reached Greenland and possibly Canada around 1000 CE, nearly 500 years before Columbus sailed in 1492.' },
      { id: 'u6l3q2', question: 'What was Columbus looking for when he sailed in 1492?', options: ['A new continent', 'A shorter route to the silk and spices of Asia', 'The Vikings\' settlement', 'A route around Africa'], correctAnswer: 1, explanation: 'Columbus was looking for a shorter route to the silk and spices of Asia. He accidentally reached the Caribbean instead.' },
      { id: 'u6l3q3', question: 'What did Magellan\'s expedition prove?', options: ['The Earth was flat', 'The Earth was round and the oceans were connected', 'Asia could not be reached by sea', 'There were no more lands to discover'], correctAnswer: 1, explanation: 'Magellan\'s expedition resulted in the first circumnavigation of the globe, proving that the Earth was round and the oceans were connected.' },
      { id: 'u6l3q4', question: 'Who rounded the southern tip of Africa in 1487?', options: ['Columbus', 'Vasco da Gama', 'Bartolomeu Dias', 'Marco Polo'], correctAnswer: 2, explanation: 'Bartolomeu Dias rounded the southern tip of Africa in 1487 CE, opening the way for a sea route to the East.' },
      { id: 'u6l3q5', question: 'What was a major consequence of the Age of Discovery?', options: ['Europe became isolated', 'Europe became a global power through colonisation', 'All cultures remained separate', 'Trade stopped completely'], correctAnswer: 1, explanation: 'The Age of Discovery made Europe a global power. European nations established colonies around the world, bringing wealth and influence but also exploitation of indigenous peoples.' },
    ],
    interactiveStrategies: [
      { strategy: 'Think-Pair-Share', description: 'Discuss the motivations behind exploration', duration: 5, instructions: 'Think about why explorers risked their lives to travel into the unknown. Share with your partner: Were they motivated by curiosity, greed, or something else? Would you have wanted to be an explorer?' },
      { strategy: 'Concept Mapping', description: 'Map the connections between Renaissance ideas and exploration', duration: 7, instructions: 'Create a concept map showing how the Renaissance led to the Age of Discovery. Include: new navigation tools, curiosity about the world, desire for trade, and the printing press spreading knowledge.' },
      { strategy: 'Role Playing', description: 'Take on the role of a famous explorer', duration: 7, instructions: 'Choose an explorer (Columbus, Magellan, Dias, or da Gama). Role-play a conversation between the explorer and their crew on the eve of a major voyage. What are your hopes and fears?' },
    ],
  },

  // Lesson 4: The Fur and Spice Trades
  {
    lessonId: 'G6_T2_Unit 6_l4',
    keyVocabulary: ['commodity', 'voyage', 'route', 'fur', 'obsessed', 'violate', 'appreciate'],
    reading1Title: 'The Fur and Spice Trades',
    reading1Content: `In the centuries following the Age of Discovery, two types of goods drove global trade more than any others: furs and spices. These commodities — goods that could be bought and sold — shaped the course of history and connected continents.

The Fur Trade
The fur trade began in North America in the 16th century. French and English explorers arrived on the eastern coast of North America and discovered that the land was rich in fur-bearing animals, especially beavers and otters. The native peoples had been hunting these animals for centuries, using their fur for warmth and their meat for food.

The European traders offered the native peoples manufactured goods in exchange for animal furs. Knives, weapons, metal tools, cloth, and beads were all traded for beaver and otter pelts. This trade relationship was mutually beneficial at first, but over time it became exploitative as Europeans took more and more land and resources.

Beaver fur became incredibly fashionable in Europe. Beaver fur coats and hats were so popular that the demand nearly drove the beaver to extinction in some areas. The obsession with beaver fur led to intense competition between French and English traders, and this competition eventually contributed to conflicts between the two nations.

The Spice Trade
While furs were the commodity of the cold north, spices were the treasure of the tropics. Nutmeg, cloves, pepper, cinnamon, and ginger — these aromatic spices were worth more than their weight in gold in European markets.

Most spices came from India and the islands of Indonesia, which Europeans called the "Spice Islands." The overland trade routes through the Middle East were controlled by Arab and Ottoman merchants, who added significant markups to the prices. European traders were desperate to find sea routes directly to the spice-producing regions.

In 1498 CE, the Portuguese explorer Vasco da Gama sailed around the southern tip of Africa and reached India, establishing the first direct sea route from Europe to the spice markets. This voyage changed the world — it meant that European traders could buy spices directly from the source, bypassing the overland middlemen.

Christopher Columbus had been trying to find a shorter western route to Southeast Asia's spice markets when he accidentally reached the Americas in 1492 CE. His "discovery" of a new continent was an unintended consequence of the European obsession with spices.

Knowing that spices are hand-picked by farmers in distant lands makes us appreciate them more. Each peppercorn, each cinnamon stick, has a story of journey, labour, and trade behind it.`,
    reading1Time: 7,
    kwlExplanation: KWL_EXPLANATION,
    discussionQuestions: [
      'How did the fur and spice trades affect the economies of different regions?',
      'How did the fur trade affect native peoples in North America?',
      'What spices come from where, and why were they so valuable?',
      'How does knowing that spices are hand-picked make you feel about them?',
      'What were the positive and negative consequences of global trade?',
    ],
    keyFacts: [
      'The fur trade began in North America in the 16th century',
      'Natives traded animal furs (beaver, otter) for European goods (knives, weapons)',
      'Beaver fur became very fashionable in Europe, nearly driving beavers to extinction',
      'Spices (nutmeg, cloves, pepper, cinnamon, ginger) came from India and Indonesia',
      'Vasco da Gama reached India in 1498 CE, establishing the first direct sea route',
      'Columbus accidentally reached the Americas while looking for a shorter spice route',
    ],
    visualType: 'map',
    visualData: {
      markers: [
        { name: 'Canada/North America', desc: 'Fur trade — beaver, otter', lat: 56.0, lng: -106.0, color: '#722F37' },
        { name: 'India (Pepper & Ginger)', desc: 'Spice trade hub', lat: 20.0, lng: 77.0, color: '#D4AF37' },
        { name: 'Indonesia (Nutmeg & Cinnamon)', desc: 'Spice Islands', lat: -2.5, lng: 118.0, color: '#047857' },
      ],
    },
    quizQuestions: [
      { id: 'u6l4q1', question: 'When did the fur trade begin in North America?', options: ['14th century', '15th century', '16th century', '17th century'], correctAnswer: 2, explanation: 'The fur trade began in North America in the 16th century, when French and English explorers started trading with native peoples.' },
      { id: 'u6l4q2', question: 'What animal\'s fur became incredibly fashionable in Europe?', options: ['Fox', 'Wolf', 'Beaver', 'Rabbit'], correctAnswer: 2, explanation: 'Beaver fur became incredibly fashionable in Europe, with coats and hats being so popular that demand nearly drove the beaver to extinction in some areas.' },
      { id: 'u6l4q3', question: 'When did Vasco da Gama reach India?', options: ['1492 CE', '1498 CE', '1500 CE', '1521 CE'], correctAnswer: 1, explanation: 'Vasco da Gama reached India in 1498 CE, establishing the first direct sea route from Europe to the spice markets.' },
      { id: 'u6l4q4', question: 'Why was Columbus looking for a western route to Asia?', options: ['He wanted to discover America', 'He was looking for a shorter route to the spice markets of Southeast Asia', 'He wanted to avoid the Vikings', 'He was trying to reach Africa'], correctAnswer: 1, explanation: 'Columbus was trying to find a shorter western route to Southeast Asia\'s spice markets when he accidentally reached the Americas in 1492 CE.' },
      { id: 'u6l4q5', question: 'What is a commodity?', options: ['A type of ship', 'A good that can be bought and sold', 'A piece of land', 'A form of currency'], correctAnswer: 1, explanation: 'A commodity is a good that can be bought and sold. Furs and spices were two of the most important commodities in global trade.' },
    ],
    interactiveStrategies: [
      { strategy: 'Think-Pair-Share', description: 'Discuss the impact of trade on different peoples', duration: 5, instructions: 'Think about how the fur and spice trades affected both the traders and the native peoples. Share with your partner: Who benefited most? Who was harmed? How could trade have been made fairer?' },
      { strategy: 'Problem-Based Learning', description: 'Design a fair trade agreement between explorers and native peoples', duration: 8, instructions: 'You are a negotiator between European traders and native peoples. Design a fair trade agreement for furs. What rules would you set? How would you ensure both sides benefit? Present your agreement.' },
      { strategy: 'Content Recall', description: 'List key facts about the fur and spice trades from memory', duration: 3, instructions: 'Without looking at your notes, write down 3 facts about the fur trade and 3 facts about the spice trade. Share with your partner.' },
    ],
  },

  // Lesson 5: Gold
  {
    lessonId: 'G6_T2_Unit 6_l5',
    keyVocabulary: ['symbol', 'currency', 'commerce', 'mine', 'stamp', 'uniformly', 'genuine', 'in circulation'],
    reading1Title: 'Gold',
    reading1Content: `Gold has been a symbol of wealth and power throughout human history. Its beauty, rarity, and durability have made it one of the most valued substances on Earth. But gold's role as money — as currency — has a fascinating and sometimes problematic history.

The earliest known use of gold as money dates back to around 4000 BCE, when the ancient Egyptians made gold bars for trade. These bars were heavy and difficult to carry, so people eventually began making gold coins, which were smaller, lighter, and easier to use in everyday transactions.

However, gold coins had a significant problem: they could be devalued. Devaluing means reducing the actual gold content of a coin while keeping its face value the same. Some unscrupulous people would shave off small amounts of gold from the edges of coins, or mix gold with cheaper metals like copper, creating gold-coloured coins that contained less real gold than they appeared to. This made it difficult for people to trust that a coin was genuinely worth its stated value.

The solution to this problem was to stamp coins with the king's face or a royal seal. When a coin bore the king's stamp, it was a guarantee that the coin contained the correct amount of gold. Anyone caught making counterfeit coins could be severely punished. This system helped restore trust in currency.

In England, the problem of devalued coins reached its worst point in the 1540s CE. Coins had been so heavily debased that people lost faith in the currency altogether. In 1560 CE, Queen Elizabeth I took decisive action. She revalued all the coins, removing the debased currency from circulation and replacing it with coins that contained the correct amount of precious metal. She also punished counterfeiters harshly, which helped restore confidence in English currency.

Paper money was first used in China around 618 CE during the Tang Dynasty. It was an innovative idea — instead of carrying heavy coins, people could carry lightweight paper notes that represented a certain amount of money. The concept was tried in Persia in 1294 CE, but it failed because people did not trust paper as a store of value.

Europeans were also suspicious of paper money and did not accept it until the mid-1800s. The idea that a piece of paper could represent real wealth seemed strange and unreliable. It took centuries for paper money to gain widespread acceptance, but today it is the most common form of currency in the world.`,
    reading1Time: 8,
    kwlExplanation: KWL_EXPLANATION,
    discussionQuestions: [
      'How can gold as currency cause problems?',
      'How can the value of currency be protected?',
      'What are the advantages and disadvantages of gold versus paper money?',
      'What unusual objects have been used as money throughout history?',
      'Why did it take so long for paper money to be accepted in Europe?',
    ],
    keyFacts: [
      'Egyptians used gold bars as money around 4000 BCE',
      'Gold coins could be "devalued" with less gold content than their face value suggested',
      'Stamping coins with the king\'s face helped verify authenticity and prevent counterfeiting',
      'Queen Elizabeth I revalued coins and punished counterfeiters in 1560 CE',
      'Paper money was first used in China around 618 CE',
      'Paper money was tried in Persia in 1294 CE but failed',
      'Europeans didn\'t accept paper money until the mid-1800s',
    ],
    visualType: 'timeline',
    visualData: {
      title: 'History of Currency',
      events: [
        { year: '4000 BCE', event: 'Egyptians make gold bars for money' },
        { year: '618 CE', event: 'Paper money first used in China' },
        { year: '1294 CE', event: 'Paper money tried in Persia — fails' },
        { year: '1540s CE', event: 'Devaluing of coins at its worst' },
        { year: '1560 CE', event: 'Queen Elizabeth I reforms British currency' },
        { year: 'Mid-1800s', event: 'Europeans finally accept paper money' },
      ],
    },
    quizQuestions: [
      { id: 'u6l5q1', question: 'When did the Egyptians first use gold bars as money?', options: ['Around 2000 BCE', 'Around 4000 BCE', 'Around 1000 BCE', 'Around 500 BCE'], correctAnswer: 1, explanation: 'The ancient Egyptians made gold bars for trade around 4000 BCE, making it one of the earliest known uses of gold as money.' },
      { id: 'u6l5q2', question: 'What does "devaluing" a coin mean?', options: ['Making the coin heavier', 'Reducing the actual gold content while keeping the face value the same', 'Adding more gold to a coin', 'Destroying a coin'], correctAnswer: 1, explanation: 'Devaluing means reducing the actual gold content of a coin while keeping its face value the same, making it worth less than it appears.' },
      { id: 'u6l5q3', question: 'How did stamping coins with the king\'s face help?', options: ['It made coins look prettier', 'It guaranteed the coin contained the correct amount of gold', 'It made coins heavier', 'It allowed coins to be used in more countries'], correctAnswer: 1, explanation: 'When a coin bore the king\'s stamp, it was a guarantee that the coin contained the correct amount of gold, helping prevent counterfeiting and restoring trust.' },
      { id: 'u6l5q4', question: 'When was paper money first used?', options: ['In Egypt around 4000 BCE', 'In China around 618 CE', 'In Persia around 1294 CE', 'In Europe around 1560 CE'], correctAnswer: 1, explanation: 'Paper money was first used in China around 618 CE during the Tang Dynasty.' },
      { id: 'u6l5q5', question: 'What did Queen Elizabeth I do in 1560 CE?', options: ['Invented paper money', 'Revalued coins and punished counterfeiters to restore confidence in currency', 'Banned the use of gold', 'Started the first bank'], correctAnswer: 1, explanation: 'In 1560 CE, Queen Elizabeth I revalued all coins, removed debased currency from circulation, and punished counterfeiters to restore confidence in English currency.' },
    ],
    interactiveStrategies: [
      { strategy: 'Problem-Based Learning', description: 'Design a new currency system for a fictional country', duration: 8, instructions: 'You are the leader of a new country. Design a currency system: What will your money be made of? How will you prevent counterfeiting? How will people trust its value? Present your system.' },
      { strategy: 'Concept Mapping', description: 'Map the evolution of currency from gold to paper to digital', duration: 7, instructions: 'Create a concept map showing the evolution of currency. Include: gold bars, gold coins, stamped coins, paper money, and digital payments. For each, note one advantage and one disadvantage.' },
      { strategy: 'Content Recall', description: 'List the key milestones in the history of currency from memory', duration: 3, instructions: 'Without looking at your notes, list the major milestones in the history of currency in chronological order. Share with your partner.' },
    ],
  },

  // Lesson 6: The Age of Sail
  {
    lessonId: 'G6_T2_Unit 6_l6',
    keyVocabulary: ['merchant', 'invoice', 'customs', 'port', 'sail', 'deck', 'mend', 'biscuit', 'high seas'],
    reading1Title: 'The Age of Sail',
    reading1Content: `During the Age of Sail, merchant and navy ships sailed the world's oceans, carrying goods, people, and ideas between continents. Life at sea was challenging, dangerous, and required discipline and teamwork.

The most important person on any ship was the shipmaster (also called the captain). The shipmaster made all decisions — where to sail, when to change course, how to respond to weather, and how to handle emergencies. His word was law on board, and disobeying the shipmaster could result in severe punishment.

Next in command was the first mate (also called the chief officer). The first mate relayed the shipmaster's orders to the crew and was responsible for the day-to-day running of the ship. If the shipmaster was injured or killed, the first mate would take command.

The crew was responsible for the physical work of sailing the ship. They rowed the ship's boats when entering or leaving port, steered the ship using the tiller or wheel, kept watch for other ships and land, and handled the sails and rigging. Crew members worked in shifts, called watches, and had to be alert and ready at all times.

There was also a group of sailors known as "idlers" — but this didn't mean they were lazy! Idlers were the specialist workers on the ship: the carpenter, who repaired the wooden hull and masts; the sailmaker, who mended and made new sails; and the cook, who prepared meals for the entire crew. They were called idlers because they didn't stand regular watches, but their skills were essential.

The crew slept in hammocks in the forecastle — the raised area at the front of the ship. Conditions were cramped, damp, and uncomfortable. The food had to last for months without spoiling. Typical meals included hard biscuits (often infested with weevils), dried beans, rice, salted meat, and dried fish. Fresh food was a luxury that sailors only enjoyed when they made port.

The greatest dangers at sea were pirates and privateers. Pirates were criminals who attacked ships to steal their cargo and valuables. Privateers, on the other hand, were government-hired attackers who were authorised to raid the ships of enemy nations. The line between piracy and privateering was often blurry.

Three main types of ships sailed during the Age of Sail: the galleon (a large, heavily armed ship used for trade and war), the frigate (a fast, medium-sized warship), and the galley (a ship powered mainly by oars, used in the Mediterranean).`,
    reading1Time: 8,
    kwlExplanation: KWL_EXPLANATION,
    discussionQuestions: [
      'What was daily life like for sailors during the Age of Sail?',
      'What were the different jobs and duties on a sailing ship?',
      'What were the main dangers faced by sailors at sea?',
      'Why was healthy eating and hygiene important at sea?',
      'How did the Age of Sail connect different parts of the world?',
    ],
    keyFacts: [
      'The shipmaster made all decisions on board and his word was law',
      'The first mate relayed orders to the crew and managed day-to-day operations',
      'Crew slept on hammocks in the forecastle at the front of the ship',
      'Food had to last without spoiling — hard biscuits, salted meat, rice, and beans',
      'Pirates and privateers attacked trading ships; privateers were government-hired',
      'Three ship types: galleon (large, armed), frigate (fast warship), and galley (oar-powered)',
    ],
    visualType: 'diagram',
    visualData: {
      title: 'Ship Crew Hierarchy',
      items: ['Shipmaster (All decisions)', 'First Mate (Relays orders)', 'Crew (Row, steer, watch)', 'Idlers (Carpenter, Sailmaker, Cook)', 'Crew Quarters (Forecastle)'],
    },
    quizQuestions: [
      { id: 'u6l6q1', question: 'Who was the most important person on a sailing ship?', options: ['The cook', 'The first mate', 'The shipmaster (captain)', 'The carpenter'], correctAnswer: 2, explanation: 'The shipmaster was the most important person on board, making all decisions about navigation, course, and emergencies. His word was law.' },
      { id: 'u6l6q2', question: 'What were "idlers" on a sailing ship?', options: ['Lazy crew members', 'Specialist workers like the carpenter, sailmaker, and cook', 'Passengers', 'Pirates in disguise'], correctAnswer: 1, explanation: 'Idlers were specialist workers — the carpenter, sailmaker, and cook. They were called idlers because they didn\'t stand regular watches, but their skills were essential.' },
      { id: 'u6l6q3', question: 'Where did the crew sleep on a sailing ship?', options: ['In private cabins', 'In hammocks in the forecastle', 'On the open deck', 'Below the cargo hold'], correctAnswer: 1, explanation: 'The crew slept in hammocks in the forecastle — the raised area at the front of the ship. Conditions were cramped, damp, and uncomfortable.' },
      { id: 'u6l6q4', question: 'What is the difference between a pirate and a privateer?', options: ['There is no difference', 'Pirates were criminals; privateers were government-hired attackers authorised to raid enemy ships', 'Privateers were more dangerous', 'Pirates worked for the government'], correctAnswer: 1, explanation: 'Pirates were criminals who attacked ships for personal gain. Privateers were government-hired attackers authorised to raid the ships of enemy nations.' },
      { id: 'u6l6q5', question: 'What type of ship was a galleon?', options: ['A small, fast boat', 'A large, heavily armed ship used for trade and war', 'An oar-powered ship', 'A fishing vessel'], correctAnswer: 1, explanation: 'A galleon was a large, heavily armed ship used for both trade and warfare during the Age of Sail.' },
    ],
    interactiveStrategies: [
      { strategy: 'Role Playing', description: 'Take on the roles of different crew members on a sailing ship', duration: 7, instructions: 'Each group member chooses a crew role: shipmaster, first mate, crew member, carpenter, or cook. Role-play a day at sea: What decisions does each person make? What challenges do you face? Work together to solve a problem (e.g., a storm is approaching).' },
      { strategy: 'Collaborative Work', description: 'Create a daily schedule for a sailing ship crew', duration: 6, instructions: 'In groups of 4, create a 24-hour schedule for a sailing ship crew. Include watches, meals, work duties, and rest time. Present your schedule and explain why you organised it this way.' },
      { strategy: 'Content Recall', description: 'List the crew hierarchy and three ship types from memory', duration: 3, instructions: 'Without looking at your notes, list the ship crew hierarchy from top to bottom, and name the three types of sailing ships. Share with your partner.' },
    ],
  },

  // Lesson 7: The East India and Hudson's Bay Companies
  {
    lessonId: 'G6_T2_Unit 6_l7',
    keyVocabulary: ['peak', 'bullion', 'fertilizer', 'monopoly', 'trading post', 'charter', 'retail'],
    reading1Title: 'The East India and Hudson\'s Bay Companies',
    reading1Content: `Two of the most powerful trading companies in history were the East India Company and the Hudson's Bay Company. These companies changed the world through trade, colonisation, and the development of new business models.

The East India Company
The East India Company began in 1599 CE when a group of English merchants formed an association to trade with the East Indies (South and Southeast Asia). In 1600 CE, Queen Elizabeth I signed a royal charter giving the company a monopoly — exclusive rights — to trade with the East.

The East India Company was the first European joint-stock company. In a joint-stock company, investors buy shares in the company and receive a portion of the profits based on how many shares they own. This was a revolutionary idea because it allowed many people to pool their money for expensive trading expeditions, sharing both the risks and the rewards.

The company traded cotton, silk, saltpeter (used for making gunpowder and as fertilizer), and tea. At its peak, the East India Company controlled nearly half of the world's trade. It had its own army, its own currency, and its own legal system. In many ways, it was more powerful than the governments of the countries where it operated.

The company's influence on India was enormous and controversial. While it brought new goods and technologies, it also exploited India's resources and people. The company's actions contributed to famines, economic hardship, and political instability. Eventually, the British government stepped in and took direct control of India from the company in 1858 CE.

The East India Company was officially closed in 1874 CE after more than 270 years of operation.

The Hudson's Bay Company
The Hudson's Bay Company was formed in 1670 CE, when King Charles II of England granted a charter giving the company rights to a vast area of land in what is now Canada. The company's original purpose was to find the Northwest Passage — a sea route through the Arctic to Asia — but it quickly became focused on the fur trade.

The company established trading posts across the Canadian wilderness, where native peoples would bring animal furs to trade for European goods. These trading posts became important centres of commerce and communication.

Remarkably, the Hudson's Bay Company still exists today as a retail department store in Canada. It is the oldest company in Canadian history and one of the oldest companies in the world. From its origins as a fur trading enterprise, it has evolved into a modern retail business — a testament to its ability to adapt and survive over more than 350 years.`,
    reading1Time: 8,
    kwlExplanation: KWL_EXPLANATION,
    discussionQuestions: [
      'How does a joint-stock company function, and why was it revolutionary?',
      'Why is investment important for business ventures?',
      'How do companies decide on pricing for their goods?',
      'What was the political impact of the East India Company on India?',
      'How has the Hudson\'s Bay Company survived for over 350 years?',
    ],
    keyFacts: [
      'The East India Company began in 1599 CE',
      'It was the first European joint-stock company',
      'Queen Elizabeth I signed a charter giving the company a monopoly on Eastern trade',
      'At its peak, the East India Company controlled nearly half of the world\'s trade',
      'The company was closed in 1874 CE after over 270 years',
      'The Hudson\'s Bay Company was formed in 1670 CE',
      'The Hudson\'s Bay Company still exists as a retail store — the oldest company in Canadian history',
    ],
    visualType: 'chart',
    visualData: {
      title: "Comparison: East India vs Hudson's Bay",
      items: [
        { label: 'Founded', value: 1599, description: 'East India: 1599 CE | Hudson Bay: 1670 CE' },
        { label: 'Peak Trade Power', value: 90, description: 'East India controlled ~50% of world trade' },
        { label: 'Duration (years)', value: 75, description: 'East India: 1599-1874 (275 yrs) | Hudson Bay: 1670-present (350+ yrs)' },
        { label: 'Still Exists', value: 50, description: 'Only Hudson Bay still operates' },
        { label: 'Joint-Stock Innovation', value: 95, description: 'East India was first European joint-stock company' },
      ],
    },
    quizQuestions: [
      { id: 'u6l7q1', question: 'What was revolutionary about the East India Company?', options: ['It was the largest ship builder', 'It was the first European joint-stock company', 'It only traded in gold', 'It had no investors'], correctAnswer: 1, explanation: 'The East India Company was the first European joint-stock company, allowing many investors to pool their money and share both risks and rewards.' },
      { id: 'u6l7q2', question: 'What did Queen Elizabeth I give the East India Company?', options: ['A fleet of ships', 'A royal charter giving it a monopoly on Eastern trade', 'Land in India', 'Gold bullion'], correctAnswer: 1, explanation: 'Queen Elizabeth I signed a royal charter giving the East India Company a monopoly — exclusive rights — to trade with the East.' },
      { id: 'u6l7q3', question: 'At its peak, how much of the world\'s trade did the East India Company control?', options: ['About 10%', 'About 25%', 'Nearly half', 'About 75%'], correctAnswer: 2, explanation: 'At its peak, the East India Company controlled nearly half of the world\'s trade, making it extraordinarily powerful.' },
      { id: 'u6l7q4', question: 'When was the Hudson\'s Bay Company formed?', options: ['1599 CE', '1600 CE', '1670 CE', '1874 CE'], correctAnswer: 2, explanation: 'The Hudson\'s Bay Company was formed in 1670 CE, when King Charles II granted it rights to a vast area of land in Canada.' },
      { id: 'u6l7q5', question: 'What is the Hudson\'s Bay Company today?', options: ['A museum', 'A shipping company', 'A retail department store', 'It closed in 1874'], correctAnswer: 2, explanation: 'The Hudson\'s Bay Company still exists today as a retail department store in Canada, making it the oldest company in Canadian history at over 350 years old.' },
    ],
    interactiveStrategies: [
      { strategy: 'Problem-Based Learning', description: 'Design your own juice company using the joint-stock model', duration: 8, instructions: 'Design a juice company using the joint-stock model. Decide: What will you sell? How many shares will you issue? How will you attract investors? How will you set prices? Present your business plan to the class.' },
      { strategy: 'Collaborative Work', description: 'Create an investor pitch for a trading company', duration: 7, instructions: 'In groups of 4, create a pitch to attract investors for a new trading company. Explain what goods you\'ll trade, what route you\'ll take, what risks investors face, and what profits they can expect. Present your pitch.' },
      { strategy: 'Content Recall', description: 'Compare the two companies from memory', duration: 3, instructions: 'Without looking at your notes, write down two similarities and two differences between the East India Company and the Hudson\'s Bay Company. Share with your partner.' },
    ],
  },
];

// ═══════════════════════════════════════════════════════════════
// AGGREGATE: All G6T2 content indexed by lessonId
// ═══════════════════════════════════════════════════════════════

const allG6T2Content: LessonContent[] = [...g6t2Unit4, ...g6t2Unit5, ...g6t2Unit6];

export const g6t2ContentMap: Record<string, LessonContent> = {};
for (const lesson of allG6T2Content) {
  g6t2ContentMap[lesson.lessonId] = lesson;
}

export function getG6T2LessonContent(lessonId: string): LessonContent | null {
  return g6t2ContentMap[lessonId] || null;
}

export function getAllG6T2Content(): Record<string, LessonContent> {
  return g6t2ContentMap;
}
