<template functional>
  <a v-if="props.href.includes('http')" :href="props.href" target="blank_" rel="nofollow noopener"
    ><slot
  /></a>
  <a v-else :href="props.href" rel="nofollow noopener"><slot /></a>
</template>

<script>
export default {
  name: "Link",
};
</script>
