// @手动测试文件，可删除
import Vue from 'vue'

// 插件引入
import Xenon from './src/index'
Vue.use(Xenon)

// 组件引入
// import { Row, Col } from './src/index'
// Vue.component(Row.name, Row)
// Vue.component(Col.name, Col)

const vue = new Vue({
  el: '#app',
  data: {
    iconLoading: false
  },
  mounted() {},
  methods: {
    showToast() {
      this.$toast('显示信息', {
        closeButton: {
          text: '点击关闭',
          callback() {
            console.log('用户点击关闭')
          }
        }
      })
    }
  }
})

// 单元测试
// import test from './test.simple'
// test()

// import Input from './packages/input'
// import chai from 'chai'
// const expect = chai.expect
// {
//   const Constructor = Vue.extend(Input)
//   const vm = new Constructor({
//     propsData: {
//       error: true
//     }
//   })
//   vm.$mount('#test')
//   const el = vm.$el.querySelector('.error-icon')
//   console.log(getComputedStyle(el).display)
//   expect(getComputedStyle(el).display).to.equal('block')
// }
