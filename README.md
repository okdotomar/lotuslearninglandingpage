# Lotus Learning — Landing Page

Marketing and informational landing page for **Lotus Learning**, an LTI tool that helps instructors and course designers build professional, accessible Canvas LMS courses in minutes.

Live repo: [github.com/okdotomar/lotuslearninglandingpage](https://github.com/okdotomar/lotuslearninglandingpage)

---

## Tech Stack

- [Next.js 15](https://nextjs.org) (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- shadcn/ui primitives

## Project Structure

```
app/
  page.tsx          # Home page
  about/            # About page
  contact/          # Contact page
  faq/              # FAQ page
  security/         # Security page
  support/          # Support page

components/
  home/
    hero.tsx        # Hero section
    features.tsx    # Tabbed features section
    institutions.tsx
    cta.tsx
  layout/
    navbar.tsx
    footer.tsx
  ui/               # Shared UI primitives (button, card, tabs, accordion)
```

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## About Lotus Learning

Lotus Learning is an LTI integration for Canvas LMS that empowers instructors to:

- **Build fast** — reduce course creation from 40+ hours to minutes
- **Design professionally** — apply cohesive themes across an entire course with one click
- **Stay accessible** — automated contrast, alt text, and screen reader checks
- **Use smart templates** — pedagogically designed module structures
- **Refine continuously** — scan existing courses for outdated content and iterate quickly
