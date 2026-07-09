import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PRODUCTS, BRANDS, type Brand } from "@/lib/products";
import { ProductCard } from "@/components/site/ProductCard";

export const Route = createFileRoute("/products/")({
  head: () => ({
    meta: [
      { title: "全部產品 — Health & Vitality" },
      { name: "description", content: "瀏覽好家庭與 BIOID LIFEFULL 全系列保健產品，一站購足家庭日常與精準保養。" },
      { property: "og:title", content: "全部產品 — Health & Vitality" },
      { property: "og:description", content: "好家庭 × BIOID LIFEFULL 全系列保健複方。" },
    ],
  }),
  component: ProductsPage,
});

type Filter = "all" | Brand;

function ProductsPage() {
  const [filter, setFilter] = useState<Filter>("all");
  const filtered = filter === "all" ? PRODUCTS : PRODUCTS.filter((p) => p.brand === filter);

  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <header className="mb-12 border-b border-zinc-950/5 pb-8">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold">All Products</span>
        <h1 className="mt-3 font-serif text-4xl font-semibold sm:text-5xl">全部產品</h1>
        <p className="mt-3 max-w-[56ch] text-zinc-500">
          從好家庭的家庭日常配方，到 BIOID LIFEFULL 的科技精準補給，共 {PRODUCTS.length} 款保健嚴選。
        </p>
      </header>

      <div className="mb-10 flex flex-wrap items-center gap-2">
        {(
          [
            { key: "all", label: "全部" },
            { key: "haojiating", label: BRANDS.haojiating.name },
            { key: "bioid", label: BRANDS.bioid.name },
          ] as { key: Filter; label: string }[]
        ).map((f) => {
          const active = filter === f.key;
          return (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className={`rounded-full px-4 py-1.5 text-xs font-medium ring-1 transition-colors ${
                active
                  ? "bg-brand-blue text-white ring-brand-blue"
                  : "bg-white text-zinc-700 ring-zinc-950/10 hover:bg-zinc-50"
              }`}
            >
              {f.label}
            </button>
          );
        })}
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filtered.map((p) => (
          <ProductCard key={p.slug} product={p} />
        ))}
      </div>
    </section>
  );
}
