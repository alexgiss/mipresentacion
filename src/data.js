// Contenido del portfolio de Alexis Juvencio Gómez Yoza.
// Edita este archivo para personalizar la página.

export const profile = {
  name: 'Alexis Juvencio Gómez Yoza',
  displayName: 'Alexis Gómez Yoza',
  initials: 'AG',
  photo: 'perfil.jpg', // <-- tu foto (public/perfil.jpg)
  role: 'Ingeniero de Software Senior',
  roleLine: 'Full-Stack Engineer',
  location: 'Quito, Ecuador',
  phone: '0989985359',
  phoneHref: 'tel:+593989985359',
  email: 'agy_17septiembre@hotmail.com',
  linkedin: 'https://www.linkedin.com/in/alexis-gomez-yoza',
  linkedinLabel: 'www.linkedin.com/in/alexis-gomez-yoza',
  cv: 'cv.html',
  available: 'Disponible para nuevos proyectos',
  headline: 'Ingeniero de Software Senior',
  headlineAccent: 'Full-Stack Engineer.',
  intro:
    'Más de 4 años desarrollando, optimizando y evolucionando sistemas empresariales de alto impacto en los sectores de Retail y Gestión Pública: microservicios, APIs, bases de datos SQL y automatización de procesos con Java, Node.js, React y Angular.',
  footerText:
    'Ingeniero de Software Senior | Full-Stack Engineer. Diseño y construyo sistemas web modernos, escalables y preparados para seguir creciendo.',
}

export const navLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Sobre mí', href: '#sobre-mi' },
  { label: 'Experiencia', href: '#experiencia' },
  { label: 'Tecnologías', href: '#tecnologias' },
  { label: 'Educación', href: '#educacion' },
  { label: 'Contacto', href: '#contacto' },
]

export const heroChips = [
  { icon: '📍', text: 'Quito, Ecuador' },
  { icon: '☎', text: '0989985359', href: 'tel:+593989985359' },
  { icon: '✉', text: 'agy_17septiembre@hotmail.com', href: 'mailto:agy_17septiembre@hotmail.com' },
  { icon: 'in', text: 'linkedin.com/in/alexis-gomez-yoza', href: profile.linkedin },
]

export const heroTech = [
  'Java',
  'Node.js',
  'React',
  'Angular',
  'TypeScript',
  'PostgreSQL',
  'AWS',
  'Docker',
]

export const aboutTexts = [
  'Ingeniero de Software Senior con más de 4 años de trayectoria en el desarrollo, optimización y evolución de sistemas empresariales de alto impacto en los sectores de Retail y Gestión Pública.',
  'Especializado en desarrollo Full-Stack, arquitecturas de microservicios, APIs, bases de datos SQL y automatización de procesos, utilizando Java, Node.js, React y Angular.',
  'Experiencia en entornos cloud, CI/CD, DevOps y herramientas de IA para acelerar el ciclo de desarrollo. Orientado a resultados, escalabilidad, calidad y mejora continua.',
]

export const stats = [
  { value: '+4', label: 'años de trayectoria' },
  { value: '+25%', label: 'eficiencia operativa' },
  { value: '99,9%', label: 'disponibilidad del sistema' },
  { value: '85%', label: 'cobertura de testing' },
]

export const aboutCards = [
  {
    icon: '◇',
    title: 'Frontend',
    text: 'Interfaces con React y Angular: aplicaciones dinámicas, escalables y pensadas para la experiencia del usuario.',
  },
  {
    icon: '</>',
    mono: true,
    title: 'Backend',
    text: 'Lógica de negocio, APIs REST y arquitecturas de microservicios con Java (Spring Boot) y Node.js.',
  },
  {
    icon: '⛁',
    title: 'Datos & Cloud',
    text: 'Modelado y optimización de bases SQL (PostgreSQL, MySQL, Oracle) con despliegue en AWS y Kubernetes.',
  },
  {
    icon: '↗',
    highlight: true,
    title: 'DevOps & IA',
    text: 'CI/CD, Docker, Git y herramientas de IA para acelerar el ciclo de desarrollo de principio a fin.',
  },
]

export const workWith = [
  'Java',
  'Python',
  'JavaScript',
  'TypeScript',
  'SQL',
  'React',
  'Angular',
  'Node.js',
  'Spring Boot',
]

