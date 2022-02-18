<template>
    <footer class="app-footer">
        <div class="footer-top border-top py-10">
            <v-container>
                <v-row >
                    <v-col lg="3" sm="6" >
                        <div class="mb-4">
                            <router-link
                                :to="{ name: 'BankOffice' }"
                                class="navigation-link font-600 text--h4 text-decoration-none d-inline-block"
                            >
                                <I18nVue t="branches_and_ATMs" />
                            </router-link>
                        </div>

                        <div class="mb-4">
                            <router-link
                                :to="{ name: 'PressCenterClient' }"
                                class="navigation-link font-600 text--h4 text-decoration-none d-inline-block"
                            >
                                <I18nVue t="press_center" />
                            </router-link>
                        </div>

<!--                        <div class="mb-4">-->
<!--                            <router-link-->
<!--                                :to="{ name: 'Requisites' }"-->
<!--                                class="navigation-link font-600 text&#45;&#45;h4 text-decoration-none d-inline-block"-->
<!--                            >-->
<!--                                <I18nVue t="props" />-->
<!--                            </router-link>-->
<!--                        </div>-->

                        <div class="mb-4">
                            <router-link
                                :to="{ name: 'CurrencyExchange' }"
                                class="navigation-link font-600 text--h4 text-decoration-none d-inline-block"
                            >
                                <I18nVue t='currency_exchange'/>
                            </router-link>
                        </div>
                    </v-col>

                    <v-col lg="3" sm="6" >
                        <div class="mb-4">
                            <router-link
                                :to="{ name: 'FAQ' }"
                                class="navigation-link font-600 text--h4 text-decoration-none d-inline-block"
                            >
                                <I18nVue t="info_center" />
                            </router-link>
                        </div>

                        <div class="mb-4">
                            <router-link
                                :to="{ name: 'Tariffs' }"
                                class="navigation-link font-600 text--h4 text-decoration-none d-inline-block"
                            >
                                <I18nVue t="tariffs" />
                            </router-link>
                        </div>

                        <div class="mb-4">
                            <router-link
                                :to="{ name: 'InternalDocuments' }"
                                class="navigation-link font-600 text--h4 text-decoration-none d-inline-block"
                            >
                                <I18nVue t="files" />
                            </router-link>
                        </div>

                        <div class="mb-4">
                            <router-link
                                :to="{ name: 'Career' }"
                                class="navigation-link font-600 text--h4 text-decoration-none d-inline-block"
                            >
                                <I18nVue t='career'/>
                            </router-link>
                        </div>
                    </v-col>




                    <v-col lg="3" sm="6" >
                        <span class="text-small d-block">
                            <I18nVue t="social" />
                        </span>

                        <a target='_blank' href="https://www.facebook.com/bankasaka/" class="social-icons d-inline-block navigation-link mr-5 mt-3">
                            <facebook-icon size="1.5x" class="main-grey" />
                        </a>

                        <a target='_blank' href="https://www.instagram.com/asaka_bank/" class="social-icons d-inline-block mr-5 mt-3">
                            <instagram-icon size="1.5x" class="main-grey" />
                        </a>

                        <a target='_blank' href="https://t.me/bank_asaka" class="social-icons d-inline-block mr-5 mt-3">
                            <send-icon size="1.5x" class="main-grey" />
                        </a>

                        <a target='_blank' href="https://t.me/Asaka_bot" class="social-icons d-inline-block mr-5 mt-3">
                            <svg
                                style="width: 1.7rem; height: 1.7rem"
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fal"
                                data-icon="robot"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 640 512"
                                class="main-grey"
                            >
                                <path
                                    fill="currentColor"
                                    d="M192,416h64V384H192ZM576,224H544V192a95.99975,95.99975,0,0,0-96-96H336V16a16,16,0,0,0-32,0V96H192a95.99975,95.99975,0,0,0-96,96v32H64a31.99908,31.99908,0,0,0-32,32V384a32.00033,32.00033,0,0,0,32,32H96a95.99975,95.99975,0,0,0,96,96H448a95.99975,95.99975,0,0,0,96-96h32a32.00033,32.00033,0,0,0,32-32V256A31.99908,31.99908,0,0,0,576,224ZM96,384H64V256H96Zm416,32a64.18916,64.18916,0,0,1-64,64H192a64.18916,64.18916,0,0,1-64-64V192a63.99942,63.99942,0,0,1,64-64H448a63.99942,63.99942,0,0,1,64,64Zm64-32H544V256h32ZM416,192a64,64,0,1,0,64,64A64.07333,64.07333,0,0,0,416,192Zm0,96a32,32,0,1,1,32-32A31.97162,31.97162,0,0,1,416,288ZM384,416h64V384H384Zm-96,0h64V384H288ZM224,192a64,64,0,1,0,64,64A64.07333,64.07333,0,0,0,224,192Zm0,96a32,32,0,1,1,32-32A31.97162,31.97162,0,0,1,224,288Z"
                                />
                            </svg>
                        </a>
                    </v-col>

                    <v-col lg="3" sm="6" >
                        <span class="text-small d-block mb-2">
                            <I18nVue t="day_night_worker" />
                        </span>
                        <a href="tel:1152" class="text--h2 primary-text font-300 mb-5 text-decoration-none"> 1152 </a>
                        <span class="text-small d-block mb-2">
                            <I18nVue t="hotline" />
                        </span>

                        <a
                            href="tel:+998712005522"
                            class="text--h2 primary-text font-300 text-decoration-none d-inline-block mb-3"
                        >
                            (+998 71) 200-55-22
                        </a>

                        <h5 class="font-300">
                            <I18nVue t="working_time" />
                        </h5>
                    </v-col>
                </v-row>
            </v-container>
        </div>

        <div class="footer-bottom py-5">
            <v-container>
                <v-row>
                    <v-col md="9" align-self="center">
                        <p class="mb-0">
                            <I18nVue t="all_rights" />
                        </p>

                        <p class="mt-3 mb-0">
                            <I18nVue t="materials" />
                            <a
                                href="https://asakabank.uz"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="text-decoration-none primary-text font-600"
                            >
                                www.asakabank.uz
                            </a>
                            <I18nVue t="mandatory" />
                        </p>
                    </v-col>
                    <v-col md="3" align-self="center">
                        <div class="d-flex">
                            <v-spacer class="d-none d-md-block" />
                            <!--COUNTER KING-->
                            <a
                                href="https://old.asakabank.uz/uz"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="navigation-link d-flex align-center text-decoration-none font-600 main-grey"
                            >
                                <globe-icon size="1.2x" class="primary-text mr-2" />
                                <I18nVue t="link_to_old_site" />
                            </a>
                        </div>
                    </v-col>
                </v-row>

            </v-container>
        </div>
    </footer>
</template>

<script>
    import { GlobeIcon, FacebookIcon, InstagramIcon, SendIcon } from 'vue-feather-icons'
    import I18nVue from '@/I18nVue'

    export default {
        name: 'index',
        components: {
            I18nVue,
            GlobeIcon,
            FacebookIcon,
            InstagramIcon,
            SendIcon,
        },
    }
</script>

<style>
    .footer-bottom {
        background: rgba(var(--grey-light));
    }
</style>
