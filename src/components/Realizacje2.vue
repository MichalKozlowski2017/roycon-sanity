<template>
  <div class="section Realizacje" id="realizacje" v-in-viewport>
    <div class="line-1-Realizacje" v-in-viewport></div>
    <div id="overlay" class="overlay" @click="closeSlider"></div>
    <CategoryHeader
      v-in-viewport
      :text="'NASZE REALIZACJE'"
      :customClass="'Realizacje__category'"
    ></CategoryHeader>

    <div class="realizacje-wrapper">
      <g-link
        :to="item.node.slug.current"
        class="realizacja"
        v-for="item in $static.realizacje.edges"
        :key="item.id"
      >
        <div class="realizacja__img">
          <g-image v-in-viewport :src="generateUrl(item.node.mainImage.asset.url)" />
        </div>
        <div class="realizacja__info">
          <h4>{{ item.node.title }}</h4>
          <p>{{ item.node.subtitle }}</p>
        </div>
      </g-link>
    </div>

    <!-- <ClientOnly>
      <carousel
        id="sliderRealizacje"
        :perPage="1"
        class="slider-realizacje"
        :navigationEnabled="true"
        :paginationEnabled="true"
        :perPageCustom="[[768, 1], [1024, 1]]"
      >
        <slide v-for="item in $static.realizacje.edges" :key="item.id">
          <div class="realizacja">
            <div class="realizacja__img">
              <g-image v-in-viewport :src="generateUrl(item.node.mainImage.asset.url)" />
            </div>
            <div class="realizacja__info">
              <h4>{{ item.node.title }}</h4>
              <p>{{ item.node.subtitle }}</p>
              <g-link class="realizacja__info--cta" :to="item.node.slug.current"
                ><span>WIĘCEJ</span></g-link
              >
            </div>
          </div>
        </slide>
      </carousel>
    </ClientOnly> -->
  </div>
</template>

<static-query>
query {
    realizacje: allSanityRealizacje {
      edges {
        node {
          title
          subtitle
          slug {
            current
          }
          excerpt
          keywords
          mainImage {
            asset {
              url
            }
          }
          _rawBlockContent
        }
      }
    }
  }
</static-query>

<script>
import CategoryHeader from "~/components/CategoryHeader";
import { urlFor } from "../lib/sanity";
import { h } from "vue";

export default {
  name: "Realizacje",
  components: {
    CategoryHeader,
    Carousel: () =>
      import("vue-carousel")
        .then((m) => m.Carousel)
        .catch(),
    Slide: () =>
      import("vue-carousel")
        .then((m) => m.Slide)
        .catch(),
  },

  methods: {
    generateUrl: (url) => {
      return urlFor(url).url();
    },
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
}

.realizacje-wrapper,
.slider-realizacje {
  padding: 100px 170px 100px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: calc(1920px / 3 - 170px);
  grid-gap: 8px;

  @include mq($max-width: 1920px) {
    grid-auto-rows: calc(33.333vw - 170px);
  }

  @include mq($max-width: 1450px) {
    grid-auto-rows: 300px;
  }
  @include mq($max-width: 1350px) {
    padding: 100px 100px 10px;
    grid-auto-rows: calc(33.333vw - 100px);
  }
  @include mq($max-width: 1200px) {
    padding: 40px 80px 10px;
    grid-auto-rows: calc(33.333vw - 80px);
  }
  @include mq($max-width: 992px) {
    padding: 20px 50px 10px;
    grid-auto-rows: calc(33.333vw - 50px);
  }
  @include mq($max-width: 768px) {
    padding: 20px 30px 10px;
    grid-template-columns: repeat(1, 1fr);
    grid-auto-rows: calc(45vw - 30px);
  }
  @include mq($max-width: 400px) {
    padding: 20px 30px 10px;
    grid-template-columns: repeat(1, 1fr);
    grid-auto-rows: calc(60vw - 30px);
  }

  .realizacja {
    width: 100%;
    background-color: #fff;
    position: relative;
    overflow: hidden;

    &:before {
      content: "";
      position: absolute;
      width: 100%;
      height: 60%;
      background: rgb(0, 0, 0);
      background: linear-gradient(
        0deg,
        rgba(0, 0, 0, 1) 0%,
        rgba(0, 0, 0, 0.6) 24%,
        rgba(0, 212, 255, 0) 100%
      );
      bottom: 0;
      z-index: 1;
    }

    &__info {
      z-index: 2;
      color: #fff;
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      padding: 20px;

      h4,
      p {
        position: relative;
        width: 90%;
        margin: 0;
        line-height: 1.4;
      }

      h4 {
        font-size: 18px;
        margin-bottom: 16px;
      }
      p {
        font-size: 15px;
      }

      @include mq($max-width: 768px) {
        h4 {
          font-size: 15px;
          margin-bottom: 10px;
        }
        p {
          font-size: 12px;
        }
      }

      @include mq($max-width: 1200px) {
        h4 {
          font-size: 15px;
          margin-bottom: 10px;
        }
        p {
          font-size: 12px;
        }
      }

      @include mq($max-width: 1920px) {
        h4 {
          font-size: 18px;
          margin-bottom: 16px;
        }
        p {
          font-size: 15px;
        }
      }
    }

    &__img {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      transition: 0.5s;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    &:hover {
      .realizacja__img {
        transform: scale(1.1);
      }
    }
  }
}
</style>
