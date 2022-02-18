<template>
    <div class="sms-notification-view">
        <v-container>
            <v-row>
                <v-col lg="5" order-lg="1">
                    <div class="">
                        <v-responsive :aspect-ratio="4 / 3">
                            <img
                                src="/images/sms_xabarnoma.png"
                                alt="Card image"
                                class="d-block p-absolute img-contain"
                            />
                        </v-responsive>
                    </div>
                </v-col>

	            <v-col lg="7">
		            <h2 class="font-600 dark-text mb-5">
			            <I18nVue t='Services.SMS.potentials'/>
		            </h2>

		            <h5 class="mb-3">
			            <I18nVue t='Services.SMS.text1'/>
		            </h5>

		            <h5 class="mb-3">
			            <I18nVue t='Services.SMS.text2'/>
		            </h5>

		            <h5 class="mb-3">
			            <I18nVue t='Services.SMS.text3'/>
		            </h5>
	            </v-col>
            </v-row>



            <section class="py-8">
                <v-container>
                    <h1 class="font-600 dark-text">
                        <I18nVue t='Services.SMS.activate'/>
                    </h1>
                    <span class="text--h3 grey--text d-block mt-2 mb-10">
                        <I18nVue t='Services.SMS.activate_sub'/>
                    </span>

                    <v-row>
                        <v-col lg="3" sm="6">
                            <div class="app-card-simple text-center transition-all py-10 px-7 rounded-lg h-100 mx-2">
                                <h1 class="font-300 text-extra-large primary-text">1</h1>

                                <v-divider style="border-color: rgba(var(--border-color), 1)" class="my-10" />

                                <h4 class="dark-text">
                                    <I18nVue t='Services.SMS.one'/>
                                </h4>
                            </div>
                        </v-col>

                        <v-col lg="3" sm="6">
                            <div class="app-card-simple text-center transition-all py-10 px-7 rounded-lg h-100 mx-2">
                                <h1 class="font-300 text-extra-large primary-text">2</h1>

                                <v-divider style="border-color: rgba(var(--border-color), 1)" class="my-10" />

                                <h4 class="dark-text">
                                    <I18nVue t='Services.SMS.two'/>
                                </h4>
                            </div>
                        </v-col>

                        <v-col lg="3" sm="6">
                            <div class="app-card-simple text-center transition-all py-10 px-7 rounded-lg h-100 mx-2">
                                <h1 class="font-300 text-extra-large primary-text">3</h1>

                                <v-divider style="border-color: rgba(var(--border-color), 1)" class="my-10" />

                                <h4 class="dark-text">
                                    <I18nVue t='Services.SMS.three'/>
                                </h4>
                            </div>
                        </v-col>

                        <v-col lg="3" sm="6">
                            <div
                                class="
                                    transition-all
                                    py-10
                                    px-7
                                    rounded-lg
                                    h-100
                                    mx-2
                                    primary-bg
                                    d-flex
                                    flex-column
                                    align-start
                                "
                            >
                                <h2 class="font-600">
                                    <I18nVue t='Services.SMS.contact_with_us'/>
                                </h2>

                                <h5 class="font-300 my-4">
                                    <I18nVue t='Services.SMS.contact_with_us_sub'/>
                                </h5>

                                <v-btn
	                                :to="{ name: 'BankOffice' }"
                                    depressed
                                    color="rgba(var(--main-primary), 1)"
                                    rounded
                                    min-width="192"
                                    min-height="50"
                                    class="mt-auto"
                                    style="background-color: #fff"
                                >
                                    <span class="primary-text font-700">
                                        <I18nVue t='Services.SMS.filial'/>
                                    </span>
                                </v-btn>
                            </div>
                        </v-col>
                    </v-row>
                </v-container>
            </section>




        </v-container>

        <section class="section-service section">
            <v-container>
                <v-row>
                    <v-col lg="4" md="6">
                        <router-link
                            :to="{ name: 'SMSNotification' }"
                            class="
                                app-slide-card
                                pa-8
                                mx-2
                                rounded-lg
                                overflow-hidden
                                d-flex
                                flex-column
                                text-decoration-none
                                p-relative
                            "
                        >
                            <PhoneSMSIcon />

                            <div class="pr-16 mt-auto">
                                <h2 class="font-600 dark-text my-2">
                                    <I18nVue t='Services.SMS.sms'/>
                                </h2>

                                <h5 class="mb-0 main-grey">
                                    <I18nVue t='Services.SMS.sms_sub'/>
                                </h5>
                            </div>

                            <div class="slide-card-angle d-flex align-center justify-center">
                                <chevron-right-icon size="2x" class="text-white"></chevron-right-icon>
                            </div>
                        </router-link>
                    </v-col>

                    <v-col lg="4" md="6">
                        <router-link
                            :to="{ name: 'BankOffice' }"
                            class="
                                app-slide-card
                                pa-8
                                mx-2
                                rounded-lg
                                overflow-hidden
                                d-flex
                                flex-column
                                text-decoration-none
                                p-relative
                            "
                        >
                            <CashMachineIcon />

                            <div class="pr-16 mt-auto">
                                <h2 class="font-600 dark-text my-2">
                                    <I18nVue t='Services.SMS.atm'/>
                                </h2>

                                <h5 class="mb-0 main-grey">
                                    <I18nVue t='Services.SMS.atm_sub'/>
                                </h5>
                            </div>

                            <div class="slide-card-angle d-flex align-center justify-center">
                                <chevron-right-icon size="2x" class="text-white"></chevron-right-icon>
                            </div>
                        </router-link>
                    </v-col>

                    <v-col lg="4" md="6">
                        <router-link
	                        :to="{ name: 'BankOffice' }"
                            class="
                                app-slide-card
                                pa-8
                                mx-2
                                rounded-lg
                                overflow-hidden
                                d-flex
                                flex-column
                                text-decoration-none
                                p-relative
                            "
                        >
                            <InfokioskIcon />

                            <div class="pr-16 mt-auto">
                                <h2 class="font-600 dark-text my-2">
                                    <I18nVue t='Services.SMS.info'/>
                                </h2>

                                <h5 class="mb-0 main-grey">
                                    <I18nVue t='Services.SMS.info_sub'/>
                                </h5>
                            </div>

                            <div class="slide-card-angle d-flex align-center justify-center">
                                <chevron-right-icon size="2x" class="text-white"></chevron-right-icon>
                            </div>
                        </router-link>
                    </v-col>
                </v-row>
            </v-container>
        </section>
    </div>
</template>

<script>
    import AppBreadCrumb from '@/components/AppBreadCrumb'
    import { ChevronRightIcon } from 'vue-feather-icons'
    import PhoneSMSIcon from '@/components/Icons/PhoneSMSIcon'
    import CashMachineIcon from '@/components/Icons/CashMachineIcon'
    import InfokioskIcon from '@/components/Icons/InfokioskIcon'
    import I18nVue from '@/I18nVue'

    export default {
        name: 'index',
        components: {
            AppBreadCrumb,
            ChevronRightIcon,
            PhoneSMSIcon,
            CashMachineIcon,
            InfokioskIcon,
            I18nVue,
        },
    }
</script>

<style></style>
