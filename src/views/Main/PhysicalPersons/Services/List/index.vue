<template>
    <div class="services-list-view">
        <section class="section section-grey">
            <v-container>
                <div class="view-title mb-15">
                    <h1 class="font-600 dark-text align-self-center mb-3">
                        <I18nVue t='Services.online_services'/>
                    </h1>
                </div>

                <v-row>
                    <v-col lg="4" sm="6">
                        <router-link
                            :to="{ name: 'MobileBank' }"
                            class="credit-widget pa-6 rounded-lg d-flex align-center text-decoration-none h-100"
                        >
                            <v-row>
                                <v-col md="7" align-self="center">
                                    <h3 class="font-600 dark-text mb-1"><I18nVue t='Services.mobile_bank'/></h3>

                                    <h5 class="dark-grey"><I18nVue t='Services.on_arm'/></h5>
                                </v-col>
                                <v-col md="5">
                                    <v-responsive :aspect-ratio="2.5 / 2">
                                        <img
                                            src="/images/def-1.png"
                                            alt="Image"
                                            class="p-absolute w-100 h-100 img-contain"
                                        />
                                    </v-responsive>
                                </v-col>
                            </v-row>
                        </router-link>
                    </v-col>

                    <v-col lg="4" sm="6">
                        <router-link
                            :to="{ name: 'SMSNotification' }"
                            class="credit-widget pa-6 rounded-lg d-flex align-center text-decoration-none h-100"
                        >
                            <v-row>
                                <v-col md="7" align-self="center">
                                    <h3 class="font-600 dark-text mb-1">
                                        <I18nVue t='Services.sms'/>
                                    </h3>

                                    <h5 class="dark-grey">
                                        <I18nVue t='Services.payments'/>
                                    </h5>
                                </v-col>
                                <v-col md="5">
                                    <v-responsive :aspect-ratio="2.5 / 2">
                                        <img
                                            src="/images/def-2.png"
                                            alt="Image"
                                            class="p-absolute w-100 h-100 img-contain"
                                        />
                                    </v-responsive>
                                </v-col>
                            </v-row>
                        </router-link>
                    </v-col>

<!--                    <v-col lg="4" sm="6">-->
<!--                        <router-link-->
<!--                            :to="{ name: 'P2PMoneyTransfer' }"-->
<!--                            class="credit-widget pa-6 rounded-lg d-flex align-center text-decoration-none h-100"-->
<!--                        >-->
<!--                            <v-row>-->
<!--                                <v-col md="7" align-self="center">-->
<!--                                    <h3 class="font-600 dark-text mb-1">-->
<!--                                        <I18nVue t='Services.money_transfer'/>-->
<!--                                    </h3>-->

