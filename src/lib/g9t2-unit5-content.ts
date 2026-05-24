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

export const g9t2Unit5: LessonContent[] = [
  // ─── Lesson 1: Exploring the UAE Constitution and Understanding the Government System in the UAE ───
  {
    lessonId: "G9_T2_Unit 5_l1",
    keyVocabulary: ["rules", "enforce", "constitution", "article", "federation"],
    reading1Title: "Standards in Society and the UAE Constitution",
    reading1Content: `Every society, from the smallest village to the largest nation, relies on standards to function effectively. Standards are the accepted norms and expectations that guide behaviour and organise social life. These standards fall into two broad categories: verbal standards and written standards. Verbal standards are unwritten rules that develop organically within a community over time. They include customs, traditions, and social conventions that people observe without necessarily being told to do so. For example, in the UAE, showing respect to elders, offering hospitality to guests, and dressing modestly in certain settings are all verbal standards that have been passed down through generations. These unwritten rules are deeply embedded in cultural identity and are enforced through social pressure rather than formal legal mechanisms. Because they are not formally recorded, verbal standards can be flexible and adaptive, evolving naturally as society changes. However, this flexibility also means they can be vague and open to interpretation, making them difficult to enforce consistently.

Written standards, by contrast, are formally recorded rules that have been deliberately created and documented. They include laws, regulations, codes, and constitutions that are set down in official documents and are binding on all members of society. Written standards are typically created through established legislative processes and can only be changed through formal amendment procedures, which makes them more rigid but also more reliable and predictable than verbal standards. The advantage of written standards is that they provide clarity and consistency: everyone can refer to the same document to understand what is expected, and there are formal mechanisms for enforcement and dispute resolution. In modern societies, both verbal and written standards operate side by side, with written standards providing the formal legal framework and verbal standards filling in the gaps with cultural and social expectations.

The most fundamental set of written standards in any country is its constitution. A constitution is the supreme law of the land, the foundational document that establishes the framework of government, defines the rights and duties of citizens, and sets out the principles by which the nation will be governed. The UAE Constitution, which came into effect on December 2, 1971, upon the formation of the United Arab Emirates as a federation, is the main set of rules providing rights and duties for all who live within the country. It serves as the highest legal authority, and all other laws and regulations must be consistent with its provisions. The Constitution establishes the UAE as a constitutional federation — a political body composed of partially self-governing states that have come together under a central government while retaining significant powers of their own. This federal structure was chosen by the founding rulers as the best way to balance the need for national unity with the desire of each emirate to preserve its own identity and autonomy.

The UAE Constitution demonstrates several key elements. It sets out the main purpose of the federation, which is to maintain the independence and sovereignty of the UAE and to promote the welfare of its people. It defines the objectives of the federation at both the local and regional levels, including the strengthening of ties between the emirates, the protection of the rights and freedoms of citizens, and the development of the country's economy and society. It also establishes the rules of political and constitutional organisation, defining the structure of government, the powers of federal and local authorities, and the processes by which laws are made, implemented, and interpreted. The Constitution originally contained 152 articles organised into 10 major areas, covering everything from the fundamental principles of the federation to the specifics of financial regulations and the armed forces.

Several key articles of the UAE Constitution deserve particular attention. Article 1 establishes the UAE as a federal, independent, and sovereign state comprising seven emirates: Abu Dhabi, Dubai, Sharjah, Ajman, Umm Al Quwain, Ras Al Khaimah, and Fujairah. Article 21 guarantees that private property is protected and may not be expropriated except in the public interest and with fair compensation. Article 24 declares that the national economy shall be based on social justice, and that the basis of economic development in the UAE shall be social justice and the safeguarding of private property. Article 25 is one of the most important articles regarding individual rights: it establishes equality before the law for all persons, prohibiting discrimination on the basis of race, nationality, religious belief, or social status. Article 26 guarantees personal liberty, stating that no person may be arrested, searched, detained, or imprisoned except in accordance with the provisions of the law. Article 28 enshrines the principle that an accused person is presumed innocent until proven guilty in a court of law — a cornerstone of justice systems around the world. Together, these articles form the backbone of the constitutional protections that safeguard the rights and freedoms of all who live in the UAE.`,
    reading2Title: "UAE Foreign Policy and the Vision of Federation",
    reading2Content: `The UAE Constitution does not only address domestic governance and individual rights — it also lays out the framework for the nation's foreign policy and its relationship with the international community. Article 2 of the Constitution asserts the Union's sovereignty over its territory and territorial waters, establishing the fundamental principle that the UAE is an independent state with full control over its land, sea, and airspace. This assertion of sovereignty was essential at the time of the federation's founding in 1971, as it signalled to the world that the newly formed nation was a fully independent entity, not a protectorate or dependency of any other power. The guarantee of territorial sovereignty remains as important today as it was then, providing the legal foundation for the UAE's active engagement in international affairs and its ability to negotiate treaties, join international organisations, and represent the interests of its citizens on the global stage.

Article 8 of the Constitution addresses the question of nationality, declaring that there shall be a single UAE nationality and that all citizens shall be equal before the law regardless of which emirate they come from. The article further provides that UAE nationals shall be protected abroad and that a citizen cannot be deprived of their nationality except in exceptional circumstances and in accordance with the provisions of the law. This guarantee of a unified national identity was crucial to the success of the federation, as it assured citizens of all seven emirates that they would enjoy the same rights and protections regardless of their emirate of origin. The protection of UAE nationals abroad reflects the government's commitment to the welfare of its citizens wherever they may be, and the restrictions on depriving citizens of their nationality safeguard against arbitrary or politically motivated revocation of this fundamental right.

Article 12 of the Constitution outlines the guiding principles of UAE foreign policy, stating that the foreign policy of the UAE shall support Arab and Islamic causes and shall be based on the principles of friendship and cooperation with all nations as enshrined in the Charter of the United Nations. This article establishes two key pillars of UAE diplomacy: first, a deep commitment to the Arab and Islamic worlds, reflecting the cultural, religious, and historical identity of the nation; and second, a broad commitment to international cooperation, peaceful relations, and the rule of law in global affairs. These dual commitments have guided the UAE's foreign policy since independence and have helped the country build an extensive network of diplomatic relationships across every continent.

In practice, the UAE seeks to reinforce its position and consolidate the values of respect, tolerance, and cooperation worldwide. The country's long-term plan for international engagement involves several strategic objectives: promoting a coherent international policy that aligns the UAE's diplomatic, economic, and cultural activities; building strong and lasting diplomatic relationships with countries around the world; introducing UAE culture, values, history, knowledge, and vision to the global community; and contributing to international efforts to promote peace, stability, and sustainable development. The UAE has become known for its generous foreign aid programme, its role as a mediator in regional conflicts, its participation in international peacekeeping and humanitarian operations, and its advocacy for tolerance and interfaith dialogue.

The vision behind the UAE's foreign policy is inseparable from the vision that led to the creation of the federation itself. The founding of the UAE in 1971 was a remarkable achievement — the coming together of seven separate emirates into a single nation was not inevitable, and it required extraordinary leadership, compromise, and trust. Sheikh Zayed bin Sultan Al Nahyan, the founding father of the UAE and its first President, understood that unity was essential for the survival and prosperity of the emirates in a rapidly changing world. His famous words capture the spirit of the federation: "Our experiment in federation arose from a desire to increase the ties that bind us, as well as from the conviction of everyone that they were part of one family, and that they must gather under one leadership." This conviction — that the people of the emirates share a common identity, common interests, and a common destiny — remains the foundation of the UAE's political system and its approach to both domestic governance and international relations.

The UAE Constitution thus serves as both a legal document and a statement of national purpose. It provides the formal rules and structures by which the country is governed, but it also embodies the values and aspirations of the Emirati people — unity, justice, equality, tolerance, and cooperation. Understanding the Constitution is essential for understanding the UAE itself, for it is the document that defines what the nation is, what it stands for, and how it intends to chart its course in an ever-changing world. As the UAE continues to grow and develop, the Constitution remains the anchor that ensures the country stays true to the principles upon which it was founded, while also providing the flexibility to adapt to new challenges and opportunities.`,
    reading1Time: 8,
    reading2Time: 8,
    kwlExplanation: KWL_EXPLANATION,
    discussionQuestions: [
      "What are the key differences between verbal standards and written standards, and why does a modern society need both?",
      "How does Article 25 of the UAE Constitution protect individuals, and why is the principle of equality before the law so important?",
      "Why was the concept of federation chosen for the UAE, and what advantages does it offer over other forms of government?",
      "How do Articles 8 and 12 of the Constitution reflect the UAE's commitment to both its citizens and the international community?",
      "What does Sheikh Zayed's quote about federation reveal about the values that guided the formation of the UAE?"
    ],
    keyFacts: [
      "Verbal standards are unwritten rules based on customs and traditions, while written standards are formally recorded laws and regulations.",
      "The UAE Constitution came into effect on December 2, 1971, upon the formation of the federation.",
      "The UAE is a constitutional federation — a political body of partially self-governing states under a central government.",
      "The Constitution originally contained 152 articles organised into 10 major areas.",
      "Article 1 establishes the UAE as a federal, independent, and sovereign state of seven emirates.",
      "Article 21 guarantees that private property is protected and may not be expropriated except in the public interest with fair compensation.",
      "Article 25 establishes equality before the law, prohibiting discrimination by race, nationality, religious belief, or social status.",
      "Article 26 guarantees personal liberty, and Article 28 presumes the accused innocent until proven guilty.",
      "Article 2 asserts the Union's sovereignty over its territory and territorial waters.",
      "Article 8 provides for a single UAE nationality, protection abroad, and restrictions on depriving citizens of nationality.",
      "Article 12 states that UAE foreign policy supports Arab and Islamic causes and is based on UN Charter principles of friendship and cooperation."
    ],
    visualType: "diagram",
    visualData: {
      title: "UAE Constitution Structure",
      nodes: [
        { id: "constitution", label: "UAE Constitution (1971)", level: 0 },
        { id: "purpose", label: "Purpose of Federation", level: 1 },
        { id: "objectives", label: "Local & Regional Objectives", level: 1 },
        { id: "organisation", label: "Political & Constitutional Organisation", level: 1 },
        { id: "rights", label: "Rights & Duties", level: 2, parent: "purpose" },
        { id: "sovereignty", label: "Sovereignty (Art. 1-2)", level: 2, parent: "organisation" },
        { id: "nationality", label: "Nationality (Art. 8)", level: 2, parent: "organisation" },
        { id: "foreignpolicy", label: "Foreign Policy (Art. 12)", level: 2, parent: "organisation" },
        { id: "equality", label: "Equality (Art. 25)", level: 2, parent: "rights" },
        { id: "liberty", label: "Liberty (Art. 26)", level: 2, parent: "rights" },
        { id: "innocence", label: "Presumption of Innocence (Art. 28)", level: 2, parent: "rights" },
        { id: "property", label: "Property Protection (Art. 21)", level: 2, parent: "rights" },
        { id: "economy", label: "Social Justice Economy (Art. 24)", level: 2, parent: "objectives" }
      ],
      edges: [
        { from: "constitution", to: "purpose" },
        { from: "constitution", to: "objectives" },
        { from: "constitution", to: "organisation" }
      ]
    },
    quizQuestions: [
      {
        id: "G9T2U5L1Q1",
        question: "What is the main difference between verbal standards and written standards?",
        options: ["Verbal standards are more rigid than written ones", "Verbal standards are unwritten customs and traditions, while written standards are formally recorded and harder to amend", "Written standards are always less important than verbal ones", "There is no real difference between them"],
        correctAnswer: 1,
        explanation: "Verbal standards are unwritten rules based on customs, traditions, and social conventions, while written standards are formally recorded in official documents and can only be changed through formal amendment procedures, making them more rigid but also more consistent and reliable."
      },
      {
        id: "G9T2U5L1Q2",
        question: "According to Article 1 of the UAE Constitution, how many emirates make up the UAE federation?",
        options: ["Five", "Six", "Seven", "Eight"],
        correctAnswer: 2,
        explanation: "Article 1 of the UAE Constitution establishes the UAE as a federal, independent, and sovereign state comprising seven emirates: Abu Dhabi, Dubai, Sharjah, Ajman, Umm Al Quwain, Ras Al Khaimah, and Fujairah."
      },
      {
        id: "G9T2U5L1Q3",
        question: "What does Article 28 of the UAE Constitution guarantee?",
        options: ["The right to private property", "Equality before the law", "That the accused is presumed innocent until proven guilty", "Personal liberty"],
        correctAnswer: 2,
        explanation: "Article 28 of the UAE Constitution enshrines the principle that an accused person is presumed innocent until proven guilty in a court of law — a cornerstone of justice systems around the world."
      },
      {
        id: "G9T2U5L1Q4",
        question: "According to Article 12, what two pillars guide UAE foreign policy?",
        options: ["Economic growth and military strength", "Support for Arab and Islamic causes, and cooperation based on UN Charter principles", "Oil exports and technology development", "Religious law and border security"],
        correctAnswer: 1,
        explanation: "Article 12 states that UAE foreign policy shall support Arab and Islamic causes and shall be based on the principles of friendship and cooperation with all nations as enshrined in the Charter of the United Nations."
      },
      {
        id: "G9T2U5L1Q5",
        question: "Under Article 8 of the Constitution, when can a UAE citizen be deprived of their nationality?",
        options: ["Never under any circumstances", "Only in exceptional circumstances and in accordance with the law", "Whenever the government decides it is necessary", "If they travel abroad for more than one year"],
        correctAnswer: 1,
        explanation: "Article 8 provides that a UAE citizen cannot be deprived of their nationality except in exceptional circumstances and in accordance with the provisions of the law, safeguarding against arbitrary revocation of this fundamental right."
      }
    ],
    interactiveStrategies: [
      {
        strategy: "Create a Class Constitution",
        description: "Students work collaboratively to draft a class constitution that establishes the rights, duties, and governance structure for their classroom community, mirroring the process and principles of the UAE Constitution.",
        duration: 30,
        instructions: "1. Begin by discussing the purpose of a constitution and reviewing the key elements of the UAE Constitution (purpose, rights, duties, governance structure). 2. Divide the class into small groups, each responsible for drafting a different section of the class constitution: Preamble and Purpose, Rights of Students, Duties of Students, and Class Governance Structure. 3. Each group writes their section on a large sheet of paper, using the UAE Constitution as a model for structure and language. 4. Groups present their sections to the whole class, and the class debates and votes on each article, suggesting amendments where needed. 5. Once all articles are approved, compile the final class constitution on a poster and have all students sign it, symbolising their agreement to abide by its provisions. 6. Display the signed constitution in the classroom and refer to it throughout the term when resolving disputes or making class decisions."
      },
      {
        strategy: "Constitution Article Analysis",
        description: "Students analyse specific articles of the UAE Constitution in depth, examining their meaning, significance, and real-world applications through close reading and discussion.",
        duration: 25,
        instructions: "1. Assign each student pair one of the key articles discussed in the readings (Articles 1, 2, 8, 12, 21, 24, 25, 26, or 28). 2. Each pair reads their assigned article carefully and completes an analysis worksheet with the following sections: What does the article say? (paraphrase in your own words), Why is this article important?, How does it protect citizens or govern the country?, Give a real-world example of how this article might apply. 3. Pairs create a one-page visual summary of their article analysis, including the article text, their interpretation, and an illustration or symbol representing its meaning. 4. Conduct a gallery walk where students view and discuss each other's analyses. 5. As a class, rank the articles from most to least important and debate whether any articles are missing that should be added to the Constitution."
      }
    ]
  },

  // ─── Lesson 2: The Federal System ───
  {
    lessonId: "G9_T2_Unit 5_l2",
    keyVocabulary: ["legislative", "executive", "judiciary", "chairman", "conflict"],
    reading1Title: "Three Branches of Government and Federal Authority",
    reading1Content: `Modern democratic governments around the world are typically organised into three distinct branches, each with its own specific role and responsibilities. This separation of powers is a fundamental principle of political organisation designed to prevent any single branch from becoming too powerful and to ensure a system of checks and balances. The three branches of government are the legislative, the executive, and the judiciary, and each plays a vital role in the governance of a nation. Understanding how these branches work — both individually and in relation to one another — is essential for understanding how the UAE government operates.

The legislative branch is responsible for making new laws, altering existing ones, and writing the regulations that govern society. In the UAE, the legislative function is shared between the Federal Supreme Council, the Federal National Council, and the President, creating a system that combines elements of both presidential and parliamentary governance. The legislative branch debates proposed laws, amends them, and ultimately passes them into legislation. Without a legislative branch, there would be no formal mechanism for creating or updating the rules by which society operates, and governance would be arbitrary and inconsistent.

The executive branch is responsible for applying the rules defined by the legislative branch. It implements, supports, and enforces the laws that have been passed, ensuring that they are carried out in practice and that citizens comply with their provisions. The executive branch manages the day-to-day operations of government, oversees public services, directs the armed forces and police, conducts foreign policy, and administers the budget. In the UAE, the executive branch includes the President, the Vice President, the Federal Council of Ministers (the Cabinet), and the various federal ministries and government departments. The executive is the branch of government that most citizens interact with on a daily basis, whether they are applying for a passport, registering a business, or using public health services.

The judiciary is the branch of government that executes justice, ensures that laws are obeyed, and resolves disputes. Courts hear cases involving civil and criminal matters, interpret the law, and give verdicts that are binding on the parties involved. The judiciary also plays a crucial role in upholding the Constitution by determining whether laws and government actions are consistent with constitutional principles. In cases of conflict between different laws or between federal and local legislation, the judiciary has the authority to determine which law is constitutional and therefore applicable. This judicial review function is a vital check on the power of the legislative and executive branches, ensuring that they operate within the boundaries set by the Constitution.

The UAE Constitution outlines the structure of the federal government in detail, with Article 45 identifying five federal authorities that together constitute the governing apparatus of the nation. These five authorities are: the Federal Supreme Council, the President of the Union, the Federal Council of Ministers, the Federal National Council, and the Federal Judiciary. Each authority has clearly defined powers and responsibilities, and the Constitution establishes the relationships between them, creating a system of checks and balances that prevents any one authority from dominating the others.

The Federal Supreme Council is the highest authority in the UAE, consisting of the rulers of all seven emirates. The Supreme Council draws up general policies for the federation, approves federal legislations before they become law, and has the final say on matters of supreme national importance. The UAE President serves as the head of state, the supreme commander of the armed forces, and the chairman of both the Supreme Council and the Supreme Petroleum Council. The President represents the UAE at home and abroad and has significant executive powers, including the power to appoint the Prime Minister and Cabinet ministers with the approval of the Supreme Council.

The Federal Council of Ministers, also known as the Cabinet, is the executive authority responsible for implementing the internal and external affairs of the federation in accordance with the Constitution and federal laws. The Cabinet is headed by the Prime Minister and includes two Deputy Prime Ministers and various ministers, each responsible for a specific area of government such as education, health, finance, or foreign affairs. The Cabinet proposes legislation, implements laws passed by the Federal National Council, manages the federal budget, and oversees the work of federal government departments and agencies.

The Federal National Council is a consultative council and parliamentary body that plays a key role in the legislative process. It has the power to pass, amend, or reject federal draft laws, and it serves as a forum for discussing issues of concern to citizens. The FNC also has the power to question ministers about their performance and to summon them to appear before the council. While it is primarily a consultative body rather than a fully legislative one, the FNC provides an important mechanism for citizen representation and participation in the governance of the federation.

The Federal Judiciary is the fifth federal authority, responsible for administering justice at the federal level and for determining which laws are constitutional in cases of conflict. The Federal Supreme Court, as the highest court in the land, has the ultimate authority to interpret the Constitution and to resolve disputes between emirates or between federal and local authorities. The judiciary's independence from the other branches of government is a cornerstone of the rule of law in the UAE, ensuring that justice is administered fairly and impartially.`,
    reading2Title: "Structure and Details of Federal Authorities",
    reading2Content: `A closer examination of the five federal authorities reveals the careful balance of power that the framers of the UAE Constitution built into the system. The Federal Supreme Council, as the highest legislative and executive authority, consists of the rulers of all seven emirates or their designated substitutes. Each ruler has one vote, and decisions are made by majority vote, though on certain critical matters — such as the election of the President and Vice President — a supermajority that includes the votes of both Abu Dhabi and Dubai is required. This arrangement recognises the special role that the two largest emirates play in the federation while ensuring that all emirates have a voice in the most important decisions. The Supreme Council meets at the invitation of the President or at the request of any member, and its proceedings are chaired by the President or, in his absence, by the Vice President.

The President and Vice President are elected by the Federal Supreme Council from among its members for a five-year term and are eligible for re-election. The President's powers are extensive: in addition to serving as head of state and supreme commander of the armed forces, the President presides over the Supreme Council, appoints the Prime Minister and Cabinet ministers, appoints diplomatic representatives, signs federal laws and decrees, and grants pardons. The Vice President exercises the powers of the President in his absence and assists the President in carrying out his duties. The current Prime Minister of the UAE is Sheikh Mohammed bin Rashid Al Maktoum, who also serves as Vice President and Ruler of Dubai, a position that reflects the significant role Dubai plays in the federation.

The Federal Council of Ministers is composed of the Prime Minister, two Deputy Prime Ministers, and the various federal ministers, along with an active General Secretariat that supports the work of the Cabinet. The President appoints the Prime Minister, the Deputy Prime Ministers, and the Ministers after consultation with the Supreme Council. The Cabinet is responsible for executing the internal and external affairs of the federation, proposing federal laws and decrees, preparing the federal budget, overseeing the implementation of federal laws, and managing the federal civil service. Each minister heads a federal ministry and is responsible for the administration of their portfolio, which covers areas such as foreign affairs, interior, finance, education, health, economy, and infrastructure.

The Federal National Council is composed of 40 members, with 20 members elected by citizens and 20 members nominated by the rulers of the emirates. The distribution of seats among the emirates reflects their relative population and importance: Abu Dhabi and Dubai each have 8 seats, Sharjah and Ras Al Khaimah each have 6 seats, and Ajman, Umm Al Quwain, and Fujairah each have 4 seats. This allocation ensures that the larger emirates have proportionally greater representation while guaranteeing that even the smallest emirates have a meaningful voice in the council. The FNC's powers include discussing, amending, and approving or rejecting federal draft laws, discussing the federal budget, questioning ministers, and making recommendations on matters of public interest. Since its establishment, the FNC has played an increasingly active role in the legislative process and in representing the concerns of citizens.

The Federal Judiciary operates through a system of courts at the federal level, with the Federal Supreme Court serving as the highest judicial authority in the land. The Supreme Court is composed of five judges appointed by the President after approval by the Supreme Council. The court has jurisdiction over constitutional matters, disputes between emirates, disputes between an emirate and the federal government, and cases involving the interpretation of federal laws. Below the Supreme Court are the Federal Courts of Appeal and the Federal Courts of First Instance, which handle civil, commercial, criminal, and personal status cases at the federal level. It is important to note that the UAE has two parallel judicial systems: the Federal Judiciary, which operates in most emirates, and local judicial departments in Abu Dhabi, Dubai, and Ras Al Khaimah, which maintain their own court systems. This dual system reflects the federal nature of the UAE and the constitutional right of emirates to maintain their own judicial institutions.

The constitutional structure of the UAE thus creates a carefully balanced system in which power is distributed among multiple authorities, each with clearly defined roles and responsibilities. The Supreme Council provides overall direction and makes the most important decisions, the President and Cabinet handle the day-to-day administration of government, the Federal National Council ensures citizen representation and legislative scrutiny, and the Federal Judiciary upholds the rule of law and protects constitutional rights. This system of checks and balances prevents the concentration of power in any single authority and ensures that the governance of the UAE reflects the interests and aspirations of all its citizens and emirates.`,
    reading1Time: 8,
    reading2Time: 8,
    kwlExplanation: KWL_EXPLANATION,
    discussionQuestions: [
      "Why is the separation of government into three branches important, and what could happen if one branch became too powerful?",
      "How does the Federal Supreme Council ensure that all seven emirates have a voice in the most important decisions?",
      "What role does the Federal National Council play in representing citizens, and how does the seat distribution among emirates reflect the federal nature of the UAE?",
      "Why might some emirates choose to maintain their own local judicial systems rather than using the Federal Judiciary?",
      "How do the five federal authorities create a system of checks and balances in the UAE government?"
    ],
    keyFacts: [
      "The three branches of government are legislative (makes laws), executive (implements and enforces laws), and judiciary (interprets laws and executes justice).",
      "Article 45 of the UAE Constitution identifies five federal authorities: Federal Supreme Council, President, Federal Council of Ministers, Federal National Council, and Federal Judiciary.",
      "The Federal Supreme Council consists of the rulers of all seven emirates and draws up general policies and approves federal legislations.",
      "The UAE President serves as head of state, supreme commander of the armed forces, and chairman of the Supreme Council and Supreme Petroleum Council.",
      "The President and Vice President are elected by the Supreme Council from among its members for a 5-year term and are re-electable.",
      "The Federal Council of Ministers executes internal and external affairs and is composed of the PM, two Deputy PMs, and Ministers.",
      "The Federal National Council has 40 members: 20 elected by citizens and 20 nominated by rulers.",
      "FNC seat distribution: Abu Dhabi 8, Dubai 8, Sharjah 6, RAK 6, Ajman 4, UAQ 4, Fujairah 4.",
      "The Federal Supreme Court has five judges appointed by the President after Supreme Council approval.",
      "The UAE has two parallel judicial systems: the Federal Judiciary and local judicial departments in Abu Dhabi, Dubai, and Ras Al Khaimah."
    ],
    visualType: "diagram",
    visualData: {
      title: "Three Branches of UAE Government",
      nodes: [
        { id: "federal", label: "UAE Federal Government", level: 0 },
        { id: "legislative", label: "Legislative", level: 1 },
        { id: "executive", label: "Executive", level: 1 },
        { id: "judiciary", label: "Judiciary", level: 1 },
        { id: "sc", label: "Federal Supreme Council", level: 2, parent: "legislative" },
        { id: "fnc", label: "Federal National Council", level: 2, parent: "legislative" },
        { id: "president", label: "President & VP", level: 2, parent: "executive" },
        { id: "cabinet", label: "Council of Ministers", level: 2, parent: "executive" },
        { id: "ministries", label: "Federal Ministries", level: 3, parent: "cabinet" },
        { id: "supremecourt", label: "Federal Supreme Court", level: 2, parent: "judiciary" },
        { id: "appeal", label: "Courts of Appeal", level: 3, parent: "supremecourt" },
        { id: "firstinstance", label: "Courts of First Instance", level: 3, parent: "supremecourt" }
      ],
      edges: [
        { from: "federal", to: "legislative" },
        { from: "federal", to: "executive" },
        { from: "federal", to: "judiciary" }
      ]
    },
    quizQuestions: [
      {
        id: "G9T2U5L2Q1",
        question: "Which branch of government is responsible for making new laws and altering existing ones?",
        options: ["Executive", "Judiciary", "Legislative", "Military"],
        correctAnswer: 2,
        explanation: "The legislative branch is responsible for making new laws, altering existing ones, and writing the regulations that govern society."
      },
      {
        id: "G9T2U5L2Q2",
        question: "How many members does the Federal National Council have, and how are they selected?",
        options: ["30 members, all appointed by the President", "40 members, 20 elected by citizens and 20 nominated by rulers", "50 members, all elected by citizens", "40 members, all elected by citizens"],
        correctAnswer: 1,
        explanation: "The Federal National Council has 40 members, with 20 elected by citizens and 20 nominated by the rulers of the emirates."
      },
      {
        id: "G9T2U5L2Q3",
        question: "How many judges sit on the Federal Supreme Court, and how are they appointed?",
        options: ["Three judges appointed by the Prime Minister", "Five judges appointed by the President after Supreme Council approval", "Seven judges elected by the FNC", "Ten judges appointed by the Chief Justice"],
        correctAnswer: 1,
        explanation: "The Federal Supreme Court is composed of five judges who are appointed by the President after approval by the Supreme Council."
      },
      {
        id: "G9T2U5L2Q4",
        question: "What is the term length for the UAE President and Vice President?",
        options: ["2 years", "4 years", "5 years", "Lifetime appointment"],
        correctAnswer: 2,
        explanation: "The President and Vice President are elected by the Federal Supreme Council from among its members for a five-year term and are eligible for re-election."
      },
      {
        id: "G9T2U5L2Q5",
        question: "Which emirates maintain their own local judicial systems rather than using the Federal Judiciary?",
        options: ["Sharjah, Ajman, and Fujairah", "Abu Dhabi, Dubai, and Ras Al Khaimah", "Dubai, Sharjah, and Ajman", "All seven emirates use only the Federal Judiciary"],
        correctAnswer: 1,
        explanation: "Abu Dhabi, Dubai, and Ras Al Khaimah have retained their own local judicial systems, while the other emirates merged into the Federal Judicial Authority, creating a total of four judicial authorities in the UAE."
      }
    ],
    interactiveStrategies: [
      {
        strategy: "Create an Infographic of Five Federal Authorities",
        description: "Students design a visual infographic that presents the five federal authorities of the UAE, their roles, composition, and key powers, using creative design elements to make the information clear and engaging.",
        duration: 30,
        instructions: "1. Review the five federal authorities with the class: Federal Supreme Council, President, Federal Council of Ministers, Federal National Council, and Federal Judiciary. 2. Each student selects one federal authority to research in detail using the readings and any additional reliable sources. 3. Students design an infographic that includes: the name of the authority, its composition (who are the members), its key powers and responsibilities, an interesting fact, and a visual symbol or icon representing its role. 4. Use colour coding to distinguish between legislative, executive, and judicial functions. 5. Display completed infographics around the classroom and conduct a gallery walk where students fill in a comparison chart as they view each other's work. 6. Discuss as a class: which authority do you think has the most important role, and why?"
      },
      {
        strategy: "Match Authority to Responsibility",
        description: "Students participate in a matching activity where they connect specific governmental responsibilities to the correct federal authority, reinforcing their understanding of the division of powers.",
        duration: 20,
        instructions: "1. Prepare a set of responsibility cards (one per student or pair) with specific governmental actions, e.g., 'Appoints the Prime Minister,' 'Passes or rejects federal draft laws,' 'Determines constitutionality of laws,' 'Draws up general policies for the federation,' 'Manages the federal budget,' 'Hears civil and criminal cases.' 2. Create five station posters around the room, one for each federal authority. 3. Students receive their responsibility cards and must decide which federal authority each responsibility belongs to, then place their card at the correct station. 4. Once all cards are placed, review each station as a class, discussing whether the cards have been correctly assigned and correcting any errors. 5. For each correct match, the student explains why that responsibility belongs to that authority. 6. Challenge round: students create their own additional responsibility cards for classmates to match, extending their understanding of the division of powers."
      }
    ]
  },

  // ─── Lesson 3: Federal Authorities of the UAE ───
  {
    lessonId: "G9_T2_Unit 5_l3",
    keyVocabulary: ["policy", "establish", "appoint", "dismiss", "ratify", "grant"],
    reading1Title: "The Federal Supreme Council and Presidential Powers",
    reading1Content: `The Federal Supreme Council stands at the apex of the UAE's governmental structure as the highest legislative and executive authority in the federation. Understanding its composition, powers, and relationship with the President is essential for grasping how the UAE government functions in practice. The Supreme Council is composed of the rulers of all seven emirates, or their designated substitutes, and it is this body that draws up the general policies by which the federation is governed and approves all federal legislations before they become law. The Council's decisions set the direction for the entire nation, making it the most powerful institution in the UAE's political system.

The responsibilities of the Federal Supreme Council are extensive and reflect its position as the ultimate decision-making body in the federation. The Supreme Council is responsible for establishing public policies that guide the development of the nation across all sectors — economic, social, cultural, and security-related. It approves federal laws passed by the Federal National Council, giving them final legislative approval. It ratifies international treaties and agreements, ensuring that the UAE's international commitments are made with the full consent of all emirates. It also has the authority to declare war and make peace, to approve the appointment of the President of the Federal Supreme Court and the judges of the Federal Supreme Court, and to accept the accession of new emirates to the federation.

Alongside the Supreme Council, the President of the UAE exercises significant powers that complement and interact with those of the Council. Understanding which responsibilities belong to the President and which belong to the Supreme Council is crucial for understanding how power is distributed within the federal government. The President is responsible for appointing the Prime Minister and the Cabinet ministers, although this appointment requires the approval of the Supreme Council. The President appoints diplomatic representatives of the UAE abroad, receives the credentials of foreign ambassadors, and represents the UAE at the highest level in international forums. The President also has the power to dismiss federal judges and to grant pardons, both of which are significant executive prerogatives that reflect the President's role as the head of state and the guardian of justice and mercy.

The relationship between the President and the Supreme Council is characterised by close cooperation and mutual dependence. The President chairs the Supreme Council and sets its agenda, but the Council makes its decisions collectively. On matters of supreme importance, the President cannot act alone but must obtain the agreement of the Council. Conversely, the Council relies on the President to implement its decisions and to manage the day-to-day affairs of the federation. This interplay ensures that power is not concentrated in a single individual but is shared between the President and the collective leadership of the emirates, creating a system that is both efficient and representative.

The current Prime Minister of the UAE is Sheikh Mohammed bin Rashid Al Maktoum, who also serves as Vice President of the UAE and Ruler of Dubai. His appointment to the position of Prime Minister reflects the constitutional arrangement by which the Vice President traditionally comes from Dubai, while the President traditionally comes from Abu Dhabi. This arrangement, while not explicitly required by the Constitution, has been observed since the founding of the federation and reflects the political understanding between the two largest emirates that has been central to the stability and success of the UAE. Sheikh Mohammed bin Rashid has been a transformative figure in UAE politics, known for his ambitious vision for the country's development and his emphasis on innovation, excellence, and happiness as goals of government policy.

The powers of appointment and dismissal that the President exercises are among the most significant executive powers in any government. The ability to appoint the Prime Minister, the Cabinet, diplomatic representatives, and senior judicial figures gives the President enormous influence over the direction and character of the government. At the same time, the requirement for Supreme Council approval on key appointments ensures that these decisions are not made unilaterally but reflect the consensus of the emirates. The power to dismiss federal judges, while rarely used, is an important safeguard that ensures judicial accountability, and the power to grant pardons is a humanitarian function that allows the President to show mercy in appropriate cases, reflecting the values of compassion and justice that are central to Emirati culture and Islamic tradition.

The power to ratify treaties rests with the Supreme Council rather than the President alone, reflecting the importance of international agreements to the federation as a whole. When the UAE enters into a treaty or international agreement, it binds not just the federal government but all seven emirates, and therefore the Supreme Council's approval ensures that all emirates have consented to the obligations that the treaty imposes. This is particularly important in areas such as trade, defence, and border agreements, where the interests of individual emirates may be directly affected. The ratification process thus serves as both a safeguard for the rights of the emirates and a mechanism for ensuring that the UAE speaks with a unified voice in international affairs.`,
    reading2Title: "Federal Ministries and the Evolution of Government",
    reading2Content: `The federal ministries of the UAE form the administrative backbone of the government, each responsible for a specific area of public policy and service delivery. The current structure of federal ministries reflects both the traditional functions of government — such as foreign affairs, interior, finance, education, and health — and the unique priorities and aspirations of the UAE as a rapidly developing nation. Key federal ministries include the Ministry of Foreign Affairs, which manages the UAE's diplomatic relations and international representation; the Ministry of Interior, which oversees domestic security, police, and civil defence; the Ministry of Finance, which manages the federal budget and fiscal policy; the Ministry of Education, which sets educational standards and policies; and the Ministry of Health and Prevention, which oversees healthcare services and public health initiatives. Other important ministries include the Ministry of Economy, the Ministry of Infrastructure Development, the Ministry of Energy and Infrastructure, and the Ministry of Climate Change and Environment, among others.

Each ministry is headed by a minister who is appointed by the President upon the recommendation of the Prime Minister and with the approval of the Federal Supreme Council. Ministers are responsible for developing and implementing policies within their portfolio, managing their ministry's budget and staff, and representing their area of responsibility in the Cabinet and the Federal National Council. The work of the ministries is supported by departments, agencies, and authorities that carry out specific functions under the ministry's oversight. For example, the Ministry of Education oversees public schools and universities, develops curricula, and sets standards for educational quality, while the Ministry of Health manages hospitals and health centres, regulates pharmaceuticals, and implements public health campaigns.

One of the most striking features of the UAE government in recent years has been its willingness to evolve and adapt by creating new ministries and restructuring existing ones to address emerging challenges and priorities. In February 2016, the UAE announced a significant government reshuffle that introduced several new ministries reflecting the nation's forward-thinking approach to governance. Among the new ministries created were the Ministry of Tolerance, the Ministry of Happiness, the Ministry of the Future, the Ministry of Youth Affairs, and the Ministry of Climate Change and Environment. These new ministries were not simply administrative reorganisations — they represented a fundamental rethinking of what government should do and what it should prioritise.

The creation of the Ministry of Tolerance reflected the UAE's commitment to promoting tolerance, coexistence, and respect for diversity both within the country and internationally. In a region often marked by sectarian and ethnic conflict, the UAE's decision to establish a ministry dedicated to tolerance sent a powerful message about the country's values and its aspiration to be a model of peaceful coexistence. The Ministry of Happiness was an innovative and, in some circles, controversial addition to the government, but it reflected a serious philosophical commitment to measuring the success of government not just by economic indicators but by the well-being and satisfaction of citizens. The ministry's role is to develop policies and programmes that enhance the happiness and quality of life of UAE residents, and to ensure that government services are designed with the customer experience in mind.

The Ministry of the Future was established to develop long-term strategies and plans for the UAE, looking ahead to the challenges and opportunities that the country will face in the coming decades. This ministry reflects the UAE's recognition that effective governance requires not just responding to current issues but anticipating and preparing for future ones. The Ministry of Youth Affairs was created to ensure that the voices and concerns of young Emiratis — who make up a significant proportion of the population — are heard and addressed in government policy. The Ministry of Climate Change and Environment reflects the UAE's awareness of the environmental challenges facing the country and the world, including water scarcity, desertification, and the impacts of global climate change.

The reasons why governments create new ministries and restructure existing ones are varied, but they generally reflect a desire to respond more effectively to the current concerns of citizens and to adapt to new challenges that did not exist or were not previously recognised as priorities. In the case of the UAE, the creation of new ministries in 2016 reflected several important trends: the growing importance of happiness and well-being as measures of national success, the need to prepare for the challenges of the future in a rapidly changing world, the desire to engage young people in the governance of their country, and the recognition that environmental sustainability is essential for long-term prosperity. Governments that fail to evolve risk becoming irrelevant to the citizens they serve, while governments that proactively adapt to changing circumstances demonstrate a commitment to meeting the needs and aspirations of their people.

The typical structure of a government includes ministries covering core functions such as defence, foreign affairs, finance, interior, justice, education, and health. However, the specific ministries that exist in any country reflect its unique history, culture, and priorities. The UAE's decision to create ministries for tolerance, happiness, the future, and youth reflects the distinctive vision of the country's leadership and its ambition to be not just a prosperous nation but also a model of innovative and people-centred governance. These new ministries bring several benefits: they raise the profile of important issues, they create dedicated institutional capacity for addressing emerging challenges, they signal the government's priorities to citizens and the international community, and they ensure that government policy keeps pace with the changing needs of society.`,
    reading1Time: 8,
    reading2Time: 8,
    kwlExplanation: KWL_EXPLANATION,
    discussionQuestions: [
      "How does the relationship between the President and the Federal Supreme Council ensure that power is not concentrated in one person?",
      "Why is the power to ratify treaties given to the Supreme Council rather than the President alone?",
      "What does the creation of the Ministry of Happiness reveal about how the UAE measures the success of its government?",
      "Why is it important for governments to create new ministries and restructure existing ones over time?",
      "How do the new ministries created in 2016 reflect the current concerns and aspirations of UAE citizens?"
    ],
    keyFacts: [
      "The Federal Supreme Council is the highest legislative and executive authority in the UAE, composed of the rulers of all seven emirates.",
      "The Supreme Council establishes public policies, approves federal legislations, and ratifies international treaties.",
      "The President appoints the Prime Minister, diplomatic representatives, and federal judges, and has the power to dismiss judges and grant pardons.",
      "The current Prime Minister is Sheikh Mohammed bin Rashid Al Maktoum, who also serves as Vice President and Ruler of Dubai.",
      "In February 2016, the UAE introduced new ministries: Tolerance, Happiness, the Future, Youth, and Climate Change.",
      "The Ministry of Tolerance promotes coexistence, respect for diversity, and peaceful interfaith relations.",
      "The Ministry of Happiness measures government success by citizen well-being and satisfaction rather than just economic indicators.",
      "The Ministry of the Future develops long-term strategies for challenges the UAE will face in coming decades.",
      "The Ministry of Youth Affairs ensures young Emiratis' voices are represented in government policy.",
      "New ministries are created to reflect current citizen concerns, adapt to emerging challenges, and signal government priorities.",
      "Governments that fail to evolve risk becoming irrelevant to the citizens they serve."
    ],
    visualType: "diagram",
    visualData: {
      title: "Organisational Chart of UAE Federal Authorities",
      nodes: [
        { id: "sc", label: "Federal Supreme Council", level: 0 },
        { id: "president", label: "President of the UAE", level: 1 },
        { id: "vp_pm", label: "Vice President / PM", level: 2 },
        { id: "cabinet", label: "Council of Ministers", level: 2 },
        { id: "fnc", label: "Federal National Council", level: 1 },
        { id: "judiciary", label: "Federal Judiciary", level: 1 },
        { id: "traditional", label: "Traditional Ministries (Foreign Affairs, Interior, Finance, Education, Health)", level: 3, parent: "cabinet" },
        { id: "new", label: "New Ministries (Tolerance, Happiness, Future, Youth, Climate Change)", level: 3, parent: "cabinet" },
        { id: "scpowers", label: "Policies, Legislation, Treaties, War & Peace", level: 2, parent: "sc" },
        { id: "prespowers", label: "Appointments, Pardons, Dismissals", level: 2, parent: "president" }
      ],
      edges: [
        { from: "sc", to: "president" },
        { from: "sc", to: "fnc" },
        { from: "sc", to: "judiciary" },
        { from: "president", to: "vp_pm" },
        { from: "vp_pm", to: "cabinet" }
      ]
    },
    quizQuestions: [
      {
        id: "G9T2U5L3Q1",
        question: "Which authority in the UAE is responsible for ratifying international treaties?",
        options: ["The President alone", "The Federal National Council", "The Federal Supreme Council", "The Federal Council of Ministers"],
        correctAnswer: 2,
        explanation: "The power to ratify treaties rests with the Federal Supreme Council rather than the President alone, reflecting the importance of international agreements to the federation as a whole and ensuring all emirates consent to treaty obligations."
      },
      {
        id: "G9T2U5L3Q2",
        question: "Which of the following is a power that belongs specifically to the President, not the Supreme Council?",
        options: ["Approving federal laws", "Granting pardons", "Ratifying treaties", "Establishing public policies"],
        correctAnswer: 1,
        explanation: "Granting pardons is a presidential power that reflects the President's role as head of state and guardian of justice and mercy. Establishing public policies, approving federal laws, and ratifying treaties are responsibilities of the Supreme Council."
      },
      {
        id: "G9T2U5L3Q3",
        question: "When were the Ministries of Tolerance, Happiness, the Future, Youth, and Climate Change created?",
        options: ["2006", "2010", "2016", "2020"],
        correctAnswer: 2,
        explanation: "In February 2016, the UAE announced a significant government reshuffle that introduced several new ministries, including the Ministry of Tolerance, Ministry of Happiness, Ministry of the Future, Ministry of Youth Affairs, and Ministry of Climate Change and Environment."
      },
      {
        id: "G9T2U5L3Q4",
        question: "What is the purpose of the Ministry of Happiness?",
        options: ["To enforce laws that make people happy", "To develop policies that enhance the well-being and quality of life of UAE residents", "To organise entertainment events only", "To replace the Ministry of Social Affairs"],
        correctAnswer: 1,
        explanation: "The Ministry of Happiness develops policies and programmes that enhance the happiness and quality of life of UAE residents, ensuring that government services are designed with the customer experience in mind and measuring government success by citizen well-being."
      },
      {
        id: "G9T2U5L3Q5",
        question: "Who is the current Prime Minister of the UAE, and what other roles does he hold?",
        options: ["Sheikh Mohamed bin Zayed; President and Ruler of Abu Dhabi", "Sheikh Mohammed bin Rashid Al Maktoum; Vice President and Ruler of Dubai", "Sheikh Hamdan bin Mohammed; Crown Prince of Dubai", "Sheikh Mansour bin Zayed; Deputy PM and Minister of Presidential Affairs"],
        correctAnswer: 1,
        explanation: "Sheikh Mohammed bin Rashid Al Maktoum serves as Prime Minister, Vice President of the UAE, and Ruler of Dubai, reflecting the constitutional arrangement by which the Vice President traditionally comes from Dubai."
      }
    ],
    interactiveStrategies: [
      {
        strategy: "Research Current Federal Ministries",
        description: "Students research the current federal ministries of the UAE, identifying their ministers, key responsibilities, and recent initiatives, then present their findings to the class.",
        duration: 30,
        instructions: "1. Provide students with a list of current UAE federal ministries. 2. Each student selects one ministry to research using reliable online sources such as the official UAE government portal. 3. Students create a one-page research brief that includes: the name of the ministry and current minister, the ministry's main responsibilities and areas of focus, two recent initiatives or programmes the ministry has launched, and how this ministry impacts the daily life of UAE residents. 4. Students present their research briefs to the class in a rapid-fire format (2 minutes per ministry). 5. As students listen to presentations, they complete a comparison chart categorising ministries as 'traditional' or 'new/innovative.' 6. Class discussion: Which ministries do you think are most essential? If you could create a new ministry, what would it focus on and why?"
      },
      {
        strategy: "Debate on Creating New Ministries",
        description: "Students debate whether the UAE should create additional new ministries to address emerging challenges, practising argumentation and critical thinking skills.",
        duration: 25,
        instructions: "1. Introduce the debate topic: 'Should the UAE create new ministries to address emerging challenges such as artificial intelligence, space exploration, cybersecurity, and mental health?' 2. Divide the class into two teams: one arguing in favour of creating new ministries and one arguing against. 3. Give each team 10 minutes to prepare their arguments using evidence from the readings and their own knowledge. Arguments for might include: better focus on emerging issues, dedicated resources, signalling government priorities. Arguments against might include: government bloat, inefficiency, existing ministries could handle new issues, cost. 4. Each team presents their opening arguments (3 minutes each), followed by rebuttal (2 minutes each) and closing statements (1 minute each). 5. After the debate, students vote on which side presented the more convincing arguments. 6. Debrief: discuss how the 2016 creation of new ministries was received by the public and what impact these ministries have had on UAE governance."
      }
    ]
  },

  // ─── Lesson 4: Law and Order in the UAE ───
  {
    lessonId: "G9_T2_Unit 5_l4",
    keyVocabulary: ["jurisdiction", "self-governing", "trial", "lawsuit", "safeguard"],
    reading1Title: "The Judicial Structure in the UAE",
    reading1Content: `The administration of justice is one of the most fundamental functions of any state, and the UAE has developed a judicial system that balances federal oversight with local autonomy to ensure that the rule of law is maintained throughout the federation. The judicial structure in the UAE is characterised by a system of federal and local courts that operate in parallel, with each having jurisdiction over specific types of cases and geographical areas. Understanding this dual system is essential for understanding how justice is delivered in the UAE and how the rights of individuals are protected.

Most emirates in the UAE have merged their judicial systems into the Federal Judicial Authority, which operates under the oversight of the federal Ministry of Justice. However, three emirates — Abu Dhabi, Dubai, and Ras Al Khaimah — have retained their own local judicial systems, choosing to maintain independent court structures that operate alongside the federal system. This means that the UAE has a total of four judicial authorities: the Federal Judicial Authority and the three local judicial departments of Abu Dhabi, Dubai, and Ras Al Khaimah. Each of these judicial authorities has its own courts, prosecutors, and administrative structures, though they all operate within the framework of federal law and the UAE Constitution.

The UAE Federal Court System is organised into three levels, each with distinct jurisdiction and authority. At the first level is the Court of First Instance, which is the trial court where most cases begin. The Court of First Instance has jurisdiction over civil, commercial, administrative, labour, and personal status lawsuits. It is in this court that evidence is presented, witnesses are examined, and the facts of a case are established. The Court of First Instance may consist of one or more judges, depending on the type and complexity of the case, and its decisions may be appealed to the next level of the court system.

The second level is the Court of Appeal, which hears appeals against decisions of the Court of First Instance. A party who is dissatisfied with the judgment of the Court of First Instance may file an appeal within a 30-day time limit from the date of the judgment. For urgent cases, the time limit for appeal is reduced to 10 days, reflecting the need for swift resolution in matters that cannot wait. The Court of Appeal reviews the lower court's decision, examining both the application of the law and the factual findings, and may uphold, modify, or overturn the original judgment. The Court of Appeal does not simply rubber-stamp the decisions of the lower court — it conducts a thorough review to ensure that justice has been properly administered.

At the highest level is the Federal Supreme Court, also known as the Court of Cassation. Appeals to the Court of Cassation are limited to points of law rather than questions of fact, meaning that the court examines whether the lower courts correctly interpreted and applied the law, rather than re-examining the evidence or factual findings of the case. A party wishing to appeal to the Court of Cassation must file their appeal within a 60-day period from the date of the Court of Appeal's decision. The decisions of the Court of Cassation are final and binding, and they cannot be appealed further. This three-tier system ensures that cases are heard thoroughly at the first instance, reviewed carefully on appeal, and that the law is applied consistently at the highest level, providing certainty and predictability in the legal system.

Alongside the civil and criminal court system, the UAE also has Sharia courts that play a vital role in the administration of justice, particularly in matters of personal status. Sharia courts have exclusive jurisdiction over family disputes, including divorce, inheritance, child custody, abuse, and guardianship. These courts apply the principles of Islamic jurisprudence (fiqh) in resolving disputes, and their judges are trained in both Islamic Jurisprudence and Law, ensuring that they can interpret and apply Sharia principles in a manner that is consistent with both religious tradition and contemporary legal standards. The role of Sharia courts reflects the importance of Islamic law in the UAE's legal system and the country's commitment to preserving its cultural and religious heritage while also maintaining a modern and efficient judicial system.

The safeguards built into the UAE judicial system are designed to protect the rights of all parties and to ensure that justice is administered fairly. These safeguards include the right to a fair trial, the right to legal representation, the presumption of innocence established by Article 28 of the Constitution, the right to appeal, and the principle that court proceedings should be conducted in a transparent and timely manner. The multi-level court system itself is a safeguard, providing multiple opportunities for a case to be reviewed and for errors to be corrected. The independence of the judiciary, guaranteed by the Constitution, ensures that judges can make decisions based on the law and the evidence without interference from the executive or legislative branches of government.`,
    reading2Title: "Smart Transformation and the Ministry of Justice",
    reading2Content: `The UAE has long been recognised as a global leader in digital government transformation, and the judicial system has been at the forefront of this effort. By May 2015, an impressive 95% of the Ministry of Justice's services had been digitised, making it one of the most technologically advanced justice ministries in the world. This smart transformation has fundamentally changed how legal services are delivered in the UAE, making them faster, more accessible, and more efficient for citizens, residents, lawyers, and judges alike.

The range of online services now available through the Ministry of Justice is extensive and covers virtually every aspect of interaction with the judicial system. Citizens and residents can use the case status search function to check the progress of their cases in real time, without having to visit a court in person. The lawyer search service allows individuals to find licensed legal practitioners by name, specialisation, or location, helping them choose the right lawyer for their needs. The eNotary public service enables users to authenticate documents and certify signatures electronically, eliminating the need for physical visits to notary offices. The eFiling system allows lawyers and litigants to file court documents and submit pleadings online, saving time and reducing the paperwork associated with legal proceedings. The case calculator helps users estimate the costs and timeframes associated with different types of legal actions, providing greater transparency and predictability in the legal process.

Perhaps the most significant technological advancement in the UAE's judicial system is the Case Management System (CMS), which enables electronic filing and management of court cases from start to finish. The CMS allows lawyers to submit documents, schedule hearings, and receive court orders electronically, dramatically reducing the delays and inefficiencies that traditionally plagued paper-based court systems. Before the implementation of the CMS, court cases could be delayed by weeks or even months due to the time required for physical documents to be processed, filed, and distributed to the relevant parties. With the CMS, these processes are completed in a matter of seconds, freeing up court staff to focus on more substantive tasks and enabling cases to move through the system more quickly and efficiently.

The Ministry of Justice has also developed the Legislations ePortal, which provides access to UAE federal laws and regulations in both Arabic and English. This portal is an invaluable resource for lawyers, judges, academics, and members of the public who need to research the law or understand their rights and obligations. By making legislation freely available online in both languages, the Ministry of Justice has promoted transparency and accessibility in the legal system, ensuring that the law is not the exclusive province of legal professionals but is accessible to anyone with an internet connection.

The impact of these digital transformation efforts has been substantial. In 2016 alone, a total of 613,102 legal transactions were conducted online through the Ministry of Justice's digital platforms. This figure demonstrates the scale of the transformation that has taken place and the extent to which citizens, lawyers, and other users have embraced online legal services. The convenience, speed, and accessibility of digital services have made them the preferred option for most users, and the Ministry of Justice continues to expand and improve its digital offerings in line with the UAE's broader vision of becoming a world-leading smart government.

Local judicial departments in Abu Dhabi, Dubai, and Ras Al Khaimah have also adopted eServices, developing their own digital platforms to serve the needs of their communities. Dubai Courts, for example, has been a pioneer in judicial technology, launching smart services that allow users to track cases, pay fines, and access court records through mobile applications. The Abu Dhabi Judicial Department has similarly invested in technology, offering a comprehensive range of online services that streamline the legal process for users across the emirate. These local initiatives complement the federal government's digital transformation efforts and ensure that the benefits of technology are available to all residents of the UAE, regardless of which emirate they live in or which court system they interact with.

The Ministry of Justice plays a central role in the UAE's judicial system beyond its digital transformation initiatives. The Ministry oversees the federal courts and prosecution services, ensuring that they operate efficiently and in accordance with the law. It is responsible for appointing judges to the federal courts, licensing lawyers, legal experts, and legal translators, and ensuring that all legal professionals meet the required standards of competence and ethical conduct. Article 6 of Federal Law No. 1 of 1972 on the Jurisdictions of Ministries assigns the Ministry of Justice responsibility for regulating the administrative and financial affairs of federal courts, preparing draft laws and regulations, managing general amnesty procedures, issuing fatwas, and reviewing major draft legislations. These responsibilities make the Ministry of Justice a cornerstone of the UAE's legal and judicial infrastructure, ensuring that the rule of law is maintained and that the rights and freedoms guaranteed by the Constitution are protected.`,
    reading1Time: 8,
    reading2Time: 8,
    kwlExplanation: KWL_EXPLANATION,
    discussionQuestions: [
      "Why do you think Abu Dhabi, Dubai, and Ras Al Khaimah chose to maintain their own local judicial systems rather than merging with the Federal Judicial Authority?",
      "How does the three-tier court system (Court of First Instance, Court of Appeal, Court of Cassation) protect the rights of individuals involved in legal disputes?",
      "What are the advantages of having Sharia courts with exclusive jurisdiction over family disputes, and how does this reflect the UAE's cultural values?",
      "How has the digital transformation of the Ministry of Justice improved access to justice for UAE residents?",
      "What role does the Ministry of Justice play in ensuring the quality and integrity of the UAE's legal system?"
    ],
    keyFacts: [
      "The UAE has four judicial authorities: the Federal Judicial Authority and local judicial departments in Abu Dhabi, Dubai, and Ras Al Khaimah.",
      "The Court of First Instance handles civil, commercial, administrative, labour, and personal status lawsuits.",
      "The Court of Appeal has a 30-day time limit for appeals (10 days for urgent cases).",
      "The Federal Supreme Court (Court of Cassation) hears appeals on points of law only, with a 60-day filing period; decisions are final and binding.",
      "Sharia courts have exclusive jurisdiction over family disputes including divorce, inheritance, child custody, abuse, and guardianship.",
      "Judges in Sharia courts are trained in both Islamic Jurisprudence and Law.",
      "By May 2015, 95% of Ministry of Justice services had been digitised.",
      "Online services include case status search, lawyer search, eNotary public, eFiling, and case calculator.",
      "The Case Management System (CMS) enables electronic filing, reducing delays in court proceedings.",
      "In 2016, 613,102 legal transactions were conducted online through the Ministry of Justice's digital platforms.",
      "Article 6 of Federal Law No. 1 of 1972 assigns the Ministry of Justice responsibility for regulating federal courts, preparing draft laws, managing amnesty, and issuing fatwas."
    ],
    visualType: "diagram",
    visualData: {
      title: "UAE Court System Hierarchy",
      nodes: [
        { id: "top", label: "UAE Judicial System", level: 0 },
        { id: "federal", label: "Federal Judicial Authority", level: 1 },
        { id: "local_ad", label: "Abu Dhabi Judicial Dept.", level: 1 },
        { id: "local_dx", label: "Dubai Courts", level: 1 },
        { id: "local_rak", label: "RAK Courts", level: 1 },
        { id: "cassation", label: "Court of Cassation (Supreme Court)", level: 2, parent: "federal" },
        { id: "appeal", label: "Court of Appeal", level: 3, parent: "cassation" },
        { id: "firstinstance", label: "Court of First Instance", level: 4, parent: "appeal" },
        { id: "civil", label: "Civil / Commercial / Admin / Labour", level: 5, parent: "firstinstance" },
        { id: "sharia", label: "Sharia Courts (Family Law)", level: 5, parent: "firstinstance" },
        { id: "criminal", label: "Criminal Cases", level: 5, parent: "firstinstance" }
      ],
      edges: [
        { from: "top", to: "federal" },
        { from: "top", to: "local_ad" },
        { from: "top", to: "local_dx" },
        { from: "top", to: "local_rak" }
      ]
    },
    quizQuestions: [
      {
        id: "G9T2U5L4Q1",
        question: "How many judicial authorities operate in the UAE?",
        options: ["One — the Federal Judicial Authority only", "Two — Federal and Dubai", "Three — Federal, Abu Dhabi, and Dubai", "Four — Federal, Abu Dhabi, Dubai, and Ras Al Khaimah"],
        correctAnswer: 3,
        explanation: "The UAE has four judicial authorities: the Federal Judicial Authority and the three local judicial departments of Abu Dhabi, Dubai, and Ras Al Khaimah."
      },
      {
        id: "G9T2U5L4Q2",
        question: "What is the time limit for filing an appeal at the Court of Appeal, and how does it differ for urgent cases?",
        options: ["60 days for all cases", "30 days, reduced to 10 days for urgent cases", "15 days for all cases", "90 days, reduced to 30 days for urgent cases"],
        correctAnswer: 1,
        explanation: "A party may file an appeal at the Court of Appeal within a 30-day time limit from the date of the judgment. For urgent cases, the time limit is reduced to 10 days to allow for swift resolution."
      },
      {
        id: "G9T2U5L4Q3",
        question: "What type of cases do Sharia courts in the UAE have exclusive jurisdiction over?",
        options: ["Criminal and commercial cases", "Civil and administrative cases", "Family disputes including divorce, inheritance, and child custody", "Labour and employment cases"],
        correctAnswer: 2,
        explanation: "Sharia courts have exclusive jurisdiction over family disputes including divorce, inheritance, child custody, abuse, and guardianship, reflecting the importance of Islamic law in personal status matters."
      },
      {
        id: "G9T2U5L4Q4",
        question: "Approximately what percentage of Ministry of Justice services had been digitised by May 2015?",
        options: ["50%", "75%", "85%", "95%"],
        correctAnswer: 3,
        explanation: "By May 2015, 95% of the Ministry of Justice's services had been digitised, making it one of the most technologically advanced justice ministries in the world."
      },
      {
        id: "G9T2U5L4Q5",
        question: "What does the Court of Cassation review when hearing an appeal?",
        options: ["Only the facts of the case", "Both facts and law equally", "Points of law only, not questions of fact", "Only procedural errors"],
        correctAnswer: 2,
        explanation: "Appeals to the Court of Cassation are limited to points of law rather than questions of fact, meaning the court examines whether the lower courts correctly interpreted and applied the law."
      }
    ],
    interactiveStrategies: [
      {
        strategy: "Create a Judicial System Flyer",
        description: "Students design an informative flyer or brochure explaining the UAE judicial system to a person who is unfamiliar with it, using clear language and visuals to make the system understandable.",
        duration: 25,
        instructions: "1. Explain the task: students will create a one-page flyer that explains the UAE judicial system to a newcomer to the country. 2. The flyer must include: the four judicial authorities, the three levels of federal courts and their jurisdictions, the role of Sharia courts, key time limits (30 days for appeal, 10 days for urgent cases, 60 days for Cassation), and at least two online services available through the Ministry of Justice. 3. Students may use digital design tools or create their flyer by hand, but it must be visually appealing with clear headings, icons or illustrations, and concise descriptions. 4. Encourage students to use a Q&A format (e.g., 'Where do I go if I have a family dispute?' → Sharia courts) to make the information practical and accessible. 5. Display completed flyers and conduct a peer review where students provide feedback on clarity, accuracy, and visual appeal. 6. Select the best flyers to be displayed in the school library or shared with other classes."
      },
      {
        strategy: "Mock Trial Activity",
        description: "Students participate in a simplified mock trial to experience how the court system works, taking on the roles of judge, prosecution, defence, witnesses, and jury.",
        duration: 35,
        instructions: "1. Present a simplified case scenario appropriate for the classroom (e.g., a dispute over a damaged item borrowed from a neighbour, or a case about a breach of a verbal contract). 2. Assign roles: one student as the judge, two students as prosecution/plaintiff lawyers, two as defence lawyers, two as witnesses, and the rest of the class as the jury. 3. Give each team 10 minutes to prepare their arguments: the prosecution/plaintiff must prove their case, and the defence must argue against it. 4. Conduct the trial: the judge opens proceedings, each side presents their case and examines witnesses, and the judge ensures fair procedure. 5. After closing arguments, the jury deliberates and delivers a verdict. 6. Debrief: discuss how the trial experience relates to the court system studied in the lesson. What safeguards were in place? How would the losing party appeal the decision? What court level would this case start at?"
      }
    ]
  },

  // ─── Lesson 5: Local Governments Across the UAE ───
  {
    lessonId: "G9_T2_Unit 5_l5",
    keyVocabulary: ["autonomy", "executive council", "foreign affairs", "jurisdiction"],
    reading1Title: "Local Government Structure and Emirates' Jurisdiction",
    reading1Content: `While the federal government of the UAE handles matters of national importance, each of the seven emirates also maintains its own local government with significant autonomy over internal affairs. This dual system of federal and local governance is one of the defining features of the UAE's political structure and reflects the founding principle that the federation should preserve the identity and independence of each emirate while providing a unified framework for matters that affect the nation as a whole. Understanding how local governments operate, and how their powers relate to those of the federal government, is essential for understanding the full picture of governance in the UAE.

Each emirate has its own Executive Council, which serves as the local equivalent of the federal Council of Ministers. The Executive Council is the highest executive authority within the emirate, responsible for developing and implementing local policies, managing the emirate's budget, overseeing government departments and agencies, and coordinating with the federal government on matters of mutual concern. The Executive Council is typically chaired by the Crown Prince or Deputy Ruler of the emirate and includes the heads of local government departments and agencies. In addition to the Executive Council, each emirate has a number of autonomous agencies and authorities with specified powers over particular areas of governance, such as education, health, transport, and urban planning.

The constitutional basis for local government autonomy is found in Article 122 of the UAE Constitution, which states that the emirates have jurisdiction in all matters that are not assigned to the exclusive jurisdiction of the federal government under Articles 120 and 121. This residual power clause is significant because it means that the emirates retain all powers not expressly given to the federation, ensuring that local governance remains robust and responsive to the specific needs of each emirate. In practice, this means that the emirates have substantial authority over areas such as local policing, municipal services, land use and urban planning, local economic development, cultural and heritage preservation, and the management of local natural resources.

Article 120 of the Constitution, by contrast, lists the matters that fall within the exclusive jurisdiction of the federal government. These include foreign affairs and international relations, defence and the armed forces, security and public order, the governance of the capital city (Abu Dhabi), federal finances including taxes and public loans, communications including postal services, telephone, and wireless communications, the construction and maintenance of federal roads, air traffic control and civil aviation, education at the federal level, public health and medical services, electricity services, and the regulation of passports, residence, and immigration. These are areas where a unified national approach is considered essential for the effective governance of the federation and the protection of its citizens.

The benefits of emirate autonomy are numerous and significant. Perhaps the most important benefit is that local needs can be addressed locally, by officials who understand the specific conditions, challenges, and aspirations of their community. What works in Abu Dhabi, the largest and wealthiest emirate, may not be appropriate for Umm Al Quwain, one of the smallest, and the autonomy of each emirate allows for policies and programmes to be tailored to local circumstances. Autonomy also ensures that cultural differences between the emirates are respected and preserved, allowing each emirate to maintain its own traditions, customs, and identity within the broader framework of the federation.

Another important benefit of emirate autonomy is that it promotes innovation and competition between the emirates. When each emirate is free to develop its own approaches to governance and public service delivery, it creates a natural laboratory for policy innovation, where successful initiatives can be adopted by other emirates and ultimately scaled up to the federal level. Dubai's transformation into a global hub for trade, tourism, and finance, for example, has inspired other emirates to pursue their own development strategies, creating a virtuous cycle of innovation and progress across the federation. Similarly, Abu Dhabi's investments in renewable energy and sustainable development have set a benchmark for environmental policy that other emirates have sought to emulate.

The relationship between federal and local jurisdiction is not always clear-cut, and there are areas where both levels of government have overlapping or shared responsibilities. In such cases, coordination and cooperation between federal and local authorities are essential to ensure that policies are consistent and that citizens receive the services they need without confusion or duplication. The Constitution provides mechanisms for resolving disputes between the federal government and the emirates, including the jurisdiction of the Federal Supreme Court, which can adjudicate conflicts between different levels of government. In practice, however, most disputes are resolved through negotiation and consultation rather than litigation, reflecting the cooperative spirit that has characterised the UAE's federal system since its founding.

The practical operation of local government varies considerably from emirate to emirate, but certain common features can be identified across all seven. Each emirate's Executive Council typically meets on a regular basis to discuss local policy, review the performance of government departments, and take decisions on matters within its jurisdiction. The council's decisions are implemented by the various local government departments and agencies, which are responsible for delivering services to residents on a daily basis. In larger emirates such as Abu Dhabi and Dubai, the local government apparatus is extensive, with dozens of departments and thousands of employees. In smaller emirates, the government is more compact, but it still provides the essential services that residents depend on, from education and healthcare to transport and waste management. The key principle that underlies local governance across all seven emirates is that decisions should be made as close as possible to the people they affect, ensuring that government remains responsive, accountable, and attuned to the needs of the community.`,
    reading2Title: "The Evolution of Local Governance and Citizen Engagement",
    reading2Content: `The relationship between the federal government and the local governments of the seven emirates was laid down in the UAE Constitution at the time of the federation's founding in 1971, but it has evolved pragmatically over the decades since then. The original constitutional framework provided a broad outline of the division of powers between the federal and local levels, but the specific mechanisms of coordination, the allocation of resources, and the practical day-to-day relationships between the two levels of government have developed through experience, negotiation, and mutual adjustment. This pragmatic evolution has allowed the UAE's governance system to adapt to the dramatic changes that the country has undergone since its founding, while remaining true to the constitutional principles that underpin the federation.

One of the most innovative developments in local governance in recent years has been the Smart Majlis initiative, launched in 2015 by Sheikh Mohammed bin Rashid Al Maktoum. The Smart Majlis represents a modern twist on the traditional majlis — the age-old Arab forum for open discussion between rulers and their people. In the traditional majlis, citizens would gather at the ruler's court to discuss their concerns, seek advice, and participate in decision-making. The majlis has been a cornerstone of governance in the Arabian Peninsula for centuries, and it remains an important institution in the UAE today. The Smart Majlis takes this tradition and brings it into the digital age, creating a platform for citizen participation that combines the accessibility and informality of the traditional majlis with the reach and convenience of modern technology.

The Smart Majlis initiative combines 30 entities in Dubai into a single platform that allows citizens to voice their opinions, suggest improvements, and participate in the development of government policies and services. Through the Smart Majlis app and website, citizens can submit ideas, participate in surveys and consultations, and engage directly with government officials on issues that matter to them. The platform uses technology to overcome the limitations of the traditional majlis — which could only accommodate those who were physically present — by enabling participation from anywhere at any time. At the same time, it preserves the essential spirit of the majlis as a space for open dialogue between the government and the people, ensuring that governance remains responsive to the needs and aspirations of citizens.

The traditional majlis continues to play an important role in local governance across all seven emirates. In the majlis, rulers and senior officials meet with citizens in an informal setting to hear their concerns, discuss community issues, and provide guidance and support. This face-to-face interaction is valued both by the rulers, who gain direct insight into the needs of their people, and by the citizens, who appreciate the accessibility and responsiveness of their leaders. The majlis tradition reflects a fundamentally different model of governance from the more formal, bureaucratic systems found in many Western democracies — one that emphasises personal relationships, direct communication, and mutual respect between the rulers and the ruled.

In addition to the Smart Majlis, the UAE government has developed a range of government apps and digital platforms to facilitate citizen engagement and improve the delivery of public services. Apps such as the UAE Government Services app, Dubai Now, and Abu Dhabi Government Services app allow residents to access hundreds of government services from their smartphones, from paying bills and fines to applying for licences and permits. These apps represent the latest stage in the evolution of local governance, harnessing the power of technology to make government more accessible, transparent, and efficient.

The local governments of the seven emirates differ considerably in size, structure, and mechanisms, reflecting differences in population, area, and degree of development. Abu Dhabi, the largest and most populous emirate, has the most extensive local government apparatus, with numerous departments, authorities, and agencies serving a population of over two million residents across a vast territory. Dubai, the second-largest emirate, has developed a highly efficient and innovative local government that supports one of the world's most dynamic urban economies. The smaller emirates — Sharjah, Ras Al Khaimah, Ajman, Umm Al Quwain, and Fujairah — have more compact government structures, but they each have their own Executive Councils and departments that mirror the structure of federal ministries, ensuring consistency in the delivery of essential services while allowing for local flexibility and innovation.

Practical ways in which citizens engage with local government include attending the traditional majlis, participating in government surveys and consultations through digital platforms, submitting suggestions and complaints through government apps and websites, attending public hearings and community meetings, volunteering for community initiatives and national service programmes, and engaging with local media to raise awareness of community issues. These diverse channels of engagement ensure that citizens have multiple avenues for making their voices heard and for contributing to the governance of their communities. The combination of traditional institutions like the majlis and modern digital platforms like the Smart Majlis reflects the UAE's unique ability to honour its cultural heritage while embracing the innovations of the future — a quality that has been central to the country's remarkable success since its founding.`,
    reading1Time: 8,
    reading2Time: 8,
    kwlExplanation: KWL_EXPLANATION,
    discussionQuestions: [
      "How does Article 122 of the Constitution protect the autonomy of the emirates, and why is this important?",
      "What are the benefits of allowing each emirate to govern its own local affairs, and how does this promote innovation?",
      "How does the Smart Majlis initiative combine traditional governance practices with modern technology to enhance citizen participation?",
      "Why might the smaller emirates have different government structures from the larger ones, and what challenges might this create?",
      "In what ways can UAE citizens engage with their local government, and which method do you think is most effective and why?"
    ],
    keyFacts: [
      "Each emirate has its own Executive Council and autonomous agencies with specified powers over local affairs.",
      "Article 122 gives emirates jurisdiction over all matters not assigned to exclusive federal jurisdiction (Articles 120 and 121).",
      "Article 120 lists exclusive federal jurisdiction: foreign affairs, defence, security, capital city governance, federal finances, taxes, communications, roads, air control, education, public health, electricity, passports, and immigration.",
      "Benefits of emirate autonomy include addressing local needs locally, respecting cultural differences, and promoting innovation and competition between emirates.",
      "The relationship between federal and local government was laid down in the Constitution but has evolved pragmatically over time.",
      "The Smart Majlis initiative was launched in 2015 by Sheikh Mohammed bin Rashid Al Maktoum as a modern version of the traditional majlis.",
      "The Smart Majlis combines 30 entities in Dubai into a single platform for citizen participation.",
      "The traditional majlis is a centuries-old forum for open discussion between rulers and citizens that continues to play an important role in governance.",
      "Local governments of the seven emirates differ in size and mechanisms based on population, area, and degree of development.",
      "Each emirate has executive councils and departments that mirror the structure of federal ministries.",
      "Citizens engage with local government through the majlis, digital platforms, surveys, public hearings, volunteering, and local media."
    ],
    visualType: "venn",
    visualData: {
      title: "Federal vs Local Jurisdiction in the UAE",
      leftLabel: "Federal Jurisdiction (Article 120)",
      rightLabel: "Local Jurisdiction (Article 122)",
      leftItems: ["Foreign Affairs", "Defence & Armed Forces", "Security & Public Order", "Federal Finances & Taxes", "Communications (Post, Phone, Wireless)", "Federal Roads & Air Control", "Federal Education Policy", "Public Health & Medical Services", "Passports & Immigration", "Capital City Governance"],
      rightItems: ["Local Policing", "Municipal Services", "Land Use & Urban Planning", "Local Economic Development", "Cultural & Heritage Preservation", "Local Natural Resources", "Local Infrastructure", "Community Services"],
      overlapItems: ["Education (federal policy + local implementation)", "Health (federal standards + local delivery)", "Infrastructure coordination", "Environmental policy"]
    },
    quizQuestions: [
      {
        id: "G9T2U5L5Q1",
        question: "According to Article 122 of the Constitution, what determines the jurisdiction of the emirates?",
        options: ["Only matters listed in Article 122", "All matters not assigned to exclusive federal jurisdiction under Articles 120 and 121", "Whatever the federal government decides to delegate", "Only cultural and heritage matters"],
        correctAnswer: 1,
        explanation: "Article 122 gives emirates jurisdiction in all matters that are not assigned to the exclusive jurisdiction of the federal government under Articles 120 and 121, meaning emirates retain all residual powers not expressly given to the federation."
      },
      {
        id: "G9T2U5L5Q2",
        question: "Which of the following is NOT listed as an area of exclusive federal jurisdiction under Article 120?",
        options: ["Foreign affairs", "Defence and armed forces", "Local urban planning", "Passports and immigration"],
        correctAnswer: 2,
        explanation: "Local urban planning falls under the jurisdiction of the emirates under Article 122, as it is not listed as an area of exclusive federal jurisdiction under Article 120."
      },
      {
        id: "G9T2U5L5Q3",
        question: "What is the Smart Majlis initiative?",
        options: ["A traditional gathering of tribal leaders", "A digital platform launched in 2015 that combines 30 entities in Dubai for citizen participation", "A federal court for resolving disputes between emirates", "A new ministry for technology"],
        correctAnswer: 1,
        explanation: "The Smart Majlis, launched in 2015 by Sheikh Mohammed bin Rashid Al Maktoum, is a modern digital platform that combines 30 entities in Dubai into a single platform for citizen participation, providing a modern twist on the traditional majlis."
      },
      {
        id: "G9T2U5L5Q4",
        question: "What is the traditional majlis, and what role does it play in UAE governance?",
        options: ["A parliamentary building in Abu Dhabi", "A forum for open discussion between rulers and citizens that continues to play an important role in governance", "A type of federal court", "An annual government conference"],
        correctAnswer: 1,
        explanation: "The traditional majlis is a centuries-old Arab institution where rulers and citizens meet for open discussion. Citizens raise concerns, seek advice, and participate in decision-making, making it a cornerstone of governance in the UAE."
      },
      {
        id: "G9T2U5L5Q5",
        question: "Why do the local governments of the seven emirates differ in size and mechanisms?",
        options: ["Because they were established at different times", "Because they have different populations, areas, and degrees of development", "Because the Constitution requires them to be different", "Because they use different languages"],
        correctAnswer: 1,
        explanation: "The local governments of the seven emirates differ in size and mechanisms based on differences in population, area, and degree of development, with larger emirates like Abu Dhabi and Dubai having more extensive government structures."
      }
    ],
    interactiveStrategies: [
      {
        strategy: "Research Your Emirates Executive Council",
        description: "Students research the Executive Council of their own emirate, identifying its members, structure, and recent initiatives, and present their findings to the class.",
        duration: 30,
        instructions: "1. Ask students to identify which emirate they live in. 2. Each student (or pair) uses reliable online sources (official emirate government websites, UAE government portal) to research the Executive Council of their emirate. 3. Students compile a research report that includes: the name of the Executive Council and its chairman, the number and names of council members or department heads, at least three key departments or agencies and their responsibilities, one recent initiative or policy launched by the Executive Council, and how the emirate's government structure compares to the federal government structure. 4. Students create a visual organisational chart of their emirate's Executive Council. 5. Students present their findings to the class, comparing and contrasting the structures of different emirates. 6. Class discussion: How does your emirate's government address your community's specific needs? What improvements would you suggest?"
      },
      {
        strategy: "Design a Smart Governance App",
        description: "Students design a concept for a smart governance app that would help citizens engage with their local government, applying design thinking principles to identify citizen needs and create innovative solutions.",
        duration: 30,
        instructions: "1. Begin by discussing how technology has transformed citizen engagement in the UAE (Smart Majlis, Dubai Now app, etc.). 2. Students identify a problem or need in their community that could be addressed through a smart governance app (e.g., reporting potholes, suggesting community improvements, booking majlis sessions, tracking local projects). 3. Working in pairs, students design their app concept including: app name and logo, the specific problem it solves, three to five key features and how they work, a sketch of the main screen layout, and how it connects citizens to their local government. 4. Each pair presents their app concept to the class in a 3-minute pitch. 5. The class votes on the most innovative and practical app designs. 6. Reflection: How does your app build on the tradition of the majlis? What challenges might you face in implementing it? How could it improve the relationship between citizens and their local government?"
      }
    ]
  }
];
