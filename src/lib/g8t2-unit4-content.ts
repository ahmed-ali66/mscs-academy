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

export const g8t2Unit4: LessonContent[] = [
  // ─── Lesson 1: Majlis: The Traditional Means of Consultation ───
  {
    lessonId: "G8_T2_Unit 4_l1",
    keyVocabulary: ["majlis", "arish", "consultation", "Bedouin", "heritage"],
    reading1Title: "The Majlis and Traditional Emirati Life",
    reading1Content: `In the vast and sun-scorched expanses of Liwa, nestled among the date palm oases of the UAE's western region, a remarkable project has been undertaken to preserve and recreate the traditional arish houses that once defined Emirati domestic life. The Liwa Arish House Project stands as a living monument to the ingenuity and resourcefulness of the people who inhabited this challenging desert environment for generations. Arish houses, constructed primarily from palm fronds and leaves, were the predominant form of housing in the oases and coastal settlements of the UAE before the era of modern construction. These dwellings were not merely shelters; they were expressions of a deep and intimate relationship between the people and the palm tree, which provided virtually everything needed for daily life — from food and building materials to rope and basketry.

The construction of arish houses was traditionally carried out by women, who possessed extraordinary skills in weaving and assembling the palm-leaf panels that formed the walls and roofs of these structures. Bedouin women, in particular, were masters of this craft, passing their knowledge from mother to daughter across countless generations. One notable Bedouin woman, whose story has been recorded as part of the Liwa Arish House Project, built her own arish entirely by herself, demonstrating the remarkable self-sufficiency and independence that women in traditional Emirati society could achieve. She selected the finest palm fronds, split and prepared them with practiced hands, wove them into sturdy panels, and assembled the entire structure without assistance — a testament to the skill and determination that characterised desert life.

The arish house was designed with remarkable sophistication to address the extreme conditions of the desert environment. During sandstorms, which could be fierce and prolonged, the walls of the arish provided crucial protection through the use of hassir — double layers of woven palm matting that acted as a barrier against the driving sand. These double layers were ingeniously effective: the outer layer caught the bulk of the sand and wind, while the inner layer provided a smooth, sealed surface that kept the interior clean and habitable. The gaps between the layers also created a small insulating air pocket that helped regulate temperature. This simple yet effective technique reflected the deep understanding that Emirati people had of their environment and the creative solutions they developed to survive and thrive within it.

The largest and most important room in every arish house was the majlis. This was the gathering space where the family received guests, held discussions, made decisions, and conducted the social interactions that formed the backbone of community life. The majlis was typically positioned at the front of the house, making it easily accessible to visitors, and was furnished with carpets and cushions arranged along the walls. It was here that the head of the household would welcome guests, serve Arabic coffee and dates, and engage in the conversations that strengthened social bonds and resolved community matters. The majlis was not simply a room — it was the heart of the home and the embodiment of the Emirati values of hospitality, generosity, and open communication.

In the early 1980s, the Liwa region was still home to a vibrant traditional community. Approximately 5,000 people lived in about 800 arishes scattered across the oases, maintaining a way of life that had endured for centuries. The Liwa Arish House Project has been instrumental in preserving the memory and techniques of this traditional architecture, ensuring that future generations can appreciate and learn from the remarkable achievements of their ancestors. By recreating these structures using authentic methods and materials, the project provides a tangible connection to the past and a powerful reminder of the resilience and creativity that have always defined the people of the UAE.`,
    reading2Title: "The Majlis: Heart of Arab Culture",
    reading2Content: `The majlis stands as one of the most central and enduring icons of Arab culture, a space that transcends its physical dimensions to become a powerful symbol of community, dialogue, and shared decision-making. The word "majlis" itself derives from the Arabic root meaning "to sit," and this simple etymology reveals the essence of the institution: it is fundamentally about people coming together, sitting with one another, and engaging in the human act of conversation and consultation. In a world that increasingly communicates through screens and digital messages, the majlis remains a vital reminder of the irreplaceable value of face-to-face interaction, where nuances of tone, expression, and gesture enrich the exchange of ideas and deepen understanding between people.

The majlis serves as the primary venue for open discussion and collective decision-making in Emirati society. Whether the topic is a family matter, a community concern, or a question of national importance, the majlis provides a space where all voices can be heard and where decisions are reached through dialogue rather than decree. The tradition of consultation, deeply rooted in Islamic and Arab values, finds its most natural expression in the majlis setting. Here, the host welcomes guests without discrimination, offering them the legendary Arab hospitality of coffee, dates, and often a shared meal. The seating arrangement itself — typically with cushions arranged along the walls in a rectangular or square formation — encourages equality and open exchange, as everyone faces the centre of the room and can see and hear one another clearly.

UNESCO, the United Nations Educational, Scientific and Cultural Organisation, has recognised the profound cultural significance of the majlis by inscribing it on its Representative List of the Intangible Cultural Heritage of Humanity. UNESCO describes the majlis as "open to all people," emphasising its democratic and inclusive nature. The organisation further notes that the majlis plays "an important role in the transfer of oral heritage," serving as the primary venue where stories, poems, historical accounts, and cultural knowledge are shared from one generation to the next. In the majlis, young people learn the traditions and values of their community by listening to their elders, and elders in turn find an attentive audience for the wisdom they have accumulated over a lifetime. This oral tradition, sustained within the walls of the majlis, has been the primary means by which Emirati culture has been preserved and transmitted across the centuries.

One of the most striking modern examples of the majlis tradition is the Ramadan majlis hosted by Sheikh Mohammed bin Zayed Al Nahyan, President of the UAE. During the holy month of Ramadan, his majlis becomes a gathering place for a remarkably diverse array of speakers and thinkers from around the world. Religious scholars, scientists, artists, politicians, business leaders, and cultural figures are all invited to share their knowledge and perspectives in an atmosphere of open dialogue and mutual respect. The topics discussed range widely — from faith and philosophy to science and technology — reflecting the breadth of curiosity and the spirit of intellectual engagement that the majlis has always encouraged. This modern incarnation of the majlis demonstrates that the tradition is not a relic of the past but a living, evolving institution that continues to serve as a bridge between cultures and a forum for the exchange of ideas on the grandest scale.

The majlis can be compared to the western living room in terms of its function as a gathering space, but the comparison also reveals profound differences. A wise elderly gentleman from the United Kingdom, who had the opportunity to experience a traditional Emirati majlis, observed that while the western living room is primarily a private family space closed to outsiders, the majlis is fundamentally an open and public space designed to welcome guests and strangers alike. He noted that in his own culture, the living room was where a family retreated from the world, whereas in the Emirati tradition, the majlis was where a family engaged with the world. This insight captures the essential difference: the majlis is not a place of withdrawal but a place of connection, not a space of privacy but a space of community, and not a room for rest but a room for dialogue and the strengthening of social bonds.`,
    reading1Time: 8,
    reading2Time: 8,
    kwlExplanation: KWL_EXPLANATION,
    discussionQuestions: [
      "What is the significance of the majlis in Emirati culture, and why has it endured as a central institution for centuries?",
      "How does the construction of the arish house, including the use of hassir double layers, reflect the resourcefulness and heritage of the UAE?",
      "In what ways does the majlis promote open-mindedness and inclusivity in Emirati society?",
      "What advantages does the majlis tradition of face-to-face consultation have over other forms of communication and decision-making?",
      "How has the majlis evolved from its traditional form to remain relevant in the modern UAE, and what does this tell us about cultural continuity?"
    ],
    keyFacts: [
      "Arish houses in the UAE were constructed primarily from palm fronds and leaves, reflecting a deep relationship between the people and the palm tree.",
      "The construction of arish houses was traditionally carried out by women, who passed their weaving and building skills from mother to daughter.",
      "A notable Bedouin woman built her own arish entirely by herself, demonstrating the self-sufficiency and skill of women in traditional Emirati society.",
      "Hassir — double layers of woven palm matting — were used in arish walls to protect against sandstorms and regulate temperature.",
      "The largest room in every arish house was the majlis, the gathering space for receiving guests, holding discussions, and making decisions.",
      "In the early 1980s, approximately 5,000 people lived in about 800 arishes in the Liwa region.",
      "The Liwa Arish House Project preserves and recreates traditional arish houses using authentic methods and materials.",
      "The word 'majlis' derives from the Arabic root meaning 'to sit,' reflecting its essence as a space for people to come together.",
      "UNESCO has recognised the majlis on its Representative List of the Intangible Cultural Heritage of Humanity.",
      "UNESCO describes the majlis as 'open to all people' and playing 'an important role in the transfer of oral heritage.'",
      "Sheikh Mohammed bin Zayed Al Nahyan hosts a Ramadan majlis featuring global speakers from diverse fields including religion, science, and politics.",
      "A wise elderly gentleman from the UK observed that while the western living room is a private family space, the majlis is an open, public space designed to welcome guests and engage with the world."
    ],
    visualType: "diagram",
    visualData: {
      title: "Traditional Majlis vs Modern Communication",
      comparison: [
        {
          category: "Setting",
          traditional: "Face-to-face gathering in a dedicated room with cushions and carpets",
          modern: "Digital screens, phones, and computers in any location"
        },
        {
          category: "Purpose",
          traditional: "Open discussion, consultation, decision-making, and oral heritage transfer",
          modern: "Quick information exchange, messaging, and virtual meetings"
        },
        {
          category: "Participation",
          traditional: "Inclusive — open to all who attend, with equal opportunity to speak",
          modern: "Can be exclusive — limited by technology access and digital literacy"
        },
        {
          category: "Access",
          traditional: "Physically present guests welcomed with hospitality",
          modern: "Remote access possible from anywhere in the world"
        },
        {
          category: "Format",
          traditional: "Extended, unhurried conversation over coffee and dates",
          modern: "Often brief, text-based, or time-limited virtual calls"
        },
        {
          category: "Cultural Role",
          traditional: "Central institution for preserving heritage, building community bonds, and teaching values",
          modern: "Supplementary tool for communication, not a cultural institution"
        }
      ]
    },
    quizQuestions: [
      {
        id: "G8T2U4L1Q1",
        question: "Who traditionally built and constructed arish houses in the UAE?",
        options: ["Women, who possessed extraordinary skills in weaving and assembling palm-leaf panels", "Professional male builders hired from other regions", "The entire community working together in large teams", "Foreign craftsmen who specialised in desert architecture"],
        correctAnswer: 0,
        explanation: "The construction of arish houses was traditionally carried out by women, who possessed extraordinary skills in weaving and assembling the palm-leaf panels that formed the walls and roofs. They passed this knowledge from mother to daughter across generations."
      },
      {
        id: "G8T2U4L1Q2",
        question: "What was the purpose of hassir double layers in arish house construction?",
        options: ["They were purely decorative patterns on the walls", "They protected against sandstorms and helped regulate temperature by creating an insulating air pocket", "They were used to store food and water supplies", "They served as doors and windows for the arish"],
        correctAnswer: 1,
        explanation: "Hassir — double layers of woven palm matting — were used during sandstorms to protect the interior. The outer layer caught the sand and wind, while the inner layer kept the interior clean. The gap between layers also created an insulating air pocket that helped regulate temperature."
      },
      {
        id: "G8T2U4L1Q3",
        question: "How does UNESCO describe the majlis and its cultural significance?",
        options: ["As a private family space similar to a western living room", "As 'open to all people' and playing 'an important role in the transfer of oral heritage'", "As a religious building used exclusively for prayer", "As a commercial marketplace for trading goods"],
        correctAnswer: 1,
        explanation: "UNESCO describes the majlis as 'open to all people,' emphasising its democratic and inclusive nature, and notes that it plays 'an important role in the transfer of oral heritage,' serving as the primary venue where cultural knowledge is shared across generations."
      },
      {
        id: "G8T2U4L1Q4",
        question: "Approximately how many people lived in arishes in the Liwa region in the early 1980s?",
        options: ["About 500 people in 80 arishes", "About 5,000 people in about 800 arishes", "About 50,000 people in about 8,000 arishes", "About 1,000 people in about 100 arishes"],
        correctAnswer: 1,
        explanation: "In the early 1980s, approximately 5,000 people lived in about 800 arishes scattered across the oases of the Liwa region, maintaining a traditional way of life that had endured for centuries."
      },
      {
        id: "G8T2U4L1Q5",
        question: "What does the word 'majlis' derive from, and what does this reveal about its essence?",
        options: ["It derives from the Arabic root meaning 'to decide,' revealing it is about making rulings", "It derives from the Arabic root meaning 'to sit,' revealing it is about people coming together for conversation and consultation", "It derives from the Arabic root meaning 'to build,' revealing it is about constructing community structures", "It derives from the Arabic root meaning 'to lead,' revealing it is about hierarchical leadership"],
        correctAnswer: 1,
        explanation: "The word 'majlis' derives from the Arabic root meaning 'to sit.' This simple etymology reveals the essence of the institution: it is fundamentally about people coming together, sitting with one another, and engaging in the human act of conversation and consultation."
      }
    ],
    interactiveStrategies: [
      {
        strategy: "Arish Blueprint Design",
        description: "Students create a detailed blueprint for an arish house, incorporating the traditional design elements discussed in the reading, including the majlis, hassir double layers, and palm-leaf construction techniques.",
        duration: 20,
        instructions: "1. On a large sheet of paper, draw a bird's-eye view blueprint of a traditional arish house. 2. Include and label the following elements: the majlis (as the largest room), the family living quarters, the kitchen area, and the entrance. 3. Mark where the hassir double layers would be placed and draw arrows showing how they protect against sandstorms. 4. Add notes explaining the function of each room and the materials used (palm fronds, woven panels, etc.). 5. Write a short paragraph explaining why the majlis is the largest and most important room. 6. Share your blueprint with a partner and compare your designs — discuss what you included and why."
      },
      {
        strategy: "Majlis Interview Role-Play",
        description: "Students role-play a journalist interviewing someone who has attended a traditional majlis, exploring the customs, etiquette, and cultural significance of the experience.",
        duration: 20,
        instructions: "1. Work in pairs — one student plays a journalist from an international magazine, and the other plays an Emirati elder who regularly attends and hosts a majlis. 2. The journalist prepares 5-7 interview questions about the majlis experience, such as: What happens when you arrive? Who can attend? What topics are discussed? How are decisions made? What is served to guests? How does the majlis compare to other forms of communication? 3. The elder answers using information from the readings, adding personal perspective and detail. 4. Switch roles and repeat the interview from a different angle — perhaps the journalist now interviews someone who attended Sheikh Mohammed bin Zayed's Ramadan majlis. 5. Each pair presents the most interesting insight from their interview to the class."
      }
    ]
  },

  // ─── Lesson 2: The Consultative Governance in the UAE ───
  {
    lessonId: "G8_T2_Unit 4_l2",
    keyVocabulary: ["Shura", "emirate", "Trucial States", "constitution", "Federal National Council", "electoral college"],
    reading1Title: "Shura: The Tradition of Consultation",
    reading1Content: `Shura, which means consultation in Arabic, is the process of making decisions by thinking about and discussing issues collectively rather than imposing a single viewpoint. It is a principle deeply embedded in Islamic tradition and Arab culture, rooted in the Quranic injunction that believers should conduct their affairs by mutual consultation. For the people of the UAE, Shura was not an abstract concept but a lived practice that shaped their daily interactions and governance long before the formation of the modern state. In the Bedouin camps, the coastal settlements, and the oasis communities, people gathered in the majlis to discuss matters of common concern, seek the advice of elders, and arrive at decisions through dialogue and consensus. This tradition ensured that leadership was exercised with the consent and participation of the community, rather than through unilateral authority.

Before the Union of the Emirates in 1971, the people of the UAE — then known as the Trucial States — practised Al Shura as their primary method of governance and community decision-making. Each emirate had its own ruler, but the ruler's authority was tempered and guided by the tradition of consultation. Rulers held regular majlis sessions where citizens could voice their opinions, raise concerns, and offer advice on matters ranging from local disputes to matters of trade and security. The rulers of the Trucial States understood that their legitimacy depended not merely on their lineage but on their willingness to listen to their people and govern with their consent. This culture of consultation created a strong bond between the rulers and the ruled, fostering trust, loyalty, and a shared sense of purpose that would prove essential when the time came to form a unified nation.

When the UAE was established as a federation in 1971, the tradition of Shura was formally enshrined in the nation's constitution and institutionalised as the Federal National Council (FNC). The FNC was created to serve as the consultative body of the federal government, providing a formal mechanism through which the citizens of the UAE could participate in the legislative process and hold their government to account. The first session of the Federal National Council was held on 13 February 1972, marking a historic milestone in the transformation of the traditional practice of Shura into a modern institution of governance. The FNC brought together representatives from all seven emirates, ensuring that the voices and concerns of every part of the federation were heard at the national level.

Sheikh Zayed bin Sultan Al Nahyan, the founding father of the UAE, placed immense value on the tradition of consultation and on the Federal National Council as its modern expression. His commitment to Shura was not merely rhetorical — it was demonstrated through his daily practice. Every day, Sheikh Zayed would visit the majlis from 11 o'clock in the morning until lunchtime, listening to citizens, discussing their concerns, and seeking their advice. He would then return to the majlis from 8 o'clock in the evening until dinner time, continuing the same practice of open and accessible consultation. This extraordinary dedication to the majlis ensured that the leader of the nation remained connected to the people he served, and that the ancient tradition of Shura continued to thrive in the highest reaches of government. Sheikh Zayed's philosophy of governance was encapsulated in his powerful words: "I am not imposing unity on anyone. That is tyranny. I am calling upon you to come and work together, not for me, but for yourselves and for your children and for the future of this country." This statement reveals the essence of Shura — that true unity and governance must come from the free will and collective decision of the people, not from coercion or imposition.`,
    reading2Title: "The Federal National Council: Election and Appointment",
    reading2Content: `The Federal National Council (FNC) is established as the fourth federal authority of the United Arab Emirates, occupying a crucial position in the nation's governance structure alongside the Supreme Council of the Union, the President of the Union, and the Council of Ministers. The FNC's primary role is to discuss and approve federal laws, examine and amend legislation proposed by the Cabinet, and provide a forum for the representatives of the people to voice their opinions on matters of national importance. The Council also has the power to summon and question federal ministers, ensuring transparency and accountability in the executive branch of government. Through these functions, the FNC serves as the bridge between the people and the government, embodying the UAE's commitment to consultative governance even as it balances the traditions of appointment with the principles of democratic participation.

The composition and selection of FNC members has evolved significantly since the Council's establishment. In 2006, the Supreme Council of the Union issued Resolution No. 4, a landmark decision that transformed the method by which FNC members were chosen. This resolution introduced a hybrid system that combined election and appointment: half of the Council's 40 members would be elected by citizens through an electoral college system, while the other half would be appointed by the rulers of the individual emirates. This innovative approach was designed to gradually introduce democratic participation while preserving the traditional principle of consultation and the stabilising influence of appointed representation. Each emirate is represented in the FNC in proportion to its population, with Abu Dhabi and Dubai each having eight seats, Sharjah and Ras Al Khaimah each having six, and Ajman, Umm Al Quwain, and Fujairah each having four.

The electoral college system, introduced by the 2006 resolution, works by establishing a body of eligible voters — the electoral college — who are selected by the rulers of each emirate. These electors then vote to choose the elected half of the FNC members from among the candidates who have put themselves forward. Over successive election cycles, the size of the electoral college has expanded dramatically, progressively widening the circle of political participation. The first election in 2006 had a relatively small electoral college, but by the third FNC election in 2015, the number of voters had grown to 224,279 — a significant expansion that demonstrated the UAE's commitment to gradually broadening democratic engagement. Importantly, the 2015 election also saw women making up 48% of the electoral college voters, reflecting the UAE's dedication to gender inclusion in the political process.

The objective of the electoral college system and the broader reform of FNC membership is to boost national loyalty and strengthen the bonds between citizens and their government. By giving citizens a direct voice in the selection of their representatives, the system fosters a sense of ownership and investment in the nation's governance. At the same time, the appointed half of the Council ensures that experienced voices, tribal representatives, and individuals with specialised knowledge continue to contribute to the legislative process, maintaining the balance between innovation and tradition that characterises so much of the UAE's development. The system also serves as a training ground for democratic participation, allowing citizens to develop the skills and habits of electoral engagement in a controlled and supportive environment.

Sheikh Zayed's vision for the Federal National Council was articulated from the very first meeting of the body. He saw the FNC not merely as a legislative chamber but as the institutional embodiment of the Shura tradition — a place where the voices of the people could be heard, where laws could be shaped by collective wisdom, and where the bond between ruler and citizen could be strengthened through dialogue and mutual respect. His daily practice of attending the majlis, listening to the people, and governing through consultation was the personal foundation upon which the FNC was built. As the UAE continues to develop and expand its consultative governance system, Sheikh Zayed's founding vision remains the guiding principle: that governance should be by the people and for the people, grounded in the ancient tradition of Shura and expressed through the modern institution of the Federal National Council.`,
    reading1Time: 8,
    reading2Time: 8,
    kwlExplanation: KWL_EXPLANATION,
    discussionQuestions: [
      "How was the tradition of consultation continued and formalised in the UAE Constitution and the establishment of the Federal National Council?",
      "What value did Sheikh Zayed place on the FNC, and how did his daily practice of attending the majlis demonstrate his commitment to Shura?",
      "How does the UAE's system of consultative governance, combining appointment and election, differ from governance systems in other countries?",
      "What role does consultation play in your own life — at home, at school, or in your community — and how does it compare to the tradition of Shura?",
      "How does the electoral college system promote inclusion, and why is the combination of elected and appointed members important for the UAE?"
    ],
    keyFacts: [
      "Shura means consultation in Arabic and is the process of making decisions by thinking about and discussing issues collectively.",
      "Before the Union in 1971, the people of the Trucial States practised Al Shura as their primary method of governance and decision-making.",
      "The tradition of Shura was formally enshrined in the UAE Constitution and institutionalised as the Federal National Council (FNC) at the Union.",
      "The first session of the Federal National Council was held on 13 February 1972.",
      "The FNC is the fourth federal authority of the UAE, alongside the Supreme Council, the President, and the Council of Ministers.",
      "The FNC's role includes discussing and approving federal laws, examining legislation, and summoning federal ministers for questioning.",
      "Sheikh Zayed visited the majlis daily from 11am to lunch and from 8pm to dinner, practising open consultation with citizens.",
      "Sheikh Zayed stated: 'I am not imposing unity on anyone. That is tyranny. I am calling upon you to come and work together... for your children and for the future of this country.'",
      "In 2006, Supreme Council Resolution No. 4 introduced a hybrid system combining election and appointment for FNC membership.",
      "Under the hybrid system, 20 FNC members are appointed by the rulers and 20 are elected by citizens through the electoral college.",
      "The 2015 FNC election had 224,279 voters, and women made up 48% of the electoral college.",
      "The objective of the electoral college system is to boost national loyalty and strengthen the bonds between citizens and their government."
    ],
    visualType: "timeline",
    visualData: {
      title: "The Growth of Consultative Governance in the UAE",
      events: [
        { year: "Pre-1971", label: "Al Shura Tradition", description: "People of the Trucial States practice consultation through the majlis as their primary method of governance" },
        { year: "1971", label: "UAE Constitution", description: "The tradition of Shura is formally enshrined in the UAE Constitution at the formation of the Union" },
        { year: "1972", label: "First FNC Session", description: "The Federal National Council holds its first session on 13 February 1972, institutionalising Shura" },
        { year: "2006", label: "Resolution No. 4", description: "Supreme Council introduces hybrid system combining election (20) and appointment (20) for FNC membership" },
        { year: "2015", label: "Third FNC Election", description: "224,279 voters participate; women make up 48% of the electoral college, demonstrating growing inclusion" }
      ]
    },
    quizQuestions: [
      {
        id: "G8T2U4L2Q1",
        question: "What does Shura mean, and how was it practised before the UAE Union?",
        options: ["Shura means 'obedience' and required citizens to follow rulers without question", "Shura means 'consultation' and was practised through the majlis as the primary method of governance in the Trucial States", "Shura means 'election' and was practised through formal voting in the Trucial States", "Shura means 'tradition' and was limited to religious ceremonies only"],
        correctAnswer: 1,
        explanation: "Shura means consultation in Arabic and is the process of making decisions by thinking about and discussing issues collectively. Before the Union, the people of the Trucial States practised Al Shura through the majlis as their primary method of governance and community decision-making."
      },
      {
        id: "G8T2U4L2Q2",
        question: "What was significant about Supreme Council Resolution No. 4 of 2006?",
        options: ["It abolished the Federal National Council entirely", "It introduced a hybrid system combining election and appointment for FNC membership, with 20 elected and 20 appointed members", "It changed the capital of the UAE", "It reduced the number of emirates in the federation"],
        correctAnswer: 1,
        explanation: "Supreme Council Resolution No. 4 of 2006 introduced a hybrid system that combined election and appointment for FNC membership: half of the 40 members would be elected by citizens through an electoral college, and the other half would be appointed by the rulers of the individual emirates."
      },
      {
        id: "G8T2U4L2Q3",
        question: "When was the first session of the Federal National Council held?",
        options: ["2 December 1971", "13 February 1972", "1 January 1973", "6 August 1966"],
        correctAnswer: 1,
        explanation: "The first session of the Federal National Council was held on 13 February 1972, marking a historic milestone in the transformation of the traditional practice of Shura into a modern institution of governance."
      },
      {
        id: "G8T2U4L2Q4",
        question: "How many voters participated in the 2015 FNC election, and what percentage were women?",
        options: ["100,000 voters with 25% women", "224,279 voters with 48% women", "500,000 voters with 50% women", "50,000 voters with 10% women"],
        correctAnswer: 1,
        explanation: "In the 2015 FNC election, 224,279 voters participated, and women made up 48% of the electoral college, reflecting the UAE's commitment to gradually broadening democratic engagement and promoting gender inclusion."
      },
      {
        id: "G8T2U4L2Q5",
        question: "What did Sheikh Zayed mean when he said: 'I am not imposing unity on anyone. That is tyranny'?",
        options: ["He was rejecting the idea of a unified UAE", "He believed that true unity must come from the free will and collective decision of the people, not from coercion or imposition", "He was criticising the Federal National Council", "He wanted each emirate to be completely independent"],
        correctAnswer: 1,
        explanation: "Sheikh Zayed's statement reveals the essence of Shura — that true unity and governance must come from the free will and collective decision of the people, not from coercion or imposition. He was calling upon the emirates to come and work together voluntarily for their own benefit and for the future of the country."
      }
    ],
    interactiveStrategies: [
      {
        strategy: "Consultation Decision-Making",
        description: "Students role-play a family deciding on a holiday destination using the principles of Shura, experiencing firsthand how consultation leads to better decisions.",
        duration: 15,
        instructions: "1. Form groups of 5-6 students to represent a family. 2. Each family member has a different holiday preference (mountains, beach, desert safari, city tour, cultural trip, staycation). 3. Choose one person to be the 'head of family' who will lead the Shura process — they must listen to everyone before deciding. 4. Each family member has 1 minute to explain their preference and why it would be best for the whole family. 5. The group then discusses and tries to reach a consensus through consultation, not voting. 6. The head of family makes the final decision, explaining how they considered everyone's input. 7. Reflect as a class: How did consultation change the outcome? Was it fair? How does this relate to the UAE's tradition of Shura?"
      },
      {
        strategy: "Majlis Collage",
        description: "Students create a visual collage illustrating a majlis gathering and the consultative process, incorporating key elements from both lessons in this unit.",
        duration: 20,
        instructions: "1. Each student receives a large sheet of paper or poster board. 2. Draw or create a visual representation of a majlis in the centre of your poster — it can be a traditional arish majlis or a modern FNC session. 3. Around the central image, add visual elements representing: the people who participate (citizens, rulers, elders), the process of consultation (speaking, listening, discussing, deciding), the results of Shura (laws, community decisions, national unity), and the cultural elements (Arabic coffee, dates, cushions, carpets). 4. Include at least two quotes from the readings — one from Sheikh Zayed and one about the majlis from UNESCO. 5. Add labels and brief explanations for each element. 6. Display the collages around the classroom and have a gallery walk to appreciate the different interpretations of the majlis and consultative governance."
      }
    ]
  }
];
