<script setup>
// Opening screen, in stages:
//  0. wait (briefly) for the logo font, so the logo never flashes in a fallback font
//  1. the oval opens out from the middle
//  2. VERITAS, POLYCLINIC, DUBAI rise in one after another
//  3. a thin ochre line draws under the logo; the logo holds
//  4. the beige screen lifts away like a curtain while the logo glides into the header
// The header logo is hidden during the intro and revealed the moment the moving logo lands,
// so only one logo is ever visible. Plays the same on every device (incl. Reduce Motion).
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue'
import BrandLogo from './BrandLogo.vue'

const visible = ref(true)
const ready = ref(false)
const leaving = ref(false)
const logo = ref(null)

const SHOW = 2700 // ms from the start of the animation until the exit begins (stages 1–3 + hold)
const EXIT = 1000 // ms for the curtain lift + glide
const FONT_WAIT_MAX = 2500 // never wait longer than this for the font

function wait(ms) {
  return new Promise((r) => setTimeout(r, ms))
}

function finish() {
  document.documentElement.classList.remove('intro-active')
  document.documentElement.style.overflow = ''
}

onMounted(async () => {
  const root = document.documentElement
  root.classList.add('intro-active')
  root.style.overflow = 'hidden'

  // 0. Wait for the logo's font (Marcellus) so the lettering is right from the first frame
  try {
    await Promise.race([document.fonts?.load('100px Marcellus') ?? Promise.resolve(), wait(FONT_WAIT_MAX)])
  } catch {
    /* carry on with whatever font is available */
  }
  ready.value = true

  // 1–3 play via CSS; hold, then exit
  await wait(SHOW)
  await nextTick()

  // Measure where the logo must travel to (the header logo)
  const el = logo.value
  const target = document.querySelector('.header__logo')
  if (el && target) {
    const from = el.getBoundingClientRect()
    const to = target.getBoundingClientRect()
    el.style.setProperty('--dx', `${to.left + to.width / 2 - (from.left + from.width / 2)}px`)
    el.style.setProperty('--dy', `${to.top + to.height / 2 - (from.top + from.height / 2)}px`)
    el.style.setProperty('--s', `${to.height / from.height}`)
  }
  leaving.value = true

  await wait(EXIT)
  // The moving logo has landed: reveal the real header logo, then remove the intro
  finish()
  await wait(40) // one frame for the header logo to appear under the landed logo
  visible.value = false
})

onBeforeUnmount(finish)
</script>

<template>
  <div
    v-if="visible"
    class="splash"
    :class="{ 'is-ready': ready, 'is-leaving': leaving }"
    aria-hidden="true"
  >
    <div class="splash__curtain"></div>
    <div ref="logo" class="splash__logo">
      <BrandLogo />
      <span class="splash__line"></span>
    </div>
  </div>
</template>

<!-- Global: hide the header logo while the intro's own logo is on screen -->
<style>
html.intro-active .header__logo {
  visibility: hidden;
}
</style>

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
}

/* Hidden starting state (before the font is ready).
   The oval grows from its centre with transform (not clip-path: iPhone Safari
   doesn't render clip-path on SVG shapes and the oval disappeared) */
.splash__logo :deep(path) {
  opacity: 0;
  transform-box: fill-box;
  transform-origin: center;
  transform: scaleY(0);
}

.splash__logo :deep(text) {
  opacity: 0;
  transform-box: fill-box;
  transform-origin: center;
  transform: translateY(35%);
}

.splash__line {
  position: absolute;
  left: 50%;
  bottom: -28px;
  width: 120px;
  height: 1px;
  margin-left: -60px;
  background: var(--gold);
  transform: scaleX(0);
}

/* 1. Oval opens out from the middle */
.splash.is-ready .splash__logo :deep(path) {
  animation: oval-open 900ms cubic-bezier(0.22, 1, 0.36, 1) 150ms forwards;
}

/* 2. Lettering rises in, one line after another */
.splash.is-ready .splash__logo :deep(text) {
  animation: word-rise 800ms cubic-bezier(0.22, 1, 0.36, 1) forwards;
}

.splash.is-ready .splash__logo :deep(text:nth-of-type(1)) {
  animation-delay: 450ms;
}

.splash.is-ready .splash__logo :deep(text:nth-of-type(2)) {
  animation-delay: 650ms;
}

.splash.is-ready .splash__logo :deep(text:nth-of-type(3)) {
  animation-delay: 800ms;
}

/* 3. Thin ochre line draws out beneath the logo */
.splash.is-ready .splash__line {
  animation: line-draw 700ms cubic-bezier(0.22, 1, 0.36, 1) 1000ms forwards;
}

/* 4. Exit: curtain lifts, logo glides onto the header logo, line fades */
.splash.is-leaving .splash__curtain {
  animation: curtain-lift 1000ms cubic-bezier(0.76, 0, 0.24, 1) forwards;
}

.splash.is-leaving .splash__logo {
  animation: logo-glide 1000ms cubic-bezier(0.65, 0, 0.35, 1) forwards;
}

.splash.is-leaving .splash__line {
  animation: line-fade 300ms ease forwards;
}

@keyframes oval-open {
  0% {
    opacity: 0;
    transform: scaleY(0);
  }
  30% {
    opacity: 1;
  }
  100% {
    opacity: 1;
    transform: scaleY(1);
  }
}

@keyframes word-rise {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes line-draw {
  to {
    transform: scaleX(1);
  }
}

@keyframes line-fade {
  from {
    transform: scaleX(1);
    opacity: 1;
  }
  to {
    transform: scaleX(1);
    opacity: 0;
  }
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
    color: #627676;
  }
  to {
    transform: translate(var(--dx, 0px), var(--dy, 0px)) scale(var(--s, 1));
    color: var(--slate);
  }
}

/* Phones with Reduce Motion / Remove animations still get the full intro:
   override the site-wide reduced-motion rule (which shortens every animation to ~0) */
@media (prefers-reduced-motion: reduce) {
  .splash.is-ready .splash__logo :deep(path) {
    animation-duration: 900ms !important;
  }

  .splash.is-ready .splash__logo :deep(text) {
    animation-duration: 800ms !important;
  }

  .splash.is-ready .splash__line {
    animation-duration: 700ms !important;
  }

  .splash.is-leaving .splash__curtain,
  .splash.is-leaving .splash__logo {
    animation-duration: 1000ms !important;
  }

  .splash.is-leaving .splash__line {
    animation-duration: 300ms !important;
  }
}
</style>
