<template>
    <div class="deposit-detail-view">
        <v-container>
            <div class="detail-view-content">
                <v-row no-gutters>
                    <v-col md="6">
                        <div class="pr-16">
                            <v-responsive :aspect-ratio="7 / 6">
                                <img :src="depositDetailModel.image ? $http.defaults.baseURL + depositDetailModel.image.url: ''" alt="Credit image" class="w-100 h-100 img-contain p-absolute"/>
                            </v-responsive>
                        </div>
                    </v-col>
                    <v-col md="6" align-self="center">
                        <h1 class="font-700 text-extra-large-3 dark-text">
                            <I18nVue :ru="depositDetailModel.title_ru"
                                     :uz="depositDetailModel.title_uz"
                                     :en="depositDetailModel.title_en" />
                        </h1>
                        <h2 v-if="depositDetailModel.type === 'milliy_valyutada'" class="dark-text font-600 mt-3">
                            <I18nVue t='deposits_in_currency' />
                        </h2>

                        <h2 v-else-if="depositDetailModel.type === 'aqsh_dollarida'" class="dark-text font-600 mt-3">
                            <I18nVue t='deposits_in_US' />
                        </h2>

                        <h2 v-else class="dark-text font-600 mt-3">
                            <I18nVue t='deposits_in_euro' />
                        </h2>

                        <v-divider class="my-8" />

                        <h4>
                            <span v-if='$i18n.locale === "en"' v-html='depositDetailModel.description_en' />
                            <span v-if='$i18n.locale === "ru"' v-html='depositDetailModel.description_ru' />
                            <span v-if='$i18n.locale === "uz"' v-html='depositDetailModel.description_uz' />
                        </h4>

                        <div v-if='$i18n.locale === "uz"' class="credit-meta d-flex flex-wrap mb-13 w-100 mt-10">
                            <div class="credit-meta-items d-flex align-center pb-3 dark-text mb-5 mx-4">
                                <h1 class="text-extra-large-3 mr-3 line-base font-300"><span class="text--h3 font-600">yillik</span> {{ depositDetailModel.yearly_from }}%</h1>
                                <div class="d-flex flex-column h-100">
                                    <h5 class="font-600">dan</h5>
                                    <span
                                        class="text-small d-block font-600 line-base pb-1 mt-auto">Omonat foizi</span>
                                </div>
                            </div>

                            <div class="credit-meta-items d-flex align-center pb-3 dark-text mb-5 mx-4">
                                <h1 class="text-extra-large-3 mr-3 line-base font-300">
                                    <span class="text--h3 font-600">yillik</span> {{ depositDetailModel.yearly_to }}%
                                </h1>
                                <div class="d-flex flex-column h-100">
                                    <h5 class="font-600">gacha</h5>
                                    <span class="text-small d-block font-600 line-base pb-1 mt-auto">Omonat foizi</span>
                                </div>
                            </div>

                            <div class="credit-meta-items d-flex align-center pb-3 dark-text mb-5 mx-4">
                                <h1 class="text-extra-large-3 mr-3 line-base font-300">
                                    {{ depositDetailModel.min_save_period }}
                                </h1>
                                <div class="d-flex flex-column h-100">
                                    <h5 class="font-600">oydan</h5>
                                    <span class="text-small d-block font-600 line-base pb-1 mt-auto"
                                    >Minimal saqlash muddati</span
                                    >
                                </div>
                            </div>

                            <div class="credit-meta-items d-flex align-center pb-3 dark-text mb-5 mx-4">
                                <h1 class="text-extra-large-3 mr-3 line-base font-300">{{ depositDetailModel.max_save_period }}</h1>
                                <div class="d-flex flex-column h-100">
                                    <h5 class="font-600">oygacha</h5>
                                    <span
                                        class="text-small d-block font-600 line-base pb-1 mt-auto">Maksimal saqlash muddati</span>
                                </div>
                            </div>
                        </div>




                        <div v-else-if='$i18n.locale === "ru"' class="credit-meta d-flex flex-wrap mb-13 w-100 mt-10">
                            <div class="credit-meta-items d-flex align-center pb-3 dark-text mb-5 mx-4">
                                <h1 class="text-extra-large-3 mr-3 line-base font-300"><span class="text--h3 font-600">депозит от</span> {{ depositDetailModel.yearly_from }}%</h1>
                                <div class="d-flex flex-column h-100">
                                    <span class="text-small d-block font-600 line-base pb-1 mt-auto">годовых</span>
                                </div>
                            </div>

                            <div class="credit-meta-items d-flex align-center pb-3 dark-text mb-5 mx-4">
                                <h1 class="text-extra-large-3 mr-3 line-base font-300"><span class="text--h3 font-600">депозит до</span> {{ depositDetailModel.yearly_to }}%</h1>
                                <div class="d-flex flex-column h-100">
                                    <span class="text-small d-block font-600 line-base pb-1 mt-auto">годовых</span>
                                </div>
                            </div>

                            <div class="credit-meta-items d-flex align-center pb-3 dark-text mb-5 mx-4">
                                <h1 class="text-extra-large-3 mr-3 line-base font-300">{{ depositDetailModel.min_save_period }}</h1>
                                <div class="d-flex flex-column h-100">
                                    <h5 class="font-600">месяцев</h5>
                                    <span
                                        class="text-small d-block font-600 line-base pb-1 mt-auto">Минимальный срок хранения</span>
                                </div>
                            </div>

                            <div class="credit-meta-items d-flex align-center pb-3 dark-text mb-5 mx-4">
                                <h1 class="text-extra-large-3 mr-3 line-base font-300">{{ depositDetailModel.max_save_period }}</h1>
                                <div class="d-flex flex-column h-100">
                                    <h5 class="font-600">месяцев</h5>
                                    <span
                                        class="text-small d-block font-600 line-base pb-1 mt-auto">Максимальный срок хранения</span>
                                </div>
                            </div>
                        </div>



                        <div v-else class="credit-meta d-flex flex-wrap mb-13 w-100 mt-10">
                            <div class="credit-meta-items d-flex align-center pb-3 dark-text mb-5 mx-4">
                                <h1 class="text-extra-large-3 mr-3 line-base font-300"><span class="text--h3 font-600">from</span> {{ depositDetailModel.yearly_from }}%</h1>
                                <div class="d-flex flex-column h-100">
                                    <h5 class="font-600">Deposit</h5>
                                    <span
                                        class="text-small d-block font-600 line-base pb-1 mt-auto">for year</span>
                                </div>
                            </div>

                            <div class="credit-meta-items d-flex align-center pb-3 dark-text mb-5 mx-4">
                                <h1 class="text-extra-large-3 mr-3 line-base font-300"><span class="text--h3 font-600">upto</span> {{ depositDetailModel.yearly_to }}%</h1>
                                <div class="d-flex flex-column h-100">
                                    <h5 class="font-600">Deposit</h5>
                                    <span
                                        class="text-small d-block font-600 line-base pb-1 mt-auto">for year</span>
                                </div>
                            </div>

                            <div class="credit-meta-items d-flex align-center pb-3 dark-text mb-5 mx-4">
                                <h1 class="text-extra-large-3 mr-3 line-base font-300">{{ depositDetailModel.min_save_period }}</h1>
                                <div class="d-flex flex-column h-100">
                                    <h5 class="font-600">month</h5>
                                    <span class="text-small d-block font-600 line-base pb-1 mt-auto">Minimum retention period</span>
                                </div>
                            </div>

                            <div class="credit-meta-items d-flex align-center pb-3 dark-text mb-5 mx-4">
                                <h1 class="text-extra-large-3 mr-3 line-base font-300">{{ depositDetailModel.max_save_period }}</h1>
                                <div class="d-flex flex-column h-100">
                                    <h5 class="font-600">month</h5>
                                    <span
                                        class="text-small d-block font-600 line-base pb-1 mt-auto">Maximum retention period</span>
                                </div>
                            </div>
                        </div>




                    </v-col>
                </v-row>
            </div>
        </v-container>



        <div class="view-toolbar mt-16">
            <v-container class="pa-0">
                <div class="app-tab-header d-flex">
                    <div class="tab-header-items text-center mr-7 active" data-item="header">
                        <a class="navigation-link navigation-link__hover p-relative text--h4 py-6 font-600 d-inline-block">
                            <I18nVue t='about_deposit' />
                        </a>
                    </div>
                    <div class="tab-header-items text-center mr-7" data-item="header">
                        <a class="navigation-link navigation-link__hover p-relative text--h4 py-6 font-600 d-inline-block">
                            <I18nVue t='tariffs_and_conditions'/>
                        </a>
                    </div>
                    <div class="tab-header-items text-center mr-7" data-item="header">
                        <a class="navigation-link navigation-link__hover p-relative text--h4 py-6 font-600 d-inline-block">
                            <I18nVue t='documents'/>
                        </a>
                    </div>
                </div>
            </v-container>
        </div>






        <div class="view-toolbar-content py-16 overflow-hidden">
            <div class="app-tab-content p-relative">
                <div class="tab-content-items active" data-item="content">
                    <about-deposit :depositDetail="depositDetailModel" />
                </div>
                <div class="tab-content-items" data-item="content">
                    <template>
                        <v-container>
                            <tariffs-and-conditions />
                        </v-container>
                    </template>
                </div>
                <div class="tab-content-items" data-item="content">
                    <documents/>
                </div>
            </div>
        </div>



    </div>
</template>

<script>
    import AboutDeposit from './components/AboutDeposit'
    import TariffsAndConditions from './components/TariffsAndConditions'
    import Documents from './components/Documents'
    import { appTab } from '@/utils/frontend'
    import I18nVue from '@/I18nVue'

    export default {
        name: 'index',
        components: {
            AboutDeposit,
            TariffsAndConditions,
            Documents,
            I18nVue,
        },
        data() {
            return {
                depositDetailModel: {},
                layout: false,
            }
        },
        mounted() {
            const $tabHeaderItems = document.querySelectorAll('[data-item="header"]')
            const $tabContentItems = document.querySelectorAll('[data-item="content"]')

            appTab($tabHeaderItems, $tabContentItems)

            this.getOne()
        },
        methods: {
            getOne() {
                this.$http.get(`1/deposit/${this.$route.params.id}/`).then(({ data }) => {
                    this.depositDetailModel = data
                    this.layout = true
                })
            },
        },
    }
</script>

<style></style>
