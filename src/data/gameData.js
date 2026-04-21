// 6种代表性人格 - 符合SPEC.md定义
export const personalities = [
  {
    id: 1,
    name: '固执大爷',
    mbti: 'ESTJ',
    avatar: '👴',
    resistance: { rational: 1.0, emotion: 0.7, special: 1.0 },
    description: '权威型，只信官方消息',
    quote: '我吃的盐比你吃的米多！'
  },
  {
    id: 2,
    name: '焦虑老妈',
    mbti: 'ESFJ',
    avatar: '👩',
    resistance: { rational: 0.7, emotion: 1.0, special: 1.0 },
    description: '感性型，容易被情感打动',
    quote: '转发！转发！不转不是中国人！'
  },
  {
    id: 3,
    name: '养生专家',
    mbti: 'ISFJ',
    avatar: '🧘',
    resistance: { rational: 0.8, emotion: 1.2, special: 1.0 },
    description: '经验型，相信传统老方法',
    quote: '老祖宗的智慧不会错！'
  },
  {
    id: 4,
    name: '阴谋论者',
    mbti: 'INTJ',
    avatar: '🤨',
    resistance: { rational: 0.85, emotion: 0.85, special: 1.0 },
    description: '理性型，喜欢深度分析，难说服',
    quote: '你以为你知道的真相...'
  },
  {
    id: 5,
    name: '佛系邻居',
    mbti: 'INFP',
    avatar: '😌',
    resistance: { rational: 1.0, emotion: 1.2, special: 1.0 },
    description: '温和型，不太在意谣言',
    quote: '随便啦，信则有不信则无~'
  },
  {
    id: 6,
    name: '爱孙奶奶',
    mbti: 'ESFP',
    avatar: '👵',
    resistance: { rational: 0.9, emotion: 1.2, special: 1.0 },
    description: '情感型，为家人会动摇',
    quote: '这是为了孩子好！'
  }
];

// 卡牌类型
export const cardTypes = {
  rational: {
    name: '论据卡',
    color: '#00D9FF',
    description: '硬核辟谣图表'
  },
  emotion: {
    name: '情绪卡',
    color: '#FFD93D',
    description: '共情、赞美'
  },
  special: {
    name: '特殊牌',
    color: '#6BCB77',
    description: '转移话题、发红包'
  }
};

// 卡牌库 - 正确辟谣：降谣言 + 小幅度回和谐度
export const cards = {
  rational: [
    { id: 'R1', name: '权威数据', type: 'rational', power: 20, damage: 20, heal: 8, description: '甩出官方数据报告', effect: 'damage_heal' },
    { id: 'R2', name: '专家辟谣', type: 'rational', power: 18, damage: 18, heal: 6, description: '引用真正专家的话', effect: 'damage_heal' },
    { id: 'R3', name: '真相图表', type: 'rational', power: 15, damage: 15, heal: 5, description: '可视化数据图表', effect: 'damage_heal' },
    { id: 'R4', name: '冷静分析', type: 'rational', power: 12, damage: 12, heal: 10, description: '保持冷静分析局势', effect: 'damage_heal' },
    { id: 'R5', name: '实验证明', type: 'rational', power: 22, damage: 22, heal: 5, description: '科学实验结果', effect: 'damage_heal' }
  ],
  emotion: [
    { id: 'E1', name: '温柔共情', type: 'emotion', power: 15, damage: 12, heal: 15, description: '我理解您的担心...', effect: 'damage_heal' },
    { id: 'E2', name: '真诚赞美', type: 'emotion', power: 12, damage: 8, heal: 12, description: '您一直都是家里的智者', effect: 'damage_heal' },
    { id: 'E3', name: '幽默化解', type: 'emotion', power: 14, damage: 6, heal: 10, description: '哈哈哈，群里又发这个了', effect: 'damage_heal' },
    { id: 'E4', name: '以退为进', type: 'emotion', power: 10, damage: 5, heal: 14, description: '您说得有道理，不过...', effect: 'damage_heal' },
    { id: 'E5', name: '情感攻势', type: 'emotion', power: 18, damage: 10, heal: 18, description: '咱们一家人不说两家话', effect: 'damage_heal' }
  ],
  special: [
    { id: 'S1', name: '发红包', type: 'special', power: 15, damage: 8, heal: 15, description: '🧧 先发个红包压压惊', effect: 'damage_heal' },
    { id: 'S2', name: '转移话题', type: 'special', power: 0, damage: 0, heal: 0, description: '对了妈，周末回家吃饭吗？', effect: 'shield' },
    { id: 'S3', name: '晒娃攻击', type: 'special', power: 18, damage: 10, heal: 18, description: '来看看娃的最新照片~', effect: 'damage_heal' },
    { id: 'S4', name: '美食诱惑', type: 'special', power: 14, damage: 6, heal: 14, description: '奶奶，我给您做了红烧肉~', effect: 'damage_heal' },
    { id: 'S5', name: '表情包攻势', type: 'special', power: 12, damage: 4, heal: 8, description: '[狗头保命]', effect: 'damage_heal' }
  ]
};

