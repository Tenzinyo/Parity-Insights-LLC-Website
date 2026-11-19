import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Northern Virginia & Mid-Atlantic Retail Expansion Analysis',
  description:
    'Census ACS demographic extraction across 5 Northern Virginia counties evaluating female target density, median household income, and commercial lease feasibility for a DMV boutique brand expansion.',
}

// ── Exact figures extracted from NOVA_market_analysis.ipynb ──────────────────
// Source: U.S. Census ACS 1-Year Estimates 2025 (S0101, S1903)
// Female headcounts computed as: (Percent Female age bracket / 100) × Total Population
// All figures rounded to whole numbers per notebook methodology

const COUNTIES = [
  {
    name: 'Arlington',
    shortName: 'Arlington',
    totalPop: 243931,
    femalePop: 153432,  // sum of pct cols 20–59: 62.9% × 243,931
    medianHHI_2544: 126988,
    medianHHI_4564: 203754,
    // female % breakdown (ages 20–59) direct from notebook cell 4
    femaleBreakdown: [
      { bracket: '20–24', pct: 6.7 },
      { bracket: '25–29', pct: 13.8 },
      { bracket: '30–34', pct: 10.2 },
      { bracket: '35–39', pct: 8.4 },
      { bracket: '40–44', pct: 7.8 },
      { bracket: '45–49', pct: 5.6 },
      { bracket: '50–54', pct: 6.0 },
      { bracket: '55–59', pct: 4.4 },
    ],
  },
  {
    name: 'Fairfax',
    shortName: 'Fairfax',
    totalPop: 1167873,
    femalePop: 625980,  // 53.6% × 1,167,873
    medianHHI_2544: 161948,
    medianHHI_4564: null,
    femaleBreakdown: [
      { bracket: '20–24', pct: 5.7 },
      { bracket: '25–29', pct: 6.7 },
      { bracket: '30–34', pct: 6.6 },
      { bracket: '35–39', pct: 7.4 },
      { bracket: '40–44', pct: 7.5 },
      { bracket: '45–49', pct: 7.0 },
      { bracket: '50–54', pct: 6.6 },
      { bracket: '55–59', pct: 6.1 },
    ],
  },
  {
    name: 'Fauquier',
    shortName: 'Fauquier',
    totalPop: 76503,
    femalePop: 35650,   // 46.6% × 76,503
    medianHHI_2544: 136034,
    medianHHI_4564: null,
    femaleBreakdown: [
      { bracket: '20–24', pct: 5.4 },
      { bracket: '25–29', pct: 4.8 },
      { bracket: '30–34', pct: 6.5 },
      { bracket: '35–39', pct: 5.3 },
      { bracket: '40–44', pct: 7.0 },
      { bracket: '45–49', pct: 5.3 },
      { bracket: '50–54', pct: 7.1 },
      { bracket: '55–59', pct: 5.2 },
    ],
  },
  {
    name: 'Loudoun',
    shortName: 'Loudoun',
    totalPop: 449749,
    femalePop: 245563,  // 54.6% × 449,749
    medianHHI_2544: 205596,
    medianHHI_4564: 215139,
    femaleBreakdown: [
      { bracket: '20–24', pct: 5.8 },
      { bracket: '25–29', pct: 5.1 },
      { bracket: '30–34', pct: 5.8 },
      { bracket: '35–39', pct: 7.7 },
      { bracket: '40–44', pct: 7.9 },
      { bracket: '45–49', pct: 8.1 },
      { bracket: '50–54', pct: 7.2 },
      { bracket: '55–59', pct: 7.0 },
    ],
  },
  {
    name: 'Prince William',
    shortName: 'Prince Wm.',
    totalPop: 502966,
    femalePop: 273110,  // 54.3% × 502,966
    medianHHI_2544: 145367,
    medianHHI_4564: null,
    femaleBreakdown: [
      { bracket: '20–24', pct: 6.6 },
      { bracket: '25–29', pct: 6.4 },
      { bracket: '30–34', pct: 6.4 },
      { bracket: '35–39', pct: 6.5 },
      { bracket: '40–44', pct: 7.8 },
      { bracket: '45–49', pct: 7.1 },
      { bracket: '50–54', pct: 7.0 },
      { bracket: '55–59', pct: 6.5 },
    ],
  },
]

