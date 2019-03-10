import { REGISTER_NAME, REGISTER_COMPANY, REGISTER_JOB } from '../mutation-types'

const profile = {
    namespaced: true,
    state: {
        name: '',
        company: '',
        job: ''
    },
    mutations: {
        [REGISTER_NAME] (state, payload) {
            state.name = payload.data.name
        },
        [REGISTER_COMPANY] (state, payload) {
            state.company = payload.data.company
        },
        [REGISTER_JOB] (state, payload) {
            state.job = payload.data.job
        }
    },
    actions: {
        [REGISTER_NAME] ({commit, state}, newValue) {
            commit(REGISTER_NAME, {data: {...state, name: newValue}})
        },
        [REGISTER_COMPANY] ({commit, state}, newValue) {
            commit(REGISTER_COMPANY, {data: {...state, company: newValue}})
        },
        [REGISTER_JOB] ({commit, state}, newValue) {
            commit(REGISTER_JOB, {data: {...state, job: newValue}})
        }
    },
    getters: {
    }
};

export default profile;