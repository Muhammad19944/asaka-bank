<template>
	<div class="form-wrap-body">
		<v-row>
			<template v-if="$store.state.CREATED_TRANSFER_ID === null">
				<v-col md="12">
					<v-alert type="error">{{ $t('Dashboard.transfers.transfer_error_alert') }}</v-alert>
				</v-col>
			</template>

			<v-col md="4">
				<div class="app-form-group app-form-group__small no-shadow mb-2">
					<h5 class="font-600 dark-text mb-1">{{ $t('Dashboard.transfers.transfer_currency') }}</h5>

					<v-text-field
						v-model="transferTariffModel.transfer_currency"
						:readonly="$store.state.CREATED_TRANSFER_ID === null || TYPE === 'Read'"
						outlined
						hide-details
					>
					</v-text-field>
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
				<v-col v-for="(item, index) in transferTariffList" :key="index" md="4">
					<div class="credit-widget pa-5 rounded-lg d-flex align-center overflow-hidden p-relative">
						<div class="d-flex align-center justify-space-between w-100">
							<h5 class="font-600">{{ $t('Dashboard.transfers.transfer_currency') }}:</h5>

							<h5 class="font-600">
								{{ item.transfer_currency }}
							</h5>
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

			<template v-if="!isTariffCreated">
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
import FileUpload from "../../../../BaseComponents/FileUpload";
import SendButton from "../../../../BaseComponents/SendButton";
import GoBackButton from "../../../../BaseComponents/GoBackButton";
import { Edit2Icon, Trash2Icon, PlusCircleIcon } from "vue-feather-icons";

export default {
	name: "TransferTariff",
	props: {
		TYPE: {
			type: String,
			default: ""
		}
	},
	components: {
		FileUpload,
		SendButton,
		GoBackButton,
		Edit2Icon,
		Trash2Icon,
		PlusCircleIcon
	},
	data() {
		return {
			transferTariffModel: {
				transfer_currency: ""
			},
			transferTariffList: [],
			isTariffCreated: false
		};
	},
	mounted() {
		if (this.$route.params.id) {
			this.getAll();
		}
	},
	methods: {
		/*
		 *
		 * */
		getAll() {
			this.$http.get(`/${this.$store.state.auth.COMPANY_ID}/transfer/${this.$route.params.id}/tariffs/`).then(({ data }) => {
				this.transferTariffList = data.results;
			});
		},
		/*
		 *
		 * */
		send() {
			if (this.transferTariffModel.transfer_currency === "") {
				this.$toast.warning(`Field to'ldirilishi shart`);

				return void 0;
			}

			this.$http
				.post(`/${this.$store.state.auth.COMPANY_ID}/transfer/${this.$store.state.CREATED_TRANSFER_ID}/tariffs/`, this.transferTariffModel)
				.then(({ data }) => {
					this.$toast.success(`Yaratildi`);

					this.transferTariffModel = data

					this.isTariffCreated = true

					this.getAll();

				})
				.catch((err) => {
					this.$toast.error(`Yaratishda xatolik`);
				});
		},

		/*
		 *
		 * */
		update() {
			if (!this.transferTariffModel.hasOwnProperty("id")) {
				this.$toast.warning(`Field to'ldirilishi shart`);

				return void 0;
			}

			if(this.$route.params.id) {
				this.$store.state.CREATED_TRANSFER_ID = this.$route.params.id
			}

			this.$http
				.put(
					`/${this.$store.state.auth.COMPANY_ID}/transfer/${this.$store.state.CREATED_TRANSFER_ID}/tariffs/${this.transferTariffModel.id}/`,
					this.transferTariffModel
				)
				.then((res) => {
					this.$toast.success(`Yangilandi`);

					this.getAll();

				})
				.catch((err) => {
					this.$toast.error(`Yangilashda xatolik`);
				});
		},

		/*
		 *
		 * */
		propUpdate(item) {
			this.transferTariffModel = { ...item };
		},

		/*
		 *
		 * */
		deleteProp(id) {
			if (!confirm(`O'chirishni xoxlaysizmi ?`)) {
				return void 0;
			}

			this.$http
				.delete(`/${this.$store.state.auth.COMPANY_ID}/transfer/${this.$route.params.id}/tariffs/${id}/`)
				.then((res) => {
					this.$toast.success(`O'chirildi`);

					this.getAll();
				})
				.catch((err) => {
					this.$toast.error(`O'chirishda xatolik`);
				});
		},

		resetFields() {
			this.transferTariffModel.transfer_currency = "";
		}
	}
};
</script>

<style></style>
