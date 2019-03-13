import Vue from 'vue'
import Buefy from 'buefy'
import App from './components/App'
import store from './store'
import router from './router'

import 'buefy/dist/buefy.css'

Vue.use(Buefy)

new Vue({
    el: '#app',
    store,
    router,
    render: h => h(App)
})