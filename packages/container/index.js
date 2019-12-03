import Container from './Container.vue'
import Header from './Header.vue'
import Content from './Content.vue'
import Footer from './Footer.vue'
import Sider from './Sider.vue'

/* istanbul ignore next */
Container.install = function(Vue) {
  Vue.component(Container.name, Container)
  Vue.component(Header.name, Header)
  Vue.component(Content.name, Content)
  Vue.component(Footer.name, Footer)
  Vue.component(Sider.name, Sider)
}

export default Container