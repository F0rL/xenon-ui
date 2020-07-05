import Collapse from './collapse.vue'
import CollapseItem from './collapse-item.vue'

Collapse.install = function(Vue) {
  Vue.component(Collapse.name, Collapse)
  Vue.component(CollapseItem.name, CollapseItem)
}

export default Collapse