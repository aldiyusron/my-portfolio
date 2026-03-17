# I Built My Portfolio in a Single Day — Here's Every Decision I Made Along the Way

_A frontend engineer's honest account of building aldiyusron.com from scratch, with Claude Code as a collaborator._

---

As a frontend engineer with over six years of experience, I've built dozens of web apps for other people. Yet somehow, my own portfolio always ended up either embarrassingly outdated or nonexistent. The usual story.

I finally sat down and built it properly. Start to finish, in one day. This is the story of how I did it — every architectural decision, every iteration, and a few things I learned along the way.

---

## The Setup: Constraints I Gave Myself

Before writing a single line, I made a few deliberate choices:

**React 19 + Vite 8. No more, no less.**

No Next.js. No Tailwind. No component library. I wanted to own every pixel and not spend my energy wrestling a framework. For a portfolio — a mostly static, single-page document — this felt right. Vite's dev server is instant, the build output is tiny, and React 19 gave me a clean slate with no legacy baggage.

**One CSS file, one naming convention.**

I picked a `pf-` prefix for all classes (portfolio) and committed to it. No CSS modules, no styled-components. Just a single `Portfolio.css` file. Constraints are liberating.

**Content and layout are separate concerns from day one.**

Every string — hero copy, job history, skills, project descriptions — lives in a `data.js` file. Components just render what they're given. This decision paid off enormously later (more on that in the bilingual section).

---

## Act 1: The Monolith That Worked

The initial commit tells an honest story: one file, `Portfolio.jsx`, 893 lines. Everything in one place — hero, experience timeline, skills grid, projects, contact. No components, no abstraction.

This was intentional. I wanted to see the whole thing on screen before deciding how to split it. Premature decomposition is a real time sink. The monolith _worked_. It rendered. It looked right. That's the goal of a first commit.

The tech decisions baked into that first version:

- **Typewriter effect** on the hero title, cycling through `Frontend Engineer`, `Vue.js Specialist`, `React Developer`, `TypeScript Craftsman` — a small touch that makes the hero feel alive
- **A timeline layout** for work history, because experience is sequential and a table doesn't convey that
- **Stats row** in the hero: `6+ Years`, `80% Error Rate ↓`, `5 Companies` — concrete numbers over vague claims
- **A `pf-` CSS design system** with CSS custom properties for color tokens (`--accent`, `--surface`, `--text`)

---

## Act 2: The Details That Matter

With a working skeleton, the next round was polish.

### Favicon and branding

The default Vite favicon is a triangle. Mine is now a custom SVG — a minimalist "M.A.Y\_" mark using the site's accent color. A small thing, but it's what you see in every browser tab. Worth 20 minutes.

I also updated the page `<title>` from the Vite default to my full name and role.

### Spacing

Spacing is the silent language of design. The initial values were too generous — 120px section padding on desktop, 180px hero padding. Everything felt like it was shouting "look at the space between us." I brought it down to 80px sections, 140px hero. The content breathed without gasping.

### Hero copy

The first version of my hero tagline read something functional but flat. I iterated on it twice — first for clarity, then for warmth. The final version:

> _// let's build something great together_

That leading `//` is a nod to code comments. It sets tone: this is a developer's site, written by someone who thinks in code.

The summary below it went through similar rounds. The original was fine. The final version is specific:

> _Experienced frontend engineer specializing in scalable web applications using Vue.js, React (Remix), and TypeScript, with over 6 years in the field. An early advocate of AI-powered development — using Claude Code to accelerate delivery and elevate code quality._

The last sentence matters to me. It's not just credential signaling — it accurately describes how I work now.

---

## Act 3: The Refactor That Had to Happen

At some point, `Portfolio.jsx` needed to breathe. The refactor turned it into a proper component tree:

```
src/
  Portfolio.jsx           ← orchestrator only
  portfolio/
    components/
      HeroSection.jsx
      ExperienceSection.jsx
      SkillsSection.jsx
      ProjectsSection.jsx
      BlogSection.jsx
      ContactSection.jsx
      PortfolioNav.jsx
      PortfolioFooter.jsx
      SectionHeading.jsx
    hooks/
      useTypewriterTitle.js
      useMediumPosts.js
    data.js
    Portfolio.css
```

Each component does one thing. The `Portfolio.jsx` orchestrator just imports content from `data.js` and passes it down as props. This structure made the next step — bilingual support — almost trivial.

---

## Act 4: Going Bilingual (EN / ID)

