<script setup>
import { marqueeItems } from '../data/content.js'
</script>

<template>
  <section class="hero" aria-labelledby="hero-title">
    <div class="hero__bg" aria-hidden="true"></div>
    <!-- <span class="hero__tag" aria-hidden="true">Hero photo · close-up natural smile, warm light</span> -->

    <div class="container hero__content">
      <p class="hero__eyebrow">Cosmetic &amp; aesthetic dentistry · Dubai</p>
      <h1 id="hero-title" class="hero__title">
        The art of a<br />
        <span class="script">natural</span> smile
      </h1>
      <div class="hero__bottom">
        <p class="hero__lede">
          Veneers, whitening, bonding and aligners — planned around your face, your features and
          your goals, in a calm, light-filled studio.
        </p>
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
  font-size: clamp(48px, 7.4vw, 88px);
  line-height: 1;
  letter-spacing: 0.03em;
  color: var(--cream);
}

.hero__title .script {
  color: #d39b2c;
  font-size: 1.02em;
}

.hero__bottom {
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 32px;
  flex-wrap: wrap;
}

.hero__lede {
  max-width: 340px;
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

@media (max-width: 700px) {
  .hero__content {
    padding-top: calc(var(--header-h) + 80px);
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
