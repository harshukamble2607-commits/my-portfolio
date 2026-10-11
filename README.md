# Harshvardhan Kamble — Developer Portfolio

A premium, light-theme personal portfolio built with **React + Vite + Tailwind CSS**.
Minimal editorial design, refined blue accents, a purposeful animation system, and
real project work — no invented metrics, statistics, or experience.

> **Everything you'll want to edit lives in one file:**
> [`src/data/profile.js`](src/data/profile.js).
> Search it for `ADD_` to find the fields that still need your input.

---

## 1. Tech stack

| Area      | Choice                                            |
| --------- | ------------------------------------------------- |
| Framework | React 18                                          |
| Build     | Vite 5                                           |
| Styling   | Tailwind CSS 3                                    |
| Icons     | `lucide-react`                                    |
| Motion    | CSS transitions/keyframes + IntersectionObserver  |
| Language  | JavaScript (JSX)                                  |

Motion is intentionally implemented with lightweight CSS and a single shared
`IntersectionObserver` rather than an animation library — this keeps the bundle
small (~60 KB gzipped JS) and scrolling smooth.

---

## 2. Local setup

```bash
cd portfolio
npm install
npm run dev        # start the dev server (prints a localhost URL)
```

Other scripts:

```bash
npm run build      # production build into dist/
npm run preview    # preview the production build locally
npm run lint       # ESLint (must pass with zero warnings)
```

Requires **Node.js 16+**.

---

## 3. Editing your content

Open [`src/data/profile.js`](src/data/profile.js). It contains:

- **`profile`** — name, monogram, role, college, location, availability,
  **email**, **resumeUrl**, GitHub/LinkedIn links.
- **`hero`**, **`about`**, **`skills`** — section text and skill categories.
- **`projects`** — the four project cards.
- **`experience`**, **`education`**, **`contact`**, **`footer`**.

### Fill these in before publishing (search for `ADD_`)

| Field                          | What to do                                                        |
| ------------------------------ | ----------------------------------------------------------------- |
| `profile.email`                | Add your professional email.                                      |
| `profile.resumeUrl`            | Add your resume PDF path (see §5).                                |
| `experience.entries[0].*`      | Add Saiket Systems internship title, dates, status, duties.       |
| `projects` (AI Interview, Stock)| Add `repo` / `live` URLs when the repositories are public.        |
| `contact.form.*`               | Configure a real form provider (see §6).                          |

Until a field is filled, the UI shows a clearly marked notice — it never
fabricates a link or a claim.

---

## 4. Replacing screenshots

Project images live in [`public/screenshots/`](public/screenshots/) and are
referenced from `projects.items[].image` in `profile.js`.

- **Clinix** uses a **real screenshot** (`clinix-dashboard.png`).
- **FarmSwift**, **AI Interview Simulator**, and **Stock Anomaly Detector** use
  clearly-labelled **placeholder artwork** (`.svg`). Each card shows a small
  "Placeholder" tag until you replace it.

To use a real screenshot:

1. Drop the image into `public/screenshots/` (recommended 16:10, e.g. 1200×750).
2. Point `image` at it in `profile.js`, e.g. `'screenshots/farmswift.png'`.
3. Set `imageIsPlaceholder: false` so the tag disappears.
4. Update `imageAlt` with an accurate description.

The hero composition (`src/components/HeroVisual.jsx`) uses
`screenshots/clinix-dashboard.png` and `screenshots/farmswift.svg`; update those
two paths there if you swap the hero visuals.

The Open Graph share image is `public/og-image.png` (1200×630). Replace it with
a branded image if you like.

---

## 5. Adding your resume

1. Put your PDF in `public/resume/`, e.g.
   `public/resume/Harshvardhan-Kamble-Resume.pdf`.
2. In `profile.js` set:

   ```js
   resumeUrl: 'resume/Harshvardhan-Kamble-Resume.pdf',
   ```

The navigation "Résumé" button becomes a real download link. Until then it opens
a short "coming soon" notice instead of a broken link.

---

## 6. Connect the contact form

The form is real: it validates input, shows accessible inline errors, and only
reports success after a provider actually accepts the message. By default
delivery is **unconfigured**, so submitting shows a clear "not connected"
notice — it never pretends to send.

Choose one of these in `contact.form.mode`:

### Option A — EmailJS (no backend)

```js
form: {
  mode: 'emailjs',
  emailjs: {
    serviceId: '<YOUR_SERVICE_ID>',
    templateId: '<YOUR_TEMPLATE_ID>',
    publicKey: '<YOUR_PUBLIC_KEY>',
    },
  ...
}
```

