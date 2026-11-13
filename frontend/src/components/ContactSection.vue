<script setup>
import { reactive, ref } from 'vue'
import { clinic } from '../data/content.js'
import { useI18n } from '../i18n'

const { t, fmt } = useI18n()

const form = reactive({
  name: '',
  mobile: '',
  time: 'morning', // key into t.contact.times
  message: '',
  consent: false,
})

const errors = reactive({ name: false, mobile: false, consent: false })
const submitted = ref(false)

// Each returns true when the field is invalid; message text comes from the active language
const validators = {
  name: () => form.name.trim().length < 2,
  mobile: () => !/^\+?[\d\s()-]{8,}$/.test(form.mobile.trim()),
  consent: () => !form.consent,
}

function validate(field) {
  errors[field] = validators[field]()
}

function clearError(field) {
  if (errors[field]) errors[field] = false
}

function submit() {
  Object.keys(validators).forEach(validate)
  const firstInvalid = Object.keys(validators).find((f) => errors[f])
  if (firstInvalid) {
    document.getElementById(`cb-${firstInvalid}`)?.focus()
    return
  }
  // TODO: connect to the clinic's booking / CRM endpoint.
  submitted.value = true
}

function reset() {
  Object.assign(form, { name: '', mobile: '', time: 'morning', message: '', consent: false })
  submitted.value = false
}
</script>

<template>
  <section id="contact" class="section contact" aria-labelledby="contact-title">
    <div class="container contact__grid">
      <div>
        <p class="eyebrow eyebrow--line">{{ t.contact.eyebrow }}</p>
        <h2 id="contact-title" class="display contact__title">
          {{ t.contact.title.before }} <span class="script">{{ t.contact.title.script }}</span>
          {{ t.contact.title.after }}
        </h2>

        <dl class="contact__list">
          <div>
            <dt>{{ t.contact.phone }}</dt>
            <dd><a :href="clinic.phoneHref" dir="ltr">{{ clinic.phone }}</a></dd>
          </div>
          <div>
            <dt>{{ t.contact.email }}</dt>
            <dd dir="ltr">{{ clinic.email }}</dd>
          </div>
          <div>
            <dt>{{ t.contact.hours }}</dt>
            <dd>{{ t.clinic.hours }}</dd>
          </div>
        </dl>

        <a :href="clinic.phoneHref" class="btn btn--slate">
          {{ t.contact.callClinic }} <span class="arrow" aria-hidden="true">→</span>
        </a>
      </div>

      <div class="callback">
        <p class="callback__title">{{ t.contact.callbackTitle }}</p>

        <div v-if="submitted" class="callback__done" role="status">
          <p class="callback__done-head">
            {{ fmt(t.contact.thanks, { name: form.name.trim().split(' ')[0] }) }}
          </p>
          <p>
            {{ fmt(t.contact.willCall, { mobile: form.mobile, time: t.contact.times[form.time].phrase }) }}
          </p>
          <button type="button" class="btn btn--ghost" @click="reset">{{ t.contact.another }}</button>
        </div>

        <form v-else novalidate @submit.prevent="submit">
          <div class="field">
            <label for="cb-name">{{ t.contact.fullName }}</label>
            <input
              id="cb-name"
              v-model="form.name"
              type="text"
              autocomplete="name"
              :placeholder="t.contact.namePlaceholder"
              :aria-invalid="!!errors.name"
              :aria-describedby="errors.name ? 'cb-name-err' : undefined"
              @blur="validate('name')"
              @input="clearError('name')"
            />
            <p v-if="errors.name" id="cb-name-err" class="field__error">{{ t.contact.errors.name }}</p>
          </div>

          <div class="field">
            <label for="cb-mobile">{{ t.contact.mobile }}</label>
            <input
              id="cb-mobile"
              v-model="form.mobile"
              type="tel"
              autocomplete="tel"
              inputmode="tel"
              dir="ltr"
              placeholder="+971 5X XXX XXXX"
              :aria-invalid="!!errors.mobile"
              :aria-describedby="errors.mobile ? 'cb-mobile-err' : undefined"
              @blur="validate('mobile')"
              @input="clearError('mobile')"
            />
            <p v-if="errors.mobile" id="cb-mobile-err" class="field__error">{{ t.contact.errors.mobile }}</p>
          </div>

          <div class="field">
            <label for="cb-time">{{ t.contact.bestTime }}</label>
            <select id="cb-time" v-model="form.time">
              <option v-for="(opt, key) in t.contact.times" :key="key" :value="key">{{ opt.label }}</option>
            </select>
          </div>

          <div class="field">
            <label for="cb-message">{{ t.contact.message }}</label>
            <textarea
              id="cb-message"
              v-model="form.message"
              rows="2"
              :placeholder="t.contact.messagePlaceholder"
            ></textarea>
          </div>

          <div class="check">
            <input
              id="cb-consent"
              v-model="form.consent"
              type="checkbox"
              :aria-invalid="!!errors.consent"
              :aria-describedby="errors.consent ? 'cb-consent-err' : undefined"
              @change="clearError('consent')"
            />
            <label for="cb-consent">
              {{ t.contact.consentBefore }} <a href="#">{{ t.contact.privacy }}</a>{{ t.contact.consentAfter }}
            </label>
          </div>
          <p v-if="errors.consent" id="cb-consent-err" class="field__error">{{ t.contact.errors.consent }}</p>

          <button type="submit" class="btn btn--slate callback__submit">
            {{ t.contact.submit }} <span class="arrow" aria-hidden="true">→</span>
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact {
  padding-top: 0;
}

