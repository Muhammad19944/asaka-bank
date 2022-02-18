<template>
	<div class="application-form-view">
		<app-card>
			<div class="form-wrap pa-5 px-6">
				<div class="d-flex align-center mb-8">
					<h4 class="text--primary text-uppercase font-700 mr-4">
						{{ TYPE === "Create" ? $t("Dashboard.add_new") : TYPE === "Update" ? $t("Dashboard.update") : $t("Dashboard.read") }}</h4>

					<v-divider style="border-color: rgb(var(--border-color), 1)"></v-divider>
				</div>

				<div class="form-wrap-body">
					<v-row>
						<template v-if="applicationModel.is_completed">
							<v-col md="12">
								<v-alert type="error">Mijoz bilan murojaat yakunlangan</v-alert>
							</v-col>
						</template>

						<v-col md="4">
							<div class="app-form-group app-form-group__small no-shadow mb-2">
								<h5 class="font-600 dark-text mb-1">F.I.O</h5>

								<v-text-field
									v-model="applicationModel.full_name"
									outlined
									hide-details
									readonly
								></v-text-field>
							</div>
						</v-col>

						<v-col md="4">
							<div class="app-form-group app-form-group__small no-shadow mb-2">
								<h5 class="font-600 dark-text mb-1">Telefon</h5>

								<v-text-field
									v-model="applicationModel.phone"
									v-mask="'+998 (##) ### ## ##'"
									outlined
									hide-details
									readonly
								></v-text-field>
							</div>
						</v-col>

						<v-col md="4">
							<div class="app-form-group app-form-group__small no-shadow mb-2">
								<h5 class="font-600 dark-text mb-1">E-mail</h5>

								<v-text-field
									v-model="applicationModel.email"
									outlined
									hide-details
									readonly
								></v-text-field>
							</div>
						</v-col>

						<v-col md="4">
							<div class="app-form-group app-form-group__small no-shadow mb-2">
								<h5 class="font-600 dark-text mb-1">Tug'ilgan yili</h5>

								<v-text-field
									v-model="applicationModel.date_of_birth"
									outlined
									hide-details
									readonly
								></v-text-field>
							</div>
						</v-col>

						<v-col md="4">
							<div class="app-form-group app-form-group__small no-shadow mb-2">
								<h5 class="font-600 dark-text mb-1">Viloyat</h5>

								<template v-if="applicationModel.district">
									<template v-if="$i18n.locale === 'uz'">
										<v-text-field
											v-model="applicationModel.district.name_uz"
											outlined
											hide-details
											readonly
										></v-text-field>
									</template>

									<template v-if="$i18n.locale === 'ru'">
										<v-text-field
											v-model="applicationModel.district.name_ru"
											outlined
											hide-details
											readonly
										></v-text-field>
									</template>

									<template v-if="$i18n.locale === 'en'">
										<v-text-field
											v-model="applicationModel.district.name_en"
											outlined
											hide-details
											readonly
										></v-text-field>
									</template>
								</template>
							</div>
						</v-col>

						<v-col md="4">
							<div class="app-form-group app-form-group__small no-shadow mb-2">
								<h5 class="font-600 dark-text mb-1">Filial</h5>

								<template v-if="applicationModel.filial">
									<template v-if="$i18n.locale === 'uz'">
										<v-text-field
											v-model="applicationModel.filial.name_uz"
											outlined
											hide-details
											readonly
										></v-text-field>
									</template>

									<template v-if="$i18n.locale === 'ru'">
										<v-text-field
											v-model="applicationModel.filial.name_ru"
											outlined
											hide-details
											readonly
										></v-text-field>
									</template>

									<template v-if="$i18n.locale === 'en'">
										<v-text-field
											v-model="applicationModel.filial.name_en"
											outlined
											hide-details
											readonly
										></v-text-field>
									</template>
								</template>
							</div>
						</v-col>

						<v-col md="4">
							<div class="app-form-group app-form-group__small no-shadow mb-2">
								<h5 class="font-600 dark-text mb-1">Kredit</h5>

								<template v-if="applicationModel.credit">
									<template v-if="$i18n.locale === 'uz'">
										<v-text-field
											v-model="applicationModel.credit.title_uz"
											outlined
											hide-details
											readonly
										></v-text-field>
									</template>

									<template v-if="$i18n.locale === 'ru'">
										<v-text-field
											v-model="applicationModel.credit.title_ru"
											outlined
											hide-details
											readonly
										></v-text-field>
									</template>

									<template v-if="$i18n.locale === 'en'">
										<v-text-field
											v-model="applicationModel.credit.title_en"
											outlined
											hide-details
											readonly
										></v-text-field>
									</template>
								</template>
							</div>
						</v-col>

						<v-col md="4">
							<div class="app-form-group app-form-group__small no-shadow mb-2">
								<h5 class="font-600 dark-text mb-1">Kredit summasi</h5>

								<v-text-field
									v-model="applicationModel.credit_amount"
									outlined
									hide-details
									readonly
								></v-text-field>
							</div>
						</v-col>

						<v-col md="4">
							<div class="app-form-group app-form-group__small no-shadow mb-2">
								<h5 class="font-600 dark-text mb-1">Kredit muddati <span class="red--text">(oy)</span>
								</h5>

								<v-text-field
									v-model="applicationModel.credit_period"
									outlined
									hide-details
									readonly
								></v-text-field>
							</div>
						</v-col>

						<v-col md="4">
							<div class="app-form-group app-form-group__small no-shadow mb-2">
								<h5 class="font-600 dark-text mb-1">Boshlang'ich to'lov <span
									class="red--text">(%)</span></h5>

								<v-text-field
									v-model="applicationModel.initial_payment"
									outlined
									hide-details
									readonly
								></v-text-field>
							</div>
						</v-col>

						<v-col md="4">
							<div class="app-form-group app-form-group__small no-shadow mb-2">
								<h5 class="font-600 dark-text mb-1">STIR</h5>

								<v-text-field
									v-model="applicationModel.tax_inn"
									outlined
									hide-details
									readonly
								></v-text-field>
							</div>
						</v-col>

						<v-col md="4"></v-col>

						<v-col md="4">
							<file-upload
								ref="propFile"
								@emit:up="upload"
								:value="documentFile"
								readonly
								label="Pasport nusxasi"
							/>
						</v-col>

						<v-col md="4">
							<file-upload
								ref="propFile"
								@emit:up="uploadFile"
								:value="file"
								readonly
								label="Daromadlar to'g'risida ma'lumot"
							/>
						</v-col>

						<v-col md="4">
							<div class="app-form-group app-form-group__small no-shadow mb-2">
								<h5 class="font-600 dark-text mb-1">Statusni o'zgartirish</h5>

								<template v-if="$i18n.locale === 'uz'">
									<v-select
										@change="changeStatus"
										:items="getStatusList"
										:readonly="applicationModel.is_completed"
										item-text="name_uz"
										item-value="id"
										outlined
										hide-details
									>
										<template v-slot:append>
											<chevron-down-icon size="1.35x" class="text-secondary-dark"></chevron-down-icon>
										</template>
									</v-select>
								</template>

								<template v-if="$i18n.locale === 'ru'">
									<v-select
										@change="changeStatus"
										:items="getStatusList"
										v-model="status"
										item-text="name_ru"
										item-value="id"
										outlined
										hide-details
									>
										<template v-slot:append>
											<chevron-down-icon size="1.35x" class="text-secondary-dark"></chevron-down-icon>
										</template>
									</v-select>
								</template>

								<template v-if="$i18n.locale === 'en'">
									<v-select
										@change="changeStatus"
										:items="getStatusList"
										v-model="status"
										item-text="name_en"
										item-value="id"
										outlined
										hide-details
									>
										<template v-slot:append>
											<chevron-down-icon size="1.35x" class="text-secondary-dark"></chevron-down-icon>
										</template>
									</v-select>
								</template>
							</div>
						</v-col>

						<v-col md="6">
							<div class="app-form-group app-form-group__small no-shadow mb-2">
								<h5 class="font-600 dark-text mb-1">{{ $t('credit_purpose') }}</h5>

								<v-textarea
									v-model="applicationModel.credit_purpose"
									readonly
									outlined
									hide-details
									no-resize
								></v-textarea>
							</div>
						</v-col>

						<v-col md="6">
							<div class="app-form-group app-form-group__small no-shadow mb-2">
								<h5 class="font-600 dark-text mb-1">Xabar</h5>

								<v-textarea
									v-model="applicationModel.text"
									readonly
									outlined
									hide-details
									no-resize
								></v-textarea>
							</div>
						</v-col>

						<v-col md="12">
							<div class="app-form-group app-form-group__small no-shadow mb-2">
								<h5 class="font-600 dark-text mb-1">Mijozga javob yozish</h5>

								<v-textarea
									v-model="$v.applicationRequestModel.text.$model"
									:error="$v.applicationRequestModel.text.$error"
									:readonly="applicationModel.is_completed"
									outlined
									hide-details
									no-resize
								></v-textarea>
							</div>
						</v-col>

						<v-col md="12">
							<go-back-button />

							<send-button
								@emit:up="generatePDF"
								:text="$t('download_pdf')"
								class="mr-5"
							>
								<template>
									<download-icon size="1.3x" class="text-white" />
								</template>
							</send-button>

							<template v-if="!applicationModel.is_completed">
								<send-button @emit:up="send" />
							</template>
						</v-col>
					</v-row>
				</div>
			</div>
		</app-card>

		<generate-pdf ref="html2Pdf">
			<template>
				<section class="pdf-item">
					<div class="pdf-item__content">
						<div style="display: flex; align-items: center; margin-bottom: 20px">
							<img src="/logo2.png" alt="" style="width: 90px; height: 90px">

							<div style="margin-left: 15px">
								<h4>AsakaBank</h4>
								<hr style="margin: 4px 0" />

								<span>{{ $t('stock_company') }}</span>
							</div>
						</div>

						<h1 style="font-size: 30px; font-family: var(--font-bold); text-align: center;">
							{{ $t('application') }}
							<span style="font-size: 26px; font-family: var(--font-bold)">№{{ applicationModel.id }}</span>
						</h1>

						<div style="padding: 12px; background: #0009; text-align: center; color: #fff; margin: 36px 0;">
							{{ $t('application_information') }}
						</div>

						<table>
							<tr>
								<td style="width: 200px; text-align: right; font-family: var(--font-bold)">{{ $t('language') }}</td>
								<td style="padding: 6px">
									<template v-if="$i18n.locale === 'uz'">
										<div style="margin-left: 12px">O'zbek</div>
									</template>
									<template v-if="$i18n.locale === 'ru'">
										<div style="margin-left: 12px">Русский</div>
									</template>
									<template v-if="$i18n.locale === 'en'">
										<div style="margin-left: 12px">English</div>
									</template>
								</td>
							</tr>
							<tr>
								<td style="width: 200px; text-align: right; font-family: var(--font-bold)">{{ $t('status') }}</td>
								<td style="padding: 6px">
									<template v-if="applicationModel.status">
										<template v-if="$i18n.locale === 'uz'">
											<div style="margin-left: 12px">{{ applicationModel.status.name_uz }}</div>
										</template>

										<template v-if="$i18n.locale === 'ru'">
											<div style="margin-left: 12px">{{ applicationModel.status.name_ru }}</div>
										</template>

										<template v-if="$i18n.locale === 'en'">
											<div style="margin-left: 12px">{{ applicationModel.status.name_en }}</div>
										</template>
									</template>
								</td>
							</tr>
							<tr>
								<td style="width: 200px; text-align: right; font-family: var(--font-bold)">{{ $t('org_structure') }}</td>
								<td style="padding: 6px">
									<template v-if="applicationModel.filial">
										<template v-if="$i18n.locale === 'uz'">
											<div style="margin-left: 12px">{{ applicationModel.filial.name_uz }}</div>
										</template>

										<template v-if="$i18n.locale === 'ru'">
											<div style="margin-left: 12px">{{ applicationModel.filial.name_ru }}</div>
										</template>

										<template v-if="$i18n.locale === 'en'">
											<div style="margin-left: 12px">{{ applicationModel.filial.name_en }}</div>
										</template>
									</template>
								</td>
							</tr>
							<tr>
								<td style="width: 200px; text-align: right; font-family: var(--font-bold)">{{ $t('Dashboard.credits.name') }}</td>
								<td style="padding: 6px">
									<template v-if="applicationModel.credit">
										<template v-if="$i18n.locale === 'uz'">
											<div style="margin-left: 12px">{{ applicationModel.credit.title_uz }}</div>
										</template>

										<template v-if="$i18n.locale === 'ru'">
											<div style="margin-left: 12px">{{ applicationModel.credit.title_ru }}</div>
										</template>

										<template v-if="$i18n.locale === 'en'">
											<div style="margin-left: 12px">{{ applicationModel.credit.title_en }}</div>
										</template>
									</template>
								</td>
							</tr>
							<tr>
								<td style="width: 200px; text-align: right; font-family: var(--font-bold)">{{ $t('Credits.text3') }}</td>
								<td style="padding: 6px">
									<template v-if="applicationModel.credit_amount">
										<div style="margin-left: 12px">{{ applicationModel.credit_amount }}</div>
									</template>
								</td>
							</tr>
							<tr>
								<td style="width: 200px; text-align: right; font-family: var(--font-bold)">{{ $t('Dashboard.credits.period') }}</td>
								<td style="padding: 6px">
									<template v-if="applicationModel.credit_period">
										<div style="margin-left: 12px">{{ applicationModel.credit_period }} oy</div>
									</template>
								</td>
							</tr>
							<tr>
								<td style="width: 200px; text-align: right; font-family: var(--font-bold)">{{ $t('credit_purpose') }}</td>
								<td style="padding: 6px">
									<template v-if="applicationModel.credit_purpose">
										<div style="margin-left: 12px">{{ applicationModel.credit_purpose }}</div>
									</template>
								</td>
							</tr>
							<tr>
								<td style="width: 200px; text-align: right; font-family: var(--font-bold)">{{ $t('Dashboard.credits.initial_fee') }}</td>
								<td style="padding: 6px">
									<template v-if="applicationModel.initial_payment">
										<div style="margin-left: 12px">{{ applicationModel.initial_payment }}%</div>
									</template>
								</td>
							</tr>
						</table>

						<div style="padding: 12px; background: #0009; text-align: center; color: #fff; margin: 36px 0;">
							{{ $t('dates') }}
						</div>

						<table>
							<tr>
								<td style="width: 200px; text-align: right; font-family: var(--font-bold)">{{ $t('date_creation') }}</td>
								<td style="padding: 6px">
									<template v-if="applicationModel.created_date">
										<div style="margin-left: 12px">{{ applicationModel.created_date | filterDateAndTimeHour }}</div>
									</template>
								</td>
							</tr>
						</table>

						<div style="padding: 12px; background: #0009; text-align: center; color: #fff; margin: 36px 0;">
							{{ $t('applicant_information') }}
						</div>
					</div>
				</section>

				<div class="html2pdf__page-break"/>

				<section class="pdf-item">
					<div class="pdf-item__content">
						<table>
							<tr>
								<td style="width: 200px; text-align: right; font-family: var(--font-bold)">{{ $t('Dashboard.AboutBank.fio') }}</td>
								<td style="padding: 6px">
									<template v-if="applicationModel.full_name">
										<div style="margin-left: 12px">{{ applicationModel.full_name }}</div>
									</template>
								</td>
							</tr>

							<tr>
								<td style="width: 200px; text-align: right; font-family: var(--font-bold)">{{ $t('Services.OpenCard.phone') }}</td>
								<td style="padding: 6px">
									<template v-if="applicationModel.phone">
										<div style="margin-left: 12px">
											{{ applicationModel.phone | VMask('+### (##) ###-##-##') }}
										</div>
									</template>
								</td>
							</tr>

							<tr>
								<td style="width: 200px; text-align: right; font-family: var(--font-bold)">{{ $t('Services.OpenCard.mail') }}</td>
								<td style="padding: 6px">
									<template v-if="applicationModel.email">
										<div style="margin-left: 12px">{{ applicationModel.email }}</div>
									</template>
								</td>
							</tr>

							<tr>
								<td style="width: 200px; text-align: right; font-family: var(--font-bold)">Tug'ilgan sana</td>
								<td style="padding: 6px">
									<template v-if="applicationModel.date_of_birth">
										<div style="margin-left: 12px">{{ applicationModel.date_of_birth }}</div>
									</template>
								</td>
							</tr>

							<tr>
								<td style="width: 200px; text-align: right; font-family: var(--font-bold)">{{ $t('REQUISITES.Requisites.row5') }}</td>
								<td style="padding: 6px">
									<template v-if="applicationModel.tax_inn">
										<div style="margin-left: 12px">{{ applicationModel.tax_inn }}</div>
									</template>
								</td>
							</tr>

							<tr>
								<td style="width: 200px; text-align: right; font-family: var(--font-bold)">{{ $t('region') }}</td>
								<td style="padding: 6px">
									<template v-if="applicationModel.district">
										<template v-if="$i18n.locale === 'uz'">
											<div style="margin-left: 12px">{{ applicationModel.district.name_uz }}</div>
										</template>

										<template v-if="$i18n.locale === 'ru'">
											<div style="margin-left: 12px">{{ applicationModel.district.name_ru }}</div>
										</template>

										<template v-if="$i18n.locale === 'en'">
											<div style="margin-left: 12px">{{ applicationModel.district.name_en }}</div>
										</template>
									</template>
								</td>
							</tr>

							<tr>
								<td style="width: 200px; text-align: right; font-family: var(--font-bold)">{{ $t('Services.OpenCard.message') }}</td>
								<td style="padding: 6px">
									<template v-if="applicationModel.text">
										<div style="margin-left: 12px">{{ applicationModel.text }}</div>
									</template>
								</td>
							</tr>
						</table>
					</div>
				</section>
			</template>
		</generate-pdf>
	</div>
