<template>
	<div class="app-upload-wrap">
		<v-row>
			<template v-if="$store.state.CREATE_POLLS_ID === null">
				<v-col md="12">
					<v-alert type="error">Сперва опрос должен быть создан</v-alert>
				</v-col>
			</template>

			<v-col md="3">
				<div class="app-form-group app-form-group__small no-shadow mb-2">
					<h5 class="font-600 dark-text mb-1">Варианты опросов <span class="font-700 text-small">(UZ)</span>
					</h5>

					<v-text-field
						v-model="$v.pollOptionsModel.name_uz.$model"
						:error="$v.pollOptionsModel.name_uz.$error"
						:readonly="this.$store.state.CREATE_POLLS_ID === null || TYPE === 'Read'"
						outlined
						hide-details
					>
					</v-text-field>
				</div>
			</v-col>

			<v-col md="3">
				<div class="app-form-group app-form-group__small no-shadow mb-2">
					<h5 class="font-600 dark-text mb-1">Варианты опросов <span class="font-700 text-small">(RU)</span>
					</h5>

					<v-text-field
						v-model="$v.pollOptionsModel.name_ru.$model"
						:error="$v.pollOptionsModel.name_ru.$error"
						:readonly="this.$store.state.CREATE_POLLS_ID === null || TYPE === 'Read'"
						outlined
						hide-details
					>
					</v-text-field>
				</div>
			</v-col>

			<v-col md="3">
				<div class="app-form-group app-form-group__small no-shadow mb-2">
					<h5 class="font-600 dark-text mb-1">Варианты опросов <span class="font-700 text-small">(EN)</span>
					</h5>

					<v-text-field
						v-model="$v.pollOptionsModel.name_en.$model"
						:error="$v.pollOptionsModel.name_en.$error"
						:readonly="this.$store.state.CREATE_POLLS_ID === null || TYPE === 'Read'"
						outlined
						hide-details
					>
					</v-text-field>
				</div>
			</v-col>

			<template v-if="$store.state.CREATE_POLLS_ID !== null">
				<v-col md="3">
					<div class="app-form-group app-form-group__small no-shadow mb-2">
						<h5 class="font-600 dark-text mb-1">{{ $t('Dashboard.add_new') }}</h5>

						<send-button
							@emit:up="addNew"
							:text="$t('Dashboard.add_new')"
						>
							<plus-circle-icon size="1.3x" class="text-white"></plus-circle-icon>
						</send-button>
					</div>
				</v-col>
			</template>
		</v-row>

		<template v-if="TYPE !== 'Create' || $store.state.CREATE_POLLS_ID !== null">
			<v-row>
				<template v-for="item in pollOptionsList">
					<v-col md="4" :key="item.id">
						<div class="credit-widget pa-7 rounded-lg overflow-hidden d-flex align-center p-relative">
							<v-avatar size="56" class="mr-5">
								<v-icon x-large color="primary">mdi-vote-outline</v-icon>
							</v-avatar>

							<div>
								<h4 class="font-600">
									Название: <I18nVue
									:uz="item.name_uz"
									:ru="item.name_ru"
									:en="item.name_en"
									classes="dark-text"
									/>
								</h4>

								<h4 class="font-600">
									Голосов: {{ item.count }}
								</h4>
							</div>

							<div
								class="
                                    app-slide-overlay
                                    p-absolute
                                    w-100
                                    h-100
                                    d-flex
                                    align-center
                                    justify-center
                                    text-white
                                    transition-ease-in-out
                                "
							>
								<v-tooltip top color="primary">
									<template v-slot:activator="{ on, attrs }">
										<v-btn
											@click="propUpdate(item)"
											:disabled="TYPE === 'Read'"
											color="primary"
											large
											dark
											v-bind="attrs"
											v-on="on"
											icon
											depressed
											class="
                                                border-all
                                                pa-1
                                                rounded-circle
                                                d-flex
                                                align-center
                                                justify-center
                                                outline-transparent
                                                mr-4
                                                transition-fast-out-slow-in
                                            "
										>
											<edit2-icon size="1.2x" class="text-white d-block"></edit2-icon>
										</v-btn>
									</template>

									<span>{{ $t('Dashboard.update') }}</span>
								</v-tooltip>

								<v-tooltip top color="danger">
									<template v-slot:activator="{ on, attrs }">
										<v-btn
											@click="propDelete(item.id)"
											:disabled="TYPE === 'Read'"
											color="primary"
											large
											dark
											v-bind="attrs"
											v-on="on"
											icon
											depressed
											class="
                                                border-all
                                                pa-1
                                                rounded-circle
                                                d-flex
                                                align-center
                                                justify-center
                                                outline-transparent
                                                mr-4
                                                transition-fast-out-slow-in
                                            "
										>
											<trash2-icon size="1.3x" class="text-white d-block"></trash2-icon>
										</v-btn>
									</template>

									<span>{{ $t('Dashboard.delete') }}</span>
								</v-tooltip>
							</div>
						</div>
					</v-col>
				</template>

				<v-col md="12" class="mt-5">
					<go-back-button />
					<template v-if="pollOptionsList.length && TYPE !== 'Read'">
						<send-button @emit:up="update" :text="$t('Dashboard.update')" />
					</template>
				</v-col>
			</v-row>
		</template>

		<template v-else>
			<v-row>
				<v-col md="12" class="mt-5">
					<go-back-button />
					<template v-if="TYPE !== 'Create' && TYPE !== 'Read'">
						<send-button @emit:up="send" :text="$t('Dashboard.create')" />
					</template>
				</v-col>
			</v-row>
		</template>
	</div>
