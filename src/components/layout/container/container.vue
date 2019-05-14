<template>
  <div class="y-container" :class="containerClass">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "yContainer",
    data() {
      return {
        containerClass: {
          hasSider: false
        }
      }
    },
    mounted() {
      this.$children.forEach(vm => {
        if(vm.$options.name === 'ySider'){
          this.containerClass.hasSider = true
        }
      })
    }
  }
</script>

<style lang="scss" scoped>
  .y-container {
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    &.hasSider {
      flex-direction: row;
    }
  }
</style>
