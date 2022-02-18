<template>
	<div class="about-view">
		<div class="view-toolbar mt-16">
			<v-container class="py-0">
				<div class="app-tab-header d-flex">
					<div
						class="tab-header-items text-center mr-7"
						:class="{'active' : missionRoute}"
						data-item="header"
					>
						<a
							class="
                                navigation-link navigation-link__hover
                                p-relative
                                text--h4
                                py-6
                                font-600
                                d-inline-block
                            "
						>
							<span><I18nVue t="AboutBank.GeneralInformation.tab1" /> </span>
						</a>
					</div>

					<div class="tab-header-items text-center mr-7" data-item="header">
						<a
							class="
                                navigation-link navigation-link__hover
                                p-relative
                                text--h4
                                py-6
                                font-600
                                d-inline-block
                            "
						>
                            <span>
                                <I18nVue t="AboutBank.GeneralInformation.tab2" />
                            </span>
						</a>
					</div>

					<div
						class="tab-header-items text-center mr-7"
						data-item="header"
						:class="{'active' : businessRoute}"
					>
						<a
							class="
                                navigation-link navigation-link__hover
                                p-relative
                                text--h4
                                py-6
                                font-600
                                d-inline-block
                            "
						>
                            <span>
                                <I18nVue t="AboutBank.GeneralInformation.tab3" />
                            </span>
						</a>
					</div>

					<div
						class="tab-header-items text-center mr-7"
						:class="{'active' : chairmanRoute}"
						data-item="header"
					>
						<a
							class="
                                navigation-link navigation-link__hover
                                p-relative
                                text--h4
                                py-6
                                font-600
                                d-inline-block
                            "
						>
                            <span>
                                <I18nVue t="AboutBank.GeneralInformation.tab4" />
                            </span>
						</a>
					</div>
				</div>
			</v-container>
		</div>

		<div class="view-toolbar-content py-15 overflow-hidden">
			<v-container class="py-0">
				<div class="app-tab-content p-relative">
					<div
						class="tab-content-items"
						:class="{'active' : missionRoute}"
						data-item="content"
					>
						<h1 class="font-600 dark-text">
							<I18nVue t="AboutBank.GeneralInformation.bank_functions" />
						</h1>

						<h4 class="dark-text mt-3 mb-10">
							<I18nVue t="AboutBank.GeneralInformation.bank_functions_sub" />
						</h4>

						<h3 class="font-600 dark-text mb-4">
							<I18nVue t="AboutBank.GeneralInformation.title" />
						</h3>

						<div class="credit-widget pa-4 pa-sm-8 rounded-lg overflow-hidden mb-md-15 mb-5">
							<h3 class="font-600 dark-text mb-4">
								<I18nVue t="AboutBank.GeneralInformation.header1" />
							</h3>
							<div class="app-ul">
								<ul>
									<li>
										<I18nVue t="AboutBank.GeneralInformation.header1_li1" />
									</li>
									<li>
										<I18nVue t="AboutBank.GeneralInformation.header1_li2" />
									</li>
								</ul>
							</div>
						</div>

						<div class="credit-widget pa-4 pa-sm-8 rounded-lg overflow-hidden mb-md-15 mb-5">
							<h3 class="font-600 dark-text mb-4">
								<I18nVue t="AboutBank.GeneralInformation.header2" />
							</h3>
							<div class="app-ul">
								<ul>
									<li>
										<I18nVue t="AboutBank.GeneralInformation.header2_li1" />
									</li>
									<li>
										<I18nVue t="AboutBank.GeneralInformation.header2_li2" />
									</li>
								</ul>
							</div>
						</div>

						<div class="credit-widget pa-4 pa-sm-8 rounded-lg overflow-hidden mb-md-15 mb-5">
							<h3 class="font-600 dark-text mb-4">
								<I18nVue t="AboutBank.GeneralInformation.header3" />
							</h3>
							<div class="app-ul">
								<ul>
									<li>
										<I18nVue t="AboutBank.GeneralInformation.header3_li1" />
									</li>
								</ul>
							</div>
						</div>

						<div class="credit-widget pa-4 pa-sm-8 rounded-lg overflow-hidden mb-md-15 mb-5">
							<h3 class="font-600 dark-text mb-4">
								<I18nVue t="AboutBank.GeneralInformation.header4" />
							</h3>
							<div class="app-ul">
								<ul>
									<li>
										<I18nVue t="AboutBank.GeneralInformation.header4_li1" />
									</li>
								</ul>
							</div>
						</div>

						<div class="credit-widget pa-4 pa-sm-8 rounded-lg overflow-hidden mb-md-15 mb-5">
							<h3 class="font-600 dark-text mb-4">
								<I18nVue t="AboutBank.GeneralInformation.header5" />
							</h3>
							<div class="app-ul">
								<ul>
									<li>
										<I18nVue t="AboutBank.GeneralInformation.header5_li1" />
									</li>
								</ul>
							</div>
						</div>

						<div class="credit-widget pa-4 pa-sm-8 rounded-lg overflow-hidden mb-md-15 mb-5">
							<h3 class="font-600 dark-text mb-4">
								<I18nVue t="AboutBank.GeneralInformation.header6" />
							</h3>
							<div class="app-ul">
								<ul>
									<li>
										<I18nVue t="AboutBank.GeneralInformation.header6_li1" />
									</li>
								</ul>
							</div>
						</div>

						<div class="credit-widget pa-4 pa-sm-8 rounded-lg overflow-hidden mb-md-15 mb-5">
							<h3 class="font-600 dark-text mb-4">
								<I18nVue t="AboutBank.GeneralInformation.header7" />
							</h3>
							<div class="app-ul">
								<ul>
									<li>
										<I18nVue t="AboutBank.GeneralInformation.header7_li1" />
									</li>
								</ul>
							</div>
						</div>

						<div class="credit-widget pa-4 pa-sm-8 rounded-lg overflow-hidden mb-md-15 mb-5">
							<h3 class="font-600 dark-text mb-4">
								<I18nVue t="AboutBank.GeneralInformation.header8" />
							</h3>
							<div class="app-ul">
								<ul>
									<li>
										<I18nVue t="AboutBank.GeneralInformation.header8_li1" />
									</li>
								</ul>
							</div>
						</div>

						<div class="credit-widget pa-4 pa-sm-8 rounded-lg overflow-hidden mb-md-15 mb-5">
							<h3 class="font-600 dark-text mb-4">
								<I18nVue t="AboutBank.GeneralInformation.header9" />
							</h3>
							<div class="app-ul">
								<ul>
									<li>
										<I18nVue t="AboutBank.GeneralInformation.header9_li1" />
									</li>
								</ul>
							</div>
						</div>
					</div>

					<div class="tab-content-items" data-item="content">
						<h2 class="font-600 dark-text">
							<I18nVue t="AboutBank.GeneralInformation.tab2_header" />
						</h2>

						<v-divider style="border-color: rgba(var(--border-color), 1)" class="mt-5 mb-8"></v-divider>

						<v-row>
							<v-col md="6" v-for='(item, index) in charterList'>
								<a
									target="_blank"
									rel="noopener noreferrer"
									:href='$http.defaults.baseURL + item.file.url'
									class="
                                        app-slide-card
                                        pa-6
                                        mb-6
                                        rounded-lg
                                        overflow-hidden
                                        p-relative
                                        d-block
                                        text-decoration-none
                                    "
									style="min-height: auto"
									:key="index"
								>
									<div class="d-flex align-center">
										<div class="mr-5 p-relative">
											<v-avatar color="#fff" size="75">
												<svg id="icon-file" viewBox="0 0 64 64" class="size-lg">
													<path
														d="M53.98 9.143h-3.97c-.082 0-.155.028-.232.047V5.023C49.778 2.253 47.473 0 44.64 0H10.217C7.384 0 5.08 2.253 5.08 5.023v46.843c0 2.77 2.305 5.023 5.138 5.023h6.037v2.268c0 2.67 2.216 4.843 4.941 4.843H53.98c2.725 0 4.942-2.173 4.942-4.843v-45.17c0-2.671-2.217-4.844-4.942-4.844zM7.11 51.866V5.023c0-1.649 1.394-2.991 3.106-2.991H44.64c1.712 0 3.106 1.342 3.106 2.99v46.844c0 1.649-1.394 2.991-3.106 2.991H10.217c-1.712 0-3.106-1.342-3.106-2.99zm49.778 7.29c0 1.551-1.306 2.812-2.91 2.812H21.195c-1.604 0-2.91-1.26-2.91-2.811v-2.268H44.64c2.833 0 5.138-2.253 5.138-5.023V11.128c.077.018.15.047.233.047h3.968c1.604 0 2.91 1.26 2.91 2.811v45.17z"
													></path>
													<path
														d="M38.603 13.206H16.254a1.015 1.015 0 1 0 0 2.032h22.35a1.015 1.015 0 1 0 0-2.032zM38.603 21.333H16.254a1.015 1.015 0 1 0 0 2.032h22.35a1.015 1.015 0 1 0 0-2.032zM38.603 29.46H16.254a1.015 1.015 0 1 0 0 2.032h22.35a1.015 1.015 0 1 0 0-2.032zM28.444 37.587h-12.19a1.015 1.015 0 1 0 0 2.032h12.19a1.015 1.015 0 1 0 0-2.032z"
													></path>
												</svg>
											</v-avatar>
										</div>

										<div class="flex-1">
											<h3 class="dark-text font-600">
												<I18nVue :uz='item.title_uz' :ru='item.title_ru' :en='item.title_en'/>
											</h3>
										</div>
										<div class='download-icon pr-10 transition-all'>
											<download-icon size='1.8x' class='custom-class'></download-icon>
										</div>
									</div>
								</a>
							</v-col>
						</v-row>
					</div>

					<div
						class="tab-content-items"
						:class="{'active' : businessRoute}"
						data-item="content"
					>
						<h2 class="font-600 dark-text">
							<I18nVue t="AboutBank.GeneralInformation.tab3_header" />
						</h2>

						<v-divider style="border-color: rgba(var(--border-color), 1)" class="mt-5 mb-8"></v-divider>

						<v-row>
							<v-col md="6" v-for='item in planList'>
								<a
									target="_blank"
									rel="noopener noreferrer"
									:href='$http.defaults.baseURL + item.file.url'
									class="
                                        app-slide-card
                                        pa-6
                                        mb-6
                                        rounded-lg
                                        overflow-hidden
                                        p-relative
                                        d-block
                                        text-decoration-none
                                    "
									style="min-height: auto"
								>
									<div class="d-flex align-center">
										<div class="mr-5 p-relative">
											<v-avatar color="#fff" size="75">
												<svg id="icon-file" viewBox="0 0 64 64" class="size-lg">
													<path
														d="M53.98 9.143h-3.97c-.082 0-.155.028-.232.047V5.023C49.778 2.253 47.473 0 44.64 0H10.217C7.384 0 5.08 2.253 5.08 5.023v46.843c0 2.77 2.305 5.023 5.138 5.023h6.037v2.268c0 2.67 2.216 4.843 4.941 4.843H53.98c2.725 0 4.942-2.173 4.942-4.843v-45.17c0-2.671-2.217-4.844-4.942-4.844zM7.11 51.866V5.023c0-1.649 1.394-2.991 3.106-2.991H44.64c1.712 0 3.106 1.342 3.106 2.99v46.844c0 1.649-1.394 2.991-3.106 2.991H10.217c-1.712 0-3.106-1.342-3.106-2.99zm49.778 7.29c0 1.551-1.306 2.812-2.91 2.812H21.195c-1.604 0-2.91-1.26-2.91-2.811v-2.268H44.64c2.833 0 5.138-2.253 5.138-5.023V11.128c.077.018.15.047.233.047h3.968c1.604 0 2.91 1.26 2.91 2.811v45.17z"
													></path>
													<path
														d="M38.603 13.206H16.254a1.015 1.015 0 1 0 0 2.032h22.35a1.015 1.015 0 1 0 0-2.032zM38.603 21.333H16.254a1.015 1.015 0 1 0 0 2.032h22.35a1.015 1.015 0 1 0 0-2.032zM38.603 29.46H16.254a1.015 1.015 0 1 0 0 2.032h22.35a1.015 1.015 0 1 0 0-2.032zM28.444 37.587h-12.19a1.015 1.015 0 1 0 0 2.032h12.19a1.015 1.015 0 1 0 0-2.032z"
													></path>
												</svg>
											</v-avatar>
										</div>

										<div class="flex-1">
											<h3 class="dark-text font-600">
												<I18nVue :uz='item.title_uz' :ru='item.title_ru' :en='item.title_en'/>
											</h3>
										</div>
										<div class='download-icon pr-10 transition-all'>
											<download-icon size='1.8x' class='custom-class'></download-icon>
										</div>
									</div>
								</a>
							</v-col>

						</v-row>
					</div>

					<div
						class="tab-content-items"
						:class="{'active' : chairmanRoute}"
						data-item="content"
					>
						<v-row>
							<v-col md="1">
								<img
									src="/images/left-quote.svg"
									alt="Quote icon"
									class="size-xl-2 d-block"
									style="opacity: 0.25"
								/>
							</v-col>

							<v-col md="10">
								<h5 class="font-700 dark-text">
									<I18nVue t="AboutBank.GeneralInformation.tab4_header" />
								</h5>
								<h5 class="font-700 dark-text mb-2">
									<I18nVue t="AboutBank.GeneralInformation.tab4_header2" />
								</h5>

								<p>
									<I18nVue t="AboutBank.GeneralInformation.p1" />
								</p>

								<p>
									<I18nVue t="AboutBank.GeneralInformation.p2" />
								</p>

								<p>
									<I18nVue t="AboutBank.GeneralInformation.p3" />
								</p>

								<p>
									<I18nVue t="AboutBank.GeneralInformation.p4" />
								</p>

								<p>
									<I18nVue t="AboutBank.GeneralInformation.p5" />
								</p>

								<p>
									<I18nVue t="AboutBank.GeneralInformation.p6" />
								</p>

								<p>
									<I18nVue t="AboutBank.GeneralInformation.p7" />
								</p>

								<div class="d-flex align-center">
									<v-divider style="border-color: rgba(var(--border-color), 1)" />
									<div class="ml-8">
										<h5 class="font-700 dark-text">
											<I18nVue t="AboutBank.GeneralInformation.sincerely" />
										</h5>
										<h5 class="font-700 dark-text mb-2">
											<I18nVue t="AboutBank.GeneralInformation.sincerely2" />
										</h5>
									</div>
								</div>
							</v-col>

							<v-col md="1" class="d-flex">
								<img
									src="/images/right-quote.svg"
									alt="Quote icon"
									class="size-xl-2 d-block ml-auto mt-auto"
									style="opacity: 0.25"
								/>
							</v-col>
						</v-row>
					</div>
				</div>
			</v-container>
		</div>
	</div>
