<template>
    <section>
        <h3 class="title">特別スキル</h3>
        <div class="columns">
            <b-field class="column">
                <b-input v-model="text" placeholder="スキル名"></b-input>
                <b-select v-model="type" placeholder="タイプ">
                    <option v-for="(option, index) in options" :value="option.value" :key="index">
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
                        <b-tag :type="convertTypeToColorType(skill.type)" @close="removeSkill(skill)" size="is-medium" attached closable>{{skill.name}}</b-tag>
                    </div>
                </b-field>
            </div>
        </div>
    </section>
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
        }),
        isButtonDisabled(){
            return this.text.replace(/\s+/g, '').length <= 0
        }
    },
    methods: {
        ...mapActions([
            ADD_SPECIAL_SKILL,
            REMOVE_SPECIAL_SKILL
        ]),
        addSkill(event){
            const {text: name, type} = this
            this.ADD_SPECIAL_SKILL({name, type})
            this.text = ''
            this.type = 1
        },
        removeSkill(skill){
            this.REMOVE_SPECIAL_SKILL(skill.id)
        },
        convertTypeToColorType(type){
            let ret = '';
            switch(type){
                case 1:
                    ret = 'is-success'
                    break;
                case 2:
                    ret = 'is-info'
                    break;
                case 3:
                    ret = 'is-danger'
                    break;
                case 4:
                    ret = 'is-primary'
                    break;
                default:
                    console.log("不正なタイプ");
                    break;
            }
            return ret;
        }
    }
}
</script>
