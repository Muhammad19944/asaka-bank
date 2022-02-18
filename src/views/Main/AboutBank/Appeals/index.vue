<template>
	<div class='appeals-view'>
		<div class='view-toolbar mt-16'>
			<v-container class='py-0'>
				<div class='app-tab-header d-flex'>
					<div class='tab-header-items text-center mr-7 active' data-item='header'>
						<a class='navigation-link navigation-link__hover p-relative text--h4 py-6 font-600 d-inline-block'>
							<I18nVue t='AboutBank.Appeals.tab1' />
						</a>
					</div>
					<div class='tab-header-items text-center mr-7' data-item='header'>
						<a class='navigation-link navigation-link__hover p-relative text--h4 py-6 font-600 d-inline-block'>
							<I18nVue t='AboutBank.Appeals.tab2' />
						</a>
					</div>
					<div class='tab-header-items text-center mr-7' data-item='header'>
						<a class='navigation-link navigation-link__hover p-relative text--h4 py-6 font-600 d-inline-block'>
							<I18nVue t='AboutBank.Appeals.tab3' />
						</a>
					</div>
					<div class='tab-header-items text-center mr-7 ' data-item='header'>
						<a class='navigation-link navigation-link__hover p-relative text--h4 py-6 font-600 d-inline-block'>
							<I18nVue t='AboutBank.Appeals.tab4' />
						</a>
					</div>
					<div class='tab-header-items text-center mr-7' data-item='header'>
						<a class='navigation-link navigation-link__hover p-relative text--h4 py-6 font-600 d-inline-block'>
							<I18nVue t='AboutBank.Appeals.tab5' />
						</a>
					</div>
				</div>
			</v-container>
		</div>

		<div class='view-toolbar-content py-15 overflow-hidden'>
			<v-container class='py-0'>
				<div class='app-tab-content p-relative'>
					<div class='tab-content-items active' data-item='content'>
						<h4 class='font-700 dark-text mb-4'>
							<I18nVue t='AboutBank.Appeals.text1' />
						</h4>

						<div class="mb-8">
							<h5 class='font-600 mb-1'>
								<I18nVue t='AboutBank.Appeals.text2' />
							</h5>

							<h5 class='font-600 mb-1'>
								<I18nVue t='AboutBank.Appeals.text2_2' />
							</h5>

							<h5 class='font-600 mb-1'>
								<I18nVue t='AboutBank.Appeals.text2_3' />
							</h5>

							<h5 class='font-600 mb-1'>
								<I18nVue t='AboutBank.Appeals.text2_4' />
							</h5>

							<h5 class='font-600 mb-1'>
								<I18nVue t='AboutBank.Appeals.text2_5' />
							</h5>
						</div>

						<v-row>
							<v-col md='6'>
								<div class='credit-widget pa-8 rounded-lg overflow-hidden mb-8'>
									<h3 class='font-700 dark-text mb-3'>{{ $t("AboutBank.Appeals.text3") }}</h3>

									<p>
										<I18nVue t='AboutBank.Appeals.text4' />
									</p>

									<p>
										<I18nVue t='AboutBank.Appeals.text5' />
									</p>
								</div>

								<div class='credit-widget pa-8 rounded-lg overflow-hidden'>
									<h3 class='font-700 dark-text mb-3'>{{ $t("AboutBank.Appeals.text7_6") }}</h3>

									<p>
										<I18nVue t='AboutBank.Appeals.text7_7' />
									</p>

									<p>
										<I18nVue t='AboutBank.Appeals.text7_8' />
									</p>

									<p>
										<I18nVue t='AboutBank.Appeals.text7_9' />
									</p>
								</div>
							</v-col>

							<v-col md='6'>
								<div class='credit-widget pa-8 rounded-lg overflow-hidden mr-4'>
									<h3 class='font-700 dark-text mb-3'>{{ $t("AboutBank.Appeals.text6") }}</h3>

									<div class="mb-2">
										<strong class="font-700">
											<I18nVue t='AboutBank.Appeals.text7' />
										</strong>
										<I18nVue t="AboutBank.Appeals.text7_1" />
									</div>

									<div class="mb-2">
										<strong class="font-700">
											<I18nVue t='AboutBank.Appeals.text7_2' />
										</strong>
										<I18nVue t="AboutBank.Appeals.text7_3" />
									</div>

									<div class="mb-2">
										<strong class="font-700">
											<I18nVue t='AboutBank.Appeals.text7_4' />
										</strong>
										<I18nVue t="AboutBank.Appeals.text7_5" />
									</div>
								</div>
							</v-col>
						</v-row>
					</div>

					<div class='tab-content-items' data-item='content'>
						<h2 class='font-600 dark-text'>
							<I18nVue t='AboutBank.Appeals.text8' />
						</h2>

						<v-divider style='border-color: rgba(var(--border-color), 1)' class='mt-5 mb-8'></v-divider>

						<v-row>
							<template v-for='item in appealStatsList'>
								<v-col :key="item.id" md='6'>
									<a
										target='_blank'
										:href="$http.defaults.baseURL + item.file.url"
										class='
	                                        app-slide-card
	                                        pa-sm-6 pa-1
	                                        mb-6
	                                        rounded-lg
	                                        overflow-hidden
	                                        p-relative
	                                        d-block
	                                        text-decoration-none
	                                    '
										style='min-height: auto'
									>
										<div class="d-flex flex-wrap align-center">
											<div class="mr-5 p-relative">
												<v-avatar color="#fff" size="75">
													<svg id="icon-file" viewBox="0 0 64 64" class="size-lg">
														<path
															d="M53.98 9.143h-3.97c-.082 0-.155.028-.232.047V5.023C49.778 2.253 47.473 0 44.64 0H10.217C7.384 0 5.08 2.253 5.08 5.023v46.843c0 2.77 2.305 5.023 5.138 5.023h6.037v2.268c0 2.67 2.216 4.843 4.941 4.843H53.98c2.725 0 4.942-2.173 4.942-4.843v-45.17c0-2.671-2.217-4.844-4.942-4.844zM7.11 51.866V5.023c0-1.649 1.394-2.991 3.106-2.991H44.64c1.712 0 3.106 1.342 3.106 2.99v46.844c0 1.649-1.394 2.991-3.106 2.991H10.217c-1.712 0-3.106-1.342-3.106-2.99zm49.778 7.29c0 1.551-1.306 2.812-2.91 2.812H21.195c-1.604 0-2.91-1.26-2.91-2.811v-2.268H44.64c2.833 0 5.138-2.253 5.138-5.023V11.128c.077.018.15.047.233.047h3.968c1.604 0 2.91 1.26 2.91 2.811v45.17z" />
														<path
															d="M38.603 13.206H16.254a1.015 1.015 0 1 0 0 2.032h22.35a1.015 1.015 0 1 0 0-2.032zM38.603 21.333H16.254a1.015 1.015 0 1 0 0 2.032h22.35a1.015 1.015 0 1 0 0-2.032zM38.603 29.46H16.254a1.015 1.015 0 1 0 0 2.032h22.35a1.015 1.015 0 1 0 0-2.032zM28.444 37.587h-12.19a1.015 1.015 0 1 0 0 2.032h12.19a1.015 1.015 0 1 0 0-2.032z" />
													</svg>
												</v-avatar>
											</div>

											<div class="app-slide-text flex-1">
												<h3 class="dark-text font-600">
													<I18nVue :uz="item.title_uz" :en="item.title_en"
													         :ru="item.title_ru" />
												</h3>
											</div>

											<div class="app-slide-icon download-icon pr-10 transition-all">
												<download-icon size="1.8x" class="custom-class" />
											</div>
										</div>
									</a>
								</v-col>
							</template>
						</v-row>
					</div>

					<div class='tab-content-items' data-item='content'>
						<h2 class='font-600 dark-text mb-2'>
							<I18nVue t='AboutBank.Appeals.text9' />
						</h2>

						<h4>
							<I18nVue t='AboutBank.Appeals.text10' />
						</h4>

						<v-divider style='border-color: rgba(var(--border-color), 1)' class='mt-5 mb-8' />

						<v-row>
							<v-col md='6'>
								<div class='credit-widget pa-sm-8 pa-5 rounded-lg overflow-hidden mr-4 h-100'>
									<h5>
										<I18nVue t='AboutBank.Appeals.text11' />
									</h5>
									<h2 class='font-600 dark-text mt-2 mb-5'>
										<I18nVue t='AboutBank.Appeals.text12' />
									</h2>
									<v-row class='mt-3'>
										<v-col md='5' class='pb-0'>
											<h4 class='font-600 dark-text'>
												<I18nVue t='AboutBank.Appeals.text14' />
											</h4>
										</v-col>
										<v-col md='5' class='pb-0'>
											<h4 class='font-600 dark-text'>
												<I18nVue t='AboutBank.Appeals.text15' />
											</h4>
										</v-col>

										<v-col md='5' class='pb-0'>
											<h4 class='font-600 dark-text'>
												<I18nVue t='AboutBank.Appeals.text16' />
											</h4>
										</v-col>
										<v-col md='5' class='pb-0'>
											<h4 class='font-600 dark-text'>
												<I18nVue t='AboutBank.Appeals.text17' />
											</h4>
										</v-col>
									</v-row>
								</div>
							</v-col>

							<v-col md='6'>
								<div class='credit-widget pa-sm-8 pa-5 rounded-lg overflow-hidden mr-4 h-100'>
									<h5>
										<I18nVue t='AboutBank.Appeals.text11_first_deputy' />
									</h5>
									<h2 class='font-600 dark-text mt-2 mb-5'>
										<I18nVue t='AboutBank.Appeals.text12_deputy1_name' />
									</h2>
									<v-row class='mt-3'>
										<v-col md='5' class='pb-0'>
											<h4 class='font-600 dark-text'>
												<I18nVue t='AboutBank.Appeals.text14' />
											</h4>
										</v-col>
										<v-col md='5' class='pb-0'>
											<h4 class='font-600 dark-text'>
												<I18nVue t='AboutBank.Appeals.text15' />
											</h4>
										</v-col>

										<v-col md='5' class='pb-0'>
											<h4 class='font-600 dark-text'>
												<I18nVue t='AboutBank.Appeals.text16' />
											</h4>
										</v-col>
										<v-col md='5' class='pb-0'>
											<h4 class='font-600 dark-text'>
												<I18nVue t='AboutBank.Appeals.text17' />
											</h4>
										</v-col>
									</v-row>
								</div>
							</v-col>

							<v-col md='6'>
								<div class='credit-widget pa-sm-8 pa-5 rounded-lg overflow-hidden mr-4 h-100'>
									<h5>
										<I18nVue t='AboutBank.Appeals.text11_deputy' />
									</h5>
									<h2 class='font-600 dark-text mt-2 mb-5'>
										<I18nVue t='AboutBank.Appeals.text12_deputy2_name' />
									</h2>
									<v-row class='mt-3'>
										<v-col md='5' class='pb-0'>
											<h4 class='font-600 dark-text'>
												<I18nVue t='AboutBank.Appeals.text14' />
											</h4>
										</v-col>
										<v-col md='5' class='pb-0'>
											<h4 class='font-600 dark-text'>
												<I18nVue t='AboutBank.Appeals.text15' />
											</h4>
										</v-col>

										<v-col md='5' class='pb-0'>
											<h4 class='font-600 dark-text'>
												<I18nVue t='AboutBank.Appeals.text16' />
											</h4>
										</v-col>
										<v-col md='5' class='pb-0'>
											<h4 class='font-600 dark-text'>
												<I18nVue t='AboutBank.Appeals.text17' />
											</h4>
										</v-col>
									</v-row>
								</div>
							</v-col>

							<v-col md='6'>
								<div class='credit-widget pa-sm-8 pa-5 rounded-lg overflow-hidden mr-4 h-100'>
									<h5>
										<I18nVue t='AboutBank.Appeals.text11_deputy' />
									</h5>
									<h2 class='font-600 dark-text mt-2 mb-5'>
										<I18nVue t='AboutBank.Appeals.text12_deputy3_name' />
									</h2>
									<v-row class='mt-3'>
										<v-col md='5' class='pb-0'>
											<h4 class='font-600 dark-text'>
												<I18nVue t='AboutBank.Appeals.text14' />
											</h4>
										</v-col>
										<v-col md='5' class='pb-0'>
											<h4 class='font-600 dark-text'>
												<I18nVue t='AboutBank.Appeals.text15' />
											</h4>
										</v-col>

										<v-col md='5' class='pb-0'>
											<h4 class='font-600 dark-text'>
												<I18nVue t='AboutBank.Appeals.text16' />
											</h4>
										</v-col>
										<v-col md='5' class='pb-0'>
											<h4 class='font-600 dark-text'>
												<I18nVue t='AboutBank.Appeals.text17' />
											</h4>
										</v-col>
									</v-row>
								</div>
							</v-col>

							<v-col md='6'>
								<div class='credit-widget pa-sm-8 pa-5 rounded-lg overflow-hidden mr-4 h-100'>
									<h5>
										<I18nVue t='AboutBank.Appeals.text11_deputy' />
									</h5>
									<h2 class='font-600 dark-text mt-2 mb-5'>
										<I18nVue t='AboutBank.Appeals.text12_deputy4_name' />
									</h2>
									<v-row class='mt-3'>
										<v-col md='5' class='pb-0'>
											<h4 class='font-600 dark-text'>
												<I18nVue t='AboutBank.Appeals.text14' />
											</h4>
										</v-col>
										<v-col md='5' class='pb-0'>
											<h4 class='font-600 dark-text'>
												<I18nVue t='AboutBank.Appeals.text15' />
											</h4>
										</v-col>

										<v-col md='5' class='pb-0'>
											<h4 class='font-600 dark-text'>
												<I18nVue t='AboutBank.Appeals.text16' />
											</h4>
										</v-col>
										<v-col md='5' class='pb-0'>
											<h4 class='font-600 dark-text'>
												<I18nVue t='AboutBank.Appeals.text17' />
											</h4>
										</v-col>
									</v-row>
								</div>
							</v-col>
						</v-row>
					</div>

					<div class='tab-content-items' data-item='content'>

						<appeal-form />

					</div>

					<div class='tab-content-items' data-item='content'>
						<v-row>
							<template v-if="$i18n.locale === 'uz'">
								<template v-for='item in ratingList' v-if="item.file">
									<v-col :key="item.id" md='6'>
										<a
											target='_blank'
											:href="$http.defaults.baseURL + item.file.url"
											download
											class='
                                            app-slide-card
                                            pa-6
                                            mb-6
                                            rounded-lg
                                            overflow-hidden
                                            p-relative
                                            d-block
                                            text-decoration-none
                                        '
											style='min-height: auto'
										>
											<div class="d-flex flex-wrap align-center">
												<div class="mr-5 p-relative">
													<v-avatar color="#fff" size="75">
														<svg id="icon-file" viewBox="0 0 64 64" class="size-lg">
															<path
																d="M53.98 9.143h-3.97c-.082 0-.155.028-.232.047V5.023C49.778 2.253 47.473 0 44.64 0H10.217C7.384 0 5.08 2.253 5.08 5.023v46.843c0 2.77 2.305 5.023 5.138 5.023h6.037v2.268c0 2.67 2.216 4.843 4.941 4.843H53.98c2.725 0 4.942-2.173 4.942-4.843v-45.17c0-2.671-2.217-4.844-4.942-4.844zM7.11 51.866V5.023c0-1.649 1.394-2.991 3.106-2.991H44.64c1.712 0 3.106 1.342 3.106 2.99v46.844c0 1.649-1.394 2.991-3.106 2.991H10.217c-1.712 0-3.106-1.342-3.106-2.99zm49.778 7.29c0 1.551-1.306 2.812-2.91 2.812H21.195c-1.604 0-2.91-1.26-2.91-2.811v-2.268H44.64c2.833 0 5.138-2.253 5.138-5.023V11.128c.077.018.15.047.233.047h3.968c1.604 0 2.91 1.26 2.91 2.811v45.17z" />
															<path
																d="M38.603 13.206H16.254a1.015 1.015 0 1 0 0 2.032h22.35a1.015 1.015 0 1 0 0-2.032zM38.603 21.333H16.254a1.015 1.015 0 1 0 0 2.032h22.35a1.015 1.015 0 1 0 0-2.032zM38.603 29.46H16.254a1.015 1.015 0 1 0 0 2.032h22.35a1.015 1.015 0 1 0 0-2.032zM28.444 37.587h-12.19a1.015 1.015 0 1 0 0 2.032h12.19a1.015 1.015 0 1 0 0-2.032z" />
														</svg>
													</v-avatar>
												</div>

												<div class="app-slide-text flex-1">
													<h3 class="dark-text font-600">
														{{ item.title_uz }}
													</h3>
												</div>

												<div class="app-slide-icon download-icon pr-10 transition-all">
													<download-icon size="1.8x" class="custom-class" />
												</div>
											</div>
										</a>
									</v-col>
								</template>
							</template>

							<template v-if="$i18n.locale === 'ru'">
								<template v-for='item in ratingList' v-if="item.file_ru">
									<v-col :key="item.id" md='6'>
										<a
											target='_blank'
											:href="$http.defaults.baseURL + item.file_ru.url"
											download
											class='
                                            app-slide-card
                                            pa-6
                                            mb-6
                                            rounded-lg
                                            overflow-hidden
                                            p-relative
                                            d-block
                                            text-decoration-none
                                        '
											style='min-height: auto'
										>
											<div class="d-flex flex-wrap align-center">
												<div class="mr-5 p-relative">
													<v-avatar color="#fff" size="75">
														<svg id="icon-file" viewBox="0 0 64 64" class="size-lg">
															<path
																d="M53.98 9.143h-3.97c-.082 0-.155.028-.232.047V5.023C49.778 2.253 47.473 0 44.64 0H10.217C7.384 0 5.08 2.253 5.08 5.023v46.843c0 2.77 2.305 5.023 5.138 5.023h6.037v2.268c0 2.67 2.216 4.843 4.941 4.843H53.98c2.725 0 4.942-2.173 4.942-4.843v-45.17c0-2.671-2.217-4.844-4.942-4.844zM7.11 51.866V5.023c0-1.649 1.394-2.991 3.106-2.991H44.64c1.712 0 3.106 1.342 3.106 2.99v46.844c0 1.649-1.394 2.991-3.106 2.991H10.217c-1.712 0-3.106-1.342-3.106-2.99zm49.778 7.29c0 1.551-1.306 2.812-2.91 2.812H21.195c-1.604 0-2.91-1.26-2.91-2.811v-2.268H44.64c2.833 0 5.138-2.253 5.138-5.023V11.128c.077.018.15.047.233.047h3.968c1.604 0 2.91 1.26 2.91 2.811v45.17z" />
															<path
																d="M38.603 13.206H16.254a1.015 1.015 0 1 0 0 2.032h22.35a1.015 1.015 0 1 0 0-2.032zM38.603 21.333H16.254a1.015 1.015 0 1 0 0 2.032h22.35a1.015 1.015 0 1 0 0-2.032zM38.603 29.46H16.254a1.015 1.015 0 1 0 0 2.032h22.35a1.015 1.015 0 1 0 0-2.032zM28.444 37.587h-12.19a1.015 1.015 0 1 0 0 2.032h12.19a1.015 1.015 0 1 0 0-2.032z" />
														</svg>
													</v-avatar>
												</div>

												<div class="app-slide-text flex-1">
													<h3 class="dark-text font-600">
														{{ item.title_ru }}
													</h3>
												</div>

												<div class="app-slide-icon download-icon pr-10 transition-all">
													<download-icon size="1.8x" class="custom-class" />
												</div>
											</div>
										</a>
									</v-col>
								</template>
							</template>

							<template v-if="$i18n.locale === 'en'">
								<template v-for='item in ratingList' v-if="item.file_en">
									<v-col :key="item.id" md='6'>
										<a
											target='_blank'
											:href="$http.defaults.baseURL + item.file_en.url"
											download
											class='
                                            app-slide-card
                                            pa-6
                                            mb-6
                                            rounded-lg
                                            overflow-hidden
                                            p-relative
                                            d-block
                                            text-decoration-none
                                        '
											style='min-height: auto'
										>
											<div class="d-flex flex-wrap align-center">
												<div class="mr-5 p-relative">
													<v-avatar color="#fff" size="75">
														<svg id="icon-file" viewBox="0 0 64 64" class="size-lg">
															<path
																d="M53.98 9.143h-3.97c-.082 0-.155.028-.232.047V5.023C49.778 2.253 47.473 0 44.64 0H10.217C7.384 0 5.08 2.253 5.08 5.023v46.843c0 2.77 2.305 5.023 5.138 5.023h6.037v2.268c0 2.67 2.216 4.843 4.941 4.843H53.98c2.725 0 4.942-2.173 4.942-4.843v-45.17c0-2.671-2.217-4.844-4.942-4.844zM7.11 51.866V5.023c0-1.649 1.394-2.991 3.106-2.991H44.64c1.712 0 3.106 1.342 3.106 2.99v46.844c0 1.649-1.394 2.991-3.106 2.991H10.217c-1.712 0-3.106-1.342-3.106-2.99zm49.778 7.29c0 1.551-1.306 2.812-2.91 2.812H21.195c-1.604 0-2.91-1.26-2.91-2.811v-2.268H44.64c2.833 0 5.138-2.253 5.138-5.023V11.128c.077.018.15.047.233.047h3.968c1.604 0 2.91 1.26 2.91 2.811v45.17z" />
															<path
																d="M38.603 13.206H16.254a1.015 1.015 0 1 0 0 2.032h22.35a1.015 1.015 0 1 0 0-2.032zM38.603 21.333H16.254a1.015 1.015 0 1 0 0 2.032h22.35a1.015 1.015 0 1 0 0-2.032zM38.603 29.46H16.254a1.015 1.015 0 1 0 0 2.032h22.35a1.015 1.015 0 1 0 0-2.032zM28.444 37.587h-12.19a1.015 1.015 0 1 0 0 2.032h12.19a1.015 1.015 0 1 0 0-2.032z" />
														</svg>
													</v-avatar>
												</div>

												<div class="app-slide-text flex-1">
													<h3 class="dark-text font-600">
														{{ item.title_en }}
													</h3>
												</div>

												<div class="app-slide-icon download-icon pr-10 transition-all">
													<download-icon size="1.8x" class="custom-class" />
												</div>
											</div>
										</a>
									</v-col>
								</template>
							</template>
						</v-row>
					</div>
				</div>
			</v-container>
		</div>
	</div>
</template>

<script>
	import { DownloadIcon, ChevronDownIcon, FileTextIcon } from "vue-feather-icons";
	import I18nVue from "@/I18nVue";
	import AppealForm from "@/views/Main/AboutBank/Appeals/AppealFormComponent";

	export default {
		name: "index",
		components: {
			DownloadIcon,
			ChevronDownIcon,
			FileTextIcon,
			AppealForm,
			I18nVue
		},
		data() {
			return {
				appealStatsList: {},
				ratingList: {}
			}
		},
		mounted() {
			this.getAppealStatsList();
			this.getRatingList();
		},
		methods: {
			getAppealStatsList(){
				this.$http.get(`/1/bank/documents/`, {
					params: {
						ordering: '-id',
						type: 'appeal_stats'
					}
				})
				.then(({ data }) => {
					this.appealStatsList = data.results;
				})
			},
			getRatingList(){
				this.$http.get(`/1/bank/documents/`, {
					params: {
						ordering: '-id',
						type: 'rating'
					}
				})
					.then(({ data }) => {
						this.ratingList = data.results;
					})
			}
		}
	}
</script>
