<template>
  <div>
    <g-image class="image" v-in-viewport :src="{ src }" :alt="{ alt }" />
  </div>
</template>

<script>
export default {
  name: "ArticleImage",
  props: {
    src: String,
    alt: String,
  },
};
</script>
