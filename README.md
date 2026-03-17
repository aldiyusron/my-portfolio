# My Portfolio

Personal portfolio website built with React and Vite.

## Tech Stack
- React 19
- Vite 8
- ESLint 9

## Getting Started
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
3. Open the local URL shown in the terminal.

## Available Scripts
- `npm run dev`: run Vite with hot reload for local development.
- `npm run build`: create a production build in `dist/`.
- `npm run preview`: preview the production build locally.
- `npm run lint`: run ESLint checks.

## Project Structure
```text
my-portfolio/
├─ public/            # static assets served directly
├─ src/
│  ├─ assets/         # images and local media
│  ├─ App.jsx         # app entry component
│  ├─ Portfolio.jsx   # main portfolio page and styles
│  ├─ index.css       # global base styles
│  └─ main.jsx        # React bootstrap
├─ index.html
├─ eslint.config.js
└─ vite.config.js
```

## Development Notes
- Main page implementation is in `src/Portfolio.jsx`.
- Keep styles and class names consistent with existing `pf-*` naming.
- Run `npm run lint && npm run build` before creating a PR.