.contact__grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: 64px;
  align-items: start;
}

.contact__title {
  margin: 14px 0 28px;
}

.contact__list {
  margin: 0 0 24px;
  border-top: 1px solid var(--line);
  max-width: 400px;
}

.contact__list div {
  display: flex;
  justify-content: space-between;
  gap: 16px;
  padding: 12px 0;
  border-bottom: 1px solid var(--line);
}

.contact__list dt {
  font-size: 11px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--muted);
}

.contact__list dd {
  margin: 0;
  font-size: 13px;
  font-weight: 400;
  text-align: end;
}

.contact__list a:hover {
  color: var(--gold);
}

/* Call-back card */
.callback {
  background: var(--cream-soft);
  border: 1px solid var(--line);
  padding: 28px;
}

.callback__title {
  font-family: var(--font-display);
  font-size: 12px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--muted);
  margin-bottom: 16px;
}

.field {
  margin-bottom: 18px;
}

.field label {
  display: block;
  font-size: 11px;
  font-weight: 400;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--ink);
}

.field input,
.field select,
.field textarea {
  display: block;
  width: 100%;
  min-height: 44px;
  padding: 10px 0;
  border: 0;
  border-bottom: 1px solid rgba(74, 47, 35, 0.3);
  border-radius: 0;
  background: transparent;
  font-size: 15px;
  font-weight: 400;
  color: var(--slate);
  transition: border-color var(--dur) var(--ease);
}

.field select {
  appearance: none;
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6'%3E%3Cpath d='M1 1l4 4 4-4' fill='none' stroke='%234a5a56' stroke-width='1.2'/%3E%3C/svg%3E")
    no-repeat right 4px center;
  cursor: pointer;
}

[dir='rtl'] .field select {
  background-position: left 4px center;
}

[dir='rtl'] .field input[type='tel'] {
  text-align: right;
}

.field textarea {
  resize: vertical;
}

.field input::placeholder,
.field textarea::placeholder {
  color: #9aa09d;
}

.field input:focus,
.field select:focus,
.field textarea:focus {
  outline: none;
  border-bottom-color: var(--slate);
}

.field input:focus-visible,
.field select:focus-visible,
.field textarea:focus-visible {
  box-shadow: 0 1px 0 0 var(--slate);
}

.field input[aria-invalid='true'] {
  border-bottom-color: #a4442f;
}

.field__error {
  margin-top: 6px;
  font-size: 12px;
  font-weight: 400;
  color: #a4442f;
}

.check {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  margin-top: 6px;
  font-size: 12px;
  color: var(--muted);
}

.check input {
  flex-shrink: 0;
  width: 16px;
  height: 16px;
  margin: 2px 0 0;
  accent-color: var(--slate);
  cursor: pointer;
}

.check a {
  text-decoration: underline;
  text-underline-offset: 2px;
}

.callback__submit {
  width: 100%;
  justify-content: space-between;
  margin-top: 22px;
}

.callback__done {
  display: grid;
  gap: 12px;
  font-size: 14px;
}

.callback__done-head {
  font-family: var(--font-display);
  font-size: 22px;
  text-transform: uppercase;
  color: var(--slate);
}

.callback__done .btn {
  justify-self: start;
  margin-top: 8px;
}

@media (max-width: 900px) {
  .contact__grid {
    grid-template-columns: 1fr;
    gap: 48px;
  }

  .contact__list {
    max-width: none;
  }
}

@media (max-width: 480px) {
  .callback {
    padding: 22px 18px;
  }
}
</style>
