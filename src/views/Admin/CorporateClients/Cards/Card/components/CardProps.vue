<template>
	<div class="form-wrap-body">
		<v-row>
			<template v-if="$store.state.CREATED_CARD_ID === null">
				<v-col md="12">
					<v-alert type="error">
						{{ $t('Dashboard.cards.card_error_alert') }}
					</v-alert>
				</v-col>
			</template>

			<v-col md="4">
				<div class="app-form-group app-form-group__small no-shadow mb-2">
					<h5 class="font-600 dark-text mb-1">{{ $t('Dashboard.cards.title_properties') }} <span class="font-700 text-small">(UZ)</span></h5>

                    <v-text-field
                        v-model="$v.cardProp.property_title_uz.$model"
                        :error="$v.cardProp.property_title_uz.$error"
                        :readonly="$store.state.CREATED_CARD_ID === null || TYPE === 'Read'"
                        outlined
                        hide-details
                    >
                    </v-text-field>
                </div>
            </v-col>

			<v-col md="4">
				<div class="app-form-group app-form-group__small no-shadow mb-2">
					<h5 class="font-600 dark-text mb-1">{{ $t('Dashboard.cards.title_properties') }} <span class="font-700 text-small">(RU)</span></h5>

                    <v-text-field
                        v-model="$v.cardProp.property_title_ru.$model"
                        :error="$v.cardProp.property_title_ru.$error"
                        :readonly="$store.state.CREATED_CARD_ID === null || TYPE === 'Read'"
                        outlined
                        hide-details
                    >
                    </v-text-field>
                </div>
            </v-col>

			<v-col md="4">
				<div class="app-form-group app-form-group__small no-shadow mb-2">
					<h5 class="font-600 dark-text mb-1">{{ $t('Dashboard.cards.title_properties') }} <span class="font-700 text-small">(EN)</span></h5>

                    <v-text-field
                        v-model="$v.cardProp.property_title_en.$model"
                        :error="$v.cardProp.property_title_en.$error"
                        :readonly="$store.state.CREATED_CARD_ID === null || TYPE === 'Read'"
                        outlined
                        hide-details
                    >
                    </v-text-field>
                </div>
            </v-col>

			<v-col md="4">
				<div class="app-form-group app-form-group__small no-shadow mb-2">
					<h5 class="font-600 dark-text mb-1">{{ $t('Dashboard.cards.description') }} <span class="font-700 text-small">(UZ)</span></h5>

                    <v-text-field
                        v-model="cardProp.property_desc_uz"
                        :readonly="$store.state.CREATED_CARD_ID === null || TYPE === 'Read'"
                        outlined
                        hide-details
                    >
                    </v-text-field>
                </div>
            </v-col>

			<v-col md="4">
				<div class="app-form-group app-form-group__small no-shadow mb-2">
					<h5 class="font-600 dark-text mb-1">{{ $t('Dashboard.cards.description') }} <span class="font-700 text-small">(RU)</span></h5>

                    <v-text-field
                        v-model="cardProp.property_desc_ru"
                        :readonly="$store.state.CREATED_CARD_ID === null || TYPE === 'Read'"
                        outlined
                        hide-details
                    >
                    </v-text-field>
                </div>
            </v-col>

			<v-col md="4">
				<div class="app-form-group app-form-group__small no-shadow mb-2">
					<h5 class="font-600 dark-text mb-1">{{ $t('Dashboard.cards.description') }} <span class="font-700 text-small">(EN)</span></h5>

                    <v-text-field
                        v-model="cardProp.property_desc_en"
                        :readonly="$store.state.CREATED_CARD_ID === null || TYPE === 'Read'"
                        outlined
                        hide-details
                    >
                    </v-text-field>
                </div>
            </v-col>

            <v-col md="4">
                <file-upload
                    ref="propFile"
                    @emit:up="upload"
                    :value="cardPropFile"
                    :disabled="!$store.state.CREATED_CARD_ID || TYPE === 'Read'"
                    :label="$t('Dashboard.upload_photo')"
                />
            </v-col>

			<!-- (CREATED_CARD_ID) => will shown a button -->
			<template v-if="$store.state.CREATED_CARD_ID">
				<!-- (TYPE !== 'Read') => will hide a button -->
				<template v-if="TYPE !== 'Read'">
					<v-col md="4">
						<div class="app-form-group app-form-group__small no-shadow mb-2">
							<h5 class="font-600 dark-text mb-1">{{ $t('Dashboard.add_new') }}</h5>

							<send-button @emit:up="addNew" :text="$t('Dashboard.add_new')">
								<plus-circle-icon size="1.3x" class="text-white"></plus-circle-icon>
							</send-button>
						</div>
					</v-col>
				</template>
			</template>



		</v-row>

		<v-row>
			<!-- Update, Read -->
			<template v-if="$store.state.CREATED_CARD_ID">
				<template v-for="item in cardPropList">
					<v-col md="4" :key="item.id">
						<div
							class="app-slide-card pa-6 rounded-lg overflow-hidden p-relative h-100"
							style="min-height: auto"
						>
							<div class="d-flex align-center">
								<v-avatar color="danger" size="80" class="mr-5">
									<template v-if="item.icon">
										<img :src="$http.defaults.baseURL + item.icon.url" alt="" />
									</template>
								</v-avatar>

								<div>
									<I18nVue
										:uz="item.property_title_uz"
										:ru="item.property_title_ru"
										:en="item.property_title_en"
										classes="text--h4 dark-text font-600 d-block"
									/>

									<template v-if="item.property_desc_uz">
										<I18nVue
											:uz="item.property_desc_uz"
											:ru="item.property_desc_ru"
											:en="item.property_desc_en"
											classes="text--h5 d-block"
										/>
									</template>
								</div>
							</div>

							<div class="app-slide-overlay p-absolute w-100 h-100 d-flex align-center justify-center text-white transition-ease-in-out">
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
											class="border-all pa-1 rounded-circle d-flex align-center justify-center outline-transparent mr-4 transition-fast-out-slow-in"
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
											class="border-all pa-1 rounded-circle d-flex align-center justify-center outline-transparent mr-4 transition-fast-out-slow-in"
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

				<v-col md="12" class="mt-10">
					<go-back-button />
					<!-- (cardPropList.length = 0 && TYPE !== 'Read') => will hide a button -->
					<template v-if="cardPropList.length && TYPE !== 'Read'">
						<send-button @emit:up="update" :text="$t('Dashboard.update')" />
					</template>
				</v-col>
			</template>
		</v-row>
	</div>
