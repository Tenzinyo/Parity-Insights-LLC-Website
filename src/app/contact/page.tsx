'use client'

// FORM SETUP:
// This form uses Web3Forms (free tier — no credit card required).
// Steps to activate:
//   1. Go to https://web3forms.com and enter your email to get a free Access Key.
//   2. Replace the WEB3FORMS_ACCESS_KEY value in src/content/site.ts (add the key there),
//      or paste it directly into the FORM_ACCESS_KEY constant below.
//
// Alternatively, replace the fetch() call with any other free form endpoint
// (Formspree, Basin, etc.) or a simple mailto: fallback.

import { useState } from 'react'
import type { FormEvent } from 'react'
import { site } from '@/content/site'

// PLACEHOLDER — replace with your Web3Forms access key
const FORM_ACCESS_KEY = 'YOUR_WEB3FORMS_ACCESS_KEY'

type FormState = 'idle' | 'submitting' | 'success' | 'error'

export default function ContactPage() {
  const [state, setState] = useState<FormState>('idle')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setState('submitting')

    const formData = new FormData(e.currentTarget)
    const data = {
      access_key: FORM_ACCESS_KEY,
      name:    formData.get('name'),
      email:   formData.get('email'),
      company: formData.get('company'),
      message: formData.get('message'),
    }

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify(data),
      })
      const json = await res.json()
      setState(json.success ? 'success' : 'error')
    } catch {
      setState('error')
    }
  }

  return (
    <div className="pt-16">
      {/* Page header */}
      <div className="border-b border-brand-border px-6 py-24 md:py-32">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs uppercase tracking-[0.25em] text-brand-muted mb-6">Contact</p>
          <h1 className="text-5xl md:text-6xl font-black tracking-tighter text-white mb-8">
            Start a Conversation
          </h1>
          <p className="max-w-xl text-base md:text-lg text-brand-sub leading-relaxed">
            Tell us about your project or challenge. We respond to all inquiries within one
            business day.
          </p>
        </div>
      </div>

      {/* Form + info grid */}
      <div className="max-w-6xl mx-auto px-6 py-20 md:py-28 grid md:grid-cols-[1fr_320px] gap-16 md:gap-24">
        {/* Form */}
        <div>
          {state === 'success' ? (
            <div className="border border-brand-border p-10">
              <p className="text-sm font-semibold text-white mb-2">Message received.</p>
              <p className="text-sm text-brand-sub">
                We&apos;ll be in touch within one business day. Thanks for reaching out.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <Field label="Name" name="name" required placeholder="Your name" />
                <Field label="Email" name="email" type="email" required placeholder="your@email.com" />
              </div>
              <Field label="Company" name="company" placeholder="Company or organization (optional)" />
              <div className="space-y-2">
                <label className="block text-xs uppercase tracking-widest text-brand-muted">
                  Message <span className="text-white">*</span>
                </label>
                <textarea
                  name="message"
                  required
                  rows={6}
                  placeholder="Describe the problem you're working on or the outcome you need..."
                  className="w-full bg-transparent border border-brand-border text-white placeholder:text-brand-muted text-sm px-4 py-3 focus:outline-none focus:border-white transition-colors resize-none"
                />
              </div>

              {state === 'error' && (
                <p className="text-xs text-red-400">
                  Something went wrong. Please email us directly at{' '}
                  <a href={`mailto:${site.email}`} className="underline">
                    {site.email}
                  </a>
                  .
                </p>
              )}

              <button
                type="submit"
                disabled={state === 'submitting'}
                className="bg-white text-black text-xs uppercase tracking-widest font-semibold px-8 py-4 hover:bg-brand-dim transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {state === 'submitting' ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          )}
        </div>

        {/* Contact info */}
        <div className="space-y-10">
          <div>
            <p className="text-xs uppercase tracking-widest text-brand-muted mb-3">Email</p>
            <a
              href={`mailto:${site.email}`}
              className="text-sm text-white hover:text-brand-sub transition-colors break-all"
            >
              {site.email}
            </a>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-brand-muted mb-3">Location</p>
            <p className="text-sm text-white">{site.location}</p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-brand-muted mb-3">Response Time</p>
            <p className="text-sm text-brand-sub">Within one business day</p>
          </div>

          <div className="border-t border-brand-border pt-10">
            <p className="text-xs text-brand-muted leading-relaxed">
              All inquiries are kept strictly confidential. We do not share client information with
              third parties.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

// Small reusable field component local to this page
function Field({
  label,
  name,
  type = 'text',
  required,
  placeholder,
}: {
  label: string
  name: string
  type?: string
  required?: boolean
  placeholder?: string
}) {
  return (
    <div className="space-y-2">
      <label className="block text-xs uppercase tracking-widest text-brand-muted">
        {label} {required && <span className="text-white">*</span>}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full bg-transparent border border-brand-border text-white placeholder:text-brand-muted text-sm px-4 py-3 focus:outline-none focus:border-white transition-colors"
      />
    </div>
  )
}
