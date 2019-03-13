<template>
    <button class="button is-success" @click="exportJson">
        <slot>export</slot>
    </button>
</template>

<script>
export default {
    props: {
        fileName: {
            type: String,
            default: 'DiffAbilitySheet'
        },
        json: {
            type: Object,
            default: function(){
                return {}
            }
        }
    },
    methods: {
        exportJson(event){
            const blob = new Blob([JSON.stringify(this.$props.json)], {type: 'application/json'})
            const url = URL.createObjectURL(blob)
            const link = document.createElement('a')
            link.download = this.$props.fileName 
            link.href = url
            link.dataset.downloadurl = ['application/json', link.download, link.href]
            link.click()
            URL.revokeObjectURL(url)
        }
    }
}
</script>

<style scoped>
button {
    margin: 0.75em;
}
</style>