</template>

<script>
import SendButton from "../../../BaseComponents/SendButton";
import GoBackButton from "../../../BaseComponents/GoBackButton";
import I18nVue from "../../../../../I18nVue";
import { PlusCircleIcon, Trash2Icon, Edit2Icon } from "vue-feather-icons";
import { required } from "vuelidate/lib/validators";

export default {
	name: "AppUploadDocs",
	props: {
		TYPE: {
			type: String,
			default: ""
		}
	},
	components: {
		SendButton,
		GoBackButton,
		I18nVue,
		PlusCircleIcon,
		Trash2Icon,
		Edit2Icon
	},
	data() {
		return {
			pollOptionsModel: {
				name_uz: "",
				name_ru: "",
				name_en: "",
			},
			pollOptionsList: [],
			documentFile: null
		};
	},
	validations: {
		pollOptionsModel: {
			name_uz: { required },
			name_ru: { required },
			name_en: { required }
		}
	},
	mounted() {
		if (this.$route.params.id || this.$store.state.CREATE_POLLS_ID) {
			this.getAll();
		}
	},
	methods: {
		/**
		 *
		 *
		 */
		getAll() {
			const id = this.$route.params.id ? this.$route.params.id : this.$store.state.CREATE_POLLS_ID

			this.$http.get(`/${this.$store.state.auth.COMPANY_ID}/poll/${id}/options/`)
				.then(({ data }) => {
					this.pollOptionsList = data.results;
				});
		},

		/*
		*
		* */
		send() {
			this.$v.$touch();

			if (this.$v.$invalid) {
				this.$toast.warning(`Field to'ldirilishi shart`);

				return;
			}

			const id = this.$route.params.id ? this.$route.params.id : this.$store.state.CREATE_POLLS_ID

			this.$http.post(`/${this.$store.state.auth.COMPANY_ID}/poll/${id}/options/`, this.pollOptionsModel)
				.then(res => {
					this.$toast.success(`So'rovnoma varianti yaratildi`);

					this.resetFields();

					this.getAll();
				})
				.catch(err => {
					this.$toast.error(`Yaratishda xatolik`);

					this.resetFields();
				});

			this.resetFields();
		},

		/**
		 *
		 *
		 */
		update() {
			this.$v.$touch();

			if (this.$v.$invalid) {
				this.$toast.warning(`Field to'ldirilishi shart`);

				return;
			}

			const id = this.$route.params.id ? this.$route.params.id : this.$store.state.CREATE_POLLS_ID

			this.$http.put(`/${this.$store.state.auth.COMPANY_ID}/poll/${id}/options/${this.pollOptionsModel.id}/`, this.pollOptionsModel)
				.then(res => {
					this.$toast.success(`Yangilandi`);

					this.resetFields();

					this.getAll();
				})
				.catch(err => {
					this.$toast.error(`Yaratishda xatolik`);

					this.resetFields();
				});
		},

		/**
		 *
		 *
		 */
		propDelete(_id) {
			if (!confirm(`O'chirishni xoxlaysizmi ?`)) {
				return void 0;
			}

			const id = this.$route.params.id ? this.$route.params.id : this.$store.state.CREATE_POLLS_ID

			this.$http.delete(`/${this.$store.state.auth.COMPANY_ID}/poll/${id}/options/${_id}/`)
				.then(res => {
					this.$toast.success(`O'chirildi`);

					this.getAll();
				});
		},

		/**
		 *
		 *
		 */
		addNew() {
			this.$v.$touch();

			if (this.$v.$invalid) {
				this.$toast.warning(`Field to'ldirilishi shart`);

				return;
			}

			const id = this.$route.params.id ? this.$route.params.id : this.$store.state.CREATE_POLLS_ID


			this.$http.post(`/${this.$store.state.auth.COMPANY_ID}/poll/${id}/options/`, this.pollOptionsModel)
				.then(res => {
					this.$toast.success(`Hujjat yaratildi`);

					this.resetFields();

					this.getAll();
				})
				.catch(err => {
					this.$toast.error(`Yaratishda xatolik`);

					this.resetFields();
				});
		},

		/**
		 *
		 *
		 */
		propUpdate(item) {
			this.pollOptionsModel = { ...item };
		},

		/**
		 *
		 *
		 */
		resetFields() {
			this.pollOptionsModel.name_uz =
			this.pollOptionsModel.name_ru =
			this.pollOptionsModel.name_en = ''
		}
	}
};
</script>

<style>

</style>
