<template>
  <div style="position: relative;">
    <ClientOnly>
      <carousel
        class="slider-1"
        :loop="true"
        :autoplay="true"
        :autoplayHoverPause="true"
        :autoplayTimeout="5000"
        :perPage="1"
        :navigationEnabled="true"
        :paginationEnabled="false"
        v-on:pageChange="pageChange"
        :perPageCustom="[[768, 1], [1024, 1]]"
      >
        <slide
          v-for="slide in $static.allPages.edges[0].node.index.mainSlider.slides"
          :key="slide.id"
        >
          <g-image v-in-viewport :src="require('!!assets-loader!~/assets/img/' + slide.image)" />
          <div class="slide-content">
            <CategoryHeader
              :text="slide.category"
              :customClass="'slide-content__category'"
            ></CategoryHeader>
            <TitleHeader :text="slide.title" :customClass="'slide-content__title'"></TitleHeader>
            <Paragraph :text="slide.text" :customClass="'slide-content__text'"></Paragraph>
            <PrimaryButton :text="slide.btnText" :link="slide.btnLink"></PrimaryButton>
          </div>
          <div class="slider-indicator">
            <div class="slider-indicator__line"></div>
            <div class="slider-indicator__text">
              0{{ currentSlide }} <span>/</span
              ><span> _0{{ $static.allPages.edges[0].node.index.mainSlider.slides.length }}</span>
            </div>
          </div>
        </slide>
      </carousel>
    </ClientOnly>
    <div class="line-1-slider" v-in-viewport></div>
  </div>
</template>

<static-query>
query {
  allPages {
    edges {
      node{
        index {
        	mainSlider {
            slides {
              id
              category
              title
              image
              text
              btnText
              btnLink
            }
          }
        }
      }
    }
  }
}
</static-query>

<script>
import PrimaryButton from "~/components/PrimaryButton";
import CategoryHeader from "~/components/CategoryHeader";
import TitleHeader from "~/components/TitleHeader";
import Paragraph from "~/components/Paragraph";

