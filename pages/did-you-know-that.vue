<template>
  <div>
    <h1>
      Wusstest Du,<span class="answer">
        dass Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incidid unt ut labore et dolore magna aliqua?
      </span>
    </h1>
    <p>Quellen</p>
    <ul class="sources">
      <li>
        <a href="https://www.ipcc.ch/" target="_blank">www.ipcc.org</a>
      </li>
      <li>
        <a href="https://www.ipcc.ch/" target="_blank">www.ipcc.org</a>
      </li>
    </ul>
    <div style="text-align: right">
      <b-button variant="primary" size="lg">Next</b-button>
    </div>
  </div>
</template>

<style lang="scss">
@import '~/assets/styles/variables.scss';

.answer {
  color: $green;
}

h1 {
  @include media-breakpoint-up(md) {
    margin-top: 3rem;
    margin-bottom: 4rem;
    font-size: 3.5rem;
  }

  font-size: 2rem;
  font-weight: bold;
}

ul {
  font-size: 1.2rem;
  padding-left: 0;
  list-style: none;
  li + li {
    margin-top: 0.5rem;
  }
}
</style>
