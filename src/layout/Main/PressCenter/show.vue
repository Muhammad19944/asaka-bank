<template>
	<div v-if="isLoaded" class="news-detail-view">
		<v-container>
			<div class="news-detail-content pb-10">
				<h1 class="dark-text font-600 text-extra-large-4">
					<I18nVue
						:en="newsDetailModel.title_en"
						:ru="newsDetailModel.title_ru"
						:uz="newsDetailModel.title_uz"
					/>
				</h1>
				<div class="app-news-editor">
					<div
						v-html="$i18n.locale === 'uz' ? newsDetailModel.description_uz : $i18n.locale === 'ru' ? newsDetailModel.description_ru : newsDetailModel.description_en"
						class="text--h4 mt-5"
					/>
					<template v-if="$route.params.id == 57">

						<v-col md='6'>
							<a
								target='_blank'
								download
								class='app-slide-card pa-6 mb-6 rounded-lg overflow-hidden p-relative d-block text-decoration-none'
								style='min-height: auto'
								href='https://back.asakabank.uz/media/files/%D0%A2%D0%97_%D0%BD%D0%B0_%D0%B0%D0%B2%D1%82%D0%BE%D0%BC%D0%B0%D1%82%D0%B8%D0%B7%D0%B0%D1%86%D0%B8%D1%8E_%D0%B4%D0%BB%D1%8F_%D1%81%D0%B0%D0%B9%D1%82%D0%B0_29_12_2021.pdf'
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
											<span v-if="$i18n.locale === 'ru'">ТЕХНИЧЕСКОЕ ЗАДАНИЕ на оказания услуг эксперта-консультанта по ИКТ для проведения автоматизации бизнес-процессов АО «Асакабанк»</span>
											<span v-if="$i18n.locale === 'uz'">"Asakabank" AJ biznes-jarayonlarini avtomatlashtirish uchun AKT bo'yicha ekspert-konsultant xizmatlarini ko'rsatish bo'yicha texnik topshiriq</span>
											<span v-if="$i18n.locale === 'en'">TERMS OF REFERENCE for the provision of services of an expert consultant on ICT for the automation of business processes of Asakabank JSC</span>
										</h3>
									</div>
									<div class='download-icon pr-10 transition-all'>
										<download-icon size='1.8x' class='custom-class'/>
									</div>
								</div>
							</a>
						</v-col>
					</template>

					<template v-if="$route.params.id == 110">

						<v-col md='6'>
							<a
								target='_blank'
								download
								class='app-slide-card pa-6 mb-6 rounded-lg overflow-hidden p-relative d-block text-decoration-none'
								style='min-height: auto'
								href='https://back.asakabank.uz/media/files/tender_110.docx'
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
											<span v-if="$i18n.locale === 'ru'">Программа наращивания институционального потенциала</span>
											<span v-if="$i18n.locale === 'uz'">Institutsional salohiyatni oshirish dasturi</span>
											<span v-if="$i18n.locale === 'en'">Institutional capacity building program</span>
										</h3>
									</div>
									<div class='download-icon pr-10 transition-all'>
										<download-icon size='1.8x' class='custom-class'/>
									</div>
								</div>
							</a>
						</v-col>
					</template>
				</div>

				<!--				<CoolLightBox-->
				<!--					:items="newsDetailModel.attachments"-->
				<!--					:index="index"-->
				<!--					@close="index = null">-->
				<!--				</CoolLightBox>-->

				<div class="images-wrapper d-flex flex-wrap mx-n1 mt-5">
					<div
						class="image border-all rounded p-relative ma-1 pointer overflow-hidden"
						v-for="(image, imageIndex) in newsDetailModel.attachments"
						:key="imageIndex"
						@click="index = imageIndex"
					>
						<img :src="image.src" class="p-absolute img-contain transition-all" alt="Gallery image">
					</div>
				</div>

				<div class="d-flex align-center mt-5">
					<div class="d-flex align-center mr-4">
						<clock-icon size="1x" class="dark-text mr-2"/>
						<span class="font-600 dark-grey">
							{{ newsDetailModel.date_added | filterDate }} {{
								newsDetailModel.created_date | filterTime
							}}
						</span>
					</div>

					<div class="d-flex align-center">
						<layout-icon size="1x" class="dark-text mr-2"/>

						<template v-if="newsDetailModel.category">
							<I18nVue
								classes="font-600 dark-grey"
								:en="newsDetailModel.category.name_en"
								:ru="newsDetailModel.category.name_ru"
								:uz="newsDetailModel.category.name_uz"
							/>
						</template>
					</div>
				</div>

				<!--TENDERLARDAGI ZAYAVKA QOLDIRISH-->
				<template v-if="newsDetailModel.category.id == 9">

				</template>
			</div>
		</v-container>
	</div>
</template>

<script>
import I18nVue from "@/I18nVue";
import AppBreadCrumb from "@/components/AppBreadCrumb";
import {
	Share2Icon,
	PrinterIcon,
	FacebookIcon,
	TwitterIcon,
	ClockIcon,
	LayoutIcon,
	DownloadIcon
} from "vue-feather-icons";

export default {
	name: "show",
	components: {
		I18nVue,
		AppBreadCrumb,
		Share2Icon,
		PrinterIcon,
		FacebookIcon,
		TwitterIcon,
		ClockIcon,
		LayoutIcon,
		DownloadIcon
	},
	data() {
		return {
			newsDetailModel: {
				category: {},
				attachments: []
			},
			index: null,
			isLoaded: false
		};
	},
	watch: {
		$route() {
			this.getOne();
		}
	},
	mounted() {
		this.getOne();

		setTimeout(() => {
			let iframe = document.querySelectorAll("iframe");

			iframe.forEach(item => {
				item.setAttribute("sandbox", "");
			});
		}, 1000);
	},
	methods: {
		getOne() {
			this.$http.get(`/1/news/${this.$route.params.id}/`).then(({data}) => {
				this.newsDetailModel = data;

				this.isLoaded = true

				// this.newsDetailModel.attachments.forEach(item => {
				// 	item.src = this.$http.defaults.baseURL + "/" + item.url;
				// });
			});
		}
	}
};
</script>

<style>
.images-wrapper .image {
	width: 22.5%;
	padding-top: 16.66666%;
}

.images-wrapper .image img {
	top: 0;
	left: 0;
}

.images-wrapper .image img:hover {
	transform: scale(1.1);
}

.news-detail-view .ql-video {
	width: 50vw;
	height: 40vh;
	align-items: center;
	justify-content: center;
	display: flex;
	margin: 2rem auto;
}
</style>
