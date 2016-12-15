

// 这里面负责写路由映射，便于管理


// 引入路由模块并使用它
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)



// 创建路由实例并配置路由映射  
// path:'*',redirect:'/home'  重定向到path是/home的映射
const router = new VueRouter({
  routes:[{
  	path: '/home', component: require('../components/Home.vue')
  },{
  	path: '/about', component: require('../components/About.vue')
  },{
  	path:'*',redirect:'/home'
  }]
})


// 输出router
export default router;

