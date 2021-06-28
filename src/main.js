import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import global from './utils/global'
import 'element-ui/lib/theme-chalk/index.css';
import "./style/index.scss"
import {auth} from './api'
/* 
import {getStore} from './utils' */
Vue.config.productionTip = false
/* 前置全局守卫  */
router.beforeEach((to,form,next)=>{
	console.log('qianzhi',to);
	if(to.meta.auth){
	auth().then(res=>{
		console.log('全局路由的',res);
		to.query.id = res.model.userId
	if(res.state == 1){	
			next()
		}else{
			next({path:'/login'})
		}
      })
	}else{
		next()
	}
})
Vue.use(global)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
