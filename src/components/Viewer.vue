<template>
    <div class="content">
        <div class="columns top">
                <div class="column is-4 profile">
                    <div class="columns">
                        <p class="title is-4 column">{{name}}</p>
                    </div>
                    <div class="columns">
                        <p class="is-size-5 label column">{{company}}</p>
                    </div>
                    <div class="columns">
                        <p class="is-size-5 label column">{{job}}</p>
                    </div>
                </div>
                <div class="column common">
                    <div class="columns">
                        <div class="column" v-for="(skill, key) in common" :key="key">
                            <div>
                                <p class="is-size-5 label">{{convertCommonSkillKeyToSkillName(key)}}</p>
                            </div>
                            <div class="columns v-center">
                                <div class="column">
                                    <p class="title is-1" :class="convertCommonSkillValueToClass(skill.before)">{{skill.before}}</p>
                                </div>
                                <div class="column"><b-icon icon="angle-right" pack="fa" size="is-large"></b-icon></div>
                                <div class="column">
                                    <p class="title is-1" :class="convertCommonSkillValueToClass(skill.after)">{{skill.after}}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
        <div class="bottom">
            <div class="unique">
                <div class="columns">
                    <div class="column">
                        <b-tag type="is-warning" class="is-size-4">{{unique.name}}</b-tag>
                    </div>
                </div>
                <div class="columns">
                    <div class="column">
                        <pre class="is-size-5">{{unique.description}}</pre>
                    </div>
                </div>
            </div>
            <div class="columns numerical">
                <div class="column">
                    <b-field grouped group-multiline>
                        <div class="control" v-for="(skill, index) in numerical.list" :key="index">
                            <b-taglist attached>
                                <b-tag :type="convertNumToColorType(skill.num)" class="is-size-4" size="is-large">{{skill.name}}</b-tag>
                                <b-tag type="is-dark" class="is-size-4" size="is-large">{{skill.num}}</b-tag>
                            </b-taglist>
                        </div>
                    </b-field>
                </div>
            </div>
            <div class="columns special">
                <div class="column">
                    <b-field grouped group-multiline>
                        <div class="control" v-for="(skill, index) in special.list" :key="index">
                            <b-tag :type="convertTypeToColorType(skill.type)" class="is-size-4 has-text-dark" size="is-large" attached>{{skill.name}}</b-tag>
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
            let ret = ''
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
                    console.log('不正なタイプ')
                    break;
            }
            return ret
        },
        convertNumToColorType(num){
            let ret = ''
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
                    console.log('不正なタイプ')
                    break;
            }
            return ret
        },
        convertCommonSkillKeyToSkillName(key){
            let ret = ''
            switch(key){
                case 'programming':
                    ret = 'プログラミング'
                    break;
                case 'softwareDesign':
                    ret = '設計'
                    break;
                case 'manHourEstimate':
                    ret = '工数見積もり'
                    break;
                case 'meeting':
                    ret = 'ミーティング'
                    break;
                case 'crossDepartmental':
                    ret = '組織貢献'
                    break;
                default:
                    console.log('不正なキー')
                    break;
            }
            return ret
        },
        convertCommonSkillValueToClass(value){
            let ret = ''
            switch(value){
                case 'S':
                    ret = 'is-s'
                    break;
                case 'A':
                    ret = 'is-a'
                    break;
                case 'B':
                    ret = 'is-b'
                    break;
                case 'C':
                    ret = 'is-c'
                    break;
                case 'D':
                    ret = 'is-d'
                    break;
                case 'E':
                    ret = 'is-e'
                    break;
                case 'F':
                    ret = 'is-f'
                    break;
                default:
                    console.log('不正な値')
                    break;
            }
            return ret
        }
    }
}
</script>

<style lang="scss" scoped>
pre {
    white-space: pre-wrap;
}
.v-center {
    align-items: center;
}
.is-s {
    color: hsl(48, 100%, 67%);
}
.is-a {
    color: hsl(348, 100%, 61%);
}
.is-b {
    color: hsl(141, 71%, 48%);
}
.is-c {
    color: hsl(217, 71%, 53%)
}
.is-d {
    color: hsl(204, 86%, 53%)
}
.is-e {
    color: hsl(171, 100%, 41%)
}
.is-f {
    color: hsl(0, 0%, 48%)
}

div.profile {
    background-color: #fff;
    border: 1px solid #a0a0a0;
    border-radius: 1em;
    margin-right: 0.5rem;
    margin-left: -0.5rem;
}
div.common {
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #a0a0a0;
    border-radius: 1em;
    > div > div {
        border-right: 1px dashed gray;
    }
    > div > div:last-child {
        border: none;
    }
}
div.top {
    margin-bottom: 1.5rem;
}
div.bottom {
    background-color: #fff;
    border: 1px solid #a0a0a0;
    border-radius: 1em;
    margin: -0.75rem;
    margin-left: -1.25rem;
    margin-right: -1.25rem;
    padding: 1em;

    > .unique {
        margin-bottom: 0.75rem;

        .columns:first-child .column {
            padding-bottom: 0px;
        }

        .columns:last-child .column {
            padding-top: 0px;
        }
    }
}

.is-success {
    color: black;
}
</style>