export default {
  name: "Slider",
  components: {
    PrimaryButton,
    CategoryHeader,
    TitleHeader,
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
.line-1-slider {
  position: absolute;
  width: 0;
  height: 2px;
  left: 35%;
  bottom: 0;
  background-color: $accent-purple;
  -webkit-transition-delay: 1s;
  -o-transition-delay: 1s;
  transition-delay: 1s;
  -webkit-transition: width 1s;
  -o-transition: width 1s;
  transition: width 1s;
  @include mq($max-width: 768px) {
    left: 50%;
    -webkit-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    transform: translateX(-50%);
  }
}
.line-1-slider.in-viewport {
  width: 200px;
}
.slider-1 {
  margin-bottom: 300px;
  @include mq($max-width: 992px) {
    margin-bottom: 150px;
  }
  @include mq($max-width: 600px) {
    margin-bottom: 20px;
  }

  .VueCarousel-navigation {
    position: absolute;
    top: 50px;
    height: 100px;
    left: 18%;
  }
  .VueCarousel-navigation-button {
    position: absolute;
    top: 0 !important;
    -webkit-box-sizing: border-box;
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
      -webkit-box-shadow: none !important;
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
    -ms-transform: translate(-5px, 0) !important;
    transform: translate(-5px, 0) !important;
    &:focus {
      outline: none !important;
      -webkit-box-shadow: none !important;
      box-shadow: none !important;
    }
  }
  .VueCarousel-navigation-next {
    -webkit-transform: rotate(-180deg) !important;
    -ms-transform: rotate(-180deg) !important;
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
      -webkit-box-shadow: none;
      box-shadow: none;
    }
  }
  .slider-indicator {
    position: absolute;
    width: 600px;
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
    -ms-transform: rotate(-90deg) scale(1.3);
    transform: rotate(-90deg) scale(1.3);
    &__line {
      width: 0px;
      height: 2px;
      background-color: #000;
      -webkit-transform: translateY(-5px);
      -ms-transform: translateY(-5px);
      transform: translateY(-5px);
      -webkit-transition: 1s;
      -o-transition: 1s;
      transition: 1s;
    }
    &__text {
      width: 80px;
      font-size: 20px;
      opacity: 0;
      -webkit-transition: 1s;
      -o-transition: 1s;
      transition: 1s;
      -webkit-transition-delay: 1s;
      -o-transition-delay: 1s;
      transition-delay: 1s;
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
  .VueCarousel-slide {
    position: relative;
    height: 870px;
    img {
      position: absolute;
      top: 50px;
      right: 0;
      width: 65%;
      max-width: 1600px;
      opacity: 0;
      -webkit-transition: 1s;
      -o-transition: 1s;
      transition: 1s;
      -webkit-transform: scale(0.8);
      -ms-transform: scale(0.8);
      transform: scale(0.8);
    }

    .slide-content {
      position: absolute;
      top: 58%;
      left: 25%;
      -webkit-transform: translateY(-50%);
      -ms-transform: translateY(-50%);
      transform: translateY(-50%);
      &__category {
        -webkit-transform: translateX(-40px);
        -ms-transform: translateX(-40px);
        transform: translateX(-40px);
        opacity: 0;
        -webkit-transition: 0.5s;
        -o-transition: 0.5s;
        transition: 0.5s;
        -webkit-transition-delay: 0.2s;
        -o-transition-delay: 0.2s;
        transition-delay: 0.2s;
      }
      &__title {
        -webkit-transform: translateX(-40px);
        -ms-transform: translateX(-40px);
        transform: translateX(-40px);
        opacity: 0;
        -webkit-transition: 0.5s;
        -o-transition: 0.5s;
        transition: 0.5s;
        -webkit-transition-delay: 0.4s;
        -o-transition-delay: 0.4s;
        transition-delay: 0.4s;
      }
      &__text {
        max-width: 50%;
        -webkit-transform: translateX(-40px);
        -ms-transform: translateX(-40px);
        transform: translateX(-40px);
        opacity: 0;
        -webkit-transition: 0.5s;
        -o-transition: 0.5s;
        transition: 0.5s;
        -webkit-transition-delay: 0.6s;
        -o-transition-delay: 0.6s;
        transition-delay: 0.6s;
      }
      .primary-button {
        opacity: 0;
        -webkit-transform: translateY(-40px);
        -ms-transform: translateY(-40px);
        transform: translateY(-40px);
        -webkit-transition: 0.5s;
        -o-transition: 0.5s;
        transition: 0.5s;
        -webkit-transition-delay: 0.8s;
        -o-transition-delay: 0.8s;
        transition-delay: 0.8s;
      }
    }
  }
  @include mq($max-width: 1650px) {
    .VueCarousel-navigation {
      position: absolute;
      top: 45px;
      height: 100px;
      left: 18%;
    }
    .VueCarousel-slide {
      position: relative;
      height: 650px;
      img {
        position: absolute;
        right: 0;
        width: 65%;
        opacity: 0;
        -webkit-transition: 1s;
        -o-transition: 1s;
        transition: 1s;
        -webkit-transform: scale(0.8);
        -ms-transform: scale(0.8);
        transform: scale(0.8);
      }
      .slide-content {
        position: absolute;
        left: 20%;
        top: 50%;
        -webkit-transform: translateY(-50%);
        -ms-transform: translateY(-50%);
        transform: translateY(-50%);
        &__text {
          max-width: 50%;
        }
      }
    }
    .slider-indicator {
      position: absolute;
      width: 600px;
      text-align: right;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-align: end;
      -ms-flex-align: end;
      align-items: flex-end;
      font-weight: bold;
      bottom: 100px;
      -webkit-transform: rotate(-90deg) scale(1.3) translateY(-150px);
      -ms-transform: rotate(-90deg) scale(1.3) translateY(-150px);
      transform: rotate(-90deg) scale(1.3) translateY(-150px);
      &__line {
        width: 0px;
        height: 2px;
        background-color: #000;
        -webkit-transform: translateY(-5px);
        -ms-transform: translateY(-5px);
        transform: translateY(-5px);
        -webkit-transition: 2s;
        -o-transition: 2s;
        transition: 2s;
      }
      &__text {
        width: 80px;
        font-size: 20px;
        opacity: 0;
        -webkit-transition: 1s;
        -o-transition: 1s;
        transition: 1s;
        -webkit-transition-delay: 2s;
        -o-transition-delay: 2s;
        transition-delay: 2s;
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
  }

  @include mq($max-width: 1200px) {
    .VueCarousel-navigation {
      position: absolute;
      top: 45px;
      height: 100px;
      left: 18%;
      -webkit-transform: scale(0.8);
      -ms-transform: scale(0.8);
      transform: scale(0.8);
    }
    .VueCarousel-slide {
      position: relative;
      height: 600px;
      img {
        position: absolute;
        right: 0;
        width: 70%;
        opacity: 0;
        -webkit-transition: 1s;
        -o-transition: 1s;
        transition: 1s;
        -webkit-transform: scale(0.8);
        -ms-transform: scale(0.8);
        transform: scale(0.8);
      }
      .slide-content {
        position: absolute;
        left: 20%;
        top: 50%;
        -webkit-transform: translateY(-50%);
        -ms-transform: translateY(-50%);
        transform: translateY(-50%);
        &__text {
          max-width: 50%;
        }
      }
    }
    .slider-indicator {
      position: absolute;
      width: 600px;
      text-align: right;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-align: end;
      -ms-flex-align: end;
      align-items: flex-end;
      font-weight: bold;
      bottom: 50px;
      -webkit-transform: rotate(-90deg) scale(1.3) translateY(-150px);
      -ms-transform: rotate(-90deg) scale(1.3) translateY(-150px);
      transform: rotate(-90deg) scale(1.3) translateY(-150px);
      &__line {
        width: 0px;
        height: 2px;
        background-color: #000;
        -webkit-transform: translateY(-5px);
        -ms-transform: translateY(-5px);
        transform: translateY(-5px);
        -webkit-transition: 2s;
        -o-transition: 2s;
        transition: 2s;
      }
      &__text {
        width: 80px;
        font-size: 20px;
        opacity: 0;
        -webkit-transition: 1s;
        -o-transition: 1s;
        transition: 1s;
        -webkit-transition-delay: 2s;
        -o-transition-delay: 2s;
        transition-delay: 2s;
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
  }

  @include mq($max-width: 992px) {
    .VueCarousel-navigation {
      position: absolute;
      top: 45px;
      height: 100px;
      left: 18%;
      -webkit-transform: scale(0.8);
      -ms-transform: scale(0.8);
      transform: scale(0.8);
    }
    .VueCarousel-slide {
      position: relative;
      height: 450px;
      img {
        position: absolute;
        right: 0;
        width: 70%;
        opacity: 0;
        -webkit-transition: 1s;
        -o-transition: 1s;
        transition: 1s;
        -webkit-transform: scale(0.8);
        -ms-transform: scale(0.8);
        transform: scale(0.8);
      }
      .slide-content {
        position: absolute;
        left: 10%;
        top: 50%;
        -webkit-transform: translateY(-50%);
        -ms-transform: translateY(-50%);
        transform: translateY(-50%);
        &__text {
          max-width: 50%;
        }
      }
    }
    .slider-indicator {
      position: absolute;
      width: 600px;
      text-align: right;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-align: end;
      -ms-flex-align: end;
      align-items: flex-end;
      font-weight: bold;
      bottom: -50px;
      -webkit-transform: rotate(-90deg) scale(1.3) translateY(-200px);
      -ms-transform: rotate(-90deg) scale(1.3) translateY(-200px);
      transform: rotate(-90deg) scale(1.3) translateY(-200px);
      &__line {
        width: 0px;
        height: 2px;
        background-color: #000;
        -webkit-transform: translateY(-5px);
        -ms-transform: translateY(-5px);
        transform: translateY(-5px);
        -webkit-transition: 2s;
        -o-transition: 2s;
        transition: 2s;
      }
      &__text {
        width: 80px;
        font-size: 17px;
        opacity: 0;
        -webkit-transition: 1s;
        -o-transition: 1s;
        transition: 1s;
        -webkit-transition-delay: 2s;
        -o-transition-delay: 2s;
        transition-delay: 2s;
        span {
          &:nth-child(1) {
            color: #d9d9d9;
            font-size: 14px;
            margin: 0 3px;
          }
          &:nth-child(2) {
            color: #d9d9d9;
            font-size: 12px;
          }
        }
      }
    }
  }

  @include mq($max-width: 768px) {
    .VueCarousel-navigation {
      position: absolute;
      top: 320px;
      bottom: auto;
      height: 0;
      left: auto;
      right: 60px;
      -webkit-transform: scale(0.7);
      -ms-transform: scale(0.7);
      transform: scale(0.7);
    }
    .VueCarousel-slide {
      position: relative;
      height: 350px;
      img {
        position: absolute;
        right: 0;
        top: 0;
        width: auto;
        height: 300px;
        opacity: 0;
        -webkit-transition: 1s;
        -o-transition: 1s;
        transition: 1s;
      }
      .slide-content {
        position: absolute;
        left: 20px;
        width: 80%;
        top: 50%;
        -webkit-transform: translateY(-50%);
        -ms-transform: translateY(-50%);
        transform: translateY(-50%);
        &__text {
          display: none;
        }
      }
    }
    .slider-indicator {
      position: absolute;
      width: 600px;
      text-align: right;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-align: end;
      -ms-flex-align: end;
      align-items: flex-end;
      font-weight: bold;
      bottom: -250px;
      -webkit-transform: rotate(0) scale(1.3) translate(-456px, -200px);
      -ms-transform: rotate(0) scale(1.3) translate(-456px, -200px);
      transform: rotate(0) scale(1.3) translate(-456px, -200px);
      &__line {
        width: 600px;
        height: 2px;
        background-color: #000;
        -webkit-transform: translateY(-5px);
        -ms-transform: translateY(-5px);
        transform: translateY(-5px);
        -webkit-transition: 2s;
        -o-transition: 2s;
        transition: 2s;
        opacity: 0 !important;
      }
      &__text {
        width: 80px;
        font-size: 17px;
        opacity: 0;
        -webkit-transition: 0.3s;
        -o-transition: 0.3s;
        transition: 0.3s;
        -webkit-transition-delay: 0.9;
        -o-transition-delay: 0.9;
        transition-delay: 0.9;
        span {
          &:nth-child(1) {
            color: #d9d9d9;
            font-size: 14px;
            margin: 0 3px;
          }
          &:nth-child(2) {
            color: #d9d9d9;
            font-size: 12px;
          }
        }
      }
    }
  }

  @include mq($max-width: 600px) {
    .VueCarousel-navigation {
      position: absolute;
      top: 380px;
      bottom: auto;
      height: 0;
      left: auto;
      right: 10%;
      -webkit-transform: scale(0.7);
      -ms-transform: scale(0.7);
      transform: scale(0.7);
    }
    .VueCarousel-slide {
      position: relative;
      height: 600px;
      img {
        position: absolute;
        right: 0;
        top: 0;
        width: 600px;
        height: auto;
        opacity: 0;
        -webkit-transition: 1s;
        -o-transition: 1s;
        transition: 1s;
      }
      .slide-content {
        position: absolute;
        left: 20px;
        width: 100%;
        top: 380px;
        bottom: auto;
        text-align: left;
        -webkit-transform: translateY(0);
        -ms-transform: translateY(0);
        transform: translateY(0);
        &__title {
          width: 95%;
        }
        &__text {
          display: none;
          font-family: "Adobe Caslon Pro";
          font-size: 14px;
          max-width: 50%;
          margin-bottom: 30px;
        }
      }
    }
    .slider-indicator {
      display: none;
    }
  }

  .VueCarousel-slide-active {
    img {
      opacity: 1;
      -webkit-transform: scale(1);
      -ms-transform: scale(1);
      transform: scale(1);
    }
    .slide-content {
      &__category {
        opacity: 1;
        -webkit-transform: translateX(0);
        -ms-transform: translateX(0);
        transform: translateX(0);
      }
      &__title {
        opacity: 1;
        -webkit-transform: translateX(0);
        -ms-transform: translateX(0);
        transform: translateX(0);
      }
      &__text {
        opacity: 1;
        -webkit-transform: translateX(0);
        -ms-transform: translateX(0);
        transform: translateX(0);
      }
      .primary-button {
        opacity: 1;
        -webkit-transform: translateY(0);
        -ms-transform: translateY(0);
        transform: translateY(0);
      }
    }
    .slider-indicator {
      &__line {
        width: 600px;
        height: 2px;
        background-color: #000;
        -webkit-transform: translateY(-5px);
        -ms-transform: translateY(-5px);
        transform: translateY(-5px);
      }
      &__text {
        opacity: 1;
      }
    }
  }
}
</style>
