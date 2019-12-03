<template>
  <div class="xe-container" :class="containerClass">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'xeContainer',
  data() {
    return {
      containerClass: {
        hasSider: false
      }
    }
  },
  mounted() {
    this.$children.forEach(vm => {
      if(vm.constructor.options.name === 'xeSider'){
        this.containerClass.hasSider = true
      }
    })
  }
}
</script>

<style scoped lang="scss">
.xe-container {
  display: flex;
  flex-direction: column;
  flex: 1;
  &.hasSider {
    flex-direction: row;
  }
}
</style>
