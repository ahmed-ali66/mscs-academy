// ═══════════════════════════════════════════════════════════════
// G6 TERM 3 — REAL TEXTBOOK CONTENT
// Extracted from MoE MSCS Student Textbook Grade 6 Volume 3
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
// UNIT 7: GOVERNMENT SERVICES (5 lessons)
// ═══════════════════════════════════════════════════════════════

export const g6t3Unit7: LessonContent[] = [
  // Lesson 1: How the Government Functions
  {
    lessonId: 'G6_T3_Unit 7_l1',
    keyVocabulary: ['government', 'policy', 'role', 'responsibility', 'welfare', 'enforce', 'regulate', 'citizen', 'public servant', 'constitution'],
    reading1Title: 'The Roles and Responsibilities of Government',
    reading1Content: `Governments and political systems organize and manage countries. Political systems that work well create an organized and safe living environment for people who live in the country. Each system is based on the cooperation of political leaders, who discuss, debate, and decide policies, and officials who put policies into action. It can be an exciting event to see political leaders argue and debate the advantages and disadvantages of policy ideas. However, when a decision has been made, the government depends on the skills and abilities of officials to carry out the policies.

Political leaders are responsible for debating and deciding policies. They discuss the advantages and disadvantages of different ideas and then make decisions that affect the whole country. In the UAE, political leaders include the President, the Vice President, members of the Federal Supreme Council, and ministers in the Cabinet.

Public servants (also called officials or civil servants) are responsible for carrying out the policies that political leaders have decided. They implement the laws and programmes that the government creates. Public servants include teachers, police officers, healthcare workers, and administrators in government departments.

A constitution is a document that states the rules and responsibilities of government. It is the foundation of a country's legal and political system. The UAE has a constitution that was established when the federation was formed in 1971. It outlines the powers of the federal government and the rights of citizens.

One key responsibility of an official is to give unbiased advice to political leaders. Officials must provide honest, objective information to help leaders make the best decisions for the country, even if that advice is not what the leader wants to hear.`,
    reading2Title: 'Government in the UAE',
    reading2Content: `The UAE is a federation of seven emirates: Abu Dhabi, Dubai, Sharjah, Ajman, Umm Al Quwain, Ras Al Khaimah, and Fujairah. The UAE was founded on 2 December 1971. The Federal Supreme Council is the highest authority in the UAE. It consists of the Rulers of the seven emirates. The Council makes major policy decisions, including electing the President and Vice President.

The President of the UAE is His Highness Sheikh Mohamed bin Zayed Al Nahyan. The Vice President and Prime Minister is His Highness Sheikh Mohammed bin Rashid Al Maktoum. The Cabinet (Council of Ministers) is the executive authority. It implements federal laws and policies. The Federal National Council (FNC) is the advisory body that reviews laws and discusses public issues.

The UAE's system of governance combines traditional monarchy with modern consultative institutions. The majlis system allows citizens to meet directly with their rulers and discuss their concerns. This open-door policy ensures that leaders remain connected to the needs of the people.

The UAE government provides many services to citizens and residents, including free education, healthcare, infrastructure, security, and social welfare programmes.`,
    reading1Time: 7,
    reading2Time: 5,
    kwlExplanation: KWL_EXPLANATION,
    discussionQuestions: [
      'What is the difference between a political leader and a public servant?',
      'Why is it important for officials to give unbiased advice to political leaders?',
      'What is a constitution and why does a country need one?',
      'How does the UAE majlis system help political leaders stay connected to the people?',
      'What government services do you use in your daily life?',
    ],
    keyFacts: [
      'Political leaders debate and decide policies',
      'Public servants carry out the policies that leaders decide',
      'A constitution is a document that states the rules and responsibilities of government',
      'The UAE constitution was established in 1971 when the federation was formed',
      'The Federal Supreme Council is the highest authority in the UAE',
      'The FNC is the advisory body that reviews laws and discusses public issues',
      'The majlis system allows citizens to meet directly with their rulers',
      'UAE government provides free education, healthcare, infrastructure, and security',
      'One key responsibility of an official is to give unbiased advice to political leaders',
      'The UAE combines traditional monarchy with modern consultative institutions',
    ],
    visualType: 'diagram',
    visualData: {
      title: 'Branches of UAE Government',
      items: ['Federal Supreme Council', 'Cabinet (Executive)', 'Federal National Council', 'Judiciary', 'Local Government (Emirates)'],
    },
    quizQuestions: [
      { id: 'u7l1q1', question: 'What is the main role of political leaders in government?', options: ['Carrying out policies on a daily basis', 'Debating and deciding policies that affect the whole country', 'Teaching in schools and hospitals', 'Managing private businesses'], correctAnswer: 1, explanation: 'Political leaders are responsible for debating and deciding policies. They discuss the advantages and disadvantages of different ideas and then make decisions for the country.' },
      { id: 'u7l1q2', question: 'What is a constitution?', options: ['A type of political leader', 'A document that states the rules and responsibilities of government', 'A building where laws are made', 'A list of public servants'], correctAnswer: 1, explanation: 'A constitution is a document that states the rules and responsibilities of government. It is the foundation of a country\'s legal and political system.' },
      { id: 'u7l1q3', question: 'What is the highest authority in the UAE?', options: ['The Cabinet', 'The Federal National Council', 'The Federal Supreme Council', 'The Judiciary'], correctAnswer: 2, explanation: 'The Federal Supreme Council is the highest authority in the UAE. It consists of the Rulers of the seven emirates and makes major policy decisions.' },
      { id: 'u7l1q4', question: 'Why must officials give unbiased advice to political leaders?', options: ['Because it is easy to do', 'Because honest, objective information helps leaders make the best decisions, even if the leader does not want to hear it', 'Because the law requires them to be rude', 'Because officials are always right'], correctAnswer: 1, explanation: 'Officials must provide honest, objective information to help leaders make the best decisions for the country, even if that advice is not what the leader wants to hear.' },
      { id: 'u7l1q5', question: 'How does the majlis system help the UAE government?', options: ['It allows political leaders to avoid making decisions', 'It allows citizens to meet directly with their rulers and discuss their concerns', 'It replaces the need for a constitution', 'It trains public servants'], correctAnswer: 1, explanation: 'The majlis system allows citizens to meet directly with their rulers and discuss their concerns. This open-door policy ensures that leaders remain connected to the needs of the people.' },
    ],
    interactiveStrategies: [
      { strategy: 'Think-Pair-Share', description: 'Reflect on the difference between political leaders and public servants', duration: 5, instructions: 'Think about the difference between a political leader and a public servant. Share with your partner: Can you name one example of each in the UAE? How do their roles differ?' },
      { strategy: 'Jigsaw', description: 'Research different branches of UAE government in expert groups', duration: 8, instructions: 'Each group researches one branch of UAE government (Federal Supreme Council, Cabinet, FNC, Judiciary, or Local Government). Become experts on your branch, then share with classmates who studied different branches. Together, create a complete picture of how the UAE government functions.' },
      { strategy: 'Summarizing', description: 'Write a one-sentence summary of the main lesson on government roles', duration: 3, instructions: 'In one sentence, summarize the main lesson about how the government functions. Write it on your index card and share with the class.' },
    ],
  },

  // Lesson 2: Modern Political Systems
  {
    lessonId: 'G6_T3_Unit 7_l2',
    keyVocabulary: ['revolution', 'democracy', 'monarchy', 'authoritarianism', 'industrial', 'mass production', 'social classes'],
    reading1Title: 'Forming Political Systems',
    reading1Content: `Throughout history, different political systems have developed around the world. These systems were often shaped by revolutions — major changes that transformed how countries were governed.

The American Revolution (1775 CE) was one of the first major revolutions. The American colonists wanted independence from British rule. They believed in "no taxation without representation" — the idea that people should not be taxed unless they have a voice in government. The revolution led to the creation of the United States of America and its democratic system of government.

The French Revolution (1789 CE) was inspired by the ideals of "Liberty, Equality, and Fraternity." The French people overthrew their monarchy and established a republic. The revolution changed the political landscape of Europe and influenced movements for democracy around the world.

The German Revolution (1848 CE) was part of a wave of revolutions that swept across Europe. People demanded more rights, democratic reforms, and national unity. While many of these revolutions did not immediately achieve their goals, they planted the seeds for future democratic movements.

The Russian Revolution (1905 and 1917 CE) was one of the most significant revolutions in modern history. In 1917, the Bolsheviks overthrew the Tsar and established a communist government. This created a political system very different from democracy — one where the state controlled nearly every aspect of life.`,
    reading2Title: 'The Industrial Revolution and Types of Political Systems',
    reading2Content: `The political revolutions were taking place at the same time as another revolution: the Industrial Revolution. During the Industrial Revolution, starting about 1760 CE, the way of producing goods changed. Up to this time, most goods were made individually by a skilled craftsman in a workshop. During the Industrial Revolution, a large number of goods were mass produced in factories at one time. In factories, the process of making a product was broken down into a series of tasks. Where possible, machines did the tasks with one person supporting many machines. Using new machines and technology made goods easier and cheaper to produce.

However, the Industrial Revolution also created new social problems: workers (including children) laboured long hours in dangerous conditions, cities became overcrowded, and social classes became more divided. These problems led people to question how their societies should be governed.

Today, countries around the world are governed through different political systems, each with its own characteristics. Scholars generally identify several broad categories:

Democracy — citizens have the right to vote and choose their leaders. Power is shared among different branches of government. People have rights such as freedom of speech and freedom of religion. Democracies can take different forms, including parliamentary and presidential systems.

Monarchy — a king, queen, or emir holds power. In an absolute monarchy, the ruler has complete authority. In a constitutional monarchy, the ruler's power is defined and limited by a constitution and laws. Some constitutional monarchies also incorporate consultative institutions that allow citizens to participate in governance.

Authoritarianism — a single leader or a small group holds power. Citizens have little or no say in how they are governed. Freedoms such as speech and assembly may be restricted.

No single system is identical across countries — each nation adapts its governance to its history, culture, and values. The UAE is a constitutional monarchy with consultative governance — combining traditional leadership with modern institutions that give citizens a voice through the Federal National Council and the majlis system.`,
    reading1Time: 7,
    reading2Time: 6,
    kwlExplanation: KWL_EXPLANATION,
    discussionQuestions: [
      'Why did the American colonists want independence from Britain?',
      'What were the three ideals of the French Revolution?',
      'How did the Industrial Revolution change the way goods were produced?',
      'What is the difference between a democracy and an authoritarian system?',
      'How does the UAE combine traditional monarchy with modern governance?',
    ],
    keyFacts: [
      'The American Revolution (1775) led to the creation of the USA and its democratic system',
      'The French Revolution (1789) was inspired by "Liberty, Equality, and Fraternity"',
      'The Russian Revolution (1917) established a communist government',
      'The Industrial Revolution (from 1760) changed manufacturing from individual craftsmen to mass production in factories',
      'Political systems around the world include democracy, monarchy, and authoritarianism, though each country adapts its system to its own history and values',
      'Democracy: citizens vote and choose leaders, power is shared among branches',
      'Monarchy: a king/queen/emir holds power; can be absolute or constitutional',
      'Authoritarianism: a single leader or small group holds power, citizens have little say',
      'The UAE is a constitutional monarchy with consultative governance',
      'The Industrial Revolution created social problems: child labour, overcrowded cities, divided social classes',
    ],
    visualType: 'timeline',
    visualData: {
      title: 'Major European Revolutions',
      events: [
        { year: '1760', event: 'Industrial Revolution begins' },
        { year: '1775', event: 'American Revolution' },
        { year: '1789', event: 'French Revolution' },
        { year: '1848', event: 'German Revolution' },
        { year: '1917', event: 'Russian Revolution' },
      ],
    },
    quizQuestions: [
      { id: 'u7l2q1', question: 'What was the main idea behind the American Revolution?', options: ['People should pay more taxes', '"No taxation without representation" — people should not be taxed unless they have a voice in government', 'The British should control everything', 'Only the wealthy should govern'], correctAnswer: 1, explanation: 'The American colonists believed in "no taxation without representation" — the idea that people should not be taxed unless they have a voice in government.' },
      { id: 'u7l2q2', question: 'What were the three ideals of the French Revolution?', options: ['Freedom, Wealth, and Power', 'Liberty, Equality, and Fraternity', 'War, Peace, and Unity', 'Faith, Hope, and Charity'], correctAnswer: 1, explanation: 'The French Revolution was inspired by the ideals of "Liberty, Equality, and Fraternity" — values that changed the political landscape of Europe.' },
      { id: 'u7l2q3', question: 'How did the Industrial Revolution change manufacturing?', options: ['It made all goods more expensive', 'It changed production from individual craftsmen in workshops to mass production in factories', 'It stopped production completely', 'It only affected farming'], correctAnswer: 1, explanation: 'The Industrial Revolution changed manufacturing from individual craftsmen making goods in workshops to mass production in factories using machines and technology.' },
      { id: 'u7l2q4', question: 'What is the key difference between democracy and authoritarianism?', options: ['Democracies have no leaders, while authoritarian systems do', 'In democracy, citizens vote and choose leaders; in authoritarianism, a single leader or small group holds power with little citizen input', 'Authoritarianism gives more rights to citizens', 'There is no difference'], correctAnswer: 1, explanation: 'In a democracy, citizens have the right to vote and choose their leaders. In authoritarianism, a single leader or small group holds power and citizens have little or no say in governance.' },
      { id: 'u7l2q5', question: 'What type of political system does the UAE have?', options: ['A pure democracy', 'An absolute monarchy', 'A constitutional monarchy with consultative governance', 'An authoritarian system'], correctAnswer: 2, explanation: 'The UAE is a constitutional monarchy with consultative governance — combining traditional leadership with modern institutions that give citizens a voice.' },
    ],
    interactiveStrategies: [
      { strategy: 'Walking Debate', description: 'Vote with your feet — agree or disagree about political systems', duration: 7, instructions: 'The teacher reads statements about political systems. Stand on the left side if you agree, right if you disagree, middle if unsure. Discuss your position with someone who chose differently. Example: "A constitutional monarchy is better than an absolute monarchy."' },
      { strategy: 'Simulations', description: 'Simulate a revolutionary debate about forming a new government', duration: 8, instructions: 'Divide into groups representing citizens of a fictional country. Each group must decide what type of political system they want: democracy, monarchy, or authoritarianism. Debate the advantages and disadvantages of each. Vote on which system to adopt.' },
      { strategy: 'Content Recall', description: 'List the main categories of political systems and one key fact about each', duration: 4, instructions: 'Without looking at your notes, list the main categories of political systems (democracy, monarchy, authoritarianism) and write one key fact about each on your index card. Share with your partner.' },
    ],
  },

  // Lesson 3: How Laws Are Made
  {
    lessonId: 'G6_T3_Unit 7_l3',
    keyVocabulary: ['legislative', 'executive', 'judicial', 'civil law', 'criminal law', 'parliamentary', 'presidential', 'draft', 'bill'],
    reading1Title: 'Civil and Criminal Law',
    reading1Content: `Governments create, interpret, and execute laws. Laws are the rules that every member of society must obey. All countries have a legal system to protect people who live in their countries. However, not all political systems create, interpret, and execute laws in the same way.

Most governments have three different branches — legislative (the branch that creates laws), executive (the branch that executes or carries out laws), and judicial (the branch that interprets laws).

There are two main types of law:

Civil law deals with issues between individuals. Examples include disputes over contracts, property, or family matters. If two people disagree about who owns a piece of land, that is a civil law case.

Criminal law deals with crimes against the state or society. Examples include theft, assault, and fraud. When someone breaks a law that affects the safety or order of society, that is a criminal law case.

The burden of proof is different for each type of law. In criminal law, the accused person is considered innocent until proven guilty. In civil law, the decision is based on the "balance of evidence" — which side has the stronger case.`,
    reading2Title: 'How a Law is Made',
    reading2Content: `In a parliamentary system, the legislative and the executive branches of government are very closely connected. The leader comes from the legislative branch. This means that the people do not elect a single leader. They elect a party or group of political officials. The leader is elected by the party or appointed by other means.

In a presidential system, the legislative and executive branches are kept separate. This is called "separation of powers," where each branch of government has its own responsibilities and no branch has too much power.

How a law is made:

Step 1: A bill (a proposed law) is drafted. Anyone can suggest a bill, but it is usually written by a member of the legislature.

Step 2: The bill is debated. Members of the legislature discuss the advantages and disadvantages of the proposed law.

Step 3: The bill is voted on. If a majority of members agree, the bill passes to the next stage.

Step 4: The bill goes to the executive branch. The president or governor can sign the bill into law or veto (reject) it.

Step 5: The law is executed or enforced by the police and government agencies.

Step 6: If someone is accused of breaking the law, they go to trial. A judge or jury decides if the person is innocent or guilty.

In the UAE, laws are created through a process that involves the Federal National Council (which reviews and discusses bills) and the President (who issues laws by decree). The UAE's legal system combines civil law traditions with Islamic Sharia law.`,
    reading1Time: 7,
    reading2Time: 6,
    kwlExplanation: KWL_EXPLANATION,
    discussionQuestions: [
      'What is the difference between civil law and criminal law?',
      'Why is the accused person considered innocent until proven guilty?',
      'What are the three branches of government and what does each do?',
      'How does a bill become a law?',
      'What is the difference between a parliamentary and a presidential system?',
    ],
    keyFacts: [
      'Three branches of government: legislative (creates laws), executive (carries out laws), judicial (interprets laws)',
      'Civil law deals with issues between individuals',
      'Criminal law deals with crimes against the state or society',
      'In criminal law, the accused is innocent until proven guilty',
      'In civil law, decisions are based on the "balance of evidence"',
      'A bill is a proposed law that must go through several steps before becoming a law',
      'Parliamentary system: legislative and executive branches are closely connected',
      'Presidential system: legislative and executive branches are separate (separation of powers)',
      'The UAE legal system combines civil law traditions with Islamic Sharia law',
      'In the UAE, the FNC reviews bills and the President issues laws by decree',
    ],
    visualType: 'diagram',
    visualData: {
      title: 'How a Bill Becomes a Law',
      items: ['1. Bill is Drafted', '2. Bill is Debated', '3. Bill is Voted On', '4. Executive Reviews', '5. Law is Enforced', '6. Accused Goes to Trial'],
    },
    quizQuestions: [
      { id: 'u7l3q1', question: 'What is the difference between civil law and criminal law?', options: ['Civil law deals with crimes; criminal law deals with contracts', 'Civil law deals with issues between individuals; criminal law deals with crimes against the state or society', 'There is no difference', 'Civil law is for citizens; criminal law is for criminals only'], correctAnswer: 1, explanation: 'Civil law deals with disputes between individuals (contracts, property, family), while criminal law deals with crimes against the state or society (theft, assault, fraud).' },
      { id: 'u7l3q2', question: 'What does "separation of powers" mean in a presidential system?', options: ['The president has all the power', 'Each branch of government has its own responsibilities and no branch has too much power', 'Laws are made by one person', 'The legislative and executive branches are the same'], correctAnswer: 1, explanation: 'Separation of powers means each branch of government (legislative, executive, judicial) has its own responsibilities and no single branch has too much power.' },
      { id: 'u7l3q3', question: 'What is a bill?', options: ['A law that has already been passed', 'A type of court', 'A proposed law that must go through several steps before becoming a law', 'A document that proves someone is innocent'], correctAnswer: 2, explanation: 'A bill is a proposed law. It must go through several steps — being drafted, debated, voted on, and approved by the executive — before it becomes a law.' },
      { id: 'u7l3q4', question: 'In criminal law, what is the principle regarding the accused?', options: ['The accused is always guilty', 'The accused must prove their innocence', 'The accused is considered innocent until proven guilty', 'The accused has no rights'], correctAnswer: 2, explanation: 'In criminal law, the accused person is considered innocent until proven guilty. This is a fundamental principle of justice that protects individuals from wrongful conviction.' },
      { id: 'u7l3q5', question: 'How are laws made in the UAE?', options: ['Only the President decides all laws', 'The FNC reviews and discusses bills, and the President issues laws by decree', 'Citizens vote on every law directly', 'The Cabinet creates all laws without review'], correctAnswer: 1, explanation: 'In the UAE, laws are created through a process that involves the Federal National Council (which reviews and discusses bills) and the President (who issues laws by decree).' },
    ],
    interactiveStrategies: [
      { strategy: 'Role Playing', description: 'Act out the process of a bill becoming a law', duration: 8, instructions: 'In groups of 6, each person plays one step of the law-making process: drafter, debater, voter, executive, enforcer, and judge. Act out the journey of a fictional bill (e.g., "All students must wear hats on Wednesdays") from draft to law. Discuss what happens at each step.' },
      { strategy: 'Problem-Based Learning', description: 'Decide whether scenarios are civil or criminal law cases', duration: 7, instructions: 'Read each scenario and decide: Is this a civil law case or a criminal law case? Work in pairs to classify at least 5 scenarios and explain your reasoning. Example: "Two neighbours disagree about a fence" — civil law.' },
      { strategy: 'Flip Charts', description: 'Create a flip chart comparing parliamentary and presidential systems', duration: 6, instructions: 'In groups of 4, create a flip chart comparing parliamentary and presidential systems. Include: how the leader is chosen, how branches are connected, and one example country for each. Present to the class.' },
    ],
  },

  // Lesson 4: How Laws Are Interpreted
  {
    lessonId: 'G6_T3_Unit 7_l4',
    keyVocabulary: ['judiciary', 'court', 'federal', 'local', 'judge', 'jury', 'innocent', 'guilty', 'appeal'],
    reading1Title: 'The Judicial System',
    reading1Content: `The judiciary is the branch of government that interprets laws or makes decisions on legal issues. For example, if a person is accused of a crime, the person must go to a law court, where a judge or jury will decide if the person is innocent or guilty of the crime. This process is part of a country's judicial system.

In many countries, the judicial branch is separate from the other branches of government to make it independent and non-political. The country's constitution provides a framework on how to understand and enforce laws.

Judicial systems operate at three levels:

Local level — Courts that deal with issues in towns, cities, and smaller political divisions. Local courts handle cases like traffic violations, minor disputes, and small claims.

Federal (National) level — Courts that deal with issues that affect the whole country. Federal courts handle cases involving national laws, disputes between emirates or states, and serious crimes.

International level — The United Nations manages disputes between nations. The International Court of Justice is the judicial branch of the United Nations. It settles legal disputes between countries and gives advisory opinions on legal questions.

A judge is a person who presides over a court and makes decisions based on the law. A jury is a group of ordinary citizens who listen to evidence and decide if the accused person is guilty or innocent. Not all countries use juries — some rely only on judges.`,
    reading2Title: 'The UAE Judicial System',
    reading2Content: `The UAE has a comprehensive judicial system that operates at both the federal and local levels.

At the federal level, the Federal Supreme Court is the highest court in the UAE. It deals with disputes between emirates, challenges to the constitutionality of laws, and other important cases. The Federal Court of First Instance handles less serious cases at the federal level.

At the local level, each emirate has its own court system. For example, the Dubai Courts and the Abu Dhabi Judicial Department handle cases within their respective emirates. Local courts deal with civil, criminal, and commercial cases.

The UAE's legal system is based on a combination of civil law (influenced by Egyptian and French law) and Islamic Sharia law. Sharia courts handle matters of personal status such as marriage, divorce, and inheritance.

The independence of the judiciary is protected by the UAE Constitution. Judges are appointed based on their qualifications and experience, and they must make decisions based on the law, not on political pressure.

If a person is not satisfied with the decision of a lower court, they can appeal to a higher court. The appeals process ensures that legal decisions are fair and just.

The UAE also participates in international legal frameworks, including the International Court of Justice, to resolve disputes between nations peacefully.`,
    reading1Time: 7,
    reading2Time: 5,
    kwlExplanation: KWL_EXPLANATION,
    discussionQuestions: [
      'Why is the judicial branch separate from the other branches of government?',
      'What is the difference between a judge and a jury?',
      'What are the three levels of the judicial system?',
      'How does the UAE judicial system combine civil law and Sharia law?',
      'What is the purpose of the appeals process?',
    ],
    keyFacts: [
      'The judiciary interprets laws and makes decisions on legal issues',
      'The judicial branch is separate from other branches to ensure independence and non-political decisions',
      'Three levels: local (cities/towns), federal (whole country), international (between nations)',
      'The International Court of Justice is the judicial branch of the United Nations',
      'A judge presides over a court and makes decisions based on the law',
      'A jury is a group of citizens who decide if the accused is guilty or innocent',
      'The Federal Supreme Court is the highest court in the UAE',
      'The UAE legal system combines civil law and Islamic Sharia law',
      'The UAE Constitution protects the independence of the judiciary',
      'If dissatisfied with a lower court decision, a person can appeal to a higher court',
    ],
    visualType: 'diagram',
    visualData: {
      title: 'Three Levels of the Judicial System',
      items: ['Local Courts (Towns/Cities)', 'Federal Courts (National)', 'International Court of Justice (UN)', 'Appeals Process', 'UAE Supreme Court'],
    },
    quizQuestions: [
      { id: 'u7l4q1', question: 'Why is the judicial branch separate from the other branches of government?', options: ['Because judges do not like politicians', 'To ensure independence and non-political decisions', 'Because it is a tradition with no reason', 'Because the constitution says nothing about it'], correctAnswer: 1, explanation: 'The judicial branch is separate from other branches to ensure independence and non-political decisions, so that laws are interpreted fairly without political pressure.' },
      { id: 'u7l4q2', question: 'What is the difference between a judge and a jury?', options: ['There is no difference', 'A judge presides over a court and makes decisions based on the law; a jury is a group of citizens who decide if the accused is guilty or innocent', 'A jury is more powerful than a judge', 'A judge is always a lawyer and a jury is always a group of police officers'], correctAnswer: 1, explanation: 'A judge is a person who presides over a court and makes decisions based on the law. A jury is a group of ordinary citizens who listen to evidence and decide if the accused is guilty or innocent.' },
      { id: 'u7l4q3', question: 'What is the highest court in the UAE?', options: ['The Dubai Courts', 'The Federal Court of First Instance', 'The Federal Supreme Court', 'The International Court of Justice'], correctAnswer: 2, explanation: 'The Federal Supreme Court is the highest court in the UAE. It deals with disputes between emirates, challenges to the constitutionality of laws, and other important cases.' },
      { id: 'u7l4q4', question: 'What is the purpose of the appeals process?', options: ['To punish the accused more severely', 'To allow a person who is not satisfied with a lower court decision to have it reviewed by a higher court', 'To delay the legal process', 'To replace the judge'], correctAnswer: 1, explanation: 'The appeals process allows a person who is not satisfied with the decision of a lower court to have it reviewed by a higher court, ensuring that legal decisions are fair and just.' },
      { id: 'u7l4q5', question: 'What does the International Court of Justice do?', options: ['It handles traffic violations', 'It settles legal disputes between countries and gives advisory opinions on legal questions', 'It elects the President of the UAE', 'It manages the UAE court system'], correctAnswer: 1, explanation: 'The International Court of Justice is the judicial branch of the United Nations. It settles legal disputes between countries and gives advisory opinions on legal questions.' },
    ],
    interactiveStrategies: [
      { strategy: 'Case Study', description: 'Analyze a fictional court case at different judicial levels', duration: 8, instructions: 'Read the fictional case: "A business dispute between companies in two different emirates." Work in groups to decide: Should this go to a local court or a federal court? Why? What would happen if the losing party wants to appeal? Present your analysis.' },
      { strategy: 'Role Playing', description: 'Act out a courtroom scene with judge, jury, and accused', duration: 7, instructions: 'In groups of 5, assign roles: judge, two lawyers, accused, and jury member. Act out a simple trial scene (e.g., a minor theft case). The judge explains the law, lawyers present arguments, and the jury decides. Discuss: How does this ensure fairness?' },
      { strategy: 'Brainstorming', description: 'Brainstorm why judicial independence matters', duration: 5, instructions: 'As a class, brainstorm: Why is it important for judges to be independent from political leaders? What could happen if judges were controlled by politicians? Write the top 5 reasons on the board.' },
    ],
  },

  // Lesson 5: Rights and Responsibilities
  {
    lessonId: 'G6_T3_Unit 7_l5',
    keyVocabulary: ['right', 'responsibility', 'civil rights', 'political rights', 'citizen', 'resident', 'welfare', 'equality'],
    reading1Title: 'Rights and Responsibilities',
    reading1Content: `One main focus of government is protecting the welfare of the people who live in the country. The people who live in a country could be citizens or residents. Citizens are people who have the nationality of the country. Residents are people who are not citizens but live in the country. The rights of citizens and residents may differ according to the law.

Rights given to people who live in the country can be categorized as "civil rights" and "political rights." Examples of civil rights are the right to own property, the right to move around inside the country, and equality for people of any race, gender, or religion. Political rights are the rights that citizens have to participate in government by election or by holding office.

A right is something people can have — like the right to education or the right to safety. A responsibility is something people must do — like obeying the law or paying taxes. Every right comes with a responsibility. For example, you have the right to free speech, but you have the responsibility to use it respectfully and not to harm others with your words.`,
    reading2Title: 'Rights and Responsibilities in the UAE',
    reading2Content: `The UAE Constitution guarantees many rights to its citizens and residents. Some of the most important rights include:

The right to equality — All people are equal before the law, regardless of race, nationality, or religion.

The right to education — Education is free for all citizens at all levels.

The right to work — All citizens have the right to work and to choose their profession.

The right to healthcare — The government provides free healthcare to citizens.

The right to safety — The government is responsible for protecting the safety and security of all people living in the country.

Along with these rights come important responsibilities:

Understanding and obeying the country's laws — This is a responsibility for ALL people who live in the UAE, whether citizens or residents.

Paying taxes and fees — While the UAE does not have income tax, residents and businesses must pay certain fees and charges.

Voting in elections — Citizens who are eligible to vote in FNC elections have the responsibility to participate.

Contributing to the community — Volunteering and helping others is a key responsibility of good citizenship.

Wadeema's Law (Federal Law No. 3 of 2016) is an important UAE law that protects children's rights. Named after a young girl whose case highlighted the need for stronger child protection, the law ensures that children have the right to life, security, care, and protection from all forms of abuse and neglect.

The UAE has also ratified the United Nations Convention on the Rights of the Child, which means it is committed to protecting children's rights at the highest international standard.`,
    reading1Time: 7,
    reading2Time: 5,
    kwlExplanation: KWL_EXPLANATION,
    discussionQuestions: [
      'What is the difference between a right and a responsibility?',
      'What is the difference between civil rights and political rights?',
      'What responsibilities do all people living in the UAE have?',
      'What is Wadeema\'s Law and why is it important?',
      'Why does every right come with a responsibility?',
    ],
    keyFacts: [
      'Citizens have the nationality of the country; residents live there but are not citizens',
      'Civil rights include the right to own property, move freely, and equality regardless of race, gender, or religion',
      'Political rights include voting and holding office — usually reserved for citizens',
      'A right is something you can have; a responsibility is something you must do',
      'Every right comes with a corresponding responsibility',
      'The UAE Constitution guarantees equality, education, work, healthcare, and safety',
      'Wadeema\'s Law (Federal Law No. 3 of 2016) protects children\'s rights',
      'The UAE has ratified the UN Convention on the Rights of the Child',
      'All people in the UAE (citizens and residents) must obey the country\'s laws',
      'Contributing to the community through volunteering is a key responsibility of good citizenship',
    ],
    visualType: 'venn',
    visualData: {
      leftTitle: 'Rights',
      rightTitle: 'Responsibilities',
      centerTitle: 'Both',
      leftItems: ['Right to education', 'Right to safety', 'Right to equality', 'Right to work', 'Freedom of movement'],
      rightItems: ['Obey laws', 'Pay taxes/fees', 'Vote in elections', 'Contribute to community', 'Respect others'],
      centerItems: ['Essential for society', 'Protected by government', 'Apply to all residents', 'Build strong communities'],
    },
    quizQuestions: [
      { id: 'u7l5q1', question: 'What is the difference between a citizen and a resident?', options: ['There is no difference', 'Citizens have the nationality of the country; residents live there but are not citizens', 'Citizens pay more taxes than residents', 'Residents have more rights than citizens'], correctAnswer: 1, explanation: 'Citizens are people who have the nationality of the country. Residents are people who are not citizens but live in the country. Their rights may differ according to the law.' },
      { id: 'u7l5q2', question: 'What is the difference between civil rights and political rights?', options: ['They are the same thing', 'Civil rights include property and equality; political rights include voting and holding office', 'Civil rights are for residents; political rights are for citizens', 'Political rights are more important than civil rights'], correctAnswer: 1, explanation: 'Civil rights include the right to own property, move freely, and equality. Political rights include the right to participate in government by voting or holding office.' },
      { id: 'u7l5q3', question: 'What is Wadeema\'s Law?', options: ['A law about traffic safety', 'Federal Law No. 3 of 2016 that protects children\'s rights, ensuring the right to life, security, care, and protection from abuse', 'A law about education', 'A law about voting rights'], correctAnswer: 1, explanation: 'Wadeema\'s Law (Federal Law No. 3 of 2016) protects children\'s rights. Named after a young girl whose case highlighted the need for stronger child protection, the law ensures children have the right to life, security, care, and protection from abuse and neglect.' },
      { id: 'u7l5q4', question: 'Why does every right come with a responsibility?', options: ['Because the government says so', 'Because rights can be misused if not balanced with responsibility — for example, free speech must be used respectfully', 'Because responsibilities are more important than rights', 'Only some rights have responsibilities'], correctAnswer: 1, explanation: 'Every right comes with a responsibility because rights can be misused without balance. For example, you have the right to free speech, but you have the responsibility to use it respectfully and not harm others.' },
      { id: 'u7l5q5', question: 'What responsibility do ALL people living in the UAE share, whether citizens or residents?', options: ['Voting in elections', 'Understanding and obeying the country\'s laws', 'Only citizens have responsibilities', 'Paying income tax'], correctAnswer: 1, explanation: 'Understanding and obeying the country\'s laws is a responsibility for ALL people who live in the UAE, whether citizens or residents. This ensures order and safety for everyone.' },
    ],
    interactiveStrategies: [
      { strategy: 'Collaborative Work', description: 'Match rights with their corresponding responsibilities', duration: 7, instructions: 'In pairs, create a list of 5 rights and match each with its corresponding responsibility. Example: "Right to education" → "Responsibility to study hard and respect teachers." Share your list with another pair and compare.' },
      { strategy: 'Think-Pair-Share', description: 'Reflect on Wadeema\'s Law and children\'s rights', duration: 5, instructions: 'Think about Wadeema\'s Law and why it was created. Share with your partner: Why is it important to have laws that specifically protect children? What responsibilities do adults have towards children?' },
      { strategy: 'Problem-Based Learning', description: 'Create a rights and responsibilities charter for the classroom', duration: 8, instructions: 'As a class, create a Classroom Rights and Responsibilities Charter. List 5 rights every student should have and the responsibility that goes with each right. Write the charter on a poster and display it in the classroom.' },
    ],
  },
];

// ═══════════════════════════════════════════════════════════════
// AGGREGATE: All G6T3 content indexed by lessonId
// ═══════════════════════════════════════════════════════════════

const allG6T3Content: LessonContent[] = [...g6t3Unit7];

export const g6t3ContentMap: Record<string, LessonContent> = {};
for (const lesson of allG6T3Content) {
  g6t3ContentMap[lesson.lessonId] = lesson;
}

export function getG6T3LessonContent(lessonId: string): LessonContent | null {
  return g6t3ContentMap[lessonId] || null;
}

export function getAllG6T3Content(): Record<string, LessonContent> {
  return g6t3ContentMap;
}
