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
      <div className="border-b border-brand-border px-6 py-24 md:py-32 bg-brand-near-black">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs uppercase tracking-[0.25em] text-brand-muted mb-6">
            Case Studies
          </p>
          <h1 className="text-5xl md:text-6xl font-black tracking-tighter text-brand-black mb-8">
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
          <div className="flex flex-col gap-6">
            {projects.map((project) => (
              <article
                key={project.id}
                className="border border-brand-border bg-white p-8 md:p-10 flex flex-col gap-6 hover:border-brand-blue transition-colors"
              >
                {/* Tags + timeline */}
                <div className="flex flex-wrap items-center gap-2">
                  {project.featured && (
                    <span className="text-[10px] uppercase tracking-widest px-2.5 py-1 bg-brand-orange text-white">
                      Featured
                    </span>
                  )}
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
                <h2 className="text-xl font-bold text-brand-black leading-snug">{project.title}</h2>

                {/* Three fields */}
                <div className="grid md:grid-cols-3 gap-6 flex-1">
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
                    <p className="text-sm text-brand-black font-medium leading-relaxed">{project.impact}</p>
                  </div>
                </div>

                {/* Links */}
                {(project.slug || project.liveUrl) && (
                  <div className="flex flex-wrap gap-3">
                    {project.slug && (
                      <Link
                        href={`/projects/${project.slug}`}
                        className="inline-block border border-brand-blue text-brand-blue text-xs uppercase tracking-widest font-semibold px-6 py-2.5 hover:bg-brand-blue hover:text-white transition-colors"
                      >
                        Read Full Case Study →
                      </Link>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block border border-brand-border text-brand-muted text-xs uppercase tracking-widest font-semibold px-6 py-2.5 hover:border-brand-black hover:text-brand-black transition-colors"
                      >
                        View Live Demo ↗
                      </a>
                    )}
                  </div>
                )}
              </article>
            ))}
          </div>
        )}
      </div>

      {/* CTA */}
      <div className="border-t border-brand-border px-6 py-20 bg-brand-near-black">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <p className="text-brand-sub max-w-md">
            Working on something that fits this profile? We&apos;d like to hear about it.
          </p>
          <Link
            href="/contact"
            className="shrink-0 inline-block bg-brand-blue text-white text-xs uppercase tracking-widest font-semibold px-8 py-4 hover:bg-brand-blue-dark transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  )
}
