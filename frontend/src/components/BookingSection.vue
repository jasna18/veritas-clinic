<script setup>
import { useI18n } from '../i18n'

const { t, fmt } = useI18n()
</script>

<template>
  <section id="book" class="booking" aria-labelledby="book-title">
    <div class="container">
      <div class="booking__head">
        <div>
          <p class="eyebrow eyebrow--line booking__eyebrow">{{ t.booking.eyebrow }}</p>
          <h2 id="book-title" class="booking__title">
            {{ t.booking.title.before }} <span class="script">{{ t.booking.title.script }}</span>
            {{ t.booking.title.after }}
          </h2>
        </div>
        <a href="#contact" class="btn btn--gold">
          {{ t.booking.cta }} <span class="arrow" aria-hidden="true">→</span>
        </a>
      </div>

      <ol class="booking__steps">
        <li v-for="(s, i) in t.booking.steps" :key="i">
          <span class="booking__num">{{ fmt(t.booking.stepLabel, { n: i + 1 }) }}</span>
          <h3 class="booking__step-title">{{ s.title }}</h3>
          <p class="booking__body">{{ s.body }}</p>
        </li>
      </ol>
    </div>
  </section>
</template>

<style scoped>
.booking {
  background: var(--slate);
  color: var(--cream);
  padding: 80px 0 88px;
}

.booking__head {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 24px;
  flex-wrap: wrap;
  padding-bottom: 40px;
  border-bottom: 1px solid var(--line-light);
}

.booking__eyebrow {
  color: rgba(246, 239, 229, 0.9);
  margin-bottom: 14px;
}

.booking__title {
  font-size: var(--heading-size);
  color: var(--cream);
}

.booking__title .script {
  color: #d9955a;
}

.booking__steps {
  list-style: none;
  margin: 0;
  padding: 24px 0 0;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 32px;
}

.booking__num {
  font-size: 11px;
  letter-spacing: 0.08em;
  color: rgba(246, 239, 229, 0.78);
}

.booking__step-title {
  margin: 8px 0 12px;
  font-size: 20px;
  line-height: 1.2;
  color: var(--cream);
}

.booking__body {
  font-size: 13px;
  color: rgba(246, 239, 229, 0.9);
  max-width: 32ch;
}

@media (max-width: 800px) {
  .booking__steps {
    grid-template-columns: 1fr;
    gap: 28px;
  }

  .booking__head .btn {
    width: 100%;
  }
}
</style>
