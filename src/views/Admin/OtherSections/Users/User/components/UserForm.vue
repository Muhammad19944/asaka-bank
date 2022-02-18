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
								<h5 class="font-600 dark-text mb-1">
									{{ $t("username") }}
								</h5>

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
								<h5 class="font-600 dark-text mb-1">{{ $t("first_name") }}</h5>

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
								<h5 class="font-600 dark-text mb-1">{{ $t("last_name") }}</h5>

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
								<h5 class="font-600 dark-text mb-1">{{ $t("role") }}</h5>

								<v-select
									v-model="$v.usersModel.role.$model"
									:error="$v.usersModel.role.$error"
									:items="rolesList"
									item-text="name"
									item-value="code"
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
								<h5 class="font-600 dark-text mb-1">{{ $t("filial") }}</h5>


								<template v-if="$i18n.locale === 'uz'">
									<v-select
										v-model="$v.usersModel.company.$model"
										:error="$v.usersModel.company.$error"
										:items="filialList"
										:item-text="$i18n.locale === 'uz' ? 'name_uz' : $i18n.locale === 'ru' ? 'name_ru' : 'name_en'"
										item-value="id"
										:readonly="TYPE === 'Read'"
										outlined
										hide-details
									>
										<template v-slot:append>
											<chevron-down-icon size="1.5x" class="grey--text"></chevron-down-icon>
										</template>
									</v-select>
								</template>

								<template v-if="$i18n.locale === 'ru'">
									<v-select
										v-model="$v.usersModel.company.$model"
										:error="$v.usersModel.company.$error"
										:items="filialList"
										item-text="name_ru"
										item-value="id"
										:readonly="TYPE === 'Read'"
										outlined
										hide-details
									>
										<template v-slot:append>
											<chevron-down-icon size="1.5x" class="grey--text"></chevron-down-icon>
										</template>
									</v-select>
								</template>

								<template v-if="$i18n.locale === 'en'">
									<v-select
										v-model="$v.usersModel.company.$model"
										:error="$v.usersModel.company.$error"
										:items="filialList"
										item-text="name_en"
										item-value="id"
										:readonly="TYPE === 'Read'"
										outlined
										hide-details
									>
										<template v-slot:append>
											<chevron-down-icon size="1.5x" class="grey--text"></chevron-down-icon>
										</template>
									</v-select>
								</template>
							</div>
						</v-col>

						<template v-if="TYPE !== 'Update' && TYPE !== 'Read'">
							<v-col md="4">
								<div class="app-form-group app-form-group__small no-shadow mb-2">
									<h5 class="font-600 dark-text mb-1">{{ $t("password") }}</h5>

									<v-text-field
										@click:append="passwordShow = !passwordShow"
										v-model="$v.usersModel.password.$model"
										:error="$v.usersModel.password.$error"
										:append-icon="passwordShow ? 'mdi-eye' : 'mdi-eye-off'"
										:type="passwordShow ? 'text' : 'password'"
										:readonly="TYPE === 'Read'"
										maxlength="20"
										outlined
										hide-details
									>
									</v-text-field>
								</div>
							</v-col>
						</template>

						<template v-if="TYPE !== 'Update' && TYPE !== 'Read'">
							<v-col md="4">
								<div class="app-form-group app-form-group__small no-shadow mb-2">
									<h5 class="font-600 dark-text mb-1">{{ $t("repeat_password") }}</h5>

									<v-text-field
										@click:append="confirmPasswordShow = !confirmPasswordShow"
										v-model="$v.usersModel.confirmPassword.$model"
										:error="$v.usersModel.confirmPassword.$error"
										:error-messages="usersModel.password !== usersModel.confirmPassword ? $t('Dashboard.repeat_password_text') : ''"
										:append-icon="confirmPasswordShow ? 'mdi-eye' : 'mdi-eye-off'"
										:type="confirmPasswordShow ? 'text' : 'password'"
										:readonly="TYPE === 'Read'"
										maxlength="20"
										outlined
									>
									</v-text-field>
								</div>
							</v-col>
						</template>
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
import { required, sameAs, minLength } from "vuelidate/lib/validators";
import { ChevronDownIcon } from 'vue-feather-icons'

export default {
	name: "UserForm",
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
		ChevronDownIcon
	},
	data() {
		return {
			passwordShow: false,
			confirmPasswordShow: false,
			usersModel: {
				username: "",
				first_name: "",
				last_name: "",
				role: "",
				company: null,
				password: "",
				is_deleted: false,
				is_active: true,
				confirmPassword: '',
			},
			rolesList: [],
			filialList: []
		};
	},
	validations: {
		usersModel: {
			username: { required },
			first_name: { required },
			last_name: { required },
			role: { required },
			company: { required },
			password: {
				minLength: minLength(6),
				required(val) {
					return this.TYPE === 'Update' ? true : required(val)
				}
			},
			confirmPassword: {
				minLength: minLength(6),
				required(val) {
					return this.TYPE === 'Update' ? true : required(val)
				},
				sameAsPassword: sameAs(function (val) {
					return this.usersModel.password;
				})
			}
		}
	},
	mounted() {
		if (this.$route.params.id) {
			this.getOne();
		}

		this.roleList()
		this.getFilialList()
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

			this.usersModel.username = this.usersModel.username.toLowerCase()

			this.$http
				.post(`/${this.$store.state.auth.COMPANY_ID}/employee/`, this.usersModel)
				.then((res) => {
					this.$toast.success(`Yaratildi`);

					setTimeout(() => {
						this.$router.push({ name: "OtherSectionUsersList" });
					}, 1500);
				})
				.catch((err) => {
					this.$toast.error(`Yaratishda xatolik`);
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

			if (this.TYPE === 'Update') {
				delete this.usersModel.password
				delete this.usersModel.confirmPassword
			}

			this.usersModel.username = this.usersModel.username.toLowerCase()

			this.$http
				.put(`/${this.$store.state.auth.COMPANY_ID}/employee/${this.$route.params.id}/`, this.usersModel)
				.then((res) => {
					this.$toast.success(`Yangilandi`);

					setTimeout(() => {
						this.$router.push({ name: "OtherSectionUsersList" });
					}, 1500);
				})
				.catch((err) => {
					this.$toast.error(`Yangilashda xatolik`);
				});
		},

		/*
		 *
		 * */
		getOne() {
			this.$http.get(`/${this.$store.state.auth.COMPANY_ID}/employee/${this.$route.params.id}/`).then(({ data }) => {
				this.usersModel.username = data.username
				this.usersModel.first_name = data.first_name
				this.usersModel.last_name = data.last_name
				this.usersModel.role = data.role
				this.usersModel.company = data.company
			});
		},

		/*
		*
		* */
		roleList() {
			this.$http.get(`/${this.$store.state.auth.COMPANY_ID}/employee/roles/`)
			.then(({ data }) => {
				this.rolesList = data.choices
			})
		},

		/*
		*
		* */
		getFilialList() {
			this.$http.get(`/${this.$store.state.auth.COMPANY_ID}/filial/`, {
				params:{
					page_size: 500
				}
			})
			.then(({ data }) => {
				const array = data.results.filter(obj => {
					return obj.type === 'filial' || obj.type === 'head_office'
				})
				this.filialList = array
			})
		}
	}
};
</script>

<style></style>
