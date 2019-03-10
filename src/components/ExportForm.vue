<template>
    <input type="button" :value="label" @click="exportJson">
</template>

<script>
export default {
    props: {
        label: {
            type: String,
            default: 'export'
        },
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
