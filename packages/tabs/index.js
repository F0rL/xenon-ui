import Tabs from './tabs.vue'
import TabsBody from './tabs-body.vue'
import TabsHead from './tabs-head.vue'
import TabsItem from './tabs-item.vue'
import TabsPane from './tabs-pane.vue'

Tabs.install = (Vue) => {
  Vue.component(Tabs.name, Tabs)
  Vue.component(TabsBody.name, TabsBody)
  Vue.component(TabsHead.name, TabsHead)
  Vue.component(TabsItem.name, TabsItem)
  Vue.component(TabsPane.name, TabsPane)
}

export default Tabs