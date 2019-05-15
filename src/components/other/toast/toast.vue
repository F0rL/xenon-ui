<template>
  <div class="y-wrapper" :class="toastPosition">
    <div class="y-toast" ref="toast" >
      <div class="y-message">
        <slot v-if="!enableHtml"></slot>
        <div v-html="$slots.default[0]" v-if="enableHtml"></div>
      </div>
      <div class="y-line" ref="line"></div>
      <span class="y-close" v-if="closeButton" @click="onClickClose">
      {{closeButton.text}}
    </span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "yToast",
    props: {
      autoClose: {
        type: Boolean,
        default: true
      },
      autoCloseDelay: {
        type: Number,
        default: 50
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
          return ['top', 'bottom', 'middle'].indexOf(value) > -1
        }
      }
    },
    computed: {
      toastPosition() {
        return (`position-${this.position}`)
      }
    },
    mounted() {
      this.setLineheight()
      this.execAutoClose()
    },
    methods: {
      execAutoClose() {
        if(this.autoClose) {
          setTimeout(() => {
            this.close()
          }, this.autoCloseDelay * 1000)
        }
      },
      close() {
        this.$el.remove()
        this.$emit('close')
        this.$destroy()
      },
      onClickClose() {
        this.close()
        if(this.closeButton && typeof this.closeButton.callback === 'function') {
          this.closeButton.callback(this)
        }
      },
      setLineheight() {
        this.$nextTick(() => {
          this.$refs.line.style.height = `${this.$refs.toast.getBoundingClientRect().height}px`
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "@/model/cssSetting.scss";
  @keyframes slide-down {
    0% { opacity: 0; transform: translateY(-100%)}
    100% { opacity: 100; transform: translateY(0%)}
  }
  @keyframes slide-up {
    0% { opacity: 0; transform: translateY(100%)}
    100% { opacity: 100; transform: translateY(0%)}
  }
  @keyframes fide-in {
    0% { opacity: 0;}
    100% { opacity: 100;}
  }
  .y-wrapper {
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    &.position-top {
      top: 0;
      .y-toast {
        border-top-left-radius: 0;
        border-top-right-radius: 0;
        animation: slide-down $toast-duration;
      }
    }
    &.position-middle {
      top: 50%;
      animation: fide-in $toast-duration;
    }
    &.position-bottom {
      bottom: 0;
      .y-toast {
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
        animation: slide-up $toast-duration;
      }
    }
  }
  .y-toast {
    display: flex;
    align-items: center;
    padding: 0 16px;
    box-shadow: 0 0 3px 0 $toast-sbg;
    font-size: $toast-fontSize;
    color: $toast-color;
    background: $toast-bg;
    min-height: $toast-min-height;
    border-radius: $toast-radius;
    > .y-message {
      padding: 4px 0;
    }
    > .y-close {
      padding-left: 16px;
      flex-shrink: 0;
    }
    > .y-line {
      border-left: 1px solid #fff;
      margin-left: 16px;
    }
  }
</style>
