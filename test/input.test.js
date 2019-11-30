const expect = chai.expect
import Vue from 'vue'
import Input from '../packages/input'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Input', () => {
  it('存在.', () => {
    expect(Input).to.be.ok
  })
  describe('验证props', () => {
    const Constructor = Vue.extend(Input)
    let vm
    afterEach(() => {
      vm.$destroy()
    })
    it('设置icon.', () => {
      vm = new Constructor({
        propsData: {
          icon: 'settings'
        }
      }).$mount()
      const useElement = vm.$el.querySelector('use')
      expect(useElement.getAttribute('xlink:href')).to.equal('#xe-settings')
    })
    it('接收value', () => {
      vm = new Constructor({
        propsData: {
          value: '1234'
        }
      }).$mount()
      const inputElement = vm.$el.querySelector('input')
      expect(inputElement.value).to.equal('1234')
    })
    it('接收placeholder', () => {
      vm = new Constructor({
        propsData: {
          placeholder: '请输入'
        }
      }).$mount()
      const placeholderElement = vm.$el.querySelector('label')
      expect(placeholderElement.innerText).to.equal('请输入')
    })
    it('接收 disabled', () => {
      vm = new Constructor({
        propsData: {
          disabled: true
        }
      }).$mount()
      const inputElement = vm.$el.querySelector('input')
      expect(inputElement.disabled).to.equal(true)
    })
    it('接收 error', () => {
      vm = new Constructor({
        propsData: {
          error: true
        }
      })
      vm.$mount()
      const useElement = vm.$el.querySelector('use')
      expect(useElement.getAttribute('xlink:href')).to.equal('#xe-error')
    })
  })
  describe('事件', () => {
    const Constructor = Vue.extend(Input)
    let vm
    afterEach(() => {
      vm.$destroy()
    })
    it('支持 change/input/focus/blur 事件', () => {
      ['change','input','focus','blur'].forEach((eventName) => {
        vm = new Constructor({}).$mount()
        const callback = sinon.spy()
        vm.$on(eventName, callback)
        let event = new Event(eventName)
        Object.defineProperty(event, 'target', {
          value: {
            value: 'hi',
            enumerable: true
          }
        })
        let inputElement = vm.$el.querySelector('input')
        inputElement.dispatchEvent(event)
        expect(callback).to.have.been.called
        // 传递的是事件,以下测试不生效
        // expect(callback).to.have.been.calledWith('hi')
      })
    })
  })
})
