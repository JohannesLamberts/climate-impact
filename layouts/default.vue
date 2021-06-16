<template>
  <div style="height: 100vh">
    <b-navbar toggleable="lg" type="dark" variant="dark" :sticky="true">
      <b-navbar-brand href="#">Climate Impact</b-navbar-brand>
    </b-navbar>
    <main>
      <b-container>
        <Nuxt />
      </b-container>
    </main>
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Exo+2:wght@800&display=swap');
</style>

<style lang="scss" scoped>
main {
  padding: 1rem;
}
</style>
