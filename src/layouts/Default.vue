<template>
  <div class="layout">
    <MenuMobile></MenuMobile>
    <div id="main-wrapper">
      <Header />
      <transition name="fade" appear>
        <main>
          <!-- a wrapper for slot is needed -->
          <slot />
          <!-- the content -->
        </main>
      </transition>
      <ClientOnly>
        <back-to-top text="^"
          ><g-image v-in-viewport src="~/assets/img/arrow_white.png" alt="Back to top" width="30"
        /></back-to-top>
      </ClientOnly>
      <Footer />
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";
import Footer from "../components/Footer";
import MenuMobile from "../components/MenuMobile";
import BackToTop from "vue-backtotop";

// import Slide from 'vue-burger-menu'

export default {
  components: {
    Header,
    Footer,
    BackToTop,
    MenuMobile,

    Slide: () =>
      import("vue-burger-menu")
        .then((m) => m.Slide)
        .catch(),
  },
  mounted() {
    document.querySelector("body").classList.remove("bm-overlay");
  },
};
</script>

<style lang="scss">
img.in-viewport {
  opacity: 1;
  transform: scale(1);
}
img {
  transition: 0.5s;
  opacity: 0;
  transform: scale(0.8);
}

html,
body {
  max-width: 100%;
  overflow-x: hidden;
}
body {
  font-family: "Brandon Grotesque", Arial, sans-serif;
  font-weight: 500;
  margin: 0;
  padding: 0;
  line-height: 1.5;
  max-width: 1920px;
  margin: 0 auto;
  background-size: contain;
  background-repeat: no-repeat;
  overflow-x: hidden !important;
  background-color: #fff;
}
#main-wrapper {
  transition: transform 0.5s;
}
.section {
  position: relative;
  margin: 50px 0;
  @include mq($max-width: 1650px) {
    margin: 50px 0;
  }
}
body.bm-overlay {
  background: rgba(0, 0, 0, 0);
}
body.bm-overlay #main-wrapper {
  transform: translateX(-300px);
}

.layout {
  max-width: 1920px;
  margin: 0 auto;
}

.fade-enter-active {
  transition: opacity 0.5s;
}

.fade-enter {
  opacity: 0;
}
.vue-back-to-top {
  background-color: $accent-purple;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  img {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%) scale(0.6);
  }
}
</style>
