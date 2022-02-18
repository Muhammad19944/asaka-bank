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
												<h5 class="font-600 dark-text mb-1">Karta</h5>

												<v-text-field
													v-model="
                                                        applicationModel.debit_card &&
                                                        applicationModel.debit_card.name_uz
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

										<template v-if="!!applicationModel.passport">
											<v-col md="4">
												<multiple-file-upload
													:value="passportFile"
													label="Pasport"
													disabled
												/>
											</v-col>
										</template>

										<template v-else>
											<v-col md="4"></v-col>
										</template>

										<template v-if="!!applicationModel.individual_card_design">
											<v-col md="4">
												<multiple-file-upload
													:value="individualDesignFile"
													label="Individual karta dizayn rasmi"
													disabled
												/>
											</v-col>
										</template>

										<template v-else>
											<v-col md="4"></v-col>
										</template>

										<v-col md="4"></v-col>

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
	</div>
</template>

<script>
import AppCard from "../../../../BaseComponents/AppCard";
import SendButton from "../../../../BaseComponents/SendButton";
import GoBackButton from "../../../../BaseComponents/GoBackButton";
import MultipleFileUpload from "../../../../BaseComponents/MultipleFileUpload";
import { FileTextIcon, ChevronDownIcon } from "vue-feather-icons";
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
		MultipleFileUpload,
		FileTextIcon,
		ChevronDownIcon
	},
	data() {
		return {
			passportFile: [],
			individualDesignFile: [],
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
		getOne() {
			this.$http.get(`/${this.$store.state.auth.COMPANY_ID}/plastic_card/application/action/${this.$route.params.id}/`).then(({ data }) => {
				this.applicationModel = data;
				this.applicationRequestModel.text = data.application_outcome.text
				this.passportFile.push(this.applicationModel.passport)
				this.individualDesignFile.push(this.applicationModel.individual_card_design)
			});
		},

		/*
		 *
		 * */
		getStatusList() {
			this.$http.get(`/${this.$store.state.auth.COMPANY_ID}/status/`).then(({ data }) => {
				this.statusList = data.results;
			});
		},

		/*
		 *
		 * */
		changeStatus(val) {
			this.$http
				.put(`/${this.$store.state.auth.COMPANY_ID}/plastic_card/application/action/${this.$route.params.id}/`, {
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
			this.$http.get(`/${this.$store.state.auth.COMPANY_ID}/filial/`).then(({ data }) => {
				this.filialList = data.results;
			});
		},

		/*
		 *
		 * */
		moveToFilial() {
			this.$http
				.put(
					`/${this.$store.state.auth.COMPANY_ID}/plastic_card/application/action/${this.$route.params.id}/transfer_to_filial/${this.selectFilial}/`
				)
				.then(() => {
					this.$toast.success(`Filialga yuborildi`);

					setTimeout(() => {
						this.$router.push({ name: "AdminSmallBusinessCarsApplicationsList" });
					}, 1000);
				})
				.catch(() => {
					this.$toast.error(`Yuborishda xatolik`);
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
						this.$router.push({ name: "AdminSmallBusinessCarsApplicationsList" });
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
