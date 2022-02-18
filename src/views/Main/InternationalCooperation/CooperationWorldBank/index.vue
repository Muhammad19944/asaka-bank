<template>
    <div class="cooperation-bank-view">
        <v-container>
            <div class="app-view-content">
                <v-row class="row-shuffle mb-8 mb-lg-16 pb-0 pb-lg-10">
                    <v-col lg="5">
                        <h3 class="font-600 dark-text mb-3">
                            <I18nVue t='InternationalCooperation.WorldBank.first'/>
                        </h3>

                        <p>
                            <I18nVue t='InternationalCooperation.WorldBank.text1'/>
                        </p>

                        <p>
                            <I18nVue t='InternationalCooperation.WorldBank.text2'/>
                        </p>
                    </v-col>
                    <v-col lg="5">
                        <v-responsive :aspect-ratio="16 / 9">
                            <img
                                src="/images/kredit-liniya-1.png"
                                alt="Credit image"
                                class="p-absolute w-100 h-100 img-contain"
                            />
                        </v-responsive>
                    </v-col>
                </v-row>

                <v-row class="row-shuffle mb-8 mb-lg-16 pb-0 pb-lg-10">
                    <v-col lg="5">
                        <h3 class="font-600 dark-text mb-3">
                            <I18nVue t='InternationalCooperation.WorldBank.second'/>
                        </h3>

                        <p>
                            <I18nVue t='InternationalCooperation.WorldBank.text3'/>
                        </p>

                        <p>
                            <I18nVue t='InternationalCooperation.WorldBank.text4'/>
                        </p>
                    </v-col>
                    <v-col lg="5">
                        <v-responsive :aspect-ratio="16 / 9">
                            <img
                                src="/images/kredit-liniya-2.png"
                                alt="Credit image"
                                class="p-absolute w-100 h-100 img-contain"
                            />
                        </v-responsive>
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
