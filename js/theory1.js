/* 理论 1/2:第 1–8 章
   每节 [标题, 标题EN, 正文, 正文EN];正文支持:空行分段、"- "列表、"> "提示框、"### "小标题、"|"表格、**粗体**、
   [[#/路径|文字]] 链接、[[h:药名]] [[f:方名]]、{{taiji}} {{wuxing}} 示意图 */

L.T({
  id: 'intro', ic: '医', zh: '中医是怎样看病的', en: 'How Chinese Medicine Thinks',
  lead: '两句话概括中医的思维方式:把人看成一个整体,按“证”来治病。',
  leadEn: 'Two ideas sum up how Chinese medicine works: see the person as a whole, and treat the pattern, not just the disease name.',
  secs: [
    ['先说结论', 'The short version',
`中医的核心思想,教材里叫两大特点:**整体观念**和**辨证论治**。

- **整体观念**:人体是一个整体,五脏六腑、四肢五官彼此相连;人又和自然环境(四季、气候、地域)、社会环境连在一起。
- **辨证论治**:医生收集症状和体征,分析出这个人此刻的“证”,再根据“证”来定治法、开方。

> 打个比方:西医常问“你得的是什么病”,中医还会追问“你这个人现在是什么状态”。两个人都感冒,一个怕冷无汗,一个发热咽痛,中医会开完全不同的药。`,
`Chinese medicine rests on two principles that every textbook opens with: **holism** and **pattern differentiation and treatment** (*bianzheng lunzhi*).

- **Holism**: the body is one connected system — organs, limbs and senses all link up. The person is also tied to nature (seasons, climate, place) and to society.
- **Pattern-based treatment**: the practitioner gathers signs and symptoms, works out the person’s current **pattern** (*zheng*), then chooses a treatment method and formula for that pattern.

> Think of it this way: modern medicine asks “which disease do you have?”; Chinese medicine also asks “what state is your body in right now?” Two people with a cold — one chilled with no sweating, the other feverish with a sore throat — get completely different herbs.`],
    ['整体观念', 'Holism',
`### 人体自身是一个整体
中医以**五脏**为中心,通过**经络**把六腑、形体、官窍联系起来。比如“肝开窍于目”,眼睛干涩常从肝去调;“心其华在面”,心血足则面色红润。

### 人与自然是一个整体(天人相应)
季节、昼夜、地域都会影响人体。夏天阳气外浮,容易出汗;冬天阳气内藏,容易手脚冰凉。同一种病,南方湿热地区和北方干冷地区用药也会不同。

### 人与社会是一个整体
情绪、工作压力、人际关系都会影响健康。中医把过度的情绪变化(七情)列为重要的致病因素。`,
`### The body is one whole
Chinese medicine places the **five zang organs** at the centre and uses the **meridians** to link them with the fu organs, tissues and sense organs. “The Liver opens into the eyes,” so dry, tired eyes are often treated through the Liver; “the Heart shows in the face,” so ample Heart blood gives a healthy complexion.

### People and nature are one whole
Seasons, time of day and geography all affect the body. In summer yang floats outward and we sweat easily; in winter yang withdraws inward and hands and feet get cold. The same illness may be treated differently in a hot, humid south and a cold, dry north.

### People and society are one whole
Emotions, work stress and relationships all affect health. Excessive emotion (the “seven emotions”) is one of the main causes of illness in Chinese medicine.`],
    ['病、证、症有什么区别', 'Disease, pattern and symptom',
`这三个字读音一样,意思不同,是理解中医的关键:

| 概念 | 含义 | 例子 |
| 症 | 单个症状或体征 | 咳嗽、发热、舌红、脉数 |
| 证 | 疾病某一阶段的病理概括,包括病位、病性、邪正关系 | 风寒束表证、肝郁脾虚证 |
| 病 | 有特定发展规律的全过程 | 感冒、消渴、胸痹 |

**同病异治**:同一种病,证不同,治法不同。比如都是感冒,风寒证用辛温解表,风热证用辛凉解表。
**异病同治**:不同的病,证相同,治法可以相同。比如久泻、脱肛、子宫下垂,只要都属于“中气下陷”,都可以用[[f:补中益气汤]]。`,
`Three Chinese words sound alike (*zhèng / zhèng / bìng*) but mean different things — the key to understanding the system:

| Term | Meaning | Example |
| Symptom (症) | a single symptom or sign | cough, fever, red tongue, rapid pulse |
| Pattern (证) | a summary of what is going on at this stage: location, nature, and the balance between illness and the body’s resistance | wind-cold fettering the exterior; Liver qi stagnation with Spleen deficiency |
| Disease (病) | a whole illness with its own course | common cold, wasting-thirst, chest impediment |

**Same disease, different treatments**: two colds with different patterns get different methods — warm-acrid herbs for wind-cold, cool-acrid herbs for wind-heat.
**Different diseases, same treatment**: chronic diarrhoea, rectal prolapse and uterine prolapse can all be treated with [[f:补中益气汤]] when they share the pattern “sinking of middle qi”.`],
    ['中医的经典与发展', 'Classics and history',
`- **《黄帝内经》**(约战国至西汉):奠定理论基础,讲阴阳五行、脏腑经络、病因病机、养生。
- **《神农本草经》**(约东汉):现存最早的药物学专著,载药 365 种。
- **《伤寒杂病论》**(东汉·张仲景):确立辨证论治,后世分为《伤寒论》《金匮要略》,书中的方被称为“经方”。
- **金元四大家**:刘完素(寒凉派)、张从正(攻下派)、李杲(补土派)、朱丹溪(滋阴派)。
- **明清温病学**:叶天士、吴鞠通等创立卫气营血与三焦辨证,专治温热病。
- **《本草纲目》**(明·李时珍):载药 1892 种,影响遍及世界。

> 本站的中药与方剂部分,顺序和分类都按现代《中药学》《方剂学》教材,方便你以后对照课本。`,
`- ***Huangdi Neijing*** (Yellow Emperor’s Inner Classic, c. 3rd–1st century BCE): the theoretical foundation — yin-yang, five phases, organs, meridians, causes of disease and health preservation.
- ***Shennong Bencao Jing*** (Divine Farmer’s Classic of Materia Medica, c. 1st–2nd century CE): the earliest surviving herbal, 365 medicinals.
- ***Shanghan Zabing Lun*** (Treatise on Cold Damage and Miscellaneous Diseases, Zhang Zhongjing, c. 200 CE): established pattern-based treatment; its formulas are called “classical formulas”.
- **Four great masters of the Jin-Yuan era**: schools of cooling, purging, tonifying the Spleen (“Earth”), and nourishing yin.
- **Warm-disease school (Ming-Qing)**: Ye Tianshi, Wu Jutong and others created the defence-qi-nutritive-blood and Sanjiao frameworks for febrile illness.
- ***Bencao Gangmu*** (Compendium of Materia Medica, Li Shizhen, 1578): 1,892 substances, influential worldwide.

> The herb and formula sections of this site follow the order and categories of the modern Chinese university textbooks, so you can match them to your coursebooks later.`]
  ]
});