// 谣言内容库 - 每条谣言包含辟谣选项和解释
export const rumorContent = {
  health: [
    {
      content: '震惊！微波炉辐射会致癌！转发救家人！',
      correct: '微波炉是非电离辐射，无法破坏DNA致癌',
      wrong: '微波炉辐射很大，但洗洗就能用',
      misleading: '微波炉确实有辐射，但致癌需要非常大剂量',
      explanation: '这个辟谣承认了"微波炉辐射致癌"的前提。实际上微波炉产生的是非电离辐射，无法破坏细胞DNA致癌，和辐射剂量无关。正确辟谣直接指出非电离辐射的本质。'
    },
    {
      content: '酸性体质致癌，碱性体质养生，赶紧吃碱性食物！',
      correct: '酸碱体质是伪科学，人体pH值恒定不变',
      wrong: '多喝醋就能改变酸性体质',
      misleading: '酸性体质确实存在，但可以通过饮食慢慢调节',
      explanation: '这个辟谣承认了"酸性体质存在"的前提。实际上"酸碱体质"是一个被医学界否定的伪概念，人体血液pH值恒定在7.35-7.45之间，任何食物都无法改变这个值。'
    },
    {
      content: '食物相克表！螃蟹和柿子一起吃会死人！',
      correct: '正常食用量下无害，只有大量同食才可能不适',
      wrong: '相克是真的，但你吃得不够多才会没事',
      misleading: '食物相克有一定道理，但要达到致死量需要同时吃几十斤',
      explanation: '这个辟谣承认了"食物相克致死"的前提。实际上正常食用量下完全无害，正确辟谣指出前提本身就是错的——食物相克并非普遍真理。'
    },
    {
      content: '自来水含有致癌物质，喝不得！',
      correct: '自来水符合国家标准，可放心长期饮用',
      wrong: '自来水确实有问题，但喝矿泉水也差不多',
      misleading: '自来水确实不是最纯净的，但致癌物质含量极低',
      explanation: '这个辟谣承认了"自来水有问题"的前提，只是贬低矿泉水来转移话题。实际上自来水完全符合国家标准，正确辟谣直接肯定了自来水的安全性。'
    },
    {
      content: '每天喝柠檬水可以防癌！',
      correct: '柠檬水无治疗或预防癌症的功效',
      wrong: '柠檬水确实是防癌神器，每天喝十杯更好',
      misleading: '柠檬水虽然不能防癌，但含维生素C对身体有益',
      explanation: '误导性辟谣前半句正确，但"含维生素C对身体有益"是偷换概念。柠檬水的益处与防癌无关，正确辟谣直接否定了防癌功效。'
    },
    {
      content: '打蜡苹果千万别吃！',
      correct: '食用蜡是安全的，清水冲洗即可',
      wrong: '打蜡苹果确实有毒，但削皮就行了',
      misleading: '苹果打蜡是合法的，但最好还是选择有机苹果',
      explanation: '错误辟谣承认了"打蜡苹果有毒"，这本身就是错的。食用蜡是GB2760允许的食品添加剂，安全无害。误导性辟谣则引导购买更贵的"有机"产品。'
    },
    {
      content: '熬夜会导致癌症，一定要早睡！',
      correct: '熬夜伤身但并非癌症的直接原因',
      wrong: '熬夜不会致癌，只是会猝死而已',
      misleading: '熬夜确实伤身，但每天睡够8小时就行了',
      explanation: '错误辟谣用"猝死"替代"致癌"来转移话题，但两者都不是科学的因果关系。误导性辟谣看似给出解决方案，但"睡够8小时"并不等同于不熬夜。'
    },
    {
      content: '喝牛奶会长结石，千万别喝了！',
      correct: '适量喝牛奶不会导致结石，缺钙才是结石风险因素',
      wrong: '牛奶确实会导致结石，但喝舒化奶就没事',
      misleading: '牛奶虽然有风险，但青少年多喝点没关系',
      explanation: '错误辟谣承认"牛奶导致结石"然后推荐舒化奶。实际上适量牛奶不会导致结石，缺乏钙反而会增加结石风险。误导性辟谣的"青少年多喝"也没有科学依据。'
    },
    {
      content: '喝醋可以软化血管，预防心脏病！',
      correct: '喝醋无法软化血管，过量反而伤胃',
      wrong: '喝醋确实能软化血管，每天喝一小杯就行',
      misleading: '虽然喝醋不能软化血管，但发酵醋含有益菌',
      explanation: '错误辟谣完全认同谣言。正确辟谣指出喝醋进入消化道就被分解，不可能作用于血管。"发酵醋含益菌"是偷换概念，和软化血管无关。'
    },
    {
      content: '献血会让人变傻，千万别献！',
      correct: '献血不影响智力，适量献血有益健康',
      wrong: '献血确实会让人变傻，但偶尔一次没关系',
      misleading: '献血虽然不影响智力，但可能会导致贫血',
      explanation: '错误辟谣承认"献血变傻"只是说"偶尔一次没关系"。正确辟谣直接否定这一说法。误导性辟谣用"贫血"来暗示有其他危害，同样缺乏依据。'
    },
    {
      content: '按摩可以疏通血管，治疗心脑血管疾病！',
      correct: '按摩无法疏通血管，急性病症应就医',
      wrong: '按摩确实能疏通血管，但需要天天按',
      misleading: '按摩虽然不能疏通血管，但可以缓解肌肉酸痛',
      explanation: '错误辟谣夸大了按摩的作用。正确辟谣指出按摩是物理手段，无法改变血管内部状态。误导性辟谣把话题转向"缓解肌肉酸痛"，这是不同的适应症。'
    },
    {
      content: '多吃素可以饿死癌细胞！',
      correct: '癌细胞会抢夺正常细胞营养，饮食无法饿死',
      wrong: '吃素确实能饿死癌细胞，但需要完全断食',
      misleading: '虽然吃素饿不死癌细胞，但碱性体质能抑制癌症',
      explanation: '错误辟谣承认"饿死癌细胞"只是说要"断食"。正确辟谣指出癌细胞会抢夺营养。误导性辟谣再次搬出"酸碱体质"伪科学。'
    },
    {
      content: '红外线理疗仪可以根治糖尿病！',
      correct: '糖尿病无法根治，理疗仪只能辅助保健',
      wrong: '红外线确实能根治糖尿病，但需要长期使用',
      misleading: '虽然红外线治不了糖尿病，但能缓解并发症',
      explanation: '错误辟谣承认"根治糖尿病"。正确辟谣明确指出糖尿病目前无法根治。误导性辟谣把"辅助保健"偷换成"缓解并发症"，暗示有治疗效果。'
    }
  ],
  food: [
    {
      content: '转基因食物有毒！美国人都禁止销售了！',
      correct: '美国无需标注转基因，已安全食用30年',
      wrong: '转基因确实有毒，但中国人吃了没事',
      misleading: '转基因食品在美国确实有争议，但中国标准更严格',
      explanation: '错误辟谣承认了"转基因有毒"，然后用"中国人吃了没事"来诡辩。实际上转基因食品在全球已安全食用30年，中国也有严格审批制度。'
    },
    {
      content: '注水猪肉流入市场，教你一秒识别！',
      correct: '正规渠道有监管，注水肉属个别违法行为',
      wrong: '所有猪肉都注水，只有我妈家的没注',
      misleading: '注水肉确实存在，但正规超市都有检测应该没问题',
      explanation: '错误辟谣以偏概全，暗示所有猪肉都注水。实际上正规渠道有严格监管，这种违法行为只是个例。误导性辟谣则把问题归于"检测"，回避了源头监管。'
    },
    {
      content: '这种油千万别吃，是地沟油！',
      correct: '地沟油打击力度大，正规油品有保障',
      wrong: '地沟油确实存在，但你这次买的是真的',
      misleading: '地沟油很难鉴别，但知名品牌的油应该没问题',
      explanation: '错误辟谣承认了"你买的是地沟油"的可能性，然后用"你这次买的没问题"来诡辩。实际上正规品牌有生产许可和检测标准。'
    },
    {
      content: '隔夜菜含有亚硝酸盐，会致癌！',
      correct: '隔夜菜亚硝酸盐含量极低，在安全范围内',
      wrong: '隔夜菜亚硝酸盐确实超标，但回锅就没事',
      misleading: '隔夜菜确实会产生亚硝酸盐，但偶尔吃一次没关系',
      explanation: '错误辟谣承认"超标"然后用"回锅"来解决，但超标不是靠加热能消除的。误导性辟谣用"偶尔"来淡化危害，正确辟谣给出科学的安全标准。'
    },
    {
      content: '有机蔬菜更有营养，要买贵的！',
      correct: '有机蔬菜营养价值与普通蔬菜无显著差异',
      wrong: '有机蔬菜确实更有营养，就是贵十倍也值',
      misleading: '有机蔬菜可能更安全，但营养差异不大',
      explanation: '错误辟谣直接夸大有机蔬菜的营养价值。误导性辟谣看似理性说"可能更安全"，但回避了"无显著差异"的营养事实。'
    },
    {
      content: '味精会致癌，已经被禁用了！',
      correct: '味精是安全添加剂，FDA等权威机构已证明无害',
      wrong: '味精确实致癌，但鸡精是天然的不致癌',
      misleading: '味精在高温下可能产生有害物质，但正常用量无害',
      explanation: '错误辟谣承认"味精致癌"然后推荐同样含谷氨酸钠的鸡精。误导性辟谣用"高温"和"正常用量"来制造不必要的担忧。'
    },
    {
      content: '鸭脖不能吃，淋巴结堆积会致癌！',
      correct: '正规鸭肉淋巴结正常，食用无需担心',
      wrong: '鸭脖确实不能吃，但卤一卤就安全了',
      misleading: '虽然淋巴结不会致癌，但野生的鸭子可能有问题',
      explanation: '错误辟谣承认"鸭脖不能吃"。实际上正规渠道的鸭肉淋巴结正常，食用完全没问题。误导性辟谣把话题引向"野生鸭子"，和科学无关。'
    },
    {
      content: '小龙虾是日军用来清理尸体的，不能吃！',
      correct: '小龙虾是常见淡水食材，营养价值高',
      wrong: '小龙虾确实是用来清理尸体的，但现在养殖的没问题',
      misleading: '虽然小龙虾不是用来处理尸体的，但野生环境养殖的可能有污染',
      explanation: '错误辟谣承认"日军用来清理尸体"。这是典型的历史虚无主义谣言。实际上小龙虾是1920年代从日本引入的，最初是作为宠物或食材。'
    },
    {
      content: '吃外卖会摄入大量微塑料，已经有人住院了！',
      correct: '正规外卖容器符合国家标准，风险可控',
      wrong: '外卖确实含微塑料，但偶尔吃一次没事',
      misleading: '虽然外卖不一定有微塑料，但长期吃肯定不好',
      explanation: '错误辟谣承认"外卖含微塑料让人住院"。实际上正规企业生产的食品级塑料容器是安全的。"长期吃不好"是制造焦虑，没有具体科学依据。'
    },
    {
      content: '喝奶茶等于喝塑料袋，肠道会被包裹！',
      correct: '奶茶是乳脂和茶饮的混合物，可以正常饮用',
      wrong: '奶茶确实像塑料袋，但无糖的没事',
      misleading: '奶茶虽然不是塑料袋，但里面的奶精可能有问题',
      explanation: '错误辟谣夸大其词说"等于喝塑料袋"。正确辟谣用科学知识解释奶茶成分。"无糖的没事"是误导，糖分和塑料颗粒是完全不同的概念。'
    },
    {
      content: '隔夜饭剧毒，隔壁大爷吃了直接进ICU！',
      correct: '隔夜饭正确保存可食用，冰箱冷藏4度以下',
      wrong: '隔夜饭确实有毒，但只要回锅彻底就没问题',
      misleading: '虽然隔夜饭可以吃，但亚硝酸盐会累积',
      explanation: '错误辟谣夸大"直接进ICU"的个例。正确辟谣给出科学的保存方法。"亚硝酸盐累积"是误导，偶尔食用不会造成健康问题。'
    },
    {
      content: '酸奶里的益生菌可以清除血管垃圾！',
      correct: '益生菌无法清除血管垃圾，血管斑块需正规治疗',
      wrong: '酸奶益生菌确实能清血管，但需要每天喝一升',
      misleading: '虽然酸奶清不了血管，但长期喝可以改善肠道菌群',
      explanation: '错误辟谣承认"清除血管垃圾"并夸大喝量需求。正确辟谣明确指出益生菌无法作用于血管。误导性辟谣把话题转向"肠道菌群"，这是偷换概念。'
    },
    {
      content: '海鲜和维生素C一起吃会产生砒霜！',
      correct: '正常食量下不会产生砒霜，无需担心',
      wrong: '海鲜和VC确实会产生砒霜，但需要吃几十公斤才行',
      misleading: '虽然正常量不会中毒，但海鲜最好不要和VC一起吃',
      explanation: '错误辟谣承认"会产生砒霜"只是说需要几十公斤。正确辟谣指出这在生理上不可能发生。误导性辟谣制造不必要的饮食恐惧。'
    }
  ],
  social: [
    {
      content: '重磅！隔壁小区有人偷孩子！',
      correct: '警方已证实为谣言，已有人因传谣被拘',
      wrong: '偷孩子是真的，但只偷别人家不偷你家',
      misleading: '偷孩子的谣言确实夸大了，但家长还是要小心',
      explanation: '错误辟谣承认"偷孩子是真的"，但"只偷别人家"完全是主观臆测。误导性辟谣用"小心"来暗示可能有真实成分，正确辟谣给出官方结论。'
    },
    {
      content: '紧急通知：明天全市停水！',
      correct: '官方已辟谣，未发布停水通知',
      wrong: '停水是真的，但只停你们小区而已',
      misleading: '虽然官方没宣布，但提前储水也没坏处',
      explanation: '错误辟谣把"全市停水"缩小到"你们小区"，承认了停水真实性。误导性辟谣用"储水也没坏处"来暗示可能有道理。'
    },
    {
      content: '央行发行新版人民币，赶紧去银行兑换！',
      correct: '央行未发行新版人民币，请勿信谣传谣',
      wrong: '新版人民币确实要发行了，赶紧去换金条',
      misleading: '新版人民币可能真的要发行了，但旧版仍有价值',
      explanation: '错误辟谣夸大"发行"为"换金条"，暗示囤积贵金属。误导性辟谣用"可能"和"旧版有价值"来制造焦虑。'
    },
    {
      content: '某品牌奶粉含有三聚氰胺！',
      correct: '该品牌已通过国家检测，勿信谣',
      wrong: '三聚氰胺确实有，但验不出来就没关系',
      misleading: '该品牌奶粉曾经有问题，但现在应该已经改善了',
      explanation: '错误辟谣暗示可以"验不出来就没关系"，完全无视食品安全。误导性辟谣承认"曾经有问题"，暗示现在也可能有问题。'
    },
    {
      content: '地震云出现！某地将发生大地震！',
      correct: '地震云非科学概念，中国地震局已辟谣',
      wrong: '地震云是真的，科学无法预测而已',
      misleading: '虽然没有地震云，但最近确实地震比较频繁',
      explanation: '错误辟谣承认"地震云是真的"，这是错误的。误导性辟谣用"地震频繁"来暗示可能有关联，但实际上地震和云没有科学关联。'
    },
    {
      content: '社保卡盗刷，已有多人中招！',
      correct: '社保卡有密码保护，盗刷需知道密码',
      wrong: '社保卡确实会被盗刷，但不密码就没事',
      misleading: '社保卡盗刷确实可能发生，但概率很低',
      explanation: '错误辟谣承认"会被盗刷"然后用"不密码"来诡辩，实际上密码就是保护。误导性辟谣用"概率很低"来淡化风险。'
    },
    {
      content: '微信扫二维码会被盗刷银行卡，央视已曝光！',
      correct: '正规二维码不会盗刷，扫码前确认来源即可',
      wrong: '二维码确实会被盗刷，但不要扫陌生人的就行',
      misleading: '虽然二维码本身不会盗刷，但扫码送礼品的肯定有问题',
      explanation: '错误辟谣承认"二维码会被盗刷"只是说"不要扫陌生人"。正确辟谣指出二维码本身是信息载体，安全性取决于来源。误导性辟谣把正当推广活动和诈骗混为一谈。'
    },
    {
      content: '有人敲门说是自来水公司的，快开门检查！',
      correct: '自来水公司一般不会上门，可先核实身份',
      wrong: '确实是自来水公司的，但最好假装不在家',
      misleading: '虽然不一定是假冒的，但独居老人最好别开门',
      explanation: '错误辟谣没有科学判断，只是建议"假装不在家"。正确辟谣给出核实身份的方法。误导性辟谣针对"独居老人"制造恐慌。'
    },
    {
      content: '燃气公司上门安全检查，其实是来偷东西的！',
      correct: '正规燃气公司有备案，可电话核实预约',
      wrong: '燃气公司确实会偷东西，但只偷贵的',
      misleading: '虽然不一定偷东西，但最好全程录像',
      explanation: '错误辟谣夸大"偷东西"的普遍性。正规燃气公司上门服务是正常业务，可通过官方电话核实。误导性辟谣让用户对正常服务产生戒备。'
    },
    {
      content: '快递阳性要销毁？其实是骗子在收集个人信息！',
      correct: '正规快递阳性会由官方处理，不会私下联系',
      wrong: '快递阳性确实是骗局，但填信息送礼品的也是',
      misleading: '虽然快递阳性不一定是真的，但防范意识要有',
      explanation: '错误辟谣把两种情况混为一谈。正确辟谣说明正规渠道的处理方式。"填信息送礼品"可能是合法营销，和诈骗不同。'
    },
    {
      content: '邻居是行走的50万，发现立即举报！',
      correct: '举报线索应通过官方渠道，不要私下指控',
      wrong: '邻居确实是行走的50万，我亲眼看过他的转账记录',
      misleading: '虽然不要随便举报，但可以通过异常消费来判断',
      explanation: '错误辟谣说"亲眼看过转账记录"是诽谤。正当举报应通过12339等官方渠道，不应私下指控他人。误导性辟谣教人通过"异常消费"判断间谍，侵犯隐私。'
    },
    {
      content: '手机没电了借你充一下？小心被复制SIM卡！',
      correct: '借用充电宝不会复制SIM卡，来源正规即可',
      wrong: '借手机充电确实会被复制SIM卡，但需要半小时以上',
      misleading: '虽然SIM卡不会被复制，但充电时可能会被安装监控软件',
      explanation: '错误辟谣承认"复制SIM卡需要半小时以上"。SIM卡是实体卡片，插入手机后才能被复制，借用充电宝不可能实现。误导性辟谣把话题转向"监控软件"，同样缺乏常识。'
    },
    {
      content: '新型诈骗！用你的手机号能复制微信ipay！',
      correct: '手机号无法复制微信和支付账户，请勿担忧',
      wrong: '手机号确实能复制微信，但只要不告诉验证码就行',
      misleading: '虽然复制不了微信，但可能会收到很多垃圾短信',
      explanation: '错误辟谣承认"手机号能复制微信"。实际上微信绑定需要设备验证、验证码等多重确认。误导性辟谣把"垃圾短信"和账户安全混为一谈。'
    }
  ],
  conspiracy: [
    {
      content: '专家都是利益集团的代言人！',
      correct: '抹黑专家不能否定科学事实',
      wrong: '你说得对，专家确实都是被收买的',
      misleading: '虽然有些专家可能有问题，但不能一棍子打死',
      explanation: '错误辟谣完全认同谣言，用"被收买"来迎合情绪。误导性辟谣看似理性但仍承认"有些专家有问题"，正确辟谣指出抹黑专家不等于否定科学。'
    },
    {
      content: '这背后都是资本的阴谋！',
      correct: '资本阴谋论无法证伪，听听即可',
      wrong: '确实是资本阴谋，但你我也改变不了',
      misleading: '资本确实会影响舆论，但不能什么都怪资本',
      explanation: '错误辟谣完全认同阴谋论。误导性辟谣承认"资本影响舆论"，但"不能什么都怪资本"暗示有些事情确实和资本有关。'
    },
    {
      content: '你以为你知道的真相？Too young！',
      correct: '阴谋论无法证伪，不代表是真实',
      wrong: '你说得对，我太年轻不懂世界的真相',
      misleading: '这件事确实有蹊跷，但真相可能没那么复杂',
      explanation: '错误辟谣用"太年轻"来自我贬低。误导性辟谣用"有蹊跷"暗示事件背后有问题，正确辟谣直接指出阴谋论逻辑谬误。'
    },
    {
      content: '这事被压下来了，媒体不敢报！',
      correct: '媒体有监管，重大事件必有报道',
      wrong: '确实被压了，但朋友圈已经在传了',
      misleading: '虽然官方没报道，但网上能找到一些线索',
      explanation: '错误辟谣用"朋友圈在传"来作为证据，这是循环论证。误导性辟谣用"网上有线索"暗示官方在隐瞒。'
    },
    {
      content: '深层政府一直在操控我们！',
      correct: '无证据的阴谋论，无视即可',
      wrong: '深层政府确实存在，但都是为了你好',
      misleading: '虽然没什么证据，但也不能说完全不存在',
      explanation: '错误辟谣完全认同阴谋论。误导性辟谣用"不能说不存在"来暗示可能真实，正确辟谣直接指出这是无证据的阴谋论。'
    },
    {
      content: '历史被篡改了一百年！',
      correct: '历史研究有学术规范，非一人可篡改',
      wrong: '历史确实被篡改了，但真的也不告诉你',
      misleading: '历史记载可能不完全准确，但重大事件应该是真的',
      explanation: '错误辟谣承认"被篡改"然后用"不告诉你"来诡辩。误导性辟谣用"不完全准确"来质疑历史准确性，正确辟谣指出历史研究的学术规范。'
    },
    {
      content: '某国际组织在秘密控制全球人口增长！',
      correct: '人口政策是各国政府公开制定，无境外控制',
      wrong: '国际组织确实在控制人口，但只在发展中国家才有用',
      misleading: '虽然不是秘密控制，但发达国家生育率低确实不正常',
      explanation: '错误辟谣承认"控制人口"并限定"发展中国家"。实际上各国人口政策是主权事务，不受任何国际组织控制。误导性辟谣把"生育率低"和"控制"强行关联。'
    },
    {
      content: '疫苗里有纳米芯片，打完会被追踪定位！',
      correct: '疫苗不含芯片，追踪定位是手机GPS的功能',
      wrong: '疫苗芯片确实存在，但只有打两针以上的才会激活',
      misleading: '虽然疫苗没有芯片，但接种记录会被保存在云端',
      explanation: '错误辟谣承认"疫苗芯片存在"并荒唐地说"打两针以上才激活"。实际上疫苗是生物制品，不含任何电子元件。误导性辟谣把"接种记录"偷换成"芯片追踪"。'
    },
    {
      content: '全球变暖是骗局，实际上是地球在自我调节！',
      correct: '全球变暖有充分科学证据，冰川消融是实证',
      wrong: '全球变暖确实不是人类造成的，是地球自己的周期',
      misleading: '虽然变暖是真实的，但个人减少碳排放也没用',
      explanation: '错误辟谣否认人类活动导致气候变暖。正确辟谣列出冰川消融等实证。误导性辟谣的"个人行动无用论"是认知战策略，目的是阻止减排行动。'
    },
    {
      content: '5G信号塔会传播病毒，这是生物武器的一部分！',
      correct: '5G和病毒毫无关联，这是毫无科学依据的阴谋论',
      wrong: '5G确实传播病毒，但只在安装了该技术的城市有效',
      misleading: '虽然5G不传病毒，但疫情封锁期间基站确实开得更多了',
      explanation: '错误辟谣承认"5G传病毒"并限定城市范围。这是典型的疫情阴谋论。正确辟谣明确否认两者的任何关联。误导性辟谣用"基站开得更多"暗示存在某种联系。'
    },
    {
      content: '登月是假的，美国在摄影棚里拍的！',
      correct: '登月有大量物证，多国探测器拍到脚印和设备',
      wrong: '登月确实是在摄影棚拍的，但苏联也没有质疑',
      misleading: '虽然登月是真的，但阿波罗计划的数据确实丢失了一部分',
      explanation: '错误辟谣承认"摄影棚拍摄"并用"苏联没质疑"作为证据。实际上苏联当时确实验证过但选择了沉默。"数据丢失"是正常的历史资料管理问题。'
    },
    {
      content: '地球是平的，NASA在联合欺骗大众！',
      correct: '地球是球体，有航海、卫星图像等大量证据',
      wrong: '地球确实是平的，但航海路线已经适应了平面模型',
      misleading: '虽然地球是圆的，但古代文明为什么画的都是平的？',
      explanation: '错误辟谣提出荒唐的"平面航海模型"。正确辟谣列举实际证据。误导性辟谣用"古代文明画法"来质疑科学事实，这是伪证法。'
    }
  ],
  tech: [
    {
      content: '5G基站辐射会导致白血病！',
      correct: '5G辐射是非电离辐射，功率远低于安全标准',
      wrong: '5G辐射确实有问题，但6G更严重',
      misleading: '5G辐射虽然符合标准，但长期累积可能有问题',
      explanation: '错误辟谣承认"5G有问题"然后用"6G更严重"转移话题。误导性辟谣用"长期累积"制造不必要担忧，非电离辐射不会累积。'
    },
    {
      content: '手机辐射会烤熟鸡蛋！',
      correct: '手机辐射功率极低，无法产生热效应',
      wrong: '手机辐射确实能煮熟鸡蛋，只是需要时间',
      misleading: '手机辐射虽然不能煮熟鸡蛋，但也不要贴脸打电话',
      explanation: '错误辟谣完全承认谣言，只是加了个"需要时间"。误导性辟谣看似理性但"不要贴脸"暗示仍有危害。正确辟谣直接否定热效应可能性。'
    },
    {
      content: 'WiFi辐射影响生育能力！',
      correct: 'WiFi辐射属于非电离辐射，无证据表明有害',
      wrong: 'WiFi确实影响生育，但关掉路由器就行',
      misleading: 'WiFi辐射虽然无害，但也不要放床头',
      explanation: '错误辟谣承认"影响生育"。误导性辟谣用"不要放床头"暗示仍有健康风险。正确辟谣给出科学结论：无证据表明有害。'
    },
    {
      content: '电动车辐射比汽油车严重100倍！',
      correct: '电动车电磁辐射符合国家标准，无害',
      wrong: '电动车辐射确实严重，但汽油车更严重',
      misleading: '电动车辐射在安全范围内，但开车还是要少开',
      explanation: '错误辟谣承认"电动车辐射严重"。误导性辟谣承认"安全范围内"但暗示"少开"。正确辟谣直接给出国标认证结论。'
    },
    {
      content: '充电时玩手机会被电死！',
      correct: '正规充电器有保护机制，触电风险极低',
      wrong: '充电玩手机确实会被电死，但是小概率事件',
      misleading: '充电玩手机虽然一般不会触电，但爆炸风险是有的',
      explanation: '错误辟谣承认"会被电死"只是说"小概率"。误导性辟谣用"爆炸"来转移话题。正确辟谣给出技术事实：保护机制存在。'
    },
    {
      content: 'AI人工智能将取代人类！',
      correct: 'AI是工具，帮助人类而非取代人类',
      wrong: 'AI确实会取代人类，但那是程序员的事',
      misleading: 'AI虽然不能完全取代人类，但确实会导致失业',
      explanation: '错误辟谣承认"取代人类"然后推卸给"程序员"。误导性辟谣用"导致失业"来夸大AI影响，正确辟谣给出准确的AI定位。'
    },
    {
      content: '新能源汽车辐射严重，开久了会掉头发！',
      correct: '电动车辐射远低于国家安全标准，不会导致脱发',
      wrong: '电动车辐射确实会导致掉发，但只有网约车司机才会',
      misleading: '虽然电动车辐射不会掉发，但长期驾驶可能会腰疼',
      explanation: '错误辟谣承认"辐射导致掉发"并限定"网约车司机"。实际上电动车磁场强度低于手机和家用电器。误导性辟谣把"腰疼"和辐射混为一谈。'
    },
    {
      content: 'IPv9是更先进的网络协议，可以绕过美国监控！',
      correct: 'IPv9是虚构概念，不存在这样的网络协议',
      wrong: 'IPv9确实存在，但需要从美国赎回域名才行',
      misleading: '虽然IPv9是假的，但中国的未来网络布局已经有规划',
      explanation: '错误辟谣承认"IPv9存在"并提出荒唐的"赎回域名"。正确辟谣明确指出IPv9是1990年代就被证明的虚假概念。误导性辟谣用"未来布局"继续炒作伪概念。'
    },
    {
      content: '智能电表会跑得更快，让你多交电费！',
      correct: '智能电表经过质检，不存在加速问题',
      wrong: '智能电表确实会跑快，但可以调慢回来',
      misleading: '虽然电表不会加速，但夏天开空调确实会多用很多电',
      explanation: '错误辟谣承认"会跑快"并说可以"调慢"。实际上智能电表是计量器具，私自拆改违法。误导性辟谣把"空调用电多"和"电表不准"混为一谈。'
    },
    {
      content: '无人驾驶汽车会突然失控，刹车失灵！',
      correct: '自动驾驶有冗余系统，失控是极端个案',
      wrong: '无人驾驶确实会失控，但只有遇到黑客攻击才会',
      misleading: '虽然自动驾驶很安全，但遇到暴雨天气最好还是不要用',
      explanation: '错误辟谣把"黑客攻击"当作自动驾驶的常见风险。自动驾驶有多重冗余和安全验证机制。误导性辟谣用"暴雨天气"暗示天气对系统的负面影响，实际是夸大其词。'
    },
    {
      content: '智能家居在偷听你的隐私，亚马逊谷歌都在监控！',
      correct: '语音助手只在激活时录音，数据有加密保护',
      wrong: '智能家居确实在偷听，但只监控关键词不记录完整对话',
      misleading: '虽然智能家居不会全程监控，但长时间累积数据也有风险',
      explanation: '错误辟谣承认"偷听"只是说"只监控关键词"。实际上主流设备需要唤醒词才能激活。误导性辟谣用"长时间累积"制造焦虑，暗示数据被长期保存。'
    },
    {
      content: '5G频率会干扰天气预报，让预测变得不准！',
      correct: '5G频段与气象频段不重叠，不影响天气预报',
      wrong: '5G确实会干扰天气预报，但主要影响的是长时间预报',
      misleading: '虽然5G和气象卫星用的不是同一个频段，但基站多了总会有影响',
      explanation: '错误辟谣承认"5G干扰天气预报"只是说"影响长时间预报"。实际上各国对气象频段都有保护政策。误导性辟谣用"基站多了总会有影响"这种模糊说法制造恐慌。'
    }
  ]
};

