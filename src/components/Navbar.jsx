import { useState } from 'react'
import { Menu, X, Sparkles } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Features', href: '#features' },
    { label: 'Showcase', href: '#showcase' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mt-4 bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl">
          <div className="flex items-center justify-between px-6 py-4">
            <a href="#" className="flex items-center gap-2 group">
              <div className="relative">
                <div className="absolute inset-0 rounded-lg bg-blue-500/30 blur-md group-hover:bg-blue-400/40 transition-colors" />
                <div className="relative rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 p-2">
                  <Sparkles className="text-white" size={18} />
                </div>
              </div>
              <span className="text-white font-semibold text-lg tracking-tight">Clerva</span>
            </a>

            <nav className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="text-sm text-slate-300 hover:text-white transition-colors">
                  {item.label}
                </a>
              ))}
              <a href="#contact" className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-white text-slate-900 text-sm font-medium hover:opacity-90 transition">
                Get Started
              </a>
            </nav>

            <button onClick={() => setOpen(!open)} className="md:hidden text-white p-2">
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-white/10 px-6 py-4">
              <div className="flex flex-col gap-3">
                {navItems.map((item) => (
                  <a key={item.href} href={item.href} className="text-slate-300 hover:text-white transition-colors">
                    {item.label}
                  </a>
                ))}
                <a href="#contact" className="mt-2 inline-flex items-center justify-center px-4 py-2 rounded-lg bg-white text-slate-900 text-sm font-medium">
                  Get Started
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