L.T({
  id: 'yinyang', ic: '阴', zh: '阴阳', en: 'Yin and Yang',
  lead: '阴阳不是神秘玄学,而是一种“二分法”:把相互关联的事物分成两面来看。',
  leadEn: 'Yin and yang are not mysticism — they are a way of looking at any related pair as two sides of one thing.',
  secs: [
    ['阴阳是什么', 'What are yin and yang?',
`最早的意思很朴素:**向日为阳,背日为阴**。山的南坡晒得到太阳,是阳;北坡晒不到,是阴。

后来引申为一切相关事物的两种属性:

| 阳 | 阴 |
| 热、明亮、向上、向外 | 寒、晦暗、向下、向内 |
| 运动、兴奋、功能 | 静止、抑制、物质 |
| 白天、夏天 | 夜晚、冬天 |
| 体表、背部、六腑 | 体内、腹部、五脏 |
| 气 | 血、津液 |

{{taiji}}

> 注意:阴阳是**相对**的。胸相对背是阴,相对腹又是阳。所以说“阴阳之中复有阴阳”。`,
`The original meaning was simple: **the sunny side of a hill is yang, the shady side is yin**.

It was then extended to the two qualities of any related pair:

| Yang | Yin |
| hot, bright, upward, outward | cold, dark, downward, inward |
| movement, activity, function | stillness, rest, substance |
| day, summer | night, winter |
| body surface, back, fu organs | interior, abdomen, zang organs |
| qi | blood and fluids |

{{taiji}}

> Yin and yang are **relative**. The chest is yin compared with the back, yet yang compared with the abdomen — “within yin and yang there is again yin and yang”.`],
    ['阴阳的四种关系', 'Four relationships',
`- **对立制约**:阴阳互相牵制。热可以制寒,寒可以制热。
- **互根互用**:谁也离不开谁。没有白天就无所谓黑夜;气(阳)推动血(阴)运行,血又承载着气。所以“孤阴不生,独阳不长”。
- **消长平衡**:此消彼长,动态平衡。从冬到夏阳长阴消,从夏到冬阴长阳消。
- **相互转化**:到了极点会转向反面,“重阴必阳,重阳必阴”。比如高热到极点,突然体温骤降、四肢冰冷(由阳证转为阴证)。`,
`- **Opposition and restraint**: each holds the other in check — heat counters cold, cold counters heat.
- **Interdependence**: neither exists alone. Qi (yang) moves blood (yin); blood (yin) carries and anchors qi. “Solitary yin cannot arise, lone yang cannot grow.”
- **Waxing and waning**: a dynamic balance. From winter to summer yang grows as yin shrinks, and the reverse from summer to winter.
- **Transformation**: at an extreme, each turns into the other. A very high fever can suddenly collapse into a cold, clammy state — a yang pattern turning into a yin pattern.`],
    ['阴阳失衡就会生病', 'Imbalance means illness',
`中医认为健康就是**阴平阳秘**——阴阳相对平衡。失衡有四种基本情况:

| 类型 | 机理 | 表现 | 治法 |
| 阳盛(实热) | 阳气过盛 | 高热、面红、口渴、舌红苔黄 | 清热(“热者寒之”) |
| 阴盛(实寒) | 寒邪过盛 | 怕冷、腹冷痛、舌淡苔白 | 散寒(“寒者热之”) |
| 阴虚(虚热) | 阴液不足,阳相对亢 | 午后潮热、手足心热、盗汗、口干 | 滋阴 |
| 阳虚(虚寒) | 阳气不足,阴相对盛 | 怕冷、手脚凉、精神差、小便清长 | 温阳 |

> 实证是“多了”(邪气盛),虚证是“少了”(正气虚)。同样是“热”,实热要清,虚热要补阴——这是用药时最常见的分辨点。`,
`Health is described as **“yin calm, yang sealed”** — a relative balance. There are four basic kinds of imbalance:

| Type | Mechanism | Signs | Treatment |
| Excess yang (excess heat) | too much yang | high fever, red face, thirst, red tongue with yellow coating | clear heat (“treat heat with cold”) |
| Excess yin (excess cold) | too much cold | aversion to cold, cold abdominal pain, pale tongue with white coating | dispel cold (“treat cold with warmth”) |
| Yin deficiency (deficiency heat) | not enough yin, so yang is relatively high | afternoon heat, hot palms and soles, night sweats, dry mouth | nourish yin |
| Yang deficiency (deficiency cold) | not enough yang, so yin is relatively high | feeling cold, cold limbs, fatigue, copious clear urine | warm yang |

> Excess means something is “too much” (a pathogen is strong); deficiency means something is “too little” (the body’s resources are low). Both may look like “heat”, but excess heat is cleared while deficiency heat is treated by replenishing yin — one of the most common distinctions in prescribing.`],
    ['生活里的阴阳', 'Yin and yang in daily life',
`- **作息**:白天属阳宜动,夜晚属阴宜静。长期熬夜最耗阴血,所以常见口干、眼涩、心烦失眠。
- **饮食**:羊肉、生姜、辣椒偏温热(阳);西瓜、绿豆、苦瓜偏寒凉(阴)。怕冷的人少吃生冷,容易上火的人少吃辛辣。
- **季节**:《内经》说“春夏养阳,秋冬养阴”。夏天别贪凉伤了阳气,冬天别过度进补燥热伤了阴。`,
`- **Rhythm**: day is yang, for activity; night is yin, for rest. Habitual late nights drain yin and blood — hence dry mouth, dry eyes, irritability and poor sleep.
- **Food**: lamb, ginger and chilli are warming (yang); watermelon, mung beans and bitter melon are cooling (yin). People who feel cold easily should go easy on raw, cold food; people prone to “heatiness” should limit spicy food.
- **Seasons**: the *Neijing* says “nourish yang in spring and summer, yin in autumn and winter”. Don’t chill yourself too much in summer, and don’t overdo hot, drying tonics in winter.`]
  ]
});

