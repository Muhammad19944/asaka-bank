<template>
    <div class="agreements-view">
        <v-container>
            <div class="app-content-view">
                <v-row>
                    <v-col md="6">
                        <p>
                            <I18nVue t='InternationalCooperation.Agreements.text1'/>
                        </p>

                        <p>
                            <I18nVue t='InternationalCooperation.Agreements.text2'/>
                        </p>

                        <p>
                            <I18nVue t='InternationalCooperation.Agreements.text3'/>
                        </p>

                        <p>
                            <I18nVue t='InternationalCooperation.Agreements.text4'/>
                        </p>
                    </v-col>

                    <v-spacer />

                    <v-col md="5">
                        <h4 class="font-weight-bold dark-text mb-5">
                            <I18nVue t='InternationalCooperation.Agreements.header'/>
                        </h4>
                        <div class="credit-widget pa-7 rounded-lg overflow-hidden">
                            <div class="app-ul">
                                <ul>
                                    <li><I18nVue t='InternationalCooperation.Agreements.header_li1'/></li>
                                    <li><I18nVue t='InternationalCooperation.Agreements.header_li2'/></li>
                                    <li><I18nVue t='InternationalCooperation.Agreements.header_li3'/></li>
                                    <li><I18nVue t='InternationalCooperation.Agreements.header_li4'/></li>
                                    <li><I18nVue t='InternationalCooperation.Agreements.header_li5'/></li>
                                    <li><I18nVue t='InternationalCooperation.Agreements.header_li6'/></li>
                                    <li><I18nVue t='InternationalCooperation.Agreements.header_li7'/></li>
                                    <li><I18nVue t='InternationalCooperation.Agreements.header_li8'/></li>
                                    <li><I18nVue t='InternationalCooperation.Agreements.header_li9'/></li>
                                    <li><I18nVue t='InternationalCooperation.Agreements.header_li10'/></li>
                                    <li><I18nVue t='InternationalCooperation.Agreements.header_li11'/></li>
                                    <li><I18nVue t='InternationalCooperation.Agreements.header_li12'/></li>
                                </ul>
                            </div>
                        </div>
                    </v-col>
                </v-row>
            </div>
        </v-container>

        <section class="section section-grey mt-10">
            <v-container>
                <h1 class="font-600 dark-text mb-1">
                    <I18nVue t='InternationalCooperation.Agreements.header2'/>
                </h1>
                <h4 class="font-600 dark-grey mb-8">
                    <I18nVue t='InternationalCooperation.Agreements.header2_sub'/>
                </h4>

                <div class="faq-content">
                    <div class="app-collapse">
                        <div class="app-collapse-item credit-widget rounded-lg">
                            <v-expansion-panels accordion>
                                <v-expansion-panel>
                                    <v-expansion-panel-header>
                                        <h4 class="font-600">
                                            «Asaka» bankda commerzban kag (germaniya) kredit liniyasi bo'yicha ma'lumot
                                        </h4>
                                    </v-expansion-panel-header>
                                    <v-expansion-panel-content>
                                        <div class="px-4 pb-4">
                                            <h4 class="font-600">
                                                I. Xorijiy kredit liniyasi yoki grant hisobidan kichik biznes va xususiy
                                                tadbirkorlik sub'ektlariga kredit ajratish to'g'risida ma'lumot
                                            </h4>
                                        </div>
                                        <v-simple-table class="app-table app-table__border">
                                            <template v-slot:default>
                                                <tbody>
                                                    <tr>
                                                        <td width="300" class="py-4">
                                                            <h4 class="font-600">
                                                                Kredit liniyasi mablag'larining yo'naltirish sohasi
                                                            </h4>
                                                        </td>
                                                        <td class="py-4">
                                                            <h5 class="font-600">Sanoat yoki qishloq xo'jaligi</h5>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td width="300" class="py-4">
                                                            <h4 class="font-600">
                                                                Kredit liniyasi mablag'larining yo'naltirish maqsadi
                                                            </h4>
                                                        </td>
                                                        <td class="py-4">
                                                            <h5 class="font-600">
                                                                Import asbob-uskuna va texnologiya sotib olish.
                                                            </h5>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </template>
                                        </v-simple-table>
                                    </v-expansion-panel-content>
                                </v-expansion-panel>
                            </v-expansion-panels>
                        </div>
                    </div>
                </div>
            </v-container>
        </section>

        <section class="section mb-n10">
            <v-container>
                <h3 class="font-600 dark-text mb-2">
                    <I18nVue t='InternationalCooperation.Agreements.commersant_bank'/>
                </h3>

                <div class="mb-10">
                    <p>
                        <I18nVue t='InternationalCooperation.Agreements.commersant_bank_sub'/>
                    </p>
                </div>

                <h3 class="font-600 dark-text mb-2">
                    <I18nVue t='InternationalCooperation.Agreements.header3'/>
                </h3>

                <div class="mb-10">
                    <p>
                        <I18nVue t='InternationalCooperation.Agreements.header3_sub'/>
                    </p>
                </div>

                <h3 class="font-600 dark-text mb-2">
                    <I18nVue t='InternationalCooperation.Agreements.header4'/>
                </h3>

                <div class="mb-10">
                    <p>
                        <I18nVue t='InternationalCooperation.Agreements.header3_sub'/>
                    </p>
                </div>
            </v-container>
        </section>
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