export function getCardTypeModifeir(cardType, personality) {
  const typeCards = cards[cardType];
  if (!typeCards) return 10;
  const basePower = typeCards[0]?.power || 15;
  const modifier = personality.resistance[cardType] || 1.0;
  return Math.floor(basePower * modifier);
}

export function getRandomRumor(type = null, exclude = []) {
  const types = Object.keys(rumorContent);
  const availableTypes = type ? [type] : types;

  // 收集所有可用谣言（排除已用）
  const availableRumors = [];
  availableTypes.forEach(t => {
    rumorContent[t].forEach(r => {
      if (!exclude.includes(r.content)) {
        availableRumors.push({ ...r, type: t });
      }
    });
  });

  // 如果都用完了，重置并返回随机谣言
  if (availableRumors.length === 0) {
    const allRumors = [];
    types.forEach(t => {
      rumorContent[t].forEach(r => {
        allRumors.push({ ...r, type: t });
      });
    });
    const rumor = allRumors[Math.floor(Math.random() * allRumors.length)];
    return rumor;
  }

  const rumor = availableRumors[Math.floor(Math.random() * availableRumors.length)];
  return {
    content: rumor.content,
    correct: rumor.correct,
    wrong: rumor.wrong,
    misleading: rumor.misleading,
    explanation: rumor.explanation,
    type: rumor.type
  };
}