L.T({
  id: 'wuxing', ic: '五', zh: '五行', en: 'The Five Phases',
  lead: '木火土金水不是五种物质,而是五种“运动方式”,用来说明五脏之间如何互相支持、互相制约。',
  leadEn: 'Wood, Fire, Earth, Metal and Water are not five substances but five kinds of movement — a model for how the organs support and restrain each other.',
  secs: [
    ['五行的特性', 'The nature of each phase',
`| 五行 | 特性 | 记忆 |
| 木 | 曲直:生长、升发、条达舒畅 | 树木向上向外伸展 |
| 火 | 炎上:温热、向上 | 火苗往上窜 |
| 土 | 稼穑:生化、承载、受纳 | 大地种庄稼 |
| 金 | 从革:清肃、收敛、沉降 | 秋天肃杀、金属沉重 |
| 水 | 润下:寒凉、滋润、向下 | 水往低处流 |

所以“五行”英文常译为 Five Phases(五种阶段/状态),而不是 Five Elements。`,
`| Phase | Quality | Image |
| Wood | bending and straightening: growth, rising, free spreading | a tree reaching up and out |
| Fire | flaring upward: heat, rising | flames leaping up |
| Earth | sowing and reaping: nourishing, bearing, receiving | farmland that grows crops |
| Metal | yielding and changing: clearing, contracting, descending | autumn’s crispness, heavy metal |
| Water | moistening and descending: cold, moist, downward | water flowing to low ground |

That is why *wuxing* is better translated “Five Phases” than “Five Elements”.`],
    ['五行归类', 'Correspondences',
`古人把自然和人体的很多事物按五行归类,形成一张“对应表”:

| 五行 | 木 | 火 | 土 | 金 | 水 |
| 五脏 | 肝 | 心 | 脾 | 肺 | 肾 |
| 六腑 | 胆 | 小肠 | 胃 | 大肠 | 膀胱 |
| 五官 | 目 | 舌 | 口 | 鼻 | 耳 |
| 五体 | 筋 | 脉 | 肉 | 皮毛 | 骨 |
| 五志 | 怒 | 喜 | 思 | 悲 | 恐 |
| 五色 | 青 | 赤 | 黄 | 白 | 黑 |
| 五味 | 酸 | 苦 | 甘 | 辛 | 咸 |
| 五季 | 春 | 夏 | 长夏 | 秋 | 冬 |

> 这张表在临床上很有用:比如面色发青、爱发脾气、两胁胀痛,都指向“肝”。`,
`The ancients sorted many things in nature and in the body into five groups:

| Phase | Wood | Fire | Earth | Metal | Water |
| Zang organ | Liver | Heart | Spleen | Lung | Kidney |
| Fu organ | Gallbladder | Small Intestine | Stomach | Large Intestine | Bladder |
| Sense organ | eyes | tongue | mouth | nose | ears |
| Tissue | sinews | vessels | flesh | skin & body hair | bones |
| Emotion | anger | joy | worry | grief | fear |
| Colour | green-blue | red | yellow | white | black |
| Taste | sour | bitter | sweet | pungent | salty |
| Season | spring | summer | late summer | autumn | winter |

> The table is practical: a greenish complexion, irritability and distending pain in the flanks all point to the Liver.`],
    ['相生与相克', 'Generating and controlling',
`{{wuxing}}

- **相生**(母子关系):木生火,火生土,土生金,金生水,水生木。比如“木生火”——肝藏血,可以济养心。
- **相克**(制约关系):木克土,土克水,水克火,火克金,金克木。比如“木克土”——肝气条达,能帮助脾胃消化;但肝气太过,就会“欺负”脾胃。

> 有生无克,会过度亢盛;有克无生,会衰败。生克并存,才能维持平衡。`,
`{{wuxing}}

- **Generating cycle** (mother-child): Wood→Fire→Earth→Metal→Water→Wood. For example, “Wood generates Fire”: the Liver stores blood, which nourishes the Heart.
- **Controlling cycle**: Wood→Earth→Water→Fire→Metal→Wood. For example, “Wood controls Earth”: free-flowing Liver qi helps the Spleen and Stomach digest — but overactive Liver qi “bullies” them.

> Generation without control leads to excess; control without generation leads to decline. Both are needed for balance.`],
    ['五行在治疗中的用法', 'Using the five phases in treatment',
`当生克关系失常,会出现:
- **相乘**:克得太过。如肝气郁结、急躁易怒,同时出现胃痛、腹胀、腹泻——“肝木乘脾土”。
- **相侮**:反向欺负。如肝火太旺,反过来灼伤肺,出现咳嗽、咯血——“木火刑金”。
- **母病及子 / 子病及母**:如肾阴(水)不足,不能涵养肝木,出现头晕目眩。

由此产生的经典治法:
- **培土生金**:补脾来治肺虚久咳。
- **滋水涵木**:补肾阴来平肝阳。
- **抑木扶土**:疏肝健脾,治情绪性腹痛腹泻,代表方[[f:痛泻要方]]。
- **泻南补北**:清心火、滋肾水,治心肾不交的失眠。`,
`When the cycles go wrong:
- **Overacting**: control becomes excessive. Stress and irritability with stomach pain, bloating and diarrhoea — “Liver Wood overacting on Spleen Earth”.
- **Insulting**: control goes the wrong way. Blazing Liver fire scorches the Lung, causing cough or coughing blood — “Wood-fire tormenting Metal”.
- **Mother affecting child, child affecting mother**: insufficient Kidney yin (Water) fails to nourish Liver Wood, causing dizziness.

Classic treatment strategies follow:
- **Bank up Earth to generate Metal**: strengthen the Spleen to treat chronic cough from Lung deficiency.
- **Enrich Water to nourish Wood**: tonify Kidney yin to calm rising Liver yang.
- **Restrain Wood, support Earth**: soothe the Liver and strengthen the Spleen for stress-related abdominal pain and diarrhoea — e.g. [[f:痛泻要方]].
- **Drain the south, tonify the north**: clear Heart fire and enrich Kidney water for insomnia from Heart-Kidney disharmony.`]
  ]
});

