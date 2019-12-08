const ToastPlugin = {
  install(Vue , options) {
    Vue.prototype.$toast = function() {
      console.log('toast')
    }
  }
}

export default ToastPlugin