<!--                                    <h5 class="dark-grey">-->
<!--                                        <I18nVue t='Services.money_transfer_sub'/>-->
<!--                                    </h5>-->
<!--                                </v-col>-->
<!--                                <v-col md="5">-->
<!--                                    <v-responsive :aspect-ratio="2.5 / 2">-->
<!--                                        <img-->
<!--                                            src="/images/def-3.png"-->
<!--                                            alt="Image"-->
<!--                                            class="p-absolute w-100 h-100 img-contain"-->
<!--                                        />-->
<!--                                    </v-responsive>-->
<!--                                </v-col>-->
<!--                            </v-row>-->
<!--                        </router-link>-->
<!--                    </v-col>-->

                    <v-col lg="4" sm="6">
                        <router-link
                            :to="{ name: 'CreditCalc' }"
                            class="credit-widget pa-6 rounded-lg d-flex align-center text-decoration-none h-100"
                        >
                            <v-row>
                                <v-col md="7" align-self="center">
                                    <h3 class="font-600 dark-text mb-1">
                                        <I18nVue t='Services.credit_calc'/>
                                    </h3>

                                    <h5 class="dark-grey">
                                        <I18nVue t='Services.credit_calc_sub'/>
                                    </h5>
                                </v-col>
                                <v-col md="5">
                                    <v-responsive :aspect-ratio="2.5 / 2">
                                        <img
                                            src="/images/def-4.png"
                                            alt="Image"
                                            class="p-absolute w-100 h-100 img-contain"
                                        />
                                    </v-responsive>
                                </v-col>
                            </v-row>
                        </router-link>
                    </v-col>

                    <v-col lg="4" sm="6">
                        <router-link
                            :to="{ name: 'DepositCalc' }"
                            class="credit-widget pa-6 rounded-lg d-flex align-center text-decoration-none h-100"
                        >
                            <v-row>
                                <v-col md="7" align-self="center">
                                    <h3 class="font-600 dark-text mb-1">
                                        <I18nVue t='Services.deposit_calc'/>
                                    </h3>

                                    <h5 class="dark-grey">
                                        <I18nVue t='Services.deposit_calc_sub'/>
                                    </h5>
                                </v-col>
                                <v-col md="5">
                                    <v-responsive :aspect-ratio="2.5 / 2">
                                        <img
                                            src="/images/def-5.png"
                                            alt="Image"
                                            class="p-absolute w-100 h-100 img-contain"
                                        />
                                    </v-responsive>
                                </v-col>
                            </v-row>
                        </router-link>
                    </v-col>

                    <v-col lg="4" sm="6">
                        <router-link
                            :to="{ name: 'CardOpen' }"
                            class="credit-widget pa-6 rounded-lg d-flex align-center text-decoration-none h-100"
                        >
                            <v-row>
                                <v-col md="7" align-self="center">
                                    <h3 class="font-600 dark-text mb-1">
                                        <I18nVue t='Services.open_card'/>
                                    </h3>

                                    <h5 class="dark-grey">
                                        <I18nVue t='Services.open_card_sub'/>
                                    </h5>
                                </v-col>
                                <v-col md="5">
                                    <v-responsive :aspect-ratio="2.5 / 2">
                                        <img
                                            src="/images/def-6.png"
                                            alt="Image"
                                            class="p-absolute w-100 h-100 img-contain"
                                        />
                                    </v-responsive>
                                </v-col>
                            </v-row>
                        </router-link>
                    </v-col>

                    <v-col lg="4" sm="6">
                        <router-link
                            :to="{ name: 'OnlineCredit' }"
                            class="credit-widget pa-6 rounded-lg d-flex align-center text-decoration-none h-100"
                        >
                            <v-row>
                                <v-col md="7" align-self="center">
                                    <h3 class="font-600 dark-text mb-1">
                                        <I18nVue t='Services.online_credit'/>
                                    </h3>

                                    <h5 class="dark-grey">
                                        <I18nVue t='Services.online_credit_sub'/>
                                    </h5>
                                </v-col>
                                <v-col md="5">
                                    <v-responsive :aspect-ratio="2.5 / 2">
                                        <img
                                            src="/images/def-7.png"
                                            alt="Image"
                                            class="p-absolute w-100 h-100 img-contain"
                                        />
                                    </v-responsive>
                                </v-col>
                            </v-row>
                        </router-link>
                    </v-col>

                    <v-col lg="4" sm="6">
                        <router-link
                            :to="{ name: 'DepositOpen' }"
                            class="credit-widget pa-6 rounded-lg d-flex align-center text-decoration-none h-100"
                        >
                            <v-row>
                                <v-col md="7" align-self="center">
                                    <h3 class="font-600 dark-text mb-1">
                                        <I18nVue t='Services.open_deposit'/>
                                    </h3>

                                    <h5 class="dark-grey">
                                        <I18nVue t='Services.open_deposit_sub'/>
                                    </h5>
                                </v-col>
                                <v-col md="5">
                                    <v-responsive :aspect-ratio="2.5 / 2">
                                        <img
                                            src="/images/def-8.png"
                                            alt="Image"
                                            class="p-absolute w-100 h-100 img-contain"
                                        />
                                    </v-responsive>
                                </v-col>
                            </v-row>
                        </router-link>
                    </v-col>

                    <v-col lg="4" sm="6">
                        <router-link
                            :to="{ name: 'StatusApplication' }"
                            class="credit-widget pa-6 rounded-lg d-flex align-center text-decoration-none h-100"
                        >
                            <v-row>
                                <v-col md="7" align-self="center">
                                    <h3 class="font-600 dark-text mb-1">
                                        <I18nVue t='Services.check_application'/>
                                    </h3>

                                    <h5 class="dark-grey">
                                        <I18nVue t='Services.check_application_sub'/>
                                    </h5>
                                </v-col>
                                <v-col md="5">
                                    <v-responsive :aspect-ratio="2.5 / 2">
                                        <img
                                            src="/images/def-9.png"
                                            alt="Image"
                                            class="p-absolute w-100 h-100 img-contain"
                                        />
                                    </v-responsive>
                                </v-col>
                            </v-row>
                        </router-link>
                    </v-col>
                </v-row>

                <div class="view-title my-15">
                    <h1 class="font-600 dark-text align-self-center mb-3">
                        <I18nVue t='Services.offline_services'/>
                    </h1>
                </div>

                <v-row>
                    <v-col lg="4" sm="6">
                        <router-link
                            :to="{ name: 'BankOffice' }"
                            class="credit-widget pa-6 rounded-lg d-flex align-center text-decoration-none h-100"
                        >
                            <v-row>
                                <v-col md="7" align-self="center">
                                    <h3 class="font-600 dark-text mb-1">
                                        <I18nVue t='Services.offices'/>
                                    </h3>

                                    <h5 class="dark-grey">
                                        <I18nVue t='Services.offices_sub'/>
                                    </h5>
                                </v-col>
                                <v-col md="5">
                                    <v-responsive :aspect-ratio="2.5 / 2">
                                        <img
                                            src="/images/def-10.png"
                                            alt="Image"
                                            class="p-absolute w-100 h-100 img-contain"
                                        />
                                    </v-responsive>
                                </v-col>
                            </v-row>
                        </router-link>
                    </v-col>

                    <v-col lg="4" sm="6">
                        <router-link
                            :to="{ name: 'CurrencyExchange' }"
                            class="credit-widget pa-6 rounded-lg d-flex align-center text-decoration-none h-100"
                        >
                            <v-row>
                                <v-col md="7" align-self="center">
                                    <h3 class="font-600 dark-text mb-1">
                                        <I18nVue t='Services.exchange'/>
                                    </h3>

                                    <h5 class="dark-grey">
                                        <I18nVue t='Services.exchange_sub'/>
                                    </h5>
                                </v-col>
                                <v-col md="5">
                                    <v-responsive :aspect-ratio="2.5 / 2">
                                        <img
                                            src="/images/def-11.png"
                                            alt="Image"
                                            class="p-absolute w-100 h-100 img-contain"
                                        />
                                    </v-responsive>
                                </v-col>
                            </v-row>
                        </router-link>
                    </v-col>

                    <v-col lg="4" sm="6">
                        <router-link
                            :to="{ name: 'SaveMoney' }"
                            class="credit-widget pa-6 rounded-lg d-flex align-center text-decoration-none h-100"
                        >
                            <v-row>
                                <v-col md="7" align-self="center">
                                    <h3 class="font-600 dark-text mb-1">
                                        <I18nVue t='Services.deposit_box'/>
                                    </h3>

                                    <h5 class="dark-grey">
                                        <I18nVue t='Services.deposit_box_sub'/>
                                    </h5>
                                </v-col>
                                <v-col md="5">
                                    <v-responsive :aspect-ratio="2.5 / 2">
                                        <img
                                            src="/images/def-11.png"
                                            alt="Image"
                                            class="p-absolute w-100 h-100 img-contain"
                                        />
                                    </v-responsive>
                                </v-col>
                            </v-row>
                        </router-link>
                    </v-col>

                    <v-col lg="4" sm="6">
                        <router-link
                            :to="{ name: 'MoneyTransfer' }"
                            class="credit-widget pa-6 rounded-lg d-flex align-center text-decoration-none h-100"
                        >
                            <v-row>
                                <v-col md="7" align-self="center">
                                    <h3 class="font-600 dark-text mb-1">
                                        <I18nVue t='Services.money_transfer_offline'/>
                                    </h3>

                                    <h5 class="dark-grey">
                                        <I18nVue t='Services.money_transfer_sub_offline'/>
                                    </h5>
                                </v-col>
                                <v-col md="5">
                                    <v-responsive :aspect-ratio="2.5 / 2">
                                        <img
                                            src="/images/def-12.png"
                                            alt="Image"
                                            class="p-absolute w-100 h-100 img-contain"
                                        />
                                    </v-responsive>
                                </v-col>
                            </v-row>
                        </router-link>
                    </v-col>

                    <v-col lg="4" sm="6">
                        <router-link
                            :to="{ name: 'Tariffs' }"
                            class="credit-widget pa-6 rounded-lg d-flex align-center text-decoration-none h-100"
                        >
                            <v-row>
                                <v-col md="7" align-self="center">
                                    <h3 class="font-600 dark-text mb-1">
                                        <I18nVue t='Services.tariffs'/>
                                    </h3>

                                    <h5 class="dark-grey">
                                        <I18nVue t='Services.tariffs_sub'/>
                                    </h5>
                                </v-col>
                                <v-col md="5">
                                    <v-responsive :aspect-ratio="2.5 / 2">
                                        <img
                                            src="/images/def-13.png"
                                            alt="Image"
                                            class="p-absolute w-100 h-100 img-contain"
                                        />
                                    </v-responsive>
                                </v-col>
                            </v-row>
                        </router-link>
                    </v-col>
                </v-row>
            </v-container>
        </section>
    </div>
</template>

<script>
    import I18nVue from '@/I18nVue'
    export default {
        name: 'index',
        components: {
            I18nVue,
        }
    }
</script>

<style></style>
