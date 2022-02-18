<template>
	<div class="application-form-view">
		<app-card>
			<div class="form-wrap d-flex flex-column m-h-100 pa-5 px-6">
				<div class="d-flex align-center mb-8">
					<h4 class="text--primary text-uppercase font-700 mr-4">Ko'rish</h4>

					<v-divider style="border-color: rgb(var(--border-color), 1)"></v-divider>
				</div>

				<div class="flex-1">
					<div class="form-wrap-body">
						<v-row>
							<template v-if="applicationModel.is_completed">
								<v-col md="12">
									<v-alert type="error"> {{ $t("LastCorrections.endConversation") }}</v-alert>
								</v-col>
							</template>

							<v-col md="4">
								<div class="app-form-group app-form-group__small no-shadow mb-2">
									<h5 class="font-600 dark-text mb-1">{{ $t("Dashboard.AboutBank.fio") }}</h5>

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
									<h5 class="font-600 dark-text mb-1">{{ $t("Services.OpenCard.phone") }}</h5>

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
									<h5 class="font-600 dark-text mb-1">{{ $t("Dashboard.AboutBank.email") }}</h5>

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
									<h5 class="font-600 dark-text mb-1">{{ $t("LastCorrections.status") }}</h5>

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
									<h5 class="font-600 dark-text mb-1">{{ $t("LastCorrections.changeStatus") }}</h5>

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

							<v-col md="4"></v-col>

							<v-col md="4">
								<div class="app-form-group app-form-group__small no-shadow mb-2">
									<h5 class="font-600 dark-text mb-1">{{ $t("LastCorrections.fromCustomer") }}</h5>

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
									<h5 class="font-600 dark-text mb-1">{{ $t("LastCorrections.toCustomer") }}</h5>

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
						</v-row>
					</div>
				</div>

				<div>
					<v-col md="12">
						<go-back-button />
						<template v-if="!applicationModel.is_completed">
							<send-button @emit:up="send" />
						</template>
					</v-col>
				</div>
			</div>
		</app-card>
	</div>
</template>

<script>
import AppCard from "../../BaseComponents/AppCard";
import GoBackButton from "../../BaseComponents/GoBackButton";
import SendButton from "../../BaseComponents/SendButton";
import { ChevronDownIcon } from 'vue-feather-icons'
import { required } from "vuelidate/lib/validators";

export default {
	name: "Read",
	components: {
		AppCard,
		GoBackButton,
		SendButton,
		ChevronDownIcon
	},
	data() {
		return {
			statusList: [],
			applicationModel: {
				full_name: "",
				phone: "",
				email: "",
				text: "",
			},
			applicationRequestModel: {
				application: +this.$route.params.id,
				text: "",
				file: null
			}
		}
	},
	validations: {
		applicationRequestModel: {
			text: { required }
		}
	},
	mounted() {
		this.getOne()
		this.getStatusList()
	},
	methods: {
		/*
		*
		* */
		getOne() {
			this.$http.get(`/8/compliance/action/${this.$route.params.id}/`)
			.then(({ data }) => {
				this.applicationModel = data;
				this.applicationRequestModel.text = data.application_outcome.text
			})
		},

		/*
        *
        * */
		changeStatus(val) {
			this.$http
				.put(`/1/compliance/action/${this.$route.params.id}/`, {
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
			this.$http.get("/1/status/").then(({ data }) => {
				this.statusList = data.results;
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
				.post("/8/application/result/", this.applicationRequestModel)
				.then(() => {
					this.$toast.success(`Murojat mijozga yuborildi`);

					setTimeout(() => {
						this.$router.push({ name: "FeedbackComplianceList" });
					}, 1500);
				})
				.catch((err) => {
					this.$toast.error(err.data.join());
				});
		}
	}
};
</script>

<style>

</style>