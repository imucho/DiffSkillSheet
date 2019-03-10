<template>
    <label for="das">
        import
        <input type="file" name="das" id="das" accept="application/json" @change="handleFileSelect">
    </label>
</template>

<script>
import { REGISTER_NAME, REGISTER_COMPANY, REGISTER_JOB } from '../store/mutation-types'
import { createNamespacedHelpers } from 'vuex'
const { mapActions } = createNamespacedHelpers('profile')
export default {
    methods: {
        ...mapActions({
            REGISTER_NAME,
            REGISTER_COMPANY,
            REGISTER_JOB
        }),
        handleFileSelect(event){
            const file = event.target.files[0]
            const reader = new FileReader()
            reader.onload = this.onload
            reader.readAsText(file)
        },
        onload(event){
            const {profile: {name,company,job}}= JSON.parse(event.target.result)
            this.REGISTER_NAME(name)
            this.REGISTER_COMPANY(company)
            this.REGISTER_JOB(company)
        }
    }
}
</script>

<style scoped>
    input {
        display: none;
    }
</style>
