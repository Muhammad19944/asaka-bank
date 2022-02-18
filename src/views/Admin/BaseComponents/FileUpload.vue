<template>
    <div class="app-form-group app-form-group__small no-shadow mb-2">
        <h5 class="font-600 dark-text mb-1">
            {{ label }}

            <template v-if="subLabel">
                <span class="red--text">({{ subLabel }})</span>
            </template>
        </h5>

	    <div class="d-flex align-center">
	        <v-file-input
	            @change="upload"
	            v-model="file"
				:disabled="disabled || readonly"
				prepend-icon=""
				accept="image/png, image/jpeg, image/jpg, image/bmp"
				outlined
				hide-details
				class="file-uploader mr-2"
			>
				<template v-slot:append>
					<v-btn depressed color="rgba(var(--primary), 1)" style="margin-top: -6px">
						<span class="text-transform-reset text-white">{{ $t('Dashboard.upload_file') }}</span>
					</v-btn>
				</template>
			</v-file-input>

		    <template v-if="value">
			    <span class="d-none">{{ hidden }}</span>
			    <template v-if="fileThumb.visible">
				    <div class="file-upload-wrap rounded overflow-hidden p-relative">
					    <template v-if="!extension">
						    <img :src="$http.defaults.baseURL + fileThumb.url" alt="Card image" class="d-block img-cover"/>

<!--						    <a-->
<!--							    :href="$http.defaults.baseURL + fileThumb.url"-->
<!--							    download-->
<!--							    target="_blank"-->
<!--							    rel="noopener noreferrer"-->
<!--							    class="rounded-circle d-flex align-center justify-center outline-transparent p-absolute w-100 h-100"-->
<!--							    style="top: 0; z-index: 1;"-->
<!--						    >-->
<!--							    <download-icon size="1.2x" class="text-white d-block"/>-->
<!--						    </a>-->
					    </template>

					    <template v-else>
						    <a href="#" class="border-all d-flex align-center justify-center w-100 h-100 rounded">
							    <file-text-icon size="1.5x" class="grey--text"/>
						    </a>
					    </template>

					    <div class="file-upload-actions p-absolute w-100 h-100 d-flex align-center justify-space-around px-2 transition-ease-in-out">
<!--						    <template v-if="extension">-->
							    <a
								    :href="$http.defaults.baseURL + fileThumb.url"
								    download
								    target="_blank"
								    rel="noopener noreferrer"
								    class="rounded-circle d-flex align-center justify-center outline-transparent"
							    >
								    <download-icon size="1.2x" class="text-white d-block"/>
							    </a>
<!--						    </template>-->

						    <template v-if="!readonly">
							    <button
								    @click="deleteFile"
								    type="button"
								    class="rounded-circle d-flex align-center justify-center outline-transparent"
							    >
								    <trash2-icon size="1.1x" class="text-white d-block"/>
							    </button>
						    </template>
					    </div>
				    </div>
			    </template>
		    </template>
	    </div>
	</div>
</template>

<script>
import {EyeIcon, Trash2Icon, FileTextIcon, DownloadIcon} from 'vue-feather-icons'

export default {
	name: "FileUpload",
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
            type: Object,
            default: () => {}
        },
		readonly: {
			type: Boolean,
			default: false
		}
	},
	components: {
		EyeIcon,
		Trash2Icon,
		FileTextIcon,
		DownloadIcon
	},
	computed: {
		extension() {
			return ['pdf', 'PDF', 'doc', 'docx', 'DOC', 'csv', 'CSV', 'xls', 'XLS'].includes(this.fileThumb.url.slice(-3))
		},

		hidden() {
			return {
				url: this.fileThumb.url = this.value.url,
				visible: this.fileThumb.visible = true
			}
		}
	},
    watch: {
        'value'(val) {
	        if(val) {
		        this.fileThumb.visible = true
                this.fileThumb.url = val.url
            }
        }
    },
	data() {
		return {
			template: '',
			file: [],
			fileThumb: {
				url: '',
				visible: false
			},
			fileList: []
		}
	},
	methods: {
		/*
		*
		* */
		upload(files) {
			let formData = new FormData()
			formData.append('file', files)

			this.$http
				.post('/upload/', formData)
				.then(({data}) => {
					this.$toast.success(`Rasm yuklandi`)
					this.$emit('emit:up', data)

					// console.log(data);

					this.fileThumb.url = data.url
					this.fileThumb.visible = true
				})
				.catch(() => this.$t("Dashboard.e"))
		},
		/*
		*
		* */
		deleteFile(event) {
			if (!confirm(this.$t("Dashboard.d"))) {
				return void 0
			}

			this.fileThumb.visible = false
			this.fileThumb.url = ''
			this.file = []
		}
	}
}
</script>
