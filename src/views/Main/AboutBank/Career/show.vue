<template>
	<div class="career-show-view">
		<template v-if="isLoaded">
			<v-container>
				<h1 class="text--h2 font-600">{{ vacancyModel.name }}</h1>

				<h5 class="text--h5 font-600 mt-2">
					{{ vacancyModel.employment.name }}, {{ vacancyModel.schedule.name }}
				</h5>

				<h5 class="font-700 mt-5">
					{{ $t('Dashboard.branch.location') }}
				</h5>

				<span class="d-block">
					{{ $t('Services.Map.label') }}. {{ vacancyModel.area.name }}
				</span>

				<div class="app-ul my-6" v-html="vacancyModel.description"></div>

				<h1 class="text--h3 font-600">{{ $t('key_skills') }}</h1>

				<template v-for="skills in vacancyModel.key_skills">
					<v-chip
						class="mr-2 mt-2"
						color="danger"
						label
						text-color="white"
					>
						{{ skills.name }}
					</v-chip>
				</template>

				<v-row class="mt-5">
					<v-col md='6'>
						<div class='app-form-group'>
							<h4 class='font-600 dark-text'>
								{{ $t("Services.OpenCard.FISH") }}
							</h4>

							<v-divider class='mt-3 mb-7' style='border-color: rgba(var(--border-color), 1)' />

							<v-text-field
								v-model="$v.resumeRequestModel.full_name.$model"
								:error="$v.resumeRequestModel.full_name.$error"
								outlined
								hide-details
								:placeholder="$t('Services.OpenCard.FISH_sub')" />
						</div>
					</v-col>

					<v-col md='6'>
						<div class='app-form-group'>
							<h4 class='font-600 dark-text'>
								{{ $t("Services.OpenCard.phone") }}
							</h4>

							<v-divider class='mt-3 mb-7' style='border-color: rgba(var(--border-color), 1)' />

							<v-text-field
								v-model='$v.resumeRequestModel.phone_number.$model'
								:error='$v.resumeRequestModel.phone_number.$error'
								v-mask="'+998 (##) ### ## ##'"
								outlined
								hide-details
								:placeholder="$t('Services.OpenCard.phone_sub')"
							/>
						</div>
					</v-col>

					<v-col md='6'>
						<div class='app-form-group'>
							<h4 class='font-600 dark-text'>
								{{ $t("resume_file") }}
							</h4>

							<v-divider class='mt-3 mb-7' style='border-color: rgba(var(--border-color), 1)' />

							<v-file-input
								@change="getFile"
								v-model="$v.fileInputModel.$model"
								:error="$v.fileInputModel.$error"
								prepend-icon=''
								outlined
								hide-details
								:placeholder="$t('LastCorrections.upload_file')"
							>
								<template v-slot:prepend-inner>
									<file-text-icon size='1.5x' class='grey--text mr-2'></file-text-icon>
								</template>
							</v-file-input>
						</div>
					</v-col>

					<v-col md='6'>
						<div class='app-form-group'>
							<h4 class='font-600 dark-text'>
								{{ $t("Services.OpenCard.residence") }}
							</h4>

							<v-divider class='mt-3 mb-7' style='border-color: rgba(var(--border-color), 1)' />

							<v-select
								v-model="$v.resumeRequestModel.district.$model"
								:error="$v.resumeRequestModel.district.$error"
								:items="districtList"
								:item-text="$i18n.locale === 'uz' ? 'name_uz' : $i18n.locale === 'ru' ? 'name_ru' : 'name_en'"
								item-value="id"
								outlined
								hide-details
								:placeholder="$t('Services.OpenCard.residence')"
							>
								<template v-slot:append>
									<chevron-down-icon size='1.5x' class='grey--text' />
								</template>
							</v-select>
						</div>
					</v-col>

					<v-col sm="12">
						<v-btn
							@click="sendResume"
							target="_blank"
							rel="noopener noreferrer"
							color="danger"
							large
							elevation="0"
							class="mt-5"
						>
							<span class="text-white text-transform-reset text--h5">{{ $t('leave_resume') }}</span>
						</v-btn>
					</v-col>
				</v-row>
			</v-container>
		</template>
	</div>
</template>

<script>
import { FileTextIcon, ChevronDownIcon } from "vue-feather-icons"
import { required } from "vuelidate/lib/validators";

export default {
	name: "show",
	components: {
		FileTextIcon,
		ChevronDownIcon
	},
	data() {
		return {
			vacancyModel: null,
			isLoaded: false,
			districtList: [],
			fileInputModel: [],
			resumeRequestModel: {
				vacancy_id: this.$route.params.id,
				vacancy_title: "",
				full_name: "",
				district: null,
				phone_number: "",
				resume: null
			}
		}
	},
	validations: {
		resumeRequestModel: {
			district: { required },
			full_name: { required },
			phone_number: { required },
		},
		fileInputModel: { required }
	},
	mounted() {
		this.getOne()
		this.getDistrict()
	},
	methods: {
		getOne() {
			this.$http.get(`/1/active_vacancies/${this.$route.params.id}`)
			.then(({ data }) => {
				this.vacancyModel = data
				this.isLoaded = true
			})
		},
		/*
		*
		* */
		getDistrict() {
			this.$http.get("/1/district/", {
				params: {
					page_size: 500
				}
			}).then(({ data }) => {
				this.districtList = data.results;
			});
		},
		/*
		*
		* */
		getFile(file) {
			let formData = new FormData();
			formData.append("resume", file);

			this.$http
				.post("/upload/", formData)
				.then(({ data }) => {
					this.resumeRequestModel.resume = data.id;
				})
				.catch((err) => {
					console.log(err);
				});
		},
		/*
		*
		* */
		sendResume() {
			this.$v.$touch();

			if (this.$v.$invalid) {
				return;
			}

			this.resumeRequestModel.vacancy_title = this.vacancyModel.name
			// Удаляем плюс и пробелы из номера
			this.resumeRequestModel.phone_number = this.resumeRequestModel.phone_number.replace(/\D/g, "");

			this.$http.post("/job/application/create/", this.resumeRequestModel)
			.then(({ data }) => {
				this.$toast.success(this.$t("application_send"));

				// for (let key in this.resumeRequestModel) {
				// 	this.resumeRequestModel[key] = ""
				// }
				//
				// this.$v.resumeRequestModel.$reset();
			})
		}
	}
};
</script>

<style>

</style>
