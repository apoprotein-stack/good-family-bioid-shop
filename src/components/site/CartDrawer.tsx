import { X, Minus, Plus, Trash2 } from "lucide-react";
import { useCart } from "@/lib/cart";
import { formatPrice } from "@/lib/products";
import { Link } from "@tanstack/react-router";

export function CartDrawer() {
  const { open, setOpen, detailed, subtotal, setQty, remove } = useCart();

  return (
    <>
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-40 bg-black/30 backdrop-blur-sm transition-opacity duration-300 ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />
      <aside
        className={`fixed inset-y-0 right-0 z-50 flex w-full max-w-md flex-col border-l border-zinc-950/10 bg-background shadow-2xl transition-transform duration-500 ease-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!open}
      >
        <div className="flex items-center justify-between border-b border-zinc-950/5 p-6">
          <h2 className="font-serif text-xl font-medium">購物車</h2>
          <button
            onClick={() => setOpen(false)}
            aria-label="關閉購物車"
            className="flex size-8 items-center justify-center rounded-full text-zinc-500 hover:bg-zinc-100"
          >
            <X className="size-4" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {detailed.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <p className="text-sm text-zinc-500">您的購物車還是空的</p>
              <button
                onClick={() => setOpen(false)}
                className="mt-6 rounded-full bg-brand-blue px-6 py-2 text-sm font-medium text-white"
              >
                繼續選購
              </button>
            </div>
          ) : (
            <ul className="space-y-6">
              {detailed.map(({ product, qty, lineTotal }) => (
                <li key={product.slug} className="flex gap-4 border-b border-zinc-950/5 pb-6 last:border-b-0">
                  <Link
                    to="/products/$slug"
                    params={{ slug: product.slug }}
                    onClick={() => setOpen(false)}
                    className="size-20 shrink-0 overflow-hidden rounded-md bg-neutral-100"
                  >
                    <img src={product.image} alt={product.name} className="size-full object-contain" />
                  </Link>
                  <div className="flex flex-1 flex-col">
                    <Link
                      to="/products/$slug"
                      params={{ slug: product.slug }}
                      onClick={() => setOpen(false)}
                      className="text-sm font-medium hover:text-brand-blue"
                    >
                      {product.name}
                    </Link>
                    <span className="text-xs text-zinc-500">{product.tagline}</span>
                    <div className="mt-auto flex items-center justify-between pt-3">
                      <div className="flex items-center gap-1 rounded-full ring-1 ring-zinc-950/10">
                        <button
                          onClick={() => setQty(product.slug, qty - 1)}
                          className="flex size-7 items-center justify-center rounded-full text-zinc-500 hover:bg-zinc-100"
                          aria-label="減少"
                        >
                          <Minus className="size-3" />
                        </button>
                        <span className="w-6 text-center text-xs">{qty}</span>
                        <button
                          onClick={() => setQty(product.slug, qty + 1)}
                          className="flex size-7 items-center justify-center rounded-full text-zinc-500 hover:bg-zinc-100"
                          aria-label="增加"
                        >
                          <Plus className="size-3" />
                        </button>
                      </div>
                      <span className="font-serif text-sm">{formatPrice(lineTotal)}</span>
                    </div>
                  </div>
                  <button
                    onClick={() => remove(product.slug)}
                    aria-label="移除"
                    className="self-start text-zinc-400 hover:text-destructive"
                  >
                    <Trash2 className="size-4" />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {detailed.length > 0 && (
          <div className="space-y-4 border-t border-zinc-950/5 p-6">
            <div className="flex items-center justify-between text-sm text-zinc-500">
              <span>運費</span>
              <span>結帳時計算</span>
            </div>
            <div className="flex items-center justify-between font-medium">
              <span>小計</span>
              <span className="font-serif text-lg">{formatPrice(subtotal)}</span>
            </div>
            <button className="w-full rounded-full bg-brand-blue py-3 text-sm font-medium text-white ring-1 ring-brand-blue transition-transform hover:translate-y-[-1px]">
              前往結帳
            </button>
          </div>
        )}
      </aside>
    </>
  );
}