</template>

<script>
import FileUpload from "../../../../BaseComponents/FileUpload";
import SendButton from "../../../../BaseComponents/SendButton";
import GoBackButton from "../../../../BaseComponents/GoBackButton";
import I18nVue from "../../../../../../I18nVue";
import {required} from "vuelidate/lib/validators";
import {Edit2Icon, Trash2Icon, PlusCircleIcon} from "vue-feather-icons";

export default {
	name: "CardProps",
	props: {
		TYPE: {
			type: String,
			default: ''
		}
	},
	components: {
		FileUpload,
		SendButton,
		GoBackButton,
		I18nVue,
		Edit2Icon,
		Trash2Icon,
		PlusCircleIcon
	},
	data() {
		return {
            cardPropFile: null,
			cardProp: {
				icon: null,
				property_title_uz: "",
				property_title_ru: "",
				property_title_en: "",
				property_desc_uz: "",
				property_desc_ru: "",
				property_desc_en: ""
			},
			cardPropList: []
		}
	},
	validations: {
		cardProp: {
			property_title_uz: { required },
			property_title_ru: { required },
			property_title_en: { required }
		},
	},
	mounted() {
		if(this.$route.params.id) {
			this.getPropAll()
		}
	},
	methods: {
		/*
		*
		* */
		send() {
			this.$v.$touch();

			if (this.$v.$invalid) {
                this.$toast.warning(`Field to'ldirilishi shart`)

				return;
			}

			this.$http.post(`/${this.$store.state.auth.COMPANY_ID}/plastic_cards/${this.$store.state.CREATED_CARD_ID}/property/`, this.cardProp)
			.then(res => {
				this.$toast.success(`Karta props yaratildi`)

				this.cardProp.icon = null
				this.cardProp.property_title_uz =
				this.cardProp.property_title_ru =
				this.cardProp.property_title_en =
				this.cardProp.property_desc_uz =
				this.cardProp.property_desc_ru =
				this.cardProp.property_desc_en = ''
			})
		},

		/*
		*
		* */
		upload(file) {
			this.cardPropFile = file
		},

		/*
		*
		* */
		update() {
			this.$v.$touch();

			if (this.$v.$invalid) {

                this.$toast.warning(`Field to'ldirilishi shart`)

				return;
			}

			this.cardProp.icon = this.cardPropFile ? this.cardPropFile.id : null

			this.$http.put(`/${this.$store.state.auth.COMPANY_ID}/plastic_cards/${this.$store.state.CREATED_CARD_ID}/property/${this.cardProp.id}/`, this.cardProp)
			.then(res => {
				this.$toast.success(`Yangilandi`)

				this.resetFields()

				this.getPropAll()
			})
			.catch(err => {
				this.$toast.error(`Yaratishda xatolik`)

				this.resetFields()
			})
		},

		/*
		*
		* */
		propUpdate(item) {
            this.cardProp = {...item}
            this.cardPropFile = {...item.icon}
		},

		/*
		*
		* */
		propDelete(id) {
			if(!confirm(`O'chirishni xoxlaysizmi ?`)) {
				return void 0;
			}

			this.$http.delete(`/${this.$store.state.auth.COMPANY_ID}/plastic_cards/${this.$store.state.CREATED_CARD_ID}/property/${id}`)
			.then(res => {
				this.$toast.success(`O'chirildi`)

				this.getPropAll()
			})
		},

		/*
		*
		* */
		getPropAll() {
			this.$http.get(`/${this.$store.state.auth.COMPANY_ID}/plastic_cards/${this.$store.state.CREATED_CARD_ID}/property/`)
			.then(({ data }) => {
				this.cardPropList = data.results
			})
		},

		/*
		*
		* */
		addNew() {
			this.$v.$touch();

			if (this.$v.$invalid) {
                this.$toast.warning(`Field to'ldirilishi shart`)

				return;
			}

            this.cardProp.icon = this.cardPropFile ? this.cardPropFile.id : null

			this.$http.post(`/${this.$store.state.auth.COMPANY_ID}/plastic_cards/${this.$store.state.CREATED_CARD_ID}/property/`, this.cardProp)
				.then(res => {
					this.$toast.success(`Karta props yaratildi`)

					this.resetFields()

                    this.getPropAll()
				})
                .catch(err => {
                    this.$toast.error(`Yaratishda xatolik`)

                    this.resetFields()
			    })
		},

        /**
         *
         *
        */
        resetFields() {
            const { propFile } = this.$refs

            this.cardProp.icon = null
            this.cardProp.property_title_uz =
            this.cardProp.property_title_ru =
            this.cardProp.property_title_en =
            this.cardProp.property_desc_uz =
            this.cardProp.property_desc_ru =
            this.cardProp.property_desc_en = ''
            this.cardPropFile = null
            propFile.file = []
        }
	}
}
</script>

<style>

</style>
