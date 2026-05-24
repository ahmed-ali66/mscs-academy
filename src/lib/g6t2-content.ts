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
// UNIT 4: RESPECT AND TOLERANCE IN A DIVERSE COMMUNITY (5 lessons)
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

  // Lesson 2: How Tolerance Appears in Society
  {
    lessonId: 'G6_T2_Unit 4_l2',
    keyVocabulary: ['diversity', 'snap judgment', 'multiple perspectives', 'policy'],
    reading1Title: 'The Boots',
    reading1Content: `Khaled wasn't listening to the teacher. He was staring at his new trainers. They were bright and clean and shiny and brand new, and he was very proud of them. The teacher was talking about something important, but Khaled couldn't take his eyes off his shoes. Then the teacher asked Khaled a question, and he had to admit he hadn't been listening.

After class, Khaled noticed a boy he had never seen before. His name was Abdallah, and he was new to the school. Khaled immediately noticed Abdallah's boots — they were dusty, old and worn. Khaled made a snap judgment. He thought that Abdallah must be poor and not very interesting. He decided he didn't want to be friends with someone who wore such dusty boots.

A few days later, the teacher asked Khaled and Abdallah to work together on a project. Khaled was not happy about this at all. But as they started working, Abdallah turned out to be very knowledgeable and hardworking. Khaled was surprised.

Then one day, Khaled found out the truth. Abdallah lived very far from school and had to walk a long distance every day through dusty roads to get to class. That was why his boots were always dusty. In fact, Abdallah walked for nearly an hour each way because his family could not afford a car, but he never missed a day of school.

Khaled felt a strange discomfort. He realised that he had judged Abdallah by his boots without knowing anything about him. He had made a snap judgment based on appearances alone. From that day on, Khaled and Abdallah became good friends, and Khaled learned never to judge people by how they look on the outside.`,
    reading2Title: 'Diversity in UAE Schools',
    reading2Content: `The UAE recognises the importance of preparing students for diversity. In a country where over 200 nationalities live side by side, schools play a vital role in teaching young people how to interact with others who come from different backgrounds and cultures.

A representative from the UAE Ministry of Education said: "Our students need to be prepared to work with people from different parts of the world who bring multiple perspectives. This diversity is not a challenge — it is an opportunity. When students learn to appreciate different viewpoints, they become better problem-solvers and more creative thinkers."

UAE schools bring together students from many different countries, cultures, and backgrounds. This diversity in the classroom mirrors the diversity of the wider UAE society. Students who grow up learning alongside classmates from different cultures develop skills that will help them throughout their lives — empathy, open-mindedness, and the ability to see things from multiple perspectives.

The UAE's commitment to diversity in education reflects a broader national vision. As the country continues to grow as a global hub, the ability to work effectively with people from different backgrounds will be one of the most important skills that young Emiratis can develop.`,
    reading1Time: 7,
    reading2Time: 3,
    kwlExplanation: KWL_EXPLANATION,
    discussionQuestions: [
      'Why did Khaled think shoes were so important?',
      'What was Khaled\'s first impression of Abdallah, and why was it wrong?',
      'Why did Khaled make a snap judgment?',
      'What does "Khaled felt a strange discomfort" mean?',
      'How does experiencing diversity at a young age affect being a global citizen?',
    ],
    keyFacts: [
      'Africa has nearly 1,500 languages — the most linguistically diverse continent on Earth',
      'Snap judgments are made without thinking and are often based on appearances',
      'Over 4,500 types of potatoes exist, showing how diverse even a single food can be',
      'The UAE prepares students for diverse workplaces by encouraging interaction with people from different cultures',
      'Diversity involves respect for difference and the ability to see things from multiple perspectives',
    ],
    visualType: 'diagram',
    visualData: {
      title: 'Elements of Tolerance',
      items: ['Respecting Differences', 'Avoiding Snap Judgments', 'Multiple Perspectives', 'Active Listening', 'Empathy', 'Open Communication'],
    },
    quizQuestions: [
      { id: 'u4l2q1', question: 'What is a snap judgment?', options: ['A careful, thoughtful decision', 'A quick opinion formed without thinking or knowing the facts', 'A judgment made after research', 'A decision made by a group'], correctAnswer: 1, explanation: 'A snap judgment is a quick opinion formed without thinking, often based on appearances alone rather than facts or understanding.' },
      { id: 'u4l2q2', question: 'Why were Abdallah\'s boots always dusty?', options: ['He didn\'t care about his appearance', 'He had to walk a long distance through dusty roads to get to school', 'He worked in a construction site', 'He played in the dirt during break'], correctAnswer: 1, explanation: 'Abdallah lived far from school and walked through dusty roads every day. His dusty boots were a sign of his determination, not neglect.' },
      { id: 'u4l2q3', question: 'Which continent has the most languages — nearly 1,500?', options: ['Asia', 'Europe', 'Africa', 'South America'], correctAnswer: 2, explanation: 'Africa has nearly 1,500 languages, making it the most linguistically diverse continent on Earth.' },
      { id: 'u4l2q4', question: 'What did Khaled learn from his experience with Abdallah?', options: ['That new trainers are important', 'Never to judge people by their appearance', 'That walking to school is easy', 'That dusty boots mean someone is lazy'], correctAnswer: 1, explanation: 'Khaled learned that he should never judge people by how they look on the outside — appearances can be misleading and snap judgments are often wrong.' },
      { id: 'u4l2q5', question: 'How does the UAE view diversity in schools?', options: ['As a problem to be solved', 'As an opportunity that prepares students for a globalised world', 'As something to avoid', 'As unimportant to education'], correctAnswer: 1, explanation: 'The UAE views diversity as an opportunity. When students learn to appreciate different viewpoints, they become better problem-solvers and more creative thinkers.' },
    ],
    interactiveStrategies: [
      { strategy: 'Role Playing', description: 'Act out The Boots story to experience different perspectives', duration: 7, instructions: 'In pairs, role-play the story of The Boots. One student plays Khaled, one plays Abdallah. Act out the moment Khaled learns the truth. How does each character feel? Discuss together.' },
      { strategy: 'Collaborative Work', description: 'Reflect on the potato diversity activity', duration: 6, instructions: 'In groups of 4, discuss: If there are 4,500 types of potatoes, how many types of people must there be? Each person shares one way diversity makes our community stronger. Write your group\'s top 3 ideas.' },
      { strategy: 'Content Recall', description: 'List the elements of tolerance from memory', duration: 3, instructions: 'Without looking at your notes, list as many elements of tolerance as you can remember on your index card. Share with your partner.' },
    ],
  },

  // Lesson 3: Exploring Our Own Beliefs and Attitudes
  {
    lessonId: 'G6_T2_Unit 4_l3',
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

  // Lesson 4: Recognising Prejudice in Society
  {
    lessonId: 'G6_T2_Unit 4_l4',
    keyVocabulary: ['prejudice', 'sympathise'],
    reading1Title: 'The History of Prejudice',
    reading1Content: `Long ago, people lived in small communities and rarely travelled beyond their own villages or towns. There were no cars, trains, or aeroplanes. Most people stayed where they were born and rarely met anyone from outside their community. When strangers did appear, they were often feared and mistrusted. People assumed that anyone who looked different, spoke a different language, or followed different customs must be dangerous.

This fear of the unknown led to prejudice. Prejudice means pre-judging — forming an opinion about someone before you know anything about them, based only on their appearance, background, or group. In those days, prejudice was common because people simply had no opportunity to get to know those who were different from them.

Over time, things began to change. The invention of modern transport — ships, trains, and eventually aeroplanes — made it possible for people to travel and meet others from different communities. The development of mass media — newspapers, radio, television, and eventually the internet — allowed people to learn about cultures and societies far from their own. These developments helped people understand that those who are different are not necessarily dangerous. Never before have people from all over the world been so close.

However, prejudice still exists today. Even though we have more opportunities to learn about others, many people still form opinions about entire groups based on limited information or the opinions of others. Recognising prejudice is the first step towards overcoming it. When we understand that our prejudgments are based on fear rather than facts, we can choose to replace them with understanding and empathy.`,
    reading2Title: 'Jack and the Uncle\'s Opinion',
    reading2Content: `When I was young, my uncle always told me that Americans were arrogant and unfriendly. He had never actually met an American, but he had seen some television programmes and read some articles that portrayed Americans this way. Because I respected my uncle, I believed what he told me. I formed a prejudiced view of Americans without ever having spoken to one.

Then one day, a new boy joined our school. His name was Jack, and he was from America. At first, I didn't want anything to do with him. My uncle's words echoed in my head — "Americans are arrogant and unfriendly." But our teacher paired us together for a science project, and I had no choice but to work with Jack.

To my surprise, Jack was nothing like my uncle had described. He was kind, funny, and genuinely interested in learning about my culture. He asked questions about our traditions and shared stories about his own life in America. As we spent more time together, we discovered that we had a lot in common — we both loved football, we both enjoyed reading adventure stories, and we both worried about our exams.

Jack and I became best friends. Through our friendship, I realised how wrong my uncle's opinion had been. He had formed a prejudice based on limited information, and I had accepted it without question. I learned a valuable lesson: we should judge people after we get to know them, not before.

These days when I meet new people, I try to judge them after I get to know them, not before. I learned that prejudice is like a wall that keeps us from seeing the truth about people. When we tear down that wall, we open ourselves to wonderful friendships and experiences.`,
    reading1Time: 6,
    reading2Time: 5,
    kwlExplanation: KWL_EXPLANATION,
    discussionQuestions: [
      'Why were people afraid of strangers long ago?',
      'What might have happened if communities got to know each other instead of fearing each other?',
      'What role does media play in reducing or reinforcing prejudice?',
      'Why did the writer have a prejudiced view of Americans?',
      'What lesson can we learn from believing others\' opinions without questioning them?',
    ],
    keyFacts: [
      'Prejudice comes from fear of the unknown — people pre-judge others before knowing them',
      'Pre-judging means forming opinions without basis in fact',
      'Modern transport and media have helped diverse groups get to know each other',
      'We should judge people after getting to know them, not before',
      'Being a bystander shows apathy, which is the opposite of empathy',
      'Never before have people from all over the world been so close',
    ],
    visualType: 'diagram',
    visualData: {
      title: 'Overcoming Prejudice',
      items: ['Getting to Know Others', 'Challenging Assumptions', 'Seeking Facts', 'Showing Empathy', 'Speaking Up', 'Building Friendships'],
    },
    quizQuestions: [
      { id: 'u4l4q1', question: 'What does prejudice literally mean?', options: ['Being kind to strangers', 'Pre-judging — forming an opinion before knowing the facts', 'Trusting everyone equally', 'Having many friends'], correctAnswer: 1, explanation: 'Prejudice literally means pre-judging — forming an opinion about someone before you know anything about them, based only on their appearance, background, or group.' },
      { id: 'u4l4q2', question: 'Why was prejudice more common in the past?', options: ['People were less intelligent', 'People lived in small communities and rarely met anyone different', 'People did not have emotions', 'People liked being prejudiced'], correctAnswer: 1, explanation: 'In the past, people lived in small communities with limited travel. They rarely met anyone from outside their group, so fear of the unknown led to prejudice.' },
      { id: 'u4l4q3', question: 'What lesson did the writer learn from Jack?', options: ['Never trust Americans', 'Judge people after getting to know them, not before', 'Always believe your family\'s opinions', 'Avoid people who are different'], correctAnswer: 1, explanation: 'The writer learned to judge people after getting to know them, not before. Prejudice based on others\' opinions can prevent us from forming genuine friendships.' },
      { id: 'u4l4q4', question: 'What helped reduce prejudice over time?', options: ['Isolation', 'Modern transport and mass media', 'Ignoring other cultures', 'Staying in one place'], correctAnswer: 1, explanation: 'Modern transport allowed people to travel and meet others, while mass media helped people learn about different cultures. Both developments helped reduce prejudice.' },
      { id: 'u4l4q5', question: 'What is apathy the opposite of?', options: ['Prejudice', 'Empathy', 'Anger', 'Fear'], correctAnswer: 1, explanation: 'Apathy means not caring about others, which is the opposite of empathy (understanding and sharing the feelings of others). Being a bystander shows apathy.' },
    ],
    interactiveStrategies: [
      { strategy: 'Walking Debate', description: 'Vote with your feet — agree or disagree about prejudice statements', duration: 7, instructions: 'The teacher reads statements about prejudice. Stand on the left side if you agree, right if you disagree, middle if unsure. Discuss your position with someone who chose differently. Example: "Prejudice is always intentional."' },
      { strategy: 'Role Playing', description: 'Act out scenarios where prejudice is challenged', duration: 7, instructions: 'In pairs, act out a scenario where one person holds a prejudice and the other challenges it respectfully. Switch roles. Discuss: How did it feel to be on each side?' },
      { strategy: 'Flip Charts', description: 'Create a flip chart showing steps to overcome prejudice', duration: 6, instructions: 'In groups of 4, create a flip chart showing the steps to overcome prejudice. Include: recognising prejudice, seeking facts, showing empathy, and building friendships. Present to the class.' },
    ],
  },

  // Lesson 5: Whole School Approach to Cultural Diversity
  {
    lessonId: 'G6_T2_Unit 4_l5',
    keyVocabulary: ['anti-racism', 'audit'],
    reading1Title: 'One School\'s Diversity Audit',
    reading1Content: `Ibrahim thought there was no diversity in his school. "Everyone seems the same," he told his teacher during a class discussion on cultural diversity. His teacher, Mrs. Al-Mansoori, decided this was the perfect opportunity to conduct a diversity audit.

A diversity audit is an official evaluation that helps a school understand how diverse its community really is. Mrs. Al-Mansoori created a survey for all students to complete. The survey asked about countries of origin, languages spoken at home, cultural traditions, hobbies, and special needs or abilities.

When the results came back, Ibrahim was amazed. There were children from different countries and cultures, children of determination, children with learning difficulties, children who spoke different languages at home, children who followed different religions, children with different talents — from sports to art to science. The school was far more diverse than Ibrahim had ever imagined.

"I was wrong," Ibrahim admitted. "I only saw what was on the surface. When I looked deeper, I realised how diverse our school really is."

The audit led to the creation of the school's first anti-racism charter. An anti-racism charter is a written commitment by the school community to actively oppose discrimination of any kind. It includes promises to treat everyone with respect, to report any incidents of discrimination, and to celebrate the diversity that makes the school special.

The school also started organising multicultural events where students could share their cultural traditions, food, music, and stories. These events helped students appreciate the rich diversity within their school community and understand that diversity is something to be celebrated, not feared.`,
    reading2Title: 'Celebrating Cultural Diversity in a Dubai School',
    reading2Content: `Every year on May 21, the world celebrates the World Day for Cultural Diversity for Dialogue and Development. This day was established by the United Nations to promote understanding and respect for cultural diversity around the world.

One school in Dubai, with students from over 90 different countries, marked this day with a special celebration. Students set up booths representing their countries, dressed in traditional clothing, served traditional food, and performed traditional dances and music. Parents and community members were invited to attend, and the event became a wonderful showcase of the school's incredible diversity.

The school principal said: "When you walk through our corridors, you hear dozens of languages being spoken. You see children from every continent playing together. This is what the UAE is all about — different nationalities living in peace and harmony."

His Highness Sheikh Mohammed bin Rashid Al Maktoum captured this spirit perfectly when he said: "We should be proud of being a nation where different nationalities are living in peace and harmony."

The celebration also highlighted important symbols of tolerance in the UAE. One example is the Tolerance Bridge, a pedestrian bridge over the Dubai Water Canal that was inaugurated in 2017 as a symbol of the UAE's commitment to tolerance and coexistence. The bridge serves as a reminder that tolerance is not just an idea — it is something that must be built, maintained, and crossed together.

The UAE is home to residents from more than 200 nationalities, all living and working together in one of the most diverse societies on Earth.`,
    reading1Time: 6,
    reading2Time: 4,
    kwlExplanation: KWL_EXPLANATION,
    discussionQuestions: [
      'How important is it to know how diverse your school is?',
      'What would you put in an anti-racism charter?',
      'Do multicultural events promote tolerance? Why or why not?',
      'How does HH Sheikh Mohammed\'s quote make you feel about living in the UAE?',
      'What is the Tolerance Bridge, and what does it symbolise?',
    ],
    keyFacts: [
      'Anti-racism means actively opposing discrimination, not just avoiding it',
      'An audit is an official evaluation of something',
      'World Day for Cultural Diversity is celebrated on May 21',
      'The Tolerance Bridge is a pedestrian bridge over the Dubai Water Canal, inaugurated in 2017',
      'Diversity in a school means different countries, cultures, abilities, and traditions',
      'UAE residents come from more than 200 nationalities',
      'The Dubai school mentioned has students from over 90 different countries',
    ],
    visualType: 'chart',
    visualData: {
      title: 'UAE Population Diversity',
      items: [
        { label: 'South Asian', value: 55, description: 'India, Pakistan, Bangladesh' },
        { label: 'Arab/Emirati', value: 20, description: 'UAE nationals and Arab expats' },
        { label: 'East Asian', value: 10, description: 'Philippines, China, Korea' },
        { label: 'Western', value: 8, description: 'UK, US, Europe' },
        { label: 'African/Other', value: 7, description: 'Africa, Americas, other regions' },
      ],
    },
    quizQuestions: [
      { id: 'u4l5q1', question: 'What is an anti-racism charter?', options: ['A document that lists races', 'A written commitment to actively oppose discrimination', 'A law about different countries', 'A school timetable'], correctAnswer: 1, explanation: 'An anti-racism charter is a written commitment by a community to actively oppose discrimination of any kind and treat everyone with respect.' },
      { id: 'u4l5q2', question: 'When is the World Day for Cultural Diversity celebrated?', options: ['March 21', 'May 21', 'September 21', 'December 21'], correctAnswer: 1, explanation: 'The World Day for Cultural Diversity for Dialogue and Development is celebrated on May 21 each year.' },
      { id: 'u4l5q3', question: 'What is a diversity audit?', options: ['A financial check of the school', 'An official evaluation that helps a school understand how diverse its community is', 'A test for students about different cultures', 'A cleaning inspection'], correctAnswer: 1, explanation: 'A diversity audit is an official evaluation that helps a school understand how diverse its community really is, through surveys and data collection.' },
      { id: 'u4l5q4', question: 'What does the Tolerance Bridge symbolise?', options: ['Engineering achievement', 'The UAE\'s commitment to tolerance and coexistence', 'A shortcut across the canal', 'A tourist attraction only'], correctAnswer: 1, explanation: 'The Tolerance Bridge over Dubai Water Canal symbolises the UAE\'s commitment to tolerance and coexistence. It reminds us that tolerance must be built and crossed together.' },
      { id: 'u4l5q5', question: 'What did Ibrahim learn from the diversity audit?', options: ['That his school was not diverse at all', 'That his school was far more diverse than he had imagined', 'That diversity was a problem', 'That he should transfer schools'], correctAnswer: 1, explanation: 'Ibrahim was amazed to discover that his school was far more diverse than he had imagined — he had only seen what was on the surface.' },
    ],
    interactiveStrategies: [
      { strategy: 'Collaborative Work', description: 'Create an anti-racism charter for your class', duration: 8, instructions: 'In groups of 4, create an anti-racism charter for your class. Include at least 5 promises that everyone can agree to. Write them on a large sheet of paper and present to the class.' },
      { strategy: 'Jigsaw', description: 'Research diversity in the UAE from different angles', duration: 7, instructions: 'Each group researches one aspect of UAE diversity: nationalities, languages, religions, cuisines, or cultural events. Become experts, then share your findings with the class.' },
      { strategy: 'Content Recall', description: 'List key facts about cultural diversity from memory', duration: 3, instructions: 'Without looking at your notes, write down as many facts about cultural diversity in the UAE as you can remember. Share with your partner.' },
    ],
  },
];

