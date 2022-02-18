<template>
	<div class="application-form-view">
		<app-card>
			<div class="form-wrap pa-5 px-6">
				<div class="d-flex align-center mb-8">
					<h4 class="text--primary text-uppercase font-700 mr-4">Ko'rish</h4>

					<v-divider style="border-color: rgb(var(--border-color), 1)"></v-divider>
				</div>

				<div class="app-collapse--advanced mb-10">
					<v-expansion-panels v-model="panel" accordion multiple class="border-all">
						<!-- Mijozga yuborish -->
						<v-expansion-panel>
							<v-expansion-panel-header class="py-5 font-600 reset-size">
								Mijozga yuborish
							</v-expansion-panel-header>
							<v-expansion-panel-content>
								<div class="form-wrap-body">
									<v-row>
										<template v-if="applicationModel.is_completed">
											<v-col md="12">
												<v-alert type="error"> Mijoz bilan murojaat yakunlangan</v-alert>
											</v-col>
										</template>

										<v-col md="4">
											<div class="app-form-group app-form-group__small no-shadow mb-2">
												<h5 class="font-600 dark-text mb-1">F.I.O</h5>

												<v-text-field
													v-model="applicationModel.full_name"
													readonly
													outlined
													hide-details
												>
												</v-text-field>
											</div>
										</v-col>

										<v-col md="4">
											<div class="app-form-group app-form-group__small no-shadow mb-2">
												<h5 class="font-600 dark-text mb-1">Telefon</h5>

												<v-text-field
													v-model="applicationModel.phone"
													outlined
													readonly
													hide-details
												>
												</v-text-field>
											</div>
										</v-col>

										<v-col md="4">
											<div class="app-form-group app-form-group__small no-shadow mb-2">
												<h5 class="font-600 dark-text mb-1">E-mail</h5>

												<v-text-field
													v-model="applicationModel.email"
													outlined
													readonly
													hide-details
												>
												</v-text-field>
											</div>
										</v-col>

										<v-col md="4">
											<div class="app-form-group app-form-group__small no-shadow mb-2">
												<h5 class="font-600 dark-text mb-1">STIR</h5>

												<v-text-field
													v-model="applicationModel.tax_inn"
													outlined
													readonly
													hide-details
												>
												</v-text-field>
											</div>
										</v-col>

										<v-col md="4">
											<div class="app-form-group app-form-group__small no-shadow mb-2">
												<h5 class="font-600 dark-text mb-1">Viloyat</h5>

												<v-text-field
													v-model="
                                                        applicationModel.district && applicationModel.district.name_uz
                                                    "
													outlined
													readonly
													hide-details
												>
												</v-text-field>
											</div>
										</v-col>

										<v-col md="4">
											<div class="app-form-group app-form-group__small no-shadow mb-2">
												<h5 class="font-600 dark-text mb-1">Filial</h5>

												<v-text-field
													v-model="applicationModel.filial && applicationModel.filial.name_uz"
													outlined
													readonly
													hide-details
												>
												</v-text-field>
											</div>
										</v-col>

										<v-col md="4">
											<div class="app-form-group app-form-group__small no-shadow mb-2">
												<h5 class="font-600 dark-text mb-1">Depozit nomi</h5>

												<v-text-field
													v-model="
                                                        applicationModel.deposit && applicationModel.deposit.title_uz
                                                    "
													outlined
													readonly
													hide-details
												>
												</v-text-field>
											</div>
										</v-col>

										<v-col md="4">
											<div class="app-form-group app-form-group__small no-shadow mb-2">
												<h5 class="font-600 dark-text mb-1">{{ $t('Services.OpenCard.deposit_quantity') }}</h5>

												<v-text-field
													v-model="applicationModel.deposit_amt"
													outlined
													readonly
													hide-details
												>
												</v-text-field>
											</div>
										</v-col>

										<v-col md="4">
											<div class="app-form-group app-form-group__small no-shadow mb-2">
												<h5 class="font-600 dark-text mb-1">{{ $t('Dashboard.deposit.deposit_period') }} <span class="red--text font-700">({{$t('Dashboard.month')}})</span></h5>

												<v-text-field
													v-model="applicationModel.deposit_period"
													outlined
													readonly
													hide-details
												>
												</v-text-field>
											</div>
										</v-col>

										<v-col md="4">
											<div class="app-form-group app-form-group__small no-shadow mb-2">
												<h5 class="font-600 dark-text mb-1">Status</h5>

												<v-text-field
													v-model="applicationModel.status && applicationModel.status.name_uz"
													outlined
													readonly
													hide-details
												>
												</v-text-field>
											</div>
										</v-col>

										<v-col md="4">
											<div class="app-form-group app-form-group__small no-shadow mb-2">
												<h5 class="font-600 dark-text mb-1">Statusni o'zgartirish</h5>

												<v-select
													@change="changeStatus"
													:items="statusList"
													:readonly="applicationModel.is_completed"
													item-text="name_uz"
													item-value="id"
													outlined
													hide-details
												>
													<template v-slot:append>
														<chevron-down-icon
															size="1.35x"
															class="text-secondary-dark"
														></chevron-down-icon>
													</template>
												</v-select>
											</div>
										</v-col>

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
											<div class="app-form-group app-form-group__small no-shadow mb-2">
												<h5 class="font-600 dark-text mb-1">Mijozdan kelgan xabar</h5>

												<v-textarea
													v-model="applicationModel.text"
													outlined
													readonly
													hide-details
													no-resize
												>
												</v-textarea>
											</div>
										</v-col>

										<v-col md="4">
											<div class="app-form-group app-form-group__small no-shadow mb-2">
												<h5 class="font-600 dark-text mb-1">Mijozga xabar yozish</h5>

												<v-textarea
													v-model="$v.applicationRequestModel.text.$model"
													:error="$v.applicationRequestModel.text.$error"
													:readonly="applicationModel.is_completed"
													outlined
													hide-details
													no-resize
												>
												</v-textarea>
											</div>
										</v-col>

										<v-col md="12">
											<go-back-button />

											<template v-if="TYPE === 'Read'">
												<send-button
													@emit:up="generatePDF"
													:text="$t('download_pdf')"
													class="mr-5"
												>
													<template>
														<download-icon size="1.3x" class="text-white" />
													</template>
												</send-button>
											</template>

											<template v-if="!applicationModel.is_completed">
												<send-button @emit:up="send" />
											</template>
										</v-col>
									</v-row>
								</div>
							</v-expansion-panel-content>
						</v-expansion-panel>
						<!-- End Mijozga yuborish -->

						<!-- Filialga yuborish -->
						<v-expansion-panel>
							<v-expansion-panel-header class="py-5 font-600 reset-size">
								Filialga yuborish
							</v-expansion-panel-header>
							<v-expansion-panel-content>
								<div class="form-wrap-body">
									<v-row>
										<v-col md="4">
											<div class="app-form-group app-form-group__small no-shadow mb-2">
												<h5 class="font-600 dark-text mb-1">Filial</h5>

												<v-select
													v-model="selectFilial"
													:items="filialList"
													:readonly="applicationModel.is_completed"
													item-text="name_uz"
													item-value="id"
													outlined
													hide-details
												>
													<template v-slot:append>
														<chevron-down-icon
															size="1.35x"
															class="text-secondary-dark"
														></chevron-down-icon>
													</template>
												</v-select>
											</div>
										</v-col>

										<v-col md="12">
											<go-back-button />
											<template v-if="!applicationModel.is_completed">
												<send-button @emit:up="moveToFilial" />
											</template>
										</v-col>
									</v-row>
								</div>
							</v-expansion-panel-content>
						</v-expansion-panel>
						<!-- End Filialga yuborish -->
					</v-expansion-panels>
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
							<span style="font-size: 26px; font-family: var(--font-bold)">№ {{ applicationModel.id }}</span>
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

							<!-- For deposit template -->
							<template v-if="applicationModel.deposit">
								<tr>
									<td style="width: 200px; text-align: right; font-family: var(--font-bold)">{{ $t('Dashboard.deposit.name') }}</td>
									<td style="padding: 6px">
										<template v-if="applicationModel.deposit">
											<template v-if="$i18n.locale === 'uz'">
												<div style="margin-left: 12px">{{ applicationModel.deposit.title_uz }}</div>
											</template>

											<template v-if="$i18n.locale === 'ru'">
												<div style="margin-left: 12px">{{ applicationModel.deposit.title_ru }}</div>
											</template>

											<template v-if="$i18n.locale === 'en'">
												<div style="margin-left: 12px">{{ applicationModel.deposit.title_en }}</div>
											</template>
										</template>
									</td>
								</tr>
							</template>

							<template v-if="applicationModel.deposit_amt">
								<tr>
									<td style="width: 200px; text-align: right; font-family: var(--font-bold)">{{ $t('Services.OpenCard.deposit_quantity') }}</td>
									<td style="padding: 6px">
										<template v-if="applicationModel.deposit_amt">
											<div style="margin-left: 12px">{{ applicationModel.deposit_amt }}</div>
										</template>
									</td>
								</tr>
							</template>

							<template v-if="applicationModel.deposit_period">
								<tr>
									<td style="width: 200px; text-align: right; font-family: var(--font-bold)">{{ $t('Dashboard.deposit.deposit_period') }}</td>
									<td style="padding: 6px">
										<template v-if="applicationModel.deposit_period">
											<div style="margin-left: 12px">{{ applicationModel.deposit_period }} oy</div>
										</template>
									</td>
								</tr>
							</template>
							<!-- End For deposit template -->
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
					</div>
				</section>

				<div class="html2pdf__page-break"/>

				<section class="pdf-item">
					<div class="pdf-item__content">
						<div style="padding: 12px; background: #0009; text-align: center; color: #fff; margin: 36px 0;">
							{{ $t('applicant_information') }}
						</div>

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
import SendButton from "../../../../BaseComponents/SendButton";
import GoBackButton from "../../../../BaseComponents/GoBackButton";
import FileUpload from "../../../../BaseComponents/FileUpload";
import { FileTextIcon, ChevronDownIcon, DownloadIcon } from "vue-feather-icons";
import GeneratePdf from "../../../../BaseComponents/GeneratePDF";
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
		SendButton,
		GoBackButton,
		FileUpload,
		GeneratePdf,
		FileTextIcon,
		ChevronDownIcon,
		DownloadIcon
	},
	data() {
		return {
			documentFile: null,
			applicationModel: {},
			statusList: [],
			filialList: [],
			selectFilial: "",
			panel: [0],
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
		this.getStatusList();
		this.getFilialList();
	},
	methods: {
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
			this.$http.get(`/1/deposit/application/action/${this.$route.params.id}/`).then(({ data }) => {
				this.applicationModel = data;
				this.applicationModel.deposit_amt = this.$options.filters.filterNumberFormatThousands(this.applicationModel.deposit_amt)
				this.applicationRequestModel.text = data.application_outcome ? data.application_outcome.text : ""

				this.documentFile = this.applicationModel.passport;
			});
		},

		/*
		 *
		 * */
		getStatusList() {
			this.$http.get("/1/status/").then(({ data }) => {
				this.statusList = data.results;
			});
		},

		/*
		 *
		 * */
		changeStatus(val) {
			this.$http
				.put(`/1/deposit/application/action/${this.$route.params.id}/`, {
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
		getFilialList() {
			this.$http.get("/1/filial/").then(({ data }) => {
				this.filialList = data.results;
			});
		},

		/*
		 *
		 * */
		moveToFilial() {
			this.$http
				.put(
					`/1/deposit/application/action/${this.$route.params.id}/transfer_to_filial/${this.selectFilial}/`
				)
				.then(() => {
					this.$toast.success(`Filialga yuborildi`);

					setTimeout(() => {
						this.$router.push({ name: "PrivateClientsDepositsApplicationsList" });
					}, 1000);
				})
				.catch(() => {
					this.$toast.error(`Yuborishda xatolik`);
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
		send() {
			this.$v.$touch();
			if (this.$v.$invalid) {
				return;
			}

			this.$http
				.post("/1/application/result/", this.applicationRequestModel)
				.then(() => {
					this.$toast.success(`Murojat mijozga yuborildi`);

					setTimeout(() => {
						this.$router.push({ name: "PrivateClientsDepositsApplicationsList" });
					}, 1500);
				})
				.catch((err) => {
					this.$toast.error(err.data.join());
				});
		}
	}
};
</script>

<style></style>
