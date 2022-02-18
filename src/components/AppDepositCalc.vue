<template>
    <div class='online-credit-view'>
        <v-container class='p-relative'>
            <div class='view-title mb-15'>
                <h1 class='font-600 dark-text align-self-center mb-3'>
                    <I18nVue t='DepositCalculator.header' />
                </h1>

                <h3 class='grey-light-2'>
                    <I18nVue t='DepositCalculator.header_sub' />
                </h3>
            </div>

            <v-row>
                <v-col lg='5' sm='12'>
                    <template v-if='!$route.params.id'>
                        <div class='app-form-group mb-10'>
                            <h4 class='font-600 dark-text'>
                                <I18nVue t='DepositCalculator.currency_type' />
                            </h4>

                            <v-divider class='mt-3 mb-7' style='border-color: rgba(var(--border-color), 1)' />

                            <v-select
                                v-model='defaultCurrency'
                                @change='getDepositList'
                                :items='currencyList'
                                return-object
                                item-text='name'
                                item-value='value'
                                outlined
                                hide-details
                            >
                                <template v-slot:append>
                                    <chevron-down-icon size='1.5x' class='grey--text'></chevron-down-icon>
                                </template>
                            </v-select>

                        </div>
                    </template>

                    <template v-if='!$route.params.id'>
                        <div class='app-form-group mb-10'>
                            <h4 class='font-600 dark-text'>
                                <I18nVue t='DepositCalculator.deposit_type' />
                            </h4>

                            <v-divider class='mt-3 mb-7' style='border-color: rgba(var(--border-color), 1)' />

                            <v-select
                                v-model='depositType'
                                @change='getDepositID'
                                :items='depositList'
                                return-object
                                :item-text="$i18n.locale === 'uz' ? 'title_uz' : $i18n.locale === 'ru' ? 'title_ru' : 'title_en'"
                                item-value='id'
                                no-data-text='Omonat turi mavjud emas'
                                outlined
                                hide-details
                            >
                                <template v-slot:append>
                                    <chevron-down-icon size='1.5x' class='grey--text'></chevron-down-icon>
                                </template>
                            </v-select>
                        </div>
                    </template>


                    <div class='app-form-group mb-10'>
                        <h4 class='font-600 dark-text'>
                            <I18nVue t='DepositCalculator.amount' />
                        </h4>

                        <v-divider class='mt-3 mb-8' style='border-color: rgba(var(--border-color), 1)' />

                        <v-text-field
                            v-model='periodAmountInput'
                            :maxlength='maxLengthAmount'
                            outlined
                            hide-details
                            class='progress-field'
                        >
                        </v-text-field>

                        <div class='mt-n2'>
                            <vue-slider
                                @dragging='dragging'
                                @change="dragChange"
                                v-model='periodAmountRange.value'
                                :tooltip="'none'"
                                :dotSize='[20, 20]'
                                :height='8'
                                :min='0'
                                :max='periodAmountRange.max'
                                :interval='100'
                                :process-style="{ backgroundColor: 'rgba(var(--main-primary))' }"
                                :tooltip-style="{ backgroundColor: 'rgba(var(--main-primary))', borderColor: 'rgba(var(--main-primary))' }"
                                class='pa-0'
                            >
                                <template v-slot:step='{ label, active }'>
                                    <div :class="['custom-step', { active }]"></div>
                                </template>
                            </vue-slider>
                        </div>

                    </div>


                    <div class='app-form-group mb-10'>
                        <h4 class='font-600 dark-text'>
                            <I18nVue t='Services.OpenCard.deposit_date' />
                        </h4>

                        <v-divider class='mt-3 mb-8' style='border-color: rgba(var(--border-color), 1)' />

                        <v-radio-group @change='getMonth' v-model='depositPeriodRadios' hide-details>
                            <template v-slot:label>
                                <div class='app-track'>
                                    <div class='track-top d-flex p-relative'>
                                        <template v-for='(item, index) in depositPeriodList'>
                                            <v-radio
                                                :key='index'
                                                :id="'check-' + index"
                                                class='d-none'
                                                :value='item'
                                            ></v-radio>
                                            <label
                                                :key='item.index'
                                                @click='getTrackSize($event)'
                                                :for="'check-' + index"
                                                class='track-label flex-1 pointer pb-6 p-relative'
                                                :class="index === 0 ? 'active' : ''"
                                            >
                                                    <span class='text--h1 primary-text text-center d-block'>{{
                                                            item.month
                                                        }}</span>
                                            </label>
                                        </template>
                                    </div>

                                    <div class='track-bottom d-flex'>
                                        <template v-for='(item, index) in depositPeriodList'>
                                            <div :key='index' class='flex-1 text-center py-3'>
                                                <span class='text-small'>{{ item.month }} <I18nVue
                                                    t='DepositCalculator.month' /></span>
                                            </div>
                                        </template>
                                    </div>
                                </div>
                            </template>
                        </v-radio-group>
                    </div>


                </v-col>
                <v-spacer class='d-none d-sm-block' />
                <v-col lg='6' sm='12'>
                    <div class='credit-widget widget-sticky pa-5 pa-sm-10 rounded-lg overflow-hidden'>
                        <template v-if='depositType'>
                            <div class='d-flex align-center justify-space-between font-600 dark-text mb-4 mb-sm-5'>
                                <h3>
                                    <I18nVue t='DepositCalculator.annual_rate' />
                                    :
                                </h3>
                                <h2> {{ this.depositPeriodPercent }} %</h2>
                            </div>

                            <div class='d-flex align-center justify-space-between font-600 dark-text mb-4 mb-sm-5'>
                                <h3>
                                    <I18nVue t='DepositCalculator.thirty_days' />
                                    :
                                </h3>
                                <h2> {{ calculateThirtyDays }}
                                    <span v-if='currency === "milliy_valyutada"'>UZS</span>
                                    <span v-if='currency === "aqsh_dollarida"'>USD</span>
                                    <span v-if='currency === "yevroda_omonatlar"'>EUR</span>
                                </h2>
                            </div>

                            <div class='d-flex align-center justify-space-between font-600 dark-text'>
                                <h3>
                                    <I18nVue t='DepositCalculator.overall_profit' />
                                    :
                                </h3>
                                <h2>{{ calculateOverall }}
                                    <span v-if='currency === "milliy_valyutada"'>UZS</span>
                                    <span v-if='currency === "aqsh_dollarida"'>USD</span>
                                    <span v-if='currency === "yevroda_omonatlar"'>EUR</span>
                                </h2>
                            </div>
                        </template>
                        <h1 v-else>Omonat turi mavjud emas :(</h1>

                        <v-divider class='my-5 my-sm-10' />

                        <h5>
                            <I18nVue t='DepositCalculator.text' />
                        </h5>

                        <div class='d-flex flex-wrap flex-sm-nowrap mt-4'>
                            <v-btn
                                :to="{name: 'DepositOpen'}"
                                outlined
                                color='rgba(var(--main-primary), 1)'
                                rounded
                                height='50'
                                min-width='192'
                                class='font-700 mt-5'
                            >
                                <I18nVue t='DepositCalculator.open_deposit' />
                            </v-btn>
                        </div>
                    </div>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
    import I18nVue from '@/I18nVue'
    import { ChevronDownIcon } from 'vue-feather-icons'
    import moment from 'moment'

    export default {
        name: 'AppDepositCalc',
        props: {
            depositID: {
                type: [String, Number]
            },
	        depositTypeText: {
            	type: String
	        }
        },
        components: {
            ChevronDownIcon,
            I18nVue
        },

        data() {
            return {
            	currency: '',
                defaultCurrency: {
                    name: 'UZS',
                    value: 'milliy_valyutada'
                },
                currencyList: [
                    {
                        name: 'UZS',
                        value: 'milliy_valyutada'
                    },
                    {
                        name: 'USD',
                        value: 'aqsh_dollarida'
                    },
                    {
                        name: 'EUR',
                        value: 'yevroda_omonatlar'
                    }
                ],

                depositType: {},
                depositList: [],

                periodAmountInput: '',
                maxLengthAmount: '',

                calculationInfoList: [],
                calculationInfoSelect: {},

                depositMaxAmount: '',
                depositMinAmount: '',

                depositPeriodList: [],
                depositPeriodRadios: {},
                depositPeriodPercent: {},

                periodAmountRange: {
                    value: 0,
                    min: 0,
                    max: 0
                }
            }
        },
        watch: {
            'periodAmountInput'(val) {
                /*
                 * Форматируем числа
                 * 100, 1 000, 10 000, 100 000, ...
                 * */
                const result = String(val)
                    .replace(/\D/g, '')
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ' ')

                /*
                 * Убераем все пробелы из суммы.
                 * */
                const removeWhiteSpaces = result.replace(/ /g, '')

                // Присваиваем если пользователь ввел больше чем от лимита
                if (removeWhiteSpaces > this.periodAmountRange.max) {
                    this.periodAmountInput = this.periodAmountRange.max

                    return false
                }
                this.periodAmountInput = result

                this.periodAmountRange.value = removeWhiteSpaces
            },
            /*
            *
            * */
            'depositType'(val) {
	            if (!this.depositID) {
		            this.currency = val.type

                    if (val) this.getDepositID({ id: val.id })
                }
            }
        },
        /*
        *
        * */
        computed: {
            calculateThirtyDays() {
                let result = (this.periodAmountInput.replace(/ /g, '') * (this.depositPeriodPercent / 100) / 365) * 30
                return this.numberWithCommas(result.toFixed())
            },
            /*
            *
            * */
            calculateOverall() {
                let amount = this.periodAmountInput.replace(/ /g, '')
                let month = this.depositPeriodRadios
                let percent = this.depositPeriodPercent
                let sumOfDays
                for (let i = 0; i < +month; i++) {

                    if (i === 0) {
                        sumOfDays = moment().add(i, 'month').daysInMonth()
                    } else {
                        sumOfDays = sumOfDays + moment().add(i, 'month').daysInMonth()
                    }
                }
                let result = (amount * (percent / 100)) / 365 * sumOfDays
                return this.numberWithCommas(result.toFixed())
            }
        },
        /*
        *
        * */
        mounted() {
            if (!this.depositID){
                this.getDepositID({ id: 1 })
                this.getDepositList({ value: 'milliy_valyutada' })
            }
            else {
	            this.currency = this.depositTypeText

                this.getDepositID({id: +this.depositID})

            }
        },
        /*
        *
        * */
        methods: {
	        /*
			*
			* */
	        dragChange(value) {
		        this.periodAmountInput = value
	        },

	        /*
	        *
	        * */
            numberWithCommas(x) {
                return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
            },
            /*
            *
            * */
            dragging(val) {
                this.periodAmountInput = val
            },
            /*
            *
            * */
            getTrackSize($event) {
                const $label = document.querySelectorAll('.track-label')
                const $currentLabel = $event.target.closest('.track-label')

                $label.forEach(item => item.classList.remove('active'))
                $currentLabel.classList.add('active')
            },
            /*
            *
            * */
            getDepositList(value) {
                this.$http.get('/1/deposit/', {
                    params: {
                        type: value.value
                    }
                })
                    .then(({ data }) => {
                        this.depositList = data.results
                        this.depositType = this.depositList[0]
                    })
            },
            /*
            *
            * */
            getDepositID(value) {
                this.$http.get(`/1/deposit/${value.id}/period/`)
                    .then(({ data }) => {
                        const { min_amt, max_amt, calculation_info } = data.results[0]
                        const length = String(max_amt).length

                        this.calculationInfoList = calculation_info
                        this.calculationInfoSelect = this.calculationInfoList[0]

                        this.depositMinAmount = min_amt
                        this.depositMaxAmount = max_amt

                        this.depositPeriodList = calculation_info
                        this.depositPeriodRadios = this.depositPeriodList[0].month
                        this.depositPeriodPercent = this.depositPeriodList[0].percent

                        this.periodAmountRange.max = parseInt(max_amt.replace(/ /g, ''))

                        setTimeout(() => {
                            this.periodAmountRange.value = parseInt(min_amt.replace(/ /g, ''))
                            this.periodAmountInput = this.periodAmountRange.value
                        }, 0)

                        this.maxLengthAmount = length
                    })
            },
            /*
            *
            * */
            getMonth(val) {
                this.depositPeriodPercent = val.percent
                this.depositPeriodRadios = val.month
            }
            /*
            *
            * */
        }
    }
</script>

<style scoped>

</style>
