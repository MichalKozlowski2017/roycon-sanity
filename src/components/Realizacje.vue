<template>
  <div class="section Realizacje" id="realizacje" v-in-viewport>
    <div class="line-1-Realizacje" v-in-viewport></div>
    <div id="overlay" class="overlay" @click="closeSlider"></div>
    <CategoryHeader
      v-in-viewport
      :text="'NASZE REALIZACJE'"
      :customClass="'Realizacje__category'"
    ></CategoryHeader>
    <ClientOnly>
      <carousel
        id="sliderRealizacje"
        :perPage="1"
        class="slider-realizacje"
        :navigationEnabled="true"
        :paginationEnabled="true"
        :perPageCustom="[[768, 1], [1024, 1]]"
      >
        <slide v-for="slide in $static.allPages.edges[0].node.realizacje" :key="slide.id">
          <div class="slider-realizacje__content">
            <g-image
              v-in-viewport
              :src="require('!!assets-loader!~/assets/img/' + slide.image)"
              :alt="slide.alt"
            />
          </div>
        </slide>
      </carousel>
    </ClientOnly>
  </div>
</template>

<static-query>
query {
  allPages {
    edges {
      node{
        realizacje  {
          id
          image
          alt
          info
        }
      }
    }
  }
}
</static-query>

<script>
import CategoryHeader from "~/components/CategoryHeader";
export default {
  name: "Realizacje",
  components: {
    CategoryHeader,
    Carousel: () =>
      import("vue-carousel/src/index")
        .then((m) => m.Carousel)
        .catch(),
    Slide: () =>
      import("vue-carousel/src/index")
        .then((m) => m.Slide)
        .catch(),
  },
  methods: {
    openSlider: () => {
      setTimeout(function() {
        let elems = document.querySelectorAll(".VueCarousel-dot");
        elems.forEach(function(elem) {
          elem.addEventListener("click", function() {
            document.getElementById("realizacje").classList.add("active");
          });
        });
      }, 300);
    },
    closeSlider: () => {
      let ov = document.getElementById("overlay");
      ov.addEventListener("click", function() {
        document.getElementById("realizacje").classList.remove("active");
      });
    },
  },
  mounted() {
    this.openSlider();
  },
};
</script>

<style lang="scss">
.slider-realizacje {
  &__content {
    img {
      opacity: 1;
    }
  }
}
.line-1-Realizacje {
  position: absolute;
  width: 0;
  height: 2px;
  top: 90%;
  left: 25%;
  background-color: $accent-purple;
  -webkit-transition-delay: 3s;
  -o-transition-delay: 3s;
  transition-delay: 3s;
  -webkit-transition: width 3s;
  -o-transition: width 3s;
  transition: width 3s;
  z-index: 9999;
  @include mq($max-width: 1650px) {
    display: none;
    left: 50%;
    -webkit-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    transform: translateX(-50%);
  }
}
.line-1-Realizacje.in-viewport {
  width: 200px;
}
.Realizacje.in-viewport {
  opacity: 1;
  -webkit-transform: scale(1);
  -ms-transform: scale(1);
  transform: scale(1);
}
.Realizacje {
  height: 1220px;
  background-size: contain;
  background-repeat: no-repeat;
  -webkit-transition: 0.5s;
  -o-transition: 0.5s;
  transition: 0.5s;
  -webkit-transition-delay: 0.5s;
  -o-transition-delay: 0.5s;
  transition-delay: 0.5s;
  opacity: 0;
  -webkit-transform: scale(1.05);
  -ms-transform: scale(1.05);
  transform: scale(1.05);
  &__category.in-viewport {
    -webkit-transform: translateX(0);
    -ms-transform: translateX(0);
    transform: translateX(0);
    opacity: 1;
  }
  &__category {
    margin-left: 12.5%;
    -webkit-transition: 1s;
    -o-transition: 1s;
    transition: 1s;
    -webkit-transition-delay: 0.5s;
    -o-transition-delay: 0.5s;
    transition-delay: 0.5s;
    opacity: 0;
    -webkit-transform: translateX(-50px);
    -ms-transform: translateX(-50px);
    transform: translateX(-50px);
  }
  @include mq($max-width: 1920px) {
    height: 66vw;
  }
  @include mq($max-width: 992px) {
    padding-top: 30px;
  }
}
.Realizacje .VueCarousel-navigation {
  position: absolute;
  top: 200px;
  left: 50%;
  -webkit-transform: translateX(-50%);
  -ms-transform: translateX(-50%);
  transform: translateX(-50%);
  width: 1000px;
  display: none;
  @include mq($max-width: 1920px) {
    top: 200px;
  }
  @include mq($max-width: 1650px) {
    top: 150px;
  }
  @include mq($max-width: 1200px) {
    top: 50px;
    width: 800px;
  }
  @include mq($max-width: 992px) {
    top: -40px;
    width: 0;
    left: auto;
    right: 10%;
    -webkit-transform: translateX(0) scale(0.7);
    -ms-transform: translateX(0) scale(0.7);
    transform: translateX(0) scale(0.7);
  }
}
.Realizacje .VueCarousel-navigation-prev {
  background-image: url("../assets/img/arrow.png");
  margin: 0 !important;
  padding: 0 !important;
  width: 20px;
  height: 20px;
  font-size: 0;
  background-size: contain;
  background-repeat: no-repeat;
  width: 30px !important;
  left: -50px !important;
  top: 0 !important;
  position: absolute !important;
  -webkit-transform: translate(-5px, 0) !important;
  -ms-transform: translate(-5px, 0) !important;
  transform: translate(-5px, 0) !important;
  &:focus {
    outline: none !important;
    -webkit-box-shadow: none !important;
    box-shadow: none !important;
  }
}

