<script setup>
import SiteHeader from './components/SiteHeader.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import TreatmentsSection from './components/TreatmentsSection.vue'
import ApproachSection from './components/ApproachSection.vue'
import BookingSection from './components/BookingSection.vue'
import FaqSection from './components/FaqSection.vue'
import ContactSection from './components/ContactSection.vue'
import LocationSection from './components/LocationSection.vue'
import SiteFooter from './components/SiteFooter.vue'
import SplashIntro from './components/SplashIntro.vue'
</script>

<template>
  <SplashIntro />
  <SiteHeader />
  <main id="top">
    <HeroSection />
    <AboutSection />
    <TreatmentsSection />
    <ApproachSection />
    <BookingSection />
    <FaqSection />
    <ContactSection />
    <LocationSection />
  </main>
  <SiteFooter />
</template>