Here's the thing about living and working in Indonesia while also collaborating with international teams: you want your portfolio to be readable by both audiences. Indonesian hiring managers and international clients have different expectations. I wanted to serve both without maintaining two separate sites.

The solution was clean because of the content/layout separation I'd built in from the start.

`data.js` exports two content objects:

```js
const ENGLISH_CONTENT = { hero: { ... }, experiences: [ ... ], ... }
const INDONESIAN_CONTENT = { hero: { ... }, experiences: [ ... ], ... }

export const PORTFOLIO_CONTENT = { en: ENGLISH_CONTENT, id: INDONESIAN_CONTENT }
```

A language toggle in the nav switches the locale. Every component re-renders with the new content. Zero duplication of layout logic.

The Indonesian copy went through three iterations to get right. The first pass was technically correct but stiff — it read like a direct translation. The second pass introduced natural connectors and active voice. The third pass matched the tone and confidence of the English version exactly. Nuance matters. "Frontend engineer berpengalaman" hits differently than "engineer yang berpengalaman di bidang frontend."

---

## Act 5: The Custom Domain

Getting `aldiyusron.com` live on Vercel took maybe five minutes. The only surprise: I initially added a `CNAME` file to the `public/` directory, which is the GitHub Pages way of doing custom domains. Vercel doesn't need it — domain configuration lives entirely in Vercel's dashboard. Removed it in the next commit.

I also swapped my contact email from a Gmail address to `hello@aldiyusron.com`. Small thing, professional signal.

---

## Act 6: The Blog Section and a Fun CORS Problem

I wanted a Blog section that would show my actual Medium articles without any manual maintenance. Every time I publish on Medium, it should appear on my portfolio automatically.

Medium provides an RSS feed at `https://medium.com/feed/@aldiyusron`. The problem: browsers block direct cross-origin requests to Medium's domain (CORS).

The solution: **rss2json.com**, a free API that takes any RSS URL and returns JSON. No API key. No backend. Just:

```js
const RSS2JSON_URL = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent("https://medium.com/feed/@aldiyusron")}`;
```

I wrapped this in a custom hook:

```js
export function useMediumPosts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(RSS2JSON_URL)
      .then((res) => res.json())
      .then((data) => {
        if (data.status !== "ok") throw new Error("Feed unavailable");
        setPosts(data.items.map(transformPost));
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return { posts, loading, error };
}
```

While loading, the Blog section shows shimmer skeleton cards — the same pulsing animation pattern you see in well-designed loading states everywhere. On error, it falls back to "Articles coming soon." Once the data arrives, live posts render automatically.

The `transformPost` function strips HTML from the description field (Medium's RSS includes full article HTML), truncates to 200 characters, and pulls out the first three category tags.

No more hardcoded posts in `data.js`. Publish on Medium, it shows up on the portfolio within ~30 minutes (rss2json caches feeds).

---

## What I'd Do Differently

**Start with components, not a monolith.** I knew I'd eventually want the component structure I ended up with — I should have built it that way from the start. The refactor was painless, but it was still extra work.

**Design tokens first.** I got lucky that my CSS custom properties were consistent enough to refactor cleanly. In a larger project, not establishing the token system upfront would have been costly.

**Write the Indonesian copy last.** I iterated on it multiple times because I was writing it in parallel with the English version. Finalizing the English voice first, then translating + adapting, would have been more efficient.

---

## The Stack, Summarized

| Concern    | Choice                           | Why                                 |
| ---------- | -------------------------------- | ----------------------------------- |
| Framework  | React 19                         | Modern, no overhead                 |
| Build tool | Vite 8                           | Instant HMR, tiny output            |
| Styling    | Plain CSS + custom properties    | Full control, no dependencies       |
| Content    | `data.js` locale map             | EN/ID without duplicating layout    |
| Blog data  | rss2json + `useMediumPosts` hook | Zero-maintenance Medium sync        |
| Hosting    | Vercel                           | Free, fast, custom domain in 5 min  |
| AI tooling | Claude Code                      | Architecture, copy, iteration speed |

---

## One More Thing

This article is the first post showing up in the Blog section of the portfolio you just read about.

There's something satisfying about a system that documents itself.

If you want to look at the source code or just say hi, find me at [aldiyusron.com](https://aldiyusron.com) or [hello@aldiyusron.com](mailto:hello@aldiyusron.com).

---

_Tags: React, Vite, Frontend, Portfolio, Claude Code_
