<template>
	<div class="card-open-view">
		<v-container>
			<div class="online-credit-content py-10">
				<v-row>
					<v-col md="6">
						<div class="app-form-group mb-7">
							<h4 class="font-600 dark-text">
								<I18nVue t="Services.OpenCard.FISH" />
							</h4>

							<v-divider class="mt-3 mb-7" style="border-color: rgba(var(--border-color), 1)" />

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
						<div class="app-form-group mb-7">
							<h4 class="font-600 dark-text">
								<I18nVue t="Services.OpenCard.phone" />
							</h4>

							<v-divider class="mt-3 mb-7" style="border-color: rgba(var(--border-color), 1)" />

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
						<div class="app-form-group mb-7">
							<h4 class="font-600 dark-text">
								<I18nVue t="Services.OpenCard.mail" />
							</h4>

							<v-divider class="mt-3 mb-7" style="border-color: rgba(var(--border-color), 1)" />

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
						<div class="app-form-group mb-7">
							<h4 class="font-600 dark-text">
								<I18nVue t="Services.OpenCard.stir" />
							</h4>

							<v-divider class="mt-3 mb-7" style="border-color: rgba(var(--border-color), 1)" />

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
						<div class="app-form-group mb-7">
							<h4 class="font-600 dark-text">
								<I18nVue t="Services.OpenCard.passport" />
							</h4>

							<v-divider class="mt-3 mb-7" style="border-color: rgba(var(--border-color), 1)" />

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
							<span class="d-block mt-n1 text-small primary-text font-600"
							>
                                <I18nVue t="Services.OpenCard.passport_notification" />
                            </span
                            >
						</div>
					</v-col>

					<template v-if="!(Object.keys($route.query).length === 0)">
						<v-col md="12">
							<div class="app-form-group mb-7">
								<h4 class="font-600 dark-text">
									Individual card image
								</h4>

								<v-divider class="mt-3 mb-7" style="border-color: rgba(var(--border-color), 1)" />

								<div class="p-relative">
									<div
										id="canvas-container"
										data-card="image"
										class="card-template-wrap card-template-canvas p-relative rounded-xl overflow-hidden"
										:style="{
											backgroundImage: $store.state.INDIVIDUAL_CARD_DESIGN.imageId ?
											`url(${$http.defaults.baseURL + $store.state.INDIVIDUAL_CARD_DESIGN.imagePath})` :
											`url(${$store.state.INDIVIDUAL_CARD_DESIGN.imagePath})`}
										"
									>
										<div class="canvas-ratio pa-6 p-absolute w-100 h-100">
											<h2
												class="font-700 text-white"
												:class="{
													'right' : $store.state.INDIVIDUAL_CARD_DESIGN.logoPositionValue === 'top_right',
													'text-black' : $store.state.INDIVIDUAL_CARD_DESIGN.textColorValue === 'black'
												}"
												data-card="title"
											>ASAKA BANK</h2>

											<template
												v-if="$store.state.INDIVIDUAL_CARD_DESIGN.logoColorValue === 'white'">
												<img src="/images/card-design/uzcard-1.png" alt="Uzcard Logo"
												     data-card="logo" />
											</template>

											<template
												v-if="$store.state.INDIVIDUAL_CARD_DESIGN.logoColorValue === 'black_white'">
												<img src="/images/card-design/uzcard-2.png" alt="Uzcard Logo"
												     data-card="logo" />
											</template>

											<template
												v-if="$store.state.INDIVIDUAL_CARD_DESIGN.logoColorValue === 'black'">
												<img src="/images/card-design/uzcard-3.png" alt="Uzcard Logo"
												     data-card="logo" />
											</template>

											<template
												v-if="$store.state.INDIVIDUAL_CARD_DESIGN.logoColorValue === 'colorful'">
												<img src="/images/card-design/uzcard-4.png" alt="Uzcard Logo"
												     data-card="logo" />
											</template>
										</div>
									</div>
								</div>
							</div>
						</v-col>
					</template>

					<v-col md="6">
						<div class="app-form-group mb-7">
							<h4 class="font-600 dark-text">
								<I18nVue t="Services.OpenCard.card_type" />
							</h4>

							<v-divider class="mt-3 mb-7" style="border-color: rgba(var(--border-color), 1)" />

							<v-select
								@change="getCardType"
								v-model="$v.cardTypeModel.$model"
								:error="$v.cardTypeModel.$error"
								:items="cardTypes"
								:item-text="$i18n.locale === 'uz' ? 'text_uz' : $i18n.locale === 'ru' ? 'text_ru' : 'text_en'"
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
						<div class="app-form-group mb-7">
							<h4 class="font-600 dark-text">
								<I18nVue t="Services.OpenCard.card" />
							</h4>

							<v-divider class="mt-3 mb-7" style="border-color: rgba(var(--border-color), 1)" />

							<template v-if="$i18n.locale === 'uz'">
								<v-select
									v-model="$v.formRequestModel.debit_card.$model"
									:error="$v.formRequestModel.debit_card.$error"
									:items="cardsList"
									return-object
									outlined
									hide-details
									no-data-text="Ma'lumot yo'q"
									:placeholder="$t('Services.OpenCard.card')"
								>
									<template slot="selection" slot-scope="{ item }">
										{{ item.name_uz }} - ({{ item.category.title_uz }})
									</template>
									<template slot="item" slot-scope="{ item }">
										{{ item.name_uz }} - ({{ item.category.title_uz }})
									</template>
									<template v-slot:append>
										<chevron-down-icon size="1.5x" class="grey--text"></chevron-down-icon>
									</template>
								</v-select>
							</template>

							<template v-if="$i18n.locale === 'ru'">
								<v-select
									v-model="$v.formRequestModel.debit_card.$model"
									:error="$v.formRequestModel.debit_card.$error"
									:items="cardsList"
									item-value="id"
									outlined
									hide-details
									no-data-text="Ma'lumot yo'q"
									:placeholder="$t('Services.OpenCard.card')"
								>
									<template slot="selection" slot-scope="{ item }">
										{{ item.name_ru }} - ({{ item.category.title_ru }})
									</template>
									<template slot="item" slot-scope="{ item }">
										{{ item.name_ru }} - ({{ item.category.title_ru }})
									</template>
									<template v-slot:append>
										<chevron-down-icon size="1.5x" class="grey--text"></chevron-down-icon>
									</template>
								</v-select>
							</template>

							<template v-if="$i18n.locale === 'en'">
								<v-select
									v-model="$v.formRequestModel.debit_card.$model"
									:error="$v.formRequestModel.debit_card.$error"
									:items="cardsList"
									item-value="id"
									outlined
									hide-details
									no-data-text="Ma'lumot yo'q"
									:placeholder="$t('Services.OpenCard.card')"
								>
									<template slot="selection" slot-scope="{ item }">
										{{ item.name_en }} - ({{ item.category.title_en }})
									</template>
									<template slot="item" slot-scope="{ item }">
										{{ item.name_en }} - ({{ item.category.title_en }})
									</template>
									<template v-slot:append>
										<chevron-down-icon size="1.5x" class="grey--text"></chevron-down-icon>
									</template>
								</v-select>
							</template>
						</div>
					</v-col>

					<v-col md="6">
						<div class="app-form-group mb-7">
							<h4 class="font-600 dark-text">
								<I18nVue t="Services.OpenCard.residence" />
							</h4>

							<v-divider class="mt-3 mb-7" style="border-color: rgba(var(--border-color), 1)" />

							<v-select
								@change="getBranches"
								v-model="$v.formRequestModel.district.$model"
								:error="$v.formRequestModel.district.$error"
								:items="districtList"
								:item-text="$i18n.locale === 'uz' ? 'name_uz' : $i18n.locale === 'ru' ? 'name_ru' : 'name_en'"
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
						<div class="app-form-group mb-7">
							<h4 class="font-600 dark-text">
								<I18nVue t="Services.OpenCard.filial" />
							</h4>

							<v-divider class="mt-3 mb-7" style="border-color: rgba(var(--border-color), 1)" />

							<v-select
								v-model="$v.formRequestModel.filial.$model"
								:error="$v.formRequestModel.filial.$error"
								:items="branchesList"
								:item-text="$i18n.locale === 'uz' ? 'name_uz' : $i18n.locale === 'ru' ? 'name_ru' : 'name_en'"
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
						<div class="app-form-group mb-7">
							<h4 class="font-600 dark-text">
								<I18nVue t="Services.OpenCard.message" />
							</h4>

							<v-divider class="mt-3 mb-7" style="border-color: rgba(var(--border-color), 1)" />

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
				</v-row>
			</div>
		</v-container>

		<app-snackbar ref="appSnackbar" />
	</div>
