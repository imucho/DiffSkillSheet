<template>
    <section>
        <h3 class="title">数値化スキル</h3>
        <div class="columns">
            <b-field class="column">
                <b-input v-model="text" placeholder="スキル名"></b-input>
                <b-select v-model="num" placeholder="数値">
                    <option v-for="(option, index) in options" v-bind:value="option.value" :key="index">
                        {{ option.text }}
                    </option>
                </b-select>
                <p class="control">
                    <button :disabled="isButtonDisabled" class="button is-primary" @click="addSkill">追加</button>
                </p>
            </b-field>
        </div>
        <div class="columns">
            <div class="column">
                <b-field grouped group-multiline>
                    <div class="control" v-for="(skill, index) in list" :key="index">
                        <b-taglist attached>
                            <b-tag type="is-primary" size="is-medium">{{skill.name}}</b-tag>
                            <b-tag @close="removeSkill(skill)" type="is-dark" size="is-medium" closable>{{skill.num}}</b-tag>
                        </b-taglist>
                    </div>
                </b-field>
            </div>
        </div>
    </section>
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
        }),
        isButtonDisabled(){
            return this.text.replace(/\s+/g, '').length <= 0
        }
    },
    methods: {
        ...mapActions([
            ADD_NUMERICAL_SKILL,
            REMOVE_NUMERICAL_SKILL
        ]),
        addSkill(event){
            const {text: name, num} = this
            this.ADD_NUMERICAL_SKILL({name, num})
            this.text = ''
            this.num = 1
        },
        removeSkill(skill){
            this.REMOVE_NUMERICAL_SKILL(skill.id)
        }
    }
}
</script>
