<template>
	<div class="application-form-view">
		<app-card>
			<div class="form-wrap pa-5 px-6 d-flex flex-column m-h-100">
				<div class="d-flex align-center mb-8">
					<h4 class="text--primary text-uppercase font-700 mr-4">
						{{ TYPE === "Create" ? $t("Dashboard.add_new") : TYPE === "Update" ? $t("Dashboard.update") : $t("Dashboard.read") }}</h4>

					<v-divider style="border-color: rgb(var(--border-color), 1)"></v-divider>
				</div>

				<div class="flex-1">
					<v-row>
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
									v-model="applicationModel.phone_number"
									v-mask="'+998 (##) ### ## ##'"
									outlined
									readonly
									hide-details
								>
								</v-text-field>
							</div>
						</v-col>

						<template v-if="applicationModel.deposit_type">
							<v-col md="4">
								<div class="app-form-group app-form-group__small no-shadow mb-2">
									<h5 class="font-600 dark-text mb-1">Tarif tipi</h5>

									<v-text-field
										v-model="applicationModel.deposit_type"
										readonly
										outlined
										hide-details
									>
									</v-text-field>
								</div>
							</v-col>
						</template>

						<template v-if="applicationModel.credit_period">
							<v-col md="4">
								<div class="app-form-group app-form-group__small no-shadow mb-2">
									<h5 class="font-600 dark-text mb-1">Kredit muddati</h5>

									<v-text-field
										v-model="applicationModel.credit_period"
										readonly
										outlined
										hide-details
									>
									</v-text-field>
								</div>
							</v-col>
						</template>

						<template v-if="applicationModel.credit_sum">
							<v-col md="4">
								<div class="app-form-group app-form-group__small no-shadow mb-2">
									<h5 class="font-600 dark-text mb-1">Kredit summasi</h5>

									<v-text-field
										v-model="applicationModel.credit_sum"
										readonly
										outlined
										hide-details
									>
									</v-text-field>
								</div>
							</v-col>
						</template>

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
					</v-row>
				</div>

				<div class="mt-8">
					<go-back-button />
					<send-button :text="$t('P2p.Check.Save')" @emit:up="save" />
				</div>
			</div>
		</app-card>
	</div>
</template>

<script>
import AppCard from "../../../BaseComponents/AppCard";
import SendButton from "../../../BaseComponents/SendButton";
import GoBackButton from "../../../BaseComponents/GoBackButton";
import MultipleFileUpload from "../../../BaseComponents/MultipleFileUpload";
import { FileTextIcon, ChevronDownIcon, DownloadIcon } from "vue-feather-icons";

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
		ChevronDownIcon,
		DownloadIcon
	},
	data() {
		return {
			applicationModel: {},
			statusList: [],
		};
	},
	mounted() {
		this.getOne();
		this.getStatusList();
	},
	methods: {
		/*
		 *
		 * */
		getOne() {
			this.$http.get(`/${this.$store.state.auth.COMPANY_ID}/business_application/action/${this.$route.params.id}/`).then(({ data }) => {
				console.log(data);
				this.applicationModel = data;
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
		save() {
			console.log('1')
		}
	}
};
</script>

<style>

</style>
