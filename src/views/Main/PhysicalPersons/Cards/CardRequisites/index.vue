<template>
	<div class='card-requisites-view'>
		<v-container>
			<div class='card-requisites-content'>
				<v-row>
					<v-col lg='6'>
						<div class='app-form pa-10 rounded-lg mb-8 pb-0'>
							<div class='app-form-group mb-4'>
								<v-row>
									<v-col lg='6'>
										<v-text-field
											v-mask="'#### #### #### ####'"
											v-model='$v.cardNumber.$model'
											:error='$v.cardNumber.$error'
											:placeholder="$t('CardRequisites.enterCardNumber')"
											outlined
											persistent-hint
											id='from'
											maxlength='19'

										>
<!--											:rules='[rules.requiredCard, rules.minLengthCard]'-->
										</v-text-field>
									</v-col>
									<v-col lg='6'>
										<v-btn
											@click='getCardDetails'
											depressed
											color='danger'
											rounded
											min-width='192'
											min-height='50'
										>
											<I18nVue classes='font-700 text-white' t='search' />
										</v-btn>
									</v-col>
								</v-row>
							</div>
						</div>
						<template v-if='this.isButtonClicked'>
							<template v-if='this.cardDetailsList.data.length'>
								<div class='app-form pa-10 rounded-lg'>
									<div class='app-form-group mb-4'>
										<h6 class='font-700 dark-text text--h4'>
											<I18nVue t='CardRequisites.filial' />:
											<span v-if="cardDetailsList.type === 'uzcard'" class='font-600 dark-text font-italic text--h4'>
												{{ this.cardDetailsList.data[0].nameFilial }}
											</span>
											<span v-else class='font-600 dark-text font-italic text--h4'>
												{{ this.cardDetailsList.data[0].filialName }}
											</span>
										</h6>
										<h6 class='font-700 dark-text text--h4'>
											MFO:
											<span v-if="cardDetailsList.type === 'uzcard'" class='font-600 dark-text font-italic text--h4'>
												{{ this.cardDetailsList.data[0].codeFilial }}
											</span>
											<span v-else class='font-600 dark-text font-italic text--h4'>
												{{ this.cardDetailsList.data[0].filialCode }}
											</span>
										</h6>
										<h6 class='font-700 dark-text text--h4'>
											<I18nVue t='CardRequisites.account' />:
											<span class='font-600 dark-text font-italic text--h4'>
												{{ this.cardDetailsList.data[0].account }}
											</span>
										</h6>
										<h6 class='font-700 dark-text text--h4'>
											<I18nVue t='CardRequisites.accountFull' />:
											<span v-if="cardDetailsList.type === 'uzcard'" class='font-600 dark-text font-italic text--h4'>
												{{ this.cardDetailsList.data[0].nameAcc }}
											</span>
											<span v-else class='font-600 dark-text font-italic text--h4'>
												{{ this.cardDetailsList.data[0].name }}
											</span>
										</h6>
										<h6 class='font-700 dark-text text--h4'>
											<I18nVue t='CardRequisites.account' />:
											<span class='font-600 dark-text font-italic text--h4'>
												{{ this.cardDetailsList.data[1].account }}
											</span>
										</h6>
										<h6 class='font-700 dark-text text--h4'>
											<I18nVue t='CardRequisites.accountFull' />:
											<span v-if="cardDetailsList.type === 'uzcard'" class='font-600 dark-text font-italic text--h4'>
												{{ this.cardDetailsList.data[1].nameAcc }}
											</span>
											<span v-else class='font-600 dark-text font-italic text--h4'>
												{{ this.cardDetailsList.data[1].name }}
											</span>
										</h6>
										<h6 class='font-700 dark-text text--h4'>
											<I18nVue t='CardRequisites.inn' />:
											<span class='font-600 dark-text font-italic text--h4'>
												{{ this.cardDetailsList.data[1].inn }}
											</span>
										</h6>
										<h6 class='font-700 dark-text text--h4'>
											<I18nVue t='CardRequisites.cardType' />:
											<span class='font-600 dark-text font-italic text--h4'>
												{{ this.cardDetailsList.type }}
											</span>
										</h6>
									</div>
								</div>
							</template>
							<template v-else>
								<div class='app-form pa-10 rounded-lg text-center'>
									<h1>
										<I18nVue t='Dashboard.no_information_found' /> :(
									</h1>
								</div>
							</template>
						</template>
					</v-col>
					<v-col lg='6'>
						<div class=''>
							<v-responsive :aspect-ratio='6 / 5'>
								<img
									src='/images/services-14.png'
									alt='Card image'
									class='d-block w-100 h-100 img-cover p-absolute'
									style='top: 0'
								/>
							</v-responsive>
						</div>
					</v-col>
				</v-row>
			</div>
		</v-container>
	</div>
</template>

<script>
	import I18nVue from '@/I18nVue'
	import { minLength, required } from 'vuelidate/lib/validators'

	export default {
		name: 'index',

		components: {
			I18nVue
		},

		data() {
			return {
				cardDetailsList: {},
				rules: {
					requiredCard: v => !!v || this.$i18n.locale === 'uz' ? 'Karta raqamini kiriting!' : this.$i18n.locale === 'ru' ? 'Введите номер карты!' : 'Enter card number!',
					minLengthCard: v => !!v || 'Karta raqami 16 ta raqam bo\'lishi kerak'
				},
				cardNumber: '',
				isButtonClicked: false
			}
		},
		mounted() {
		},
		validations: {
			cardNumber: {
				required,
				minLength: minLength(19)
			}
		},
		methods: {
			getCardDetails() {
				this.$v.$touch()

				if (this.$v.$invalid) {
					this.$toast.error(
						this.$i18n.locale === 'uz' ? "Iltimos karta raqamini to'g'ri kiriting!" :
							this.$i18n.locale === 'ru' ? "Пожалуйста, введите номер карты правильно!" :
								"Please enter the card number correctly!")
					return
				}
				let cardNumber = this.cardNumber.replace(/\D/g, '')

				this.$http.get(`/get_card_info/${cardNumber}/`)
					.then(({ data }) => {
						this.cardDetailsList = data
						this.isButtonClicked = true
					})
					.catch(err => {
						this.isButtonClicked = false
						if (this.$i18n.locale === 'uz'){
							this.$toast.error(err.data.detail.uz)
						}
						else if (this.$i18n.locale === 'ru'){
							this.$toast.error(err.data.detail.ru)
						}
						else {
							this.$toast.error(err.data.detail.en)
						}
					})
			}
		}
	}
</script>

<style>

</style>
