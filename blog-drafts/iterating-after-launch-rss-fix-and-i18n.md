# Iterating in Public: What Breaks After You Ship, and How You Fix It

_The portfolio was live. The Medium section was empty. Then I added i18n. This is the unglamorous part no one writes about._

---

The first post in this series covered building the portfolio from scratch in a day. This one is about what happens next.

You ship. You share the link. You feel good about it. And then you look at your own site two days later and notice the "Articles" section is showing a spinner that never resolves, or worse — a quiet little message that says "Articles coming soon."

That's where this story starts.

---

## Part 1: The RSS Feed That Wasn't

The portfolio has a section that pulls in my Medium articles. The original implementation used [rss2json.com](https://rss2json.com) — a free third-party service that converts RSS feeds to JSON and sidesteps CORS in the browser. Straightforward, zero infrastructure required.

It worked in development. It worked right after launch.

Then it stopped working.

### The Problem: Stale Cache

rss2json.com caches feeds aggressively. My Medium profile had no posts when I first built the feature, so the service cached an empty feed. Subsequent requests kept returning that empty cache — even after I published articles. The browser was getting a 200 OK response with a perfectly valid JSON body that just happened to contain zero items.

The "Articles coming soon" fallback was doing exactly what it was designed to do. That was the frustrating part.

### The Fix: Cut Out the Middleman

The real issue wasn't rss2json. It was relying on a third-party service I had no control over. The actual Medium RSS feed at `https://medium.com/feed/@aldiyusron` works fine — the problem is that browsers can't fetch it directly due to CORS.

The solution: a Vercel serverless function to act as a proxy. It fetches the RSS directly from Medium on the server, parses it, and returns clean JSON. No third-party caching, no CORS issues, full control.

```js
// api/medium-posts.js
const MEDIUM_RSS = 'https://medium.com/feed/@aldiyusron'

export default async function handler(req, res) {
  const response = await fetch(MEDIUM_RSS, {
    headers: { 'User-Agent': 'Mozilla/5.0 (compatible; portfolio-bot/1.0)' },
  })

  if (!response.ok) {
    return res.status(502).json({ error: `Upstream returned ${response.status}` })
  }

  const xml = await response.text()
  const items = parseItems(xml)

  res.setHeader('Cache-Control', 's-maxage=1800, stale-while-revalidate=3600')
  res.setHeader('Access-Control-Allow-Origin', '*')
  return res.json({ status: 'ok', items })
}
```

The `parseItems` function is a small XML parser that handles Medium's RSS format — CDATA-wrapped fields, `content:encoded` for the full article body, category tags for topics. Nothing fancy, just regex and string matching.

The `Cache-Control` header is intentional: cache for 30 minutes on Vercel's CDN, serve stale for up to an hour while revalidating. This keeps the section snappy without hammering Medium's RSS endpoint on every visit.

### The Local Dev Trap

Here's where it got interesting.

Vercel's `api/` directory convention is clean in production. In development, it's a collision waiting to happen. When the Vite dev server receives a request for `/api/medium-posts`, it finds `api/medium-posts.js` in the project root and helpfully serves it — transformed, source-mapped, the whole thing — as a JavaScript module.

The browser receives JS source code instead of JSON. The JSON parse throws. The error state catches it. "Articles coming soon."

Same symptom, different cause.

The fix was two-part:

**1. Tell Vite not to serve the `api/` directory:**

```js
// vite.config.js
export default defineConfig({
  server: {
    fs: {
      deny: ['api'],
    },
  },
  plugins: [react(), mediumPostsDevPlugin()],
})
```

**2. Add a dev middleware that intercepts the request before Vite's module transform:**

The subtle issue here: an `async` middleware function in Vite's Connect server returns a Promise immediately. Connect doesn't await it — it just moves on to the next middleware in the chain, which in this case was Vite's file server. The request got handled twice.

The fix is to use a synchronous function that kicks off the async work via `.then()/.catch()` without calling `next()`. When `next()` isn't called, Connect stops the chain — regardless of whether the response is ready yet.

```js
server.middlewares.use((req, res, next) => {
  if (req.url !== '/api/medium-posts') return next()

  // No async keyword, no next() call — Connect stops here
  fetch(MEDIUM_RSS, { headers: { 'User-Agent': '...' } })
    .then((r) => r.text())
    .then((xml) => {
      res.writeHead(200, { 'Content-Type': 'application/json' })
      res.end(JSON.stringify({ status: 'ok', parseItems(xml) }))
    })
    .catch((err) => {
      if (!res.headersSent) {
        res.writeHead(500, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify({ error: err.message }))
      }
    })
})
```

After both changes: the dev server returns JSON, production returns JSON, the articles section shows articles.

---

## Part 2: Adding i18n — Making the Portfolio Bilingual

The portfolio launched bilingual from day one — English and Indonesian, both fully written out. The first post covered how that content lived in a single `data.js` file as two parallel objects. It worked, but it wasn't really an i18n system. It was content bundled with logic, passed as props down through every layer of the component tree. This session was about giving it proper structure.

### The Library Question

The obvious answer is [react-i18next](https://react.i18next.com/). It's the industry standard, battle-tested, and handles everything: pluralization, interpolation, lazy-loaded locale bundles, fallback chains, a plugin ecosystem.

But I paused before reaching for it.

This is a static personal portfolio. The content doesn't change often. There's no dynamic text with variables like `"Hello, {{name}}"`. There's no pluralization. There are exactly two languages, and both are fully written out in advance. react-i18next would add ~40 kB to the bundle and a non-trivial amount of configuration for features I'd never use.

The actual requirement was simple: given a locale, return the right content object. That's a function, not a library.

### The Structure

All translatable content lives in two files:

```
src/i18n/
├── context.jsx          # Provider, hook, locale utilities
└── locales/
    ├── en.js            # English
    └── id.js            # Indonesian (Bahasa Indonesia)
```

Each locale file exports a plain JS object — nav labels, section headings, experience bullets, project descriptions, everything. They're parallel in structure, which makes it easy to spot gaps and easy to add a third language later by just adding a new file.

### URL-Based Locale Detection

The locale is determined from the URL path:

- `/` → English
- `/id` → Indonesian
- `/id/*` → Indonesian (for any sub-path)

```js
export function getLocaleFromPath(pathname) {
  return pathname === '/id' || pathname.startsWith('/id/') ? 'id' : 'en'
}
```

This happens once at the top of the tree, in `App.jsx`, before anything renders. No client-side redirect, no flash of wrong language — the correct content is loaded on the first render.

Vercel's rewrite rules already send all paths to `index.html`, so `/id` works without any server-side routing config beyond what was already in place.

### React Context Instead of Prop-Drilling

Before i18n, all content was defined in a single `data.js` file and passed from `App` → `Portfolio` → every section component as props. That worked, but it meant every intermediate component had to accept and forward content it didn't care about.

The new setup uses a React Context:

```jsx
// src/i18n/context.jsx
export function I18nProvider({ locale, children }) {
  const t = getTranslations(locale)
  const localeSwitch = { active: locale, options: LOCALE_OPTIONS }

  return (
    <I18nContext.Provider value={{ locale, t, localeSwitch }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useTranslation() {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error('useTranslation must be used inside I18nProvider')
  return ctx
}
```

`App.jsx` wraps the app in `I18nProvider`. `Portfolio.jsx` calls `useTranslation()` and pulls out `t` (the translations object) and `localeSwitch` (for the EN/ID toggle in the nav). The individual section components — `HeroSection`, `ExperienceSection`, etc. — still receive their slice of content as props, which keeps them cleanly decoupled from the i18n system and reusable in other contexts.

### The Language Switcher

The nav already had EN/ID toggle links. Those are now driven by `localeSwitch.options` from the context, so the active state and hrefs are always in sync with the current locale. Switching language is just a full page navigation to `/` or `/id` — the page re-renders with the correct content, and `document.documentElement.lang` is set accordingly for screen readers and search engines.

### What I'd Change If This Got Bigger

The custom approach is right for now, but there are clear thresholds where I'd reconsider:

- **Third language** — still fine, just add a locale file
- **Dynamic content** (user-facing messages, form errors) — reach for react-i18next's interpolation
- **Content from a CMS** — need lazy loading and a backend loader plugin
- **Pluralization** — the custom code handles zero edge cases here; react-i18next does it properly

For a portfolio, none of those apply. The tradeoff — zero dependencies, full transparency, trivial to understand — is worth it.

---

## The Bigger Lesson

Shipping is the beginning, not the end. The interesting engineering work — the edge cases, the infrastructure decisions, the local/production gaps — shows up after launch, when real conditions replace your assumptions.

The RSS fix took a few hours total. Most of that time was figuring out _why_ it was broken, not _how_ to fix it. That ratio is pretty normal, and it's worth writing down while it's fresh — both as documentation for future-me, and because someone else is probably hitting the same rss2json caching wall right now.

---

_[Author bio / links]_
