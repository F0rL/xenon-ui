<template>
  <div class="xe-tabs-head">
    <slot></slot>
    <div class="tab-line" ref="line"></div>
    <div class="xe-tabs-action">
      <slot name="action"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'xeTabsHead',
  inject: ['eventBus'],
  mounted() {
    this.eventBus.$on('update:selected', (item, vm) => {
      //getBoundingClientRect()获取的是元素相对视窗的位置，line的left是相对位置，要做处理
      let { width, height, top, left } = vm.$el.getBoundingClientRect()
      let vmStyle = getComputedStyle(vm.$el)
      let vmContentWidth =
        vm.$el.clientWidth -
        parseFloat(vmStyle.paddingLeft) -
        parseFloat(vmStyle.paddingRight)
      let lineLeft = left - this.$el.getBoundingClientRect().left + parseFloat(vmStyle.paddingLeft)
      this.$refs.line.style.width = `${vmContentWidth}px`
      this.$refs.line.style.left = `${lineLeft}px`
    })
  }
}
</script>

<style scoped lang="scss">
.xe-tabs-head {
  position: relative;
  display: flex;
  justify-content: flex-start;
  height: 40px;
  margin-bottom: 1em;
  border-bottom: 1px solid #ccc;
  > .xe-tabs-action {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: auto;
  }
  > .tab-line {
    position: absolute;
    bottom: 0;
    border-bottom: 2px solid #409eff;
    transition: all 0.2s;
  }
}
</style>
