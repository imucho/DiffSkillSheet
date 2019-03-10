import { UPDATE_PROGRAMMING, UPDATE_SOFTWARE_DESIGN, UPDATE_MAN_HOUR_ESTIMATE, UPDATE_MEETING, UPDATE_CROSS_DEPARTMENTAL } from '../mutation-types'
const commonSkill = {
    namespaced: true,
    state: {
        programming: {
            before: 'F',
            after: 'F' 
        },
        softwareDesign: {
            before: 'F',
            after: 'F' 
        },
        manHourEstimate: {
            before: 'F',
            after: 'F' 
        },
        meeting: {
            before: 'F',
            after: 'F' 
        },
        crossDepartmental: {
            before: 'F',
            after: 'F' 
        }
    },
    mutations: {
        [UPDATE_PROGRAMMING] (state, payload) {
            state.programming = payload.data.programming
        },
        [UPDATE_SOFTWARE_DESIGN] (state, payload) {
            state.softwareDesign = payload.data.softwareDesign
        },
        [UPDATE_MAN_HOUR_ESTIMATE] (state, payload) {
            state.manHourEstimate = payload.data.manHourEstimate
        },
        [UPDATE_MEETING] (state, payload) {
            state.meeting = payload.data.meeting
        },
        [UPDATE_CROSS_DEPARTMENTAL] (state, payload) {
            state.crossDepartmental = payload.data.crossDepartmental
        }
    },
    actions: {
        [UPDATE_PROGRAMMING] ({commit, state}, newValue) {
            commit(UPDATE_PROGRAMMING, {data: {...state, programming: newValue}})
        },
        [UPDATE_SOFTWARE_DESIGN] ({commit, state}, newValue) {
            commit(UPDATE_SOFTWARE_DESIGN, {data: {...state, softwareDesign: newValue}})
        },
        [UPDATE_MAN_HOUR_ESTIMATE] ({commit, state}, newValue) {
            commit(UPDATE_MAN_HOUR_ESTIMATE, {data: {...state, manHourEstimate: newValue}})
        },
        [UPDATE_MEETING] ({commit, state}, newValue) {
            commit(UPDATE_MEETING, {data: {...state, meeting: newValue}})
        },
        [UPDATE_CROSS_DEPARTMENTAL] ({commit, state}, newValue) {
            commit(UPDATE_CROSS_DEPARTMENTAL, {data: {...state, crossDepartmental: newValue}})
        }
    },
    getters: {
    }
};
export default commonSkill