import Link from 'next/link'
import { site } from '@/content/site'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-brand-border mt-32">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">
          {/* Brand + tagline */}
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white">
              {site.name}
            </p>
            <p className="text-xs text-brand-muted">{site.footer.tagline}</p>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            {site.footer.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs uppercase tracking-widest text-brand-muted hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-brand-border-dim flex flex-col sm:flex-row justify-between gap-3">
          <p className="text-xs text-brand-muted">
            &copy; {year} {site.legalName}. All rights reserved.
          </p>
          <p className="text-xs text-brand-muted">{site.location}</p>
        </div>
      </div>
    </footer>
  )
}
