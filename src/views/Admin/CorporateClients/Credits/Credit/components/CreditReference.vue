<template>
	<div class='credit-reference'>
		<v-row>
			<v-col md='12'>
				<!-- FOR TEXT LEFT IN CREDIT DETAIL -->
				<div class="admin-tabs mb-1">
					<v-tabs
						height='56'
						v-model='tab1'
						hide-slider
						class="mb-0 mb-5 px-2"
					>
						<v-tab class="transition-ease-in-out">
							<h5 class="font-600 dark-text text-transform-reset no-spacing px-2">
								Text Left (UZ)
							</h5>
						</v-tab>
						<v-tab class="transition-ease-in-out">
							<h5 class="font-600 dark-text text-transform-reset no-spacing px-2">
								Text Left (RU)
							</h5>
						</v-tab>
						<v-tab class="transition-ease-in-out">
							<h5 class="font-600 dark-text text-transform-reset no-spacing px-2">
								Text Left (EN)
							</h5>
						</v-tab>
					</v-tabs>

					<v-tabs-items v-model="tab1">
						<v-tab-item>
							<div class="app-editor">
								<quill-editor
									v-model="creditModelReference.text_left_uz"
									:disabled="TYPE === 'Read'"
								>
								</quill-editor>
							</div>
						</v-tab-item>
						<v-tab-item>
							<div class="app-editor">
								<quill-editor
									v-model="creditModelReference.text_left_ru"
									:disabled="TYPE === 'Read'"
								>
								</quill-editor>
							</div>
						</v-tab-item>
						<v-tab-item>
							<div class="app-editor">
								<quill-editor
									v-model="creditModelReference.text_left_en"
									:disabled="TYPE === 'Read'"
								>
								</quill-editor>
							</div>
						</v-tab-item>
					</v-tabs-items>
				</div>
			</v-col>


			<!-- FOR TEXT RIGHT TOP IN CREDIT DETAIL -->
			<v-col md='4'>
				<div class='app-form-group app-form-group__small no-shadow mb-2'>
					<h5 class='font-600 dark-text mb-1'>Text Right Top (UZ)</h5>
					<v-text-field v-model='creditModelReference.text_right_top_uz' :readonly="TYPE === 'Read'" outlined
					              hide-details>
					</v-text-field>
				</div>
			</v-col>

			<v-col md='4'>
				<div class='app-form-group app-form-group__small no-shadow mb-2'>
					<h5 class='font-600 dark-text mb-1'>Text Right Top (RU)</h5>
					<v-text-field v-model='creditModelReference.text_right_top_ru' :readonly="TYPE === 'Read'" outlined
					              hide-details>
					</v-text-field>
				</div>
			</v-col>

			<v-col md='4'>
				<div class='app-form-group app-form-group__small no-shadow mb-2'>
					<h5 class='font-600 dark-text mb-1'>Text Right Top (EN)</h5>
					<v-text-field v-model='creditModelReference.text_right_top_en' :readonly="TYPE === 'Read'" outlined
					              hide-details>
					</v-text-field>
				</div>
			</v-col>


			<!-- FOR TEXT BOTTOM IN CREDIT DETAIL -->
			<v-col md='4'>
				<div class='app-form-group app-form-group__small no-shadow mb-2'>
					<h5 class='font-600 dark-text mb-1'>Text Bottom (UZ)</h5>
					<v-text-field v-model='creditModelReference.text_bottom_uz' :readonly="TYPE === 'Read'" outlined
					              hide-details>
					</v-text-field>
				</div>
			</v-col>

			<v-col md='4'>
				<div class='app-form-group app-form-group__small no-shadow mb-2'>
					<h5 class='font-600 dark-text mb-1'>Text Bottom (RU)</h5>
					<v-text-field v-model='creditModelReference.text_bottom_ru' :readonly="TYPE === 'Read'" outlined
					              hide-details>
					</v-text-field>
				</div>
			</v-col>

			<v-col md='4'>
				<div class='app-form-group app-form-group__small no-shadow mb-2'>
					<h5 class='font-600 dark-text mb-1'>Text Bottom (EN)</h5>
					<v-text-field v-model='creditModelReference.text_bottom_en' :readonly="TYPE === 'Read'" outlined
					              hide-details>
					</v-text-field>
				</div>
			</v-col>
		</v-row>
		<v-row>
			<v-col md='4'>
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
			</v-col>
		</v-row>

		<template v-if="TYPE !== 'Create'">
			<v-row>
				<v-col v-for="(item, index) in referenceList" :key="index" md="4">
					<div class="credit-widget pa-5 rounded-lg d-flex align-center overflow-hidden p-relative">

						<h3 class="dark-text font-600 mb-0" v-html="item.text_left_uz"></h3>

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
										:disabled="$store.state.CREATED_CREDIT_ID === null || TYPE === 'Read'"
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
										:disabled="$store.state.CREATED_CREDIT_ID === null || TYPE === 'Read'"
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

		<!-- (CREATED_CREDIT_ID) => will shown a button -->
		<div class='mt-8'>
			<template v-if="$store.state.CREATED_CREDIT_ID">
				<go-back-button />
				<!-- (TYPE !== 'Read') => will hide buttons -->
				<template v-if="TYPE !== 'Read'">
					<template v-if="!isReferenceCreated">
						<send-button @emit:up="send" :text="$t('Dashboard.add_new')">
							<plus-circle-icon size="1.3x" class="text-white"></plus-circle-icon>
						</send-button>
					</template>

					<template v-else>
						<send-button @emit:up="update" :text="$t('Dashboard.update')" />
					</template>
				</template>
			</template>
		</div>

	</div>

