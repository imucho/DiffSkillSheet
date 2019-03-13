<template>
    <section>
        <b-field horizontal label="名前">
            <b-input name="name" :value="name" @input="REGISTER_NAME" placeholder="山田太郎" icon="user" icon-pack="fa" expanded></b-input>
        </b-field>
        <b-field horizontal label="会社">
            <b-input name="company" :value="company" @input="REGISTER_COMPANY" icon="building" icon-pack="fa" expanded></b-input>
        </b-field>
        <b-field horizontal label="職種">
            <b-input name="job" :value="job" @input="REGISTER_JOB" placeholder="クライアントエンジニア" icon="briefcase" icon-pack="fa" expanded></b-input>
        </b-field>
    </section>
</template>

<script>
import { REGISTER_NAME, REGISTER_COMPANY, REGISTER_JOB } from '../store/mutation-types'
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapActions } = createNamespacedHelpers('profile')
export default {
    computed: {
        ...mapState({
            name: state => state.name,
            company: state => state.company,
            job: state => state.job
        }),
    },
    methods: {
        ...mapActions([
            REGISTER_NAME,
            REGISTER_COMPANY,
            REGISTER_JOB
        ])
    }
}
</script>
