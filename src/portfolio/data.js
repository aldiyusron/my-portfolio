const ENGLISH_CONTENT = {
  navItems: [
    { id: 'about', label: 'about' },
    { id: 'experience', label: 'experience' },
    { id: 'skills', label: 'skills' },
    { id: 'projects', label: 'projects' },
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
      { value: '5', label: 'Companies' },
    ],
  },
  workHistorySection: {
    id: 'experience',
    label: '01 // Work History',
    heading: 'Experience',
  },
  experiences: [
    {
      company: 'CubiqCloud',
      role: 'Frontend Engineer',
      type: 'Freelance',
      location: 'Remote',
      date: 'Jul 2025 – Present',
      bullets: [
        'Architected a high-utility CRM frontend using Remix and shadcn/UI with secure JWT authentication and Zod-based validation.',
        'Engineered a custom drag-and-drop email builder by extending email-builder-js, enabling personalized customer automation.',
        'Integrated AI-powered email generation workflows, leveraging LLMs to assist users in drafting high-conversion communication.',
        'Built a Data Analytics Dashboard with Recharts and TanStack Query for customer engagement and campaign performance visualization.',
        'Managed WhatsApp chatbot integration to enhance multi-channel communication capabilities.',
      ],
    },
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
      title: 'CRM Platform',
      desc: 'Full-featured CRM frontend featuring secure auth, a drag-and-drop email builder, AI-generated messaging, and a multi-channel communication hub including WhatsApp integration.',
      tags: ['Remix', 'shadcn/UI', 'TypeScript', 'JWT', 'TanStack Query'],
    },
    {
      num: '02',
      title: 'Data Analytics Dashboard',
      desc: 'Interactive dashboard for real-time visualization of customer engagement metrics and campaign performance, with efficient data fetching and caching strategies.',
      tags: ['Recharts', 'TanStack Query', 'React', 'TypeScript'],
    },
    {
      num: '03',
      title: 'Frontend Architecture Migration',
      desc: 'Led a high-impact migration from a monolithic Haml & React.js codebase to a modular service architecture, boosting LCP and enabling independent deployment via CDN distribution.',
      tags: ['Vue.js', 'Nginx', 'CDN', 'Bitbucket CI/CD', 'Datadog'],
    },
    {
      num: '04',
      title: 'PWA Conversion',
      desc: 'Converted a legacy Angular web app into a full Progressive Web Application with offline capabilities, service workers, and Firebase-powered push notifications.',
      tags: ['Angular', 'Firebase', 'PWA', 'Service Workers'],
    },
  ],
  contactSection: {
    id: 'contact',
    label: "04 // Let's Connect",
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

const INDONESIAN_CONTENT = {
  navItems: [
    { id: 'about', label: 'tentang' },
    { id: 'experience', label: 'pengalaman' },
    { id: 'skills', label: 'keahlian' },
    { id: 'projects', label: 'proyek' },
    { id: 'contact', label: 'kontak' },
  ],
  typingStrings: [
    'Frontend Engineer',
    'Spesialis Vue.js',
    'Developer React',
    'TypeScript Craftsman',
  ],
  hero: {
    tag: '// mari wujudkan solusi digital yang berdampak bersama',
    firstName: 'Muhammad',
    lastName: 'Aldi Yusron',
    summary:
      'Frontend engineer dengan lebih dari 6 tahun pengalaman membangun aplikasi web scalable menggunakan Vue.js, React (Remix), dan TypeScript. Secara aktif mengintegrasikan AI ke dalam alur kerja pengembangan — memanfaatkan Claude Code untuk mempercepat delivery dan menjaga standar kualitas kode.',
    primaryCta: {
      href: 'mailto:hello@aldiyusron.com',
      label: 'Hubungi Saya',
    },
    secondaryCta: {
      href: '#experience',
      label: 'Lihat Pengalaman',
      sectionId: 'experience',
    },
    stats: [
      { value: '6+', label: 'Tahun Pengalaman' },
      { value: '80%', label: 'Penurunan Error ↓' },
      { value: '5', label: 'Perusahaan' },
    ],
  },
  workHistorySection: {
    id: 'experience',
    label: '01 // Riwayat Karier',
    heading: 'Pengalaman',
  },
  experiences: [
    {
      company: 'CubiqCloud',
      role: 'Frontend Engineer',
      type: 'Freelance',
      location: 'Remote',
      date: 'Jul 2025 – Sekarang',
      bullets: [
        'Membangun frontend CRM menggunakan Remix dan shadcn/UI, dilengkapi autentikasi JWT dan validasi berbasis Zod.',
        'Mengembangkan email builder drag-and-drop kustom di atas email-builder-js untuk mendukung otomasi komunikasi pelanggan yang lebih personal.',
        'Mengintegrasikan fitur pembuatan email berbasis AI menggunakan LLM untuk membantu pengguna menyusun konten komunikasi yang lebih efektif.',
        'Membangun dashboard analitik menggunakan Recharts dan TanStack Query untuk visualisasi real-time metrik engagement pelanggan dan performa campaign.',
        'Mengelola integrasi chatbot WhatsApp sebagai bagian dari ekosistem komunikasi multi-channel.',
      ],
    },
    {
      company: 'Mekari',
      role: 'Software Engineer – Frontend',
      type: 'Penuh waktu',
      location: 'Jakarta, Indonesia',
      date: 'Mar 2021 – Sekarang',
      bullets: [
        'Membangun dan memelihara fitur frontend menggunakan Vue.js, JavaScript, dan TypeScript, mencakup integrasi API hingga implementasi spesifikasi UX.',
        'Memigrasikan frontend dari codebase monolitik Haml & React.js ke arsitektur modular, menghasilkan peningkatan LCP dan fleksibilitas deployment melalui optimasi CDN.',
        'Berkolaborasi dengan tim DevOps dalam menyiapkan monitoring Datadog, yang berhasil menurunkan error rate hingga 80%.',
        'Menstandarkan workflow TDD berbasis AI menggunakan Claude Code (planning & Agent Parallelization) untuk meningkatkan konsistensi dan efisiensi proses pengembangan.',
        'Mengimplementasikan CI/CD melalui Bitbucket Pipelines serta client-side caching dengan Vuex untuk meminimalkan redundant API call.',
      ],
    },
    {
      company: 'Advotics',
      role: 'Frontend Engineer',
      type: 'Penuh waktu',
      location: 'Jakarta, Indonesia',
      date: 'Apr 2020 – Mar 2021',
      bullets: [
        'Mengembangkan aplikasi web berbasis Vue.js berdasarkan mockup dan RESTful API.',
        'Membangun library komponen reusable untuk mendukung codebase yang scalable dan mudah dipelihara.',
      ],
    },
    {
      company: 'Kontrak Hukum',
      role: 'Software Engineer',
      type: 'Penuh waktu',
      location: 'Jakarta, Indonesia',
      date: 'Okt 2018 – Mar 2020',
      bullets: [
        'Membangun dan melakukan upgrade frontend dari Angular v4 ke v8.',
        'Mengonversi aplikasi web menjadi Progressive Web App dengan dukungan mode offline dan push notification menggunakan Firebase.',
      ],
    },
    {
      company: 'Nostratech',
      role: 'Software Engineer',
      type: 'Magang',
      location: 'Jakarta, Indonesia',
      date: 'Jun 2017 – Agu 2017',
      bullets: [
        'Mengimplementasikan desain visual menjadi antarmuka fungsional menggunakan HTML, CSS, JavaScript, dan AngularJS.',
        'Berkolaborasi dengan klien untuk memahami kebutuhan bisnis dan mendukung proses implementasinya.',
      ],
    },
  ],
  skillsSection: {
    id: 'skills',
    label: '02 // Arsenal Teknis',
    heading: 'Keahlian',
  },
  skillGroups: [
    {
      title: 'Bahasa',
      skills: ['JavaScript', 'TypeScript', 'HTML', 'CSS', 'SCSS', 'Haml'],
    },
    {
      title: 'Framework & UI',
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
    label: '03 // Karya Pilihan',
    heading: 'Proyek',
  },
  projects: [
    {
      num: '01',
      title: 'Platform CRM',
      desc: 'Frontend CRM lengkap dengan autentikasi yang aman, email builder drag-and-drop, fitur pesan berbasis AI, dan integrasi WhatsApp untuk komunikasi multi-channel.',
      tags: ['Remix', 'shadcn/UI', 'TypeScript', 'JWT', 'TanStack Query'],
    },
    {
      num: '02',
      title: 'Dashboard Analitik',
      desc: 'Dashboard interaktif untuk visualisasi real-time metrik engagement pelanggan dan performa campaign, dengan strategi pengambilan data serta caching yang efisien.',
      tags: ['Recharts', 'TanStack Query', 'React', 'TypeScript'],
    },
    {
      num: '03',
      title: 'Migrasi Arsitektur Frontend',
      desc: 'Memimpin migrasi dari codebase monolitik Haml & React.js ke arsitektur layanan modular, menghasilkan peningkatan LCP dan kemampuan deployment independen melalui distribusi CDN.',
      tags: ['Vue.js', 'Nginx', 'CDN', 'Bitbucket CI/CD', 'Datadog'],
    },
    {
      num: '04',
      title: 'Konversi ke PWA',
      desc: 'Mengonversi aplikasi web Angular ke Progressive Web App dengan mode offline, service worker, dan push notification berbasis Firebase.',
      tags: ['Angular', 'Firebase', 'PWA', 'Service Workers'],
    },
  ],
  contactSection: {
    id: 'contact',
    label: '04 // Mari Terhubung',
    heading: 'Hubungi Saya',
  },
  contact: {
    blurb:
      'Terbuka untuk peluang baru. Jika Anda memiliki proyek, ide kolaborasi, atau sekadar ingin berdiskusi, jangan ragu untuk menghubungi saya.',
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
    tech: 'Dibangun dengan React',
  },
}

export const PORTFOLIO_CONTENT = {
  en: ENGLISH_CONTENT,
  id: INDONESIAN_CONTENT,
}

export function getPortfolioContent(locale = 'en') {
  return PORTFOLIO_CONTENT[locale] ?? PORTFOLIO_CONTENT.en
}
