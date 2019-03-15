<template>
    <section>
        <h3 class="title">共通スキル</h3>
        <div class="columns">
            <skill-select :changeCallback="UPDATE_PROGRAMMING" :value="programming">プログラミング</skill-select>
            <skill-select :changeCallback="UPDATE_SOFTWARE_DESIGN" :value="softwareDesign">設計</skill-select>
            <skill-select :changeCallback="UPDATE_MAN_HOUR_ESTIMATE" :value="manHourEstimate">工数見積もり</skill-select>
            <skill-select :changeCallback="UPDATE_MEETING" :value="meeting">ミーティング</skill-select>
            <skill-select :changeCallback="UPDATE_CROSS_DEPARTMENTAL" :value="crossDepartmental">組織貢献</skill-select>
        </div>
    </section>
</template>

<script>
import CommonSkillSelect from './CommonSkillSelect'
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapActions } = createNamespacedHelpers('skill/common')
import { UPDATE_PROGRAMMING, UPDATE_SOFTWARE_DESIGN, UPDATE_MAN_HOUR_ESTIMATE, UPDATE_MEETING, UPDATE_CROSS_DEPARTMENTAL } from '../store/mutation-types'
export default {
    components: {
        'skill-select': CommonSkillSelect
    },
    computed: {
        ...mapState({
            programming: state => state.programming,
            softwareDesign: state => state.softwareDesign,
            manHourEstimate: state => state.manHourEstimate,
            meeting: state => state.meeting,
            crossDepartmental: state => state.crossDepartmental
        }),
    },
    methods: {
        ...mapActions([
            UPDATE_PROGRAMMING,
            UPDATE_SOFTWARE_DESIGN,
            UPDATE_MAN_HOUR_ESTIMATE,
            UPDATE_MEETING,
            UPDATE_CROSS_DEPARTMENTAL
        ])
    }
}
</script>

