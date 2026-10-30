// Global site configuration — update this file to change text across the whole site.
// PLACEHOLDER: Replace email, location, and social links with your actual details.

export const site = {
  name: 'Parity Insights',
  legalName: 'Parity Insights LLC',

  tagline: 'Analytical Rigor.\nEngineered Solutions.',

  description:
    'Parity Insights bridges quantitative data science, software architecture, and strategic operations to help organizations solve their most demanding technical and market challenges.',

  // PLACEHOLDER — replace with your actual business email
  email: 'parityinsightsllc@gmail.com',

  // PLACEHOLDER — replace with your actual location or remove
  location: 'Remote / Global',

  nav: [
    { label: 'Capabilities', href: '/services' },
    { label: 'Work',         href: '/projects' },
    { label: 'About',        href: '/about' },
    { label: 'Contact',      href: '/contact' },
  ],

  cta: {
    primary:   { label: 'Explore Capabilities', href: '/services' },
    secondary: { label: 'Get in Touch',          href: '/contact' },
  },

  footer: {
    tagline: 'Precision engineering. Trusted systems.',
    links: [
      { label: 'Capabilities', href: '/services' },
      { label: 'Work',         href: '/projects' },
      { label: 'About',        href: '/about' },
      { label: 'Contact',      href: '/contact' },
    ],
  },
}
