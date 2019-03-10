import { UPDATE_UNIQUE_SKILL_NAME, UPDATE_UNIQUE_SKILL_DESCRIPTION } from '../mutation-types'
const uniqueSkill = {
    namespaced: true,
    state: {
        name: '',
        description: ''
    },
    mutations: {
        [UPDATE_UNIQUE_SKILL_NAME] (state, payload) {
            state.name = payload.data.name
        },
        [UPDATE_UNIQUE_SKILL_DESCRIPTION] (state, payload) {
            state.description = payload.data.description
        }
    },
    actions: {
        [UPDATE_UNIQUE_SKILL_NAME] ({commit, state}, newValue) {
            commit(UPDATE_UNIQUE_SKILL_NAME, {data: {...state, name: newValue}})
        },
        [UPDATE_UNIQUE_SKILL_DESCRIPTION] ({commit, state}, newValue) {
            commit(UPDATE_UNIQUE_SKILL_DESCRIPTION, {data: {...state, description: newValue}})
        }
    },
    getters: {
    }
};
export default uniqueSkill