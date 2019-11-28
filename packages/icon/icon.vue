<template>
  <span class="xe-icon-wrapper">
    <svg class="xe-icon" aria-hidden="true">
      <use v-bind:xlink:href="`#xe-${name}`" />
    </svg>
  </span>
</template>

<script>
export default {
  name: 'XeIcon',
  props: {
    name: {
      type: String
    }
  }
}
</script>

<style scoped lang="scss">
.xe-icon-wrapper {
  width: 1em;
  height: 1em;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  .xe-icon {
    fill: currentColor;
    width: 100%;
    height: 100%;
    vertical-align: top;
    overflow: hidden;
  }
}
</style>
