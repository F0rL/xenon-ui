<template>
  <div class="xe-tabs-body">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'xeTabsBody',
  inject: ['eventBus'],
  data() {
    return {}
  }
}
</script>

<style scoped lang="scss">
/* .xe-tabs-body {
  padding: 0 1em;
} */
</style>
