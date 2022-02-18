<template>
	<div class="form-wrap-body">
		<v-row>
			<template v-if="$store.state.CREATED_TRANSFER_ID === null">
				<v-col md="12">
					<v-alert type="error">{{ $t('Dashboard.transfers.transfer_error_alert') }}</v-alert>
				</v-col>
			</template>

			<v-col md="4">
				<div class="app-form-group app-form-group__small no-shadow">
					<h5 class="font-600 dark-text mb-1">{{ $t('tariffs') }}</h5>

					<v-select
						v-model="transferCountryModel.tariff"
						:items="tariffList"
						:readonly="$store.state.CREATED_TRANSFER_ID === null || TYPE === 'Read'"
						item-text="transfer_currency"
						item-value="id"
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
					<h5 class="font-600 dark-text mb-1">{{ $t('Dashboard.transfers.transfer_amt_min') }} <span class="red--text">({{ $t('Dashboard.min') }})</span></h5>

					<v-text-field
						v-model="transferCountryModel.transfer_amt_min"
						:readonly="$store.state.CREATED_TRANSFER_ID === null || TYPE === 'Read'"
						outlined
						hide-details
					>
					</v-text-field>
				</div>
			</v-col>

			<v-col md="4">
				<div class="app-form-group app-form-group__small no-shadow mb-2">
					<h5 class="font-600 dark-text mb-1">{{ $t('Dashboard.transfers.commission_fee_min') }} <span class="red--text">({{ $t('Dashboard.min') }})</span></h5>

					<v-text-field
						v-model="transferCountryModel.commission_fee_min"
						:readonly="$store.state.CREATED_TRANSFER_ID === null || TYPE === 'Read'"
						outlined
						hide-details
					>
					</v-text-field>
				</div>
			</v-col>

			<v-col md="4">
				<div class="app-form-group app-form-group__small no-shadow mb-2">
					<h5 class="font-600 dark-text mb-1">{{ $t('Dashboard.transfers.commission_fee_min') }} <span class="red--text">({{ $t('Dashboard.max') }})</span></h5>

					<v-text-field
						v-model="transferCountryModel.commission_fee_max"
						:readonly="$store.state.CREATED_TRANSFER_ID === null || TYPE === 'Read'"
						outlined
						hide-details
					>
					</v-text-field>
				</div>
			</v-col>

			<v-col md="4">
				<div class="app-form-group app-form-group__small no-shadow">
					<h5 class="font-600 dark-text mb-1">{{ $t('Dashboard.sidebar.country') }}</h5>

					<v-select
						v-model="transferCountryModel.country"
						:items="countryList"
						:readonly="$store.state.CREATED_TRANSFER_ID === null || TYPE === 'Read'"
						item-text="name_uz"
						item-value="id"
						outlined
						hide-details
					>
						<template v-slot:append>
							<chevron-down-icon size="1.5x" class="grey--text"></chevron-down-icon>
						</template>
					</v-select>
				</div>
			</v-col>

			<template v-if="TYPE !== 'Create' && TYPE !== 'Read'">
				<v-col md="4">
					<div class="app-form-group app-form-group__small no-shadow mb-2">
						<h5 class="font-600 dark-text mb-1" style="opacity: 0">Hidden text</h5>

						<send-button @emit:up="send" :text="$t('Dashboard.add_new')">
							<plus-circle-icon size="1.3x" class="text-white"></plus-circle-icon>
						</send-button>
					</div>
				</v-col>
			</template>
		</v-row>

		<template v-if="TYPE !== 'Create'">
			<v-row>
				<v-col v-for="item in transferCountryList" :key="item.id" md="4">
					<div class="credit-widget pa-5 rounded-lg overflow-hidden p-relative">
						<div class="d-flex align-center justify-space-between w-100 mb-2">
							<h5 class="font-600">{{ $t('Dashboard.transfers.transfer_amt_min') }}:</h5>

							<h5 class="font-600">
								{{ item.transfer_amt_min }}
							</h5>
						</div>

						<div class="d-flex align-center justify-space-between w-100 mb-2">
							<h5 class="font-600">{{ $t('Dashboard.transfers.commission_fee_min') }}: <span>({{ $t('Dashboard.min') }})</span></h5>

							<h5 class="font-600">
								{{ item.commission_fee_min }}
							</h5>
						</div>

						<div class="d-flex align-center justify-space-between w-100 mb-2">
							<h5 class="font-600">{{ $t('Dashboard.transfers.commission_fee_min') }}: <span>({{ $t('Dashboard.max') }})</span></h5>

							<h5 class="font-600">
								{{ item.commission_fee_max }}
							</h5>
						</div>

						<div class="d-flex align-center justify-space-between w-100 mb-2">
							<h5 class="font-600">{{ $t('Dashboard.sidebar.country') }}:</h5>

							<template v-if="item.country">
								<I18nVue
									:uz="item.country.name_uz"
									:ru="item.country.name_ru"
									:en="item.country.name_en"
									classes="font-600 text--h5"
								/>
							</template>
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
										:disabled="$store.state.CREATED_TRANSFER_ID === null || TYPE === 'Read'"
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
										@click="deleteProp(item.id)"
										:disabled="$store.state.CREATED_TRANSFER_ID === null || TYPE === 'Read'"
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
			</v-row>
		</template>

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

			<template v-if="!isCountryCreated">
				<send-button @emit:up="send" :text="$t('Dashboard.add_new')" />
			</template>

			<template v-else>
				<send-button
					@emit:up="update"
					:text="$t('Dashboard.update')"
				/>
			</template>
		</template>
	</div>
