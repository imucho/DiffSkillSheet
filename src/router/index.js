import Vue from 'vue'
import VueRouter from 'vue-router'
import Register from '../components/Register'
import Viewer from '../components/Viewer'

Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        { path: '/', component: Register },
        { path: '/viewer', component: Viewer },
    ]
})

export default router