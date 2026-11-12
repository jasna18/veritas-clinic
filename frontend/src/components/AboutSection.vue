<script setup>
import { clinic } from '../data/content.js'
import doctorPhoto from '../assets/images/doctor.jpg'

const gallery = ['Treatment room', 'Reception', 'Patient lounge']
</script>

<template>
  <section id="about" class="section about" aria-labelledby="about-title">
    <div class="container">
      <div class="section-head">
        <p class="eyebrow eyebrow--line">About us</p>
        <h2 id="about-title" class="display">
          Trusted &amp; professional in <span class="script">oral care</span>
        </h2>
      </div>

      <div class="about__grid">
        <figure class="about__portrait">
          <img
            :src="doctorPhoto"
            :alt="`${clinic.doctor.name}, founder of Veritas Polyclinic`"
            class="about__photo"
            width="148"
            height="148"
          />
          <figcaption class="about__badge">
            <span class="about__name">{{ clinic.doctor.name }}</span>
            <span class="about__role">{{ clinic.doctor.title }}</span>
          </figcaption>
        </figure>

        <div class="about__copy">
          <p>
            Welcome to Veritas Polyclinic – your trusted partner in oral care in Dubai. We strive to
            offer a personal and innovative approach to dentistry, where the well-being of every
            patient is central. Our modern practice is designed with your comfort in mind.
          </p>
          <p>
            Whether you are looking for general dental care, cosmetic treatments or preventive
            measures, we are here for everyone. We combine the latest technologies with a personal
            touch to offer you the best possible experience. Discover our innovative approach to
            dentistry and experience the care you deserve.
          </p>
        </div>
      </div>

      <ul class="about__gallery" aria-label="Inside the clinic">
        <li v-for="room in gallery" :key="room" class="placeholder about__room">
          <span class="placeholder__label">Photo · {{ room }}</span>
        </li>
      </ul>
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

/* Doctor card: round headshot with name underneath */
.about__portrait {
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 48px 24px 40px;
  background: linear-gradient(170deg, #eceee9 0%, #c9d2ce 100%);
  text-align: center;
}

.about__photo {
  width: 148px;
  height: 148px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow:
    0 0 0 6px var(--cream),
    0 0 0 7px var(--gold);
}

.about__badge {
  display: flex;
  flex-direction: column;
  gap: 4px;
  line-height: 1.35;
}

.about__name {
  font-family: var(--font-display);
  font-size: 18px;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: var(--slate);
}

.about__role {
  font-size: 12px;
  color: var(--muted);
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

.about__gallery {
  list-style: none;
  margin: 120px 0 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
}

.about__room {
  aspect-ratio: 3 / 2;
}

.about__room:nth-child(1) {
  background: linear-gradient(150deg, #eef0ec, #c9d1c6);
}

.about__room:nth-child(2) {
  background: linear-gradient(150deg, #f1ece3, #c8d3c4);
}

.about__room:nth-child(3) {
  background: linear-gradient(150deg, #efe8de, #cbc5b3);
}

@media (max-width: 900px) {
  .about__grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .about__portrait {
    max-width: 360px;
  }

  .about__gallery {
    margin-top: 72px;
    grid-template-columns: 1fr 1fr;
  }

  .about__room:first-child {
    grid-column: 1 / -1;
  }
}
</style>
