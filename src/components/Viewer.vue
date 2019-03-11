<template>
    <div>
        <h1>表示ページ</h1>
        <router-link to="/">Go to register</router-link>
    </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const profileHelper = createNamespacedHelpers('profile')
const skillHelper = createNamespacedHelpers('skill')
export default {
    created(){
        console.log(this.name)
        console.log(this.company)
        console.log(this.job)

        console.log(this.common)
        console.log(this.unique)
        console.log(this.numerical)
    },
    computed: {
        ...profileHelper.mapState({
            name: state => state.name,
            company: state => state.company,
            job: state => state.job
        }),
        ...skillHelper.mapState({
            common: state => state.common,
            unique: state => state.unique,
            numerical: state => state.numerical
        })
    }
}
</script>
