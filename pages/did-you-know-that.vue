<template>
  <div class="color-wrapper">
    <div class="container">
      <p class="question">Wusstest Du, dass...</p>
      <p class="answer">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incidid unt ut labore et dolore magna aliqua?
      </p>
      <ul class="sources">
        <li>www.ipcc.org</li>
        <li>www.ipcc.org</li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss">
@import '~/assets/styles/variables.scss';

.color-wrapper {
  background-image: linear-gradient(350deg, $green, $white);
  height: 100%;
  display: flex;
}

.container {
  padding: 1rem;
}

.question,
.answer {
  font-size: 1.4rem;
  font-weight: bold;
}
</style>
