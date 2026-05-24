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

export const g7t3Unit9: LessonContent[] = [
  // ─── LESSON 1 ───
  {
    lessonId: 'G7_T3_Unit 9_l1',
    keyVocabulary: ['biodiversity hotspot', 'nomadic', 'semi-arid', 'river basin', 'Turkic'],
    reading1Title: 'An Introduction to Central Asia',
    reading1Content: `Central Asia is a vast and fascinating region made up of five countries: Kazakhstan, Kyrgyzstan, Tajikistan, Turkmenistan, and Uzbekistan. Each of these nations shares a common suffix in its name, "-stan," which comes from the Persian language and means "land of." For example, Kazakhstan literally translates to "Land of the Wanderers," because the word "Kaz" means wanderer in the Turkic language. This name reflects the deep historical roots of the region, where nomadic horse-riding tribesmen once roamed the open plains and steppes alongside cultural groups who established permanent settlements.

In the early days of Central Asian history, different groups frequently fought over resources. The dry terrain made it difficult to grow enough food or find sufficient water, leading to competition and conflict between tribes and settlements. Over time, international trade emerged as a powerful solution to these challenges. By connecting with neighbouring regions and exchanging goods, Central Asian peoples could access resources they lacked and share their own surplus with others. This spirit of trade and cooperation became one of the defining characteristics of the region.

Central Asia is home to several famous and historically significant cities. Astana (now known as Nur-Sultan and then back to Astana) is the capital of Kazakhstan, while Bishkek serves as the capital of Kyrgyzstan. Dushanbe is the capital of Tajikistan, and Ashgabat is the capital of Turkmenistan. The ancient cities of Bukhara and Samarkand, both located in Uzbekistan, are legendary for their stunning architecture and their role as major trading centres on the Silk Road. Geographically, Central Asia sits in a strategically important position between China to the east, Russia to the north, and India to the south, making it a natural crossroads for trade and cultural exchange.

The environment of Central Asia is remarkably diverse. The region features vast deserts, towering mountain ranges, and expansive steppe grasslands that stretch for hundreds of kilometres. The climate is predominantly semi-arid, meaning it receives very little rainfall and experiences hot, dry summers. In the northern areas, winters can be extremely cold, with temperatures plummeting well below freezing. In contrast, the southern regions enjoy milder, warmer winters. Water scarcity has been one of the greatest challenges for the people of Central Asia, and this has led to an uneven distribution of the population. Most people live along riverbanks and in the foothills of mountains, where water is more readily available for drinking, farming, and daily life.`,
    reading2Title: 'Mountains, Rivers, and Biodiversity',
    reading2Content: `The mountain ranges of Central Asia are truly remarkable and are considered biodiversity hotspots, meaning they support an exceptionally wide range of plant and animal species. These mountains provide a wealth of natural resources, including wood from forested slopes, animals for hunting and herding, fresh water from glaciers and streams, and a variety of fruits and nuts that grow in the valleys and foothills. The Turkestan Range is one of the most significant mountain ranges in the region, stretching through the territories of Kyrgyzstan, Tajikistan, and Uzbekistan. Its highest point is Piramidalny Peak, which rises to an impressive 5,510 metres above sea level, making it one of the tallest peaks in all of Central Asia.

Despite the towering mountains, more than sixty percent of Central Asia's land area is covered by dry desert. These vast, arid landscapes receive very little rainfall and can be inhospitable to human settlement. However, the region is also home to several major rivers that serve as lifelines for the people and ecosystems. The Amu Darya is the largest river system in Central Asia, and it flows through all five of the "Stans" as well as Afghanistan. The Syr Darya is another major river, along with the Irtysh, the Hari, and the Murghab. These rivers provide essential water for agriculture, drinking, and industry, and their fertile banks have supported civilisations for thousands of years.

The tough terrain and harsh climate of Central Asia made settlement difficult throughout history, and this often led to conflict as different groups competed for control of the most valuable resources, particularly water and fertile land. Even today, the management and sharing of water resources remains a critical issue in the region. However, modern governments in Central Asia are working together to share these precious resources diplomatically, recognising that cooperation is far more beneficial than conflict.

There is an interesting connection between Central Asia and the United Arab Emirates. Both regions face similar challenges when it comes to water scarcity and the need for careful resource management in arid environments. Just as Central Asian nations must carefully manage their rivers and mountain water sources, the UAE has developed innovative solutions for providing water in a desert landscape, including desalination plants and water conservation programmes. Studying how different regions address similar environmental challenges can help us appreciate the ingenuity and resilience of human societies across the world.`,
    reading1Time: 8,
    reading2Time: 8,
    kwlExplanation: KWL_EXPLANATION,
    discussionQuestions: [
      'Why do you think the "-stan" suffix is shared by all five Central Asian countries, and what does this tell us about the region\'s history?',
      'How did the semi-arid climate of Central Asia influence where people chose to settle?',
      'What role did international trade play in reducing conflict between different groups in Central Asia?',
      'How are the environmental challenges faced by Central Asia similar to those faced by the UAE?',
      'Why do you think most of Central Asia\'s population lives along riverbanks and in mountain foothills?'
    ],
    keyFacts: [
      'Central Asia consists of five countries: Kazakhstan, Kyrgyzstan, Tajikistan, Turkmenistan, and Uzbekistan.',
      'The suffix "-stan" comes from Persian and means "land of."',
      'Kazakhstan means "Land of the Wanderers" — "Kaz" means wanderer in Turkic.',
      'Early inhabitants included nomadic horse-riding tribesmen and settled cultural groups.',
      'Over 60% of Central Asia is covered by dry desert.',
      'The Amu Darya is the largest river system, flowing through all five Stans and Afghanistan.',
      'The Turkestan Range stretches through Kyrgyzstan, Tajikistan, and Uzbekistan.',
      'Piramidalny Peak is the highest point in the Turkestan Range at 5,510 metres.',
      'Central Asia has a semi-arid climate with hot, dry summers and cold northern winters.',
      'Water scarcity has led to most of the population living along riverbanks and mountain foothills.'
    ],
    visualType: 'map',
    visualData: {
      title: 'Central Asia: Countries, Rivers, and Mountain Ranges',
      countries: ['Kazakhstan', 'Kyrgyzstan', 'Tajikistan', 'Turkmenistan', 'Uzbekistan'],
      rivers: ['Amu Darya', 'Syr Darya', 'Irtysh', 'Hari', 'Murghab'],
      mountainRanges: ['Turkestan Range', 'Tien Shan', 'Pamir Mountains'],
      keyCities: ['Astana', 'Bishkek', 'Dushanbe', 'Ashgabat', 'Bukhara', 'Samarkand']
    },
    quizQuestions: [
      {
        id: 'G7_T3_U9_L1_Q1',
        question: 'What does the suffix "-stan" mean in Persian?',
        options: ['Mountain of', 'Land of', 'Water of', 'People of'],
        correctAnswer: 1,
        explanation: 'The suffix "-stan" comes from the Persian language and means "land of," so Kazakhstan means "Land of the Wanderers."'
      },
      {
        id: 'G7_T3_U9_L1_Q2',
        question: 'What percentage of Central Asia is covered by dry desert?',
        options: ['30%', '45%', 'Over 60%', 'Over 80%'],
        correctAnswer: 2,
        explanation: 'More than 60% of Central Asia\'s land area is covered by dry desert, making it one of the most arid regions in the world.'
      },
      {
        id: 'G7_T3_U9_L1_Q3',
        question: 'Which river flows through all five Central Asian countries and Afghanistan?',
        options: ['Syr Darya', 'Irtysh', 'Hari', 'Amu Darya'],
        correctAnswer: 3,
        explanation: 'The Amu Darya is the largest river system in Central Asia and flows through all five "Stans" as well as Afghanistan.'
      },
      {
        id: 'G7_T3_U9_L1_Q4',
        question: 'What is the highest point of the Turkestan Range?',
        options: ['4,200 metres', '4,800 metres', '5,510 metres', '6,100 metres'],
        correctAnswer: 2,
        explanation: 'Piramidalny Peak rises to 5,510 metres above sea level, making it the highest point in the Turkestan Range.'
      },
      {
        id: 'G7_T3_U9_L1_Q5',
        question: 'Why did different groups in early Central Asia fight over resources?',
        options: ['They had too many resources to share', 'The dry terrain made resources scarce', 'They refused to trade with each other', 'The rivers were too large to cross'],
        correctAnswer: 1,
        explanation: 'The dry terrain of Central Asia made it difficult to find sufficient food and water, leading to competition and conflict between groups.'
      }
    ],
    interactiveStrategies: [
      {
        strategy: 'KWL Chart',
        description: 'Students complete a KWL chart to track what they Know, Want to know, and have Learned about Central Asia.',
        duration: 15,
        instructions: 'Before reading, have students fill in the "K" column with what they already know about Central Asia and the "W" column with questions they have. After both readings, students complete the "L" column with new information they learned. Share and discuss as a class.'
      },
      {
        strategy: 'Map Labelling Activity',
        description: 'Students label a blank map of Central Asia with countries, rivers, and mountain ranges.',
        duration: 20,
        instructions: 'Provide each student with a blank outline map of Central Asia. Using the readings and the visual map data, students locate and label all five countries, the Amu Darya and Syr Darya rivers, the Turkestan Range, and key cities. Compare completed maps with a partner and discuss the relationship between geography and population distribution.'
      }
    ]
  },

  // ─── LESSON 2 ───
  {
    lessonId: 'G7_T3_Unit 9_l2',
    keyVocabulary: ['Silk Road', 'Han Dynasty', 'Caspian Sea', 'monopoly', 'cultural diffusion'],
    reading1Title: 'The Silk Road: Heart of Trade',
    reading1Content: `The Silk Road was one of the most influential trading routes in all of human history, and Central Asia stood at its very heart. Stretching across thousands of kilometres, this vast network of trade routes connected East Asia to the Mediterranean, and Central Asia was the crucial crossroads that linked them all together. The region bordered Russia to the north, Iran to the south, China and Mongolia to the east, and the Caspian Sea to the west, placing it squarely at the centre of international commerce and cultural exchange.

The Silk Road began in China during the Han Dynasty, which ruled from approximately 207 BCE to 220 CE. It was during this period that Chinese silk first made its way westward, and the trade route was eventually named after this precious commodity. Silk was extremely valuable in the ancient world — it was lightweight, beautiful, and could be woven into luxurious garments that only the wealthiest could afford. The demand for silk was enormous, and traders were willing to travel vast distances across dangerous terrain to bring it to eager markets in Central Asia, the Middle East, and Europe.

However, silk was far from the only good traded along the Silk Road. Central Asian merchants traded horses, which were highly prized for their speed and endurance, as well as camels that were essential for transporting goods across the desert. Precious stones, intricately woven carpets, gold, silver, and the valuable spice saffron all changed hands along the route. Each of these goods carried not only economic value but also cultural significance, as they represented the unique skills and resources of the regions that produced them.

Central Asia capitalised brilliantly on its position along the Silk Road. The region gained not only wealth from trade but also significant political influence. As goods flowed through Central Asian cities, so too did new languages, religions, and cultural practices from distant origins. Cities like Bukhara and Samarkand became cosmopolitan centres where traders from China, India, Persia, and the Mediterranean met to exchange goods and ideas. The Silk Road transformed Central Asia from a remote, sparsely populated region into a thriving hub of international commerce and cultural interaction, and its legacy continues to shape the identity of the region to this day.`,
    reading2Title: 'Cultural Diffusion Along the Silk Road',
    reading2Content: `One of the most profound impacts of the Silk Road was the way it facilitated cultural diffusion — the spread of culture, ideas, and technologies from one society to another. As traders, travellers, and diplomats moved along the routes, they carried with them their food, music, language, architecture, religion, fashion, and exotic goods. Over centuries of contact, these cultural elements blended and evolved, creating a rich tapestry of shared traditions that transcended national and ethnic boundaries.

Technology was also spread along the Silk Road in remarkable ways. The silk-making process, once a closely guarded secret in China, eventually made its way westward. By the fifth and sixth centuries, silk production had spread from China to Central Asia and Persia, significantly decreasing China's monopoly on this valuable commodity. Similarly, the Chinese inventions of paper and gunpowder traveled along the Silk Road, transforming societies far from their origins. Paper revolutionised record-keeping and literature, while gunpowder eventually changed the nature of warfare across the world.

The exchange of technology was not one-directional. Mediterranean glass-making techniques spread eastward, reaching Persia and Central Asia, and eventually arriving in China by the fifth century. Stained glass and books also traveled along the routes, enriching the cultural and intellectual life of every society they touched. This two-way exchange created a unique melting pot of diverse peoples and ideas, where innovation and creativity flourished as different traditions met and merged.

There are fascinating parallels between the Silk Road trade and modern Internet trade. Both systems facilitate the exchange of goods, ideas, and culture on a global scale, connecting people across vast distances. However, there are also significant differences. The Silk Road relied on physical travel — caravans of camels and horses crossing deserts and mountains over months or even years — while the Internet enables near-instantaneous exchange. The speed and scale of modern digital trade are far greater, but the fundamental principle remains the same: connecting people and sharing resources across boundaries. Just as Central Asian merchants once served as intermediaries between East and West, today's digital platforms connect producers and consumers around the globe in a modern version of the ancient Silk Road.`,
    reading1Time: 8,
    reading2Time: 8,
    kwlExplanation: KWL_EXPLANATION,
    discussionQuestions: [
      'Why was Central Asia called the "Heart of the Silk Road"?',
      'How did the spread of silk-making technology affect China\'s monopoly on silk?',
      'In what ways is modern Internet trade similar to and different from Silk Road trade?',
      'Why was cultural diffusion important for the development of Central Asian societies?',
      'How do you think the Silk Road changed the daily lives of ordinary people in Central Asia?'
    ],
    keyFacts: [
      'The Silk Road was one of the most influential trading routes in history.',
      'Central Asia was the "Heart of the Silk Road," connecting East and West.',
      'The Silk Road began during the Han Dynasty in China (207 BCE–220 CE).',
      'The route was named after the silk trade, which was extremely valuable.',
      'Other traded goods included horses, camels, precious stones, carpets, gold, silver, and saffron.',
      'Central Asia gained wealth, political influence, and cultural diversity from the Silk Road.',
      'Cultural diffusion along the Silk Road spread food, music, language, architecture, and religion.',
      'Silk-making spread from China to Central Asia and Persia by the 5th–6th centuries, ending China\'s monopoly.',
      'Mediterranean glass-making spread eastward to Persia, Central Asia, and China by the 5th century.',
      'The Silk Road created a melting pot of diverse peoples and ideas, similar to how the Internet connects the world today.'
    ],
    visualType: 'map',
    visualData: {
      title: 'The Silk Road: From China Through Central Asia to Europe and Africa',
      route: {
        start: 'China (Xi\'an/Chang\'an)',
        centralAsiaStops: ['Kashgar', 'Samarkand', 'Bukhara', 'Merv'],
        end: ['Constantinople', 'Rome', 'Alexandria']
      },
      keyGoods: {
        fromChina: ['Silk', 'Paper', 'Gunpowder', 'Tea'],
        fromCentralAsia: ['Horses', 'Camels', 'Carpets', 'Precious stones'],
        fromWest: ['Glass', 'Gold', 'Silver', 'Wine']
      }
    },
    quizQuestions: [
      {
        id: 'G7_T3_U9_L2_Q1',
        question: 'During which dynasty did the Silk Road begin?',
        options: ['Tang Dynasty', 'Ming Dynasty', 'Han Dynasty', 'Qing Dynasty'],
        correctAnswer: 2,
        explanation: 'The Silk Road began in China during the Han Dynasty, which ruled from approximately 207 BCE to 220 CE.'
      },
      {
        id: 'G7_T3_U9_L2_Q2',
        question: 'By what centuries had silk-making spread from China to Central Asia and Persia?',
        options: ['1st–2nd centuries', '3rd–4th centuries', '5th–6th centuries', '7th–8th centuries'],
        correctAnswer: 2,
        explanation: 'By the 5th and 6th centuries, silk production had spread from China to Central Asia and Persia, ending China\'s monopoly.'
      },
      {
        id: 'G7_T3_U9_L2_Q3',
        question: 'Which technology spread from the Mediterranean eastward to China by the 5th century?',
        options: ['Paper-making', 'Gunpowder', 'Silk-making', 'Glass-making'],
        correctAnswer: 3,
        explanation: 'Mediterranean glass-making techniques spread eastward, reaching Persia and Central Asia, and eventually arriving in China by the 5th century.'
      },
      {
        id: 'G7_T3_U9_L2_Q4',
        question: 'What does "monopoly" mean in the context of China and silk?',
        options: ['Shared ownership of a product', 'Complete control of a product\'s production and trade', 'A type of trading company', 'A government tax on goods'],
        correctAnswer: 1,
        explanation: 'A monopoly means having complete control over the production and trade of a product. China originally had a monopoly on silk production.'
      },
      {
        id: 'G7_T3_U9_L2_Q5',
        question: 'What is cultural diffusion?',
        options: ['The destruction of one culture by another', 'The isolation of cultures from each other', 'The spread of culture, ideas, and technologies between societies', 'The process of creating a single world culture'],
        correctAnswer: 2,
        explanation: 'Cultural diffusion is the spread of culture, ideas, and technologies from one society to another, which happened extensively along the Silk Road.'
      }
    ],
    interactiveStrategies: [
      {
        strategy: 'Silk Road Trading Simulation',
        description: 'Students role-play as merchants from different regions trading goods along the Silk Road.',
        duration: 25,
        instructions: 'Divide the class into groups representing China, Central Asia, Persia, and the Mediterranean. Each group receives cards representing their region\'s goods (silk, horses, glass, etc.). Groups must negotiate trades with other regions, traveling (walking) to other groups\' tables to exchange goods. After trading, discuss what goods each group ended up with and how this mirrors the cultural diffusion that occurred on the real Silk Road.'
      },
      {
        strategy: 'Silk Road vs Internet Venn Diagram',
        description: 'Students create a Venn diagram comparing Silk Road trade with modern Internet trade.',
        duration: 15,
        instructions: 'Draw a Venn diagram on the board with "Silk Road" on one side and "Internet Trade" on the other. Students work in pairs to identify similarities (global exchange of goods/ideas/culture) and differences (physical vs digital, speed, scale). Share answers as a class and discuss how both systems connect people across boundaries.'
      }
    ]
  },

  // ─── LESSON 3 ───
  {
    lessonId: 'G7_T3_Unit 9_l3',
    keyVocabulary: ['communist', 'Soviet Union', 'Mongol', 'Abbasid Caliphate', 'Tang Dynasty'],
    reading1Title: 'The Cultural Mosaic of Central Asia',
    reading1Content: `As a hub for diverse trade and travel, Central Asian culture was greatly influenced by its neighbours and the many civilisations that passed through the region over the centuries. Before the arrival of Islam, Central Asia was deeply influenced by Iranian and Turkic civilisations, each of which left lasting marks on the region's language, customs, and social structures. Over time, a variety of religious beliefs were introduced to Central Asia through trade and conquest, including Buddhism, Christianity, Islam, and Judaism. Each of these faiths found followers among the Central Asian population, contributing to the region's rich spiritual diversity.

Today, the population of Central Asia is roughly 77 million people spread across the five countries. Kazakhstan has the largest population at approximately 19 million, followed by Uzbekistan with about 35 million, Tajikistan with around 10 million, Kyrgyzstan with roughly 7 million, and Turkmenistan with about 6 million. These population figures reflect the varying sizes and geographic conditions of each country, with Uzbekistan being the most densely populated despite not being the largest in area.

In pre-Islamic and early Islamic times, the people of Central Asia spoke variations of Persian languages, reflecting the strong cultural influence of the Iranian civilisations to the south and west. However, between the fifth and tenth centuries, Turkic peoples migrated across the region and settled in large numbers, gradually shifting the linguistic landscape. The Turkic languages eventually became dominant in much of Central Asia, although Persian influences remained strong in areas like Tajikistan.

The Tang Dynasty of China ruled over parts of Central Asia from 618 to 907 CE, extending Chinese influence deep into the heart of the region. However, this period of Chinese dominance came to a dramatic end in 751 CE at the Battle of Talas. In this pivotal conflict, the Tang Dynasty was defeated by the combined forces of the Abbasid Caliphate and the Tibetan Empire. This battle marked a turning point in Central Asian history, as it halted Chinese expansion westward and opened the door for Arabic and Islamic influence to spread throughout the region. The Battle of Talas is considered one of the most significant events in Central Asian history, as it reshaped the cultural and religious landscape for centuries to come.`,
    reading2Title: 'From Mongols to Modern Times',
    reading2Content: `The longest period of foreign rule in Central Asia was under the Mongol Empire, which dominated the region throughout the thirteenth and fourteenth centuries. Under the leadership of Genghis Khan and his successors, the Mongols swept across Central Asia, conquering vast territories and establishing one of the largest empires the world has ever seen. Although the Mongol conquest was devastating in terms of destruction and loss of life, it also brought about a period of relative stability known as the Pax Mongolica, during which trade and cultural exchange flourished across the vast Mongol territories.

In more modern times, the Soviet Union and Russia have had a significant influence on Central Asia. For over seventy years, the Central Asian republics were part of the Soviet Union, and during this time, Russian language, culture, and political systems were imposed on the region. As a result, Russian is still spoken in all Central Asian countries today, serving as a lingua franca that enables communication between people from different ethnic backgrounds. Elements of Russian and Communist culture were absorbed into Central Asian society, from administrative systems to educational practices, and these influences remain visible even decades after independence.

Despite the many outside influences, Central Asian culture retains its own distinctive character. Strong family ties are a cornerstone of Central Asian society, with extended families often living together and supporting one another. There is a deep respect for elders, who are regarded as the wisest and most important members of the community. Resource sharing is also a fundamental value, reflecting the region's history of surviving in a challenging environment where cooperation was essential for survival.

Traditional Central Asian culture celebrates horseback riding competitions and regional sports that have been passed down through generations. Nomadic herding remains an important part of life in some areas, particularly in the mountainous regions of Kyrgyzstan and Tajikistan. These traditions serve as a powerful link to the region's nomadic past and continue to shape the identity of Central Asian people today.

Religiously, Uzbekistan, Tajikistan, and Turkmenistan are roughly ninety percent Islamic, reflecting the profound and lasting influence of the Abbasid Caliphate's arrival in the eighth century. There is an interesting connection between Central Asia and the UAE in this regard, as both regions have been influenced by multiple cultures and civilisations over the centuries. Both societies value strong family ties and deep respect for elders, showing that despite geographic distance, certain cultural values are shared across the Islamic world.`,
    reading1Time: 8,
    reading2Time: 8,
    kwlExplanation: KWL_EXPLANATION,
    discussionQuestions: [
      'How did the Battle of Talas in 751 CE change the cultural direction of Central Asia?',
      'Why is Russian still spoken in all Central Asian countries today?',
      'What cultural values do Central Asia and the UAE share, and why do you think that is?',
      'How did the Turkic migration between the 5th and 10th centuries change the language of Central Asia?',
      'Why do you think strong family ties and respect for elders are so important in Central Asian culture?'
    ],
    keyFacts: [
      'Central Asian culture was influenced by Iranian and Turkic civilisations before Islam.',
      'Religions introduced to Central Asia include Buddhism, Christianity, Islam, and Judaism.',
      'The total population of Central Asia is roughly 77 million across five countries.',
      'Uzbekistan has the largest population at approximately 35 million.',
      'In pre-Islamic times, Central Asians spoke variations of Persian languages.',
      'Turkic peoples migrated and settled across Central Asia between the 5th and 10th centuries.',
      'The Tang Dynasty of China ruled parts of Central Asia from 618 to 907 CE.',
      'The Battle of Talas (751 CE) ended Tang Dynasty influence and began Arabic/Islamic influence.',
      'The Mongol Empire was the longest period of foreign rule in Central Asia (13th–14th centuries).',
      'Uzbekistan, Tajikistan, and Turkmenistan are roughly 90% Islamic today.'
    ],
    visualType: 'timeline',
    visualData: {
      title: 'Key Periods in Central Asian Cultural History',
      events: [
        { period: 'Pre-Islamic Era', description: 'Iranian and Turkic civilisations, Persian languages dominant' },
        { period: '5th–10th Century', description: 'Turkic migration and settlement across Central Asia' },
        { period: '618–907 CE', description: 'Tang Dynasty of China rules parts of Central Asia' },
        { period: '751 CE', description: 'Battle of Talas — Abbasid Caliphate defeats Tang Dynasty' },
        { period: '8th Century onward', description: 'Arabic and Islamic influence spreads throughout region' },
        { period: '13th–14th Century', description: 'Mongol Empire — longest period of foreign rule' },
        { period: '1920s–1991', description: 'Soviet Union rule — Russian language and Communist culture imposed' },
        { period: '1991–Present', description: 'Independence — Central Asian nations forge their own identities' }
      ]
    },
    quizQuestions: [
      {
        id: 'G7_T3_U9_L3_Q1',
        question: 'Which empire ruled Central Asia for the longest period?',
        options: ['Tang Dynasty', 'Abbasid Caliphate', 'Mongol Empire', 'Soviet Union'],
        correctAnswer: 2,
        explanation: 'The Mongol Empire dominated Central Asia throughout the 13th and 14th centuries, making it the longest period of foreign rule in the region.'
      },
      {
        id: 'G7_T3_U9_L3_Q2',
        question: 'What happened at the Battle of Talas in 751 CE?',
        options: ['The Tang Dynasty conquered the Abbasid Caliphate', 'The Mongols invaded Central Asia', 'The Tang Dynasty was defeated by the Abbasid Caliphate and Tibetan Empire', 'Islam was introduced to Central Asia for the first time'],
        correctAnswer: 2,
        explanation: 'At the Battle of Talas, the Tang Dynasty was defeated by the combined forces of the Abbasid Caliphate and the Tibetan Empire, beginning the era of Arabic and Islamic influence.'
      },
      {
        id: 'G7_T3_U9_L3_Q3',
        question: 'What is the approximate total population of Central Asia?',
        options: ['50 million', '65 million', '77 million', '100 million'],
        correctAnswer: 2,
        explanation: 'The total population of Central Asia across all five countries is roughly 77 million people.'
      },
      {
        id: 'G7_T3_U9_L3_Q4',
        question: 'Why is Russian still spoken in all Central Asian countries?',
        options: ['Because Russia borders all five countries', 'Because of over 70 years of Soviet rule', 'Because Russian is an official religion in the region', 'Because the Mongols introduced the Russian language'],
        correctAnswer: 1,
        explanation: 'Over 70 years of Soviet rule resulted in the widespread adoption of the Russian language, which continues to be spoken throughout Central Asia today.'
      },
      {
        id: 'G7_T3_U9_L3_Q5',
        question: 'Which Central Asian country has the largest population?',
        options: ['Kazakhstan', 'Turkmenistan', 'Tajikistan', 'Uzbekistan'],
        correctAnswer: 3,
        explanation: 'Uzbekistan has the largest population in Central Asia at approximately 35 million people.'
      }
    ],
    interactiveStrategies: [
      {
        strategy: 'Cultural Timeline Construction',
        description: 'Students create a visual timeline of the major cultural influences on Central Asia.',
        duration: 20,
        instructions: 'Provide students with a blank timeline template. Using the readings, students identify and place the following periods on the timeline: Pre-Islamic era, Turkic migration, Tang Dynasty, Abbasid Caliphate, Mongol Empire, Soviet era, and Independence. For each period, students write a brief description and draw a symbol representing the cultural influence. Display completed timelines around the classroom.'
      },
      {
        strategy: 'Cultural Values Comparison',
        description: 'Students compare cultural values of Central Asia and the UAE using a T-chart.',
        duration: 15,
        instructions: 'Create a T-chart with "Central Asia" on one side and "UAE" on the other. Students work in pairs to list cultural values, traditions, and historical influences for each region based on the reading and their prior knowledge. Then identify shared values (family ties, respect for elders, multi-cultural influences) and discuss why geographically distant regions might share similar cultural values.'
      }
    ]
  },

  // ─── LESSON 4 ───
  {
    lessonId: 'G7_T3_Unit 9_l4',
    keyVocabulary: ['secular', 'constitutional republic', 'GDP', 'landlocked', 'parliament'],
    reading1Title: 'Kazakhstan: An Economic Powerhouse',
    reading1Content: `Kazakhstan boasts the largest economy in Central Asia, with a Gross Domestic Product (GDP) of approximately 200 billion US dollars. This impressive economic output is driven by three major sectors: energy, oil and gas, and mining. Together, these industries have transformed Kazakhstan from a former Soviet republic into one of the most economically significant countries in the region and a key player on the global stage.

In the energy sector, Kazakhstan holds a truly remarkable position. It is the world's leading producer of uranium, accounting for approximately thirty-five percent of global production. Uranium is a critical resource for nuclear energy, and Kazakhstan's vast uranium reserves are the second largest in the world. This makes the country an essential supplier for nations that rely on nuclear power, and it gives Kazakhstan significant geopolitical influence. The country's commitment to uranium production reflects its strategic approach to leveraging its natural resources for economic growth and international influence.

The oil sector is another pillar of Kazakhstan's economy. The country produces approximately 35,252,000 metric tons of oil per year, which translates to roughly 700,000 barrels per day. These substantial oil reserves have attracted major international investment and have made Kazakhstan an important energy supplier, particularly to European and Asian markets. The development of the Kashagan oil field, one of the largest discovered in recent decades, promises to further boost Kazakhstan's oil production in the coming years.

Mining is the third major sector contributing to Kazakhstan's economic success. The country extracts a wide variety of valuable minerals, including salt, cadmium, potassium, magnesium, copper, gallium, zinc, nickel, gold, and coal. This diversity of mineral resources provides economic resilience, as Kazakhstan is not overly dependent on any single commodity. In 2018, Kazakhstan's exports earned approximately 67 billion dollars, while imports totalled about 32 billion dollars, giving the country a healthy trade surplus. Kazakhstan exports around 800 different products to approximately 120 countries around the world, demonstrating the breadth and diversity of its economic relationships.

Geographically, Kazakhstan holds another notable distinction: it is the largest landlocked country in the world. Being landlocked means it has no coastline on an ocean, which can present challenges for international trade, as all goods must be transported overland or through neighbouring countries. Despite this, Kazakhstan has developed extensive trade networks and transportation infrastructure to overcome the limitations of its landlocked status.`,
    reading2Title: 'The People and Government of Kazakhstan',
    reading2Content: `Kazakhstan has a population of approximately 19 million people spread across its vast territory. With fewer than six people per square kilometre, it has one of the lowest population densities in the world. This means that much of Kazakhstan's land area is sparsely populated, with the majority of people concentrated in cities and along the country's river systems and mountain foothills where water and resources are more accessible.

Despite its relatively small population, Kazakhstan is remarkably diverse, home to eight major ethnic groups. The largest group is the Kazakh people, who make up approximately sixty-eight percent of the population. Russians form the second largest group at nineteen point three percent, followed by Uzbeks at three point two percent, Ukrainians and Uighurs each at one point five percent, Tatars at one point one percent, and Germans at one percent. The remaining four point four percent of the population belongs to various other ethnic groups. Importantly, these diverse communities live together harmoniously, and Kazakhstan is often cited as a model of multicultural coexistence in a region that has experienced ethnic tensions in the past.

Language in Kazakhstan reflects this multicultural heritage. Kazakh is the official state language, but Russian is also widely spoken and serves as a language of inter-ethnic communication. English is increasingly taught in schools and used in business, reflecting Kazakhstan's desire to integrate with the global economy. The ability of Kazakh citizens to navigate between multiple languages is a valuable skill in a country that sits at the crossroads of Europe and Asia.

Kazakhstan's political system is described as a democratic, secular, constitutional republic. This means that the country has elected representatives, a separation of religion and state, a constitution that defines the powers of government, and a republican form of government without a monarch. The parliament consists of two houses: the lower house, known as the Majlis, which has 107 elected members, and the upper house, known as the Senate, which has 48 elected members. This bicameral system is designed to ensure that legislation is carefully considered and that the interests of different regions and populations are represented.

There is a meaningful connection between Kazakhstan and the UAE. Both nations value multicultural harmony, with diverse populations living and working together peacefully. Both countries have also pursued strategies of economic diversification, seeking to reduce their dependence on a single industry and develop a broader economic base. Kazakhstan's efforts to expand beyond oil and mining mirror the UAE's Vision 2030 initiatives to build a knowledge-based economy, and both nations recognise that long-term prosperity depends on investing in education, innovation, and human capital.`,
    reading1Time: 8,
    reading2Time: 8,
    kwlExplanation: KWL_EXPLANATION,
    discussionQuestions: [
      'Why is being the world\'s largest uranium producer significant for Kazakhstan\'s international influence?',
      'What challenges does being a landlocked country present, and how has Kazakhstan addressed them?',
      'How does Kazakhstan\'s ethnic diversity compare to that of the UAE?',
      'Why is economic diversification important for countries like Kazakhstan and the UAE?',
      'What role does Kazakhstan\'s bicameral parliament play in its democratic system?'
    ],
    keyFacts: [
      'Kazakhstan has the largest economy in Central Asia with a GDP of approximately $200 billion.',
      'Kazakhstan is the world\'s leading uranium producer, accounting for ~35% of global production.',
      'Kazakhstan has the 2nd largest uranium reserves in the world.',
      'Kazakhstan produces approximately 700,000 barrels of oil per day.',
      'Kazakhstan mines salt, uranium, cadmium, potassium, magnesium, copper, gallium, zinc, nickel, gold, and coal.',
      'In 2018, exports earned ~$67 billion and imports totalled ~$32 billion.',
      'Kazakhstan exports 800 products to approximately 120 countries.',
      'Kazakhstan is the largest landlocked country in the world.',
      'Kazakhstan has 8 major ethnic groups, with Kazakhs making up 68% of the population.',
      'Kazakhstan\'s parliament has two houses: the Majlis (107 members) and the Senate (48 members).'
    ],
    visualType: 'chart',
    visualData: {
      title: 'Kazakhstan: Ethnic Composition',
      type: 'piechart',
      data: [
        { label: 'Kazakh', value: 68, color: '#2D6A4F' },
        { label: 'Russian', value: 19.3, color: '#40916C' },
        { label: 'Uzbek', value: 3.2, color: '#52B788' },
        { label: 'Ukrainian', value: 1.5, color: '#74C69D' },
        { label: 'Uighur', value: 1.5, color: '#95D5B2' },
        { label: 'Tatar', value: 1.1, color: '#B7E4C7' },
        { label: 'German', value: 1, color: '#D8F3DC' },
        { label: 'Other', value: 4.4, color: '#A3B18A' }
      ]
    },
    quizQuestions: [
      {
        id: 'G7_T3_U9_L4_Q1',
        question: 'Approximately what percentage of global uranium production comes from Kazakhstan?',
        options: ['15%', '25%', '35%', '50%'],
        correctAnswer: 2,
        explanation: 'Kazakhstan accounts for approximately 35% of global uranium production, making it the world\'s leading producer.'
      },
      {
        id: 'G7_T3_U9_L4_Q2',
        question: 'What is Kazakhstan\'s approximate GDP?',
        options: ['$100 billion', '$150 billion', '$200 billion', '$300 billion'],
        correctAnswer: 2,
        explanation: 'Kazakhstan\'s GDP is approximately $200 billion, making it the largest economy in Central Asia.'
      },
      {
        id: 'G7_T3_U9_L4_Q3',
        question: 'What percentage of Kazakhstan\'s population is ethnically Kazakh?',
        options: ['50%', '58%', '68%', '78%'],
        correctAnswer: 2,
        explanation: 'Ethnic Kazakhs make up approximately 68% of Kazakhstan\'s population, the largest ethnic group in the country.'
      },
      {
        id: 'G7_T3_U9_L4_Q4',
        question: 'How many members are in Kazakhstan\'s Majlis (lower house of parliament)?',
        options: ['48', '77', '107', '155'],
        correctAnswer: 2,
        explanation: 'The Majlis, Kazakhstan\'s lower house of parliament, has 107 elected members.'
      },
      {
        id: 'G7_T3_U9_L4_Q5',
        question: 'What distinguishes Kazakhstan geographically from all other countries?',
        options: ['It is the smallest country in Central Asia', 'It is the largest landlocked country in the world', 'It has the most rivers of any country', 'It is the only Central Asian country with a coastline'],
        correctAnswer: 1,
        explanation: 'Kazakhstan is the largest landlocked country in the world, meaning it has no coastline on an ocean.'
      }
    ],
    interactiveStrategies: [
      {
        strategy: 'Economic Data Analysis',
        description: 'Students analyse Kazakhstan\'s economic data and create visual representations.',
        duration: 20,
        instructions: 'Provide students with Kazakhstan\'s key economic data (GDP, export/import values, uranium production, oil production). Students work in small groups to create charts or infographics representing this data. Each group presents their chart and explains what the data reveals about Kazakhstan\'s economy. Discuss as a class how natural resources shape a country\'s economic identity.'
      },
      {
        strategy: 'Ethnic Diversity Poster',
        description: 'Students create a poster showcasing Kazakhstan\'s ethnic diversity and harmony.',
        duration: 20,
        instructions: 'Each student selects one of Kazakhstan\'s eight major ethnic groups to research briefly. Create a poster section for each group showing its percentage of the population, cultural traditions, and contributions to Kazakh society. Assemble all sections into a class poster titled "Kazakhstan: A Model of Multicultural Harmony." Compare with the UAE\'s approach to multiculturalism.'
      }
    ]
  },

  // ─── LESSON 5 ───
  {
    lessonId: 'G7_T3_Unit 9_l5',
    keyVocabulary: ['multilingual', 'annexation', 'conflict', 'remittance', 'epic poem'],
    reading1Title: 'Kyrgyzstan: Land of the 40 Tribes',
    reading1Content: `Kyrgyzstan is a landlocked country bordered by Kazakhstan to the north, Uzbekistan to the west, Tajikistan to the south, and China to the east. The name Kyrgyzstan carries a powerful meaning rooted in the region's history. It is derived from "Kyrg," meaning forty, "yz," meaning tribes, and "stan," meaning land — thus, Kyrgyzstan translates to "Land of the Forty Tribes." This name reflects the legendary unification of forty nomadic tribes under a single banner, a story that is central to Kyrgyz national identity.

The Epic of Manas is an eighteenth-century folklore masterpiece that tells the story of the hero Manas and his unification of the forty nomadic tribes of Kyrgyzstan. It is considered one of the longest epic poems in the world, with versions containing hundreds of thousands of lines. The epic is so important to Kyrgyz culture that it has been designated by UNESCO as part of the Intangible Cultural Heritage of Humanity. The Epic of Manas is more than just a story — it is a symbol of Kyrgyz unity, resilience, and national pride that continues to be recited and celebrated in modern Kyrgyzstan.

The economy of Kyrgyzstan is fragile and, unlike some of its Central Asian neighbours, it is not built on oil or gas reserves. Instead, agriculture dominates the economic landscape. Key agricultural products include grain, livestock, cotton, tobacco, wool, and dairy. The agricultural sector is divided among different types of farms: approximately fifty-five percent are private household farms, forty percent are private commercial farms, and only five percent are state-owned. Agriculture accounts for roughly one-third of Kyrgyzstan's GDP, making it the single most important sector of the economy.

Gold mining is another crucial contributor to Kyrgyzstan's economy, accounting for approximately twelve percent of GDP and nearly half of the country's total exports. The Kumtor Gold Mine is one of the largest gold deposits in the region and has been a major source of revenue for the government. However, the fact that government-owned mines are operated by foreign companies has caused significant political problems. Many Kyrgyz citizens feel that the profits from their country's natural resources are flowing to foreign corporations rather than benefiting the local population, leading to protests and political debates about resource ownership and management.

Kyrgyzstan is home to twelve ethnic groups and five religions, reflecting its position as a cultural crossroads. The country operates as a democratic unicameral republic, meaning it has a single-chamber legislature. Kyrgyzstan is also a member of the Organization for Security and Co-operation in Europe (OSCE), reflecting its commitment to international cooperation and democratic values. Despite its economic challenges, Kyrgyzstan is often considered the most democratic country in Central Asia, with a vibrant civil society and relatively free media compared to its neighbours.`,
    reading2Title: 'Tajikistan: Land of the Tajiks',
    reading2Content: `Tajikistan is a landlocked country that borders Kyrgyzstan to the north, China to the east, Uzbekistan to the west, and Afghanistan to the south. The country's name follows the familiar Central Asian pattern: "Tajik," referring to the main ethnic group, combined with "stan," meaning land — thus, Tajikistan means "Land of the Tajiks." This naming convention underscores the strong ethnic identity that defines the country, as Tajiks are the predominant ethnic group and their Persian-based language and culture form the foundation of Tajik national identity.

Tajikistan's history has been shaped by foreign domination and political change. During the period of Russian annexation, Tajikistan was merged with Uzbekistan under Soviet rule. It was not until 1929 that Tajikistan was separated and became its own republic within the Soviet Union. This delayed separation meant that Tajikistan's development as an independent entity was relatively recent compared to some of its neighbours, and the legacy of being merged with Uzbekistan is still evident in shared cultural and linguistic ties between the two nations.

Religiously, Tajikistan is approximately ninety-eight percent Muslim, making it one of the most homogeneously Islamic countries in Central Asia. However, the country is remarkably multilingual, with more than five languages spoken across its territory, reflecting the diversity of its mountainous regions where different communities have developed distinct linguistic traditions.

The economy of Tajikistan is fragile and heavily dependent on remittances — money sent home by Tajik citizens working abroad, particularly in Russia. Remittances account for approximately twenty-six percent of Tajikistan's GDP, making the country one of the most remittance-dependent nations in the world. This reliance on foreign workers creates both opportunities and vulnerabilities, as the economy is significantly affected by conditions in Russia and the ability of workers to send money home.

Other important sources of revenue include aluminum production, with the Tajik Aluminum Company being the largest aluminum producer in Central Asia. Cotton is another major commodity, accounting for approximately sixty percent of agricultural output and supporting roughly seventy-five percent of the population. Tajikistan also boasts a rich cultural heritage of arts and poetry dating back to the tenth century. Persian literary heroes include Rudaki, known as the Father of Persian Poetry, and Rumi, the celebrated philosophical poet. The Shah-nameh, or Book of Kings, by Ferdowsi is one of the most important works of Persian literature. Traditional national sports include gushtingiri (wrestling) and chavgonbozi (polo).

There is a meaningful connection between Tajikistan and the UAE when it comes to the role of foreign workers. Just as Tajik citizens travel to Russia to work and send remittances home, the UAE has a large expatriate workforce that sends money to families in their home countries. This parallel highlights the global nature of labour migration and the important economic role that foreign workers play in both sending and receiving countries.`,
    reading1Time: 8,
    reading2Time: 8,
    kwlExplanation: KWL_EXPLANATION,
    discussionQuestions: [
      'What does the name "Kyrgyzstan" reveal about the country\'s history and identity?',
      'Why is the Epic of Manas so important to Kyrgyz culture?',
      'What are the economic advantages and disadvantages of relying on remittances?',
      'How does the UAE\'s expatriate workforce compare to Tajikistan\'s reliance on workers in Russia?',
      'Why has gold mining caused political problems in Kyrgyzstan?'
    ],
    keyFacts: [
      'Kyrgyzstan means "Land of the 40 Tribes" (Kyrg = 40, yz = tribes, stan = land).',
      'The Epic of Manas is an 18th-century folklore about unifying 40 nomadic tribes — one of the longest epic poems in the world.',
      'Agriculture accounts for approximately 1/3 of Kyrgyzstan\'s GDP.',
      'Gold mining represents 12% of Kyrgyzstan\'s GDP and nearly half of its exports.',
      'The Kumtor Gold Mine is one of the largest gold deposits in the region.',
      'Kyrgyzstan has 12 ethnic groups and 5 religions, and is an OSCE member.',
      'Tajikistan means "Land of the Tajiks" and became its own republic in 1929.',
      'Tajikistan is approximately 98% Muslim and over 5 languages are spoken.',
      'Remittances from foreign workers in Russia account for 26% of Tajikistan\'s GDP.',
      'Cotton accounts for 60% of Tajikistan\'s agricultural output and supports 75% of the population.'
    ],
    visualType: 'venn',
    visualData: {
      title: 'Kyrgyzstan vs Tajikistan',
      leftLabel: 'Kyrgyzstan',
      rightLabel: 'Tajikistan',
      leftOnly: [
        'Name means "Land of the 40 Tribes"',
        'Epic of Manas — one of world\'s longest epic poems',
        'Gold mining (12% of GDP)',
        '12 ethnic groups, 5 religions',
        'Democratic unicameral republic',
        'OSCE member'
      ],
      rightOnly: [
        'Name means "Land of the Tajiks"',
        'Tajik Aluminum Company — largest in Central Asia',
        '98% Muslim population',
        'Rich Persian poetry tradition (Rudaki, Rumi)',
        'National sports: gushtingiri, chavgonbozi',
        '26% of GDP from remittances'
      ],
      shared: [
        'Both are landlocked',
        'Both have mountainous terrain',
        'Both have fragile economies',
        'Both rely on agriculture (cotton)',
        'Both influenced by Persian naming conventions',
        'Both were part of the Soviet Union'
      ]
    },
    quizQuestions: [
      {
        id: 'G7_T3_U9_L5_Q1',
        question: 'What does the name "Kyrgyzstan" mean?',
        options: ['Land of the Mountains', 'Land of the 40 Tribes', 'Land of the Nomads', 'Land of the Warriors'],
        correctAnswer: 1,
        explanation: 'Kyrgyzstan means "Land of the 40 Tribes" — "Kyrg" means 40, "yz" means tribes, and "stan" means land.'
      },
      {
        id: 'G7_T3_U9_L5_Q2',
        question: 'What percentage of Tajikistan\'s GDP comes from remittances?',
        options: ['10%', '15%', '26%', '40%'],
        correctAnswer: 2,
        explanation: 'Remittances from Tajik workers in Russia account for approximately 26% of Tajikistan\'s GDP, making it one of the most remittance-dependent nations.'
      },
      {
        id: 'G7_T3_U9_L5_Q3',
        question: 'What is the Epic of Manas?',
        options: ['A famous Tajik poem about aluminum mining', 'An 18th-century Kyrgyz folklore about the unification of 40 tribes', 'A Russian novel about Soviet rule', 'A Persian book of poetry by Rudaki'],
        correctAnswer: 1,
        explanation: 'The Epic of Manas is an 18th-century Kyrgyz folklore masterpiece about the hero Manas who unified the 40 nomadic tribes, and is one of the longest epic poems in the world.'
      },
      {
        id: 'G7_T3_U9_L5_Q4',
        question: 'When did Tajikistan become its own republic separate from Uzbekistan?',
        options: ['1917', '1929', '1945', '1991'],
        correctAnswer: 1,
        explanation: 'Tajikistan became its own republic in 1929 after previously being merged with Uzbekistan under Soviet rule.'
      },
      {
        id: 'G7_T3_U9_L5_Q5',
        question: 'What percentage of Tajikistan\'s agricultural output comes from cotton?',
        options: ['30%', '45%', '60%', '75%'],
        correctAnswer: 2,
        explanation: 'Cotton accounts for approximately 60% of Tajikistan\'s agricultural output and supports roughly 75% of the population.'
      }
    ],
    interactiveStrategies: [
      {
        strategy: 'Venn Diagram Comparison',
        description: 'Students create a Venn diagram comparing Kyrgyzstan and Tajikistan.',
        duration: 20,
        instructions: 'Draw a large Venn diagram on the board with "Kyrgyzstan" on the left and "Tajikistan" on the right. Using information from both readings, students work in pairs to identify unique features of each country and shared characteristics. Key areas to compare: geography, economy, culture, religion, and history. After completing the diagram, pairs share their most interesting finding with the class.'
      },
      {
        strategy: 'Epic Poetry Exploration',
        description: 'Students explore the Epic of Manas and create their own mini-epic poem.',
        duration: 25,
        instructions: 'Read a short excerpt from the Epic of Manas to the class, discussing its themes of unity and heroism. Then, ask students to write a short epic-style poem (8-12 lines) about a hero who unites their community or school. Encourage students to use vivid language and include a moral lesson. Volunteers can share their poems with the class. Discuss why epic poems like Manas are important for national identity.'
      }
    ]
  },

  // ─── LESSON 6 ───
  {
    lessonId: 'G7_T3_Unit 9_l6',
    keyVocabulary: ['land degradation', 'ore', 'Cyrillic', 'presidential republic', 'cotton ginning'],
    reading1Title: 'Turkmenistan and Uzbekistan: Intertwined Histories',
    reading1Content: `Turkmenistan and Uzbekistan share an intertwined history, culture, and politics that stretches back centuries. Both nations were part of the Soviet Union as the Turkmen Soviet Socialist Republic and the Uzbek Soviet Socialist Republic, and both gained independence in 1991 when the USSR dissolved. Under Soviet rule, both republics were required to produce massive quantities of cotton and grain for the Soviet economy. This relentless agricultural production came at a severe environmental cost, leading to widespread land degradation and the depletion of water resources, particularly from the rivers that feed the Aral Sea. The consequences of this environmental damage are still felt today and serve as a cautionary tale about the dangers of prioritising short-term production over long-term sustainability.

Although Turkmenistan is approximately nine percent larger than Uzbekistan in terms of land area, Uzbekistan has a significantly larger population. This difference in population density reflects the varying geographic and climatic conditions of the two countries, as well as the availability of water and arable land. Turkmenistan's name means "Land of the Turks," reflecting the Turkic heritage of its people, while Uzbekistan's name carries a different meaning rooted in both Turkic and Persian traditions.

Turkmenistan's history is a tapestry of conquest and cultural exchange. Over the centuries, the territory has been ruled by Persian empires, the Mongols, Turkic and Islamic armies, and even Alexander the Great. Later, it came under the influence of the Russian Empire and eventually the Soviet Union. Unlike its Central Asian neighbours, Turkmenistan is not entirely landlocked — it shares a coast along the Caspian Sea, which provides access to maritime trade routes and important fishing resources. Turkmenistan was also an important stop on the Silk Road, and the ancient city of Merv, now a UNESCO World Heritage Site, was one of the great oasis cities of the Silk Road.

The economy of Turkmenistan is heavily dependent on oil and natural gas. The country possesses the fourth largest natural gas reserves in the world, making it a significant player in global energy markets. A major 1,800-kilometre natural gas pipeline connects Turkmenistan to China, representing one of the country's most important trade relationships. Turkmenistan's exports go primarily to China, which accounts for eighty-seven percent of its export market, along with Azerbaijan, Turkey, Romania, and Russia. Major imports come from Turkey at forty-three point four percent, followed by China, Russia, and Germany, and include machinery, equipment, vehicles, metals, and chemicals. Notably, the UAE is a major trading partner of Turkmenistan, reflecting the growing economic ties between Central Asia and the Gulf region.`,
    reading2Title: 'Culture and Governance',
    reading2Content: `Turkmenistan has a young population, with approximately half of its citizens under the age of thirty. This demographic profile presents both opportunities and challenges, as the country must create enough jobs and educational opportunities for its growing youth population. Turkmenistan has a rich heritage of poetry and literature. Traditionally, this literary tradition was oral, with poets and storytellers reciting their works at gatherings and celebrations. It was not until the 1920s that a written literary tradition began to develop, with writers like Abdelhekim Qulmuhammed-oghli helping to establish modern Turkmen literature. The evolution of Turkmen writing reflects the country's complex political history: early literature was written in Arabic script, which was later replaced by Latin script, then Cyrillic under Soviet rule, and finally back to the Turkmen script after independence.

Turkmenistan is governed as a Presidential Republic, where the president holds significant executive power. The country's educational system has also undergone dramatic changes. Before the Soviet era, education was primarily provided through Madrassas, which were Islamic schools that taught religion, mathematics, astronomy, and other subjects. Under Soviet rule, these were replaced by Soviet-style schools, and ironically, literacy rates actually dropped during the early Soviet period as the transition disrupted existing educational structures. After independence, Turkmenistan focused on rebuilding its education system and promoting the Turkmen language in schools and government.

Uzbekistan's name derives from both Turkic and Persian roots. The word "z" comes from Turkic meaning "genuine," "bek" means "man," and the Persian suffix "stan" means "land," so Uzbekistan translates to "Land of the Genuine Man." The country is richly endowed with natural resources, including gold, silver, copper, coal, uranium, lead, zinc, natural gas, and petroleum. It is also a leading cotton producer and has maintained a silk production industry since the fourth century, when silk-making techniques spread from China along the Silk Road. The manufacturing sector produces machinery and heavy equipment.

Uzbekistan's exports include cotton, oil, natural gas, coal, silk, fruit, machines, cement, fertilizer, and textiles. Major export partners include China, Russia, Turkey, and Kazakhstan. Uzbek culture is known for its distinct cuisine, featuring a variety of breads, noodles, and mutton dishes that reflect the country's nomadic and agricultural heritage. Uzbekistan also has a rich literary history dating back to the eleventh century, influenced by Indian, Persian, and Turkish traditions. Notable scholars include Al-Biruni, who wrote important geographic books, and Ulugh Beg, who built a famous observatory in Samarkand in the fifteenth century. The poet Ali-Shir Nava'i is considered one of the greatest figures in Turkic literature. Uzbekistan is governed as a Presidential Constitutional Republic, with legislative power vested in the Oliy Majlis, which consists of the Senate and the Legislative Chamber.`,
    reading1Time: 8,
    reading2Time: 8,
    kwlExplanation: KWL_EXPLANATION,
    discussionQuestions: [
      'How did Soviet agricultural policies lead to land degradation in Turkmenistan and Uzbekistan?',
      'Why has Turkmenistan\'s written language changed scripts so many times throughout history?',
      'What are the advantages and disadvantages of Turkmenistan exporting 87% of its goods to China?',
      'How does Uzbekistan\'s literary and scientific heritage (Al-Biruni, Ulugh Beg) reflect its position on the Silk Road?',
      'Why is the UAE a major trading partner for Turkmenistan, and what does this tell us about trade in the region?'
    ],
    keyFacts: [
      'Turkmenistan and Uzbekistan were both Soviet republics (Turkmen SSR and Uzbek SSR) that gained independence in 1991.',
      'Soviet-era cotton and grain production caused severe land degradation and water depletion in both countries.',
      'Turkmenistan is ~9% larger than Uzbekistan by area, but Uzbekistan has a much larger population.',
      'Turkmenistan has the 4th largest natural gas reserves in the world.',
      'A 1,800 km natural gas pipeline connects Turkmenistan to China.',
      'China accounts for 87% of Turkmenistan\'s exports; Turkey supplies 43.4% of its imports.',
      'Turkmenistan is not entirely landlocked — it shares a Caspian Sea coast.',
      'Uzbekistan means "Land of the Genuine Man" (Turkic "z"=genuine, "bek"=man, Persian "stan"=land).',
      'Uzbekistan has maintained silk production since the 4th century.',
      'Uzbekistan\'s Oliy Majlis consists of the Senate and the Legislative Chamber.'
    ],
    visualType: 'chart',
    visualData: {
      title: 'Turkmenistan vs Uzbekistan: Key Comparisons',
      type: 'comparison',
      categories: [
        {
          category: 'Population',
          items: [
            { label: 'Turkmenistan', value: '~6 million' },
            { label: 'Uzbekistan', value: '~35 million' }
          ]
        },
        {
          category: 'Key Resources',
          items: [
            { label: 'Turkmenistan', value: 'Natural gas (4th largest reserves), oil, cotton' },
            { label: 'Uzbekistan', value: 'Gold, silver, copper, uranium, natural gas, cotton, silk' }
          ]
        },
        {
          category: 'Major Exports',
          items: [
            { label: 'Turkmenistan', value: 'Natural gas (87% to China), oil, cotton' },
            { label: 'Uzbekistan', value: 'Cotton, oil, gas, silk, fruit, machines, textiles' }
          ]
        },
        {
          category: 'Governance',
          items: [
            { label: 'Turkmenistan', value: 'Presidential Republic' },
            { label: 'Uzbekistan', value: 'Presidential Constitutional Republic (Oliy Majlis)' }
          ]
        },
        {
          category: 'Coastline',
          items: [
            { label: 'Turkmenistan', value: 'Caspian Sea coast (not fully landlocked)' },
            { label: 'Uzbekistan', value: 'Landlocked' }
          ]
        }
      ]
    },
    quizQuestions: [
      {
        id: 'G7_T3_U9_L6_Q1',
        question: 'What environmental problem resulted from Soviet-era cotton production in Turkmenistan and Uzbekistan?',
        options: ['Air pollution from factories', 'Land degradation and water depletion', 'Deforestation of mountain slopes', 'Soil erosion from overgrazing'],
        correctAnswer: 1,
        explanation: 'The massive production of cotton and grain under Soviet rule led to severe land degradation and water depletion, particularly affecting the rivers that feed the Aral Sea.'
      },
      {
        id: 'G7_T3_U9_L6_Q2',
        question: 'Turkmenistan has the fourth largest reserves of which resource?',
        options: ['Oil', 'Uranium', 'Gold', 'Natural gas'],
        correctAnswer: 3,
        explanation: 'Turkmenistan possesses the fourth largest natural gas reserves in the world, making it a significant player in global energy markets.'
      },
      {
        id: 'G7_T3_U9_L6_Q3',
        question: 'What does the name "Uzbekistan" mean?',
        options: ['Land of the Warriors', 'Land of the Genuine Man', 'Land of the Turks', 'Land of the Nomads'],
        correctAnswer: 1,
        explanation: 'Uzbekistan means "Land of the Genuine Man" — "z" means genuine in Turkic, "bek" means man, and "stan" means land in Persian.'
      },
      {
        id: 'G7_T3_U9_L6_Q4',
        question: 'What percentage of Turkmenistan\'s exports go to China?',
        options: ['50%', '65%', '75%', '87%'],
        correctAnswer: 3,
        explanation: 'China accounts for 87% of Turkmenistan\'s export market, primarily through natural gas exports via the 1,800 km pipeline.'
      },
      {
        id: 'G7_T3_U9_L6_Q5',
        question: 'Since what century has Uzbekistan maintained silk production?',
        options: ['2nd century', '4th century', '8th century', '12th century'],
        correctAnswer: 1,
        explanation: 'Uzbekistan has maintained a silk production industry since the 4th century, when silk-making techniques spread from China along the Silk Road.'
      }
    ],
    interactiveStrategies: [
      {
        strategy: 'Country Comparison Chart',
        description: 'Students create a detailed comparison chart for Turkmenistan and Uzbekistan.',
        duration: 20,
        instructions: 'Provide students with a comparison template with categories: Geography, Economy, Resources, Culture, and Governance. Students fill in details for both countries using the readings. Then, students write a paragraph summarising the most significant differences and similarities. As a class, discuss which factors — geography, resources, or history — have had the greatest impact on each country\'s development.'
      },
      {
        strategy: 'Script Evolution Timeline',
        description: 'Students trace the evolution of Turkmenistan\'s writing systems.',
        duration: 15,
        instructions: 'Create a timeline showing the four scripts used in Turkmenistan: Arabic → Latin → Cyrillic → Turkmen. For each script, students write the country\'s political situation at the time and why the script changed. Discuss as a class: How does changing a writing system affect a country\'s culture and identity? What does this tell us about the relationship between language and power?'
      }
    ]
  },

  // ─── LESSON 7 ───
  {
    lessonId: 'G7_T3_Unit 9_l7',
    keyVocabulary: ['satellite state', 'famine', 'soviet', 'Cold War', 'proxy war'],
    reading1Title: 'Russia: A Giant of North Asia',
    reading1Content: `Russia is a vast North Asian country situated at the foot of Eastern Europe, stretching across an enormous expanse of territory that spans two continents. With a population of approximately 146 million people, Russia is one of the most populous countries in the world, and its society is remarkably diverse, home to more than 200 ethnic groups. Among the largest minority groups are the Tatar, Ukrainian, Bashkir, Chuvash, and Chechen peoples, each with their own distinct languages, traditions, and cultural practices. Russian is the official language, serving as the common language that unites this diverse population across the country's vast territory.

Religiously, Russia is predominantly Russian Orthodox Christian, with approximately forty percent of the population adhering to this faith. Islam is the second largest religion, reflecting the significant Muslim populations in regions like Tatarstan and Chechnya. Other forms of Christianity are also practised, and the state officially recognises Judaism and Buddhism as well, the latter being particularly prevalent in regions like Kalmykia and Buryatia near the Mongolian border. This religious diversity is a legacy of Russia's expansion across vast territories over centuries, incorporating many different peoples and their faiths into a single state.

The majority of Russia's population is concentrated in the western areas of the country, particularly in the European part, where the climate is milder and the land is more suitable for agriculture and urban development. The eastern regions, stretching across Siberia to the Pacific, are far more sparsely populated due to their harsh climate and challenging terrain. Russia's major cities reflect this population distribution. Moscow, the capital, is by far the largest city with approximately 12 million residents, serving as the political, economic, and cultural heart of the nation. Saint Petersburg, the former imperial capital, has about 5 million residents and is renowned for its stunning architecture and cultural institutions. Novosibirsk, with 1.6 million people, is the largest city in Siberia and a major scientific and industrial centre. Yekaterinburg, with 1.5 million residents, sits at the boundary between Europe and Asia. Kazan, with 1.2 million people, is the capital of Tatarstan and known as a model of peaceful coexistence between Russian Orthodox and Muslim communities.

Russia is blessed with enormous natural resources, including platinum, gold, diamonds, iron ore, titanium, copper, and phosphates. These resources have been a major driver of the Russian economy and have given the country significant influence in global commodity markets. Russia's political system is a semi-presidential federation, in which the president works alongside a prime minister and a cabinet of ministers. Since the end of the Soviet era, the presidents have included Boris Yeltsin, the first president of the Russian Federation, followed by Vladimir Putin, and Dmitry Medvedev, who served as president from 2008 to 2012 before Putin returned to the office.`,
    reading2Title: 'The USSR, Satellite States, and the Cold War',
    reading2Content: `The Union of Soviet Socialist Republics, commonly known as the USSR or the Soviet Union, existed from 1922 to 1991 and was the largest country in the world during its existence, covering approximately one-sixth of the Earth's surface. The USSR encompassed the present-day nations of Russia, Georgia, Ukraine, Moldova, Belarus, Armenia, Azerbaijan, Kazakhstan, Uzbekistan, Turkmenistan, Kyrgyzstan, and Tajikistan. It was founded by Vladimir Lenin after the Bolshevik Revolution, which overthrew the Russian Provisional Government and established a communist state. The USSR promoted social ownership of production, meaning that factories, farms, and other means of production were owned and controlled by the state rather than by private individuals. It was the first socialist country in the world, and its creation had a profound impact on global politics throughout the twentieth century.

After World War II, the USSR expanded its influence dramatically, encompassing much of Eastern Europe. Several countries became satellite states — nations that were formally independent but were effectively controlled by the USSR. These satellite states included Poland, Czechoslovakia, Hungary, East Germany, Bulgaria, and Romania. Although these countries had their own governments and institutions, their policies were dictated by Moscow, and any attempts to pursue independent paths were swiftly suppressed, as seen in Hungary in 1956 and Czechoslovakia in 1968. The establishment of satellite states created a buffer zone between the USSR and Western Europe, which Soviet leaders viewed as essential for their security.

By the 1980s, however, the Soviet economy was suffering from stagnation, inefficiency, and the enormous cost of maintaining its military and satellite states. Many Soviet republics and satellite countries began seeking greater independence and autonomy. Mikhail Gorbachev, the last Head of State of the USSR, attempted to revive the economy through reforms known as Perestroika (restructuring) and Glasnost (openness). While these reforms were intended to modernise the Soviet system, they ultimately contributed to its collapse by unleashing forces of nationalism and democratic change that the Soviet structure could not contain. The USSR was formally dissolved in 1991, and Boris Yeltsin became the first president of the independent Russian state.

The relationship between Russia and Central Asia has deep historical roots. The Russian Empire gained influence in Central Asia during the eighteenth century, and by 1847, it had invaded the Kazakh steppe. The Great Game was a period of intense rivalry between Russia and Britain as they competed for dominance over Central Asia, a contest that shaped the region's borders and political dynamics. The National Territorial Delimitation (NTD) was the process by which Central Asia was divided into ethnically based republics under Soviet rule, creating the borders that largely define the five Central Asian nations today.

The Cold War, which lasted from 1945 to 1991, was a conflict between Western democratic ideology, led primarily by the United States, and Eastern socialist ideology, led by the USSR. It was called a "Cold" War because the two superpowers never directly fought each other in open warfare, fearing that a direct confrontation would lead to nuclear annihilation. Instead, they engaged in proxy wars — conflicts in other countries where each side supported opposing factions. The Cold War also featured the Race to Space and the Nuclear Arms Race, as both sides competed to demonstrate their technological and military superiority. The Cold War finally ended in 1991 with the dissolution of the USSR and the election of Boris Yeltsin as president of Russia.`,
    reading1Time: 8,
    reading2Time: 8,
    kwlExplanation: KWL_EXPLANATION,
    discussionQuestions: [
      'Why were satellite states important to the USSR\'s strategy after World War II?',
      'How did Gorbachev\'s reforms of Perestroika and Glasnost contribute to the fall of the USSR?',
      'What was the Great Game, and how did it shape Central Asia?',
      'Why was the Cold War called "cold" even though there were many conflicts during this period?',
      'How did the National Territorial Delimitation shape the borders of modern Central Asian countries?'
    ],
    keyFacts: [
      'Russia has a population of ~146 million with 200+ ethnic groups.',
      'Russian Orthodox Christianity is practised by ~40% of the population; Islam is the second largest religion.',
      'Moscow is the largest city (~12 million), followed by Saint Petersburg (~5 million).',
      'The USSR existed from 1922 to 1991 and covered 1/6 of the Earth\'s surface.',
      'The USSR was founded by Vladimir Lenin after the Bolshevik Revolution.',
      'Satellite states included Poland, Czechoslovakia, Hungary, East Germany, Bulgaria, and Romania.',
      'Mikhail Gorbachev was the last Head of State of the USSR, introducing Perestroika and Glasnost.',
      'The Russian Empire gained influence in Central Asia in the 18th century and invaded the Kazakh steppe by 1847.',
      'The Cold War (1945–1991) was a conflict between Western democracy and Eastern socialism, without direct military confrontation.',
      'The Cold War featured proxy wars, the Race to Space, and the Nuclear Arms Race.'
    ],
    visualType: 'timeline',
    visualData: {
      title: 'Key Events: From Russian Empire to the End of the Cold War',
      events: [
        { period: '18th Century', description: 'Russian Empire gains influence in Central Asia' },
        { period: '1847', description: 'Russia invades the Kazakh steppe; Great Game with Britain intensifies' },
        { period: '1917', description: 'Bolshevik Revolution — Lenin overthrows Russian Provisional Government' },
        { period: '1922', description: 'USSR officially established — first socialist country' },
        { period: '1945', description: 'End of WWII — USSR expands, satellite states established; Cold War begins' },
        { period: '1945–1991', description: 'Cold War: proxy wars, Space Race, Nuclear Arms Race' },
        { period: '1980s', description: 'Gorbachev introduces Perestroika and Glasnost reforms' },
        { period: '1991', description: 'USSR dissolved; Boris Yeltsin becomes first president of Russia; Cold War ends' }
      ]
    },
    quizQuestions: [
      {
        id: 'G7_T3_U9_L7_Q1',
        question: 'What fraction of the Earth\'s surface did the USSR cover?',
        options: ['One-tenth', 'One-eighth', 'One-fifth', 'One-sixth'],
        correctAnswer: 3,
        explanation: 'The USSR was the largest country in the world, covering approximately one-sixth of the Earth\'s surface during its existence from 1922 to 1991.'
      },
      {
        id: 'G7_T3_U9_L7_Q2',
        question: 'What were satellite states?',
        options: ['Countries that orbited the Earth during the Space Race', 'Formally independent countries controlled by the USSR', 'Countries that voluntarily joined the USSR', 'Independent democratic nations in Eastern Europe'],
        correctAnswer: 1,
        explanation: 'Satellite states were nations that were formally independent but were effectively controlled by the USSR, including Poland, Czechoslovakia, Hungary, East Germany, Bulgaria, and Romania.'
      },
      {
        id: 'G7_T3_U9_L7_Q3',
        question: 'Why was the Cold War called "cold"?',
        options: ['Because it took place during winter', 'Because the two superpowers never directly fought each other', 'Because it was fought only in cold regions', 'Because no weapons were used'],
        correctAnswer: 1,
        explanation: 'The Cold War was called "cold" because the USA and USSR never directly fought each other in open warfare, fearing nuclear annihilation. Instead, they engaged in proxy wars and ideological competition.'
      },
      {
        id: 'G7_T3_U9_L7_Q4',
        question: 'Who was the last Head of State of the USSR?',
        options: ['Vladimir Lenin', 'Boris Yeltsin', 'Mikhail Gorbachev', 'Dmitry Medvedev'],
        correctAnswer: 2,
        explanation: 'Mikhail Gorbachev was the last Head of State of the USSR, introducing reforms of Perestroika and Glasnost before the USSR was dissolved in 1991.'
      },
      {
        id: 'G7_T3_U9_L7_Q5',
        question: 'What was the Great Game?',
        options: ['A popular board game in the Soviet Union', 'An Olympic competition between the USA and USSR', 'A rivalry between Russia and Britain competing for dominance in Central Asia', 'The code name for the Nuclear Arms Race'],
        correctAnswer: 2,
        explanation: 'The Great Game was a period of intense rivalry between Russia and Britain as they competed for dominance over Central Asia, shaping the region\'s borders and political dynamics.'
      }
    ],
    interactiveStrategies: [
      {
        strategy: 'Cold War Role-Play Debate',
        description: 'Students simulate a Cold War-era debate between Western and Eastern perspectives.',
        duration: 25,
        instructions: 'Divide the class into two groups: one representing the Western democratic perspective (led by the USA) and one representing the Eastern socialist perspective (led by the USSR). Each group prepares arguments defending their ideology, including points about economic systems, individual freedoms, and security. Students then engage in a structured debate, with each side presenting their arguments and responding to the other. After the debate, the class discusses how proxy wars and the fear of nuclear conflict shaped international relations during the Cold War.'
      },
      {
        strategy: 'Timeline of Soviet Influence in Central Asia',
        description: 'Students create an illustrated timeline showing Soviet influence in Central Asia.',
        duration: 20,
        instructions: 'Provide students with a blank timeline spanning from the 18th century to 1991. Using both readings, students mark key events: Russian Empire\'s expansion into Central Asia (18th century), invasion of the Kazakh steppe (1847), National Territorial Delimitation, Soviet rule, and independence (1991). For each event, students write a brief description and draw a symbol or illustration. In small groups, discuss how each event changed Central Asia and which event had the most lasting impact.'
      }
    ]
  }
];

export function getG7T3Unit9LessonContent(lessonId: string): LessonContent | null {
  return g7t3Unit9.find(l => l.lessonId === lessonId) || null;
}
