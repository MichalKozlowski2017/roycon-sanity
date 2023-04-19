<template functional>
  <div
    v-in-viewport
    class="element"
    :style="{ zIndex: props.style == 'h1_purple' || props.style == 'h2_purple' ? '10' : '2' }"
  >
    <p v-if="props.style == 'normal'"><slot /></p>
    <h1 class="purple-heading" v-else-if="props.style == 'h1_purple'"><slot /></h1>
    <h2 class="purple-heading" v-else-if="props.style == 'h2_purple'"><slot /></h2>
    <h1 class="big-heading" v-else-if="props.style == 'h1_big'"><slot /></h1>
    <h2 class="big-heading" v-else-if="props.style == 'h2_big'"><slot /></h2>
    <h2 class="subtitle-heading" v-else-if="props.style == 'h2_subtitle'"><slot /></h2>
    <ul v-else>
      <slot />
    </ul>
  </div>
</template>

<script>
export default {
  name: "Element",
};
</script>

<style></style>
