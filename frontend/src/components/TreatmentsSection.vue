<script setup>
import { treatments } from '../data/content.js'

const pad = (n) => String(n).padStart(2, '0')
</script>

<template>
  <section id="treatments" class="section treatments" aria-labelledby="treatments-title">
    <div class="container">
      <div class="section-head">
        <p class="eyebrow">(02) Treatments</p>
        <h2 id="treatments-title" class="display">Our <span class="script">treatments</span></h2>
      </div>

      <ul class="treatments__grid">
        <li v-for="(t, i) in treatments" :key="t.title" class="card">
          <div class="card__media placeholder">
            <span class="placeholder__label">Photo · {{ t.photo }}</span>
          </div>
          <div class="card__head">
            <h3 class="card__title">{{ t.title }}</h3>
            <span class="card__num">No.{{ pad(i + 1) }}</span>
          </div>
          <p class="card__body">{{ t.description }}</p>
          <div class="card__foot">
            <span class="card__meta">From {{ t.price }} · {{ t.visits }}</span>
            <a href="#book" class="card__link" :aria-label="`Book ${t.title}`">
              Book <span aria-hidden="true">→</span>
            </a>
          </div>
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
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 56px 20px;
}

.card__media {
  aspect-ratio: 4 / 3;
  margin-bottom: 14px;
}

.card:nth-child(4n + 2) .card__media,
.card:nth-child(4n + 3) .card__media {
  background: linear-gradient(160deg, #e4dbcf 0%, #cdbcaa 100%);
}

.card__head {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 16px;
  padding-top: 14px;
  border-top: 1px solid var(--line);
}

.card__title {
  font-size: 20px;
  color: var(--slate);
}

.card__num {
  font-size: 11px;
  letter-spacing: 0.06em;
  color: var(--muted);
}

.card__body {
  margin-top: 12px;
  font-size: 14px;
  line-height: 1.65;
  max-width: 52ch;
}

.card__foot {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  margin-top: 14px;
}

.card__meta {
  font-size: 12px;
  color: var(--muted);
}

.card__link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  min-height: 44px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--slate);
  transition: color var(--dur) var(--ease);
}

.card__link:hover {
  color: var(--gold);
}

@media (max-width: 700px) {
  .treatments__grid {
    grid-template-columns: 1fr;
    gap: 44px;
  }
}
</style>
