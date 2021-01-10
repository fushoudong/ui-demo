import Vue from 'vue'
import App from './App'
import router from './router'
// import ElementUI from 'element-ui';
let WrCompUi = require('wr-comp-ui')
// import 'element-ui/lib/theme-chalk/index.css';
Vue.config.productionTip = false
// Vue.use(ElementUI);
Vue.use(WrCompUi.default)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
