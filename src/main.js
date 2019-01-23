import Vue from 'vue'
import App from './App.vue'
// 引入jQuery库
import $ from 'jquery'

// 把库挂载到原型链
// Vue.prototype.$axios = axios
Vue.prototype.$ = $


Vue.config.productionTip = false

// 全局样式
import './styles/style.css'
import './styles/base.css'
import './styles/media-queries.css'

new Vue({
  render: h => h(App),
}).$mount('#app')
