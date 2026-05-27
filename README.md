# Haokai's Portfolio Site

A simple, maintainable React site for Haokai's university application.
Built with Vite + React + React Router.

## How to edit the content

**Almost everything you'll want to change is in one file: `src/content.js`.**

That file contains:
- `profile` — name, tagline, intro paragraph, contact info
- `skills` — the skill tags grouped by category
- `journey` — the learning-timeline entries
- `projects` — the project pages

Open `src/content.js`, change text, save, and the site updates.

### To add a new project

In `src/content.js`, copy one of the existing entries inside the
`projects` array and change:
- `slug` (must be unique, used in the URL)
- `title`, `blurb`, `tags`, `status`, `duration`, `deliverable`
- `sections` (each section can have a `body`, a `list`, or a `timeline`)

No other files need to be edited — the home page and routing
pick up new projects automatically.

### To change colors or fonts

Open `src/styles.css` and change the CSS variables at the top
(`--bg`, `--accent`, `--serif`, etc.).

## Running locally

```bash
npm install
npm run dev
```

Then open the URL printed in the terminal (usually `http://localhost:5173`).

## Building for production

```bash
npm run build
```

This produces a `dist/` folder containing the static site.

## Free hosting options

### Easiest: Netlify Drop (no account needed for preview)

1. Run `npm run build`
2. Go to <https://app.netlify.com/drop>
3. Drag the `dist/` folder onto the page
4. You get a live URL immediately

### GitHub Pages (when you push to GitHub)

1. Push the repo to GitHub
2. In repo Settings → Pages, set source to "GitHub Actions"
3. Add a workflow file (see GitHub docs) or use any one-click action

The site uses **HashRouter** and a relative `base` path in `vite.config.js`,
so it works on any static host without server config.

### Other free options

- **Vercel** — connect GitHub, one-click deploy
- **Cloudflare Pages** — free, fast, generous limits
- **Surge.sh** — `npm install -g surge` then `surge dist/`

## File layout

```
src/
  content.js          ← edit this for almost everything
  styles.css          ← edit this for visual design
  main.jsx            ← React entry (rarely touched)
  App.jsx             ← routing (rarely touched)
  pages/
    Home.jsx          ← home page layout
    ProjectPage.jsx   ← shared layout for every project
    NotFound.jsx
```
