<template>
    <div class="ratings-view">
        <v-container>
            <div class="app-content-view">
                <v-row>
                    <v-col lg="6" md="6" >
                        <div class="app-card credit-widget rounded-lg overflow-hidden h-100 d-flex flex-column">
                            <div class="slide-header-2 credit-widget d-flex align-center justify-center mx-lg-16">
                                <img src="/images/rating-02.png" alt="Partner Image" class="transition-all" />
                            </div>
                            <div class="slide-content pa-8">
                                <h3 class="font-600 dark-text mb-4">
                                    <I18nVue t='InternationalCooperation.Ratings.Fitch.header'/>
                                </h3>

                                <v-divider style="border-color: rgba(var(--border-color), 1)" />

                                <v-row class="mt-4">
                                    <v-col md="7">
                                        <h5>
                                            <I18nVue t='InternationalCooperation.Ratings.Fitch.text1'/>
                                        </h5>
                                    </v-col>
                                    <v-col md="5">
                                        <h5 class="font-700 dark-text">BВ-, <I18nVue t='InternationalCooperation.Ratings.Fitch.stable'/></h5>
                                    </v-col>

                                    <v-col md="7">
                                        <h5>
                                            <I18nVue t='InternationalCooperation.Ratings.Fitch.text2'/>
                                        </h5>
                                    </v-col>
                                    <v-col md="5">
                                        <h5 class="font-700 dark-text">B, <I18nVue t='InternationalCooperation.Ratings.Fitch.stable'/></h5>
                                    </v-col>

                                    <v-col md="7">
                                        <h5><I18nVue t='InternationalCooperation.Ratings.Fitch.text3'/></h5>
                                    </v-col>
                                    <v-col md="5">
                                        <h5 class="font-700 dark-text">B</h5>
                                    </v-col>

                                    <v-col md="7">
                                        <h5><I18nVue t='InternationalCooperation.Ratings.Fitch.text4'/></h5>
                                    </v-col>
                                    <v-col md="5">
                                        <h5 class="font-700 dark-text">3</h5>
                                    </v-col>

                                    <v-col md="7">
                                        <h5><I18nVue t='InternationalCooperation.Ratings.Fitch.text5'/></h5>
                                    </v-col>
                                    <v-col md="5">
                                        <h5 class="font-700 dark-text">BB-</h5>
                                    </v-col>
                                </v-row>
                            </div>
                        </div>
                    </v-col>

                    <v-col lg="6" md="6" >
                        <div class="app-card credit-widget rounded-lg overflow-hidden h-100 d-flex flex-column">
                            <div class="slide-header-2 credit-widget d-flex align-center justify-center mx-lg-16">
                                <img src="/images/rating-01.png" alt="Partner Image" class="transition-all" />
                            </div>
                            <div class="slide-content pa-8">
                                <h3 class="font-600 dark-text mb-4">
                                    <I18nVue t='InternationalCooperation.Ratings.Moody.header'/>
                                </h3>

                                <v-divider style="border-color: rgba(var(--border-color), 1)" />

                                <v-row class="mt-4">
                                    <v-col md="7">
                                        <h5>
                                            <I18nVue t='InternationalCooperation.Ratings.Moody.text1'/>
                                        </h5>
                                    </v-col>
                                    <v-col md="5">
                                        <h5 class="font-700 dark-text">B1</h5>
                                    </v-col>

                                    <v-col md="7">
                                        <h5>
                                            <I18nVue t='InternationalCooperation.Ratings.Moody.text2'/>
                                        </h5>
                                    </v-col>
                                    <v-col md="5">
                                        <h5 class="font-700 dark-text">B3</h5>
                                    </v-col>

                                    <v-col md="7">
                                        <h5>
                                            <I18nVue t='InternationalCooperation.Ratings.Moody.text3'/>
                                        </h5>
                                    </v-col>
                                    <v-col md="5">
                                        <h5 class="font-700 dark-text">B3</h5>
                                    </v-col>

                                    <v-col md="7">
                                        <h5>
                                            <I18nVue t='InternationalCooperation.Ratings.Moody.text4'/>
                                        </h5>
                                    </v-col>
                                    <v-col md="5">
                                        <h5 class="font-700 dark-text">B3</h5>
                                    </v-col>

                                    <v-col md="7">
                                        <h5>
                                            <I18nVue t='InternationalCooperation.Ratings.Moody.text5'/>
                                        </h5>
                                    </v-col>
                                    <v-col md="5">
                                        <h5 class="font-700 dark-text">B3</h5>
                                    </v-col>

                                    <v-col md="7">
                                        <h5><I18nVue t='InternationalCooperation.Ratings.Moody.text6'/></h5>
                                    </v-col>
                                    <v-col md="5">
                                        <h5 class="font-700 dark-text">B3</h5>
                                    </v-col>
                                </v-row>
                            </div>
                        </div>
                    </v-col>
                </v-row>
            </div>
        </v-container>
    </div>
</template>

<script>
    import I18nVue from '@/I18nVue'
    export default {
        name: 'index',
        components:{
            I18nVue
        }
    }
</script>

<style></style>
