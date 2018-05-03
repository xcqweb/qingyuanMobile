import Vue from 'vue'
import Router from 'vue-router'
let Login = () => import ('@/pages/login/login')
let Goldenweek = () => import ('@/pages/reports/golgenWeek')
let App = () => import ('@/App')
let Tourist = () => import ('@/pages/tables/tourist')
let Commdation = () => import ('@/pages/tables/commdation')
let Science = () => import ('@/pages/tables/science')
let Areas = () => import ('@/pages/tables/areas')
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
		      name:'login'
		    },
		    {
		      path:'',
		      component:Goldenweek,
		      name:'index',
		      meta:{requireAuth:true}
		    },
		    {
		      path:'golden',
		      component:Goldenweek,
		      name:'golden',
		      meta:{requireAuth:true}
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
		      meta:{requireAuth:true}
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