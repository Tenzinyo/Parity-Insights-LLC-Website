# Parity Insights LLC — Website

Static marketing site for Parity Insights LLC, built with Next.js, TypeScript, and Tailwind CSS. Designed to run at zero cost on Vercel, Netlify, or Cloudflare Pages.

---

## Quick Start

**Requirements:** Node.js 18+ and npm

```bash
# Install dependencies
npm install

# Run locally
npm run dev
# Opens at http://localhost:3000

# Build for production (outputs static files to /out)
npm run build
```

---

## Project Structure

```
src/
├── app/              # Pages (Next.js App Router)
│   ├── page.tsx      # Home
│   ├── services/     # Capabilities page
│   ├── projects/     # Case studies page
│   ├── about/        # About page
│   └── contact/      # Contact form page
├── components/
│   ├── Nav.tsx       # Top navigation bar
│   └── Footer.tsx    # Site footer
└── content/          # All editable text lives here — no JSX needed
    ├── site.ts       # Company name, nav, email, footer
    ├── services.ts   # Services / capabilities descriptions
    ├── projects.ts   # Case study cards
    └── about.ts      # About page copy and principles
```

---

## Updating Content

**All company text lives in `/src/content/`.** You never need to touch page or component files just to update copy.

| File | What it controls |
|---|---|
| `site.ts` | Site name, email, navigation, footer tagline |
| `services.ts` | The three service area titles, descriptions, and bullet points |
| `projects.ts` | Case study cards — problem, approach, impact, and tags |
| `about.ts` | Ethos statement, firm description, principles |

---


### Deploy website on Vercel 

https://parity-insights-llc-website.vercel.app/projects/ 

---

## Changelog

### Initial Scaffold — October 2026

Added the full site skeleton for Parity Insights LLC. Here is what was built and how it looks and works:

**Home page (`/`):** A full-screen opening section displays the company tagline in large black-and-white type with two buttons — one to explore capabilities and one to get in touch. Below that, three focus area boxes sit side by side (stacked on mobile) describing the firm's core disciplines. A numbered three-step section explains how engagements work — Assess & Quantify, Prototype & Validate, Ship & Scale. The page ends with a short call-to-action strip.

**Capabilities page (`/services`):** Three service areas are listed vertically, each with a large numbered label, a title, a description paragraph, and a bullet list of specific offerings.

**Work page (`/projects`):** Four placeholder case study cards appear in a two-column grid (stacked on mobile). Each card shows category tags, a title, and three labeled fields — Problem, Approach, and Impact — so readers can quickly understand what was built and what it achieved.

**About page (`/about`):** Opens with a large ethos statement, followed by a firm description paragraph and a founder note in a left-bordered callout. Below that, four operating principles are shown in a two-column grid.

**Contact page (`/contact`):** A split layout with a form on the left (name, email, company, message) and contact information on the right (email, location, response time). On submission the form posts to Web3Forms and shows a confirmation message. Errors fall back to showing the direct email address.

**Navigation:** A fixed top bar shows the site name on the left and navigation links on the right. On small screens it collapses into a hamburger menu that animates open. The overall design is monochrome — black background, white text, thin gray borders throughout.

**Content files:** All editable copy — taglines, service descriptions, case study text, about content — lives in `src/content/` so it can be updated without touching any layout or component code.
