import { useState, useEffect, useRef } from "react";

// ─── Data ──────────────────────────────────────────────────────────────────

const TYPING_STRINGS = [
  "Frontend Engineer",
  "Vue.js Specialist",
  "React Developer",
  "TypeScript Craftsman",
];

const experiences = [
  {
    company: "CubiqCloud",
    role: "Frontend Engineer",
    type: "Freelance",
    location: "Remote",
    date: "Jul 2025 – Present",
    bullets: [
      "Architected a high-utility CRM frontend using Remix and shadcn/UI with secure JWT authentication and Zod-based validation.",
      "Engineered a custom drag-and-drop email builder by extending email-builder-js, enabling personalized customer automation.",
      "Integrated AI-powered email generation workflows, leveraging LLMs to assist users in drafting high-conversion communication.",
      "Built a Data Analytics Dashboard with Recharts and TanStack Query for customer engagement and campaign performance visualization.",
      "Managed WhatsApp chatbot integration to enhance multi-channel communication capabilities.",
    ],
  },
  {
    company: "Mekari",
    role: "Software Engineer – Frontend",
    type: "Full-time",
    location: "Jakarta, Indonesia",
    date: "Mar 2021 – Present",
    bullets: [
      "Built and maintained frontend features using Vue.js, JavaScript, and TypeScript aligned with RESTful APIs and UX design specs.",
      "Migrated frontend from a monolithic Haml & React.js codebase to a modular service, improving scalability and LCP via CDN optimization.",
      "Collaborated with DevOps to set up Datadog monitoring, reducing error rates by 80%.",
      "Standardized an AI-native TDD workflow using Claude Code's planning & Agent Parallelization, improving consistency and cutting operational costs.",
      "Implemented CI/CD via Bitbucket Pipelines and client-side caching with Vuex to reduce redundant API calls.",
    ],
  },
  {
    company: "Advotics",
    role: "Frontend Engineer",
    type: "Full-time",
    location: "Jakarta, Indonesia",
    date: "Apr 2020 – Mar 2021",
    bullets: [
      "Developed web applications with Vue.js based on mockups and RESTful APIs.",
      "Created reusable component libraries for scalable and maintainable development.",
    ],
  },
  {
    company: "Kontrak Hukum",
    role: "Software Engineer",
    type: "Full-time",
    location: "Jakarta, Indonesia",
    date: "Oct 2018 – Mar 2020",
    bullets: [
      "Built and upgraded frontend from Angular v4 to v8.",
      "Converted the web application to a Progressive Web App with offline support and push notifications via Firebase.",
    ],
  },
  {
    company: "Nostratech",
    role: "Software Engineer",
    type: "Internship",
    location: "Jakarta, Indonesia",
    date: "Jun 2017 – Aug 2017",
    bullets: [
      "Translated visual designs into functional interfaces using HTML, CSS, JavaScript, and AngularJS.",
      "Collaborated with clients to define business requirements and supported implementation.",
    ],
  },
];

const skillGroups = [
  {
    title: "Languages",
    skills: ["JavaScript", "TypeScript", "HTML", "CSS", "SCSS", "Haml"],
  },
  {
    title: "Frameworks & UI",
    skills: ["Vue.js", "React", "Remix", "Angular", "Tailwind CSS", "shadcn/UI"],
  },
  {
    title: "State & Data",
    skills: ["Vuex", "Zustand", "TanStack Query", "Zod", "JWT", "REST/JSON"],
  },
  {
    title: "Testing",
    skills: ["Jest", "Vitest", "Vue Test Utils", "RSpec"],
  },
  {
    title: "DevOps & Tooling",
    skills: ["Git", "Bitbucket Pipelines", "Nginx", "CloudFront", "Datadog", "Figma"],
  },
  {
    title: "AI & Emerging",
    skills: ["Claude Code", "GitHub Copilot", "Vibe Coding", "Agent Parallelization"],
  },
];

