import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-32">
      {/* Glow backdrop */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_30%,rgba(255,255,255,0.18),transparent_60%)]" />
        <div className="absolute -top-40 -right-40 h-[520px] w-[520px] rounded-full bg-gradient-to-br from-cyan-400/30 via-white/10 to-purple-400/30 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <h1 className="text-5xl/tight md:text-6xl/tight font-semibold tracking-tight text-white drop-shadow-[0_4px_24px_rgba(255,255,255,0.08)]">
              Life-changing e‑books, crafted like tomorrow.
            </h1>
            <p className="mt-6 text-lg text-white/70 max-w-2xl">
              Curated titles that rewire how you think, work, and grow. Designed with the same obsession for detail you expect from the best.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#catalog" className="inline-flex items-center gap-2 rounded-2xl bg-white text-slate-900 px-5 py-3 font-medium shadow-[0_10px_30px_rgba(255,255,255,0.1)] hover:bg-white/90 active:scale-[0.98] transition-all">
                Explore titles
                <ArrowRight className="h-4 w-4" />
              </a>
              <button className="inline-flex items-center gap-2 rounded-2xl border border-white/20 px-5 py-3 text-white/90 hover:bg-white/10 active:scale-[0.98] transition-all">
                <Sparkles className="h-4 w-4" />
                See how it works
              </button>
            </div>
            <div className="mt-6 flex items-center gap-6 text-sm text-white/60">
              <span>30‑day guarantee</span>
              <span>Instant download</span>
              <span>Lifetime updates</span>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-[28px] border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-2 shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
              <div className="rounded-2xl overflow-hidden bg-slate-900/50 ring-1 ring-white/10">
                <img src="/hero-books.jpg" alt="E-books preview" className="w-full h-[360px] object-cover" />
              </div>
              <div className="pointer-events-none absolute -inset-[1px] rounded-[28px] ring-1 ring-white/20" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
