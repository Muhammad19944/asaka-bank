<template>
	<div class="hr-form-view">
		<app-card>
			<div class="form-wrap pa-5 px-6">
				<div class="d-flex align-center mb-8">
					<h4 v-if='TYPE === "Create"' class="text--primary text-uppercase font-700 mr-4">
						{{ $t("application_form") }}
					</h4>
					<h4 v-else class="text--primary text-uppercase font-700 mr-4">
						{{ $t("Dashboard.read") }}
					</h4>

					<v-divider style="border-color: rgb(var(--border-color), 1)"></v-divider>
				</div>

				<div class="form-wrap-body">
					<v-row v-if="formModel">
						<v-col md="4">
							<div class="app-form-group app-form-group__small no-shadow mb-2">
								<h5 class="font-600 dark-text mb-1">
									<I18nVue t='Services.OpenCard.FISH'/>
								</h5>

								<v-text-field
									v-model="formModel.full_name"
									outlined
									hide-details
									:readonly="TYPE === 'Read'"
									:placeholder="$t('Services.OpenCard.FISH_sub')"
								>
								</v-text-field>
							</div>
						</v-col>

						<v-col md="4">
							<div class="app-form-group app-form-group__small no-shadow mb-2">
								<h5 class="font-600 dark-text mb-1">
									<I18nVue t='Services.OpenCard.phone'/>
								</h5>

								<v-text-field
									v-model="formModel.phone_number"
									v-mask="'+998 (##) ### ## ##'"
									outlined
									hide-details
									:readonly="TYPE === 'Read'"
									:placeholder="$t('Services.OpenCard.phone')"
								>
								</v-text-field>
							</div>
						</v-col>

						<v-col md="4">
							<div class="app-form-group app-form-group__small no-shadow mb-2">
								<h5 class="font-600 dark-text mb-1">
									Vakansiya nomi
								</h5>

								<v-text-field
									v-model="formModel.vacancy_title"
									outlined
									hide-details
									:readonly="TYPE === 'Read'"
								>
								</v-text-field>
							</div>
						</v-col>

						<v-col md="4">
							<div class="app-form-group app-form-group__small no-shadow mb-2">
								<h5 class="font-600 dark-text mb-1">
									<I18nVue t='Services.OpenCard.residence'/>
								</h5>

								<v-text-field
									v-model="
										$i18n.locale === 'uz' ?
										formModel.district.name_uz :
										$i18n.locale === 'ru' ?
										formModel.district.name_ru :
										formModel.district.name_en
									"
									outlined
									hide-details
									:readonly="TYPE === 'Read'"
								>
								</v-text-field>
							</div>
						</v-col>

						<v-col md="4">
							<file-upload
								ref="propFile"
								:value="documentFile"
								:disabled="TYPE === 'Read'"
								:label="$t('Dashboard.upload_file')"
							/>
						</v-col>

						<v-col md="4">
							<div class="app-form-group app-form-group__small no-shadow mb-2">
								<h5 class="font-600 dark-text mb-1">Statusni o'zgartirish</h5>

								<v-select
									@change="changeStatus"
									v-model="formModel.status"
									:items="statusList"
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
							<div class="app-form-group app-form-group__small no-shadow mb-2">
								<h5 class="font-600 dark-text mb-1">Kondidatga xabar yozish</h5>

								<v-textarea
									v-model="sendFeedbackToUser.text"
									outlined
									hide-details
									no-resize
								>
								</v-textarea>
							</div>
						</v-col>

						<v-col md="8"></v-col>

						<v-col md="12">
							<div class="app-form-group app-form-group__small no-shadow mb-2">
								<h5 class="font-600 dark-text mb-1">Kondidatga yozilgan xabarlar</h5>

								<v-row>
									<template v-for="application in formModel.application_outcome">
										<v-col :key="application.id" md="4">
											<div class="credit-widget pa-5 rounded-lg overflow-hidden p-relative">
												<div class="d-flex align-center mb-1">
													<h5 class="font-600">Kim tomondan yozilgan:</h5>
													<template v-if="application.created_by">
														<span class="d-block ml-2">{{ application.created_by.first_name }} {{ application.created_by.last_name }}</span>
													</template>
												</div>

												<div class="d-flex align-center mb-1">
													<h5 class="font-600">Yuborilgan sana:</h5>
													<span class="d-block ml-2">{{ application.created_date | filterDateAndTimeHour }}</span>
												</div>

												<div class="d-flex align-center">
													<h5 class="font-600">Xabar:</h5>
													<span class="d-block ml-2">{{ application.text }}</span>
												</div>
											</div>
										</v-col>
									</template>
								</v-row>
							</div>
						</v-col>

						<v-col md="12">
							<go-back-button />
							<send-button @emit:up="send" />
						</v-col>
					</v-row>
				</div>
			</div>
		</app-card>
	</div>
</template>

<script>
import AppCard from "../../BaseComponents/AppCard";
import GoBackButton from "../../BaseComponents/GoBackButton";
import SendButton from "../../BaseComponents/SendButton";
import I18nVue from "../../../../I18nVue";
import FileUpload from "../../BaseComponents/FileUpload";
import { ChevronDownIcon } from "vue-feather-icons"

export default {
	name: "HRForm",
	props: {
		TYPE: {
			type: String,
			default: ""
		}
	},
	components: {
		AppCard,
		GoBackButton,
		SendButton,
		I18nVue,
		FileUpload,
		ChevronDownIcon
	},
	data() {
		return {
			formModel: null,
			documentFile: null,
			sendFeedbackToUser: {
				application: this.$route.params.id,
				text: ""
			},
			statusList: [],
		}
	},
	mounted() {
		if(this.$route.params.id) {
			this.getOne()
			this.getStatusList()
		}
	},
	methods: {
		/*
		*
		* */
		getOne() {
			this.$http.get(`/${this.$store.state.auth.COMPANY_ID}/job_app/action/${this.$route.params.id}/`)
				.then(({ data }) => {
					this.formModel = data
					this.documentFile = data.resume
					console.log(data);
				})
		},
		/*
		 *
		 * */
		changeStatus(val) {
			this.$http
				.put(`/${this.$store.state.auth.COMPANY_ID}/job_app/action/${this.$route.params.id}/`, {
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
		getStatusList() {
			this.$http.get(`/${this.$store.state.auth.COMPANY_ID}/status/`).then(({ data }) => {
				this.statusList = data.results;
			});
		},
		/*
		*
		* */
		send() {
			this.$http.post(`/${this.$store.state.auth.COMPANY_ID}/job_application/result/`, this.sendFeedbackToUser)
				.then(() => {
					this.$toast.success(`Murojat mijozga yuborildi`);

					setTimeout(() => {
						this.$router.push({ name: "AdminHRApplications" });
					}, 1500);
				})
				.catch((err) => {
					this.$toast.error(err.data.join());
				});
		}
	}
}
</script>
