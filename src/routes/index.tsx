import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero.jpg";
import { PRODUCTS, productsByBrand, BRANDS } from "@/lib/products";
import { ProductCard } from "@/components/site/ProductCard";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const haojiating = productsByBrand("haojiating");
  const bioid = productsByBrand("bioid");

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center">
            <div className="z-10">
              <span className="mb-4 block text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold">
                Premium Wellness
              </span>
              <h1 className="text-balance font-serif text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
                源自自然的純粹<br />守護全家人的健康
              </h1>
              <p className="mt-6 max-w-[48ch] text-base text-zinc-600 sm:text-lg">
                嚴選專利原料與科學配方，為您提供最專業的營養補給。從日常代謝到關鍵成長，我們與您一同建立穩健的健康基礎。
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  to="/products"
                  className="rounded-full bg-brand-blue px-8 py-3 text-sm font-medium text-white ring-1 ring-brand-blue transition-transform hover:translate-y-[-1px]"
                >
                  探索全系列產品
                </Link>
                <Link
                  to="/brands/$brand"
                  params={{ brand: "bioid" }}
                  className="rounded-full bg-white px-8 py-3 text-sm font-medium text-zinc-900 ring-1 ring-zinc-950/10 transition-colors hover:bg-zinc-50"
                >
                  了解研發故事
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src={heroImg}
                alt="精品保健嚴選"
                width={1600}
                height={1200}
                className="aspect-[4/3] w-full rounded-[min(1vw,12px)] object-cover outline outline-1 -outline-offset-1 outline-black/5"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 好家庭 */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 flex items-end justify-between border-b border-zinc-950/5 pb-8">
            <div className="max-w-[56ch]">
              <h2 className="font-serif text-3xl font-semibold leading-tight">{BRANDS.haojiating.name}系列</h2>
              <p className="mt-2 text-zinc-500">Good Family — 溫暖守護，照顧每個家庭成員的日常所需</p>
            </div>
            <Link
              to="/brands/$brand"
              params={{ brand: "haojiating" }}
              className="text-sm font-medium text-brand-blue underline decoration-brand-blue/30 underline-offset-4"
            >
              查看全部產品
            </Link>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {haojiating.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* BIOID */}
      <section className="bg-neutral-100 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 grid gap-8 lg:grid-cols-[1.5fr_1fr]">
            <div>
              <h2 className="font-serif text-3xl font-semibold leading-tight">{BRANDS.bioid.name}</h2>
              <p className="mt-4 max-w-[48ch] text-pretty text-zinc-600">{BRANDS.bioid.description}</p>
            </div>
            <div className="flex items-center gap-4 lg:justify-end">
              <span className="text-xs font-medium uppercase tracking-widest text-zinc-400">Categories</span>
              <Link
                to="/brands/$brand"
                params={{ brand: "bioid" }}
                className="rounded-full bg-white px-3 py-1 text-xs font-medium shadow-sm ring-1 ring-black/5"
              >
                全產品
              </Link>
            </div>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {bioid.slice(0, 4).map((p) => (
              <ProductCard key={p.slug} product={p} variant="compact" />
            ))}
          </div>
          {bioid.length > 4 && (
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {bioid.slice(4).map((p) => (
                <ProductCard key={p.slug} product={p} variant="compact" />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Trust bar */}
      <section className="border-t border-zinc-950/5 bg-white py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 sm:grid-cols-3">
          {[
            { title: "國際 SGS 檢驗", desc: "嚴選全球專利原料，重金屬與農藥零檢出" },
            { title: "醫師團隊監製", desc: "配方經專業營養師與醫師審核，無添加西藥" },
            { title: "台灣在地製造", desc: "GMP 藥廠級生產，全程冷鏈品管把關" },
          ].map((f) => (
            <div key={f.title} className="border-l-2 border-brand-gold pl-4">
              <h3 className="font-serif text-lg font-medium">{f.title}</h3>
              <p className="mt-1 text-sm text-zinc-500">{f.desc}</p>
            </div>
          ))}
          <p className="sr-only">共 {PRODUCTS.length} 項產品</p>
        </div>
      </section>
    </>
  );
}
