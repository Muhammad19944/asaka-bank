<template>
	<div class="form-wrap">
		<app-card class="mb-13">
			<div class="form-wrap pa-5 px-6 d-flex flex-column m-h-100">
				<div class="d-flex align-center mb-8">
					<h4 class="text--primary text-uppercase font-700 mr-4">
						{{ TYPE === "Create" ? $t("Dashboard.add_new") : TYPE === "Update" ? $t("Dashboard.update") : $t("Dashboard.read")
						}}
					</h4>

					<v-divider style="border-color: rgb(var(--border-color), 1)"></v-divider>
				</div>
				<div class="flex-1">
					<v-row>
						<v-col md="4">
							<div class="app-form-group app-form-group__small no-shadow mb-2">
								<h5 class="font-600 dark-text mb-1">Hujjat nomi (UZ)</h5>

								<v-text-field
									v-model="$v.documentsModel.title_uz.$model"
									:error="$v.documentsModel.title_uz.$error"
									:readonly="TYPE === 'Read'"
									outlined
									hide-details
								>
								</v-text-field>
							</div>
						</v-col>

						<v-col md="4">
							<div class="app-form-group app-form-group__small no-shadow mb-2">
								<h5 class="font-600 dark-text mb-1">Hujjat nomi (RU)</h5>

								<v-text-field
									v-model="$v.documentsModel.title_ru.$model"
									:error="$v.documentsModel.title_ru.$error"
									:readonly="TYPE === 'Read'"
									outlined
									hide-details
								>
								</v-text-field>
							</div>
						</v-col>

						<v-col md="4">
							<div class="app-form-group app-form-group__small no-shadow mb-2">
								<h5 class="font-600 dark-text mb-1">Hujjat nomi (EN)</h5>

								<v-text-field
									v-model="$v.documentsModel.title_en.$model"
									:error="$v.documentsModel.title_en.$error"
									:readonly="TYPE === 'Read'"
									outlined
									hide-details
								>
								</v-text-field>
							</div>
						</v-col>

						<v-col md="4">
							<div class="app-form-group app-form-group__small no-shadow mb-2">
								<h5 class="font-600 dark-text mb-1">Yangilash davriyligi (UZ)</h5>

								<v-text-field
									v-model="documentsModel.renewal_period_uz"
									:readonly="TYPE === 'Read'"
									outlined
									hide-details
								>
								</v-text-field>
							</div>
						</v-col>

						<v-col md="4">
							<div class="app-form-group app-form-group__small no-shadow mb-2">
								<h5 class="font-600 dark-text mb-1">Yangilash davriyligi (RU)</h5>

								<v-text-field
									v-model="documentsModel.renewal_period_ru"
									:readonly="TYPE === 'Read'"
									outlined
									hide-details
								>
								</v-text-field>
							</div>
						</v-col>

						<v-col md="4">
							<div class="app-form-group app-form-group__small no-shadow mb-2">
								<h5 class="font-600 dark-text mb-1">Yangilash davriyligi (EN)</h5>

								<v-text-field
									v-model="documentsModel.renewal_period_en"
									:readonly="TYPE === 'Read'"
									outlined
									hide-details
								>
								</v-text-field>
							</div>
						</v-col>
						<!--						<v-col md='4'>-->
						<!--							<div class='app-form-group app-form-group__small no-shadow mb-2'>-->
						<!--								<h5 class='font-600 dark-text mb-1'>Hujjatlar</h5>-->

						<!--								<multiple-file-upload-->
						<!--									ref='multipleFile'-->
						<!--									:disabled="TYPE === 'Read'"-->
						<!--									:value='documentsModel.attachments'-->
						<!--								/>-->

						<!--							</div>-->
						<!--						</v-col>-->
					</v-row>

					<div class="d-flex align-center my-8">
						<h4 class="text--primary text-uppercase font-700 mr-4">
							Fayllarni qo'shish
						</h4>

						<v-divider style="border-color: rgb(var(--border-color), 1)"></v-divider>
					</div>

					<template>
						<v-row>
							<v-col md="4">
								<div class="app-form-group app-form-group__small no-shadow mb-2">
									<h5 class="font-600 dark-text mb-1">
										1. Fayl qo'shish
									</h5>
									<multiple-file-upload
										ref="multipleFile"
										@emit:up="upload"
										:value="documentFile"
									/>
								</div>
							</v-col>
						</v-row>
					</template>

					<div class="d-flex align-center my-8">
						<h4 class="text--primary text-uppercase font-700 mr-4">
							Linklar qo'shish
						</h4>

						<v-divider style="border-color: rgb(var(--border-color), 1)"></v-divider>
					</div>

					<template>
						<v-row>
							<v-col md="3">
								<div class="app-form-group app-form-group__small no-shadow mb-2">
									<h5 class="font-600 dark-text mb-1">Fayl linki</h5>

									<v-text-field
										v-model="generatedLinksModel.link"
										:readonly="TYPE === 'Read'"
										outlined
										hide-details
									>
									</v-text-field>
								</div>
							</v-col>

							<v-col md="3">
								<div class="app-form-group app-form-group__small no-shadow mb-2">
									<h5 class="font-600 dark-text mb-1">Fayl extension</h5>

									<v-text-field
										v-model="generatedLinksModel.extension"
										:readonly="TYPE === 'Read'"
										outlined
										hide-details
									>
									</v-text-field>
								</div>
							</v-col>

							<v-col md="2">
								<v-btn
									@click="updatePropGlobally"
									:disabled="!documentsModel.generated_links.length"
									min-width="155"
									min-height="45"
									depressed
									color="primary"
									class="mt-6"
								>
									<span
										class="text-transform-reset reset-size font-600 text-white mr-3">{{ $t('Dashboard.update') }}</span>
									<edit2-icon size="1.3x" class="text-white"></edit2-icon>
								</v-btn>
							</v-col>

							<v-col md="2">
								<v-btn
									@click="addLinks"
									min-width="155"
									min-height="45"
									depressed
									color="primary"
									class="mt-6"
								>
									<span
										class="text-transform-reset reset-size font-600 text-white mr-3">{{ $t('Dashboard.add_new') }}</span>
									<plus-circle-icon size="1.3x" class="text-white"></plus-circle-icon>
								</v-btn>
							</v-col>
						</v-row>
						<v-row>
							<template v-for="(item, index) in documentsModel.generated_links">
								<v-col md="2" :key="item.id">
									<div class="credit-widget pa-5 rounded-lg d-flex align-center overflow-hidden p-relative">
										<span class="text--h4 dark-text font-600 d-block">{{ item.extension }}</span>
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

												<span>{{ $t("Dashboard.update") }}</span>
											</v-tooltip>

											<v-tooltip top color="danger">
												<template v-slot:activator="{ on, attrs }">
													<v-btn
														@click="deleteProp(index)"
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
														<trash2-icon size="1.3x"
														             class="text-white d-block"></trash2-icon>
													</v-btn>
												</template>

												<span>{{ $t("Dashboard.delete") }}</span>
											</v-tooltip>
										</div>
									</div>
								</v-col>

							</template>
						</v-row>
					</template>
				</div>

				<v-row>
					<v-col md="4">
						<div class="mt-8">
							<go-back-button />
							<template v-if="TYPE === 'Create'">
								<send-button @emit:up="send" :text="$t('Dashboard.create')" />
							</template>

							<template v-else-if="TYPE === 'Update'">
								<send-button @emit:up="update" :text="$t('Dashboard.update')" />
							</template>
						</div>
					</v-col>
				</v-row>
			</div>
		</app-card>
	</div>
