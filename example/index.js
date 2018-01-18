import Vue from 'vue'
import Vuex from 'vuex'


import App from './App.vue'
import router from './router';
import CsVue from '../src/index'

Vue.use(Vuex)
Vue.use(CsVue)

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})