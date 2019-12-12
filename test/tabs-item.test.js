const expect = chai.expect
import Vue from 'vue'
import TabsItem from '../packages/tabs/tabs-item.vue'
import Tabs from '../packages/tabs'
Vue.use(Tabs)

Vue.config.productionTip = false
Vue.config.devtools = false

describe('TabsItem', () => {
  it('存在', () => {
    expect(Tabs).to.exist
  })
  it('接受 name 属性', () => {
    const Constructor = Vue.extend(TabsItem)
    const vm = new Constructor({
      propsData: {
        name: 'xxx'
      }
    }).$mount()
    expect(vm.$el.getAttribute('data-name')).eq('xxx')
  })
  it('接受 disabled 属性', () => {
    const Constructor = Vue.extend(TabsItem)
    const vm = new Constructor({
      propsData: {
        disabled: true
      }
    }).$mount()
    expect(vm.$el.classList.contains('xe-tabs-disabled')).to.be.true
    const callback = sinon.fake()
    vm.$on('click', callback)
    vm.$el.click()
    expect(callback).to.have.not.been.called
  })
})
