import Vue from 'vue'
import Vuex from 'vuex'

import createPersistedState from 'vuex-persistedstate'
import profile from './modules/profile'
import skill from './modules/skill'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        profile: profile,
        skill: skill
    },
    plugins: [createPersistedState()]
})

export default store