<template>
	<div class="form-wrap-body">
		<v-row>
			<v-col md="4">
				<div class="app-form-group app-form-group__small no-shadow mb-2">
					<h5 class="font-600 dark-text mb-1">{{ $t("Dashboard.cards.card_name") }} <span
						class="font-700 text-small">(UZ)</span></h5>

					<v-text-field
						v-model="$v.plasticCardsModel.name_uz.$model"
						:error="$v.plasticCardsModel.name_uz.$error"
						:readonly="TYPE === 'Read'"
						outlined
						hide-details
					>
					</v-text-field>
				</div>
			</v-col>

			<v-col md="4">
				<div class="app-form-group app-form-group__small no-shadow mb-2">
					<h5 class="font-600 dark-text mb-1">{{ $t("Dashboard.cards.card_name") }} <span
						class="font-700 text-small">(RU)</span></h5>

					<v-text-field
						v-model="$v.plasticCardsModel.name_ru.$model"
						:error="$v.plasticCardsModel.name_ru.$error"
						:readonly="TYPE === 'Read'"
						outlined
						hide-details
					>
					</v-text-field>
				</div>
			</v-col>

			<v-col md="4">
				<div class="app-form-group app-form-group__small no-shadow mb-2">
					<h5 class="font-600 dark-text mb-1">{{ $t("Dashboard.cards.card_name") }} <span
						class="font-700 text-small">(EN)</span></h5>

					<v-text-field
						v-model="$v.plasticCardsModel.name_en.$model"
						:error="$v.plasticCardsModel.name_en.$error"
						:readonly="TYPE === 'Read'"
						outlined
						hide-details
					>
					</v-text-field>
				</div>
			</v-col>

			<v-col md="12">
				<div class="admin-tabs">
					<v-tabs
						height="56"
						v-model="tab1"
						hide-slider
						class="mb-0 mb-5"
					>
						<v-tab class="transition-ease-in-out">
							<h5 class="font-600 dark-text text-transform-reset no-spacing px-2">
								{{ $t("Dashboard.cards.card_information") }}
								<span class="font-700 text-small">(UZ)</span></h5>
						</v-tab>
						<v-tab class="transition-ease-in-out">
							<h5 class="font-600 dark-text text-transform-reset no-spacing px-2">
								{{ $t("Dashboard.cards.card_information") }}
								<span class="font-700 text-small">(RU)</span></h5>
						</v-tab>
						<v-tab class="transition-ease-in-out">
							<h5 class="font-600 dark-text text-transform-reset no-spacing px-2">
								{{ $t("Dashboard.cards.card_information") }}
								<span class="font-700 text-small">(EN)</span></h5>
						</v-tab>
					</v-tabs>

					<v-tabs-items v-model="tab1">
						<v-tab-item>
							<div class="app-editor">
								<quill-editor
									v-model="plasticCardsModel.description_uz"
									:disabled="TYPE === 'Read'"
								></quill-editor>
							</div>
						</v-tab-item>

						<v-tab-item>
							<div class="app-editor">
								<quill-editor
									v-model="plasticCardsModel.description_ru"
									:disabled="TYPE === 'Read'"
								></quill-editor>
							</div>
						</v-tab-item>
						<v-tab-item>
							<div class="app-editor">
								<quill-editor
									v-model="plasticCardsModel.description_en"
									:disabled="TYPE === 'Read'"
								></quill-editor>
							</div>
						</v-tab-item>
					</v-tabs-items>
				</div>
			</v-col>

			<v-col md="12">
				<div class="admin-tabs">
					<v-tabs
						height="56"
						v-model="tab3"
						hide-slider
						class="mb-0 mb-5"
					>
						<v-tab class="transition-ease-in-out">
							<h5 class="font-600 dark-text text-transform-reset no-spacing px-2">
								Karta haqida ma'lumot SUB
								<span class="font-700 text-small">(UZ)</span></h5>
						</v-tab>
						<v-tab class="transition-ease-in-out">
							<h5 class="font-600 dark-text text-transform-reset no-spacing px-2">
								Karta haqida ma'lumot SUB
								<span class="font-700 text-small">(RU)</span></h5>
						</v-tab>
						<v-tab class="transition-ease-in-out">
							<h5 class="font-600 dark-text text-transform-reset no-spacing px-2">
								{Karta haqida ma'lumot SUB
								<span class="font-700 text-small">(EN)</span></h5>
						</v-tab>
					</v-tabs>

					<v-tabs-items v-model="tab3">
						<v-tab-item>
							<div class="app-editor">
								<quill-editor
									v-model="plasticCardsModel.about_description_uz"
									:disabled="TYPE === 'Read'"
								></quill-editor>
							</div>
						</v-tab-item>

						<v-tab-item>
							<div class="app-editor">
								<quill-editor
									v-model="plasticCardsModel.about_description_ru"
									:disabled="TYPE === 'Read'"
								></quill-editor>
							</div>
						</v-tab-item>
						<v-tab-item>
							<div class="app-editor">
								<quill-editor
									v-model="plasticCardsModel.about_description_en"
									:disabled="TYPE === 'Read'"
								></quill-editor>
							</div>
						</v-tab-item>
					</v-tabs-items>
				</div>
			</v-col>

			<v-col md="4">
				<app-tree-select v-model="treeID" :disabled="TYPE === 'Read'" />
			</v-col>

			<v-col md="4">
				<div class="app-form-group app-form-group__small no-shadow mb-2">
					<h5 class="font-600 dark-text mb-1">{{ $t("Dashboard.cards.cards_list") }}</h5>

					<v-select
						v-model="plasticCardsModel.type"
						:items="$store.state.CARD"
						:readonly="TYPE === 'Read'"
						item-text="title"
						item-value="value"
						outlined
						hide-details
					>
						<template v-slot:append>
							<chevron-down-icon size="1.3x"></chevron-down-icon>
						</template>
					</v-select>
				</div>
			</v-col>

			<v-col md="4">
				<div class="app-form-group app-form-group__small no-shadow mb-2">
					<h5 class="font-600 dark-text mb-1">{{ $t("Dashboard.cards.card_type") }}</h5>

					<template v-if="$i18n.locale === 'uz'">
						<v-select
							v-model="plasticCardsModel.card_type"
							:items="$store.state.CARD_TYPE"
							:readonly="TYPE === 'Read'"
							item-text="title_uz"
							item-value="value"
							outlined
							hide-details
						>
							<template v-slot:append>
								<chevron-down-icon size="1.3x"></chevron-down-icon>
							</template>
						</v-select>
					</template>

					<template v-if="$i18n.locale === 'ru'">
						<v-select
							v-model="plasticCardsModel.card_type"
							:items="$store.state.CARD_TYPE"
							:readonly="TYPE === 'Read'"
							item-text="title_ru"
							item-value="value"
							outlined
							hide-details
						>
							<template v-slot:append>
								<chevron-down-icon size="1.3x"></chevron-down-icon>
							</template>
						</v-select>
					</template>

					<template v-if="$i18n.locale === 'en'">
						<v-select
							v-model="plasticCardsModel.card_type"
							:items="$store.state.CARD_TYPE"
							:readonly="TYPE === 'Read'"
							item-text="title_en"
							item-value="value"
							outlined
							hide-details
						>
							<template v-slot:append>
								<chevron-down-icon size="1.3x"></chevron-down-icon>
							</template>
						</v-select>
					</template>
				</div>
			</v-col>

			<v-col md="4">
				<div class="app-form-group app-form-group__small no-shadow mb-2">
					<h5 class="font-600 dark-text mb-1">{{ $t("Dashboard.cards.issue_a_card") }} <span
						class="font-700 text-small">(UZ)</span></h5>

					<v-text-field
						v-model="plasticCardsModel.card_process_uz"
						:readonly="TYPE === 'Read'"
						outlined
						hide-details
					>
					</v-text-field>
				</div>
			</v-col>

			<v-col md="4">
				<div class="app-form-group app-form-group__small no-shadow mb-2">
					<h5 class="font-600 dark-text mb-1">{{ $t("Dashboard.cards.issue_a_card") }} <span
						class="font-700 text-small">(RU)</span></h5>

					<v-text-field
						v-model="plasticCardsModel.card_process_ru"
						:readonly="TYPE === 'Read'"
						outlined
						hide-details
					>
					</v-text-field>
				</div>
			</v-col>

			<v-col md="4">
				<div class="app-form-group app-form-group__small no-shadow mb-2">
					<h5 class="font-600 dark-text mb-1">{{ $t("Dashboard.cards.issue_a_card") }} <span
						class="font-700 text-small">(EN)</span></h5>

					<v-text-field
						v-model="plasticCardsModel.card_process_en"
						:readonly="TYPE === 'Read'"
						outlined
						hide-details
					>
					</v-text-field>
				</div>
			</v-col>

			<v-col md="4">
				<div class="app-form-group app-form-group__small no-shadow mb-2">
					<h5 class="font-600 dark-text mb-1">{{ $t("Dashboard.cards.fee_of_card") }}</h5>

					<v-text-field
						v-model="plasticCardsModel.fee_of_card"
						:readonly="TYPE === 'Read'"
						outlined
						hide-details
					>
					</v-text-field>
				</div>
			</v-col>

			<v-col md="4">
				<div class="app-form-group app-form-group__small no-shadow mb-2">
					<h5 class="font-600 dark-text mb-1">{{ $t("Dashboard.cards.card_currency") }}</h5>

					<v-text-field
						v-model="plasticCardsModel.card_currency"
						:readonly="TYPE === 'Read'"
						outlined
						hide-details
					>
					</v-text-field>
				</div>
			</v-col>

			<v-col md="4">
				<div class="app-form-group app-form-group__small no-shadow mb-2">
					<h5 class="font-600 dark-text mb-1">{{ $t("Dashboard.cards.deposit") }}</h5>

					<v-text-field v-model="plasticCardsModel.deposit" :readonly="TYPE === 'Read'" outlined hide-details>
					</v-text-field>
				</div>
			</v-col>

			<v-col md="4">
				<div class="app-form-group app-form-group__small no-shadow mb-2">
					<h5 class="font-600 dark-text mb-1">{{ $t("Dashboard.cards.expiry_date") }}</h5>

					<v-text-field
						v-model="plasticCardsModel.expiry_date"
						:readonly="TYPE === 'Read'"
						outlined
						hide-details
					>
					</v-text-field>
				</div>
			</v-col>

			<v-col md="4">
				<file-upload
					:label="$t('Dashboard.cards.card_photo')"
					@emit:up="upload"
					:value="cardOptionalFile"
					:disabled="TYPE === 'Read'"
				/>
			</v-col>

			<v-col md="12">
				<div class="admin-tabs">
					<v-tabs
						height="56"
						v-model="tab2"
						hide-slider
						class="mb-0 mb-5"
					>
						<v-tab class="transition-ease-in-out">
							<h5 class="font-600 dark-text text-transform-reset no-spacing px-2">
								{{ $t("Dashboard.terms_and_condition") }} <span
								class="font-700 text-small">(UZ)</span></h5>
						</v-tab>
						<v-tab class="transition-ease-in-out">
							<h5 class="font-600 dark-text text-transform-reset no-spacing px-2">
								{{ $t("Dashboard.terms_and_condition") }} <span
								class="font-700 text-small">(RU)</span></h5>
						</v-tab>
						<v-tab class="transition-ease-in-out">
							<h5 class="font-600 dark-text text-transform-reset no-spacing px-2">
								{{ $t("Dashboard.terms_and_condition") }} <span
								class="font-700 text-small">(EN)</span></h5>
						</v-tab>
					</v-tabs>

					<v-tabs-items v-model="tab2">
						<v-tab-item>
							<div class="app-editor">
								<quill-editor v-model="plasticCardsModel.card_conditions.condition_uz" :disabled="TYPE === 'Read'">
								</quill-editor>
							</div>
						</v-tab-item>

						<v-tab-item>
							<div class="app-editor">
								<quill-editor v-model="plasticCardsModel.card_conditions.condition_ru" :disabled="TYPE === 'Read'">
								</quill-editor>
							</div>
						</v-tab-item>
						<v-tab-item>
							<div class="app-editor">
								<quill-editor v-model="plasticCardsModel.card_conditions.condition_en" :disabled="TYPE === 'Read'">
								</quill-editor>
							</div>
						</v-tab-item>
					</v-tabs-items>
				</div>
			</v-col>

			<v-col md="4">
				<div class="app-form-group app-form-group__small no-shadow mb-2">
					<h5 class="font-600 dark-text mb-1">Karta mavjudligi</h5>

					<v-switch
						v-model="plasticCardsModel.is_available"
						:readonly="TYPE === 'Read'"
						color="rgba(var(--primary), 1)"
						inset
						hide-details
						class="mt-0"
					></v-switch>
				</div>
			</v-col>

			<template v-if="TYPE !== 'Create'">
				<go-back-button />

				<template v-if="TYPE !== 'Read'">
					<send-button
						@emit:up="update"
						:text="$t('Dashboard.update')"
					/>
				</template>
			</template>

			<template v-else>
				<go-back-button />

				<template v-if="!isCreated">
					<send-button @emit:up="send" :text="$t('Dashboard.add_new')" />
				</template>

				<template v-else>
					<send-button
						@emit:up="update"
						:text="$t('Dashboard.update')"
					/>
				</template>
			</template>

		</v-row>
	</div>
</template>

<script>
import AppTreeSelect from "../../../../BaseComponents/AppTreeSelect";
import SendButton from "../../../../BaseComponents/SendButton";
import GoBackButton from "../../../../BaseComponents/GoBackButton";
import FileUpload from "../../../../BaseComponents/FileUpload";
import { ChevronDownIcon } from "vue-feather-icons";
import { required } from "vuelidate/lib/validators";

export default {
	name: "CardOptional",
	props: {
		TYPE: {
			type: String,
			default: ""
		}
	},
	components: {
		AppTreeSelect,
		SendButton,
		GoBackButton,
		FileUpload,
		ChevronDownIcon
	},
	data() {
		return {
			tab1: null,
			tab2: null,
			tab3: null,
			treeID: null,
			cardOptionalFile: null,
			plasticCardsModel: {
				name_uz: "",
				name_ru: "",
				name_en: "",
				type: "",
				card_type: "",
				category: null,
				card_process_uz: "",
				card_process_ru: "",
				card_process_en: "",
				card_image: null,
				description_uz: "",
				description_ru: "",
				description_en: "",
				about_description_uz: "",
				about_description_ru: "",
				about_description_en: "",
				is_available: true,
				fee_of_card: "",
				card_currency: "",
				deposit: "",
				expiry_date: "",
				card_conditions: {
					condition_uz: "",
					condition_ru: "",
					condition_en: ""
				}
			},
			isCreated: false
		};
	},
	validations: {
		plasticCardsModel: {
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
				this.$toast.warning(`Field to'ldirilishi kerak`);

				return;
			}

			this.plasticCardsModel.category = this.treeID;
			this.plasticCardsModel.card_image = this.cardOptionalFile.id;

			this.$http
				.post(`/${this.$store.state.auth.COMPANY_ID}/plastic_cards/`, this.plasticCardsModel)
				.then(({ data }) => {
					this.$toast.success(`Karta yaratildi`);

					this.$store.state.CREATED_CARD_ID = data.id;

					this.isCreated = true
				})
				.catch(() => {
					this.$toast.error(`Yaratishda xatolik`);
				});
		},

		/*
		 *
		 * */
		upload(file) {
			this.cardOptionalFile = file;
		},

		/*
		 *
		 * */
		update() {
			this.$v.$touch();

			if (this.$v.$invalid) {
				this.$toast.warning(`Field to'ldirilishi kerak`);

				return;
			}

			this.plasticCardsModel.category = this.treeID;
			this.plasticCardsModel.card_image = this.cardOptionalFile.id;

			if(this.$route.params.id) {
				this.$store.state.CREATED_CARD_ID = this.$route.params.id
			}

			this.$http
				.put(`/${this.$store.state.auth.COMPANY_ID}/plastic_cards/${this.$store.state.CREATED_CARD_ID}/`, this.plasticCardsModel)
				.then(() => {
					this.$toast.success(`Karta yangilandi`);
				})
				.catch(() => {
					this.$toast.error(`Yangilashda xatolik`);
				});
		},

		/*
		 *
		 * */
		getOne() {
			this.$http.get(`/${this.$store.state.auth.COMPANY_ID}/plastic_cards/${this.$route.params.id}/`).then(({ data }) => {
				this.plasticCardsModel = data;

				this.treeID = data.category.id;
				this.cardOptionalFile = data.card_image;
			});
		}
	}
};
</script>

<style></style>
