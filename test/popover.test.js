const expect = chai.expect
import Vue from 'vue'
import Popover from '../packages/popover/popover.vue'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Popover', () => {
  it('存在.', () => {
    expect(Popover).to.exist
  })

  it('可以设置position.', done => {
    Vue.component('xe-popover', Popover)
    const div = document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML = `
    <xe-popover position="bottom" ref="a">
      <template slot="content">
      弹出内容
      </template>
      <button>点我</button>
    </xe-popover>
    `
    const vm = new Vue({
      el: div
    })
    vm.$el.querySelector('button').click()
    vm.$nextTick(() => {
      const { xeContentWrapper } = vm.$refs.a.$refs
      expect(xeContentWrapper.classList.contains('position-bottom')).to.be.true
      done()
    })
  })
})
