import nightEnzyme from "@/assets/night-enzyme.jpg";
import vitalityMetabolism from "@/assets/vitality-metabolism.jpg";
import growthCalcium from "@/assets/growth-calcium.jpg";
import cranberryProbiotics from "@/assets/cranberry-probiotics.jpg";
import bbRadiance from "@/assets/bb-radiance.jpg";
import dhaFishOil from "@/assets/dha-fish-oil.png";
import fosFiber from "@/assets/fos-fiber.jpg";
import pearlRoyalJelly from "@/assets/pearl-royal-jelly.jpg";
import nattokinaseQ10 from "@/assets/nattokinase-q10.jpg";

export type Brand = "haojiating" | "bioid";

export interface Highlight {
  title: string;
  detail: string;
}

export interface BulkDiscount {
  quantity: number;
  discount: number; // e.g. 0.8 = 8 折
  label: string;
}

export interface Product {
  slug: string;
  name: string;
  tagline: string;
  brand: Brand;
  price: number;
  originalPrice?: number;
  bulkDiscounts?: BulkDiscount[];
  image: string;
  size: string;
  benefits: string[];
  description: string;
  ingredients: string[];
  certification?: string;
  headline?: string;
  highlights?: Highlight[];
  usage?: string[];
  disclaimer?: string;
  /** Official product spec table (規格、產地、保存期限…) */
  spec?: { label: string; value: string }[];
  /** Full statutory ingredient statement */
  fullIngredients?: string;
  /** Statutory usage / storage / cautions */
  notes?: string[];
  /** Statutory warnings (警語) */
  warnings?: string[];
  /** Marketing badge shown on the card, e.g. "最高回購率" */
  badge?: string;
  /** Auto-renewing DTC subscription SKU */
  subscription?: boolean;
  /** Line's estimated per-unit price, shown next to the headline price */
  unitNote?: string;
  /**
   * Sold only through authorized retail partners (e.g. 屈臣氏、康是美、特約藥局).
   * Not addable to the online cart — the product card links to the store locator instead,
   * so DTC pricing never undercuts the retail channel on the same SKU.
   */
  retailPartnerOnly?: boolean;
}

export const BRANDS: Record<Brand, { name: string; english: string; description: string }> = {
  haojiating: {
    name: "好家庭",
    english: "Good Family",
    description:
      "溫暖守護，照顧每個家庭成員的日常所需。以嚴選配方陪伴一日之終、應酬之間、成長之路。",
  },
  bioid: {
    name: "BIOID LIFEFULL",
    english: "Bio-Identity",
    description:
      "頂尖生物科技結晶，針對現代人機能需求打造的高效能補給系列。結合科研實證與珍稀萃取，實現全方位的精準保養。",
  },
};

