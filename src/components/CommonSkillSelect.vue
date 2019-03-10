<template>
    <div>
        <slot>共通スキル</slot>
        <select :value="before" @change="changeBeforeValue">
            <option v-for="(option, index) in options" v-bind:value="option.value" :key="index">
                {{ option.text }}
            </option>
        </select>
        →
        <select :value="after" @change="changeAfterValue">
            <option v-for="(option, index) in options" v-bind:value="option.value" :key="index">
                {{ option.text }}
            </option>
        </select>
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
        changeBeforeValue(event){
            const newValue = {after: this.after, before: event.target.value}
            this.$props.changeCallback(newValue)
        },
        changeAfterValue(event){
            const newValue = {after: event.target.value, before: this.before}
            this.$props.changeCallback(newValue)
        }
    }
}
</script>
