// Services / Capabilities page content.
// Update the title, description, and bullet points here without touching any page code.

export interface Service {
  index: string
  title: string
  description: string
  bullets: string[]
}

export const servicesPage = {
  headline: 'Capabilities',
  subheadline:
    'A focused set of high-impact disciplines — each grounded in quantitative rigor and delivered with production-grade engineering standards.',
}

export const services: Service[] = [
  {
    index: '01',
    title: 'Quantitative Analytics & Data Systems',
    description:
      'We design and build the data infrastructure organizations need to make confident, evidence-based decisions — from raw ingestion to executive-ready insight.',
    bullets: [
      'Predictive modeling and statistical inference',
      'Reporting architecture and automated dashboards',
      'Data pipeline and telemetry system design',
      'KPI framework design and metric taxonomy',
      'Time-series analysis and forecasting models',
    ],
  },
  {
    index: '02',
    title: 'Technical Prototyping & Automation',
    description:
      'We turn complex operational problems into reliable software — internal tools, workflow automations, and applied AI systems built to last.',
    bullets: [
      'Internal tooling and custom web applications',
      'Workflow automation and system integrations',
      'Applied AI and machine learning prototypes',
      'API design, micro-services, and ETL pipelines',
      'Computer vision and document intelligence systems',
    ],
  },
  {
    index: '03',
    title: 'Strategy & Advisory',
    description:
      'We provide the analytical and technical perspective leadership teams need before committing to a direction — grounded in data, not convention.',
    bullets: [
      'Market viability and competitive landscape analysis',
      'Technology stack evaluation and architecture review',
      'Operational workflow assessment and optimization',
      'Build vs. buy analysis and vendor due diligence',
      'Data governance and systems audit',
    ],
  },
]
