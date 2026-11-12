<script setup>
import { results } from '../data/content.js'
</script>

<template>
  <section id="results" class="section results" aria-labelledby="results-title">
    <div class="container">
      <div class="section-head">
        <p class="eyebrow">(04) Smile results</p>
        <div>
          <h2 id="results-title" class="display">Before <span class="script">&amp;</span> after</h2>
          <p class="results__note">
            Real patient photos, shared with their consent. Individual results vary.
          </p>
        </div>
      </div>

      <ul class="results__grid">
        <li v-for="r in results" :key="r.title" class="case">
          <div class="case__pair">
            <div class="placeholder case__before">
              <span class="placeholder__label">Before</span>
            </div>
            <div class="placeholder case__after">
              <span class="placeholder__label">After</span>
            </div>
          </div>
          <div class="case__caption">
            <h3 class="case__title">{{ r.title }}</h3>
            <span class="case__note">{{ r.note }}</span>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.results {
  padding-top: 0;
}

.results__note {
  margin-top: 16px;
  font-size: 12px;
  color: var(--muted);
}

.results__grid {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
}

.case__pair {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3px;
}

.case__pair > div {
  aspect-ratio: 1;
}

.case__before {
  background: linear-gradient(160deg, #cfc1b2 0%, #b5a492 100%);
}

.case__after {
  background: linear-gradient(160deg, #efe8de 0%, #ddd1c2 100%);
}

.case__caption {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 12px;
  margin-top: 10px;
  padding-top: 10px;
  border-top: 1px solid var(--line);
}

.case__title {
  font-family: var(--font-body);
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0.08em;
  color: var(--ink);
}

.case__note {
  font-size: 11px;
  color: var(--muted);
  text-transform: uppercase;
  text-align: right;
}

@media (max-width: 900px) {
  .results__grid {
    grid-template-columns: 1fr;
    gap: 32px;
  }
}
</style>
