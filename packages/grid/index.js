import Row from './row.vue'
import Col from './col.vue'

const Grid = {}
/* istanbul ignore next */
Grid.install = function(Vue) {
  Vue.component(Row.name, Row)
  Vue.component(Col.name, Col)
}

export { Grid, Row, Col }
