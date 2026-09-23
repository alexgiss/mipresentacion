import { aiTools, skillGroups } from '../data'

export default function Technologies() {
  return (
    <section id="tecnologias" className="relative overflow-hidden bg-slate-50 py-16 text-slate-950">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-40 top-20 h-[400px] w-[400px] rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute -left-40 bottom-0 h-[350px] w-[350px] rounded-full bg-blue-400/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-10 grid gap-6 lg:grid-cols-2 lg:items-end">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-600">
              Habilidades y tecnologías
            </p>
            <h2 className="max-w-2xl text-3xl font-bold leading-tight sm:text-4xl">
              Herramientas que utilizo para
              <span className="block text-slate-500">construir cada proyecto.</span>
            </h2>
          </div>
          <div className="lg:pb-1">
            <p className="max-w-xl text-base leading-7 text-slate-600">
              Stack Full-Stack con Java, Node.js, React y Angular, bases de datos SQL, entornos
              cloud, CI/CD y herramientas de IA para acelerar el ciclo de desarrollo.
            </p>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group) => (
            <article
              key={group.name}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-xl hover:shadow-cyan-950/10"
            >
              <span className="absolute right-5 top-5 text-xs font-semibold text-slate-300">
                {group.n}
              </span>
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-slate-950 text-sm font-bold text-cyan-400 transition duration-300 group-hover:bg-cyan-400 group-hover:text-slate-950">
                {group.abbr}
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-cyan-600">
                {group.area}
              </span>
              <h3 className="mt-2 text-lg font-bold text-slate-950">{group.name}</h3>

              <div className="mt-3 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700 transition group-hover:border-cyan-200 group-hover:text-cyan-700"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-4 h-px w-full bg-slate-200">
                <div className="h-px w-0 bg-cyan-500 transition-all duration-500 group-hover:w-full" />
              </div>
            </article>
          ))}
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {aiTools.map((tool) => (
            <article
              key={tool.name}
              className="group relative overflow-hidden rounded-2xl border border-cyan-200 bg-cyan-50 p-5 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-xl hover:shadow-cyan-950/10 lg:col-span-2"
            >
              <span className="absolute right-5 top-5 text-xs font-semibold text-cyan-300">
                {tool.n}
              </span>
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400 text-sm font-bold text-slate-950 transition duration-300 group-hover:bg-slate-950 group-hover:text-cyan-400">
                {tool.abbr}
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-cyan-600">
                {tool.area}
              </span>
              <h3 className="mt-2 text-lg font-bold text-slate-950">{tool.name}</h3>

              <div className="mt-3 flex flex-wrap gap-2">
                {tool.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-cyan-200 bg-white px-3 py-1 text-xs font-medium text-cyan-700"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <p className="mt-3 text-sm leading-6 text-slate-600">{tool.text}</p>

              <div className="mt-4 h-px w-full bg-cyan-200">
                <div className="h-px w-0 bg-cyan-500 transition-all duration-500 group-hover:w-full" />
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-4 rounded-2xl bg-slate-950 p-5 shadow-xl sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-semibold text-white">Desarrollo de principio a fin</p>
            <p className="mt-1 text-sm text-slate-400">
              Frontend · Backend · Bases de datos · Cloud · Herramientas IA · CI/CD · Despliegue
            </p>
          </div>
          <a
            href="#experiencia"
            className="inline-flex items-center gap-2 font-semibold text-cyan-400 transition hover:text-cyan-300"
          >
            Ver experiencia <span>↗</span>
          </a>
        </div>
      </div>
    </section>
  )
}
