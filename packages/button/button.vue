<template>
  <button
    class="xe-button"
    :class="[`xe-icon-${position}`, type ? `xe-button-${type}` : '']"
    @click="$emit('click')"
  >
    <xe-icon :name="icon" v-if="icon && !loading" class="xe-icon-main"></xe-icon>
    <xe-icon name="loading" v-show="loading" class="xe-icon-main xe-icon-loading"></xe-icon>
    <div class="xe-button-content">
      <slot></slot>
    </div>
  </button>
</template>

<script>
import xeIcon from '../icon'
export default {
  name: 'XeButton',
  data() {
    return {}
  },
  computed: {},
  props: {
    icon: String,
    position: {
      type: String,
      default: 'left',
      validator(value) {
        return value === 'right' || value === 'left'
      }
    },
    type: {
      type: String,
      default: 'default'
    },
    loading: {
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
@import '../color.scss';

.xe-button {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  font-size: 14px;
  height: 32px;
  line-height: 22px;
  padding: 0 12px;
  color: $main;
  background: #fff;
  border: 1px solid;
  border-radius: 4px;
  border-color: $border;
  user-select: none;
  position: relative;
  vertical-align: middle;
  cursor: pointer;
  &:hover {
    color: $primary;
    border-color: $primary;
  }
  &:focus {
    outline: none;
    border-color: $primary;
    color: $primary;
  }
  &.xe-icon-right {
    > .xe-icon-main {
      flex-shrink: 0;
      order: 2;
      margin-left: 0.1em;
    }
  }
  &.xe-icon-left {
    > .xe-icon-main {
      flex-shrink: 0;
      order: 1;
      margin-right: 0.1em;
    }
  }
  &.xe-button-normal {
    background: $normal;
    border-color: $normal;
    color: #fff;
  }
  &.xe-button-success {
    background: $success;
    border-color: $success;
    color: #fff;
  }
  &.xe-button-primary {
    color: #fff;
    background: $primary;
    border-color: $primary;
  }
  &.xe-button-warning {
    color: #fff;
    background: $warning;
    border-color: $warning;
  }
  &.xe-button-error {
    color: #fff;
    background: $error;
    border-color: $error;
  }
  &.xe-button-danger {
    color: #fff;
    background: $danger;
    border-color: $danger;
  }
  .xe-button-content {
    flex-shrink: 0;
  }
  .xe-icon-loading {
    animation: spin 2s linear infinite;
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
