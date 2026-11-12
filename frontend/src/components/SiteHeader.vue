<script setup>
import { ref, watch, onMounted, onBeforeUnmount, nextTick } from 'vue'
import BrandLogo from './BrandLogo.vue'
import { navLinks, clinic } from '../data/content.js'

const scrolled = ref(false)
const menuOpen = ref(false)
const menuButton = ref(null)
const firstLink = ref(null)

function onScroll() {
  scrolled.value = window.scrollY > 40
}

function onKeydown(e) {
  if (e.key === 'Escape' && menuOpen.value) closeMenu()
}

function openMenu() {
  menuOpen.value = true
}

function closeMenu() {
  menuOpen.value = false
}

watch(menuOpen, async (open) => {
  document.body.style.overflow = open ? 'hidden' : ''
  await nextTick()
  if (open) firstLink.value?.[0]?.focus()
  else menuButton.value?.focus()
})

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('keydown', onKeydown)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('keydown', onKeydown)
  document.body.style.overflow = ''
})
</script>

<template>
  <header class="header" :class="{ 'header--solid': scrolled }">
    <div class="header__inner">
      <a href="#top" class="header__logo" aria-label="Veritas Polyclinic — home">
        <BrandLogo />
      </a>
      <div class="header__actions">
        <a href="#book" class="header__book">Book a visit</a>
        <button
          ref="menuButton"
          type="button"
          class="header__menu"
          aria-haspopup="dialog"
          :aria-expanded="menuOpen"
          aria-controls="site-menu"
          @click="openMenu"
        >
          Menu
          <span class="burger" aria-hidden="true"><span></span><span></span></span>
        </button>
      </div>
    </div>
  </header>

  <Transition name="menu">
    <div
      v-if="menuOpen"
      id="site-menu"
      class="menu"
      role="dialog"
      aria-modal="true"
      aria-label="Site menu"
    >
      <div class="menu__top">
        <span class="eyebrow eyebrow--light">Veritas Polyclinic · Dubai</span>
        <button type="button" class="header__menu header__menu--light" @click="closeMenu">
          Close <span aria-hidden="true" class="close-x">×</span>
        </button>
      </div>
      <nav class="menu__nav" aria-label="Primary">
        <a
          v-for="(link, i) in navLinks"
          :key="link.href"
          ref="firstLink"
          :href="link.href"
          class="menu__link"
          @click="closeMenu"
        >
          <span class="menu__num">0{{ i + 1 }}</span>
          {{ link.label }}
        </a>
      </nav>
      <div class="menu__foot">
        <a :href="clinic.phoneHref">{{ clinic.phone }}</a>
        <span>{{ clinic.email }}</span>
        <a href="#book" class="btn btn--gold" @click="closeMenu">
          Book a visit <span class="arrow" aria-hidden="true">→</span>
        </a>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.header {
  position: fixed;
  inset: 0 0 auto;
  z-index: 50;
  height: var(--header-h);
  background: rgba(214, 216, 207, 0.72);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(74, 90, 86, 0.12);
  transition: background-color var(--dur) var(--ease);
}

.header--solid {
  background: rgba(246, 239, 229, 0.96);
}

.header__inner {
  height: 100%;
  max-width: calc(var(--max) + var(--gutter) * 2);
  margin: 0 auto;
  padding: 0 var(--gutter);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header__logo {
  height: 60px;
  color: var(--slate);
  --logo-bg: transparent;
}

.header__actions {
  display: flex;
  align-items: center;
  gap: 12px;
}

.header__book {
  padding: 10px 12px;
  font-size: 12px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  font-weight: 400;
  color: var(--slate);
}

.header__book:hover {
  color: var(--gold);
}

.header__menu {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  min-height: 44px;
  padding: 10px 14px;
  border: 1px solid rgba(74, 90, 86, 0.28);
  border-radius: 2px;
  background: transparent;
  font-size: 12px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--slate);
  cursor: pointer;
  transition: border-color var(--dur) var(--ease);
}

.header__menu:hover {
  border-color: var(--slate);
}

.burger {
  display: inline-flex;
  flex-direction: column;
  gap: 5px;
  width: 16px;
}

.burger span {
  height: 1px;
  background: currentColor;
}

/* Menu overlay */
.menu {
  position: fixed;
  inset: 0;
  z-index: 60;
  background: var(--slate);
  color: var(--cream);
  display: flex;
  flex-direction: column;
  padding: 20px var(--gutter) 32px;
  overflow-y: auto;
}

.menu__top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 52px;
}

.eyebrow--light {
  color: rgba(246, 239, 229, 0.6);
}

.header__menu--light {
  color: var(--cream);
  border-color: var(--line-light);
}

.header__menu--light:hover {
  border-color: var(--cream);
}

.close-x {
  font-size: 18px;
  line-height: 1;
}

.menu__nav {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: var(--max);
  width: 100%;
  margin: 0 auto;
  padding: 40px 0;
}

.menu__link {
  display: flex;
  align-items: baseline;
  gap: 20px;
  padding: 10px 0;
  border-bottom: 1px solid var(--line-light);
  font-family: var(--font-display);
  font-size: clamp(28px, 5vw, 48px);
  text-transform: uppercase;
  line-height: 1.2;
  transition: color var(--dur) var(--ease);
}

.menu__link:hover {
  color: #e2b85e;
}

.menu__num {
  font-family: var(--font-body);
  font-size: 11px;
  letter-spacing: 0.2em;
  color: rgba(246, 239, 229, 0.5);
}

.menu__foot {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 16px 32px;
  max-width: var(--max);
  width: 100%;
  margin: 0 auto;
  font-size: 14px;
  color: rgba(246, 239, 229, 0.75);
}

.menu__foot .btn {
  margin-left: auto;
}

.menu-enter-active,
.menu-leave-active {
  transition: opacity 220ms var(--ease);
}

.menu-enter-from,
.menu-leave-to {
  opacity: 0;
}

@media (max-width: 600px) {
  .header__book {
    display: none;
  }

  .header__logo {
    height: 52px;
  }

  .menu__foot .btn {
    margin-left: 0;
    width: 100%;
  }
}
</style>
