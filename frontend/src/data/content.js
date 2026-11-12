// Page content. Bracketed values are placeholders to be replaced with real clinic details.

import implantImg from '../assets/images/treatment-implant.jpg'
import periodontologyImg from '../assets/images/treatment-periodontology.jpg'
import invisibleBracesImg from '../assets/images/treatment-invisible-braces.jpg'
import rehabilitationImg from '../assets/images/treatment-rehabilitation.jpg'
import aestheticImg from '../assets/images/treatment-aesthetic.jpg'
import surgeryImg from '../assets/images/treatment-surgery.jpg'

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
    name: '[DOCTOR NAME]',
    title: '[Qualification] · Founder',
  },
}

export const navLinks = [
  { label: 'Home', href: '#top' },
  { label: 'About us', href: '#about' },
  { label: 'Treatments', href: '#treatments' },
  { label: 'Our approach', href: '#approach' },
  { label: 'Results', href: '#results' },
  { label: 'Contact', href: '#contact' },
  { label: 'Location', href: '#location' },
]

export const marqueeItems = [
  'Smile design',
  'Teeth whitening',
  'Porcelain veneers',
  'Composite bonding',
  'Clear aligners',
  'Smile polish',
]

export const treatments = [
  {
    title: 'Implant',
    description:
      'A permanent, natural-looking replacement for missing teeth, matched to the shade of your smile.',
    photo: 'Implant procedure',
    image: implantImg,
    imageAlt: 'Modern dental treatment room with a patient chair and equipment',
  },
  {
    title: 'Periodontology',
    description:
      'Diagnosis and treatment of gum disease to keep your gums healthy and your teeth firmly supported.',
    photo: 'Gum care',
    image: periodontologyImg,
    imageAlt: 'Dentist examining a patient’s gums, with a gum and bone diagram on screen',
  },
  {
    title: 'Invisible braces',
    description:
      'Near-invisible, removable aligners that gradually straighten teeth around work and daily life.',
    photo: 'Clear aligner',
    image: invisibleBracesImg,
    imageAlt: 'Close-up of a clear aligner being fitted over front teeth',
  },
  {
    title: 'Rehabilitation',
    description:
      'Full-mouth restoration with crowns, bridges and dentures to bring back comfortable chewing and a confident smile.',
    photo: 'Restoration',
    image: rehabilitationImg,
    imageAlt: 'Dentist in surgical gown treating a patient, with a dental X-ray on screen',
  },
  {
    title: 'Aesthetic dentistry',
    description:
      'Whitening, veneers and bonding, planned around your face for a natural-looking result.',
    photo: 'Smile close-up',
    image: aestheticImg,
    imageAlt: 'Smiling patient during a dental check-up',
  },
  {
    title: 'Surgery',
    description:
      'Wisdom-tooth removal, extractions and minor oral surgery, carried out gently under local anaesthetic.',
    photo: 'Surgery suite',
    image: surgeryImg,
    imageAlt: 'Dental surgeon and assistant in sterile gowns treating a patient',
    imagePosition: 'center 25%',
  },
].map((t) => ({ ...t, price: '[PRICE]', visits: '[NO. OF VISITS]' }))

export const steps = [
  {
    title: 'Listen',
    body: 'A relaxed consultation about what you would like to change — shade, shape, alignment — and a full check of your oral health.',
  },
  {
    title: 'Design',
    body: 'Photos, scans and a digital smile preview, with clear options and costs agreed before anything begins.',
  },
  {
    title: 'Treat',
    body: 'Precise, minimally invasive work that keeps as much natural tooth as possible, at a pace that feels comfortable.',
  },
  {
    title: 'Aftercare',
    body: 'A review visit, hygiene plan and simple at-home guidance so your results stay bright.',
  },
]

export const results = [
  { title: 'Teeth whitening', note: '[Whitening case photos]' },
  { title: 'Porcelain veneers', note: '[Veneers case photos]' },
  { title: 'Composite bonding', note: '[Bonding case photos]' },
]

export const bookingSteps = [
  {
    title: 'Choose a department',
    body: 'Smile design, whitening, veneers, aligners or general care.',
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
    q: 'Will my new smile look natural?',
    a: 'Every shade and shape is planned with you during your smile design consultation and previewed before any treatment begins.',
  },
  {
    q: 'How long does teeth whitening last?',
    a: 'It depends on diet and habits such as coffee, tea and smoking. With good care and occasional top-ups, results can last a long time — your dentist will advise on upkeep.',
  },
  {
    q: 'Are veneers or bonding painful?',
    a: 'Treatment is carried out with local anaesthetic where needed, and most patients report only mild sensitivity afterwards.',
  },
  {
    q: 'Do I need a consultation first?',
    a: 'Yes. Every cosmetic treatment starts with a consultation to check your oral health, discuss options and agree a plan and cost.',
  },
  {
    q: 'How do I pay?',
    a: 'Payment is made at reception on the day of your visit. [INSURANCE / INSTALMENT OPTIONS].',
  },
]
