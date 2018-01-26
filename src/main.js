// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import { 
	Row,
	Col,
	Container,
  Header,
  Main,
  Footer,
  Checkbox,
  CheckboxGroup
} from 'element-ui'
import App from './App'
import router from './router'

Vue.use(Row)
Vue.use(Col)
Vue.use(Container)
Vue.use(Header)
Vue.use(Main)
Vue.use(Footer)
Vue.use(Checkbox)
Vue.use(CheckboxGroup)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
