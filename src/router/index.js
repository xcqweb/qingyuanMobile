import Vue from 'vue'
import Router from 'vue-router'
let Login = () => import ('@/pages/login/login')
let Goldenweek = () => import ('@/pages/reports/golgenWeek')
let App = () => import ('@/App')
let Tourist = () => import ('@/pages/tables/tourist')
let Commdation = () => import ('@/pages/tables/commdation')
let Science = () => import ('@/pages/tables/science')
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
		    },
		    {
		      path:'tourist',
		      component:Tourist,
		      name:'tourist'
		    },
		    {
		      path:'commdation',
		      component:Commdation,
		      name:'commdation'
		    },
		    {
		      path:'science',
		      component:Science,
		      name:'science'
		    }
      ]
    },
     
  ]
})