Create a free account at [emailjs.com](https://www.emailjs.com/), add an email
service + template with variables `{{name}}`, `{{email}}`, `{{subject}}`,
`{{message}}`, and paste the three IDs above.

### Option B — Your own endpoint

```js
form: {
  mode: 'endpoint',
  endpoint: 'https://your-backend.example.com/contact',
  ...
}
```

The endpoint receives a JSON `POST` body of
`{ name, email, subject, message }` and should return `2xx` on success. A small
serverless function (Vercel/Netlify) works well; keep any API keys server-side.

---

## 7. Deployment

The site is fully static — ideal for free hosting. `base` is set to `'./'` in
`vite.config.js`, so the same build works at a domain root **and** under a
GitHub Pages repository sub-path.

### Vercel

1. Import the repository at [vercel.com](https://vercel.com).
2. Set **Root Directory** to `portfolio`.
3. Framework preset: **Vite**. Build: `npm run build`. Output: `dist`.
4. Deploy, then add your domain.

### Netlify

1. New site from Git → pick the repo.
2. **Base directory**: `portfolio` · **Build command**: `npm run build` ·
   **Publish directory**: `portfolio/dist`.

### GitHub Pages

A workflow is included at
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml). Push to `main`
and enable **Settings → Pages → Source: GitHub Actions**. The build uses
relative asset paths, so it works at `https://<user>.github.io/<repo>/`.

Finally, update the two absolute URLs in `index.html` (`canonical` and
`og:url`) to your live domain.

---

## 8. Project structure

```
portfolio/
├── index.html                 # SEO / Open Graph meta, fonts, noscript fallback
├── vite.config.js
├── tailwind.config.js         # design tokens + keyframes
├── public/
│   ├── favicon.svg            # HK monogram
│   ├── og-image.png           # social share card (1200×630)
│   ├── resume/                # put your PDF here
│   └── screenshots/           # project images (real + placeholders)
└── src/
    ├── main.jsx
    ├── App.jsx                # page composition + skip link
    ├── index.css             # base styles, utilities, reveal + reduced-motion
    ├── data/profile.js        # ← ALL editable content
    ├── lib/
    │   ├── utils.js           # cn(), scrollToId()
    │   └── contact.js         # contact-form delivery (honest about failures)
    ├── hooks/
    │   ├── useReveal.js       # one shared IntersectionObserver
    │   ├── useScrollSpy.js    # active nav section
    │   ├── useScrollProgress.js
    │   └── useReducedMotion.js
    └── components/
        ├── Navbar.jsx, ScrollProgress.jsx, Footer.jsx
        ├── Hero.jsx, HeroVisual.jsx, TextReveal.jsx
        ├── About.jsx, Skills.jsx, Education.jsx, Experience.jsx
        ├── Projects.jsx, ProjectCard.jsx
        ├── Contact.jsx, ContactForm.jsx
        └── Section.jsx, SectionHeading.jsx, Reveal.jsx,
            Button.jsx, ResumeButton.jsx, Icon.jsx
```

---

## 9. Animation system (what was built)

| Effect                       | Where                                                       |
| ---------------------------- | ----------------------------------------------------------- |
| Hero entrance sequence       | staggered `animate-fade-up` on load                         |
| Word reveal (clip + slide)   | `TextReveal` — hero heading (screen-reader safe)            |
| Scroll section reveals       | shared `IntersectionObserver`, staggered cards              |
| Project card hover           | 6px lift, deeper shadow, image zoom, arrow toward upper-right |
| Skill chip hover             | border/background transition only                           |
| Button micro-interactions    | colour transition + arrow glide + pressed + focus states    |
| Nav active indicator         | sliding underline, animated on section change               |
| Background motion            | faint static grid; no continuous/floating decorations       |
| Scroll progress indicator    | 2px accent line, transform-driven                           |
| Contact success              | checkmark stroke-draw, shown **only after real success**    |

Accessibility & performance:

- `prefers-reduced-motion` disables all non-essential motion.
- Content is never trapped at `opacity: 0` — a `<noscript>` rule and a
  observer fallback guarantee visibility if JS fails.
- Only `transform`/`opacity` are animated; the progress bar uses no layout.

---

## 10. Quality check

Verified before delivery:

- ✅ `npm run build` — succeeds, 1603 modules, ~60 KB gzipped JS.
- ✅ `npm run lint` — zero errors, zero warnings.
- ✅ Production preview served `200` for the page, screenshots, SVG artwork,
  and OG image.
- ✅ Responsive layout: single column on mobile, two/three columns on larger
  screens; no horizontal overflow (`overflow-x: hidden` + constrained widths).
- ✅ Accessibility: skip link, semantic landmarks, labelled nav, `aria-current`,
  `aria-expanded`/`aria-controls` mobile menu, Escape-to-close, visible focus
  rings, form `aria-invalid` + `role="alert"` errors.
- ✅ No fake data: no invented metrics, ratings, repo URLs, or completion status.
  Unconfirmed values render as clearly-marked placeholders.

### Manual checks to do once before publishing

1. Run `npm run dev` and click every nav link, project link, and social link.
2. Tab through the page with the keyboard — confirm the focus ring and that the
   mobile menu opens/closes with Enter and closes with Escape.
3. Fill and submit the contact form after enabling a provider (§6).
4. Add your resume and email (§3) and re-check the navbar button and contact
   section.
5. Run Lighthouse (Chrome DevTools) for the final performance/SEO score.
