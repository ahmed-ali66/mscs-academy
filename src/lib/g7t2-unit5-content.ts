const KWL_EXPLANATION = "KWL stands for Know, Want to know, Learned. It's a thinking tool that helps you track your learning. Start by writing what you already Know about the topic, then write what you Want to know, and after the lesson write what you Learned!";

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

export const g7t2Unit5: LessonContent[] = [
  // Lesson 1: Life Necessities
  {
    lessonId: 'G7_T2_Unit 5_l1',
    keyVocabulary: ['equality', 'dignity', 'basic needs', 'conflict', 'humanitarian'],
    reading1Title: 'Understanding Human Needs',
    reading1Content: `Human needs are the essential requirements for people to survive, thrive, and live with dignity. These needs include air, water, food, shelter, safety, family, equal rights, healthcare, and jobs. Without these fundamental necessities, people cannot lead healthy or fulfilling lives. Understanding human needs is the first step toward creating a fair and compassionate society.

One of the most important frameworks for understanding human needs is Maslow's hierarchy of needs. This is a pyramid with five levels. At the base are physiological needs — the absolute essentials for survival such as air, water, food, and sleep. The second level is safety needs — protection from danger, financial security, and health. The third level is love and belonging — the need for family, friendships, and community. The fourth level is esteem — respect from others, recognition, and a sense of achievement. At the top of the pyramid is self-actualisation — the desire to reach your full potential and become the best version of yourself. Maslow's theory teaches us that basic needs must be met before a person can focus on higher-level needs.

The UAE has demonstrated a strong commitment to meeting the needs of its citizens. In 2017, the UAE ranked highly on the World Happiness Index, reflecting the nation's dedication to the well-being of its people. Remarkably, the UAE appointed a Minister of State for Happiness — the first country in the world to do so. This appointment shows that the UAE government takes the happiness and well-being of its people seriously, recognising that meeting human needs at every level of Maslow's hierarchy is essential for a thriving society.

Understanding the difference between wants and needs is also crucial. Consider Bill's scenario: Bill wants a new phone, but he already has one that works perfectly well. A new phone is a want, not a need. Now consider Martin's scenario: Martin needs a car to get to work so he can earn a living. Depending on his circumstances — whether public transport is available or whether his job is far from home — the car could be both a want and a need. Distinguishing between wants and needs helps us make better decisions and develop empathy for those who lack basic necessities.`,
    reading2Title: 'Wants vs Needs in Daily Life',
    reading2Content: `Every person on earth has fundamental needs that must be met for survival and dignity. These include clean air to breathe, safe water to drink, nutritious food to eat, secure shelter to live in, and access to healthcare when we are unwell. Beyond physical survival, people also need safety, love, belonging, and the opportunity to develop their potential. When these needs go unmet, people suffer — not just physically, but emotionally and socially as well.

Wants, on the other hand, are desires that go beyond necessities. A person may want the latest technology, fashionable clothing, or expensive food, but these are not essential for survival or well-being. Understanding the difference between wants and needs is not always simple. In some cases, the line can be blurred. For example, access to the internet might seem like a want, but in today's world it is increasingly necessary for education, job applications, and staying informed. The key is to evaluate each situation carefully and consider what is truly essential.

The relationship between unmet needs and human suffering is profound. When people lack food, shelter, or safety, they experience physical hardship and emotional distress. Poverty, homelessness, and hunger are not just statistics — they represent real human suffering that affects millions of people around the world. This is why it is so important for governments, organisations, and individuals to work together to meet basic human needs.

The UAE addresses these needs through comprehensive social services, including free healthcare for citizens, high-quality public education, and housing programmes that ensure every citizen has a place to live. Sheikh Zayed bin Sultan Al Nahyan, the founding father of the UAE, had a clear vision that no citizen should be without basic necessities. He believed that the wealth of the nation should be used to improve the lives of all people. This vision continues to guide the UAE today.

The concept of dignity is central to understanding human needs. Every human being deserves to have their basic needs met regardless of their circumstances, background, or status. Dignity means treating every person with respect and ensuring that no one is denied the essentials of life. When societies uphold dignity, they create the conditions for peace, happiness, and progress.`,
    reading1Time: 8,
    reading2Time: 7,
    kwlExplanation: KWL_EXPLANATION,
    discussionQuestions: [
      'Why do you think Maslow placed physiological needs at the bottom of his pyramid? What does this tell us about human priorities?',
      'How does the UAE\'s appointment of a Minister of State for Happiness reflect its commitment to meeting citizens\' needs?',
      'In Bill\'s scenario, a new phone is a want. Can you think of a situation where a phone might be a need rather than a want?',
      'Why is it important to understand the difference between wants and needs when making decisions about spending money?',
      'How does the concept of dignity relate to the idea that every person deserves to have their basic needs met?'
    ],
    keyFacts: [
      'Maslow\'s hierarchy of needs is a five-level pyramid: physiological, safety, love/belonging, esteem, and self-actualisation.',
      'Basic physiological needs include air, water, food, shelter, and sleep — they must be met first.',
      'The UAE appointed a Minister of State for Happiness, becoming the first country in the world to do so.',
      'The UAE ranked highly on the World Happiness Index in 2017.',
      'A "want" is something you desire but can live without; a "need" is something essential for survival or well-being.',
      'Sheikh Zayed\'s vision was that no citizen should be without basic necessities.',
      'The concept of dignity means every person deserves to have their basic needs met regardless of circumstances.',
      'Maslow\'s theory states that lower-level needs must be satisfied before higher-level needs become motivating factors.',
      'The UAE provides social services including healthcare, education, and housing programmes to meet citizens\' needs.'
    ],
    visualType: 'diagram',
    visualData: {
      type: 'pyramid',
      title: "Maslow's Hierarchy of Needs",
      levels: [
        {
          level: 1,
          name: 'Physiological Needs',
          items: ['Air', 'Water', 'Food', 'Sleep', 'Shelter'],
          color: '#ef4444'
        },
        {
          level: 2,
          name: 'Safety Needs',
          items: ['Personal safety', 'Financial security', 'Health and wellness', 'Protection from danger'],
          color: '#f97316'
        },
        {
          level: 3,
          name: 'Love and Belonging',
          items: ['Family', 'Friendships', 'Community', 'Intimacy'],
          color: '#eab308'
        },
        {
          level: 4,
          name: 'Esteem',
          items: ['Respect from others', 'Recognition', 'Achievement', 'Self-confidence'],
          color: '#22c55e'
        },
        {
          level: 5,
          name: 'Self-Actualisation',
          items: ['Creativity', 'Problem-solving', 'Reaching full potential', 'Personal growth'],
          color: '#0ea5e9'
        }
      ]
    },
    quizQuestions: [
      {
        id: 'G7_T2_U5_L1_Q1',
        question: 'Which level of Maslow\'s hierarchy must be met first before a person can focus on higher needs?',
        options: ['Esteem', 'Physiological needs', 'Self-actualisation', 'Love and belonging'],
        correctAnswer: 1,
        explanation: 'Maslow\'s theory states that physiological needs (air, water, food, shelter, sleep) at the base of the pyramid must be met first before a person can focus on higher-level needs.'
      },
      {
        id: 'G7_T2_U5_L1_Q2',
        question: 'What did the UAE become the first country in the world to do in relation to happiness?',
        options: ['Build happiness parks', 'Appoint a Minister of State for Happiness', 'Create a Happiness University', 'Host a World Happiness Conference'],
        correctAnswer: 1,
        explanation: 'The UAE appointed a Minister of State for Happiness, making it the first country in the world to create such a position, showing its commitment to citizen well-being.'
      },
      {
        id: 'G7_T2_U5_L1_Q3',
        question: 'In Bill\'s scenario, why is a new phone considered a want rather than a need?',
        options: ['Because phones are always wants', 'Because Bill already has a working phone', 'Because phones are too expensive', 'Because Bill does not like phones'],
        correctAnswer: 1,
        explanation: 'A new phone is a want for Bill because he already has one that works perfectly well. A want is something you desire but can live without, while a need is essential.'
      },
      {
        id: 'G7_T2_U5_L1_Q4',
        question: 'What is at the very top of Maslow\'s hierarchy of needs?',
        options: ['Safety', 'Love and belonging', 'Esteem', 'Self-actualisation'],
        correctAnswer: 3,
        explanation: 'Self-actualisation sits at the top of Maslow\'s pyramid. It represents the desire to reach your full potential and become the best version of yourself.'
      },
      {
        id: 'G7_T2_U5_L1_Q5',
        question: 'According to Sheikh Zayed\'s vision, what should be true about citizens and basic necessities?',
        options: ['Citizens should earn necessities through hard work', 'No citizen should be without basic necessities', 'Basic necessities should be provided only to the poor', 'Citizens should compete for limited resources'],
        correctAnswer: 1,
        explanation: 'Sheikh Zayed\'s vision was that no citizen should be without basic necessities, reflecting the belief that the nation\'s wealth should improve all people\'s lives.'
      }
    ],
    interactiveStrategies: [
      {
        strategy: 'Wants vs Needs Sorting Game',
        description: 'Students sort everyday items into "wants" and "needs" categories and discuss borderline cases.',
        duration: 15,
        instructions: '1. Divide students into small groups of 3-4. 2. Give each group a set of cards with items (e.g., bottled water, video game, medicine, school uniform, chocolate, bus ticket, smartphone, healthy meal). 3. Students sort the cards into "Wants" and "Needs" columns on their desk. 4. Groups discuss items that are hard to classify and write them in a "Both" column. 5. Each group presents their most controversial item and explains their reasoning. 6. Class discusses how context matters — for example, a smartphone might be a want for one person but a need for someone who uses it for work.'
      },
      {
        strategy: 'Maslow\'s Pyramid Personal Reflection',
        description: 'Students reflect on their own needs at each level of Maslow\'s hierarchy and create a personal pyramid.',
        duration: 20,
        instructions: '1. Provide each student with a blank pyramid template with five levels. 2. Ask students to think about their own lives and write specific examples for each level (e.g., physiological: "I have clean water and meals every day"; safety: "I feel safe in my home and school"). 3. Students identify which level they feel most satisfied in and which level they would like to improve. 4. In pairs, students share their pyramids and discuss similarities and differences. 5. Volunteers share with the class how understanding their own needs helps them empathise with others whose needs may not be met.'
      }
    ]
  },

  // Lesson 2: Basic Needs
  {
    lessonId: 'G7_T2_Unit 5_l2',
    keyVocabulary: ['refugee', 'deny', 'resolution', 'charity', 'welfare'],
    reading1Title: 'Safety and Security as Basic Needs',
    reading1Content: `Safety is one of the most fundamental human needs. Without a sense of security, people cannot focus on education, relationships, or personal growth. Safety measures exist in every aspect of our daily lives to protect us from harm. Fire safety includes smoke detectors, fire extinguishers, evacuation plans, and fire-resistant building materials. Road safety involves traffic laws, seatbelts, speed limits, and pedestrian crossings. Personal safety encompasses awareness of our surroundings, avoiding dangerous situations, and knowing how to seek help when needed.

In the UAE, building safety is taken very seriously. Abu Dhabi Building Codes establish strict requirements for construction, including mandatory fire alarms in all buildings, proper ventilation systems to ensure air quality, sanitation facilities for hygiene, and structural strength requirements to withstand environmental conditions. These codes ensure that buildings meet safety standards to protect residents and provide a secure living environment. Regular inspections verify that buildings continue to meet these standards over time.

Social needs are equally important for human well-being. Family and friends provide emotional support, a sense of belonging, and a foundation for personal identity. When people have strong social connections, they are better able to cope with challenges and stress. The importance of community is deeply rooted in UAE culture. The majlis tradition — where people gather to discuss matters, share stories, and strengthen bonds — has been a cornerstone of Emirati society for generations. Neighbourhood bonds create networks of mutual support, and extended family networks ensure that no one faces difficulties alone.

The UAE government recognises that social needs are just as important as physical safety. Programmes that support families, community centres that bring people together, and cultural events that celebrate shared heritage all contribute to meeting these fundamental needs. When people feel safe and socially connected, they are more likely to thrive in all areas of life. Understanding safety as a basic need helps us appreciate why governments invest in infrastructure, social programmes, and community-building initiatives.`,
    reading2Title: 'Self-Esteem and Setting Goals',
    reading2Content: `Self-esteem is a fundamental human need that sits at the fourth level of Maslow's hierarchy. It involves respect from others, recognition for achievements, a sense of success, and admiration from peers. Self-esteem is not about arrogance or pride — it is about feeling valued and capable. When self-esteem needs are met, people feel confident, competent, and motivated to contribute to their communities. When these needs are not met, people may feel inferior, worthless, or invisible, which can lead to social withdrawal, anxiety, and depression.

Setting achievable goals is one of the most effective ways to build self-esteem. When you set a goal and work toward it, each small step forward reinforces your belief in your own abilities. The SMART goal framework provides a structured approach: goals should be Specific (clear and well-defined), Measurable (you can track progress), Achievable (realistic given your resources), Relevant (aligned with your values and bigger objectives), and Time-bound (having a deadline). For example, instead of saying "I want to be healthier," a SMART goal would be "I will walk for 30 minutes, three times a week, for the next month."

The UAE actively promotes self-esteem through national achievements that give citizens a sense of pride. From space exploration with the Hope Probe to hosting international events like Expo 2020, these accomplishments boost the collective self-esteem of the nation. Cultural pride is fostered through heritage preservation, traditional arts, and national celebrations that remind Emiratis of their rich history and identity. Youth empowerment programmes, such as leadership camps, innovation competitions, and volunteer opportunities, give young people the chance to develop skills, gain recognition, and build confidence.

The connection between meeting basic needs and achieving self-actualisation is crucial. A person who lacks food or safety cannot focus on building self-esteem or reaching their full potential. This is why the UAE's comprehensive approach — addressing physical, social, and emotional needs — is so effective. When basic needs are met, people have the freedom and energy to pursue their dreams, contribute to society, and achieve self-actualisation. Understanding this connection motivates us to ensure that everyone's needs are met, not just our own.`,
    reading1Time: 8,
    reading2Time: 7,
    kwlExplanation: KWL_EXPLANATION,
    discussionQuestions: [
      'How do Abu Dhabi Building Codes help meet the safety needs of residents?',
      'Why is the majlis tradition important for meeting social needs in UAE culture?',
      'What happens to a person when their self-esteem needs are not met over a long period?',
      'How does the SMART goal framework help you set better goals? Give an example.',
      'How does the UAE promote self-esteem through national achievements and youth programmes?'
    ],
    keyFacts: [
      'Abu Dhabi Building Codes require fire alarms, ventilation, sanitation, and structural strength in all buildings.',
      'The majlis tradition is a cornerstone of Emirati social life, strengthening community bonds.',
      'Self-esteem needs include respect from others, recognition, success, and admiration.',
      'When self-esteem needs are unmet, people may feel inferior or worthless.',
      'The SMART goal framework stands for Specific, Measurable, Achievable, Relevant, and Time-bound.',
      'The UAE promotes self-esteem through national achievements like the Hope Probe and Expo 2020.',
      'Youth empowerment programmes in the UAE include leadership camps and innovation competitions.',
      'Meeting basic needs is a prerequisite for achieving self-actualisation.',
      'Extended family networks in the UAE ensure that no one faces difficulties alone.'
    ],
    visualType: 'diagram',
    visualData: {
      type: 'radial',
      title: 'Safety Needs and UAE Examples',
      center: 'Safety Needs',
      branches: [
        {
          name: 'Physical Safety',
          items: ['Fire alarms', 'Building codes', 'Road safety laws', 'Emergency services'],
          uaeExample: 'Abu Dhabi Building Codes ensure structural safety'
        },
        {
          name: 'Financial Security',
          items: ['Employment', 'Savings', 'Insurance', 'Social welfare'],
          uaeExample: 'UAE social welfare programmes support citizens'
        },
        {
          name: 'Health and Wellness',
          items: ['Healthcare access', 'Sanitation', 'Nutrition', 'Mental health support'],
          uaeExample: 'Free healthcare for UAE citizens'
        },
        {
          name: 'Community Safety',
          items: ['Neighbourhood watch', 'Police services', 'Safe public spaces', 'Community bonds'],
          uaeExample: 'Majlis tradition strengthens community safety'
        }
      ]
    },
    quizQuestions: [
      {
        id: 'G7_T2_U5_L2_Q1',
        question: 'Which of the following is required by Abu Dhabi Building Codes?',
        options: ['Swimming pools', 'Fire alarms and ventilation', 'Gardens and balconies', 'Underground parking'],
        correctAnswer: 1,
        explanation: 'Abu Dhabi Building Codes require fire alarms, ventilation, sanitation, and structural strength to ensure buildings meet safety standards and protect residents.'
      },
      {
        id: 'G7_T2_U5_L2_Q2',
        question: 'What does the "A" in the SMART goal framework stand for?',
        options: ['Ambitious', 'Achievable', 'Annual', 'Active'],
        correctAnswer: 1,
        explanation: 'The "A" in SMART stands for Achievable — goals should be realistic given your current resources and circumstances, so that you can actually accomplish them.'
      },
      {
        id: 'G7_T2_U5_L2_Q3',
        question: 'What may happen when a person\'s self-esteem needs are not met over time?',
        options: ['They become more creative', 'They may feel inferior or worthless', 'They automatically achieve self-actualisation', 'They focus more on physical needs'],
        correctAnswer: 1,
        explanation: 'When self-esteem needs are unmet, people may feel inferior, worthless, or invisible, which can lead to social withdrawal, anxiety, and depression.'
      },
      {
        id: 'G7_T2_U5_L2_Q4',
        question: 'How does the majlis tradition help meet social needs in the UAE?',
        options: ['It provides financial support', 'It brings people together to strengthen bonds and community', 'It enforces building safety codes', 'It distributes food to the hungry'],
        correctAnswer: 1,
        explanation: 'The majlis tradition brings people together to discuss matters, share stories, and strengthen bonds — it is a cornerstone of Emirati social life that meets the need for belonging.'
      },
      {
        id: 'G7_T2_U5_L2_Q5',
        question: 'Which UAE achievement boosts national self-esteem by reaching beyond Earth?',
        options: ['Burj Khalifa', 'Dubai Metro', 'The Hope Probe', 'Palm Jumeirah'],
        correctAnswer: 2,
        explanation: 'The Hope Probe, the UAE\'s Mars mission, is a national achievement that boosts collective self-esteem by demonstrating the nation\'s scientific and technological capabilities.'
      }
    ],
    interactiveStrategies: [
      {
        strategy: 'SMART Goal Setting Workshop',
        description: 'Students learn and practise the SMART goal framework by setting personal goals.',
        duration: 20,
        instructions: '1. Introduce the SMART acronym and explain each component with examples. 2. Ask students to think of one personal goal they want to achieve this term. 3. Guide them through rewriting their goal using the SMART framework — making it Specific, Measurable, Achievable, Relevant, and Time-bound. 4. Students share their SMART goals with a partner who provides feedback on whether the goal meets all five criteria. 5. Students revise their goals based on feedback and write them on a goal card to keep as a reminder. 6. At the end of the lesson, volunteers share their goals with the class and explain how meeting this goal will build their self-esteem.'
      },
      {
        strategy: 'Safety Audit Walk',
        description: 'Students conduct a safety audit of their school building, identifying safety features and suggesting improvements.',
        duration: 25,
        instructions: '1. Divide students into groups of 4-5 and provide each group with a safety audit checklist (fire exits, fire alarms, ventilation, sanitation, structural features, emergency signage). 2. Groups walk through designated areas of the school and record safety features they observe. 3. Students also note any areas where safety could be improved. 4. Return to class and each group presents their findings. 5. Discuss how building codes like Abu Dhabi\'s ensure that safety features are included in construction. 6. Students write a brief reflection on how feeling safe at school helps them focus on learning and personal growth.'
      }
    ]
  },

  // Lesson 3: Is There a Link Between Unmet Needs and Conflict?
  {
    lessonId: 'G7_T2_Unit 5_l3',
    keyVocabulary: ['action', 'planning', 'donation', 'conflict', 'resolution'],
    reading1Title: 'The Conflict Circle',
    reading1Content: `There is a powerful and troubling link between unmet human needs and conflict. The conflict circle describes how this connection works in a cycle: denial leads to consequences, consequences have roots, roots can escalate to violence, and violence intensifies the original problem — feeding back into denial. This is a linked cycle that feeds on itself, growing stronger with each turn unless someone breaks the chain.

The cycle begins with denial — when people's basic needs are denied. This could mean lack of access to food, clean water, shelter, safety, education, or healthcare. When these fundamental needs go unmet, it leads to consequences such as suffering, displacement, illness, and poverty. People are forced to leave their homes, children cannot attend school, and communities fall apart. These consequences have roots — underlying causes such as inequality, injustice, discrimination, corruption, or failed governance. When people see no legitimate way to address these roots, frustration can escalate to violence — protests, riots, or even armed conflict. Violence then intensifies the original problem by destroying infrastructure, displacing more people, and deepening poverty, which leads back to even greater denial of basic needs.

Real stories illustrate this cycle painfully. Sevan's story: Sevan was a bright student who was denied access to education because of conflict in his region. Schools were closed, teachers fled, and Sevan lost the opportunity to learn. Without education, his chances of a better future diminished, and the cycle of unmet needs continued. Fadia's story: Fadia was displaced from her home when violence swept through her community. She and her family struggled to find food, shelter, and safety, living in a refugee camp with limited resources. The conflict that drove her from home created the very conditions that made her basic needs impossible to meet.

The UAE has responded to such humanitarian crises with generosity and compassion. One significant example is the UAE's humanitarian aid to Bangladesh, providing support for 230,000 Rohingya refugees. This aid included cooking supplies to prepare meals, toys to bring joy to children, and school supplies so that education could continue even in difficult circumstances. By meeting basic needs, the UAE helps break the conflict circle and gives people hope for a better future.`,
    reading2Title: 'Conflict Resolution and Humanitarian Response',
    reading2Content: `Breaking the conflict circle requires both immediate action and long-term strategies. A conflict resolution table helps us understand how to respond to different levels of need effectively. When the need is food (a simple need level), the resolution is straightforward — make a sandwich or find a meal. When the need is shelter (a threatening need level), the resolution involves contacting authorities or finding emergency accommodation. When the need is safety (an urgent need level), the resolution requires calling emergency services immediately. When the need is belonging (an emotional need level), the resolution involves seeking community support, counselling, or joining social groups.

Understanding the appropriate response for each level of need is essential. Over-reacting to a simple need or under-reacting to an urgent one can both lead to worse outcomes. The conflict resolution table teaches students to assess the severity of a situation and choose the right course of action. This is a skill that applies not only to personal situations but also to understanding how governments and organisations respond to humanitarian crises.

Role-play activities help students practise these skills in a safe environment. In a role-play, students act out scenarios involving unmet needs and practise conflict resolution strategies. For example, one student might play the role of a person who has lost their home in a natural disaster, while another plays the role of an aid worker trying to help. Through role-play, students develop empathy, communication skills, and problem-solving abilities. They learn to listen actively, consider different perspectives, and work together to find solutions.

The UAE plays a significant role in international humanitarian response. Through organisations like the Emirates Red Crescent, the UAE provides aid to refugees, disaster relief to affected communities, and support for peace-building initiatives around the world. The UAE has established itself as one of the world's most generous donors of humanitarian aid relative to its size. By addressing the root causes of conflict — poverty, inequality, and lack of access to basic services — the UAE helps break the conflict circle at its source.

Meeting basic needs can break the conflict circle because it addresses the very conditions that cause conflict in the first place. When people have food, shelter, safety, and hope, they are far less likely to resort to violence. This is why humanitarian aid is not just an act of charity — it is an investment in peace and stability for the entire world.`,
    reading1Time: 9,
    reading2Time: 8,
    kwlExplanation: KWL_EXPLANATION,
    discussionQuestions: [
      'Explain how the conflict circle works. Why does it keep repeating unless someone breaks the chain?',
      'How do Sevan\'s and Fadia\'s stories illustrate the connection between unmet needs and suffering?',
      'Why is it important to match the level of response to the level of need in the conflict resolution table?',
      'How does the UAE\'s humanitarian aid to Rohingya refugees help break the conflict circle?',
      'Can you think of a situation in your own life where an unmet need led to a conflict? How was it resolved?'
    ],
    keyFacts: [
      'The conflict circle follows the cycle: denial → consequences → roots → violence → intensification → back to denial.',
      'Denial of basic needs is the starting point of the conflict circle.',
      'The roots of conflict often include inequality, injustice, discrimination, and failed governance.',
      'Sevan was denied access to education due to conflict, losing opportunities for the future.',
      'Fadia was displaced from her home and struggled to meet basic needs in a refugee camp.',
      'The UAE provided humanitarian aid to 230,000 Rohingya refugees in Bangladesh with cooking supplies, toys, and school supplies.',
      'The conflict resolution table matches need levels with appropriate responses (simple → direct action, threatening → contact authorities, urgent → emergency services, emotional → community support).',
      'The Emirates Red Crescent is one of the UAE\'s key organisations for international humanitarian response.',
      'Meeting basic needs is an investment in peace, not just charity — it addresses the root causes of conflict.'
    ],
    visualType: 'diagram',
    visualData: {
      type: 'cycle',
      title: 'The Conflict Circle',
      nodes: [
        { id: 1, name: 'Denial', description: 'Basic needs are denied (food, shelter, safety, education)', position: 'top' },
        { id: 2, name: 'Consequences', description: 'Suffering, displacement, illness, poverty', position: 'top-right' },
        { id: 3, name: 'Roots', description: 'Inequality, injustice, discrimination, failed governance', position: 'bottom-right' },
        { id: 4, name: 'Violence', description: 'Protests, riots, armed conflict', position: 'bottom' },
        { id: 5, name: 'Intensification', description: 'Infrastructure destroyed, more displacement, deeper poverty', position: 'bottom-left' }
      ],
      arrows: [
        { from: 1, to: 2 },
        { from: 2, to: 3 },
        { from: 3, to: 4 },
        { from: 4, to: 5 },
        { from: 5, to: 1, label: 'Cycle repeats' }
      ]
    },
    quizQuestions: [
      {
        id: 'G7_T2_U5_L3_Q1',
        question: 'What is the correct order of stages in the conflict circle?',
        options: ['Violence → denial → roots → consequences → intensification', 'Denial → consequences → roots → violence → intensification', 'Roots → denial → violence → consequences → intensification', 'Consequences → denial → intensification → violence → roots'],
        correctAnswer: 1,
        explanation: 'The conflict circle follows the order: denial → consequences → roots → violence → intensification, and then feeds back into denial, creating a repeating cycle.'
      },
      {
        id: 'G7_T2_U5_L3_Q2',
        question: 'How many Rohingya refugees did the UAE provide aid to in Bangladesh?',
        options: ['23,000', '230,000', '2,300,000', '230'],
        correctAnswer: 1,
        explanation: 'The UAE provided humanitarian aid to 230,000 Rohingya refugees in Bangladesh, including cooking supplies, toys, and school supplies.'
      },
      {
        id: 'G7_T2_U5_L3_Q3',
        question: 'According to the conflict resolution table, what should you do when the need level is "urgent" (such as safety)?',
        options: ['Make a sandwich', 'Contact authorities', 'Call emergency services', 'Seek community support'],
        correctAnswer: 2,
        explanation: 'When the need level is urgent, such as a safety emergency, the appropriate response is to call emergency services immediately.'
      },
      {
        id: 'G7_T2_U5_L3_Q4',
        question: 'What was the main consequence for Sevan when conflict denied him access to education?',
        options: ['He had to move to a new country', 'He lost opportunities for a better future', 'He became violent immediately', 'He found a new school nearby'],
        correctAnswer: 1,
        explanation: 'Sevan lost the opportunity to learn, which meant his chances of a better future diminished, illustrating how denial of needs leads to long-term consequences.'
      },
      {
        id: 'G7_T2_U5_L3_Q5',
        question: 'Why is humanitarian aid considered an investment in peace rather than just charity?',
        options: ['Because it costs a lot of money', 'Because it addresses the root causes of conflict', 'Because it makes the donor country look good', 'Because it is required by international law'],
        correctAnswer: 1,
        explanation: 'Humanitarian aid addresses the root causes of conflict — poverty, inequality, and lack of basic services — making it an investment in long-term peace and stability, not just a charitable act.'
      }
    ],
    interactiveStrategies: [
      {
        strategy: 'Conflict Circle Role-Play',
        description: 'Students act out scenarios of unmet needs and practise conflict resolution strategies through guided role-play.',
        duration: 25,
        instructions: '1. Divide students into groups of 5. 2. Assign each group one scenario card (e.g., "A community has no access to clean water"; "Families are displaced by a natural disaster"; "Children cannot attend school because buildings were destroyed"). 3. Within each group, assign roles: one person experiences the unmet need, one person represents the authority or aid organisation, one person is an observer who identifies which stage of the conflict circle is happening, and two people brainstorm solutions. 4. Groups act out their scenario for 5 minutes, then pause and discuss: At which stage of the conflict circle are we? What is the appropriate level of response? 5. Groups then replay the scenario, this time applying a conflict resolution strategy to break the cycle. 6. The observer shares what changed and how the cycle was interrupted. 7. Class discusses: What strategies were most effective? How does this connect to real-world humanitarian work?'
      },
      {
        strategy: 'Conflict Resolution Table Activity',
        description: 'Students create and populate a conflict resolution table for various scenarios, matching need levels to appropriate responses.',
        duration: 20,
        instructions: '1. Draw a blank conflict resolution table on the board with columns: Need, Need Level, Resolution. 2. Read aloud a series of scenarios to the class (e.g., "Ahmed is hungry and has not eaten lunch"; "Sara\'s house was damaged in a storm"; "A family is fleeing from a dangerous area"; "Khalid feels lonely after moving to a new city"). 3. For each scenario, students discuss in pairs: What is the need? What level is it (simple, threatening, urgent, emotional)? What is the appropriate resolution? 4. Pairs share their answers and the class fills in the table together. 5. Students copy the completed table into their notebooks. 6. Reflection: Students write a paragraph explaining why matching the response to the need level is important and how mismatching could make the situation worse.'
      }
    ]
  },

  // Lesson 4: Commitment to the Value of Human Life
  {
    lessonId: 'G7_T2_Unit 5_l4',
    keyVocabulary: ['charity', 'welfare', 'humanitarian', 'dignity', 'foundation'],
    reading1Title: 'Organisations Protecting Human Life',
    reading1Content: `Around the world, organisations work tirelessly to protect human life and uphold the dignity of every person. Two of the most prominent UAE-based humanitarian organisations exemplify this commitment in powerful ways.

The Khalifa Bin Zayed Al Nahyan Foundation was established in 2007 and has since provided aid to 38 countries worldwide. The Foundation focuses on three key areas: health, education, and humanitarian relief. In the field of health, it supports medical facilities, provides essential medicines, and funds treatment for those who cannot afford care. In education, it builds schools, supplies learning materials, and offers scholarships to help young people access quality education. In humanitarian relief, the Foundation responds to natural disasters, conflicts, and crises with food, shelter, and medical assistance. Its work reflects the deeply held UAE value that every human life has worth and deserves protection.

Dubai Cares was also established in 2007 and has reached 16 million beneficiaries across 45 countries. Dubai Cares is focused on children's education, recognising that education is the most powerful tool for breaking the cycle of poverty and meeting needs at every level — basic needs, psychological needs, and self-fulfilment needs. By ensuring that children have access to quality schooling, Dubai Cares addresses not only their immediate need for knowledge but also their long-term need for self-esteem, opportunity, and hope. The organisation's programmes include building schools, training teachers, providing school meals, and supporting girls' education in countries where it is most needed.

Both organisations reflect the UAE's commitment to the value of human life, a principle rooted in the teachings of Islam and the vision of the nation's founding fathers. The UAE's humanitarian work is not limited by geography or politics — aid is provided wherever there is need, regardless of nationality, religion, or background.

The problem tree strategy is a useful tool for analysing complex social issues that these organisations address. In a problem tree, the problem itself is the trunk, the causes of the problem are the roots, and the effects of the problem are the branches. For example, if the problem is "children cannot attend school," the roots might include poverty, lack of infrastructure, and conflict, while the branches might include illiteracy, unemployment, and continued poverty. By understanding both causes and effects, organisations can design more effective interventions that address the root causes rather than just treating the symptoms.`,
    reading2Title: 'Champions of Human Dignity',
    reading2Content: `Throughout history, extraordinary individuals have demonstrated that one person's commitment to human dignity can change the world. Two such champions are Malala Yousafzai and Nelson Mandela, whose stories inspire millions and embody the principle that we are all part of one human family.

Malala Yousafzai grew up in the Swat Valley in Pakistan, where the Taliban prohibited girls from attending school. At just 11 years old, Malala began speaking out publicly for girls' right to education. She wrote a blog for the BBC about her life under Taliban rule and became a powerful voice for children's rights. In 2012, she survived an assassination attempt when a Taliban gunman shot her on a school bus. Instead of silencing her, the attack made her voice even stronger. After recovering, Malala continued her advocacy on a global stage. In 2014, at the age of 17, she became the youngest Nobel Prize laureate in history, receiving the Nobel Peace Prize for her struggle against the suppression of children and young people and for the right of all children to education. She went on to study at the University of Oxford and founded the Malala Fund, which works to ensure every girl can access 12 years of free, safe, quality education.

Nelson Mandela fought against apartheid — the system of racial segregation and discrimination in South Africa. For decades, the Black majority was denied basic rights, including the right to vote, to move freely, and to access quality education and healthcare. Mandela dedicated his life to fighting this injustice. In 1964, he was sentenced to life in prison for his activism. He spent 27 years in prison, much of it on Robben Island, enduring harsh conditions but never abandoning his principles. When he was finally released in 1990, he did not seek revenge. Instead, he led South Africa through a peaceful transition to democracy. In 1994, he became South Africa's first Black president, leading a government of national unity and championing reconciliation over retribution.

Both Malala and Mandela demonstrated that one person's commitment can change the world. Their stories connect to the concept that "we are all part of one human family" — when any member of that family suffers, the whole family is affected. The UAE's values of tolerance, compassion, and humanitarianism align with these principles. The nation's support for education, humanitarian aid, and peaceful coexistence reflects the same commitment to human dignity that Malala and Mandela championed throughout their lives.`,
    reading1Time: 9,
    reading2Time: 8,
    kwlExplanation: KWL_EXPLANATION,
    discussionQuestions: [
      'How do the Khalifa Bin Zayed Al Nahyan Foundation and Dubai Cares reflect the UAE\'s commitment to human life?',
      'In the problem tree strategy, why is it important to identify the roots (causes) and not just the branches (effects)?',
      'What does Malala\'s story teach us about the power of standing up for what is right, even when it is dangerous?',
      'How did Nelson Mandela\'s approach to reconciliation after prison demonstrate a commitment to human dignity?',
      'What does "we are all part of one human family" mean to you, and how does it relate to the lessons in this unit?'
    ],
    keyFacts: [
      'The Khalifa Bin Zayed Al Nahyan Foundation was established in 2007 and has provided aid to 38 countries.',
      'The Foundation focuses on health, education, and humanitarian relief.',
      'Dubai Cares was established in 2007 and has reached 16 million beneficiaries across 45 countries.',
      'Dubai Cares focuses on children\'s education, addressing basic, psychological, and self-fulfilment needs.',
      'The problem tree strategy identifies the problem (trunk), its causes (roots), and its effects (branches).',
      'Malala Yousafzai survived an assassination attempt in 2012 and became the youngest Nobel Prize laureate in 2014 at age 17.',
      'Nelson Mandela spent 27 years in prison fighting apartheid and became South Africa\'s first Black president in 1994.',
      'Both the UAE\'s humanitarian work and the stories of Malala and Mandela reflect the principle that we are all part of one human family.',
      'The UAE\'s values of tolerance, compassion, and humanitarianism align with the global commitment to human dignity.'
    ],
    visualType: 'timeline',
    visualData: {
      type: 'timeline',
      title: 'Humanitarian Milestones',
      events: [
        { year: 1990, event: 'Nelson Mandela released from prison after 27 years', category: 'human_rights' },
        { year: 1994, event: 'Nelson Mandela becomes South Africa\'s first Black president', category: 'human_rights' },
        { year: 2007, event: 'Khalifa Bin Zayed Al Nahyan Foundation established', category: 'uae_humanitarian' },
        { year: 2007, event: 'Dubai Cares established, reaching 16 million beneficiaries', category: 'uae_humanitarian' },
        { year: 2012, event: 'Malala Yousafzai survives assassination attempt', category: 'human_rights' },
        { year: 2013, event: 'Malala addresses the United Nations on her 16th birthday', category: 'human_rights' },
        { year: 2014, event: 'Malala becomes youngest Nobel Peace Prize laureate at age 17', category: 'human_rights' }
      ]
    },
    quizQuestions: [
      {
        id: 'G7_T2_U5_L4_Q1',
        question: 'How many countries has the Khalifa Bin Zayed Al Nahyan Foundation provided aid to?',
        options: ['16', '38', '45', '23'],
        correctAnswer: 1,
        explanation: 'The Khalifa Bin Zayed Al Nahyan Foundation has provided aid to 38 countries worldwide since its establishment in 2007.'
      },
      {
        id: 'G7_T2_U5_L4_Q2',
        question: 'In the problem tree strategy, what do the "roots" represent?',
        options: ['The effects of the problem', 'The solutions to the problem', 'The causes of the problem', 'The timeline of the problem'],
        correctAnswer: 2,
        explanation: 'In the problem tree, the roots represent the causes of the problem. Understanding causes is essential for designing effective interventions that address root issues rather than just symptoms.'
      },
      {
        id: 'G7_T2_U5_L4_Q3',
        question: 'How old was Malala Yousafzai when she received the Nobel Peace Prize?',
        options: ['14', '15', '17', '20'],
        correctAnswer: 2,
        explanation: 'Malala was 17 years old when she received the Nobel Peace Prize in 2014, making her the youngest Nobel laureate in history.'
      },
      {
        id: 'G7_T2_U5_L4_Q4',
        question: 'How many years did Nelson Mandela spend in prison?',
        options: ['15 years', '20 years', '27 years', '30 years'],
        correctAnswer: 2,
        explanation: 'Nelson Mandela spent 27 years in prison for his activism against apartheid before being released in 1990.'
      },
      {
        id: 'G7_T2_U5_L4_Q5',
        question: 'What is the primary focus of Dubai Cares?',
        options: ['Healthcare for the elderly', 'Children\'s education', 'Environmental protection', 'Military assistance'],
        correctAnswer: 1,
        explanation: 'Dubai Cares is primarily focused on children\'s education, recognising that education is the most powerful tool for breaking the cycle of poverty and meeting needs at all levels.'
      }
    ],
    interactiveStrategies: [
      {
        strategy: 'Problem Tree Analysis',
        description: 'Students use the problem tree strategy to analyse a social issue, identifying causes and effects.',
        duration: 25,
        instructions: '1. Introduce the problem tree strategy: trunk = problem, roots = causes, branches = effects. 2. Write a social issue on the board as the trunk (e.g., "Children cannot attend school" or "People lack access to clean water"). 3. Divide students into groups of 4-5. 4. Each group draws a problem tree on a large sheet of paper: the trunk in the middle, roots going down, branches going up. 5. Groups brainstorm and write at least 4 causes in the roots section and at least 4 effects in the branches section. 6. Groups present their trees to the class. 7. Class discussion: Which causes seem most important to address? Why? How do the UAE\'s humanitarian organisations address these root causes? 8. Students write a reflection: "If I could address one root cause, which would I choose and why?"'
      },
      {
        strategy: 'Champions of Dignity Research Project',
        description: 'Students research and present on a champion of human dignity, creating a mini-biography poster.',
        duration: 30,
        instructions: '1. Provide students with a list of champions of human dignity (Malala Yousafzai, Nelson Mandela, Sheikh Zayed, and others). 2. Each student selects one champion to research. 3. Students find key facts: What need was denied? What action did the champion take? What was the outcome? How does their story connect to the concept of "one human family"? 4. Students create a mini-biography poster on A3 paper with: name and photo/illustration, the need that was denied, the action taken, the outcome, and a quote if available. 5. Students present their posters in a gallery walk — posters are displayed around the room and students walk around reading each other\'s work. 6. After the gallery walk, students write one thing they learned from a classmate\'s poster that inspired them.'
      }
    ]
  },

  // Lesson 5: Take Action Now!
  {
    lessonId: 'G7_T2_Unit 5_l5',
    keyVocabulary: ['action', 'planning', 'donation', 'volunteer', 'collaboration'],
    reading1Title: 'Planning for Action',
    reading1Content: `President John F. Kennedy once said, "One person can make a difference, and everyone should try." This powerful statement captures the essence of what it means to take action for the good of others. Throughout this unit, we have learned about human needs, the consequences of unmet needs, and the organisations and individuals who work to meet those needs. Now it is time to think about what you can do.

The Letterman Jacket story is an inspiring example of how taking action can transform lives. Mitch and Abby were students who participated in Unified Sports — a programme where people with and without intellectual disabilities play together on the same teams. When Mitch first joined, he was nervous and unsure of himself. Abby had never played sports before and worried about fitting in. But together, they were determined to succeed. They persevered through challenges, supported each other during difficult moments, and worked together as a team. Over time, they improved their skills, built friendships, and earned the respect of their peers. The Letterman Jacket — traditionally a symbol of athletic achievement — became for them a symbol of success and inclusion. It showed that everyone is capable of great things when given the opportunity.

Unified Sports demonstrates a fundamental truth: inclusion benefits everyone, not just those who are typically marginalised. When people of different abilities work together, they learn from each other, develop empathy, and create communities where everyone belongs. The UAE has embraced this philosophy through initiatives like the Special Olympics World Games Abu Dhabi 2019, which brought together athletes from around the world and showcased the power of inclusion and determination.

When planning a project to address human needs, it helps to assign specific roles within a group. There are six key group roles that ensure every aspect of the project is covered. Researchers gather information about the issue — they find facts, statistics, and stories that help the group understand the problem. Designers create materials such as posters, presentations, and social media content to communicate the group's message. Surveyors collect data by asking questions, conducting interviews, and gathering feedback from the community. Organisers manage logistics — they coordinate schedules, arrange venues, and ensure everything runs smoothly. Recorders document progress by taking notes, photographing events, and keeping track of what has been accomplished. Consolidators bring it all together — they synthesize information from all the other roles and ensure the project stays focused and cohesive.`,
    reading2Title: 'From Planning to Action',
    reading2Content: `Having a plan is important, but the real impact comes from turning that plan into action. Donation day execution shows how to move from ideas to reality in a structured and effective way. The process involves four key steps: first, identify the cause — decide specifically what need you want to address and who will benefit. Second, gather resources — collect the materials, people, and funding needed to carry out the plan. Third, execute the plan — put the plan into action on the designated day, with each group role fulfilling its responsibilities. Fourth, reflect on outcomes — after the event, evaluate what went well, what could be improved, and what impact was achieved.

The importance of follow-through and commitment cannot be overstated. Many people have great ideas, but far fewer see them through to completion. Commitment means staying dedicated even when challenges arise, when enthusiasm wanes, or when obstacles seem overwhelming. It means showing up, doing the work, and not giving up until the goal is achieved. This is true whether you are organising a donation drive, volunteering at a shelter, or advocating for a cause you believe in.

The UAE provides many inspiring examples of youth action. Student-led charity drives collect food, clothing, and supplies for families in need. Community service projects bring young people together to clean parks, plant trees, and improve neighbourhoods. Environmental initiatives led by students raise awareness about sustainability, recycling, and conservation. These examples show that age is not a barrier to making a difference — what matters is the willingness to act.

How do individual actions connect to global impact? Consider this: one student organising a donation drive at their school may seem like a small act. But when thousands of students across the country do the same, the combined effect is enormous. When young people around the world take action, the ripple effect reaches every corner of the globe. This is the power of collective action — many small contributions creating massive change.

As we conclude the Human Needs unit, take time to reflect on what you have learned. Think about the difference between wants and needs, the conflict circle and how to break it, the organisations and individuals who champion human dignity, and the power of taking action. Most importantly, ask yourself: "What will I do with what I have learned?" Knowledge without action is like a seed that is never planted — it has potential but never grows. The true measure of learning is how it changes the way you live and the impact you have on the world around you.`,
    reading1Time: 9,
    reading2Time: 8,
    kwlExplanation: KWL_EXPLANATION,
    discussionQuestions: [
      'What does JFK\'s quote "One person can make a difference, and everyone should try" mean to you?',
      'How does the Letterman Jacket story illustrate the power of inclusion and determination?',
      'Which of the six project roles do you think would suit you best, and why?',
      'Why is follow-through and commitment more important than just having a good idea?',
      'How can your individual actions at school connect to a larger global impact?'
    ],
    keyFacts: [
      'JFK said: "One person can make a difference, and everyone should try."',
      'The Letterman Jacket story involves Mitch and Abby participating in Unified Sports, where people with and without intellectual disabilities play together.',
      'Unified Sports shows that everyone is capable of great things when given the opportunity.',
      'The Special Olympics World Games Abu Dhabi 2019 showcased the power of inclusion and determination.',
      'The six project group roles are: Researchers, Designers, Surveyors, Organisers, Recorders, and Consolidators.',
      'Researchers gather information, Designers create materials, Surveyors collect data, Organisers manage logistics, Recorders document progress, Consolidators bring it all together.',
      'The four steps of donation day execution are: identify the cause, gather resources, execute the plan, and reflect on outcomes.',
      'Commitment means staying dedicated even when challenges arise or enthusiasm wanes.',
      'Individual actions connect to global impact through the power of collective action — many small contributions creating massive change.'
    ],
    visualType: 'diagram',
    visualData: {
      type: 'radial',
      title: 'Project Group Roles',
      center: 'Project Team',
      branches: [
        {
          name: 'Researchers',
          description: 'Gather information about the issue — find facts, statistics, and stories',
          icon: 'search'
        },
        {
          name: 'Designers',
          description: 'Create materials such as posters, presentations, and social media content',
          icon: 'palette'
        },
        {
          name: 'Surveyors',
          description: 'Collect data by asking questions, conducting interviews, and gathering feedback',
          icon: 'clipboard'
        },
        {
          name: 'Organisers',
          description: 'Manage logistics — coordinate schedules, arrange venues, ensure smooth operations',
          icon: 'calendar'
        },
        {
          name: 'Recorders',
          description: 'Document progress — take notes, photograph events, track accomplishments',
          icon: 'notebook'
        },
        {
          name: 'Consolidators',
          description: 'Bring it all together — synthesize information and keep the project focused',
          icon: 'link'
        }
      ]
    },
    quizQuestions: [
      {
        id: 'G7_T2_U5_L5_Q1',
        question: 'What is Unified Sports?',
        options: ['A competition only for athletes with disabilities', 'A programme where people with and without intellectual disabilities play together', 'A professional sports league in the UAE', 'A training programme for Olympic athletes'],
        correctAnswer: 1,
        explanation: 'Unified Sports is a programme where people with and without intellectual disabilities play together on the same teams, promoting inclusion and teamwork.'
      },
      {
        id: 'G7_T2_U5_L5_Q2',
        question: 'Which project role is responsible for managing logistics like schedules and venues?',
        options: ['Researchers', 'Recorders', 'Organisers', 'Consolidators'],
        correctAnswer: 2,
        explanation: 'Organisers manage logistics — they coordinate schedules, arrange venues, and ensure everything runs smoothly on the day of the project.'
      },
      {
        id: 'G7_T2_U5_L5_Q3',
        question: 'What are the four steps of donation day execution in the correct order?',
        options: ['Execute, identify, gather, reflect', 'Gather, identify, reflect, execute', 'Identify the cause, gather resources, execute the plan, reflect on outcomes', 'Reflect, execute, gather, identify'],
        correctAnswer: 2,
        explanation: 'The four steps are: identify the cause, gather resources, execute the plan, and reflect on outcomes. This structured approach ensures projects are effective and impactful.'
      },
      {
        id: 'G7_T2_U5_L5_Q4',
        question: 'What did the Letterman Jacket become a symbol of for Mitch and Abby?',
        options: ['Wealth and privilege', 'Academic achievement only', 'Success and inclusion', 'Competition and winning'],
        correctAnswer: 2,
        explanation: 'For Mitch and Abby, the Letterman Jacket became a symbol of success and inclusion — showing that everyone is capable of great things when given the opportunity.'
      },
      {
        id: 'G7_T2_U5_L5_Q5',
        question: 'Why is commitment described as more important than just having a good idea?',
        options: ['Because ideas are always bad', 'Because good ideas are rare', 'Because many people have ideas but far fewer see them through to completion', 'Because commitment requires no effort'],
        correctAnswer: 2,
        explanation: 'Many people have great ideas, but far fewer see them through to completion. Commitment means staying dedicated even when challenges arise, which is what turns ideas into real impact.'
      }
    ],
    interactiveStrategies: [
      {
        strategy: 'Project Planning Workshop',
        description: 'Students plan a real or simulated project to address a human need, assigning group roles and creating an action plan.',
        duration: 35,
        instructions: '1. Divide students into groups of 6 (or as close as possible). 2. Each group chooses a human need they want to address (e.g., hunger in the community, lack of school supplies for refugees, environmental clean-up). 3. Within each group, students assign the six project roles: Researcher, Designer, Surveyor, Organiser, Recorder, and Consolidator. 4. Groups work through the four planning steps: identify the cause (what specific need and who will benefit), gather resources (what materials, people, and funding are needed), plan execution (what will happen on the day, step by step), and plan reflection (how will you measure success). 5. Each role completes their specific task: Researchers find 3 key facts, Designers sketch a poster idea, Surveyors write 3 survey questions, Organisers create a timeline, Recorders set up a documentation plan, Consolidators create a one-paragraph project summary. 6. Groups present their action plans to the class. 7. Class votes on the most achievable and impactful plan. 8. If possible, the winning plan is actually executed as a class project.'
      },
      {
        strategy: 'Reflection and Commitment Ceremony',
        description: 'Students reflect on the entire Human Needs unit and make a personal commitment to take action.',
        duration: 20,
        instructions: '1. Provide each student with a reflection worksheet with four sections: "The most important thing I learned in this unit," "The story that inspired me the most and why," "One thing I will do differently because of what I learned," and "My commitment to action." 2. Students spend 10 minutes completing the reflection individually and thoughtfully. 3. In the "My commitment to action" section, students write one specific, measurable action they will take in the next month (e.g., "I will volunteer at a food bank once," "I will donate three items of clothing," "I will teach a friend about Maslow\'s hierarchy"). 4. Students share their commitments with a partner. 5. Volunteers share their commitments with the class. 6. Create a "Commitment Wall" where students post their written commitments. 7. Teacher concludes: "Remember JFK\'s words — one person can make a difference, and everyone should try. Your commitment today is your first step toward making that difference."'
      }
    ]
  }
];

export function getG7T2Unit5LessonContent(lessonId: string): LessonContent | null {
  return g7t2Unit5.find(l => l.lessonId === lessonId) || null;
}