export const PRODUCTS: Product[] = [
  {
    slug: "night-enzyme",
    name: "夜酵素複方膠囊",
    tagline: "睡得好・代謝好・輕鬆好",
    brand: "haojiating",
    price: 980,
    originalPrice: 1280,
    bulkDiscounts: [
      { quantity: 3, discount: 0.8, label: "3 件 8 折" },
      { quantity: 5, discount: 0.75, label: "5 件 75 折" },
    ],
    image: nightEnzyme,
    size: "60 粒 / 盒",
    benefits: ["放鬆舒眠", "夜間代謝", "幫助消化", "抗氧化保護"],
    description:
      "為夜間黃金修復期打造的專屬配方，複方酵素搭配鎮定植萃，幫助身體在睡眠時完成一日的代謝節奏，隔日清晨感受輕盈甦醒。",
    ingredients: ["夜酵素複合物", "GABA", "芝麻素", "植物萃取"],
  },
  {
    slug: "vitality-metabolism",
    name: "活力代謝複方膠囊",
    tagline: "應酬與繁忙生活的極致營養對策",
    brand: "haojiating",
    price: 980,
    originalPrice: 1280,
    bulkDiscounts: [
      { quantity: 3, discount: 0.8, label: "3 件 8 折" },
      { quantity: 5, discount: 0.75, label: "5 件 75 折" },
    ],
    image: vitalityMetabolism,

    size: "60 粒 / 盒",
    benefits: ["調整體質", "增強體力", "維持循環健康", "應酬前後保養"],
    description:
      "專為高壓生活與頻繁商務社交的現代人設計，透過嚴選國際專利植萃與天然發酵原料，協助調整體質、增強體力，並在關鍵時刻維持清晰思緒與生理健康。",
    ingredients: ["薑黃萃取", "芝麻素", "米糠萃取物", "專利黑胡椒萃取", "天然酵母維生素 B 群"],
    headline: "為何選擇「活力代謝複方膠囊」？",
    highlights: [
      {
        title: "全方位體質調理",
        detail: "結合多種科學實證成分，從根源調整生理機能，為忙碌的生活提供穩定的營養後盾。",
      },
      {
        title: "優質能量補給",
        detail:
          "添加天然酵母來源維生素 B 群，有效提振精神，幫助您面對高挑戰性的應酬場合，依然展現優雅戰力。",
      },
      {
        title: "高規格吸收技術",
        detail:
          "運用專利黑胡椒萃取技術，提升營養成分的吸收率，確保每顆膠囊的珍貴配方都能被身體充分利用。",
      },
      {
        title: "植萃抗氧化防護",
        detail:
          "富含薑黃、芝麻素與米糠萃取物，長期補給有助於維護循環健康，建立由內而外的抗氧化保護屏障。",
      },
    ],
    usage: [
      "繁忙的商務應酬人士，維持體態與社交靈活度",
      "長期熬夜、工作高壓的職場工作者",
      "重視日常養生、關注肝臟保健者",
      "建議應酬前或日常保養時適量食用",
    ],
    disclaimer:
      "本產品為營養補充品，非藥品，不具醫療效能。請配合均衡飲食與良好作息，飲酒請勿過量。",
  },
  {
    slug: "growth-calcium",
    name: "MAL 成長鈣咀嚼錠",
    tagline: "香濃牛奶風味，孩子愛不釋口",
    brand: "haojiating",
    price: 850,
    originalPrice: 1250,
    bulkDiscounts: [
      { quantity: 3, discount: 0.8, label: "3 件 8 折" },
      { quantity: 5, discount: 0.75, label: "5 件 75 折" },
    ],
    image: growthCalcium,
    size: "60 錠 / 盒",
    benefits: ["補充關鍵鈣", "維生素 D3 添加", "骨骼與牙齒", "美味好吃"],
    description:
      "為成長中的孩子設計，鈣質搭配維生素 D3 幫助吸收，香濃牛奶風味讓每日一錠成為孩子期待的日常。",
    ingredients: ["碳酸鈣", "維生素 D3", "乳鐵蛋白", "天然乳粉"],
  },
  {
    slug: "cranberry-probiotics",
    name: "蔓越莓益生菌",
    tagline: "私密保養 × 腸道調整 × 美妍維持",
    brand: "haojiating",
    price: 890,
    originalPrice: 1880,
    bulkDiscounts: [
      { quantity: 3, discount: 0.8, label: "3 件 8 折" },
      { quantity: 5, discount: 0.75, label: "5 件 75 折" },
    ],
    image: cranberryProbiotics,

    size: "60 顆 / 盒",
    benefits: ["女性守護", "腸道平衡", "美妍光彩", "150 億活菌"],
    description:
      "嚴選蔓越莓萃取搭配 150 億活菌多株專利益生菌，專為女性打造的每日保養配方，由內而外維持腸道平衡與美妍光彩。全素可食，每日 1-2 次即可守護健康美麗。",
    ingredients: ["蔓越莓萃取", "原花青素 PACs", "150 億活菌", "多株專利益生菌"],
  },
  {
    slug: "bb-radiance-subscription-30",
    name: "BB 神采速纖飲【原廠訂閱】30 入循環裸包箱",
    tagline: "動得更盡興，神采更透亮 · 每 30 天自動配送",
    brand: "bioid",
    price: 1980,
    originalPrice: 3240,
    image: bbRadiance,
    size: "30 mL × 30 包（訂閱制）",
    benefits: ["延緩運動後疲勞", "維持好氣色", "快速吸收", "免運費配送"],
    description:
      "運動後總是特別容易累、隔天氣色也跟著打折？BB 神采速纖飲以衛部健食字認證的抗疲勞配方，陪你把每一次流汗都轉換成隔天的好氣色。原廠訂閱制自動配送，直出最新效期，隨時可暫停或取消。",
    ingredients: ["膠原蛋白", "牛磺酸", "支鏈胺基酸 BCAA", "綜合維生素 B 群"],
    certification: "衛部健食字第 A00439 號 · 延緩運動後疲勞",
    badge: "最高回購率",
    subscription: true,
    unitNote: "約 NT$ 66 / 包",
    headline: "動得更盡興，神采更透亮",
    highlights: [
      {
        title: "國家認證抗疲勞",
        detail: "衛部健食字第 A00439 號認證「延緩運動後疲勞」，訓練或加班後的續航力有憑有據。",
      },
      {
        title: "好氣色由內而外",
        detail: "膠原蛋白搭配綜合維生素 B 群，補足日常消耗，維持透亮好氣色。",
      },
      {
        title: "訂閱制安心續杯",
        detail: "每 30 天原廠直送、免運費，效期永遠最新，不用擔心忘記回購。",
      },
    ],
    usage: ["運動或訓練後補給", "工作忙碌、需要續航力的日子", "每日一包，養成穩定補給習慣"],
    disclaimer:
      "健康食品之功效係經科學實驗證實，實際效果因個人體質及生活習慣而異。營養補給應搭配均衡飲食與規律運動。",
  },
  {
    slug: "bb-radiance-30",
    name: "BB 神采速纖飲【單次購買】30 入裸包月計畫",
    tagline: "足量一個月份，動得更盡興、神采更透亮",
    brand: "bioid",
    price: 2180,
    originalPrice: 3240,
    image: bbRadiance,
    size: "30 mL × 30 包",
    benefits: ["延緩運動後疲勞", "維持好氣色", "快速吸收", "足量一個月"],
    description:
      "還不想開通訂閱，想先備好一整個月的份量？30 入裸包月計畫同樣是衛部健食字認證的抗疲勞配方，環保裸包減塑，適合運動後與高壓工作日常補充。",
    ingredients: ["膠原蛋白", "牛磺酸", "支鏈胺基酸 BCAA", "綜合維生素 B 群"],
    certification: "衛部健食字第 A00439 號 · 延緩運動後疲勞",
    unitNote: "約 NT$ 72.6 / 包",
    headline: "動得更盡興，神采更透亮",
    highlights: [
      {
        title: "國家認證抗疲勞",
        detail: "衛部健食字第 A00439 號認證「延緩運動後疲勞」，訓練或加班後的續航力有憑有據。",
      },
      {
        title: "好氣色由內而外",
        detail: "膠原蛋白搭配綜合維生素 B 群，補足日常消耗，維持透亮好氣色。",
      },
      { title: "環保裸包減塑", detail: "省去外盒包裝，一次備齊一個月份量，收納與攜帶都輕巧。" },
    ],
    usage: ["運動或訓練後補給", "工作忙碌、需要續航力的日子", "每日一包，養成穩定補給習慣"],
    disclaimer:
      "健康食品之功效係經科學實驗證實，實際效果因個人體質及生活習慣而異。營養補給應搭配均衡飲食與規律運動。",
  },
  {
    slug: "bb-radiance-trial-5",
    name: "BB 神采速纖飲【首購試飲】5 入隨身輕享袋",
    tagline: "先小份量，驗證清爽莓果風味",
    brand: "bioid",
    price: 399,
    originalPrice: 550,
    image: bbRadiance,
    size: "30 mL × 5 包",
    benefits: ["延緩運動後疲勞", "隨身輕便", "常溫即飲", "首購免運"],
    description:
      "第一次認識 BB 神采速纖飲，不妨先從 5 入輕享袋開始。常溫即撕即飲，隨身攜帶也不佔空間，親自感受衛部健食字認證的抗疲勞配方與清爽莓果口感。",
    ingredients: ["膠原蛋白", "牛磺酸", "支鏈胺基酸 BCAA", "綜合維生素 B 群"],
    certification: "衛部健食字第 A00439 號 · 延緩運動後疲勞",
    badge: "首購免運",
    unitNote: "約 NT$ 79.8 / 包",
    headline: "動得更盡興，神采更透亮",
    highlights: [
      {
        title: "國家認證抗疲勞",
        detail: "衛部健食字第 A00439 號認證「延緩運動後疲勞」，訓練或加班後的續航力有憑有據。",
      },
      { title: "隨身輕便好攜帶", detail: "常溫保存、即撕即飲，通勤、運動包裡都能放一包備用。" },
      { title: "先試再回購", detail: "小份量安心體驗，喜歡再升級 30 入裸包月計畫或原廠訂閱。" },
    ],
    usage: ["第一次嘗試的首購體驗", "運動或訓練後補給", "通勤與旅行的隨身備品"],
    disclaimer:
      "健康食品之功效係經科學實驗證實，實際效果因個人體質及生活習慣而異。營養補給應搭配均衡飲食與規律運動。",
  },
  {
    slug: "bb-radiance-retail-10",
    name: "BB 神采速纖飲【實體限定】10 入標準精裝禮盒",
    tagline: "請至屈臣氏、康是美及特約藥局選購",
    brand: "bioid",
    price: 990,
    originalPrice: 1080,
    image: bbRadiance,
    size: "30 mL × 10 包",
    benefits: ["延緩運動後疲勞", "送禮精裝", "現場藥師諮詢", "全台門市鋪貨"],
    description:
      "送禮首選與初次現場諮詢，10 入標準精裝禮盒僅於授權實體通路販售。歡迎洽詢全台屈臣氏、康是美及特約健保藥局，由專業藥師為您介紹。",
    ingredients: ["膠原蛋白", "牛磺酸", "支鏈胺基酸 BCAA", "綜合維生素 B 群"],
    certification: "衛部健食字第 A00439 號 · 延緩運動後疲勞",
    badge: "實體門市限定",
    retailPartnerOnly: true,
    headline: "動得更盡興，神采更透亮",
    highlights: [
      {
        title: "國家認證抗疲勞",
        detail: "衛部健食字第 A00439 號認證「延緩運動後疲勞」，訓練或加班後的續航力有憑有據。",
      },
      { title: "精裝送禮首選", detail: "禮盒包裝適合送禮，也適合初次接觸、想現場諮詢的顧客。" },
      { title: "專業藥師陪伴", detail: "至授權門市選購，可由現場藥師依個人狀況提供補充建議。" },
    ],
    usage: ["送禮首選", "初次接觸、想現場諮詢者", "習慣至實體藥局採購保健食品者"],
    disclaimer:
      "健康食品之功效係經科學實驗證實，實際效果因個人體質及生活習慣而異。營養補給應搭配均衡飲食與規律運動。本品僅透過授權實體通路販售，恕不提供線上直購。",
  },
  {
    slug: "dha-fish-oil",
    name: "菁萃高純度 DHA 魚油",
    tagline: "源自挪威的純淨承諾 · 國際級靈活守護",
    brand: "bioid",
    price: 1200,
    originalPrice: 1350,
    bulkDiscounts: [
      { quantity: 3, discount: 0.8, label: "3 件 8 折" },
      { quantity: 5, discount: 0.75, label: "5 件 75 折" },
    ],
    image: dhaFishOil,
    size: "60 顆 / 盒",
    benefits: ["IFOS 五星認證", "rTG 型高吸收", "無重金屬", "永續海洋"],
    description:
      "給最在乎的人，一份源自挪威的純淨承諾。作為家庭的守護者，您對補充品的挑選標準絕對是最高等級——拒絕重金屬與海洋汙染，選用挪威 Epax® 頂級原料，幫助全家人維持清晰、靈活的日常表現。",
    ingredients: ["挪威 Epax® 魚油 (rTG 型)", "高濃度 DHA", "EPA", "維生素 E"],
    headline: "媽媽的安心守護：為什麼選擇這瓶魚油？",
    highlights: [
      {
        title: "五星級純淨認證",
        detail: "通過 IFOS 國際魚油標準機構最高評級，嚴格檢測重金屬、新鮮度與純度。",
      },
      {
        title: "極致吸收 rTG 型態",
        detail: "採用高吸收率 rTG 型態，確保珍貴的 DHA 與 EPA 被身體有效利用。",
      },
      { title: "永續海洋承諾", detail: "獲得「海洋之友 (Friend of the Sea)」認證，對地球友善。" },
    ],
    usage: [
      "衛福部健康食品認證：功效有憑據",
      "國際 IFOS 五星評級：品質世界級",
      "無重金屬、無環境汙染：純淨檢測",
      "挪威 Epax 原廠技術：成分頂規",
    ],
    disclaimer: "本產品非藥品，供保健用，建議依照建議攝取量食用。詳細檢測報告請參考官網說明。",
  },
  {
    slug: "fos-fiber",
    name: "果寡糖順暢粉",
    tagline: "全家人的順暢，媽媽照顧剛剛好",
    brand: "bioid",
    price: 600,
    originalPrice: 720,
    bulkDiscounts: [
      { quantity: 3, discount: 0.8, label: "3 件 8 折" },
      { quantity: 5, discount: 0.75, label: "5 件 75 折" },
    ],
    image: fosFiber,
    size: "4.5g × 30 包",
    benefits: ["促進腸道蠕動", "增加腸內益生菌", "無色無味", "0 熱量負擔"],
    description:
      "現代生活外食多、纖維攝取不足，別讓排便不順成為全家人的隱形壓力。獲得衛生福利部健康食品認證的果寡糖順暢粉，是許多聰明媽媽的居家必備——不吹噓神奇效果，只給妳科學證實的真實力。",
    ingredients: ["蔗果三糖", "蔗果四糖", "菊苣纖維"],
    certification: "衛部健食字第 A00338 號",
    headline: "全家人的順暢，媽媽照顧剛剛好",
    highlights: [
      { title: "國家掛保證，品質最放心", detail: "通過嚴格國家審查，給家人吃，當然要選最好的。" },
      {
        title: "科學證實，調整體質",
        detail: "經動物實驗結果，有助於增加腸內益生菌，從內而外打造健康環境。",
      },
      {
        title: "補足缺口，輕鬆無負擔",
        detail: "優質果寡糖與纖維，幫助促進腸道蠕動，讓全家人每天都清爽順暢。",
      },
    ],
    usage: ["拌入早晨的優格或豆漿", "加入孩子愛喝的蔬果汁中", "直接食用，隨手補充纖維"],
    disclaimer: "本產品不具醫療效能。請依建議攝取量食用。均衡飲食及適當運動為身體健康之基礎。",
  },

  {
    slug: "pearl-royal-jelly",
    name: "珍珠蜂王乳軟膠囊",
    tagline: "Pearl & Royal Jelly Soft Capsule",
    brand: "bioid",
    price: 1800,
    originalPrice: 2280,
    bulkDiscounts: [
      { quantity: 3, discount: 0.8, label: "3 件 8 折" },
      { quantity: 5, discount: 0.75, label: "5 件 75 折" },
    ],
    image: pearlRoyalJelly,
    size: "60 顆 / 盒",
    benefits: ["蜂王乳", "葡萄皮萃取", "珍珠粉", "由內透亮"],
    description: "頂級蜂王漿凍乾技術，結合珍珠粉與葡萄皮多酚，由內透出光澤感，維持柔潤氣色。",
    ingredients: ["蜂王乳凍乾粉", "葡萄皮萃取", "珍珠粉", "膠原胜肽"],
  },
  {
    slug: "nattokinase-q10",
    name: "晶亮納豆 Q10 軟膠囊",
    tagline: "Nattokinase Plus Q10 Soft Capsules",
    brand: "bioid",
    price: 1800,
    originalPrice: 2200,
    bulkDiscounts: [
      { quantity: 3, discount: 0.8, label: "3 件 8 折" },
      { quantity: 5, discount: 0.75, label: "5 件 75 折" },
    ],
    image: nattokinaseQ10,
    size: "60 顆 / 盒",
    benefits: ["納豆激酶", "輔酵素 Q10", "金盞花萃取", "DHA 添加"],
    description: "四合一晶亮循環配方，納豆激酶與 Q10 支援循環活力，金盞花與 DHA 呵護視覺舒適感。",
    ingredients: ["納豆激酶", "Coenzyme Q10", "金盞花萃取", "DHA"],
  },
];

