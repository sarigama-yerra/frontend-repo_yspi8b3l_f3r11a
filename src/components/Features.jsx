import { Users, Search, MessagesSquare, Group } from 'lucide-react'

const features = [
  {
    icon: Search,
    title: 'Find a partner',
    desc: 'Match with a study partner who shares your goals, subjects, and schedule.'
  },
  {
    icon: Group,
    title: 'Study groups',
    desc: 'Join small, focused groups to keep momentum and learn faster together.'
  },
  {
    icon: Users,
    title: 'Community',
    desc: 'A supportive space to ask questions, share wins, and stay accountable.'
  },
  {
    icon: MessagesSquare,
    title: 'Chat',
    desc: 'Built‑in chat to coordinate sessions, share resources, and stay connected.'
  },
]

export default function Features() {
  return (
    <section id="features" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Everything you need to learn together</h2>
          <p className="mt-3 text-slate-300">Clerva helps you find partners and groups, then makes it effortless to coordinate and study consistently.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-slate-900/60 p-6">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 via-purple-500 to-fuchsia-500 text-white">
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
