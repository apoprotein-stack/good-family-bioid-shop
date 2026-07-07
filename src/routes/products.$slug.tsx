import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { Minus, Plus, Check } from "lucide-react";
import { getProduct, PRODUCTS, BRANDS, formatPrice, type Product } from "@/lib/products";
import { useCart } from "@/lib/cart";
import { ProductCard } from "@/components/site/ProductCard";

export const Route = createFileRoute("/products/$slug")({
  loader: ({ params }) => {
    const product = getProduct(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "找不到產品" }, { name: "robots", content: "noindex" }] };
    }
    const { product } = loaderData;
    return {
      meta: [
        { title: `${product.name} — Health & Vitality` },
        { name: "description", content: `${product.tagline}。${product.description.slice(0, 100)}` },
        { property: "og:title", content: `${product.name} — Health & Vitality` },
        { property: "og:description", content: product.tagline },
        { property: "og:image", content: product.image },
        { property: "og:type", content: "product" },
        { name: "twitter:image", content: product.image },
      ],
    };
  },
  component: ProductDetail,
  notFoundComponent: () => (
    <div className="mx-auto max-w-2xl px-6 py-24 text-center">
      <h1 className="font-serif text-4xl font-semibold">找不到這項產品</h1>
      <p className="mt-4 text-zinc-500">產品可能已下架，請瀏覽全系列。</p>
      <Link
        to="/products"
        className="mt-8 inline-flex rounded-full bg-brand-blue px-6 py-2 text-sm font-medium text-white"
      >
        瀏覽全部產品
      </Link>
    </div>
  ),
});

function ProductDetail() {
  const { product } = Route.useLoaderData() as { product: Product };
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);
  const { add } = useCart();

  const related = PRODUCTS.filter((p) => p.brand === product.brand && p.slug !== product.slug).slice(0, 3);

  const handleAdd = () => {
    add(product.slug, qty);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <>
      <section className="mx-auto max-w-7xl px-6 py-16">
        <nav className="mb-8 flex items-center gap-2 text-xs text-zinc-500">
          <Link to="/" className="hover:text-brand-blue">
            首頁
          </Link>
          <span>/</span>
          <Link to="/products" className="hover:text-brand-blue">
            全部產品
          </Link>
          <span>/</span>
          <Link to="/brands/$brand" params={{ brand: product.brand }} className="hover:text-brand-blue">
            {BRANDS[product.brand].name}
          </Link>
        </nav>

        <div className="grid gap-12 lg:grid-cols-2">
          <div className="flex aspect-square items-center justify-center rounded-[min(1vw,12px)] bg-neutral-100 p-10 outline outline-1 -outline-offset-1 outline-black/5">
            <img
              src={product.image}
              alt={product.name}
              className="max-h-full max-w-full object-contain"
            />
          </div>

          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold">
              {BRANDS[product.brand].name} · {BRANDS[product.brand].english}
            </span>
            <h1 className="mt-3 font-serif text-4xl font-semibold leading-tight sm:text-5xl">{product.name}</h1>
            <p className="mt-3 text-lg text-zinc-500">{product.tagline}</p>

            <div className="mt-8 flex items-baseline gap-4">
              <span className="font-serif text-3xl font-medium">{formatPrice(product.price)}</span>
              <span className="text-sm text-zinc-500">{product.size}</span>
            </div>

            <p className="mt-8 text-pretty text-zinc-600">{product.description}</p>

            <div className="mt-10 border-t border-zinc-950/5 pt-8">
              <h3 className="text-xs font-semibold uppercase tracking-widest text-zinc-500">主要功效</h3>
              <ul className="mt-4 grid grid-cols-2 gap-3">
                {product.benefits.map((b) => (
                  <li key={b} className="flex items-center gap-2 text-sm">
                    <span className="flex size-5 items-center justify-center rounded-full bg-brand-emerald/10 text-brand-emerald">
                      <Check className="size-3" />
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-1 rounded-full ring-1 ring-zinc-950/10">
                <button
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  className="flex size-10 items-center justify-center rounded-full text-zinc-500 hover:bg-zinc-100"
                  aria-label="減少數量"
                >
                  <Minus className="size-4" />
                </button>
                <span className="w-10 text-center text-sm font-medium">{qty}</span>
                <button
                  onClick={() => setQty((q) => q + 1)}
                  className="flex size-10 items-center justify-center rounded-full text-zinc-500 hover:bg-zinc-100"
                  aria-label="增加數量"
                >
                  <Plus className="size-4" />
                </button>
              </div>
              <button
                onClick={handleAdd}
                className="flex-1 rounded-full bg-brand-blue px-8 py-3 text-sm font-medium text-white ring-1 ring-brand-blue transition-transform hover:translate-y-[-1px] sm:flex-none"
              >
                {added ? "已加入購物車 ✓" : "加入購物車"}
              </button>
            </div>

            <div className="mt-10 border-t border-zinc-950/5 pt-6 text-xs text-zinc-500">
              <p>✓ 滿 NT$ 1,500 免運費 · 台灣本島 24 小時出貨</p>
              <p className="mt-1">✓ 未開封 7 天鑑賞期，滿意保證</p>
            </div>
          </div>
        </div>

        {product.ingredients.length > 0 && (
          <div className="mt-24 grid gap-8 rounded-[min(1vw,12px)] bg-white p-10 ring-1 ring-black/5 lg:grid-cols-[1fr_2fr]">
            <h3 className="font-serif text-2xl font-semibold">配方成分</h3>
            <ul className="grid gap-3 text-sm text-zinc-600 sm:grid-cols-2">
              {product.ingredients.map((ing) => (
                <li key={ing} className="border-b border-zinc-950/5 pb-2">
                  {ing}
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>

      {related.length > 0 && (
        <section className="bg-neutral-100 py-20">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="mb-10 font-serif text-2xl font-semibold">您可能也會喜歡</h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
