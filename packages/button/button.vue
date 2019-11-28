<template>
  <button class="xe-button">按钮</button>
</template>

<script>
export default {
  name: 'XeButton',
  data() {
    return {}
  }
}
</script>

<style scoped lang="scss">
@import '../color.scss';
.xe-button {
  cursor: pointer;
  font-size: 14px;
  height: 32px;
  line-height: 22px;
  padding: 0 1em;
  color: $main;
  background: #fff;
  border: 1px solid;
  border-radius: 4px;
  border-color: $border;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  position: relative;
  &:hover {
    color: $p;
    border-color: $p;
  }
  &:focus {
    outline: none;
    border-color: $p;
    color: $p;
  }
}
</style>
