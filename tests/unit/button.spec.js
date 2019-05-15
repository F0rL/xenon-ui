import { expect } from 'chai'
// import Vue from 'vue'
// import { shallowMount } from '@vue/test-utils'
import Toast from '@/components/other/toast/toast'

describe('Toast.vue', () => {
  it('has a props hook', () => {
    expect(typeof Toast.props).toBe('function')
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
