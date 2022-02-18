<template>
	<div class="main-auth">
		<v-container>
			<AppValidationErrors v-if="validationErrors" :validation-errors="validationErrors" />
<!--			<h1 class="title font-weight-bold auth-title">-->
<!--				<I18nVue t="Auth.SignUp.signUp" />-->
<!--			</h1>-->
			<v-form class="auth-form" ref="form" lazy-validation @submit.prevent="clickHandler">
				<v-row>
					<v-col class="col-12" sm="12" md="6" xl="6">
						<div class="d-flex align-center">
							<h4 class="font-600 dark-text mr-1 line-base">
								<I18nVue t="Auth.SignUp.byPhone" />
							</h4>

							<template v-if="verification_type === 'email'">
								<span class="font-600 line-base" style="color: red; font-size: 14px">
									(<I18nVue t="Auth.SignUp.byEmail" />)
								</span>
							</template>

							<template v-else>
								<span class="font-600 line-base" style="color: red; font-size: 14px">
<!--									(<I18nVue t="Auth.SignUp.byPhone" />)-->
								</span>
							</template>
						</div>

						<v-divider class="mt-3 mb-8" style="border-color: rgba(var(--border-color), 1)" />

						<v-text-field
							v-model="$v.username.$model"
							:error="$v.username.$error"
							:rules="[(v) => !!v || $t('Auth.SignUp.enterPlease'), check === 200 || $t('Auth.SignUp.userExist')]"
							:placeholder="verification_type === 'email' ? $t('Auth.SignUp.enterEmail') : $t('Auth.SignUp.byPhone')"
							solo
							outlined
							id="email"
							class="auth-input"
						/>
					</v-col>

					<v-col class="col-12" sm="12" md="6" xl="6">
						<h4 class="font-600 dark-text line-base">
							<I18nVue t="Auth.SignUp.phone" />
						</h4>

						<v-divider class="mt-3 mb-8" style="border-color: rgba(var(--border-color), 1)" />

						<v-text-field
							class="auth-input"
							:placeholder="$t('Auth.SignUp.phonePlaceholder')"
							:rules="[rules.phone, rules.phone_required]"
							v-model="$v.phone_number.$model"
							:error="$v.phone_number.$error"
							v-mask="'+ 998 ## ### ## ##'"
							id="phone"
							maxlength="18"
							required
							solo
							outlined
							minlength="18"
						/>
					</v-col>

					<v-col class="col-12" sm="12" md="6" xl="6">
						<h4 class="font-600 dark-text line-base">
							<I18nVue t="Auth.SignUp.name" />
						</h4>

						<v-divider class="mt-3 mb-8" style="border-color: rgba(var(--border-color), 1)" />

						<v-text-field
							class="auth-input"
							:rules="[(v) => !!v || $t('Auth.SignUp.enterName')]"
							:label="$t('Auth.SignUp.enterName')"
							id="first_name"
							type="text"
							v-model="$v.first_name.$model"
							:error="$v.first_name.$error"
							required
							solo
							outlined
						/>
					</v-col>

					<v-col class="col-12" sm="12" md="6" xl="6">
						<h4 class="font-600 dark-text line-base">
							<I18nVue t="Auth.SignUp.family" />
						</h4>

						<v-divider class="mt-3 mb-8" style="border-color: rgba(var(--border-color), 1)" />

						<v-text-field
							class="auth-input"
							:rules="[(v) => !!v || $t('Auth.SignUp.enterFamily')]"
							:label="$t('Auth.SignUp.enterFamily')"
							id="last_name"
							type="text"
							v-model="$v.last_name.$model"
							:error="$v.last_name.$error"
							required
							outlined
							solo
						/>
					</v-col>

					<v-col class="col-12" sm="12" md="6" xl="6">
						<h4 class="font-600 dark-text line-base">
							<I18nVue t="Auth.SignUp.fatherName" />
						</h4>

						<v-divider class="mt-3 mb-8" style="border-color: rgba(var(--border-color), 1)" />

						<v-text-field
							class="auth-input"
							:rules="[(v) => !!v || this.$t('Auth.SignUp.enterFatherName')]"
							:label="this.$t('Auth.SignUp.enterFatherName')"
							id="father_name"
							type="text"
							v-model="$v.father_name.$model"
							:error="$v.father_name.$error"
							required
							outlined
							solo
						/>
					</v-col>
 <!--CHOOSING VERIFICATION TYPE-->
					<template>
