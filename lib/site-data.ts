// Central content for Rea's Cleaning Services.
// Text is preserved verbatim from the existing site — only the presentation changes.

export const NAV = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
] as const

export const CONTACT = {
  phone: "404-934-2853",
  phoneHref: "tel:404-934-2853",
  smsHref: "sms:404-934-2853",
  email: "emilie0874@gmail.com",
  emailHref: "mailto:emilie0874@gmail.com",
  hours: "9:00 AM – 9:00 PM",
  hoursFooter: "Open daily, 9 AM – 9 PM",
  area: "Atlanta, GA & surrounding areas",
  facebook: "https://www.facebook.com/reacleaningservices/about/",
  gmb: "https://share.google/IveqZNX0Rl2SB9qlH",
  whatsapp:
    "https://wa.me/14049342853?text=Hi%20Rea%27s%20Cleaning%20Services!%20I%27d%20like%20to%20ask%20about%20a%20cleaning%20quote.",
} as const

export const HERO = {
  eyebrow: "Trusted cleaning services in Atlanta",
  title: "Professional cleaning services you can count on.",
  body:
    "From spotless offices to fresh Airbnb spaces and move-out cleanups, Rea's Cleaning Services helps keep your space clean, fresh, and ready for what comes next.",
  stats: [
    { value: "10+", label: "Years experience" },
    { value: "✓", label: "Reliable & professional" },
    { value: "⌖", label: "Atlanta & surrounding areas" },
  ],
} as const

export const ABOUT = {
  eyebrow: "A cleaner way forward",
  titleLead: "Cleaning done right,",
  titleEm: "every time.",
  body:
    "For more than 10 years, Rea's Cleaning Services has helped homes, offices, Airbnb properties, and commercial spaces stay clean and welcoming. Our professional approach is built on attention to detail, dependable service, and genuine care for every customer.",
  points: ["Experienced team", "Detail-focused cleaning", "Reliable service"],
  badge: { value: "10+", label: "Years Experience" },
  founder: "Reya",
  founderTitle: "Founder",
} as const

export const SERVICES = [
  {
    n: "01",
    slug: "commercial-office-cleaning",
    title: "Commercial Office Cleaning",
    copy:
      "Keep your workplace clean, polished, and welcoming with dependable office cleaning tailored to your business.",
    image: "/images/office-cleaning.png",
  },
  {
    n: "02",
    slug: "airbnb",
    title: "Airbnb",
    copy:
      "Get your Airbnb guest-ready with detailed turnover cleaning that leaves every space fresh, spotless, and inviting.",
    image: "/images/airbnb-cleaning.png",
  },
  {
    n: "03",
    slug: "moving",
    title: "Moving",
    copy:
      "Make moving easier with thorough cleaning for move-in or move-out, helping you start fresh in a clean space.",
    image: "/images/moving-cleaning.png",
  },
  {
    n: "04",
    slug: "clearing-out",
    title: "Clearing Out",
    copy:
      "Need a space cleared and cleaned? We help refresh and prepare areas after decluttering, cleanouts, and transitions.",
    image: "/images/clearing-out.png",
  },
  {
    n: "05",
    slug: "commercial-services",
    title: "Commercial Services",
    copy:
      "Professional cleaning solutions designed to help commercial spaces maintain a clean, organized, and professional environment.",
    image: "/images/commercial-cleaning.png",
  },
] as const

export const SERVICE_OPTIONS = SERVICES.map((s) => s.title)

export const GALLERY = {
  eyebrow: "Gallery",
  title: "Our Work",
  tagline: "See the difference our cleaning makes.",
  items: [
    { src: "/image-1.jpg", caption: "Office cleaning", ar: "7 / 5" },
    { src: "/image-9.jpg", caption: "Bathroom deep clean", ar: "3 / 4" },
    { src: "/image-5.jpg", caption: "Restroom care", ar: "3 / 4" },
    { src: "/image-10.jpg", caption: "Finishing touches", ar: "1 / 1" },
    { src: "/image-2.jpg", caption: "Workspace refresh", ar: "3 / 2" },
    { src: "/image-8.jpg", caption: "Floor & lobby care", ar: "16 / 10" },
    { src: "/image-7.jpg", caption: "Premium interiors", ar: "4 / 5" },
    { src: "/image-6.jpg", caption: "After-hours offices", ar: "3 / 2" },
  ],
} as const

export const FAQ = {
  eyebrow: "Good to know",
  titleLead: "Frequently asked",
  titleEm: "questions.",
  intro:
    "Can't find what you're looking for? Give us a call and we'll be happy to help.",
  cta: "Talk to our team",
  items: [
    {
      q: "What areas do you serve?",
      a: "We proudly serve Atlanta, GA and surrounding areas. Contact us to confirm service availability for your location.",
    },
    {
      q: "What cleaning services do you offer?",
      a: "We offer commercial office cleaning, Airbnb cleaning, moving cleaning, clearing-out services, and commercial services.",
    },
    {
      q: "Can I request a custom cleaning service?",
      a: "Yes. We can discuss your specific needs and recommend a cleaning plan that works for your space.",
    },
    {
      q: "What are your business hours?",
      a: "We are available from 9:00 AM to 9:00 PM.",
    },
    {
      q: "How can I get a quote?",
      a: "Call or text us at 404-934-2853, or use the contact form below to request a quote.",
    },
    {
      q: "How long have you been in business?",
      a: "Rea's Cleaning Services has more than 10 years of cleaning experience.",
    },
  ],
} as const

export const CONTACT_SECTION = {
  eyebrow: "Let's get started",
  titleLead: "Let's get your space",
  titleEm: "looking its best.",
  intro: "Tell us what you need cleaned and we'll be happy to help.",
  options: [
    { label: "Call or text", value: CONTACT.phone, href: CONTACT.phoneHref },
    { label: "Email us", value: CONTACT.email, href: CONTACT.emailHref },
    { label: "Hours", value: CONTACT.hours, href: null },
  ],
  form: {
    title: "Request a free quote",
    subtitle: "We'll be in touch shortly.",
    cta: "Request a free quote",
    disclaimer: "No obligation • Quick response • Friendly service",
  },
} as const

export const CLOSING = {
  title: "Ready for a space that feels brand new?",
  body: "Tell us what you need cleaned — we'll take care of the rest.",
  cta: "Get a free quote",
} as const

export const FOOTER = {
  name: "Rea's Cleaning Services",
  tagline:
    "Professional cleaning for offices, Airbnb rentals, commercial spaces, and moves across Atlanta — reliable, detail-focused, and done right.",
  columns: [
    {
      title: "Services",
      links: SERVICES.map((s) => ({ label: s.title, href: `#${s.slug}` })),
    },
    {
      title: "Company",
      links: [
        { label: "About us", href: "#about" },
        { label: "Our work", href: "#gallery" },
        { label: "FAQ", href: "#faq" },
        { label: "Contact", href: "#contact" },
      ],
    },
  ],
  reach: [
    { label: "Phone", value: CONTACT.phone, href: CONTACT.phoneHref },
    { label: "Email", value: CONTACT.email, href: CONTACT.emailHref },
    { label: "Hours", value: CONTACT.hoursFooter, href: null },
    { label: "Location", value: CONTACT.area, href: CONTACT.gmb },
  ],
  copyright: "© 2026 Rea's Cleaning Services. All rights reserved.",
  copyrightNote: "10+ years of trusted cleaning in Atlanta.",
  utility: [
    { label: "Call", href: CONTACT.phoneHref },
    { label: "Text", href: CONTACT.smsHref },
    { label: "Quote", href: "#contact" },
  ],
} as const
