<template>
	<v-row>
		<v-col v-if='documents' md='6'>
			<h2 class='font-600 dark-text mb-8'>
				<I18nVue t="Cards.detail.required_documents" />
			</h2>
			<template v-for='item of documents'>
				<div
					v-if='item.for_download === null'
					class='credit-widget pa-7 rounded-lg overflow-hidden d-flex align-center mb-8'
				>
					<v-avatar size='56' class='mr-5'>
						<svg class='size-lg' id='icon-file' viewBox='0 0 64 64'>
							<path
								d='M53.98 9.143h-3.97c-.082 0-.155.028-.232.047V5.023C49.778 2.253 47.473 0 44.64 0H10.217C7.384 0 5.08 2.253 5.08 5.023v46.843c0 2.77 2.305 5.023 5.138 5.023h6.037v2.268c0 2.67 2.216 4.843 4.941 4.843H53.98c2.725 0 4.942-2.173 4.942-4.843v-45.17c0-2.671-2.217-4.844-4.942-4.844zM7.11 51.866V5.023c0-1.649 1.394-2.991 3.106-2.991H44.64c1.712 0 3.106 1.342 3.106 2.99v46.844c0 1.649-1.394 2.991-3.106 2.991H10.217c-1.712 0-3.106-1.342-3.106-2.99zm49.778 7.29c0 1.551-1.306 2.812-2.91 2.812H21.195c-1.604 0-2.91-1.26-2.91-2.811v-2.268H44.64c2.833 0 5.138-2.253 5.138-5.023V11.128c.077.018.15.047.233.047h3.968c1.604 0 2.91 1.26 2.91 2.811v45.17z'
							/>
							<path
								d='M38.603 13.206H16.254a1.015 1.015 0 1 0 0 2.032h22.35a1.015 1.015 0 1 0 0-2.032zM38.603 21.333H16.254a1.015 1.015 0 1 0 0 2.032h22.35a1.015 1.015 0 1 0 0-2.032zM38.603 29.46H16.254a1.015 1.015 0 1 0 0 2.032h22.35a1.015 1.015 0 1 0 0-2.032zM28.444 37.587h-12.19a1.015 1.015 0 1 0 0 2.032h12.19a1.015 1.015 0 1 0 0-2.032z'
							/>
						</svg>
					</v-avatar>
					<h3 class="dark-text font-600">
						<I18nVue :uz="item.title_uz" :ru="item.title_ru" :en="item.title_en" />
						<br>
						<I18nVue classes='text-small font-italic' :uz="item.doc_name_uz" :ru="item.doc_name_ru" :en="item.doc_name_en" />
					</h3>
				</div>
			</template>

		</v-col>
		<v-col md='6'>
			<h2 class="font-600 dark-text mb-8">
				<I18nVue t="TariffsAndConditions.for_download" />
			</h2>
			<template v-for='item of documents'>
				<a
					v-if='item.for_download !== null'
					target='_blank'
					download
					class='app-slide-card pa-6 mb-6 rounded-lg overflow-hidden p-relative d-block text-decoration-none'
					style='min-height: auto'
					:href='$http.defaults.baseURL + item.for_download.url'
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
								<I18nVue :uz="item.title_uz" :ru="item.title_ru" :en="item.title_en" />
								<br>
								<I18nVue classes='text-small font-italic' :uz="item.doc_name_uz" :ru="item.doc_name_ru" :en="item.doc_name_en" />
							</h3>
						</div>
						<div class='download-icon pr-10 transition-all'>
							<download-icon size='1.8x' class='custom-class' />
						</div>
					</div>
				</a>
			</template>
		</v-col>
	</v-row>
</template>

<script>
import I18nVue from "@/I18nVue";
import { DownloadIcon } from "vue-feather-icons";

export default {
	name: "DocumentCard",
	components: { I18nVue, DownloadIcon },
	data() {
		return { documents: null };
	},
	mounted() {
		this.$http
			.get(`1/plastic_cards/${this.$route.params.id}/required_documents/`, {
				params: {
					category: 7
				}
			})
			.then(({ data }) => {
				this.documents = data.results;
			});
	}
};
</script>
