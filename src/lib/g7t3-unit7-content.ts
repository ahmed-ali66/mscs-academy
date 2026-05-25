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

export const g7t3Unit7: LessonContent[] = [
  // ─── Lesson 1: Digital Resources and Sites ───
  {
    lessonId: "G7_T3_Unit 7_l1",
    keyVocabulary: ["social media", "global community", "influence", "authenticity", "viewpoint"],
    reading1Title: "Social Media: Connecting the World",
    reading1Content: `Social media has completely transformed the way people communicate, exchange ideas, and share knowledge across the globe. Platforms such as Facebook, Twitter, Instagram, and YouTube allow individuals to connect instantly with friends, family, and strangers no matter where they are in the world. By joining social media, you become a member of a global community — a vast network of people who interact, share experiences, and learn from one another every single day. The world, which once seemed enormous and distant, is now perceived as much smaller and far more accessible at the click of a button or the tap of a screen.

However, with this incredible power of connection comes a significant responsibility. It is extremely important to consider the authenticity of all social media sources before accepting information as truth. When you read a post, watch a video, or view an image online, you should always think about who the author is and what their agenda might be. Are they sharing factual information, or are they trying to persuade you to adopt a particular viewpoint? Understanding the motivations behind online content is a crucial skill in the digital age.

Cultures, values, and views across the world are individual and unique. Each society has its own traditions, beliefs, and ways of expressing ideas. Social media has changed all of that as we have become increasingly intercultural and globalised. People from different backgrounds now interact daily, sharing perspectives that were once separated by vast distances. This intercultural exchange can be enriching, but it also requires us to be thoughtful about how we interpret and respond to content from cultures different from our own.

There are many different types of social media platforms, each serving a distinct purpose. Social blogs, such as WordPress, Blogger, and Tumblr, allow users to create and publish their own written content for others to read and comment on. Wikis, like Wikipedia, enable collaborative editing where many people contribute to building a shared knowledge base. Podcasts provide episodic audio or video content that users can subscribe to and listen to at their convenience. Online forums, also known as message boards, allow people to discuss specific topics in threaded conversations. Social bookmarking sites, such as Pinterest, let users save, organise, and share links to web content they find interesting. Understanding these different types helps us navigate the digital landscape more effectively and use each platform for its intended purpose.`,
    reading2Title: "What Does Your Writing Say About You?",
    reading2Content: `There is a famous saying: "Tell me what you are writing, I'll tell you who you are." This idea is especially relevant in the age of social media. Everything shared online — every tweet, post, comment, and review — has been written by someone for a particular purpose or with a specific viewpoint. Some people use social media to share factual information, others express personal opinions, and still others are driven by campaigns or causes they believe in. Understanding the purpose behind a piece of writing helps us evaluate its reliability and decide how much weight to give it.

Different users have different writing styles that reveal their emotions and character. The language a writer uses can tell us a great deal about their state of mind and their attitude toward the subject. A writer who uses angry or bitter language may be expressing frustration or discontent. Someone who writes in a sad tone might be sharing a personal loss or disappointment. A happy, enthusiastic writer often conveys excitement and positivity. These emotional cues are important because they reveal the writer's viewpoint — their particular way of seeing the world.

Consider the example of the "Out and About" restaurant review. When a reviewer writes about a dining experience, the tone they use — whether glowing and appreciative or harsh and critical — conveys their character and their standards. A reviewer who focuses on positive aspects like friendly service and delicious food shows an optimistic outlook, while one who dwells on every minor flaw reveals a more critical personality. Students should always ask themselves: What does this writing say about the writer's character? What emotions are being expressed, and what do those emotions tell me about the person behind the words?

Social media users can be broadly categorised into several types based on their purpose for being online. Friends use social media to share their daily activities, photos, and experiences with people they know. Educators use platforms to teach and learn, sharing knowledge and resources with students and fellow teachers. Commercial users buy and sell products and services, using social media as a marketplace. Political users advocate for causes and try to persuade others to support their views. Creative users express themselves through art, music, writing, and other forms of creative output. Recognising these different user types helps us understand the motivations behind the content we encounter online and assess its authenticity more effectively. In the UAE, where social media usage is among the highest in the world, understanding these distinctions is particularly important for navigating the digital landscape responsibly.`,
    reading1Time: 8,
    reading2Time: 8,
    kwlExplanation: KWL_EXPLANATION,
    discussionQuestions: [
      "Why is it important to question the authenticity of information you find on social media?",
      "How has social media changed the way people from different cultures interact with each other?",
      "What can the tone and language of a social media post reveal about the writer's viewpoint?",
      "Which type of social media user do you think you are, and why?",
      "How can understanding different types of social media platforms help you use them more effectively?"
    ],
    keyFacts: [
      "Social media allows instant communication and exchange of ideas across the globe.",
      "Being part of social media makes you a member of a global community.",
      "The world is now perceived as much smaller and more accessible at the click of a button.",
      "It is important to consider the authenticity of all social media sources.",
      "You should always think about who the author is and what their agenda might be.",
      "Cultures, values, and views across the world are individual and unique.",
      "Social media has made societies more intercultural and globalised.",
      "Social blogs (WordPress, Blogger, Tumblr) allow users to create and publish written content.",
      "Wikis like Wikipedia enable collaborative editing and shared knowledge building.",
      "Podcasts provide episodic audio or video content for subscribers.",
      "Online forums allow threaded discussions on specific topics.",
      "Social bookmarking sites like Pinterest let users save and share web content links."
    ],
    visualType: "diagram",
    visualData: {
      title: "Types of Social Media",
      center: "Social Media",
      branches: [
        { label: "Social Blogs", examples: "WordPress, Blogger, Tumblr", description: "Create and publish written content" },
        { label: "Wikis", examples: "Wikipedia", description: "Collaborative knowledge building" },
        { label: "Podcasts", examples: "Spotify, Apple Podcasts", description: "Episodic audio/video content" },
        { label: "Online Forums", examples: "Reddit, Quora", description: "Threaded topic discussions" },
        { label: "Social Bookmarking", examples: "Pinterest", description: "Save and share web content links" }
      ]
    },
    quizQuestions: [
      {
        id: "G7T3U7L1Q1",
        question: "Why is it important to consider the authenticity of social media sources?",
        options: ["Because all social media is fake", "Because understanding who the author is and their agenda helps you evaluate reliability", "Because only famous people should post online", "Because social media is not educational"],
        correctAnswer: 1,
        explanation: "Considering authenticity means thinking about who created the content and why, which helps you determine whether the information is reliable and trustworthy."
      },
      {
        id: "G7T3U7L1Q2",
        question: "What does the saying 'Tell me what you are writing, I'll tell you who you are' mean in the context of social media?",
        options: ["Writers should never share personal information", "Only professional writers should post online", "The language and tone a writer uses reveals their emotions, character, and viewpoint", "Social media writing is always truthful"],
        correctAnswer: 2,
        explanation: "The saying suggests that a person's writing style, tone, and language choices reveal their emotions, character, and particular viewpoint on a subject."
      },
      {
        id: "G7T3U7L1Q3",
        question: "Which type of social media platform enables collaborative editing where many people contribute to building a shared knowledge base?",
        options: ["Social blogs", "Podcasts", "Online forums", "Wikis"],
        correctAnswer: 3,
        explanation: "Wikis, like Wikipedia, are designed for collaborative editing where multiple users can contribute to and edit shared content."
      },
      {
        id: "G7T3U7L1Q4",
        question: "How has social media affected cultures around the world?",
        options: ["It has erased all cultural differences", "It has made people less interested in other cultures", "It has made societies more intercultural and globalised while cultures remain unique", "It has only affected Western cultures"],
        correctAnswer: 2,
        explanation: "Social media has increased intercultural interaction and globalisation, but cultures, values, and views across the world remain individual and unique."
      },
      {
        id: "G7T3U7L1Q5",
        question: "Which of the following is an example of a social bookmarking platform?",
        options: ["Wikipedia", "Twitter", "Blogger", "Pinterest"],
        correctAnswer: 3,
        explanation: "Pinterest is a social bookmarking platform that allows users to save, organise, and share links to web content they find interesting."
      }
    ],
    interactiveStrategies: [
      {
        strategy: "KWL Chart",
        description: "Students create a KWL chart to track what they already know about social media, what they want to learn, and what they have learned by the end of the lesson.",
        duration: 15,
        instructions: "1. Draw a three-column chart labelled Know, Want to know, and Learned. 2. Before reading, fill in the 'Know' column with everything you already know about social media and digital resources. 3. In the 'Want to know' column, write questions you have about social media types, authenticity, and online viewpoints. 4. After completing both readings, fill in the 'Learned' column with new information you discovered. 5. Share your KWL chart with a partner and discuss any surprising findings."
      },
      {
        strategy: "User Type Role Play",
        description: "Students take on the role of different social media user types and present content from that perspective, then the class identifies which type they are portraying.",
        duration: 20,
        instructions: "1. Each student is assigned one of the five user types: friend, educator, commercial, political, or creative. 2. Write a short social media post (3-4 sentences) from the perspective of your assigned user type. 3. Read your post aloud to the class without revealing your type. 4. The class discusses what language clues, tone, and content reveal about the user type. 5. After guessing, discuss how recognising user types helps us evaluate the authenticity and purpose of online content."
      }
    ]
  },

  // ─── Lesson 2: Privacy and Electronic Safety ───
  {
    lessonId: "G7_T3_Unit 7_l2",
    keyVocabulary: ["virus", "protection", "privacy policy", "confidential", "secure"],
    reading1Title: "Maha's Online World: Benefits and Risks",
    reading1Content: `Maha is a typical teenager who loves social media. She spends hours every day online, chatting with friends, watching videos, and browsing through posts and images. Like many young people, Maha uses social media for schoolwork too — she searches for information, collaborates with classmates on projects, and shares resources. However, she also gets easily distracted, finding herself scrolling through feeds when she should be studying. Maha's experience reflects the reality of millions of young people around the world, especially here in the UAE where internet penetration is among the highest globally.

Social media offers many genuine benefits. It allows people to connect with friends and family who live far away, making it easier to maintain relationships across distances. It enables collaboration on school projects and group assignments, helping students work together even when they cannot meet in person. It provides access to a vast amount of information and educational resources that can support learning and personal growth. These benefits are real and significant, and it would be a mistake to ignore them.

However, social media also carries serious risks that every user should understand. Strangers online can be dangerous — not everyone you meet on the internet has good intentions. Risks include exposure to computer viruses, encountering bad language and inappropriate content, receiving wrong or misleading information, falling under negative influence, and the misuse of your personal information by people who might exploit it. One of the most significant threats is the computer virus. Much like the human flu, a computer virus is a piece of code that gets into your computer and creates copies of itself. Viruses can erase your files, damage your hard drive, and cause your device to stop working entirely. They can spread through email attachments, downloaded files, and even through visiting infected websites.

Protecting yourself online requires vigilance and good habits. You should never open messages from strangers, as they may contain viruses or lead to harmful content. Avoid non-secure web pages — always look for 'https://' in the address bar and the padlock icon that indicates a secure connection. Use secure passwords that mix letters and numbers, and change them every three to four months. Never provide confidential information such as your home address, phone number, or bank details via email. Most importantly, always read the privacy policy before joining any social media platform or website — this document explains how your data will be collected, used, and shared. Taking these precautions can help you enjoy the benefits of social media while minimising the risks to your safety and privacy.`,
    reading2Title: "Staying Safe: Laws, Checklists, and Responsibility",
    reading2Content: `The UAE government takes online safety very seriously and has established laws protecting individuals' privacy and bringing violators to justice. These laws are designed to ensure that people can use the internet safely and that those who exploit or harm others online face serious consequences. If you are ever contacted by someone who makes you feel uncomfortable or threatened online, it is essential that you tell a trusted adult or your parents immediately. Remember — you have done nothing wrong. The person who is making you uncomfortable is the one behaving inappropriately, and speaking up is the right thing to do.

There is a comprehensive safety checklist that everyone should follow when using social media and the internet. First and foremost, tell your parents or a trusted adult if anything online makes you uncomfortable. Do not retaliate or respond aggressively to negative messages. Instead, ignore the person and block them from contacting you further. Save evidence of any harassment or threatening behaviour — keep records of messages and screenshots, but do not reply to them. Accept friends wisely — only connect with people you actually know and trust. Use privacy settings on all your accounts to control who can see your information. Never give out personal information such as your address, school name, or daily schedule to strangers online.

Additional safety measures include using protection software such as antivirus programmes and firewalls on all your devices. Turn off GPS location services on your phone and apps when you are not actively using them, as this information can reveal your whereabouts. Do not use auto-login features on shared or public devices, as this can give others access to your accounts. Use parental controls to help manage what content is accessible. Understand that people online can be misleading — not everyone is who they claim to be. Perhaps most importantly, never do anything online that you would not do in person. If you would not say something to someone's face, you should not say it online either.

Saeed Al Rumaithi, a prominent UAE social media figure, has spoken about using social media for philanthropic activities with the Red Crescent. He demonstrates how social media can be a powerful force for good when used responsibly — raising awareness about charitable causes, mobilising volunteers, and inspiring others to contribute to their communities. His example shows that social media is not just about entertainment or self-promotion; it can be a meaningful tool for positive change. By following safety guidelines and using social media thoughtfully, young people in the UAE and around the world can protect themselves while harnessing the incredible potential of digital connectivity for education, collaboration, and social good.`,
    reading1Time: 8,
    reading2Time: 8,
    kwlExplanation: KWL_EXPLANATION,
    discussionQuestions: [
      "What are the main differences between the benefits and risks of using social media?",
      "Why should you never open messages from strangers online?",
      "How does the UAE government protect individuals' privacy on the internet?",
      "What would you do if someone online made you feel uncomfortable?",
      "How can social media be used as a force for good, as shown by Saeed Al Rumaithi's example?"
    ],
    keyFacts: [
      "Social media offers benefits like connecting with people, collaboration, and access to information.",
      "Risks of social media include viruses, bad language, wrong information, negative influence, and misuse of personal information.",
      "A computer virus is code that gets into your computer, creates copies of itself, and can erase files or damage hard drives.",
      "Never open messages from strangers as they may contain viruses or harmful content.",
      "Secure websites have 'https://' in the address bar and a padlock icon.",
      "Use secure passwords that mix letters and numbers, and change them every three to four months.",
      "Never provide confidential information such as your address or bank details via email.",
      "Always read the privacy policy before joining any social media platform or website.",
      "The UAE government has laws protecting individuals' privacy and bringing violators to justice.",
      "If contacted by someone who makes you uncomfortable online, tell a trusted adult — you have done nothing wrong.",
      "Saeed Al Rumaithi uses social media for philanthropic activities with the Red Crescent.",
      "Never do anything online that you would not do in person."
    ],
    visualType: "diagram",
    visualData: {
      title: "Online Safety Checklist",
      center: "Stay Safe Online",
      branches: [
        { label: "Protect Your Identity", steps: "Use secure passwords, never share personal info, turn off GPS" },
        { label: "Manage Connections", steps: "Accept friends wisely, use privacy settings, block strangers" },
        { label: "Guard Your Devices", steps: "Use antivirus software, avoid auto-login, use parental controls" },
        { label: "Respond Wisely", steps: "Don't retaliate, save evidence, tell a trusted adult" },
        { label: "Stay Informed", steps: "Read privacy policies, check for https://, recognise misleading people" }
      ]
    },
    quizQuestions: [
      {
        id: "G7T3U7L2Q1",
        question: "What is a computer virus?",
        options: ["A type of social media platform", "A piece of code that gets into your computer, copies itself, and can damage files", "A kind of internet browser", "A security feature that protects your computer"],
        correctAnswer: 1,
        explanation: "A computer virus is malicious code that gets into your computer, creates copies of itself, and can erase files or damage hard drives, much like how a human flu spreads."
      },
      {
        id: "G7T3U7L2Q2",
        question: "How can you tell if a website is secure?",
        options: ["It has a lot of colourful images", "It asks for your password", "It has 'https://' in the address bar and a padlock icon", "It has many advertisements"],
        correctAnswer: 2,
        explanation: "Secure websites display 'https://' in the address bar along with a padlock icon, indicating that the connection between your browser and the website is encrypted and safe."
      },
      {
        id: "G7T3U7L2Q3",
        question: "What should you do if someone online makes you feel uncomfortable?",
        options: ["Retaliate with mean messages", "Delete your social media account", "Ignore them and hope they stop", "Tell a trusted adult or your parents immediately"],
        correctAnswer: 3,
        explanation: "If someone makes you uncomfortable online, you should tell a trusted adult or your parents immediately. You have done nothing wrong, and speaking up is the right thing to do."
      },
      {
        id: "G7T3U7L2Q4",
        question: "How often should you change your passwords according to the safety guidelines?",
        options: ["Once a year", "Every week", "Every three to four months", "Only when you forget them"],
        correctAnswer: 2,
        explanation: "The safety guidelines recommend changing your passwords every three to four months to maintain strong security for your accounts."
      },
      {
        id: "G7T3U7L2Q5",
        question: "What example does Saeed Al Rumaithi set for responsible social media use?",
        options: ["He uses social media only for entertainment", "He avoids social media completely", "He uses social media for philanthropic activities with the Red Crescent", "He posts only about his personal life"],
        correctAnswer: 2,
        explanation: "Saeed Al Rumaithi demonstrates using social media for philanthropic activities with the Red Crescent, showing how it can be a powerful tool for positive change in the community."
      }
    ],
    interactiveStrategies: [
      {
        strategy: "Safety Checklist Creation",
        description: "Students create a personalised online safety checklist poster based on the safety tips from the readings, adding their own tips and decorating it for display.",
        duration: 20,
        instructions: "1. Review the safety checklist from the reading and write down all the tips mentioned. 2. Add at least three additional safety tips of your own that were not mentioned in the text. 3. Design a visually appealing poster that organises the checklist into categories such as Protect Your Identity, Manage Connections, and Guard Your Devices. 4. Include illustrations or icons for each tip to make the poster more engaging. 5. Share your poster with the class and explain which tips you think are most important and why."
      },
      {
        strategy: "Scenario Analysis",
        description: "Students are given different online scenarios and must identify the risks and recommend appropriate safety actions based on what they have learned.",
        duration: 15,
        instructions: "1. The teacher presents five different online scenarios — for example: receiving a friend request from a stranger, finding a link promising free gifts, noticing no padlock on a website, getting a message asking for your address, and being asked to share your password. 2. For each scenario, discuss with a partner what the potential risks are. 3. Write down the specific safety actions you would take in each situation using the checklist from the readings. 4. Share your responses with the class and compare different approaches. 5. Reflect on which scenarios were the most difficult to handle and discuss why."
      }
    ]
  },

  // ─── Lesson 3: Online Abuse ───
  {
    lessonId: "G7_T3_Unit 7_l3",
    keyVocabulary: ["cyberbullying", "stalking", "grooming", "empathy", "harassment"],
    reading1Title: "Understanding Cyberbullying, Stalking, and Grooming",
    reading1Content: `Cyberbullying is the use of technology to harass, threaten, embarrass, or target another person. It can take many forms and can be obvious or subtle. Obvious cyberbullying includes posting mean or cruel comments on someone's Facebook page, sending threatening messages, or publicly mocking someone online. Less obvious forms include posting someone's personal information without their consent, or sharing private images that were meant to remain confidential. What makes cyberbullying particularly challenging is that it can happen accidentally — the tone of a short text message or online comment can be easily misunderstood, and something intended as a joke can cause real hurt. This is why it is so important to think carefully before posting anything online.

Stalking is defined as harassing or threatening behaviour that is engaged in repeatedly over time. It can be physical — following someone in person — or it can be virtual, which is known as cyberstalking. Cyberstalking involves using the Internet or other electronic means to stalk someone. This might include constantly sending unwanted messages, tracking someone's online activity, showing up in the same online spaces repeatedly, or using technology to monitor someone's location and movements. Cyberstalking can be extremely distressing for the victim and can make them feel unsafe both online and in their daily life.

Online grooming is another serious threat, particularly for young people. In grooming situations, individuals form relationships with children online by pretending to be their friend. They gradually build trust and find out personal information about the victim. The groomer may then try to isolate the victim from their friends and family, making the young person feel that the groomer is the only person who truly understands them. Groomers use a range of tactics, including flattery and promises of gifts, as well as threats and intimidation to maintain control over the victim.

Examples of these forms of online abuse are unfortunately common. Cyberbullying examples include sending hate mail, writing threatening messages, mocking someone's appearance, and altering images to humiliate the victim. Grooming examples include sending gifts to gain trust, arranging to meet in person, making false promises about friendship or opportunities, and pretending to be someone else entirely — often a young person of a similar age. Stalking examples include following someone's location through their posts, constantly liking and commenting on everything a person shares, and sending a stream of messages that demand attention. Understanding these different forms of online abuse is the first step toward protecting yourself and others. In the UAE, strong laws are in place to combat these threats, and awareness is growing about the importance of digital safety for all internet users.`,
    reading2Title: "Hessa's Story: Finding Help and Justice",
    reading2Content: `Hessa's story is a powerful and deeply troubling example of how online abuse can escalate and devastate a young person's life. When Hessa was in the seventh grade, she met someone in an online chat room. At first, the conversation seemed friendly and harmless. However, over time, the person she was chatting with began to pressure her, and Hessa was eventually forced to share personal information — information that was deeply private and that she never intended to share with anyone. The person then released this information online, and it went viral, spreading rapidly across social media platforms and reaching people at her school and beyond.

The consequences for Hessa were devastating. Kids at her school bullied and teased her relentlessly about the leaked information. What had started as a private conversation in a chat room became a very public humiliation. Hessa felt isolated, ashamed, and unable to escape the cruelty of her peers. She eventually changed schools in an attempt to start fresh, but the stalker was not finished — they created a fake Facebook page using Hessa's name and photographs, continuing the harassment in a new and even more disturbing form.

Hessa lost all of her friends except one — Reem. Reem was the only person who stood by Hessa during this incredibly difficult time. Recognising that the situation was beyond what she could handle alone, Reem confided in a teacher. The teacher, understanding the seriousness of the situation, spoke with Hessa's parents. Hessa's parents then contacted the police, and the authorities launched an investigation.

Cyberbullying is a crime in the UAE, and the police took the matter seriously. They were able to trace the bully and make an arrest. The legal consequences for cyberbullying in the UAE are severe. Under UAE Federal Decree No. 5 of 2012, which addresses cybercrime, anyone using a computer network or social media to invade another person's privacy shall be punished by imprisonment of up to six months or a fine ranging from AED 150,000 to AED 500,000. These strong penalties reflect the UAE's commitment to protecting its citizens and residents from online abuse.

Hessa's story highlights the critical importance of empathy — the ability to put yourself in someone else's shoes and understand their feelings and experiences. When people lack empathy, they can cause enormous harm without fully realising the impact of their actions. Every person who shared Hessa's private information, who teased her, or who stood by without helping contributed to her suffering. Developing empathy means treating others with kindness and respect, both online and offline, and having the courage to speak up when you see someone being treated unfairly. If Hessa's classmates had shown empathy instead of cruelty, her experience would have been very different.`,
    reading1Time: 8,
    reading2Time: 8,
    kwlExplanation: KWL_EXPLANATION,
    discussionQuestions: [
      "What is the difference between cyberbullying, stalking, and online grooming?",
      "How did Hessa's story demonstrate the importance of telling a trusted adult about online abuse?",
      "Why is empathy so important in preventing online abuse?",
      "What does UAE Federal Decree No. 5 of 2012 say about cybercrime, and why are the penalties so severe?",
      "How can cyberbullying happen accidentally, and what steps can you take to prevent it?"
    ],
    keyFacts: [
      "Cyberbullying is the use of technology to harass, threaten, embarrass, or target another person.",
      "Cyberbullying can be obvious (mean comments) or less obvious (posting personal information).",
      "Cyberbullying can happen accidentally because tone is hard to detect in short messages.",
      "Stalking is harassing or threatening behaviour engaged in repeatedly over time.",
      "Cyberstalking involves using the Internet or electronic means to stalk someone.",
      "Online grooming involves forming relationships with children online by pretending to be their friend.",
      "Groomers use flattery, promises of gifts, threats, and intimidation to control victims.",
      "Cyberbullying is a crime in the UAE under Federal Decree No. 5 of 2012.",
      "Penalties for cybercrime in the UAE include imprisonment of up to six months or fines of AED 150,000–500,000.",
      "Hessa's story shows the importance of telling a trusted adult when experiencing online abuse.",
      "Empathy — putting yourself in someone else's shoes — is crucial for preventing online abuse.",
      "Reem's decision to confide in a teacher was the key step that led to Hessa getting help."
    ],
    visualType: "venn",
    visualData: {
      title: "Overlapping Online Dangers",
      sets: [
        { label: "Cyberbullying", items: ["Hate mail", "Threatening messages", "Mocking", "Altering images"] },
        { label: "Stalking", items: ["Following location", "Constant messaging", "Monitoring activity", "Unwanted contact"] },
        { label: "Grooming", items: ["False friendship", "Sending gifts", "Arranging meetings", "False promises"] }
      ],
      overlaps: [
        { sets: ["Cyberbullying", "Stalking"], items: ["Repeated harassment", "Targeting specific person"] },
        { sets: ["Stalking", "Grooming"], items: ["Building unwanted relationship", "Using personal information"] },
        { sets: ["Cyberbullying", "Grooming"], items: ["Manipulation", "Emotional harm"] },
        { sets: ["Cyberbullying", "Stalking", "Grooming"], items: ["Using technology", "Victim feels unsafe", "Can be reported to authorities"] }
      ]
    },
    quizQuestions: [
      {
        id: "G7T3U7L3Q1",
        question: "What is cyberbullying?",
        options: ["Using social media to make new friends", "The use of technology to harass, threaten, embarrass, or target another person", "A type of computer virus", "A way to protect your privacy online"],
        correctAnswer: 1,
        explanation: "Cyberbullying is defined as the use of technology to harass, threaten, embarrass, or target another person, and it can take both obvious and subtle forms."
      },
      {
        id: "G7T3U7L3Q2",
        question: "What is online grooming?",
        options: ["Teaching someone how to use a computer", "When people form relationships with children online pretending to be their friend", "A type of social media game", "Cleaning up your online profile"],
        correctAnswer: 1,
        explanation: "Online grooming is when individuals form relationships with children online by pretending to be their friend, gradually building trust to exploit personal information and isolate the victim."
      },
      {
        id: "G7T3U7L3Q3",
        question: "According to UAE Federal Decree No. 5 of 2012, what are the penalties for using social media to invade someone's privacy?",
        options: ["A warning letter", "Community service only", "Imprisonment of up to six months or a fine of AED 150,000 to 500,000", "No legal consequences"],
        correctAnswer: 2,
        explanation: "UAE Federal Decree No. 5 of 2012 states that anyone using a computer network or social media to invade privacy shall be punished by imprisonment of up to six months or a fine of AED 150,000 to 500,000."
      },
      {
        id: "G7T3U7L3Q4",
        question: "In Hessa's story, what was the key step that led to her getting help?",
        options: ["She confronted the bully herself", "She deleted all her social media accounts", "Her friend Reem confided in a teacher who then spoke with Hessa's parents", "She posted about her experience online"],
        correctAnswer: 2,
        explanation: "Reem confided in a teacher, who then spoke with Hessa's parents, and the parents contacted the police. This chain of communication was the key step that led to the bully being caught and Hessa getting the help she needed."
      },
      {
        id: "G7T3U7L3Q5",
        question: "Why is empathy important in the context of online abuse?",
        options: ["It helps you write better social media posts", "It makes you more popular online", "It helps you understand others' feelings and prevents you from causing harm", "It is only important for adults"],
        correctAnswer: 2,
        explanation: "Empathy — the ability to put yourself in someone else's shoes — helps you understand how your actions affect others and prevents you from causing harm through thoughtless or cruel behaviour online."
      }
    ],
    interactiveStrategies: [
      {
        strategy: "Empathy Walk",
        description: "Students reflect on Hessa's story by writing from different perspectives — Hessa, Reem, the teacher, and a classmate who witnessed the bullying — to develop empathy and understand the impact of online abuse.",
        duration: 20,
        instructions: "1. Divide the class into four groups, each assigned a different perspective from Hessa's story: Hessa herself, Reem (the loyal friend), the teacher, and a classmate who witnessed the bullying. 2. Each group writes a short journal entry (5-8 sentences) from their assigned character's perspective, describing what they felt, thought, and did. 3. Groups read their journal entries aloud to the class. 4. After each reading, the class discusses how the same event was experienced differently by each person. 5. Reflect together on how showing empathy — even from the classmates — could have changed Hessa's experience."
      },
      {
        strategy: "Online Abuse Identification",
        description: "Students analyse a series of online scenarios and classify each as cyberbullying, stalking, or grooming, explaining their reasoning and suggesting appropriate responses.",
        duration: 15,
        instructions: "1. The teacher presents eight different online scenarios on the board, one at a time. Examples: someone repeatedly messaging you after you asked them to stop, a stranger offering you gifts and asking to meet, a classmate posting an embarrassing photo of you, someone creating a fake profile of you, etc. 2. For each scenario, students individually decide whether it is cyberbullying, stalking, or grooming (or a combination). 3. Students then discuss their classifications with a partner, explaining their reasoning. 4. The class discusses each scenario together, identifying the key characteristics that distinguish each type of abuse. 5. For each scenario, students suggest the most appropriate response and who they should tell."
      }
    ]
  },

  // ─── Lesson 4: Smart Selection of Information ───
  {
    lessonId: "G7_T3_Unit 7_l4",
    keyVocabulary: ["factual", "opinion", "modification", "optical illusion", "influencer"],
    reading1Title: "Pictures, Words, and the Power of Manipulation",
    reading1Content: `There is a well-known saying: "A picture is worth a thousand words." While images can convey powerful messages instantly, adding a simple text or caption can change the meaning of an image significantly. A photograph of a person standing in front of a building could be captioned as "tourist enjoys holiday" or "suspect spotted near crime scene" — the same image tells two completely different stories depending on the words that accompany it. This is a crucial lesson for anyone consuming media in the digital age: always consider how text and images work together to create meaning.

Images and photographs can be altered using editing software such as Photoshop, GIMP, and other digital tools. These modifications can be made to portray a particular message, to sell a product more effectively, or even for illegal purposes such as identity theft. The ease with which images can be digitally manipulated means that we can no longer assume that a photograph always tells the truth. A picture may indeed be worth a thousand words, but some of those words might be lies.

Optical illusions are images that we perceive differently than they really are. Our eyes send information to our brains, and our brains interpret that information — but sometimes the interpretation is tricked. Optical illusions demonstrate that our perception is not always reliable, and what we think we see may not be what is actually there. This understanding extends to digital images: just as our eyes can be fooled by optical illusions, our minds can be deceived by modified or reformed images.

Reformed images are photographs that have been taken from certain angles or have had things added or removed to change their meaning. For example, a photo taken from a low angle might make a person look more powerful, while a high angle might make them look small and insignificant. Adding or removing objects from an image can completely alter the story it tells. Consider Ahmed's story: Ahmed posted a fake tweet claiming he was stuck in an elevator at the Burj Khalifa, one of Dubai's most iconic landmarks. He thought it was just a harmless joke. However, the tweet was retweeted many times and soon began trending with the hashtags #DubaiPolice and #HelpAhmed. People genuinely believed he was in danger, and authorities were alerted. Ahmed had to post a public apology explaining that the tweet was a prank, but the damage had already been done. His story demonstrates that false information can spread rapidly on social media and can have serious real-world consequences, even when it was intended as a joke. The lesson is clear: always verify information before sharing it, and never post false content, no matter how harmless it may seem.`,
    reading2Title: "Influencers, Fake News, and Verifying Information",
    reading2Content: `Social media influencers are people who have huge numbers of followers on platforms like Instagram, YouTube, and Twitter, and who can affect their followers' purchase decisions and opinions. In the UAE, one prominent influencer has over 5.4 million Instagram followers — that is more followers than the population of many countries. When an influencer recommends a product, their followers often trust that recommendation and go out to purchase it. This is why influencer marketing has become a multi-billion-dirham industry, and why blogging is closely connected to it. A positive mention or review from an influencer can lead to a significant increase in sales for a product or service.

However, there is a significant problem with this model: many influencers are paid to promote products. This means that their reviews and recommendations may not be entirely genuine. When an influencer receives payment to say positive things about a product, it becomes difficult for followers to know whether the praise is authentic or simply part of a commercial arrangement. Some influencers have even been caught digitally altering "before and after" photographs using Photoshop to make beauty products appear more effective than they really are. This kind of modification is misleading and can cause people to spend money on products that do not work as advertised.

A valuable debate topic for students is: "Social media influencers should not be paid to review a product." On one side, paid reviews allow influencers to earn a living from their content creation, and many are honest about sponsorships. On the other side, payment creates a conflict of interest that can compromise the honesty of the review. Exploring both sides of this debate helps students develop critical thinking skills.

The key to navigating the world of social media information is verification. Always go back to proper sources to verify what you read or see online. If an influencer claims a product works, look for independent reviews and scientific evidence. If a news story seems shocking or unbelievable, check whether reputable news organisations are reporting the same story. Learning how to spot fake news is an essential skill in the digital age. Look for signs such as sensational headlines, lack of credible sources, emotional manipulation, and inconsistencies in the story.

The United Nations marks the International Day of Families on May 15th each year. This is an example of a verifiable, factual event that can be confirmed through official UN sources. In contrast, many claims on social media cannot be verified so easily. On platforms like Instagram and Snapchat, altering images has become routine — cropping photos, adding text overlays, applying beauty filters, and inserting emojis are all common practices. While these modifications may seem harmless, they all have the potential to change the meaning of an image. A cropped photo might remove important context, a filter might present an unrealistic standard of beauty, and added text might give a misleading impression. Being aware of these modifications helps us consume visual content more critically and responsibly.`,
    reading1Time: 8,
    reading2Time: 8,
    kwlExplanation: KWL_EXPLANATION,
    discussionQuestions: [
      "How can adding a caption change the meaning of an image completely?",
      "Why is it a problem that many social media influencers are paid to promote products?",
      "What lessons can we learn from Ahmed's fake tweet about the Burj Khalifa elevator?",
      "How can you tell the difference between factual information and opinion on social media?",
      "What steps should you take to verify information before sharing it online?"
    ],
    keyFacts: [
      "Adding text or a caption to an image can change its meaning significantly.",
      "Images can be altered using editing software to portray a particular message or sell a product.",
      "Image modification can also be used illegally, such as for identity theft.",
      "Optical illusions are images we perceive differently than they really are — our brains can be tricked.",
      "Reformed images are photos taken from certain angles or with things added or removed to change meaning.",
      "Ahmed's fake tweet about being stuck in the Burj Khalifa elevator shows false information can spread rapidly and have serious consequences.",
      "Social media influencers are people with huge followings who can affect purchase decisions.",
      "One UAE influencer has over 5.4 million Instagram followers.",
      "Many influencers are paid to promote products, making it hard to know if reviews are genuine.",
      "Some influencers digitally alter before/after photos using Photoshop to promote beauty products.",
      "Always verify information by going back to proper, credible sources.",
      "The International Day of Families is marked by the UN on May 15th each year — a verifiable fact."
    ],
    visualType: "venn",
    visualData: {
      title: "Fact vs Opinion vs Modified Content",
      sets: [
        { label: "Fact", items: ["Verifiable data", "Can be proven true or false", "Based on evidence", "The UN International Day of Families is May 15th"] },
        { label: "Opinion", items: ["Personal viewpoint", "Cannot be proven true or false", "Based on feelings or beliefs", "This product is the best"] },
        { label: "Modified Content", items: ["Altered images", "Edited captions", "Photoshopped photos", "Filtered or cropped images"] }
      ],
      overlaps: [
        { sets: ["Fact", "Opinion"], items: ["Both appear on social media", "Both can influence decisions"] },
        { sets: ["Opinion", "Modified Content"], items: ["Both can be misleading", "Both reflect creator's intent"] },
        { sets: ["Fact", "Modified Content"], items: ["Facts can be presented through modified images", "Both require verification"] },
        { sets: ["Fact", "Opinion", "Modified Content"], items: ["All can appear credible at first glance", "All require critical thinking to evaluate"] }
      ]
    },
    quizQuestions: [
      {
        id: "G7T3U7L4Q1",
        question: "How can adding a caption change the meaning of an image?",
        options: ["It cannot change the meaning at all", "A caption can completely change the story an image tells by providing different context or interpretation", "Captions only make images look prettier", "Captions are only used for advertising"],
        correctAnswer: 1,
        explanation: "A caption provides context and interpretation for an image, and changing the caption can completely change the story or message that the image conveys to the viewer."
      },
      {
        id: "G7T3U7L4Q2",
        question: "What is an optical illusion?",
        options: ["A type of social media filter", "A kind of computer virus", "An image that we perceive differently than it really is because our brains are tricked", "A method for editing photographs"],
        correctAnswer: 2,
        explanation: "An optical illusion is an image that we perceive differently than it really is — our eyes send information to our brains that tricks us into seeing something that is not actually there."
      },
      {
        id: "G7T3U7L4Q3",
        question: "Why is it a concern that many social media influencers are paid to promote products?",
        options: ["Because influencers should not earn money", "Because it creates a conflict of interest that may compromise the honesty of their reviews", "Because paid promotions are illegal in the UAE", "Because all influencers are dishonest"],
        correctAnswer: 1,
        explanation: "When influencers are paid to promote products, it creates a conflict of interest — they may give positive reviews because they are being paid rather than because the product genuinely deserves praise."
      },
      {
        id: "G7T3U7L4Q4",
        question: "What lesson does Ahmed's story about the fake Burj Khalifa elevator tweet teach us?",
        options: ["That social media is not entertaining", "That the Burj Khalifa has unsafe elevators", "That false information can spread rapidly online and have serious real-world consequences, even as a joke", "That you should never visit the Burj Khalifa"],
        correctAnswer: 2,
        explanation: "Ahmed's fake tweet was meant as a joke, but it spread rapidly and caused real concern, even alerting authorities. This shows that false information on social media can have serious consequences."
      },
      {
        id: "G7T3U7L4Q5",
        question: "What should you do to verify information you find on social media?",
        options: ["Share it immediately if it seems interesting", "Only trust information from influencers", "Always go back to proper, credible sources to verify the information", "Assume all information is true if it has many likes"],
        correctAnswer: 2,
        explanation: "The best way to verify information is to go back to proper, credible sources. Check whether reputable organisations are reporting the same information and look for evidence that supports the claim."
      }
    ],
    interactiveStrategies: [
      {
        strategy: "Caption Challenge",
        description: "Students are shown the same image with different captions and must analyse how each caption changes the meaning, then create their own captions for images provided by the teacher.",
        duration: 20,
        instructions: "1. The teacher displays an image on the board — for example, a person standing outside a large building. 2. Show three different captions for the same image, each telling a completely different story (e.g., 'Tourist admires architecture', 'Witness at crime scene', 'Protester demands change'). 3. Discuss how each caption changes the viewer's interpretation of the image. 4. In pairs, students are given a new image and must write three different captions that tell three different stories. 5. Pairs share their captions with the class, and the group discusses how easily meaning can be manipulated through text."
      },
      {
        strategy: "Fact vs Opinion Sorting",
        description: "Students sort a collection of statements into factual, opinion, and modified content categories, then discuss the characteristics of each type and how to identify them.",
        duration: 15,
        instructions: "1. The teacher provides a set of 15 statements on cards — some factual (e.g., 'The UAE was founded in 1971'), some opinions (e.g., 'Instagram is the best social media platform'), and some modified content (e.g., 'Before and after diet photos that were Photoshopped'). 2. In small groups, students sort the statements into three categories: Fact, Opinion, and Modified Content. 3. Groups compare their sorting and discuss any disagreements. 4. For each category, groups list the key characteristics that help them identify that type of content. 5. Each group presents their key characteristics to the class, and the teacher creates a master list of identification strategies for each type."
      }
    ]
  },

  // ─── Lesson 5: Manipulation of Individuals and Behaviour ───
  {
    lessonId: "G7_T3_Unit 7_l5",
    keyVocabulary: ["manipulation", "emotional response", "rational response", "unmonitored", "censorship"],
    reading1Title: "Emotional and Rational Responses Online",
    reading1Content: `When people post on social media, they are often seeking reactions from others. These reactions can be emotional — driven by feelings such as anger, joy, sadness, or fear — or they can be rational — driven by logical thinking, analysis, and careful consideration of the facts. Understanding the difference between emotional and rational responses is essential for navigating the online world responsibly, because these two types of reactions can lead to very different outcomes. An emotional response might lead someone to share a post immediately without checking whether it is true, while a rational response would involve pausing to verify the information first.

These reactions, especially emotional ones, can quickly lead to serious online conflicts. When people respond emotionally to a post, they may write things they later regret, attack others personally, or spread misinformation without realising it. A single provocative post can trigger a chain reaction of angry comments, heated arguments, and personal attacks that escalate far beyond the original topic. This is why it is so important to recognise when you are having an emotional response and to take a moment to engage your rational thinking before reacting.

Consider this debate activity: imagine you are asked to passionately promote an assigned sport. You must argue why it is the best sport, why it is good for the community, why it benefits young people, how it promotes healthy lifestyles, and how it supports the local economy. When you argue passionately for something, you naturally become emotionally invested in your position. You might raise your voice, use strong language, and dismiss opposing viewpoints. Now observe how quickly a rational discussion about sports can become a passionate conflict where people feel personally attacked and defend their positions aggressively. The same dynamic plays out every day on social media, where discussions about politics, religion, social issues, and even celebrity gossip can rapidly escalate into hostile conflicts.

Reaching out to people online involves understanding that different platforms target different demographics. LinkedIn is designed for business professionals who network, share industry insights, and seek career opportunities. Facebook attracts a mixed audience spanning different age groups and interests. Instagram is primarily a social platform focused on visual content, especially popular among younger users. Each platform has its own culture and norms, and understanding these differences can help you communicate more effectively and avoid misunderstandings.

Some global news stories reach everyone regardless of which platform they use. Major events — natural disasters, political upheavals, sporting triumphs — transcend platform boundaries. The way news is presented, however, can capture interest and elicit emotional and rational responses in different ways. A headline designed to provoke outrage will generate more emotional reactions, while a balanced, factual report will encourage more rational engagement. Being aware of how presentation influences our responses helps us become more discerning consumers of online content.`,
    reading2Title: "The Social Media Mask: Censorship, Rationality, and Empathy",
    reading2Content: `Monitoring online posts is a complex issue that varies significantly around the world. Different countries have different standards for publishing images and content. Some nations operate strict censorship, controlling what can and cannot be posted online, while others take a more hands-off approach. The debate about online censorship is ongoing — some argue that regulation is necessary to protect people from harmful content, while others believe that censorship infringes on freedom of expression. In the UAE, there are clear guidelines about what is acceptable online, reflecting the country's cultural values and commitment to protecting its community.

Powerful images of war, conflict, and humanitarian crises can sway public opinion dramatically. These images evoke strong emotional responses — horror, sadness, anger, and compassion. The argument for publishing raw, unfiltered images is that they are necessary to help people understand the reality of situations that might otherwise seem distant and abstract. When people see the true impact of war or disaster, they are more likely to care and to act. However, on social media, which is relatively unmonitored compared to traditional news outlets, there is less censorship, and grisly or disturbing photos can spread quickly and widely, sometimes without adequate warning or context.

When looking at images and text online, it can be hard to engage the rational side of your brain. Emotional content is designed to provoke an immediate reaction, and that reaction often bypasses logical thinking. This is why it is so important to make a conscious effort to think rationally, analyse information carefully, and fact-check before responding or sharing. Ask yourself critical questions: What was the publisher's agenda? Are they trying to inform me, persuade me, or manipulate me? Could the image be fake or taken out of context? What evidence supports the claims being made? These questions help activate rational thinking and protect you from being manipulated by emotional content.

Social media is also a breeding ground for misunderstandings. In face-to-face conversations, we can see facial expressions, hear tone of voice, and observe body language — all of which help us understand the true meaning behind someone's words. Text messages and online posts lack these crucial cues, making it easy to misinterpret what someone is saying and to respond inappropriately. It is all too easy to forget that there are real people with real feelings on the other side of the screen. This is why empathy remains crucial in all online interactions.

The concept of the "social media mask" refers to the fact that people often behave differently online than they do in person. Behind the safety of a screen, people may say things they would never say face to face, act more aggressively, or present a version of themselves that is not authentic. This mask can lead to harmful behaviour — cyberbullying, harassment, and the spread of hurtful content — because the normal social restraints that govern face-to-face interaction are diminished online. Recognising that the social media mask exists, and making a conscious effort to treat people online with the same respect and empathy you would show in person, is one of the most important steps toward creating a safer and more positive digital community for everyone.`,
    reading1Time: 8,
    reading2Time: 8,
    kwlExplanation: KWL_EXPLANATION,
    discussionQuestions: [
      "What is the difference between an emotional response and a rational response online?",
      "How can a rational discussion quickly turn into an online conflict?",
      "Why do people behave differently online than they do in person (the 'social media mask')?",
      "What questions should you ask yourself before sharing or responding to emotional content online?",
      "How does the lack of facial expressions and tone in text messages contribute to online misunderstandings?"
    ],
    keyFacts: [
      "People seek emotional or rational reactions when they post on social media.",
      "Emotional responses can lead to serious online conflicts, while rational responses involve careful thinking.",
      "A single provocative post can trigger a chain reaction of angry comments and heated arguments.",
      "Different social media platforms target different demographics — LinkedIn for business, Facebook for mixed audiences, Instagram for social/visual content.",
      "The way news is presented can capture interest and elicit emotional or rational responses differently.",
      "Different countries have different standards for publishing images and content online.",
      "Some countries operate strict censorship, while others take a more hands-off approach.",
      "Powerful images of war can sway public opinion by evoking strong emotional responses.",
      "On relatively unmonitored social media, grisly photos can spread quickly without adequate warning.",
      "It is important to think rationally, analyse information, and fact-check before responding or sharing online.",
      "Text messages lack facial expressions and tone, making misunderstandings common online.",
      "The 'social media mask' means people often behave differently online than they do in person."
    ],
    visualType: "diagram",
    visualData: {
      title: "Emotional vs Rational Responses",
      center: "Online Responses",
      branches: [
        {
          label: "Emotional Response",
          examples: ["Sharing without verifying", "Angry comments", "Reacting to provocative headlines", "Feeling outraged or fearful"],
          description: "Driven by feelings — fast, automatic, can lead to conflicts"
        },
        {
          label: "Rational Response",
          examples: ["Checking sources before sharing", "Analysing claims logically", "Asking critical questions", "Considering different viewpoints"],
          description: "Driven by logic — deliberate, thoughtful, more likely to lead to understanding"
        },
        {
          label: "Manipulation Tactics",
          examples: ["Provocative headlines", "Disturbing images without context", "Emotional language", "One-sided presentation"],
          description: "Ways content is designed to trigger emotional over rational responses"
        },
        {
          label: "Protective Strategies",
          examples: ["Pause before reacting", "Fact-check claims", "Consider the publisher's agenda", "Ask if the image could be fake"],
          description: "Steps to engage rational thinking and avoid being manipulated"
        }
      ]
    },
    quizQuestions: [
      {
        id: "G7T3U7L5Q1",
        question: "What is the key difference between an emotional response and a rational response online?",
        options: ["Emotional responses are always wrong and rational responses are always right", "Emotional responses are driven by feelings and can be impulsive, while rational responses involve logical thinking and careful consideration", "Rational responses are only for educated people", "There is no difference between the two"],
        correctAnswer: 1,
        explanation: "Emotional responses are driven by feelings such as anger, joy, or fear, and can lead to impulsive actions. Rational responses involve logical thinking, analysis, and careful consideration of the facts before acting."
      },
      {
        id: "G7T3U7L5Q2",
        question: "What is the 'social media mask'?",
        options: ["A filter you apply to your profile picture", "A privacy setting on social media", "The way people behave differently online than they do in person, often more aggressively", "A type of online identity theft"],
        correctAnswer: 2,
        explanation: "The social media mask refers to the phenomenon where people behave differently online than they do in person. Behind the safety of a screen, people may say things they would never say face to face or act more aggressively."
      },
      {
        id: "G7T3U7L5Q3",
        question: "Why do text messages and online posts often lead to misunderstandings?",
        options: ["Because people read too slowly", "Because they lack facial expressions, tone of voice, and body language that help convey meaning", "Because everyone lies online", "Because text messages are always short"],
        correctAnswer: 1,
        explanation: "In face-to-face conversations, we rely on facial expressions, tone of voice, and body language to understand meaning. Text messages and online posts lack these cues, making misinterpretation common."
      },
      {
        id: "G7T3U7L5Q4",
        question: "What questions should you ask yourself before sharing emotional content online?",
        options: ["Will this get me more followers?", "Is this content entertaining enough?", "What was the publisher's agenda, could the image be fake, and what evidence supports the claims?", "How many likes will this get?"],
        correctAnswer: 2,
        explanation: "Critical questions like 'What was the publisher's agenda?', 'Could the image be fake?', and 'What evidence supports the claims?' help activate rational thinking and protect you from being manipulated by emotional content."
      },
      {
        id: "G7T3U7L5Q5",
        question: "Why is it argued that raw, unfiltered images of conflict should be published?",
        options: ["Because they are entertaining", "Because they are necessary to help people understand the reality of situations that might otherwise seem distant", "Because all censorship is wrong", "Because social media requires dramatic content"],
        correctAnswer: 1,
        explanation: "The argument for publishing raw images is that they help people understand the true reality of conflicts and disasters, making them more likely to care and to take action, rather than seeing these events as distant abstractions."
      }
    ],
    interactiveStrategies: [
      {
        strategy: "Sport Debate Activity",
        description: "Students are assigned different sports and must passionately argue why theirs is the best, then reflect on how quickly rational discussion becomes emotional conflict — mirroring what happens online.",
        duration: 20,
        instructions: "1. Divide the class into groups of four or five, and assign each group a different sport (e.g., football, swimming, basketball, horse riding, cricket). 2. Give groups five minutes to prepare their arguments: why their sport is the best, how it benefits the community, how it promotes healthy lifestyles, and how it supports the local economy. 3. Each group presents their arguments to the class with passion and conviction. 4. After all presentations, open the floor for debate — groups can challenge each other's claims. 5. After ten minutes of debate, pause and reflect as a class: How did the discussion change from rational arguments to emotional conflict? How is this similar to what happens on social media? What strategies could keep the discussion rational?"
      },
      {
        strategy: "Emotional vs Rational Response Sort",
        description: "Students analyse a series of online scenarios and identify whether their response would be emotional or rational, then practise converting emotional reactions into rational ones.",
        duration: 15,
        instructions: "1. The teacher presents eight online scenarios — for example: reading a headline about a local crisis, seeing a before/after beauty product photo, receiving a message that seems rude, finding a post that contradicts your beliefs, seeing a shocking image of a disaster, reading a strongly worded political opinion, discovering a friend request from a stranger, and viewing an influencer's product review. 2. For each scenario, students write down their initial (likely emotional) reaction. 3. Next, students write a rational alternative response — what would they think if they paused and considered the facts? 4. In pairs, students compare their emotional and rational responses and discuss the differences. 5. Create a class list of strategies for switching from emotional to rational responses (e.g., pause and count to ten, check the source, ask questions, consider alternative explanations)."
      }
    ]
  }
];

export function getG7T3Unit7LessonContent(lessonId: string): LessonContent | null {
  return g7t3Unit7.find(l => l.lessonId === lessonId) || null;
}