</template>

<script>
import SendButton from "../../../../BaseComponents/SendButton";
import GoBackButton from "../../../../BaseComponents/GoBackButton";
import I18nVue from "../../../../../../I18nVue";
import { ChevronDownIcon, Edit2Icon, Trash2Icon, PlusCircleIcon } from "vue-feather-icons";

export default {
	name: "TransferCountry",
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
		ChevronDownIcon,
		Edit2Icon,
		Trash2Icon,
		PlusCircleIcon
	},
	data() {
		return {
			transferCountryModel: {
				tariff: null,
				transfer_amt_min: "",
				commission_fee_max: "",
				commission_fee_min: "",
				country: null
			},
			tariffList: [],
			countryList: [],
			transferCountryList: [],
			isCountryCreated: false
		};
	},
	mounted() {
		if (this.$route.params.id) {
			this.getTariffList();
			this.getCountryList();
			this.getTariffCountryList();
		}
	},
	methods: {
		/*
		 *
		 * */
		getTariffList() {
			this.$http.get(`/${this.$store.state.auth.COMPANY_ID}/transfer/${this.$route.params.id}/tariffs/`).then(({ data }) => {
				this.tariffList = data.results;
			});
		},

		/*
		 *
		 * */
		getCountryList() {
			this.$http.get(`/${this.$store.state.auth.COMPANY_ID}/country/`, {
				params: {
					page_size: 250
				}
			}).then(({ data }) => {
				this.countryList = data.results;
			});
		},

		/*
		 *
		 * */
		getTariffCountryList() {
			this.$http.get(`/${this.$store.state.auth.COMPANY_ID}/transfer_tariff/country/`, {
				params: {
					tariff__transfer: this.$route.params.id
				}
			}).then(({ data }) => {
				this.transferCountryList = data.results;
			});
		},

		/*
		 *
		 * */
		send() {

			if (this.transferCountryModel.commission_fee_min === ""){
				this.transferCountryModel.commission_fee_min = null
			}
			if (this.transferCountryModel.transfer_amt_min === ""){
				this.transferCountryModel.transfer_amt_min = null
			}
			if (this.transferCountryModel.commission_fee_max === ""){
				this.transferCountryModel.commission_fee_max = null
			}
			this.$http
				.post(`/${this.$store.state.auth.COMPANY_ID}/transfer_tariff/country/`, this.transferCountryModel)
				.then(({ data }) => {
					this.$toast.success(`Yaratildi`);

					this.transferCountryModel = data

					this.isCountryCreated = true;

					this.getTariffCountryList();
					this.resetFields();
				})
				.catch((err) => {
					this.$toast.error(`Yaratishda xatolik`);

					this.resetFields();
				});
		},

		/*
		 *
		 * */
		update() {

			if(this.$route.params.id) {
				this.$store.state.CREATED_TRANSFER_ID = this.$route.params.id
			}

			this.$http
				.put(`/${this.$store.state.auth.COMPANY_ID}/transfer_tariff/country/${this.transferCountryModel.id}`, this.transferCountryModel)
				.then((res) => {
					this.$toast.success(`Yangilandi`);
					this.getTariffCountryList();
					this.resetFields();

				})
				.catch((err) => {
					this.$toast.error(`Yangilashda xatolik`);

					this.resetFields();
				});
		},

		/*
		 *
		 * */
		propUpdate(item) {
			this.transferCountryModel = { ...item };
		},

		/*
		 *
		 * */
		deleteProp(id) {
			if (!confirm(`O'chirishni xoxlaysizmi ?`)) {
				return void 0;
			}

			this.$http
				.delete(`/${this.$store.state.auth.COMPANY_ID}/transfer_tariff/country/${id}/`)
				.then(() => {
					this.$toast.success(`O'chirildi`);

					this.getTariffCountryList();
				})
				.catch(() => {
					this.$toast.error(`O'chirishda xatolik`);
				});
		},

		/*
		 *
		 * */
		resetFields() {
			this.transferCountryModel = {};
		}
	}
};
</script>

<style></style>
