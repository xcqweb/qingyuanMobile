import Vue from 'vue'
import Router from 'vue-router'
//import Login from '@/pages/login/login'
let Login = () => import ('@/pages/login/login')
let Goldenweek = () => import ('@/pages/reports/golgenWeek')
let App = () => import ('@/App')
//import Goldenweek from '@/pages/reports/golgenWeek'
//import App from '@/App'
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
		    },
		    {
		      path:'golden',
		      component:Goldenweek,
		      name:'golden'
		    }
      ]
    },
     
  ]
})
