<template>
  <div id="app">
    <y-button>按钮</y-button>
  </div>
</template>

<script>
import Button from './components/basic/button/button'



export default {
  name: 'app',
  components: {
    'y-button': Button,
  }
}
</script>

<style lang="scss">
  #app {
    max-width: 960px;
    margin: 50px auto;
  }
</style>
