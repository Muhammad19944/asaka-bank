<template>
	<div class="app-form-group app-form-group__small no-shadow mb-2">
		<h5 class="font-600 dark-text mb-1">
			{{ label }}

			<template v-if="subLabel">
				<span class="red--text">({{ subLabel }})</span>
			</template>
		</h5>

		<v-file-input
			@change="upload"
			v-model="file"
			:disabled="disabled"
			prepend-icon=""
			accept="image/png, image/jpeg, image/jpg, image/bmp"
			outlined
			hide-details
			multiple
			class="file-uploader"
		>
			<template v-slot:append>
				<v-btn
					:disabled="isLoading"
					depressed
					:loading="isLoading"
					color="rgba(var(--primary), 1)"
					style="margin-top: -6px">
					<span class="text-transform-reset text-white">{{ $t('Dashboard.upload_file') }}</span>
				</v-btn>
			</template>
		</v-file-input>
		<div class="upload-wrap d-flex flex-wrap mt-1 mx-n1" v-if="fileList.length">
			<template v-for="item in fileList">
				<div class="file-upload-wrap rounded overflow-hidden p-relative ma-1">
					<a class="border-all d-flex align-center justify-center w-100 h-100 rounded">
						<file-text-icon size="1.5x" class="grey--text"/>
					</a>

					<div class="file-upload-actions p-absolute w-100 h-100 d-flex align-center justify-space-around px-2 transition-ease-in-out">
						<a

							:href="$http.defaults.baseURL + item.url"
							:download="$http.defaults.baseURL + item.url"
							target="_blank"
							rel="noopener noreferrer"
							class="rounded-circle d-flex align-center justify-center outline-transparent"
							:class='disabled ? "disableClick" : ""'
						>
							<eye-icon size="1.2x" class="text-white d-block"/>
						</a>
					</div>
				</div>
			</template>
		</div>
	</div>
</template>

<script>
import {EyeIcon, Trash2Icon, FileTextIcon, DownloadIcon} from 'vue-feather-icons'

export default {
	name: "MultipleFileUpload",
	props: {
		label: {
			type: String
		},
		subLabel: {
			type: String,
			default: ''
		},
		disabled: {
			type: Boolean,
			default: false
		},
		value: {
			type: Array,
			default: () => []
		}
	},
	components: {
		EyeIcon,
		Trash2Icon,
		FileTextIcon,
		DownloadIcon
	},
	data() {
		return {
			file: [],
			fileList: [],
			isLoading: false
		}
	},
	watch: {
		'value'(value) {
			this.fileList = value
		}
	},
	methods: {
		/*
		*
		* */
		upload(files) {
			this.isLoading = true;

			let formData = new FormData()

			for( let i = 0; i < files.length; i++ ){
				let file = files[i];

				formData.append('file', file);
			}

			this.$http
				.post('/multiple_upload/', formData)
				.then(({data}) => {
					this.$toast.success(`Rasm yuklandi`);
					this.$emit('emit:up', data);
					this.isLoading = false;
					this.fileList = data;
				})
				.catch((err) => {
					this.$t('Dashboard.e')
				})
		},

		/*
		*
		* */
		download() {

		}
	}
}
</script>

<style>
.file-uploader.v-input--is-disabled .hide-clear-icon {
	background: #eee;
}
.disableClick{
	pointer-events: none;
}
</style>
