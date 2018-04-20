// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import conponents from '@/pages/components.js'
import rem  from '@/common/rem.js'
rem(document,window)
Vue.config.productionTip = false
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