L.T({
  id: 'zang', ic: '脏', zh: '五脏', en: 'The Five Zang Organs',
  lead: '中医的“心肝脾肺肾”是五个功能系统,和解剖学上的器官不完全相同。',
  leadEn: 'The Heart, Liver, Spleen, Lung and Kidney of Chinese medicine are functional systems, not quite the same as the anatomical organs.',
  secs: [
    ['先打破一个误会', 'A common misunderstanding',
`中医说“脾虚”,不是说脾脏这个器官坏了;说“肾虚”,也不等于肾功能检查异常。

中医的**藏象**学说,是通过观察人体外在的表现(“象”),来推断内在脏腑(“藏”)的功能状态。所以中医的“脾”主要指消化吸收和营养输布这一整套功能,更接近“消化系统”的概念。

五脏的共同特点:**藏精气而不泻**,以储藏精气为主,宜充满。`,
`When a Chinese-medicine practitioner says “Spleen deficiency”, they do not mean the anatomical spleen is damaged; “Kidney deficiency” does not mean abnormal kidney function tests.

The theory of ***zangxiang*** (“organs and their manifestations”) infers the state of the internal organs from what shows on the outside. The Chinese-medicine “Spleen” is mainly the whole function of digestion, absorption and distribution of nourishment — closer to the idea of a “digestive system”.

What the five zang share: they **store essence and qi and do not discharge** — they should be full.`],
    ['心:君主之官', 'Heart: the sovereign',
`- **主血脉**:推动血液在脉中运行。心气足则脉搏和缓有力、面色红润。
- **主神志**(藏神):精神、意识、思维、睡眠都归心管。心血不足,常见心慌、失眠、多梦、健忘。
- **联系**:在体合脉,其华在面,开窍于舌,在志为喜,在液为汗。

> 舌尖红、口舌生疮,中医常说“心火旺”。`,
`- **Governs blood and vessels**: pumps blood through the vessels. Strong Heart qi gives a steady pulse and a rosy face.
- **Houses the spirit (*shen*)**: mind, consciousness, thinking and sleep. Insufficient Heart blood often shows as palpitations, insomnia, vivid dreams and forgetfulness.
- **Links**: vessels; shows in the face; opens into the tongue; emotion is joy; fluid is sweat.

> A red tongue tip and mouth ulcers are often described as “Heart fire”.`],
    ['肺:相傅之官', 'Lung: the minister',
`- **主气、司呼吸**:吸清呼浊,并参与全身之气的生成。
- **主宣发肃降**:宣发——把气和津液向上向外布散到体表;肃降——向下向内清肃,使呼吸通畅、水道通调。
- **通调水道**:“肺为水之上源”,肺气不降可出现水肿、小便不利。
- **朝百脉、主治节**:协助心推动血液运行。
- **联系**:在体合皮,其华在毛,开窍于鼻,在志为悲(忧),在液为涕。肺是“娇脏”,最容易被外邪侵袭,所以感冒先从鼻、咽、皮毛开始。`,
`- **Governs qi and respiration**: takes in clean air, expels stale air, and helps make the body’s qi.
- **Disperses and descends**: dispersing sends qi and fluids up and out to the skin; descending sends them down and in, keeping breathing smooth and water pathways open.
- **Regulates water passages**: “the Lung is the upper source of water” — when Lung qi fails to descend there may be swelling or difficult urination.
- **Meets the hundred vessels**: assists the Heart in moving blood.
- **Links**: skin; shows in the body hair; opens into the nose; emotion is grief; fluid is nasal mucus. The Lung is the “delicate organ”, first to be attacked by external pathogens — which is why colds begin in the nose, throat and skin.`],
    ['脾:后天之本', 'Spleen: root of postnatal life',
`- **主运化**:把吃进去的食物变成气血(运化水谷),并运输水液(运化水湿)。脾虚常见:食欲差、饭后腹胀、大便溏、乏力、面色萎黄。
- **主升清**:把营养物质向上输送;并维持内脏位置。脾气下陷可见久泻、脱肛、胃下垂。
- **主统血**:控制血液在脉内运行不外溢。脾不统血可见皮下出血、月经过多。
- **联系**:在体合肉、主四肢,开窍于口,其华在唇,在志为思,在液为涎。
- 脾**喜燥恶湿**,所以湿气重的人常觉得身体沉重、困倦。

> “脾为生痰之源”:脾运化不好,水湿停聚就会生痰。`,
`- **Transforms and transports**: turns food into qi and blood, and moves fluids. Spleen deficiency often shows as poor appetite, bloating after meals, loose stools, tiredness and a sallow face.
- **Raises the clear**: sends nourishment upward and holds the organs in place. “Sinking Spleen qi” shows as chronic diarrhoea, rectal prolapse or gastroptosis.
- **Controls blood**: keeps blood inside the vessels. When it fails there may be easy bruising or heavy periods.
- **Links**: flesh and the four limbs; opens into the mouth; shows in the lips; emotion is worry/overthinking; fluid is saliva.
- The Spleen **likes dryness and dislikes dampness** — people with heavy “dampness” feel heavy and sluggish.

> “The Spleen is the source of phlegm”: when it fails to transform fluids, they collect and become phlegm.`],
    ['肝:将军之官', 'Liver: the general',
`- **主疏泄**:保持全身气机通畅。它影响:情绪(疏泄正常则心情舒畅)、消化(帮助脾胃)、气血运行、女性月经和男性排精。肝气郁结常见:胸闷、爱叹气、两胁胀痛、乳房胀、月经不调。
- **主藏血**:储藏血液、调节血量。“人卧血归于肝”,肝血不足可见眼干、视物模糊、指甲脆、月经量少。
- **联系**:在体合筋,其华在爪,开窍于目,在志为怒,在液为泪。

> 肝“体阴而用阳”,性喜条达而恶抑郁。长期压力大、生闷气,最先伤到的就是肝的疏泄。`,
`- **Governs free flow**: keeps qi moving smoothly throughout the body, affecting mood, digestion, circulation, menstruation and ejaculation. Liver qi stagnation typically shows as chest tightness, frequent sighing, distending pain in the flanks, breast tenderness and irregular periods.
- **Stores blood**: stores blood and adjusts its volume. “When a person lies down, blood returns to the Liver.” Insufficient Liver blood shows as dry eyes, blurred vision, brittle nails and scanty periods.
- **Links**: sinews; shows in the nails; opens into the eyes; emotion is anger; fluid is tears.

> The Liver “is yin in substance and yang in function”; it likes to spread freely and hates being pent up. Chronic stress and suppressed frustration hit the Liver’s free-flow function first.`],
    ['肾:先天之本', 'Kidney: root of prenatal life',
`- **藏精,主生长发育与生殖**:肾精决定生长、发育、衰老,和生殖能力。小孩长牙长骨、成人生育、老年齿摇发白,都与肾精盛衰相关。
- **肾阴肾阳**:肾阴是全身阴液的根本,肾阳是全身阳气的根本。肾阳虚——怕冷、腰膝冷痛、夜尿多;肾阴虚——腰酸、耳鸣、潮热盗汗。
- **主水**:调节全身水液代谢。
- **主纳气**:帮助肺吸气,使呼吸有深度。肾不纳气见动则气喘。
- **联系**:在体合骨、生髓,其华在发,开窍于耳及二阴,在志为恐,在液为唾。

> 民间说的“肾虚”常被误解为性功能问题。其实中医的肾虚范围更广,腰酸、耳鸣、早衰、怕冷都可能相关,而且要分阴虚阳虚,补错了会适得其反。`,
`- **Stores essence; governs growth, development and reproduction**: Kidney essence drives growth, maturation, ageing and fertility — from children’s teeth and bones to loose teeth and grey hair in old age.
- **Kidney yin and yang**: Kidney yin is the root of all the body’s yin fluids; Kidney yang is the root of all its yang warmth. Kidney yang deficiency — cold, cold sore lower back and knees, frequent night urination. Kidney yin deficiency — sore back, tinnitus, afternoon heat, night sweats.
- **Governs water**: regulates fluid metabolism.
- **Grasps qi**: helps the Lung draw breath deeply. When it fails, breathlessness worsens on exertion.
- **Links**: bones and marrow; shows in the head hair; opens into the ears and the two lower orifices; emotion is fear; fluid is thick saliva.

> “Kidney deficiency” is popularly taken to mean sexual problems. In Chinese medicine it is much broader — sore back, tinnitus, early ageing, feeling cold — and it must be classed as yin or yang deficiency; the wrong tonic can make things worse.`],
    ['五脏之间的关系', 'How the organs relate',
`| 关系 | 要点 |
| 心与肺 | 气与血:肺主气,心主血,气行则血行 |
| 心与肾 | 水火既济:心火下降温肾,肾水上济制心火;失调则心肾不交,失眠心烦 |
| 肝与脾 | 疏泄与运化:肝郁会影响脾胃(肝脾不和) |
| 肝与肾 | 精血同源(“乙癸同源”):肾精和肝血互相转化 |
| 脾与肺 | 气的生成与水液代谢;“脾为生痰之源,肺为贮痰之器” |
| 肺与肾 | 呼吸:肺主出气,肾主纳气 |`,
`| Pair | Key point |
| Heart & Lung | qi and blood: the Lung governs qi, the Heart governs blood; when qi moves, blood moves |
| Heart & Kidney | fire and water in balance: Heart fire warms the Kidney, Kidney water cools the Heart; when they lose contact — insomnia and restlessness |
| Liver & Spleen | free flow and digestion: Liver stagnation disturbs digestion |
| Liver & Kidney | essence and blood share a source and convert into each other |
| Spleen & Lung | making qi and handling fluids; “the Spleen makes phlegm, the Lung stores it” |
| Lung & Kidney | breathing: the Lung breathes out, the Kidney holds the in-breath |`]
  ]
});

