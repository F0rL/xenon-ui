const expect = chai.expect
import Vue from 'vue'
import Tabs from '../packages/tabs'
Vue.use(Tabs)

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Toast', () => {
  it('存在', () => {
    expect(Tabs).to.exist
  })

  it('接受 selected 属性', done => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML = `
      <xe-tabs selected="finance">
        <xe-tabs-head>
          <xe-tabs-item name="woman">美女</xe-tabs-item>
          <xe-tabs-item name="finance">财经</xe-tabs-item>
          <xe-tabs-item name="sports">体育</xe-tabs-item>
        </xe-tabs-head>
        <xe-tabs-body>
          <xe-tabs-pane name="woman">美女相关资讯</xe-tabs-pane>
          <xe-tabs-pane name="finance">财经相关资讯</xe-tabs-pane>
          <xe-tabs-pane name="sports">体育相关资讯</xe-tabs-pane>
        </xe-tabs-body>
      </xe-tabs>
    `
    let vm = new Vue({
      el: div
    })
    vm.$nextTick(() => {
      let x = vm.$el.querySelector(`.xe-tabs-item[data-name="finance"]`)
      expect(x.classList.contains('xe-tabs-active')).to.be.true
      done()
    })
  })
  it('可以接受 direction prop', () => {})
})
