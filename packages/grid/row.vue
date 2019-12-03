<template>
  <div class="xe-row" :class="rowClass" :style="rowStyle">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'xeRow',
  data() {
    return {}
  },
  props: {
    align: {
      type: String,
      default: 'left',
      validator(value) {
        return ['left', 'right', 'center'].indexOf(value) >= 0
      }
    },
    gutter: {
      type: [Number, String]
    }
  },
  computed: {
    rowClass() {
      let align = this.align
      return [align && `align-${align}`]
    },
    rowStyle() {
      let { gutter } = this
      return { marginLeft: -gutter / 2 + 'px', marginRight: -gutter / 2 + 'px' }
    }
  },
  mounted() {
    this.$children.forEach(vm => {
      vm.gutter = this.gutter
    })
  }
}
</script>

<style scoped lang="scss">
.xe-row {
  display: flex;
  flex-wrap: wrap;
  &.align-center {
    justify-content: center;
  }
  &.align-left {
    justify-content: flex-start;
  }
  &.align-right {
    justify-content: flex-end;
  }
}
</style>
