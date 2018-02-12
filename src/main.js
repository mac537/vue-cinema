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
  CheckboxGroup,
  Card
} from 'element-ui'
import App from './App'
import router from './router'
import store from './store/store.js'

import moment from 'moment-timezone'
moment.tz.setDefault("CET");
//Object.defineProperty(Vue.prototype, '$moment', { get(){ return this.$root.moment } })
Object.defineProperty(Vue.prototype, '$moment', { value: moment });



//import axios from 'axios'

//axios.defaults.baseURL = 'http://www.omdbapi.com/?apikey=bbe40115'

Vue.use(Row)
Vue.use(Col)
Vue.use(Container)
Vue.use(Header)
Vue.use(Main)
Vue.use(Footer)
Vue.use(Checkbox)
Vue.use(CheckboxGroup)
Vue.use(Card)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  moment,
  components: { App },
  template: '<App/>'
})
