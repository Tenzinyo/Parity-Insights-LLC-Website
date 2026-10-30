import type { Metadata } from 'next'
import Link from 'next/link'
import { projects, projectsPage } from '@/content/projects'

export const metadata: Metadata = {
  title: 'Selected Work',
  description: projectsPage.subheadline,
}

export default function ProjectsPage() {
  return (
    <div className="pt-16">
      {/* Page header */}
      <div className="border-b border-brand-border px-6 py-24 md:py-32">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs uppercase tracking-[0.25em] text-brand-muted mb-6">
            Case Studies
          </p>
          <h1 className="text-5xl md:text-6xl font-black tracking-tighter text-white mb-8">
            {projectsPage.headline}
          </h1>
          <p className="max-w-2xl text-base md:text-lg text-brand-sub leading-relaxed">
            {projectsPage.subheadline}
          </p>
        </div>
      </div>

      {/* Project grid */}
      <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        {projects.length === 0 ? (
          <div className="border border-brand-border px-10 py-16 text-center">
            <p className="text-sm text-brand-muted">Case studies coming soon.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-px bg-brand-border">
            {projects.map((project) => (
              <article
                key={project.id}
                className="bg-brand-off-black p-8 md:p-10 flex flex-col gap-6"
              >
                {/* Tags + timeline */}
                <div className="flex flex-wrap items-center gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] uppercase tracking-widest px-2.5 py-1 border border-brand-border text-brand-muted"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.timeline && (
                    <span className="text-[10px] uppercase tracking-widest px-2.5 py-1 text-brand-muted ml-auto">
                      {project.timeline}
                    </span>
                  )}
                </div>

                {/* Title */}
                <h2 className="text-xl font-bold text-white leading-snug">{project.title}</h2>

                {/* Three fields */}
                <div className="space-y-4 flex-1">
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-brand-muted mb-1.5">
                      Problem
                    </p>
                    <p className="text-sm text-brand-sub leading-relaxed">{project.problem}</p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-brand-muted mb-1.5">
                      Approach
                    </p>
                    <p className="text-sm text-brand-sub leading-relaxed">{project.approach}</p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-brand-muted mb-1.5">
                      Impact
                    </p>
                    <p className="text-sm text-white font-medium leading-relaxed">{project.impact}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>

      {/* CTA */}
      <div className="border-t border-brand-border px-6 py-20">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <p className="text-brand-sub max-w-md">
            Working on something that fits this profile? We&apos;d like to hear about it.
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
