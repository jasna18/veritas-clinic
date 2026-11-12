<script setup>
import { ref } from 'vue'
import { faqs } from '../data/content.js'

const open = ref(new Set([3, 4]))

function toggle(i) {
  const next = new Set(open.value)
  next.has(i) ? next.delete(i) : next.add(i)
  open.value = next
}
</script>

<template>
  <section id="faq" class="section faq" aria-labelledby="faq-title">
    <div class="container faq__grid">
      <div>
        <p class="eyebrow">(06) Questions</p>
        <h2 id="faq-title" class="faq__title">
          Good<br />to <span class="script">know</span>
        </h2>
      </div>

      <ul class="faq__list">
        <li v-for="(f, i) in faqs" :key="f.q" class="faq__item">
          <h3>
            <button
              :id="`faq-q-${i}`"
              type="button"
              class="faq__q"
              :aria-expanded="open.has(i)"
              :aria-controls="`faq-a-${i}`"
              @click="toggle(i)"
            >
              <span>{{ f.q }}</span>
              <span class="faq__icon" :class="{ 'is-open': open.has(i) }" aria-hidden="true">+</span>
            </button>
          </h3>
          <div
            :id="`faq-a-${i}`"
            class="faq__a"
            :class="{ 'is-open': open.has(i) }"
            role="region"
            :aria-labelledby="`faq-q-${i}`"
          >
            <div class="faq__a-inner">
              <p>{{ f.a }}</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.faq__grid {
  display: grid;
  grid-template-columns: 272px minmax(0, 1fr);
  gap: 40px;
}

.faq__title {
  margin-top: 14px;
  font-size: var(--heading-size);
  line-height: 0.95;
  color: var(--slate);
}

.faq__list {
  list-style: none;
  margin: 0;
  padding: 0;
  border-top: 1px solid var(--line);
}

.faq__item {
  border-bottom: 1px solid var(--line);
}

.faq__item h3 {
  font-family: var(--font-body);
  text-transform: none;
  letter-spacing: 0;
  font-weight: 400;
}

.faq__q {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
  padding: 18px 0;
  min-height: 60px;
  border: 0;
  background: none;
  text-align: left;
  font-size: 19px;
  line-height: 1.4;
  color: var(--slate);
  cursor: pointer;
}

.faq__q:hover {
  color: var(--gold);
}

.faq__icon {
  flex-shrink: 0;
  font-size: 18px;
  font-weight: 300;
  color: var(--muted);
  transition: transform var(--dur) var(--ease);
}

.faq__icon.is-open {
  transform: rotate(45deg);
}

.faq__a {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 240ms var(--ease);
}

.faq__a.is-open {
  grid-template-rows: 1fr;
}

.faq__a-inner {
  overflow: hidden;
}

.faq__a p {
  max-width: 62ch;
  padding-bottom: 22px;
  font-size: 14px;
  line-height: 1.75;
}

@media (max-width: 900px) {
  .faq__grid {
    grid-template-columns: 1fr;
  }

  .faq__q {
    font-size: 17px;
  }
}
</style>
