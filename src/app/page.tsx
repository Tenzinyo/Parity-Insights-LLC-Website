import Link from 'next/link'
import { site } from '@/content/site'

const pillars = [
  {
    index: '01',
    title: 'Data Strategy & Analytics Engineering',
    description:
      'Turning raw data into reliable systems — pipelines, models, and dashboards that actually get used.',
  },
  {
    index: '02',
    title: 'Custom Automation & Applied AI',
    description:
      'Internal tools, workflow integrations, and machine learning systems built for production — not demos.',
  },
  {
    index: '03',
    title: 'Strategic Operations & Market Analysis',
    description:
      'Quantitative frameworks for market entry, tech stack decisions, and operational efficiency assessments.',
  },
]

const steps = [
  {
    number: '1',
    label: 'Assess & Quantify',
    description:
      'We map the problem space, identify the right data sources, and measure the cost of the status quo.',
  },
  {
    number: '2',
    label: 'Prototype & Validate',
    description:
      'We build a working solution quickly, test it against real conditions, and de-risk the core assumptions.',
  },
  {
    number: '3',
    label: 'Ship & Scale',
    description:
      'We deliver production-ready systems with documentation, handoff support, and a path to independent operation.',
  },
]

export default function Home() {
  const [headline, subline] = site.tagline.split('\n')

  return (
    <>
      {/* ── Hero ── */}
      <section className="min-h-screen flex flex-col justify-center pt-16 px-6">
        <div className="max-w-6xl mx-auto w-full py-24 md:py-32">
          <p className="text-xs uppercase tracking-[0.25em] text-brand-muted mb-8">
            Technology & Economic Consulting
          </p>

          <h1 className="text-5xl sm:text-6xl md:text-8xl font-black tracking-tighter leading-[0.92] text-white mb-8">
            {headline}
            <br />
            <span className="text-brand-muted">{subline}</span>
          </h1>

          <p className="max-w-xl text-base md:text-lg text-brand-sub leading-relaxed mb-12">
            {site.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href={site.cta.primary.href}
              className="inline-block bg-white text-black text-xs uppercase tracking-widest font-semibold px-8 py-4 hover:bg-brand-dim transition-colors"
            >
              {site.cta.primary.label}
            </Link>
            <Link
              href={site.cta.secondary.href}
              className="inline-block border border-brand-border text-white text-xs uppercase tracking-widest font-semibold px-8 py-4 hover:border-white transition-colors"
            >
              {site.cta.secondary.label}
            </Link>
          </div>
        </div>
      </section>

      {/* ── Value Pillars ── */}
      <section className="border-t border-brand-border px-6 py-24 md:py-32">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs uppercase tracking-[0.25em] text-brand-muted mb-16">
            Focus Areas
          </p>

          <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-brand-border">
            {pillars.map((pillar) => (
              <div key={pillar.index} className="py-8 md:py-0 md:px-10 first:md:pl-0 last:md:pr-0">
                <span className="text-xs text-brand-muted font-mono">{pillar.index}</span>
                <h3 className="mt-4 mb-4 text-lg font-semibold leading-snug text-white">
                  {pillar.title}
                </h3>
                <p className="text-sm text-brand-sub leading-relaxed">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Methodology ── */}
      <section className="border-t border-brand-border px-6 py-24 md:py-32 bg-brand-near-black">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs uppercase tracking-[0.25em] text-brand-muted mb-16">
            How We Work
          </p>

          <div className="grid md:grid-cols-3 gap-12 md:gap-16">
            {steps.map((step) => (
              <div key={step.number} className="flex gap-6">
                <span className="shrink-0 w-8 h-8 border border-brand-border flex items-center justify-center text-xs font-mono text-brand-muted">
                  {step.number}
                </span>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-3">
                    {step.label}
                  </h3>
                  <p className="text-sm text-brand-sub leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA band ── */}
      <section className="border-t border-brand-border px-6 py-24 md:py-32">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-8">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white max-w-md">
            Ready to move from data to decisions?
          </h2>
          <Link
            href="/contact"
            className="shrink-0 inline-block bg-white text-black text-xs uppercase tracking-widest font-semibold px-8 py-4 hover:bg-brand-dim transition-colors"
          >
            Start a Conversation
          </Link>
        </div>
      </section>
    </>
  )
}
