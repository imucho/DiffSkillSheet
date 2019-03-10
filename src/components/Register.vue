<template>
    <div>
        <profile-form></profile-form>
        <export-form :json="json"></export-form>
        <import-form></import-form>
        <router-link to="/viewer">Go to viewer</router-link>
    </div>
</template>

<script>
import ProfileForm from './ProfileForm'
import ExportForm from './ExportForm'
import ImportForm from './ImportForm'
export default {
    components: {
        'profile-form': ProfileForm,
        'export-form': ExportForm,
        'import-form': ImportForm
    },
    computed: {
        json(){
            return this.$store.state
        } 
    }
}
</script>