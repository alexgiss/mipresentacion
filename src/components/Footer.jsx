import { navLinks, profile } from '../data'
import Avatar from './Avatar'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 py-14 md:grid-cols-3 md:items-start">
          <div>
            <a href="#inicio" className="inline-flex items-center gap-3 text-lg font-bold">
              <Avatar className="h-10 w-10 rounded-full" />
              {profile.displayName}
            </a>
            <p className="mt-4 text-sm font-medium uppercase tracking-[0.15em] text-cyan-400">
              {profile.role} · {profile.roleLine}
            </p>
            <p className="mt-3 max-w-sm text-sm leading-6 text-slate-400">{profile.footerText}</p>
          </div>

          <div className="md:justify-self-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Navegación
            </p>
            <nav className="flex flex-col gap-3 text-sm">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-slate-400 transition hover:text-cyan-400"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="md:justify-self-end">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Contacto
            </p>
            <p className="mb-4 max-w-xs text-sm leading-6 text-slate-400">
              {profile.location} · {profile.phone}
            </p>
            <div className="flex flex-col gap-2 text-sm">
              <a
                href={`mailto:${profile.email}`}
                className="font-semibold text-cyan-400 transition hover:text-cyan-300"
              >
                {profile.email}
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-cyan-400 transition hover:text-cyan-300"
              >
                LinkedIn ↗
              </a>
              <a
                href={profile.cv}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-cyan-400 transition hover:text-cyan-300"
              >
                Currículum ↗
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-white/10 py-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 {profile.name}. Todos los derechos reservados.</p>
          <a href="#inicio" className="inline-flex items-center gap-2 transition hover:text-cyan-400">
            Volver arriba <span>↑</span>
          </a>
        </div>
      </div>
    </footer>
  )
}
