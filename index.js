// @手动测试文件，可删除
import Vue from 'vue'
import Xenon from './src/index'

Vue.use(Xenon)

// import test from './test.simple'
// test()

const vue = new Vue({
  el: '#app',
  data: {
    iconLoading: false
  },
  methods: {}
})
