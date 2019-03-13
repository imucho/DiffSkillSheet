<template>
    <div class="column tile is-vertical">
        <p class="label">
            <slot>共通スキル</slot>
        </p>
        <b-field class="tile v-center">
            <b-select :value="before" @input="changeBeforeValue">
                <option
                    v-for="(option, index) in options"
                    :value="option.value"
                    :key="index">
                    {{ option.text }}
                </option>
            </b-select>
            <b-icon icon="arrow-right" pack="fas" size="is-small"></b-icon>
            <b-select :value="after" @input="changeAfterValue">
                <option
                    v-for="(option, index) in options"
                    :value="option.value"
                    :key="index">
                    {{ option.text }}
                </option>
            </b-select>
        </b-field>
    </div>
</template>

<script>
export default {
    props: {
        value: {
            type: Object,
            default: function(){
                return {
                    before: 'F',
                    after: 'F'
                }
            }
        },
        changeCallback: {
            type: Function,
            default: function(v){
                console.log(v)
            }
        }
    },
    data: function(){
        return {
            options: [
                { text: 'S', value: 'S' },
                { text: 'A', value: 'A' },
                { text: 'B', value: 'B' },
                { text: 'C', value: 'C' },
                { text: 'D', value: 'D' },
                { text: 'E', value: 'E' },
                { text: 'F', value: 'F' }
            ]
        }
    },
    computed: {
        before(){
            return this.$props.value.before
        },
        after(){
            return this.$props.value.after
        }
    },
    methods: {
        changeBeforeValue(value){
            const newValue = {after: this.after, before: value}
            this.$props.changeCallback(newValue)
        },
        changeAfterValue(value){
            const newValue = {after: value, before: this.before}
            this.$props.changeCallback(newValue)
        }
    }
}
</script>

<style scoped>
.v-center {
    align-items: center;
}
</style>