/**
 * Statutory product data mirrored from the bioid official shop (bioidshop.com).
 * Merged onto the catalogue above so pricing/marketing stays local while the
 * regulatory copy (許可證字號、成分、警語) matches the manufacturer's listing.
 */
const RESPONSIBLE_FIRM: { label: string; value: string }[] = [
  { label: "產地", value: "台灣" },
  { label: "貨源", value: "公司貨" },
  { label: "國內負責廠商", value: "宏曄生物科技有限公司" },
  { label: "廠商地址", value: "臺北市大同區哈密街 23 巷 1-10 號 1 樓" },
  { label: "客服電話", value: "02-2595-3515（週一至週五 09:00–18:00）" },
  { label: "食品業者登錄字號", value: "A-127972230-00000-0" },
];

const BB_OFFICIAL = {
  fullIngredients:
    "水、砂糖、蘋果濃縮汁、綜合莓果汁、牛磺酸、果寡醣、膠原蛋白、支鏈胺基酸、白葡萄濃縮汁、維生素 C、綜合維生素 B 群（維生素 B2、維生素 B6、菸鹼醯胺、維生素 B1、維生素 B12、本多酸鈣、葉酸、生物素）、檸檬酸、香料、咖啡因、β-環狀糊精、甜菊醣苷（甜味劑）、醋磺內酯鉀（甜味劑）。",
  notes: [
    "食用方法：每日 1 包",
    "保存方式：置於室溫（25℃）乾燥陰涼處，避免高溫潮濕或陽光直射",
    "本產品非藥品，供保健用，罹病者仍需就醫。",
  ],
  warnings: ["本品含有少量咖啡因，對咖啡因敏感者，請斟酌使用。"],
  baseSpec: [
    { label: "健康食品許可證字號", value: "衛部健食字第 A00439 號「抗疲勞功能」" },
    { label: "保健功效敘述", value: "經動物實驗結果，有助於延緩運動後疲勞發生" },
    { label: "保健功效成分", value: "牛磺酸 720.18 ~ 1080.27 毫克 / 包" },
    { label: "劑型", value: "液體" },
    { label: "保存期限", value: "24 個月" },
  ],
};

