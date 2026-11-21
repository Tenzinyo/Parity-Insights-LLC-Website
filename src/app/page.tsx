import Link from 'next/link'
import Image from 'next/image'
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
      <section className="relative min-h-screen flex flex-col justify-center pt-16 px-6 overflow-hidden">
        {/* Background logo watermark */}
        <div className="absolute inset-0 flex items-center justify-end pointer-events-none select-none">
          <Image
            src="/logo.jpeg"
            alt=""
            width={700}
            height={700}
            className="opacity-[0.06] mix-blend-multiply translate-x-24 md:translate-x-16"
            unoptimized
            priority
          />
        </div>
        <div className="relative max-w-6xl mx-auto w-full py-24 md:py-32">
          <p className="text-xs uppercase tracking-[0.25em] text-brand-muted mb-8">
            Technology & Economic Consulting
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-5xl font-black tracking-tighter leading-[0.92] text-brand-black mb-8">
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
              className="inline-block bg-brand-blue text-white text-xs uppercase tracking-widest font-semibold px-8 py-4 hover:bg-brand-blue-dark transition-colors"
            >
              {site.cta.primary.label}
            </Link>
            <Link
              href={site.cta.secondary.href}
              className="inline-block border border-brand-border text-brand-black text-xs uppercase tracking-widest font-semibold px-8 py-4 hover:border-brand-black transition-colors"
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
                <span className="text-xs text-brand-blue font-mono font-semibold">{pillar.index}</span>
                <h3 className="mt-4 mb-4 text-lg font-semibold leading-snug text-brand-black">
                  {pillar.title}
                </h3>
                <p className="text-sm text-brand-sub leading-relaxed">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured Work ── */}
      <section className="border-t border-brand-border px-6 py-24 md:py-32 bg-brand-near-black">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-12">
            <p className="text-xs uppercase tracking-[0.25em] text-brand-muted">Featured Work</p>
            <Link
              href="/projects"
              className="text-xs uppercase tracking-widest text-brand-blue hover:text-brand-blue-dark transition-colors"
            >
              View All Case Studies →
            </Link>
          </div>

          <div className="flex flex-col gap-8">

            {/* Card 1 — GTM Tracker (Product Engineering) */}
            <div className="border border-brand-border bg-white p-8 md:p-10">
              <div className="flex flex-wrap gap-2 mb-6">
                {['Product Engineering', 'React / Next.js', 'Full-Stack'].map((tag) => (
                  <span key={tag} className="text-[10px] uppercase tracking-widest px-2.5 py-1 border border-brand-border text-brand-muted">
                    {tag}
                  </span>
                ))}
                <span className="text-[10px] uppercase tracking-widest px-2.5 py-1 bg-brand-orange text-white ml-auto">
                  Featured
                </span>
              </div>

              <div className="grid md:grid-cols-2 gap-8 md:gap-16">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-brand-black mb-4 leading-snug">
                    Go-to-Market Strategy Tracker
                  </h2>
                  <p className="text-sm text-brand-sub leading-relaxed mb-6">
                    A full-stack GTM platform with pipeline kanban, lead lifecycle funnel (Lead → MQL → SQL
                    → Customer), voice activity logging via local Whisper, and a custom report builder with
                    CSV export. Seeded with $3.5M in B2B demo pipeline across 12+ institutional accounts.
                  </p>
                  <div className="flex flex-wrap gap-4 text-xs text-brand-muted mb-8">
                    <span>$3.5M demo pipeline</span>
                    <span className="text-brand-border">|</span>
                    <span>10+ app modules</span>
                    <span className="text-brand-border">|</span>
                    <span>Live on Netlify</span>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <Link
                      href="/projects/go-to-market-tracker"
                      className="inline-block bg-brand-blue text-white text-xs uppercase tracking-widest font-semibold px-6 py-3 hover:bg-brand-blue-dark transition-colors"
                    >
                      View Case Study
                    </Link>
                    <a
                      href="https://go-to-market-tracker.netlify.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block border border-brand-border text-brand-black text-xs uppercase tracking-widest font-semibold px-6 py-3 hover:border-brand-black transition-colors"
                    >
                      Live Demo ↗
                    </a>
                  </div>
                </div>

                {/* Screenshot preview */}
                <div className="relative w-full aspect-[16/10] border border-brand-border bg-brand-near-black overflow-hidden">
                  <Image
                    src="/projects/gtm-tracker/screenshot-1.png"
                    alt="Go-to-Market Tracker application screenshot"
                    fill
                    className="object-cover object-top"
                    unoptimized
                  />
                </div>
              </div>
            </div>

            {/* Card 2 — NOVA Retail Expansion (Market Analysis) */}
            <div className="border border-brand-border bg-white p-8 md:p-10">
              <div className="flex flex-wrap gap-2 mb-6">
                {['Market Analysis', 'Spatial Analytics', 'Python / Data Pipelines', 'Data Analysis'].map((tag) => (
                  <span key={tag} className="text-[10px] uppercase tracking-widest px-2.5 py-1 border border-brand-border text-brand-muted">
                    {tag}
                  </span>
                ))}
                <span className="text-[10px] uppercase tracking-widest px-2.5 py-1 bg-brand-orange text-white ml-auto">
                  Featured
                </span>
              </div>

              <div className="grid md:grid-cols-2 gap-8 md:gap-16">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-brand-black mb-4 leading-snug">
                    Northern Virginia & Mid-Atlantic Retail Expansion Analysis
                  </h2>
                  <p className="text-sm text-brand-sub leading-relaxed mb-6">
                    Census ACS demographic extraction across 5 Northern Virginia counties — evaluating
                    female target density (ages 20–60), median household income, and commercial lease
                    feasibility across a $3,500–$4,500/mo budget to identify optimal retail footprints
                    for a DMV-based boutique brand.
                  </p>
                  <div className="flex flex-wrap gap-4 text-xs text-brand-muted mb-8">
                    <span>5 counties evaluated</span>
                    <span className="text-brand-border">|</span>
                    <span>15+ commercial sites screened</span>
                    <span className="text-brand-border">|</span>
                    <span>4 submarkets shortlisted</span>
                  </div>
                  <Link
                    href="/projects/nova-retail-expansion"
                    className="inline-block bg-brand-blue text-white text-xs uppercase tracking-widest font-semibold px-6 py-3 hover:bg-brand-blue-dark transition-colors"
                  >
                    Read Case Study
                  </Link>
                </div>

                {/* Mini stats */}
                <div className="grid grid-cols-2 gap-4 content-start">
                  {[
                    { county: 'Fairfax', pop: '625,980', label: 'Female 20–59' },
                    { county: 'Loudoun', hhi: '$205,596', label: 'Median HHI (25–44)' },
                    { county: 'Arlington', pop: '153,432', label: 'Female 20–59' },
                    { county: 'Prince William', pop: '273,112', label: 'Female 20–59' },
                  ].map((stat) => (
                    <div key={stat.county} className="bg-brand-near-black p-4 border border-brand-border">
                      <p className="text-[10px] uppercase tracking-widest text-brand-muted mb-1">{stat.county}</p>
                      <p className="text-xl font-bold text-brand-blue">{stat.pop ?? stat.hhi}</p>
                      <p className="text-[10px] text-brand-muted mt-0.5">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Methodology ── */}
      <section className="border-t border-brand-border px-6 py-24 md:py-32">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs uppercase tracking-[0.25em] text-brand-muted mb-16">
            How We Work
          </p>

          <div className="grid md:grid-cols-3 gap-12 md:gap-16">
            {steps.map((step) => (
              <div key={step.number} className="flex gap-6">
                <span className="shrink-0 w-8 h-8 border border-brand-blue flex items-center justify-center text-xs font-mono text-brand-blue font-semibold">
                  {step.number}
                </span>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-black mb-3">
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
      <section className="border-t border-brand-border px-6 py-24 md:py-32 bg-brand-near-black">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-8">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-brand-black max-w-md">
            Ready to move from data to decisions?
          </h2>
          <Link
            href="/contact"
            className="shrink-0 inline-block bg-brand-orange text-white text-xs uppercase tracking-widest font-semibold px-8 py-4 hover:bg-brand-orange-dark transition-colors"
          >
            Start a Conversation
          </Link>
        </div>
      </section>
    </>
  )
}
