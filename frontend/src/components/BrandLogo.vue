<template>
  <svg class="logo" viewBox="0 0 740 1100" role="img" aria-label="Veritas Polyclinic Dubai">
    <defs>
      <!-- Hides the oval behind the wordmark -->
      <mask id="veritas-logo-gap">
        <rect width="740" height="1100" fill="#fff" />
        <rect x="0" y="390" width="740" height="315" fill="#000" />
      </mask>
    </defs>

    <!-- Tapered oval: thick at the sides, fine at top and bottom -->
    <path
      mask="url(#veritas-logo-gap)"
      fill="currentColor"
      fill-rule="evenodd"
      d="M367 5 A295 545 0 1 1 366.99 5 Z M367 32 A246 518 0 1 0 367.01 32 Z"
    />

    <text
      x="10"
      y="562"
      textLength="715"
      lengthAdjust="spacing"
      font-family="Marcellus, 'Times New Roman', serif"
      font-size="188"
      fill="currentColor"
    >VERITAS</text>
    <text
      x="90"
      y="675"
      textLength="560"
      lengthAdjust="spacing"
      font-family="Marcellus, 'Times New Roman', serif"
      font-size="100"
      fill="currentColor"
    >POLYCLINIC</text>
    <text
      x="275"
      y="770"
      textLength="185"
      lengthAdjust="spacing"
      font-family="Marcellus, 'Times New Roman', serif"
      font-size="64"
      fill="currentColor"
    >DUBAI</text>
  </svg>
</template>

<style scoped>
.logo {
  height: 100%;
  width: auto;
  display: block;
  overflow: visible;
}
</style>
