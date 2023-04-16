<template>
  <Layout>
    <section>
      <div class="section-content blockContent">
        <Blocks :blocks="blocks" />
      </div>
    </section>
  </Layout>
</template>

<page-query>
  query ($id: ID!) {
    sanityArticle(id: $id) {
      title
      excerpt
      keywords
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
      meta: [{ name: "description", content: this.$page.sanityArticle.excerpt }],
      meta: [{ name: "keywords", content: this.$page.sanityArticle.keywords }],
    };
  },
  components: {
    SanityBlocks,
    Blocks,
  },

  created() {
    this.getBlocks();
    console.log(this.blocks);
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
  margin-bottom: 100px;

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
