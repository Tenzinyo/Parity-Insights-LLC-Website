// Projects / Case Studies content.
// Add or replace entries here. Tags, problem, approach, and impact fields drive the card layout.
// PLACEHOLDER: All entries below are illustrative. Replace with real case studies.

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
  title: string
  problem: string
  approach: string
  impact: string
  timeline:string
  tags: Tag[]

}

export const projectsPage = {
  headline: 'Selected Work',
  subheadline:
    'A cross-section of engagements spanning data engineering, applied AI, and strategic analysis.',
}

// Add real case studies here when ready.
// Each entry needs: id, title, problem, approach, impact, and tags.
export const projects: Project[] = [
  {
    id: 'virginia-retail-expansion',
    title: 'Retail Expansion Strategy — Second Location, Virginia',
    problem:
      'A small business owner needed a data-driven framework to identify the optimal city and site for a second retail location in Virginia, with a defined target customer profile and limited capital budget.',
    approach:
      'Will conduct demographic and income analysis across Virginia markets, layered with spatial foot-traffic data and competitive density mapping. Paired quantitative findings with operational planning and budget modeling to produce a prioritized shortlist of viable locations.',
    impact:
      'Engagement begins shortly. Initial analysis and location recommendation expected within the first month. (Pro-bono engagement)',
    timeline: '3 months',
    tags: ['Market Analysis', 'Spatial Analytics', 'Python / Data Pipelines', 'Data Analysis'],
  },
]