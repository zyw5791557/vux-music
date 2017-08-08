// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
import routes from './router/index'

// vuex
import Vuex from 'vuex'

Vue.use(Vuex)

Vue.use(VueRouter)

const store = new Vuex.Store({

})

const router = new VueRouter({
    mode: 'history',
    routes
})
// 重点，给VueRoute添加一个goBack方法，用于记录路由的前进后退状态 this.isBack = true 
VueRouter.prototype.goBack = function () { 
　　this.isBack = true
　　window.history.go(-1)
}

FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    router,
    render: h => h(App)
}).$mount('#app-box')
