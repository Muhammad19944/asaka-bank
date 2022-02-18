<template>
	<div class="category-form-view">
		<app-card>
			<div class="form-wrap d-flex flex-column m-h-100 pa-5 px-6">
				<div class="d-flex align-center mb-8">
					<h4 class="text--primary text-uppercase font-700 mr-4">
						{{ TYPE === "Create" ? $t("Dashboard.add_new") : TYPE === "Update" ? $t("Dashboard.update") : $t("Dashboard.read")
						}}
					</h4>

					<v-divider style="border-color: rgb(var(--border-color), 1)"></v-divider>
				</div>

				<div class="flex-1">
					<v-row>
						<v-col md="4">
							<div class="app-form-group app-form-group__small no-shadow mb-2">
								<h5 class="font-600 dark-text mb-1">username</h5>

								<v-text-field
									v-model="$v.usersModel.username.$model"
									:error="$v.usersModel.username.$error"
									:readonly="TYPE === 'Read'"
									outlined
									hide-details
								>
								</v-text-field>
							</div>
						</v-col>

						<v-col md="4">
							<div class="app-form-group app-form-group__small no-shadow mb-2">
								<h5 class="font-600 dark-text mb-1">first_name</h5>

								<v-text-field
									v-model="$v.usersModel.first_name.$model"
									:error="$v.usersModel.first_name.$error"
									:readonly="TYPE === 'Read'"
									outlined
									hide-details
								>
								</v-text-field>
							</div>
						</v-col>

						<v-col md="4">
							<div class="app-form-group app-form-group__small no-shadow mb-2">
								<h5 class="font-600 dark-text mb-1">last_name</h5>

								<v-text-field
									v-model="$v.usersModel.last_name.$model"
									:error="$v.usersModel.last_name.$error"
									:readonly="TYPE === 'Read'"
									outlined
									hide-details
								>
								</v-text-field>
							</div>
						</v-col>

						<v-col md="4">
							<div class="app-form-group app-form-group__small no-shadow mb-2">
								<h5 class="font-600 dark-text mb-1">role</h5>

								<v-select
									v-model="$v.usersModel.role.$model"
									:error="$v.usersModel.role.$error"
									:items="[1,2,3,4,5]"
									:readonly="TYPE === 'Read'"
									outlined
									hide-details
								>
									<template v-slot:append>
										<chevron-down-icon size="1.5x" class="grey--text"></chevron-down-icon>
									</template>
								</v-select>
							</div>
						</v-col>

						<v-col md="4">
							<div class="app-form-group app-form-group__small no-shadow mb-2">
								<h5 class="font-600 dark-text mb-1">company</h5>

								<v-select
									v-model="$v.usersModel.company.$model"
									:error="$v.usersModel.company.$error"
									:items="[1,2,3,4,5]"
									:readonly="TYPE === 'Read'"
									outlined
									hide-details
								>
									<template v-slot:append>
										<chevron-down-icon size="1.5x" class="grey--text"></chevron-down-icon>
									</template>
								</v-select>
							</div>
						</v-col>

						<v-col md="4">
							<div class="app-form-group app-form-group__small no-shadow mb-2">
								<h5 class="font-600 dark-text mb-1">password</h5>

								<v-text-field
									@click:append="show = !show"
									v-model="$v.usersModel.password.$model"
									:error="$v.usersModel.password.$error"
									:append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
									:rules="[rules.min]"
									:type="show ? 'text' : 'password'"
									:readonly="TYPE === 'Read'"
									outlined
									hide-details
								>
								</v-text-field>
							</div>
						</v-col>
					</v-row>
				</div>

				<div class="mt-8">
					<go-back-button />
					<template v-if="TYPE === 'Create'">
						<send-button @emit:up="send" :text="$t('Dashboard.create')" />
					</template>

					<template v-else-if="TYPE === 'Update'">
						<send-button @emit:up="update" :text="$t('Dashboard.update')" />
					</template>
				</div>
			</div>
		</app-card>
	</div>
</template>

<script>
import AppCard from "../../../../BaseComponents/AppCard";
import SendButton from "../../../../BaseComponents/SendButton";
import GoBackButton from "../../../../BaseComponents/GoBackButton";
import FileUpload from "../../../../BaseComponents/FileUpload";
import { required } from "vuelidate/lib/validators";
import { ChevronDownIcon } from 'vue-feather-icons'

export default {
	name: "RolesForm",
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
		ChevronDownIcon
	},
	data() {
		return {
			show: false,
			rules: {
				min: v => v.length >= 8 || 'Min 8 characters',
			},
			usersModel: {
				username: "",
				first_name: "",
				last_name: "",
				role: "",
				company: null,
				password: "",
				is_deleted: false,
				is_active: true
			}
		};
	},
	validations: {
		usersModel: {
			username: { required },
			first_name: { required },
			last_name: { required },
			role: { required },
			company: { required },
			password: { required },
		}
	},
	mounted() {
		if (this.$route.params.id) {
			this.getOne();
		}
	},
	methods: {
		/*
		 *
		 * */
		send() {
			this.$v.$touch();

			if (this.$v.$invalid) {
				this.$toast.warning(`Field to'ldirilishi shart`);

				return;
			}

			this.$http
				.post(`/${this.$store.state.auth.COMPANY_ID}/employee/`, this.usersModel)
				.then((res) => {
					this.$toast.success(`Yaratildi`);

					setTimeout(() => {
						this.$router.push({ name: "OtherSectionRolesList" });
					}, 1500);
				})
				.catch((err) => {
					this.$toast.error(`Yaratishda xatolik`);

					this.resetFields();
				});
		},

		/*
		 *
		 * */
		update() {
			this.$v.$touch();

			if (this.$v.$invalid) {
				this.$toast.warning(`Field to'ldirilishi shart`);

				return;
			}

			this.$http
				.put(`/${this.$store.state.auth.COMPANY_ID}/employee/${this.$route.params.id}/`, this.usersModel)
				.then((res) => {
					this.$toast.success(`Yangilandi`);

					setTimeout(() => {
						this.$router.push({ name: "OtherSectionRolesList" });
					}, 1500);
				})
				.catch((err) => {
					this.$toast.error(`Yangilashda xatolik`);

					this.resetFields();
				});
		},

		/*
		 *
		 * */
		getOne() {
			this.$http.get(`/${this.$store.state.auth.COMPANY_ID}/employee/${this.$route.params.id}/`).then(({ data }) => {
				this.usersModel = data;
			});
		},

		/*
		*
		* */
		roleList() {

		}
	}
};
</script>

<style></style>
