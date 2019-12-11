<template>
  <div class="xe-toast-wrapper" :class="toastClass">
    <div class="xe-toast-main" :class="themeClass">
      <div class="xe-toast-message">
        <slot v-if="!enableHtml"></slot>
        <div v-else v-html="$slots.default[0]"></div>
      </div>
      <span class="xe-close" v-if="closeButton" @click="onClickClose">{{closeButton.text}}</span>
    </div>
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
      default: 3
    },
    closeButton: {
      type: Object,
      default: () => {
        return {
          text: '关闭',
          callback: undefined
        }
      }
    },
    enableHtml: {
      type: Boolean,
      default: false
    },
    position: {
      type: String,
      default: 'top',
      validator(value) {
        return ['top', 'bottom', 'middle'].indexOf(value) >= 0
      }
    },
    type: {
      type: String,
      default: 'success',
      validator(value) {
        return ['success', 'warning', 'error'].indexOf(value) >= 0
      }
    }
  },
  mounted() {
    this.execAutoClose()
  },
  computed: {
    toastClass() {
      return `position-${this.position}`
    },
    themeClass() {
      return `xe-toast-${this.type}`
    }
  },
  methods: {
    execAutoClose() {
      if (this.autoClose) {
        setTimeout(() => {
          this.close()
        }, this.autoCloseDelay * 1000)
      }
    },
    close() {
      this.$el.remove()
      this.$emit('close') //优化手动关闭，复原currentClose
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
@import '../color.scss';
@import '../common.scss';

.xe-toast-wrapper {
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  &.position-top {
    top: 0;
    .xe-toast-main {
      border-top-left-radius: 0;
      border-top-right-radius: 0;
      animation: slide-down $toast-animation-duration;
    }
  }
  &.position-bottom {
    bottom: 0;
    .xe-toast-main {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      animation: slide-up $toast-animation-duration;
    }
  }
  &.position-middle {
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    animation: fade-in $toast-animation-duration;
  }
  > .xe-toast-main {
    font-size: 14px;
    padding: 10px 16px;
    line-height: 1.8;
    border-radius: 6px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid rgba(0, 0, 0, 0.1);
    &.xe-toast-success {
      background-color: $success-bg;
      color: $success;
    }
    &.xe-toast-warning {
      background-color: $warning-bg;
      color: $warning;
    }
    &.xe-toast-error {
      background-color: $error-bg;
      color: $error;
    }
  }
  .xe-close {
    margin-left: 2em;
    flex-shrink: 0;
    cursor: pointer;
  }
}

@keyframes slide-up {
  0% {
    opacity: 0;
    transform: translateY(100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0%);
  }
}
@keyframes slide-down {
  0% {
    opacity: 0;
    transform: translateY(-100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0%);
  }
}
@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
