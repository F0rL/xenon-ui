<template>
  <div class="xe-popover" @click.stop="showPopover">
    <div class="xe-content-wrapper" v-if="visible">
      <slot name="content"></slot>
    </div>
    <span>
      <slot></slot>
    </span>
  </div>
</template>

<script>
export default {
  name: 'xePopover',
  data() {
    return {
      visible: false
    }
  },
  methods: {
    showPopover() {
      this.visible = !this.visible
      if (this.visible === true) {
        this.$nextTick(() => {
          const changePopover = () => {
            console.log('document close popover')
            this.visible = false
            document.removeEventListener('click', changePopover)
          }
          document.addEventListener('click', changePopover)
        })
      }else {
        console.log('vm close popover')
      }
    }
  }
}
</script>

<style scoped lang="scss">
.xe-popover {
  display: inline-block;
  vertical-align: top;
  position: relative;
  .xe-content-wrapper {
    position: absolute;
    bottom: 100%;
    left: 0;
    border: 1px solid red;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
  }
}
</style>
