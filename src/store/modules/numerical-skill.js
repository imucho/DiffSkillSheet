import { ADD_NUMERICAL_SKILL, REMOVE_NUMERICAL_SKILL, IMPORT_NUMERICAL_SKILLS } from '../mutation-types'
const numericalSkill = {
    namespaced: true,
    state: {
        list: []
    },
    mutations: {
        [ADD_NUMERICAL_SKILL] (state, payload) {
            const id = state.list.length > 0 ? state.list[state.list.length-1].id + 1 : 1
            const data = {id: id, name: payload.data.name, num: payload.data.num}
            state.list.push(data)
        },
        [REMOVE_NUMERICAL_SKILL] (state, payload) {
            state.list = state.list.filter(skill => {
                return skill.id != payload.data.id
            });
        },
        [IMPORT_NUMERICAL_SKILLS] (state, payload) {
            state.list = payload.data.list
        }
    },
    actions: {
        [ADD_NUMERICAL_SKILL] ({commit}, skill) {
            commit(ADD_NUMERICAL_SKILL, {data: {name: skill.name, num: skill.num}})
        },
        [REMOVE_NUMERICAL_SKILL] ({commit}, id) {
            commit(REMOVE_NUMERICAL_SKILL, {data: {id}})
        },
        [IMPORT_NUMERICAL_SKILLS] ({commit}, list) {
            commit(IMPORT_NUMERICAL_SKILLS, {data: {list}})
        }
    },
    getters: {
    }
};
export default numericalSkill