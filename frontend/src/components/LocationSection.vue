<script setup>
import { clinic } from '../data/content.js'
import { useI18n } from '../i18n'

const { t } = useI18n()
</script>

<template>
  <section id="location" class="section location" aria-labelledby="location-title">
    <div class="container">
      <div class="location__head">
        <div>
          <p class="eyebrow eyebrow--line">{{ t.location.eyebrow }}</p>
          <h2 id="location-title" class="display location__title">
            {{ t.location.title.before }} <span class="script">{{ t.location.title.script }}</span>
            {{ t.location.title.after }}
          </h2>
        </div>
        <a :href="clinic.directionsUrl" target="_blank" rel="noopener" class="btn btn--ghost">
          {{ t.location.directions }} <span aria-hidden="true">↗</span>
        </a>
      </div>

      <div class="map">
        <!-- Replace with the clinic's Google Maps embed iframe -->
        <span class="map__tag" aria-hidden="true">{{ t.location.mapTag }}</span>
        <span class="map__pin" aria-hidden="true"></span>
        <div class="map__card">
          <p class="map__label">{{ t.location.address }}</p>
          <p class="map__address">{{ t.clinic.address }}</p>
          <p class="map__parking">{{ t.location.parking }} {{ t.clinic.parking }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.location {
  padding-top: 0;
}

.location__head {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 24px;
  flex-wrap: wrap;
  margin-bottom: 24px;
}

.location__title {
  margin-top: 14px;
}

.map {
  position: relative;
  width: 100%; /* stop min-height + aspect-ratio from widening it past the screen */
  aspect-ratio: 12 / 5;
  min-height: 360px;
  background-color: #e4e1d9;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.35) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.35) 1px, transparent 1px);
  background-size: 44px 44px;
}

.map__tag {
  position: absolute;
  top: 14px;
  inset-inline-end: 14px;
  padding: 3px 9px;
  border: 1px solid rgba(74, 47, 35, 0.25);
  font-size: 10px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--muted);
}

.map__pin {
  position: absolute;
  top: 38%;
  left: 61%;
  width: 56px;
  height: 56px;
  margin: -28px 0 0 -28px;
  border-radius: 50%;
  background: radial-gradient(circle, var(--slate) 0 7px, rgba(74, 47, 35, 0.18) 8px 15px, rgba(74, 47, 35, 0.08) 16px);
}

.map__card {
  position: absolute;
  inset-inline-start: 26px;
  bottom: 26px;
  width: min(330px, calc(100% - 52px));
  padding: 18px 20px;
  background: var(--cream);
}

.map__label {
  font-size: 11px;
  font-weight: 400;
  letter-spacing: 0.18em;
  text-transform: uppercase;
}

.map__address {
  margin: 4px 0 10px;
  font-size: 15px;
  font-weight: 400;
  color: var(--slate);
}

.map__parking {
  font-size: 12px;
  color: var(--muted);
}

@media (max-width: 600px) {
  .location__head .btn {
    width: 100%;
  }

  .map {
    aspect-ratio: auto;
    min-height: 420px;
  }

  .map__card {
    inset-inline-start: 16px;
    bottom: 16px;
    width: calc(100% - 32px);
  }
}
</style>
