export default function Pricing() {
  return (
    <section id="pricing" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Simple, transparent pricing</h2>
          <p className="mt-3 text-slate-300">Start lean, scale when you see results. No surprises.</p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {[{
            name: 'Starter', price: '$0', perks: ['Landing audit', 'Design direction', '1 hero variant']
          },{
            name: 'Growth', price: '$799', perks: ['Full landing', 'Copy guidance', 'Basic animations']
          },{
            name: 'Scale', price: 'Custom', perks: ['Multi‑page', 'A/B testing setup', 'Pro animations']
          }].map((tier) => (
            <div key={tier.name} className="rounded-2xl border border-white/10 bg-slate-900/60 p-6">
              <h3 className="text-white font-semibold">{tier.name}</h3>
              <p className="mt-2 text-3xl font-bold text-white">{tier.price}</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-300/90">
                {tier.perks.map((p) => <li key={p}>• {p}</li>)}
              </ul>
              <a href="#contact" className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-white text-slate-900 py-2 font-semibold hover:opacity-90 transition">
                Choose {tier.name}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
