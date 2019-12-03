<template>
  <transition name="hide">
    <div class="xe-sider" v-if="showSider">
      <slot></slot>
      <xe-icon name="left" class="xe-closeIcon" @click="showSider= false" v-if="closebutton"></xe-icon>
    </div>
  </transition>
</template>

<script>
import xeIcon from '../icon'

export default {
  name: 'xeSider',
  data() {
    return {
      showSider: true
    }
  },
  props: {
    closebutton: {
      type: Boolean,
      default: false
    }
  },
  components: {
    xeIcon
  }
}
</script>

<style scoped lang="scss">
.hide-enter, .hide-leave-to {
  width: 0;
  opacity: 0;
}
.hide-enter-to, .hide-leave {
  width: 100%;
  opacity: 1;
}
.hide-enter-active, .hide-leave-active {
  transition: all .3s linear;
}
.xe-sider {
  position: relative;
  .xe-closeIcon {
    position: absolute;
    right: 10px;
    top: 10px;
    width: 16px;
    height: 16px;
    cursor: pointer;
  }
}
</style>
