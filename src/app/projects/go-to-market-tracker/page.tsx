import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Go-to-Market Strategy Tracker',
  description:
    'A full-stack product engineering solution for tracking GTM initiatives, campaign pipelines, channel performance, and launch milestones — with a live demo environment seeded with realistic data.',
}

const FEATURES = [
  {
    index: '01',
    title: 'Real-Time GTM Dashboard',
    desc: 'At-a-glance KPI tiles: total pipeline ($3.5M), weighted pipeline ($1.1M), overdue next steps, stale deals, tasks overdue, and upcoming meetings — all in one view with owner filtering.',
  },
  {
    index: '02',
    title: 'Kanban Pipeline Board',
    desc: 'Drag-and-drop deal management across Sales, Onboarding, and Customer Success tracks. Each card shows account name, segment, activity count, and priority/segment tags.',
  },
  {
    index: '03',
    title: 'Lead Lifecycle Funnel',
    desc: 'Full Lead → MQL → SQL → Opportunity → Customer → Churned tracking with stage conversion rates, lifecycle table, source attribution, owner assignment, and last-activity timestamps.',
  },
  {
    index: '04',
    title: 'Voice Activity Logging',
    desc: 'Log activities by typing, pasting a thread, or speaking — using a local Whisper model that extracts fields automatically with no AI API required. Works fully offline after first download.',
  },
  {
    index: '05',
    title: 'Custom Report Builder',
    desc: 'Build and save custom reports: select metric (activity count, pipeline value, etc.), group by (month, owner, stage), set date ranges, apply filters, then export to CSV or save for later.',
  },
  {
    index: '06',
    title: 'Accounts, Contacts & Tasks',
    desc: 'Full CRM layer with account records, contact management, task tracking, quota monitoring, health scores, and workflow automation — all seeded with realistic B2B demo data.',
  },
]

const TECH = [
  { label: 'Frontend', value: 'React / Next.js' },
  { label: 'Styling', value: 'Tailwind CSS' },
  { label: 'Activity Logging', value: 'Whisper (local, offline)' },
  { label: 'Data Layer', value: 'Seed-driven demo state' },
  { label: 'Deployment', value: 'Netlify (static export)' },
  { label: 'Type Safety', value: 'TypeScript' },
]

const SCREENSHOTS = [
  { file: '/projects/gtm-tracker/screenshot-1.png', caption: 'Dashboard — pipeline KPIs, stage breakdown & overdue next steps' },
  { file: '/projects/gtm-tracker/screenshot-2.png', caption: 'Pipeline Kanban — Sales, Onboarding & Customer Success boards' },
  { file: '/projects/gtm-tracker/screenshot-4.png', caption: 'Lead Pipeline — lifecycle funnel with MQL/SQL/Opportunity tracking' },
  { file: '/projects/gtm-tracker/screenshot-5.png', caption: 'Report Builder — custom metrics, filters, charts & CSV export' },
  { file: '/projects/gtm-tracker/screenshot-3.png', caption: 'Log Activity — voice input via local Whisper model (offline)' },
]

