<template>
    <div>
        <div>
            <input type="text" v-model="text">
            <select v-model="type">
                <option v-for="(option, index) in options" v-bind:value="option.value" :key="index">
                    {{ option.text }}
                </option>
            </select>
            <button @click="addSkill">追加</button>
        </div>
        <div>
            <ul>
                <li v-for="(skill, index) in list" :key="index">
                    <div>
                        {{skill.name}} : {{skill.type}} <button @click="removeSkill(skill)">削除</button>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapActions } = createNamespacedHelpers('skill/special')
import { ADD_SPECIAL_SKILL, REMOVE_SPECIAL_SKILL } from '../store/mutation-types'
export default {
    data: function(){
        return {
            text: '',
            type: 1,
            options: [
                { text: 'パーソナリティ', value: 1 },
                { text: 'ポジティブ', value: 2 },
                { text: 'ネガティブ', value: 3 },
                { text: 'ネガポジ', value: 4 }
            ]
        }
    },
    computed: {
        ...mapState({
            list: state => state.list
        })
    },
    methods: {
        ...mapActions([
            ADD_SPECIAL_SKILL,
            REMOVE_SPECIAL_SKILL
        ]),
        addSkill(event){
            const {text: name, type} = this
            this.ADD_SPECIAL_SKILL({name, type})
        },
        removeSkill(skill){
            this.REMOVE_SPECIAL_SKILL(skill.id)
        }
    }
}
</script>
