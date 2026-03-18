const id = {
  navItems: [
    { id: 'about', label: 'tentang' },
    { id: 'experience', label: 'pengalaman' },
    { id: 'skills', label: 'keahlian' },
    { id: 'projects', label: 'proyek' },
    { id: 'blog', label: 'blog' },
    { id: 'contact', label: 'kontak' },
  ],
  typingStrings: [
    'Frontend Engineer',
    'Spesialis Vue.js',
    'Developer React',
    'TypeScript Craftsman',
  ],
  hero: {
    tag: '// mari bangun sesuatu yang hebat, bersama',
    firstName: 'Muhammad',
    lastName: 'Aldi Yusron',
    summary:
      'Frontend engineer dengan pengalaman lebih dari 6 tahun membangun aplikasi web scalable menggunakan Vue.js, React (Remix), dan TypeScript. Salah satu yang lebih awal mengadopsi pengembangan berbasis AI — memanfaatkan Claude Code untuk mempercepat delivery dan meningkatkan kualitas kode.',
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
        'Merancang frontend CRM menggunakan Remix dan shadcn/UI dengan autentikasi JWT yang aman dan validasi berbasis Zod.',
        'Membangun email builder drag-and-drop kustom dengan mengembangkan email-builder-js, memungkinkan otomasi komunikasi pelanggan yang lebih personal.',
        'Mengintegrasikan alur pembuatan email berbasis AI menggunakan LLM untuk membantu pengguna menyusun komunikasi yang lebih efektif.',
        'Membangun dashboard analitik dengan Recharts dan TanStack Query untuk visualisasi engagement pelanggan dan performa campaign.',
        'Mengelola integrasi chatbot WhatsApp untuk memperkuat kemampuan komunikasi multi-channel.',
      ],
    },
    {
      company: 'Mekari',
      role: 'Software Engineer – Frontend',
      type: 'Penuh waktu',
      location: 'Jakarta, Indonesia',
      date: 'Mar 2021 – Sekarang',
      bullets: [
        'Membangun dan memelihara fitur frontend menggunakan Vue.js, JavaScript, dan TypeScript, selaras dengan RESTful API dan spesifikasi desain UX.',
        'Memigrasikan frontend dari codebase monolitik Haml & React.js ke layanan modular, meningkatkan skalabilitas dan LCP melalui optimasi CDN.',
        'Berkolaborasi dengan tim DevOps untuk menyiapkan monitoring Datadog, menurunkan error rate hingga 80%.',
        'Menstandarkan workflow TDD berbasis AI menggunakan Claude Code — planning dan Agent Parallelization — untuk meningkatkan konsistensi dan menekan biaya operasional.',
        'Mengimplementasikan CI/CD via Bitbucket Pipelines dan client-side caching dengan Vuex untuk mengurangi API call yang redundan.',
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
        'Membangun library komponen reusable untuk pengembangan yang scalable dan mudah dipelihara.',
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
        'Mengonversi aplikasi web menjadi Progressive Web App dengan dukungan offline dan push notification via Firebase.',
      ],
    },
    {
      company: 'Nostratech',
      role: 'Software Engineer',
      type: 'Magang',
      location: 'Jakarta, Indonesia',
      date: 'Jun 2017 – Agu 2017',
      bullets: [
        'Menerjemahkan desain visual menjadi antarmuka fungsional menggunakan HTML, CSS, JavaScript, dan AngularJS.',
        'Berkolaborasi dengan klien untuk mendefinisikan kebutuhan bisnis dan mendukung implementasinya.',
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
      desc: 'Frontend CRM lengkap dengan autentikasi aman, email builder drag-and-drop, pesan berbasis AI, dan pusat komunikasi multi-channel termasuk integrasi WhatsApp.',
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
      desc: 'Memimpin migrasi berdampak tinggi dari codebase monolitik Haml & React.js ke arsitektur layanan modular, meningkatkan LCP dan memungkinkan deployment independen melalui distribusi CDN.',
      tags: ['Vue.js', 'Nginx', 'CDN', 'Bitbucket CI/CD', 'Datadog'],
    },
    {
      num: '04',
      title: 'Konversi ke PWA',
      desc: 'Mengonversi aplikasi web Angular lama menjadi Progressive Web Application penuh dengan kemampuan offline, service worker, dan push notification berbasis Firebase.',
      tags: ['Angular', 'Firebase', 'PWA', 'Service Workers'],
    },
  ],
  blogSection: {
    id: 'blog',
    label: '04 // Tulisan',
    heading: 'Blog',
    cta: 'Baca di Medium ↗',
    emptyState: 'Artikel segera hadir.',
  },
  contactSection: {
    id: 'contact',
    label: '05 // Mari Terhubung',
    heading: 'Hubungi Saya',
  },
  contact: {
    blurb:
      'Terbuka untuk peluang baru. Punya proyek, ide kolaborasi, atau sekadar ingin menyapa — inbox saya selalu terbuka.',
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

export default id