<!--            <v-col class="col-12" sm="12" md="6" xl="6">-->
<!--              <h4 class="font-600 dark-text line-base">-->
<!--                <I18nVue t="Auth.SignUp.codeConf" />-->
<!--              </h4>-->

<!--              <v-divider class="mt-3 mb-8" style="border-color: rgba(var(&#45;&#45;border-color), 1)" />-->

<!--              <template v-if='$i18n.locale === "uz"'>-->
<!--                <v-select-->
<!--                    class="auth-input"-->
<!--                    :rules="[(v) => !!v || $t('Auth.SignUp.selectCodeConf')]"-->
<!--                    :label="this.$t('Auth.SignUp.selectCodeConf')"-->
<!--                    id="verification_type"-->
<!--                    :items="select_type"-->
<!--                    item-text="text_uz"-->
<!--                    item-value="value"-->
<!--                    v-model="$v.verification_type.$model"-->
<!--                    :error="$v.verification_type.$error"-->
<!--                    required-->
<!--                    outlined-->
<!--                    solo-->
<!--                />-->
<!--              </template>-->
<!--              <template v-if='$i18n.locale === "ru"'>-->
<!--                <v-select-->
<!--                    class="auth-input"-->
<!--                    :rules="[(v) => !!v || $t('Auth.SignUp.selectCodeConf')]"-->
<!--                    :label="this.$t('Auth.SignUp.selectCodeConf')"-->
<!--                    id="verification_type"-->
<!--                    :items="select_type"-->
<!--                    item-text="text_ru"-->
<!--                    item-value="value"-->
<!--                    v-model="$v.verification_type.$model"-->
<!--                    :error="$v.verification_type.$error"-->
<!--                    required-->
<!--                    outlined-->
<!--                    solo-->
<!--                />-->
<!--              </template>-->
<!--              <template v-if='$i18n.locale === "en"'>-->
<!--                <v-select-->
<!--                    class="auth-input"-->
<!--                    :rules="[(v) => !!v || $t('Auth.SignUp.selectCodeConf')]"-->
<!--                    :label="this.$t('Auth.SignUp.selectCodeConf')"-->
<!--                    id="verification_type"-->
<!--                    :items="select_type"-->
<!--                    item-text="text_en"-->
<!--                    item-value="value"-->
<!--                    v-model="$v.verification_type.$model"-->
<!--                    :error="$v.verification_type.$error"-->
<!--                    required-->
<!--                    outlined-->
<!--                    solo-->
<!--                />-->
<!--              </template>-->
<!--              &lt;!&ndash;            <v-select&ndash;&gt;-->
<!--              &lt;!&ndash;              class="auth-input"&ndash;&gt;-->
<!--              &lt;!&ndash;              :rules="[(v) => !!v || $t('Auth.SignUp.selectCodeConf')]"&ndash;&gt;-->
<!--              &lt;!&ndash;              :label="this.$t('Auth.SignUp.selectCodeConf')"&ndash;&gt;-->
<!--              &lt;!&ndash;              id="verification_type"&ndash;&gt;-->
<!--              &lt;!&ndash;              :items="select_type"&ndash;&gt;-->
<!--              &lt;!&ndash;              item-text="text"&ndash;&gt;-->
<!--              &lt;!&ndash;              item-value="value"&ndash;&gt;-->
<!--              &lt;!&ndash;              v-model="$v.verification_type.$model"&ndash;&gt;-->
<!--              &lt;!&ndash;              :error="$v.verification_type.$error"&ndash;&gt;-->
<!--              &lt;!&ndash;              required&ndash;&gt;-->
<!--              &lt;!&ndash;              outlined&ndash;&gt;-->
<!--              &lt;!&ndash;              solo&ndash;&gt;-->
<!--              &lt;!&ndash;            />&ndash;&gt;-->
<!--            </v-col>-->
          </template>

					<v-col class="col-12" sm="12" md="6" xl="6">
						<h4 class="font-600 dark-text line-base">
							<I18nVue t="Auth.SignUp.pass" />
						</h4>

						<v-divider class="mt-3 mb-8" style="border-color: rgba(var(--border-color), 1)" />

						<v-text-field
							class="auth-input"
							:rules="[rules.required, rules.min]"
							id="password"
							v-model="$v.password.$model"
							:error="$v.password.$error"
							:append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
							:label="this.$t('Auth.SignUp.passLabel')"
							:type="show ? 'text' : 'password'"
							:hint="this.$t('Auth.SignUp.passHint')"
							counter="20"
							@click:append="show = !show"
							required
							outlined
							solo
						/>
					</v-col>

					<v-col class="col-12" />

					<p class="login_link-wrap">
						<router-link :to="{ name: 'Login' }">
							<I18nVue t="Auth.SignUp.entry" />
						</router-link>
						<router-link :to="{ name: 'Forget' }">
							<I18nVue t="Auth.SignUp.forget" />
						</router-link>
					</p>

					<v-btn depressed class="btn--red" type="submit">
						{{ $t("Auth.SignUp.sign_up") }}
					</v-btn>

					<Verify
						ref="verifyDialog"
						:parentThis="this"
						:verification_type="verification_type"
						:phone="phone_number"
						:disabled="this.$v.$invalid"
					/>
				</v-row>
			</v-form>
		</v-container>
	</div>
