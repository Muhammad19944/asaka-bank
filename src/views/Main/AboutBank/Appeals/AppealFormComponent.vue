<template>
	<v-row>
		<v-col md='6'>
			<div class='app-form-group mb-7'>
				<h4 class='font-600 dark-text'>
					<I18nVue t='Services.OpenCard.FISH' />
				</h4>

				<v-divider class='mt-3 mb-7' style='border-color: rgba(var(--border-color), 1)' />

				<v-text-field
					v-model='$v.formRequestModel.full_name.$model'
					:error='$v.formRequestModel.full_name.$error'
					outlined
					hide-details
					:placeholder="this.$t('Services.OpenCard.FISH_sub')"
				>
				</v-text-field>
			</div>
		</v-col>

		<v-col md='6'>
			<div class='app-form-group mb-7'>
				<h4 class='font-600 dark-text'>
					<I18nVue t='Services.OpenCard.phone' />
				</h4>

				<v-divider class='mt-3 mb-7' style='border-color: rgba(var(--border-color), 1)' />

				<v-text-field
					v-model='$v.formRequestModel.phone.$model'
					:error='$v.formRequestModel.phone.$error'
					v-mask="'+998 (##) ### ## ##'"
					outlined
					hide-details
					:placeholder="this.$t('Services.OpenCard.phone_sub')"
				>
				</v-text-field>
			</div>
		</v-col>

		<v-col md='6'>
			<div class='app-form-group mb-7'>
				<h4 class='font-600 dark-text'>
					<I18nVue t='Services.OpenCard.mail' />
				</h4>

				<v-divider class='mt-3 mb-7' style='border-color: rgba(var(--border-color), 1)' />

				<v-text-field
					v-model='$v.formRequestModel.email.$model'
					:error='$v.formRequestModel.email.$error'
					outlined
					hide-details
					:placeholder="this.$t('Services.OpenCard.mail')"
				>
				</v-text-field>
			</div>
		</v-col>

		<v-col md='6'>
			<div class='app-form-group mb-7'>
				<h4 class='font-600 dark-text'>
					<I18nVue t='Services.OpenCard.stir' />
				</h4>

				<v-divider class='mt-3 mb-7' style='border-color: rgba(var(--border-color), 1)' />

				<v-text-field
					v-model='$v.formRequestModel.zip_code.$model'
					:error='$v.formRequestModel.zip_code.$error'
					outlined
					hide-details
					maxlength='9'
					:placeholder="this.$t('Services.OpenCard.stir_sub')"

				>
				</v-text-field>
			</div>
		</v-col>

		<v-col md='12'>
			<div class='app-form-group mb-7'>
				<h4 class='font-600 dark-text'>
					<I18nVue t='Services.OpenCard.address' />
				</h4>

				<v-divider class='mt-3 mb-7' style='border-color: rgba(var(--border-color), 1)' />

				<v-text-field
					v-model='$v.formRequestModel.address.$model'
					:error='$v.formRequestModel.address.$error'
					outlined
					hide-details
					:placeholder="this.$t('Services.OpenCard.address')"
				>
				</v-text-field>
			</div>
		</v-col>

		<v-col md='12'>
			<div class='app-form-group mb-7'>
				<h4 class='font-600 dark-text'>
					<I18nVue t='Services.OpenCard.documents' />
				</h4>

				<v-divider class='mt-3 mb-7' style='border-color: rgba(var(--border-color), 1)' />

				<v-file-input
					@change='getFile'
					v-model='$v.fileInputModel.$model'
					:error='$v.fileInputModel.$error'
					prepend-icon=''
					outlined
					:placeholder="this.$t('Services.OpenCard.documents_sub')"
				>
					<template v-slot:prepend-inner>
						<file-text-icon size='1.5x' class='grey--text mr-2' />
					</template>
				</v-file-input>
				<I18nVue classes='d-block mt-n1 text-small primary-text font-600'
				         t='Services.OpenCard.passport_notification' />
			</div>
		</v-col>

		<v-col md='6'>
			<div class='app-form-group mb-7'>
				<h4 class='font-600 dark-text'>
					<I18nVue t='Services.OpenCard.residence' />
				</h4>

				<v-divider class='mt-3 mb-7' style='border-color: rgba(var(--border-color), 1)' />

				<v-select
					@change='getBranches'
					v-model='$v.formRequestModel.district.$model'
					:error='$v.formRequestModel.district.$error'
					:items='districtList'
					:item-text="$i18n.locale === 'uz' ? 'name_uz' : $i18n.locale === 'ru' ? 'name_ru' : 'name_en'"
					item-value='id'
					outlined
					hide-details
					:placeholder="this.$t('Services.OpenCard.residence_sub')"
				>
					<template v-slot:append>
						<chevron-down-icon size='1.5x' class='grey--text' />
					</template>
				</v-select>
			</div>
		</v-col>

		<v-col md='6'>
			<div class='app-form-group mb-7'>
				<h4 class='font-600 dark-text'>
					<I18nVue t='Services.OpenCard.filial' />
				</h4>

				<v-divider class='mt-3 mb-7' style='border-color: rgba(var(--border-color), 1)' />

				<v-select
					v-model='$v.formRequestModel.filial.$model'
					:error='$v.formRequestModel.filial.$error'
					:items='branchesList'
					:item-text="$i18n.locale === 'uz' ? 'name_uz' : $i18n.locale === 'ru' ? 'name_ru' : 'name_en'"
					item-value='id'
					outlined
					hide-details
					no-data-text="Ma'lumot yo'q"
					:placeholder="this.$t('Services.OpenCard.filial_sub')"
				>
					<template v-slot:append>
						<chevron-down-icon size='1.5x' class='grey--text' />
					</template>
				</v-select>
			</div>
		</v-col>

		<v-col md='12'>
			<div class='app-form-group mb-7'>
				<h4 class='font-600 dark-text'>
					<I18nVue t='Services.OpenCard.typeApplication' />
				</h4>

				<v-divider class='mt-3 mb-7' style='border-color: rgba(var(--border-color), 1)' />

				<v-select
					v-model='$v.formRequestModel.appeal_type.$model'
					:error='$v.formRequestModel.appeal_type.$error'
					:items='appealTypeList'
					:item-text="$i18n.locale === 'uz' ? 'name_uz' : $i18n.locale === 'ru' ? 'name_ru' : 'name_en'"
					item-value='id'
					outlined
					hide-details
					:placeholder="this.$t('Services.OpenCard.typeApplication_sub')"
				>
					<template v-slot:append>
						<chevron-down-icon size='1.5x' class='grey--text' />
					</template>
				</v-select>
			</div>
		</v-col>

		<v-col md='12'>
			<div class='app-form-group mb-7'>
				<h4 class='font-600 dark-text'>
					<I18nVue t='Services.OpenCard.message' />
				</h4>

				<v-divider class='mt-3 mb-7' style='border-color: rgba(var(--border-color), 1)' />

				<v-textarea
					v-model='formRequestModel.text'
					outlined
					hide-details
					:placeholder="this.$t('Services.OpenCard.message')"
				>
				</v-textarea>
			</div>
		</v-col>

		<v-col v-if='$i18n.locale === "uz"' md='12'>
			<div class='app-form-group mb-7'>
				<h4 class='font-600 dark-text'>Ommaviy oferta</h4>

				<v-divider class='mt-3 mb-7' style='border-color: rgba(var(--border-color), 1)' />

				<div class='d-flex align-start'>
					<v-checkbox v-model='checkbox' hide-details color='danger' class='ma-0'></v-checkbox>
					<h4 class='font-600 dark-text'>
						<router-link
							:to="{ name: 'PublicOffer' }"
							class='text-decoration-none primary-text'
						>ommaviy oferta
						</router-link>
						shartlari bilan tanishdim

					</h4>
				</div>
			</div>
		</v-col>

		<v-col v-if='$i18n.locale === "en"' md='12'>
			<div class='app-form-group mb-7'>
				<h4 class='font-600 dark-text'>Public offer</h4>

				<v-divider class='mt-3 mb-7' style='border-color: rgba(var(--border-color), 1)' />

				<div class='d-flex align-start'>
					<v-checkbox v-model='checkbox' hide-details color='danger' class='ma-0'></v-checkbox>
					<h4 class='font-600 dark-text'>
						I got acquainted with the conditions of
						<router-link
							:to="{ name: 'PublicOffer' }"
							class='text-decoration-none primary-text'
						>public offer
						</router-link>
					</h4>
				</div>
			</div>
		</v-col>

		<v-col v-if='$i18n.locale === "ru"' md='12'>
			<div class='app-form-group mb-7'>
				<h4 class='font-600 dark-text'>Публичная оферта</h4>

				<v-divider class='mt-3 mb-7' style='border-color: rgba(var(--border-color), 1)' />

				<div class='d-flex align-start'>
					<v-checkbox v-model='checkbox' hide-details color='danger' class='ma-0'></v-checkbox>
					<h4 class='font-600 dark-text'>
						Я ознакомился(-ась) с условиями
						<router-link
							:to="{ name: 'PublicOffer' }"
							class='text-decoration-none primary-text'
						>публичная оферта
						</router-link>
					</h4>
				</div>
			</div>
		</v-col>

		<v-btn
			@click='send'
			:disabled='!checkbox'
			depressed
			color='danger'
			rounded
			min-width='192'
			min-height='50'
		>
			<I18nVue classes='text-white font-700' t='Services.OpenCard.sendApplication' />
		</v-btn>
		<app-snackbar ref='appSnackBar' />
	</v-row>
