import type { Metadata } from 'next'
import Link from 'next/link'
import { services, servicesPage } from '@/content/services'

export const metadata: Metadata = {
  title: 'Capabilities',
  description: servicesPage.subheadline,
}

export default function ServicesPage() {
  return (
    <div className="pt-16">
      {/* Page header */}
      <div className="border-b border-brand-border px-6 py-24 md:py-32">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs uppercase tracking-[0.25em] text-brand-muted mb-6">
            Capabilities
          </p>
          <h1 className="text-5xl md:text-6xl font-black tracking-tighter text-white mb-8">
            {servicesPage.headline}
          </h1>
          <p className="max-w-2xl text-base md:text-lg text-brand-sub leading-relaxed">
            {servicesPage.subheadline}
          </p>
        </div>
      </div>

      {/* Service list */}
      <div className="max-w-6xl mx-auto px-6 divide-y divide-brand-border">
        {services.map((service) => (
          <div
            key={service.index}
            className="py-16 md:py-20 grid md:grid-cols-[120px_1fr] gap-8 md:gap-16"
          >
            <span className="text-sm font-mono text-brand-muted self-start">{service.index}</span>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white mb-5">
                {service.title}
              </h2>
              <p className="text-brand-sub leading-relaxed mb-8 max-w-2xl">
                {service.description}
              </p>

              <ul className="space-y-2">
                {service.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3 text-sm text-brand-muted">
                    <span className="mt-2 shrink-0 w-3 h-px bg-brand-border inline-block" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="border-t border-brand-border px-6 py-20">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <p className="text-brand-sub max-w-md">
            Not sure which capability fits your situation? Let&apos;s talk through it.
          </p>
          <Link
            href="/contact"
            className="shrink-0 inline-block bg-white text-black text-xs uppercase tracking-widest font-semibold px-8 py-4 hover:bg-brand-dim transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  )
}