L.T({
  id: 'fu', ic: '腑', zh: '六腑与奇恒之腑', en: 'Fu Organs and Extraordinary Organs',
  lead: '六腑负责“消化流水线”,以通为用;奇恒之腑形态像腑、功能像脏。',
  leadEn: 'The six fu organs run the digestive “production line” and work by keeping things moving; the extraordinary organs look like fu but act like zang.',
  secs: [
    ['六腑:以通为用', 'Six fu: they work by flowing',
`六腑是胆、胃、小肠、大肠、膀胱、三焦。共同特点:**传化物而不藏**,**实而不能满**,以通降下行为顺。

| 腑 | 主要功能 | 失常表现 |
| 胆 | 贮藏排泄胆汁;主决断 | 口苦、胁痛、黄疸;胆怯易惊 |
| 胃 | 受纳腐熟水谷,主通降 | 胃痛、嗳气、恶心、呕吐 |
| 小肠 | 受盛化物,泌别清浊 | 小便短赤、大便稀溏 |
| 大肠 | 传化糟粕 | 便秘或泄泻 |
| 膀胱 | 贮尿排尿 | 尿频、尿急、尿痛、遗尿 |
| 三焦 | 通行元气,运行水液 | 水肿、水液代谢失常 |

> “六腑以通为用,以降为顺”——所以便秘、腹胀这类“不通”的问题,治疗多用通降的方法。`,
`The six fu are the Gallbladder, Stomach, Small Intestine, Large Intestine, Bladder and Sanjiao. They **transport and transform, but do not store** — they are filled and then emptied, never kept full; downward movement is their normal direction.

| Fu | Main function | When it goes wrong |
| Gallbladder | stores and releases bile; governs decisiveness | bitter taste, flank pain, jaundice; timidity |
| Stomach | receives and “ripens” food; sends it down | stomach pain, belching, nausea, vomiting |
| Small Intestine | receives, transforms, separates clear from turbid | scanty dark urine, loose stools |
| Large Intestine | conveys waste | constipation or diarrhoea |
| Bladder | stores and releases urine | frequent, urgent or painful urination, bed-wetting |
| Sanjiao | pathway for source qi and fluids | swelling, disturbed fluid metabolism |

> “The fu work by flowing and are healthy when descending” — so problems of blockage such as constipation and bloating are usually treated by restoring downward flow.`],
    ['三焦是什么', 'What is the Sanjiao?',
`三焦是中医特有的概念,一般有两种理解:

- **六腑之一**:全身气和水液运行的通道。
- **部位划分**:**上焦**(膈以上:心、肺)如雾;**中焦**(膈至脐:脾、胃)如沤;**下焦**(脐以下:肝、肾、大小肠、膀胱)如渎。

后世温病学的“三焦辨证”,就是用上中下三焦来判断温热病的深浅。`,
`The Sanjiao (“Triple Burner”) is unique to Chinese medicine and is understood in two ways:

- **As a fu organ**: the passageway for qi and fluids throughout the body.
- **As three regions**: the **upper jiao** (above the diaphragm: Heart, Lung) is “like a mist”; the **middle jiao** (diaphragm to navel: Spleen, Stomach) is “like a fermenting pot”; the **lower jiao** (below the navel: Liver, Kidney, intestines, Bladder) is “like a drainage ditch”.

The later warm-disease school used these three regions to stage febrile illnesses.`],
    ['脏腑表里', 'Paired organs',
`每个脏和一个腑通过经络相互络属,构成**表里关系**:

| 脏(里) | 心 | 肺 | 脾 | 肝 | 肾 | 心包 |
| 腑(表) | 小肠 | 大肠 | 胃 | 胆 | 膀胱 | 三焦 |

临床意义:肺气不降可致大便秘结,反过来通大便也能帮助平喘;心火可下移小肠,出现小便灼热。`,
`Each zang organ is paired with a fu organ through the meridians in an **interior-exterior relationship**:

| Zang (interior) | Heart | Lung | Spleen | Liver | Kidney | Pericardium |
| Fu (exterior) | Small Intestine | Large Intestine | Stomach | Gallbladder | Bladder | Sanjiao |

In practice: when Lung qi fails to descend, constipation can follow — and relieving the bowels can ease wheezing; Heart fire can pass down to the Small Intestine, causing burning urination.`],
    ['奇恒之腑', 'Extraordinary organs',
`脑、髓、骨、脉、胆、女子胞(子宫)。形态中空像腑,却贮藏精气像脏,所以叫“奇恒”。

- **脑**为髓之海、元神之府,与心、肾关系密切。
- **女子胞**主月经和孕育胎儿,与肾、肝、脾及冲任二脉关系密切。
- **胆**既是六腑又是奇恒之腑,因为它藏的胆汁是“精汁”。`,
`The brain, marrow, bones, vessels, Gallbladder and uterus. They are hollow like fu organs but store essence like zang organs — hence “extraordinary”.

- The **brain** is the “sea of marrow” and home of the original spirit, closely tied to the Heart and Kidney.
- The **uterus** governs menstruation and pregnancy, closely tied to the Kidney, Liver, Spleen and the Chong and Ren vessels.
- The **Gallbladder** counts as both a fu and an extraordinary organ because bile is a “pure fluid”.`]
  ]
});

