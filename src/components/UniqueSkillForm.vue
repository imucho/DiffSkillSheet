<template>
   <section>
       <b-field label="スキル名">
           <b-input :value="name" @input="UPDATE_UNIQUE_SKILL_NAME"></b-input>
       </b-field>
       <b-field label="スキル説明">
           <b-input :value="description" @input="UPDATE_UNIQUE_SKILL_DESCRIPTION" type="textarea" maxlength="200"></b-input>
       </b-field>
   </section> 
</template>

<script>
import { UPDATE_UNIQUE_SKILL_NAME, UPDATE_UNIQUE_SKILL_DESCRIPTION } from '../store/mutation-types'
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapActions } = createNamespacedHelpers('skill/unique')
export default {
    computed: {
        ...mapState({
            name: state => state.name,
            description: state => state.description,
        }),
    },
    methods: {
        ...mapActions([
            UPDATE_UNIQUE_SKILL_NAME,
            UPDATE_UNIQUE_SKILL_DESCRIPTION
        ])
    }

}
</script>
