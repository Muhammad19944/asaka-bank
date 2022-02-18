<template>
	<div class="card-application-view px-2">
		<v-row>
			<v-col md="6">
				<div class="app-form-group app-form-group__small no-shadow mb-2">
					<h5 class="font-600 dark-text mb-1">
						<I18nVue t="Services.OpenCard.FISH" />
					</h5>

					<v-text-field
						v-model="$v.formRequestModel.full_name.$model"
						:error="$v.formRequestModel.full_name.$error"
						outlined
						hide-details
						:placeholder="$t('Services.OpenCard.FISH_sub')"
					>
					</v-text-field>
				</div>
			</v-col>

			<v-col md="6">
				<div class="app-form-group app-form-group__small no-shadow mb-2">
					<h5 class="font-600 dark-text mb-1">
						<I18nVue t="Services.OpenCard.phone" />
					</h5>

					<v-text-field
						v-model="$v.formRequestModel.phone.$model"
						:error="$v.formRequestModel.phone.$error"
						v-mask="'+998 (##) ### ## ##'"
						outlined
						hide-details
						:placeholder="$t('Services.OpenCard.phone_sub')"
					>
					</v-text-field>
				</div>
			</v-col>

			<v-col md="6">
				<div class="app-form-group app-form-group__small no-shadow mb-2">
					<h5 class="font-600 dark-text mb-1">
						<I18nVue t="Services.OpenCard.mail" />
					</h5>

					<v-text-field
						v-model="$v.formRequestModel.email.$model"
						:error="$v.formRequestModel.email.$error"
						outlined
						hide-details
						:placeholder="$t('Services.OpenCard.mail')"
					>
					</v-text-field>
				</div>
			</v-col>

			<v-col md="6">
				<div class="app-form-group app-form-group__small no-shadow mb-2">
					<h5 class="font-600 dark-text mb-1">
						<I18nVue t="Services.OpenCard.stir" />
					</h5>

					<v-text-field
						v-model="$v.formRequestModel.tax_inn.$model"
						:error="$v.formRequestModel.tax_inn.$error"
						outlined
						hide-details
						maxlength="9"
						:placeholder="$t('Services.OpenCard.stir')"
					>
					</v-text-field>
				</div>
			</v-col>

			<v-col md="12">
				<div class="app-form-group app-form-group__small no-shadow mb-2">
					<h5 class="font-600 dark-text mb-1">
						<I18nVue t="Services.OpenCard.passport" />
					</h5>

					<v-file-input
						@change="getFile"
						v-model="$v.fileInputModel.$model"
						:error="$v.fileInputModel.$error"
						prepend-icon=""
						outlined
						:placeholder="$t('Services.OpenCard.passport')"
					>
						<template v-slot:prepend-inner>
							<file-text-icon size="1.5x" class="grey--text mr-2"></file-text-icon>
						</template>
					</v-file-input>
					<span class="d-block mt-n1 text-small primary-text font-600">
                        <I18nVue t="Services.OpenCard.passport_notification" />
                    </span>
				</div>
			</v-col>

			<template v-if="$route.params.id">
				<v-col md="12">
					<div class="app-form-group app-form-group__small no-shadow mb-2">
						<h5 class="font-600 dark-text mb-1">
							Individual card image
						</h5>

						<v-divider class="mt-3 mb-7" style="border-color: rgba(var(--border-color), 1)" />

						<template v-if="individualCardImage">
							<template v-if="$store.state.IS_LOCAL">
								<div class="p-relative">
									<div
										id="canvas-container"
										data-card="image"
										class="card-template-wrap card-template-canvas p-relative rounded-xl overflow-hidden"
										:style="{ backgroundImage: 'url(' + $http.defaults.baseURL + individualCardImage.url + ')' }"
									>
										<div class="canvas-ratio pa-6 p-absolute w-100 h-100 pa-6">
										</div>
									</div>
								</div>
							</template>

							<template v-if="$store.state.IS_GLOBAL">
								<div class="p-relative">
									<div
										data-card="image"
										class="card-template-wrap card-template-canvas p-relative rounded-xl overflow-hidden"
										:style="{ backgroundImage: 'url(' + $http.defaults.baseURL + individualCardImage.url + ')' }"
									>
										<div class="canvas-ratio pa-6 p-absolute w-100 h-100 pa-6">
										</div>
									</div>
								</div>
							</template>
						</template>
					</div>
				</v-col>
			</template>

			<v-col md="6">
				<div class="app-form-group app-form-group__small no-shadow mb-2">
					<h5 class="font-600 dark-text mb-1">
						<I18nVue t="Services.OpenCard.card_type" />
					</h5>

					<v-select
						@change="getCardType"
						v-model="$v.cardTypeModel.$model"
						:error="$v.cardTypeModel.$error"
						:items="cardTypes"
						item-text="text"
						item-value="value"
						outlined
						hide-details
						:placeholder="$t('Services.OpenCard.card_type')"
					>
						<template v-slot:append>
							<chevron-down-icon size="1.5x" class="grey--text"></chevron-down-icon>
						</template>
					</v-select>
				</div>
			</v-col>

			<v-col md="6">
				<div class="app-form-group app-form-group__small no-shadow mb-2">
					<h5 class="font-600 dark-text mb-1">
						<I18nVue t="Services.OpenCard.card" />
					</h5>

					<v-select
						v-model="$v.formRequestModel.debit_card.$model"
						:error="$v.formRequestModel.debit_card.$error"
						:items="cardsList"
						item-text="name_uz"
						item-value="id"
						outlined
						hide-details
						no-data-text="Ma'lumot yo'q"
						:placeholder="$t('Services.OpenCard.card')"
					>
						<template v-slot:append>
							<chevron-down-icon size="1.5x" class="grey--text"></chevron-down-icon>
						</template>
					</v-select>
				</div>
			</v-col>

			<v-col md="6">
				<div class="app-form-group app-form-group__small no-shadow mb-2">
					<h5 class="font-600 dark-text mb-1">
						<I18nVue t="Services.OpenCard.residence" />
					</h5>

					<v-select
						@change="getBranches"
						v-model="$v.formRequestModel.district.$model"
						:error="$v.formRequestModel.district.$error"
						:items="districtList"
						item-text="name_uz"
						item-value="id"
						outlined
						hide-details
						:placeholder="$t('Services.OpenCard.residence_sub')"
					>
						<template v-slot:append>
							<chevron-down-icon size="1.5x" class="grey--text"></chevron-down-icon>
						</template>
					</v-select>
				</div>
			</v-col>

			<v-col md="6">
				<div class="app-form-group app-form-group__small no-shadow mb-2">
					<h5 class="font-600 dark-text mb-1">
						<I18nVue t="Services.OpenCard.filial" />
					</h5>

					<v-select
						v-model="$v.formRequestModel.filial.$model"
						:error="$v.formRequestModel.filial.$error"
						:items="branchesList"
						item-text="name_uz"
						item-value="id"
						outlined
						hide-details
						no-data-text="Ma'lumot yo'q"
						:placeholder="$t('Services.OpenCard.filial_sub')"
					>
						<template v-slot:append>
							<chevron-down-icon size="1.5x" class="grey--text"></chevron-down-icon>
						</template>
					</v-select>
				</div>
			</v-col>

			<v-col md="12">
				<div class="app-form-group app-form-group__small no-shadow mb-2">
					<h5 class="font-600 dark-text mb-1">
						<I18nVue t="Services.OpenCard.message" />
					</h5>

					<v-textarea v-model="formRequestModel.text"
					            outlined hide-details
					            :placeholder="$t('Services.OpenCard.message')">
					</v-textarea>
				</div>
			</v-col>

			<v-col v-if='$i18n.locale === "uz"' md="12">
				<div class="app-form-group mb-7">
					<h4 class="font-600 dark-text">Ommaviy oferta</h4>

					<v-divider class="mt-3 mb-7" style="border-color: rgba(var(--border-color), 1)" />

					<div class="d-flex align-start">
						<v-checkbox v-model="checkbox" hide-details color="danger" class="ma-0"></v-checkbox>
						<h4 class="font-600 dark-text">
							<router-link
								:to="{ name: 'PublicOffer' }"
								class="text-decoration-none primary-text"
							>ommaviy oferta
							</router-link>
							shartlari bilan tanishdim

						</h4>
					</div>
				</div>
			</v-col>

			<v-col v-if='$i18n.locale === "en"' md="12">
				<div class="app-form-group mb-7">
					<h4 class="font-600 dark-text">Public offer</h4>

					<v-divider class="mt-3 mb-7" style="border-color: rgba(var(--border-color), 1)" />

					<div class="d-flex align-start">
						<v-checkbox v-model="checkbox" hide-details color="danger" class="ma-0"></v-checkbox>
						<h4 class="font-600 dark-text">
							I got acquainted with the conditions of
							<router-link
								:to="{ name: 'PublicOffer' }"
								class="text-decoration-none primary-text"
							>public offer
							</router-link>
						</h4>
					</div>
				</div>
			</v-col>

			<v-col v-if='$i18n.locale === "ru"' md="12">
				<div class="app-form-group mb-7">
					<h4 class="font-600 dark-text">Публичная оферта</h4>

					<v-divider class="mt-3 mb-7" style="border-color: rgba(var(--border-color), 1)" />

					<div class="d-flex align-start">
						<v-checkbox v-model="checkbox" hide-details color="danger" class="ma-0"></v-checkbox>
						<h4 class="font-600 dark-text">
							Я ознакомился(-ась) с условиями
							<router-link
								:to="{ name: 'PublicOffer' }"
								class="text-decoration-none primary-text"
							>публичная оферта
							</router-link>
						</h4>
					</div>
				</div>
			</v-col>

			<v-col md="12">
				<v-btn
					@click="send"
					:disabled="!checkbox"
					depressed
					color="danger"
					rounded
					min-width="192"
					min-height="50"
				>
                    <span class="text-white font-700">
                        <I18nVue t="Services.OpenCard.application" />
                    </span>
				</v-btn>
			</v-col>
		</v-row>

		<app-snackbar ref="appSnackbar" />
	</div>
