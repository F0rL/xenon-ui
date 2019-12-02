<template>
  <div class="xe-col" :class="colClass">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'xeCol',
  data() {
    return {

    }
  },
  props: {
    span: {
      type: [String, Number],
      required: true
    },
    offset: {
      type: [String, Number],
      required: true
    }
  },
  computed: {
    colClass() {
      return [`col-${this.span}`, `offset-${this.offset}`]
    }
  }
}
</script>

<style scoped lang="scss">
  .xe-col {
    height: 100%;
    border: 1px solid red;
    $class-prefix: col-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%;
      }
    }
    $class-prefix: offset-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
  }
</style>
