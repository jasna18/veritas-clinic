<script setup>
import { ref } from 'vue'
import { treatments } from '../data/content.js'

// Card whose title is shown after a click/tap (touch screens have no hover)
const active = ref(null)

function toggle(i) {
  active.value = active.value === i ? null : i
}
</script>

<template>
  <section id="treatments" class="section treatments" aria-labelledby="treatments-title">
    <div class="container">
      <div class="section-head">
        <p class="eyebrow eyebrow--line">Treatments</p>
        <h2 id="treatments-title" class="display">
          What can we do <span class="script">for you?</span>
        </h2>
      </div>

      <ul class="treatments__grid">
        <li v-for="(t, i) in treatments" :key="t.title">
          <button
            type="button"
            class="card placeholder"
            :class="{ 'is-active': active === i }"
            @click="toggle(i)"
          >
            <img
              v-if="t.image"
              :src="t.image"
              :alt="t.imageAlt"
              class="card__img"
              :style="t.imagePosition ? { objectPosition: t.imagePosition } : null"
              width="600"
              height="400"
              loading="lazy"
              decoding="async"
            />
            <span class="card__caption">
              <span class="card__title">{{ t.title }}</span>
            </span>
          </button>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.treatments {
  padding-top: 0;
}

.treatments__grid {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 20px;
}

/* Photo tile; the whole tile is the click/tap target */
.card {
  display: block;
  width: 100%;
  aspect-ratio: 4 / 3;
  padding: 0;
  border: 0;
  border-radius: 0;
  cursor: pointer;
  text-align: left;
}

.card__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 600ms var(--ease);
}

/* Title panel that slides up from the bottom edge */
.card__caption {
  position: absolute;
  inset: auto 0 0;
  padding: 48px 20px 18px;
  background: linear-gradient(180deg, rgba(63, 77, 74, 0) 0%, rgba(63, 77, 74, 0.88) 100%);
  transform: translateY(100%);
  transition: transform 320ms var(--ease);
}

.card__title {
  display: block;
  font-family: var(--font-display);
  font-size: 22px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  line-height: 1.2;
  color: var(--cream);
  opacity: 0;
  transform: translateY(12px);
  transition:
    opacity 320ms var(--ease) 60ms,
    transform 320ms var(--ease) 60ms;
}

.card:hover .card__caption,
.card:focus-visible .card__caption,
.card.is-active .card__caption {
  transform: translateY(0);
}

.card:hover .card__title,
.card:focus-visible .card__title,
.card.is-active .card__title {
  opacity: 1;
  transform: translateY(0);
}

.card:hover .card__img,
.card.is-active .card__img {
  transform: scale(1.04);
}

.card:focus-visible {
  outline-offset: 4px;
}

@media (max-width: 1000px) {
  .treatments__grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 700px) {
  .treatments__grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }
}

/* Touch screens have no hover: always show the treatment name */
@media (hover: none) {
  .card .card__caption {
    transform: translateY(0);
  }

  .card .card__title {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Without motion: title simply fades in, no slide or zoom */
@media (prefers-reduced-motion: reduce) {
  .card__caption,
  .card__title,
  .card:hover .card__img,
  .card.is-active .card__img {
    transform: none;
  }

  .card__caption {
    opacity: 0;
    transition: opacity 150ms linear;
  }

  .card:hover .card__caption,
  .card:focus-visible .card__caption,
  .card.is-active .card__caption {
    opacity: 1;
  }
}
</style>