</template>

<script>
	import { DownloadIcon, ChevronDownIcon, FileTextIcon } from 'vue-feather-icons'
import { appTab } from "@/utils/frontend";
import I18nVue from "@/I18nVue";

export default {
	name: "index",
	components: {
		I18nVue,
		DownloadIcon,
		ChevronDownIcon,
		FileTextIcon
	},
	data() {
		return {
			missionRoute: false,
			businessRoute: false,
			chairmanRoute: false,

			planList: {},
			charterList: {}
		}
	},
	watch: {
		'$route'() {
			this.setActiveRoute()
		}
	},
	mounted() {
		this.setActiveRoute()

		const $tabHeaderItems = document.querySelectorAll("[data-item=\"header\"]");
		const $tabContentItems = document.querySelectorAll("[data-item=\"content\"]");

		appTab($tabHeaderItems, $tabContentItems);

		this.getBankPlanList();
		this.getBankCharterList();
	},
	methods: {
		/*
		*
		* */
		setActiveRoute() {
			switch (this.$route.name) {
				case "Mission" :
					this.missionRoute = true
					this.businessRoute = this.chairmanRoute = false
					break;
				case "BusinessPlan" :
					this.businessRoute = true
					this.chairmanRoute = this.missionRoute = false
					break;
				case "ChairmanBoard" :
					this.chairmanRoute = true
					this.missionRoute = this.businessRoute = false
					break;
				default :
					break;
			}
		},
		/*
		*
		* */
		getBankPlanList(){
			this.$http.get(`/1/bank/documents/`, {
				params: {
					ordering: 'id',
					type: 'plan'
				}
			})
				.then(({ data }) => {
					this.planList = data.results;
				})
		},
		/*
		*
		* */
		getBankCharterList(){
			this.$http.get(`/1/bank/documents/`, {
				params: {
					ordering: 'id',
					type: 'nizom'
				}
			})
				.then(({ data }) => {
					this.charterList = data.results;
				})
		}
	}
};
</script>

<style></style>