function ScreenshotSlot({ file, caption, index }: { file: string; caption: string; index: number }) {
  return (
    <div className="flex flex-col gap-3">
      <div className="relative w-full aspect-[16/10] border border-brand-border bg-brand-near-black overflow-hidden">
        <Image
          src={file}
          alt={caption}
          fill
          className="object-cover object-top"
          unoptimized
        />
        {/* Fallback label shown while image loads or if missing */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 pointer-events-none">
          <span className="text-xs text-brand-muted uppercase tracking-widest">
            {String(index + 1).padStart(2, '0')}
          </span>
        </div>
      </div>
      <p className="text-xs text-brand-muted uppercase tracking-widest">{caption}</p>
    </div>
  )
}

export default function GTMTrackerPage() {
  return (
    <div className="pt-16">

      {/* ── Page Header ── */}
      <div className="border-b border-brand-border px-6 py-20 md:py-28 bg-brand-near-black">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-2 mb-6">
            {['Product Engineering', 'React / Next.js', 'Full-Stack', 'Internal Tooling'].map((tag) => (
              <span key={tag} className="text-[10px] uppercase tracking-widest px-2.5 py-1 border border-brand-border text-brand-muted bg-white">
                {tag}
              </span>
            ))}
            <span className="text-[10px] uppercase tracking-widest px-2.5 py-1 bg-brand-orange text-white">
              Featured
            </span>
          </div>
          <p className="text-xs uppercase tracking-[0.25em] text-brand-muted mb-4">Product Engineering</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-brand-black mb-6 leading-tight">
            Go-to-Market<br className="hidden md:block" /> Strategy Tracker
          </h1>
          <p className="max-w-2xl text-base md:text-lg text-brand-sub leading-relaxed mb-8">
            A production-ready web application for managing GTM initiatives end-to-end — campaign pipelines,
            channel performance, milestone tracking, and stakeholder reporting — with a fully seeded demo
            environment ready to explore.
          </p>
          <div className="flex flex-wrap items-center gap-6 text-xs text-brand-muted border-t border-brand-border pt-6">
            <span><span className="font-semibold text-brand-black">Type:</span> Product Engineering / Full-Stack Application</span>
            <span><span className="font-semibold text-brand-black">Engagement:</span> 2025–2026</span>
            <span><span className="font-semibold text-brand-black">Environment:</span> Live demo with seed data</span>
            <a
              href="https://go-to-market-tracker.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-auto shrink-0 inline-block bg-brand-blue text-white text-xs uppercase tracking-widest font-semibold px-6 py-2.5 hover:bg-brand-blue-dark transition-colors"
            >
              View Live Demo ↗
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 space-y-24">

        {/* ── 1. Overview ── */}
        <section>
          <p className="text-xs uppercase tracking-[0.25em] text-brand-muted mb-6">01 — Overview</p>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-brand-black mb-5">
                The Problem It Solves
              </h2>
              <p className="text-brand-sub leading-relaxed mb-4">
                GTM teams typically split their workflow across a CRM, a spreadsheet tracker, a project
                management tool, and a reporting dashboard — none of which talk to each other. Pipeline
                health is invisible until it is too late, lead conversion gaps go unnoticed, and activity
                logging is manual and inconsistent.
              </p>
              <p className="text-brand-sub leading-relaxed mb-4">
                This application consolidates the full GTM stack into a single purpose-built interface:
                pipeline kanban, lead lifecycle funnel, activity logging (including voice input via a
                local Whisper model), and a custom report builder with CSV export.
              </p>
              <p className="text-brand-sub leading-relaxed">
                The demo environment is seeded with a realistic B2B book of business — institutional
                finance accounts (Bridgewater, Citadel, Vanguard, BlackRock), $3.5M in demo pipeline,
                and 42 logged activities — so stakeholders can explore the full product without any
                configuration.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 content-start">
              {[
                { label: 'Demo Pipeline', value: '$3.5M', sub: 'total · $1.1M weighted', color: 'brand-blue' },
                { label: 'Seed Accounts', value: '12+', sub: 'B2B institutional accounts', color: 'brand-blue' },
                { label: 'Logged Activities', value: '42', sub: 'across 4 months of data', color: 'brand-orange' },
                { label: 'App Modules', value: '10+', sub: 'pipeline · leads · reports · CRM', color: 'brand-orange' },
              ].map((kpi) => (
                <div key={kpi.label} className="bg-brand-near-black border border-brand-border p-5">
                  <p className="text-[10px] uppercase tracking-widest text-brand-muted mb-2">{kpi.label}</p>
                  <p className={`text-lg font-black tracking-tight text-${kpi.color}`}>{kpi.value}</p>
                  <p className="text-xs text-brand-muted mt-1">{kpi.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 2. Screenshots ── */}
        <section className="border-t border-brand-border pt-16">
          <p className="text-xs uppercase tracking-[0.25em] text-brand-muted mb-6">02 — Application Screenshots</p>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-brand-black mb-4">
            Live Demo Views
          </h2>
          <p className="text-brand-sub leading-relaxed max-w-2xl mb-10">
            All screens shown below are from the live application at{' '}
            <a
              href="https://go-to-market-tracker.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-blue hover:underline"
            >
              go-to-market-tracker.netlify.app
            </a>
            {' '}— populated with demo seed data to illustrate real-world GTM workflow coverage.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {SCREENSHOTS.slice(0, 4).map((shot, i) => (
              <ScreenshotSlot key={shot.file} file={shot.file} caption={shot.caption} index={i} />
            ))}
          </div>
          {/* 5th screenshot — full width */}
          {SCREENSHOTS[4] && (
            <div className="mt-8">
              <ScreenshotSlot file={SCREENSHOTS[4].file} caption={SCREENSHOTS[4].caption} index={4} />
            </div>
          )}
          <div className="mt-8">
            <a
              href="https://go-to-market-tracker.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-brand-blue text-brand-blue text-xs uppercase tracking-widest font-semibold px-6 py-2.5 hover:bg-brand-blue hover:text-white transition-colors"
            >
              Explore the Live App ↗
            </a>
          </div>
        </section>

        {/* ── 3. Feature Breakdown ── */}
        <section className="border-t border-brand-border pt-16">
          <p className="text-xs uppercase tracking-[0.25em] text-brand-muted mb-6">03 — Feature Breakdown</p>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-brand-black mb-8">
            What the Application Covers
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map((feature) => (
              <div key={feature.index} className="flex gap-4">
                <span className="shrink-0 text-xs font-mono text-brand-blue font-semibold mt-0.5">{feature.index}</span>
                <div>
                  <h3 className="text-sm font-semibold text-brand-black mb-2">{feature.title}</h3>
                  <p className="text-sm text-brand-sub leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 4. Tech Stack ── */}
        <section className="border-t border-brand-border pt-16">
          <p className="text-xs uppercase tracking-[0.25em] text-brand-muted mb-6">04 — Technical Stack</p>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-brand-black mb-8">
            Built for Production
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {TECH.map((item) => (
              <div key={item.label} className="bg-brand-near-black border border-brand-border p-5">
                <p className="text-[10px] uppercase tracking-widest text-brand-muted mb-2">{item.label}</p>
                <p className="text-sm font-semibold text-brand-black">{item.value}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 border-l-2 border-brand-blue pl-4 py-1 max-w-2xl">
            <p className="text-[10px] uppercase tracking-widest text-brand-muted mb-2">Engineering Note</p>
            <p className="text-sm text-brand-sub leading-relaxed">
              The application is architected as a data-first, component-driven system — meaning the
              underlying data models and state structure can be wired to any real backend (REST, GraphQL,
              Supabase, etc.) with minimal refactoring. The demo seed layer is a drop-in replacement for
              live API calls.
            </p>
          </div>
        </section>

        {/* ── 5. Capabilities Demonstrated ── */}
        <section className="border-t border-brand-border pt-16">
          <p className="text-xs uppercase tracking-[0.25em] text-brand-muted mb-6">05 — Capabilities Demonstrated</p>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-brand-black mb-8">
            What This Signals
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                metric: 'Full-Stack Delivery',
                desc: 'End-to-end ownership of UI architecture, data modeling, component design, and deployment pipeline — no handoffs required.',
                accent: 'text-brand-blue',
              },
              {
                metric: 'Domain-Aware Engineering',
                desc: 'The application reflects genuine understanding of how GTM teams operate — not just a generic CRUD app. Workflows, terminology, and reporting match real business needs.',
                accent: 'text-brand-blue',
              },
              {
                metric: 'Demo-Ready Delivery',
                desc: 'Shipped with a seeded demo environment that communicates value instantly — critical for internal tools, client demos, and investor-facing products.',
                accent: 'text-brand-orange',
              },
              {
                metric: 'Composable Architecture',
                desc: 'Built to be extended: new channels, new initiative types, new reporting views can be added without restructuring the core data layer.',
                accent: 'text-brand-orange',
              },
              {
                metric: 'Production Standards',
                desc: 'TypeScript throughout, clean component boundaries, and a deployment pipeline that reflects real-world engineering discipline — not prototype quality.',
                accent: 'text-brand-blue',
              },
              {
                metric: 'Stakeholder UX',
                desc: 'Designed for non-technical stakeholders: clear visual hierarchy, plain-language labels, and reporting views that communicate status without training.',
                accent: 'text-brand-blue',
              },
            ].map((item) => (
              <div key={item.metric} className="bg-brand-near-black border border-brand-border p-6">
                <p className={`text-base font-black mb-2 ${item.accent}`}>{item.metric}</p>
                <p className="text-sm text-brand-sub leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── 6. Next Steps ── */}
        <section className="border-t border-brand-border pt-16">
          <p className="text-xs uppercase tracking-[0.25em] text-brand-muted mb-6">06 — Next Steps & Scale Path</p>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-brand-black mb-4">
            From Demo to Production
          </h2>
          <p className="text-brand-sub leading-relaxed max-w-2xl mb-10">
            The current application runs entirely on the client with seeded demo data — intentionally so,
            for fast deployment and zero infrastructure overhead. For clients ready to operationalize it
            with real data and real users, the path to production is well-defined.
          </p>

          <div className="flex flex-col gap-4">
            {/* Step 1 */}
            <div className="border border-brand-border bg-white p-6 md:p-8 grid md:grid-cols-[auto_1fr] gap-6">
              <div className="flex items-start gap-4">
                <span className="shrink-0 w-8 h-8 border border-brand-blue flex items-center justify-center text-xs font-mono text-brand-blue font-semibold">
                  1
                </span>
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <h3 className="text-base font-bold text-brand-black">PostgreSQL Backend & Persistent Data Layer</h3>
                  <span className="text-[10px] uppercase tracking-widest px-2 py-0.5 border border-brand-border text-brand-muted">Infrastructure</span>
                </div>
                <p className="text-sm text-brand-sub leading-relaxed mb-3">
                  Replace the in-memory seed state with a PostgreSQL database — accounts, contacts, deals,
                  activities, and reports all persisted server-side. The existing data models map directly
                  to relational tables with minimal schema work. A Node.js / Express or Next.js API layer
                  sits between the frontend and database, handling queries, mutations, and filtering logic
                  that currently runs client-side.
                </p>
                <p className="text-xs text-brand-muted">
                  Enables: multi-user data persistence · real-time pipeline state · concurrent access across teams
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="border border-brand-border bg-white p-6 md:p-8 grid md:grid-cols-[auto_1fr] gap-6">
              <div className="flex items-start gap-4">
                <span className="shrink-0 w-8 h-8 border border-brand-blue flex items-center justify-center text-xs font-mono text-brand-blue font-semibold">
                  2
                </span>
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <h3 className="text-base font-bold text-brand-black">Authentication & Role-Based Access</h3>
                  <span className="text-[10px] uppercase tracking-widest px-2 py-0.5 border border-brand-border text-brand-muted">Auth</span>
                </div>
                <p className="text-sm text-brand-sub leading-relaxed mb-3">
                  Add login and session management via Auth.js (NextAuth) or a managed provider like Auth0 /
                  Clerk. User roles — rep, manager, admin — gate access to pipeline views, reporting, quota
                  data, and settings. Each user sees their own assigned accounts and activities; managers
                  see team-wide views. SSO via Google Workspace is a one-config addition for most B2B clients.
                </p>
                <p className="text-xs text-brand-muted">
                  Enables: individual logins · team-scoped data · audit trails · SSO for enterprise clients
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="border border-brand-border bg-white p-6 md:p-8 grid md:grid-cols-[auto_1fr] gap-6">
              <div className="flex items-start gap-4">
                <span className="shrink-0 w-8 h-8 border border-brand-orange flex items-center justify-center text-xs font-mono text-brand-orange font-semibold">
                  3
                </span>
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <h3 className="text-base font-bold text-brand-black">AWS Hosting for Production Scale</h3>
                  <span className="text-[10px] uppercase tracking-widest px-2 py-0.5 border border-brand-border text-brand-muted">Cloud</span>
                  <span className="text-[10px] uppercase tracking-widest px-2 py-0.5 bg-brand-orange text-white">If client scales</span>
                </div>
                <p className="text-sm text-brand-sub leading-relaxed mb-3">
                  For clients with scale requirements — multiple teams, high activity volume, or enterprise
                  security mandates — the application deploys to AWS: the Next.js frontend on ECS or Elastic
                  Beanstalk, PostgreSQL on RDS (managed, automated backups, Multi-AZ for high availability),
                  and static assets served via CloudFront CDN. Infrastructure-as-code via Terraform or AWS
                  CDK keeps the environment reproducible and auditable.
                </p>
                <p className="text-xs text-brand-muted">
                  Enables: enterprise SLAs · VPC isolation · automated backups · horizontal scaling · SOC 2 alignment
                </p>
              </div>
            </div>
          </div>

          {/* Summary bar */}
          <div className="mt-8 bg-brand-near-black border border-brand-border p-6 grid sm:grid-cols-3 gap-6">
            {[
              { phase: 'Phase 1', label: 'PostgreSQL + API', sub: 'persistent multi-user data' },
              { phase: 'Phase 2', label: 'Auth + RBAC', sub: 'login, roles, SSO' },
              { phase: 'Phase 3', label: 'AWS Deployment', sub: 'RDS · ECS · CloudFront' },
            ].map((item) => (
              <div key={item.phase}>
                <p className="text-[10px] uppercase tracking-widest text-brand-muted mb-1">{item.phase}</p>
                <p className="text-sm font-bold text-brand-black">{item.label}</p>
                <p className="text-xs text-brand-muted mt-0.5">{item.sub}</p>
              </div>
            ))}
          </div>
        </section>

      </div>

      {/* ── CTA Banner ── */}
      <div className="border-t border-brand-border mt-8 px-6 py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="border border-brand-border bg-brand-near-black p-8 md:p-12 flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-brand-muted mb-3">Build With Us</p>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-brand-black mb-3">
                Need a custom internal tool or product prototype?
              </h2>
              <p className="text-brand-sub max-w-lg leading-relaxed">
                We design and build production-ready applications — from MVP to fully operational product —
                with the same engineering rigor and domain clarity shown here.
              </p>
            </div>
            <Link
              href="/contact"
              className="shrink-0 inline-block bg-brand-orange text-white text-xs uppercase tracking-widest font-semibold px-8 py-4 hover:bg-brand-orange-dark transition-colors whitespace-nowrap"
            >
              Start a Conversation
            </Link>
          </div>
        </div>
      </div>

      {/* Back link */}
      <div className="border-t border-brand-border px-6 py-8 bg-brand-near-black">
        <div className="max-w-6xl mx-auto">
          <Link
            href="/projects"
            className="text-xs uppercase tracking-widest text-brand-muted hover:text-brand-black transition-colors"
          >
            ← Back to All Case Studies
          </Link>
        </div>
      </div>

    </div>
  )
}
