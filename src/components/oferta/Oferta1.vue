<template>
  <section class="oferta1 section" id="oferta1">
    <div class="line-1-oferta1" v-in-viewport></div>
    <div class="line-2-oferta1" v-in-viewport></div>
    <div class="line-3-oferta1" v-in-viewport></div>
    <TitleHeader
      :text="$static.allPages.edges[0].node.oferta.oferta_1.title"
      :customClass="'oferta1__title'"
    ></TitleHeader>
    <div class="section-content">
      <div class="section-content__left">
        <g-image
          v-in-viewport
          :src="
            require('!!assets-loader!~/assets/img/' +
              $static.allPages.edges[0].node.oferta.oferta_1.image_1)
          "
          :alt="$static.allPages.edges[0].node.oferta.oferta_1.title"
        />
        <Paragraph
          :text="$static.allPages.edges[0].node.oferta.oferta_1.text_2"
          :customClass="'section-content__text'"
        ></Paragraph>
      </div>
      <div class="section-content__right">
        <CategoryHeader
          :text="$static.allPages.edges[0].node.oferta.oferta_1.category"
          :customClass="'section-content__category'"
        ></CategoryHeader>
        <Paragraph
          :text="$static.allPages.edges[0].node.oferta.oferta_1.text_1"
          :customClass="'section-content__text'"
        ></Paragraph>
        <PrimaryButton
          :text="'Dowiedz się więcej'"
          :link="'/hale-stalowe-z-powierzchnia-biurowa'"
        ></PrimaryButton>

        <g-image
          v-in-viewport
          :src="
            require('!!assets-loader!~/assets/img/' +
              $static.allPages.edges[0].node.oferta.oferta_1.image_2)
          "
          :alt="$static.allPages.edges[0].node.oferta.oferta_1.title"
        />
      </div>
    </div>
  </section>
</template>

<script>
import PrimaryButton from "~/components/PrimaryButton";
import CategoryHeader from "~/components/CategoryHeader";
import TitleHeader from "~/components/TitleHeader";
import Paragraph from "~/components/Paragraph";
export default {
  name: "Oferta1",
  components: {
    PrimaryButton,
    CategoryHeader,
    TitleHeader,
    Paragraph,
  },
};
</script>

<static-query>
query {
  allPages {
    edges {
      node{
        oferta  {
        	oferta_1 {
            title
            text_1
            text_2
            category
            image_1
            image_2
          }
        }
      }
    }
  }
}
</static-query>

<style lang="scss">
.line-1-oferta1 {
  position: absolute;
  width: 2px;
  height: 0;
  top: 0;
  right: 5%;
  background-color: $accent-purple;
  -webkit-transition-delay: 3s;
  -o-transition-delay: 3s;
  transition-delay: 3s;
  -webkit-transition: height 3s;
  -o-transition: height 3s;
  transition: height 3s;
  z-index: 9999;
  @include mq($max-width: 992px) {
    display: none;
    left: 50%;
    -webkit-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    transform: translateX(-50%);
  }
}
.line-1-oferta1.in-viewport {
  height: 200px;
}
.line-2-oferta1 {
  position: absolute;
  width: 0;
  height: 2px;
  top: 230px;
  right: 8%;
  background-color: $accent-purple;
  -webkit-transition-delay: 3s;
  -o-transition-delay: 3s;
  transition-delay: 3s;
  -webkit-transition: width 3s;
  -o-transition: width 3s;
  transition: width 3s;
  z-index: 9999;
  @include mq($max-width: 992px) {
    display: none;
    left: 50%;
    -webkit-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    transform: translateX(-50%);
  }
}
.line-2-oferta1.in-viewport {
  width: 100px;
}
.line-3-oferta1 {
  position: absolute;
  width: 0;
  height: 2px;
  bottom: 100px;
  left: 8%;
  background-color: $accent-purple;
  -webkit-transition-delay: 3s;
  -o-transition-delay: 3s;
  transition-delay: 3s;
  -webkit-transition: width 3s;
  -o-transition: width 3s;
  transition: width 3s;
  z-index: 9999;
  @include mq($max-width: 1400px) {
    display: none;
    left: 50%;
    -webkit-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    transform: translateX(-50%);
  }
}
.line-3-oferta1.in-viewport {
  width: 100px;
}

.oferta1 {
  &__title {
    margin-left: 17.5%;
    margin-bottom: 100px;
    margin-top: 100px;
    max-width: 60%;
  }
  @include mq($max-width: 1200px) {
    &__title {
      margin-left: 12.5%;
      margin-bottom: 45px;
      margin-top: 45px;
    }
  }
  @include mq($max-width: 992px) {
    &__title {
      max-width: 90%;
    }
  }
  @include mq($max-width: 600px) {
    &__title {
      margin-left: 30px;
    }
  }
  .section-content {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    @include mq($max-width: 600px) {
      -webkit-box-orient: vertical;
      -webkit-box-direction: reverse;
      -ms-flex-direction: column-reverse;
      flex-direction: column-reverse;
    }
    &__left {
      width: 60%;
      position: relative;
      img {
        position: absolute;
        right: 0;
        width: 100%;
      }
      .paragraph {
        margin-top: 600px;
        padding-left: 50%;
      }
      @include mq($max-width: 1920px) {
        .paragraph {
          margin-top: 30vw;
          padding-left: 50%;
        }
      }
      @include mq($max-width: 1650px) {
        .paragraph {
          margin-top: 30vw;
          padding-left: 30%;
        }
      }
      @include mq($max-width: 600px) {
        width: 100%;
        .paragraph {
          padding: 30px;
          margin: 0;
        }
        img {
          position: relative;
        }
      }
    }
    &__right {
      width: 40%;
      padding: 100px 100px;
      .paragraph {
        padding: 50px 50px 0 0;
      }

      img {
        position: absolute;
        bottom: 100px;
        right: 100px;
      }
      &::before {
        content: "";
        position: absolute;
        width: 200px;
        height: 400px;
        bottom: -200px;
        right: 0px;
        background-color: #eeeeee;
      }
      @include mq($max-width: 1920px) {
      }
      @include mq($max-width: 1650px) {
        img {
          bottom: -100px;
        }
        &::before {
          bottom: -400px;
        }
      }
      @include mq($max-width: 1200px) {
        &::before {
          height: 200px;
          bottom: -200px;
        }
      }
      @include mq($max-width: 992px) {
        padding: 50px 50px;
        .paragraph {
          padding: 15px 15px 0 0;
        }
        img {
          right: 0;
          position: relative;
        }
      }
      @include mq($max-width: 600px) {
        width: 90%;
        padding: 30px;
        img {
          display: none;
        }
        &::before {
          display: none;
        }
      }
    }
  }
}
</style>
