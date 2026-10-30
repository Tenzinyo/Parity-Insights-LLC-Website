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

export interface Project {
  id: string
  title: string
  problem: string
  approach: string
  impact: string
  tags: Tag[]
}

export const projectsPage = {
  headline: 'Selected Work',
  subheadline:
    'A cross-section of engagements spanning data engineering, applied AI, and strategic analysis.',
}

// Add real case studies here when ready.
// Each entry needs: id, title, problem, approach, impact, and tags.
export const projects: Project[] = []