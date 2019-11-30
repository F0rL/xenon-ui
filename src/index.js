import Icon from '../packages/icon'
import Button from '../packages/button'
import ButtonGroup from '../packages/button-group'

const components = [Icon, Button, ButtonGroup]

const install = Vue => {
  components.forEach(component => {
    component.install(Vue)
  })
}

export default { 
  install,
  Icon,
  Button,
  ButtonGroup
}
