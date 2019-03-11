<template>
    <div>
        <div>
            <input type="text" v-model="text">
            <select v-model="num">
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
                        {{skill.name}} : {{skill.num}} <button @click="removeSkill(skill)">削除</button>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapActions } = createNamespacedHelpers('skill/numerical')
import { ADD_NUMERICAL_SKILL, REMOVE_NUMERICAL_SKILL } from '../store/mutation-types'
export default {
    data: function(){
        return {
            text: '',
            num: 1,
            options: [
                { text: '1', value: 1 },
                { text: '2', value: 2 },
                { text: '3', value: 3 },
                { text: '4', value: 4 },
                { text: '5', value: 5 }
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
            ADD_NUMERICAL_SKILL,
            REMOVE_NUMERICAL_SKILL
        ]),
        addSkill(event){
            const {text: name, num} = this
            this.ADD_NUMERICAL_SKILL({name, num})
        },
        removeSkill(skill){
            this.REMOVE_NUMERICAL_SKILL(skill.id)
        }
    }
}
</script>
