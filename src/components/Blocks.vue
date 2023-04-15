<template>
  <div v-if="blocks">
    <block-content
      projectId="bqlg1o8q"
      dataset="production"
      :blocks="blocks"
      :serializers="serializers"
    />
  </div>
</template>

<script>
import BlockContent from "sanity-blocks-vue-component";
import { urlFor } from "../lib/sanity";
import { h } from "vue";
import { getClient } from "../lib/sanity";

export default {
  name: "Blocks",
  components: {
    BlockContent,
  },
  props: {
    blocks: Array,
  },
  setup() {
    const serializers = {
      types: {
        image: (data) => {
          // console.log(urlFor(data.node.asset).url());
          return h("img", {
            attrs: { src: urlFor(data.node.asset).url() },
            class: "image",
          });

          // return <g-image src={urlFor(data.node.asset).url()} width="" />;
        },
      },
    };

    return {
      serializers,
    };
  },
};
</script>

<style lang="scss" scoped>
.image {
  opacity: 1;
}
</style>
