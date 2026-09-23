import { useState } from 'react'
import { navLinks, profile } from '../data'
import Avatar from './Avatar'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#inicio" className="flex items-center gap-3 text-lg font-bold text-white">
          <Avatar className="h-10 w-10 rounded-full" />
          <span className="hidden sm:inline">{profile.displayName}</span>
        </a>

        <nav className="hidden items-center gap-7 xl:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-300 transition hover:text-cyan-400"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={profile.cv}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-xl border border-slate-700 bg-white/5 px-4 py-2.5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:border-cyan-400/40 hover:bg-white/10 sm:inline-flex"
          >
            Currículum
          </a>
          <a
            href="#contacto"
            className="hidden rounded-xl bg-cyan-400 px-5 py-2.5 text-sm font-bold text-slate-950 transition duration-300 hover:-translate-y-0.5 hover:bg-cyan-300 sm:inline-flex"
          >
            Hablemos
          </a>
          <button
            type="button"
            aria-label="Abrir menú"
            onClick={() => setOpen((v) => !v)}
            className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white xl:hidden"
          >
            ☰
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-white/10 bg-slate-950 px-6 py-4 xl:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-slate-300 transition hover:text-cyan-400"
              >
                {link.label}
              </a>
            ))}
            <div className="flex flex-wrap gap-3 pt-1">
              <a
                href={profile.cv}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-slate-700 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white"
              >
                Currículum
              </a>
              <a
                href="#contacto"
                onClick={() => setOpen(false)}
                className="rounded-xl bg-cyan-400 px-5 py-2.5 text-sm font-bold text-slate-950"
              >
                Hablemos
              </a>
            </div>
          </div>
        </nav>
      )}
    </header>
  )
}
