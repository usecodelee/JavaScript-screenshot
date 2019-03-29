import Vue from 'vue'
import Router from 'vue-router'
import html2img from '@/components/html2img'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'html2img',
        component: html2img
    }]
})