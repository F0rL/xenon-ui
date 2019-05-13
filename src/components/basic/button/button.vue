<template>
  <button class="y-button" :class="{[`icon-${iconPosition}`] : true}" @click="$emit('click')">
    <y-icon class="y-icon" v-if="icon && !loading" :name="icon"></y-icon>
    <y-icon class="y-icon loading" v-if="loading" name="loading"></y-icon>
    <div class="y-content">
      <slot></slot>
    </div>
  </button>
</template>

<script>
  import Icon from  '../icon/icon'

  export default {
    name: "yButton",
    props: {
      icon: {
        type: String
      },
      loading: {
        type: Boolean,
        default: false
      },
      iconPosition: {
        type: String,
        default: 'left',
      }
    },
    methods: {

    },
    components: {
      'y-icon': Icon
    }
  }
</script>

<style scoped lang="scss">
  @keyframes spin {
    0% {transform: rotate(0deg);}
    100% {transform: rotate(360deg)}
  }
  .y-button {
    font-size: 14px;
    height: 32px;
    padding: 0 1em;
    border-radius: 4px;
    border: 1px solid #999;
    background: #fff;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    vertical-align: middle;
    &:hover {
      border-color: #666;
    }
    &:active {
      background-color: #eee;
    }
    &:focus {
      outline: none;
    }
    > .y-icon {
      order: 1;
      margin-right: .3em;
    }
    > .y-content {
      order: 2;
    }
    &.icon-right {
      > .y-icon {
        order: 2;
        margin-right: 0;
        margin-left: .3em;
      }
      > .y-content {
        order: 1;
      }
    }
    .loading {
      animation: spin 2s infinite linear;
    }
  }
</style>
