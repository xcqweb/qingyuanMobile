// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import conponents from '@/pages/components.js'
import rem  from '@/common/rem.js'

import store from '@/vuex/index'
import instance from '@/http'
import FastClick from 'fastclick'


window.API_URLS = 'http://120.55.190.57/qylym/cs/#/login'
//window.API_URLS = 'http://localhost:8080/#/login' 

window.onload = function(){
	FastClick.attach(document.body);
}

if(window.sessionStorage.getItem('users')){
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
