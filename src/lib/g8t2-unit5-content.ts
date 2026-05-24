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

export const KWL_EXPLANATION = "KWL stands for Know, Want to know, Learned. It's a thinking tool that helps you track your learning. Start by writing what you already Know about the topic, then write what you Want to know, and after the lesson write what you Learned!";

export const g8t2Unit5: LessonContent[] = [
  // ─── Lesson 1: Understanding State and Government ───
  {
    lessonId: "G8_T2_Unit 5_l1",
    keyVocabulary: ["constitution", "government", "state", "Federal Supreme Council", "Federal National Council"],
    reading1Title: "What is a State and Government?",
    reading1Content: `A state is a political organisation that has sovereignty over a defined territory and its people. It is the fundamental building block of political life, providing the structure through which laws are made, resources are managed, and the welfare of citizens is safeguarded. Every state possesses certain essential characteristics: a permanent population, a defined territory, a government that exercises authority, and the capacity to enter into relations with other states. The concept of a state is not merely about borders and land — it is about the organised community of people living under a single system of governance that protects their rights and promotes their collective well-being. Understanding what a state is forms the foundation for understanding how societies organise themselves politically and how power is distributed and exercised.

The government is the system or group of people that governs an organised community, typically a state. It is the mechanism through which the state exercises its authority, enforces laws, and delivers public services to its citizens. A government operates within the framework of a constitution, which is the supreme law of the land that defines the structure of government, outlines the rights and responsibilities of citizens, and sets the limits of governmental power. The constitution serves as a social contract between the state and its people, ensuring that governance is conducted according to established principles rather than arbitrary rule. In the United Arab Emirates, the provisional Constitution was adopted on 2 December 1971, the very day the federation was established, and it has since guided the nation's political development and protected the rights of its citizens.

The Federal National Council (FNC) is one of the five federal authorities stipulated by the UAE Constitution. It was established by the provisional Constitution in 1971, and initially all 40 members of the Council were appointed. The FNC serves as the advisory body of the federation, reviewing proposed legislation, debating matters of public interest, and questioning ministers about the performance of their ministries. Over the decades, the FNC has evolved to become an increasingly important forum for representing the voices and concerns of UAE citizens in the federal decision-making process. Its establishment marked a significant step in the political development of the young nation, providing a structured channel for civic participation and democratic engagement.

A major milestone in the evolution of the FNC came with the Supreme Council Resolution No. 4 of 2006, which revised the method of selecting Council members. Under this resolution, half of the 40 members are appointed by the rulers of the emirates, while the other half are elected by electoral bodies chosen from each emirate. This historic reform was introduced under the leadership of Sheikh Khalifa bin Zayed Al Nahyan and represented a significant step toward greater political participation. The resolution transformed the FNC from a fully appointed body to a partially elected one, giving citizens a direct voice in choosing their representatives and strengthening the principle of shura (consultation) that is deeply rooted in Emirati culture and Islamic tradition.

Eligibility for membership in the Federal National Council is governed by Articles 70 and 71 of the Constitution. According to these provisions, a candidate must be a UAE citizen, at least 25 years old, permanently resident in the emirate they seek to represent, possess full civil capacity, be of good conduct and reputation, have adequate knowledge of reading and writing, and must not hold any public office in the federation or an emirate. These eligibility criteria ensure that FNC members are fully committed to their legislative duties and free from conflicts of interest that could compromise their independence. On the voter side, the family book (Khulasat Al Qaid) determines which emirate a voter belongs to, voting is a personal right that cannot be delegated, voters must present their Emirates ID at the polling station, and each voter may cast only one vote for one candidate from their own emirate. These rules safeguard the integrity of the electoral process and ensure that representation is fair and transparent. Additionally, the 'Weyakum' app is being developed to foster closer interaction between FNC members and the public, reflecting the Council's commitment to modernising civic engagement and making the democratic process more accessible to all citizens.`,
    reading2Title: "The Federal Supreme Council",
    reading2Content: `The Federal Supreme Council is the highest constitutional authority in the United Arab Emirates. It is also the highest legislative and executive authority in the federation, meaning that it holds the ultimate power to make laws and to oversee their implementation. The Council's position at the apex of the governmental structure reflects the federal nature of the UAE, where the individual emirates have come together under a unified framework while retaining significant autonomy in their internal affairs. The Federal Supreme Council embodies the principle that the rulers of the emirates govern the federation collectively, ensuring that the interests of all seven emirates are represented and protected at the highest level of decision-making. Its authority is derived directly from the Constitution, which entrusts it with the most consequential responsibilities in the life of the nation.

The formation of the Federal Supreme Council reflects the federation's commitment to equality among the emirates. The Council is composed of the rulers of the seven emirates — Abu Dhabi, Dubai, Sharjah, Ajman, Umm Al Quwain, Ras Al Khaimah, and Fujairah — or their deputies in cases where a ruler is unable to attend. Importantly, each emirate has one vote in the Council, regardless of its size, population, or economic power. This principle of equal representation ensures that the voices of smaller emirates carry the same weight as those of larger ones, reinforcing the spirit of unity and mutual respect upon which the federation was built. Decisions on substantive matters require the agreement of at least five members, including the rulers of Abu Dhabi and Dubai, which balances the need for broad consensus with the recognition of the two largest emirates' special roles.

The Federal Supreme Council holds eight key responsibilities as defined by the Constitution. First, it formulates the general policy of the federation on all matters entrusted to it, setting the strategic direction for the nation's development. Second, it endorses federal laws before they are issued, including the federal budget, ensuring that all legislation aligns with the federation's priorities and values. Third, it sanctions decrees that have been passed by the Council of Ministers, providing the final approval needed for executive actions. Fourth, it approves the ratification of treaties and international agreements, safeguarding the federation's sovereignty and interests in its relations with other nations. Fifth, it approves the appointment of the Prime Minister of the federation, who is nominated by the President, ensuring capable leadership of the executive branch. Sixth, it approves the appointment of the President and judges of the Supreme Federal Court, upholding the independence and integrity of the judiciary. Seventh, it exercises supreme control over the affairs of the federation as a whole, ensuring that all federal institutions operate effectively and in accordance with the Constitution. Eighth, it carries out any other responsibilities assigned to it by the Constitution or federal laws, providing flexibility to address emerging challenges and opportunities.

The late Sheikh Zayed bin Sultan Al Nahyan, the founding father of the UAE, recognised that the success of the federation depended not only on the government but also on the active participation of all citizens. He stated: "The process of construction and development requires the efforts not only of the government but also of all the citizens of the UAE." This powerful quote encapsulates the principle that governance is a shared responsibility — the government sets the direction and provides the framework, but the citizens must contribute their energy, ideas, and commitment to building a strong and prosperous nation. It is a call to civic duty that resonates as strongly today as it did when the UAE was first established, reminding every citizen that they have a vital role to play in the ongoing project of national development.

The concept of representative governance can be understood through a relatable analogy: the school council. Just as the Federal Supreme Council and the Federal National Council provide structures for governing the nation, a school council is an elected body that represents students' interests within the school community. Students can have a voice in school government through a school council, which serves as a platform for expressing concerns, proposing improvements, and participating in decision-making that affects student life. The school council mirrors the structure of government at a national level — members are elected or chosen to represent their peers, they debate issues of common concern, and they work with school administrators to find solutions. This analogy helps students understand that the principles of representation, consultation, and shared responsibility that operate at the national level also apply in their own daily lives. By participating in a school council, students learn the skills of democratic participation, negotiation, and civic engagement that are essential for informed and active citizenship in the wider community.`,
    reading1Time: 8,
    reading2Time: 8,
    kwlExplanation: KWL_EXPLANATION,
    discussionQuestions: [
      "What was the aim of Supreme Council Resolution No. 4 of 2006, and how did it change the selection of FNC members?",
      "How do elections to the Federal National Council demonstrate the values of inclusion, equality, and justice in the UAE?",
      "Based on Sheikh Zayed's quote — 'The process of construction and development requires the efforts not only of the government but also of all the citizens of the UAE' — what are the shared responsibilities of government and citizens?",
      "Why is the Federal Supreme Council considered the highest constitutional authority, and why is its role essential to the federation?",
      "How does a school council mirror the structure and function of government, and what can students learn from this comparison?"
    ],
    keyFacts: [
      "A state is a political organisation with sovereignty over a defined territory and its people.",
      "A government is the system or group of people that governs an organised community, typically a state.",
      "A constitution is the supreme law that defines government structure, citizen rights, and the limits of governmental power.",
      "The Federal National Council (FNC) was established by the provisional Constitution in 1971, with all 40 members initially appointed.",
      "Supreme Council Resolution No. 4 of 2006 revised the FNC selection method: half appointed by rulers, half elected by electoral bodies.",
      "FNC membership eligibility (Articles 70 and 71): must be a UAE citizen, at least 25 years old, permanently resident in the represented emirate, of good conduct, with adequate reading and writing knowledge, and not holding public office.",
      "Voter rules: the family book (Khulasat Al Qaid) determines emirate, voting is a personal right, Emirates ID must be presented, and each voter casts one vote for one candidate from their own emirate.",
      "The Federal Supreme Council is the highest constitutional, legislative, and executive authority in the UAE.",
      "The Federal Supreme Council is composed of the rulers of the seven emirates or their deputies, with each emirate holding one vote.",
      "The Federal Supreme Council holds eight key responsibilities, including formulating general policy, endorsing federal laws, approving treaties, and appointing the Prime Minister and Supreme Federal Court judges.",
      "The 'Weyakum' app is being developed to foster closer interaction between FNC members and the public.",
      "A school council is an elected body that represents students' interests, mirroring the principles of representative government at a national level."
    ],
    visualType: "diagram",
    visualData: {
      title: "Structure of the UAE Government",
      center: "Federal Supreme Council",
      centerDescription: "Highest constitutional, legislative, and executive authority",
      branches: [
        {
          label: "Federal National Council",
          responsibilities: [
            "Reviewing and discussing proposed federal legislation",
            "Debating matters of public interest and citizen concerns",
            "Questioning ministers about the performance of their ministries"
          ]
        },
        {
          label: "Council of Ministers",
          responsibilities: [
            "Executing federal laws and policies approved by the FSC",
            "Preparing draft laws and the federal budget",
            "Supervising the administration of all federal ministries and authorities"
          ]
        },
        {
          label: "Federal Judiciary",
          responsibilities: [
            "Interpreting federal laws and resolving legal disputes",
            "Ensuring the constitutionality of legislation",
            "Protecting the rights and freedoms guaranteed by the Constitution"
          ]
        }
      ]
    },
    quizQuestions: [
      {
        id: "G8T2U5L1Q1",
        question: "What did Supreme Council Resolution No. 4 of 2006 achieve?",
        options: [
          "It changed the number of FNC members from 40 to 80",
          "It revised the FNC selection method so that half the members are appointed and half are elected by electoral bodies",
          "It abolished the Federal National Council entirely",
          "It made all FNC members elected by the general public"
        ],
        correctAnswer: 1,
        explanation: "Resolution No. 4 of 2006 revised the method of selecting FNC members so that half are appointed by the rulers of the emirates and the other half are elected by electoral bodies, marking a significant step toward greater political participation."
      },
      {
        id: "G8T2U5L1Q2",
        question: "Which of the following is a requirement for FNC membership eligibility under Articles 70 and 71 of the Constitution?",
        options: [
          "A candidate must be at least 30 years old and hold a university degree",
          "A candidate must be a UAE citizen, at least 25 years old, permanently resident in the emirate they represent, and not hold any public office",
          "A candidate must be male and own property in the emirate they represent",
          "A candidate must have previously served in a government ministry"
        ],
        correctAnswer: 1,
        explanation: "Under Articles 70 and 71, FNC candidates must be UAE citizens, at least 25 years old, permanently resident in the emirate they represent, possess full civil capacity, be of good conduct, have adequate reading and writing knowledge, and not hold public office."
      },
      {
        id: "G8T2U5L1Q3",
        question: "How is the Federal Supreme Council formed?",
        options: [
          "It consists of 40 elected representatives from all seven emirates",
          "It is composed of the rulers of the seven emirates or their deputies, with each emirate holding one vote",
          "It is made up of the Prime Minister and the Council of Ministers",
          "It consists of the judges of the Supreme Federal Court"
        ],
        correctAnswer: 1,
        explanation: "The Federal Supreme Council is composed of the rulers of the seven emirates or their deputies. Each emirate holds one vote regardless of its size or population, ensuring equal representation at the highest level of authority."
      },
      {
        id: "G8T2U5L1Q4",
        question: "Which of the following is one of the eight responsibilities of the Federal Supreme Council?",
        options: [
          "Operating the 'Weyakum' app for public interaction",
          "Approving the ratification of treaties and international agreements",
          "Conducting daily administration of federal ministries",
          "Organising school council elections across the UAE"
        ],
        correctAnswer: 1,
        explanation: "One of the eight key responsibilities of the Federal Supreme Council is approving the ratification of treaties and international agreements, safeguarding the federation's sovereignty and interests in its relations with other nations."
      },
      {
        id: "G8T2U5L1Q5",
        question: "How does a school council mirror the structure of government?",
        options: [
          "A school council is appointed by the principal, just as all government officials are appointed",
          "A school council is an elected body that represents students' interests, just as the FNC represents citizens' interests, and both involve consultation and shared decision-making",
          "A school council has the same eight responsibilities as the Federal Supreme Council",
          "A school council passes federal laws that apply to all schools in the country"
        ],
        correctAnswer: 1,
        explanation: "A school council mirrors government by being an elected body that represents the interests of its members (students), provides a platform for expressing concerns and proposing improvements, and works with administrators to find solutions — just as the FNC and other government bodies represent citizens and engage in consultation and decision-making."
      }
    ],
    interactiveStrategies: [
      {
        strategy: "School Council Design",
        description: "Students design a school council using the 8 responsibilities of the Federal Supreme Council as guidance, creating a poster that highlights the responsibilities and structure of their proposed council.",
        duration: 20,
        instructions: "1. Review the eight responsibilities of the Federal Supreme Council as a class. 2. In small groups, design your own school council, assigning each of the FSC's eight responsibilities a parallel function in the school setting (e.g., 'formulating general policy' becomes 'setting school improvement goals'). 3. Decide how council members will be chosen — will they be elected, appointed, or a combination? Explain your reasoning. 4. Create a large poster that displays your school council's structure, showing the responsibilities of each role or committee and how they connect to the FSC's responsibilities. 5. Present your poster to the class and explain how your school council mirrors the principles of the Federal Supreme Council, including how it ensures inclusion, equality, and justice."
      },
      {
        strategy: "Government in Daily Life",
        description: "Students reflect on and write about how the government helps them in their daily life and how it helps the community, connecting personal experience to the concepts of state and government studied in the lesson.",
        duration: 15,
        instructions: "1. Think about your typical day from the moment you wake up to the time you go to sleep. 2. Write a short paragraph describing at least three ways the government helps you personally during your day (e.g., roads and transport, schools and education, healthcare, safety and security). 3. Write a second paragraph describing at least three ways the government helps your community or neighbourhood (e.g., public parks, waste management, emergency services, community centres). 4. Reflect on Sheikh Zayed's quote: 'The process of construction and development requires the efforts not only of the government but also of all the citizens of the UAE.' Write one way you, as a student, can contribute to your community. 5. Share your writing with a partner and discuss: Are there areas where you think the government could do more? How can citizens support the government's efforts?"
      }
    ]
  }
];
