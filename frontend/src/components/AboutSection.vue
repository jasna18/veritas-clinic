<script setup>
import doctorPhoto from '../assets/images/doctor-portrait.webp'
import treatmentRoom from '../assets/images/clinic-treatment-room.webp'
import reception from '../assets/images/clinic-reception.webp'
import lounge from '../assets/images/clinic-lounge.webp'
import ClinicGallery from './ClinicGallery.vue'
import { clinic } from '../data/content.js'

const gallery = [
  { src: treatmentRoom, alt: 'Treatment room with a sage-green dental chair and garden view' },
  { src: reception, alt: 'Reception desk with warm lighting and fresh flowers' },
  { src: lounge, alt: 'Patient lounge with sofas and armchairs' },
]
</script>

<template>
  <section id="about" class="section about" aria-labelledby="about-title">
    <div class="container">
      <div class="section-head">
        <p class="eyebrow eyebrow--line">About us</p>
        <h2 id="about-title" class="display">
          Trusted &amp; professional in <span class="script">aesthetic care</span>
        </h2>
      </div>

      <div class="about__grid">
        <div class="about__portrait">
          <img
            :src="doctorPhoto"
            :alt="`${clinic.doctor.name}, founder of Veritas Polyclinic`"
            class="about__photo"
            width="471"
            height="468"
            loading="lazy"
            decoding="async"
          />
        </div>

        <div class="about__copy">
          <p>
            Welcome to Veritas Polyclinic – your trusted partner for advanced implantology, aesthetic
            dentistry, medical aesthetics and cosmetic treatments in Dubai. We offer a personal and
            innovative approach in which the well-being of every patient is central, in a modern
            clinic designed with your comfort in mind.
          </p>
          <p>
            Whether you are looking for dental implants, a smile makeover or cosmetic treatments for
            your face and skin, our specialists work together under one roof. We combine the latest
            technologies with a personal touch to deliver natural-looking results and the care you
            deserve.
          </p>
          <!-- Doctor's name as a signature, in the same script as "oral care" -->
          <p class="about__signature">
            <span class="script">{{ clinic.doctor.name }}</span>
            <span class="about__role">Founder</span>
          </p>
        </div>
      </div>

      <ClinicGallery :images="gallery" class="about__gallery" />
    </div>
  </section>
</template>

<style scoped>
.about__grid {
  display: grid;
  grid-template-columns: minmax(0, 5fr) minmax(0, 11fr);
  gap: 56px;
  align-items: start;
}

.about__portrait {
  /* Warm sand card; the photo's white backdrop blends into it */
  background: #ece3d6;
  overflow: hidden;
}

.about__photo {
  width: 100%;
  height: auto;
  aspect-ratio: 471 / 468;
  object-fit: cover;
  mix-blend-mode: multiply;
}

.about__copy {
  max-width: 600px;
}

.about__copy p {
  font-size: 15px;
  line-height: 1.85;
}

.about__copy p + p {
  margin-top: 18px;
}

.about__copy .about__signature {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;
  margin-top: 28px;
  font-size: clamp(30px, 3.4vw, 38px);
  line-height: 1.2;
}

.about__role {
  font-family: var(--font-body);
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--muted);
}

.about__gallery {
  margin-top: 72px;
}

@media (max-width: 900px) {
  .about__grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  /* On smaller screens the photo follows the welcome text */
  .about__portrait {
    order: 1;
    max-width: 420px; /* keep the photo sharp on tablets */
  }

  .about__gallery {
    margin-top: 48px;
  }
}
</style>
