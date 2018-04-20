import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/login/login'
import App from '@/App'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      component:App,
      name:'home',
      children:[
      	{
		      path:'login',
		      component:Login,
		      name:'login'
		    }
      ]
    },
     
  ]
})
