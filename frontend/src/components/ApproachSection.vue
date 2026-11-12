<script setup>
import { steps } from '../data/content.js'
</script>

<template>
  <section id="approach" class="section approach" aria-labelledby="approach-title">
    <div class="container">
      <div class="section-head">
        <p class="eyebrow eyebrow--line">Our approach</p>
        <h2 id="approach-title" class="display">
          Four steps, <span class="script">never rushed</span>
        </h2>
      </div>

      <ol class="steps">
        <li v-for="s in steps" :key="s.title" class="step">
          <h3 class="step__title">{{ s.title }}</h3>
          <p class="step__body">{{ s.body }}</p>
        </li>
      </ol>
    </div>
  </section>
</template>

<style scoped>
.approach {
  padding-top: 0;
}

.steps {
  list-style: none;
  margin: 0;
  padding: 0;
  border-top: 1px solid var(--line);
}

.step {
  display: grid;
  grid-template-columns: 240px minmax(0, 1fr) minmax(0, 1fr);
  gap: 24px;
  align-items: start;
  padding: 32px 0;
  border-bottom: 1px solid var(--line);
}

/* First column stays empty so titles keep their position under the heading */
.step__title {
  grid-column: 2;
  padding-left: 60px;
  font-size: clamp(26px, 3vw, 34px);
  color: var(--slate);
}

.step__body {
  font-size: 14px;
  line-height: 1.75;
  max-width: 38ch;
  justify-self: end;
}

@media (max-width: 900px) {
  .step {
    grid-template-columns: 1fr;
    gap: 8px;
    padding: 28px 0;
  }

  .step__title {
    grid-column: auto;
    padding-left: 0;
  }

  .step__body {
    justify-self: start;
    max-width: 52ch;
  }
}
</style>
