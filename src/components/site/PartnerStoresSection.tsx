import { ShieldCheck, Store } from "lucide-react";

const CHANNELS = [
  {
    title: "連鎖美妝藥局",
    detail: "全台屈臣氏、康是美等開架保健專區，認明「BB 神采速纖飲」10 入精裝禮盒。",
  },
  {
    title: "健保特約專業藥局",
    detail: "全台特約健保藥局，由現場藥師依個人狀況提供補充建議。",
  },
  {
    title: "合作門市與專櫃",
    detail: "授權合作門市與特約專櫃，適合送禮首選與初次現場諮詢。",
  },
];

export function PartnerStoresSection() {
  return (
    <section id="partner-stores" className="scroll-mt-24 bg-neutral-100 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-emerald/10 px-3 py-1 text-xs font-semibold text-brand-emerald">
            <ShieldCheck className="size-3.5" />
            原廠授權 · 全台實體正貨保障
          </span>
          <h2 className="mt-4 font-serif text-3xl font-semibold leading-tight">
            想先體驗單盒，或需要現場專業諮詢？
          </h2>
          <p className="mt-3 text-sm text-zinc-500">
            10 入標準精裝禮盒僅於授權實體通路販售，歡迎至以下門市選購，並由現場藥師提供補充建議。
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {CHANNELS.map((c) => (
            <div key={c.title} className="rounded-[min(1vw,12px)] bg-white p-6 ring-1 ring-black/5">
              <h3 className="flex items-center gap-2 font-serif text-base font-semibold">
                <Store className="size-4 text-brand-emerald" />
                {c.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-600">{c.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
