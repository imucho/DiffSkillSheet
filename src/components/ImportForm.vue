<template>
    <label for="das">
        import
        <input type="file" name="das" id="das" accept="application/json" @change="handleFileSelect">
    </label>
</template>

<script>
import { REGISTER_NAME, REGISTER_COMPANY, REGISTER_JOB, UPDATE_PROGRAMMING, UPDATE_SOFTWARE_DESIGN, UPDATE_MAN_HOUR_ESTIMATE, UPDATE_MEETING, UPDATE_CROSS_DEPARTMENTAL } from '../store/mutation-types'
import { createNamespacedHelpers } from 'vuex'
const profileHelper = createNamespacedHelpers('profile')
const commonSkillHelper = createNamespacedHelpers('skill/common')
export default {
    methods: {
        ...profileHelper.mapActions({
            REGISTER_NAME,
            REGISTER_COMPANY,
            REGISTER_JOB,
        }),
        ...commonSkillHelper.mapActions({
            UPDATE_PROGRAMMING,
            UPDATE_SOFTWARE_DESIGN,
            UPDATE_MAN_HOUR_ESTIMATE,
            UPDATE_MEETING,
            UPDATE_CROSS_DEPARTMENTAL
        }),
        handleFileSelect(event){
            const file = event.target.files[0]
            const reader = new FileReader()
            reader.onload = this.onload
            reader.readAsText(file)
        },
        onload(event){
            const {
                profile: {name,company,job},
                skill: {
                    common: {
                        programming,softwareDesign,manHourEstimate,meeting,crossDepartmental
                    }
                }
            }= JSON.parse(event.target.result)
            this.REGISTER_NAME(name)
            this.REGISTER_COMPANY(company)
            this.REGISTER_JOB(company)
            this.UPDATE_PROGRAMMING(programming)
            this.UPDATE_SOFTWARE_DESIGN(softwareDesign)
            this.UPDATE_MAN_HOUR_ESTIMATE(manHourEstimate)
            this.UPDATE_MEETING(meeting)
            this.UPDATE_CROSS_DEPARTMENTAL(crossDepartmental)
        }
    }
}
</script>

<style scoped>
    input {
        display: none;
    }
</style>
