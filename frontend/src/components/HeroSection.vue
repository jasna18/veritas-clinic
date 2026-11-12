<script setup>
import { marqueeItems } from '../data/content.js'
import receptionPhoto from '../assets/images/hero-reception.webp'
</script>

<template>
  <section class="hero" aria-labelledby="hero-title">
    <div class="hero__bg" aria-hidden="true"></div>
    <!-- Reception photo: right half on desktop, top band on phones -->
    <div class="hero__photo">
      <img
        :src="receptionPhoto"
        alt="Veritas Polyclinic reception with the Veritas logo on a green feature wall"
        width="1144"
        height="607"
        fetchpriority="high"
        decoding="async"
      />
    </div>
    <!-- <span class="hero__tag" aria-hidden="true">Hero photo · close-up natural smile, warm light</span> -->

    <div class="container hero__content">
      <p class="hero__eyebrow">Cosmetic &amp; aesthetic dentistry · Dubai</p>
      <h1 id="hero-title" class="hero__title">
        The art of a<br />
        <span class="script">natural</span> smile
      </h1>
      <div class="hero__bottom">
        <div class="hero__ctas">
          <a href="#book" class="btn btn--gold">
            Book a visit <span class="arrow" aria-hidden="true">→</span>
          </a>
          <a href="#treatments" class="btn btn--ghost-light">View treatments</a>
        </div>
      </div>
    </div>

    <div class="marquee" aria-label="Services">
      <div class="marquee__track">
        <ul v-for="n in 2" :key="n" class="marquee__list" :aria-hidden="n === 2">
          <li v-for="item in marqueeItems" :key="item">
            {{ item }}<span class="marquee__dot" aria-hidden="true"></span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  min-height: clamp(640px, 100svh, 860px);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  color: var(--cream);
  background: var(--slate);
  overflow: hidden;
}

.hero__bg {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse 55% 45% at 72% 22%, rgba(214, 208, 190, 0.55), transparent 70%),
    linear-gradient(180deg, #6d7c78 0%, #56645f 55%, #4a5752 100%);
}

.hero__photo {
  position: absolute;
  inset-block: 0;
  inset-inline-end: 0;
  width: 58%;
  /* fade the photo into the green panel on the text side */
  -webkit-mask-image: linear-gradient(to right, transparent 0%, #000 34%);
  mask-image: linear-gradient(to right, transparent 0%, #000 34%);
}

.hero__photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 45% 50%;
}

.hero__tag {
  position: absolute;
  top: calc(var(--header-h) + 8px);
  right: var(--gutter);
  padding: 4px 10px;
  border: 1px solid rgba(246, 239, 229, 0.35);
  font-size: 10px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: rgba(246, 239, 229, 0.75);
}

.hero__content {
  position: relative;
  padding-top: calc(var(--header-h) + 120px);
  padding-bottom: 40px;
}

.hero__eyebrow {
  font-size: 11px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  margin-bottom: 24px;
}

.hero__title {
  max-width: 600px;
  font-size: clamp(44px, 5.6vw, 76px);
  line-height: 1;
  letter-spacing: 0.03em;
  color: var(--cream);
}

.hero__title .script {
  color: #d39b2c;
  font-size: 1.02em;
}

.hero__bottom {
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 28px;
  max-width: 480px;
}

.hero__lede {
  max-width: 420px;
  font-size: 15px;
  color: rgba(246, 239, 229, 0.88);
}

.hero__ctas {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

/* Service ticker */
.marquee {
  position: relative;
  min-width: 0;
  background: rgba(58, 71, 68, 0.88); /* keeps the strip readable over the photo */
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  border-top: 1px solid var(--line-light);
  overflow: hidden;
  padding: 12px 0;
}

.marquee__track {
  display: flex;
  width: max-content;
  animation: marquee 40s linear infinite;
}

/* Hold a finger or the mouse on the strip to pause it */
.marquee:hover .marquee__track,
.marquee:active .marquee__track {
  animation-play-state: paused;
}

.marquee__list {
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;
}

.marquee__list li {
  display: flex;
  align-items: center;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  white-space: nowrap;
}

.marquee__dot {
  width: 9px;
  height: 9px;
  margin: 0 40px;
  border: 1px solid rgba(246, 239, 229, 0.75);
  border-radius: 50%;
}

@keyframes marquee {
  to {
    transform: translateX(-50%);
  }
}

@media (max-width: 900px) {
  /* Tablets too: hero sized to its content, so no empty band under the photo */
  .hero {
    min-height: 0;
  }

  /* Phones & tablets: the reception photo is the full hero background,
     blended into the hero's slate green so the text stays readable */
  .hero__photo {
    inset: 0;
    width: 100%;
    height: 100%;
    -webkit-mask-image: none;
    mask-image: none;
  }

  /* Photo fills the top of the hero (logo wall above the heading),
     then melts into the slate green behind the text */
  .hero__photo img {
    height: calc(var(--header-h) + 440px);
    object-position: 58% 50%;
    /* hero colour blends in on all four edges of the photo */
    -webkit-mask-image:
      linear-gradient(to right, transparent 0%, #000 16%, #000 84%, transparent 100%),
      linear-gradient(to bottom, transparent 0%, #000 22%, #000 62%, transparent 100%);
    -webkit-mask-composite: source-in;
    mask-image:
      linear-gradient(to right, transparent 0%, #000 16%, #000 84%, transparent 100%),
      linear-gradient(to bottom, transparent 0%, #000 22%, #000 62%, transparent 100%);
    mask-composite: intersect;
  }

  .hero__photo::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      180deg,
      rgba(74, 90, 86, 0.18) 0%,
      rgba(74, 90, 86, 0.28) calc(var(--header-h) + 180px),
      rgba(66, 80, 76, 0.86) calc(var(--header-h) + 285px),
      rgba(66, 80, 76, 0.92) 100%
    );
  }

  .hero__content {
    padding-top: calc(var(--header-h) + 300px); /* heading starts below the logo wall */
  }

  /* "Cosmetic & aesthetic dentistry" line: clear against the photo */
  .hero__eyebrow {
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.12em;
    color: #fff;
    text-shadow: 0 1px 8px rgba(30, 40, 37, 0.7);
  }

  .hero__bottom {
    max-width: none;
  }
}

@media (max-width: 700px) {
  /* Size to content on phones so there's no empty band above the heading */
  .hero {
    min-height: 0;
  }

  .hero__content {
    padding-top: calc(var(--header-h) + 300px); /* heading starts below the logo wall */
    padding-bottom: 36px;
  }

  .hero__tag {
    display: none;
  }

  .hero__ctas,
  .hero__ctas .btn {
    width: 100%;
  }

  /* Narrow screens show fewer items, so move a bit faster to read as motion */
  .marquee__track {
    animation-duration: 16s;
  }
}

/* Phones with Reduce Motion / Remove animations (often turned on by battery saver)
   still get a gentle, slower drift. These override the site-wide reduced-motion rule. */
@media (prefers-reduced-motion: reduce) {
  .marquee .marquee__track {
    animation-duration: 70s !important;
    animation-iteration-count: infinite !important;
  }
}

@media (prefers-reduced-motion: reduce) and (max-width: 700px) {
  .marquee .marquee__track {
    animation-duration: 18s !important;
  }
}
</style>
