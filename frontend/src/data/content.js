// Page content. Bracketed values are placeholders to be replaced with real clinic details.

import implantImg from '../assets/images/treatment-implant.webp'
import periodontologyImg from '../assets/images/treatment-periodontology.webp'
import invisibleBracesImg from '../assets/images/treatment-invisible-braces.webp'
import rehabilitationImg from '../assets/images/treatment-rehabilitation.webp'
import aestheticImg from '../assets/images/treatment-aesthetic.webp'
import surgeryImg from '../assets/images/treatment-surgery.webp'
import medicalAestheticsImg from '../assets/images/treatment-medical-aesthetics.webp'

export const clinic = {
  name: 'Veritas Polyclinic',
  phone: '[PHONE NUMBER]',
  phoneHref: 'tel:+971000000000',
  email: '[EMAIL ADDRESS]',
  hours: '[DAYS · HOURS]',
  address: '[CLINIC ADDRESS, AREA, CITY]',
  addressShort: '[CLINIC ADDRESS]',
  parking: '[PARKING INFO]',
  directionsUrl: 'https://maps.google.com/?q=Dubai',
  doctor: {
    name: 'Dr. Rawa Taher',
    title: '[Qualification] · Founder',
  },
}

export const navLinks = [
  { label: 'Home', href: '#top' },
  { label: 'About us', href: '#about' },
  { label: 'Treatments', href: '#treatments' },
  { label: 'Our approach', href: '#approach' },
  { label: 'Contact', href: '#contact' },
  { label: 'Location', href: '#location' },
]

export const marqueeItems = [
  'Advanced implantology',
  'Aesthetic dentistry',
  'Medical aesthetics',
  'Cosmetic treatments',
  'Smile design',
  'Porcelain veneers',
]

export const treatments = [
  {
    title: 'Advanced implantology',
    image: implantImg,
    imageAlt: 'Modern dental treatment room with a patient chair and equipment',
  },
  {
    title: 'Aesthetic dentistry',
    image: aestheticImg,
    imageAlt: 'Smiling patient during a dental check-up',
  },
  {
    title: 'Medical aesthetics',
    image: medicalAestheticsImg,
    imageAlt: 'Practitioner in gloves giving a lip filler treatment',
    imagePosition: '60% 40%',
  },
  { title: 'Cosmetic treatments' }, // photo to come
  {
    title: 'Periodontology',
    image: periodontologyImg,
    imageAlt: 'Dentist examining a patient’s gums, with a gum and bone diagram on screen',
  },
  {
    title: 'Invisible braces',
    image: invisibleBracesImg,
    imageAlt: 'Close-up of a clear aligner being fitted over front teeth',
  },
  {
    title: 'Rehabilitation',
    image: rehabilitationImg,
    imageAlt: 'Dentist in surgical gown treating a patient, with a dental X-ray on screen',
  },
  {
    title: 'Surgery',
    image: surgeryImg,
    imageAlt: 'Dental surgeon and assistant in sterile gowns treating a patient',
    imagePosition: 'center 25%',
  },
].map((t) => ({ ...t, price: '[PRICE]', visits: '[NO. OF VISITS]' }))

export const steps = [
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
]

export const bookingSteps = [
  {
    title: 'Choose a department',
    body: 'Implantology, aesthetic dentistry, medical aesthetics or cosmetic treatments.',
  },
  {
    title: 'Pick your doctor & time',
    body: 'Live available dates and slots for each doctor.',
  },
  {
    title: 'Confirmed by SMS or WhatsApp',
    body: 'Pay at reception when you arrive.',
  },
]

export const faqs = [
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
]
