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
}

export const projectsPage = {
  headline: 'Selected Work',
  subheadline:
    'A cross-section of engagements spanning data engineering, applied AI, and strategic analysis.',
}

export const projects: Project[] = [
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