export function getRandomCard() {
  const types = Object.keys(cards);
  const type = types[Math.floor(Math.random() * types.length)];
  const typeCards = cards[type];
  return typeCards[Math.floor(Math.random() * typeCards.length)];
}

export function getAllCards() {
  return [...cards.rational, ...cards.emotion, ...cards.special];
}

// 从卡牌数组中随机选一张（不重复）
function pickUnique(pool, exclude = []) {
  const available = pool.filter(c => !exclude.includes(c.id));
  if (available.length === 0) return pool[Math.floor(Math.random() * pool.length)];
  return available[Math.floor(Math.random() * available.length)];
}

// 稳定计数器，每回合重置，确保卡牌顺序稳定
let cardSeq = 0;
function uid(base) {
  return `${base}_${cardSeq++}`;
}

// 获取六张候选牌：2正确 + 2明显错误 + 2误导性错误
export function getSixCards(rumor = null) {
  // 重置计数器，确保每回合卡牌顺序稳定
  cardSeq = 0;

  if (!rumor) {
    const allCards = [];
    cards.rational.slice(0, 2).forEach(c => {
      allCards.push({ ...c, id: uid(c.id), displayText: c.description, isCorrect: true, explanation: '' });
    });
    cards.emotion.slice(0, 2).forEach(c => {
      allCards.push({ ...c, id: uid(c.id), displayText: c.description, isCorrect: false, explanation: '' });
    });
    cards.special.slice(0, 2).forEach(c => {
      allCards.push({ ...c, id: uid(c.id), displayText: c.description, isCorrect: false, explanation: '' });
    });
    return shuffle(allCards);
  }

  const usedIds = [];
  const pick = (pool) => {
    const card = pickUnique(pool, usedIds);
    usedIds.push(card.id);
    return { ...card, id: uid(card.id) };
  };

  const result = [];

  // ── 正确卡 ×2（自动加前缀区分文案）──
  result.push({
    ...pick(cards.rational),
    displayText: rumor.correct,
    isCorrect: true,
    explanation: rumor.explanation
  });
  result.push({
    ...pick(cards.emotion),
    displayText: '没错，' + rumor.correct,
    isCorrect: true,
    explanation: rumor.explanation
  });

  // ── 明显错误 ×2 ──
  result.push({
    ...pick(cards.rational),
    displayText: rumor.wrong,
    isCorrect: false,
    explanation: rumor.explanation
  });
  result.push({
    ...pick(cards.special),
    displayText: '听人说，' + rumor.wrong,
    isCorrect: false,
    explanation: rumor.explanation
  });

  // ── 误导性错误 ×2 ──
  result.push({
    ...pick(cards.emotion),
    displayText: rumor.misleading,
    isCorrect: false,
    explanation: rumor.explanation
  });
  result.push({
    ...pick(cards.special),
    displayText: '话说回来，' + rumor.misleading,
    isCorrect: false,
    explanation: rumor.explanation
  });

  return shuffle(result);
}

// 洗牌函数
function shuffle(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
