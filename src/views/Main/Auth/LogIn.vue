<template>
	<div class="main-auth">
		<v-container>
			<v-row>
				<v-col sm="12" lg="6" class="col-12">
					<AppValidationErrors v-if="validationErrors" :validation-errors="validationErrors" />

<!--					<h1 class="title font-weight-bold auth-title">-->
<!--						<I18nVue t="Auth.Login.authorization" />-->
<!--					</h1>-->

					<v-form class="auth-form" ref="form" lazy-validation @submit.prevent="onSubmit">
						<h4 class="font-600 dark-text">
							<I18nVue t="Auth.Login.login" />
						</h4>

						<v-divider class="mt-3 mb-8" style="border-color: rgba(var(--border-color), 1)" />

						<v-text-field
							v-model="username"
							id="login"
							type="text"
							:rules="[(v) => !!v || '']"
							:error-messages="validationErrors && validationErrors.toString()"
							required
							solo
							autofocus
							:label="$t('Auth.Login.enterLogin')"
							class="auth-input"
						/>

						<!--						$t('Auth.Login.enterLoginCor')-->
						<h4 class="font-600 dark-text">
							<I18nVue t="Auth.Login.pass" />
						</h4>

						<v-divider class="mt-3 mb-8" style="border-color: rgba(var(--border-color), 1)" />

						<v-text-field
							@click:append="show = !show"
							v-model="password"
							:label="this.$t('Auth.Login.enterPass')"
							:append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
							:error-messages="validationErrors && validationErrors.toString()"
							class="auth-input"
							id="password"
							:rules="[rules.required, rules.min]"
							:type="show ? 'text' : 'password'"
							solo
							required
						/>

						<p class="login_link-wrap">
							<router-link :to="{ name: 'Register' }">
								<I18nVue t="Auth.Login.btnSignUp" />
							</router-link>
							<router-link :to="{ name: 'Forget' }">
								<I18nVue t="Auth.Login.btnForget" />
							</router-link>
						</p>
						<br />
						<v-btn class="btn--red" type="submit" depressed>
							<I18nVue t="Auth.Login.btnSubmit" />
						</v-btn>
					</v-form>
				</v-col>

				<v-col sm="12" lg="6" class="d-none d-lg-block">
					<div class="image">
						<img src="/images/services-14.png" alt="" />
					</div>
				</v-col>
			</v-row>
		</v-container>
	</div>
</template>
<script>
import { mapState } from "vuex";
import AppValidationErrors from "@/components/Validations/ValidationError";
import { actionTypes, mutationTypes } from "@/store/modules/auth";
import I18nVue from "@/I18nVue";

export default {
	name: "LogIn",
	components: { I18nVue, AppValidationErrors },
	data() {
		return {
			username: "",
			password: "",
			show: false,
			rules: {
				required: (value) => !!value || this.$t("Auth.Login.enterPassCor"),
				min: (v) => v.length >= 8 || this.$t("Auth.Login.enterLeast")
			}
		};
	},
	computed: {
		...mapState({
			isSubmitting: (state) => state.auth.isSubmitting,
			validationErrors: (state) => state.auth.validationErrors
		})
	},
	methods: {
		onSubmit() {
			this.$store
				.dispatch(actionTypes.login, { username: this.username, password: this.password })
				.then((response) => {
					// if(response.user.hasOwnProperty("company")) {
					this.$router.push({ name: "Admin" });
					// }

					this.$toast.success(this.$t("Auth.Login.successLogin"));
					this.$toast.success(`${this.$t("Auth.Login.welcome")} ${response.user.first_name}`);
					this.username = "";
					this.password = "";

					this.$store.state.auth.COMPANY_ID = response.user.company ? response.user.company.id : null;
					}
				);
		}
	}
};
</script>
