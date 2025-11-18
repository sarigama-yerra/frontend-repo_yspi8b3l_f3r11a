export default function Showcase() {
  return (
    <section id="showcase" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">A structure built for clarity</h2>
            <p className="mt-4 text-slate-300 leading-relaxed">
              Sections that tell a story: problem → value → proof → CTA. Use visuals that match your brand and keep content scannable with strong headings and short paragraphs.
            </p>
            <ul className="mt-6 space-y-3 text-slate-300/90 text-sm">
              <li>• Above‑the‑fold CTA and benefits</li>
              <li>• Feature grid with icons</li>
              <li>• Product shots and quick explainer</li>
              <li>• Logos, quotes, and social proof</li>
              <li>• Pricing with value framing</li>
              <li>• Simple contact/demos</li>
            </ul>
          </div>

          <div className="relative">
            <div className="absolute -inset-10 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 blur-2xl rounded-3xl" />
            <div className="relative grid grid-cols-6 gap-2 p-3 rounded-3xl border border-white/10 bg-slate-900/60">
              {Array.from({ length: 24 }).map((_, i) => (
                <div key={i} className="aspect-square rounded-xl border border-white/10 bg-slate-800/70" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
