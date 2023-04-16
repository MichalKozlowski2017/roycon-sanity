<template>
  <div>
    <g-image class="image" v-in-viewport :src="{ src }" />
  </div>
</template>

<script>
export default {
  name: "ArticleImage",
  props: {
    src: String,
  },
};
</script>
