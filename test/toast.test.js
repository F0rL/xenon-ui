const expect = chai.expect
import Vue from 'vue'
import Toast from '../packages/toast/toast.vue'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Toast', () => {
  it('存在.', () => {
    expect(Toast).to.exist
  })

  describe('props', function() {
    it('接受 autoClose', done => {
      let div = document.createElement('div')
      document.body.appendChild(div)
      const Constructor = Vue.extend(Toast)
      const vm = new Constructor({
        propsData: {
          autoClose: true,
          autoCloseDelay: 1
        }
      }).$mount(div)
      vm.$on('close', () => {
        expect(document.body.contains(vm.$el)).to.eq(false)
        done()
      })
    })
    it('接受 closeButton', () => {
      const callback = sinon.fake()
      const Constructor = Vue.extend(Toast)
      const vm = new Constructor({
        propsData: {
          closeButton: {
            text: '点击关闭',
            callback
          }
        }
      }).$mount()
      let closeButton = vm.$el.querySelector('.xe-close')
      expect(closeButton.textContent.trim()).to.eq('点击关闭')
      setTimeout(() => {
        closeButton.click()
        expect(callback).to.have.been.called
        done()
      }, 200)
    })
    it('接受 enableHtml', () => {
      const Constructor = Vue.extend(Toast)
      const vm = new Constructor({
        propsData: { enableHtml: true }
      })
      vm.$slots.default = ['<strong id="test">hi</strong>']
      vm.$mount()
      let strong = vm.$el.querySelector('#test')
      expect(strong).to.exist
    })
    it('接受 position', () => {
      const Constructor = Vue.extend(Toast)
      const vm = new Constructor({
        propsData: {
          position: 'bottom'
        }
      }).$mount()
      expect(vm.$el.classList.contains('position-bottom')).to.eq(true)
    })
    it('接受 type', () => {
      const Constructor = Vue.extend(Toast)
      const vm = new Constructor({
        propsData: {
          type: 'error'
        }
      }).$mount()
      let el = vm.$el.querySelector('.xe-toast-error')
      expect(el).to.exist
    })
  })
})
