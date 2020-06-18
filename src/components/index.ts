export { default as Menu } from './menu/index.vue'
import { VueConstructor } from 'vue'

import SearchBox from './SearchBox.vue'

import MyPagination from './MyPagination.vue'

export const components = (Vue: VueConstructor) => {
  Vue.component('MyPagination', MyPagination)
  Vue.component('SearchBox', SearchBox)
}
