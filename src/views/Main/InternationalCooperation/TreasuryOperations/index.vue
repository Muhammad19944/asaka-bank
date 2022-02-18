<template>
    <div class="treasury-view">
        <v-container>
            <div class="app-content-view">
                <h2 class="font-600 dark-text mb-4">
                    <I18nVue t='InternationalCooperation.TreasuryOperations.header1'/>
                </h2>

                <div class="credit-widget pa-8 rounded-lg overflow-hidden mb-15">
                    <div class="app-ul">
                        <ul>
                            <li>
                                <I18nVue t='InternationalCooperation.TreasuryOperations.header1_li1'/>
                            </li>
                            <li>
                                <I18nVue t='InternationalCooperation.TreasuryOperations.header1_li2'/>
                            </li>
                            <li><I18nVue t='InternationalCooperation.TreasuryOperations.header1_li3'/></li>
                        </ul>
                    </div>
                </div>

                <h2 class="font-600 dark-text mb-4"><I18nVue t='InternationalCooperation.TreasuryOperations.header2'/></h2>

                <div class="credit-widget pa-8 rounded-lg overflow-hidden mb-15">
                    <div class="app-ul">
                        <ul>
                            <li>
                                <I18nVue t='InternationalCooperation.TreasuryOperations.header2_li1'/>
                            </li>
                            <li>
                                <I18nVue t='InternationalCooperation.TreasuryOperations.header2_li2'/>
                            </li>
                            <li>
                                <I18nVue t='InternationalCooperation.TreasuryOperations.header2_li3'/>
                            </li>
                            <li>
                                <I18nVue t='InternationalCooperation.TreasuryOperations.header2_li4'/>
                            </li>
                        </ul>
                    </div>
                </div>

                <h2 class="font-600 dark-text mb-4">
                    <I18nVue t='InternationalCooperation.TreasuryOperations.header3'/>
                </h2>

                <div class="credit-widget pa-8 rounded-lg overflow-hidden mb-15">
                    <div class="app-ul">
                        <ul>
                            <li>
                                <I18nVue t='InternationalCooperation.TreasuryOperations.header3_li1'/>
                            </li>
                            <li>
                                <I18nVue t='InternationalCooperation.TreasuryOperations.header3_li2'/>
                            </li>
                        </ul>
                    </div>
                </div>
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
