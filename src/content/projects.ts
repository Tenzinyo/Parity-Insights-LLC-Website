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
      id: '01',          // unique, lowercase, hyphenated
      title: 'Probono Client, Go To Market Strategy for Opening Second Store Location',  // short, descriptive
      problem:
        'Where and how should a small business opena. second location in Virginia, USA',
      approach:
        'Data analysis of income and target audience demographics in different cities in Virgnia, location scouting, budget analysis, business synergies, and operational planning for opening a second location',
      impact:
        'Currently working with the client to implement the strategy and open a second location in Virginia, USA',
      timeline: '3 months',  // optional, e.g. "3 months", "6 weeks", "1 year"
      tags: ['Market Analysis','Spatial Analytics','Python / Data Pipelines','Internal Tooling' ],           // pick from the Tag type above
    },
]