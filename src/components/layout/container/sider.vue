<template>
  <transition name="hide">
    <div class="y-sider" v-if="visible">
      <slot></slot>
      <button @click="visible=false">close</button>
    </div>
  </transition>
</template>

<script>
  export default {
    name: "ySider",
    data() {
      return {
        visible: true
      }
    }
  }
</script>

<style lang="scss" scoped>
  .y-sider {
    position: relative;
    > button {
      position: absolute;
      top: 0;
      right: 0;
    }
  }
  hide-enter-active, .hide-leave-active {
    transition: opacity .5s;
  }
  .hide-enter, .hide-leave-to{
    opacity: 0;
  }
</style>
