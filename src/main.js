import Vue from 'vue'
import store from './store'
import router from './router'
// import Filter from './filter'
import Components from './components'
// import $ from '@/utils'

import FastClick from 'fastclick'

FastClick.attach(document.body)
// Filter(Vue)
Components(Vue)

new Vue({router, store}).$mount('#app')
