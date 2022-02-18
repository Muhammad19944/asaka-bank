<template>
    <div class="terms-view">
        <v-row>
	        <v-col md="6">
		        <h2 class="font-600 dark-text mb-8">
			        <I18nVue t="TermsAndConditionsTitle" />
		        </h2>
		        <div class="credit-widget pa-7 rounded-lg overflow-hidden">
			        <div v-if="property" class="app-ul">
				        <span v-for="item of property" v-if="$i18n.locale === 'en'" v-html="item.condition_en" />
				        <span v-for="item of property" v-if="$i18n.locale === 'ru'" v-html="item.condition_ru" />
				        <span v-for="item of property" v-if="$i18n.locale === 'uz'" v-html="item.condition_uz" />
			        </div>
		        </div>
	        </v-col>
	        <template v-if="$route.params.id == 6">
		        <template v-if="$i18n.locale === 'uz'">
			        <v-col md="6">
				        <h2 class="font-600 dark-text mb-8">
					        Kreditni to'lash
				        </h2>
				        <div class="credit-widget pa-7 rounded-lg overflow-hidden">
					        Kredit bo'yicha foizlar har oy to'lanadi, ajratilgan limitning foydalanilgan mablag'lari uchun foizlar hisoblanadi.
				        </div>

				        <h2 class="font-600 dark-text mb-8 mt-10">
					        Imtiyozli davr
				        </h2>
				        <div class="credit-widget pa-7 rounded-lg overflow-hidden">
					        Asosiy qarzni to'lash bo'yicha imtiyozli davr - <b> 6 oy</b>, asosiy qarz kreditlashning oxirgi 6 oyida teng qismlarda to'lanadi.
				        </div>
			        </v-col>
		        </template>

		        <template v-if="$i18n.locale === 'ru'">
			        <v-col md="6">
				        <h2 class="font-600 dark-text mb-8">
					        Погашение кредита
				        </h2>
				        <div class="credit-widget pa-7 rounded-lg overflow-hidden">
					        Проценты по кредиту погашаются ежемесячно, начисление процентов осуществляется на использованные средства выделенного лимита
				        </div>

				        <h2 class="font-600 dark-text mb-8 mt-10">
					        Льготный период
				        </h2>
				        <div class="credit-widget pa-7 rounded-lg overflow-hidden">
					        Льготный период по погашению основного долга составляет 6 месяцев, погашение основного долга осуществляется равными долями в последние <b>6 месяцев</b> кредитования.
				        </div>
			        </v-col>
		        </template>
	        </template>

	        <template v-if="$route.params.id == 33">
		        <v-col md="6">
			        <h2 class="font-600 dark-text mb-8">
				        <I18nVue t="PhysicalPersons.Credits.interest_rates" />
			        </h2>
			        <div class="credit-widget pa-7 rounded-lg overflow-hidden">
				        <v-simple-table class="border-all">
					        <tr>
						        <th class="pa-2 border-right">
							        <span class="font-700">{{ $t("CreditCalculator.initial_payment") }}</span>
						        </th>
						        <th class="pa-2 border-right">
							        <span class="font-700">{{ $t("PhysicalPersons.Credits.annuity") }}</span>
						        </th>
						        <th class="pa-2">
							        <span class="font-700">{{ $t("PhysicalPersons.Credits.differential") }}</span>
						        </th>
					        </tr>
					        <tr>
						        <td class="pa-2 border-bottom border-top"></td>
						        <td class="pa-2 border-bottom border-top" style="text-align: center">
							        <span v-if="$i18n.locale === 'uz'" class="font-700">36 oy</span>
							        <span v-if="$i18n.locale === 'ru'" class="font-700">36 месяцев</span>
							        <span v-if="$i18n.locale === 'en'" class="font-700">36 months</span>
						        </td>
						        <td class="pa-2 border-bottom border-top"></td>
					        </tr>
					        <tr>
						        <td class="pa-2 border-right text-center border-bottom">30%</td>
						        <td class="pa-2 border-right text-center border-bottom">23%</td>
						        <td class="pa-2 text-center border-bottom">25%</td>
					        </tr>
					        <tr>
						        <td class="pa-2 border-right text-center border-bottom">40%</td>
						        <td class="pa-2 border-right text-center border-bottom">22%</td>
						        <td class="pa-2 text-center border-bottom">24%</td>
					        </tr>
					        <tr>
						        <td class="pa-2 border-right text-center border-bottom">50%</td>
						        <td class="pa-2 border-right text-center border-bottom">21%</td>
						        <td class="pa-2 text-center border-bottom">23%</td>
					        </tr>
					        <tr>
						        <td class="pa-2 border-bottom"></td>
						        <td class="pa-2 border-bottom" style="text-align: center">
							        <span v-if="$i18n.locale === 'uz'" class="font-700">48 oy</span>
							        <span v-if="$i18n.locale === 'ru'" class="font-700">48 месяцев</span>
							        <span v-if="$i18n.locale === 'en'" class="font-700">48 months</span>
						        </td>
						        <td class="pa-2 border-bottom"></td>
					        </tr>
					        <tr>
						        <td class="pa-2 border-right text-center border-bottom">30%</td>
						        <td class="pa-2 border-right text-center border-bottom">24%</td>
						        <td class="pa-2 text-center border-bottom">26%</td>
					        </tr>
					        <tr>
						        <td class="pa-2 border-right text-center border-bottom">40%</td>
						        <td class="pa-2 border-right text-center border-bottom">23%</td>
						        <td class="pa-2 text-center border-bottom">25%</td>
					        </tr>
					        <tr>
						        <td class="pa-2 border-right text-center border-bottom">50%</td>
						        <td class="pa-2 border-right text-center border-bottom">22%</td>
						        <td class="pa-2 text-center border-bottom">24%</td>
					        </tr>
					        <tr>
						        <td class="pa-2 border-bottom"></td>
						        <td class="pa-2 border-bottom" style="text-align: center">
							        <span v-if="$i18n.locale === 'uz'" class="font-700">60 oy</span>
							        <span v-if="$i18n.locale === 'ru'" class="font-700">60 месяцев</span>
							        <span v-if="$i18n.locale === 'en'" class="font-700">60 months</span>
						        </td>
						        <td class="pa-2 border-bottom"></td>
					        </tr>
					        <tr>
						        <td class="pa-2 border-right text-center border-bottom">30%</td>
						        <td class="pa-2 border-right text-center border-bottom">25%</td>
						        <td class="pa-2 text-center border-bottom">27%</td>
					        </tr>
					        <tr>
						        <td class="pa-2 border-right text-center border-bottom">40%</td>
						        <td class="pa-2 border-right text-center border-bottom">24%</td>
						        <td class="pa-2 text-center border-bottom">26%</td>
					        </tr>
					        <tr>
						        <td class="pa-2 border-right text-center">50%</td>
						        <td class="pa-2 border-right text-center">23%</td>
						        <td class="pa-2 text-center">25%</td>
					        </tr>
				        </v-simple-table>
			        </div>
		        </v-col>
	        </template>
        </v-row>
    </div>
</template>

<script>
    import I18nVue from '@/I18nVue'
    export default {
        name: 'TermsAndConditions',
        components: { I18nVue },
        props: ['property'],
	    data(){
            return {
	            isCarLoanPage: false
            }
	    },
	    mounted() {
        	if (this.$route.params.id === '33'){
        		this.isCarLoanPage = true
	        }
	    }
    }
</script>

<style>
</style>
