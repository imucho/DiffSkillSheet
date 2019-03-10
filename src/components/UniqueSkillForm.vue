<template>
    <div>
        <label for="unique-skill-name">
            スキル名：
            <input type="text" id="unique-skill-name" name="unique-skill-name" :value="name" @input="updateName">
        </label>
        <label for="unique-skill-description">
            スキル説明：
            <textarea name="unique-skill-description" id="unique-skill-description" cols="30" rows="10" :value="description" @input="updateDescription"></textarea>
        </label>
    </div>
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
        ]),
        updateName(event){
            this.UPDATE_UNIQUE_SKILL_NAME(event.target.value)
        },
        updateDescription(event){
            this.UPDATE_UNIQUE_SKILL_DESCRIPTION(event.target.value)
        }
    }

}
</script>
