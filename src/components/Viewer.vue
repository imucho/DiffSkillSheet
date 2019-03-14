<template>
    <div>
        <div class="columns">
                <div class="column profile">
                </div>
                <div class="column common">
                </div>
        </div>
        <div>
            <div class="columns unique">
                <div class="column is-1">
                    <b-tag type="is-warning" size="is-large">{{unique.name}}</b-tag>
                </div>
                <div class="column">
                    <pre class="label">{{unique.description}}</pre>
                </div>
            </div>
            <div class="columns numerical">
                <div class="column">
                    <b-field grouped group-multiline>
                        <div class="control" v-for="(skill, index) in numerical.list" :key="index">
                            <b-taglist attached>
                                <b-tag :type="convertNumToColorType(skill.num)" size="is-large">{{skill.name}}</b-tag>
                                <b-tag type="is-dark" size="is-large">{{skill.num}}</b-tag>
                            </b-taglist>
                        </div>
                    </b-field>
                </div>
            </div>
            <div class="columns special">
                <div class="column">
                    <b-field grouped group-multiline>
                        <div class="control" v-for="(skill, index) in special.list" :key="index">
                            <b-tag :type="convertTypeToColorType(skill.type)" size="is-large" attached>{{skill.name}}</b-tag>
                        </div>
                    </b-field>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const profileHelper = createNamespacedHelpers('profile')
const skillHelper = createNamespacedHelpers('skill')
export default {
    computed: {
        ...profileHelper.mapState({
            name: state => state.name,
            company: state => state.company,
            job: state => state.job
        }),
        ...skillHelper.mapState({
            common: state => state.common,
            unique: state => state.unique,
            numerical: state => state.numerical,
            special: state => state.special
        })
    },
    methods: {
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
        },
        convertNumToColorType(num){
            let ret = '';
            switch(num){
                case 1:
                    ret = 'is-danger'
                    break;
                case 2:
                    ret = 'is-warning'
                    break;
                case 3:
                    ret = 'is-light'
                    break;
                case 4:
                    ret = 'is-info'
                    break;
                case 5:
                    ret = 'is-success'
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

<style scoped>
pre {
    white-space: pre-wrap;
}
</style>
