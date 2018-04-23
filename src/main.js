// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import conponents from '@/pages/components.js'
import rem  from '@/common/rem.js'
import instance from '@/http'

Vue.prototype.$axios = instance; 


Vue.config.productionTip = false
Vue.config.devtools = true

window.API_URL = 'http://120.55.190.57'
rem(document,window)
Vue.config.productionTip = false
//ȫ�ֻ�������
Vue.mixin({
	components:{
		...conponents
	}
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
