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

export const g9t1Unit2: LessonContent[] = [
  // ─── Lesson 1: Realising The Value of Money ───
  {
    lessonId: "G9_T1_Unit 2_l1",
    keyVocabulary: ["currency", "inflation", "purchasing power", "budgeting"],
    reading1Title: "The Concept and History of Money",
    reading1Content: `Money is one of the most important inventions in human history. Before money existed, people relied on a system called barter, in which goods and services were exchanged directly for other goods and services. If a farmer wanted shoes, they had to find a shoemaker who wanted what the farmer produced — a requirement known as the "double coincidence of wants." This system was highly inefficient because it depended on both parties wanting exactly what the other had to offer. Imagine trying to trade a sack of wheat for a pair of shoes when the shoemaker does not need wheat but wants salt instead. The barter system made trade slow, difficult, and unreliable, limiting the ability of communities to grow and prosper. As societies developed and trade expanded, the need for a more efficient system became undeniable.

Over thousands of years, different civilizations experimented with various forms of money. Ancient Mesopotamians used barley as a medium of exchange around 3000 BCE, while the Lydians in present-day Turkey are credited with minting the first coins from electrum (a natural alloy of gold and silver) around 600 BCE. Paper money first appeared in China during the Tang Dynasty (7th century CE) and gradually spread across the world through trade routes. Each innovation in money solved a specific problem — coins were portable and durable, while paper money was lighter and easier to carry in large quantities. These developments transformed how societies conducted business and laid the groundwork for the modern financial systems we use today.

Money serves three fundamental functions in any economy. First, it is a medium of exchange — a universally accepted means of payment that eliminates the need for barter. When you buy a sandwich with dirhams, both you and the shopkeeper agree on the value of the money, making the transaction smooth and efficient. Second, money is a unit of account — it provides a common measure of value that allows us to compare the worth of different goods and services. Without a unit of account, it would be impossible to determine whether a car is worth more than a hundred bicycles or a thousand loaves of bread. Third, money is a store of value — it allows people to save purchasing power for future use. However, this third function depends on money maintaining its value over time, which is not always guaranteed.

The United Arab Emirates adopted the UAE dirham (AED) as its official currency on 19 May 1973, replacing the Qatar-Dubai riyal and the Bahraini dinar that had previously circulated in different emirates. Before the UAE was formed in 1971, the Trucial States (as they were then known) used a variety of currencies, reflecting their diverse trade relationships and colonial histories. The introduction of a unified national currency was a significant milestone in the young nation's development, symbolising economic independence and national identity. The dirham is subdivided into 100 fils and is issued by the Central Bank of the UAE. Today, the UAE dirham is pegged to the United States dollar at a rate of approximately 3.6725 AED to 1 USD, providing stability for international trade and investment.

The value of money is not constant — it changes over time due to a phenomenon called inflation. Inflation is the general increase in the prices of goods and services over time, which means that each unit of currency buys fewer goods and services than it did before. When inflation is high, the purchasing power of money falls, and consumers find that their money does not go as far as it once did. For example, a dirham that could buy a reasonable meal twenty years ago might only cover a small snack today. Understanding inflation is crucial for making informed financial decisions, from saving and investing to negotiating salaries and planning for retirement. In the UAE, the Central Bank monitors inflation carefully and implements policies to maintain price stability, protecting the purchasing power of the dirham and ensuring economic confidence. Recognising that money's true value lies not in the number printed on a note but in what it can actually buy is one of the most important financial lessons a person can learn.`,
    reading2Title: "Budgeting and Financial Planning",
    reading2Content: `Budgeting is the process of creating a plan for how to spend and save your money. Think of a budget as a roadmap for your finances — without one, you might wander aimlessly and end up somewhere you never intended to be. A well-crafted budget helps you understand where your money comes from, where it goes, and how you can make the most of every dirham. Whether you are a student managing an allowance or an adult handling a salary, the principles of budgeting remain the same: track your income, categorise your expenses, and ensure that your spending aligns with your priorities and goals. Budgeting is not about restricting your freedom; it is about making conscious, deliberate choices that give you greater control over your financial future.

One of the most widely recommended budgeting frameworks is the 50/30/20 rule. According to this guideline, you should allocate approximately 50 percent of your income to needs — essential expenses such as housing, food, utilities, transportation, and healthcare. About 30 percent should go to wants — non-essential expenses that enhance your quality of life, such as entertainment, dining out, hobbies, and travel. The remaining 20 percent should be dedicated to savings and debt repayment — building an emergency fund, contributing to long-term savings goals, and paying off any outstanding debts. While this rule provides a helpful starting point, it is important to remember that individual circumstances vary, and the percentages may need to be adjusted based on your specific situation. A student, for example, might have different financial obligations than a working professional, but the underlying principle of balancing needs, wants, and savings remains universally applicable.

Distinguishing between needs and wants is a critical skill in effective budgeting. Needs are the things you must have to survive and function — food, shelter, clothing, education, and healthcare. Wants are things that would be nice to have but are not strictly necessary — the latest smartphone, designer clothing, or a premium meal at a fancy restaurant. The line between needs and wants can sometimes be blurry: you need food, but you do not need an expensive meal; you need clothing, but you do not need the most costly brand. Learning to separate needs from wants helps you prioritise your spending and avoid impulsive purchases that can derail your budget. This skill becomes especially important when resources are limited and every dirham counts.

Islam provides profound guidance on financial responsibility and the proper attitude toward wealth. In the Islamic worldview, wealth is considered an amanah — a trust given by Allah. Humans are not the absolute owners of their wealth; rather, they are custodards who are responsible for using it wisely and justly. The Quran warns against israf, which means wasteful spending or extravagance. Allah says: "O children of Adam, take your adornment at every masjid, and eat and drink, but be not excessive. Indeed, He likes not those who commit excess" (Quran 7:31). This verse establishes the principle of moderation — Muslims are encouraged to enjoy the lawful blessings of this world but are warned against going to extremes, whether in spending or in austerity. The Prophet Muhammad (peace be upon him) embodied this balance, living simply yet generously, never wasting resources, and always encouraging his followers to be mindful of how they used what Allah had provided.

The UAE has demonstrated a strong commitment to financial literacy as part of its national development strategy. Under the guidance of its leadership, the country has launched numerous initiatives to promote financial awareness among citizens and residents, particularly young people. The UAE's economic vision emphasises the transition to a knowledge-based economy, and financial literacy is recognised as a foundational skill for achieving this goal. Programmes in schools, community workshops, and digital platforms all contribute to building a financially aware and responsible population. For students, developing budgeting skills early in life provides a foundation for sound financial decision-making in adulthood. Creating a simple budget — listing your sources of income (allowance, gifts, part-time work), categorising your expenses (school supplies, snacks, savings), and tracking your spending over a month — can reveal surprising patterns and help you make adjustments that bring your finances into alignment with your goals. The habit of budgeting, once established, becomes a lifelong tool for financial wellbeing and peace of mind.`,
    reading1Time: 10,
    reading2Time: 10,
    kwlExplanation: KWL_EXPLANATION,
    discussionQuestions: [
      "Why was the barter system inefficient, and how did the invention of money solve its main problems?",
      "What are the three fundamental functions of money, and why is each important?",
      "How does inflation affect the purchasing power of money, and why is it important to understand this concept?",
      "What is the 50/30/20 rule, and how can it help you manage your finances responsibly?",
      "How does the Islamic concept of wealth as an amanah (trust) change the way a person thinks about spending and saving?"
    ],
    keyFacts: [
      "Before money existed, people used the barter system, which required a double coincidence of wants.",
      "The Lydians minted the first coins from electrum around 600 BCE in present-day Turkey.",
      "Paper money first appeared in China during the Tang Dynasty in the 7th century CE.",
      "Money serves three fundamental functions: medium of exchange, unit of account, and store of value.",
      "The UAE dirham was adopted on 19 May 1973, replacing the Qatar-Dubai riyal and Bahraini dinar.",
      "The UAE dirham is pegged to the US dollar at approximately 3.6725 AED to 1 USD.",
      "Inflation is the general increase in prices over time, which reduces the purchasing power of money.",
      "The 50/30/20 rule suggests allocating 50% of income to needs, 30% to wants, and 20% to savings and debt repayment.",
      "Needs are essential expenses (food, shelter, healthcare), while wants are non-essential (entertainment, luxury items).",
      "In Islam, wealth is considered an amanah (trust) from Allah, not absolute personal property.",
      "The Quran warns against israf (wasteful spending) and encourages moderation in all financial matters.",
      "The UAE promotes financial literacy as part of its vision for a knowledge-based economy."
    ],
    visualType: "chart",
    visualData: {
      title: "The 50/30/20 Budgeting Rule",
      chartType: "bar",
      categories: [
        { label: "Needs (50%)", value: 50, color: "#10b981", items: ["Housing", "Food", "Utilities", "Transportation", "Healthcare"] },
        { label: "Wants (30%)", value: 30, color: "#f59e0b", items: ["Entertainment", "Dining out", "Hobbies", "Travel", "Shopping"] },
        { label: "Savings (20%)", value: 20, color: "#6366f1", items: ["Emergency fund", "Long-term savings", "Debt repayment", "Investments", "Charity"] }
      ]
    },
    quizQuestions: [
      {
        id: "G9T1U2L1Q1",
        question: "What was the main problem with the barter system?",
        options: ["It used too much gold", "It required a double coincidence of wants", "It was illegal in most countries", "It could only be used within one city"],
        correctAnswer: 1,
        explanation: "The barter system required a double coincidence of wants — both parties had to want exactly what the other offered. This made trade highly inefficient and limited economic growth."
      },
      {
        id: "G9T1U2L1Q2",
        question: "When was the UAE dirham adopted as the official currency?",
        options: ["1971", "1973", "1980", "1965"],
        correctAnswer: 1,
        explanation: "The UAE dirham was adopted on 19 May 1973, replacing the Qatar-Dubai riyal and the Bahraini dinar that had previously circulated in different emirates."
      },
      {
        id: "G9T1U2L1Q3",
        question: "What are the three fundamental functions of money?",
        options: ["Printing, distributing, saving", "Medium of exchange, unit of account, store of value", "Buying, selling, trading", "Earning, spending, borrowing"],
        correctAnswer: 1,
        explanation: "Money serves as a medium of exchange (universally accepted for payment), a unit of account (common measure of value), and a store of value (can be saved for future use)."
      },
      {
        id: "G9T1U2L1Q4",
        question: "According to the 50/30/20 rule, what percentage of income should go to savings and debt repayment?",
        options: ["50%", "30%", "20%", "10%"],
        correctAnswer: 2,
        explanation: "The 50/30/20 rule allocates 50% to needs, 30% to wants, and 20% to savings and debt repayment, providing a balanced framework for managing finances."
      },
      {
        id: "G9T1U2L1Q5",
        question: "What does the Islamic concept of 'amanah' mean in relation to wealth?",
        options: ["Wealth belongs only to the rich", "Wealth is a trust from Allah that must be used wisely and justly", "Wealth should be given away entirely", "Wealth is unimportant in Islam"],
        correctAnswer: 1,
        explanation: "In Islam, wealth is considered an amanah (trust) from Allah. Humans are custodians, not absolute owners, and are responsible for using wealth wisely and justly, avoiding waste (israf)."
      }
    ],
    interactiveStrategies: [
      {
        strategy: "Create a Personal Budget",
        description: "Students create a monthly personal budget using the 50/30/20 rule, categorising hypothetical income into needs, wants, and savings, and reflecting on their spending priorities.",
        duration: 25,
        instructions: "1. Imagine you receive a monthly allowance of AED 1,000. 2. Using the 50/30/20 rule, calculate how much you would allocate to needs (AED 500), wants (AED 300), and savings (AED 200). 3. Create a detailed budget table listing specific items under each category — for example, under 'Needs' you might list school supplies, transportation, and essential meals. 4. Review your budget and consider: Are there items you classified as 'needs' that might actually be 'wants'? 5. Write a short reflection (5-8 sentences) on what surprised you about this exercise and how you might adjust your real spending habits based on what you learned."
      },
      {
        strategy: "Compare Prices Over Time — Inflation Simulation",
        description: "Students compare the prices of common goods from different time periods to understand how inflation erodes purchasing power over time.",
        duration: 20,
        instructions: "1. Your teacher will provide a list of 10 common items (e.g., a loaf of bread, a litre of milk, a school notebook, a cinema ticket, a mobile phone). 2. For each item, record what you think it costs today in AED. 3. Your teacher will then reveal the prices of these same items 10 years ago and 20 years ago. 4. Calculate the percentage increase in price for each item and identify which items increased the most. 5. Discuss as a class: Which items surprised you the most? How does this activity help you understand inflation and the importance of planning for the future? Write 3-4 sentences summarising what you learned about how inflation affects everyday life."
      }
    ]
  },

  // ─── Lesson 2: The Dangers of Wealth and Greed ───
  {
    lessonId: "G9_T1_Unit 2_l2",
    keyVocabulary: ["greed", "materialism", "conspicuous consumption", "debt"],
    reading1Title: "The Psychological and Social Dangers of Greed",
    reading1Content: `Greed — the excessive desire for more than one needs — has been recognised across cultures, religions, and centuries as one of the most destructive forces in human society. While ambition and the drive to improve one's circumstances can be positive motivations, greed crosses a dangerous line: it transforms the desire for wellbeing into an insatiable hunger that can never be satisfied. Psychologists have found that people driven primarily by the accumulation of wealth often experience higher levels of anxiety, stress, and dissatisfaction, not less. The relentless pursuit of more creates a cycle in which each achievement merely raises the threshold for what is considered enough, leaving the individual perpetually unfulfilled. This is sometimes called the "hedonic treadmill" — the tendency of humans to quickly return to a baseline level of happiness despite positive or negative events, meaning that no amount of wealth can produce lasting satisfaction when greed drives the pursuit.

Throughout history, greed has undermined entire civilisations and caused immense suffering. The Roman Empire's decline was partly fuelled by the greed of its ruling class, who extracted enormous wealth from conquered territories while neglecting the welfare of ordinary citizens. During the Age of Colonialism, European powers greedily exploited the resources and peoples of Africa, Asia, and the Americas, leaving legacies of poverty and injustice that persist to this day. The transatlantic slave trade — driven entirely by the greed for cheap labour and maximum profit — stands as one of the most horrifying chapters in human history. These examples demonstrate that greed is not merely a personal failing; when it infects the leadership and institutions of a society, it can cause widespread devastation that affects millions of people.

The 2008 global financial crisis serves as a powerful modern case study in the destructive consequences of greed. In the years leading up to the crisis, banks and financial institutions in the United States and Europe pursued ever-riskier lending practices in the quest for higher profits. Mortgage lenders offered loans to borrowers who could not afford them, packaged these risky loans into complex financial products, and sold them to investors who did not fully understand the risks. Credit rating agencies gave their highest ratings to securities that were fundamentally unsound, and regulators failed to intervene effectively. When the housing bubble burst, the entire global financial system was brought to the brink of collapse. Millions of people lost their homes, their jobs, and their savings. The crisis demonstrated that when greed is allowed to dominate decision-making in the financial sector, the consequences extend far beyond the greedy individuals themselves — they ripple through the entire global economy, devastating the lives of ordinary people who had no part in creating the problem.

Materialism — the belief that material possessions are the primary source of happiness and status — is closely linked to greed and has been shown by research to have negative effects on wellbeing and social relationships. Studies have consistently found that people who place a high value on wealth, status, and image tend to experience lower life satisfaction, poorer mental health, and weaker social connections than those who prioritise relationships, personal growth, and community engagement. Materialism encourages conspicuous consumption — spending money on luxury goods and services primarily to display wealth and status rather than for genuine enjoyment or need. This behaviour creates a culture of comparison and competition that erodes trust and social cohesion, as people judge themselves and others based on possessions rather than character or contribution.

Islam issues strong warnings against greed (hirs) and the hoarding of wealth. The Quran states: "And those who hoard gold and silver and spend it not in the way of Allah — give them tidings of a painful punishment" (Quran 9:34). This verse makes clear that accumulating wealth without using it for good is not merely a personal shortcoming but a serious moral failing that carries consequences. The Prophet Muhammad (peace be upon him) said: "Beware of greed, for it destroyed those before you: it commanded them to be miserly and they were miserly; it commanded them to cut ties and they cut ties; it commanded them to be wicked and they were wicked." This hadith illustrates how greed progressively corrupts a person's character, leading them away from generosity, connection, and righteousness. The Islamic teaching is clear: wealth itself is not evil, but the love of wealth — when it becomes greed — is a spiritual disease that must be actively resisted through charity, gratitude, and contentment with what Allah has provided.`,
    reading2Title: "Debt and Its Consequences",
    reading2Content: `Debt is an obligation to repay borrowed money, usually with interest, within a specified period of time. While debt can be a useful financial tool when used responsibly — for example, a mortgage that allows a family to purchase a home, or a student loan that enables someone to gain an education — it can also become a devastating trap that destroys lives and communities. Understanding the difference between productive and destructive debt is essential for making wise financial decisions. Productive debt is borrowing that leads to increased value or income over time, such as investing in education or starting a business. Destructive debt, on the other hand, is borrowing to finance consumption or lifestyle choices that do not generate future value, such as using credit cards to fund luxury purchases or holidays that one cannot afford. The key distinction lies in whether the borrowed money creates a return that exceeds the cost of borrowing.

Compound interest is one of the most powerful forces in finance, and it can work both for and against you. When you save or invest, compound interest helps your money grow over time, as you earn interest on your interest. However, when you borrow, compound interest works against you — the amount you owe grows over time as interest is charged on the accumulated interest. For example, if you borrow AED 10,000 at an annual interest rate of 20% and make only the minimum payments, it could take decades to repay the debt, and you might end up paying several times the original amount in interest alone. This is how many people fall into a debt trap: they borrow more than they can repay, the interest compounds, and they find themselves owing far more than they originally borrowed, creating a cycle that is extremely difficult to escape.

The Islamic prohibition of riba (usury or interest) is one of the clearest and most emphatic rulings in the Quran. Allah says: "Those who consume interest cannot stand except as one stands who is being beaten by Satan into insanity. That is because they say, 'Trade is like interest.' But Allah has permitted trade and has forbidden interest" (Quran 2:275). This prohibition is not arbitrary — it reflects a deep understanding of the social and economic harm caused by interest-based lending. Riba allows the wealthy to profit from the financial difficulties of others without sharing in any risk, creating an exploitative relationship that concentrates wealth in the hands of the few and deepens poverty for the many. Islamic finance offers an alternative based on the principles of risk-sharing, asset-backing, and ethical investment, where both the lender and the borrower share in the profits and losses of a venture. This model promotes fairness, discourages speculation, and ensures that financial transactions serve a genuine economic purpose rather than merely generating profit from money itself.

The UAE has implemented robust laws and regulations to promote financial responsibility and protect consumers from predatory lending practices. The Central Bank of the UAE sets limits on the amount of personal debt individuals can take on relative to their income, requires banks to provide clear and transparent information about loan terms and conditions, and has established frameworks for dealing with financial difficulties. The UAE's approach recognises that financial stability is essential for both individual wellbeing and national prosperity. Citizens and residents are encouraged to live within their means, avoid unnecessary debt, and seek professional financial advice when needed. Educational initiatives in schools and communities help young people develop the financial literacy skills they need to make responsible borrowing decisions throughout their lives.

The Prophet Muhammad (peace be upon him) provided comprehensive guidance on financial responsibility that remains relevant today. He said: "The soul of the deceased believer remains pending on account of the debt till it is paid off." This hadith highlights the spiritual seriousness of debt — it is not merely a financial obligation but a moral and spiritual one that affects a person even after death. The Prophet also encouraged Muslims to be cautious about borrowing and to repay debts promptly and fully. He himself was known for his generosity in lending and his diligence in repaying, setting an example of financial integrity. At the same time, Islam encourages creditors to be lenient with debtors who are facing genuine hardship. The Quran states: "And if the debtor is in hardship, then let there be postponement until a time of ease. And if you give up the debt as charity, it is better for you, if you only knew" (Quran 2:280). This balanced approach — emphasising both the borrower's responsibility to repay and the lender's duty to be compassionate — provides a framework for financial relationships that is just, merciful, and socially responsible. Understanding these principles helps students recognise that financial decisions are never purely economic; they always carry moral and social dimensions that must be considered.`,
    reading1Time: 10,
    reading2Time: 10,
    kwlExplanation: KWL_EXPLANATION,
    discussionQuestions: [
      "How does the 'hedonic treadmill' explain why greed can never lead to lasting satisfaction?",
      "What were the main causes of the 2008 financial crisis, and how did greed contribute to it?",
      "How does materialism affect social relationships and community wellbeing?",
      "Why does Islam prohibit riba (usury), and what alternative does Islamic finance offer?",
      "How can understanding the difference between productive and destructive debt help you make better financial decisions?"
    ],
    keyFacts: [
      "Greed — the excessive desire for more than one needs — is linked to higher anxiety, stress, and dissatisfaction.",
      "The 'hedonic treadmill' describes how people quickly return to a baseline level of happiness despite positive events.",
      "Historical examples of greed's destructiveness include the Roman Empire's decline, colonialism, and the transatlantic slave trade.",
      "The 2008 financial crisis was caused by greedy lending practices, risky financial products, and regulatory failures.",
      "Materialism has been shown by research to reduce life satisfaction, mental health, and social connection.",
      "Conspicuous consumption is spending on luxury goods primarily to display wealth and status.",
      "Islam strongly warns against hirs (greed) and the hoarding of wealth (Quran 9:34).",
      "Productive debt creates future value (education, business), while destructive debt finances consumption without return.",
      "Compound interest can work for you (savings) or against you (borrowing), growing debt exponentially over time.",
      "Riba (usury/interest) is explicitly prohibited in the Quran (2:275) as it exploits borrowers and concentrates wealth.",
      "Islamic finance is based on risk-sharing, asset-backing, and ethical investment rather than interest-based lending.",
      "The UAE Central Bank sets limits on personal debt and requires transparent information about loan terms."
    ],
    visualType: "diagram",
    visualData: {
      title: "The Cycle of Debt",
      center: "Debt Cycle",
      flow: [
        { step: 1, label: "Borrowing", description: "Taking a loan to finance consumption beyond means", example: "Credit card purchase of luxury items" },
        { step: 2, label: "Interest Accrues", description: "Compound interest increases the total amount owed", example: "20% annual interest on unpaid balance" },
        { step: 3, label: "Minimum Payments", description: "Borrower pays only the minimum, barely covering interest", example: "Monthly payment covers interest but not principal" },
        { step: 4, label: "More Borrowing", description: "Borrower needs more money as income goes to debt payments", example: "Taking a second loan to cover living expenses" },
        { step: 5, label: "Debt Trap", description: "Total debt grows beyond the borrower's ability to repay", example: "Total owed exceeds annual income" }
      ],
      cycleBack: "The cycle repeats as the borrower falls deeper into debt, making it increasingly difficult to escape."
    },
    quizQuestions: [
      {
        id: "G9T1U2L2Q1",
        question: "What is the 'hedonic treadmill'?",
        options: ["A type of exercise equipment", "The tendency to return to a baseline level of happiness despite positive events, meaning more wealth does not bring lasting satisfaction", "A method for increasing personal wealth rapidly", "A financial planning strategy"],
        correctAnswer: 1,
        explanation: "The hedonic treadmill describes how people quickly adapt to improvements in circumstances and return to their baseline level of happiness, meaning that accumulating more wealth driven by greed never produces lasting satisfaction."
      },
      {
        id: "G9T1U2L2Q2",
        question: "What was a primary cause of the 2008 financial crisis?",
        options: ["Government regulation was too strict", "Greedy lending practices and risky financial products that bundled bad loans", "People were saving too much money", "Interest rates were too low"],
        correctAnswer: 1,
        explanation: "The 2008 crisis was caused by banks pursuing higher profits through risky lending — offering loans to unqualified borrowers, packaging them into complex securities, and selling them with misleading ratings, all driven by greed for short-term profit."
      },
      {
        id: "G9T1U2L2Q3",
        question: "What is the key difference between productive and destructive debt?",
        options: ["Productive debt has lower interest rates", "Productive debt creates future value or income, while destructive debt finances consumption without return", "Productive debt is always borrowed from banks", "There is no difference"],
        correctAnswer: 1,
        explanation: "Productive debt leads to increased value or income over time (e.g., education, business investment), while destructive debt finances consumption or lifestyle choices that do not generate future value, trapping the borrower."
      },
      {
        id: "G9T1U2L2Q4",
        question: "Why does Islam prohibit riba (usury/interest)?",
        options: ["Because it makes banks too powerful", "Because it allows the wealthy to profit from others' difficulties without sharing risk, creating exploitation", "Because interest rates are always too high", "Because it makes financial transactions too complicated"],
        correctAnswer: 1,
        explanation: "Islam prohibits riba because it allows lenders to profit from borrowers' financial difficulties without sharing any risk, creating an exploitative relationship that concentrates wealth and deepens poverty, as stated in Quran 2:275."
      },
      {
        id: "G9T1U2L2Q5",
        question: "How does compound interest work against a borrower?",
        options: ["It reduces the amount owed over time", "Interest is charged on the accumulated interest, causing the total debt to grow exponentially", "It only applies to the original loan amount", "It makes monthly payments smaller"],
        correctAnswer: 1,
        explanation: "When borrowing, compound interest means interest is charged on the accumulated interest as well as the principal, causing the total amount owed to grow exponentially over time — this is how debt traps form."
      }
    ],
    interactiveStrategies: [
      {
        strategy: "Debt Simulation Activity",
        description: "Students simulate borrowing and repaying debt with compound interest, experiencing firsthand how quickly debt can grow and how difficult it is to escape a debt trap.",
        duration: 25,
        instructions: "1. Each student starts with a hypothetical credit card balance of AED 5,000 at 24% annual interest (2% per month). 2. Calculate the interest charged in the first month (AED 100). 3. If the minimum payment is 3% of the balance (AED 150), calculate how much goes to interest and how much reduces the principal. 4. Continue calculating for 6 months, tracking the remaining balance after each payment. 5. After completing the calculations, answer: How much total interest did you pay over 6 months? How much of the original AED 5,000 did you actually pay off? How long would it take to pay off the debt making only minimum payments? 6. Discuss as a class: What strategies could help someone pay off debt faster? How does this simulation change your view of borrowing?"
      },
      {
        strategy: "Case Study Analysis: The 2008 Financial Crisis",
        description: "Students analyse the causes and consequences of the 2008 financial crisis, identifying the role of greed and discussing lessons learned.",
        duration: 20,
        instructions: "1. Read a simplified summary of the 2008 financial crisis provided by your teacher. 2. In groups of 4-5, identify the key actors (banks, regulators, borrowers, rating agencies) and describe how greed influenced each one's decisions. 3. Create a cause-and-effect diagram showing how the actions of each group contributed to the crisis. 4. Discuss in your group: What safeguards could have prevented the crisis? What role should ethics play in financial decision-making? 5. Each group presents one key finding and one recommendation to the class. 6. Write a personal reflection (5-8 sentences) on what the 2008 crisis teaches us about the dangers of greed in financial systems."
      }
    ]
  },

  // ─── Lesson 3: How Wealth Can Be a Force for Good ───
  {
    lessonId: "G9_T1_Unit 2_l3",
    keyVocabulary: ["philanthropy", "waqf", "zakat", "corporate social responsibility"],
    reading1Title: "Wealth as a Tool for Positive Change",
    reading1Content: `Wealth, when used wisely and generously, has the power to transform lives, build communities, and create lasting positive change. Islam recognises this potential and provides a comprehensive framework for ensuring that wealth circulates through society rather than accumulating in the hands of a few. At the heart of this framework is zakat — the obligatory annual charity that every Muslim who possesses wealth above a certain threshold (nisab) must pay. Zakat is not merely a charitable donation; it is a fundamental pillar of Islam, as important as prayer, fasting, and pilgrimage. The word "zakat" itself means purification and growth, reflecting the belief that giving away a portion of one's wealth purifies what remains and leads to spiritual and material growth. The rate of zakat is typically 2.5 percent of one's total qualifying wealth, including savings, investments, gold, silver, and business inventory, collected annually and distributed to those in need.

The Quran specifies eight categories of people who are eligible to receive zakat: the poor (fuqara), the needy (masakin), those employed to collect and distribute zakat, those whose hearts are to be reconciled to Islam, those in bondage or debt, those striving in the cause of Allah, and wayfarers (travellers in need). This comprehensive list ensures that zakat addresses a wide range of social needs, from alleviating poverty to supporting education and community development. By making charity a legal obligation rather than merely a voluntary act, Islam ensures that the most vulnerable members of society are systematically supported, not left at the mercy of individual generosity. Zakat also serves an important social function: it creates a sense of shared responsibility and mutual care within the Muslim community, reinforcing the principle that wealth is a trust from Allah that must be used for the benefit of all.

Beyond zakat, Islam encourages sadaqah — voluntary charity that can take any form and any amount. The Prophet Muhammad (peace be upon him) said: "Every Muslim has to give in charity." When asked, "What if one cannot find anything to give?" he replied, "They should work with their hands and benefit themselves and give in charity." When asked further, "What if they cannot do that?" he said, "They should help the needy who appeal for help." And when asked, "What if they cannot do even that?" he said, "They should refrain from evil, for that is still charity." This hadith beautifully illustrates that charity in Islam is not limited to financial giving — it encompasses every act of kindness, every word of encouragement, and every effort to do good. Sadaqah jariyah (ongoing charity) is a particularly meritorious form of voluntary giving that continues to benefit people long after the initial act, such as building a well, planting a tree, or funding a school.

The institution of waqf (plural: awqaf) is one of the most remarkable contributions of Islamic civilisation to the concept of wealth for public good. A waqf is an endowment made by a Muslim for a religious, educational, or charitable purpose, in which the original asset is preserved and its income or yield is used for the designated purpose in perpetuity. Historically, awqaf funded hospitals, schools, libraries, mosques, soup kitchens, bridges, and water fountains across the Muslim world. The first known waqf was established by the Prophet Muhammad himself, who endowed seven gardens in Madinah whose produce was used to support the poor. During the Ottoman Empire, awqaf funded vast networks of public services that were the envy of the medieval world. In the modern era, waqf institutions continue to play a vital role in many Muslim-majority countries, providing sustainable funding for education, healthcare, and social welfare without relying on government budgets.

The United Arab Emirates stands as one of the world's most generous nations, consistently ranking among the top countries in humanitarian aid as a percentage of Gross National Income (GNI). This tradition of giving is deeply rooted in the vision and values of the late Sheikh Zayed bin Sultan Al Nahyan, the founding father of the UAE, who believed that wealth must be used to benefit all of humanity. Sheikh Zayed said: "The wealth of the UAE should be used for the good of the people, and we must not forget that this wealth is a trust from Allah." Under his leadership, the UAE provided aid to countries across the developing world, regardless of religion, race, or politics — a tradition that continues today through organisations such as the Abu Dhabi Fund for Development, the Emirates Red Crescent, and the Dubai Cares initiative. The UAE's official development assistance regularly exceeds one percent of GNI, making it one of the most generous donor nations in the world relative to the size of its economy. This extraordinary commitment to giving reflects the Islamic principle that true wealth is measured not by what you keep but by what you share.`,
    reading2Title: "Corporate Social Responsibility",
    reading2Content: `Corporate Social Responsibility (CSR) is the concept that businesses have obligations to society that go beyond simply making profits for their shareholders. In the modern world, companies are expected to consider the impact of their activities on employees, customers, communities, and the environment, and to act in ways that contribute positively to the world around them. CSR represents a shift from the traditional view that the only responsibility of business is to maximise shareholder value, towards a more holistic understanding that businesses are part of a broader social and ecological system. When a company embraces CSR, it commits to operating ethically, treating employees fairly, minimising its environmental impact, and giving back to the communities in which it operates. This approach is not only morally right — it is also increasingly recognised as good for business, as consumers, investors, and employees increasingly prefer to associate with companies that demonstrate genuine social responsibility.

The triple bottom line is a framework that captures the essence of CSR by expanding the traditional measure of business success from a single bottom line (profit) to three: people, planet, and profit. "People" refers to the social dimension — how a company treats its employees, suppliers, customers, and the communities it affects. "Planet" refers to the environmental dimension — how a company manages its ecological footprint, including its use of resources, its waste, and its carbon emissions. "Profit" refers to the economic dimension — the financial viability of the business, which remains essential for its continued operation. The triple bottom line recognises that a business cannot be truly successful if it generates profit at the expense of people or the planet. Companies that embrace this framework understand that long-term profitability depends on social licence to operate, which in turn depends on acting responsibly and sustainably.

The UAE is home to many companies that are recognised leaders in CSR, reflecting the nation's broader commitment to sustainable development and social welfare. Emirates Airlines, for example, has invested heavily in fuel-efficient aircraft and sustainable aviation fuel research to reduce its environmental impact, while also supporting numerous community programmes through the Emirates Airline Foundation. Etihad Airways has launched programmes to reduce single-use plastics on flights and has partnered with organisations to combat human trafficking. The Masdar initiative in Abu Dhabi is a global benchmark for sustainable urban development, creating a city powered by renewable energy that serves as a testbed for green technologies. DP World, the global port operator headquartered in Dubai, has committed to carbon neutrality and invests in community development programmes in the countries where it operates. These companies demonstrate that CSR is not just a marketing strategy but a genuine commitment to making a positive difference.

Islamic finance principles offer a natural alignment with CSR values, providing a framework for ethical business and investment that predates modern CSR concepts by centuries. Sharia-compliant finance prohibits investments in industries considered harmful, such as alcohol, gambling, tobacco, and weapons, and requires that all financial transactions be based on tangible assets and shared risk rather than speculation and interest. These principles ensure that money is channeled towards productive, socially beneficial activities rather than exploitative or destructive ones. The concept of mudarabah (profit-sharing partnership) and musharakah (joint venture) in Islamic finance embody the principle that risk and reward should be shared fairly between parties, preventing the kind of exploitative lending that can devastate communities. By avoiding riba and gharar (excessive uncertainty), Islamic finance promotes transparency, fairness, and social justice — values that are at the core of CSR.

Students can play an active role in promoting ethical business practices through their consumer choices. Every purchase is a vote for the kind of world you want to live in. By choosing to buy from companies that treat their workers fairly, minimise their environmental impact, and give back to their communities, students send a powerful message that social responsibility matters. Conversely, by avoiding companies that engage in unethical practices — such as exploiting workers, polluting the environment, or avoiding taxes — students withhold their support from harmful business models. Researching the companies behind the products you buy, reading labels, and staying informed about corporate practices are all ways to become a more conscious consumer. In the UAE, initiatives like the UAE Circular Economy Policy and the National Climate Change Plan 2050 provide frameworks for businesses and consumers alike to contribute to a more sustainable and equitable future. By developing the habit of thinking critically about where their money goes, students not only support ethical businesses but also develop the financial awareness that will serve them throughout their lives.`,
    reading1Time: 10,
    reading2Time: 10,
    kwlExplanation: KWL_EXPLANATION,
    discussionQuestions: [
      "How does zakat differ from ordinary charity, and why is it considered a pillar of Islam?",
      "What is a waqf, and how did this institution contribute to the development of Islamic civilisation?",
      "How does the UAE's humanitarian aid reflect Sheikh Zayed's philosophy of giving?",
      "What is the triple bottom line, and how does it change the way we measure business success?",
      "How can students use their consumer choices to support ethical businesses and promote CSR?"
    ],
    keyFacts: [
      "Zakat is the obligatory annual charity that Muslims must pay, typically 2.5% of qualifying wealth above the nisab threshold.",
      "The word 'zakat' means purification and growth — giving purifies remaining wealth and leads to spiritual and material growth.",
      "The Quran specifies eight categories of people eligible to receive zakat, including the poor, the needy, those in debt, and wayfarers.",
      "Sadaqah is voluntary charity that can take any form, including acts of kindness and refraining from evil.",
      "Sadaqah jariyah is ongoing charity that continues to benefit people long after the initial act, such as building a well or funding a school.",
      "Waqf is an Islamic endowment in which the original asset is preserved and its income is used for charitable purposes in perpetuity.",
      "The first known waqf was established by the Prophet Muhammad, who endowed seven gardens in Madinah.",
      "The UAE consistently ranks among the world's most generous nations in humanitarian aid as a percentage of GNI.",
      "Sheikh Zayed said: 'The wealth of the UAE should be used for the good of the people, and we must not forget that this wealth is a trust from Allah.'",
      "CSR (Corporate Social Responsibility) means businesses have obligations to society beyond making profits.",
      "The triple bottom line framework measures business success across three dimensions: people, planet, and profit.",
      "Islamic finance principles naturally align with CSR by prohibiting harmful investments and requiring shared risk and asset-backing."
    ],
    visualType: "piechart",
    visualData: {
      title: "How Zakat Is Distributed — The Eight Categories",
      segments: [
        { label: "The Poor (Fuqara)", value: 15, color: "#10b981", description: "Those who do not have enough to meet their basic needs" },
        { label: "The Needy (Masakin)", value: 15, color: "#3b82f6", description: "Those who are in hardship but may not ask for help" },
        { label: "Zakat Collectors", value: 10, color: "#8b5cf6", description: "Those employed to administer and distribute zakat" },
        { label: "Hearts to Reconcile", value: 10, color: "#f59e0b", description: "Those whose hearts are being drawn to Islam or strengthened in faith" },
        { label: "Freeing Captives", value: 12, color: "#ef4444", description: "Those in bondage or slavery, to secure their freedom" },
        { label: "Those in Debt", value: 13, color: "#06b6d4", description: "Those overwhelmed by debt they cannot repay" },
        { label: "In the Cause of Allah", value: 13, color: "#f97316", description: "Those striving in the cause of Allah, including education and community defence" },
        { label: "Wayfarers", value: 12, color: "#ec4899", description: "Travellers who are stranded and in need of assistance" }
      ]
    },
    quizQuestions: [
      {
        id: "G9T1U2L3Q1",
        question: "What does the word 'zakat' mean?",
        options: ["Charity and donation", "Purification and growth", "Wealth and prosperity", "Obligation and duty"],
        correctAnswer: 1,
        explanation: "The word 'zakat' means purification and growth. Giving zakat purifies the remaining wealth and leads to both spiritual and material growth, reflecting the belief that generosity benefits the giver as well as the receiver."
      },
      {
        id: "G9T1U2L3Q2",
        question: "How many categories of people are eligible to receive zakat according to the Quran?",
        options: ["Four", "Six", "Eight", "Ten"],
        correctAnswer: 2,
        explanation: "The Quran specifies eight categories of people eligible to receive zakat: the poor, the needy, zakat collectors, those whose hearts are to be reconciled, those in bondage, those in debt, those striving in the cause of Allah, and wayfarers."
      },
      {
        id: "G9T1U2L3Q3",
        question: "What is a waqf?",
        options: ["A type of loan", "An Islamic endowment where the original asset is preserved and its income is used for charitable purposes in perpetuity", "A religious tax", "A form of voluntary prayer"],
        correctAnswer: 1,
        explanation: "A waqf is an Islamic endowment in which the original asset (such as land, a building, or money) is preserved permanently, and the income or yield from that asset is used for designated religious, educational, or charitable purposes forever."
      },
      {
        id: "G9T1U2L3Q4",
        question: "What does the triple bottom line framework measure?",
        options: ["Revenue, profit, and market share", "People, planet, and profit", "Employees, customers, and shareholders", "Quality, speed, and cost"],
        correctAnswer: 1,
        explanation: "The triple bottom line expands business success measurement to three dimensions: people (social impact), planet (environmental impact), and profit (financial viability), recognising that true success requires performance in all three areas."
      },
      {
        id: "G9T1U2L3Q5",
        question: "How does sadaqah differ from zakat?",
        options: ["Sadaqah is obligatory while zakat is voluntary", "Sadaqah is voluntary charity of any amount or form, while zakat is obligatory charity at a fixed rate", "There is no difference between them", "Sadaqah can only be given during Ramadan"],
        correctAnswer: 1,
        explanation: "Zakat is an obligatory charity at a fixed rate (typically 2.5%) for those who meet the threshold, while sadaqah is entirely voluntary — it can be any amount, any form (including acts of kindness), and given at any time."
      }
    ],
    interactiveStrategies: [
      {
        strategy: "Design a Waqf for a Modern Community",
        description: "Students design a modern waqf endowment for their community, selecting an asset, identifying the community needs it would address, and creating a plan for how the waqf's income would be distributed.",
        duration: 25,
        instructions: "1. Think about a need in your community — it could be a lack of educational resources, limited healthcare access, insufficient green spaces, or youth programmes. 2. Choose an asset for your waqf — for example, a commercial building, a piece of land, or an investment fund. 3. Describe how the income from your waqf would be generated (e.g., rent from the building, returns on the investment). 4. Create a distribution plan showing how the income would be allocated to address the community need you identified. 5. Draw a simple diagram or create a poster illustrating your waqf — show the asset, the income it generates, and the beneficiaries. 6. Present your waqf design to the class and explain how it embodies the Islamic principle of using wealth for the public good."
      },
      {
        strategy: "CSR Analysis of a UAE Company",
        description: "Students research and analyse the CSR practices of a UAE-based company, evaluating its performance across the triple bottom line dimensions of people, planet, and profit.",
        duration: 20,
        instructions: "1. Choose a UAE-based company from a list provided by your teacher (e.g., Emirates Airlines, Masdar, DP World, Etihad Airways). 2. Research the company's CSR initiatives using its official website and any news articles. 3. Evaluate the company's performance across the three triple bottom line dimensions: People — How does it treat its employees and the communities it serves? Planet — What is it doing to reduce its environmental impact? Profit — Is it financially sustainable while pursuing its CSR goals? 4. Create a scorecard rating the company's CSR performance from 1 (poor) to 5 (excellent) for each dimension, with brief justifications. 5. Write a recommendation (3-5 sentences) for one area where the company could improve its CSR efforts. 6. Share your analysis with a partner and discuss: Does CSR make a company more or less competitive? Why?"
      }
    ]
  },

  // ─── Lesson 4: The Development of Entrepreneurship Skills ───
  {
    lessonId: "G9_T1_Unit 2_l4",
    keyVocabulary: ["entrepreneurship", "innovation", "risk-taking", "business plan"],
    reading1Title: "What Is Entrepreneurship and Why It Matters",
    reading1Content: `Entrepreneurship is the process of identifying a need in society, developing an innovative solution, and creating a business venture to deliver that solution to the people who need it. Entrepreneurs are the driving force behind economic growth, technological advancement, and social change. They are the individuals who look at the world and see not just problems but opportunities — chances to create value, improve lives, and make a meaningful difference. From the street vendor who starts with a single cart and builds a restaurant chain, to the technology innovator who develops an app used by millions, entrepreneurs come in all forms and operate in every sector of the economy. What they share is a mindset characterised by creativity, initiative, resilience, and a willingness to take calculated risks in pursuit of a vision.

The entrepreneurial mindset is a set of attitudes, skills, and behaviours that enable individuals to identify opportunities, overcome challenges, and create value. Key characteristics of successful entrepreneurs include: a keen eye for identifying unmet needs and market gaps; the creativity to develop innovative solutions to those needs; the courage to take calculated risks, understanding that failure is a possibility but not an endpoint; the resilience to bounce back from setbacks and learn from mistakes; the discipline to plan, organise, and execute a strategy; and the communication skills to persuade investors, partners, and customers to believe in their vision. These characteristics are not innate talents that some people are born with and others are not — they are skills that can be developed and strengthened through practice, education, and experience.

Entrepreneurship plays a vital role in driving economic growth and innovation. Small and medium-sized enterprises (SMEs) account for the majority of employment in most economies and are responsible for a significant share of new job creation. When entrepreneurs start businesses, they create jobs not only for themselves but for others, generating income and economic activity that benefits the entire community. Entrepreneurs also drive innovation by developing new products, services, and processes that improve efficiency, reduce costs, and enhance quality of life. Many of the technologies and conveniences we take for granted today — from smartphones and social media to ride-sharing apps and online education platforms — began as entrepreneurial ideas that were developed and brought to market by individuals who saw a need and had the vision and determination to meet it.

The United Arab Emirates has established one of the world's most supportive environments for entrepreneurs, reflecting the leadership's recognition that entrepreneurship is essential for building a diversified, knowledge-based economy. The UAE offers a range of support mechanisms for new businesses, including free zones that provide 100 percent foreign ownership, tax exemptions, and streamlined business registration processes. Incubators and accelerators — such as Dubai Future Accelerators, Flat6Labs Abu Dhabi, and the Technology Innovation Institute — provide startups with mentorship, funding, workspace, and access to networks of investors and industry experts. Government initiatives like the Khalifa Fund for Enterprise Development, Dubai SME, and the Mohammed Bin Rashid Innovation Fund offer financial support, training programmes, and advisory services specifically designed to help entrepreneurs turn their ideas into successful businesses. These programmes reflect the UAE's commitment to fostering a culture of innovation and enterprise.

Several UAE entrepreneurs have achieved remarkable success, serving as inspirations for the next generation. Entrepreneurial success in the UAE spans a wide range of sectors — from technology and e-commerce to hospitality, fashion, and food. Many young Emirati entrepreneurs have launched businesses that combine traditional Emirati values with modern innovation, creating products and services that celebrate the nation's heritage while meeting contemporary needs. The government actively celebrates and promotes entrepreneurial role models through awards, media coverage, and speaking opportunities, creating a culture where starting a business is seen as a prestigious and worthwhile aspiration. The role of small businesses in the UAE economy cannot be overstated: they provide employment, drive innovation, contribute to GDP, and create the dynamism and diversity that make the economy resilient and adaptable. Understanding the importance of entrepreneurship — and developing the skills to become an entrepreneur — is not just a career choice; it is a way of contributing to the nation's prosperity and the wellbeing of its people.`,
    reading2Title: "Developing Entrepreneurship Skills",
    reading2Content: `Developing entrepreneurship skills is a journey that begins with cultivating the right mindset and progresses through deliberate practice, learning, and experience. One of the most fundamental entrepreneurship skills is problem-solving and opportunity recognition. This involves training yourself to observe the world around you with a critical eye, identifying inefficiencies, unmet needs, and frustrations that people experience in their daily lives. Every problem is a potential business opportunity. When you notice that people spend too much time waiting in line at a cafeteria, that is an opportunity for a more efficient food ordering system. When you see that elderly people struggle with technology, that is an opportunity for a simplified digital interface. The key is to shift your perspective from complaint to curiosity: instead of simply being annoyed by a problem, ask yourself, "How could this be solved? What product or service could address this need?" This habit of opportunity recognition can be practised every day, in every situation.

Creativity and innovation are essential entrepreneurship skills that go hand in hand with problem-solving. Creativity is the ability to generate new and original ideas, while innovation is the ability to turn those ideas into practical solutions that create value. Many people believe that creativity is a gift that only some people possess, but research shows that creativity is a skill that can be developed through techniques such as brainstorming, mind mapping, and lateral thinking. Innovation often involves combining existing ideas in new ways or applying solutions from one field to problems in another. For example, the concept of ride-sharing was not entirely new, but applying it through a smartphone app and GPS technology created an innovative solution that transformed urban transportation. Students can develop their creativity by practising idea generation — setting a timer for five minutes and writing down as many ideas as possible for solving a given problem, without judging or filtering. Over time, this exercise trains the brain to think more flexibly and generate a wider range of potential solutions.

Financial literacy and resource management are critical skills for any entrepreneur. Understanding how money works — how to budget, how to track expenses, how to read financial statements, and how to manage cash flow — is essential for keeping a business alive and growing. Many promising startups fail not because their products are bad but because their founders lacked the financial skills to manage their resources effectively. An entrepreneur must be able to estimate start-up costs, project revenue and expenses, secure funding from investors or lenders, and make strategic decisions about how to allocate limited resources for maximum impact. The financial literacy skills that students develop in this unit — budgeting, understanding debt, and appreciating the value of money — are directly applicable to entrepreneurship and provide a foundation for sound business management.

Communication and persuasion are skills that no entrepreneur can afford to neglect. Whether you are pitching your business idea to an investor, negotiating with a supplier, marketing your product to customers, or motivating your team, the ability to communicate clearly and persuasively is essential. Effective communication involves not only speaking and writing well but also listening actively and empathising with others. An entrepreneur who truly understands their customers' needs and can articulate how their product meets those needs will always have an advantage over competitors who rely on gimmicks or pressure tactics. The Prophet Muhammad (peace be upon him) was known for his exceptional communication skills — he spoke clearly, listened attentively, and always addressed people in a way that they could understand and relate to. These same principles apply in business: honest, clear, and respectful communication builds trust, and trust is the foundation of every successful business relationship.

Resilience and learning from failure are perhaps the most important entrepreneurship skills of all. The path of entrepreneurship is rarely smooth — most successful entrepreneurs have experienced multiple failures before achieving success. What sets them apart is not the absence of failure but the ability to learn from it, adapt, and try again. Resilience means maintaining your determination and optimism in the face of setbacks, viewing failure not as a definitive end but as a valuable lesson that brings you closer to success. Islamic business ethics emphasise the importance of honesty, fairness, and fulfilling contracts in all business dealings. The Quran commands: "O you who have believed, fulfil your contracts" (Quran 5:1), and the Prophet Muhammad said: "The honest, trustworthy merchant will be with the Prophets, the truthful, and the martyrs." These teachings establish that ethical conduct is not merely a desirable quality in business — it is a religious obligation and a path to spiritual reward. Developing a simple business plan is one of the best ways to put all of these skills into practice. A business plan outlines your business idea, your target market, your competitive advantage, your financial projections, and your strategy for achieving your goals. Even at a basic level, the process of writing a business plan forces you to think critically about every aspect of your venture and to identify potential challenges before they arise.`,
    reading1Time: 10,
    reading2Time: 10,
    kwlExplanation: KWL_EXPLANATION,
    discussionQuestions: [
      "What are the key characteristics of an entrepreneurial mindset, and how can they be developed?",
      "How does entrepreneurship contribute to economic growth and innovation in a country like the UAE?",
      "Why is financial literacy essential for entrepreneurs, and how does it connect to the budgeting skills we learned earlier?",
      "How do Islamic business ethics guide the behaviour of Muslim entrepreneurs?",
      "Why is resilience considered one of the most important entrepreneurship skills, and how can failure be a learning opportunity?"
    ],
    keyFacts: [
      "Entrepreneurship is the process of identifying a need, developing an innovative solution, and creating a business to deliver it.",
      "The entrepreneurial mindset includes creativity, initiative, resilience, risk-taking, and the ability to recognise opportunities.",
      "SMEs account for the majority of employment and new job creation in most economies.",
      "The UAE offers free zones with 100% foreign ownership, tax exemptions, and streamlined business registration.",
      "UAE incubators and accelerators include Dubai Future Accelerators, Flat6Labs Abu Dhabi, and the Technology Innovation Institute.",
      "Problem-solving and opportunity recognition involve observing the world critically and asking 'How could this be solved?'",
      "Creativity can be developed through brainstorming, mind mapping, and lateral thinking techniques.",
      "Innovation often involves combining existing ideas in new ways or applying solutions from one field to another.",
      "Financial literacy for entrepreneurs includes budgeting, tracking expenses, projecting revenue, and managing cash flow.",
      "Communication and persuasion are essential for pitching ideas, negotiating, marketing, and motivating teams.",
      "The Quran commands: 'O you who have believed, fulfil your contracts' (5:1), establishing ethical business conduct.",
      "The Prophet Muhammad said: 'The honest, trustworthy merchant will be with the Prophets, the truthful, and the martyrs.'"
    ],
    visualType: "mindmap",
    visualData: {
      title: "Entrepreneurship Skills",
      center: "Entrepreneurship Skills",
      branches: [
        {
          label: "Problem-Solving",
          items: ["Identify unmet needs", "Observe inefficiencies", "Ask 'How could this be solved?'", "Turn complaints into opportunities"]
        },
        {
          label: "Creativity & Innovation",
          items: ["Brainstorm ideas freely", "Combine existing ideas in new ways", "Apply solutions across fields", "Practice lateral thinking"]
        },
        {
          label: "Financial Literacy",
          items: ["Budget and track expenses", "Project revenue and costs", "Manage cash flow", "Allocate resources wisely"]
        },
        {
          label: "Communication",
          items: ["Pitch ideas persuasively", "Negotiate effectively", "Market to customers", "Listen actively and empathise"]
        },
        {
          label: "Resilience",
          items: ["Learn from failure", "Adapt to setbacks", "Maintain determination", "View challenges as lessons"]
        },
        {
          label: "Ethics & Integrity",
          items: ["Honesty in transactions", "Fulfil contracts", "Fair dealing", "Islamic business principles"]
        }
      ]
    },
    quizQuestions: [
      {
        id: "G9T1U2L4Q1",
        question: "What is entrepreneurship?",
        options: ["A type of bank loan", "The process of identifying a need, developing an innovative solution, and creating a business venture to deliver it", "A government programme for small businesses", "A method of saving money"],
        correctAnswer: 1,
        explanation: "Entrepreneurship is the process of identifying a need in society, developing an innovative solution to address that need, and creating a business venture to deliver the solution to the people who need it."
      },
      {
        id: "G9T1U2L4Q2",
        question: "What is the key to opportunity recognition?",
        options: ["Waiting for someone to give you an idea", "Shifting your perspective from complaint to curiosity and asking 'How could this be solved?'", "Copying what successful companies already do", "Only looking for problems in the technology sector"],
        correctAnswer: 1,
        explanation: "Opportunity recognition involves training yourself to observe the world critically and shift from complaining about problems to asking how they could be solved — every problem is a potential business opportunity."
      },
      {
        id: "G9T1U2L4Q3",
        question: "How can creativity be developed?",
        options: ["It cannot be developed — you are either born creative or not", "Through techniques such as brainstorming, mind mapping, and lateral thinking", "By only working alone and never collaborating", "By avoiding new experiences"],
        correctAnswer: 1,
        explanation: "Research shows that creativity is a skill that can be developed through techniques such as brainstorming, mind mapping, lateral thinking, and practising idea generation — it is not an innate talent that only some people possess."
      },
      {
        id: "G9T1U2L4Q4",
        question: "Why do many startups fail despite having good products?",
        options: ["Because their products are too innovative", "Because their founders lack the financial skills to manage resources effectively", "Because they have too many customers", "Because they operate in free zones"],
        correctAnswer: 1,
        explanation: "Many promising startups fail not because their products are bad but because their founders lack financial literacy — the skills to budget, track expenses, manage cash flow, and make strategic resource allocation decisions."
      },
      {
        id: "G9T1U2L4Q5",
        question: "What did the Prophet Muhammad say about honest merchants?",
        options: ["They will become wealthy", "They will be with the Prophets, the truthful, and the martyrs", "They will never face difficulties", "They should only sell Islamic products"],
        correctAnswer: 1,
        explanation: "The Prophet Muhammad (peace be upon him) said: 'The honest, trustworthy merchant will be with the Prophets, the truthful, and the martyrs,' establishing that ethical business conduct is a path to spiritual reward."
      }
    ],
    interactiveStrategies: [
      {
        strategy: "Identify a Problem and Brainstorm a Business Solution",
        description: "Students identify a real problem they experience in their daily lives and brainstorm innovative business solutions, practising the key entrepreneurial skill of opportunity recognition.",
        duration: 25,
        instructions: "1. Think about a problem or frustration you experience regularly — at school, at home, or in your community. It could be something small (the cafeteria line is too long) or something bigger (students struggle to find tutoring help). 2. Write the problem down clearly in one sentence. 3. Using brainstorming, list at least five possible business solutions to this problem. Do not judge or filter your ideas yet — write down everything that comes to mind. 4. Review your list and select the two most promising ideas. For each, answer: Who would use this product or service? What makes it different from existing solutions? What resources would you need to get started? 5. Share your top idea with a partner and give each other feedback. 6. Write a brief reflection (4-6 sentences) on how it felt to shift from complaining about a problem to imagining a solution."
      },
      {
        strategy: "Develop a Simple Business Plan Outline",
        description: "Students create a basic business plan outline for their chosen business idea, covering the essential elements of a startup plan.",
        duration: 20,
        instructions: "1. Take the business idea you developed in the previous activity (or choose a new one). 2. Create a business plan outline with the following sections: Business Name and Description (What is your business called and what does it do?), Problem and Solution (What problem are you solving and how does your business solve it?), Target Market (Who are your customers? Be specific about age, location, and interests.), Competitive Advantage (What makes your business different or better than existing alternatives?), Start-Up Costs (List the main things you would need to spend money on to get started — equipment, materials, marketing, etc.), and Revenue Model (How will your business make money? What will you charge customers?). 3. Estimate rough figures for your start-up costs and potential monthly revenue. 4. Review your plan and identify one potential risk or challenge. 5. Share your business plan outline with a small group and provide constructive feedback on each other's plans."
      }
    ]
  },

  // ─── Lesson 5: Becoming an Entrepreneur ───
  {
    lessonId: "G9_T1_Unit 2_l5",
    keyVocabulary: ["startup", "pitch", "market research", "competitive advantage"],
    reading1Title: "The Entrepreneurial Journey — From Idea to Execution",
    reading1Content: `The entrepreneurial journey is the path that takes a person from having a business idea to launching and growing a successful venture. While every entrepreneurial story is unique, most follow a series of common steps that provide a roadmap for turning inspiration into reality. The first step is identifying a need — recognising a problem or gap in the market that your business can address. This requires careful observation, empathy, and an understanding of the people whose needs you aim to meet. The best business ideas do not come from sitting in a room thinking about what might work; they come from engaging with the real world, talking to people, and paying attention to the frustrations and desires that shape their daily experiences.

Once a need has been identified, the next step is conducting market research — the process of gathering and analysing information about your target market, your competitors, and the broader industry. Market research helps you answer critical questions: Is there genuine demand for your product or service? Who are your potential customers, and what are their preferences and buying habits? Who are your competitors, and what are their strengths and weaknesses? What is the size of the market, and is it growing or shrinking? Market research can be primary (collected directly through surveys, interviews, and observations) or secondary (gathered from existing sources such as industry reports, government statistics, and online databases). Thorough market research reduces the risk of launching a business based on assumptions rather than evidence and increases the likelihood that your product or service will find a receptive audience.

After validating the market opportunity, the entrepreneur must develop the product or service itself. This involves designing, prototyping, and testing the offering to ensure it meets customer needs effectively and reliably. In the technology sector, this often follows an approach called the Minimum Viable Product (MVP) — a basic version of the product that includes only its core features, which is released to early users for feedback. The MVP approach allows entrepreneurs to learn from real customer experiences before investing heavily in a fully featured product. For non-technology businesses, the same principle applies: start with a simple, focused version of your offering, test it with real customers, gather feedback, and refine it iteratively. This approach reduces waste, minimises risk, and ensures that the final product is shaped by actual customer needs rather than the entrepreneur's assumptions.

Creating a business model and securing funding are the next critical steps. A business model describes how your business creates, delivers, and captures value — in simple terms, how it makes money. Key elements of a business model include your value proposition (what unique value you offer to customers), your revenue streams (how you generate income), your cost structure (what your major expenses are), and your distribution channels (how you reach your customers). The Business Model Canvas is a popular one-page tool that helps entrepreneurs visualise and communicate their business model clearly and concisely. Once the business model is defined, the entrepreneur needs to secure funding to cover start-up costs and sustain the business until it becomes profitable. Sources of funding include personal savings, loans from family and friends, bank loans, angel investors, venture capital, and government grants. In the UAE, organisations such as the Khalifa Fund for Enterprise Development, Dubai SME, and the Abu Dhabi Department of Economic Development provide financial support and advisory services specifically for new entrepreneurs.

The UAE's entrepreneurial ecosystem is one of the most dynamic and supportive in the region. The Khalifa Fund, established in 2007, provides financing, training, and mentoring to Emirati entrepreneurs, with a focus on developing the national talent pool and promoting a culture of entrepreneurship. Dubai SME, part of the Department of Economic Development, offers similar support to businesses in Dubai, including funding, incubation, and networking opportunities. The Abu Dhabi Department of Economic Development runs programmes that support startups through every stage of their growth, from idea validation to market expansion. Young Emirati entrepreneurs have achieved remarkable success across diverse sectors, from e-commerce and food delivery to fashion and sustainable technology. Their stories demonstrate that with the right combination of skills, support, and determination, it is possible to build a thriving business in the UAE at any age. The nation's leadership continues to invest in programmes and policies that make it easier for young people to become entrepreneurs, recognising that the entrepreneurs of today will create the jobs, innovations, and prosperity of tomorrow.`,
    reading2Title: "Ethics and Responsibility in Entrepreneurship",
    reading2Content: `Ethics and responsibility are not optional extras in entrepreneurship — they are foundational principles that determine whether a business will earn the trust and loyalty of its customers, employees, and community. Honest business practices are the cornerstone of ethical entrepreneurship. This means being truthful in advertising and marketing, not making claims about your product that are exaggerated or false, being transparent about pricing and terms, and delivering on the promises you make to customers. When a business misleads its customers — whether through false advertising, hidden fees, or substandard quality — it may make a short-term profit, but it destroys the trust that is essential for long-term success. In the age of social media and online reviews, a single case of dishonesty can quickly become public knowledge, damaging a company's reputation beyond repair. Ethical entrepreneurs understand that their reputation is their most valuable asset and that protecting it requires unwavering honesty in every transaction.

Treating employees fairly is another fundamental aspect of responsible entrepreneurship. Employees are the backbone of any business, and how they are treated directly affects the quality of the products and services the business delivers. Fair treatment means paying employees a living wage, providing safe and healthy working conditions, offering opportunities for professional growth and development, and respecting their dignity and rights. In Islam, the rights of workers are strongly emphasised. The Prophet Muhammad (peace be upon him) said: "Give the worker his wages before his sweat dries," highlighting the importance of prompt and fair compensation. He also warned: "Allah said: I will be an opponent to three types of people on the Day of Resurrection: one who makes a covenant in My Name, but proves treacherous; one who sells a free person and eats his price; and one who employs a laborer and takes full work from him but does not pay him for his labor." These hadith make clear that exploiting workers is a serious sin in Islam, and that employers have a moral and religious obligation to treat their employees justly.

Environmental responsibility is increasingly recognised as an essential component of ethical entrepreneurship. Businesses consume natural resources, generate waste, and produce emissions, and they have a duty to minimise their environmental impact. Responsible entrepreneurs consider the environmental consequences of their decisions — from the materials they use and the energy they consume to the waste they produce and the transportation methods they employ. The UAE has made sustainability a national priority, with initiatives such as the UAE Net Zero 2050 Strategy, the development of Masdar City as a model for sustainable urban living, and significant investments in renewable energy. Entrepreneurs who incorporate environmental responsibility into their business models not only contribute to the common good but also position themselves to benefit from the growing demand for sustainable products and services.

Giving back to the community is a principle that aligns naturally with Islamic values and the UAE's culture of generosity. Responsible entrepreneurs recognise that their success is not achieved in isolation — it depends on the infrastructure, institutions, and people of the community in which they operate. Giving back can take many forms: donating a portion of profits to charity, sponsoring community events, mentoring young entrepreneurs, volunteering time and expertise, or designing products that address social needs. The concept of halal income — earning money through lawful, ethical means — is central to Islamic business ethics. Halal income is not just about avoiding prohibited activities; it is about ensuring that every aspect of your business — from sourcing materials to treating employees to serving customers — is conducted with integrity and fairness. The Quran states: "O you who have believed, do not consume one another's wealth unjustly but only in business by mutual consent" (Quran 4:29). This verse establishes the principle that all business transactions must be based on mutual agreement and fairness, without deception, coercion, or exploitation.

Islamic principles of business provide a comprehensive ethical framework that covers every aspect of commercial activity. Honesty in transactions means representing products truthfully, disclosing defects, and never deceiving customers. Avoiding deception (gharar) means ensuring that all terms of a transaction are clear and understood by both parties, with no hidden conditions or uncertainties. Fulfilling contracts means honouring every agreement you make, whether written or verbal, and delivering on your commitments. The Prophet Muhammad was known as Al-Amin (The Trustworthy) even before his prophethood, and his reputation for honesty in business was unmatched. He said: "The two parties to a transaction have the right to annul it as long as they have not separated, and if they speak the truth and make everything clear, they will be blessed in their transaction, but if they tell a lie and conceal anything, the blessing on their transaction will be blotted out." This hadith teaches that transparency and honesty bring blessings (barakah) to a business, while deception removes them. Ethical businesses build trust and long-term success because customers return to businesses they trust, employees are loyal to employers who treat them fairly, and communities support companies that contribute positively to their wellbeing. For students who aspire to become entrepreneurs, the message is clear: build your business on a foundation of ethics and responsibility, and you will earn not only financial success but also the respect, trust, and goodwill of everyone your business touches.`,
    reading1Time: 10,
    reading2Time: 10,
    kwlExplanation: KWL_EXPLANATION,
    discussionQuestions: [
      "Why is market research essential before launching a business, and what are the two main types of market research?",
      "What is a Minimum Viable Product (MVP), and why is this approach useful for entrepreneurs?",
      "How does the UAE's entrepreneurial ecosystem support young entrepreneurs, and what organisations provide assistance?",
      "Why is treating employees fairly considered both a moral and a religious obligation in Islam?",
      "How do Islamic principles of honesty and transparency contribute to the long-term success of a business?"
    ],
    keyFacts: [
      "The entrepreneurial journey follows common steps: identify a need, conduct market research, develop a product, create a business model, secure funding, and launch.",
      "Market research can be primary (surveys, interviews) or secondary (industry reports, statistics) and reduces the risk of assumptions.",
      "A Minimum Viable Product (MVP) is a basic version of a product with core features, tested with early users for feedback before full investment.",
      "A business model describes how a business creates, delivers, and captures value — how it makes money.",
      "The Business Model Canvas is a one-page tool for visualising and communicating a business model.",
      "Funding sources include personal savings, family and friends, bank loans, angel investors, venture capital, and government grants.",
      "The Khalifa Fund (established 2007) provides financing, training, and mentoring to Emirati entrepreneurs.",
      "Dubai SME and the Abu Dhabi Department of Economic Development offer support programmes for startups.",
      "Honest business practices are the cornerstone of ethical entrepreneurship — a company's reputation is its most valuable asset.",
      "The Prophet Muhammad said: 'Give the worker his wages before his sweat dries,' emphasising fair and prompt compensation.",
      "Halal income means earning money through lawful, ethical means, ensuring integrity and fairness in every aspect of business.",
      "The Quran states: 'Do not consume one another's wealth unjustly but only in business by mutual consent' (4:29)."
    ],
    visualType: "timeline",
    visualData: {
      title: "Steps to Launch a Startup",
      events: [
        { step: 1, year: "Step 1", label: "Identify a Need", description: "Recognise a problem or gap in the market that your business can address", icon: "search" },
        { step: 2, year: "Step 2", label: "Conduct Market Research", description: "Gather and analyse information about your target market, competitors, and industry", icon: "chart" },
        { step: 3, year: "Step 3", label: "Develop Your Product/Service", description: "Design, prototype, and test your offering, starting with a Minimum Viable Product (MVP)", icon: "lightbulb" },
        { step: 4, year: "Step 4", label: "Create a Business Model", description: "Define your value proposition, revenue streams, cost structure, and distribution channels", icon: "layout" },
        { step: 5, year: "Step 5", label: "Secure Funding", description: "Obtain financing from savings, investors, loans, or government programmes", icon: "banknote" },
        { step: 6, year: "Step 6", label: "Launch and Grow", description: "Introduce your product to the market, gather feedback, and refine your offering for growth", icon: "rocket" }
      ]
    },
    quizQuestions: [
      {
        id: "G9T1U2L5Q1",
        question: "What is the purpose of market research?",
        options: ["To copy competitors' products exactly", "To gather and analyse information about the target market, competitors, and industry to reduce risk", "To convince investors without evidence", "To create advertising campaigns"],
        correctAnswer: 1,
        explanation: "Market research helps entrepreneurs answer critical questions about demand, customer preferences, competition, and market size, reducing the risk of launching a business based on assumptions rather than evidence."
      },
      {
        id: "G9T1U2L5Q2",
        question: "What is a Minimum Viable Product (MVP)?",
        options: ["The most expensive version of a product", "A basic version of a product with only core features, released to early users for feedback", "A product that has been fully developed with all possible features", "A product that is no longer being sold"],
        correctAnswer: 1,
        explanation: "An MVP is a basic version of a product that includes only its core features, released to early users to gather feedback. This approach reduces waste and ensures the final product is shaped by real customer needs."
      },
      {
        id: "G9T1U2L5Q3",
        question: "What did the Prophet Muhammad say about paying workers?",
        options: ["Workers should be paid once a year", "Give the worker his wages before his sweat dries", "Workers should be grateful for any pay", "Workers should not expect payment for their labour"],
        correctAnswer: 1,
        explanation: "The Prophet Muhammad (peace be upon him) said: 'Give the worker his wages before his sweat dries,' emphasising the importance of prompt and fair compensation for workers' labour."
      },
      {
        id: "G9T1U2L5Q4",
        question: "What does 'halal income' mean in the context of business?",
        options: ["Income earned from selling only food products", "Income earned through lawful, ethical means with integrity and fairness in every aspect of business", "Income that is tax-free", "Income earned only during Ramadan"],
        correctAnswer: 1,
        explanation: "Halal income means earning money through lawful, ethical means — ensuring that every aspect of your business, from sourcing to employee treatment to customer service, is conducted with integrity and fairness."
      },
      {
        id: "G9T1U2L5Q5",
        question: "Which UAE organisation was established in 2007 to support Emirati entrepreneurs?",
        options: ["Dubai SME", "Masdar", "Khalifa Fund for Enterprise Development", "Dubai Future Accelerators"],
        correctAnswer: 2,
        explanation: "The Khalifa Fund for Enterprise Development was established in 2007 to provide financing, training, and mentoring to Emirati entrepreneurs, with a focus on developing the national talent pool and promoting entrepreneurship."
      }
    ],
    interactiveStrategies: [
      {
        strategy: "Pitch a Business Idea in 2 Minutes",
        description: "Students prepare and deliver a two-minute pitch for their business idea, practising the essential entrepreneurial skill of persuasive communication.",
        duration: 25,
        instructions: "1. Using the business idea and plan you developed in previous lessons, prepare a two-minute pitch. Your pitch should cover: the problem you are solving, your solution, who your customers are, what makes your idea unique, and how you will make money. 2. Practice your pitch at least three times — once alone, once in front of a mirror, and once for a partner. 3. When delivering your pitch to the class, speak clearly, make eye contact, and show genuine enthusiasm for your idea. 4. After each pitch, the audience (your classmates) will ask one follow-up question, and the pitcher must respond concisely. 5. After all pitches are delivered, the class votes on the most persuasive pitch (not necessarily the best idea, but the best communication of the idea). 6. Reflect on the experience: What was the hardest part about presenting your idea in two minutes? What would you do differently next time?"
      },
      {
        strategy: "Create a Business Model Canvas",
        description: "Students create a Business Model Canvas for their business idea, mapping out all the key elements of how their business would create, deliver, and capture value.",
        duration: 20,
        instructions: "1. Draw the Business Model Canvas template on a large sheet of paper. The canvas has nine sections: Key Partners, Key Activities, Key Resources, Value Propositions, Customer Relationships, Channels, Customer Segments, Cost Structure, and Revenue Streams. 2. For each section, write brief answers related to your business idea: Key Partners — Who do you need to work with? (suppliers, distributors), Key Activities — What do you need to do? (production, marketing), Key Resources — What do you need? (equipment, skills, funding), Value Propositions — What unique value do you offer?, Customer Relationships — How do you interact with customers?, Channels — How do you reach customers? (online, physical store), Customer Segments — Who are your customers?, Cost Structure — What are your main costs?, Revenue Streams — How do you earn money? 3. Review your canvas and identify the strongest and weakest areas. 4. Share your canvas with a partner and provide feedback on each other's models. 5. Revise your canvas based on the feedback received."
      }
    ]
  }
];
