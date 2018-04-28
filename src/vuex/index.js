/**
 * Created by zhuzhiyang aon 2016/12/29
 */

import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    state,
    mutations,
    actions,
})
