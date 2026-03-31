const en = {
  navItems: [
    { id: 'about', label: 'about' },
    { id: 'experience', label: 'experience' },
    { id: 'skills', label: 'skills' },
    { id: 'projects', label: 'projects' },
    { id: 'blog', label: 'blog' },
    { id: 'contact', label: 'contact' },
  ],
  typingStrings: [
    'Frontend Engineer',
    'Vue.js Specialist',
    'React Developer',
    'TypeScript Craftsman',
  ],
  hero: {
    tag: "// let's build something great together",
    firstName: 'Muhammad',
    lastName: 'Aldi Yusron',
    summary:
      'Experienced frontend engineer specializing in scalable web applications using Vue.js, React (Remix), and TypeScript, with over 6 years in the field. An early advocate of AI-powered development - using Claude Code to accelerate delivery and elevate code quality.',
    primaryCta: {
      href: 'mailto:hello@aldiyusron.com',
      label: 'Get in Touch',
    },
    secondaryCta: {
      href: '#experience',
      label: 'View Experience',
      sectionId: 'experience',
    },
    stats: [
      { value: '6+', label: 'Years Exp.' },
      { value: '80%', label: 'Error Rate ↓' },
      { value: '4', label: 'Companies' },
    ],
  },
  workHistorySection: {
    id: 'experience',
    label: '01 // Work History',
    heading: 'Experience',
  },
  experiences: [
    {
      company: 'Mekari',
      role: 'Software Engineer – Frontend',
      type: 'Full-time',
      location: 'Jakarta, Indonesia',
      date: 'Mar 2021 – Present',
      bullets: [
        'Built and maintained frontend features using Vue.js, JavaScript, and TypeScript aligned with RESTful APIs and UX design specs.',
        'Migrated frontend from a monolithic Haml & React.js codebase to a modular service, improving scalability and LCP via CDN optimization.',
        'Collaborated with DevOps to set up Datadog monitoring, reducing error rates by 80%.',
        "Standardized an AI-native TDD workflow using Claude Code's planning & Agent Parallelization, improving consistency and cutting operational costs.",
        'Implemented CI/CD via Bitbucket Pipelines and client-side caching with Vuex to reduce redundant API calls.',
      ],
    },
    {
      company: 'Advotics',
      role: 'Frontend Engineer',
      type: 'Full-time',
      location: 'Jakarta, Indonesia',
      date: 'Apr 2020 – Mar 2021',
      bullets: [
        'Developed web applications with Vue.js based on mockups and RESTful APIs.',
        'Created reusable component libraries for scalable and maintainable development.',
      ],
    },
    {
      company: 'Kontrak Hukum',
      role: 'Software Engineer',
      type: 'Full-time',
      location: 'Jakarta, Indonesia',
      date: 'Oct 2018 – Mar 2020',
      bullets: [
        'Built and upgraded frontend from Angular v4 to v8.',
        'Converted the web application to a Progressive Web App with offline support and push notifications via Firebase.',
      ],
    },
    {
      company: 'Nostratech',
      role: 'Software Engineer',
      type: 'Internship',
      location: 'Jakarta, Indonesia',
      date: 'Jun 2017 – Aug 2017',
      bullets: [
        'Translated visual designs into functional interfaces using HTML, CSS, JavaScript, and AngularJS.',
        'Collaborated with clients to define business requirements and supported implementation.',
      ],
    },
  ],
  skillsSection: {
    id: 'skills',
    label: '02 // Technical Arsenal',
    heading: 'Skills',
  },
  skillGroups: [
    {
      title: 'Languages',
      skills: ['JavaScript', 'TypeScript', 'HTML', 'CSS', 'SCSS', 'Haml'],
    },
    {
      title: 'Frameworks & UI',
      skills: ['Vue.js', 'React', 'Remix', 'Angular', 'Tailwind CSS', 'shadcn/UI'],
    },
    {
      title: 'State & Data',
      skills: ['Vuex', 'Zustand', 'TanStack Query', 'Zod', 'JWT', 'REST/JSON'],
    },
    {
      title: 'Testing',
      skills: ['Jest', 'Vitest', 'Vue Test Utils', 'RSpec'],
    },
    {
      title: 'DevOps & Tooling',
      skills: ['Git', 'Bitbucket Pipelines', 'Nginx', 'CloudFront', 'Datadog', 'Figma'],
    },
    {
      title: 'AI & Emerging',
      skills: ['Claude Code', 'GitHub Copilot', 'Vibe Coding', 'Agent Parallelization'],
    },
  ],
  projectSection: {
    id: 'projects',
    label: '03 // Selected Work',
    heading: 'Projects',
  },
  projects: [
    {
      num: '01',
      title: 'Cubiqcloud',
      desc: 'Freelance engagement building a full-featured CRM platform — including a drag-and-drop email builder, AI-powered messaging workflows, a data analytics dashboard, and WhatsApp chatbot integration.',
      tags: ['Freelance', 'Remix', 'shadcn/UI', 'TypeScript', 'Recharts', 'TanStack Query'],
    },
    {
      num: '02',
      title: 'Frontend Architecture Migration',
      desc: 'Led a high-impact migration from a monolithic Haml & React.js codebase to a modular service architecture, boosting LCP and enabling independent deployment via CDN distribution.',
      tags: ['Vue.js', 'Nginx', 'CDN', 'Bitbucket CI/CD', 'Datadog'],
    },
    {
      num: '03',
      title: 'PWA Conversion',
      desc: 'Converted a legacy Angular web app into a full Progressive Web Application with offline capabilities, service workers, and Firebase-powered push notifications.',
      tags: ['Angular', 'Firebase', 'PWA', 'Service Workers'],
    },
  ],
  blogSection: {
    id: 'blog',
    label: '04 // Writing',
    heading: 'Blog',
    cta: 'Read on Medium ↗',
    emptyState: 'Articles coming soon.',
  },
  contactSection: {
    id: 'contact',
    label: "05 // Let's Connect",
    heading: 'Get In Touch',
  },
  contact: {
    blurb:
      "I'm open to new opportunities. Whether you have a project in mind or just want to say hello - my inbox is always open.",
    email: 'hello@aldiyusron.com',
    links: [
      {
        href: 'https://linkedin.com/in/aldiyusron',
        label: 'LinkedIn ↗',
        external: true,
      },
      {
        href: 'tel:+6287885885278',
        label: '+62 878-858-85278',
      },
    ],
  },
  footer: {
    copyright: '© 2026 Muhammad Aldi Yusron',
    location: 'Jakarta, Indonesia',
    tech: 'Built with React',
  },
}

export default en
