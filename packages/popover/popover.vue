<template>
  <div ref="xePopover" class="xe-popover">
    <div
      ref="xeContentWrapper"
      class="xe-content-wrapper"
      v-if="visible"
      :class="{[`position-${position}`]: true}"
    >
    <!-- 暴露close方法给外面调用 -->
      <slot name="content" :close="close"></slot>
    </div>
    <span ref="xeTriggerContent" style="display: inline-block;">
      <slot></slot>
    </span>
  </div>
</template>

<script>
export default {
  name: 'xePopover',
  props: {
    position: {
      type: String,
      default: 'top',
      validator(value) {
        return ['top', 'bottom', 'left', 'right'].indexOf(value) >= 0
      }
    },
    trigger: {
      type: String,
      default: 'click',
      validator(value) {
        return ['click', 'hover'].indexOf(value) >= 0
      }
    }
  },
  data() {
    return {
      visible: false
    }
  },
  mounted() {
    // 判断事件
    if (this.trigger === 'click') {
      this.$refs.xePopover.addEventListener('click', this.onClick)
    } else {
      this.$refs.xePopover.addEventListener('mouseenter', this.open)
      this.$refs.xePopover.addEventListener('mouseleave', this.close)
    }
  },
  destroyed() {
    if (this.trigger === 'click') {
      this.$refs.xePopover.removeEventListener('click', this.onClick)
    } else {
      this.$refs.xePopover.removeEventListener('mouseenter', this.open)
      this.$refs.xePopover.removeEventListener('mouseleave', this.close)
    }
  },
  computed: {
    openEvent() {
      if (this.trigger === 'click') {
        return 'click'
      } else {
        return 'mouseenter'
      }
    },
    closeEvent() {
      if (this.trigger === 'click') {
        return 'click'
      } else {
        return 'mouseleave'
      }
    }
  },
  methods: {
    positionContent() {
      const { xeContentWrapper, xeTriggerContent } = this.$refs
      document.body.appendChild(xeContentWrapper)
      const {
        width,
        height,
        top,
        left
      } = xeTriggerContent.getBoundingClientRect()
      const { height: height2 } = xeContentWrapper.getBoundingClientRect()
      let positions = {
        top: { top: top + window.scrollY, left: left + window.scrollX },
        bottom: {
          top: top + height + window.scrollY,
          left: left + window.scrollX
        },
        left: {
          top: top + window.scrollY + (height - height2) / 2,
          left: left + window.scrollX
        },
        right: {
          top: top + window.scrollY + (height - height2) / 2,
          left: left + window.scrollX + width
        }
      }
      xeContentWrapper.style.left = positions[this.position].left + 'px'
      xeContentWrapper.style.top = positions[this.position].top + 'px'
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
@import '../color.scss';

.xe-popover {
  display: inline-block;
  vertical-align: top;
  position: relative;
}
.xe-content-wrapper {
  font-size: $popoverFontsize;
  position: absolute;
  border: 1px solid $border;
  border-radius: $borderRadius;
  background: #fff;
  filter: drop-shadow(0 1px 1px $border);
  padding: 0.5em 1em;
  max-width: 20em;
  // 中文文字换行
  word-break: break-all;
  &::before,
  &::after {
    content: '';
    display: block;
    border: 10px solid transparent;
    width: 0;
    height: 0;
    position: absolute;
  }
  &.position-top {
    transform: translateY(-100%);
    margin-top: -10px;
    &::before,
    &::after {
      left: 10px;
    }
    &::before {
      border-bottom: none;
      border-top-color: $border;
      top: 100%;
    }
    &::after {
      border-bottom: none;
      border-top-color: #fff;
      top: calc(100% - 1px);
    }
  }
  &.position-bottom {
    margin-top: 10px;
    &::before,
    &::after {
      left: 10px;
    }
    &::before {
      border-top: none;
      border-bottom-color: $border;
      bottom: 100%;
    }
    &::after {
      border-top: none;
      border-bottom-color: #fff;
      bottom: calc(100% - 1px);
    }
  }
  &.position-left {
    transform: translateX(-100%);
    margin-left: -10px;
    &::before,
    &::after {
      transform: translateY(-50%);
      top: 50%;
    }
    &::before {
      border-right: none;
      border-left-color: $border;
      left: 100%;
    }
    &::after {
      border-right: none;
      border-left-color: #fff;
      left: calc(100% - 1px);
    }
  }
  &.position-right {
    margin-left: 10px;
    &::before,
    &::after {
      transform: translateY(-50%);
      top: 50%;
    }
    &::before {
      border-left: none;
      border-right-color: $border;
      right: 100%;
    }
    &::after {
      border-left: none;
      border-right-color: #fff;
      right: calc(100% - 1px);
    }
  }
}
</style>