</template>

<script>
	import SendButton from "../../../../BaseComponents/SendButton";
	import GoBackButton from "../../../../BaseComponents/GoBackButton";
	import { ChevronDownIcon, PlusCircleIcon, Edit2Icon, Trash2Icon } from "vue-feather-icons";

	export default {
		name: 'CreditReference',
		props: {
			TYPE: {
				type: String,
				default: ''
			}
		},
		components: {
			SendButton,
			GoBackButton,
			ChevronDownIcon,
			PlusCircleIcon,
			Edit2Icon,
			Trash2Icon,
		},
		data() {
			return {
				creditModelReference: {
					text_right_top_uz: '',
					text_left_uz: '',
					text_bottom_uz: '',
					text_right_top_ru: '',
					text_left_ru: '',
					text_bottom_ru: '',
					text_right_top_en: '',
					text_left_en: '',
					text_bottom_en: ''
				},
				isReferenceCreated: false,
				referenceList: [],
				tab1: null
			}
		},
		mounted() {
			if (this.$route.params.id) {
				this.getOneProp();
				this.getAll();
			}

		},
		methods: {
			getAll(){
				this.$http.get(`${this.$store.state.auth.COMPANY_ID}/credit/${this.$store.state.CREATED_CREDIT_ID}/reference/`)
				.then(({ data  }) => {
					this.referenceList = data.results;
				})
			},
			/*
			*
			* */
			send() {
				this.$http.post(`/${this.$store.state.auth.COMPANY_ID}/credit/${this.$store.state.CREATED_CREDIT_ID}/reference/`, this.creditModelReference)
					.then(({ data }) => {
						this.$toast.success('Yaratildi')

						this.creditModelReference = data

						this.getAll();
					})
					.catch((err) => {
						this.$toast.error(`Yaratishda xatolik`)
					})
			},
			/*
			 *
			 * */
			update() {
				this.$http
					.put(
						`/${this.$store.state.auth.COMPANY_ID}/credit/${this.$store.state.CREATED_CREDIT_ID}/reference/${this.creditModelReference.id}/`,
						this.creditModelReference
					)
					.then((res) => {
						this.$toast.success(`Yangilandi`)

						this.getOneProp()

						this.getAll();
					})
					.catch((err) => {
						this.$toast.error(`Yaratishda xatolik`)
					})
			},
			/*
			 *
			 * */
			getOneProp() {
				this.$http.get(`/${this.$store.state.auth.COMPANY_ID}/credit/${this.$store.state.CREATED_CREDIT_ID}/reference/`)
					.then(({ data }) => {
					this.creditModelReference = data.results.length > 0 ? data.results[0] : {}

					data.results.length > 0 ? (this.isReferenceCreated = true) : this.isReferenceCreated
				})
			},
			/*
			*
			* */
			propUpdate(item) {
				this.creditModelReference = { ...item };
			},
			/*
			*
			* */
			deleteProp(id) {
				if (!confirm(`O'chirishni xoxlaysizmi ?`)) {
					return void 0;
				}

				this.$http
					.delete(`/${this.$store.state.auth.COMPANY_ID}/credit/${this.$store.state.CREATED_CREDIT_ID}/reference/${id}/`)
					.then((res) => {
						this.$toast.success(`O'chirildi`);

						this.getAll();
					})
					.catch((err) => {
						this.$toast.error(`O'chirishda xatolik`);
					});
			},
		}
	}
</script>

<style scoped>

</style>
