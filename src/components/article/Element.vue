<template functional>
  <div v-in-viewport class="element" :style="{ zIndex: props.style == 'h4' ? '10' : '2' }">
    <p v-if="props.style == 'normal'"><slot /></p>
    <h1 v-else-if="props.style == 'h1'"><slot /></h1>
    <h2 v-else-if="props.style == 'h2'"><slot /></h2>
    <h3 v-else-if="props.style == 'h3'"><slot /></h3>
    <h4 v-else-if="props.style == 'h4'">
      <slot />
    </h4>
    <h5 v-else-if="props.style == 'h5'"><slot /></h5>
    <h6 v-else-if="props.style == 'h6'"><slot /></h6>

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
