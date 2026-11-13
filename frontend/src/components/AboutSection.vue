<script setup>
import doctorPhoto from '../assets/images/doctor-portrait.webp'
import treatmentRoom from '../assets/images/clinic-treatment-room.webp'
import reception from '../assets/images/clinic-reception.webp'
import lounge from '../assets/images/clinic-lounge.webp'
import { computed } from 'vue'
import ClinicGallery from './ClinicGallery.vue'
import { useI18n } from '../i18n'

const { t, fmt } = useI18n()

// Photo alt text comes from the active language
const gallery = computed(() =>
  [treatmentRoom, reception, lounge].map((src, i) => ({ src, alt: t.value.about.gallery[i] })),
)
</script>

<template>
  <section id="about" class="section about" aria-labelledby="about-title">
    <div class="container">
      <div class="section-head">
        <p class="eyebrow eyebrow--line">{{ t.about.eyebrow }}</p>
        <h2 id="about-title" class="display">
          {{ t.about.title.before }} <span class="script">{{ t.about.title.script }}</span>
          {{ t.about.title.after }}
        </h2>
      </div>

      <div class="about__grid">
        <div class="about__portrait">
          <img
            :src="doctorPhoto"
            :alt="fmt(t.about.doctorAlt, { name: t.clinic.doctorName })"
            class="about__photo"
            width="471"
            height="468"
            loading="lazy"
            decoding="async"
          />
        </div>

        <div class="about__copy">
          <p>{{ t.about.p1 }}</p>
          <p>{{ t.about.p2 }}</p>
          <!-- Doctor's name as a signature, in the same script as "oral care" -->
          <p class="about__signature">
            <span class="script">{{ t.clinic.doctorName }}</span>
            <span class="about__role">{{ t.clinic.doctorRole }}</span>
          </p>
        </div>
      </div>

      <ClinicGallery
        :images="gallery"
        :label="t.about.galleryAria"
        :show-label="t.about.showPhoto"
        class="about__gallery"
      />
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
