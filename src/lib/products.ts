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

export interface Product {
  slug: string;
  name: string;
  tagline: string;
  brand: Brand;
  price: number;
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
}


export const BRANDS: Record<Brand, { name: string; english: string; description: string }> = {
  haojiating: {
    name: "好家庭",
    english: "Good Family",
    description: "溫暖守護，照顧每個家庭成員的日常所需。以嚴選配方陪伴一日之終、應酬之間、成長之路。",
  },
  bioid: {
    name: "BIOID LIFEFULL",
    english: "Bio-Identity",
    description: "頂尖生物科技結晶，針對現代人機能需求打造的高效能補給系列。結合科研實證與珍稀萃取，實現全方位的精準保養。",
  },
};

export const PRODUCTS: Product[] = [
  {
    slug: "night-enzyme",
    name: "夜酵素複方膠囊",
    tagline: "睡得好・代謝好・輕鬆好",
    brand: "haojiating",
    price: 1280,
    image: nightEnzyme,
    size: "60 粒 / 盒",
    benefits: ["放鬆舒眠", "夜間代謝", "幫助消化", "抗氧化保護"],
    description: "為夜間黃金修復期打造的專屬配方，複方酵素搭配鎮定植萃，幫助身體在睡眠時完成一日的代謝節奏，隔日清晨感受輕盈甦醒。",
    ingredients: ["夜酵素複合物", "GABA", "芝麻素", "植物萃取"],
  },
  {
    slug: "vitality-metabolism",
    name: "活力代謝複方膠囊",
    tagline: "增強體力・促進代謝・全家守護",
    brand: "haojiating",
    price: 980,
    image: vitalityMetabolism,
    size: "60 粒 / 盒",
    benefits: ["增強體力", "促進新陳代謝", "天然植萃", "全家守護"],
    description: "全方位代謝守護配方，嚴選多種天然植萃搭配薑根精華，幫助增強體力、促進新陳代謝，讓全家人保持每日活力與舒適。",
    ingredients: ["薑黃萃取", "薑根萃取", "複方植萃", "維生素 B 群"],
  },
  {
    slug: "growth-calcium",
    name: "MAL 成長鈣咀嚼錠",
    tagline: "香濃牛奶風味，孩子愛不釋口",
    brand: "haojiating",
    price: 850,
    image: growthCalcium,
    size: "60 錠 / 盒",
    benefits: ["補充關鍵鈣", "維生素 D3 添加", "骨骼與牙齒", "美味好吃"],
    description: "為成長中的孩子設計，鈣質搭配維生素 D3 幫助吸收，香濃牛奶風味讓每日一錠成為孩子期待的日常。",
    ingredients: ["碳酸鈣", "維生素 D3", "乳鐵蛋白", "天然乳粉"],
  },
  {
    slug: "cranberry-probiotics",
    name: "蔓越莓益生菌",
    tagline: "私密保養 × 腸道調整 × 美妍維持",
    brand: "haojiating",
    price: 890,
    image: cranberryProbiotics,
    size: "60 顆 / 盒",
    benefits: ["女性守護", "腸道平衡", "美妍光彩", "150 億活菌"],
    description: "嚴選蔓越莓萃取搭配 150 億活菌多株專利益生菌，專為女性打造的每日保養配方，由內而外維持腸道平衡與美妍光彩。全素可食，每日 1-2 次即可守護健康美麗。",
    ingredients: ["蔓越莓萃取", "原花青素 PACs", "150 億活菌", "多株專利益生菌"],
  },
  {
    slug: "bb-radiance",
    name: "BB 神采速纖飲",
    tagline: "為全家人的活力加分，從每一天的關鍵補給開始",
    brand: "bioid",
    price: 1680,
    image: bbRadiance,
    size: "30 mL × 10 包",
    benefits: ["調整體質", "增強體力", "快速吸收", "全家適用"],
    description: "每天忙碌於工作與家庭之間，是否常覺得力不從心？照顧家人的健康，妳總是不遺餘力，但別忘了，妳的活力同樣重要。BB 神采速纖飲專為現代家庭設計，快速補充關鍵營養，幫助調整體質、增強體力。",
    ingredients: ["膠原蛋白", "牛磺酸", "支鏈胺基酸 BCAA", "綜合維生素 B 群"],
    certification: "衛部健食字第 A00439 號",
    headline: "給總是把家人放第一位的妳",
    highlights: [
      { title: "科學配方，安心補給", detail: "嚴選牛磺酸、BCAA 支鏈胺基酸及綜合維生素 B 群，精準滿足每日能量需求。" },
      { title: "高效吸收，輕鬆享用", detail: "液態包裝，好吸收、好入口，隨時隨地開啟活力模式，擺脫黏膩負擔。" },
      { title: "美味健康，全家適用", detail: "口感清爽，不僅適合為自己補充能量，也適合與家人分享。" },
    ],
    usage: ["工作忙碌後補給", "家庭運動時的活力夥伴", "每日一包，維持晶透神采"],
    disclaimer: "健康食品之功效係經科學實驗證實，實際效果因個人體質及生活習慣而異。營養補給應搭配均衡飲食與規律運動。",
  },
  {
    slug: "dha-fish-oil",
    name: "菁萃高純度 DHA 魚油",
    tagline: "源自挪威的純淨承諾 · 國際級靈活守護",
    brand: "bioid",
    price: 1350,
    image: dhaFishOil,
    size: "60 顆 / 盒",
    benefits: ["IFOS 五星認證", "rTG 型高吸收", "無重金屬", "永續海洋"],
    description: "給最在乎的人，一份源自挪威的純淨承諾。作為家庭的守護者，您對補充品的挑選標準絕對是最高等級——拒絕重金屬與海洋汙染，選用挪威 Epax® 頂級原料，幫助全家人維持清晰、靈活的日常表現。",
    ingredients: ["挪威 Epax® 魚油 (rTG 型)", "高濃度 DHA", "EPA", "維生素 E"],
    headline: "媽媽的安心守護：為什麼選擇這瓶魚油？",
    highlights: [
      { title: "五星級純淨認證", detail: "通過 IFOS 國際魚油標準機構最高評級，嚴格檢測重金屬、新鮮度與純度。" },
      { title: "極致吸收 rTG 型態", detail: "採用高吸收率 rTG 型態，確保珍貴的 DHA 與 EPA 被身體有效利用。" },
      { title: "永續海洋承諾", detail: "獲得「海洋之友 (Friend of the Sea)」認證，對地球友善。" },
    ],
    usage: ["衛福部健康食品認證：功效有憑據", "國際 IFOS 五星評級：品質世界級", "無重金屬、無環境汙染：純淨檢測", "挪威 Epax 原廠技術：成分頂規"],
    disclaimer: "本產品非藥品，供保健用，建議依照建議攝取量食用。詳細檢測報告請參考官網說明。",
  },
  {
    slug: "fos-fiber",
    name: "果寡糖順暢粉",
    tagline: "全家人的順暢，媽媽照顧剛剛好",
    brand: "bioid",
    price: 720,
    image: fosFiber,
    size: "4.5g × 30 包",
    benefits: ["促進腸道蠕動", "增加腸內益生菌", "無色無味", "0 熱量負擔"],
    description: "現代生活外食多、纖維攝取不足，別讓排便不順成為全家人的隱形壓力。獲得衛生福利部健康食品認證的果寡糖順暢粉，是許多聰明媽媽的居家必備——不吹噓神奇效果，只給妳科學證實的真實力。",
    ingredients: ["蔗果三糖", "蔗果四糖", "菊苣纖維"],
    certification: "衛部健食字第 A00338 號",
    headline: "全家人的順暢，媽媽照顧剛剛好",
    highlights: [
      { title: "國家掛保證，品質最放心", detail: "通過嚴格國家審查，給家人吃，當然要選最好的。" },
      { title: "科學證實，調整體質", detail: "經動物實驗結果，有助於增加腸內益生菌，從內而外打造健康環境。" },
      { title: "補足缺口，輕鬆無負擔", detail: "優質果寡糖與纖維，幫助促進腸道蠕動，讓全家人每天都清爽順暢。" },
    ],
    usage: ["拌入早晨的優格或豆漿", "加入孩子愛喝的蔬果汁中", "直接食用，隨手補充纖維"],
    disclaimer: "本產品不具醫療效能。請依建議攝取量食用。均衡飲食及適當運動為身體健康之基礎。",
  },

  {
    slug: "pearl-royal-jelly",
    name: "珍珠蜂王乳軟膠囊",
    tagline: "Pearl & Royal Jelly Soft Capsule",
    brand: "bioid",
    price: 2280,
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
    price: 2200,
    image: nattokinaseQ10,
    size: "60 顆 / 盒",
    benefits: ["納豆激酶", "輔酵素 Q10", "金盞花萃取", "DHA 添加"],
    description: "四合一晶亮循環配方，納豆激酶與 Q10 支援循環活力，金盞花與 DHA 呵護視覺舒適感。",
    ingredients: ["納豆激酶", "Coenzyme Q10", "金盞花萃取", "DHA"],
  },
];

export function getProduct(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function productsByBrand(brand: Brand): Product[] {
  return PRODUCTS.filter((p) => p.brand === brand);
}

export function formatPrice(n: number): string {
  return `NT$ ${n.toLocaleString("zh-TW")}`;
}
