import Vue from 'vue'
import Xenon from './src/index'

Vue.use(Xenon)

const vue = new Vue({
  el: '#app',
  data: {
    iconLoading: false
  },
  methods: {
  }
})
