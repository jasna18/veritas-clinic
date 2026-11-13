// English text for the whole site.
// Headings with a gold script word are split into { before, script, after }.
// Bracketed values like [PHONE NUMBER] are placeholders for real clinic details.

export default {
  meta: {
    title: 'Veritas Polyclinic Dubai | Implantology, Aesthetic Dentistry & Medical Aesthetics',
    description:
      'Veritas Polyclinic Dubai — advanced implantology, aesthetic dentistry, medical aesthetics and cosmetic treatments, planned around your face, your features and your goals.',
  },

  // Language toggle (shows the *other* language)
  lang: { switchLabel: 'العربية', switchLang: 'ar', switchAria: 'Switch to Arabic' },

  clinic: {
    name: 'Veritas Polyclinic',
    brandLine: 'Veritas Polyclinic · Dubai',
    doctorName: 'Dr. Rawa Taher',
    doctorRole: 'Founder',
    hours: '[DAYS · HOURS]',
    address: '[CLINIC ADDRESS, AREA, CITY]',
    addressShort: '[CLINIC ADDRESS]',
    city: 'Dubai, UAE',
    parking: '[PARKING INFO]',
  },

  nav: {
    home: 'Home',
    about: 'About us',
    treatments: 'Treatments',
    approach: 'Our approach',
    contact: 'Contact',
    location: 'Location',
  },

  header: {
    homeAria: 'Veritas Polyclinic — home',
    bookVisit: 'Book a visit',
    menu: 'Menu',
    close: 'Close',
    menuAria: 'Site menu',
    navAria: 'Primary',
  },

  hero: {
    eyebrow: 'Implantology & aesthetics · Dubai',
    title: { before: 'The art of', script: 'natural', after: 'beauty' },
    lede: 'Advanced implantology, aesthetic dentistry, medical aesthetics and cosmetic treatments — planned around your face, your features and your goals.',
    viewTreatments: 'View treatments',
    photoAlt: 'Woman with clear, glowing skin in profile against a soft sage-green wall',
    servicesAria: 'Services',
    marquee: [
      'Advanced implantology',
      'Aesthetic dentistry',
      'Medical aesthetics',
      'Cosmetic treatments',
      'Smile design',
      'Porcelain veneers',
    ],
  },

  about: {
    eyebrow: 'About us',
    title: { before: 'Trusted & professional in', script: 'aesthetic care', after: '' },
    p1: 'Welcome to Veritas Polyclinic – your trusted partner for advanced implantology, aesthetic dentistry, medical aesthetics and cosmetic treatments in Dubai. We offer a personal and innovative approach in which the well-being of every patient is central, in a modern clinic designed with your comfort in mind.',
    p2: 'Whether you are looking for dental implants, a smile makeover or cosmetic treatments for your face and skin, our specialists work together under one roof. We combine the latest technologies with a personal touch to deliver natural-looking results and the care you deserve.',
    doctorAlt: '{name}, founder of Veritas Polyclinic',
    galleryAria: 'Inside the clinic',
    showPhoto: 'Show photo: {alt}',
    gallery: [
      'Treatment room with a sage-green dental chair and garden view',
      'Reception desk with warm lighting and fresh flowers',
      'Patient lounge with sofas and armchairs',
    ],
  },

  treatments: {
    eyebrow: 'Treatments',
    title: { before: 'What can we do', script: 'for you?', after: '' },
    items: [
      { title: 'Aesthetic dentistry', alt: 'Smiling patient during a dental check-up' },
      { title: 'Medical aesthetics', alt: 'Practitioner in gloves giving a lip filler treatment' },
      { title: 'Cosmetic treatments', alt: 'Relaxed client receiving a facial skin treatment with a hydro-facial device' },
      { title: 'Skin rejuvenation', alt: 'Client receiving a microneedling skin treatment' },
      { title: 'Invisible braces', alt: 'Close-up of a clear aligner being fitted over front teeth' },
      { title: 'Surgery', alt: 'Dental surgeon and assistant in sterile gowns treating a patient' },
    ],
  },

  approach: {
    eyebrow: 'Our approach',
    title: { before: 'Four steps,', script: 'never rushed', after: '' },
    steps: [
      {
        title: 'Listen',
        body: 'A relaxed consultation about what you would like to change, with a thorough assessment of your teeth, face and skin.',
      },
      {
        title: 'Design',
        body: 'Photos, scans and digital previews, with clear options and costs agreed before anything begins.',
      },
      {
        title: 'Treat',
        body: 'Precise, minimally invasive treatment that respects your natural features, at a pace that feels comfortable.',
      },
      {
        title: 'Aftercare',
        body: 'Review visits, a personal care plan and simple at-home guidance so your results last.',
      },
    ],
  },

  booking: {
    eyebrow: 'Book a visit',
    title: { before: 'Book in', script: 'three', after: 'steps' },
    cta: 'Start booking',
    stepLabel: 'No.0{n}',
    steps: [
      { title: 'Choose a department', body: 'Implantology, aesthetic dentistry, medical aesthetics or cosmetic treatments.' },
      { title: 'Pick your doctor & time', body: 'Live available dates and slots for each doctor.' },
      { title: 'Confirmed by SMS or WhatsApp', body: 'Pay at reception when you arrive.' },
    ],
  },

  faq: {
    eyebrow: 'Questions',
    titleLine1: 'Good',
    title: { before: 'to', script: 'know', after: '' },
    items: [
      {
        q: 'Will my results look natural?',
        a: 'Every treatment is planned around your face and features, and discussed or previewed with you before anything begins.',
      },
      {
        q: 'Are dental implants a long-term solution?',
        a: 'Implants are designed to last. With good oral hygiene and regular check-ups they can serve you for many years — your specialist will explain what to expect in your case.',
      },
      {
        q: 'Are the treatments painful?',
        a: 'Dental procedures are carried out under local anaesthetic, and numbing options are used for aesthetic treatments where needed. Most patients report only mild, short-lived discomfort.',
      },
      {
        q: 'Do I need a consultation first?',
        a: 'Yes. Every treatment starts with a consultation to assess your needs, discuss options and agree a plan and cost.',
      },
      {
        q: 'How do I pay?',
        a: 'Payment is made at reception on the day of your visit. [INSURANCE / INSTALMENT OPTIONS].',
      },
    ],
  },

  contact: {
    eyebrow: 'Contact',
    title: { before: "Let's", script: 'talk', after: '' },
    phone: 'Phone',
    email: 'Email',
    hours: 'Hours',
    callClinic: 'Call the clinic',
    callbackTitle: 'Request a call back',
    fullName: 'Full name',
    namePlaceholder: 'Your name',
    mobile: 'Mobile number',
    bestTime: 'Best time to call',
    times: {
      morning: { label: 'Morning', phrase: 'in the morning' },
      afternoon: { label: 'Afternoon', phrase: 'in the afternoon' },
      evening: { label: 'Evening', phrase: 'in the evening' },
    },
    message: 'Message (optional)',
    messagePlaceholder: "e.g. I'd like a consultation about implants or skin treatments",
    consentBefore: "I agree to be contacted and to the clinic's",
    privacy: 'privacy policy',
    consentAfter: '.',
    submit: 'Request call back',
    thanks: 'Thank you, {name}.',
    willCall: "We'll call you on {mobile} {time}.",
    another: 'Send another request',
    errors: {
      name: 'Enter your full name so we know who to ask for.',
      mobile: 'Enter a mobile number with at least 8 digits, e.g. +971 50 123 4567.',
      consent: 'Tick the box so we can contact you.',
    },
  },

  location: {
    eyebrow: 'Location',
    title: { before: 'Find the', script: 'studio', after: '' },
    directions: 'Get directions',
    mapTag: 'Google map embed',
    address: 'Address',
    parking: 'Parking:',
  },

  footer: {
    visit: 'Visit',
    pages: 'Pages',
    contact: 'Contact',
    appointments: 'Appointments',
    navAria: 'Footer',
    copyright: 'Veritas Polyclinic Dubai',
    privacy: 'Privacy policy',
    terms: 'Terms',
  },
}