const OFFICIAL: Record<
  string,
  {
    spec: { label: string; value: string }[];
    fullIngredients: string;
    notes: string[];
    warnings?: string[];
  }
> = {
  "bb-radiance-subscription-30": {
    spec: [
      { label: "容量／規格", value: "30 mL × 30 包 / 箱" },
      ...BB_OFFICIAL.baseSpec,
      ...RESPONSIBLE_FIRM,
    ],
    fullIngredients: BB_OFFICIAL.fullIngredients,
    notes: BB_OFFICIAL.notes,
    warnings: BB_OFFICIAL.warnings,
  },
  "bb-radiance-30": {
    spec: [
      { label: "容量／規格", value: "30 mL × 30 包 / 盒" },
      ...BB_OFFICIAL.baseSpec,
      ...RESPONSIBLE_FIRM,
    ],
    fullIngredients: BB_OFFICIAL.fullIngredients,
    notes: BB_OFFICIAL.notes,
    warnings: BB_OFFICIAL.warnings,
  },
  "bb-radiance-trial-5": {
    spec: [
      { label: "容量／規格", value: "30 mL × 5 包 / 袋" },
      ...BB_OFFICIAL.baseSpec,
      ...RESPONSIBLE_FIRM,
    ],
    fullIngredients: BB_OFFICIAL.fullIngredients,
    notes: BB_OFFICIAL.notes,
    warnings: BB_OFFICIAL.warnings,
  },
  "bb-radiance-retail-10": {
    spec: [
      { label: "容量／規格", value: "30 mL × 10 包 / 盒" },
      ...BB_OFFICIAL.baseSpec,
      ...RESPONSIBLE_FIRM,
    ],
    fullIngredients: BB_OFFICIAL.fullIngredients,
    notes: BB_OFFICIAL.notes,
    warnings: BB_OFFICIAL.warnings,
  },
  "fos-fiber": {
    spec: [
      { label: "健康食品許可證字號", value: "衛部健食字第 A00338 號「胃腸功能改善」" },
      { label: "保健功效敘述", value: "經動物實驗結果，有助於增加腸內益生菌" },
      {
        label: "保健功效成分",
        value: "蔗果三糖 61.2 ~ 91.8 毫克 / 包、蔗果四糖 169.2 ~ 253.8 毫克 / 包",
      },
      { label: "容量／規格", value: "4.5 公克 × 30 包 / 盒" },
      { label: "劑型", value: "粉狀" },
      { label: "保存期限", value: "2 年" },
      ...RESPONSIBLE_FIRM,
    ],
    fullIngredients: "果寡糖、難消化性麥芽糊精、菊苣纖維、D-山梨醇（甜味劑）。",
    notes: [
      "食用方法：每日 1 次，每次 1 包，可直接食用或與冷開水、果汁等冷飲一起食用。",
      "保存方式：置於室溫（27℃ 以下）乾燥陰涼處，避免陽光直射。",
      "請徵詢醫師、藥師或營養師有關食用本品之意見；均衡的飲食及適當的運動為身體健康之基礎。",
      "本產品供保健用，請依建議攝取量食用。",
    ],
    warnings: [
      "一歲以下嬰兒不建議使用。",
      "本產品含果寡糖、難消化性麥芽糊精及菊苣纖維，食用後可能產生排氣與脹氣現象，若有不適者請停止食用。",
    ],
  },
  "nattokinase-q10": {
    spec: [
      { label: "容量／規格", value: "60 顆 / 盒" },
      { label: "劑型", value: "軟膠囊" },
      { label: "保存期限", value: "2 年" },
      ...RESPONSIBLE_FIRM,
    ],
    fullIngredients:
      "魚油（含維生素 E（抗氧化劑））、L-精胺酸、納豆菌發酵物、金盞花萃取物、輔酵素 Q10、脂肪酸甘油酯。膠囊殼：明膠、甘油、食用紅色四十號、二氧化鈦、食用藍色一號。",
    notes: [
      "食用方法：每日 2 顆",
      "保存方式：置於乾燥陰涼處（25℃ 以下），避免高溫潮濕或陽光直射",
      "請徵詢醫師、藥師或營養師有關食用本品之意見；均衡的飲食及適當的運動為身體健康之基礎。",
      "本產品非藥品，供保健用，罹病者仍需就醫，請依建議攝取量食用、勿過量。",
    ],
    warnings: [
      "嬰幼兒、孕婦、糖尿病患者或正在服用抗凝血劑之凝血功能不全者，食用前請先徵詢醫師意見。",
      "本產品含有魚類及大豆製品，不適合對其過敏體質者食用。",
    ],
  },
  "pearl-royal-jelly": {
    spec: [
      { label: "容量／規格", value: "60 顆 / 盒" },
      { label: "劑型", value: "軟膠囊" },
      { label: "保存期限", value: "2 年" },
      ...RESPONSIBLE_FIRM,
    ],
    fullIngredients:
      "魚油（含維生素 E（抗氧化劑））、蜂王乳、維生素 E（抗氧化劑）、葡萄皮萃取物、珍珠粉、硫酸鋅、沙棘果萃取物、大豆卵磷脂、脂肪酸甘油酯、芝麻萃取物。膠囊殼：明膠、甘油、純水。",
    notes: [
      "食用方法：每日 2 顆",
      "保存方式：置於乾燥陰涼處（25℃ 以下），避免高溫潮濕或陽光直射",
      "本產品非藥品，供保健用，罹病者仍需就醫。",
    ],
    warnings: [
      "嬰幼兒、孕婦及對蜂產品、魚類、大豆過敏體質者，食用前請先徵詢醫師意見。",
    ],
  },
};

for (const product of PRODUCTS) {
  const official = OFFICIAL[product.slug];
  if (official) Object.assign(product, official);
}

export function getProduct(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function productsByBrand(brand: Brand): Product[] {
  return PRODUCTS.filter((p) => p.brand === brand);
}

export function formatPrice(n: number): string {
  return `NT$ ${n.toLocaleString("zh-TW")}`;
}
