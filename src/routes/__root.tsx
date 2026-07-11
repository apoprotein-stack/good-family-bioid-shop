import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { CartProvider } from "@/lib/cart";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { CartDrawer } from "@/components/site/CartDrawer";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-serif text-7xl font-semibold text-foreground">404</h1>
        <h2 className="mt-4 font-serif text-xl font-medium text-foreground">找不到頁面</h2>
        <p className="mt-2 text-sm text-muted-foreground">您要找的頁面可能已被移動或不存在。</p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-brand-blue px-6 py-2 text-sm font-medium text-white transition-transform hover:translate-y-[-1px]"
          >
            返回首頁
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-serif text-xl font-medium text-foreground">此頁面無法載入</h1>
        <p className="mt-2 text-sm text-muted-foreground">請稍後再試或返回首頁。</p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="rounded-full bg-brand-blue px-6 py-2 text-sm font-medium text-white"
          >
            重新載入
          </button>
          <a href="/" className="rounded-full border border-zinc-950/10 bg-white px-6 py-2 text-sm font-medium">
            返回首頁
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "好家庭保健嚴選" },
      {
        name: "description",
        content: "嚴選好家庭與 BIOID LIFEFULL 兩大品牌保健複方，夜間代謝、應酬守護、成長營養、循環美妍一站購足。",
      },
      { property: "og:title", content: "好家庭保健嚴選" },
      {
        property: "og:description",
        content: "嚴選好家庭與 BIOID LIFEFULL 兩大品牌保健複方，夜間代謝、應酬守護、成長營養、循環美妍一站購足。",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "好家庭保健嚴選" },
      { name: "twitter:description", content: "嚴選好家庭與 BIOID LIFEFULL 兩大品牌保健複方，夜間代謝、應酬守護、成長營養、循環美妍一站購足。" },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/8c150c28-3eee-4179-9048-eb1db3867a06/id-preview-1f0d781e--e8191159-1a45-452a-b548-df962e213a60.lovable.app-1783686042973.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/8c150c28-3eee-4179-9048-eb1db3867a06/id-preview-1f0d781e--e8191159-1a45-452a-b548-df962e213a60.lovable.app-1783686042973.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;500;600&family=Noto+Serif+TC:wght@500;600;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="zh-Hant">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">
            <Outlet />
          </main>
          <Footer />
        </div>
        <CartDrawer />
      </CartProvider>
    </QueryClientProvider>
  );
}
