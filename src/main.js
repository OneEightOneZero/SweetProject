import Vue from 'vue'
// 引入ajax库
import axios from 'axios'
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
Vue.prototype.$axios = axios
Vue.prototype.$ = $

Vue.config.productionTip = false

// Root容器
new Vue({
  el:"#app",
  // 挂载路由
  router,
  render: h => h('router-view'),
})
// .$mount('#lemon')
