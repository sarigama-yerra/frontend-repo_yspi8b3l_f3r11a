import { CalendarCheck2, MessageSquareHeart, Sparkles, Users2 } from 'lucide-react'

export default function Showcase() {
  return (
    <section id="showcase" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Built to keep you consistent</h2>
          <p className="mt-3 text-slate-300">Clerva blends matching, groups, and chat into a single flow so you spend less time coordinating and more time learning.</p>
        </div>

        <div className="mt-12 grid lg:grid-cols-3 gap-6">
          {/* Card 1: Matching */}
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60 p-6">
            <div className="absolute -inset-20 bg-gradient-to-br from-blue-500/20 via-purple-500/10 to-fuchsia-500/20 blur-3xl" aria-hidden="true" />
            <div className="relative">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 via-purple-500 to-fuchsia-500 text-white">
                <Sparkles size={18} />
              </div>
              <h3 className="mt-4 text-white font-semibold">Smart partner matching</h3>
              <p className="mt-2 text-sm text-slate-300/90">Tell us your subjects, availability, and goals—Clerva pairs you with partners who complement your style.</p>

              <div className="mt-5 grid grid-cols-2 gap-3 text-xs">
                {["CS101 · Evenings","Calc II · Weekends","IELTS · Mornings","AP Chem · Night owl"].map((t) => (
                  <span key={t} className="rounded-lg border border-white/10 bg-slate-800/60 px-3 py-2 text-slate-200">{t}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Card 2: Groups + schedule */}
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60 p-6">
            <div className="absolute -inset-20 bg-gradient-to-br from-indigo-500/20 via-blue-500/10 to-fuchsia-500/20 blur-3xl" aria-hidden="true" />
            <div className="relative">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 via-blue-500 to-fuchsia-500 text-white">
                <Users2 size={18} />
              </div>
              <h3 className="mt-4 text-white font-semibold">Focused study groups</h3>
              <p className="mt-2 text-sm text-slate-300/90">Small cohorts keep momentum. Shared goals, clear agendas, and automatic reminders.</p>

              <div className="mt-5 rounded-xl border border-white/10 bg-slate-800/60 overflow-hidden">
                <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 text-slate-200">
                  <span className="inline-flex items-center gap-2"><CalendarCheck2 size={16} className="text-blue-300" /> Weekly plan</span>
                  <span className="text-xs text-slate-400">GMT-5</span>
                </div>
                <ul className="divide-y divide-white/10 text-sm">
                  {["Mon · Pomodoro 60 min","Wed · Q&A review","Sat · Mock test"].map((row) => (
                    <li key={row} className="flex items-center justify-between px-4 py-3">
                      <span className="text-slate-200">{row}</span>
                      <span className="rounded-md bg-blue-500/15 text-blue-300 px-2 py-1 text-xs">Scheduled</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Card 3: Community chat */}
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60 p-6">
            <div className="absolute -inset-20 bg-gradient-to-br from-fuchsia-500/20 via-purple-500/10 to-blue-500/20 blur-3xl" aria-hidden="true" />
            <div className="relative">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-to-br from-fuchsia-500 via-purple-500 to-blue-500 text-white">
                <MessageSquareHeart size={18} />
              </div>
              <h3 className="mt-4 text-white font-semibold">Community & chat</h3>
              <p className="mt-2 text-sm text-slate-300/90">Ask questions, share resources, celebrate wins. Stay connected without leaving the flow.</p>

              <div className="mt-5 space-y-3 text-sm">
                {[{name:'Ava',txt:'Anyone up for a 30‑min focus sprint at 7pm?'},{name:'Jay',txt:'Sharing my spaced‑repetition deck for Biology 201.'},{name:'Mina',txt:'We hit 5 sessions in a row. Proud of us!'}].map((m) => (
                  <div key={m.txt} className="rounded-xl border border-white/10 bg-slate-800/60 px-4 py-3">
                    <span className="font-medium text-white">{m.name}</span>
                    <p className="text-slate-300">{m.txt}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
