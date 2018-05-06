import Vue from 'vue'
import Router from 'vue-router'
let Login = () => import ('@/pages/login/login')
let Goldenweek = () => import ('@/pages/reports/golgenWeek')
let App = () => import ('@/App')
let Tourist = () => import ('@/pages/tables/tourist')
let Commdation = () => import ('@/pages/tables/commdation')
let Science = () => import ('@/pages/tables/science')
let Areas = () => import ('@/pages/tables/areas')

let AreasDetial = () => import ('@/pages/skim/skimDetial/areas')
let TouristDetial = () => import ('@/pages/skim/skimDetial/tourist')
let CommdationDetial = () => import ('@/pages/skim/skimDetial/commdation')
let ScienceDetial = () => import ('@/pages/skim/skimDetial/science')
Vue.use(Router)

const router = new Router({
	mode:'hash',
  routes: [
    {
      path:'/',
      component:App,
      children:[
      	{
		      path:'login',
		      component:Login,
		      name:'login',
		      meta:{keepAlive:true}
		    },
		    {
		      path:'',
		      component:Goldenweek,
		      name:'index',
		    },
		    {
		      path:'golden',
		      component:Goldenweek,
		      name:'golden',
		    },
		    {
		      path:'tourist',
		      component:Tourist,
		      name:'tourist',
		      meta:{requireAuth:true}
		    },
		    {
		      path:'commdation',
		      component:Commdation,
		      name:'commdation',
		      meta:{requireAuth:true}
		    },
		    {
		      path:'science',
		      component:Science,
		      name:'science',
		      meta:{requireAuth:true}
		    },{
		      path:'areas',
		      component:Areas,
		      name:'areas',
		      meta:{requireAuth:true},
		    },
		    {
	      		path:'areaDetial',
	      		name:'areaDetial',
	      		component:AreasDetial
		    },
		    {
	      		path:'touristDetial',
	      		name:'touristDetial',
	      		component:TouristDetial,
		    },
		    {
	      		path:'commdationDetial',
	      		name:'commdationDetial',
	      		component:CommdationDetial
		    },
		    {
	      		path:'scienceDetial',
	      		name:'scienceDetial',
	      		component:ScienceDetial
		    }
      ]
    },
  ],
  
})


		//注册全局钩子用来拦截导航
   router.beforeEach((to, from, next) => {
		//获取store里面的token
     let token = window.localStorage.getItem('token');
			//判断要去的路由有没有requiresAuth
     if(to.meta.requiresAuth){
     	
       if(token){
         next();
       }else{
         next({
           path: '/login',
            query: {redirect: to.fullPath}   //将跳转的路由path作为参数，登录成功后跳转到该路由
         });
       }
     }else{
       next();//如果无需token,那么随它去吧
     }
   });
   
export default router