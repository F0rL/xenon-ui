<template>
  <div class="y-wrapper" :class="{'y-error': error}">
    <input type="text" :value="value" :disabled="disabled" :readonly="readonly"
     @change="$emit('change', $event.target.value)"
     @input="$emit('input', $event.target.value)"
     @focus="$emit('focus', $event.target.value)"
     @blur="$emit('blur', $event.target.value)"
    >
    <template v-if="error">
      <y-icon name="error" class="icon-error"></y-icon>
      <span class="errorMessage">{{error}}</span>
    </template>
  </div>
</template>

<script>
  import Icon from '../../basic/icon/icon'
  export default {
    name: "yInput",
    props: {
      value: {
        type: String
      },
      disabled: {
        type: Boolean,
        default: false
      },
      readonly: {
        type: Boolean,
        default: false
      },
      error: {
        type: String
      }
    },
    components: {
      'y-icon': Icon
    }
  }
</script>

<style lang="scss" scoped>
  .y-wrapper {
    display: inline-flex;
    align-items: center;
    font-size: 12px;
    > :not(:last-child) {
      margin-right: .3em;
    }
    > input {
      height: 32px;
      border: 1px solid #999;
      border-radius: 4px;
      padding: 0 8px;
      font-size: inherit;
      &:hover {
        border-color: #666;
      }
      &:focus {
        box-shadow: inset 0 1px 4px rgba(0, 0, 0, 0.5);
        outline: none;
      }
    }
    &.y-error > input {
      border-color: #F1453D;
    }
    .icon-error {
      fill: #F1453D;
    }
    .errorMessage {
      color: #F1453D;
    }
  }
</style>
