<template>
  <div class="xe-toast-wrapper">
    <slot></slot>
    <span v-if="closeButton" @click="onClickClose">{{closeButton.text}}</span>
  </div>
</template>

<script>
export default {
  name: 'xeToast',
  props: {
    autoClose: {
      type: Boolean,
      default: true
    },
    autoCloseDelay: {
      type: Number,
      default: 5
    },
    closeButton: {
      type: Object,
      default: () => {
        return {
          text: '关闭',
          callback: undefined
        }
      }
    }
  },
  mounted() {
    if (this.autoClose) {
      setTimeout(() => {
        this.close()
      }, this.autoCloseDelay * 1000)
    }
  },
  methods: {
    close() {
      this.$el.remove()
      this.$destroy()
    },
    onClickClose() {
      this.close()
      if (this.closeButton && typeof this.closeButton.callback === 'function') {
        // 传递this，方便使用时调用组件方法
        this.closeButton.callback(this)
      }
    }
  }
}
</script>

<style scoped lang="scss">
.xe-toast-wrapper {
  border: 1px solid red;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
}
</style>
