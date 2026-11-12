<script setup>
import doctorPhoto from '../assets/images/doctor-portrait.jpg'

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
        <div class="about__portrait">
          <img
            :src="doctorPhoto"
            alt="Founder of Veritas Polyclinic"
            class="about__photo"
            width="471"
            height="468"
          />
        </div>

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

  /* On smaller screens the photo follows the welcome text */
  .about__portrait {
    order: 1;
    max-width: 420px; /* keep the photo sharp on tablets */
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
