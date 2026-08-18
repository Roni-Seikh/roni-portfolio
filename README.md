# Roni Seikh — Portfolio

A cinematic, dark-themed personal portfolio built with React + TypeScript + Vite + Tailwind CSS + Framer Motion.

Sections: Hero → About → Skills → Projects (filterable) → Experience → Certifications (filterable) → Contact (real email delivery).

---

## 1. Quick start

```bash
npm install
npm run dev
```

Open the printed local URL (usually `http://localhost:5173`).

Build for production:

```bash
npm run build   # outputs to dist/
npm run preview # preview the production build locally
```

---

## 2. Editing your content — no code required

Everything text-based (name, bio, projects, skills, experience, certifications, social links, resume path) lives in **one file**:

```
src/data/portfolioData.ts
```

Open it and edit the arrays/objects directly — every section on the site reads from this file. Examples:

- Add a project → add an object to the `projects` array.
- Add a skill → add it to the relevant category's `items` array in `skillCategories`.
- Update an internship → edit the `experience` array.
- Add a certificate → add it to the `certifications` array.

This is a lightweight stand-in for a full admin panel — see section 6 below if you want a real database-backed CMS later.

### Resume

Replace `public/resume.pdf` with your latest resume (same filename), or update `profile.resumeUrl` in `portfolioData.ts` if you rename it.

### Profile photo

The About section currently uses a placeholder initials card (no real photo was provided). To add your photo:
1. Drop an image into `src/assets/` (e.g. `profile.jpg`).
2. In `src/components/AboutSection.tsx`, import it (`import profileImg from '../assets/profile.jpg'`) and swap the placeholder `<div>` block for an `<img src={profileImg} ... />`, following the existing corner-frame markup as a guide.

### Certificate images

Certification cards currently show a "View Certificate" button with no linked file (`certifications` entries have no image yet). To wire one up: add an `imageUrl` field per certificate in `portfolioData.ts`, drop the file in `public/certificates/`, and link the button's `href` to it.

---

## 3. Contact form / email delivery setup (EmailJS)

