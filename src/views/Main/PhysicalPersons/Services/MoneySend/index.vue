<template>
	<div id='app-view'>
		<!-- Card details -->
		<v-container>
			<v-row class='mb-16'>
				<v-col md='6'>
					<div class='card-form'>
						<div class='card-list'>
							<vue-paycard
								:inputFields='inputFields'
								:value-fields='valueFields'
								:labels='labels'
								:isCardNumberMasked='isCardNumberMasked'
								:hasRandomBackgrounds='hasRandomBackgrounds'
							/>
						</div>
					</div>
				</v-col>
				<v-col md='6'>
					<v-card
						outlined
						class='pa-8 rounded-lg app-form'
					>
						<p class='font-600 dark-text mb-1'>
							<I18nVue t='MoneySend.senderCardNumber' />
						</p>
						<v-text-field
							v-mask="'#### #### #### ####'"
							v-model='$v.valueFields.cardNumber.$model'
							:error='$v.valueFields.cardNumber.$error'
							outlined
							prepend-inner-icon="mdi-credit-card"
							maxlength="19"
							:disabled='isCardNumberSent'
							data-card-field
							:id='inputFields.cardNumber'
							placeholder='XXXX XXXX XXXX XXXX'
						></v-text-field>
						<div
							:class="!isCardNumberSent ? 'd-none' : ''"
						>
							<v-row class='mt-0'>
								<v-col md='4' cols='12'>
									<p class='font-600 dark-text mb-1'>
										<I18nVue t='MoneySend.expirationMonth' />
									</p>
									<v-select
										v-model='$v.valueFields.cardMonth.$model'
										:error='$v.valueFields.cardMonth.$error'
										:items='monthsList'
										outlined
										data-card-field
										:id='inputFields.cardMonth'
									>
									</v-select>
								</v-col>
								<v-col md='4' cols='12'>
									<p class='font-600 dark-text mb-1'>
										<I18nVue t='MoneySend.expirationYear' />
									</p>
									<v-select
										v-model='$v.valueFields.cardYear.$model'
										:error='$v.valueFields.cardYear.$error'
										:items='yearsList'
										outlined
										data-card-field
										:id='inputFields.cardYear'
									>
									</v-select>
								</v-col>
								<v-col md='4' cols='12'>
									<p class='font-600 dark-text mb-1'>CVV</p>
									<v-text-field
										v-model='$v.valueFields.cardCvv.$model'
										:error='$v.valueFields.cardCvv.$error'
										outlined
										data-card-field
										:id='inputFields.cardCvv'
										v-mask="'###'"
									></v-text-field>
								</v-col>
							</v-row>
							<v-row class='mt-0'>
								<v-col lg='6' cols='12' md='6'>
									<p class='font-600 dark-text mb-1'>
										<I18nVue t='MoneySend.receiverCardNumber' />
									</p>
									<v-text-field class='mb-0'
									              @blur='getReceiverDetails'
									              v-mask="'#### #### #### ####'"
									              v-model='$v.valueFields2.cardNumber.$model'
									              :error='$v.valueFields2.cardNumber.$error'
									              outlined
									              prepend-inner-icon="mdi-credit-card"
									></v-text-field>
									<div class='mt-0' v-if='receiverDetails.company_name'>
										<p style='margin-top: -25px!important; color: green' class='text-small'>
											{{ receiverDetails.company_name }}, {{ receiverDetails.country }} </p>
									</div>
								</v-col>
								<v-col lg='6' cols='12' md='6'>
									<p class='font-600 dark-text mb-1'>
										<I18nVue t='MoneySend.transferAmount' /> (USD)</p>
									<v-text-field
										@keyup='handler(valueFields2.transferAmount)'
										v-mask="'############'"
										v-model='$v.valueFields2.transferAmount.$model'
										:error='$v.valueFields2.transferAmount.$error'
										outlined
									></v-text-field>
								</v-col>
								<v-col lg='6' cols='12' md='6'>
									<p class='font-600 dark-text mb-1'>
										<I18nVue t='MoneySend.receiverFirstName' />
									</p>
									<v-text-field
										v-on:keypress="isLetter($event)"
										class='toUppercase'
										@keyup='uppercase'
										v-model='$v.valueFields2.cardFirstName.$model'
										:error='$v.valueFields2.cardFirstName.$error'
										outlined
									></v-text-field>
								</v-col>
								<v-col lg='6' cols='12' md='6'>
									<p class='font-600 dark-text mb-1'>
										<I18nVue t='MoneySend.receiverLastName' />
									</p>
									<v-text-field
										v-on:keypress="isLetter($event)"
										class='toUppercase'
										@keyup='uppercase'
										v-model='$v.valueFields2.cardLastName.$model'
										:error='$v.valueFields2.cardLastName.$error'
										outlined
									></v-text-field>
								</v-col>
							</v-row>
						</div>
						<v-btn
							v-if='!$store.state.senderID'
							@click='sendCardNumber'
							color='danger'
							min-width='192'
							min-height='50'
							depressed
							rounded
						>
							<span class='text--white'>
								<I18nVue t='LastCorrections.send' />
							</span>
						</v-btn>
						<v-btn
							v-else
							@click='confirmation = true'
							color='danger'
							min-width='192'
							min-height='50'
							:disabled='isAllFieldsEmpty'
							depressed
							rounded
						>
							<span class='text--white'>
								<I18nVue t='LastCorrections.send' />
							</span>
						</v-btn>
						<!--						<v-btn-->
						<!--							@click='checking'-->
						<!--						>-->
						<!--							check-->
						<!--						</v-btn>-->
					</v-card>
				</v-col>
			</v-row>
		</v-container>
		<!-- Message sending modal -->
		<v-app class='d-none'>
			<v-row justify='center'>
				<v-dialog
					v-model='dialog'
					persistent
					max-width='600px'
				>
					<v-card>
						<v-card-title>
							<span class='text-h5'>
								<I18nVue t='MoneySend.enterVerification' />
							</span>
						</v-card-title>
						<v-card-text>
							<v-container>
								<v-text-field
									v-model='verificationCode.otp'
									ref='verificationCode'
									v-mask="'######'"
									outlined
								/>
							</v-container>
							<small class='text-red'>*
								<I18nVue t='MoneySend.sixCharacters' /></small>
						</v-card-text>
						<v-card-actions>
							<v-spacer></v-spacer>
							<v-btn
								color='blue darken-1'
								text
								@click='dialog = false'
							>
								<I18nVue t='MoneySend.close' />
							</v-btn>
							<v-btn
								color='blue darken-1'
								text
								@click='checkVerification'
							>
								<I18nVue t='LastCorrections.send' />
							</v-btn>
						</v-card-actions>
					</v-card>
				</v-dialog>
			</v-row>
		</v-app>


		<v-app class='d-none'>
			<v-row justify='center'>
				<v-dialog
					v-model='confirmation'
					persistent
					max-width='600px'
				>
					<v-card>
						<v-card-title>
							<span class='text-h5'>
								<I18nVue t='MoneySend.verifyTransfer' />
							</span>
						</v-card-title>
						<v-card-text>
							<v-container>
								<h3 class='font-weight-bold'><I18nVue t='MoneySend.transferDetails' />:</h3>
								<v-divider class='mt-2 mb-4' style='border-color: rgba(var(--border-color), 1)' />
								<h6><I18nVue t='MoneySend.senderFullName' />: <span class='font-weight-bold'>{{ valueFields.cardName }}</span></h6>
								<h6><I18nVue t='MoneySend.receiverFullName' />: <span class='font-weight-bold'>{{ valueFields2.cardFirstName }} {{ valueFields2.cardLastName }}</span></h6>
								<h6><I18nVue t='MoneySend.transferAmount' />: <span class='font-weight-bold'>{{ valueFields2.transferAmount }} USD</span></h6>
								<h6><I18nVue t='MoneySend.commission' />: <span class='font-weight-bold'>{{ commission }} USD</span></h6>
								<h6><I18nVue t='MoneySend.total' />: <span class='font-weight-bold'>{{ totalAmountToTransfer }} USD</span></h6>
							</v-container>
						</v-card-text>
						<v-card-actions>
							<v-spacer></v-spacer>
							<v-btn
								color='blue darken-1'
								text
								@click='confirmation = false'
							>
								<I18nVue t='MoneySend.close' />
							</v-btn>
							<v-btn
								color='blue darken-1'
								text
								@click='sendForTransfer'
							>
								<I18nVue t='MoneySend.verify' />
							</v-btn>
						</v-card-actions>
					</v-card>
				</v-dialog>
			</v-row>
		</v-app>
	</div>