L.T({
  id: 'qixue', ic: '气', zh: '气、血、津液', en: 'Qi, Blood and Body Fluids',
  lead: '气、血、津液是构成人体、维持生命活动的基本物质。很多“虚”和“堵”,说的就是它们。',
  leadEn: 'Qi, blood and fluids are the basic substances that make up the body and keep it alive. Most talk of “deficiency” and “blockage” is about them.',
  secs: [
    ['气', 'Qi',
`气是运行不息的极细微物质,也是推动生命活动的动力。

**来源**:先天之精(父母给的)+ 水谷之精(饮食)+ 自然界清气(呼吸)。

**五大作用**:推动(血液运行、生长发育)、温煦(维持体温)、防御(抵御外邪)、固摄(固摄血液、汗液、尿液、精液不外泄)、气化(物质转化)。

**几种重要的气**:
- **元气**:最根本的气,源于肾。
- **宗气**:积于胸中,推动呼吸和血行。
- **营气**:行于脉中,营养全身。
- **卫气**:行于脉外,保卫体表。卫气虚的人容易感冒、出汗多。

**气的运动**叫“气机”,基本形式是**升降出入**。`,
`Qi is an ever-moving, extremely fine substance and the driving force of life.

**Sources**: prenatal essence (from the parents) + essence from food + clean air from breathing.

**Five functions**: propelling (blood flow, growth), warming (body temperature), defending (against pathogens), containing (keeps blood, sweat, urine and semen from leaking) and transforming (converting one substance into another).

**Important kinds of qi**:
- **Source qi**: the most fundamental, rooted in the Kidney.
- **Gathering qi**: collects in the chest and drives breathing and circulation.
- **Nutritive qi**: flows in the vessels and nourishes the body.
- **Defensive qi**: flows outside the vessels and guards the surface. People with weak defensive qi catch colds easily and sweat a lot.

The movement of qi — the **qi mechanism** — takes four basic forms: **rising, descending, exiting and entering**.`],
    ['血', 'Blood',
`血是运行于脉中、富有营养的红色液体。

- **生成**:主要由脾胃运化的水谷精微化生,肾精也可化血。
- **功能**:**濡养**全身(面色、皮肤、毛发、肌肉);是**神志活动**的物质基础——血虚的人容易心慌、失眠、多梦。
- **运行**:靠心推动、肺辅助、脾统摄、肝调节。

> 血虚的典型表现:面色淡白或萎黄、嘴唇指甲颜色淡、头晕眼花、心悸失眠、月经量少色淡。代表方[[f:四物汤]]、[[f:当归补血汤]]。`,
`Blood is the nourishing red fluid that flows in the vessels.

- **Production**: mainly from the food essence transformed by the Spleen and Stomach; Kidney essence can also become blood.
- **Functions**: **nourishes** the whole body (complexion, skin, hair, muscles) and is the material basis of **mental activity** — blood-deficient people tend to have palpitations, insomnia and many dreams.
- **Circulation**: pushed by the Heart, assisted by the Lung, contained by the Spleen, regulated by the Liver.

> Typical blood deficiency: pale or sallow face, pale lips and nails, dizziness, blurred vision, palpitations, insomnia, scanty pale periods. Representative formulas: [[f:四物汤]], [[f:当归补血汤]].`],
    ['津液', 'Body fluids',
`津液是体内一切正常水液的总称。
- **津**:清稀,流动性大,分布在体表、孔窍,起滋润作用。
- **液**:稠厚,流动性小,灌注关节、脏腑、脑髓,起濡养作用。

津液的生成、输布、排泄,主要靠**脾的运化、肺的宣降、肾的气化**,三焦是通道。

津液代谢失常:不足则口干、皮肤干、便秘、尿少;停聚则成**湿、水、痰、饮**——这也是“湿气重”的来源。`,
`*Jinye* is the umbrella term for all normal fluids in the body.
- ***Jin***: thin and mobile, at the surface and in the orifices; moistens.
- ***Ye***: thick and less mobile, fills the joints, organs and brain; nourishes.

Fluid production, distribution and excretion rely mainly on **Spleen transformation, Lung dispersing-descending and Kidney qi transformation**, with the Sanjiao as the channel.

When fluid metabolism fails: too little gives dry mouth, dry skin, constipation and scanty urine; accumulation turns into **dampness, water, phlegm and thin mucus** — the origin of the popular idea of “heavy dampness”.`],
    ['气血之间的关系', 'How qi and blood relate',
`一句话:**气为血之帅,血为气之母**。

- **气能生血**:气虚久了会血虚,所以补血方里常加补气药(如[[f:当归补血汤]]黄芪用量远大于当归)。
- **气能行血**:气滞会导致血瘀,所以活血方里常配理气药。
- **气能摄血**:气虚不能摄血就会出血,治疗要补气止血(如[[f:归脾汤]])。
- **血能载气**:大出血时气随血脱,会出现大汗、四肢冰冷,需急救固脱。

| 常见病理 | 典型表现 |
| 气虚 | 乏力、气短、懒言、自汗、易感冒 |
| 气滞 | 胀痛、走窜不定、随情绪变化 |
| 气逆 | 咳喘(肺)、呕吐嗳气(胃)、头痛眩晕(肝) |
| 气陷 | 久泻、脏器下垂、小腹坠胀 |
| 血瘀 | 刺痛固定、夜间加重、舌紫暗有瘀斑 |`,
`In one sentence: **qi commands blood; blood is the mother of qi**.

- **Qi generates blood**: long-term qi deficiency leads to blood deficiency, so blood tonics often include qi tonics (in [[f:当归补血汤]] astragalus far outweighs dang gui).
- **Qi moves blood**: stagnant qi leads to blood stasis, so blood-moving formulas often include qi-regulating herbs.
- **Qi contains blood**: weak qi lets blood leak out; treatment tonifies qi to stop bleeding (e.g. [[f:归脾汤]]).
- **Blood carries qi**: with massive bleeding, qi escapes with the blood — profuse sweating and icy limbs that need emergency care.

| Common pathology | Typical signs |
| Qi deficiency | fatigue, shortness of breath, reluctance to speak, spontaneous sweating, frequent colds |
| Qi stagnation | distending pain that moves about and changes with mood |
| Rebellious qi | cough and wheezing (Lung), vomiting and belching (Stomach), headache and dizziness (Liver) |
| Sinking qi | chronic diarrhoea, organ prolapse, bearing-down feeling in the lower abdomen |
| Blood stasis | fixed stabbing pain worse at night, purple tongue with dark spots |`]
  ]
});