const projects = [
  {
    num: "01",
    title: "CRM Platform",
    desc: "Full-featured CRM frontend featuring secure auth, a drag-and-drop email builder, AI-generated messaging, and a multi-channel communication hub including WhatsApp integration.",
    tags: ["Remix", "shadcn/UI", "TypeScript", "JWT", "TanStack Query"],
  },
  {
    num: "02",
    title: "Data Analytics Dashboard",
    desc: "Interactive dashboard for real-time visualization of customer engagement metrics and campaign performance, with efficient data fetching and caching strategies.",
    tags: ["Recharts", "TanStack Query", "React", "TypeScript"],
  },
  {
    num: "03",
    title: "Frontend Architecture Migration",
    desc: "Led a high-impact migration from a monolithic Haml & React.js codebase to a modular service architecture, boosting LCP and enabling independent deployment via CDN distribution.",
    tags: ["Vue.js", "Nginx", "CDN", "Bitbucket CI/CD", "Datadog"],
  },
  {
    num: "04",
    title: "PWA Conversion",
    desc: "Converted a legacy Angular web app into a full Progressive Web Application with offline capabilities, service workers, and Firebase-powered push notifications.",
    tags: ["Angular", "Firebase", "PWA", "Service Workers"],
  },
];

// ─── Component ─────────────────────────────────────────────────────────────

