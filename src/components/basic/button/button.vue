<template>
  <button class="x-button">
    <slot></slot>
  </button>
</template>

<script>
  export default {
    name: "yButton"
  }
</script>

<style scoped lang="scss">
  .x-button {
    font-size: 14px;
    height: 32px;
    padding: 0 1em;
    border-radius: 4px;
    border: 1px solid #999;
    background: #fff;
    &:hover {
      border-color: #666;
    }
    &:active {
      background-color: #eee;
    }
    &:focus {
      outline: none;
    }
  }
</style>