L.T({
  id: 'jingluo', ic: '经', zh: '经络', en: 'Meridians',
  lead: '经络是运行气血、联络脏腑与体表的通路,是针灸推拿的理论基础。',
  leadEn: 'Meridians are pathways that carry qi and blood and link the organs with the body surface — the basis of acupuncture and tuina.',
  secs: [
    ['经络系统', 'The meridian system',
`经络由**经脉**(主干,纵行)和**络脉**(分支,网络全身)组成。主要包括:

- **十二经脉**:手三阴(肺、心包、心)、手三阳(大肠、三焦、小肠)、足三阳(胃、胆、膀胱)、足三阴(脾、肝、肾)。每条经都对应一个脏或腑。
- **奇经八脉**:督、任、冲、带、阴维、阳维、阴跷、阳跷。其中**督脉**总督一身阳经,**任脉**总任一身阴经。
- 另有十五络脉、十二经别、十二经筋、十二皮部等。

> 想详细学穴位,可以看姐妹站[[https://junrong2720-cmyk.github.io/acu/|针灸腧穴库]]:十四经 362 穴,带人体图和练习。`,
`The system consists of **channels** (main trunks running lengthwise) and **collaterals** (branches that network the whole body). The main parts are:

- **Twelve regular meridians**: three yin and three yang of the hand, three yang and three yin of the foot. Each belongs to a zang or fu organ.
- **Eight extraordinary vessels**: Governor (Du), Conception (Ren), Penetrating, Girdle, and the Yin/Yang Link and Yin/Yang Heel vessels. The **Governor Vessel** commands all yang meridians; the **Conception Vessel** all yin meridians.
- Plus fifteen collaterals, twelve divergent channels, twelve sinew channels and twelve cutaneous regions.

> To study the points in detail, see the sister site [[https://junrong2720-cmyk.github.io/acu/|Acupoint Library]]: 362 points of the 14 meridians with body maps and quizzes.`],
    ['十二经脉的规律', 'Patterns of the twelve meridians',
`- **走向**:手三阴从胸走手,手三阳从手走头,足三阳从头走足,足三阴从足走腹胸。
- **分布**:阳经在四肢外侧和背部,阴经在四肢内侧和胸腹部。
- **流注次序**:肺→大肠→胃→脾→心→小肠→膀胱→肾→心包→三焦→胆→肝→肺,如环无端。
- 每条经在一天中有“当令”的时辰(子午流注),比如寅时(3–5 点)肺经当令。`,
`- **Direction**: hand yin from chest to hand; hand yang from hand to head; foot yang from head to foot; foot yin from foot to abdomen and chest.
- **Distribution**: yang meridians on the outer limbs and back; yin meridians on the inner limbs, chest and abdomen.
- **Circulation order**: Lung → Large Intestine → Stomach → Spleen → Heart → Small Intestine → Bladder → Kidney → Pericardium → Sanjiao → Gallbladder → Liver → Lung, an endless loop.
- Each meridian has a two-hour “peak time” in the day (the midday-midnight cycle); for example the Lung peaks at 3–5 am.`],
    ['经络有什么用', 'What meridians are used for',
`- **生理上**:运行气血、联络脏腑肢节、抵御外邪。
- **病理上**:外邪可沿经络由表入里;内脏病也会反映在体表,比如心绞痛可放射到左臂内侧(心经循行处)。
- **诊断上**:根据疼痛部位判断病在哪条经。例如头痛:前额属阳明,两侧属少阳,后头属太阳,头顶属厥阴。
- **治疗上**:针灸、推拿、刮痧都循经取穴;中药也讲“归经”和“引经药”,比如头痛用川芎、白芷等引药上行。`,
`- **Physiology**: carry qi and blood, connect organs and limbs, resist pathogens.
- **Pathology**: pathogens can travel inward along the meridians; internal disorders show up on the surface — angina can radiate down the inner left arm along the Heart meridian.
- **Diagnosis**: the location of pain points to a meridian. Headache at the forehead is yangming, at the sides shaoyang, at the back taiyang, at the vertex jueyin.
- **Treatment**: acupuncture, tuina and gua sha select points along meridians; herbs too have “channel tropism” and “guiding herbs” — e.g. chuan xiong and bai zhi lead other herbs up to the head.`]
  ]
});

