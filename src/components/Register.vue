<template>
    <div>
        <profile-form></profile-form>
        <common-skill-form></common-skill-form>
        <unique-skill-form></unique-skill-form>
        <numerical-skill-form></numerical-skill-form>
        <special-skill-form></special-skill-form>
        <section>
            <div class="columns">
                <export-form :json="json">Export</export-form>
                <import-form>Import</import-form>
            </div>
        </section>
    </div>
</template>

<script>
import ProfileForm from './ProfileForm'
import ExportForm from './ExportForm'
import ImportForm from './ImportForm'
import CommonSkillForm from './CommonSkillForm'
import UniqueSkillForm from './UniqueSkillForm'
import NumericalSkillForm from './NumericalSkillForm'
import SpecialSkillForm from './SpecialSkillForm'
export default {
    components: {
        'profile-form': ProfileForm,
        'common-skill-form': CommonSkillForm,
        'unique-skill-form': UniqueSkillForm,
        'numerical-skill-form': NumericalSkillForm,
        'special-skill-form': SpecialSkillForm,
        'export-form': ExportForm,
        'import-form': ImportForm
    },
    computed: {
        json(){
            return this.$store.state
        },
    }
}
</script>

<style scoped>
section {
    padding: 1em;
}
</style>
