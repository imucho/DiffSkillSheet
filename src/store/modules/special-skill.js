import { ADD_SPECIAL_SKILL, REMOVE_SPECIAL_SKILL, IMPORT_SPECIAL_SKILLS } from '../mutation-types'
const specialSkill = {
    namespaced: true,
    state: {
        list: []
    },
    mutations: {
        [ADD_SPECIAL_SKILL] (state, payload) {
            const id = state.list.length > 0 ? state.list[state.list.length-1].id + 1 : 1
            const data = {id: id, name: payload.data.name, type: payload.data.type}
            state.list.push(data)
        },
        [REMOVE_SPECIAL_SKILL] (state, payload) {
            state.list = state.list.filter(skill => {
                return skill.id != payload.data.id
            });
        },
        [IMPORT_SPECIAL_SKILLS] (state, payload) {
            state.list = payload.data.list
        }
    },
    actions: {
        [ADD_SPECIAL_SKILL] ({commit}, skill) {
            commit(ADD_SPECIAL_SKILL, {data: {name: skill.name, type: skill.type}})
        },
        [REMOVE_SPECIAL_SKILL] ({commit}, id) {
            commit(REMOVE_SPECIAL_SKILL, {data: {id}})
        },
        [IMPORT_SPECIAL_SKILLS] ({commit}, list) {
            commit(IMPORT_SPECIAL_SKILLS, {data: {list}})
        }
    },
    getters: {
    }
};
export default specialSkill