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
    tagline: "膠原蛋白 × 牛磺酸 × BCAA",
    brand: "bioid",
    price: 1680,
    image: bbRadiance,
    size: "30 mL × 10 包",
    benefits: ["體態管理", "神采維持", "運動修復", "延緩疲勞"],
    description: "衛福部健食字認證，經動物實驗證實有助於延緩運動後疲勞發生。每日一包，維持晶透神采與輕盈狀態。",
    ingredients: ["膠原蛋白", "牛磺酸", "支鏈胺基酸", "綜合維生素 B 群"],
  },
  {
    slug: "dha-fish-oil",
    name: "菁萃高純度 DHA 魚油",
    tagline: "High Quality DHA Fish Oil",
    brand: "bioid",
    price: 1350,
    image: dhaFishOil,
    size: "60 顆 / 盒",
    benefits: ["高純度 DHA", "Omega-3", "循環暢通", "頭腦清晰"],
    description: "深海小型魚萃取，分子蒸餾製程確保重金屬零檢出。每日補足 Omega-3 缺口，維持思緒清晰與循環暢通。",
    ingredients: ["高純度魚油 (TG 型)", "DHA", "EPA", "維生素 E"],
  },
  {
    slug: "fos-fiber",
    name: "果寡糖順暢粉",
    tagline: "體內環保 · 益生質補給",
    brand: "bioid",
    price: 720,
    image: fosFiber,
    size: "4.5g × 30 包",
    benefits: ["促進腸道蠕動", "排便順暢", "增加腸內益生菌", "0 熱量負擔"],
    description: "衛福部健食字認證，經動物實驗證實有助於增加腸內益生菌。每日一包溫水沖泡，開啟體內環保的好習慣。",
    ingredients: ["蔗果三糖", "蔗果四糖", "菊苣纖維"],
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
