<template>
    <b-field class="file">
        <b-upload @input="handleFileSelect" accept="application/json">
            <a class="button is-black">
                <b-icon icon="file-upload" pack="fa"></b-icon>
                <span>
                    <slot>import</slot>
                </span>
            </a>
        </b-upload>
    </b-field>
</template>

<script>
import { REGISTER_NAME, REGISTER_COMPANY, REGISTER_JOB, UPDATE_PROGRAMMING, UPDATE_SOFTWARE_DESIGN, UPDATE_MAN_HOUR_ESTIMATE, UPDATE_MEETING, UPDATE_CROSS_DEPARTMENTAL, UPDATE_UNIQUE_SKILL_NAME, UPDATE_UNIQUE_SKILL_DESCRIPTION, IMPORT_NUMERICAL_SKILLS, IMPORT_SPECIAL_SKILLS } from '../store/mutation-types'
import { createNamespacedHelpers } from 'vuex'
const profileHelper = createNamespacedHelpers('profile')
const commonSkillHelper = createNamespacedHelpers('skill/common')
const uniqueSkillHelper = createNamespacedHelpers('skill/unique')
const numericalSkillHelper = createNamespacedHelpers('skill/numerical')
const specialSkillHelper = createNamespacedHelpers('skill/special')
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
        ...uniqueSkillHelper.mapActions({
            UPDATE_UNIQUE_SKILL_NAME,
            UPDATE_UNIQUE_SKILL_DESCRIPTION
        }),
        ...numericalSkillHelper.mapActions({
            IMPORT_NUMERICAL_SKILLS
        }),
        ...specialSkillHelper.mapActions({
            IMPORT_SPECIAL_SKILLS
        }),
        handleFileSelect(file){
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
                    },
                    unique,
                    numerical,
                    special,
                }
            } = JSON.parse(event.target.result)
            this.REGISTER_NAME(name)
            this.REGISTER_COMPANY(company)
            this.REGISTER_JOB(job)
            this.UPDATE_PROGRAMMING(programming)
            this.UPDATE_SOFTWARE_DESIGN(softwareDesign)
            this.UPDATE_MAN_HOUR_ESTIMATE(manHourEstimate)
            this.UPDATE_MEETING(meeting)
            this.UPDATE_CROSS_DEPARTMENTAL(crossDepartmental)
            this.UPDATE_UNIQUE_SKILL_NAME(unique.name)
            this.UPDATE_UNIQUE_SKILL_DESCRIPTION(unique.description)
            this.IMPORT_NUMERICAL_SKILLS(numerical.list)
            this.IMPORT_SPECIAL_SKILLS(special.list)
        }
    }
}
</script>

<style scoped>
a.button {
    margin: 0.75em;
}
</style>
