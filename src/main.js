import Vue from 'vue'
import App from './App.vue'
// 引入jQuery库
import $ from 'jquery'
// 引入路由模块
import router from './configs/router.js'


// 全局样式
import './styles/style.css'
import './styles/base.css'
import './styles/content.css'
import './styles/media-queries.css'

// 把库挂载到原型链
// Vue.prototype.$axios = axios
Vue.prototype.$ = $

Vue.config.productionTip = false


new Vue({
  el:"#lemon",
  // 挂载路由
  router,
  render: h => h(App),
})
// .$mount('#lemon')
