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

**Work page (`/projects`):** Case study cards appear in a two-column grid (stacked on mobile). Each card shows category tags, a duration label in the top-right corner, a title, and three labeled fields — Problem, Approach, and Impact. The page shows a clean "Case studies coming soon." placeholder when the projects list is empty.

**About page (`/about`):** Opens with a large ethos statement, followed by a firm description paragraph and a founder note in a left-bordered callout. Below that, three operating principles are shown in a two-column grid.

**Contact page (`/contact`):** A split layout with a form on the left (name, email, company, message) and contact information on the right (email, location, response time). On submission the form posts to Web3Forms and shows a confirmation message. Errors fall back to showing the direct email address.

**Navigation:** A fixed top bar shows the site name on the left and navigation links on the right. On small screens it collapses into a hamburger menu that animates open. The overall design is monochrome — black background, white text, thin gray borders throughout.

**Content files:** All editable copy — taglines, service descriptions, case study text, about content — lives in `src/content/` so it can be updated without touching any layout or component code.

### Content & Copy Updates — October 2026

Updated several pieces of text across the site to better reflect the firm's actual focus:

**Home page:** The label above the hero headline was changed from "Technology & Management Consulting" to "Technology & Economic Consulting."

**About page:** Firm description updated to describe Parity Insights as a technology and economic consulting practice that works on pro-bono projects alongside investors and small to large businesses. The principles section was trimmed from four items to three, removing the "High-Trust Systems" entry.

**Projects page:** Removed the four placeholder case studies that were added during the initial build. The page now shows a "Case studies coming soon." message until real work is added. Each project card now also displays a duration label (e.g., "3 months") in the top-right corner of the tag row.

**First real project added:** A pro-bono retail expansion engagement was added — a go-to-market and location analysis for a small business opening a second location in Virginia. The project is in progress, starting shortly, with an expected three-month timeline.

**Contact form:** Connected to Web3Forms using a live access key so the contact form on the site now sends real email submissions.
