// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import conponents from '@/pages/components.js'
import rem  from '@/common/rem.js'
import instance from '@/http'
import store from '@/vuex/index'
import FastClick from 'fastclick'

var config = require('../config')  
// 判断开发环境  
// if(process.env.NODE_ENV!='production'){
//     console.log(process.env.NODE_ENV);
// };

window.API_URLS = process.env.NODE_ENV !== 'production' ? 'http://localhost:8080/#/login' : 'http://120.55.190.57/qylym/#/login'

window.onload = function(){
	FastClick.attach(document.body);
}

if(window.localStorage.getItem('users')){
	router.replace('login');
}


Vue.prototype.$axios = instance; 
window.axios = instance
Vue.config.productionTip = false
Vue.config.devtools = true

window.API_URL = 'http://120.55.190.57:8080'
rem(document,window)
Vue.config.productionTip = true
Vue.config.devtools = true

Vue.mixin({
	components:{
		...conponents
	}
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
