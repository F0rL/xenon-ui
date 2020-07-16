<template>
  <div class="xe-tabs-pane" :class="tabsClass" v-if="active">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'xeTabsPane',
  inject: ['eventBus'],
  data() {
    return {
      active: false
    }
  },
  props: {
    name: {
      type: String | Number,
      required: true
    }
  },
  computed: {
    tabsClass() {
      return {
        'xe-tabs-active': this.active
      }
    }
  },
  mounted() {
    this.eventBus.$on('update:selected', name => {
      this.active = name === this.name
    })
  }
}
</script>

<style scoped lang="scss">
</style>
