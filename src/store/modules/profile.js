import { REGISTER_NAME, REGISTER_COMPANY, REGISTER_OCCUPATION, GET_NAME, GET_COMPANY, GET_OCCUPATION } from '../mutation-types'

const profile = {
    namespaced: true,
    state: {
        name: '',
        company: '',
        occupation: ''
    },
    mutations: {
        [REGISTER_NAME] (state, payload) {
            state.name = payload.data.name
        },
        [REGISTER_COMPANY] (state, payload) {
            state.company = payload.data.company
        },
        [REGISTER_OCCUPATION] (state, payload) {
            state.occupation = payload.data.occupation
        }
    },
    actions: {
        [REGISTER_NAME] ({commit, state}, newValue) {
            commit(REGISTER_NAME, {data: {...state, name: newValue}})
        },
        [REGISTER_COMPANY] ({commit, state}, newValue) {
            commit(REGISTER_COMPANY, {data: {...state, company: newValue}})
        },
        [REGISTER_OCCUPATION] ({commit, state}, newValue) {
            commit(REGISTER_OCCUPATION, {data: {...state, occupation: newValue}})
        }
    },
    getters: {
    }
};

export default profile;