<template>
  <div class="y-button-group">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: "y-button-group",
    mounted() {
      for(let node of this.$el.children){
        if(node.nodeName.toLowerCase() !== 'button'){
          console.warn(`子元素应该全是y-button，但你写的是${node.nodeName}.`)
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .y-button-group {
    display: inline-flex;
    vertical-align: middle;
    >.y-button {
      border-radius: 0;
      &:not(:first-child){
        margin-left: -1px;
      }
      &:first-child {
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;
      }
      &:last-child {
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
      }
      &:hover {
        position: relative;
        z-index: 1;
      }
    }
  }
</style>