</template>

<script>
	import { required } from "vuelidate/lib/validators"
	import { ChevronDownIcon, PlusCircleIcon, Edit2Icon, Trash2Icon } from "vue-feather-icons"
	import SendButton from "../../../../BaseComponents/SendButton"
	import GoBackButton from "../../../../BaseComponents/GoBackButton"
	import AppCard from "@/views/Admin/BaseComponents/AppCard"
	import MultipleFileUpload from "@/views/Admin/BaseComponents/MultipleFileUpload"
	import FileUpload from "../../../../BaseComponents/FileUpload"

	export default {
		name: "OpenInformationForm",
		components: {
			AppCard,
			ChevronDownIcon,
			PlusCircleIcon,
			Edit2Icon,
			Trash2Icon,
			SendButton,
			GoBackButton,
			MultipleFileUpload,
			FileUpload
		},
		props: {
			TYPE: {
				type: String,
				default: ""
			}
		},
		data() {
			return {
				documentFile: null,
				documentsModel: {
					title_uz: "",
					title_ru: "",
					title_en: "",
					attachments: [],
					renewal_period_uz: null,
					renewal_period_ru: null,
					renewal_period_en: null,
					generated_links: []
				},
				generatedLinksModel: {
					link: "",
					extension: ""
				}
			}
		},
		validations: {
			documentsModel: {
				title_uz: { required },
				title_ru: { required },
				title_en: { required }
			}
		},
		mounted() {
			if (this.$route.params.id) {
				this.getOne()
			}
		},
		methods: {
			send() {
				// const { multipleFile } = this.$refs
				//
				// multipleFile.fileList.forEach(file => {
				// 	this.documentsModel.attachments.push({
				// 		id: file.id
				// 	})
				// })

				this.$http.post(`${this.$store.state.auth.COMPANY_ID}/bank/open_documents/`, this.documentsModel)
					.then(({ data }) => {
						this.$toast.success("Yaratildi")

						setTimeout(() => {
							this.$router.push({ name: "OtherSectionOpenInformationList" })
						}, 1500)
					})
					.catch((error) => {
						this.$toast.error("Yaratishda xatolik")
					})
			},
			/*
			*
			* */
			update() {

				this.$http.put(`${this.$store.state.auth.COMPANY_ID}/bank/open_documents/${this.$route.params.id}`, this.documentsModel)
					.then((response) => {
						this.$toast.success("Yangilandi")
						setTimeout(() => {
							this.$router.push({ name: "OtherSectionOpenInformationList" })
						}, 1500)
					})
					.catch((error) => {
						this.$toast.error("Yangilashda xatolik!")
					})
			},
			/*
			*
			* */
			getOne() {
				this.$http.get(`${this.$store.state.auth.COMPANY_ID}/bank/open_documents/${this.$route.params.id}`)
					.then(({ data }) => {
						const { multipleFile } = this.$refs
						this.documentsModel = data
					})
			},
			/*
			*
			* */
			upload(files) {
				this.documentsModel.attachments = []

				files.forEach(file => {
					this.documentsModel.attachments.push({
						id: file.id
					})
				})
			},
			/*
			*
			* */
			addLinks() {
				this.documentsModel.generated_links.push({
					link: this.generatedLinksModel.link,
					extension: this.generatedLinksModel.extension
				})
				this.generatedLinksModel.link = ""
				this.generatedLinksModel.extension = ""
			},
			/*
			*
			* */
			propUpdate(item) {
				this.generatedLinksModel = { ...item };
			},
			/*
			*
			* */
			deleteProp(index){
				if (!confirm(`O'chirishni xoxlaysizmi ?`)) {
					return void 0;
				}
				let array = this.documentsModel.generated_links;

				// let index = array.findIndex(x => x.link === item.link)
				//
				if (index > -1){
					try {
						array.splice(index, 1)

						this.$toast.success("O'chirildi!")
					}catch (err){
						this.$toast.error(err)
					}

				}
			},
			/*
			*
			* */
			updatePropGlobally(){
				let array = this.documentsModel.generated_links;

				// Find index of specified object
				let index = array.findIndex(x => x.link === this.generatedLinksModel.link)

				// Update array objects with new data
				try {
					array[index].link = this.generatedLinksModel.link;
					array[index].extension = this.generatedLinksModel.extension

					this.$toast.success("Link yangilandi!")
				}
				catch (err){
					this.$toast.error("Yangilash uchun tanlang!")
				}

				// Delete selected object from array if user selects one of them

				// if (index > -1){
				// 	array.splice(index, 1);
				// // Add new object to array
				// 	array.push({
				// 		link: this.generatedLinksModel.link,
				// 		extension: this.generatedLinksModel.extension
				// 	})
				// }

			}
		}
	}
</script>

<style>

</style>
