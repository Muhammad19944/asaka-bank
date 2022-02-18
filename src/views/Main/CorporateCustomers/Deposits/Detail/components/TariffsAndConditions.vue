<template>
    <div class="terms-view row">
        <div class='col-6'>
            <h2 class="font-600 dark-text mb-8">
                <I18nVue t="TariffsAndConditions.conditions" />
            </h2>
            <div class="credit-widget pa-7 rounded-lg overflow-hidden">
                <div class="app-ul">
                    <template v-for='(item, index) in depositDetailModel'>
                        <div :key='index'>
                            <span v-if='$i18n.locale === "en"' v-html='item.condition_en' />
                            <span v-else-if='$i18n.locale === "ru"' v-html='item.condition_ru' />
                            <span v-else='$i18n.locale === "uz"' v-html='item.condition_uz' />
                        </div>
                    </template>
                </div>
            </div>
        </div>


        <div class='col-6'>
            <h2 class="font-600 dark-text mb-8">
                <I18nVue t="TariffsAndConditions.percent" />
            </h2>
            <div class="credit-widget pa-7 rounded-lg overflow-hidden">
                <div class="app-ul">
                    <template v-for='(item, index) in depositDetailModel'>
                        <div :key='index'>
                            <span v-if='$i18n.locale === "en"' v-html='item.interest_rates_en' />
                            <span v-else-if='$i18n.locale === "ru"' v-html='item.interest_rates_ru' />
                            <span v-else='$i18n.locale === "uz"' v-html='item.interest_rates_uz' />
                        </div>
                    </template>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import I18nVue from '@/I18nVue'
    export default {
        name: 'TariffsAndConditions',
        components: { I18nVue },

        data() {
            return {
                depositDetailModel: [],
                layout: false
            }
        },

        mounted() {
            this.getOne()
        },
        methods: {
            getOne() {
                this.$http.get(`1/deposit/${this.$route.params.id}/property/`)
                    .then(({ data }) => {
                        this.depositDetailModel = data.results
                        this.layout = true

                        // console.log(this.depositDetailModel)
                    })
            }
        }
    }
</script>

<style scoped>

</style>