// Site-scoring matrix: 4 anonymized shortlisted retail corridors
// 100-point weighted framework per engagement methodology
const CORRIDORS = [
  {
    label: 'Corridor A',
    region: 'Vienna / Tysons',
    market: 'Fairfax County',
    footTraffic: 28,  // /30
    demoIncome:  27,  // /30
    leaseFeasibility: 22, // /25
    buildoutReadiness: 13, // /15
    total: 90,
    top: true,
  },
  {
    label: 'Corridor B',
    region: 'Reston / Herndon',
    market: 'Fairfax County',
    footTraffic: 25,
    demoIncome:  24,
    leaseFeasibility: 23,
    buildoutReadiness: 12,
    total: 84,
    top: false,
  },
  {
    label: 'Corridor C',
    region: 'Ashburn / Sterling',
    market: 'Loudoun County',
    footTraffic: 22,
    demoIncome:  26,
    leaseFeasibility: 21,
    buildoutReadiness: 11,
    total: 80,
    top: false,
  },
  {
    label: 'Corridor D',
    region: 'Woodbridge / Lake Ridge',
    market: 'Prince William County',
    footTraffic: 20,
    demoIncome:  20,
    leaseFeasibility: 24,
    buildoutReadiness: 10,
    total: 74,
    top: false,
  },
]

// ── SVG chart helpers ─────────────────────────────────────────────────────────

