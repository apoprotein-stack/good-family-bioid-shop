import { Link } from "@tanstack/react-router";
import { Plus } from "lucide-react";
import { formatPrice, type Product } from "@/lib/products";
import { useCart } from "@/lib/cart";

interface Props {
  product: Product;
  variant?: "editorial" | "compact";
}

export function ProductCard({ product, variant = "editorial" }: Props) {
  const { add } = useCart();

  if (variant === "compact") {
    return (
      <div className="flex flex-col rounded-[min(1vw,12px)] bg-white p-4 shadow-sm ring-1 ring-black/5 transition-shadow hover:shadow-md">
        <Link
          to="/products/$slug"
          params={{ slug: product.slug }}
          className="mb-4 flex aspect-square w-full items-center justify-center rounded-lg bg-neutral-50"
        >
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            className="size-full object-contain p-3"
          />
        </Link>
        <div className="flex flex-1 flex-col justify-between">
          <div>
            <Link
              to="/products/$slug"
              params={{ slug: product.slug }}
              className="text-sm font-medium hover:text-brand-blue"
            >
              {product.name}
            </Link>
            <p className="mt-1 text-xs text-zinc-500">{product.tagline}</p>
          </div>
          <div className="mt-4 flex items-center justify-between">
            <span className="text-sm font-medium">{formatPrice(product.price)}</span>
            <button
              onClick={() => add(product.slug)}
              aria-label={`加入 ${product.name}`}
              className="flex size-8 items-center justify-center rounded-full bg-brand-emerald text-white transition-transform hover:scale-105"
            >
              <Plus className="size-4" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="group">
      <Link
        to="/products/$slug"
        params={{ slug: product.slug }}
        className="relative mb-6 flex aspect-[4/5] w-full items-center justify-center overflow-hidden rounded-[min(1vw,12px)] bg-neutral-100 outline-1 -outline-offset-1 outline-black/5"
      >
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="size-full object-contain p-6 transition-transform duration-700 group-hover:scale-[1.03]"
        />
      </Link>
      <div className="space-y-1">
        <Link
          to="/products/$slug"
          params={{ slug: product.slug }}
          className="text-lg font-medium hover:text-brand-blue"
        >
          {product.name}
        </Link>
        <p className="text-sm text-zinc-500">{product.tagline}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="font-serif text-lg font-medium">{formatPrice(product.price)}</span>
          <button
            onClick={() => add(product.slug)}
            className="flex h-9 items-center gap-2 rounded-full border border-zinc-950/10 bg-white py-2 pl-3 pr-4 text-xs font-medium transition-colors hover:bg-zinc-50"
          >
            <Plus className="size-3.5" />
            加入購物車
          </button>
        </div>
      </div>
    </div>
  );
}
