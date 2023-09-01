<template>
  <div class="section oferta-slider" id="realizacje">
    <ClientOnly>
      <carousel
        id="ofertaSlider"
        v-on:pageChange="pageChange"
        :perPage="1"
        class="slider-oferta"
        :navigationEnabled="true"
        :paginationEnabled="false"
        :perPageCustom="[[768, 1], [1024, 1]]"
      >
        <slide v-for="slide in $static.allPages.edges[0].node.oferta.slider" :key="slide.id">
          <div class="slider-oferta__content">
            <div class="slider-oferta-content">
              <CategoryHeader
                :text="slide.title"
                :customClass="'slider-oferta-content__category'"
              ></CategoryHeader>
              <Paragraph :text="slide.text"></Paragraph>
            </div>
            <div class="slider-oferta-image">
              <g-image :src="require('!!assets-loader!~/assets/img/' + slide.image)" />
            </div>
          </div>
          <div class="slider-indicator">
            <div class="slider-indicator__line"></div>
            <div class="slider-indicator__text">
              0{{ currentSlide }} <span>/</span
              ><span> _0{{ $static.allPages.edges[0].node.oferta.slider.length }}</span>
            </div>
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
        oferta  {
        	slider {
                title
                image
                text
          }
        }
      }
    }
  }
}
</static-query>

<script>
import CategoryHeader from "~/components/CategoryHeader";
import Paragraph from "~/components/Paragraph";
export default {
  name: "Slider",
  components: {
    CategoryHeader,
    Paragraph,
    Carousel: () =>
      import("vue-carousel/src/index")
        .then((m) => m.Carousel)
        .catch(),
    Slide: () =>
      import("vue-carousel/src/index")
        .then((m) => m.Slide)
        .catch(),
  },
  data: function() {
    return {
      currentSlide: 0 + 1,
    };
  },
  methods: {
    pageChange(i) {
      return (this.currentSlide = i + 1);
    },
  },
};
</script>

<style lang="scss">
.VueCarousel-navigation {
  position: absolute;
  top: 0px;
  height: 100px;
  left: 16%;
}
@include mq($max-width: 992px) {
  .VueCarousel-navigation {
    position: absolute;
    top: 0;
    bottom: auto;
    height: 0;
    left: 10%;
    -webkit-transform: scale(0.7);
    transform: scale(0.7);
  }
}
@include mq($max-width: 768px) {
  .VueCarousel-navigation {
    position: absolute;
    top: auto;
    bottom: -20px;
    height: 0;
    left: auto;
    right: 10%;
    -webkit-transform: scale(0.7);
    transform: scale(0.7);
  }
}
.VueCarousel-navigation-button {
  position: absolute;
  top: 0 !important;
  box-sizing: border-box;
  color: #000;
  text-decoration: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border: none;
  background-color: transparent;
  padding: 0;
  cursor: pointer;
  outline: none;

  &:focus {
    outline: none !important;
    box-shadow: none !important;
  }
}

.VueCarousel-navigation-prev {
  background-image: url("../../assets/img/arrow.png");
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
  transform: translate(-5px, 0) !important;

  &:focus {
    outline: none !important;
    box-shadow: none !important;
  }
}

.VueCarousel-navigation-next {
  -webkit-transform: rotate(-180deg) !important;
  transform: rotate(-180deg) !important;
  background-image: url("../../assets/img/arrow.png");
  margin: 0 !important;
  padding: 0 !important;
  width: 20px;
  height: 20px;
  font-size: 0;
  background-size: contain;
  background-repeat: no-repeat;
  width: 30px !important;
  right: -30px !important;
  position: absolute !important;

  &:focus {
    outline: none;
    box-shadow: none;
  }
}

.slider-indicator {
  position: absolute;
  width: 550px;
  text-align: right;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: end;
  -ms-flex-align: end;
  align-items: flex-end;
  font-weight: bold;
  bottom: 300px;
  -webkit-transform: rotate(-90deg) scale(1.3);
  transform: rotate(-90deg) scale(1.3);

  @include mq($max-width: 1650px) {
    width: 350px;
    bottom: 150px;
  }
  @include mq($max-width: 1200px) {
    width: 250px;
    bottom: 10px;
  }
  @include mq($max-width: 992px) {
    display: none;
  }
  &__line {
    width: 0px;
    height: 2px;
    background-color: #000;
    -webkit-transform: translateY(-5px);
    transform: translateY(-5px);
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  &__text {
    width: 80px;
    font-size: 20px;
    opacity: 0;
    -webkit-transition: 0.5s;
    transition: 0.5s;
    -webkit-transition-delay: 0.3s;
    transition-delay: 0.3s;

    span {
      &:nth-child(1) {
        color: #d9d9d9;
        font-size: 20px;
        margin: 0 3px;
      }

      &:nth-child(2) {
        color: #d9d9d9;
        font-size: 13px;
      }
    }
  }
}

.slider-oferta {
  &__content {
    display: flex;
    width: 80%;
    float: right;
    @include mq($max-width: 768px) {
      width: 100%;
    }

    .slider-oferta-content {
      background-color: $accent-green;
      padding: 60px 150px;
      @include mq($max-width: 1650px) {
        padding: 60px 100px;
      }
      @include mq($max-width: 1200px) {
        padding: 30px 40px;
      }
      .category-header {
        color: #fff;
        transform: translate(-40px);
        opacity: 0;
        &::after {
          background-color: $accent-purple;
        }
        transition: 1.5s;
      }

      .paragraph {
        margin-bottom: 0;
        transform: translate(-40px);
        opacity: 0;
        transition: 1.5s;
      }
    }
    .slider-oferta-image {
      img {
        height: 100%;
        width: 300px;
      }
      @include mq($max-width: 1200px) {
        img {
          height: 100%;
          width: 200px;
        }
      }
      @include mq($max-width: 992px) {
        img {
          display: none;
        }
      }
    }
  }
}

.VueCarousel-slide-active {
  img {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
  .slider-oferta-content {
    .category-header {
      transform: translate(0);
      opacity: 1;
    }

    .paragraph {
      transform: translate(0);
      opacity: 1;
    }
  }

  .slider-indicator {
    &__line {
      width: 150px;
      height: 2px;
      background-color: #000;
      -webkit-transform: translateY(-5px);
      transform: translateY(-5px);
    }

    &__text {
      opacity: 1;
    }
  }
}
</style>