function fmt(n: number): string {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(2)}M`
  if (n >= 1_000)     return `${Math.round(n / 1_000)}K`
  return n.toLocaleString()
}

function fmtUSD(n: number): string {
  return `$${Math.round(n / 1_000)}K`
}

// SVG Chart: Female Population 20–59 (blue bars)
function FemalePopChart() {
  const W = 580, H = 240
  const ML = 54, MR = 12, MT = 32, MB = 52
  const chartW = W - ML - MR   // 514
  const chartH = H - MT - MB   // 156
  const bottom = MT + chartH   // 188

  const maxPop = Math.max(...COUNTIES.map(c => c.femalePop))
  const colW = chartW / COUNTIES.length  // 102.8

  // Y-axis ticks
  const ticks = [0, 150000, 300000, 450000, 600000]

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto" aria-label="Female population ages 20–59 by county">
      {/* Y-axis grid + labels */}
      {ticks.map((tick) => {
        const y = bottom - (tick / maxPop) * chartH
        return (
          <g key={tick}>
            <line x1={ML} y1={y} x2={W - MR} y2={y} stroke="#E2E8F0" strokeWidth="1" />
            <text x={ML - 4} y={y + 3.5} textAnchor="end" fontSize="8.5" fill="#94A3B8" fontFamily="system-ui, sans-serif">
              {tick === 0 ? '0' : fmt(tick)}
            </text>
          </g>
        )
      })}

      {/* Bars */}
      {COUNTIES.map((county, i) => {
        const barW = colW * 0.6
        const barH = (county.femalePop / maxPop) * chartH
        const x = ML + i * colW + (colW - barW) / 2
        const y = bottom - barH
        const cx = ML + i * colW + colW / 2
        return (
          <g key={county.name}>
            <rect x={x} y={y} width={barW} height={barH} fill="#2563EB" rx="2" />
            {/* value label */}
            <text x={cx} y={y - 4} textAnchor="middle" fontSize="8" fill="#2563EB" fontFamily="system-ui, sans-serif" fontWeight="600">
              {fmt(county.femalePop)}
            </text>
            {/* x-axis label */}
            <text x={cx} y={bottom + 14} textAnchor="middle" fontSize="8.5" fill="#334155" fontFamily="system-ui, sans-serif">
              {county.shortName}
            </text>
          </g>
        )
      })}

      {/* Axes */}
      <line x1={ML} y1={MT} x2={ML} y2={bottom} stroke="#E2E8F0" strokeWidth="1.5" />
      <line x1={ML} y1={bottom} x2={W - MR} y2={bottom} stroke="#E2E8F0" strokeWidth="1.5" />

      {/* Chart title */}
      <text x={ML} y={14} fontSize="9.5" fill="#64748B" fontFamily="system-ui, sans-serif" fontWeight="600" textTransform="uppercase" letterSpacing="0.08em">
        Female Population (Ages 20–59)
      </text>
    </svg>
  )
}

// SVG Chart: Median HHI 25–44 (orange bars)
function HHIChart() {
  const W = 580, H = 240
  const ML = 54, MR = 12, MT = 32, MB = 52
  const chartW = W - ML - MR
  const chartH = H - MT - MB
  const bottom = MT + chartH

  const maxHHI = Math.max(...COUNTIES.map(c => c.medianHHI_2544))
  const colW = chartW / COUNTIES.length

  const ticks = [0, 50000, 100000, 150000, 200000]

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto" aria-label="Median household income ages 25–44 by county">
      {ticks.map((tick) => {
        const y = bottom - (tick / maxHHI) * chartH
        return (
          <g key={tick}>
            <line x1={ML} y1={y} x2={W - MR} y2={y} stroke="#E2E8F0" strokeWidth="1" />
            <text x={ML - 4} y={y + 3.5} textAnchor="end" fontSize="8.5" fill="#94A3B8" fontFamily="system-ui, sans-serif">
              {tick === 0 ? '$0' : fmtUSD(tick)}
            </text>
          </g>
        )
      })}

      {COUNTIES.map((county, i) => {
        const barW = colW * 0.6
        const barH = (county.medianHHI_2544 / maxHHI) * chartH
        const x = ML + i * colW + (colW - barW) / 2
        const y = bottom - barH
        const cx = ML + i * colW + colW / 2
        return (
          <g key={county.name}>
            <rect x={x} y={y} width={barW} height={barH} fill="#F97316" rx="2" />
            <text x={cx} y={y - 4} textAnchor="middle" fontSize="8" fill="#EA580C" fontFamily="system-ui, sans-serif" fontWeight="600">
              {fmtUSD(county.medianHHI_2544)}
            </text>
            <text x={cx} y={bottom + 14} textAnchor="middle" fontSize="8.5" fill="#334155" fontFamily="system-ui, sans-serif">
              {county.shortName}
            </text>
          </g>
        )
      })}

      <line x1={ML} y1={MT} x2={ML} y2={bottom} stroke="#E2E8F0" strokeWidth="1.5" />
      <line x1={ML} y1={bottom} x2={W - MR} y2={bottom} stroke="#E2E8F0" strokeWidth="1.5" />

      <text x={ML} y={14} fontSize="9.5" fill="#64748B" fontFamily="system-ui, sans-serif" fontWeight="600" textTransform="uppercase" letterSpacing="0.08em">
        Median Household Income — Householders 25–44
      </text>
    </svg>
  )
}

// Progress bar for scoring matrix
function ScoreBar({ score, max, color }: { score: number; max: number; color: string }) {
  const pct = (score / max) * 100
  const W = 100, H = 10
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-20 h-2.5" aria-hidden="true">
      <rect x={0} y={0} width={W} height={H} fill="#F1F5F9" rx="2" />
      <rect x={0} y={0} width={pct} height={H} fill={color} rx="2" />
    </svg>
  )
}

// ── Page component ────────────────────────────────────────────────────────────

export default function NOVARetailExpansionPage() {
  return (
    <div className="pt-16">

      {/* ── Page Header ── */}
      <div className="border-b border-brand-border px-6 py-20 md:py-28 bg-brand-near-black">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-2 mb-6">
            {['Market Analysis', 'Spatial Analytics', 'Python / Data Pipelines', 'Data Analysis'].map((tag) => (
              <span key={tag} className="text-[10px] uppercase tracking-widest px-2.5 py-1 border border-brand-border text-brand-muted bg-white">
                {tag}
              </span>
            ))}
            <span className="text-[10px] uppercase tracking-widest px-2.5 py-1 bg-brand-orange text-white">
              Featured
            </span>
          </div>
          <p className="text-xs uppercase tracking-[0.25em] text-brand-muted mb-4">Case Study</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-brand-black mb-6 leading-tight">
            Northern Virginia &amp; Mid-Atlantic<br className="hidden md:block" /> Retail Expansion Analysis
          </h1>
          <p className="max-w-2xl text-base md:text-lg text-brand-sub leading-relaxed mb-8">
            Census ACS demographic extraction, spatial income-to-rent analysis, and commercial lease
            screening across 5 Northern Virginia counties and secondary Mid-Atlantic corridors —
            delivered for a multi-location boutique beauty &amp; personal care brand in the DMV.
          </p>
          <div className="flex flex-wrap gap-6 text-xs text-brand-muted border-t border-brand-border pt-6">
            <span><span className="font-semibold text-brand-black">Client:</span> Multi-location boutique beauty &amp; personal care brand, DMV market</span>
            <span><span className="font-semibold text-brand-black">Engagement:</span> 2025–2026</span>
            <span><span className="font-semibold text-brand-black">Scope:</span> 5 counties · 15+ commercial sites · 3 states</span>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 space-y-24">

        {/* ── 1. Executive Summary ── */}
        <section>
          <p className="text-xs uppercase tracking-[0.25em] text-brand-muted mb-6">01 — Executive Summary</p>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-brand-black mb-5">
                Business Problem
              </h2>
              <p className="text-brand-sub leading-relaxed mb-4">
                A multi-location boutique beauty &amp; personal care brand in the DMV sought to
                evaluate optimal retail expansion footprints across Northern Virginia (Arlington,
                Fairfax, Loudoun, Prince William, and Fauquier counties) and secondary Mid-Atlantic
                corridors — Richmond, VA; Charlotte, NC; Newark, DE — operating within a hard
                budget constraint of <strong className="text-brand-black">$3,500–$4,500/month</strong> in
                lease obligations and an 800–1,000 sq ft footprint requirement.
              </p>
              <p className="text-brand-sub leading-relaxed">
                The engagement required quantifying target demographic density (female population
                aged 20–60), evaluating commercial lease feasibility relative to projected revenue,
                and producing a prioritized shortlist of turnkey submarkets ready for immediate
                tenant occupancy.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 content-start">
              {[
                { label: 'Target Budget', value: '$3.5K–$4.5K/mo', sub: 'lease ceiling', color: 'brand-blue' },
                { label: 'Footprint', value: '800–1,000', sub: 'sq ft', color: 'brand-orange' },
                { label: 'Counties Evaluated', value: '5', sub: 'Northern Virginia', color: 'brand-blue' },
                { label: 'Sites Screened', value: '15+', sub: 'across 3 states', color: 'brand-orange' },
              ].map((kpi) => (
                <div key={kpi.label} className="bg-brand-near-black border border-brand-border p-5">
                  <p className="text-[10px] uppercase tracking-widest text-brand-muted mb-2">{kpi.label}</p>
                  <p className={`text-2xl font-black tracking-tight text-${kpi.color}`}>{kpi.value}</p>
                  <p className="text-xs text-brand-muted mt-1">{kpi.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 2. Methodology ── */}
        <section className="border-t border-brand-border pt-16">
          <p className="text-xs uppercase tracking-[0.25em] text-brand-muted mb-6">02 — Methodology & Data Pipeline</p>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-brand-black mb-8">
            From Census API to Ranked Shortlist
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                step: '01',
                title: 'ACS Demographic Extraction',
                desc: 'Pulled U.S. Census American Community Survey 1-Year and 5-Year Estimates (S0101, S1903, S1602) via Python and Pandas for all 5 target counties. Promoted label rows to column headers, dropped margin-of-error columns, and coerced all estimates to numeric types.',
              },
              {
                step: '02',
                title: 'Headcount Modeling',
                desc: 'Converted female percentage columns (ages 20–59, in 5-year brackets) to whole-number headcounts by multiplying each percentage against the county total population. Summed across all 8 age brackets to produce a single target demographic density figure per county.',
              },
              {
                step: '03',
                title: 'Income-to-Rent Ratio Analysis',
                desc: 'Extracted median household income by age of householder (15–24, 25–44, 45–64) for all five counties. Modeled income relative to the $3,500–$4,500/month lease ceiling to determine revenue feasibility thresholds and validate target submarkets.',
              },
              {
                step: '04',
                title: 'Fairfax Submarket Drill-Down',
                desc: 'Loaded 5-Year ACS census tract data for Fairfax County (84 tracts), computed target age population per tract, and merged with Virginia Tiger Line shapefiles. Identified Vienna and Tysons as highest-density submarkets at the town level.',
              },
              {
                step: '05',
                title: 'Commercial Lease Screening',
                desc: 'Screened 15+ retail properties across LoopNet, Crexi, and CommercialCafe within the $3.5K–$4.5K/mo threshold and 800–1,000 sq ft window. Evaluated co-tenancy mix, turnkey fit-out readiness, and walk score / foot traffic proxies.',
              },
              {
                step: '06',
                title: 'Composite Scoring & Ranking',
                desc: 'Applied a 100-point weighted evaluation framework across four shortlisted corridors, scoring Foot Traffic/Co-Tenancy (30%), Target Demographic Income Alignment (30%), Lease-to-Revenue Feasibility (25%), and Turnkey Build-Out Readiness (15%).',
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-4">
                <span className="shrink-0 text-xs font-mono text-brand-blue font-semibold mt-0.5">{item.step}</span>
                <div>
                  <h3 className="text-sm font-semibold text-brand-black mb-2">{item.title}</h3>
                  <p className="text-sm text-brand-sub leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 3. Visualization 1 ── */}
        <section className="border-t border-brand-border pt-16">
          <p className="text-xs uppercase tracking-[0.25em] text-brand-muted mb-6">03 — Target Demographic Density</p>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-brand-black mb-4">
            Female Population (Ages 20–59) &amp; Median Income by County
          </h2>
          <p className="text-brand-sub leading-relaxed max-w-2xl mb-10">
            Exact headcounts derived from ACS S0101 percentage estimates applied against 2025
            county total populations. Income figures from ACS S1903 median household income by
            age of householder. Source: U.S. Census Bureau, ACS 1-Year Estimates 2025.
          </p>

          {/* Dual chart grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div className="bg-white border border-brand-border p-6">
              <FemalePopChart />
              <p className="text-xs text-brand-muted mt-3 text-center">
                Fairfax dominates at 625,980 — over 2× the next largest market (Prince William, 273,110)
              </p>
            </div>
            <div className="bg-white border border-brand-border p-6">
              <HHIChart />
              <p className="text-xs text-brand-muted mt-3 text-center">
                Loudoun leads income at $205,596; Arlington (25–44) earns $126,988 but spikes to $203,754 at 45–64
              </p>
            </div>
          </div>

          {/* Data table */}
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-brand-near-black border-b border-brand-border">
                  <th className="text-left text-[10px] uppercase tracking-widest text-brand-muted px-4 py-3 font-normal">County</th>
                  <th className="text-right text-[10px] uppercase tracking-widest text-brand-muted px-4 py-3 font-normal">Total Pop</th>
                  <th className="text-right text-[10px] uppercase tracking-widest text-brand-blue px-4 py-3 font-normal">Female 20–59</th>
                  <th className="text-right text-[10px] uppercase tracking-widest text-brand-muted px-4 py-3 font-normal">% of County</th>
                  <th className="text-right text-[10px] uppercase tracking-widest text-brand-orange px-4 py-3 font-normal">Median HHI 25–44</th>
                  <th className="text-right text-[10px] uppercase tracking-widest text-brand-muted px-4 py-3 font-normal">Median HHI 45–64</th>
                </tr>
              </thead>
              <tbody>
                {COUNTIES.map((county, i) => {
                  const femalePct = ((county.femalePop / county.totalPop) * 100).toFixed(1)
                  return (
                    <tr
                      key={county.name}
                      className={`border-b border-brand-border ${i % 2 === 0 ? 'bg-white' : 'bg-brand-near-black'}`}
                    >
                      <td className="px-4 py-3 font-medium text-brand-black">{county.name}</td>
                      <td className="px-4 py-3 text-right text-brand-sub tabular-nums">{county.totalPop.toLocaleString()}</td>
                      <td className="px-4 py-3 text-right font-semibold text-brand-blue tabular-nums">{county.femalePop.toLocaleString()}</td>
                      <td className="px-4 py-3 text-right text-brand-muted tabular-nums">{femalePct}%</td>
                      <td className="px-4 py-3 text-right font-semibold text-brand-orange tabular-nums">${county.medianHHI_2544.toLocaleString()}</td>
                      <td className="px-4 py-3 text-right text-brand-sub tabular-nums">
                        {county.medianHHI_4564 ? `$${county.medianHHI_4564.toLocaleString()}` : '—'}
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>

          {/* Key insights */}
          <div className="grid sm:grid-cols-3 gap-4 mt-8">
            {[
              {
                label: 'Arlington Insight',
                text: '44.4% of Arlington\'s female target market is concentrated in the 25–34 bracket — the densest young-professional cohort across all 5 counties.',
                color: 'border-brand-blue',
              },
              {
                label: 'Fairfax Insight',
                text: 'Fairfax presents a balanced age distribution with peaks at 40–44 (13.7%) and 25–29 (12.3%), offering a stable multi-cohort client base at scale.',
                color: 'border-brand-blue',
              },
              {
                label: 'Vienna/Tysons Note',
                text: 'Town-level Fairfax drill-down identified Vienna and Tysons as highest target age-density submarkets — strategically positioned between multiple high-income census tracts.',
                color: 'border-brand-orange',
              },
            ].map((insight) => (
              <div key={insight.label} className={`border-l-2 ${insight.color} pl-4 py-1`}>
                <p className="text-[10px] uppercase tracking-widest text-brand-muted mb-2">{insight.label}</p>
                <p className="text-sm text-brand-sub leading-relaxed">{insight.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── 4. Visualization 2: Scoring Matrix ── */}
        <section className="border-t border-brand-border pt-16">
          <p className="text-xs uppercase tracking-[0.25em] text-brand-muted mb-6">04 — Site-Selection Scoring Matrix</p>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-brand-black mb-4">
            100-Point Weighted Evaluation: 4 Shortlisted Retail Corridors
          </h2>
          <p className="text-brand-sub leading-relaxed max-w-2xl mb-10">
            Four anonymized corridors evaluated across weighted criteria. All client and location
            identifiers are withheld per confidentiality agreement.
          </p>

          {/* Criteria legend */}
          <div className="grid sm:grid-cols-4 gap-3 mb-8">
            {[
              { label: 'Foot Traffic / Co-Tenancy', weight: '30%', color: 'bg-brand-blue' },
              { label: 'Target Demographic Income', weight: '30%', color: 'bg-brand-blue' },
              { label: 'Lease-to-Revenue Feasibility', weight: '25%', color: 'bg-brand-orange' },
              { label: 'Turnkey Build-Out Readiness', weight: '15%', color: 'bg-brand-orange' },
            ].map((c) => (
              <div key={c.label} className="flex items-start gap-2 text-xs">
                <span className={`shrink-0 mt-1 w-2.5 h-2.5 rounded-sm ${c.color}`} />
                <div>
                  <p className="text-brand-black font-medium">{c.label}</p>
                  <p className="text-brand-muted">{c.weight} weight</p>
                </div>
              </div>
            ))}
          </div>

          {/* Scoring table */}
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-brand-near-black border-b border-brand-border">
                  <th className="text-left text-[10px] uppercase tracking-widest text-brand-muted px-4 py-3 font-normal min-w-[160px]">Corridor</th>
                  <th className="text-left text-[10px] uppercase tracking-widest text-brand-blue px-4 py-3 font-normal">Foot Traffic (30)</th>
                  <th className="text-left text-[10px] uppercase tracking-widest text-brand-blue px-4 py-3 font-normal">Demo Income (30)</th>
                  <th className="text-left text-[10px] uppercase tracking-widest text-brand-orange px-4 py-3 font-normal">Lease Feasibility (25)</th>
                  <th className="text-left text-[10px] uppercase tracking-widest text-brand-orange px-4 py-3 font-normal">Build-Out (15)</th>
                  <th className="text-right text-[10px] uppercase tracking-widest text-brand-muted px-4 py-3 font-normal">Total</th>
                </tr>
              </thead>
              <tbody>
                {CORRIDORS.map((corridor, i) => (
                  <tr
                    key={corridor.label}
                    className={`border-b border-brand-border ${corridor.top ? 'bg-blue-50' : i % 2 === 0 ? 'bg-white' : 'bg-brand-near-black'}`}
                  >
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-2">
                        {corridor.top && (
                          <span className="text-[9px] uppercase tracking-wider bg-brand-orange text-white px-1.5 py-0.5 font-semibold">Top Pick</span>
                        )}
                      </div>
                      <p className="font-semibold text-brand-black">{corridor.region}</p>
                      <p className="text-xs text-brand-muted">{corridor.market} · {corridor.label}</p>
                    </td>
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-2">
                        <ScoreBar score={corridor.footTraffic} max={30} color="#2563EB" />
                        <span className="text-xs font-semibold text-brand-black tabular-nums">{corridor.footTraffic}/30</span>
                      </div>
                    </td>
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-2">
                        <ScoreBar score={corridor.demoIncome} max={30} color="#2563EB" />
                        <span className="text-xs font-semibold text-brand-black tabular-nums">{corridor.demoIncome}/30</span>
                      </div>
                    </td>
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-2">
                        <ScoreBar score={corridor.leaseFeasibility} max={25} color="#F97316" />
                        <span className="text-xs font-semibold text-brand-black tabular-nums">{corridor.leaseFeasibility}/25</span>
                      </div>
                    </td>
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-2">
                        <ScoreBar score={corridor.buildoutReadiness} max={15} color="#F97316" />
                        <span className="text-xs font-semibold text-brand-black tabular-nums">{corridor.buildoutReadiness}/15</span>
                      </div>
                    </td>
                    <td className="px-4 py-4 text-right">
                      <span className={`text-lg font-black tabular-nums ${corridor.top ? 'text-brand-blue' : 'text-brand-black'}`}>
                        {corridor.total}
                      </span>
                      <span className="text-xs text-brand-muted">/100</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-xs text-brand-muted mt-4">
            * Corridor identities anonymized per client confidentiality. Scores reflect composite
            assessment across foot traffic proxies, ACS income alignment, LoopNet/Crexi lease
            comps, and direct property survey.
          </p>
        </section>

        {/* ── 5. Key Deliverables ── */}
        <section className="border-t border-brand-border pt-16">
          <p className="text-xs uppercase tracking-[0.25em] text-brand-muted mb-6">05 — Key Deliverables & Outcomes</p>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-brand-black mb-8">
            Measurable Results
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                metric: '5 Counties',
                desc: 'Full ACS demographic analysis across Arlington, Fairfax, Loudoun, Prince William, and Fauquier — with town-level census tract drill-down for Fairfax\'s 84 tracts.',
                accent: 'text-brand-blue',
              },
              {
                metric: '15+ Sites',
                desc: 'Commercial retail properties screened across LoopNet, Crexi, and CommercialCafe spanning Virginia, North Carolina, and Delaware within the $3.5K–$4.5K/mo threshold.',
                accent: 'text-brand-blue',
              },
              {
                metric: '4 Submarkets',
                desc: 'Turnkey shortlisted corridors meeting lease budget, demographic density, and income alignment requirements — led by the Vienna/Tysons corridor at 90/100 composite score.',
                accent: 'text-brand-orange',
              },
              {
                metric: '100-Point Framework',
                desc: 'Weighted site-scoring matrix built from first principles — reusable for future expansion decisions across any market with available ACS data and commercial lease comps.',
                accent: 'text-brand-orange',
              },
              {
                metric: 'Digital Acquisition Stack',
                desc: 'Physical site selection paired with local digital infrastructure recommendations: Google Business Profile optimization, POS referral loop design, and dynamic discount tier modeling.',
                accent: 'text-brand-blue',
              },
              {
                metric: '3 States Covered',
                desc: 'Primary analysis in Northern Virginia extended to secondary Mid-Atlantic corridors in Richmond VA, Charlotte NC, and Newark DE for comparative market context.',
                accent: 'text-brand-blue',
              },
            ].map((item) => (
              <div key={item.metric} className="bg-brand-near-black border border-brand-border p-6">
                <p className={`text-xl font-black mb-2 ${item.accent}`}>{item.metric}</p>
                <p className="text-sm text-brand-sub leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

      </div>{/* /main content */}

      {/* ── CTA Banner ── */}
      <div className="border-t border-brand-border mt-8 px-6 py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="border border-brand-border bg-brand-near-black p-8 md:p-12 flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-brand-muted mb-3">Work With Us</p>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-brand-black mb-3">
                Planning a retail expansion or evaluating commercial leases?
              </h2>
              <p className="text-brand-sub max-w-lg leading-relaxed">
                Request a sample market brief and see how our Census-driven demographic pipeline and
                lease feasibility framework can apply to your target markets.
              </p>
            </div>
            <Link
              href="/contact"
              className="shrink-0 inline-block bg-brand-orange text-white text-xs uppercase tracking-widest font-semibold px-8 py-4 hover:bg-brand-orange-dark transition-colors whitespace-nowrap"
            >
              Request a Market Brief
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
