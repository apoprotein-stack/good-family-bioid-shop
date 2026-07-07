import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="border-t border-zinc-950/5 bg-white py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="space-y-6">
            <div className="font-serif text-lg font-semibold tracking-tight">HEALTH &amp; VITALITY</div>
            <p className="max-w-[35ch] text-sm text-zinc-500">
              我們相信，真正的健康源於對細節的堅持。致力於提供最高標準的營養補充品，陪伴您探索更好的生活品質。
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 lg:col-span-2">
            <div className="space-y-4">
              <h5 className="text-xs font-semibold uppercase tracking-widest text-zinc-900">產品分類</h5>
              <ul className="space-y-2 text-sm text-zinc-500">
                <li>
                  <Link to="/brands/$brand" params={{ brand: "haojiating" }} className="hover:text-brand-blue">
                    好家庭日常系列
                  </Link>
                </li>
                <li>
                  <Link to="/brands/$brand" params={{ brand: "bioid" }} className="hover:text-brand-blue">
                    BIOID 科技系列
                  </Link>
                </li>
                <li>
                  <Link to="/products" className="hover:text-brand-blue">
                    全部產品
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h5 className="text-xs font-semibold uppercase tracking-widest text-zinc-900">服務說明</h5>
              <ul className="space-y-2 text-sm text-zinc-500">
                <li>配送與付款方式</li>
                <li>常見問題 FAQ</li>
                <li>會員制度說明</li>
                <li>服務條款</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-16 flex flex-wrap items-center justify-between gap-6 border-t border-zinc-950/5 pt-8">
          <p className="text-xs text-zinc-400">© 2026 Health &amp; Vitality. All rights reserved.</p>
          <p className="text-xs text-zinc-400">好家庭系列 × BIOID LIFEFULL</p>
        </div>
      </div>
    </footer>
  );
}
