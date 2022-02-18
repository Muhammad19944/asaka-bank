<template>
	<div class="category-form-view">
		<app-card>
			<div class="form-wrap d-flex flex-column m-h-100 pa-5 px-6">
				<div class="d-flex align-center mb-8">
					<h4 class="text--primary text-uppercase font-700 mr-4">
						Reset password
					</h4>

					<v-divider style="border-color: rgb(var(--border-color), 1)"></v-divider>
				</div>

				<div class="flex-1">
					<v-row>
						<v-col md="4">
							<div class="app-form-group app-form-group__small no-shadow mb-2">
								<h5 class="font-600 dark-text mb-1">{{ $t("password") }}</h5>

								<v-text-field
									@click:append="passwordShow = !passwordShow"
									v-model="$v.resetModel.password.$model"
									:error="$v.resetModel.password.$error"
									:append-icon="passwordShow ? 'mdi-eye' : 'mdi-eye-off'"
									:type="passwordShow ? 'text' : 'password'"
									maxlength="20"
									outlined
									hide-details
								>
								</v-text-field>
							</div>
						</v-col>

						<v-col md="4">
							<div class="app-form-group app-form-group__small no-shadow mb-2">
								<h5 class="font-600 dark-text mb-1">{{ $t("repeat_password") }}</h5>

								<v-text-field
									@click:append="confirmPasswordShow = !confirmPasswordShow"
									v-model="$v.resetModel.confirmPassword.$model"
									:error="$v.resetModel.confirmPassword.$error"
									:error-messages="resetModel.password !== resetModel.confirmPassword ? $t('Dashboard.repeat_password_text') : ''"
									:append-icon="confirmPasswordShow ? 'mdi-eye' : 'mdi-eye-off'"
									:type="confirmPasswordShow ? 'text' : 'password'"
									maxlength="20"
									outlined
								>
								</v-text-field>
							</div>
						</v-col>
					</v-row>
				</div>

				<div class="mt-8">
					<go-back-button />
					<send-button @emit:up="update" :text="$t('Dashboard.update')" />
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

export default {
	name: "UpdatePassword",
	components: {
		AppCard,
		SendButton,
		GoBackButton
	},
	data() {
		return {
			passwordShow: false,
			confirmPasswordShow: false,
			resetModel: {
				password: "",
				confirmPassword: '',
			}
		}
	},
	validations: {
		resetModel: {
			password: { required, minLength: minLength(6) },
			confirmPassword: {
				required,
				minLength: minLength(6),
				sameAsPassword: sameAs(function (val) {
					return this.resetModel.password;
				})
			}
		}
	},
	methods: {
		/*
		*
		* */
		update() {
			this.$v.$touch();

			if (this.$v.$invalid) {
				this.$toast.warning(`Field to'ldirilishi shart`);

				return;
			}

			this.$http.put(`/${this.$store.state.auth.COMPANY_ID}/employee/${this.$route.params.id}/`, this.resetModel)
			.then((res) => {
				this.$toast.success(`Yangilandi`);

				setTimeout(() => {
					this.$router.push({ name: "OtherSectionUsersList" });
				}, 1500);
			})
			.catch((err) => {
				this.$toast.error(`Yangilashda xatolik`);
			});
		}
	}
};
</script>

<style>

</style>
