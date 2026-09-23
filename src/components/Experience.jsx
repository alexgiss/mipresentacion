import { experience, highlights } from '../data'

export default function Experience() {
  return (
    <section id="experiencia" className="bg-slate-950 py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-400">
            Experiencia profesional
          </p>
          <h2 className="text-4xl font-bold leading-tight sm:text-5xl">
            Lo que he construido
            <span className="block text-slate-400">en los últimos años.</span>
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-400">
            Más de cuatro años trabajando en Retail y Gestión Pública: aplicaciones empresariales,
            reingeniería de sistemas críticos, microservicios, bases de datos y automatización de
            procesos con resultados medibles.
          </p>
        </div>

        <div className="relative space-y-6 border-l border-white/10 pl-6 sm:pl-10">
          {experience.map((job) => (
            <article
              key={job.company}
              className="group relative rounded-3xl border border-white/10 bg-white/[0.04] p-7 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 sm:p-8"
            >
              <span className="absolute -left-[31px] top-9 h-3 w-3 rounded-full border-2 border-slate-950 bg-cyan-400 sm:-left-[47px]" />

              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
                    {job.role}
                  </p>
                  <h3 className="mt-2 text-2xl font-bold transition group-hover:text-cyan-400">
                    {job.company}
                  </h3>
                </div>

                <div className="flex items-center gap-3">
                  <span className="rounded-full border border-white/10 bg-slate-950/70 px-4 py-1.5 text-xs text-slate-300 backdrop-blur-md">
                    {job.period}
                  </span>
                  {job.current && (
                    <span className="flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1.5 text-xs font-medium text-cyan-300">
                      <span className="h-2 w-2 rounded-full bg-cyan-400" />
                      Actual
                    </span>
                  )}
                </div>
              </div>

              <ul className="mt-5 space-y-3">
                {job.bullets.map((bullet, i) => (
                  <li key={i} className="flex gap-3 leading-7 text-slate-400">
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              <span className="absolute right-6 top-6 text-xs font-semibold text-slate-600">
                {job.n}
              </span>
            </article>
          ))}
        </div>

        <div className="mt-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-400">
            Resultados destacados
          </p>
          <h3 className="text-2xl font-bold sm:text-3xl">Impacto medible en cada proyecto.</h3>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((item) => (
              <article
                key={item.title}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition duration-300 hover:-translate-y-2 hover:border-cyan-400/30"
              >
                <span className="absolute right-5 top-5 text-xs font-semibold text-slate-600">
                  {item.n}
                </span>
                <p className="text-4xl font-bold text-cyan-400">{item.value}</p>
                <h4 className="mt-3 text-lg font-bold">{item.title}</h4>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.15em] text-cyan-600">
                  {item.tag}
                </p>
                <p className="mt-3 text-sm leading-6 text-slate-400">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
