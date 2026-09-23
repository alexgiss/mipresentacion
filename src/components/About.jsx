import { aboutCards, aboutTexts, stats, workWith } from '../data'

export default function About() {
  return (
    <section id="sobre-mi" className="relative overflow-hidden bg-slate-50 py-16 text-slate-950">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-10 h-[420px] w-[420px] rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute -right-40 bottom-0 h-[380px] w-[380px] rounded-full bg-blue-400/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600">
              Sobre mí
            </p>
            <h2 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
              Perfil profesional.
              <span className="block text-slate-500">Sistemas de alto impacto.</span>
            </h2>
          </div>

          <div className="space-y-5 text-lg leading-8 text-slate-600">
            {aboutTexts.map((text, i) => (
              <p key={i}>{text}</p>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:shadow-lg"
            >
              <p className="text-4xl font-bold text-cyan-600">{stat.value}</p>
              <p className="mt-2 text-sm font-medium text-slate-600">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {aboutCards.map((card) => (
            <div
              key={card.title}
              className={`group rounded-2xl border p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg ${
                card.highlight
                  ? 'border-cyan-200 bg-cyan-50 hover:border-cyan-400'
                  : 'border-slate-200 bg-white hover:border-cyan-300'
              }`}
            >
              <div
                className={`mb-5 flex h-11 w-11 items-center justify-center rounded-xl transition duration-300 ${
                  card.highlight
                    ? 'bg-cyan-400 text-slate-950'
                    : 'bg-slate-950 text-cyan-400 group-hover:bg-cyan-400 group-hover:text-slate-950'
                }`}
              >
                <span className={card.mono ? 'font-mono text-lg' : 'text-xl'}>{card.icon}</span>
              </div>
              <h3 className="mb-2 text-lg font-bold text-slate-950">{card.title}</h3>
              <p className="text-sm leading-6 text-slate-600">{card.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-3 border-t border-slate-200 pt-8">
          <span className="mr-3 text-sm font-semibold text-slate-500">Trabajo con</span>
          {workWith.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:border-cyan-300 hover:text-cyan-700"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