</template>

<script>
import AppSnackbar from "@/components/AppSnackbar";
import { ChevronDownIcon, FileTextIcon } from "vue-feather-icons";
import { required, email } from "vuelidate/lib/validators";
import I18nVue from "@/I18nVue";

export default {
	name: "CardApplicationTabItem",
	components: {
		AppSnackbar,
		ChevronDownIcon,
		FileTextIcon,
		I18nVue
	},
	data() {
		return {
			individualCardImage: null,
			formRequestModel: {
				full_name: "",
				phone: "",
				email: "",
				passport: null,
				individual_card_design: null,
				tax_inn: "",
				debit_card: null,
				district: null,
				filial: null,
				text: ""
			},
			cardTypes: [
				{ text: "Milliy valyutada", value: "national_currency" },
				{ text: "Xorijiy valyutada", value: "international_currency" },
				{ text: "Kobeyj", value: "kobeydj" }
			],
			cardTypeModel: "",
			fileInputModel: null,
			districtList: [],
			branchesList: [],
			cardsList: [],
			checkbox: false
		};
	},
	validations: {
		fileInputModel: { required },
		cardTypeModel: { required },
		formRequestModel: {
			full_name: { required },
			phone: { required },
			email: { required, email },
			passport: { required },
			tax_inn: { required },
			debit_card: { required },
			district: { required },
			filial: { required }
		}
	},
	mounted() {
		this.getDistrict();

		if (this.$route.params.id) {
			this.getIndividualCard();
		}
	},
	methods: {
		/*
		 * Получение список районов
		 * */
		getDistrict() {
			this.$http.get(`/1/district/`).then(({ data }) => {
				this.districtList = data.results;
			});
		},

		/*
		 * Получение список филиалов
		 * */
		getBranches(val) {
			this.$http
				.get(`/1/filial/`, {
					params: {
						district: val
					}
				})
				.then(({ data }) => {
					this.branchesList = data.results;
				});
		},

		/*
		 * Получение тип карты
		 * */
		getCardType(val) {
			this.$http
				.get(`/1/plastic_cards/`, {
					params: {
						card_type: val
					}
				})
				.then(({ data }) => {
					this.cardsList = data.results;
				});
		},

		/*
		 * Получение файла
		 * */
		getFile(file) {
			let formData = new FormData();
			formData.append("passport_image", file);
			formData.append("given_name", "passport_image");

			this.$http
				.post("/upload/", formData)
				.then(({ data }) => {
					this.formRequestModel.passport = data.id;
				})
			// .catch((err) => {
			// 	console.log(err);
			// });
		},

		/*
		 * Отправка формы
		 * */
		send() {
			this.$v.$touch();

			if (this.$v.$invalid) {
				return;
			}

			// Удаляем плюс и пробелы из номера
			this.formRequestModel.phone = this.formRequestModel.phone.replace(/\D/g, "");

			this.$http.post(`/plastic_card/application/create`, this.formRequestModel).then((res) => {
				const { appSnackbar } = this.$refs;

				appSnackbar.snackbar = true;
				appSnackbar.text = "Murojat muvaffaqiyatli yuborildi";

				// Сбросим все поля
				this.fileInputModel = {};
				this.cardTypeModel = "";

				for (let key in this.formRequestModel) {
					this.formRequestModel[key] = "";
				}

				this.$v.$reset();
			});
		},

		/*
		*
		* */
		getIndividualCard() {
			// console.log(this.$store.state.IS_LOCAL, this.$store.state.IS_GLOBAL);

			if (this.$store.state.IS_LOCAL) {
				this.$http.get(`/1/documents/${this.$route.params.id}/`)
					.then(({ data }) => {
						// console.log("LOCAL", data);
						this.individualCardImage = data;
						this.formRequestModel.individual_card_design = data.id;
					});
			}

			if (this.$store.state.IS_GLOBAL) {
				this.$http.get(`/1/documents/${this.$store.state.GLOBAL_UPLOAD_IMAGE_ID}`)
					.then(({ data }) => {
						this.individualCardImage = data;
						this.formRequestModel.individual_card_design = this.$store.state.GLOBAL_UPLOAD_IMAGE_ID;
					});
			}

			if (!this.$store.state.IS_LOCAL && !this.$store.state.IS_GLOBAL) {
				this.$router.go(-1);
			}
		}
	}
};
</script>

<style></style>