</template>

<script>
import AppValidationErrors from "@/components/Validations/ValidationError";
import { actionTypes } from "@/store/modules/auth";
import { mapState } from "vuex";
import Verify from "@/views/Main/Auth/Verify";
import { required, email } from "vuelidate/lib/validators";
import I18nVue from "@/I18nVue";
import { debounceEvent } from "@/utils/frontend";

export default {
	name: "Register",
	components: { I18nVue, Verify, AppValidationErrors },
	data() {
		return {
			show: false,
			disabled: true,
			check: null,
			username: "",
			phone_number: "",
			first_name: "",
			last_name: "",
			father_name: "",
			verification_type: "phone",
			password: "",
			select_type: [
				{
					text_uz: "Telefon orqali",
					text_ru: "По телефону",
					text_en: "By phone",
					value: "phone"
				},
				{
					text_uz: "Elektron pochta orqali",
					text_ru: "По электронной почте",
					text_en: "By email",
					value: "email"
				}
			],
			rules: {
				required: (value) => !!value || this.$t("Auth.SignUp.enterPassCor"),
				min: (v) => v.length >= 8 || this.$t("Auth.SignUp.enterPassCor"),
				phone: (v) => v.length <= 18 || this.$t("Auth.SignUp.example"),
				phone_required: (v) => !!v || this.$t("Auth.SignUp.numberMandatory")
			}
		};
	},
	validations: {
		username: {
			required,
			email(val) {
				return this.verification_type === "phone" ? true : email(val);
			}
		},
		first_name: { required },
		last_name: { required },
		father_name: { required },
		verification_type: { required },
		phone_number: { required },
		password: { required }
	},
	computed: mapState({
		isSubmitting: (state) => state.auth.isSubmitting,
		validationErrors: (state) => state.auth.validationErrors
	}),
	watch: {
		username() {
			window.addEventListener("keyup", this.debounceCheckUsername());
		}
	},
	created() {
		this.debounceCheckUsername = debounceEvent(() => this.checkUsername(), 750);
	},
	methods: {
		/*
		*
		* */
		clickHandler() {
			this.$v.$touch();

			if (this.$v.$invalid) {
				return;
			}

			const { verifyDialog } = this.$refs;

			this.$store
				.dispatch(actionTypes.register, {
					username: this.username,
					first_name: this.first_name,
					last_name: this.last_name,
					father_name: this.father_name,
					verification_type: this.verification_type,
					phone_number: this.phone_number.replace(/[^0-9]/g, ""),
					password: this.password
				})
				.then(() => {
						this.$toast.success(this.$t("Auth.SignUp.registered"));
						console.log(verifyDialog);
						verifyDialog.dialog = !verifyDialog.dialog;

						verifyDialog.openModal();
					}
				)
				.catch(({ data }) => {
					let errorText = "";

					if (this.$i18n.locale === "uz") {
						errorText = "Telefon raqami allaqachon mavjud";
					} else if (this.$i18n.locale === "ru") {
						errorText = "Номер телефона уже существует";
					} else {
						errorText = "Phone number already exists";
					}

					this.$toast.error(errorText);
				});
		},

		/*
		*
		* */
		checkUsername() {
			this.$http.get(`/check/${this.username}`)
				.then((r) => {
					this.check = r.status;
				})
				.catch(({ data }) => {
					this.$toast.error(data.detail[this.$i18n.locale]);
				});
		}
	}
};
</script>
