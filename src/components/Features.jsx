import { Sparkles, Gauge, CursorClick, ShieldCheck } from 'lucide-react'

const features = [
  {
    icon: Gauge,
    title: 'Fast & Focused',
    desc: 'Readable typography, balanced spacing, and a layout that guides attention to what matters.'
  },
  {
    icon: CursorClick,
    title: 'Conversion‑Ready',
    desc: 'Clear calls‑to‑action placed where users expect them, increasing sign‑ups and demos.'
  },
  {
    icon: ShieldCheck,
    title: 'Trust by Design',
    desc: 'Use proof, logos, ratings, and social signals right in the fold to reduce friction.'
  },
  {
    icon: Sparkles,
    title: 'Polished Motion',
    desc: 'Micro‑interactions and subtle parallax that feel premium, never distracting.'
  },
]

export default function Features() {
  return (
    <section id="features" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Design that does the heavy lifting</h2>
          <p className="mt-3 text-slate-300">A clean visual system makes your product look credible and effortless to use.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-slate-900/60 p-6">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-indigo-500 text-white">
                <Icon size={18} />
              </div>
              <h3 className="mt-4 text-white font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-slate-300/90">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
