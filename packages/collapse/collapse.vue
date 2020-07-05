<template>
  <div class="xe-collapse">
    <slot></slot>
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  name: 'xeCollapse',
  data() {
    return {
      eventBus: new Vue()
    }
  },
  props: {
    single: {
      type: Boolean,
      default: false
    },
    selected: {
      type: Array
    }
  },
  provide() {
    return {
      eventBus: this.eventBus
    }
  },
  mounted() {
    this.eventBus.$emit('update:selected', this.selected)
  }
}
</script>

<style scoped lang="scss">
@import '../color.scss';
.xe-collapse {
  border: 1px solid $collapseBorderColor;
  border-radius: $borderRadius;
}
</style>
