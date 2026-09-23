import { education, languages, profile } from '../data'

export default function Education() {
  return (
    <section id="educacion" className="relative overflow-hidden bg-slate-950 py-16 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-40 top-0 h-[380px] w-[380px] rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-10 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Educación e idiomas
          </p>
          <h2 className="text-3xl font-bold leading-tight sm:text-4xl">
            Formación académica
            <span className="block text-slate-400">e idiomas.</span>
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {education.map((item) => (
            <article
              key={item.institution}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-7 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 sm:p-8"
            >
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400/10 text-lg text-cyan-400">
                🎓
              </div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
                Educación
              </span>
              <h3 className="mt-2 text-xl font-bold">{item.degree}</h3>
              <p className="mt-2 text-sm font-medium text-slate-300">{item.institution}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                <span className="rounded-full border border-white/10 bg-slate-950/60 px-3 py-1.5 text-xs text-slate-300">
                  {item.period}
                </span>
                <span className="rounded-full border border-white/10 bg-slate-950/60 px-3 py-1.5 text-xs text-slate-300">
                  {item.place}
                </span>
              </div>
            </article>
          ))}

          <article className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-7 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 sm:p-8">
            <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400/10 text-lg text-cyan-400">
              🌐
            </div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
              Idiomas
            </span>
            <h3 className="mt-2 text-xl font-bold">Comunicación</h3>
            <div className="mt-4 space-y-3">
              {languages.map((lang) => (
                <div
                  key={lang.name}
                  className="flex items-center justify-between rounded-xl border border-white/10 bg-slate-950/50 px-4 py-3"
                >
                  <span className="text-sm font-medium text-slate-200">{lang.name}</span>
                  <span className="text-xs font-semibold uppercase tracking-widest text-cyan-400">
                    {lang.level}
                  </span>
                </div>
              ))}
            </div>
          </article>

          <article className="relative overflow-hidden rounded-3xl border border-cyan-400/20 bg-cyan-400/[0.06] p-7 md:col-span-2 sm:p-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
                  Currículum
                </span>
                <h3 className="mt-2 text-xl font-bold">
                  Revisa mi CV completo: perfil, experiencia, habilidades y educación.
                </h3>
                <p className="mt-2 text-sm text-slate-400">
                  Se abre en una pestaña nueva y puedes guardarlo como PDF con{' '}
                  <span className="font-medium text-slate-300">Ctrl + P</span>.
                </p>
              </div>
              <a
                href={profile.cv}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-cyan-400 px-6 py-3 font-bold text-slate-950 transition duration-300 hover:-translate-y-1 hover:bg-cyan-300"
              >
                Ver currículum <span>↗</span>
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
