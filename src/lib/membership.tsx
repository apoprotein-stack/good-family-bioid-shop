import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import type { Product } from "./products";

export const LINE_ID = "@469fwrxx";
export const LINE_ADD_FRIEND_URL = "https://line.me/R/ti/p/%40469fwrxx";

const STORAGE_KEY = "line-member-v1";

interface MembershipContextValue {
  isMember: boolean;
  hydrated: boolean;
  unlock: () => void;
  reset: () => void;
  openLineAndUnlock: () => void;
}

const MembershipContext = createContext<MembershipContextValue | null>(null);

export function MembershipProvider({ children }: { children: ReactNode }) {
  const [isMember, setIsMember] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      if (localStorage.getItem(STORAGE_KEY) === "1") setIsMember(true);
    } catch {
      /* ignore */
    }
    setHydrated(true);
  }, []);

  const value = useMemo<MembershipContextValue>(
    () => ({
      isMember,
      hydrated,
      unlock: () => {
        try {
          localStorage.setItem(STORAGE_KEY, "1");
        } catch {
          /* ignore */
        }
        setIsMember(true);
      },
      reset: () => {
        try {
          localStorage.removeItem(STORAGE_KEY);
        } catch {
          /* ignore */
        }
        setIsMember(false);
      },
      openLineAndUnlock: () => {
        try {
          localStorage.setItem(STORAGE_KEY, "1");
        } catch {
          /* ignore */
        }
        setIsMember(true);
        if (typeof window !== "undefined") {
          window.open(LINE_ADD_FRIEND_URL, "_blank", "noopener,noreferrer");
        }
      },
    }),
    [isMember, hydrated],
  );

  return <MembershipContext.Provider value={value}>{children}</MembershipContext.Provider>;
}

export function useMembership() {
  const ctx = useContext(MembershipContext);
  if (!ctx) throw new Error("useMembership must be used within MembershipProvider");
  return ctx;
}

/**
 * 依會員狀態回傳實際販售價：
 * - 會員：優惠價 (product.price)
 * - 非會員：原價 (product.originalPrice ?? product.price)
 */
export function memberPrice(product: Product, isMember: boolean): number {
  if (isMember) return product.price;
  return product.originalPrice ?? product.price;
}
