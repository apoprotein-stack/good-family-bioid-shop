import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { PRODUCTS, type Product } from "./products";
import { memberPrice, useMembership } from "./membership";

export interface CartLine {
  slug: string;
  qty: number;
}

interface CartContextValue {
  lines: CartLine[];
  open: boolean;
  setOpen: (v: boolean) => void;
  add: (slug: string, qty?: number) => void;
  remove: (slug: string) => void;
  setQty: (slug: string, qty: number) => void;
  clear: () => void;
  count: number;
  subtotal: number;
  detailed: Array<{ product: Product; qty: number; lineTotal: number }>;
}

const CartContext = createContext<CartContextValue | null>(null);
const STORAGE_KEY = "cart-v1";

export function CartProvider({ children }: { children: ReactNode }) {
  const { isMember } = useMembership();
  const [lines, setLines] = useState<CartLine[]>([]);
  const [open, setOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setLines(JSON.parse(raw));
    } catch {
      /* ignore */
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(lines));
  }, [lines, hydrated]);

  const value = useMemo<CartContextValue>(() => {
    const detailed = lines
      .map((l) => {
        const product = PRODUCTS.find((p) => p.slug === l.slug);
        if (!product) return null;
        const unit = memberPrice(product, isMember);
        return { product, qty: l.qty, lineTotal: unit * l.qty };
      })
      .filter((x): x is { product: Product; qty: number; lineTotal: number } => x !== null);

    return {
      lines,
      open,
      setOpen,
      add: (slug, qty = 1) => {
        setLines((prev) => {
          const existing = prev.find((l) => l.slug === slug);
          if (existing) {
            return prev.map((l) => (l.slug === slug ? { ...l, qty: l.qty + qty } : l));
          }
          return [...prev, { slug, qty }];
        });
        setOpen(true);
      },
      remove: (slug) => setLines((prev) => prev.filter((l) => l.slug !== slug)),
      setQty: (slug, qty) =>
        setLines((prev) =>
          qty <= 0 ? prev.filter((l) => l.slug !== slug) : prev.map((l) => (l.slug === slug ? { ...l, qty } : l)),
        ),
      clear: () => setLines([]),
      count: lines.reduce((s, l) => s + l.qty, 0),
      subtotal: detailed.reduce((s, x) => s + x.lineTotal, 0),
      detailed,
    };
  }, [lines, open, isMember]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
