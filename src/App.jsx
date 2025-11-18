import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Showcase from './components/Showcase'
import Pricing from './components/Pricing'
import Contact from './components/Contact'

function App() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* glow grid */}
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(60%_60%_at_50%_20%,rgba(59,130,246,0.15),transparent_60%),radial-gradient(40%_40%_at_80%_10%,rgba(99,102,241,0.12),transparent_60%)]" />

      <Navbar />

      <main className="relative">
        <Hero />
        <Features />
        <Showcase />
        <Pricing />
        <Contact />
      </main>

      <footer className="relative border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-sm">© {new Date().getFullYear()} Clerva. All rights reserved.</p>
          <div className="flex items-center gap-4 text-slate-400 text-sm">
            <a className="hover:text-white transition" href="#features">Features</a>
            <a className="hover:text-white transition" href="#pricing">Pricing</a>
            <a className="hover:text-white transition" href="#contact">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
