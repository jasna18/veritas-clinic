<script setup>
// Opening screen, in stages:
//  1. the oval opens out from the middle
//  2. VERITAS, POLYCLINIC, DUBAI rise in one after another
//  3. a thin ochre line draws under the logo
//  4. the beige screen lifts away like a curtain while the logo glides into the header
import { ref, onMounted, nextTick } from 'vue'
import BrandLogo from './BrandLogo.vue'

const visible = ref(true)
const leaving = ref(false)
const logo = ref(null)

const HOLD = 1750 // ms until the exit starts (covers stages 1–3)
const EXIT = 1000 // ms for the curtain lift + glide

function wait(ms) {
  return new Promise((r) => setTimeout(r, ms))
}

onMounted(async () => {
  document.documentElement.style.overflow = 'hidden'
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  await wait(reduce ? 500 : HOLD)
  await nextTick()

  // Measure where the logo must travel to (the header logo), then let CSS animate the exit
  const el = logo.value
  const target = document.querySelector('.header__logo')
  if (el && target && !reduce) {
    const from = el.getBoundingClientRect()
    const to = target.getBoundingClientRect()
    el.style.setProperty('--dx', `${to.left + to.width / 2 - (from.left + from.width / 2)}px`)
    el.style.setProperty('--dy', `${to.top + to.height / 2 - (from.top + from.height / 2)}px`)
    el.style.setProperty('--s', `${to.height / from.height}`)
  }
  leaving.value = true

  await wait((reduce ? 300 : EXIT) + 50)
  document.documentElement.style.overflow = ''
  visible.value = false
})
</script>

<template>
  <div v-if="visible" class="splash" :class="{ 'is-leaving': leaving }" aria-hidden="true">
    <div class="splash__curtain"></div>
    <div ref="logo" class="splash__logo">
      <BrandLogo />
      <span class="splash__line"></span>
    </div>
  </div>
</template>

<style scoped>
.splash {
  position: fixed;
  inset: 0;
  z-index: 100;
  display: grid;
  place-items: center;
  pointer-events: none;
}

/* Beige backdrop with a soft glow; lifts upward on exit */
.splash__curtain {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse 45% 40% at 50% 50%, rgba(255, 255, 255, 0.7), transparent 70%),
    #f7f0e7; /* brand beige */
}

.splash__logo {
  position: relative;
  height: min(42vh, 300px);
  color: #627676; /* brand soft green */
  transform-origin: center;
  transition: color 1000ms ease;
}

.splash.is-leaving .splash__logo {
  color: var(--slate); /* take on the header logo colour as it lands */
}

/* 4. Exit: curtain lifts up, logo glides onto the header logo */
.splash.is-leaving .splash__curtain {
  animation: curtain-lift 1000ms cubic-bezier(0.76, 0, 0.24, 1) forwards;
}

.splash.is-leaving .splash__logo {
  animation: logo-glide 1000ms cubic-bezier(0.65, 0, 0.35, 1) forwards;
}

@keyframes curtain-lift {
  from {
    clip-path: inset(0 0 0% 0);
  }
  to {
    clip-path: inset(0 0 100% 0);
  }
}

@keyframes logo-glide {
  from {
    transform: none;
  }
  to {
    transform: translate(var(--dx, 0px), var(--dy, 0px)) scale(var(--s, 1));
  }
}

/* 1. Oval opens out from the middle */
.splash__logo :deep(path) {
  clip-path: inset(50% 0 50% 0);
  animation: oval-open 900ms cubic-bezier(0.22, 1, 0.36, 1) 150ms forwards;
}

@keyframes oval-open {
  to {
    clip-path: inset(0 0 0 0);
  }
}

/* 2. Lettering rises in, one line after another */
.splash__logo :deep(text) {
  opacity: 0;
  transform-box: fill-box;
  transform-origin: center;
  transform: translateY(35%);
  animation: word-rise 800ms cubic-bezier(0.22, 1, 0.36, 1) forwards;
}

.splash__logo :deep(text:nth-of-type(1)) {
  animation-delay: 450ms;
}

.splash__logo :deep(text:nth-of-type(2)) {
  animation-delay: 650ms;
}

.splash__logo :deep(text:nth-of-type(3)) {
  animation-delay: 800ms;
}

@keyframes word-rise {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* 3. Thin ochre line draws out beneath the logo */
.splash__line {
  position: absolute;
  left: 50%;
  bottom: -28px;
  width: 120px;
  height: 1px;
  margin-left: -60px;
  background: var(--gold);
  transform: scaleX(0);
  animation: line-draw 700ms cubic-bezier(0.22, 1, 0.36, 1) 1000ms forwards;
  transition: opacity 300ms ease;
}

@keyframes line-draw {
  to {
    transform: scaleX(1);
  }
}

.splash.is-leaving .splash__line {
  opacity: 0;
}

/* Reduced motion: no staging, just a quick fade */
@media (prefers-reduced-motion: reduce) {
  .splash__logo :deep(path),
  .splash__logo :deep(text) {
    animation: none;
    clip-path: none;
    opacity: 1;
    transform: none;
  }

  .splash__line {
    display: none;
  }

}
</style>
