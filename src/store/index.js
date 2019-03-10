import Vue from 'vue'
import Vuex from 'vuex'

import createPersistedState from 'vuex-persistedstate'
import profile from './modules/profile'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        profile: profile,
    },
    plugins: [createPersistedState()]
})

export default store