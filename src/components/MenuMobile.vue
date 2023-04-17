<template>
  <ClientOnly>
    <Slide right>
      <g-link class="nav__link" to="/oferta/">Oferta</g-link>
      <g-link class="nav__link" to="/technologia/">Technologia</g-link>
      <g-link class="nav__link" to="/o-firmie/">O firmie</g-link>
      <g-link class="nav__link" to="/realizacje/">Realizacje</g-link>
      <g-link class="nav__link" target="_blank" to="https://zerohouse.pl">ZeroHouse</g-link>
      <g-link class="nav__link" to="/kontakt/">Kontakt</g-link>
    </Slide>
  </ClientOnly>
</template>

<script>
export default {
  components: {
    Slide: () =>
      import("vue-burger-menu")
        .then((m) => m.Slide)
        .catch(),
  },
};
</script>

<style lang="scss">
.bm-menu {
  position: fixed;
  right: 0;
  background-color: #fff !important;
  -webkit-box-shadow: -8px 0px 5px -5px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: -8px 0px 5px -5px rgba(0, 0, 0, 0.1);
  box-shadow: -8px 0px 5px -5px rgba(0, 0, 0, 0.1);

  .bm-item-list {
    a {
      font-family: "Brandon Grotesque", sans-serif;
      font-weight: 900;
      text-decoration: none;
      text-transform: uppercase;
      color: #000;
      transition: 0.5s;
      width: 300px;
      opacity: 0;
      transform: translateX(300px);

      &:hover {
        color: $accent-purple;
      }

      &:nth-child(1) {
        transition-delay: 0;
      }

      &:nth-child(2) {
        transition-delay: 0.1s;
      }

      &:nth-child(3) {
        transition-delay: 0.2s;
      }

      &:nth-child(4) {
        transition-delay: 0.3s;
      }

      &:nth-child(5) {
        transition-delay: 0.4s;
      }

      &:nth-child(6) {
        transition-delay: 0.5s;
      }

      &:nth-child(7) {
        transition-delay: 0.6s;
      }
    }
  }
}

body.bm-overlay .bm-item-list a {
  transform: translateX(0);
  opacity: 1;
}
</style>
