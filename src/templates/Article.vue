<template>
  <Layout>
    <section class="section">
      <div class="section-content">
        <Blocks :blocks="blocks" />
      </div>
    </section>
  </Layout>
</template>

<page-query>
  query ($id: ID!) {
    sanityArticle(id: $id) {
      title
      _rawBlockContent
    }
  }
</page-query>

<script>
import { SanityBlocks } from "sanity-blocks-vue-component";
import Blocks from "../components/Blocks";

export default {
  metaInfo() {
    return {
      title: this.$page.sanityArticle.title,
    };
  },
  components: {
    SanityBlocks,
    Blocks,
  },

  created() {
    this.getBlocks();
  },

  data() {
    return {
      blocks: [],
    };
  },

  methods: {
    getBlocks() {
      [...this.$page.sanityArticle._rawBlockContent].forEach((el) => {
        this.blocks.push(el);
      });
    },
  },
};
</script>

<style lang="scss">
.section-content {
  position: relative;
  width: 100%;
  max-width: 1920px;
  height: 100%;
  margin: 0 auto;
  padding-top: 120px;

  background-color: red;
  &__title {
    margin-left: 10%;
  }
  &__text {
    margin-top: 150px;
    margin-bottom: 80px;
    width: 40%;
  }
}
</style>
