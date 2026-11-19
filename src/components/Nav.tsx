'use client'

import Link from 'next/link'
import { useState } from 'react'
import { site } from '@/content/site'

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-brand-border shadow-sm">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-black hover:text-brand-blue transition-colors"
        >
          {site.name}
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-xs uppercase tracking-widest text-brand-muted hover:text-brand-black transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="text-xs uppercase tracking-widest border border-brand-blue text-brand-blue px-4 py-2 hover:bg-brand-blue hover:text-white transition-colors"
          >
            Get in Touch
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          className="md:hidden flex flex-col gap-1.5 p-1"
        >
          <span
            className={`block w-6 h-px bg-brand-black transition-all duration-200 ${
              open ? 'rotate-45 translate-y-[9px]' : ''
            }`}
          />
          <span
            className={`block w-6 h-px bg-brand-black transition-all duration-200 ${
              open ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block w-6 h-px bg-brand-black transition-all duration-200 ${
              open ? '-rotate-45 -translate-y-[5px]' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-brand-border bg-white">
          <nav className="max-w-6xl mx-auto px-6 py-6 flex flex-col gap-5">
            {site.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-sm uppercase tracking-widest text-brand-muted hover:text-brand-black transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
