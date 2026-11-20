// Projects / Case Studies content.
// Add or replace entries here. Tags, problem, approach, and impact fields drive the card layout.

export type Tag =
  | 'Computer Vision'
  | 'Python / Data Pipelines'
  | 'Spatial Analytics'
  | 'Applied AI'
  | 'Automation'
  | 'Market Analysis'
  | 'Internal Tooling'
  | 'Data Analysis'
  | 'Software Architecture'
  | 'Product Engineering'
  | 'React / Next.js'
  | 'Full-Stack'

export interface Project {
  id: string
  slug?: string          // when present, card links to /projects/[slug]
  title: string
  problem: string
  approach: string
  impact: string
  timeline: string
  tags: Tag[]
  featured?: boolean
  liveUrl?: string       // when present, shows a "View Live" button
}

export const projectsPage = {
  headline: 'Selected Work',
  subheadline:
    'A cross-section of engagements spanning data engineering, applied AI, and strategic analysis.',
}

export const projects: Project[] = [
  {
    id: 'go-to-market-tracker',
    slug: 'go-to-market-tracker',
    title: 'Go-to-Market Strategy Tracker',
    problem:
      'GTM and revenue teams split their workflow across a CRM, spreadsheets, a project tool, and a reporting dashboard — none connected. Pipeline health is invisible, lead conversion gaps go unnoticed, and activity logging is manual.',
    approach:
      'Built a full-stack GTM platform with pipeline kanban (Sales/Onboarding/Customer Success), lead lifecycle funnel (Lead → MQL → SQL → Opportunity → Customer), voice activity logging via local Whisper model, and a custom report builder with CSV export. Seeded with a realistic B2B book of business.',
    impact:
      '$3.5M demo pipeline across 12+ institutional accounts (Bridgewater, Citadel, Vanguard, BlackRock). 10+ application modules. Voice logging works fully offline via Whisper after first download. Live on Netlify.',
    timeline: '2025–2026',
    tags: ['Product Engineering', 'React / Next.js', 'Full-Stack', 'Internal Tooling'],
    featured: true,
    liveUrl: 'https://go-to-market-tracker.netlify.app',
  },
  {
    id: 'nova-retail-expansion',
    slug: 'nova-retail-expansion',
    title: 'Northern Virginia & Mid-Atlantic Retail Expansion Analysis',
    problem:
      'A multi-location boutique beauty & personal care brand in the DMV needed a data-driven framework to evaluate optimal retail expansion footprints across Northern Virginia and secondary Mid-Atlantic corridors within a $3,500–$4,500/month lease budget and 800–1,000 sq ft footprint.',
    approach:
      'U.S. Census ACS demographic extraction via Python/Pandas across 5 Northern Virginia counties; whole-number age bracket headcount modeling; spatial income-to-rent ratio analysis; target demographic density filtering (female population aged 20–60); and commercial lease screening across LoopNet, Crexi, and CommercialCafe.',
    impact:
      'Evaluated 5 counties and 15+ commercial retail properties across 3 states. Narrowed expansion shortlist to 4 turnkey submarkets meeting the $3.5k–$4.5k/mo threshold. Vienna/Tysons corridor identified as top-ranked submarket with 90/100 composite score.',
    timeline: '2025–2026',
    tags: ['Market Analysis', 'Spatial Analytics', 'Python / Data Pipelines', 'Data Analysis'],
    featured: true,
  },
]
