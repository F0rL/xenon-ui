import Vue from 'vue'
import chai from 'chai'
import spies from 'chai-spies' // 监听事件

chai.use(spies)

const expect = chai.expect

import Button from './packages/button'

function test() {
  {
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
      propsData: {
        icon: 'setting'
      }
    })
    vm.$mount()
    let useEl = vm.$el.querySelector('use')
    expect(useEl.getAttribute('xlink:href')).to.eq('#xe-setting')
    vm.$el.remove()
    vm.$destroy()
  }
  {
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
      propsData: {
        icon: 'setting',
        loading: true
      }
    })
    vm.$mount()
    let useEl = vm.$el.querySelector('use')
    let href = useEl.getAttribute('xlink:href')
    expect(href).to.eq('#xe-loading')
    vm.$el.remove()
    vm.$destroy()
  }
  {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
      propsData: {
        icon: 'setting',
        loading: true
      }
    })
    vm.$mount(div)
    let span = vm.$el.querySelector('span')
    let { order } = window.getComputedStyle(span)
    expect(order).to.eq('1')
    vm.$el.remove()
    vm.$destroy()
  }
  {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
      propsData: {
        icon: 'setting',
        position: 'right'
      }
    })
    vm.$mount(div)
    let span = vm.$el.querySelector('span')
    let { order } = window.getComputedStyle(span)
    expect(order).to.eq('2')
    vm.$el.remove()
    vm.$destroy()
  }
  {
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
      propsData: {
        icon: 'setting',
        position: 'right'
      }
    })
    vm.$mount()
    const spy = chai.spy(function() {
      console.log(1)
    })
    // 监听组件click事件
    vm.$on('click', spy)
    let button = vm.$el
    // 触发节点click事件
    button.click()
    // 监听回调函数
    expect(spy).to.have.been.called()
    vm.$el.remove()
    vm.$destroy()
  }
}

// 引入执行
export default test
