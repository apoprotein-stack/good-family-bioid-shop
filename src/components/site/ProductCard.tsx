import { Link } from "@tanstack/react-router";
import { Plus, MapPin } from "lucide-react";
import { formatPrice, type Product } from "@/lib/products";
import { useCart } from "@/lib/cart";
import { useMembership } from "@/lib/membership";

interface Props {
  product: Product;
  variant?: "editorial" | "compact";
}

export function ProductCard({ product, variant = "editorial" }: Props) {
  const { add } = useCart();
  const { isMember, hydrated, openLineAndUnlock } = useMembership();

  const showMember = hydrated && isMember;
  const displayPrice = showMember ? product.price : (product.originalPrice ?? product.price);
  const hasDiscount = product.originalPrice && product.originalPrice > product.price;
  const badge = product.badge && (
    <span className="inline-flex items-center rounded-full bg-brand-gold/10 px-2 py-0.5 text-[11px] font-medium text-brand-gold">
      {product.badge}
    </span>
  );

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
            {badge && <div className="mb-1">{badge}</div>}
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
            <span className="text-sm font-medium">
              {formatPrice(displayPrice)}
              {showMember && hasDiscount && (
                <span className="ml-1 text-xs text-zinc-400 line-through">
                  {formatPrice(product.originalPrice!)}
                </span>
              )}
            </span>
            {product.retailPartnerOnly ? (
              <Link
                to="/"
                hash="partner-stores"
                aria-label="查詢實體門市"
                className="flex size-8 items-center justify-center rounded-full bg-brand-teal text-white transition-transform hover:scale-105"
              >
                <MapPin className="size-4" />
              </Link>
            ) : (
              <button
                onClick={() => add(product.slug)}
                aria-label={`加入 ${product.name}`}
                className="flex size-8 items-center justify-center rounded-full bg-brand-emerald text-white transition-transform hover:scale-105"
              >
                <Plus className="size-4" />
              </button>
            )}
          </div>
          {!product.retailPartnerOnly && hydrated && !isMember && hasDiscount && (
            <button
              onClick={openLineAndUnlock}
              className="mt-2 rounded-full bg-[#06C755]/10 px-2 py-1 text-[11px] font-medium text-[#06C755] hover:bg-[#06C755]/20"
            >
              💬 加 LINE 會員價 {formatPrice(product.price)}
            </button>
          )}
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
        {badge && <div>{badge}</div>}
        <Link
          to="/products/$slug"
          params={{ slug: product.slug }}
          className="text-lg font-medium hover:text-brand-blue"
        >
          {product.name}
        </Link>
        <p className="text-sm text-zinc-500">{product.tagline}</p>
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className="font-serif text-lg font-medium">{formatPrice(displayPrice)}</span>
            {showMember && hasDiscount && (
              <span className="text-sm text-zinc-400 line-through">
                {formatPrice(product.originalPrice!)}
              </span>
            )}
            {product.unitNote && <span className="text-xs text-zinc-400">{product.unitNote}</span>}
          </div>
          {product.retailPartnerOnly ? (
            <Link
              to="/"
              hash="partner-stores"
              className="flex h-9 items-center gap-2 rounded-full border border-brand-teal/30 bg-white py-2 pl-3 pr-4 text-xs font-medium text-brand-teal transition-colors hover:bg-brand-teal/5"
            >
              <MapPin className="size-3.5" />
              查詢門市
            </Link>
          ) : (
            <button
              onClick={() => add(product.slug)}
              className="flex h-9 items-center gap-2 rounded-full border border-zinc-950/10 bg-white py-2 pl-3 pr-4 text-xs font-medium transition-colors hover:bg-zinc-50"
            >
              <Plus className="size-3.5" />
              加入購物車
            </button>
          )}
        </div>
        {!product.retailPartnerOnly && hydrated && !isMember && hasDiscount && (
          <button
            onClick={openLineAndUnlock}
            className="mt-2 inline-flex items-center gap-1 rounded-full bg-[#06C755]/10 px-3 py-1 text-xs font-medium text-[#06C755] hover:bg-[#06C755]/20"
          >
            💬 加 LINE 好友解鎖會員價 {formatPrice(product.price)}
          </button>
        )}
      </div>
    </div>
  );
}