.Realizacje .VueCarousel-navigation-next {
  -webkit-transform: rotate(-180deg) !important;
  -ms-transform: rotate(-180deg) !important;
  transform: rotate(-180deg) !important;
  background-image: url("../assets/img/arrow.png");
  margin: 0 !important;
  padding: 0 !important;
  width: 20px;
  height: 20px;
  font-size: 0;
  top: 0 !important;
  background-size: contain;
  background-repeat: no-repeat;
  width: 30px !important;
  right: -52px !important;
  position: absolute !important;
  @include mq($max-width: 992px) {
    width: 30px !important;
    right: -30px !important;
  }
  &:focus {
    outline: none !important;
    -webkit-box-shadow: none !important;
    box-shadow: none !important;
  }
}
.Realizacje .overlay {
  z-index: 11;
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  opacity: 0;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.9);
  -webkit-transition: 0.5s;
  -o-transition: 0.5s;
  transition: 0.5s;
}
.Realizacje .VueCarousel {
  height: 1220px;
  @include mq($max-width: 1920px) {
    height: 66vw;
  }
}
.Realizacje .VueCarousel-wrapper {
  display: block;
  position: absolute;
  left: 50%;
  top: 200px;
  -webkit-transform: translateX(-50%);
  -ms-transform: translateX(-50%);
  transform: translateX(-50%);
  height: auto;
  height: 700px;
  width: 1000px;
  opacity: 0;
  -webkit-transition: 0.5s;
  -o-transition: 0.5s;
  transition: 0.5s;
  @include mq($max-width: 1650px) {
    top: 150px;
  }
  @include mq($max-width: 1200px) {
    top: 50px;
    height: 500px;
    width: 800px;
  }
  @include mq($max-width: 992px) {
    top: 0;
    width: 100%;
  }
  .VueCarousel-slide {
    text-align: center;
    pointer-events: none;
    img {
      margin: 0 auto;
      width: 100%;
    }
  }
}
.Realizacje.active {
  .overlay {
    width: 100%;
    opacity: 1;
  }
  .VueCarousel-wrapper {
    opacity: 1;
    margin: 0 auto;
    z-index: 20;
  }
  .VueCarousel-navigation {
    display: block;
    z-index: 20;
  }
}
@include mq($max-width: 992px) {
  .Realizacje .VueCarousel-dot-container {
    display: none !important;
  }
  .Realizacje .VueCarousel-navigation {
    display: block;
  }
  .Realizacje .VueCarousel-wrapper {
    display: block;
    position: relative;
    height: auto;
    opacity: 1;
    -webkit-transition: 0.5s;
    -o-transition: 0.5s;
    transition: 0.5s;
  }
}
.Realizacje .VueCarousel-dot-container {
  @include mq($max-width: 900px) {
    display: none;
  }

  .VueCarousel-dot {
    bottom: 0;
    top: auto;
    padding: 0 !important;
    background-size: cover;
    font-size: 0 !important;
    margin: 0 !important;
    position: absolute;
    border-radius: 0;
    -webkit-transition: opacity 0.3s;
    -o-transition: opacity 0.3s;
    transition: opacity 0.3s;
    &:hover {
      opacity: 0.5;
    }

    &:nth-child(1) {
      width: 24.5% !important;
      height: 350px !important;
      left: 0;
      top: 345px;
      background-image: url("../assets/img/realizacje_min_1.jpg");
    }
    &:nth-child(2) {
      width: 23.4% !important;
      height: 239px !important;
      left: 17.6%;
      top: 105px;
      background-image: url("../assets/img/realizacje_min_2.jpg");
    }
    &:nth-child(3) {
      width: 33.2% !important;
      height: 604px !important;
      left: 24.4%;
      top: 344px;
      background-image: url("../assets/img/realizacje_min_3.jpg");
    }
    &:nth-child(4) {
      width: 26.4% !important;
      height: 344px !important;
      left: 41%;
      top: 0px;
      background-image: url("../assets/img/realizacje_min_4.jpg");
    }
    &:nth-child(5) {
      width: 16.6% !important;
      height: 350px !important;
      left: 57.6%;
      top: 345px;
      background-image: url("../assets/img/realizacje_min_5.jpg");
    }
    &:nth-child(6) {
      width: 26.4% !important;
      height: 441px !important;
      left: 57.6%;
      top: 696px;
      background-image: url("../assets/img/realizacje_min_6.jpg");
    }
    &:nth-child(7) {
      width: 25.7% !important;
      height: 350px !important;
      left: 74.2%;
      top: 345px;
      background-image: url("../assets/img/realizacje_min_7.jpg");
    }
    &:nth-child(8) {
      width: 16% !important;
      height: 252px !important;
      left: 84%;
      top: 696px;
      background-image: url("../assets/img/realizacje_min_8.jpg");
    }

    @include mq($max-width: 1920px) {
      &:nth-child(1) {
        width: 24.4vw !important;
        height: 18.2vw !important;
        left: 0;
        top: 18vw;
      }
      &:nth-child(2) {
        width: 23.4vw !important;
        height: 12.5vw !important;
        left: 17.6vw;
        top: 5.5vw;
      }
      &:nth-child(3) {
        width: 33.2vw !important;
        height: 31.3vw !important;
        left: 24.4vw;
        top: 18vw;
      }
      &:nth-child(4) {
        width: 26.4vw !important;
        height: 17.9vw !important;
        left: 41vw;
        top: 0.1vw;
      }
      &:nth-child(5) {
        width: 16.6vw !important;
        height: 18.2vw !important;
        left: 57.6vw;
        top: 18vw;
      }
      &:nth-child(6) {
        width: 26.2vw !important;
        height: 23.1vw !important;
        left: 57.6vw;
        top: 36.3vw;
      }
      &:nth-child(7) {
        width: 25.7vw !important;
        height: 18.3vw !important;
        left: 74.2vw;
        top: 17.9vw;
      }
      &:nth-child(8) {
        width: 16vw !important;
        height: 13.1vw !important;
        left: 83.7vw;
        top: 36.2vw;
      }
    }
  }
}

@include mq($max-width: 1650px) {
  .Realizacje {
    &__category {
      margin-left: 12.5%;
    }
  }
  .Realizacje .VueCarousel-wrapper {
  }
}
@include mq($max-width: 1200px) {
  .Realizacje {
    &__category {
      margin-left: 12.5%;
    }
  }
}
@include mq($max-width: 768px) {
  .Realizacje {
    &__category {
      margin-left: 30px;
    }
  }
}
</style>
