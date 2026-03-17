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
    'TypeScript Enthusiast',
  ],
  hero: {
    tag: '// yuk, kita bangun sesuatu yang keren bareng',
    firstName: 'Muhammad',
    lastName: 'Aldi Yusron',
    summary:
      'Frontend engineer dengan 6+ tahun pengalaman membangun aplikasi web yang scalable pakai Vue.js, React (Remix), dan TypeScript. Aktif mengintegrasikan AI ke dalam workflow sehari-hari — memanfaatkan Claude Code untuk mempercepat development dan menjaga kualitas kode tetap tinggi.',
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
        'Bangun frontend CRM pakai Remix dan shadcn/UI, lengkap dengan autentikasi JWT dan validasi Zod.',
        'Kembangkan email builder drag-and-drop kustom di atas email-builder-js untuk mendukung otomasi pesan yang lebih personal ke pelanggan.',
        'Integrasi fitur pembuatan email berbasis AI — pakai LLM untuk bantu pengguna nulis copy yang lebih efektif.',
        'Buat dashboard analitik dengan Recharts dan TanStack Query untuk visualisasi engagement pelanggan dan performa campaign secara real-time.',
        'Kelola integrasi chatbot WhatsApp sebagai bagian dari sistem komunikasi multi-channel.',
      ],
    },
    {
      company: 'Mekari',
      role: 'Software Engineer – Frontend',
      type: 'Penuh waktu',
      location: 'Jakarta, Indonesia',
      date: 'Mar 2021 – Sekarang',
      bullets: [
        'Bangun dan maintain fitur-fitur frontend pakai Vue.js, JavaScript, dan TypeScript — mulai dari integrasi API sampai implementasi spesifikasi UX.',
        'Migrasikan frontend dari codebase monolitik Haml & React.js ke arsitektur modular, hasilnya LCP membaik dan deployment jadi lebih fleksibel lewat CDN.',
        'Kolaborasi sama tim DevOps untuk setup monitoring Datadog — berhasil turunkan error rate sampai 80%.',
        'Standardisasi workflow TDD berbasis AI pakai Claude Code (planning + Agent Parallelization) untuk bikin proses development lebih konsisten dan efisien.',
        'Implementasi CI/CD via Bitbucket Pipelines dan client-side caching dengan Vuex untuk kurangi redundant API call.',
      ],
    },
    {
      company: 'Advotics',
      role: 'Frontend Engineer',
      type: 'Penuh waktu',
      location: 'Jakarta, Indonesia',
      date: 'Apr 2020 – Mar 2021',
      bullets: [
        'Kembangkan aplikasi web berbasis Vue.js dari mockup dan RESTful API.',
        'Buat library komponen reusable yang bikin codebase lebih scalable dan gampang di-maintain.',
      ],
    },
    {
      company: 'Kontrak Hukum',
      role: 'Software Engineer',
      type: 'Penuh waktu',
      location: 'Jakarta, Indonesia',
      date: 'Okt 2018 – Mar 2020',
      bullets: [
        'Bangun dan upgrade frontend dari Angular v4 ke v8.',
        'Ubah aplikasi web jadi Progressive Web App — tambah dukungan offline dan push notification lewat Firebase.',
      ],
    },
    {
      company: 'Nostratech',
      role: 'Software Engineer',
      type: 'Magang',
      location: 'Jakarta, Indonesia',
      date: 'Jun 2017 – Agu 2017',
      bullets: [
        'Ubah desain visual jadi antarmuka yang fungsional pakai HTML, CSS, JavaScript, dan AngularJS.',
        'Diskusi langsung sama klien untuk pahami kebutuhan bisnis dan bantu implementasinya.',
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
      desc: 'CRM frontend lengkap dengan autentikasi aman, email builder drag-and-drop, fitur messaging berbasis AI, dan integrasi WhatsApp untuk komunikasi multi-channel.',
      tags: ['Remix', 'shadcn/UI', 'TypeScript', 'JWT', 'TanStack Query'],
    },
    {
      num: '02',
      title: 'Dashboard Analitik',
      desc: 'Dashboard interaktif untuk visualisasi real-time metrik engagement pelanggan dan performa campaign — dengan data fetching dan caching yang efisien.',
      tags: ['Recharts', 'TanStack Query', 'React', 'TypeScript'],
    },
    {
      num: '03',
      title: 'Migrasi Arsitektur Frontend',
      desc: 'Pimpin migrasi dari codebase monolitik Haml & React.js ke arsitektur modular — hasilnya LCP lebih baik dan deployment jadi lebih fleksibel lewat CDN.',
      tags: ['Vue.js', 'Nginx', 'CDN', 'Bitbucket CI/CD', 'Datadog'],
    },
    {
      num: '04',
      title: 'Konversi ke PWA',
      desc: 'Ubah aplikasi web Angular lama jadi Progressive Web App penuh — dengan mode offline, service worker, dan push notification via Firebase.',
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
      'Lagi buka peluang baru nih. Kalau kamu punya proyek seru, ide kolaborasi, atau sekadar mau ngobrol — inbox saya selalu terbuka.',
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
