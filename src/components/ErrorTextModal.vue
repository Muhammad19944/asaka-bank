<template>
	<transition name="fade">
		<v-dialog
			v-model="visible"
			persistent
			max-width="450"
		>
			<v-card>
				<v-card-title class="primary-bg">
					<alert-octagon-icon class="mr-3" />
					<h4>Hatolik haqida habar</h4>

					<v-spacer />

					<v-btn
						@click="close"
						icon
						depressed
						dark
					>
						<x-icon />
					</v-btn>
				</v-card-title>
				<v-card-text class="pt-5">
					<div class="app-form-group mb-8">
						<h5 class="font-600 dark-text">
							Matndan topilgan hatolik:
						</h5>

						<v-divider class="mt-3 mb-5" style="border-color: rgba(var(--border-color), 1)" />

						<v-textarea
							v-model="errorMessageModel.highlighted_text"
							readonly
							outlined
							hide-details
						/>
					</div>

					<div class="app-form-group mb-8">
						<h5 class="font-600 dark-text">
							Sahifa havola nomi:
						</h5>

						<v-divider class="mt-3 mb-5" style="border-color: rgba(var(--border-color), 1)" />

						<v-text-field
							v-model="errorMessageModel.url"
							readonly
							outlined
							hide-details
						/>
					</div>

					<div class="app-form-group">
						<h5 class="font-600 dark-text">
							Muallif uchun mulohaza (zaruriyatda):
						</h5>

						<v-divider class="mt-3 mb-5" style="border-color: rgba(var(--border-color), 1)" />

						<v-textarea
							v-model="$v.errorMessageModel.given_text.$model"
							:error="$v.errorMessageModel.given_text.$error"
							outlined
							hide-details
							autofocus
						/>
					</div>
				</v-card-text>
				<v-card-actions class="pb-4 px-6">
					<v-spacer></v-spacer>
					<v-btn
						@click="close"
						color="red darken-1"
						text
						class="mr-2"
					>
						<span class="font-700">Bekor qilish</span>
					</v-btn>
					<v-btn
						@click="send"
						color="rgba(var(--primary), 1)"
						depressed
						dark
					>
						<span class="font-600">Yuborish</span>
					</v-btn>
				</v-card-actions>
			</v-card>
		</v-dialog>
	</transition>
</template>

<script>
import { mapGetters, mapMutations } from "vuex"
import { AlertOctagonIcon, XIcon } from "vue-feather-icons"
import { required } from "vuelidate/lib/validators";

export default {
	name: "ErrorTextModal",
	components: {
		AlertOctagonIcon,
		XIcon
	},
	data() {
		return {
			errorMessageModel: {
				highlighted_text: "",
				given_text: "",
				url: ""
			}
		}
	},
	validations: {
		errorMessageModel: {
			given_text: { required }
		}
	},
	mounted() {
		this.keyListener = (e) => {
			if (e.key === "Enter" && e.ctrlKey) {
				this.errorMessageModel.highlighted_text = window.getSelection().toString().split('\n').join(' ')
				this.errorMessageModel.url = window.location.href

				this.TOGGLE_ERROR_MESSAGE_MODAL(true)
			}
		};

		document.addEventListener("keydown", this.keyListener.bind(this));
	},
	computed: {
		...mapGetters({
			getErrorMessageModalVisible: "getErrorMessageModalVisible"
		}),

		visible: {
			get() {
				return this.getErrorMessageModalVisible
			},
			set(value) {
				return value
			}
		}
	},
	methods: {
		...mapMutations({
			TOGGLE_ERROR_MESSAGE_MODAL: "TOGGLE_ERROR_MESSAGE_MODAL"
		}),

		/*
		*
		* */
		close() {
			this.TOGGLE_ERROR_MESSAGE_MODAL(false)
		},

		/*
		*
		* */
		send() {
			this.$v.$touch();

			if (this.$v.$invalid) {
				return;
			}

			this.$http.post('/notes/create/', this.errorMessageModel)
			.then(({ data }) => {
				this.$toast.success(this.$t('application_send'));
			})
			.finally(() => {
				this.TOGGLE_ERROR_MESSAGE_MODAL(false)
				this.errorMessageModel.given_text = ""

				this.$nextTick(() => { this.$v.$reset() })
			})
		}
	}
};
</script>

<style scoped>

</style>