</template>

<script>
import AppBreadCrumb from "@/components/AppBreadCrumb";
import AppSnackbar from "@/components/AppSnackbar";
import { ChevronDownIcon, FileTextIcon } from "vue-feather-icons";
import { required, email } from "vuelidate/lib/validators";
import I18nVue from "@/I18nVue";

export default {
	name: "index",
	components: {
		AppBreadCrumb,
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
				individual_design: {
					file: null,
					card: "",
					logo_color: "",
					logo_loc: "",
					text_color: "",
					local_image_name: ""
				},
				tax_inn: "",
				debit_card: null,
				district: null,
				filial: null,
				text: ""
			},
			cardTypes: [
				{
					text_uz: "Milliy valyutada",
					text_ru: "В национальной валюте",
					text_en: "In national currency",
					value: "national_currency"
				},
				{
					text_uz: "Xorijiy valyutada",
					text_ru: "В иностранной валюте",
					text_en: "In foreign currency",
					value: "international_currency"
				},
				{
					text_uz: "Kobeyj",
					text_ru: "Кобейдж",
					text_en: "Cobage",
					value: "kobeydj"
				}
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
	},
	methods: {
		/*
		 * Получение список районов
		 * */
		getDistrict() {
			this.$http.get("/1/district/", {
				params: {
					page_size: 500
				}
			}).then(({ data }) => {
				this.districtList = data.results;
			});
		},

		/*
		 * Получение список филиалов
		 * */
		getBranches(val) {
			this.$http
				.get("/1/filial/", {
					params: {
						district: val,
						type: "filial",
						page_size: 500
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
				.get("1/plastic_cards/", {
					params: {
						card_type: val,
						is_corporate: false
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
				});
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

			if (this.$route.query.hasOwnProperty("individual")) {
				this.formRequestModel.individual_design.file = this.$store.state.INDIVIDUAL_CARD_DESIGN.imageId;
				this.formRequestModel.individual_design.local_image_name = this.$store.state.INDIVIDUAL_CARD_DESIGN.imagePath;
				this.formRequestModel.individual_design.card = "uzcard";
				this.formRequestModel.individual_design.logo_color = this.$store.state.INDIVIDUAL_CARD_DESIGN.logoColorValue;
				this.formRequestModel.individual_design.logo_loc = this.$store.state.INDIVIDUAL_CARD_DESIGN.logoPositionValue;
				this.formRequestModel.individual_design.text_color = this.$store.state.INDIVIDUAL_CARD_DESIGN.textColorValue;
			} else {
				delete this.formRequestModel.individual_design;
			}

			// Удаляем плюс и пробелы из номера
			this.formRequestModel.phone = this.formRequestModel.phone.replace(/\D/g, "");

			this.$http.post("/plastic_card/application/create", this.formRequestModel).then((res) => {
				// const { appSnackbar } = this.$refs;
				//
				// appSnackbar.snackbar = true;
				// appSnackbar.text = "Murojat muvaffaqiyatli yuborildi";
				this.$toast.success(`Murojat muvaffaqiyatli yuborildi`);

				if(
					this.formRequestModel.debit_card.card_process_uz.trim() !== "Bepul" ||
					this.formRequestModel.debit_card.card_process_ru.trim() !== "Бесплатно" ||
					this.formRequestModel.debit_card.card_process_en.trim() !== "Free"
				) {
					this.$router.push({
						name: "ServicePayment",
						params: { id: res.data.id }
					});
				}

				// Сбросим все поля
				this.fileInputModel = {};
				this.cardTypeModel = "";

				for (let key in this.formRequestModel) {
					this.formRequestModel[key] = "";
				}

				this.$v.$reset();
			});
		}
	}
};
</script>

<style></style>