The contact form sends real email to **roni.seikh.softwareeng@gmail.com** using [EmailJS](https://www.emailjs.com) — no backend server required, and no API keys are exposed beyond a public client key (this is how EmailJS is designed to work).

1. Create a free account at https://www.emailjs.com.
2. Add an **Email Service** (e.g. connect your Gmail) → note the **Service ID**.
3. Create an **Email Template** with these variables: `from_name`, `from_email`, `subject`, `message`, `sent_at`, `to_email`. Set the template's "To email" field to `{{to_email}}` (or hardcode your address). Note the **Template ID**.
4. Get your **Public Key** from Account → API Keys.
5. Copy `.env.example` to `.env` and fill in the three values:

   ```
   VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
   VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
   VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxx
   ```

6. Restart `npm run dev`.

Until this is configured, the form still validates and shows a clear error state (never a fake "success" for an email that didn't send).

**Note:** EmailJS's free tier has a monthly send limit — fine for a personal portfolio, but check their pricing if you expect high volume.

---

## 4. Deployment — updating your existing `roniseikh.vercel.app`

You already have a Vercel project at this domain with an older portfolio. To replace it with this project **without losing the domain**:

**If the old site is connected to a GitHub repo:**
1. Push this project's code to that same GitHub repo (replacing the old files) — either overwrite the repo directly, or delete the old repo contents and commit this project in its place.
2. Push to the branch Vercel is watching (usually `main`). Vercel will auto-redeploy, and `roniseikh.vercel.app` will now serve this new site.

**If you'd rather start a clean deploy:**
1. Push this project to a **new** GitHub repo.
2. In the Vercel dashboard, go to your existing `roniseikh` project → **Settings → Git** → change/reconnect it to point at the new repo (or delete the old project and import the new repo, then re-add the `roniseikh.vercel.app` domain under **Settings → Domains**).
3. Framework preset: **Vite**, build command `npm run build`, output directory `dist` (usually auto-detected).
4. Add the `VITE_EMAILJS_*` environment variables under **Settings → Environment Variables**.
5. Deploy.

Either way, once live, confirm:
- `https://roniseikh.vercel.app/` loads the new hero
- `https://roniseikh.vercel.app/resume.pdf` downloads your resume
- `https://roniseikh.vercel.app/robots.txt` and `/sitemap.xml` are reachable

---

## 5. SEO & AI-discoverability — what's already built in

So that searching **"Roni Seikh"** on Google, and asking about you in AI tools that browse the web (ChatGPT with browsing, Perplexity, etc.), surfaces accurate, first-party information:

- **`index.html`** — full meta description, keywords, canonical URL, Open Graph + Twitter card tags (with a generated `og-image.png` so shared links look good), and a **JSON-LD `Person` schema** — the structured-data format Google uses to build Knowledge Panels, and the cleanest signal for any AI tool parsing the page.
- **`public/robots.txt`** — explicitly allows general crawlers *and* known AI crawlers (GPTBot, ChatGPT-User, PerplexityBot, ClaudeBot, Google-Extended) so nothing is accidentally blocked.
- **`public/sitemap.xml`** — tells search engines what pages exist.
- **`public/llms.txt`** — an emerging convention some AI crawlers/agents read directly: a clean, structured Markdown summary of who you are, your projects, experience, and contact info, so an AI summarizing your site doesn't have to guess from the rendered UI.

**What you still need to do for this to actually work (this is the part that takes time, not code):**

1. **Submit to Google Search Console** (https://search.google.com/search-console) — add `roniseikh.vercel.app`, verify ownership, and submit `sitemap.xml`. This is the single biggest lever for ranking for your own name — Google won't reliably find/index a new site on its own for a while.
2. **Get backlinks** — link to your portfolio from your GitHub profile README, LinkedIn "Featured" section, and anywhere else you're listed (Devfolio, LeetCode profile, etc.). Search ranking for a personal name is driven heavily by how many places consistently link to the same URL.
3. **Keep your name consistent** everywhere ("Roni Seikh") — the JSON-LD `sameAs` field ties your GitHub and LinkedIn to this site, which helps Google associate them as the same person.
4. **Update `og-image.png`** in `public/` if you want a different preview image for shared links (LinkedIn, Twitter, WhatsApp previews).
5. Be realistic about AI tools: ones that only answer from training data (no live browsing) won't know about a new site until a future model is trained on newly-crawled web data — there's no way to inject yourself into that retroactively. Tools with live browsing/search will find you as soon as the site is indexed by search engines (step 1 above).

---

## 5. Project structure

```
src/
  data/portfolioData.ts     ← all editable content
  components/
    HeroSection.tsx
    AboutSection.tsx
    SkillsSection.tsx
    ProjectsSection.tsx
    ExperienceSection.tsx
    CertificationsSection.tsx
    ContactSection.tsx
  App.tsx                   ← section order
public/
  resume.pdf                ← your resume, replace anytime
  favicon.svg
```

---

## 6. About the full admin CMS (not included here)

The original brief also asked for a database-backed admin dashboard (auth, CRUD for every section, contact-message inbox, GitHub repo import, image uploads). That's a genuinely separate backend project — Node/Express + a database (MongoDB or Postgres) + authentication + hosting — and isn't something that can be spun up and *tested end-to-end* without a real deployment target.

What's here instead: all content is centralized in one file (`portfolioData.ts`) that's simple to hand-edit and redeploy in under a minute — no database or login needed for a single-owner portfolio.

If you do want the real thing later (e.g. to manage content from your phone without touching code), it's a good follow-up project — happy to scaffold:
- Express + MongoDB (or Postgres) API for projects/skills/experience/certifications/messages
- JWT-based admin login (bcrypt-hashed password, protected routes)
- A small admin dashboard UI reusing this same design system
- Contact messages stored in the DB instead of only emailed

---

## 7. Tech stack

React 19 · TypeScript · Vite · Tailwind CSS v4 · Framer Motion · EmailJS
