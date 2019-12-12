<template>
  <div class="xe-tabs-item" :class="tabsClass" @click="onClick">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'xeTabsItem',
  inject: ['eventBus'],
  data() {
    return {
      active: false
    }
  },
  props: {
    disabled: {
      type: Boolean,
      dafault: false
    },
    name: {
      type: String | Number,
      required: true
    }
  },
  mounted() {
    this.eventBus.$on('update:selected', name => {
      this.active = name === this.name
    })
  },
  computed: {
    tabsClass() {
      return {
        'xe-tabs-active': this.active,
        'xe-tabs-disabled': this.disabled
      }
    }
  },
  methods: {
    onClick() {
      if (this.disabled) {
        return
      }
      this.eventBus.$emit('update:selected', this.name, this)
    }
  }
}
</script>

<style scoped lang="scss">
.xe-tabs-item {
  display: flex;
  align-items: center;
  flex-shrink: 0;
  height: 100%;
  padding: 0 1em;
  font-size: 14px;
  cursor: pointer;
  &:first-child {
    padding-left: 0px;
  }
  &.xe-tabs-active {
    color: #409eff;
  }
  &.xe-tabs-disabled {
    color: #bbb;
  }
}
</style>