</template>

<script>
	import { required, minLength } from 'vuelidate/lib/validators'
	import I18nVue from '@/I18nVue'

	export default {
		name: 'index',
		components: {
			I18nVue
		},
		data() {
			return {
				isFieldsEmpty: true,
				message: {},
				isCardNumberSent: false,
				dialog: false,
				confirmation: false,
				verificationCode: {
					otp: null
				},
				inputFields: {
					cardNumber: 'v-card-number',
					cardName: 'v-card-name',
					cardMonth: 'v-card-month',
					cardYear: 'v-card-year',
					cardCvv: 'v-card-cvv'
				},
				valueFields: {
					cardName: '',
					cardNumber: '',
					cardMonth: '',
					cardYear: '',
					cardCvv: ''
				},
				valueFields2: {
					cardFirstName: '',
					cardLastName: '',
					cardNumber: '',
					transferAmount: null
				},
				tranferFields: {
					expiry_date: '',
					cvc: '',
					pan_2: '',
					amount: null,
					fee: null,
					receiver_first_name: '',
					receiver_last_name: ''
				},
				labels: {
					cardName: 'Full Name',
					cardHolder: 'Card Holder',
					cardMonth: 'MM',
					cardYear: 'YY',
					cardExpires: 'Expires',
					cardCvv: 'CVV'
				},
				isCardNumberMasked: false,
				hasRandomBackgrounds: true,
				minCardYear: new Date().getFullYear(),
				yearsList: [],
				monthsList: [],
				senderCardNumber: {
					pan: ''
				},
				senderDetails: [],
				receiverDetails: {
					company_name: '',
					country: ''
				}
			}
		},
		validations: {
			valueFields: {
				cardNumber: {
					required,
					minLength: minLength(19)
				},
				cardMonth: { required },
				cardYear: { required },
				cardCvv: {
					required,
					minLength: minLength(3)
				}
			},
			valueFields2: {
				cardFirstName: { required },
				cardLastName: { required },
				cardNumber: {
					required,
					minLength: minLength(19)
				},
				transferAmount: { required }
			},
			senderCardNumber: {
				pan: { required }
			},
		},

		computed: {
			minCardMonth() {
				if (this.valueFields.cardYear === this.minCardYear) return new Date().getMonth() + 1
				return 1
			},
			amountToTransfer() {
				let amountToNumber = parseInt(this.valueFields2.transferAmount)
				let amount
				let cardType = this.valueFields2.cardNumber.replace(/\D/g, '')
				let slicedCardType = cardType.slice(0,6)
				if (slicedCardType === '518969' || slicedCardType === '557223' || slicedCardType === '537934'){
					amount = (amountToNumber * 100).toFixed(0)
				}
				else {
					amount = ((amountToNumber + (amountToNumber * 0.01)) * 100).toFixed(0)
				}
				return amount
			},
			totalAmountToTransfer(){
				let amountToNumber = parseInt(this.valueFields2.transferAmount)
				let amount
				let cardType = this.valueFields2.cardNumber.replace(/\D/g, '')
				let slicedCardType = cardType.slice(0,6)
				if (slicedCardType === '518969' || slicedCardType === '557223' || slicedCardType === '537934'){
					amount = amountToNumber.toFixed(2)
				}
				else {
					amount = ((amountToNumber + (amountToNumber * 0.01))).toFixed(2)
				}
				return amount
			},
			commission(){
				let amountToNumber = parseInt(this.valueFields2.transferAmount)
				let commission
				let cardType = this.valueFields2.cardNumber.replace(/\D/g, '')
				let slicedCardType = cardType.slice(0,6)
				if (slicedCardType === '518969' || slicedCardType === '557223' || slicedCardType === '537934'){
					commission = "0"
				}
				else {
					commission = (amountToNumber * 0.01).toFixed(2)
				}
				return commission
			},
			isAllFieldsEmpty(){
				return !(
					this.valueFields.cardMonth &&
					this.valueFields.cardYear &&
					this.valueFields.cardCvv &&
					this.valueFields2.cardNumber &&
					this.valueFields2.transferAmount &&
					this.valueFields2.cardFirstName &&
					this.valueFields2.cardLastName
				)
			}
		},
		mounted() {
			this.getSelectYear()
			this.getSelectMonth()
		},
		methods: {
			checkingFields() {
				if (this.valueFields.cardMonth === "" ||
					this.valueFields.cardYear === "" ||
					this.valueFields.cardCvv === "" ||
					this.valueFields2.cardNumber === "" ||
					this.valueFields2.transferAmount === null ||
					this.valueFields2.cardFirstName === "" ||
					this.valueFields2.cardLastName === ""
				){
					this.isFieldsEmpty = true
				}
				else {
					this.isFieldsEmpty = false
				}
			},
			/*
			*
			* */
			getSelectYear() {
				const arr = []
				for (let i = 0; i < 5; i++) {
					arr.push(this.minCardYear + i)
				}
				this.yearsList = arr
			},
			/*
			*
			* */
			getSelectMonth() {
				const arr = []
				for (let i = 0; i < 12; i++) {
					arr.push(this.minCardMonth + i)
				}
				for (let i = 0; i < arr.length; i++) {
					if (arr[i] < 10) {
						arr[i] = '0' + arr[i]
					}
				}
				this.monthsList = arr
			},

			/*
			*
			* */
			sendCardNumber() {
				let cardNumberForSend = this.valueFields.cardNumber.replace(/\D/g, '')
				this.senderCardNumber.pan = cardNumberForSend
				// this.$v.$touch();
				//
				// if (this.$v.$invalid) {
				//   console.log("Invalid")
				//   return;
				// }
				this.$http.post('/moneysend/check_sender/', this.senderCardNumber)
					.then((res) => {
						this.$store.state.senderID = res.data.id
						this.dialog = true
					})
					.catch(error => {

						// Converting string message came from backend to JSON object
						let params = error.data.message;

						let jsonStrig = '{';
						let items = params.split('\n');
						for (let i = 0; i < items.length; i++) {
							let current = items[i].split(':');
							jsonStrig += '"' + current[0] + '":"' + current[1] + '",';
						}
						jsonStrig = jsonStrig.substr(0, jsonStrig.length - 1);
						jsonStrig += '}';
						let parsed = JSON.parse(jsonStrig)

						this.message = parsed

						if(this.$i18n.locale === 'uz') {
							this.$toast.error(this.message.uz)
						}
						else if(this.$i18n.locale === 'ru') {
							this.$toast.error(this.message.ru)
						}
						else {
							this.$toast.error(this.message.en)
						}
					})
			},
			/*
			*
			* */
			sendForTransfer() {
				//Converting numbers in string and getting last two digits of year
				//and add it to month
				let yearToString = this.valueFields.cardYear.toString()
				let lastTwoDigits = yearToString.slice(-2)

				//remove gaps from receiver card number
				let removedSpacesCardNumber = this.valueFields2.cardNumber.replace(/\D/g, '')

				//converting to named variables
				let expiryDate = lastTwoDigits + this.valueFields.cardMonth
				let cvc = this.valueFields.cardCvv
				let pan_2 = removedSpacesCardNumber
				let amount = this.amountToTransfer
				let fee

				// Check if card belongs to Asaka
				let slicedCardNumber = pan_2.slice(0,6)
				if (slicedCardNumber === '518969' || slicedCardNumber === '557223' || slicedCardNumber === '537934'){
					fee = 0
				}
				else {
					fee = parseInt(this.valueFields2.transferAmount)
				}
				let receiver_first_name = this.valueFields2.cardFirstName
				let receiver_last_name = this.valueFields2.cardLastName

				this.tranferFields.expiry_date = expiryDate
				this.tranferFields.cvc = cvc
				this.tranferFields.pan_2 = pan_2
				this.tranferFields.amount = amount
				this.tranferFields.fee = fee
				this.tranferFields.receiver_first_name = receiver_first_name
				this.tranferFields.receiver_last_name = receiver_last_name
				this.$http.put(`/moneysend/transfer/${this.$store.state.senderID}/`, this.tranferFields)
					.then(response => {
						if (this.$i18n.locale === 'uz'){
							this.$toast.success(response.data.detail.uz)
						}
						else if (this.$i18n.locale === 'ru'){
							this.$toast.success(response.data.detail.ru)
						}
						else {
							this.$toast.success(response.data.detail.en)
						}
						this.confirmation = false
						setTimeout( () => {
							location.reload();
						}, 4000)
					})
					.catch(err => {
						if (this.$i18n.locale === 'uz'){
							this.$toast.error(err.data.detail.uz)
						}
						else if (this.$i18n.locale === 'ru'){
							this.$toast.error(err.data.detail.ru)
						}
						else {
							this.$toast.error(err.data.detail.en)
						}
						this.confirmation = false
					})
			},

			check() {
				// this.$v.$touch();
				//
				// if (this.$v.$invalid) {
				//   console.log("Invalid")
				//   return;
				// }
				if (!this.$store.state.senderID) {
					this.sendCardNumber()
				} else {
					this.confirmation = true
				}
				// let result = parseInt(this.valueFields.cardMonth)
				// console.log('Card number: ' + this.valueFields.cardNumber)
				// console.log('Card month: ' + this.valueFields.cardMonth)
				// console.log('Card year: ' + this.valueFields.cardYear)
				// console.log('Card CVV: ' + this.valueFields.cardCvv)
			},
			/*
			*
			* */
			getSenderName() {
				this.$http.get(`/moneysend/sender/${this.$store.state.senderID}/`)
					.then(({ data }) => {
						this.senderDetails = data
						this.dialog = false
						this.valueFields.cardName = this.senderDetails.sender_first_name + ' ' + this.senderDetails.sender_last_name
					})
			},
			/*
			*
			* */
			checkVerification() {
				this.$http.put(`/moneysend/verify_sender/${this.$store.state.senderID}/`, this.verificationCode)
					.then(({ data }) => {
						this.$toast.success(`Kod muvaffaqiyatli tasdiqlandi!`)
						this.isCardNumberSent = true
						this.getSenderName()
					})
					.catch(err => {
						this.$toast.error(`Kod noto'g'ri kiritildi!`)
						this.isCardNumberSent = false
						this.dialog = true
					})
			},
			/*
			*
			* */
			uppercase() {
				this.valueFields2.cardFirstName = this.valueFields2.cardFirstName.toUpperCase()
				this.valueFields2.cardLastName = this.valueFields2.cardLastName.toUpperCase()
			},
			/*
			*
			**/
			getReceiverDetails() {
				let removedSpace = this.valueFields2.cardNumber.replace(/\D/g, '')
				let slicedCardNumber = removedSpace.slice(0, 6)

				//542116

				this.$http.get(`/moneysend/bin_search/${slicedCardNumber}`)
					.then(({ data }) => {
						this.receiverDetails = data
					})
					.catch(err => {
						console.log(err);
						return
					})
			},
			/*
			*
			* */
			//Only accepts Latin characters
			isLetter(e) {
				let char = String.fromCharCode(e.keyCode); // Get the character
				if(/^[A-Za-z]+$/.test(char)) return true; // Match with regex
				else e.preventDefault(); // If not match, don't add to input text
			},
			/*
			*
			* */
			resetFields(){
				this.valueFields.cardNumber = "";
				this.valueFields.cardMonth = "";
				this.valueFields.cardCvv = "";
				this.valueFields.cardYear = "";
				this.valueFields.cardName = "";
				this.valueFields2.cardLastName = "";
				this.valueFields2.cardFirstName = "";
				this.valueFields2.transferAmount = null;
				this.valueFields2.cardNumber = "";
				this.$store.state.senderID = null;
				this.isCardNumberSent = false;
				this.verificationCode.otp = "";
				this.receiverDetails.company_name = "";
				this.receiverDetails.country = "";
			},
			/*
			*
			* */
			handler(val){
				if (val === "0"){
					this.valueFields2.transferAmount = null
				}
			}
		}
	}
</script>

<style>
	.toUppercase input{
		text-transform: uppercase;
	}
	.text--white{
		color: white;
	}
	.v-text-field>.v-input__control>.v-input__slot>.v-text-field__slot {
		margin-left: 6px;
	}
</style>