</template>

<script>
import AppCard from "../../../../BaseComponents/AppCard";
import FileUpload from "../../../../BaseComponents/FileUpload";
import SendButton from "../../../../BaseComponents/SendButton";
import GoBackButton from "../../../../BaseComponents/GoBackButton";
import GeneratePdf from "../../../../BaseComponents/GeneratePDF";
import { FileTextIcon, ChevronDownIcon, DownloadIcon } from "vue-feather-icons";

import { mapGetters, mapActions } from "vuex"
import { required } from "vuelidate/lib/validators";

export default {
	name: "ApplicationForm",
	props: {
		TYPE: {
			type: String,
			default: ""
		}
	},
	components: {
		AppCard,
		FileUpload,
		SendButton,
		GoBackButton,
		GeneratePdf,
		FileTextIcon,
		ChevronDownIcon,
		DownloadIcon
	},
	data() {
		return {
			applicationModel: {},
			documentFile: null,
			file: null,
			applicationRequestModel: {
				application: +this.$route.params.id,
				text: "",
				file: null
			}
		};
	},
	validations: {
		applicationRequestModel: {
			text: { required }
		}
	},
	mounted() {
		this.getOne();
		this.fetchStatusList()
	},
	computed: {
		...mapGetters({
			getStatusList: "getStatusList"
		})
	},
	methods: {
		...mapActions({
			fetchStatusList: "fetchStatusList"
		}),

		/*
		*
		* */
		generatePDF() {
			const { html2Pdf } = this.$refs

			html2Pdf.$children[0].generatePdf();
		},

		/*
		*
		* */
		getOne() {
			this.$http.get(`/${this.$store.state.auth.COMPANY_ID}/credit_application/action/${this.$route.params.id}/`)
				.then(({ data }) => {
					this.applicationModel = data;
					this.applicationRequestModel.text = data.application_outcome ? data.application_outcome.text : ""

					this.documentFile = this.applicationModel.passport;
					this.file = this.applicationModel.file;
				});
		},

		/*
		*
		* */
		changeStatus(val) {
			this.$http
				.put(`/${this.$store.state.auth.COMPANY_ID}/credit_application/action/${this.$route.params.id}/`, {
					status: val
				})
				.then(() => {
					this.$toast.success(`Status o'zgartirildi`);
				})
				.catch(() => {
					this.$toast.error(`O'zgartirishda xatolik`);
				});
		},

		/*
		*
		* */
		send() {
			this.$v.$touch();

			if (this.$v.$invalid) {
				return;
			}

			this.$http
				.post(`/${this.$store.state.auth.COMPANY_ID}/application/result/`, this.applicationRequestModel)
				.then(() => {
					this.$toast.success(`Murojat mijozga yuborildi`);

					setTimeout(() => {
						this.$router.push({ name: "PrivateClientsCreditApplicationsList" });
					}, 1500);
				})
				.catch((err) => {
					this.$toast.error(err.data.join());
				});
		},

		/*
		 *
		 * */
		upload(file) {
			this.documentFile = file;
		},

		/*
		*
		* */
		uploadFile(file) {
			this.file = file;
		}
	}
};
</script>

<style></style>
