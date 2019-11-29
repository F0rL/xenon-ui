import Button from '../packages/button'
import ButtonGroup from '../packages/button-group'

const components = [Button, ButtonGroup]

const install = Vue => {
  components.forEach(component => {
    component.install(Vue)
  })
}

export default { 
  install,
  Button,
  ButtonGroup
}
