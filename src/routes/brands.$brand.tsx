import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { BRANDS, productsByBrand, type Brand } from "@/lib/products";
import { ProductCard } from "@/components/site/ProductCard";

function isBrand(x: string): x is Brand {
  return x === "haojiating" || x === "bioid";
}

export const Route = createFileRoute("/brands/$brand")({
  loader: ({ params }) => {
    if (!isBrand(params.brand)) throw notFound();
    return { brand: params.brand, meta: BRANDS[params.brand], products: productsByBrand(params.brand) };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "找不到品牌" }, { name: "robots", content: "noindex" }] };
    const { meta } = loaderData;
    return {
      meta: [
        { title: `${meta.name} · ${meta.english} — Health & Vitality` },
        { name: "description", content: meta.description },
        { property: "og:title", content: `${meta.name} — Health & Vitality` },
        { property: "og:description", content: meta.description },
      ],
    };
  },
  component: BrandPage,
  notFoundComponent: () => (
    <div className="mx-auto max-w-2xl px-6 py-24 text-center">
      <h1 className="font-serif text-4xl font-semibold">找不到此品牌</h1>
      <Link to="/products" className="mt-8 inline-flex rounded-full bg-brand-blue px-6 py-2 text-sm text-white">
        瀏覽全部產品
      </Link>
    </div>
  ),
});

function BrandPage() {
  const { brand, meta, products } = Route.useLoaderData();
  const isHao = brand === "haojiating";

  return (
    <>
      <section
        className={`border-b border-zinc-950/5 py-24 ${isHao ? "bg-white" : "bg-neutral-100"}`}
      >
        <div className="mx-auto max-w-7xl px-6">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold">{meta.english}</span>
          <h1 className="mt-3 font-serif text-5xl font-semibold leading-tight sm:text-6xl">{meta.name}</h1>
          <p className="mt-6 max-w-[56ch] text-pretty text-lg text-zinc-600">{meta.description}</p>
          <p className="mt-4 text-sm text-zinc-500">共 {products.length} 款產品</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>
    </>
  );
}