</template>

<script>
	import AppSnackbar from '@/components/AppSnackbar'
	import I18nVue from '@/I18nVue'
	import { email, required } from 'vuelidate/lib/validators'
	import { appTab } from '@/utils/frontend'
	import { ChevronDownIcon, FileTextIcon } from 'vue-feather-icons'

	export default {
		name: 'AppealFormComponent',
		components: { AppSnackbar, FileTextIcon, ChevronDownIcon, I18nVue },
		data() {
			return {
				formRequestModel: {
					full_name: '',
					phone: '',
					email: '',
					zip_code: '',
					address: '',
					file: null,
					district: null,
					filial: null,
					appeal_type: null,
					passport: null,
					debit_card: null,
					text: ''
				},
				fileInputModel: null,
				districtList: [],
				appealTypeList: [],
				branchesList: [],
				checkbox: false
			}
		},
		validations: {
			fileInputModel: { required },
			formRequestModel: {
				full_name: { required },
				phone: { required },
				email: { required, email },
				zip_code: { required },
				address: { required },
				district: { required },
				filial: { required },
				text: { required },
				appeal_type: { required },
				passport: { required },
				tax_inn: { required },
				debit_card: { required }
			}
		},
		mounted() {
			const $tabHeaderItems = document.querySelectorAll('[data-item="header"]')
			const $tabContentItems = document.querySelectorAll('[data-item="content"]')

			appTab($tabHeaderItems, $tabContentItems)

			this.getDistrict()
			this.getAppealType()
		},
		methods: {
			getAppealType() {
				this.$http.get('/1/appeal_type/')
					.then(({ data }) => {
						this.appealTypeList = data.results
					})
			},
			/*
			 *
			 * */
			getFile(file) {
				let formData = new FormData()
				formData.append('passport_image', file)
				formData.append('given_name', 'passport_image')

				this.$http.post('/upload/', formData)
					.then(({ data }) => {
						this.formRequestModel.file = data.id
					})
				// .catch((err) => {
				//   console.log(err);
				// });
			},

			/*
			 * Получение список районов
			 * */
			getDistrict() {
				this.$http.get('/1/district/', {
					params: {
						page_size: 50
					}
				}).then(({ data }) => {
					this.districtList = data.results
				})
			},

			/*
			 * Получение список филиалов
			 * */
			getBranches(val) {
				this.$http
					.get('/1/filial/', {
						params: {
							district: val,
							type: "filial",
							page_size: 500
						}
					})
					.then(({ data }) => {
						this.branchesList = data.results
					})
			},

			/*
			 *
			 * */
			send() {
				this.$v.$touch()
				const { appSnackBar } = this.$refs
				// if (this.$v.$invalid) {
				//   return;
				// }

				this.formRequestModel.phone = this.formRequestModel.phone.replace(/\D/g, '')

				this.$http.post('/appeal/create/', this.formRequestModel)
					.then((res) => {
						appSnackBar.snackbar = true
						appSnackBar.text = 'Murojaat muvaffaqiyatli yuborildi!'
						this.formRequestModel = {}
						this.fileInputModel = null


						for (let key in this.formRequestModel) {
							this.formRequestModel[key] = ''
						}
						this.$v.$reset()
					})
					.catch(err => appSnackBar.text = err.data.message)
			}
		}
	}
</script>