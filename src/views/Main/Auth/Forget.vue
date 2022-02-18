<template>
	<div class="main-auth">
		<v-container>
			<v-row>
				<v-col sm="12" lg="6" class="col-12">
					<!--          <h1 class="title font-weight-bold auth-title">-->
					<!--            <I18nVue t="Auth.Forget.resetPassword" />-->
					<!--          </h1>-->
					<v-form class="auth-form" lazy-validation @submit.prevent="onSubmit">
						<h4 class="font-600 dark-text">
							<I18nVue t="Auth.Forget.phoneNumber" />
						</h4>

						<v-divider class="mt-3 mb-8" style="border-color: rgba(var(--border-color), 1)" />

						<v-text-field
							class="auth-input"
							:label="$t('Auth.Forget.example')"
							v-mask="'+ 998 ## ### ## ##'"
							id="tel"
							:rules="[(v) => !!v || $t('Auth.Forget.enterPhone')]"
							v-model="$v.phone_number.$model"
							:error="$v.phone_number.$error"
							solo
							autofocus
						/>

						<p class="login_link-wrap">
							<router-link :to="{ name: 'Login' }">
								<I18nVue t="Auth.Forget.btnLogin" />
							</router-link>
							<router-link :to="{ name: 'Register' }">
								<I18nVue t="Auth.Forget.register" />
							</router-link>
						</p>
						<br />
						<v-btn class="btn--red" type="submit" depressed>
							<I18nVue t="Auth.Forget.restore" />
						</v-btn>
					</v-form>
				</v-col>
				<v-col sm="12" lg="6" class="d-none d-lg-block">
					<div class="image">
						<img src="/images/services-14.png" alt=""/>
					</div>
				</v-col>

				<template>
					<v-dialog v-model="dialog" persistent max-width="600px">
						<v-card>
							<v-card-title>
								<I18nVue classes="headline" t="Auth.Forget.enterSms" />
							</v-card-title>
							<v-card-text>
								<v-container>
									<v-row>
										<v-col cols="12">
											<v-text-field
												:label="$t('Auth.Forget.number')"
												v-model="$v.phone_number.$model"
												:error="$v.phone_number.$error"
												:value="phone_number"
												required
											/>
										</v-col>
										<v-col cols="12">
											<v-text-field
												:label="$t('Auth.Forget.enterCode')"
												:hint="$t('Auth.Forget.enterCodeHint')"
												persistent-hint
												required
												v-model="token"
												:value="token"
											/>
										</v-col>
										<v-col cols="12">
											<v-text-field
												:label="$t('Auth.Forget.newPass')"
												:hint="$t('Auth.Forget.newPassHint')"
												persistent-hint
												required
												v-model="new_password"
												:value="new_password"
											/>
										</v-col>
									</v-row>
								</v-container>
							</v-card-text>
							<v-card-actions>
								<v-btn color="red" text @click="dialog = false">
									<I18nVue t="Auth.Forget.btnClose" />
								</v-btn>
								<v-spacer />
								<v-btn color="blue" text @click="Resend">
									<I18nVue t="Auth.Forget.resendPass" />
								</v-btn>
								<v-btn color="success darken-1" text @click.prevent="Send">
									<I18nVue t="Auth.Forget.confirm" />
								</v-btn>
							</v-card-actions>
						</v-card>
					</v-dialog>
				</template>
			</v-row>
		</v-container>
	</div>
</template>

<script>
import { required } from "vuelidate/lib/validators";
import I18nVue from "@/I18nVue";

export default {
	name: "Forget",
	components: { I18nVue },
	data() {
		return {
			dialog: false,
			phone_number: "",
			token: "",
			new_password: ""
		};
	},
	validations: {
		phone_number: { required }
	},
	methods: {
		onSubmit() {
			this.dialog = true;
			this.$v.$touch();
			if (this.$v.$invalid) {
				return;
			}
			this.$http
				.post(`/my/reset/password/`, { phone_number: this.phone_number.replace(/[^0-9]/g, "") })
				.then(({ data }) => {
						this.confirmModel.dialog = !this.confirmModel.dialog;
						this.$toast.success(data.message);
						this.dialog = true;
					},
					({ data }) => {
						this.$toast.error(data.message);
						this.dialog = false;
					})
				.catch((e) => this.$toast.error(e.statusText.toString()));
		},
		Send() {
			this.$http
				.put(`/user/change-password/`, {
					phone_number: this.phone_number.replace(/[^0-9]/g, ""),
					token: this.token,
					new_password: this.new_password
				})
				.then(({ data }) => {
						this.$router.push({ name: "Login" });
						this.$toast.warning(`${this.$t("Auth.Forget.Changed")}. ${data.status}`);
						this.dialog = false;
					},
					({ data }) => {
						this.$toast.error(data.message);
						this.dialog = true;
					}
				)
				.catch((e) => this.$toast.error(e.data.toString()));
		},
		Resend() {
			this.$http
				.post(`/my/reset/password/`, { phone_number: this.phone_number.replace(/[^0-9]/g, "") })
				.then((response) => {
					this.$toast.success(response.data.message);
				})
				.catch((error) => this.$toast.error(error));
		}
	}
};
</script>
