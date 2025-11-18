import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')

    // This is a UI demo. You can wire it to your backend later.
    setTimeout(() => setStatus('Thanks! We will reach out shortly.'), 800)
  }

  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Let’s make your landing work harder</h2>
            <p className="mt-3 text-slate-300">Tell me a bit about your product and goals. I’ll come back with a quick plan and timeline.</p>
            <div className="mt-6 rounded-2xl border border-white/10 bg-slate-900/60 p-6 text-slate-300 text-sm">
              What you get for free:
              <ul className="mt-2 space-y-1 list-disc list-inside">
                <li>Audit of your current page</li>
                <li>Design direction and wireframe</li>
                <li>Estimate and next steps</li>
              </ul>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="rounded-2xl border border-white/10 bg-slate-900/60 p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input required placeholder="Name" className="rounded-lg bg-slate-800/70 border border-white/10 px-3 py-2 text-white outline-none focus:ring-2 focus:ring-blue-500" />
              <input required type="email" placeholder="Email" className="rounded-lg bg-slate-800/70 border border-white/10 px-3 py-2 text-white outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <input placeholder="Website (optional)" className="mt-4 w-full rounded-lg bg-slate-800/70 border border-white/10 px-3 py-2 text-white outline-none focus:ring-2 focus:ring-blue-500" />
            <textarea required rows="4" placeholder="What are you trying to improve?" className="mt-4 w-full rounded-lg bg-slate-800/70 border border-white/10 px-3 py-2 text-white outline-none focus:ring-2 focus:ring-blue-500" />
            <button className="mt-4 inline-flex items-center justify-center rounded-xl bg-white text-slate-900 px-5 py-2 font-semibold hover:opacity-90 transition">
              Send message
            </button>
            {status && <p className="mt-3 text-sm text-green-300">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  )
}
