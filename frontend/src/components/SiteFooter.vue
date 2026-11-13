<script setup>
import { clinic, navLinks } from '../data/content.js'
import { useI18n } from '../i18n'

const { t, locale, setLocale } = useI18n()
</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__cols">
        <div>
          <p class="footer__label">{{ t.footer.visit }}</p>
          <p>{{ t.clinic.addressShort }}<br />{{ t.clinic.city }}</p>
        </div>
        <nav :aria-label="t.footer.navAria">
          <p class="footer__label">{{ t.footer.pages }}</p>
          <ul>
            <li v-for="link in navLinks" :key="link.href">
              <a :href="link.href">{{ t.nav[link.key] }}</a>
            </li>
          </ul>
        </nav>
        <div>
          <p class="footer__label">{{ t.footer.contact }}</p>
          <ul>
            <li><a :href="clinic.phoneHref" dir="ltr">{{ clinic.phone }}</a></li>
            <li dir="ltr">{{ clinic.email }}</li>
            <li>{{ t.clinic.hours }}</li>
          </ul>
        </div>
        <div>
          <p class="footer__label">{{ t.footer.appointments }}</p>
          <a href="#book" class="btn btn--gold">
            {{ t.header.bookVisit }} <span class="arrow" aria-hidden="true">→</span>
          </a>
        </div>
      </div>

      <p class="footer__wordmark" aria-hidden="true">Veritas</p>

      <div class="footer__bar">
        <span>© {{ new Date().getFullYear() }} {{ t.footer.copyright }}</span>
        <div class="footer__legal">
          <a href="#">{{ t.footer.privacy }}</a>
          <a href="#">{{ t.footer.terms }}</a>
          <!-- Language switch -->
          <span class="footer__langs">
            <button
              type="button"
              lang="en"
              :aria-pressed="locale === 'en'"
              :class="{ 'is-current': locale === 'en' }"
              @click="setLocale('en')"
            >
              English
            </button>
            ·
            <button
              type="button"
              lang="ar"
              :aria-pressed="locale === 'ar'"
              :class="{ 'is-current': locale === 'ar' }"
              @click="setLocale('ar')"
            >
              العربية
            </button>
          </span>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: linear-gradient(180deg, #e5ddd2 0%, #ddd2c4 100%);
  border-top: 1px solid var(--line);
  padding-top: 56px;
  font-size: 13px;
}

.footer__cols {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 32px;
}

.footer__label {
  margin-bottom: 14px;
  font-size: 11px;
  font-weight: 400;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--ink);
}

.footer ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.footer li {
  line-height: 1.7;
}

.footer__cols a:not(.btn):hover,
.footer__legal a:hover {
  color: var(--gold);
}

.footer__wordmark {
  margin: 48px 0 24px;
  font-family: var(--font-display);
  font-size: clamp(72px, 17vw, 168px);
  line-height: 0.9;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--slate);
}

.footer__bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px 24px;
  padding: 18px 0 22px;
  border-top: 1px solid var(--line);
  font-size: 11px;
  color: var(--muted);
}

.footer__legal {
  display: flex;
  gap: 18px;
  flex-wrap: wrap;
}

.footer__langs button {
  padding: 4px 2px;
  border: 0;
  background: none;
  font-size: inherit;
  color: inherit;
  cursor: pointer;
}

.footer__langs button[lang='ar'] {
  font-family: 'Tajawal', 'Segoe UI', Tahoma, sans-serif;
  font-size: 13px;
}

.footer__langs button:hover,
.footer__langs .is-current {
  color: var(--slate);
  text-decoration: underline;
  text-underline-offset: 3px;
}

/* Visit, Pages and Contact side by side; Appointments on its own row below */
@media (max-width: 900px) {
  .footer__cols {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 32px 20px;
  }

  .footer__cols > :last-child {
    grid-column: 1 / -1;
  }
}

@media (max-width: 480px) {
  .footer {
    font-size: 12px;
  }

  .footer__cols {
    gap: 28px 12px;
  }

  .footer__cols p,
  .footer__cols li {
    overflow-wrap: anywhere; /* long emails/addresses wrap inside the narrow column */
  }

  .footer__label {
    letter-spacing: 0.12em;
  }
}
</style>