// ═══════════════════════════════════════════════════════════════
// UNIT 5: HOW THE UAE GREW INTO A DIVERSE, INCLUSIVE SOCIETY (5 lessons)
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

  // Lesson 2: Cultural Change
  {
    lessonId: 'G6_T2_Unit 5_l2',
    keyVocabulary: ['multiculturalism', 'diversity', 'identity', 'population', 'demographics'],
    reading1Title: 'UAE Population Growth 2006-2016',
    reading1Content: `The United Arab Emirates has experienced remarkable population growth over the past few decades. Between 2006 and 2016, the UAE's population grew from approximately 5.5 million to over 9.5 million — an increase of more than 70% in just ten years.

This dramatic growth was driven by several factors. The discovery of oil in the 1970s brought enormous wealth to the country, which funded ambitious development projects. These projects required workers from around the world, and people came from South Asia, the Arab world, East Asia, Europe, Africa, and the Americas to work and live in the UAE.

The population chart shows a steady upward trend from 2006 to 2016:
- 2006: approximately 5.5 million
- 2008: approximately 6.2 million
- 2010: approximately 7.2 million
- 2012: approximately 8.0 million
- 2014: approximately 8.8 million
- 2016: approximately 9.5 million

Several questions arise from this data: What influenced this growth? Where did all these people come from? Why did they choose the UAE? And how has this rapid population growth changed the country?

The answers reveal a story of a nation that has embraced diversity as a strength. People came to the UAE for economic opportunities, safety, and the chance to build a better life. In doing so, they transformed the UAE into one of the most multicultural nations on Earth, with over 200 nationalities living side by side. Expatriates make up the majority of the UAE's population, creating a unique demographic landscape where diversity is not just present — it is the defining characteristic of the nation.`,
    reading2Title: 'Bernard and His Multicultural Street',
    reading2Content: `Bernard lives in Marseilles, a city in the south of France. Marseilles is one of France's most multicultural cities, and Bernard's street is a perfect example of this diversity.

On Bernard's street, you can find Vietnamese, Armenian, and North African neighbours living side by side. Each family brings their own traditions, food, language, and customs. Bernard loves living in such a diverse neighbourhood. He is what you might call a "people person" — someone who is genuinely interested in learning about different cultures and meeting people from different backgrounds.

On any given day, Bernard might smell Vietnamese pho soup cooking in one house, hear Armenian music playing from another, and be invited to share North African mint tea at a third. He has learned words in several languages, tried foods from many different cuisines, and heard stories about countries he has never visited.

Bernard believes that living in a multicultural neighbourhood has made him a better person. "When you know people from different cultures," he says, "you stop being afraid of what is different. Instead, you become curious. You want to learn more. You realise that underneath our different clothes, foods, and languages, people everywhere want the same things — safety, happiness, and a good life for their families."

Bernard's story shows that multiculturalism is not just about different cultures existing in the same place — it is about those cultures interacting, learning from each other, and creating a richer community for everyone. When people embrace diversity with curiosity and respect, everyone benefits.`,
    reading1Time: 5,
    reading2Time: 6,
    kwlExplanation: KWL_EXPLANATION,
    discussionQuestions: [
      'What does the population chart tell us about the UAE\'s growth?',
      'What influenced the UAE\'s population growth?',
      'Where did people come from and why did they come to the UAE?',
      'How do UAE citizens react when meeting someone from a different culture?',
      'How is Bernard\'s multicultural street similar to life in the UAE?',
    ],
    keyFacts: [
      'UAE population grew from approximately 5.5 million to over 9.5 million between 2006 and 2016',
      'Over 200 nationalities live in the UAE',
      'The discovery of oil in the 1970s drove much of the population growth',
      'Expatriates make up the majority of the UAE\'s population',
      'Marseilles is one of France\'s most multicultural cities',
      'Multiculturalism involves cultures interacting and learning from each other',
    ],
    visualType: 'chart',
    visualData: {
      title: 'UAE Population Growth (2006-2016)',
      items: [
        { label: '2006', value: 55, description: '~5.5 million' },
        { label: '2008', value: 62, description: '~6.2 million' },
        { label: '2010', value: 72, description: '~7.2 million' },
        { label: '2012', value: 80, description: '~8.0 million' },
        { label: '2014', value: 88, description: '~8.8 million' },
        { label: '2016', value: 95, description: '~9.5 million' },
      ],
    },
    quizQuestions: [
      { id: 'u5l2q1', question: 'By how much did the UAE population grow between 2006 and 2016?', options: ['About 30%', 'About 50%', 'About 70%', 'About 100%'], correctAnswer: 2, explanation: 'The UAE population grew from approximately 5.5 million to over 9.5 million between 2006 and 2016 — an increase of more than 70%.' },
      { id: 'u5l2q2', question: 'What was the main driver of UAE population growth starting in the 1970s?', options: ['Tourism', 'Discovery of oil and development projects', 'Agriculture', 'Fishing industry'], correctAnswer: 1, explanation: 'The discovery of oil in the 1970s brought enormous wealth, which funded ambitious development projects that required workers from around the world.' },
      { id: 'u5l2q3', question: 'How many nationalities live in the UAE?', options: ['Over 50', 'Over 100', 'Over 150', 'Over 200'], correctAnswer: 3, explanation: 'Over 200 nationalities live in the UAE, making it one of the most multicultural nations on Earth.' },
      { id: 'u5l2q4', question: 'What city is Bernard from?', options: ['Paris', 'Lyon', 'Marseilles', 'Nice'], correctAnswer: 2, explanation: 'Bernard lives in Marseilles, which is one of France\'s most multicultural cities.' },
      { id: 'u5l2q5', question: 'What does Bernard believe multiculturalism has done for him?', options: ['Made him confused', 'Made him a better person', 'Made him want to move', 'Made him fearful'], correctAnswer: 1, explanation: 'Bernard believes that living in a multicultural neighbourhood has made him a better person because he has stopped being afraid of differences and become curious about them.' },
    ],
    interactiveStrategies: [
      { strategy: 'Think-Pair-Share', description: 'Discuss the population growth data and its implications', duration: 5, instructions: 'Think about why the UAE\'s population has grown so quickly. Share with your partner: What are the benefits and challenges of such rapid growth?' },
      { strategy: 'Collaborative Work', description: 'Create a cultural collage representing UAE diversity', duration: 8, instructions: 'In groups of 4, create a collage that represents the different cultures found in the UAE. Include images, words, and symbols for at least 6 different cultural groups. Present your collage to the class.' },
      { strategy: 'Content Recall', description: 'List key population facts from memory', duration: 3, instructions: 'Without looking at your notes, write down the UAE population figures for 2006 and 2016, and the number of nationalities in the UAE. Share with your partner.' },
    ],
  },

  // Lesson 3: Research on Museum Exhibits
  {
    lessonId: 'G6_T2_Unit 5_l3',
    keyVocabulary: ['research', 'exhibit', 'theme', 'sources'],
    reading1Title: 'Latifa Goes to the Museum',
    reading1Content: `Latifa had always been curious about ancient Egypt, so when her class visited the Egyptian collection at the Louvre, she was the first one through the doors.

In the first room, Latifa saw tools that were thousands of years old — chisels, hammers, and saws that ancient Egyptian craftsmen had used to build the pyramids and temples. She marvelled at how well-preserved they were, considering they were made over 4,000 years ago.

In the next gallery, she found a stunning collection of jewellery — necklaces, bracelets, and rings made from gold, lapis lazuli, and carnelian. Each piece was intricately crafted and must have belonged to someone very important. Latifa imagined the Egyptian queen who might have worn a particular gold necklace with a scarab beetle pendant.

Then she came to the weapons — spears, bows, and shields that had been found in ancient tombs. These weapons told a story about a civilisation that valued strength and protection. But they also showed remarkable craftsmanship — the metalwork was detailed and the designs were beautiful.

As Latifa looked at these objects, she thought about her grandmother's old ring — a family heirloom that had been passed down through generations. Her grandmother always said the ring told the story of their family. Now Latifa understood what she meant. These museum objects were not just things — they were stories. They told the stories of the people who made them, used them, and valued them enough to take them to their graves.

Artefacts help us understand not just the past, but also ourselves. They show us what people valued, how they lived, and what they believed. The oldest human tools ever found, discovered in Ethiopia, are 2.5 to 2.6 million years old — a reminder of how far human creativity has come.`,
    reading2Title: 'Virtual Museums',
    reading2Content: `Have you ever wanted to visit a museum but couldn't because it was too far away? Virtual museums solve this problem by bringing the museum experience to you through the internet.

A virtual museum is an online collection of images, videos, and information about artefacts and exhibits. Creating your own virtual exhibition is easier than you might think. Here are the steps:

1. Decide on a topic — Choose something that interests you, such as "Ancient Islamic Coins" or "Traditional Emirati Clothing."

2. Search for images — Find high-quality images of artefacts related to your topic. Make sure you have permission to use them and note where they came from.

3. Organize thematically — Group your images by theme, time period, or type. This helps visitors understand the connections between different objects.

4. Link with short texts — Write brief descriptions for each image, explaining what it is, where it came from, and why it is important.

The Smithsonian Institution in Washington, D.C. is one of the world's largest museums, and it offers extensive virtual tours. On the other hand, the world's smallest museum is in a phone box in Yorkshire, England! It shows that you don't need a huge space to create a meaningful exhibit — you just need good ideas and well-chosen objects.

A curator is the person who organizes a museum exhibit. Curators decide what to display, how to arrange items, and what information to include. They are like storytellers who use objects instead of words to share important ideas about our world and our history.`,
    reading1Time: 6,
    reading2Time: 4,
    kwlExplanation: KWL_EXPLANATION,
    discussionQuestions: [
      'Can artefacts help us think about the future, not just the past?',
      'How can museums help us appreciate other cultures?',
      'What are the similarities and differences between regular and virtual museums?',
      'What theme would you choose for a class museum exhibit?',
      'What makes a good curator?',
    ],
    keyFacts: [
      'The oldest human tools found in Ethiopia are 2.5-2.6 million years old',
      'A curator is the person who organizes museum exhibits',
      'Virtual museums can be created online and accessed from anywhere',
      'The Smithsonian is one of the world\'s largest museums',
      'Artefacts tell stories about who people were and what they valued',
      'The world\'s smallest museum is in a phone box in Yorkshire, England',
    ],
    visualType: 'venn',
    visualData: {
      leftTitle: 'Regular Museums',
      rightTitle: 'Virtual Museums',
      centerTitle: 'Both',
      leftItems: ['Physical artefacts', 'Guided tours', 'Conservation labs', 'Gift shops'],
      rightItems: ['Accessible anywhere', 'Free or low cost', 'Interactive media', 'No space limits'],
      centerItems: ['Educational purpose', 'Curated content', 'Cultural preservation', 'Thematic organization'],
    },
    quizQuestions: [
      { id: 'u5l3q1', question: 'How old are the oldest human tools ever found?', options: ['500,000 years', '1 million years', '2.5-2.6 million years', '5 million years'], correctAnswer: 2, explanation: 'The oldest human tools ever found, discovered in Ethiopia, are 2.5 to 2.6 million years old.' },
      { id: 'u5l3q2', question: 'What is a curator?', options: ['A museum visitor', 'The person who organizes museum exhibits', 'A security guard', 'An archaeologist'], correctAnswer: 1, explanation: 'A curator is the person who organizes a museum exhibit. They decide what to display, how to arrange items, and what information to include.' },
      { id: 'u5l3q3', question: 'What is unique about the world\'s smallest museum?', options: ['It has no artefacts', 'It is in a phone box in Yorkshire, England', 'It is underwater', 'It only has one visitor at a time'], correctAnswer: 1, explanation: 'The world\'s smallest museum is in a phone box in Yorkshire, England, showing that you don\'t need a huge space to create a meaningful exhibit.' },
      { id: 'u5l3q4', question: 'What did Latifa realise about the museum objects?', options: ['They were too old to be interesting', 'They were stories about the people who made and used them', 'They were only valuable because they were made of gold', 'They had no connection to her life'], correctAnswer: 1, explanation: 'Latifa realised that museum objects were not just things — they were stories that told about the people who made them, used them, and valued them.' },
      { id: 'u5l3q5', question: 'What is one advantage of virtual museums over regular museums?', options: ['They have better artefacts', 'They are accessible from anywhere', 'They have more floor space', 'They are always older'], correctAnswer: 1, explanation: 'One key advantage of virtual museums is that they can be accessed from anywhere in the world through the internet, removing the barrier of distance.' },
    ],
    interactiveStrategies: [
      { strategy: 'Problem-Based Learning', description: 'Design a theme for a class museum exhibit', duration: 8, instructions: 'Your challenge: Design a theme for a class museum exhibit. Choose a topic, list at least 5 objects you would display, and explain how you would organize them. Present your plan to the class.' },
      { strategy: 'Collaborative Work', description: 'Vote on the best exhibit theme as a group', duration: 6, instructions: 'Each person presents their exhibit theme. As a group, vote on the best one. Then work together to expand the winning theme by adding more objects and descriptions.' },
      { strategy: 'Jigsaw', description: 'Research different aspects of museum curation', duration: 7, instructions: 'Each group researches one aspect: selecting objects, writing labels, arranging displays, or creating virtual exhibits. Become experts and teach the class your area.' },
    ],
  },

  // Lesson 4: Preparing Exhibits
  {
    lessonId: 'G6_T2_Unit 5_l4',
    keyVocabulary: ['floor plan', 'brochure', 'curator'],
    reading1Title: 'Jamila\'s Exhibit',
    reading1Content: `When Jamila heard that her uncle was visiting from abroad, she wanted to show him something special. She decided to create a museum exhibit right in her own living room!

Jamila sent messages to all her family members, asking each person to lend her one or two objects that told a story about their family. She collected over 30 objects — her grandfather's old compass from his sailing days, her mother's wedding necklace, her father's first business card, her brother's first football trophy, her sister's art portfolio, old family photographs, traditional cooking pots, a treasured copy of the Quran, and many more.

For each object, Jamila wrote a small label explaining what it was, who it belonged to, and why it was significant to the family. She arranged the objects on tables around the living room, grouping them by theme: "Our Heritage," "Our Achievements," "Our Traditions," and "Our Daily Life."

When Jamila's uncle arrived, she gave him a guided tour of the exhibit. He was deeply moved. Each object brought back memories and sparked conversations about the family's history, values, and dreams. By the end of the tour, the uncle said he had learned more about the family in one hour than in years of occasional visits.

Jamila's exhibit showed that you don't need a grand building or expensive artefacts to create a meaningful museum. All you need are objects that tell stories, labels that explain their significance, and a desire to share knowledge with others. Her exhibit also demonstrated how creating and sharing exhibits can develop cultural competence — the ability to understand and appreciate different cultures and perspectives.`,
    reading2Title: 'Museum Labelling Systems',
    reading2Content: `When you visit a museum, you may notice different types of labels near the exhibits. Each type of label serves a different purpose and is designed to help visitors understand what they are seeing.

There are three main types of museum labels:

1. Introduction Labels — Also called "teaser" labels, these are placed at the entrance to an exhibition or gallery. They provide an overview of what visitors will see and are designed to capture their interest. A good introduction label makes people want to explore further.

2. Section Labels — These are placed at the beginning of each section or room within an exhibition. They typically contain 100-200 words and explain the theme of that particular section. Section labels help visitors understand how different objects in the section are connected.

3. Object Labels — These are placed next to individual objects and provide specific details such as the object's name, date, origin, materials, and a brief description of its significance. Object labels are usually concise and focused on the single item they accompany.

In addition to these three types, many museums now use digital and virtual labels. These can be accessed through smartphones or interactive screens and may include videos, audio descriptions, and links to additional information. Credit panels, which acknowledge the donors and sponsors of an exhibition, are also common.

Good labelling is essential for a successful museum exhibit. Without clear labels, visitors may not understand what they are looking at or why it matters. The best labels are informative but concise — they add to the experience without overwhelming the visitor.

The Dubai Museum, located in Al Fahidi Fort which was built in 1787, is one of the UAE's oldest museums and uses a traditional labelling system to tell the story of Dubai's transformation from a fishing village to a global city.`,
    reading1Time: 6,
    reading2Time: 5,
    kwlExplanation: KWL_EXPLANATION,
    discussionQuestions: [
      'Why did Jamila create the exhibit for her uncle?',
      'Did Jamila achieve her objective? How do you know?',
      'How could creating exhibits develop cultural competence?',
      'What can we learn from Jamila\'s exhibit about sharing culture?',
      'How would you label objects for visitors to understand their significance?',
    ],
    keyFacts: [
      'A floor plan shows the rooms of a building from above, helping plan exhibit layout',
      'A curator is the person in charge of a museum exhibit',
      'Three label types: introduction (teaser), section (100-200 words), and object (specific details)',
      'Digital and virtual labels are becoming increasingly common in modern museums',
      'Dubai Museum is in Al Fahidi Fort, built in 1787 — one of the UAE\'s oldest museums',
      'Jamila collected over 30 objects for her family exhibit',
    ],
    visualType: 'diagram',
    visualData: {
      title: 'Museum Label Types',
      items: ['Introduction Label (Teaser)', 'Section Label (100-200 words)', 'Object Label (Specific details)', 'Digital Labels', 'Credit Panels'],
    },
    quizQuestions: [
      { id: 'u5l4q1', question: 'What is an introduction label in a museum?', options: ['A label at the end of the exhibit', 'A "teaser" label at the entrance that provides an overview and captures interest', 'A label only for VIP visitors', 'A label with prices'], correctAnswer: 1, explanation: 'An introduction label, also called a "teaser," is placed at the entrance to an exhibition. It provides an overview and is designed to make visitors want to explore further.' },
      { id: 'u5l4q2', question: 'How many objects did Jamila collect for her exhibit?', options: ['10', '20', 'Over 30', 'Over 50'], correctAnswer: 2, explanation: 'Jamila collected over 30 objects from her family members, each telling a story about their family.' },
      { id: 'u5l4q3', question: 'Where is the Dubai Museum located?', options: ['In a modern skyscraper', 'In Al Fahidi Fort, built in 1787', 'In a shopping mall', 'On an island'], correctAnswer: 1, explanation: 'The Dubai Museum is located in Al Fahidi Fort, which was built in 1787, making it one of the UAE\'s oldest museums.' },
      { id: 'u5l4q4', question: 'How many words should a section label typically contain?', options: ['10-20 words', '50-75 words', '100-200 words', '500+ words'], correctAnswer: 2, explanation: 'Section labels typically contain 100-200 words and explain the theme of that particular section of the exhibition.' },
      { id: 'u5l4q5', question: 'What did Jamila\'s uncle say about the exhibit?', options: ['It was boring', 'He had learned more about the family in one hour than in years of visits', 'It needed more objects', 'It was too long'], correctAnswer: 1, explanation: 'Jamila\'s uncle was deeply moved and said he had learned more about the family in one hour than in years of occasional visits.' },
    ],
    interactiveStrategies: [
      { strategy: 'Collaborative Work', description: 'Write labels for objects as if creating a museum exhibit', duration: 8, instructions: 'Bring one personal object to class (or describe one). Write three types of labels for it: an introduction label (teaser), a section label (100-200 words), and an object label. Share your labels with a partner.' },
      { strategy: 'Problem-Based Learning', description: 'Design a floor plan for a class museum', duration: 7, instructions: 'Your class is creating a museum! Design a floor plan showing how you would arrange the exhibits. Include at least 4 themed sections and decide where each type of label goes. Sketch your plan on paper.' },
      { strategy: 'Content Recall', description: 'List the three types of museum labels from memory', duration: 3, instructions: 'Without looking at your notes, list the three types of museum labels and briefly describe what each one does. Share with your partner.' },
    ],
  },

  // Lesson 5: Opening Day of the Museum
  {
    lessonId: 'G6_T2_Unit 5_l5',
    keyVocabulary: ['review', 'revisions', 'experience'],
    reading1Title: 'Zafar Gets a New Tablet',
    reading1Content: `After Zafar's amazing visit to the Sharjah Museum of Islamic Civilisation, his father decided to reward him. He bought Zafar a new tablet — but with one condition.

"I'm happy to give you this tablet," his father said, "but I want you to use it to learn about different cultures. You were so excited about the Islamic artefacts at the museum, and I want you to keep that curiosity alive."

Zafar was thrilled with the tablet. He started using it right away, looking up information about the things he had seen at the museum — the astrolabe, the manuscripts, the coins. But his father's words stayed with him.

"But other cultures are important too," his father continued. "The UAE is home to people from all over the world. If you want to understand the country you live in, you need to understand the cultures of the people who share it with you."

Zafar thought about this and agreed. He decided to study a different culture each week. One week he learned about Indian traditions, the next about Filipino festivals, then British customs, then Korean food and music. Each culture he studied taught him something new and helped him appreciate the incredible diversity of the UAE.

Over time, Zafar realised that learning about other cultures didn't make him less proud of his own — it made him more understanding and respectful of others. His tablet, which had started as a simple gift, became a window to the world.`,
    reading2Title: 'Cultural Competence',
    reading2Content: `Cultural competence is the ability to interact effectively with people of other cultures. It requires empathy, understanding, and a genuine willingness to learn about and appreciate different ways of life.

Developing cultural competence is important because we live in an increasingly interconnected world. Whether at school, at work, or in our communities, we regularly interact with people from different cultural backgrounds. Cultural competence helps us navigate these interactions with respect and understanding.

However, there is a significant challenge to cultural competence: ethnocentrism. Ethnocentrism is the tendency to evaluate other cultures from the perspective of your own culture. When we are ethnocentric, we assume that our own cultural practices, beliefs, and values are superior or "normal," and we judge other cultures as strange or inferior by comparison.

Ethnocentrism can be countered through tolerance and appreciation of different values. Instead of asking "Why do they do it differently?" we can ask "What can I learn from how they do it?" This shift in perspective is at the heart of cultural competence.

Three ways to develop cultural competence are:
1. Visit exhibits and museums — Learning about other cultures through their artefacts and stories broadens our understanding.
2. Experience different cultures — Direct interaction with people from different backgrounds builds empathy and breaks down stereotypes.
3. Refuse to tolerate discrimination — Standing up against prejudice and discrimination, even when it is uncomfortable, shows a commitment to cultural competence.

His Highness Sheikh Dr Sultan bin Mohammed Al Qasimi, Member of the Supreme Council and Ruler of Sharjah, said: "Museums are made to educate our children and our future generations." This reminds us that cultural competence is not just an individual skill — it is a commitment that we make for the benefit of future generations.

Research shows that adapting to a new culture generally produces more positive outcomes than clinging rigidly to old ways. People who embrace cultural competence tend to be more successful, more respected, and more fulfilled in their personal and professional lives.`,
    reading1Time: 6,
    reading2Time: 5,
    kwlExplanation: KWL_EXPLANATION,
    discussionQuestions: [
      'Why was Zafar enthusiastic about the museum?',
      'Why was his father concerned about the tablet?',
      'Was giving the tablet a good idea? Why or why not?',
      'What is cultural competence, and how can you develop it?',
      'What is ethnocentrism, and why is it a challenge?',
    ],
    keyFacts: [
      'Cultural competence means interacting effectively with people of other cultures',
      'Ethnocentrism is evaluating other cultures from your own cultural perspective',
      'Quote by HH Sheikh Dr Sultan bin Mohammed Al Qasimi: "Museums are made to educate our children and our future generations"',
      'Adapting to a new culture generally produces more positive outcomes than clinging to old ways',
      'Three ways to develop cultural competence: visit exhibits, experience different cultures, refuse to tolerate discrimination',
      'Zafar agreed to study a different culture each week using his tablet',
    ],
    visualType: 'mindmap',
    visualData: {
      center: 'Cultural Competence',
      branches: [
        { label: 'Empathy', children: ['Understanding Others', 'Perspective-Taking'] },
        { label: 'Knowledge', children: ['Learning About Cultures', 'Visiting Museums'] },
        { label: 'Action', children: ['Speaking Against Discrimination', 'Engaging With Diversity'] },
        { label: 'Challenges', children: ['Ethnocentrism', 'Prejudice'] },
      ],
    },
    quizQuestions: [
      { id: 'u5l5q1', question: 'What is cultural competence?', options: ['Speaking many languages', 'The ability to interact effectively with people of other cultures', 'Travelling to many countries', 'Knowing all world capitals'], correctAnswer: 1, explanation: 'Cultural competence is the ability to interact effectively with people of other cultures, requiring empathy, understanding, and willingness to learn.' },
      { id: 'u5l5q2', question: 'What is ethnocentrism?', options: ['Respecting all cultures equally', 'Evaluating other cultures from the perspective of your own culture', 'Learning about many cultures', 'Celebrating cultural diversity'], correctAnswer: 1, explanation: 'Ethnocentrism is the tendency to evaluate other cultures from the perspective of your own culture, assuming your cultural practices are superior or "normal."' },
      { id: 'u5l5q3', question: 'What condition did Zafar\'s father set for the tablet?', options: ['Zafar had to get good grades', 'Zafar had to use it to learn about different cultures', 'Zafar could only play educational games', 'Zafar had to share it with his siblings'], correctAnswer: 1, explanation: 'Zafar\'s father gave him the tablet on the condition that he use it to learn about different cultures, keeping his curiosity alive.' },
      { id: 'u5l5q4', question: 'Which of these is NOT one of the three ways to develop cultural competence?', options: ['Visiting exhibits and museums', 'Experiencing different cultures', 'Memorising facts about other countries', 'Refusing to tolerate discrimination'], correctAnswer: 2, explanation: 'The three ways to develop cultural competence are: visit exhibits/museums, experience different cultures, and refuse to tolerate discrimination. Simply memorising facts is not enough.' },
      { id: 'u5l5q5', question: 'What did HH Sheikh Dr Sultan bin Mohammed Al Qasimi say about museums?', options: ['Museums are for tourists only', '"Museums are made to educate our children and our future generations"', 'Museums should be free', 'Museums are outdated'], correctAnswer: 1, explanation: 'HH Sheikh Dr Sultan bin Mohammed Al Qasimi said: "Museums are made to educate our children and our future generations."' },
    ],
    interactiveStrategies: [
      { strategy: 'Collaborative Work', description: 'Finalize the class museum exhibit', duration: 8, instructions: 'As a class, finalize your museum exhibit. Make sure all objects have proper labels, the floor plan is complete, and each section has an introduction label. Practice giving a guided tour.' },
      { strategy: 'Simulations', description: 'Simulate the museum opening day', duration: 7, instructions: 'Simulate your museum opening! Half the class acts as visitors while the other half are guides. Guides explain the exhibits, then switch roles. Discuss: What worked well? What could be improved?' },
      { strategy: 'Summarizing', description: 'Write a one-sentence summary about cultural competence', duration: 3, instructions: 'In one sentence, summarize what cultural competence means and why it matters. Write it on your index card and share with the class.' },
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
