import { ArrowRight, CheckCircle2 } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20">
      {/* background accents */}
      <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
      <div className="absolute top-1/3 -right-24 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200">
              <span className="inline-flex items-center gap-1 text-blue-300">
                <CheckCircle2 size={14} /> New redesign concept
              </span>
              <span className="text-white/60">crafted for clarity and conversion</span>
            </div>
            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
              Elevate your product with a crisp, modern landing
            </h1>
            <p className="mt-5 text-slate-300 text-lg leading-relaxed">
              Clean visuals, thoughtful motion, and clear messaging. This concept improves first‑impression, readability, and calls‑to‑action so more visitors become users.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#contact" className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white text-slate-900 font-semibold hover:opacity-90 transition">
                Start your project <ArrowRight size={18} />
              </a>
              <a href="#showcase" className="inline-flex items-center justify-center px-5 py-3 rounded-xl border border-white/15 text-white/90 hover:bg-white/5 transition">
                See examples
              </a>
            </div>

            <div className="mt-8 flex items-center gap-6 text-sm text-slate-300/80">
              <div className="flex items-center gap-2">
                <div className="h-6 w-6 rounded-full bg-green-500/30 ring-2 ring-green-400/50" />
                <span>Faster load</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-6 w-6 rounded-full bg-blue-500/30 ring-2 ring-blue-400/50" />
                <span>Clear CTAs</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-6 w-6 rounded-full bg-indigo-500/30 ring-2 ring-indigo-400/50" />
                <span>Polished motion</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-8 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 blur-2xl rounded-3xl" />
            <div className="relative rounded-3xl border border-white/10 bg-slate-900/60 p-4">
              <div className="grid grid-cols-2 gap-4">
                {[1,2,3,4].map((i) => (
                  <div key={i} className="aspect-video rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10" />
                ))}
              </div>
              <div className="mt-4 rounded-xl bg-slate-800/60 border border-white/10 px-4 py-3 text-slate-300 text-sm">
                Flexible sections: hero, features, showcase, pricing, contact
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
