<template>
	<div class="form-wrap-body">
		<v-row>
			<v-col md="4">
				<div class="app-form-group app-form-group__small no-shadow mb-2">
					<h5 class="font-600 dark-text mb-1">{{ $t("Dashboard.deposit.name") }}
						<span class="font-700 text-small">(UZ)</span>
					</h5>

					<v-text-field
						v-model="$v.pollsCreteModel.name_uz.$model"
						:error="$v.pollsCreteModel.name_uz.$error"
						:readonly="TYPE === 'Read'"
						outlined
						hide-details
					>
					</v-text-field>
				</div>
			</v-col>

			<v-col md="4">
				<div class="app-form-group app-form-group__small no-shadow mb-2">
					<h5 class="font-600 dark-text mb-1">{{ $t("Dashboard.deposit.name") }}
						<span class="font-700 text-small">(RU)</span>
					</h5>

					<v-text-field
						v-model="$v.pollsCreteModel.name_ru.$model"
						:error="$v.pollsCreteModel.name_ru.$error"
						:readonly="TYPE === 'Read'"
						outlined
						hide-details
					>
					</v-text-field>
				</div>
			</v-col>

			<v-col md="4">
				<div class="app-form-group app-form-group__small no-shadow mb-2">
					<h5 class="font-600 dark-text mb-1">{{ $t("Dashboard.deposit.name") }}
						<span class="font-700 text-small">(EN)</span>
					</h5>

					<v-text-field
						v-model="$v.pollsCreteModel.name_en.$model"
						:error="$v.pollsCreteModel.name_en.$error"
						:readonly="TYPE === 'Read'"
						outlined
						hide-details
					>
					</v-text-field>
				</div>
			</v-col>

			<v-col md="4">
				<v-switch
					v-model="pollsCreteModel.is_active"
					inset
					color="primary"
					hide-details
					class="pa-0 ma-0"
				>
					<template v-slot:label>
						<h4 class="font-600 dark-text">{{ pollsCreteModel.is_active ? "Активный" : "Не активный" }}</h4>
					</template>
				</v-switch>
			</v-col>
		</v-row>

		<template v-if="TYPE !== 'Create'">
			<v-row>
				<v-col md="12" class="mt-2">
					<go-back-button />

					<template v-if="TYPE !== 'Read'">
						<send-button @emit:up="update" :text="$t('Dashboard.update')" />
					</template>
				</v-col>
			</v-row>
		</template>

		<template v-else>
			<v-row>
				<v-col md="12" class="mt-5">
					<go-back-button />
					<template v-if="this.$store.state.CREATE_POLLS_ID === null">
						<send-button @emit:up="send" :text="$t('Dashboard.add_new')" />
					</template>
					<template v-else>
						<send-button @emit:up="update" :text="$t('Dashboard.update')" />
					</template>
				</v-col>
			</v-row>
		</template>
	</div>
</template>

<script>
import SendButton from "../../../BaseComponents/SendButton";
import GoBackButton from "../../../BaseComponents/GoBackButton";
import { required } from "vuelidate/lib/validators";

export default {
	name: "PollsCreate",
	props: {
		TYPE: {
			type: String,
			default: ""
		}
	},
	components: {
		SendButton,
		GoBackButton
	},
	data() {
		return {
			pollsCreteModel: {
				name_uz: "",
				name_ru: "",
				name_en: "",
				is_active: true
			}
		}
	},
	validations: {
		pollsCreteModel: {
			name_uz: { required },
			name_ru: { required },
			name_en: { required }
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

			this.$http.post(`/${this.$store.state.auth.COMPANY_ID}/poll/`, this.pollsCreteModel).then(({ data }) => {
				this.$toast.success(`So'rovnoma yaratildi`);

				this.$store.state.CREATE_POLLS_ID = data.id;
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

			const id = this.$route.params.id ? this.$route.params.id : this.$store.state.CREATE_POLLS_ID

			this.$http
				.put(`/${this.$store.state.auth.COMPANY_ID}/poll/${id}/`, this.pollsCreteModel)
				.then(({ data }) => {
					this.$toast.success(`So'rovnoma yangilandi`);

					this.$store.state.CREATE_POLLS_ID = data.id;
				})
				.catch((err) => {
					this.$toast.error(`Yangilashda xatolik`);
				});
		},

		/*
		*
		* */
		getOne() {
			this.$http.get(`/${this.$store.state.auth.COMPANY_ID}/poll/${this.$route.params.id}/`).then(({ data }) => {
				this.pollsCreteModel = data

				this.$store.state.CREATE_POLLS_ID = data.id;
			});
		}
	}
};
</script>

<style>

</style>
