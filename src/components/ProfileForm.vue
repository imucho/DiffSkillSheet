<template>
    <div>
        <label for="name">
            名前：<input type="text" id="name" name="name" :value="name" @input="updateName">
        </label>
        <label for="company">
            会社：<input type="text" id="company" name="company" :value="company" @input="updateCompany">
        </label>
        <label for="job">
            職種：<input type="text" id="job" name="job" :value="job" @input="updateJob">
        </label>
    </div>
</template>

<script>
import { REGISTER_NAME, REGISTER_COMPANY, REGISTER_JOB } from '../store/mutation-types'
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapActions } = createNamespacedHelpers('profile')
export default {
    computed: {
        ...mapState({
            name: state => state.name,
            company: state => state.company,
            job: state => state.job
        }),
    },
    methods: {
        ...mapActions([
            REGISTER_NAME,
            REGISTER_COMPANY,
            REGISTER_JOB
        ]),
        updateName(event){
            this.REGISTER_NAME(event.target.value)
        },
        updateCompany(event){
            this.REGISTER_COMPANY(event.target.value)
        },
        updateJob(event){
            this.REGISTER_JOB(event.target.value)
        }
    }
}
</script>
