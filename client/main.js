import Vue from 'vue'
import App from './App'

import basics from './pages/basics/home.vue'
Vue.component('basics', basics)

import components from './pages/component/home.vue'
Vue.component('components', components)

import plugin from './pages/plugin/home.vue'
Vue.component('plugin', plugin)

import tabpage from './pages/home/home.vue'
Vue.component('v-tabpage', tabpage)

import home from './pages/home/home.vue'
Vue.component('v-home', home)

import write from './pages/write/write.vue'
Vue.component('v-write', write)

import task from './pages/task/task.vue'
Vue.component('v-task', task)

import more from './pages/more/more.vue'
Vue.component('v-more', more)

import mine from './pages/mine/mine.vue'
Vue.component('v-mine', mine)

import cuCustom from './colorui/components/cu-custom.vue'
Vue.component('cu-custom', cuCustom)

App.mpType = 'app'

const app = new Vue({
	...App
})

app.$mount()
