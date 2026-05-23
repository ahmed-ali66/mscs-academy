// ═══════════════════════════════════════════════════════════════
// G6 TERM 1 — REAL TEXTBOOK CONTENT
// Extracted from MoE MSCS Student Textbook Grade 6 Volume 1
// ═══════════════════════════════════════════════════════════════

export interface LessonContent {
  lessonId: string;
  keyVocabulary: string[];
  reading1Title: string;
  reading1Content: string;
  reading2Title?: string;
  reading2Content?: string;
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

// ═══════════════════════════════════════════════════════════════
// UNIT 1: EQUALITY AND JUSTICE AS FAIRNESS
// ═══════════════════════════════════════════════════════════════

export const g6t1Unit1: LessonContent[] = [
  // Lesson 1: Aspects of Equality Among People
  {
    lessonId: 'G6_T1_Unit1_l1',
    keyVocabulary: ['equality', 'fairness', 'justice'],
    reading1Title: 'The Monkey and the Scale',
    reading1Content: `Once upon a time, there were two cats named Fulla and Yasmina. Fulla and Yasmina were good friends and would often help each other look for food.

One morning, the cats woke up and looked out the window, only to see everything covered in snow. They felt cold and sad, knowing that finding food in this weather would be very difficult. The cats waited until they were so hungry they had no choice but to go in search of food. They had been searching for a long time, when suddenly Fulla saw a sardine in front of them. Yasmina picked it up in her mouth and the two friends hurried back home.

Once they were home, Yasmina said, "I will eat the whole sardine myself, as I was the one who carried it back home and I'm very hungry." "I should eat the sardine because I found it," objected Fulla, "and I am hungry, too!" Soon they were screeching and hissing and snarling at each other; they were fighting so loudly that a monkey that was passing by stopped to see what was causing all that noise.

Unable to find a solution, the cats decided to tell their story to the monkey and see what he thought. The monkey thought hard about their problem. He sat for a long while quietly and then he said, "You should go and see the judge. He holds court under the giant fig tree." Then, the monkey hurried to the tree. He quickly put on a judge's robe and sat behind the table waiting for the cats to arrive.

Soon the cats approached the judge, each of them looking angrily at the other. Fulla spoke first. "Your Honour, as we were out in the cold looking for food, I found a sardine. Clearly the sardine is mine!" Yasmina objected, "Your Honour, yes — my friend was the first to call our attention to the sardine, but I was there and I carried it back home."

From a box under the table, the monkey brought out a small scale. Holding the sardine, he cut it into two uneven pieces. Then, he placed each piece of fish on each side of the scale. When he lifted the scale, the side with the larger piece sunk lower. The monkey shook his head and said, "This is unfair! The two pieces should be exactly even." So, he took a bite of the largest piece and put the piece of sardine back on the scale.

When he lifted the scale again, the second side now outweighed the first. He picked up the other piece and took a bite. Again he said, "This is unfair! The two pieces should be exactly even." The judge continued to eat from each piece while shaking his head and exclaiming that the two pieces should be exactly even. Soon, only one small piece of fish was left. The monkey took the last piece while the cats stood stunned in front of him. He then put the fish in his mouth and said, "This is the judge's fee!" The cats stood in silence. They realised that their disagreement had left them both with no fish — and empty stomachs!`,
    reading2Title: 'The Message of Tolerance by His Highness Sheikh Mohammed bin Rashid Al Maktoum',
    reading2Content: `"Brothers and sisters... May God's peace, mercy and blessings be upon you. Tomorrow the world will celebrate the International Day of Tolerance.

I vividly remember my late father Sheikh Rashid's majlis, over four decades ago. I remember the form of the majlis and its attendees. Citizens, young and old, from the cities and Bedouins from the desert used to attend the majlis. The people that came were from various tribes and sects, and people of different backgrounds and races. But, to Rashid, they were all citizens. They were all given the same respect, appreciation, rights and considerations. The closest to Rashid were the hardest-working people, and those that excelled in their fields.

The residents and visitors who attended Rashid's majlis were treated exactly the same as citizens. They were from different religions, nations and cultures, and all were welcome in Rashid's majlis and were welcome in Dubai. In response, the residents gave love, gratitude and loyalty, attitudes that both they and their children still reflect.

After our union, I came to know Sheikh Zayed (may God have mercy upon him) more closely. Our relationship developed into that of a father and son, a teacher and student. I have come to know his majlis, his morals and his appreciation of people. His majlis was a school in itself, as were his talks and the way he dealt with people.

Sheikh Zayed welcomed everyone into his majlis, regardless of their origin, tribe, sect, denomination or religion. Sheikh Zayed was generous with everyone; he taught everyone and loved everyone. Everyone loved him in return, irrespective of their differences, and they all prayed for his soul.

This is the legacy of Sheikh Zayed and Sheikh Rashid. Sheikh Zayed's greatest legacies were his values, spirit and morals."`,
    discussionQuestions: [
      'What happened between the monkey and the cats? Why did both cats end up with nothing?',
      'How could Fulla and Yasmina have solved their dispute fairly without the monkey?',
      'What does Sheikh Mohammed say is the value that governs the relationship between the nation and its people?',
      'How does the UAE majlis tradition show equality in practice?',
      'According to the Universal Declaration of Human Rights (Article 2), what rights should all people have regardless of their background?',
    ],
    keyFacts: [
      'Equality means treating all people with the same respect and giving them the same rights regardless of their background',
      'Fairness requires considering everyone\'s needs and contributions, not just treating everyone identically',
      'The UAE\'s majlis tradition, as described by Sheikh Mohammed bin Rashid, treated citizens and residents equally regardless of origin',
      'Sheikh Zayed welcomed everyone regardless of tribe, sect, denomination, or religion',
      'Article 2 of the Universal Declaration of Human Rights states that all people have the same rights regardless of race, gender, language, or religion',
      'Article 23 states that everyone has the right to equal pay for equal work',
      'Article 26 states that everyone has the right to education',
      'The story of the Monkey and the Scale shows that selfish "fairness" can leave everyone worse off',
    ],
    visualType: 'venn',
    visualData: {
      leftTitle: 'Equality',
      rightTitle: 'Fairness',
      centerTitle: 'Both',
      leftItems: ['Same rights for all', 'Equal treatment under law', 'No discrimination'],
      rightItems: ['Considering individual needs', 'Just distribution', 'Contextual judgment'],
      centerItems: ['Justice as the goal', 'Respect for all people', 'UAE values'],
    },
    quizQuestions: [
      { id: 'u1l1q1', question: 'In the story of the Monkey and the Scale, why did both cats end up with nothing?', options: ['The monkey ate the fish while pretending to make it fair', 'The fish was rotten', 'One cat ate it all', 'They shared it equally'], correctAnswer: 0, explanation: 'The monkey kept taking bites to "make the pieces even" until nothing was left. This shows how selfish claims to fairness can leave everyone worse off.' },
      { id: 'u1l1q2', question: 'How could Fulla and Yasmina have solved their dispute fairly?', options: ['Fight until one wins', 'Split the sardine equally between them', 'Give it to someone else', 'Throw it away'], correctAnswer: 1, explanation: 'The fair solution would have been to divide the sardine equally, acknowledging both contributions — Fulla found it and Yasmina carried it.' },
      { id: 'u1l1q3', question: 'According to Sheikh Mohammed bin Rashid, how were residents treated in Sheikh Rashid\'s majlis?', options: ['Differently from citizens', 'Exactly the same as citizens, regardless of religion or nationality', 'Only citizens were welcome', 'They had to pay to attend'], correctAnswer: 1, explanation: 'Sheikh Mohammed emphasised that residents and visitors were treated exactly the same as citizens, regardless of religion, nation, or culture.' },
      { id: 'u1l1q4', question: 'What does Article 2 of the Universal Declaration of Human Rights guarantee?', options: ['Free healthcare for all', 'The same rights and freedoms for all people regardless of race, gender, language, or religion', 'The right to vote in every country', 'Free education only for citizens'], correctAnswer: 1, explanation: 'Article 2 states that all people have the same rights and freedoms, regardless of race, gender, language, or religion.' },
      { id: 'u1l1q5', question: 'What is the key lesson from Sheikh Zayed\'s approach to people in his majlis?', options: ['Only Emiratis should be welcomed', 'Wealth determines who is respected', 'Everyone should be welcomed and treated equally regardless of their differences', 'Only people of the same religion should mix'], correctAnswer: 2, explanation: 'Sheikh Zayed welcomed everyone regardless of origin, tribe, sect, denomination, or religion — showing that true equality means including everyone.' },
    ],
    interactiveStrategies: [
      { strategy: 'Think-Pair-Share', description: 'Reflect on a personal experience with unfairness and share with a partner', duration: 5, instructions: 'Think about a time you felt something was unfair. Share with your partner: What happened? How did it feel? What would have made it fair?' },
      { strategy: 'Role Playing', description: 'Act out the Monkey and the Scale story to negotiate a fair solution', duration: 7, instructions: 'In pairs, role-play the story of the Monkey and the Scale. One student plays Fulla, one plays Yasmina. Can you negotiate a fair solution without the monkey?' },
      { strategy: 'Summarizing', description: 'Write a one-sentence summary of the main lesson on an index card', duration: 3, instructions: 'In one sentence, summarize the main lesson from the Monkey and the Scale story. Write it on your index card.' },
    ],
  },

  // Lesson 2: How is Fair Distribution Accomplished
  {
    lessonId: 'G6_T1_Unit1_l2',
    keyVocabulary: ['fair distribution', 'resources', 'allocation'],
    reading1Title: 'How Is Fair Distribution Accomplished?',
    reading1Content: `Fair distribution means making sure that resources, opportunities, and benefits are shared in a way that is just and equitable. This does not always mean giving everyone exactly the same thing — it means giving each person what they need to have a fair chance at success.

Think about a classroom. If a teacher gives every student the same size chair, that seems equal. But what if one student is much taller than the others? That student would be uncomfortable. Fair distribution means considering people's different needs and circumstances.

In society, fair distribution involves decisions about who gets what resources — such as money, land, education, and healthcare. Governments play an important role in ensuring fair distribution through laws, taxes, and social programmes.

The UAE works to achieve fair distribution through:
- Free education for all students from kindergarten through university
- Free healthcare for all citizens
- Subsidised housing programmes
- Social support for low-income families
- Equal job opportunities protected by law`,
    discussionQuestions: [
      'What is the difference between giving everyone the same thing and giving everyone what they need?',
      'How does the UAE ensure fair distribution of resources?',
      'Can you think of a situation where equal treatment is not the same as fair treatment?',
    ],
    keyFacts: [
      'Fair distribution means sharing resources in a way that is just and equitable',
      'Equal treatment and fair treatment are not always the same thing',
      'Governments use laws, taxes, and social programmes to achieve fair distribution',
      'The UAE provides free education, free healthcare, subsidised housing, and social support',
      'Fair distribution considers people\'s different needs and circumstances',
    ],
    visualType: 'chart',
    visualData: {
      title: 'UAE Fair Distribution Systems',
      items: [
        { label: 'Free Education', value: 95, description: 'K-12 and university for all citizens' },
        { label: 'Free Healthcare', value: 90, description: 'Comprehensive coverage for citizens' },
        { label: 'Housing Support', value: 75, description: 'Subsidised housing programmes' },
        { label: 'Job Protection', value: 85, description: 'Equal opportunity laws' },
      ],
    },
    quizQuestions: [
      { id: 'u1l2q1', question: 'What is the difference between equal treatment and fair treatment?', options: ['They are exactly the same', 'Equal treatment gives everyone the same thing; fair treatment gives everyone what they need', 'Fair treatment always means giving more to some people', 'Equal treatment is always better'], correctAnswer: 1, explanation: 'Equal treatment means giving everyone the same thing regardless of circumstances. Fair treatment considers different needs and gives each person what they need for a fair chance.' },
      { id: 'u1l2q2', question: 'Which of the following is an example of fair (but not equal) distribution?', options: ['Giving every student the same textbook', 'Providing extra tutoring for students who are struggling', 'Charging everyone the same price for food', 'Giving every employee the same salary'], correctAnswer: 1, explanation: 'Extra tutoring for struggling students is fair (not equal) because it addresses different needs so everyone has a chance to succeed.' },
      { id: 'u1l2q3', question: 'How does the UAE support fair distribution of resources?', options: ['By charging for all services', 'Through free education, healthcare, housing programmes, and equal opportunity laws', 'By giving everyone the same amount of money', 'By not getting involved in distribution'], correctAnswer: 1, explanation: 'The UAE supports fair distribution through free education, free healthcare, subsidised housing, social support, and equal opportunity laws.' },
      { id: 'u1l2q4', question: 'Why might a government use taxes as a tool for fair distribution?', options: ['To punish wealthy people', 'To collect money that can be used for public services like education and healthcare', 'Taxes have nothing to do with fair distribution', 'Only to build roads'], correctAnswer: 1, explanation: 'Taxes allow governments to collect revenue and redistribute it through public services, ensuring all people have access to essential resources regardless of their personal wealth.' },
      { id: 'u1l2q5', question: 'In a classroom, a teacher gives extra time on a test to a student with a learning disability. Is this fair?', options: ['No, because it is not equal treatment', 'Yes, because fair treatment means giving each person what they need to have an equal opportunity', 'Only if all students get extra time', 'It depends on the student\'s grade'], correctAnswer: 1, explanation: 'Fairness does not always mean sameness. Giving a student with a learning disability extra time levels the playing field so they have an equal opportunity to demonstrate their knowledge.' },
    ],
    interactiveStrategies: [
      { strategy: 'Problem-Based Learning', description: 'Create a fair distribution plan for limited school tablets', duration: 8, instructions: 'Your school has 20 new tablets but 30 students. Work in groups of 4 to create a fair distribution plan. Present your plan to the class.' },
      { strategy: 'Index Cards', description: 'Write an example of fair but not equal distribution', duration: 4, instructions: 'On your index card, write one example of fair (but not equal) distribution. We will share and discuss as a class.' },
      { strategy: 'Blogs', description: 'Write a short blog post about fairness in your daily life', duration: 5, instructions: 'Write a short blog post (5-7 sentences) about a time when you experienced fair or unfair treatment. How did it affect you? What would fairness look like in that situation?' },
    ],
  },

  // Lesson 3: Distributive Justice
  {
    lessonId: 'G6_T1_Unit1_l3',
    keyVocabulary: ['distributive justice', 'equality', 'fairness', 'justice'],
    reading1Title: 'The Elephant and the Blind Men',
    reading1Content: `An Indian parable tells the story of six blind men who heard that an enormous elephant would be brought to their town to take part in an annual celebration. The six men went to talk to the town governor and asked his permission to touch the elephant when it came. They had heard about elephants and how big they were, but they could not imagine their shape or form. The governor agreed and asked each of them to describe the elephant in one sentence after touching it.

On the day of the celebration and in the presence of the townspeople, the six men surrounded the elephant and began to touch it. When they had finished, they each described the elephant in front of the governor and the huge crowd of people.

The first man said, "The elephant looks like a rope." Surprised, the second man said, "Where is the rope? It is exactly like a wall." The third man laughed and said, "A rope and a wall! How is that even possible when the elephant is nothing but a big spear?" The fourth man said, "What you are saying is wrong. I was keen to discover the elephant, but shocked when I found out it is only a harmless fat snake." The fifth man said, "What is all this nonsense? The elephant is like a fan made out of leather!" The sixth man laughed and said, "The elephant is nothing but a tree trunk."

During each description, everyone, except the governor, laughed loudly. After the six men had finished, the governor stood up and made a sign to the crowd to stop laughing. When everyone was quiet, he addressed them:

"Every one of them was right about the description of the part of the elephant they touched. The first man said the elephant looked like a rope because he touched the tail. The second one said the elephant is like a wall because he touched its side. The third one said it is like a spear because he touched the tusk. The fourth one said the elephant is like a snake because he touched the trunk. The fifth one said the elephant is like a fan because he touched one of its ears. And the last one said the elephant is like a tree trunk because he touched its leg. So, each of the six was partially right; the only mistake they made was not waiting to know the whole truth. We also, without exception, often make this mistake. We speak about part of the truth and we think that this part is the whole truth."`,
    reading2Title: 'Healthcare Funding and Distributive Justice',
    reading2Content: `Human societies are experiencing changes caused by ageing and overpopulation. In addition, health problems such as heart disease, obesity and diabetes are increasing at serious rates. This is putting pressure on the finances of healthcare systems around the world and making it more difficult for countries to increase development and fight poverty.

Types of healthcare systems vary widely throughout the world. Each has its own history and unique organisational structure. However, all healthcare systems are funded by one or more of the following resources:
1. Public taxes imposed by the government
2. The social health insurance system
3. Private health insurance
4. Direct payment of costs by those who receive healthcare
5. Grants and donations given by charitable institutions and individuals

Most countries have social care systems that are funded with a unique mixture of these five resources. However, the distribution of these resources and the financial amounts differ from one country to another.`,
    discussionQuestions: [
      'Was the governor being fair or unfair towards the six blind men when he made them describe the elephant in front of other people?',
      'What is the lesson of the Elephant and the Blind Men for understanding justice?',
      'What do you think is the best way to fund a healthcare system?',
      'What are the challenges that prevent countries from achieving justice in the healthcare sector?',
    ],
    keyFacts: [
      'Distributive justice is about how resources, opportunities, and benefits are fairly distributed in society',
      'The parable of the Elephant and the Blind Men teaches that partial perspectives can lead to incomplete understanding',
      'Seeing the "whole truth" is essential for making fair judgments about distribution',
      'Healthcare systems worldwide are funded through five main sources: public taxes, social insurance, private insurance, direct payment, and donations',
      'The UAE provides healthcare through a mix of government funding and mandatory health insurance',
      'Fair distribution in healthcare means ensuring all people can access medical treatment regardless of income',
      'The scales of justice symbol represents the balance needed in distributive justice',
    ],
    visualType: 'diagram',
    visualData: {
      title: '5 Sources of Healthcare Funding',
      items: ['Public Taxes', 'Social Health Insurance', 'Private Health Insurance', 'Direct Payment', 'Grants & Donations'],
    },
    quizQuestions: [
      { id: 'u1l3q1', question: 'In the parable of the Elephant and the Blind Men, what was the governor\'s key message?', options: ['The blind men were stupid', 'Each person was partially right but none saw the whole truth — we must consider all perspectives before making judgments', 'The elephant was too big to describe', 'Only the governor could see the truth'], correctAnswer: 1, explanation: 'The governor explained that each blind man was partially correct about the part they touched, but the mistake was not waiting to know the whole truth. This is a lesson about seeking complete understanding before making judgments.' },
      { id: 'u1l3q2', question: 'How many main sources fund healthcare systems worldwide?', options: ['2', '3', '5', '7'], correctAnswer: 2, explanation: 'There are 5 main sources: public taxes, social health insurance, private health insurance, direct payment, and grants/donations.' },
      { id: 'u1l3q3', question: 'What does the symbol of the scales of justice represent in distributive justice?', options: ['That heavier things are more valuable', 'The need to weigh and balance different needs and contributions fairly', 'That justice is about money only', 'That one side should always win'], correctAnswer: 1, explanation: 'The scales of justice symbolise the careful balance needed to weigh different perspectives, needs, and contributions to achieve fair distribution.' },
      { id: 'u1l3q4', question: 'Why is it difficult for countries to achieve distributive justice in healthcare?', options: ['Because healthcare is not important', 'Because resources are limited and demand is growing due to ageing populations, overpopulation, and rising disease rates', 'Because only wealthy people need healthcare', 'Because there is only one way to fund healthcare'], correctAnswer: 1, explanation: 'Ageing populations, overpopulation, and increasing rates of diseases like heart disease, obesity, and diabetes put pressure on healthcare finances, making fair distribution challenging.' },
      { id: 'u1l3q5', question: 'The parable of the Elephant and the Blind Men is most relevant to distributive justice because it teaches that:', options: ['Blind people cannot understand justice', 'Animals are not important to society', 'Partial perspectives can lead to unfair conclusions — we need to understand the full picture before distributing resources', 'Only leaders should make distribution decisions'], correctAnswer: 2, explanation: 'The parable shows that when we only see part of the picture, our judgments can be incomplete or biased. For distributive justice, we must consider all perspectives and the full situation before deciding how to distribute resources fairly.' },
    ],
    interactiveStrategies: [
      { strategy: 'Think-Pair-Share', description: 'Discuss how partial perspectives can lead to unfair decisions', duration: 5, instructions: 'Think about the Elephant and the Blind Men story. How might seeing only part of the picture lead to unfair decisions? Discuss with your partner.' },
      { strategy: 'Simulations', description: 'Simulate a healthcare funding allocation decision', duration: 7, instructions: 'Simulate a healthcare funding decision: You are a government with limited budget. Allocate funds across 5 healthcare sources. Defend your choices.' },
      { strategy: 'Content Recall', description: 'List the 5 sources of healthcare funding from memory', duration: 3, instructions: 'Without looking at your notes, list the 5 sources of healthcare funding on your index card.' },
    ],
  },

  // Lesson 4: Standards of Distributive Justice
  {
    lessonId: 'G6_T1_Unit1_l4',
    keyVocabulary: ['standards', 'criteria', 'merit', 'need', 'equality'],
    reading1Title: 'Standards of Distributive Justice',
    reading1Content: `When societies decide how to distribute resources, they use different standards or criteria. Three of the most important standards are:

1. Merit — Distributing resources based on what people have earned through their effort, skill, or contribution. For example, a student who studies hard and scores well on an exam earns a high grade.

2. Need — Distributing resources based on what people require to live a decent life. For example, a government may provide food assistance to families who cannot afford enough to eat.

3. Equality — Distributing resources equally among all people, regardless of their personal situation. For example, the right to free education is given equally to all citizens.

No single standard is perfect on its own. A just society usually combines all three standards. The challenge is finding the right balance. For instance:
- Should a doctor be paid more than a teacher? (Merit says yes, because of longer training)
- Should a poor family receive more government support? (Need says yes)
- Should every citizen receive the same basic services? (Equality says yes)

The UAE uses all three standards:
- Merit: Government jobs and promotions are based on qualifications and performance
- Need: Social support programmes target low-income families
- Equality: Free education and healthcare are available to all citizens equally`,
    discussionQuestions: [
      'Which standard of distributive justice do you think is most important: merit, need, or equality? Why?',
      'Can you think of a situation where two standards conflict with each other?',
      'How does the UAE balance these three standards in practice?',
    ],
    keyFacts: [
      'Three standards of distributive justice: merit, need, and equality',
      'Merit means distributing based on effort, skill, or contribution',
      'Need means distributing based on what people require to live decently',
      'Equality means distributing the same resources to everyone',
      'No single standard is perfect — a just society combines all three',
      'The UAE uses all three: merit for jobs, need for social support, equality for basic services',
    ],
    visualType: 'venn',
    visualData: {
      leftTitle: 'Merit',
      rightTitle: 'Need',
      centerTitle: 'Equality',
      leftItems: ['Effort-based rewards', 'Qualifications', 'Performance pay'],
      rightItems: ['Basic necessities', 'Support for the vulnerable', 'Healthcare access'],
      centerItems: ['Free education for all', 'Equal rights under law', 'Equal opportunity'],
    },
    quizQuestions: [
      { id: 'u1l4q1', question: 'Which standard of distributive justice would support giving a scholarship to a student with the highest grades?', options: ['Need', 'Equality', 'Merit', 'None of them'], correctAnswer: 2, explanation: 'Merit-based distribution rewards effort, skill, and achievement. A scholarship for the highest-achieving student is based on merit.' },
      { id: 'u1l4q2', question: 'A government provides free school meals to children from low-income families but not to wealthier families. Which standard does this follow?', options: ['Merit', 'Need', 'Equality', 'None of them'], correctAnswer: 1, explanation: 'Providing free meals based on low income follows the need standard — giving resources to those who require them most.' },
      { id: 'u1l4q3', question: 'Why is no single standard of distributive justice perfect on its own?', options: ['Because people do not care about justice', 'Because each standard alone can lead to unfair outcomes — a balance is needed', 'Because there are too many people', 'Because only equality matters'], correctAnswer: 1, explanation: 'Each standard has limitations: merit alone ignores the disadvantaged, need alone ignores effort, and equality alone ignores different circumstances. A just society balances all three.' },
      { id: 'u1l4q4', question: 'The UAE provides free education to all citizens. Which standard of distributive justice does this represent?', options: ['Merit only', 'Need only', 'Equality', 'None of them'], correctAnswer: 2, explanation: 'Free education for all citizens equally, regardless of income or achievement, represents the equality standard of distributive justice.' },
      { id: 'u1l4q5', question: 'Can merit and equality ever conflict? Which example shows this?', options: ['No, they always agree', 'Yes — giving everyone the same grade regardless of effort (equality) conflicts with rewarding those who worked hardest (merit)', 'Merit and equality are the same thing', 'Only need conflicts with other standards'], correctAnswer: 1, explanation: 'Merit and equality can conflict when equal treatment (giving everyone the same) does not reward individual effort and achievement. This is why societies must balance multiple standards.' },
    ],
    interactiveStrategies: [
      { strategy: 'Flip Charts', description: 'Create a flip chart comparing Merit, Need, and Equality standards', duration: 8, instructions: 'In groups of 4, create a flip chart comparing Merit, Need, and Equality. Give one real-world example for each standard. Present to the class.' },
      { strategy: 'Think-Pair-Share', description: 'Discuss which standard of justice is most important', duration: 4, instructions: 'Which standard do you think is most important? Discuss with your partner and be ready to explain why.' },
      { strategy: 'Collaborative Work', description: 'Rank situations by which standard of justice they represent', duration: 6, instructions: 'In groups of 3, sort the 8 scenario cards into Merit, Need, or Equality categories. If a scenario could fit more than one, discuss why. Be ready to defend your choices.' },
    ],
  },

  // Lesson 5: Justice in Leadership
  {
    lessonId: 'G6_T1_Unit1_l5',
    keyVocabulary: ['leadership', 'justice', 'responsibility', 'accountability'],
    reading1Title: 'Justice in Leadership',
    reading1Content: `A leader who is just treats all people fairly and makes decisions based on what is right, not what benefits them personally. Justice in leadership means being accountable, transparent, and committed to the welfare of all people — not just a select few.

Throughout history, just leaders have been remembered for their fairness. The UAE's founding father, Sheikh Zayed bin Sultan Al Nahyan, is an example of a leader who embodied justice. He was known for his open majlis where anyone could bring their concerns, regardless of their status or background.

Key principles of justice in leadership:
1. Accountability — Leaders must answer for their decisions and actions
2. Transparency — Decisions should be made openly, not in secret
3. Inclusiveness — All people affected by a decision should have a voice
4. Consistency — Rules should be applied equally to everyone
5. Wisdom — Leaders must consider the long-term consequences of their decisions

The Prophet Muhammad (peace be upon him) said: "The just leader will be with Allah on the Day of Judgment, seated on a throne of light on His right hand." This shows the immense importance Islam places on justice in leadership.

In the UAE, the Federal National Council gives citizens a voice in governance. The President and the Rulers of each emirate hold regular majlis sessions where people can raise concerns directly. This system of consultative governance (Shura) ensures that leadership remains connected to the needs of the people.`,
    discussionQuestions: [
      'What makes a leader just or unjust?',
      'How does the UAE majlis system promote justice in leadership?',
      'Why is accountability important for leaders?',
      'Can you name a historical leader known for justice? What did they do?',
    ],
    keyFacts: [
      'Just leaders treat all people fairly and make decisions based on what is right',
      'Key principles of just leadership: accountability, transparency, inclusiveness, consistency, wisdom',
      'Sheikh Zayed is an example of a just leader who welcomed everyone to his majlis',
      'Islam places great emphasis on justice in leadership',
      'The UAE uses consultative governance (Shura) through the Federal National Council and majlis sessions',
      'Accountability means leaders must answer for their decisions',
    ],
    visualType: 'chart',
    visualData: {
      title: '5 Principles of Justice in Leadership',
      items: [
        { label: 'Accountability', value: 95, description: 'Leaders answer for their decisions' },
        { label: 'Transparency', value: 90, description: 'Decisions made openly' },
        { label: 'Inclusiveness', value: 88, description: 'All affected people have a voice' },
        { label: 'Consistency', value: 92, description: 'Rules applied equally to everyone' },
        { label: 'Wisdom', value: 85, description: 'Long-term consequences considered' },
      ],
    },
    quizQuestions: [
      { id: 'u1l5q1', question: 'What does accountability in leadership mean?', options: ['Leaders should never explain their decisions', 'Leaders must answer for their decisions and actions', 'Only followers are accountable', 'Accountability is not important for leaders'], correctAnswer: 1, explanation: 'Accountability means leaders must explain and take responsibility for their decisions and actions, ensuring they serve the people fairly.' },
      { id: 'u1l5q2', question: 'How does the UAE majlis system promote justice in leadership?', options: ['It allows only wealthy people to speak', 'It gives citizens a direct way to raise concerns to their leaders', 'It has no connection to justice', 'Leaders use it to give speeches only'], correctAnswer: 1, explanation: 'The majlis system allows any citizen to directly approach their ruler with concerns, promoting transparency, inclusiveness, and accountability in leadership.' },
      { id: 'u1l5q3', question: 'Why is consistency important in just leadership?', options: ['It means leaders never change their mind', 'Rules should be applied equally to everyone, without favouritism', 'Only some people should follow the rules', 'Consistency is not related to justice'], correctAnswer: 1, explanation: 'Consistency means applying rules equally to all people without favouritism or discrimination, which is essential for fair leadership.' },
      { id: 'u1l5q4', question: 'Sheikh Zayed is remembered as a just leader because:', options: ['He was wealthy', 'He welcomed everyone to his majlis regardless of status or background', 'He never made any decisions', 'He only met with important people'], correctAnswer: 1, explanation: 'Sheikh Zayed was known for his open majlis where anyone — regardless of status, tribe, or background — could come and be heard. This embodies justice in leadership.' },
      { id: 'u1l5q5', question: 'What is consultative governance (Shura)?', options: ['A leader making all decisions alone', 'A system where leaders consult with the people before making important decisions', 'A type of election', 'A court system'], correctAnswer: 1, explanation: 'Shura (consultative governance) means leaders consult with the people and consider their views before making decisions, ensuring inclusiveness and shared wisdom.' },
    ],
    interactiveStrategies: [
      { strategy: 'Role Playing', description: 'Role-play a just vs. unjust leader making a decision', duration: 8, instructions: 'One student plays a just leader, another plays an unjust leader. Each must decide: Should we build a new school or a new mall? Show how each leader makes their decision.' },
      { strategy: 'Student Presentations', description: 'Research and present about a just leader', duration: 7, instructions: 'Research a leader known for justice (past or present). Prepare a 2-minute presentation about what made them just.' },
      { strategy: 'Wikis', description: 'Collaboratively build a wiki page about justice in UAE leadership', duration: 6, instructions: 'Contribute one fact about justice in UAE governance to the class wiki. Include the majlis system, FNC, or Shura. Read others\' contributions and add new information.' },
    ],
  },
];

// ═══════════════════════════════════════════════════════════════
// UNIT 2: PHYSICAL HEALTH AND DIET
// ═══════════════════════════════════════════════════════════════

export const g6t1Unit2: LessonContent[] = [
  // Lesson 1: How Healthy Is Your Lifestyle?
  {
    lessonId: 'G6_T1_Unit2_l1',
    keyVocabulary: ['nutrition', 'diet', 'carbohydrate'],
    reading1Title: 'Learning the Health Habit',
    reading1Content: `With child obesity and other health problems like diabetes on the rise in developed countries, child nutrition and health have become frequent topics of discussion.

These issues have an effect not only on the future of children, but also on the countries themselves. The main sources of obesity are the food choices we make, lack of physical activity, and family habits that are not in line with a healthy lifestyle. Doctors fear that the increased frequency of obesity could lead to chronic health problems in adulthood.

Experts suggest that good nutrition, physical exercise, and sleeping patterns are among the most important factors that contribute to our health. They also suggest that it is essential that good habits are learned early on in life.

It is important to understand the nutritional value of food and how to prepare and cook quick and easy healthy meals. Exercise should be incorporated into our daily routine, and we should make sure to get enough sleep to ensure we have the healthy minds and bodies we need to achieve our full potential in life and avoid health problems, like obesity or diabetes, in later life.`,
    reading2Title: 'The Mediterranean Diet',
    reading2Content: `The Mediterranean diet is known for its health benefits and claims to deter chronic diseases, especially those which are related to the heart.

It places great emphasis on olive oil, fish, whole grains, fruit and vegetables, and legumes as its main foods. If you follow this traditional diet, then red meat, dairy and sugary desserts are not eaten on a regular basis. As a result, this kind of diet is low in saturated fat and cholesterol, both of which can be dangerous for heart health. In this kind of diet, protein is obtained from fish and legumes like lentils and beans, all of which are abundant in these countries.

It is also believed that following a Mediterranean diet can benefit the health of your brain. One study revealed that the risk of developing diseases like Parkinson's or Alzheimer's is greatly reduced for people who follow that diet.`,
    discussionQuestions: [
      'In what ways do health issues affect the country as well as the individual?',
      'Why is it easier to learn good habits early in life?',
      'What family habits can contribute to health problems?',
      'What are the main food groups, and how should they be portioned on your plate?',
    ],
    keyFacts: [
      'The three pillars of health: good nutrition, physical exercise, and adequate sleep',
      'Child obesity and diabetes are rising in developed countries',
      'Good habits are best learned early in life',
      'The Mediterranean diet emphasises olive oil, fish, whole grains, fruits, vegetables, and legumes',
      'The Mediterranean diet is low in saturated fat and cholesterol',
      'The Mediterranean diet may reduce risk of Parkinson\'s and Alzheimer\'s diseases',
      'The 5 food groups: fruits, vegetables, proteins, grains, dairy',
      'The average 6-13 year old should sleep 9-11 hours per day',
    ],
    visualType: 'chart',
    visualData: {
      title: 'The 5 Food Groups',
      items: [
        { label: 'Fruits & Vegetables', value: 40, description: 'Largest portion — vitamins, minerals, fibre' },
        { label: 'Grains', value: 25, description: 'Whole grains preferred — energy and fibre' },
        { label: 'Proteins', value: 20, description: 'Fish, legumes, lean meat — muscle and repair' },
        { label: 'Dairy', value: 10, description: 'Calcium for bones and teeth' },
        { label: 'Treats', value: 5, description: 'Occasional only — high in sugar and fat' },
      ],
    },
    quizQuestions: [
      { id: 'u2l1q1', question: 'What are the three main factors that experts say contribute to our health?', options: ['Medication, rest, and supplements', 'Good nutrition, physical exercise, and sleeping patterns', 'Only exercise matters', 'Avoiding all unhealthy food completely'], correctAnswer: 1, explanation: 'Experts identify good nutrition, physical exercise, and adequate sleep as the three most important factors for health.' },
      { id: 'u2l1q2', question: 'Why is it important to learn healthy habits early in life?', options: ['It is not important', 'Habits formed early are harder to change, and good habits prevent health problems in adulthood', 'Only adults need healthy habits', 'Children naturally eat healthy'], correctAnswer: 1, explanation: 'Habits established in childhood tend to persist into adulthood. Learning healthy habits early prevents chronic health problems later in life.' },
      { id: 'u2l1q3', question: 'What is the Mediterranean diet known for?', options: ['Being expensive', 'Deterring chronic diseases, especially heart-related ones, through emphasis on olive oil, fish, whole grains, and vegetables', 'Being only for people from the Mediterranean', 'Containing only meat'], correctAnswer: 1, explanation: 'The Mediterranean diet is associated with reduced risk of chronic diseases, particularly heart disease, due to its emphasis on healthy fats, whole grains, fruits, vegetables, and legumes.' },
      { id: 'u2l1q4', question: 'How many hours of sleep should the average 6-13 year old get per day?', options: ['5-6 hours', '7-8 hours', '9-11 hours', '12-14 hours'], correctAnswer: 2, explanation: 'The recommended sleep duration for children aged 6-13 is 9-11 hours per day, essential for healthy growth and cognitive development.' },
      { id: 'u2l1q5', question: 'Which statement about healthy eating is TRUE?', options: ['Frying is the healthiest cooking method', 'Eating homemade food contributes to a healthy body', 'Using electronic devices helps us sleep well', 'Regular exercise can harm bones and muscles'], correctAnswer: 1, explanation: 'Homemade meals tend to be healthier because you control the ingredients and cooking methods. Frying adds unhealthy fats, screens disrupt sleep, and proper exercise strengthens bones and muscles.' },
    ],
    interactiveStrategies: [
      { strategy: 'Collaborative Work', description: 'Design a healthy meal plan using the 5 food groups', duration: 8, instructions: 'In groups of 4, design a healthy meal plan for one day using the 5 food groups. Include breakfast, lunch, dinner, and a snack. Present your plan.' },
      { strategy: 'Content Recall', description: 'List the 5 food groups from memory', duration: 3, instructions: 'List the 5 food groups from memory on your index card. Which food group should take up the largest portion of your plate?' },
      { strategy: 'Blogs', description: 'Write a food diary blog post for one day', duration: 5, instructions: 'Write a blog post recording everything you ate yesterday. Categorize each food into the 5 food groups. Were you missing any group? What could you add?' },
    ],
  },

  // Lesson 2: Exercise and Healthy Habits
  {
    lessonId: 'G6_T1_Unit2_l2',
    keyVocabulary: ['aerobic', 'flexibility', 'movement', 'anaerobic', 'hygiene'],
    reading1Title: 'Types of Exercise',
    reading1Content: `Aerobic (also known as Cardiovascular or Cardio)
Aerobic means relating to free oxygen. During this type of exercise you are using large muscle groups which require you to breathe at a higher intensity than when you are at rest. The increase in oxygen intake pumps the blood around your body at a quicker rate so the oxygen can get to your muscles. This type of exercise helps maintain a healthy weight as well as regulating digestive health and strengthening the immune system.

Anaerobic (also known as strength or resistance training)
This type of exercise tones your muscles making them stronger and firmer. It requires short intense actions that are not reliant on a huge use of oxygen. It also improves the health of your bones, as well as your balance and coordination.

Flexibility and Stretching
This type of exercise stretches and lengthens your muscles to increase your range of movement. It helps to keep joints flexible and muscles limber. Stretching should only be started when muscles are warm and the body temperature is raised. This type of exercise also creates good posture, helps to prevent injury during more intensive exercise and increases the length of life and overall health of the individual.`,
    reading2Title: 'Health Benefits of Sports and Hygiene',
    reading2Content: `Sports activities have many benefits for physical and mental health. Studies showed that regular moderate sports have a positive effect on the immune system. When one exercises, the heart pumps more blood, consequently, improving blood circulation. The lungs' intake of oxygen is increased and the muscles become stronger. All of this makes the immune system better prepared to fight bacteria. Sports also have a positive mental effect on people. Playing sports whether alone or in a team is a good way of releasing stress, it is motivating and rewarding. It also improves the memory and boosts communication.

Basic rules of hygiene are necessary in order to stay healthy. If they are not followed, then it is easy for infections and diseases to threaten our health and the health of everyone we come into contact with. These basic rules include washing hands frequently. Did you know that imposing the rule of washing hands very thoroughly before a surgery remains one of the greatest measures that saved lives? Brushing teeth at least twice a day is another important habit that preserves the health of your teeth.`,
    discussionQuestions: [
      'Classify these activities: Swimming, Sprinting, Zumba, Ballet, Martial Arts, Football, Gymnastics, Walking, Push Ups — which are aerobic, anaerobic, or flexibility?',
      'How can sports be motivating, rewarding, and improve memory and communication?',
      'Why is washing hands before surgery considered one of the greatest life-saving measures?',
    ],
    keyFacts: [
      'Three types of exercise: aerobic (cardio), anaerobic (strength), and flexibility (stretching)',
      'Aerobic exercise uses large muscle groups and increases oxygen intake — helps maintain healthy weight and immune system',
      'Anaerobic exercise tones muscles, strengthens bones, and improves balance and coordination',
      'Flexibility exercises increase range of movement, prevent injury, and improve posture',
      'Stretching should only begin when muscles are warm',
      'Regular moderate exercise strengthens the immune system and improves blood circulation',
      'Sports improve mental health by reducing stress, boosting memory, and improving communication',
      'Basic hygiene (hand washing, tooth brushing) prevents the spread of infections',
    ],
    visualType: 'mindmap',
    visualData: {
      title: 'Exercise & Healthy Habits',
      center: 'Healthy Lifestyle',
      branches: [
        { label: 'Aerobic (Cardio)', children: ['Swimming', 'Walking', 'Zumba', 'Football', 'Strengthens heart & immune system'] },
        { label: 'Anaerobic (Strength)', children: ['Sprinting', 'Push Ups', 'Martial Arts', 'Tones muscles & bones'] },
        { label: 'Flexibility (Stretching)', children: ['Ballet', 'Gymnastics', 'Yoga', 'Prevents injury & improves posture'] },
        { label: 'Hygiene Habits', children: ['Wash hands frequently', 'Brush teeth 2x daily', 'Prevents infections & disease'] },
      ],
    },
    quizQuestions: [
      { id: 'u2l2q1', question: 'Which type of exercise uses large muscle groups and increases oxygen intake?', options: ['Anaerobic', 'Flexibility', 'Aerobic (Cardio)', 'None of these'], correctAnswer: 2, explanation: 'Aerobic exercise uses large muscle groups and increases oxygen intake, pumping blood faster and strengthening the immune system.' },
      { id: 'u2l2q2', question: 'What is the key difference between aerobic and anaerobic exercise?', options: ['There is no difference', 'Aerobic requires oxygen for sustained activity; anaerobic uses short intense actions without relying on oxygen', 'Anaerobic is better for the heart', 'Aerobic builds more muscle'], correctAnswer: 1, explanation: 'Aerobic exercise relies on oxygen for sustained activity (like running or swimming), while anaerobic exercise involves short, intense actions that do not require large oxygen use (like sprinting or push ups).' },
      { id: 'u2l2q3', question: 'Why should stretching only begin when muscles are warm?', options: ['Cold muscles stretch better', 'Stretching cold muscles can cause injury; warm muscles are more flexible and less prone to damage', 'It does not matter when you stretch', 'Stretching is not important'], correctAnswer: 1, explanation: 'Stretching cold muscles increases the risk of injury. Warming up raises body temperature and makes muscles more pliable and ready for stretching.' },
      { id: 'u2l2q4', question: 'Which of the following is BOTH a physical and mental benefit of sports?', options: ['Only stronger muscles', 'Improved blood circulation AND reduced stress with better memory', 'Only weight loss', 'Only better coordination'], correctAnswer: 1, explanation: 'Sports benefit both body (improved circulation, stronger muscles, better immune system) and mind (reduced stress, improved memory, boosted communication).' },
      { id: 'u2l2q5', question: 'Why is hand washing considered one of the greatest life-saving measures in medical history?', options: ['It makes hands smell nice', 'Thorough hand washing before surgery prevents the spread of bacteria and infections, saving countless lives', 'It is only important for doctors', 'It replaces the need for medicine'], correctAnswer: 1, explanation: 'Imposing thorough hand washing before surgery was a breakthrough that dramatically reduced infection rates and saved millions of lives.' },
    ],
    interactiveStrategies: [
      { strategy: 'Simulations', description: 'Categorize exercises and demonstrate each type', duration: 7, instructions: 'Simulate an exercise routine: As a class, categorize these activities into Aerobic, Anaerobic, or Flexibility. Stand up and demonstrate one exercise from each category!' },
      { strategy: 'Think-Pair-Share', description: 'Share your favourite physical activities and their types', duration: 5, instructions: 'Share with your partner: What physical activities do you enjoy? Which type of exercise are they? How could you add more variety?' },
      { strategy: 'Flip Charts', description: 'Create a flip chart of 3 exercise types with examples', duration: 6, instructions: 'In groups of 3, create a flip chart with 3 columns: Aerobic, Anaerobic, Flexibility. List at least 5 activities under each. Include a drawing of someone doing one exercise from each type.' },
    ],
  },

  // Lesson 3: Challenges to Health and Getting Help
  {
    lessonId: 'G6_T1_Unit2_l3',
    keyVocabulary: ['challenge', 'consequence', 'disease', 'obesity', 'sedentary'],
    reading1Title: 'Challenges to Health',
    reading1Content: `Some colleges in the UAE are leading by example when it comes to facing the challenge of global obesity and promoting healthy living. Students are being taught about health and wellbeing right from the basics of food intake and energy levels. Healthy living is reinforced by the college. The cafeteria serves only healthy meals and soft drinks have been banned on campus.

A sedentary lifestyle, in which young people spend most of the day sitting either at school or at home, has been blamed for the rise of obesity. As one college representative says, "It's important that we educate this generation and the ones that come after. Otherwise, the trend of longer life expectancy could be reversed. For example, if you can walk for 30 minutes a day and keep your heart beat above 130 beats per minute, that's a great start."

Another cause of increased weight among young people is fizzy drinks. A recent study found that many young people consume more than one 330ml can a day. Results showed more tooth decay among soda drinkers. Also, people who drink soft drinks had nearly five times more risk of suffering a bone fracture than those who did not.

The government of the UAE is working closely with other organisations to address the problem and efforts are ongoing to ensure the health of the population.`,
    discussionQuestions: [
      'Why do you think a ban on soft drinks was introduced in UAE colleges?',
      'What reasons can you give for the sedentary lifestyle mentioned in the article?',
      'What are the responsibilities of the individual, family, and society in ensuring healthy lives?',
      'Why is obesity referred to as "a global health problem"?',
    ],
    keyFacts: [
      'A sedentary lifestyle (too much sitting) is a major cause of obesity',
      'Walking for 30 minutes a day with heart rate above 130 bpm is a good start to fitness',
      'Fizzy drinks cause tooth decay and increase bone fracture risk by nearly 5 times',
      'The UAE has banned soft drinks in some school cafeterias',
      'Obesity is considered a global health problem',
      'Walking 30 minutes daily at elevated heart rate is an achievable fitness goal',
    ],
    visualType: 'diagram',
    visualData: {
      title: 'Health Challenges & Solutions',
      items: ['Sedentary Lifestyle → Walk 30 min/day', 'Fizzy Drinks → Water & Milk', 'Poor Diet → Balanced Meals', 'Lack of Sleep → 9-11 Hours', 'Screen Time → Physical Activity'],
    },
    quizQuestions: [
      { id: 'u2l3q1', question: 'What is a sedentary lifestyle?', options: ['A lifestyle with lots of exercise', 'A lifestyle where people spend most of the day sitting with little physical activity', 'A lifestyle focused on healthy eating only', 'A lifestyle with too much sleep'], correctAnswer: 1, explanation: 'A sedentary lifestyle means spending most of the day sitting — at school, at home, or in front of screens — with very little physical activity.' },
      { id: 'u2l3q2', question: 'People who drink soft drinks have how many times more risk of bone fracture compared to non-drinkers?', options: ['2 times', '3 times', '5 times', '10 times'], correctAnswer: 2, explanation: 'Studies show that people who consume soft drinks have nearly 5 times the risk of suffering a bone fracture compared to those who do not.' },
      { id: 'u2l3q3', question: 'What minimum daily exercise does the article recommend as "a great start"?', options: ['10 minutes of stretching', 'Walking for 30 minutes a day with heart rate above 130 bpm', 'Running for an hour', 'Lifting weights for 45 minutes'], correctAnswer: 1, explanation: 'The article recommends walking for 30 minutes a day while keeping your heart rate above 130 beats per minute as a good starting point for fitness.' },
      { id: 'u2l3q4', question: 'Why have some UAE colleges banned soft drinks on campus?', options: ['To save money', 'Because soft drinks contribute to obesity, tooth decay, and bone health problems', 'Because students do not like them', 'To promote water companies'], correctAnswer: 1, explanation: 'Soft drinks are linked to obesity, tooth decay, and increased bone fracture risk. Banning them on campus promotes healthier choices among students.' },
      { id: 'u2l3q5', question: 'Hippocrates said: "If we could give every individual the right amount of nourishment and exercise, not too little and not too much, we would have found the safest way to health." What does this mean?', options: ['Only exercise matters for health', 'Balance in both diet and physical activity is the key to health — neither too much nor too little', 'Nourishment is more important than exercise', 'Health is impossible to achieve'], correctAnswer: 1, explanation: 'Hippocrates emphasised that health comes from the right balance — proper nourishment and appropriate exercise, without excess or deficiency in either.' },
    ],
    interactiveStrategies: [
      { strategy: 'Problem-Based Learning', description: 'Identify health challenges and suggest improvements', duration: 8, instructions: 'Read the scenarios about Nadia, Fahad, Sophie, and Adnan. In pairs, identify each person\'s health challenge and suggest specific changes they could make to improve their health.' },
      { strategy: 'Role Playing', description: 'Role-play a health advisor conversation', duration: 6, instructions: 'Role-play a conversation between a student with an unhealthy habit and a health advisor. The advisor should give specific, helpful advice using what you learned.' },
      { strategy: 'Wikis', description: 'Build a class health tips wiki', duration: 5, instructions: 'Add one practical health tip to the class wiki based on today\'s lesson. Read your classmates\' tips and add a new one that hasn\'t been shared yet.' },
    ],
  },
];

// ═══════════════════════════════════════════════════════════════
// UNIT 3: PERSPECTIVES OF PEOPLE THROUGH TIME
// ═══════════════════════════════════════════════════════════════

export const g6t1Unit3: LessonContent[] = [
  // Lesson 1: After the Fall of the Roman Empire
  {
    lessonId: 'G6_T1_General_l2',
    keyVocabulary: ['Common Era (CE)', 'to benefit', 'to conquer', 'destruction', 'domestic', 'barbarian', 'fierce', 'to storm', 'bow', 'present-day'],
    reading1Title: 'The Fall of the Roman Empire',
    reading1Content: `In the early centuries of the Common Era, the Roman Empire was the largest empire in the world. It stretched north to England where Hadrian's Wall was built and east to the River Euphrates in Iraq.

The Roman Empire brought many different peoples and cultures together under Roman rule. Conquered people were expected to accept Roman customs and laws. Romans severely punished those who did not obey. For over two hundred years, the tight control of the Romans kept the conquered people from fighting. This period is called the Pax Romana.

The Pax Romana did not benefit all of its people equally. Only male citizens who owned land could participate in the government. Many of the people who lived in the Roman Empire were conquered people who were poor and served the rich landowners. The common people had few privileges, yet were heavily taxed. Over time, the common people grew more and more dissatisfied.

In addition to internal conflicts, the Roman Empire was frequently attacked by tribes outside their borders. Romans referred to people who were not Roman as Barbarians because their ways, customs, laws, and outward appearances were not like the Romans.

Around 376 CE, tribes, including the Goths, came to the edge of the River Danube. Some Gothic tribes fought against the Roman Empire while others joined the empire and fought with the Romans.

These tensions grew. The Goths declared war against the Romans and won several large battles. In the Battle of Hadrianapolis in 378 CE, the Roman emperor Valens was killed. In 410 CE, the Goths stormed the city of Rome and carried away a great deal of the city's wealth.

At about the same time, another fierce group of nomads called the Huns attacked the edges of the empire. The Huns were horsemen armed with larger, more powerful bows than the Romans. Within a decade, the Huns, led by Attila, conquered the eastern territories of the Empire, establishing a kingdom where Hungary, Slovakia, and Romania are today.

The Hun dominance started to decline when their leader, Attila, died in 453 CE. Attacks by other Germanic peoples continued. The Visigoths and Franks took control of most of Western Europe, including France and Spain. The Suevi established a kingdom in the Northwest of the Iberian Peninsula (today part of Spain and Portugal). The Vandals conquered the Roman province of Africa (now present-day Tunisia, Algeria, and Libya). Gradually, the Western Roman Empire began to decline.`,
    discussionQuestions: [
      'Why were common people dissatisfied with the Pax Romana even though it was a period of peace?',
      'Why did the Romans call outsiders "Barbarians"?',
      'How did Attila and the Huns contribute to the fall of the Roman Empire?',
      'Match the groups: Franks, Goths, Huns, Vandals — with their actions',
    ],
    keyFacts: [
      'The Roman Empire was the largest empire in the world, stretching from England to Iraq',
      'Pax Romana was a 200-year period of peace under Roman control, but it only benefited wealthy landowning male citizens',
      'Common people were heavily taxed with few privileges, leading to dissatisfaction',
      'The Goths declared war on Rome, killing Emperor Valens at Hadrianapolis in 378 CE',
      'The Goths stormed Rome in 410 CE',
      'The Huns, led by Attila, conquered eastern territories (modern Hungary, Slovakia, Romania)',
      'Attila died in 453 CE, leading to Hun decline',
      'The Franks captured most of Western Europe; the Vandals took North Africa; the Suevi took northwest Iberia',
      'Unfair distribution of resources was a key cause of Rome\'s fall',
    ],
    visualType: 'map',
    visualData: {
      markers: [
        { name: 'Rome', desc: 'Capital of the Roman Empire, stormed by Goths in 410 CE', lat: 41.9028, lng: 12.4964, color: '#722F37' },
        { name: 'Hadrianapolis', desc: 'Battle where Emperor Valens was killed, 378 CE', lat: 41.75, lng: 26.55, color: '#D4AF37' },
        { name: 'Hun Kingdom (Hungary)', desc: 'Territory conquered by Attila and the Huns', lat: 47.1625, lng: 19.5033, color: '#7C3AED' },
        { name: 'Vandal Territory (Tunisia)', desc: 'North Africa conquered by the Vandals', lat: 33.8869, lng: 9.5375, color: '#D97706' },
        { name: 'Franks Territory (France)', desc: 'Western Europe captured by the Franks', lat: 46.6034, lng: 1.8883, color: '#047857' },
      ],
    },
    quizQuestions: [
      { id: 'u3l1q1', question: 'What was the Pax Romana?', options: ['A war between Rome and Greece', 'A 200-year period of peace under Roman control, though it mainly benefited wealthy citizens', 'The name of a Roman building', 'A Roman holiday'], correctAnswer: 1, explanation: 'The Pax Romana was a 200-year period of enforced peace under Roman rule. However, it mainly benefited wealthy male landowners while common people were heavily taxed with few privileges.' },
      { id: 'u3l1q2', question: 'Why were common people dissatisfied during the Pax Romana?', options: ['They had too many rights', 'Only wealthy male landowners could participate in government, while common people were heavily taxed with few privileges', 'There were too many wars', 'They did not want peace'], correctAnswer: 1, explanation: 'Despite the peace, the Pax Romana was unfair: only male citizens who owned land could participate in government, while conquered people and the poor served the rich and paid heavy taxes.' },
      { id: 'u3l1q3', question: 'Who killed the Roman Emperor Valens and in which battle?', options: ['Attila at the Battle of Rome', 'The Goths at the Battle of Hadrianapolis in 378 CE', 'The Vandals at the Battle of Carthage', 'The Franks at the Battle of Paris'], correctAnswer: 1, explanation: 'The Goths declared war on Rome and killed Emperor Valens at the Battle of Hadrianapolis (Adrianopolis) in 378 CE.' },
      { id: 'u3l1q4', question: 'Which group established a kingdom where Hungary, Slovakia, and Romania are today?', options: ['The Goths', 'The Franks', 'The Huns, led by Attila', 'The Vandals'], correctAnswer: 2, explanation: 'The Huns, led by Attila, conquered the eastern territories of the Roman Empire and established a kingdom covering modern-day Hungary, Slovakia, and Romania.' },
      { id: 'u3l1q5', question: 'What caused the decline of Hun dominance?', options: ['A Roman counterattack', 'The death of Attila in 453 CE', 'A plague', 'The Huns converted to Christianity'], correctAnswer: 1, explanation: 'Hun dominance began to decline after their leader Attila died in 453 CE. Without his leadership, their power fragmented.' },
    ],
    interactiveStrategies: [
      { strategy: 'Index Cards', description: 'Match barbarian groups with their actions', duration: 4, instructions: 'On your index card, match each group (Goths, Huns, Franks, Vandals, Suevi) with their action. We will review as a class.' },
      { strategy: 'Think-Pair-Share', description: 'Discuss why the Pax Romana failed', duration: 5, instructions: 'Why did the Pax Romana fail even though it brought 200 years of peace? Discuss with your partner and connect it to the concept of fairness we studied.' },
      { strategy: 'Collaborative Work', description: 'Create a cause-and-effect chain for Rome\'s fall', duration: 6, instructions: 'In groups of 3, create a cause-and-effect chain showing how internal dissatisfaction AND external attacks both contributed to Rome\'s fall.' },
    ],
  },

  // Lesson 2: The High Middle Ages of Europe
  {
    lessonId: 'G6_T1_General_l3',
    keyVocabulary: ['overnight', 'centre of power', 'province', 'capital', 'invader', 'figure', 'prominent', 'border', 'stability'],
    reading1Title: 'The High Middle Ages in Europe',
    reading1Content: `The fall of the Roman Empire did not happen overnight. When the western part of the empire faced serious challenges, the empire split. The Western Roman Empire, which covered Western Europe and North Africa, was led from Rome, while the Eastern Roman — or Byzantine Empire — was led from Constantinople.

The Byzantine Empire covered the areas now known as Turkey, Greece, and Eastern Europe. After the fall of the Western Roman Empire, it became the most powerful empire in Europe and the Near East and lasted for over a thousand years.

The capital city of the Byzantine Empire was Constantinople (present-day Istanbul, Turkey). It was named after Constantine, Roman Emperor from 306-337, the first emperor to rule from the city.

Justinian I became emperor of Byzantium in 527 CE. Justinian worked with important political leaders to write a new legal system that he used to govern all the citizens of the empire. The legal system is called the Justinian Code. He negotiated a peace with the rival empires, worked hard to protect his borders from attacks by neighbouring tribes, and fought to regain control over territories the empire had lost.

Attack from foreign invaders was not the only crisis that Justinian I faced. During his reign, a plague swept through Europe. It was called the Plague of Justinian. The disease was carried by rats onto ships from Egypt. It caused up to 5,000 deaths a day from 541-542 CE.

The Byzantine Empire was greatly weakened by the plague. Justinian I was forced to spend large amounts of money fighting wars throughout the empire. The plague did great damage to agriculture and trade.

In the 9th century CE, emperors from Macedonia, a country north of Greece, brought some peace and stability to the Byzantine Empire. The empire went through a 250-year period of cultural, philosophical, and artistic achievement, called the Golden Age of Byzantium.

When Basil I became emperor in 867 CE, art and literature flourished. The movement was similar to the Golden Age of Islamic Culture that was happening in the Middle East. During this period, the Byzantine Empire regained control over territories it had lost.

When Basil II became emperor in 976 CE, he focused on defeating his enemies. After many hard-fought battles, he finally defeated the Bulgarians at the Battle of Kleidion in 1014 CE and annexed Bulgaria into the empire. From there, he expanded into Georgia and Armenia in 1022 CE. These victories helped establish the Byzantine Empire as the largest and most powerful in Europe.`,
    discussionQuestions: [
      'What was the Byzantine Empire and why did it survive after the Western Roman Empire fell?',
      'How did the Plague of Justinian affect the Byzantine Empire?',
      'What was the Golden Age of Byzantium and how does it compare to the Golden Age of Islamic Culture?',
      'Why is the Justinian Code important?',
    ],
    keyFacts: [
      'The Roman Empire split into Western (led from Rome) and Eastern/Byzantine (led from Constantinople)',
      'Constantinople is present-day Istanbul, Turkey',
      'Justinian I became emperor in 527 CE and created the Justinian Code (a new legal system)',
      'The Plague of Justinian (541-542 CE) caused up to 5,000 deaths per day, carried by rats from Egypt',
      'The plague weakened the Byzantine Empire, damaging agriculture and trade',
      'Macedonian emperors brought stability in the 9th century CE',
      'The Golden Age of Byzantium was a 250-year period of cultural achievement',
      'Basil I became emperor in 867 CE — art and literature flourished',
      'Basil II defeated the Bulgarians at the Battle of Kleidion in 1014 CE',
      'Basil II annexed Bulgaria (1014 CE), Georgia and Armenia (1022 CE)',
    ],
    visualType: 'timeline',
    visualData: {
      title: 'Byzantine Empire Timeline',
      events: [
        { year: '306 CE', event: 'Constantine becomes Roman Emperor' },
        { year: '527 CE', event: 'Justinian I becomes emperor' },
        { year: '541 CE', event: 'Plague of Justinian begins' },
        { year: '867 CE', event: 'Basil I becomes emperor — Golden Age begins' },
        { year: '976 CE', event: 'Basil II becomes emperor' },
        { year: '1014 CE', event: 'Battle of Kleidion — Bulgaria annexed' },
        { year: '1022 CE', event: 'Georgia and Armenia annexed' },
      ],
    },
    quizQuestions: [
      { id: 'u3l2q1', question: 'What is Constantinople called today?', options: ['Ankara', 'Athens', 'Istanbul', 'Sofia'], correctAnswer: 2, explanation: 'Constantinople, the capital of the Byzantine Empire, is present-day Istanbul in Turkey.' },
      { id: 'u3l2q2', question: 'What was the Justinian Code?', options: ['A secret military strategy', 'A new legal system created by Justinian I to govern all citizens of the Byzantine Empire', 'A religious text', 'A trade agreement with Egypt'], correctAnswer: 1, explanation: 'The Justinian Code was a comprehensive legal system created by Emperor Justinian I to govern all citizens of the Byzantine Empire consistently.' },
      { id: 'u3l2q3', question: 'What caused up to 5,000 deaths a day in the Byzantine Empire from 541-542 CE?', options: ['War with the Huns', 'The Plague of Justinian, carried by rats from Egypt', 'A famine', 'An earthquake'], correctAnswer: 1, explanation: 'The Plague of Justinian was a devastating pandemic carried by rats on ships from Egypt, causing up to 5,000 deaths per day from 541-542 CE.' },
      { id: 'u3l2q4', question: 'What was the Golden Age of Byzantium?', options: ['A period of war and conquest', 'A 250-year period of cultural, philosophical, and artistic achievement starting in the 9th century CE', 'The reign of Justinian I', 'The fall of Constantinople'], correctAnswer: 1, explanation: 'The Golden Age of Byzantium was a 250-year period of cultural, philosophical, and artistic achievement brought by Macedonian emperors starting in the 9th century CE.' },
      { id: 'u3l2q5', question: 'Basil II defeated the Bulgarians at which battle?', options: ['Battle of Hadrianapolis', 'Battle of Manzikert', 'Battle of Kleidion in 1014 CE', 'Battle of Constantinople'], correctAnswer: 2, explanation: 'Basil II defeated the Bulgarians at the Battle of Kleidion in 1014 CE, then annexed Bulgaria into the Byzantine Empire.' },
    ],
    interactiveStrategies: [
      { strategy: 'Timeline Activity', description: 'Identify the most important Byzantine events', duration: 5, instructions: 'Using the timeline, identify the 3 most important events in Byzantine history. Justify your choices to your partner.' },
      { strategy: 'Flip Charts', description: 'Compare the Plague of Justinian to a modern pandemic', duration: 8, instructions: 'Create a flip chart comparing the Plague of Justinian to a modern pandemic. How were they similar? How were they different?' },
      { strategy: 'Think-Pair-Share', description: 'Compare the Golden Age of Byzantium to the Golden Age of Islamic Culture', duration: 5, instructions: 'How were the Golden Age of Byzantium and the Golden Age of Islamic Culture similar? Both happened around the same time. Discuss with your partner.' },
    ],
  },

  // Lesson 3: The Republic of Venice
  {
    lessonId: 'G6_T1_General_l4',
    keyVocabulary: ['influential', 'pirate', 'maritime', 'armed', 'fleet', 'deck', 'navy', 'exclusive', 'oarsman', 'medieval'],
    reading1Title: 'The Republic of Venice',
    reading1Content: `Venice is a small city in Italy made up of over one hundred small islands. Instead of streets and cars, the city uses small rivers and boats to move around. Nowadays, Venice is a popular tourist attraction. But in the High Middle Ages, Venice was a wealthy and influential maritime power.

In the 12th century CE, Venice controlled much of the Adriatic and Aegean Seas. Venice was able to grow wealthy and powerful because of the trading relationship it established with Egypt and other Middle Eastern countries.

The Venetian maritime fleets were useful in many ways. They were called galleys. They were very large, with more than one hundred oarsmen moving them through the water. Armed soldiers stood on the main decks of the ships, ready to battle pirates, enemy ships, and other dangers. They were the most powerful protectors of the Byzantine Empire's seas. In fact, they were the only real navy that the empire had.

These ships were so powerful that, in 1082, the Byzantine Emperor, Alexios I Komnenos, signed a treaty with Venice. In exchange for the Venetians' help against the Normans, a fierce group of warriors from France, the Venetians enjoyed free trade throughout the empire, without tariffs.

The Venetians controlled several important ports, such as Constantinople. It was a very good deal for the Venetians, who became quite wealthy through trade. They developed such a strong relationship with Egypt that they became Egypt's exclusive European trading partner for spices and other goods.`,
    discussionQuestions: [
      'Why was Venice able to become so wealthy and powerful during the Middle Ages?',
      'What was the treaty between Venice and the Byzantine Emperor Alexios I Komnenos?',
      'Venice promised to help fight the Normans but did not keep their promise, yet still got the benefits. Is this fair?',
      'How did Venice\'s maritime power compare to its land power?',
    ],
    keyFacts: [
      'Venice is built on over 100 small islands and uses canals instead of streets',
      'In the 12th century CE, Venice controlled much of the Adriatic and Aegean Seas',
      'Venice grew wealthy through trade with Egypt and Middle Eastern countries',
      'Venetian galleys had over 100 oarsmen and armed soldiers on deck',
      'Venice was the only real navy protecting the Byzantine Empire\'s seas',
      'In 1082, Emperor Alexios I Komnenos signed a treaty giving Venice free trade without tariffs in exchange for fighting the Normans',
      'Venice became Egypt\'s exclusive European trading partner for spices',
      'The Normans were a fierce group of warriors from France',
    ],
    visualType: 'map',
    visualData: {
      markers: [
        { name: 'Venice', desc: 'Maritime republic, over 100 islands, wealthy trading power', lat: 45.4408, lng: 12.3155, color: '#D4AF37' },
        { name: 'Constantinople', desc: 'Key port controlled by Venice, Byzantine capital', lat: 41.0082, lng: 28.9784, color: '#722F37' },
        { name: 'Egypt', desc: 'Venice\'s exclusive trading partner for spices', lat: 26.8206, lng: 30.8025, color: '#047857' },
        { name: 'Adriatic Sea', desc: 'Controlled by Venetian navy', lat: 43.0, lng: 16.0, color: '#3B82F6' },
      ],
    },
    quizQuestions: [
      { id: 'u3l3q1', question: 'Why was Venice able to become wealthy and powerful during the Middle Ages?', options: ['It had a large army', 'It established trading relationships with Egypt and Middle Eastern countries, and controlled key maritime routes', 'It conquered the Byzantine Empire', 'It had gold mines'], correctAnswer: 1, explanation: 'Venice grew wealthy and powerful through its maritime trade with Egypt and the Middle East, controlling key sea routes and ports like Constantinople.' },
      { id: 'u3l3q2', question: 'What was a Venetian galley?', options: ['A type of marketplace', 'A large ship with over 100 oarsmen and armed soldiers on deck, forming the Venetian navy', 'A type of building in Venice', 'A trade agreement'], correctAnswer: 1, explanation: 'Venetian galleys were large war/trade ships powered by over 100 oarsmen, with armed soldiers on deck to fight pirates and enemies.' },
      { id: 'u3l3q3', question: 'What did Emperor Alexios I Komnenos offer Venice in exchange for fighting the Normans?', options: ['Land in France', 'Free trade throughout the Byzantine Empire without tariffs', 'Control of Constantinople', 'Gold and silver'], correctAnswer: 1, explanation: 'In the 1082 treaty, Alexios offered Venice free trade throughout the Byzantine Empire without tariffs in exchange for their naval help against the Normans.' },
      { id: 'u3l3q4', question: 'What made Venice Egypt\'s exclusive European trading partner?', options: ['No other European country wanted to trade with Egypt', 'Venice\'s strong relationship and naval power allowed it to dominate the spice trade with Egypt', 'Egypt chose Venice randomly', 'The Pope decreed it'], correctAnswer: 1, explanation: 'Venice\'s combination of strong diplomatic relations and powerful navy allowed it to become Egypt\'s exclusive European trading partner for spices and other goods.' },
      { id: 'u3l3q5', question: 'Why is the treaty between Venice and Byzantium considered unfair by some?', options: ['Venice paid too much', 'Venice promised to help fight the Normans but did not fully keep their promise, yet still enjoyed the benefits of free trade', 'The treaty was too short', 'Byzantium did not benefit at all'], correctAnswer: 1, explanation: 'Venice agreed to help fight the Normans but did not keep their promise, yet they still received free trade without tariffs — getting the benefits without fulfilling their side of the deal.' },
    ],
    interactiveStrategies: [
      { strategy: 'Simulations', description: 'Simulate the treaty of 1082 between Venice and Byzantium', duration: 8, instructions: 'Simulate the treaty of 1082: One group is Venice, another is Byzantium. Negotiate a deal. Was it fair? What would you change?' },
      { strategy: 'Summarizing', description: 'Summarize why Venice became powerful', duration: 3, instructions: 'Summarize in one sentence why Venice became so powerful. Write it on your index card.' },
      { strategy: 'Blogs', description: 'Write a blog post about whether the Venice-Byzantium treaty was fair', duration: 5, instructions: 'Write a blog post (5-7 sentences): Was the treaty between Venice and Byzantium fair? Venice promised to help fight the Normans but didn\'t keep their promise. Give your opinion with reasons.' },
    ],
  },

  // Lesson 4: The Late Middle Ages - The First Hundred Years' War
  {
    lessonId: 'G6_T1_General_l5',
    keyVocabulary: ['reputation', 'to take place', 'account', 'to convince', 'to expand', 'strategy', 'victorious', 'treaty'],
    reading1Title: 'The First Hundred Years\' War',
    reading1Content: `The 12th century CE was another period of instability and conflict in Europe, particularly between England and France. This period occurred from 1159 CE to 1259 CE and was known as the First Hundred Years' War.

At the time, there were two major kingdoms in England and France. The Plantagenet family ruled most of England and owned a large amount of land in France. In fact, nearly half of France was owned by the English kings, Henry II, Richard I, and John.

The French kings of the Capet family, Louis VII and, later, Philip Augustus, wanted to regain control of their own lands. They began fighting the English kings.

Henry II became King of England in 1154 CE. He decided to expand England's territory in France, winning several major battles. When Philip Augustus became King of France in 1180 CE, he fought back against Henry. He persuaded Henry's son, Richard, to help him against his father. Richard's nickname was Richard the Lionheart, because of his reputation as a great warrior and leader.

When Henry died in 1189 CE, Richard became the new King of England. Although Richard the Lionheart was close to King Philip, Philip kept attacking the English lands in France. He convinced John, Richard's brother, to rebel against Richard. King Philip's strategies were successful, and he was able to regain many of his lost territories.

John became King of England in 1199 CE after Richard died from injuries in battle. Over the next 50 years, conflicts continued between France and England, with France winning battle after battle.

In 1215, the king signed the Magna Carta, a document that protected the rights of wealthy landowners. King John did not follow the rules of the Magna Carta and so the landowners fought with the king. England was weakened by wars within its own country at the same time as outside the country.

The First Hundred Years' War lasted until 1259, exactly one hundred years after it began. It ended with the signing of the Treaty of Paris on December 4, 1259. The treaty was signed by King John's son, Henry III, and the King of France, Louis IX. By signing the treaty, Henry III agreed to give up many of his lands in France.`,
    discussionQuestions: [
      'What were the main causes of the First Hundred Years\' War?',
      'Why was Richard called "the Lionheart"?',
      'What was the Magna Carta and why is it important?',
      'Why did King Philip\'s strategies succeed against England?',
    ],
    keyFacts: [
      'The First Hundred Years\' War lasted from 1159 CE to 1259 CE between England and France',
      'The Plantagenet family ruled England and owned nearly half of France',
      'The Capet family ruled France and wanted their lands back',
      'Henry II became King of England in 1154 CE and expanded into France',
      'Richard the Lionheart earned his nickname from his reputation as a great warrior',
      'Philip Augustus convinced Richard\'s brother John to rebel against Richard',
      'The Magna Carta was signed in 1215 CE, protecting the rights of wealthy landowners',
      'King John did not follow the Magna Carta, leading to civil conflict',
      'The Treaty of Paris (1259) ended the war — Henry III gave up English lands in France',
    ],
    visualType: 'timeline',
    visualData: {
      title: 'First Hundred Years\' War Timeline',
      events: [
        { year: '1154 CE', event: 'Henry II becomes King of England' },
        { year: '1159 CE', event: 'First Hundred Years\' War begins' },
        { year: '1180 CE', event: 'Philip Augustus becomes King of France' },
        { year: '1189 CE', event: 'Richard the Lionheart becomes King' },
        { year: '1199 CE', event: 'John becomes King of England' },
        { year: '1215 CE', event: 'Magna Carta signed' },
        { year: '1259 CE', event: 'Treaty of Paris ends the war' },
      ],
    },
    quizQuestions: [
      { id: 'u3l4q1', question: 'When did the First Hundred Years\' War begin and end?', options: ['1066-1166 CE', '1159-1259 CE', '1337-1453 CE', '1200-1300 CE'], correctAnswer: 1, explanation: 'The First Hundred Years\' War lasted from 1159 CE to 1259 CE — exactly one hundred years — between England and France.' },
      { id: 'u3l4q2', question: 'Which French king convinced Richard the Lionheart\'s brother to rebel against him?', options: ['King Louis VII', 'King Philip Augustus', 'King Louis IX', 'King Henry II'], correctAnswer: 1, explanation: 'King Philip Augustus of France persuaded Richard\'s brother John to rebel, a successful strategy that helped France regain lost territories.' },
      { id: 'u3l4q3', question: 'What was the Magna Carta?', options: ['A peace treaty with France', 'A document signed in 1215 CE that protected the rights of wealthy landowners and limited the king\'s power', 'A map of England', 'A religious text'], correctAnswer: 1, explanation: 'The Magna Carta, signed in 1215 CE, protected the rights of wealthy landowners (barons) and was the first document to limit a king\'s power in England.' },
      { id: 'u3l4q4', question: 'What was the name of the English royal family during the First Hundred Years\' War?', options: ['The Capets', 'The Plantagenets', 'The Tudors', 'The Normans'], correctAnswer: 1, explanation: 'The Plantagenet family ruled England during this period, including kings Henry II, Richard I, and John.' },
      { id: 'u3l4q5', question: 'How did the First Hundred Years\' War end?', options: ['England conquered France', 'The Treaty of Paris was signed in 1259 CE, with Henry III giving up English lands in France', 'The war never officially ended', 'France surrendered to England'], correctAnswer: 1, explanation: 'The war ended with the Treaty of Paris on December 4, 1259, when Henry III agreed to give up many of England\'s lands in France.' },
    ],
    interactiveStrategies: [
      { strategy: 'Role Playing', description: 'Role-play the conflict between King Philip and King John', duration: 8, instructions: 'In groups, role-play the conflict between King Philip and King John. One side argues for France, the other for England. What were each side\'s claims?' },
      { strategy: 'Content Recall', description: 'Write key events from the timeline without notes', duration: 4, instructions: 'Without notes, write the key events on the timeline: Who signed the Magna Carta? When? What was the Treaty of Paris?' },
      { strategy: 'Student Presentations', description: 'Present why the Magna Carta still matters today', duration: 6, instructions: 'Research why the Magna Carta is considered important even today. Prepare a 2-minute presentation connecting it to modern ideas of rights and justice.' },
    ],
  },

  // Lesson 5: Crises of the Late Middle Ages
  {
    lessonId: 'G6_T1_General_l6',
    keyVocabulary: ['consequence', 'famine', 'climate', 'flood', 'wheat', 'to starve', 'to estimate', 'to appreciate', 'hygiene'],
    reading1Title: 'The Great Famine and the Black Death',
    reading1Content: `Wars and battles for territory were not the only problem that Europeans faced during the Late Middle Ages. Several other natural disasters also occurred during this time that had terrible consequences all over Europe.

One of these disasters was the Great Famine of 1315-17 CE. At the time, Europe had been enjoying a relatively successful period of growth and prosperity for nearly two hundred years. However, changes in the climate were happening.

During the Middle Ages, temperatures across Europe were perfect for farming and raising cattle. By the end of the 13th century CE, the weather was getting cooler and cooler. Summers were getting shorter and winters were getting longer and colder. More snow was falling and it was staying on the ground longer, shortening the growing season. Later historians would call this period the Little Ice Age.

The spring of 1315 CE was hit by very heavy rain across all of Europe, causing large floods and damaging the grains that had been stored over the winter. The spring weather stayed cool, which meant that crops could not grow and cattle could not be fed. This situation got even worse in the summer, as food prices doubled and then tripled.

In France, wheat became too expensive to use for baking bread, and many poor people had nothing to eat. The famine continued for the next two years, with millions of people starving to death. Some historians estimate that the Great Famine killed up to 25% of the population of Europe.

Another major crisis to hit Europe was the bubonic plague, which was called the Black Death. The bubonic plague was a horrible disease caused by bacteria carried on fleas which lived on rodents. When the flea bit someone, the bacteria were transferred to that person.

In crowded European cities, where personal hygiene practices were poor, the bubonic plague spread quickly. Some scientists estimate that the plague killed up to 200 million people — a third to half of all Europeans — in just four years, from 1347 to 1351.

Despite the horrifying nature of the plague, some good came from it. Living standards generally improved as wages increased and the price of food and other goods fell.`,
    discussionQuestions: [
      'What caused the Great Famine of 1315-17 CE?',
      'How did the Black Death spread so quickly through Europe?',
      'What was the Little Ice Age and how did it affect farming?',
      'Is there anything positive that came from the Black Death? Explain.',
    ],
    keyFacts: [
      'The Great Famine occurred from 1315-1317 CE',
      'Climate change (the Little Ice Age) caused shorter growing seasons and crop failures',
      'Heavy rains in 1315 CE caused floods that destroyed stored grain',
      'Food prices doubled and tripled during the famine',
      'The Great Famine killed up to 25% of Europe\'s population',
      'The Black Death (bubonic plague) was caused by bacteria on fleas carried by rodents',
      'The Black Death killed up to 200 million people (a third to half of all Europeans) from 1347-1351',
      'Poor hygiene in crowded cities helped the plague spread',
      'After the plague, wages increased and food prices fell — living standards improved',
    ],
    visualType: 'timeline',
    visualData: {
      title: 'Crises of the Late Middle Ages',
      events: [
        { year: 'Late 1200s', event: 'Little Ice Age begins — temperatures drop' },
        { year: '1315 CE', event: 'Great Famine begins — heavy rains, floods, crop failure' },
        { year: '1317 CE', event: 'Great Famine ends — up to 25% of Europeans dead' },
        { year: '1347 CE', event: 'Black Death arrives in Europe' },
        { year: '1351 CE', event: 'Black Death subsides — up to 200 million dead' },
      ],
    },
    quizQuestions: [
      { id: 'u3l5q1', question: 'What was the Little Ice Age?', options: ['A period when all of Europe was covered in ice', 'A period of cooling temperatures that shortened growing seasons and contributed to crop failures', 'A single very cold winter', 'An ice age that lasted thousands of years'], correctAnswer: 1, explanation: 'The Little Ice Age was a period of cooling temperatures starting in the late 1200s that shortened growing seasons and contributed to the Great Famine.' },
      { id: 'u3l5q2', question: 'How did the Black Death spread through Europe?', options: ['Through contaminated water', 'By bacteria on fleas carried by rodents, spreading quickly in crowded cities with poor hygiene', 'Through the air only', 'By direct human contact only'], correctAnswer: 1, explanation: 'The Black Death was caused by bacteria carried on fleas that lived on rodents. In crowded European cities with poor hygiene, it spread rapidly.' },
      { id: 'u3l5q3', question: 'Approximately how many people did the Black Death kill?', options: ['1 million', '50 million', 'Up to 200 million (a third to half of all Europeans)', '500,000'], correctAnswer: 2, explanation: 'Scientists estimate the Black Death killed up to 200 million people — roughly a third to half of Europe\'s entire population — in just four years (1347-1351).' },
      { id: 'u3l5q4', question: 'What percentage of Europe\'s population did the Great Famine kill?', options: ['5%', '10%', 'Up to 25%', '50%'], correctAnswer: 2, explanation: 'Historians estimate that the Great Famine of 1315-1317 CE killed up to 25% of the population of Europe.' },
      { id: 'u3l5q5', question: 'What was one unexpected positive outcome of the Black Death?', options: ['More land for churches', 'Living standards improved as wages increased and food prices fell', 'The plague stopped all wars', 'Everyone became healthier'], correctAnswer: 1, explanation: 'After the Black Death, the reduced population meant labour was scarce, so wages rose while food and goods became cheaper — overall living standards improved for survivors.' },
    ],
    interactiveStrategies: [
      { strategy: 'Problem-Based Learning', description: 'Create a survival plan during the Black Death', duration: 8, instructions: 'Imagine you are a village leader during the Black Death. What measures would you take to protect your people? Work in groups to create a survival plan using only the knowledge available in the 14th century.' },
      { strategy: 'Think-Pair-Share', description: 'Discuss if anything positive can come from disaster', duration: 5, instructions: 'Can anything positive come from a disaster? Think about the Black Death. Share with your partner one surprising way life improved after the plague.' },
      { strategy: 'Collaborative Work', description: 'Create a comparison chart of famine vs. plague effects', duration: 6, instructions: 'In groups of 3, create a comparison chart: Great Famine vs. Black Death. Compare causes, death toll, duration, and long-term effects. Which crisis had a bigger impact on Europe?' },
    ],
  },
];

// ═══════════════════════════════════════════════════════════════
// AGGREGATE: All G6T1 content indexed by lessonId
// ═══════════════════════════════════════════════════════════════

const allG6T1Content: LessonContent[] = [...g6t1Unit1, ...g6t1Unit2, ...g6t1Unit3];

const g6t1ContentMap: Record<string, LessonContent> = {};
for (const lesson of allG6T1Content) {
  g6t1ContentMap[lesson.lessonId] = lesson;
}

export function getG6T1LessonContent(lessonId: string): LessonContent | null {
  return g6t1ContentMap[lessonId] || null;
}

export function getAllG6T1Content(): Record<string, LessonContent> {
  return g6t1ContentMap;
}

// Helper: Get content by grade, term, unit, lesson index
export function getLessonContentByPath(gradeKey: string, termKey: string, unitKey: string, lessonIndex: number): LessonContent | null {
  // Map the path to a lessonId format
  const possibleIds = [
    `${gradeKey}_${termKey}_${unitKey}_l${lessonIndex + 1}`,
    `${gradeKey}_${termKey}_General_l${lessonIndex + 1}`, // "General" unit lessons
  ];
  for (const id of possibleIds) {
    if (g6t1ContentMap[id]) return g6t1ContentMap[id];
  }
  return null;
}
