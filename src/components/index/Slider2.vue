<template>
  <div style="position: relative;">
    <ClientOnly>
      <carousel
        :perPage="1"
        class="slider-2"
        :navigationEnabled="true"
        :paginationEnabled="false"
        :perPageCustom="[[768, 1], [1024, 1]]"
      >
        <slide
          v-for="slide in $static.allPages.edges[0].node.index.secondSlider.slides"
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
        </slide>
      </carousel>
    </ClientOnly>
    <div class="line-1-slider2" v-in-viewport></div>
  </div>
</template>

<static-query>
query {
  allPages {
    edges {
      node{
        index {
        	secondSlider {
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
      import("vue-carousel")
        .then((m) => m.Carousel)
        .catch(),
    Slide: () =>
      import("vue-carousel")
        .then((m) => m.Slide)
        .catch(),
  },
  data: function() {
    return {
      currentSlide: 0 + 1,
    };
  },
};
</script>

<style lang="scss">
.line-1-slider2 {
  position: absolute;
  width: 2px;
  height: 0;
  top: -200px;
  right: 5%;
  background-color: $accent-purple;
  -webkit-transition-delay: 3s;
  -o-transition-delay: 3s;
  transition-delay: 3s;
  -webkit-transition: height 3s;
  -o-transition: height 3s;
  transition: height 3s;
  &::before {
    content: "";
    position: absolute;
    top: -200px;
    left: 0;
    width: 2px;
    height: 30%;
    background-color: $accent-purple;
  }
  @include mq($max-width: 768px) {
    display: none;
    left: 50%;
    -webkit-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    transform: translateX(-50%);
  }
}
.line-1-slider2.in-viewport {
  height: 500px;
}

.slider-2 {
  margin-top: 100px;
  @include mq($max-width: 1650px) {
    margin-top: 50px;
  }

  .VueCarousel {
    margin-top: 100px;
  }

  .VueCarousel-navigation {
    position: absolute;
    top: 50px;
    height: 100px;
    left: auto;
    right: 15%;
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

  .VueCarousel-slide {
    position: relative;
    height: 910px;

    &:before {
      content: "";
      width: 500px;
      height: 500px;
      position: absolute;
      left: 0;
      top: 0;
      -webkit-transform: scale(0);
      -ms-transform: scale(0);
      transform: scale(0);
      -webkit-transition: 0.5s;
      -o-transition: 0.5s;
      transition: 0.5s;
      display: block;
      background-color: #eeeeee;
    }

    img {
      position: absolute;
      top: auto;
      bottom: 0;
      left: 17.5%;
      width: 443px;
      max-width: 1600px;
    }

    .slide-content {
      position: absolute;
      top: 50%;
      right: 0;
      height: 100%;
      width: 65%;
      -webkit-transform: translateY(-50%);
      -ms-transform: translateY(-50%);
      transform: translateY(-50%);

      &__category {
        margin-left: 30%;
        margin-top: 40px;
        max-width: 400px;
      }

      &__title {
        max-width: 60%;
      }

      &__text {
        max-width: 50%;

        margin-left: 30%;
        margin-top: 100px;
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
        margin-left: 30%;
      }
    }
  }

  @include mq($max-width: 1650px) {
    .VueCarousel-navigation {
      position: absolute;
      top: 50px;
      height: 100px;
      right: 10%;
    }

    .VueCarousel-slide {
      position: relative;
      height: 750px;

      img {
        position: absolute;
        left: 12.5%;
        width: 420px;
      }

      .slide-content {
        position: absolute;
        top: 50%;
        right: 0;
        height: 100%;
        width: 65%;
        -webkit-transform: translateY(-50%);
        -ms-transform: translateY(-50%);
        transform: translateY(-50%);

        &__category {
          margin-left: 25%;
          margin-top: 40px;
          max-width: 400px;
        }

        &__title {
          max-width: 60%;
        }

        &__text {
          max-width: 70%;
          margin-left: 25%;
          margin-top: 40px;
        }

        .primary-button {
          margin-left: 25%;
        }
      }
    }
  }

  @include mq($max-width: 1200px) {
    .VueCarousel-navigation {
      position: absolute;
      top: 50px;
      height: 100px;
      right: 10%;
    }

    .VueCarousel-slide {
      position: relative;
      height: 600px;

      &:before {
        content: "";
        width: 350px;
        height: 350px;
        position: absolute;
        left: 0;
        top: 0;
        display: block;
        background-color: #eeeeee;
      }

      img {
        position: absolute;
        left: 12.5%;
        width: 330px;
      }

      .slide-content {
        position: absolute;
        top: 50%;
        right: 0;
        height: 100%;
        width: 65%;
        -webkit-transform: translateY(-50%);
        -ms-transform: translateY(-50%);
        transform: translateY(-50%);

        &__category {
          margin-left: 25%;
          margin-top: 40px;
          max-width: 400px;
        }

        &__title {
          max-width: 60%;
        }

        &__text {
          max-width: 70%;
          margin-left: 25%;
          margin-top: 40px;
        }

        .primary-button {
          margin-left: 25%;
        }
      }
    }
  }

  @include mq($max-width: 992px) {
    .VueCarousel-navigation {
      position: absolute;
      top: 30px;
      height: 100px;
      right: 10%;
      -webkit-transform: scale(0.9);
      -ms-transform: scale(0.9);
      transform: scale(0.9);
    }

    .VueCarousel-slide {
      position: relative;
      height: 450px;

      &:before {
        content: "";
        width: 250px;
        height: 250px;
        position: absolute;
        left: 0;
        top: 0;
        display: block;
        background-color: #eeeeee;
      }

      img {
        position: absolute;
        left: 12.5%;
        width: 250px;
      }

      .slide-content {
        position: absolute;
        top: 50%;
        right: 0;
        height: 100%;
        width: 65%;
        -webkit-transform: translateY(-50%);
        -ms-transform: translateY(-50%);
        transform: translateY(-50%);

        &__category {
          margin-left: 16.5%;
          margin-top: 40px;
          max-width: 400px;
        }

        &__title {
          max-width: 60%;
        }

        &__text {
          max-width: 70%;
          margin-left: 16.5%;
          margin-top: 40px;
        }

        .primary-button {
          margin-left: 16.5%;
        }
      }
    }

    .slider-indicator {
      position: fixed;
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
      top: 3px;
      height: 100px;
      right: 60px;
      -webkit-transform: scale(0.7);
      -ms-transform: scale(0.7);
      transform: scale(0.7);
    }

    .VueCarousel-slide {
      position: relative;
      height: 85vw;

      &:before {
        content: "";
        width: 70%;
        height: 90%;
        position: absolute;
        left: 0;
        top: 0;
        display: block;
        background-color: #eeeeee;
      }

      img {
        position: absolute;
        left: auto;
        right: 0;
        width: auto;
        max-height: 500px;
        z-index: 0;
      }

      .slide-content {
        position: absolute;
        top: 0;
        right: auto;
        left: 0;
        height: auto;
        width: 65%;
        padding-top: 50px;
        padding-left: 30px;
        padding-bottom: 50px;
        -webkit-transform: translateY(0);
        -ms-transform: translateY(0);
        transform: translateY(0);

        &__category {
          margin-left: 0;
          margin-top: 0;
          max-width: 400px;
        }

        &__title {
          max-width: 80%;
          z-index: 2;
        }

        &__text {
          max-width: 55%;
          margin-left: 0;
          margin-top: 40px;
        }

        .primary-button {
          margin-left: 0;
        }
      }
    }
  }

  @include mq($max-width: 600px) {
    .VueCarousel-navigation {
      position: absolute;
      top: 3px;
      height: 100px;
      right: 10%;
      -webkit-transform: scale(0.7);
      -ms-transform: scale(0.7);
      transform: scale(0.7);
    }

    .VueCarousel-slide {
      position: relative;

      &:before {
        content: "";
        width: 70%;
        height: 80%;
        position: absolute;
        left: 0;
        top: 0;
        display: block;
        background-color: #eeeeee;
      }

      img {
        position: absolute;
        left: auto;
        right: 0;
        top: 50px;
        width: 50%;
        max-height: auto;
        z-index: 1;
      }

      .slide-content {
        z-index: 1;
        position: absolute;
        top: 0;
        right: auto;
        left: 0;
        height: auto;
        width: 50%;
        padding-top: 50px;
        padding-left: 20px;
        padding-bottom: 50px;

        &__category {
          margin-left: 0;
          margin-top: 0;
          max-width: 400px;
        }

        &__title {
          max-width: 80%;
        }

        &__text {
          max-width: 55%;
          margin-left: 0;
          margin-top: 40px;
          display: none;
        }

        .primary-button {
          margin-left: 0;
        }
      }
    }
  }

  // .VueCarousel-slide-active {
  //   img {
  //     opacity: 1;
  //     -webkit-transform: scale(1);
  //     -ms-transform: scale(1);
  //     transform: scale(1);
  //   }

  //   &:before {
  //     -webkit-transform: scale(1);
  //     -ms-transform: scale(1);
  //     transform: scale(1);
  //   }

  //   .slide-content {

  //     &__category {
  //       opacity: 1;
  //       -webkit-transform: translateX(0);
  //       -ms-transform: translateX(0);
  //       transform: translateX(0);
  //     }

  //     &__title {
  //       opacity: 1;
  //       -webkit-transform: translateX(0);
  //       -ms-transform: translateX(0);
  //       transform: translateX(0);
  //     }

  //     &__text {
  //       opacity: 1;
  //       -webkit-transform: translateX(0);
  //       -ms-transform: translateX(0);
  //       transform: translateX(0);
  //     }

  //     .primary-button {
  //       opacity: 1;
  //       -webkit-transform: translateY(0);
  //       -ms-transform: translateY(0);
  //       transform: translateY(0);
  //     }
  //   }
  // }
}
</style>
