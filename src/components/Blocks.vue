<template>
  <div v-if="blocks">
    <block-content
      projectId="bqlg1o8q"
      dataset="production"
      class="blockContent"
      :blocks="blocks"
      :serializers="serializers"
    />
  </div>
</template>

<script>
import BlockContent from "sanity-blocks-vue-component";
import ArticleImage from "./article/ArticleImage";
import Links from "./article/Links";
import Element from "./article/Element";
import { urlFor } from "../lib/sanity";
import { h } from "vue";

export default {
  name: "Blocks",
  components: {
    BlockContent,
    ArticleImage,
    Links,
    Element,
  },
  props: {
    blocks: Array,
  },

  setup() {
    const serializers = {
      types: {
        image: (data) => {
          return h("img", {
            attrs: { src: urlFor(data.node.asset).url() },
            class: "image",
          });
        },
        block: Element,
      },
      marks: {
        link: Links,
      },
      list: Element,
    };

    return {
      serializers,
    };
  },
};
</script>

<style lang="scss">
.blockContent {
  .element {
    & > * {
      transition: 0.5s;
      opacity: 0;
      transform: scale(0.9);
    }
    &.in-viewport {
      & > * {
        opacity: 1;
        transform: scale(1);
      }
    }
  }
  .image {
    width: 100%;
    object-fit: cover;
    z-index: 0;
    position: relative;
    max-height: 900px;
    opacity: 1;
    transform: scale(1);
    margin-bottom: -10px;

    @include mq($min-width: 768px) {
      margin-bottom: -120px;
      &:not(:first-child) {
        margin-top: -40px;
      }
    }
  }

  @include mq($min-width: 768px) {
    .image + div p {
      padding-top: 60px;
    }
  }

  @include mq($min-width: 768px) {
    .image + div p {
      padding-top: 120px;
    }
  }

  a {
    color: #732d67;
    font-weight: bold;
  }

  p,
  ul,
  ol,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    position: relative;
    padding: 0;
    margin: 0;
  }

  p,
  h4,
  ul,
  ol {
    font-family: "Adobe Caslon Pro";
  }

  .element {
    z-index: 1;
    position: relative;
    overflow: visible;
    background-color: #f7f7f7;
    margin: 0 auto;

    padding-left: 20px;
    padding-right: 20px;

    @include mq($min-width: 768px) {
      padding-left: 60px;
      padding-right: 60px;
      width: calc(100% - 160px);
    }

    @include mq($min-width: 1024px) {
      padding-left: 120px;
      padding-right: 120px;
      width: calc(100% - 280px);
    }
  }

  li {
    margin-left: 30px;
    padding-top: 10px;
    padding-bottom: 10px;

    @include mq($min-width: 1024px) {
      font-size: 20px;
    }
    @include mq($min-width: 1600px) {
      font-size: 26px;
      padding-top: 25px;
      padding-bottom: 25px;
    }
  }

  p {
    padding-top: 20px;
    padding-bottom: 20px;

    @include mq($min-width: 1024px) {
      font-size: 20px;
    }

    @include mq($min-width: 1600px) {
      font-size: 26px;
      padding-top: 30px;
      padding-bottom: 30px;
    }
  }

  h4 {
    padding-top: 26px;
    padding-bottom: 20px;
    font-size: 46px;
    line-height: 1.2;
    font-weight: normal;

    @include mq($min-width: 1024px) {
      font-size: 70px;
      padding-top: 56px;
      padding-bottom: 60px;
    }
    @include mq($min-width: 1600px) {
      font-size: 144px;
    }
  }

  h3 {
    font-weight: normal;
    font-size: 26px;
    line-height: 1.2;
    margin-top: -10px;
    padding-bottom: 30px;
    font-family: "Adobe Caslon Pro";

    @include mq($min-width: 1024px) {
      font-size: 35px;
      line-height: 1.2;
      margin-top: -30px;
      padding-bottom: 50px;
    }

    @include mq($min-width: 1600px) {
      font-size: 55px;
      margin-top: -30px;
      padding-bottom: 80px;
    }
  }

  h1,
  h2 {
    color: #732d67;
    font-family: "Brandon Grotesque", Arial, sans-serif;
    font-weight: 700;
    font-size: 26px;
    position: relative;
    text-transform: uppercase;
    padding-top: 40px;
    padding-bottom: 40px;
    display: block;
    overflow: visible;
    line-height: 1.4;

    @include mq($min-width: 1024px) {
      font-size: 36px;
    }

    @include mq($min-width: 1600px) {
      font-size: 48px;
    }

    &:after {
      content: "";
      position: absolute;
      background-color: #4aa37b;
      display: block;
      width: 61px;
      height: 5px;
      bottom: 30px;
      left: 0;
      z-index: 10;
    }
  }
}
</style>
