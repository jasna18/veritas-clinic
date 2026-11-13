// Non-text site data: contact links, images and section links.
// All wording (English and Arabic) lives in src/i18n/en.js and src/i18n/ar.js.
// Bracketed values are placeholders to be replaced with real clinic details.

import skinRejuvenationImg from '../assets/images/treatment-skin-rejuvenation.webp'
import invisibleBracesImg from '../assets/images/treatment-invisible-braces.webp'
import aestheticImg from '../assets/images/treatment-aesthetic.webp'
import surgeryImg from '../assets/images/treatment-surgery.webp'
import medicalAestheticsImg from '../assets/images/treatment-medical-aesthetics.webp'
import cosmeticImg from '../assets/images/treatment-cosmetic.webp'

export const clinic = {
  phone: '[PHONE NUMBER]', // shown as written, in both languages
  phoneHref: 'tel:+971000000000',
  email: '[EMAIL ADDRESS]',
  directionsUrl: 'https://maps.google.com/?q=Dubai',
}

// Menu / footer links: `key` matches the labels in i18n `nav`
export const navLinks = [
  { key: 'home', href: '#top' },
  { key: 'about', href: '#about' },
  { key: 'treatments', href: '#treatments' },
  { key: 'approach', href: '#approach' },
  { key: 'contact', href: '#contact' },
  { key: 'location', href: '#location' },
]

// Treatment photos, in the same order as i18n `treatments.items`
export const treatmentImages = [
  { image: aestheticImg },
  { image: medicalAestheticsImg, imagePosition: '60% 40%' }, // Medical aesthetics
  { image: cosmeticImg, imagePosition: '45% 40%' }, // Cosmetic treatments
  { image: skinRejuvenationImg, imagePosition: '55% 40%' }, // Skin rejuvenation
  { image: invisibleBracesImg },
  { image: surgeryImg, imagePosition: 'center 25%' },
]
