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

export const g7t2Unit4: LessonContent[] = [
  // ─── Lesson 1: Understanding Globalisation ───
  {
    lessonId: 'G7_T2_Unit 4_l1',
    keyVocabulary: ['globalisation', 'interconnected', 'Special Olympics', 'mediator', 'arbitrator'],
    reading1Title: 'Understanding Globalisation',
    reading1Content: `Globalisation is the process by which the world is becoming increasingly interconnected. Countries around the globe now trade with one another more freely, people travel across borders with greater ease, and communication happens instantaneously across vast distances. At its core, globalisation means that events, decisions, and developments in one part of the world can have significant effects on people living in entirely different regions.

There are three key aspects that define globalisation. First, free trade between nations allows countries to buy and sell goods without heavy taxes or restrictions, making products from all over the world available in local markets. Second, the free movement of labour means that people can migrate to find work in other countries, bringing their skills and contributing to diverse economies. Third, more travel opportunities have opened up as airlines expand routes and visa regulations become more flexible, allowing millions of people to explore the world for business, education, or leisure.

Technology has played a central role in eliminating distances that once separated nations. People can now work remotely from their homes, accessing online services and collaborating with colleagues on the other side of the planet. Multinational companies build manufacturing plants in different countries to reduce costs and reach new markets, creating jobs and transferring knowledge across borders. A farmer in Africa can check crop prices on a mobile phone, and a student in the UAE can take an online course from a university in the United Kingdom.

The concept of globalisation is not entirely new. The Silk Road was an ancient network of trade routes that connected China to Europe, passing through Central Asia, the Middle East, and North Africa. For centuries, merchants travelled these routes carrying silk, spices, gold, and precious stones. The Silk Road did not only facilitate the exchange of goods — it also enabled the sharing of ideas, religions, languages, and cultural practices between civilisations. In many ways, the Silk Road was the first great example of globalisation, showing how trade and travel could bring distant peoples together and enrich all participants.

Today, mediators and arbitrators play important roles in resolving disputes that arise between countries and corporations in our globalised economy, ensuring fair outcomes for all parties involved.`,
    reading2Title: 'The Special Olympics and Globalisation',
    reading2Content: `The Special Olympics is a powerful example of how globalisation can be a force for good in the world. Founded by Eunice Kennedy Shriver in 1962, the Special Olympics began as a summer camp in her own backyard, known as Camp Shriver, where children with intellectual disabilities could participate in sports and physical activities. Her vision was that sport could break down barriers and build inclusion. The first International Special Olympics Games were held in 1968 at Soldier Field in Chicago, bringing together 1,000 athletes from the United States and Canada. Since then, the movement has grown into a global phenomenon.

The Special Olympics promotes inclusion and understanding for people with intellectual disabilities through the universal language of sport. Athletes from every corner of the world come together to compete, share their stories, and challenge stereotypes about disability. The organisation now serves millions of athletes in over 190 countries, making it one of the most widely recognised global movements for social change.

The UAE has been at the forefront of promoting inclusion and global cooperation. In 2019, Abu Dhabi hosted the Special Olympics World Games — the first time the event was held in the Middle East and North Africa (MENA) region. Over 7,500 athletes from 190 nations participated, making it one of the largest and most inclusive sporting events in history. The UAE government and local organisations invested heavily in infrastructure, volunteer programmes, and public awareness campaigns to ensure the games were a success. This event demonstrated how a country can use its position on the global stage to champion the rights and dignity of people with intellectual disabilities.

The World Future Energy Summit, held annually in Abu Dhabi, is another example of how globalisation connects nations to address shared challenges. Leaders, scientists, and businesses from around the world gather to discuss sustainable energy solutions, proving that global cooperation is essential for tackling issues like climate change and resource depletion.

Bonang Madise is an inspiring example of someone who has used globalised platforms to advocate for inclusion and social justice. Through international networks and digital media, advocates like Madise show how individuals can amplify their voices and create change that reaches far beyond their own communities.`,
    reading1Time: 8,
    reading2Time: 8,
    kwlExplanation: KWL_EXPLANATION,
    discussionQuestions: [
      'How has globalisation changed the way people in the UAE live and work compared to fifty years ago?',
      'Why was the Silk Road important for the exchange of ideas, not just goods?',
      'What role do mediators and arbitrators play in a globalised economy, and why are they necessary?',
      'How does the Special Olympics demonstrate the positive power of globalisation?',
      'In what ways can events like the World Future Energy Summit help countries work together to solve global problems?',
    ],
    keyFacts: [
      'Globalisation means the world is becoming more interconnected through trade, travel, and communication.',
      'Three key aspects of globalisation are free trade, free movement of labour, and increased travel opportunities.',
      'Technology has eliminated distances — people can work remotely, access online services, and collaborate globally.',
      'The Silk Road was an ancient trade route connecting China to Europe through Central Asia, the Middle East, and North Africa.',
      'The Silk Road facilitated the exchange of goods, ideas, religions, and cultures between civilisations.',
      'The Special Olympics was founded by Eunice Kennedy Shriver in 1962, with the first International Games in 1968.',
      'The UAE hosted the 2019 Special Olympics World Games in Abu Dhabi — the first MENA country to do so.',
      'Over 7,500 athletes from 190 nations participated in the 2019 Special Olympics World Games.',
      'The World Future Energy Summit in Abu Dhabi connects nations to address sustainable energy challenges.',
      'Mediators and arbitrators help resolve international disputes in a globalised economy.',
    ],
    visualType: 'timeline',
    visualData: {
      title: 'Milestones in Globalisation',
      events: [
        { year: 'Ancient', label: 'Silk Road trade routes connect China to Europe', description: 'Network of routes facilitating trade and cultural exchange across continents' },
        { year: '1940s', label: 'First electronic computers developed', description: 'The dawn of computing technology that would eventually connect the world' },
        { year: '1968', label: 'First International Special Olympics Games', description: '1,000 athletes gather in Chicago, beginning a global inclusion movement' },
        { year: '1980s', label: 'The Internet becomes available', description: 'Networks connect researchers and institutions, laying the foundation for the World Wide Web' },
        { year: '1990s', label: 'World Wide Web launched', description: 'Tim Berners-Lee creates the web, making the internet accessible to the public' },
        { year: '2019', label: 'UAE hosts Special Olympics World Games', description: 'Abu Dhabi welcomes 7,500 athletes from 190 nations — first MENA host country' },
      ],
    },
    quizQuestions: [
      {
        id: 'G7T2U4L1Q1',
        question: 'Which of the following is NOT one of the three key aspects of globalisation mentioned in the text?',
        options: ['Free trade between nations', 'Free movement of labour', 'Free education for all citizens', 'More travel opportunities'],
        correctAnswer: 2,
        explanation: 'The three key aspects of globalisation are free trade, free movement of labour, and more travel opportunities. Free education for all citizens is not listed as a key aspect of globalisation.',
      },
      {
        id: 'G7T2U4L1Q2',
        question: 'What was the original name of the summer camp that Eunice Kennedy Shriver started before it became the Special Olympics?',
        options: ['Camp Olympics', 'Camp Inclusion', 'Camp Shriver', 'Camp Kennedy'],
        correctAnswer: 2,
        explanation: 'Eunice Kennedy Shriver started Camp Shriver in her backyard in 1962, which eventually grew into the Special Olympics movement.',
      },
      {
        id: 'G7T2U4L1Q3',
        question: 'Which ancient trade route is considered an early example of globalisation?',
        options: ['The Amber Road', 'The Trans-Saharan Route', 'The Silk Road', 'The Spice Trail'],
        correctAnswer: 2,
        explanation: 'The Silk Road connected China to Europe through Central Asia, the Middle East, and North Africa, facilitating exchange of goods, ideas, and cultures.',
      },
      {
        id: 'G7T2U4L1Q4',
        question: 'What made the 2019 Special Olympics World Games in Abu Dhabi historically significant?',
        options: ['It was the largest sporting event ever held', 'It was the first time the Games were held in the MENA region', 'It was the first time athletes with disabilities competed', 'It was the last Special Olympics ever held'],
        correctAnswer: 1,
        explanation: 'The UAE hosting the 2019 Special Olympics World Games was the first time the event was held in the Middle East and North Africa (MENA) region.',
      },
      {
        id: 'G7T2U4L1Q5',
        question: 'What role do mediators and arbitrators play in the globalised economy?',
        options: ['They create new trade agreements between countries', 'They help resolve disputes between countries and corporations fairly', 'They build infrastructure for multinational companies', 'They regulate the prices of goods in international markets'],
        correctAnswer: 1,
        explanation: 'Mediators and arbitrators help resolve disputes that arise between countries and corporations in a globalised economy, ensuring fair outcomes for all parties.',
      },
    ],
    interactiveStrategies: [
      {
        strategy: 'Think-Pair-Share',
        description: 'Students think individually about how globalisation affects their daily lives, then pair up to discuss, and finally share key insights with the class.',
        duration: 10,
        instructions: '1. Give students 2 minutes to individually list 3 ways globalisation affects their daily life. 2. Pair students and give them 4 minutes to compare their lists and identify common themes. 3. Ask each pair to share their most interesting finding with the whole class. 4. Create a class mind map on the board summarising all the ways globalisation touches daily life.',
      },
      {
        strategy: 'Role Playing',
        description: 'Students take on the roles of different stakeholders in a globalisation scenario and debate the benefits and challenges from their perspective.',
        duration: 15,
        instructions: '1. Assign students one of the following roles: a multinational company CEO, a local shop owner, a migrant worker, a government trade minister, and an environmental activist. 2. Present the scenario: A new multinational company wants to open a factory in the UAE. 3. Give each role 2 minutes to explain their position on this development. 4. Allow 5 minutes for open debate between the roles. 5. Debrief by discussing how globalisation creates different outcomes for different people.',
      },
    ],
  },

  // ─── Lesson 2: What Factors Have Enabled Globalization? ───
  {
    lessonId: 'G7_T2_Unit 4_l2',
    keyVocabulary: ['multilateral', 'unilateral', 'sustainability', 'corporation', 'bloc'],
    reading1Title: 'Factors Enabling Globalisation: ICT and Trade',
    reading1Content: `Several important factors have enabled globalisation to flourish in the modern era. Among the most significant is the rapid development of Information and Communication Technology (ICT). The journey of computing began in the 1940s when the first electronic computers were developed — enormous machines that filled entire rooms. By the 1980s, the internet connected researchers and institutions, and in the 1990s, the World Wide Web made the internet accessible to ordinary people around the world. Today, ICT underpins nearly every aspect of global trade and communication.

ICT has dramatically shortened distances and saved time. Business decisions that once required weeks of travel and face-to-face meetings can now be made in real time through video conferences and digital collaboration tools. Banking and financial transactions that previously took days to process across borders now happen in seconds, enabling the global financial system to operate seamlessly. A company in Dubai can transfer funds to a supplier in Shanghai almost instantaneously, and stock markets around the world are connected in real time.

A key distinction in globalisation is between corporations and multinational corporations. A corporation typically operates within a single country, producing and selling goods primarily to a domestic market. A multinational corporation, on the other hand, operates across multiple countries, establishing factories, offices, and distribution networks around the world. Companies like Apple, Toyota, and Emirates are examples of multinational corporations that rely on global supply chains and international markets.

Regional trade blocs have also been instrumental in promoting globalisation. A trade bloc is a group of countries that agree to reduce or eliminate trade barriers among themselves. USMCA (United States-Mexico-Canada Agreement) links the United States, Canada, and Mexico, succeeding the earlier NAFTA agreement. ASEAN (Association of Southeast Asian Nations) promotes economic integration among ten Southeast Asian countries. The EU (European Union) facilitates free movement of goods, services, people, and capital across Europe. MERCOSUR brings together South American nations, SADC promotes cooperation in Southern Africa, and the GCC (Gulf Cooperation Council) fosters economic ties among the Gulf states, including the UAE.

At the global level, the World Trade Organization (WTO) and the General Agreement on Tariffs and Trade (GATT) regulate international trade. GATT was established in 1947 to reduce trade barriers, and the WTO, created in 1995, continues this mission by resolving trade disputes and negotiating new agreements. These multilateral organisations ensure that trade rules are fair and consistent, while unilateral decisions by individual countries can sometimes disrupt global trade patterns.`,
    reading2Title: 'Sustainability and Global Trade',
    reading2Content: `Sustainability is a crucial consideration in the context of globalisation. It rests on three pillars: social sustainability, which focuses on equity and fairness for all people; environmental sustainability, which involves protecting natural resources and reducing pollution; and economic sustainability, which means maintaining profitability and financial viability over the long term. For globalisation to be truly successful, all three pillars must be balanced — economic growth should not come at the expense of social justice or environmental protection.

Trade blocs offer significant advantages for member countries. They expand markets by giving businesses access to more consumers across the bloc, increase competition which drives innovation and better quality products, enable economies of scale where producing goods in larger quantities reduces costs, and attract increased foreign investment as companies seek to establish operations within the bloc. The GCC, for example, allows the UAE to trade more easily with neighbouring Gulf states, boosting economic growth across the region.

However, trade blocs also have disadvantages. They tend to favour their own member countries, which can make it harder for non-member nations to compete. Membership in a trade bloc can decrease political autonomy, as countries must follow collective decisions rather than acting independently. Small businesses may suffer when they have to compete with larger, more established companies from other member states. Critics argue that trade blocs can create a two-tier global economy where wealthy blocs prosper while less developed regions are left behind.

Renewable energy sources such as solar power and wind power are essential components of environmental sustainability in a globalised world. The UAE has made significant investments in renewable energy, including the Masdar City project in Abu Dhabi, which aims to be one of the most sustainable urban developments in the world. Solar energy is particularly well-suited to the UAE's climate, and large-scale solar farms are helping the country reduce its reliance on fossil fuels.

An economically sustainable transport system is one that covers its operating costs while maintaining profitability over time. In the UAE, investments in public transport, such as the Dubai Metro and the planned Etihad Rail network, demonstrate how countries can build infrastructure that supports both economic growth and environmental sustainability. By reducing road congestion and carbon emissions, these projects contribute to all three pillars of sustainability simultaneously.`,
    reading1Time: 8,
    reading2Time: 8,
    kwlExplanation: KWL_EXPLANATION,
    discussionQuestions: [
      'How has ICT changed the way businesses operate internationally compared to fifty years ago?',
      'What are the advantages and disadvantages of the UAE being part of the GCC trade bloc?',
      'Why is it important to balance the three pillars of sustainability — social, environmental, and economic?',
      'How might a unilateral trade decision by one country affect the global economy?',
      'What role could renewable energy play in making globalisation more sustainable for future generations?',
    ],
    keyFacts: [
      'The first electronic computers were developed in the 1940s, the internet emerged in the 1980s, and the World Wide Web launched in the 1990s.',
      'ICT has shortened distances, saved time, enabled real-time decisions, and facilitated banking and financial transactions.',
      'A corporation operates in one country, while a multinational corporation operates across multiple countries.',
      'Six major regional trade blocs: USMCA (North America), ASEAN (Southeast Asia), EU (Europe), MERCOSUR (South America), SADC (Southern Africa), GCC (Gulf).',
      'The WTO (World Trade Organization) and GATT (General Agreement on Tariffs and Trade) regulate international trade.',
      'The three pillars of sustainability are social (equity), environmental (protecting resources), and economic (maintaining profitability).',
      'Trade bloc advantages include expansion of markets, increased competition, economies of scale, and increased foreign investment.',
      'Trade bloc disadvantages include favouring their own region, decreased political autonomy, and negative effects on small businesses.',
      'Renewable energy sources like solar and wind power are essential for environmental sustainability.',
      'An economically sustainable transport system covers costs while maintaining profitability.',
    ],
    visualType: 'diagram',
    visualData: {
      title: 'Regional Trade Blocs of the World',
      blocs: [
        { name: 'USMCA', region: 'North America', members: 'USA, Canada, Mexico', description: 'Free trade agreement succeeding NAFTA, eliminating barriers between North American nations' },
        { name: 'ASEAN', region: 'Southeast Asia', members: '10 countries including Indonesia, Thailand, Vietnam', description: 'Promotes economic integration and political cooperation in Southeast Asia' },
        { name: 'EU', region: 'Europe', members: '27 member states', description: 'Facilitates free movement of goods, services, people, and capital' },
        { name: 'MERCOSUR', region: 'South America', members: 'Brazil, Argentina, Uruguay, Paraguay, others', description: 'Promotes free trade and fluid movement of goods in South America' },
        { name: 'SADC', region: 'Southern Africa', members: '16 countries including South Africa, Botswana', description: 'Fosters economic cooperation and development in Southern Africa' },
        { name: 'GCC', region: 'Gulf / Middle East', members: 'UAE, Saudi Arabia, Qatar, Bahrain, Kuwait, Oman', description: 'Promotes economic ties and coordination among Gulf states' },
      ],
    },
    quizQuestions: [
      {
        id: 'G7T2U4L2Q1',
        question: 'When was the World Wide Web launched, making the internet accessible to the general public?',
        options: ['1960s', '1970s', '1990s', '2010s'],
        correctAnswer: 2,
        explanation: 'The World Wide Web was launched in the 1990s by Tim Berners-Lee, making the internet accessible to ordinary people around the world.',
      },
      {
        id: 'G7T2U4L2Q2',
        question: 'What is the main difference between a corporation and a multinational corporation?',
        options: ['A corporation is larger than a multinational corporation', 'A corporation operates in one country while a multinational operates across multiple countries', 'A multinational only sells goods online', 'There is no difference between them'],
        correctAnswer: 1,
        explanation: 'A corporation typically operates within a single country, while a multinational corporation operates across multiple countries with factories, offices, and distribution networks worldwide.',
      },
      {
        id: 'G7T2U4L2Q3',
        question: 'Which trade bloc includes the UAE as a member?',
        options: ['USMCA', 'ASEAN', 'EU', 'GCC'],
        correctAnswer: 3,
        explanation: 'The GCC (Gulf Cooperation Council) includes the UAE along with Saudi Arabia, Qatar, Bahrain, Kuwait, and Oman.',
      },
      {
        id: 'G7T2U4L2Q4',
        question: 'Which of the following is a disadvantage of trade blocs?',
        options: ['Expansion of markets for businesses', 'Decreased political autonomy for member countries', 'Increased foreign investment', 'Economies of scale'],
        correctAnswer: 1,
        explanation: 'One disadvantage of trade blocs is that membership can decrease political autonomy, as countries must follow collective decisions rather than acting independently.',
      },
      {
        id: 'G7T2U4L2Q5',
        question: 'What are the three pillars of sustainability?',
        options: ['Political, military, and cultural', 'Social, environmental, and economic', 'Technological, financial, and educational', 'National, regional, and international'],
        correctAnswer: 1,
        explanation: 'The three pillars of sustainability are social (equity and fairness), environmental (protecting natural resources), and economic (maintaining profitability).',
      },
    ],
    interactiveStrategies: [
      {
        strategy: 'Jigsaw Reading',
        description: 'Students become experts on one trade bloc each and then teach their classmates about it.',
        duration: 15,
        instructions: '1. Divide the class into six groups, one for each trade bloc (USMCA, ASEAN, EU, MERCOSUR, SADC, GCC). 2. Give each group 5 minutes to read and become experts on their assigned trade bloc using the textbook content. 3. Reorganise into new groups with one expert from each trade bloc. 4. Each expert has 2 minutes to teach their new group about their trade bloc. 5. As a class, discuss which trade bloc they think is most effective and why.',
      },
      {
        strategy: 'Debate',
        description: 'Students debate whether trade blocs do more good than harm for the global economy.',
        duration: 15,
        instructions: '1. Divide the class into two teams: one arguing that trade blocs benefit the global economy, the other arguing they harm it. 2. Give each team 4 minutes to prepare their arguments using evidence from the readings. 3. Each team presents their opening arguments (2 minutes each). 4. Allow 3 minutes for rebuttal. 5. Hold a class vote on which side presented the stronger case and discuss the outcome.',
      },
    ],
  },

  // ─── Lesson 3: Globalisation and the UAE ───
  {
    lessonId: 'G7_T2_Unit 4_l3',
    keyVocabulary: ['hub', 'strategic location', 'migration', 'multiculturalism', 'consumer'],
    reading1Title: 'The UAE as a Global Hub',
    reading1Content: `A hub is a central point that connects different regions, and the UAE has become one of the world's most important global hubs. Its strategic location between East and West places it at the crossroads of major trade routes, making it a natural meeting point for people, goods, and ideas from every continent. Within just a few hours of flying time, one can reach major cities across Europe, Asia, and Africa from the UAE, giving it an unparalleled geographic advantage.

The UAE has invested heavily in transportation infrastructure across all modes of travel. By air, the country is served by world-class facilities including Dubai World Central, also known as Al Maktoum International Airport, which is planned to become the world's largest airport upon completion. Abu Dhabi International Airport is another major gateway that connects the capital to destinations across the globe. These airports handle tens of millions of passengers each year and serve as transit points connecting flights between continents.

By sea, the UAE boasts some of the busiest and most advanced ports in the world. Jebel Ali Port in Dubai is the largest man-made harbour ever constructed and one of the busiest container ports globally. It serves as a critical link in global shipping routes, handling millions of shipping containers annually. Khalifa Port in Abu Dhabi is another state-of-the-art facility that supports the UAE's growing trade volumes. These ports enable the UAE to import and export goods efficiently, making it a vital node in international supply chains.

By road, the UAE has an extensive highway network that connects all seven emirates and facilitates the movement of people and goods within the country and to neighbouring nations. Modern, multi-lane expressways make road travel fast and efficient.

By rail, the Etihad Rail project is transforming the UAE's transportation landscape. This ambitious railway network connects the emirates and has plans to extend across the GCC, linking the UAE with Saudi Arabia, Oman, and other Gulf states. The GCC rail network, when completed, will create a seamless rail system across the Arabian Peninsula, further enhancing the UAE's role as a regional hub.

Transportation directly affects trade by enabling the efficient movement of goods, market expansion by connecting businesses to new consumers, and the movement of people for work, tourism, and family life. Migration has been a defining feature of the UAE — approximately 8.7 million expatriates live in the country. People are attracted to the UAE for many reasons: its reputation for safety and security, better career and educational opportunities, the presence of friends and family who have already settled there, and the potential for higher income compared to their home countries.`,
    reading2Title: 'Multiculturalism in the UAE',
    reading2Content: `The UAE's economy is built on two key foundations: its oil and gas reserves, and its strategic location as a global hub. While the discovery of oil in the 1950s and 1960s provided the wealth to develop the country rapidly, it is the UAE's position at the centre of global trade routes that has sustained its economic growth and diversification. Today, the UAE is often described as the "most international country" in the world, with approximately 92 per cent of its population having access to the internet and a vast majority of residents having been born in other countries.

Globalisation has brought many positive economic effects to the UAE. The country has attracted foreign investment, developed world-class infrastructure, and become a leading destination for international business and tourism. Cities like Dubai and Abu Dhabi are recognised globally as centres of commerce, innovation, and culture. The UAE's free zones, where foreign companies can operate with full ownership and tax advantages, have been particularly successful in drawing international businesses.

Multiculturalism — the presence of multiple cultures living alongside one another — is one of the UAE's most defining characteristics. People from over 200 nationalities call the UAE home, creating a society that is incredibly diverse. This diversity brings many advantages. People can make friends from all over the world, developing a global network of connections. Exposure to different cultures fosters open-mindedness and tolerance, as people learn to appreciate different perspectives, traditions, and ways of life. The UAE has made tolerance a national value, establishing the Ministry of Tolerance and hosting events that celebrate cultural diversity.

However, multiculturalism also presents challenges. The education system must constantly adapt to serve students from many different backgrounds, languages, and learning needs. Professional prejudice can sometimes arise when people hold stereotypes about certain nationalities or cultures. There is a fear among some Emirati citizens that rapid globalisation could lead to the loss of local identity, traditions, and the Arabic language. Social conflict can occur when cultural misunderstandings arise between communities with very different values and customs.

The pressure on local culture from rapid globalisation is a genuine concern. As international brands, media, and lifestyles become dominant, there is a risk that traditional Emirati customs and values could be overshadowed. The UAE government has taken steps to preserve Emirati heritage while still embracing the benefits of globalisation, recognising that a balance between tradition and modernity is essential for the country's future.`,
    reading1Time: 8,
    reading2Time: 8,
    kwlExplanation: KWL_EXPLANATION,
    discussionQuestions: [
      'Why is the UAE described as a "hub" rather than just a destination? What makes it different from other countries?',
      'How does the UAE\'s strategic location between East and West benefit its economy and its people?',
      'What are the advantages and challenges of living in a multicultural society like the UAE?',
      'Why might some Emirati citizens worry about the loss of local identity, and what can be done to preserve it?',
      'How has migration shaped the UAE into the country it is today?',
    ],
    keyFacts: [
      'A hub is a central point connecting different regions — the UAE is a major global hub.',
      'The UAE has a strategic location between East and West at the crossroads of major trade routes.',
      'Dubai World Central (Al Maktoum International Airport) is planned to be the world\'s largest airport.',
      'Jebel Ali Port is the largest man-made harbour ever constructed and one of the busiest container ports globally.',
      'Khalifa Port in Abu Dhabi is a state-of-the-art facility supporting growing trade volumes.',
      'Etihad Rail connects the emirates and plans to extend across the GCC rail network.',
      'Approximately 8.7 million expatriates live in the UAE, attracted by safety, opportunities, and income.',
      'The UAE is described as the "most international country" with 92% internet access.',
      'People from over 200 nationalities call the UAE home.',
      'The UAE has established the Ministry of Tolerance to promote cultural understanding and coexistence.',
    ],
    visualType: 'map',
    visualData: {
      title: 'UAE Strategic Location and Transport Hubs',
      center: { name: 'UAE', description: 'Strategic hub between East and West' },
      transportHubs: [
        { type: 'Air', name: 'Al Maktoum International Airport', location: 'Dubai', description: 'Planned world\'s largest airport' },
        { type: 'Air', name: 'Abu Dhabi International Airport', location: 'Abu Dhabi', description: 'Major international gateway' },
        { type: 'Sea', name: 'Jebel Ali Port', location: 'Dubai', description: 'Largest man-made harbour in the world' },
        { type: 'Sea', name: 'Khalifa Port', location: 'Abu Dhabi', description: 'State-of-the-art container port' },
        { type: 'Rail', name: 'Etihad Rail', location: 'Nationwide', description: 'Connecting emirates and planned GCC rail network' },
        { type: 'Road', name: 'UAE Highway Network', location: 'Nationwide', description: 'Extensive expressways connecting all seven emirates' },
      ],
      connections: [
        { direction: 'West', region: 'Europe', flightHours: '~6' },
        { direction: 'East', region: 'Asia', flightHours: '~4-8' },
        { direction: 'South', region: 'Africa', flightHours: '~4-6' },
      ],
    },
    quizQuestions: [
      {
        id: 'G7T2U4L3Q1',
        question: 'What makes Jebel Ali Port historically significant?',
        options: ['It is the oldest port in the Middle East', 'It is the largest man-made harbour ever constructed', 'It only handles oil tankers', 'It was built by the British in the 1800s'],
        correctAnswer: 1,
        explanation: 'Jebel Ali Port in Dubai is the largest man-made harbour ever constructed and one of the busiest container ports in the world.',
      },
      {
        id: 'G7T2U4L3Q2',
        question: 'Approximately how many expatriates live in the UAE?',
        options: ['1.7 million', '4.7 million', '8.7 million', '12.7 million'],
        correctAnswer: 2,
        explanation: 'Approximately 8.7 million expatriates live in the UAE, making it one of the most international countries in the world.',
      },
      {
        id: 'G7T2U4L3Q3',
        question: 'What is Etihad Rail designed to do?',
        options: ['Only transport oil across the UAE', 'Connect the emirates and extend across the GCC', 'Replace all road transportation in the UAE', 'Only serve passengers between Dubai and Abu Dhabi'],
        correctAnswer: 1,
        explanation: 'Etihad Rail connects the emirates and has plans to extend across the GCC, linking the UAE with Saudi Arabia, Oman, and other Gulf states.',
      },
      {
        id: 'G7T2U4L3Q4',
        question: 'Which of the following is a disadvantage of multiculturalism in the UAE?',
        options: ['People can make friends from around the world', 'Exposure to different cultures fosters open-mindedness', 'Fear of losing local identity and traditions', 'The UAE becomes more attractive to tourists'],
        correctAnswer: 2,
        explanation: 'One of the disadvantages of multiculturalism is the fear that rapid globalisation could lead to the loss of local Emirati identity, traditions, and the Arabic language.',
      },
      {
        id: 'G7T2U4L3Q5',
        question: 'What percentage of the UAE population has internet access, according to the text?',
        options: ['62%', '78%', '85%', '92%'],
        correctAnswer: 3,
        explanation: 'The UAE is described as the "most international country" with approximately 92 per cent of its population having access to the internet.',
      },
    ],
    interactiveStrategies: [
      {
        strategy: 'Mind Mapping',
        description: 'Students create a detailed mind map showing how the UAE serves as a global hub across different transportation modes.',
        duration: 12,
        instructions: '1. Write "UAE as a Global Hub" in the centre of a large sheet of paper. 2. Create four main branches: Air, Sea, Road, and Rail. 3. Under each branch, add specific examples from the reading (e.g., Jebel Ali Port under Sea). 4. Add a fifth branch for "Why People Come" and list reasons for migration. 5. Share mind maps with a partner and add any details you missed. 6. Display the best mind maps around the classroom.',
      },
      {
        strategy: 'Gallery Walk',
        description: 'Students rotate around the classroom examining information stations about different aspects of the UAE as a global hub.',
        duration: 15,
        instructions: '1. Set up five stations around the room: Air Transport, Sea Transport, Road and Rail, Migration, and Multiculturalism. 2. Place key facts, images, and questions at each station. 3. Divide students into five groups and assign each group to a starting station. 4. Give groups 3 minutes at each station to read, discuss, and answer the question on a response sheet. 5. Rotate groups until all have visited every station. 6. Review answers as a class and discuss the most interesting findings.',
      },
    ],
  },

  // ─── Lesson 4: Advantages and Disadvantages of Globalisation ───
  {
    lessonId: 'G7_T2_Unit 4_l4',
    keyVocabulary: ['supply', 'demand', 'scarcity', 'consumer', 'virtual'],
    reading2Title: 'Technology and the Globalised World',
    reading2Content: `The sheer scale of global mobility is staggering. In 2016 alone, approximately 3.6 billion passengers travelled by air, demonstrating that people around the world are more mobile than at any point in human history. This figure reflects not only the growth of tourism and business travel but also the increasing interconnectedness of families and communities spread across continents. Air travel has become more affordable and accessible, allowing people from many income levels to explore the world.

Globalisation and technology are deeply intertwined — each drives the other forward. Advances in technology make globalisation possible by enabling instant communication and efficient logistics, while globalisation creates the demand for even more technological innovation. Consider how social media has transformed the way people plan events and activities. Just a generation ago, organising a trip or an event required phone calls, physical visits to travel agents, and printed brochures. Today, people use social media platforms and online booking systems to plan everything from holidays to conferences, comparing prices and reading reviews in real time.

The concept of "Poor but happy" reminds us that happiness and well-being are not solely dependent on wealth. While globalisation has lifted millions out of poverty and created enormous economic opportunities, it has also revealed that material prosperity alone does not guarantee a fulfilling life. Many communities around the world maintain strong social bonds, cultural traditions, and a sense of purpose that contribute to happiness, even without high incomes. This insight challenges the assumption that economic growth should always be the primary goal of globalisation.

Supply and demand principles are visible in everyday UAE life. When a popular new smartphone is released, demand often exceeds supply, leading to long queues and premium prices. When a product is widely available and few people want it, prices drop. During major shopping festivals like the Dubai Shopping Festival, retailers lower prices to increase demand, while during peak travel seasons, airlines raise prices because demand for seats is high. The UAE's position as a consumer market means that global supply chains directly affect what products are available and at what price.

The virtual world has become an integral part of how people experience globalisation. From virtual meetings that connect colleagues across continents to online marketplaces that deliver products from anywhere in the world, the boundary between the physical and the virtual continues to blur. For consumers in the UAE, this means access to goods, services, and experiences that were unimaginable just a few decades ago.`,
    reading1Title: 'Supply, Demand and Global Trade',
    reading1Content: `Understanding supply and demand is essential for grasping how globalisation affects economies and individuals. Supply refers to the amount of a product or service that is available for purchase, while demand refers to how much of that product or service people want to buy. When supply exceeds demand — meaning there is more of a product available than people want — prices tend to fall as sellers compete for buyers. When demand exceeds supply — meaning more people want a product than is available — prices tend to increase as buyers compete for limited goods.

Scarcity, the condition of having limited resources to meet unlimited wants, is a fundamental concept that drives economic decisions at every level. Whether it is a family budgeting its income or a nation allocating its natural resources, scarcity forces choices about what to produce, how to produce it, and who receives the benefits. In a globalised world, scarcity in one region can affect prices and availability in another, as supply chains stretch across continents.

Globalisation offers many advantages. There are more job opportunities for foreigners, as multinational companies create positions that attract workers from around the world. People gain access to international markets, allowing consumers to purchase products from virtually any country. Technology transfer enables developing nations to adopt advanced methods and systems more quickly than if they had to develop them independently. Cultural exchange enriches societies by exposing people to different traditions, cuisines, arts, and perspectives. Cheaper goods become available as companies source materials and labour from the most cost-effective locations. Improved communication connects people instantly across borders, fostering collaboration and understanding. Medical advances are shared more rapidly, improving health outcomes globally. Educational opportunities expand as students can study at foreign institutions in person or online. Infrastructure development accelerates as investment flows to growing economies. Diplomatic relations improve as countries become more interdependent. And international cooperation increases as nations work together to address shared challenges like climate change and public health.

However, globalisation also has significant disadvantages. Fewer jobs for locals in some sectors occur when foreign workers are willing to accept lower wages. Cultural erosion happens as dominant global cultures overshadow local traditions and languages. Environmental damage from transport — including air pollution from shipping and aviation — is a growing concern. Exploitation of workers in developing countries can occur when multinational companies seek the cheapest labour without adequate protections. Loss of traditional industries happens when local producers cannot compete with cheaper imports. And economic dependency arises when countries rely too heavily on foreign investment and trade, making them vulnerable to external economic shocks.`,
    reading1Time: 8,
    reading2Time: 8,
    kwlExplanation: KWL_EXPLANATION,
    discussionQuestions: [
      'Can you think of a time when you noticed supply and demand affecting prices in a UAE shop or online store?',
      'Which advantage of globalisation do you think is the most important, and why?',
      'Do you think the disadvantages of globalisation outweigh the advantages? Explain your reasoning.',
      'How does the "Poor but happy" concept challenge common assumptions about wealth and well-being?',
      'In what ways has technology changed how you personally plan events or travel compared to how your parents might have done it?',
    ],
    keyFacts: [
      'When supply exceeds demand, prices fall; when demand exceeds supply, prices increase.',
      'Scarcity — limited resources to meet unlimited wants — drives economic decisions at every level.',
      'Advantages of globalisation include more job opportunities, access to international markets, technology transfer, cultural exchange, and cheaper goods.',
      'Globalisation also brings improved communication, shared medical advances, expanded educational opportunities, and infrastructure development.',
      'Disadvantages include fewer jobs for locals in some sectors, cultural erosion, and environmental damage from transport.',
      'Exploitation of workers in developing countries and loss of traditional industries are serious concerns of globalisation.',
      'In 2016, approximately 3.6 billion passengers travelled by air worldwide.',
      'Social media has transformed event planning — people now use online booking instead of phone calls and physical trips.',
      'The "Poor but happy" concept shows that happiness is not dependent solely on wealth.',
      'Supply and demand examples in the UAE include shopping festivals and seasonal travel price changes.',
    ],
    visualType: 'venn',
    visualData: {
      title: 'Advantages and Disadvantages of Globalisation',
      leftSet: {
        label: 'Advantages',
        items: ['More job opportunities', 'Access to international markets', 'Technology transfer', 'Cultural exchange', 'Cheaper goods', 'Improved communication', 'Medical advances shared', 'Educational opportunities', 'Infrastructure development'],
      },
      rightSet: {
        label: 'Disadvantages',
        items: ['Fewer local jobs in some sectors', 'Cultural erosion', 'Environmental damage from transport', 'Exploitation of workers', 'Loss of traditional industries', 'Economic dependency'],
      },
      overlap: {
        label: 'Both Sides',
        items: ['Affects economies worldwide', 'Creates winners and losers', 'Requires careful management and policy'],
      },
    },
    quizQuestions: [
      {
        id: 'G7T2U4L4Q1',
        question: 'What happens to prices when demand exceeds supply?',
        options: ['Prices stay the same', 'Prices fall', 'Prices increase', 'Prices are set by the government'],
        correctAnswer: 2,
        explanation: 'When demand exceeds supply, prices tend to increase because buyers compete for limited goods, driving prices up.',
      },
      {
        id: 'G7T2U4L4Q2',
        question: 'Approximately how many air passengers were there worldwide in 2016?',
        options: ['1.6 billion', '2.6 billion', '3.6 billion', '4.6 billion'],
        correctAnswer: 2,
        explanation: 'In 2016, approximately 3.6 billion passengers travelled by air, showing the enormous scale of global mobility.',
      },
      {
        id: 'G7T2U4L4Q3',
        question: 'Which of the following is an advantage of globalisation?',
        options: ['Cultural erosion of local traditions', 'Technology transfer to developing nations', 'Exploitation of workers in developing countries', 'Economic dependency on foreign investment'],
        correctAnswer: 1,
        explanation: 'Technology transfer enables developing nations to adopt advanced methods and systems more quickly, which is a key advantage of globalisation.',
      },
      {
        id: 'G7T2U4L4Q4',
        question: 'What does the concept of "scarcity" mean in economics?',
        options: ['There are unlimited resources available', 'Limited resources cannot meet unlimited wants', 'Prices always go up', 'Supply always exceeds demand'],
        correctAnswer: 1,
        explanation: 'Scarcity means that limited resources cannot meet unlimited wants, forcing choices about what to produce, how to produce, and who receives the benefits.',
      },
      {
        id: 'G7T2U4L4Q5',
        question: 'How has social media changed the way people plan events compared to the past?',
        options: ['People now plan less events than before', 'People use social media and online booking instead of phone calls and physical trips', 'Social media has had no effect on event planning', 'People still plan events the exact same way'],
        correctAnswer: 1,
        explanation: 'Social media has transformed event planning — people now use online platforms and booking systems instead of phone calls and physical visits to travel agents.',
      },
    ],
    interactiveStrategies: [
      {
        strategy: 'Four Corners Debate',
        description: 'Students move to different corners of the room to express their opinion on globalisation statements, then discuss their reasoning.',
        duration: 12,
        instructions: '1. Label the four corners of the room: Strongly Agree, Agree, Disagree, Strongly Disagree. 2. Read a statement about globalisation (e.g., "Globalisation does more good than harm" or "The UAE should limit foreign workers to protect local jobs"). 3. Students move to the corner that best represents their opinion. 4. Give each corner 2 minutes to discuss their reasoning. 5. One spokesperson from each corner shares their group\'s argument. 6. Repeat with a new statement. Allow students to change corners if their opinion shifts.',
      },
      {
        strategy: 'Supply and Demand Simulation',
        description: 'Students participate in a hands-on simulation to experience how supply and demand affect prices.',
        duration: 15,
        instructions: '1. Give each student 10 "dirham" tokens. 2. Display a limited number of popular items (e.g., 5 vouchers for a homework pass). 3. Round 1: Students bid on items — observe how prices rise with high demand and limited supply. 4. Round 2: Add many more items (e.g., 20 vouchers) — observe how prices fall when supply exceeds demand. 5. Debrief: Ask students to explain what happened to prices in each round and connect it to real-world examples like the Dubai Shopping Festival or airline ticket pricing.',
      },
    ],
  },

  // ─── Lesson 5: The Individual in a Globalised World ───
  {
    lessonId: 'G7_T2_Unit 4_l5',
    keyVocabulary: ['confidentiality', 'quote', 'digital divide', 'sustainability', 'virtual'],
    reading1Title: 'ICT and the Individual',
    reading1Content: `Information and Communication Technology has transformed the life of the individual in profound and far-reaching ways. Perhaps the most obvious change is the access to information from virtually anywhere. A student in Ras Al Khaimah can research the same academic journals as a student in London, and a doctor in Al Ain can consult the latest medical databases alongside colleagues in New York. This democratisation of information has empowered individuals to learn, make decisions, and participate in global conversations like never before.

Educational opportunities have expanded enormously through online learning. Platforms such as Coursera, edX, and local UAE initiatives offer courses from the world's best universities, often for free or at low cost. Students who might never have the chance to study abroad can now earn qualifications from international institutions without leaving their homes. In the UAE, smart learning initiatives in schools have integrated technology into daily education, preparing students for a digital future.

The workforce has also been transformed by ICT. Remote work, once rare, has become commonplace, allowing people to work for companies based in other countries without relocating. A software developer in Sharjah can work for a tech company in Silicon Valley, and a marketing professional in Abu Dhabi can manage campaigns for clients across Europe. This flexibility has created new career paths and income opportunities for individuals in the UAE and around the world.

ICT also provides critical support for people of determination — individuals with disabilities — through assistive technology. Screen readers help visually impaired people access digital content, voice recognition software allows people with mobility limitations to control computers, and specialised apps help those with communication difficulties express themselves. The UAE has been a regional leader in promoting accessibility and inclusion for people of determination, with laws and initiatives that ensure technology serves everyone.

Amy Jo Martin, a prominent entrepreneur and author, captured the power of digital communication in her famous quote: "Social media is the ultimate equaliser. It gives a voice to anyone willing to engage." This means that in the digital age, anyone with internet access can share their ideas, advocate for causes, and connect with like-minded people regardless of their background, wealth, or social status.

However, the digital divide remains a serious concern. Not everyone has equal access to technology and the internet. People in rural areas, lower-income communities, and some developing countries may lack reliable internet connections or affordable devices. This inequality creates a gap between those who can participate fully in the digital world and those who cannot, limiting opportunities for education, employment, and social connection. Confidentiality is another major concern — as more personal data is shared online, protecting that information from misuse, theft, or unauthorised access becomes increasingly important. Individuals must be aware of their digital footprint and take steps to safeguard their privacy in an interconnected world.`,
    reading2Title: 'ICT, Society and Sustainability',
    reading2Content: `The impact of ICT on society is both profound and complex, with significant positive and negative dimensions. On the positive side, ICT has revolutionised communication, enabling people to stay in touch with family and friends across the globe through video calls, messaging apps, and social media. Healthcare has been transformed through digital records, telemedicine, and medical research collaboration across borders. Education has been enriched through interactive learning tools, online courses, and virtual classrooms that reach students in the most remote locations.

However, the negative impacts must also be acknowledged. The digital divide creates inequality between those who have access to technology and those who do not, widening the gap between rich and poor communities and nations. Privacy concerns grow as companies and governments collect vast amounts of personal data, sometimes without the full knowledge or consent of individuals. Social isolation can occur when people spend excessive time on digital devices, reducing face-to-face interactions and weakening community bonds.

One of the most inspiring applications of ICT is in providing medical care to remote and underserved areas. Drones are now being used to deliver medical supplies — including blood, vaccines, and essential medicines — to regions where road infrastructure is poor or non-existent. In Rwanda and Ghana, drone delivery networks have saved lives by reducing the time it takes to deliver blood from hours to minutes. Remote surgery monitoring allows specialists in one country to guide surgeons in another through real-time video and data connections. Telemedicine enables patients in rural areas to consult doctors in major cities without travelling, reducing costs and improving health outcomes.

Sustainability at the individual level may seem like a small contribution, but when millions of people make sustainable choices, the cumulative impact is enormous. Simple actions that anyone can take include switching off lights when they are not needed, setting air conditioning to 25°C to reduce energy consumption, turning off taps to conserve water, carrying spare bags instead of using single-use plastic, and refusing plastic bags when shopping. In the UAE, where air conditioning accounts for a significant portion of electricity use, setting thermostats to 25°C can make a meaningful difference in energy consumption.

The connection between individual choices and global impact is at the heart of sustainability in a globalised world. Every product we buy, every resource we consume, and every piece of technology we use has a chain of effects that reaches far beyond our immediate surroundings. By making conscious, sustainable choices, individuals contribute to a healthier planet and a more equitable global society. The virtual world gives us unprecedented power to learn about these connections and to act on them, but it also requires us to be responsible digital citizens who protect our privacy, respect others, and use technology for the common good.`,
    reading1Time: 8,
    reading2Time: 8,
    kwlExplanation: KWL_EXPLANATION,
    discussionQuestions: [
      'How does the digital divide affect opportunities for people in different parts of the world, and what could be done to reduce it?',
      'What does Amy Jo Martin\'s quote about social media mean to you? Can you think of an example where social media gave someone a voice?',
      'Why is confidentiality important in the digital age, and what steps can you take to protect your personal information online?',
      'How is ICT being used to provide medical care in remote areas, and why is this significant?',
      'Which of the sustainability actions mentioned in the reading do you already practice, and which could you start doing today?',
    ],
    keyFacts: [
      'ICT gives individuals access to information from virtually anywhere in the world.',
      'Online learning platforms offer courses from top universities, expanding educational opportunities.',
      'Remote work allows people to work for companies in other countries without relocating.',
      'Assistive technology supports people of determination — screen readers, voice recognition, and specialised apps.',
      'Amy Jo Martin said: "Social media is the ultimate equaliser. It gives a voice to anyone willing to engage."',
      'The digital divide means not everyone has equal access to technology, creating inequality.',
      'Confidentiality is the protection of personal data in a connected world from misuse or unauthorised access.',
      'Drones deliver medical supplies to remote areas, and telemedicine connects patients with doctors remotely.',
      'Individual sustainability actions include switching off lights, setting AC to 25°C, turning off taps, and refusing plastic bags.',
      'Individual choices have a global impact through supply chains, resource consumption, and environmental effects.',
    ],
    visualType: 'diagram',
    visualData: {
      title: 'ICT Impacts: Individual vs Society',
      sections: [
        {
          label: 'Positive Impacts on the Individual',
          items: ['Access to information from anywhere', 'Online educational opportunities', 'Remote work and career flexibility', 'Assistive technology for people of determination', 'Social media giving everyone a voice'],
        },
        {
          label: 'Negative Impacts on the Individual',
          items: ['Digital divide and unequal access', 'Privacy and confidentiality risks', 'Digital fatigue and screen addiction', 'Personal data vulnerability'],
        },
        {
          label: 'Positive Impacts on Society',
          items: ['Improved healthcare through telemedicine', 'Medical drones reaching remote areas', 'Enhanced communication across borders', 'Collaborative research and innovation', 'Sustainable technology solutions'],
        },
        {
          label: 'Negative Impacts on Society',
          items: ['Widening inequality between connected and unconnected communities', 'Mass data collection and surveillance concerns', 'Social isolation from excessive screen time', 'E-waste and environmental impact of technology'],
        },
      ],
    },
    quizQuestions: [
      {
        id: 'G7T2U4L5Q1',
        question: 'What is the "digital divide"?',
        options: ['The gap between old and new technology', 'The inequality in access to technology and the internet between different groups', 'The difference between desktop and mobile devices', 'The speed difference between broadband and dial-up internet'],
        correctAnswer: 1,
        explanation: 'The digital divide refers to the inequality between those who have access to technology and the internet and those who do not, creating gaps in opportunities for education, employment, and social connection.',
      },
      {
        id: 'G7T2U4L5Q2',
        question: 'According to Amy Jo Martin, why is social media the "ultimate equaliser"?',
        options: ['It makes everyone use the same devices', 'It gives a voice to anyone willing to engage, regardless of background or wealth', 'It ensures everyone earns the same income', 'It eliminates all differences between people'],
        correctAnswer: 1,
        explanation: 'Amy Jo Martin said social media gives a voice to anyone willing to engage, meaning anyone with internet access can share ideas and advocate for causes regardless of their background, wealth, or social status.',
      },
      {
        id: 'G7T2U4L5Q3',
        question: 'How are drones being used to support healthcare in remote areas?',
        options: ['They are used to transport doctors to remote villages', 'They deliver medical supplies like blood, vaccines, and medicines to areas with poor road infrastructure', 'They perform surgeries on patients remotely', 'They replace hospitals entirely in developing countries'],
        correctAnswer: 1,
        explanation: 'Drones are being used to deliver medical supplies — including blood, vaccines, and essential medicines — to regions where road infrastructure is poor, dramatically reducing delivery times and saving lives.',
      },
      {
        id: 'G7T2U4L5Q4',
        question: 'Why is setting your air conditioning to 25°C considered a sustainable action in the UAE?',
        options: ['It makes the air conditioning unit last longer', 'It reduces energy consumption, which lowers electricity use and environmental impact', 'It is required by UAE law', 'It makes the room exactly the same temperature as outside'],
        correctAnswer: 1,
        explanation: 'Setting air conditioning to 25°C reduces energy consumption. In the UAE, where air conditioning accounts for a significant portion of electricity use, this can make a meaningful difference in reducing environmental impact.',
      },
      {
        id: 'G7T2U4L5Q5',
        question: 'What does "confidentiality" mean in the context of ICT?',
        options: ['Keeping your computer password secret from your family', 'Protecting personal data from misuse, theft, or unauthorised access in a connected world', 'Never sharing any information with anyone online', 'Using only encrypted messaging apps'],
        correctAnswer: 1,
        explanation: 'Confidentiality in ICT means protecting personal data from misuse, theft, or unauthorised access. As more data is shared online, safeguarding privacy becomes increasingly important for individuals and organisations.',
      },
    ],
    interactiveStrategies: [
      {
        strategy: 'KWL Chart Completion',
        description: 'Students complete a KWL chart about ICT and the individual, reflecting on what they know, want to know, and have learned.',
        duration: 10,
        instructions: '1. Draw a three-column chart on paper: Know, Want to Know, Learned. 2. In the "Know" column, write 3 things you already know about how ICT affects your life. 3. In the "Want to Know" column, write 2 questions you have about ICT, privacy, or sustainability. 4. After completing both readings, fill in the "Learned" column with 3 new things you discovered. 5. Share your most surprising "Learned" item with a partner. 6. Discuss as a class: Which questions are still unanswered?',
      },
      {
        strategy: 'Sustainability Pledge',
        description: 'Students create a personal sustainability pledge based on the actions discussed in the reading and commit to following it for one week.',
        duration: 12,
        instructions: '1. Review the sustainability actions from the reading: switch off lights, set AC to 25°C, turn off taps, carry spare bags, refuse plastic bags. 2. Add two more sustainability actions of your own that relate to ICT or daily life. 3. Write a personal sustainability pledge on a card, selecting at least 5 actions you will commit to for one week. 4. Share your pledge with a partner who will be your "sustainability buddy" — you will check in with each other. 5. Create a simple tracker to mark off each day you successfully follow your pledge. 6. At the end of the week, reflect on which actions were easy and which were challenging, and discuss as a class.',
      },
    ],
  },
];

export function getG7T2Unit4LessonContent(lessonId: string): LessonContent | null {
  return g7t2Unit4.find(l => l.lessonId === lessonId) || null;
}
