<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const props = defineProps({
  images: { type: Array, required: true }, // [{ src, alt }]
  interval: { type: Number, default: 3500 },
  label: { type: String, default: 'Inside the clinic' }, // group name for screen readers
  showLabel: { type: String, default: 'Show photo: {alt}' }, // button label per photo
})

const stage = ref(null)
const front = ref(0) // index of the photo in front
const revealed = ref(false) // fans out the first time the gallery scrolls into view

let timer = null
let observer = null

// Where each photo sits relative to the one in front
function slot(i) {
  const n = props.images.length
  const d = (i - front.value + n) % n
  return d === 0 ? 'front' : d === 1 ? 'right' : 'left'
}

function startAuto() {
  if (timer) return
  timer = setInterval(() => {
    front.value = (front.value + 1) % props.images.length
  }, props.interval)
}

function stopAuto() {
  clearInterval(timer)
  timer = null
}

// Manual moves restart the timer so two moves never land back-to-back
function show(i) {
  front.value = i
  stopAuto()
  startAuto()
}

function onHover() {
  show((front.value + 1) % props.images.length)
}

onMounted(() => {
  if (!('IntersectionObserver' in window)) {
    revealed.value = true
    return
  }
  observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        revealed.value = true
        startAuto()
      } else {
        stopAuto()
      }
    },
    { threshold: 0.35 },
  )
  observer.observe(stage.value)
})

onBeforeUnmount(() => {
  stopAuto()
  observer?.disconnect()
})
</script>

<template>
  <div
    ref="stage"
    class="fan"
    :class="{ 'is-revealed': revealed }"
    role="group"
    :aria-label="label"
    @mouseenter="onHover"
  >
    <button
      v-for="(img, i) in images"
      :key="img.src"
      type="button"
      class="fan__card"
      :class="`is-${slot(i)}`"
      :style="{ '--i': i }"
      :aria-label="showLabel.replace('{alt}', img.alt)"
      :aria-pressed="slot(i) === 'front'"
      @click="show(i)"
    >
      <img :src="img.src" :alt="img.alt" width="800" height="534" loading="lazy" decoding="async" />
    </button>
  </div>
</template>

<style scoped>
/* Stage sized so the front card plus its drop fit inside */
.fan {
  position: relative;
  max-width: 900px; /* front photo ~500px, side photos ~370px */
  margin-inline: auto;
  aspect-ratio: 5 / 2;
}

.fan__card {
  position: absolute;
  top: 0;
  left: 22%;
  width: 56%;
  aspect-ratio: 16 / 10;
  padding: 0;
  border: 0;
  border-radius: 14px;
  overflow: hidden;
  background: var(--sand);
  box-shadow: 0 28px 50px -24px rgba(43, 26, 18, 0.5);
  cursor: pointer;
  transition:
    transform 900ms var(--ease),
    filter 900ms var(--ease),
    opacity 700ms var(--ease);
}

.fan__card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.fan__card.is-front {
  z-index: 3;
  transform: translate(0, 12%) scale(1);
  cursor: default;
}

.fan__card.is-left,
.fan__card.is-right {
  z-index: 2;
  filter: brightness(0.92) saturate(0.95);
}

.fan__card.is-left {
  transform: translate(-48%, 0) scale(0.74);
}

.fan__card.is-right {
  transform: translate(48%, 0) scale(0.74);
}

.fan__card.is-left:hover,
.fan__card.is-right:hover {
  filter: none;
}

/* Before it scrolls into view: cards gathered low and hidden, then they fan out */
.fan:not(.is-revealed) .fan__card {
  opacity: 0;
  transform: translate(0, 24%) scale(0.82);
}

.fan.is-revealed .fan__card {
  transition-delay: calc(var(--i) * 90ms);
}

.fan.is-revealed .fan__card.is-front,
.fan.is-revealed .fan__card:hover {
  transition-delay: 0ms;
}

.fan__card:focus-visible {
  outline-offset: 4px;
}

/* Phones with Reduce Motion / Remove animations (often turned on by battery saver)
   still get the smooth card movement; overrides the site-wide reduced-motion rule. */
@media (prefers-reduced-motion: reduce) {
  .fan .fan__card {
    transition-duration: 900ms, 900ms, 700ms !important;
  }
}

@media (max-width: 700px) {
  .fan {
    aspect-ratio: 9 / 5;
  }

  .fan__card {
    left: 11%;
    width: 78%;
    border-radius: 10px;
  }

  .fan__card.is-front {
    transform: translate(0, 8%) scale(1);
  }

  .fan__card.is-left {
    transform: translate(-24%, 0) scale(0.8);
  }

  .fan__card.is-right {
    transform: translate(24%, 0) scale(0.8);
  }
}
</style>
