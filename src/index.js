import Icon from '../packages/icon'
import Button from '../packages/button'
import ButtonGroup from '../packages/button-group'
import Input from '../packages/input'
import { Grid, Row, Col } from '../packages/grid'
import Container from '../packages/container'
import Toast from '../packages/toast'
import Tabs from '../packages/tabs'

const components = [Icon, Button, ButtonGroup, Input, Grid, Container, Toast, Tabs]

const install = Vue => {
  components.forEach(component => {
    component.install(Vue)
  })
}

export default {
  install
}

export { Icon, Button, ButtonGroup, Input, Row, Col, Toast }
