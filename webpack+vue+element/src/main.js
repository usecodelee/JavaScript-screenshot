// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import all from '../node_modules/js_screen_shots'

window.html2canvas = all.html2canvas;
window.Canvas2Image = all.Canvas2Image;


import ElementUI from '../node_modules/element-ui'

　　
import '../node_modules/element-ui/lib/theme-chalk/index.css'

　　
Vue.use(ElementUI)



Vue.config.productionTip = false
    /* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})