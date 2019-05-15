<template>
  <div id="app">
<!--    <div class="ex">-->
<!--      <y-button>default</y-button>-->
<!--      <y-button icon="settings">icon default</y-button>-->
<!--      <y-button icon="settings" icon-position="right">icon right</y-button>-->
<!--      <y-button :loading="true">loading default</y-button>-->
<!--      <y-button icon="settings" :loading="isLoading" @click="toggle">click</y-button>-->
<!--      <br>-->
<!--      <y-button-group>-->
<!--        <y-button icon="left">上一页</y-button>-->
<!--        <y-button icon="right" icon-position="right">下一页</y-button>-->
<!--      </y-button-group>-->
<!--      <br>-->
<!--      <y-button-group>-->
<!--        <y-button icon="left">上一页</y-button>-->
<!--        <y-button>更多</y-button>-->
<!--        <y-button icon="right" icon-position="right">下一页</y-button>-->
<!--      </y-button-group>-->
<!--      <br>-->
<!--      <y-button-group>-->
<!--        <div>erro</div>-->
<!--        <y-button icon="right" icon-position="right">下一页</y-button>-->
<!--      </y-button-group>-->
<!--    </div>-->
<!--    <div class="ex">-->
<!--      <y-input value="默认"></y-input>-->
<!--      <y-input value="disabled" disabled></y-input>-->
<!--      <y-input value="readonly" readonly></y-input>-->
<!--      <y-input value="readonly" readonly></y-input>-->
<!--      <y-input value="error" error="姓名不能少于两个字"></y-input>-->
<!--      <br>-->
<!--      <y-input v-model="message"></y-input>-->
<!--      <span>{{message}}</span>-->
<!--    </div>-->
<!--    <div class="ex">-->
<!--      <y-row>-->
<!--        <y-col>8</y-col>-->
<!--        <y-col>8</y-col>-->
<!--        <y-col>8</y-col>-->
<!--      </y-row>-->
<!--      <y-row align="right">-->
<!--        <y-col span="6">6</y-col>-->
<!--        <y-col span="6">6</y-col>-->
<!--        <y-col span="6">6</y-col>-->
<!--      </y-row>-->
<!--      <y-row gutter="20">-->
<!--        <y-col span="12">12</y-col>-->
<!--        <y-col span="4">4</y-col>-->
<!--        <y-col span="8">8</y-col>-->
<!--      </y-row>-->
<!--      <y-row>-->
<!--        <y-col span="6">6</y-col>-->
<!--        <y-col span="6" offset="2">6</y-col>-->
<!--        <y-col span="6">6</y-col>-->
<!--        <y-col span="6">6</y-col>-->
<!--      </y-row>-->
<!--    </div>-->
<!--    <div class="ex">-->
<!--      <y-container style="height: 50vh;border: 1px solid #F1453D">-->
<!--        <y-header class="demo">header</y-header>-->
<!--        <y-main class="demo">main</y-main>-->
<!--        <y-footer class="demo">footer</y-footer>-->
<!--      </y-container>-->
<!--      <y-container style="height: 50vh;border: 1px solid #F1453D;margin-top: 10px">-->
<!--        <y-header class="demo">header</y-header>-->
<!--        <y-container>-->
<!--          <y-sider class="demo">sider</y-sider>-->
<!--          <y-main class="demo">main</y-main>-->
<!--        </y-container>-->
<!--        <y-footer class="demo">footer</y-footer>-->
<!--      </y-container>-->
<!--      <y-container style="height: 50vh;border: 1px solid #F1453D;margin-top: 10px">-->
<!--        <y-sider style="width: 20%;background-color: #999;">sider</y-sider>-->
<!--        <y-container>-->
<!--          <y-header class="demo">header</y-header>-->
<!--          <y-main class="demo">main</y-main>-->
<!--          <y-footer class="demo">footer</y-footer>-->
<!--        </y-container>-->
<!--      </y-container>-->
<!--    </div>-->
    <div class="ex">
      <button @click="showToast1">show toast top</button>
      <button @click="showToast2">show toast middle</button>
      <button @click="showToast3">show toast bottom</button>
    </div>
  </div>
</template>

<script>
// import Button from './components/basic/button/button'
// import ButtonGroup from './components/basic/button-group/button-group'
// import Input from './components/form/input/input'
// import Row from './components/layout/grid/row'
// import Col from './components/layout/grid/col'
// import Container from './components/layout/container/container'
// import Header from './components/layout/container/header'
// import Main from './components/layout/container/main'
// import Sider from './components/layout/container/sider'
// import Footer from './components/layout/container/footer'
import plugin from './components/other/toast/plugin'
//import Toast from './components/other/toast/toast'
import Vue from 'vue'
Vue.use(plugin)

export default {
  name: 'app',
  data(){
    return {
      isLoading: true,
      message: '双向绑定'
    }
  },
  mounted() {

  },
  methods: {
    toggle(){
      this.isLoading = !this.isLoading
    },
    showToast(position){
      this.$toast('当前功能不稳定',{
        text: '点击关闭',
        enableHtml: false,
        autoClose: false,
        autoCloseDelay: 3,
        position,
        callback() {
          //console.log('知道了')
        },
      })
    },
    showToast1() {
      this.showToast('top')
    },
    showToast2() {
      this.showToast('middle')
    },
    showToast3() {
      this.showToast('bottom')
    },
  },
  components: {
    // 'y-button': Button,
    // 'y-button-group': ButtonGroup,
    // 'y-input': Input,
    // 'y-row': Row,
    // 'y-col': Col,
    // 'y-container': Container,
    // 'y-header': Header,
    // 'y-main': Main,
    // 'y-sider': Sider,
    // 'y-footer': Footer,
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
  .demo {
    min-height: 100px;
    border: 1px solid #ccc;
  }
</style>
