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
      <br>
      <y-button-group>
        <y-button icon="left">上一页</y-button>
        <y-button>更多</y-button>
        <y-button icon="right" icon-position="right">下一页</y-button>
      </y-button-group>
      <br>
      <y-button-group>
        <div>erro</div>
        <y-button icon="right" icon-position="right">下一页</y-button>
      </y-button-group>
    </div>
    <div class="ex">
      <y-input value="默认"></y-input>
      <y-input value="disabled" disabled></y-input>
      <y-input value="readonly" readonly></y-input>
      <y-input value="readonly" readonly></y-input>
      <y-input value="error" error="姓名不能少于两个字"></y-input>
      <br>
      <y-input v-model="message"></y-input>
      <span>{{message}}</span>
    </div>
    <div class="ex">
      <y-row>
        <y-col>8</y-col>
        <y-col>8</y-col>
        <y-col>8</y-col>
      </y-row>
      <y-row align="right">
        <y-col span="6">6</y-col>
        <y-col span="6">6</y-col>
        <y-col span="6">6</y-col>
      </y-row>
      <y-row gutter="20">
        <y-col span="12">12</y-col>
        <y-col span="4">4</y-col>
        <y-col span="8">8</y-col>
      </y-row>
      <y-row>
        <y-col span="6">6</y-col>
        <y-col span="6" offset="2">6</y-col>
        <y-col span="6">6</y-col>
        <y-col span="6">6</y-col>
      </y-row>
    </div>
  </div>
</template>

<script>
import Button from './components/basic/button/button'
import ButtonGroup from './components/basic/button-group/button-group'
import Input from './components/form/input/input'
import Row from './components/layout/grid/row'
import Col from './components/layout/grid/col'

export default {
  name: 'app',
  data(){
    return {
      isLoading: true,
      message: '双向绑定'
    }
  },
  methods: {
    toggle(){
      this.isLoading = !this.isLoading
    }
  },
  components: {
    'y-button': Button,
    'y-button-group': ButtonGroup,
    'y-input': Input,
    'y-row': Row,
    'y-col': Col,
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
