<template>
  <div class="xe-button-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'XeButtonGroup',
  mounted() {
    //  错误提示
    for (let node of this.$el.children) {
      let name = node.tagName.toLowerCase()
      if (name !== 'button') {
        console.error(`xe-group的子元素应该是xe-button,但是你写的是${name}`)
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import '../color.scss';

.xe-button-group {
  display: inline-flex;
  align-items: center;
  vertical-align: middle;
  > .xe-button {
    border-radius: 0px;
    &:hover {
      position: relative;
      z-index: 1;
    }
    &:not(:first-child) {
      margin-left: -1px;
    }
    &:first-child {
      border-top-left-radius: $borderRadius;
      border-bottom-left-radius: $borderRadius;
    }
    &:last-child {
      border-top-right-radius: $borderRadius;
      border-bottom-right-radius: $borderRadius;
    }
  }
}
</style>
