import { Link } from "@tanstack/react-router";
import { ShoppingBag, Search, Check } from "lucide-react";
import { useCart } from "@/lib/cart";
import { useMembership } from "@/lib/membership";

export function Header() {
  const { count, setOpen } = useCart();
  const { isMember, hydrated, openLineAndUnlock } = useMembership();

  return (
    <>
      <div className="bg-brand-blue text-white text-xs sm:text-sm">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-2 px-6 py-2 text-center font-medium tracking-wide sm:flex-row sm:gap-4">
          <span>🎉 全館任選 · 3 件 8 折 · 5 件 75 折 · 滿 NT$ 1,500 免運</span>
          {hydrated && isMember ? (
            <span className="inline-flex items-center gap-1 rounded-full bg-white/15 px-3 py-0.5 text-[11px]">
              <Check className="size-3" /> LINE 會員價已解鎖
            </span>
          ) : (
            <button
              onClick={openLineAndUnlock}
              className="inline-flex items-center gap-1 rounded-full bg-[#06C755] px-3 py-0.5 text-[11px] font-semibold text-white ring-1 ring-white/20 transition-transform hover:translate-y-[-1px]"
            >
              💬 加 LINE 好友解鎖會員優惠價
            </button>
          )}
        </div>
      </div>
      <nav className="sticky top-0 z-40 border-b border-zinc-950/5 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

        <Link to="/" className="font-serif text-xl font-semibold tracking-tight">
          HEALTH &amp; VITALITY
        </Link>
        <div className="flex items-center gap-8">
          <div className="hidden gap-6 text-sm font-medium sm:flex">
            <Link
              to="/brands/$brand"
              params={{ brand: "haojiating" }}
              className="text-zinc-600 transition-colors hover:text-zinc-900"
              activeProps={{ className: "text-zinc-900" }}
            >
              好家庭系列
            </Link>
            <Link
              to="/brands/$brand"
              params={{ brand: "bioid" }}
              className="text-zinc-600 transition-colors hover:text-zinc-900"
              activeProps={{ className: "text-zinc-900" }}
            >
              BIOID 系列
            </Link>
            <Link
              to="/products"
              className="text-zinc-600 transition-colors hover:text-zinc-900"
              activeProps={{ className: "text-zinc-900" }}
            >
              全部產品
            </Link>
          </div>
          <button
            aria-label="搜尋"
            className="hidden size-9 items-center justify-center rounded-full text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-900 sm:flex"
          >
            <Search className="size-4" />
          </button>
          <button
            onClick={() => setOpen(true)}
            className="relative flex items-center gap-2 rounded-full py-2 pl-3 pr-4 text-sm font-medium ring-1 ring-zinc-950/10 transition-colors hover:bg-white"
          >
            <ShoppingBag className="size-4" />
            <span>購物車 ({count})</span>
          </button>
        </div>
      </div>
      </nav>
    </>
  );

}
