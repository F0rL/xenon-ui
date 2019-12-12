<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
import Vue from 'vue'

export default {
  name: 'xeTabs',
  props: {
    selected: {
      type: String,
      required: true
    },
    direction: {
      type: String,
      default: 'horizontal',
      validator(value) {
        return ['horizontal', 'vertical'].indexOf(value) >= 0
      }
    }
  },
  data() {
    return {
      eventBus: new Vue()
    }
  },
  provide() {
    return {
      eventBus: this.eventBus
    }
  },
  mounted() {
    this.selectTab()
    this.selectTab()
  },
  methods: {
    selectTab() {
      this.$children.forEach(vm => {
        if (vm.$options.name === 'xeTabsHead') {
          vm.$children.forEach(childVm => {
            if (
              childVm.$options.name === 'xeTabsItem' &&
              childVm.name === this.selected
            ) {
              this.eventBus.$emit('update:selected', this.selected, childVm)
            }
          })
        }
      })
    },
    checkChildren() {
      if (this.$children.length === 0) {
        console &&
          console.warn &&
          console.warn(
            'tabs的子组件应该是tabs-head和tabs-name，但你没有写子组件'
          )
      }
    }
  }
}
</script>

<style scoped lang="scss">
</style>
