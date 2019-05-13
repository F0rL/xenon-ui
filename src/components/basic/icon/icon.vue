<template>
  <svg class="y-icon">
    <use :xlink:href="`#i-${name}`"></use>
  </svg>
</template>

<script>
  import './svg'
  export default {
    name: "yIcon",
    props: ['name']
  }
</script>

<style scoped lang="scss">
  .y-icon {
    width: 1.2em;
    height: 1.2em;
  }
</style>
