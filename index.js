// @手动测试文件，可删除
import Vue from 'vue'
import Xenon from './src/index'

Vue.use(Xenon)

const vue = new Vue({
  el: '#app',
  data: {
    iconLoading: false
  },
  methods: {}
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