<template>
  <div class="y-toast">
    <slot></slot>
    <div class="y-line"></div>
    <span class="y-close" v-if="closeButton" @click="onClickClose">
      {{closeButton.text}}
    </span>
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
            callback: toast => {
              toast.close()
            }
          }
        }
      }
    },
    mounted() {
      if(this.autoClose) {
        setTimeout(() => {
          this.close()
        }, this.autoCloseDelay*1000)
      }
    },
    methods: {
      close() {
        this.$el.remove()
        this.$destroy()
      },
      onClickClose() {
        this.close()
        this.closeButton.callback()
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "@/model/cssSetting.scss";
  .y-toast {
    position: fixed;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
    padding: 0 16px;
    box-shadow: 0 0 3px 0 $toast-sbg;
    font-size: $toast-fontSize;
    color: $toast-color;
    background: $toast-bg;
    height: $toast-height;
    border-radius: $toast-radius;
    > .y-close {
      padding-left: 16px;
    }
    > .y-line {
      height: 100%;
      border-left: 1px solid #fff;
      margin-left: 16px;
    }
  }
</style>
