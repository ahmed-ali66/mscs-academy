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

export const g7t3Unit8: LessonContent[] = [
  {
    lessonId: "G7_T3_Unit 8_l1",
    keyVocabulary: ["action", "citizenship", "campaign", "collective", "showcase"],
    reading1Title: "Moral Education in Action",
    reading1Content: `The ancient Greek philosopher Aristotle once wrote, "We become just by doing just acts, temperate by doing temperate acts, brave by doing brave acts." This powerful idea lies at the very heart of the Moral Education programme: the acknowledgement that the values we hold shape our actions, and equally, our actions reinforce the values we hold. Throughout this course, you have explored concepts of character, ethics, culture, and community. Now, in this action project, theory and practice come together in a meaningful and transformative way.\n\nProfessor Audrey Osler, a leading scholar in citizenship education, argues that young people are not "Citizens in Waiting." This means you do not have to wait until you are an adult to participate in society or to make a difference. You are already citizens, with the capacity and the responsibility to act on your values. This action project invites you to critically examine your own understanding of citizenship and to reflect on moral issues that matter to you and your community.\n\nThe action you take might range from individual charitable actions and ethical consumer choices to collective direct actions such as raising awareness about a cause or running a campaign for change. Whether you choose to organise a school-wide recycling initiative, create an anti-bullying awareness programme, or develop a proposal for healthier school meals, the key is that your project connects moral values to real-world outcomes. The "call to action" is an essential component of this unit because it gives you a genuine chance to enact the values you have been studying in authentic, real-world contexts.\n\nBefore you begin your project, careful planning is essential. Start by reflecting on your school environment and the community around you. Consider the school policies that affect your daily life and think about recent actions taken by students or staff. Ask yourself whether collective action is something new for your school or whether there are existing structures you can build upon. Decide on your project topic based on what you have studied in Moral Education this term.\n\nAs you plan, consider the following questions carefully: Who is your target audience? What does meaningful participation look like for your project? What exactly do you want to achieve — is it raising awareness, changing a policy, or building a new tradition? Are there partnerships you can form with other classes, local organisations, or community groups in the UAE? How will you ensure that minority voices are heard and included? What challenges do you anticipate, and how will you overcome them? What resources will you need, and what is a realistic timeframe for completing your project? These planning questions will help you create an action project that is thoughtful, inclusive, and effective. Remember, moral education is not just about knowing what is right — it is about doing what is right.`,
    reading1Time: 10,
    reading2Title: "Ideas for Action Projects and Showcasing Your Work",
    reading2Content: `There are many exciting ways to bring your Moral Education learning to life through an action project. Here are two detailed ideas to inspire your planning.\n\nThe first idea is to establish a student council. A student council creates structured opportunities for collective decision-making and gives students a genuine voice in how their school is run. Grade 7 students could take responsibility for the administration and management of the council, developing valuable leadership and organisational skills. As a council, you would need to decide what decisions should be delegated to the student body and what remains the responsibility of staff. You might organise whole-student body meetings, class debates on important issues, or even prepare for future civic responsibilities by running mock elections. In the UAE, where the Federal National Council promotes Shura — the principle of consultation — a student council mirrors this important value of participatory governance.\n\nThe second idea focuses on policy development. You could develop guidelines or quality standards for whole-school change on a topic you care about. For example, you might examine the school's energy usage and propose ways to reduce it, or investigate paper waste and introduce a recycling programme. Your class could participate in global initiatives such as Earth Hour or Meatless Monday, or launch a local litter campaign or a spring clean of the school grounds. You might introduce a Fair-trade shop or develop a purchasing policy that supports ethical suppliers. Another powerful option is to develop an anti-racism policy, establishing sub-committees to examine access and enrolment, programme work, staff development, linguistic and religious cultural diversity, and the school's code of behaviour.\n\nOnce your action project is complete, a showcase event for parents and the wider school community is a wonderful way to share what you have accomplished. When designing your showcase, think carefully about the space you choose and how to plan the layout effectively. You could represent the flags of different nations represented in your school community and create a name wall celebrating diversity. For displays, consider visual representations of your project, informative posters, and a slideshow documenting your journey. To engage visitors, prepare questionnaires, quizzes, and conversation starters that invite genuine dialogue. Think about the best ways to communicate your new knowledge and skills — sometimes a conversation is more powerful than a poster.\n\nBeyond the showcase event, there are many other ways to share your learning. You could contribute to the school blog or newsletter, design a poster or infographic, organise a partnership event with another school in the UAE, keep a reflective journal or learning log, or even use social media through a class Twitter account or student-created podcasts. The philosopher Herbert Spencer once said, "The great aim of education is not knowledge, but action." Your action project is the living proof of this idea — taking what you have learned and turning it into something real and meaningful for your community.`,
    reading2Time: 10,
    kwlExplanation: KWL_EXPLANATION,
    discussionQuestions: [
      "What does Professor Audrey Osler mean when she says young people are not 'Citizens in Waiting'? How does this idea connect to your own life and community in the UAE?",
      "Aristotle believed that we become virtuous by practising virtue. Can you think of a time when doing the right thing helped strengthen your character? How might this principle apply to your action project?",
      "Why is it important to ensure that minority voices are heard when planning a collective action? What strategies could your group use to make sure everyone is included?",
      "If your school were to establish a student council, what decisions do you think should be made by students and what should remain the responsibility of staff? Explain your reasoning.",
      "Herbert Spencer said, 'The great aim of education is not knowledge, but action.' How does this quote capture the purpose of the Moral Education action project? What action do you most want to take?"
    ],
    keyFacts: [
      "Aristotle taught that we become virtuous by practising virtue — we become just by doing just acts, temperate by doing temperate acts, and brave by doing brave acts.",
      "Professor Audrey Osler argues that young people are not 'Citizens in Waiting' — they are already citizens with the capacity and responsibility to act.",
      "The action project connects moral education theory to real-world practice, allowing students to enact their values in authentic contexts.",
      "Action projects can range from individual charitable actions and ethical consumer choices to collective direct actions like campaigns.",
      "The 'call to action' is an essential component of the Moral Education programme because it bridges the gap between knowing and doing.",
      "Careful planning involves considering your target audience, what participation looks like, what you want to achieve, partnerships, and a realistic timeframe.",
      "A student council creates structures for collective decision-making and can mirror the UAE's principle of Shura — consultation and participatory governance.",
      "Policy development projects can address issues such as energy usage, recycling, Fair-trade purchasing, and anti-racism within the school community.",
      "A showcase event allows students to share their learning with parents and the community through displays, quizzes, conversation starters, and visual presentations.",
      "Herbert Spencer stated that 'The great aim of education is not knowledge, but action,' emphasising that learning must lead to meaningful real-world application."
    ],
    visualType: "mindmap",
    visualData: {
      central: "Action Project",
      branches: [
        {
          label: "Planning",
          children: ["Reflect on school environment", "Consider school policies", "Identify target audience", "Set realistic timeframe", "Ensure minority voices are heard", "Anticipate challenges"]
        },
        {
          label: "Ideas",
          children: ["Student council", "Policy development", "Recycling programme", "Anti-racism policy", "Earth Hour / Meatless Monday", "Fair-trade shop"]
        },
        {
          label: "Showcase",
          children: ["Design the space", "Create displays and posters", "Prepare quizzes and questionnaires", "Conversation starters", "Name wall and flags", "Slideshow documentation"]
        },
        {
          label: "Reflection",
          children: ["What did we learn?", "What impact did we have?", "How can we sustain our project?", "What would we do differently?", "Share via blog or podcast"]
        }
      ]
    },
    quizQuestions: [
      {
        id: "G7_T3_Unit8_Q1",
        question: "According to Aristotle, how do we become virtuous?",
        options: [
          "By reading about virtues in books",
          "By practising virtuous actions repeatedly",
          "By waiting until we are adults",
          "By memorising moral rules"
        ],
        correctAnswer: 1,
        explanation: "Aristotle believed that we become just by doing just acts, temperate by doing temperate acts, and brave by doing brave acts — virtue is developed through practice, not just theory."
      },
      {
        id: "G7_T3_Unit8_Q2",
        question: "What does Professor Audrey Osler mean by saying young people are not 'Citizens in Waiting'?",
        options: [
          "Young people should wait for permission before acting",
          "Citizenship is only for adults over 21",
          "Young people are already citizens with the capacity to participate and make a difference now",
          "Citizenship education is not important for young people"
        ],
        correctAnswer: 2,
        explanation: "Professor Osler argues that young people do not need to wait until adulthood to be citizens — they already have the capacity and responsibility to participate in society and take action."
      },
      {
        id: "G7_T3_Unit8_Q3",
        question: "Why is the 'call to action' considered an essential component of the Moral Education programme?",
        options: [
          "It replaces the need for classroom learning entirely",
          "It is only useful for students who want to become politicians",
          "It gives students a genuine chance to enact their values in real-world contexts",
          "It ensures every student gets the same grade"
        ],
        correctAnswer: 2,
        explanation: "The call to action bridges the gap between knowing and doing, giving students an authentic opportunity to put the moral values they have studied into practice in the real world."
      },
      {
        id: "G7_T3_Unit8_Q4",
        question: "Which of the following is an example of a collective direct action project?",
        options: [
          "Reading a book about the environment alone",
          "Writing a private diary entry about fairness",
          "Running a school-wide awareness campaign about recycling",
          "Thinking quietly about what fairness means"
        ],
        correctAnswer: 2,
        explanation: "A collective direct action involves a group working together to create change, such as running a school-wide campaign. The other options are individual and passive activities that do not involve collective action."
      },
      {
        id: "G7_T3_Unit8_Q5",
        question: "What did Herbert Spencer mean when he said, 'The great aim of education is not knowledge, but action'?",
        options: [
          "Knowledge is completely useless and should not be taught",
          "Action is more important than attending school",
          "Education should ultimately lead students to apply what they have learned in the real world",
          "Students should skip lessons and only do practical work"
        ],
        correctAnswer: 2,
        explanation: "Spencer's quote emphasises that the true purpose of education is not merely accumulating knowledge, but using that knowledge to take meaningful action in the world — which is exactly what the action project aims to achieve."
      }
    ],
    interactiveStrategies: [
      {
        strategy: "Project Planning Workshop",
        description: "Students work in small groups to plan their Moral Education action project, using a structured planning framework to identify their topic, audience, goals, and resources.",
        duration: 25,
        instructions: "1. Divide the class into groups of 4–5 students. 2. Provide each group with a large sheet of paper and markers. 3. Ask each group to brainstorm moral issues they have studied this term that they care about. 4. Using the planning questions from the reading, each group fills in a structured planning sheet covering: topic choice, target audience, what participation looks like, what they want to achieve, possible partnerships (including local UAE organisations), how they will ensure minority voices are heard, anticipated challenges, resources needed, and a realistic timeframe. 5. Each group presents their preliminary plan to the class for feedback. 6. Groups refine their plans based on peer feedback before finalising their action project proposal."
      },
      {
        strategy: "Showcase Design Studio",
        description: "Students design and prototype their showcase event, deciding how to present their action project to parents and the school community in an engaging and interactive way.",
        duration: 20,
        instructions: "1. After completing (or making significant progress on) their action project, each group plans a showcase presentation. 2. Provide art supplies, tablets, or computers for creating visual materials. 3. Groups must decide on: the space and layout for their showcase area, visual displays (posters, infographics, slideshows), interactive elements (quizzes, questionnaires, conversation starters), and any symbolic elements (such as flags representing the diversity of the school community or a name wall). 4. Each group creates a mini prototype of their showcase on a table or section of the classroom. 5. The class does a gallery walk, visiting each group's prototype showcase and providing constructive feedback using two stars and a wish (two things that work well and one suggestion for improvement). 6. Groups revise their showcase design based on the feedback received."
      }
    ]
  }
];

export function getG7T3Unit8LessonContent(lessonId: string): LessonContent | null {
  return g7t3Unit8.find(l => l.lessonId === lessonId) || null;
}
