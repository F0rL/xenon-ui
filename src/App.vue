<template>
  <div id="app">
    <div class="ex">
      <y-button>default</y-button>
      <y-button icon="settings">icon default</y-button>
      <y-button icon="settings" icon-position="right">icon right</y-button>
      <y-button :loading="true">loading default</y-button>
      <y-button icon="settings" :loading="isLoading" @click="toggle">click</y-button>
      <br>
      <y-button-group>
        <y-button icon="left">上一页</y-button>
        <y-button icon="right" icon-position="right">下一页</y-button>
      </y-button-group>
      <y-button-group>
        <y-button icon="left">上一页</y-button>
        <y-button>更多</y-button>
        <y-button icon="right" icon-position="right">下一页</y-button>
      </y-button-group>
      <y-button-group>
        <div>erro</div>
        <y-button icon="right" icon-position="right">下一页</y-button>
      </y-button-group>
    </div>
  </div>
</template>

<script>
import Button from './components/basic/button/button'
import ButtonGroup from './components/basic/button-group/button-group'

export default {
  name: 'app',
  data(){
    return {
      isLoading: true
    }
  },
  methods: {
    toggle(){
      this.isLoading = !this.isLoading
    }
  },
  components: {
    'y-button': Button,
    'y-button-group': ButtonGroup
  }
}
</script>

<style lang="scss">
  #app {
    max-width: 960px;
    margin: 50px auto;
  }
  .ex {
    border: 1px solid black;
    padding: 10px;
    margin: 10px;
  }
</style>
