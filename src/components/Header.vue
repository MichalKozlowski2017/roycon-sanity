<template>
  <header class="header">
    <strong>
      <g-link to="/" class="logo"
        ><g-image v-in-viewport src="~/assets/img/diament.png" />{{
          $static.metadata.siteName
        }}</g-link
      >
    </strong>
    <nav class="nav">
      <g-link class="nav__link" to="/oferta/">Oferta</g-link>
      <g-link class="nav__link" to="/technologia/">Technologia</g-link>
      <g-link class="nav__link" to="/o-firmie/">O firmie</g-link>
      <g-link class="nav__link" to="/realizacje/">Realizacje</g-link>
      <g-link class="nav__link" target="_blank" to="https://zerohouse.pl">ZeroHouse</g-link>
      <g-link class="nav__link" to="/kontakt/">Kontakt</g-link>
    </nav>
  </header>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
export default {
  name: "Header",
  components: {},
};
</script>

<style lang="scss">
.header {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  height: 120px;
  padding: 10px 170px;
}
.nav-mobile {
  display: none;
}
.logo {
  font-size: 32px;
  position: relative;
  img {
    height: 37px;
    width: auto;
    display: inline-block;
    margin-right: 10px;
    transform: translateY(7px) !important;
  }
}
.nav a {
  font-size: 18px;
}
.nav__link {
  margin-left: 50px;
}

.logo,
.nav a {
  font-family: "Brandon Grotesque", sans-serif;
  font-weight: 900;
  text-decoration: none;
  text-transform: uppercase;
  color: $text-color;
}

.bm-burger-button {
  display: none;
}
@include mq($max-width: 1450px) {
  .logo {
    font-size: 24px;
    img {
      height: 28px;
      width: auto;
      display: inline-block;
      margin-right: 10px;
      transform: translateY(5px) !important;
    }
  }
  .nav a {
    font-size: 16px;
  }
  .nav__link {
    margin-left: 30px;
  }
  .header {
    padding: 10px 100px;
  }
}
@include mq($max-width: 1200px) {
  .logo {
    font-size: 24px;
  }
  .nav a {
    font-size: 16px;
  }
  .nav__link {
    margin-left: 30px;
  }
  .header {
    padding: 10px 80px;
  }
}
@include mq($max-width: 1000px) {
  .logo {
    font-size: 20px;
    img {
      height: 25px;

      transform: translateY(5px) !important;
    }
  }
  .nav a {
    font-size: 13px;
  }
  .nav__link {
    margin-left: 20px;
  }
  .header {
    padding: 10px 50px;
  }
}
@include mq($max-width: 768px) {
  .logo {
    font-size: 24px;
    img {
      height: 28px;

      transform: translateY(5px) !important;
    }
  }
  .nav {
    display: none;
  }
  .header {
    height: 80px;
    padding: 10px 30px;
  }
  .bm-burger-button {
    display: block;
    top: 40px;
    right: 30px;
  }
}
</style>