export default function Portfolio() {
  const [displayText, setDisplayText] = useState("");
  const [cursorOn, setCursorOn] = useState(true);
  const [strIdx, setStrIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const timeoutRef = useRef(null);

  // Typewriter effect
  useEffect(() => {
    const current = TYPING_STRINGS[strIdx];

    const tick = () => {
      setDisplayText((prev) => {
        if (!deleting) {
          if (prev.length < current.length) {
            timeoutRef.current = setTimeout(tick, 85);
            return current.slice(0, prev.length + 1);
          } else {
            timeoutRef.current = setTimeout(() => setDeleting(true), 2200);
            return prev;
          }
        } else {
          if (prev.length > 0) {
            timeoutRef.current = setTimeout(tick, 45);
            return current.slice(0, prev.length - 1);
          } else {
            setDeleting(false);
            setStrIdx((s) => (s + 1) % TYPING_STRINGS.length);
            return prev;
          }
        }
      });
    };

    timeoutRef.current = setTimeout(tick, 120);
    return () => clearTimeout(timeoutRef.current);
  }, [strIdx, deleting]);

  // Cursor blink
  useEffect(() => {
    const id = setInterval(() => setCursorOn((v) => !v), 530);
    return () => clearInterval(id);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <style>{CSS}</style>
      <div className="pf">
        {/* ── Navigation ── */}
        <nav className="pf-nav">
          <div className="pf-nav__logo">M.A.Y_</div>
          <div className="pf-nav__links">
            {["about", "experience", "skills", "projects", "contact"].map((s) => (
              <a
                key={s}
                href={`#${s}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(s);
                }}
              >
                {s}
              </a>
            ))}
          </div>
        </nav>

        {/* ── Hero / About ── */}
        <section id="about" className="pf-hero">
          <div className="pf-hero__tag">// available for new opportunities</div>
          <h1 className="pf-hero__name">
            Muhammad<br />Aldi Yusron
          </h1>
          <div className="pf-hero__title">
            <span>{displayText}</span>
            <span className={`pf-cursor ${cursorOn ? "pf-cursor--on" : ""}`} />
          </div>
          <p className="pf-hero__summary">
            Frontend engineer with 6+ years of experience building scalable web applications
            with Vue.js, React (Remix), and TypeScript. Early adopter of AI-driven development
            workflows — leveraging Claude Code to maximize velocity and architectural quality.
          </p>
          <div className="pf-hero__cta">
            <a href="mailto:aldiyusron.work@gmail.com" className="pf-btn pf-btn--primary">
              Get in Touch
            </a>
            <a
              href="#experience"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("experience");
              }}
              className="pf-btn pf-btn--secondary"
            >
              View Experience
            </a>
          </div>
          <div className="pf-hero__stats">
            <div className="pf-stat">
              <span className="pf-stat__num">6+</span>
              <span className="pf-stat__label">Years Exp.</span>
            </div>
            <div className="pf-stat__divider" />
            <div className="pf-stat">
              <span className="pf-stat__num">80%</span>
              <span className="pf-stat__label">Error Rate ↓</span>
            </div>
            <div className="pf-stat__divider" />
            <div className="pf-stat">
              <span className="pf-stat__num">5</span>
              <span className="pf-stat__label">Companies</span>
            </div>
          </div>
        </section>

        {/* ── Experience ── */}
        <section id="experience" className="pf-section">
          <div className="pf-label">01 // Work History</div>
          <h2 className="pf-heading">Experience</h2>
          <div className="pf-timeline">
            {experiences.map((exp, i) => (
              <div className="pf-timeline__item" key={i}>
                <div className="pf-exp__header">
                  <div className="pf-exp__top">
                    <span className="pf-exp__company">{exp.company}</span>
                    <span className="pf-exp__date">{exp.date}</span>
                  </div>
                  <div className="pf-exp__meta">
                    <span className="pf-exp__role">{exp.role}</span>
                    <span className="pf-exp__badge">{exp.type}</span>
                    <span className="pf-exp__location">{exp.location}</span>
                  </div>
                </div>
                <ul className="pf-exp__bullets">
                  {exp.bullets.map((b, j) => (
                    <li key={j}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ── Skills ── */}
        <section id="skills" className="pf-section">
          <div className="pf-label">02 // Technical Arsenal</div>
          <h2 className="pf-heading">Skills</h2>
          <div className="pf-skills">
            {skillGroups.map((g, i) => (
              <div className="pf-skill-group" key={i}>
                <div className="pf-skill-group__title">{g.title}</div>
                <div className="pf-skill-group__tags">
                  {g.skills.map((s, j) => (
                    <span className="pf-tag" key={j}>{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Projects ── */}
        <section id="projects" className="pf-section">
          <div className="pf-label">03 // Selected Work</div>
          <h2 className="pf-heading">Projects</h2>
          <div className="pf-projects">
            {projects.map((p, i) => (
              <div className="pf-project" key={i}>
                <div className="pf-project__num">{p.num}</div>
                <div className="pf-project__body">
                  <h3 className="pf-project__title">{p.title}</h3>
                  <p className="pf-project__desc">{p.desc}</p>
                  <div className="pf-project__tags">
                    {p.tags.map((t, j) => (
                      <span className="pf-tag pf-tag--dim" key={j}>{t}</span>
                    ))}
                  </div>
                </div>
                <div className="pf-project__line" />
              </div>
            ))}
          </div>
        </section>

        {/* ── Contact ── */}
        <section id="contact" className="pf-section pf-contact">
          <div className="pf-label pf-label--center">04 // Let's Connect</div>
          <h2 className="pf-heading">Get In Touch</h2>
          <p className="pf-contact__blurb">
            I'm open to new opportunities. Whether you have a project in mind
            or just want to say hello — my inbox is always open.
          </p>
          <a href="mailto:aldiyusron.work@gmail.com" className="pf-contact__email">
            aldiyusron.work@gmail.com ↗
          </a>
          <div className="pf-contact__links">
            <a
              href="https://linkedin.com/in/aldiyusron"
              target="_blank"
              rel="noopener noreferrer"
              className="pf-btn pf-btn--secondary"
            >
              LinkedIn ↗
            </a>
            <a href="tel:+6287885885278" className="pf-btn pf-btn--secondary">
              +62 878-858-85278
            </a>
          </div>
        </section>

        {/* ── Footer ── */}
        <footer className="pf-footer">
          <span>© 2026 Muhammad Aldi Yusron</span>
          <span className="pf-footer__sep">·</span>
          <span>Jakarta, Indonesia</span>
          <span className="pf-footer__sep">·</span>
          <span>Built with React</span>
        </footer>
      </div>
    </>
  );
}

// ─── Styles ────────────────────────────────────────────────────────────────

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Lora:ital,wght@0,400;0,500;1,400&family=DM+Mono:ital,wght@0,300;0,400;0,500;1,300&display=swap');

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

:root {
  --bg:          #f2f1ee;
  --surface:     #faf9f7;
  --surface2:    #eceae5;
  --accent:      #b85c2a;
  --accent-glow: rgba(184, 92, 42, 0.15);
  --accent-dim:  rgba(184, 92, 42, 0.08);
  --text:        #1e1c19;
  --muted:       #7a7469;
  --border:      rgba(184, 92, 42, 0.22);
  --border-sub:  rgba(0, 0, 0, 0.08);
  --shadow:      rgba(0, 0, 0, 0.06);
  --mono:        'DM Mono', monospace;
  --display:     'Cormorant Garamond', Georgia, serif;
  --body:        'Lora', Georgia, serif;
  --max:         1080px;
  --pad:         64px;
}

html { scroll-behavior: smooth; }

body {
  background: var(--bg);
  color: var(--text);
  font-family: var(--body);
  -webkit-font-smoothing: antialiased;
}

/* Scrollbar */
::-webkit-scrollbar { width: 3px; }
::-webkit-scrollbar-track { background: var(--bg); }
::-webkit-scrollbar-thumb { background: var(--border); border-radius: 2px; }

/* ── Base layout ── */
.pf {
  min-height: 100vh;
  background: var(--bg);
  background-image:
    radial-gradient(ellipse 65% 50% at 80% 10%, rgba(184,92,42,0.06) 0%, transparent 60%),
    radial-gradient(ellipse 50% 40% at 10% 80%, rgba(184,92,42,0.04) 0%, transparent 55%);
}

/* ── Nav ── */
.pf-nav {
  position: fixed; top: 0; left: 0; right: 0; z-index: 100;
  display: flex; align-items: center; justify-content: space-between;
  padding: 22px var(--pad);
  backdrop-filter: blur(20px) saturate(1.4);
  -webkit-backdrop-filter: blur(20px) saturate(1.4);
  border-bottom: 1px solid var(--border-sub);
  background: rgba(242, 241, 238, 0.88);
}
.pf-nav__logo {
  font-family: var(--mono);
  font-size: 15px;
  font-weight: 700;
  color: var(--accent);
  letter-spacing: 0.06em;
}
.pf-nav__links { display: flex; gap: 36px; }
.pf-nav__links a {
  font-family: var(--mono);
  font-size: 11px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--muted);
  text-decoration: none;
  transition: color 0.2s;
  position: relative;
}
.pf-nav__links a::after {
  content: '';
  position: absolute; bottom: -4px; left: 0; right: 0;
  height: 1px;
  background: var(--accent);
  transform: scaleX(0);
  transition: transform 0.2s;
}
.pf-nav__links a:hover { color: var(--accent); }
.pf-nav__links a:hover::after { transform: scaleX(1); }

/* ── Section base ── */
.pf-section {
  max-width: var(--max);
  margin: 0 auto;
  padding: 56px var(--pad);
}

/* ── Section labels / headings ── */
.pf-label {
  font-family: var(--mono);
  font-size: 11px;
  color: var(--accent);
  letter-spacing: 0.2em;
  text-transform: uppercase;
  margin-bottom: 14px;
  display: flex; align-items: center; gap: 14px;
}
.pf-label::after {
  content: '';
  height: 1px;
  width: 48px;
  background: var(--border);
}
.pf-label--center { justify-content: center; }
.pf-label--center::after { display: none; }

.pf-heading {
  font-family: var(--display);
  font-size: clamp(38px, 5.5vw, 58px);
  font-weight: 700;
  color: var(--text);
  letter-spacing: -0.01em;
  margin-bottom: 40px;
}

/* ── Hero ── */
.pf-hero {
  max-width: var(--max);
  margin: 0 auto;
  padding: 120px var(--pad) 56px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.pf-hero__tag {
  display: inline-flex; align-items: center; gap: 10px;
  font-family: var(--mono);
  font-size: 12px;
  color: var(--accent);
  letter-spacing: 0.12em;
  margin-bottom: 28px;
  opacity: 0;
  animation: fadeUp 0.6s ease 0.1s forwards;
}
.pf-hero__tag::before {
  content: ''; display: block; width: 28px; height: 1px;
  background: var(--accent);
}
.pf-hero__name {
  font-family: var(--display);
  font-size: clamp(58px, 10vw, 110px);
  font-weight: 700;
  line-height: 0.92;
  letter-spacing: -0.01em;
  color: var(--text);
  margin-bottom: 20px;
  opacity: 0;
  animation: fadeUp 0.6s ease 0.2s forwards;
}
.pf-hero__title {
  font-family: var(--mono);
  font-size: clamp(18px, 2.8vw, 26px);
  color: var(--accent);
  margin-bottom: 36px;
  min-height: 36px;
  display: flex; align-items: center; gap: 0;
  opacity: 0;
  animation: fadeUp 0.6s ease 0.35s forwards;
}
.pf-cursor {
  display: inline-block;
  width: 2px;
  height: 1.1em;
  background: var(--accent);
  margin-left: 3px;
  vertical-align: middle;
  opacity: 0;
  transition: opacity 0.1s;
}
.pf-cursor--on { opacity: 1; }

.pf-hero__summary {
  max-width: 580px;
  font-size: 16px;
  line-height: 1.85;
  color: var(--muted);
  margin-bottom: 48px;
  font-weight: 300;
  opacity: 0;
  animation: fadeUp 0.6s ease 0.45s forwards;
}
.pf-hero__cta {
  display: flex; gap: 16px; flex-wrap: wrap;
  margin-bottom: 48px;
  opacity: 0;
  animation: fadeUp 0.6s ease 0.55s forwards;
}

/* ── Buttons ── */
.pf-btn {
  font-family: var(--mono);
  font-size: 12px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  text-decoration: none;
  padding: 13px 30px;
  display: inline-block;
  cursor: pointer;
  transition: all 0.22s;
  border-radius: 2px;
}
.pf-btn--primary {
  background: var(--accent);
  color: #fff;
  font-weight: 700;
  box-shadow: 0 2px 12px rgba(184,92,42,0.2);
}
.pf-btn--primary:hover {
  background: #8f4320;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(184,92,42,0.28);
}
.pf-btn--secondary {
  background: transparent;
  color: var(--text);
  border: 1px solid var(--border-sub);
}
.pf-btn--secondary:hover {
  border-color: var(--accent);
  color: var(--accent);
  transform: translateY(-2px);
  background: var(--accent-dim);
}

/* ── Stats ── */
.pf-hero__stats {
  display: flex; align-items: center; gap: 40px;
  opacity: 0;
  animation: fadeUp 0.6s ease 0.65s forwards;
}
.pf-stat { display: flex; flex-direction: column; gap: 4px; }
.pf-stat__num {
  font-family: var(--display);
  font-size: 32px;
  font-weight: 800;
  color: var(--accent);
  line-height: 1;
}
.pf-stat__label {
  font-family: var(--mono);
  font-size: 11px;
  color: var(--muted);
  letter-spacing: 0.08em;
  text-transform: uppercase;
}
.pf-stat__divider {
  width: 1px; height: 48px;
  background: var(--border-sub);
}

/* ── Experience Timeline ── */
.pf-timeline { position: relative; padding-left: 2px; }
.pf-timeline::before {
  content: '';
  position: absolute; left: 0; top: 0; bottom: 0;
  width: 1px;
  background: linear-gradient(to bottom, var(--border), transparent);
}
.pf-timeline__item {
  position: relative;
  padding-left: 36px;
  margin-bottom: 40px;
}
.pf-timeline__item:last-child {
  margin-bottom: 0;
}
.pf-timeline__item::before {
  content: '';
  position: absolute; left: -4.5px; top: 10px;
  width: 10px; height: 10px;
  background: var(--accent);
  border-radius: 50%;
  box-shadow: 0 0 0 3px var(--bg), 0 0 0 5px var(--border);
}
.pf-exp__header { margin-bottom: 18px; }
.pf-exp__top {
  display: flex; align-items: baseline;
  justify-content: space-between; gap: 16px;
  margin-bottom: 8px;
  flex-wrap: wrap;
}
.pf-exp__company {
  font-family: var(--display);
  font-size: 22px;
  font-weight: 600;
  font-family: var(--mono);
  font-size: 12px;
  color: var(--muted);
  white-space: nowrap;
}
.pf-exp__meta {
  display: flex; align-items: center; gap: 12px; flex-wrap: wrap;
}
.pf-exp__role {
  font-family: var(--mono);
  font-size: 13px;
  color: var(--accent);
}
.pf-exp__badge {
  font-family: var(--mono);
  font-size: 10px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  padding: 2px 10px;
  border: 1px solid var(--border);
  color: var(--muted);
  border-radius: 2px;
}
.pf-exp__location {
  font-family: var(--mono);
  font-size: 12px;
  color: var(--muted);
}
.pf-exp__bullets {
  list-style: none;
  display: flex; flex-direction: column; gap: 10px;
}
.pf-exp__bullets li {
  font-size: 14px;
  line-height: 1.75;
  color: var(--muted);
  padding-left: 18px;
  position: relative;
}
.pf-exp__bullets li::before {
  content: '▸';
  position: absolute; left: 0; top: 4px;
  color: var(--accent);
  font-size: 9px;
}

/* ── Skills ── */
.pf-skills {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
  gap: 16px;
}
.pf-skill-group {
  background: var(--surface);
  border: 1px solid var(--border-sub);
  padding: 24px 28px;
  border-radius: 6px;
  transition: border-color 0.25s, box-shadow 0.25s, transform 0.25s;
  position: relative;
  overflow: hidden;
  box-shadow: 0 1px 4px var(--shadow);
}
.pf-skill-group::before {
  content: '';
  position: absolute; top: 0; left: 0; right: 0; height: 2px;
  background: linear-gradient(to right, var(--accent), rgba(184,92,42,0.2));
  opacity: 0;
  transition: opacity 0.25s;
}
.pf-skill-group:hover {
  border-color: rgba(184,92,42,0.2);
  box-shadow: 0 4px 20px rgba(184,92,42,0.08);
  transform: translateY(-2px);
}
.pf-skill-group:hover::before { opacity: 1; }
.pf-skill-group__title {
  font-family: var(--mono);
  font-size: 11px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 16px;
}
.pf-skill-group__tags { display: flex; flex-wrap: wrap; gap: 8px; }

/* ── Tags ── */
.pf-tag {
  font-family: var(--mono);
  font-size: 12px;
  padding: 4px 12px;
  background: rgba(184, 92, 42, 0.07);
  border: 1px solid rgba(184, 92, 42, 0.18);
  color: var(--text);
  letter-spacing: 0.04em;
  border-radius: 2px;
  transition: background 0.2s, color 0.2s;
}
.pf-tag:hover {
  background: rgba(184, 92, 42, 0.14);
  color: var(--accent);
}
.pf-tag--dim {
  background: rgba(0,0,0,0.03);
  border-color: var(--border-sub);
  color: var(--muted);
}

/* ── Projects ── */
.pf-projects {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(440px, 1fr));
  gap: 16px;
}
.pf-project {
  position: relative;
  background: var(--surface);
  border: 1px solid var(--border-sub);
  border-radius: 6px;
  padding: 36px 32px;
  display: grid;
  grid-template-columns: 52px 1fr;
  gap: 24px;
  align-items: start;
  transition: border-color 0.25s, box-shadow 0.25s, transform 0.25s;
  overflow: hidden;
  box-shadow: 0 1px 4px var(--shadow);
}
.pf-project:hover {
  border-color: rgba(184,92,42,0.25);
  box-shadow: 0 6px 28px rgba(184,92,42,0.1);
  transform: translateY(-3px);
}
.pf-project__num {
  font-family: var(--mono);
  font-size: 28px;
  font-weight: 700;
  color: rgba(184,92,42,0.18);
  line-height: 1;
  letter-spacing: -0.02em;
  padding-top: 4px;
  transition: color 0.25s;
}
.pf-project:hover .pf-project__num { color: var(--accent); }
.pf-project__title {
  font-family: var(--display);
  font-size: 20px;
  font-weight: 700;
  color: var(--text);
  margin-bottom: 12px;
}
.pf-project__desc {
  font-size: 14px;
  line-height: 1.75;
  color: var(--muted);
  margin-bottom: 20px;
}
.pf-project__tags { display: flex; flex-wrap: wrap; gap: 8px; }
.pf-project__line {
  position: absolute; top: 0; left: 0; bottom: 0; width: 3px;
  background: var(--accent);
  border-radius: 3px 0 0 3px;
  transform: scaleY(0);
  transform-origin: top;
  transition: transform 0.35s ease;
}
.pf-project:hover .pf-project__line { transform: scaleY(1); }

/* ── Contact ── */
.pf-contact { text-align: center; }
.pf-contact .pf-heading { margin-bottom: 20px; }
.pf-contact__blurb {
  max-width: 480px;
  margin: 0 auto 40px;
  font-size: 16px;
  line-height: 1.8;
  color: var(--muted);
  font-weight: 300;
}
.pf-contact__email {
  display: inline-block;
  font-family: var(--mono);
  font-size: clamp(14px, 2.2vw, 20px);
  color: var(--accent);
  text-decoration: none;
  letter-spacing: 0.04em;
  margin-bottom: 48px;
  position: relative;
  transition: opacity 0.2s;
}
.pf-contact__email::after {
  content: '';
  position: absolute;
  bottom: -3px; left: 0; right: 0;
  height: 1px;
  background: var(--accent);
  transform: scaleX(0.3);
  transform-origin: left;
  transition: transform 0.3s ease;
}
.pf-contact__email:hover::after { transform: scaleX(1); }
.pf-contact__links {
  display: flex; gap: 16px; justify-content: center; flex-wrap: wrap;
}

/* ── Footer ── */
.pf-footer {
  text-align: center;
  padding: 32px var(--pad);
  border-top: 1px solid var(--border-sub);
  font-family: var(--mono);
  font-size: 12px;
  color: var(--muted);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}
.pf-footer__sep { margin: 0 14px; color: var(--border-sub); }

/* ── Animations ── */
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
}

/* ── Responsive ── */
@media (max-width: 768px) {
  :root { --pad: 24px; }
  .pf-nav__links { display: none; }
  .pf-hero { padding: 100px var(--pad) 48px; }
  .pf-section { padding: 48px var(--pad); }
  .pf-exp__top { flex-direction: column; gap: 4px; }
  .pf-hero__stats { gap: 24px; }
  .pf-stat__num { font-size: 26px; }
  .pf-projects { grid-template-columns: 1fr; }
  .pf-project { grid-template-columns: 40px 1fr; gap: 16px; padding: 24px 20px; }
}

@media (max-width: 480px) {
  .pf-skills { grid-template-columns: 1fr; }
  .pf-hero__cta { flex-direction: column; }
  .pf-btn { text-align: center; }
}
`;
