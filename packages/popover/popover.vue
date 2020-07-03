<template>
  <div ref="xePopover" class="xe-popover" @click="onClick">
    <div ref="xeContentWrapper" class="xe-content-wrapper" v-if="visible">
      <slot name="content"></slot>
    </div>
    <span ref="xeTriggerContent">
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
  mounted() {},
  methods: {
    positionContent() {
      document.body.appendChild(this.$refs.xeContentWrapper)
      const {
        width,
        height,
        top,
        left
      } = this.$refs.xeTriggerContent.getBoundingClientRect()
      this.$refs.xeContentWrapper.style.left = left + window.scrollX + 'px'
      this.$refs.xeContentWrapper.style.top = top + window.scrollY + 'px'
    },
    onClickDocument(e) {
      // 如果点击的是popover，那么交给事件关闭，解决多次关闭的问题
      if (
        this.$refs.xePopover &&
        (this.$refs.xePopover === e.target ||
          this.$refs.xePopover.contains(e.target))
      ) {
        return
      }
      if (
        this.$refs.xeContentWrapper &&
        (this.$refs.xeContentWrapper === e.target ||
          this.$refs.xeContentWrapper.contains(e.target))
      ) {
        return
      }
      this.close()
    },
    open() {
      this.visible = true
      setTimeout(() => {
        this.positionContent()
        document.addEventListener('click', this.onClickDocument)
      })
    },
    close() {
      this.visible = false
      document.removeEventListener('click', this.onClickDocument)
    },
    onClick(e) {
      if (this.$refs.xeTriggerContent.contains(e.target)) {
        if (this.visible === true) {
          this.close()
        } else {
          this.open()
        }
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
}
.xe-content-wrapper {
  position: absolute;
  border: 1px solid red;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
  transform: translateY(-100%);
}
</style>