export const experience = [
  {
    n: '01',
    company: 'Shopping Management Operadora',
    role: 'Especialista en TI',
    period: 'Octubre 2023 – Presente',
    current: true,
    bullets: [
      'Lideré el diseño y despliegue de aplicaciones empresariales integrando Java y Node.js en backend con React y Angular en frontend, automatizando procesos clave y elevando la eficiencia operativa en un 25%.',
      'Implementé arquitecturas de APIs y centralización de flujos de datos críticos mediante el uso estratégico de Antigravity Code Codex, reduciendo en un 30% los ciclos de entrega de software con la automatización de entornos de desarrollo.',
      'Ejecuté el modelado y optimización avanzada de bases de datos SQL para operaciones masivas, contribuyendo a una disponibilidad del sistema del 99,9% y a una alta integridad de datos en módulos financieros.',
    ],
  },
  {
    n: '02',
    company: 'Bitekso',
    role: 'Ingeniero de Software II',
    period: 'Enero 2022 – Octubre 2023',
    bullets: [
      'Participé en la reingeniería de soluciones críticas para la gestión de trámites del Municipio de Guayaquil, escalando en un 40% la capacidad de procesamiento de solicitudes mediante microservicios eficientes.',
      'Reestructuré procedimientos almacenados y ejecuté migraciones de datos complejas, disminuyendo en un 35% los tiempos de respuesta del sistema y mejorando la experiencia del usuario final.',
      'Establecí flujos de trabajo bajo Scrum, control de versiones con Git e integración de prácticas CI/CD, reduciendo en un 15% los fallos de despliegue a producción.',
    ],
  },
  {
    n: '03',
    company: 'Golden Companies',
    role: 'Desarrollador de Software y QA',
    period: 'Enero 2021 – Enero 2022',
    bullets: [
      'Diseñé y ejecuté un marco de pruebas automatizadas que elevó la cobertura de testing al 85% y redujo en un 20% la detección de errores críticos posteriores al lanzamiento.',
      'Desarrollé tableros interactivos en Power BI y Tableau integrados con bases de datos operativas, aportando métricas que mejoraron la toma de decisiones gerenciales en un 18%.',
      'Optimicé consultas SQL complejas, mejorando en un 50% la velocidad de procesamiento de reportes analíticos y extendiendo el rendimiento de la infraestructura de bases de datos.',
    ],
  },
]

export const highlights = [
  {
    n: '01',
    value: '+25%',
    title: 'Eficiencia operativa',
    tag: 'Shopping Management',
    text: 'Automatización de procesos clave integrando Java y Node.js en backend con React y Angular en frontend.',
  },
  {
    n: '02',
    value: '−30%',
    title: 'Ciclos de entrega',
    tag: 'Shopping Management',
    text: 'Centralización de flujos de datos críticos y automatización de entornos de desarrollo con IA.',
  },
  {
    n: '03',
    value: '+40%',
    title: 'Procesamiento de solicitudes',
    tag: 'Bitekso · Municipio de Guayaquil',
    text: 'Reingeniería de la gestión de trámites municipales mediante arquitecturas de microservicios.',
  },
  {
    n: '04',
    value: '85%',
    title: 'Cobertura de testing',
    tag: 'Golden Companies',
    text: 'Marco de pruebas automatizadas que redujo un 20% los errores críticos posteriores al lanzamiento.',
  },
]

export const skillGroups = [
  {
    n: '01',
    abbr: '★',
    area: 'Especialidades',
    name: 'Arquitectura & Procesos',
    items: [
      'Arquitectura de Microservicios',
      'Desarrollo Full-Stack',
      'APIs',
      'Optimización de Bases de Datos',
      'Scrum',
      'Kanban',
      'CI/CD',
      'DevOps',
      'Análisis de Datos',
      'BI',
    ],
  },
  {
    n: '02',
    abbr: '{ }',
    area: 'Lenguajes',
    name: 'Lenguajes de programación',
    items: ['Java', 'Python', 'JavaScript', 'TypeScript', 'SQL'],
  },
  {
    n: '03',
    abbr: '</>',
    area: 'Frameworks / Backend',
    name: 'Frontend y backend',
    items: ['React', 'Angular', 'Node.js', 'Spring Boot'],
  },
  {
    n: '04',
    abbr: 'DB',
    area: 'Datos / Cloud / DevOps',
    name: 'Infraestructura',
    items: [
      'PostgreSQL',
      'MySQL',
      'Oracle',
      'Docker',
      'AWS',
      'Kubernetes',
      'Git',
      'Power BI',
      'Tableau',
    ],
  },
]

export const aiTools = [
  {
    n: '05',
    abbr: 'AI',
    area: 'Herramientas IA',
    name: 'Aceleración con IA',
    items: ['Anthropic Claude Code', 'Antigravity Code Codex'],
    text: 'Uso estratégico de IA para acelerar el ciclo de desarrollo: generación y revisión de código, automatización de entornos y documentación.',
  },
]

export const education = [
  {
    institution: 'Universidad Central del Ecuador',
    degree: 'Ingeniería en Informática',
    period: '2023',
    place: 'Quito, Ecuador',
  },
]

export const languages = [
  { name: 'Español', level: 'Nativo' },
  { name: 'Inglés', level: 'Profesional' },
]
