export default function Pricing() {
  const tiers = [
    {
      name: 'Free',
      price: '$0',
      note: 'Great to get started',
      perks: ['Find partners & groups', 'Community access', '5 chats/day']
    },
    {
      name: 'Plus',
      price: '$6/mo',
      note: 'For consistent learners',
      highlight: true,
      perks: ['Unlimited chat', 'Priority matching', 'Group analytics']
    },
    {
      name: 'Team',
      price: '$12/mo',
      note: 'For study clubs & classes',
      perks: ['Team spaces', 'Shared schedules', 'Coach tools']
    }
  ]

  return (
    <section id="pricing" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Simple, student‑friendly pricing</h2>
          <p className="mt-3 text-slate-300">Start free. Upgrade when you want more power and consistency.</p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {tiers.map((tier) => (
            <div key={tier.name} className={`relative rounded-2xl border ${tier.highlight ? 'border-blue-400/40' : 'border-white/10'} bg-slate-900/60 p-6` }>
              {tier.highlight && (
                <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-fuchsia-500/20 blur-xl" aria-hidden="true" />
              )}
              <div className="relative">
                <h3 className="text-white font-semibold">{tier.name}</h3>
                <p className="mt-1 text-slate-300/80 text-sm">{tier.note}</p>
                <p className="mt-2 text-3xl font-bold text-white">{tier.price}</p>
                <ul className="mt-4 space-y-2 text-sm text-slate-300/90">
                  {tier.perks.map((p) => <li key={p}>• {p}</li>)}
                </ul>
                <a href="#contact" className={`mt-6 inline-flex w-full items-center justify-center rounded-xl py-2 font-semibold transition ${tier.highlight ? 'bg-white text-slate-900 hover:opacity-90' : 'border border-white/15 text-white/90 hover:bg-white/5'}`}>
                  {tier.highlight ? 'Get Started' : 'Choose ' + tier.name}
                </a>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-6 text-center text-slate-400 text-sm">Need a class or campus plan? <a className="underline hover:text-white" href="#contact">Get in touch</a>.</p>
      </div>
    </section>
  )
}
