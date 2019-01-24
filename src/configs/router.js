import Vue from 'vue'
// 引入路由模块
import VueRouter from 'vue-router'
// 显式安装该模块
Vue.use(VueRouter)

// 一层
// 首页路由
import App from '../App.vue'
// 详情页路由
// import Detail from '../pages/Detail.vue'
// 登录路由
// import Sign from '../pages/Sign.vue'


// 二层路由
// 首页路由 首页页面
import Xhome from '../pages/Xhome.vue'
// 名录路由 名录页页面
import Xdirectory from '../pages/Xdirectory.vue'

// 配置路由
const routes = [
    // 如果url的路由为 /foo，进入Foo组件
    {
        path: '/app',
        // 路由命名，方便跳转
        name: 'app',
        component: App,
        children: [
            {
                // 嵌套路由里面的path要删掉/
                path: 'xhome',
                name: 'xhome',
                component: Xhome,
                // 路由传参
                meta: {
                    skill: 'ps'
                }
            },
            {
                path: 'xdirectory',
                name: 'xdirectory',
                component: Xdirectory,
                // 路由传参
                meta: {
                    skill: 'js'
                }
            }
        ]
    },
    // {
    //     // 就是可以在:id里面接受一个不固定的值
    //     // 动态路由匹配
    //     path: '/detail/:id/:name',
    //     name: 'detail',
    //     component: Detail
    // },
    // {
    //     // 就是可以在:id里面接受一个不固定的值
    //     // 动态路由匹配
    //     path: '/sign',
    //     name: 'sign',
    //     component: Sign
    // },
    // 重定向路由，比如刚进页面的时候，默认跳转的路由位置
    {
        path: '/',
        redirect: {
            name: 'xhome'
        }
    }
]

// 实例该路由配置
const router = new VueRouter({
    // h5history路由模式
    // 有兼容性的问题
    // mode: 'history',
    // 建议用默认的哈希模式
    mode: 'hash',
    routes // (缩写) 相当于 routes: routes
})

export default router