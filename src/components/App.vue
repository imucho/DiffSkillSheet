<template>
    <div class="container">
        <section>
            <b-tabs type="is-toggle-rounded" position="is-centered" size="is-medium" class="block" @change="changeTab">
                <b-tab-item label="Editor" icon="edit" icon-pack="far"></b-tab-item>
                <b-tab-item label="Viewer" icon="eye" icon-pack="far"></b-tab-item>
            </b-tabs>
        </section>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    created(){
        this.$router.replace('/')
    },
    methods: {
        changeTab(index){
            let location = '/'
            if(index==1){
                location = '/viewer'
            }
            this.$router.replace(location)
        }
    }
}
</script>
