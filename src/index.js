import Button from '../packages/button'

const components = [Button]

const install = Vue => {
  components.forEach(component => {
    component.install(Vue)
  })
}

export default { 
  install,
  Button
}