L.T({
  id: 'tizhi', ic: '质', zh: '体质', en: 'Body Constitution',
  lead: '每个人天生加后天形成的身体“底色”。了解体质,才知道什么适合自己。',
  leadEn: 'Everyone has a baseline “type”, shaped by birth and lifestyle. Knowing yours tells you what suits you.',
  secs: [
    ['什么是体质', 'What is constitution?',
`体质是在先天禀赋和后天获得的基础上形成的,形态结构、生理功能和心理状态方面相对稳定的固有特质。

它决定了:你对某些病的**易感性**(比如阳虚体质易受寒)、生病后的**发展倾向**,以及什么样的饮食和调养适合你。

体质**相对稳定但可以调整**——饮食、作息、运动、情绪都会让体质慢慢改变。`,
`Constitution is the relatively stable set of physical, functional and psychological traits formed by inheritance and life experience.

It shapes your **susceptibility** to certain illnesses (a yang-deficient person catches cold easily), how an illness tends to **develop**, and which foods and habits suit you.

It is **relatively stable but adjustable** — diet, sleep, exercise and emotions gradually shift it.`],
    ['九种体质', 'Nine constitution types',
`中华中医药学会《中医体质分类与判定》标准把体质分为九种:

| 体质 | 主要特征 | 调养方向 |
| 平和质 | 精力充沛、面色红润、睡眠好、适应力强 | 保持即可 |
| 气虚质 | 容易累、气短、爱出汗、容易感冒 | 补气,如山药、黄芪,避免过劳 |
| 阳虚质 | 怕冷、手脚凉、喜热饮、大便溏 | 温阳,少吃生冷,注意保暖 |
| 阴虚质 | 手足心热、口燥咽干、易上火、偏瘦 | 滋阴,少熬夜少辛辣 |
| 痰湿质 | 体形肥胖、腹部松软、身重困倦、痰多 | 健脾化湿,少甜腻,多运动 |
| 湿热质 | 面部油腻、长痘、口苦、大便黏 | 清热利湿,少酒少油炸 |
| 血瘀质 | 肤色晦暗、易有瘀斑、痛经 | 活血,多运动,保持心情舒畅 |
| 气郁质 | 情绪低落、多愁善感、爱叹气 | 疏肝理气,多社交、多户外 |
| 特禀质 | 过敏体质:易鼻炎、哮喘、荨麻疹 | 避免过敏原,固表 |

> 想知道自己是哪种?可以做[[https://junrong2720-cmyk.github.io/tcmjr/|中医体质测试]](国家标准 60 题版)。实际体质常常是兼夹的,比如“气虚 + 痰湿”。`,
`The China Association of Chinese Medicine’s standard (*Classification and Determination of Constitution in Chinese Medicine*) defines nine types:

| Type | Main features | Direction |
| Balanced | energetic, good colour, sleeps well, adapts easily | keep it up |
| Qi-deficient | tires easily, short of breath, sweats, catches colds | tonify qi (e.g. Chinese yam, astragalus); avoid overwork |
| Yang-deficient | feels cold, cold hands and feet, prefers hot drinks, loose stools | warm yang; less raw/cold food; keep warm |
| Yin-deficient | hot palms and soles, dry mouth and throat, prone to “heatiness”, often slim | nourish yin; fewer late nights, less spicy food |
| Phlegm-damp | heavy build, soft belly, sluggish, phlegmy | strengthen Spleen, resolve damp; less sweet and greasy food; exercise |
| Damp-heat | oily face, acne, bitter taste, sticky stools | clear heat and damp; less alcohol and fried food |
| Blood-stasis | dull complexion, bruises easily, painful periods | move blood; exercise; stay cheerful |
| Qi-stagnant | low mood, sensitive, sighs often | soothe the Liver; socialise and get outdoors |
| Allergy-prone | prone to rhinitis, asthma, hives | avoid allergens; strengthen the surface |

> Curious which you are? Try the [[https://junrong2720-cmyk.github.io/tcmjr/en.html|Body Constitution Test]] (the standard 60-question version). Most people are a mix, e.g. “qi-deficient + phlegm-damp”.`],
    ['体质与吃', 'Constitution and food',
`同样一碗汤,有人喝了舒服,有人喝了上火,就是体质不同。几个常见误区:

- **人人都要祛湿?** 只有痰湿、湿热体质才需要;阴虚的人用太多祛湿药(多为燥性)反而更干。
- **怕冷就吃羊肉、桂圆?** 阳虚可以,但如果怕冷同时口干、舌红(可能是阴阳两虚或寒热错杂),要先辨清楚。
- **凉茶天天喝?** 凉茶多为寒凉,适合短期湿热上火,长期喝会伤脾胃阳气。

> 药食同源的东西也是“药”。本站[[#/food|药食同源]]页面列出了这些品种,每一味都标了寒热。`,
`The same soup can leave one person comfortable and another “heaty” — that is constitution. Some common myths:

- **“Everyone needs to get rid of dampness.”** Only phlegm-damp and damp-heat types do; damp-draining herbs are mostly drying and leave yin-deficient people drier still.
- **“Feel cold? Eat lamb and longan.”** Fine for yang deficiency, but if you also have a dry mouth and red tongue, the picture is more complicated.
- **“Herbal cooling tea every day.”** Most are cold in nature: good for a short bout of damp-heat, but long-term use harms Spleen and Stomach yang.

> Food-medicine items are still medicine. The [[#/food|Food & medicine]] page lists them, each marked hot or cold.`]
  ]
});
