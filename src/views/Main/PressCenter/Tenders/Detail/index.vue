<template>
	<div v-if="isLoaded" class="news-detail-view">
		<v-container>
			<div class="news-detail-content pb-10">
				<h1 class="dark-text font-600 text-extra-large-4">
					<I18nVue
						:en="tenderModel.title_en"
						:ru="tenderModel.title_ru"
						:uz="tenderModel.title_uz"
					/>
				</h1>
				<div class="app-news-editor mt-8">
					<v-row>
						<v-col v-for="item in tenderModel.bank_documents" md='6'>
							<a
								target='_blank'
								:href="$http.defaults.baseURL + item.file.url"
								download
								class='app-slide-card pa-6 mb-6 rounded-lg overflow-hidden p-relative d-block text-decoration-none'
								style='min-height: auto'
							>
								<div class='d-flex align-center'>
									<div class='mr-5 p-relative'>
										<v-avatar color='#fff' size='75'>
											<svg id='icon-file' viewBox='0 0 64 64' class='size-lg'>
												<path
													d='M53.98 9.143h-3.97c-.082 0-.155.028-.232.047V5.023C49.778 2.253 47.473 0 44.64 0H10.217C7.384 0 5.08 2.253 5.08 5.023v46.843c0 2.77 2.305 5.023 5.138 5.023h6.037v2.268c0 2.67 2.216 4.843 4.941 4.843H53.98c2.725 0 4.942-2.173 4.942-4.843v-45.17c0-2.671-2.217-4.844-4.942-4.844zM7.11 51.866V5.023c0-1.649 1.394-2.991 3.106-2.991H44.64c1.712 0 3.106 1.342 3.106 2.99v46.844c0 1.649-1.394 2.991-3.106 2.991H10.217c-1.712 0-3.106-1.342-3.106-2.99zm49.778 7.29c0 1.551-1.306 2.812-2.91 2.812H21.195c-1.604 0-2.91-1.26-2.91-2.811v-2.268H44.64c2.833 0 5.138-2.253 5.138-5.023V11.128c.077.018.15.047.233.047h3.968c1.604 0 2.91 1.26 2.91 2.811v45.17z'></path>
												<path
													d='M38.603 13.206H16.254a1.015 1.015 0 1 0 0 2.032h22.35a1.015 1.015 0 1 0 0-2.032zM38.603 21.333H16.254a1.015 1.015 0 1 0 0 2.032h22.35a1.015 1.015 0 1 0 0-2.032zM38.603 29.46H16.254a1.015 1.015 0 1 0 0 2.032h22.35a1.015 1.015 0 1 0 0-2.032zM28.444 37.587h-12.19a1.015 1.015 0 1 0 0 2.032h12.19a1.015 1.015 0 1 0 0-2.032z'></path>
											</svg>
										</v-avatar>
									</div>

									<div class='flex-1'>
										<h3 class='dark-text font-600'>
											<I18nVue
												:en="item.title_en"
												:ru="item.title_ru"
												:uz="item.title_uz"
											/>
										</h3>
									</div>
									<div class='download-icon pr-10 transition-all'>
										<download-icon size='1.8x' class='custom-class'/>
									</div>
								</div>
							</a>
						</v-col>

						<v-col md="6">
							<div class='app-form-group px-4'>
								<h2 class='font-600 dark-text'>
									{{ $t("application") }}
								</h2>
								<v-divider class='mt-1 mb-4' style='border-color: rgba(var(--border-color), 1)' />
									<v-text-field
										v-model="$v.applicationModel.organization_name.$model"
										:error="$v.applicationModel.organization_name.$error"
										outlined
										hide-details
										:placeholder="$t('LastCorrections.org_name')"
									/>
								<v-row class="mt-4">
									<v-col md="9">
										<multiple-file-upload
											ref="multipleFile"
											@emit:up="upload"
											:value="documentFiles"
										/>
									</v-col>
									<v-col md="3">
										<send-button
											@emit:up="send"
											class="ml-4 mt-1"
										/>
									</v-col>
								</v-row>
							</div>
						</v-col>
					</v-row>
				</div>
				<div class="d-flex align-center mt-5">
					<div class="d-flex align-center mr-4">
						<clock-icon size="1x" class="dark-text mr-2"/>
						<span class="font-600 dark-grey">
							{{ tenderModel.modified_date | filterDateAndTime }}
						</span>
					</div>
				</div>

				<!--TENDERLARDAGI ZAYAVKA QOLDIRISH-->
				<template>

				</template>
			</div>
		</v-container>
	</div>
</template>

<script>
import { ChevronRightIcon, DownloadIcon, ClockIcon, FileTextIcon } from 'vue-feather-icons'
import I18nVue from '@/I18nVue'
import MultipleFileUpload from "@/views/Admin/BaseComponents/MultipleFileUpload";
import SendButton from "@/views/Admin/BaseComponents/SendButton";
import { required } from "vuelidate/lib/validators";

export default {
	name: "index",
	components: {
		I18nVue,
		MultipleFileUpload,
		SendButton,
		ChevronRightIcon,
		DownloadIcon,
		ClockIcon,
		FileTextIcon
	},
	data() {
		return {
			tenderModel: {},
			isLoaded: false,

			documentFiles: [],

			applicationModel: {
				organization_name: '',
				tender_object: null,
				documents: []
			}
		}
	},
	validations: {
		applicationModel: {
			organization_name: { required }
		}
	},
	mounted() {
		this.getTenderDetail();
	},
	methods: {
		getTenderDetail() {
			this.$http.get(`/1/bank/finance_indication_title/${this.$route.params.id}`)
			.then(({ data }) => {
				this.tenderModel = data;
				this.isLoaded = true;
			})
		},
		/*
		*
		* */
		upload(files){

			this.applicationModel.documents = [];

			files.forEach(( item ) => {
				this.applicationModel.documents.push({
					id: item.id,
					url: item.url
				})
			})
		},
		send(){

			this.$v.$touch();

			if (this.$v.$invalid) {
				this.$toast.warning(this.$t("Dashboard.f"));
				return;
			}
			if (this.applicationModel.documents.length === 0){
				this.$toast.warning(`Iltimos hujjat yuklang`);
				return;
			}

			this.applicationModel.tender_object = this.$route.params.id;

			this.$http.post(`/1/tender_application/`, this.applicationModel)
			.then(({ data }) => {
				this.$toast.success(this.$t('application_sent'));
				console.log(data)
			})
		}
	}
}
</script>

<style scoped>

</style>
