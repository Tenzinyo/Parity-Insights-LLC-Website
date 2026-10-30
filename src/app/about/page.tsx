import type { Metadata } from 'next'
import Link from 'next/link'
import { about } from '@/content/about'

export const metadata: Metadata = {
  title: 'About',
  description: about.firmDescription,
}

export default function AboutPage() {
  return (
    <div className="pt-16">
      {/* Page header */}
      <div className="border-b border-brand-border px-6 py-24 md:py-32">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs uppercase tracking-[0.25em] text-brand-muted mb-6">
            About
          </p>
          <h1 className="text-5xl md:text-6xl font-black tracking-tighter text-white mb-8">
            {about.headline}
          </h1>
          <p className="max-w-2xl text-xl md:text-2xl text-brand-sub leading-relaxed font-light">
            {about.ethos}
          </p>
        </div>
      </div>

      {/* Firm description */}
      <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
        <div className="max-w-2xl">
          <p className="text-base text-brand-sub leading-relaxed mb-8">
            {about.firmDescription}
          </p>
          <p className="text-sm text-brand-muted leading-relaxed border-l-2 border-brand-border pl-6 italic">
            {about.founderNote}
          </p>
        </div>
      </div>

      {/* Principles */}
      <div className="border-t border-brand-border bg-brand-near-black px-6 py-24 md:py-32">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs uppercase tracking-[0.25em] text-brand-muted mb-16">
            Operating Principles
          </p>

          <div className="grid sm:grid-cols-2 gap-px bg-brand-border">
            {about.principles.map((principle) => (
              <div key={principle.title} className="bg-brand-near-black p-8 md:p-10">
                <h3 className="text-base font-semibold text-white mb-3">{principle.title}</h3>
                <p className="text-sm text-brand-sub leading-relaxed">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="border-t border-brand-border px-6 py-20">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <p className="text-brand-sub max-w-md">
            Want to understand whether there&apos;s a fit? Start with a conversation.
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
