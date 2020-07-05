<template>
  <div class="xe-collapse-item">
    <div class="xe-collapse-title" @click="toggle">{{title}}</div>
    <div class="xe-collapse-content" v-if="open">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'xeCollapseItem',
  inject: ['eventBus'],
  data() {
    return {
      open: false
    }
  },
  props: {
    title: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  },
  mounted() {
    this.eventBus &&
      this.eventBus.$on('update:selected', names => {
        // console.log(selected, selected.includes(this.name))
        if (names.includes(this.name)) {
          this.open = true
        } else {
          this.open = false
        }
      })
  },
  methods: {
    toggle() {
      if (this.open) {
        this.eventBus && this.eventBus.$emit('update:removeSelected', this.name)
      } else {
        this.eventBus && this.eventBus.$emit('update:addSelected', this.name)
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import '../color.scss';
.xe-collapse-item {
  > .xe-collapse-title {
    border: 1px solid $collapseBorderColor;
    margin-top: -1px;
    margin-left: -1px;
    margin-right: -1px;
    min-height: 32px;
    display: flex;
    align-items: center;
    padding: 0 8px;
    background: lighten($collapseBorderColor, 8%);
    cursor: pointer;
  }
  &:first-child {
    > .xe-collapse-title {
      border-top-left-radius: $borderRadius;
      border-top-right-radius: $borderRadius;
    }
  }
  &:last-child {
    > .xe-collapse-title:last-child {
      border-bottom-left-radius: $borderRadius;
      border-bottom-right-radius: $borderRadius;
    }
  }
  > .xe-collapse-content {
    padding: 8px;
  }
}
</style>
