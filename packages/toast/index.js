import Toast from './toast.vue'

const ToastPlugin = {
  install(Vue, options) {
    Vue.prototype.$toast = function(message, toastOptions) {
      let Constructor = Vue.extend(Toast)
      let toast = new Constructor({
        propsData: {
          closeButton: toastOptions.closeButton
        }
      })
      toast.$slots.default = message
      toast.$mount()
      const testNode = document.querySelector('#test')
      testNode.appendChild(toast.$el)
    }
  }
}

export default ToastPlugin