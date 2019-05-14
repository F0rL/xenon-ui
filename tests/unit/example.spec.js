import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Button from '@/components/basic/button/button'

describe('Button.vue', () => {
  it('存在', () => {
    expect(Button).to.be.ok
  })
  // it('可以设置icon', () => {
  //   const msg = 'settings'
  //   const vm = shallowMount(Button, {
  //     icon: { msg }
  //   })
  //   const useElement = vm.$el.querySelector('use')
  //   console.log(useElement)
    //expect(useElement.getAttribute('xlink:href')).to.equal('#i-settings')
  // })
})
