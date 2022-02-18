<template>
    <div class="documentary-transaction-view">
        <v-container>
            <div class="app-view-content">
                <v-row>
                    <v-col md="6">
                        <p>
<!--                            <span class="font-700 dark-text">Hujjatli operatsiyalar</span> mijozlarning tashqi savdo
                            operatsiyalari paytida xavfini kamaytirishga, pul oqimlarini ko'paytirishga, xorijiy banklar
                            bilan ishonchli aloqalarni rivojlantirishga va mustahkamlashga yordam beradi.-->
                            <I18nVue t='Cooperative.FInancing.DocumentaryOperations.text1'/>

                        </p>

                        <p>
                            <I18nVue t='Cooperative.FInancing.DocumentaryOperations.text2'/>
                        </p>

                        <p>
                            <I18nVue t='Cooperative.FInancing.DocumentaryOperations.text3'/>
                        </p>
                    </v-col>

                    <v-col md="6">
                        <div class="credit-widget pa-7 rounded-lg overflow-hidden">
                            <h5 class="font-700 dark-text mb-5">
                                <I18nVue t='Cooperative.FInancing.DocumentaryOperations.propositions'/>
                            </h5>

                            <div class="app-ul">
                                <ul>
                                    <li><I18nVue t='Cooperative.FInancing.DocumentaryOperations.propositions1'/></li>
                                    <li><I18nVue t='Cooperative.FInancing.DocumentaryOperations.propositions2'/></li>
                                    <li><I18nVue t='Cooperative.FInancing.DocumentaryOperations.propositions3'/></li>
                                    <li><I18nVue t='Cooperative.FInancing.DocumentaryOperations.propositions4'/></li>
                                    <li><I18nVue t='Cooperative.FInancing.DocumentaryOperations.propositions5'/></li>
                                </ul>
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
        name: 'DocumentaryTransactions',
        components:{
            I18nVue
        }
    }
</script>

<style></style>
