# 好家庭 × BIOID LIFEFULL

`good-family-bioid-shop` 是以 React 與 TanStack Start 建立的保健品品牌展示／購物體驗前端，整合「好家庭（Good Family）」與「BIOID LIFEFULL（Bio-Identity）」兩個品牌。頁面提供品牌故事、商品瀏覽、品牌篩選、商品詳情、價格與購物袋互動；目前 repository 內的商品資料與購物狀態以前端程式為主。

## 目前功能

| 區塊 | 說明 |
| --- | --- |
| 品牌首頁 | 呈現雙品牌定位、主視覺與商品入口。 |
| 商品列表 | 依品牌或商品分類瀏覽商品。 |
| 商品詳情 | 顯示規格、價格、特色、成分、食用／使用情境與必要提示。 |
| 購物袋 | 在瀏覽器端管理選購品項與數量。正式結帳、付款、訂單與庫存仍需另行串接服務。 |
| 品牌故事 | 提供好家庭與 BIOID LIFEFULL 的品牌敘事。 |
| Sitemap | 由 `src/routes/sitemap[.]xml.ts` 提供網站地圖路由。 |

商品與品牌定義集中在 `src/lib/products.ts`，包含品牌、slug、價格、圖片、規格、成分、特色與免責聲明等欄位。

## 技術棧

- React 19
- TypeScript
- TanStack Router／TanStack Start
- Vite
- Tailwind CSS 4
- Radix UI 與 `lucide-react`
- Bun lockfile（`bun.lock`）

## 本機開發

建議使用 Bun；若團隊已有相容的 Node.js 套件管理流程，也應維持 lockfile 一致，不要在同一分支混用多套 lockfile。

```bash
bun install
bun run dev
```

常用檢查指令：

```bash
bun run build       # 建立 production bundle
bun run preview     # 預覽建置結果
bun run lint        # 執行 ESLint
bun run format      # 以 Prettier 格式化檔案
```

## 專案結構

```text
good-family-bioid-shop/
├── src/
│   ├── lib/products.ts       # 品牌與商品資料來源
│   ├── lib/cart.tsx          # 前端購物袋狀態
│   ├── lib/membership.tsx    # 會員相關前端狀態
│   ├── components/           # 共用版面與元件
│   └── routes/               # 首頁、品牌、商品與 sitemap 路由
├── public/                   # favicon、robots 等公開資源
├── package.json
├── bun.lock
└── vite.config.ts
```

## 部署

GitHub repository 的描述標示此專案由 Lovable 建置並以 Netlify 發布。實際部署時請在 Netlify 設定正確的建置指令與 Node／Bun 環境，並確認 TanStack Start 的預覽與 production 輸出均能正常處理路由。正式上線前請檢查自訂網域、robots、sitemap、圖片資源與所有商品連結。

本 repository 的 `package.json` 將專案標示為 private，且目前未看到正式付款、訂單、庫存或伺服器端結帳流程。README 所稱的「購物體驗」因此應理解為前端展示與購物袋互動，不能視為已完成的電商交易系統。

## 內容與合規提醒

商品文案、價格、認證與健康相關表述必須以實際產品標示、可驗證文件及適用法規為準。README 與網站內容均不構成醫療診斷、治療建議或個人化醫療建議；正式發布前應由產品與法規負責人逐項審核。repository 目前未附獨立 LICENSE，程式碼與品牌素材的重用請先取得權利人授權。

## 維護方式

新增或修改商品時，先更新 `src/lib/products.ts` 的完整欄位，再確認商品 slug、圖片匯入、品牌篩選、詳情頁與 sitemap 是否一致。完成後依序執行 `bun run lint` 與 `bun run build`，並在桌面與行動尺寸檢查導航、商品詳情與購物袋狀態。
