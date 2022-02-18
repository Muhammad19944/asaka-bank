<template>
	<div class="documents-view">
		<div class="view-toolbar mt-16">
			<v-container class="pa-0">
				<div class="app-tab-header d-flex">
					<div class="tab-header-items text-center mr-7 active" data-item="header">
						<a class="navigation-link navigation-link__hover p-relative text--h4 py-6 font-600 d-inline-block">
							<I18nVue t="Documents.Tab1" />
						</a>
					</div>
					<div class="tab-header-items text-center mr-7" data-item="header">
						<a class="navigation-link navigation-link__hover p-relative  text--h4 py-6 font-600 d-inline-block">
							<I18nVue t="Documents.Tab2" />
						</a>
					</div>
					<div class="tab-header-items text-center mr-7" data-item="header">
						<a class=" navigation-link navigation-link__hover p-relative text--h4 py-6 font-600  d-inline-block">
							<I18nVue t="Documents.Tab3" />
						</a>
					</div>
					<div class="tab-header-items text-center mr-7" data-item="header">
						<a class="navigation-link navigation-link__hover  p-relative text--h4 py-6 font-600  d-inline-block ">
							<I18nVue t="Documents.Tab4" />
						</a>
					</div>
				</div>
			</v-container>
		</div>
		<div class="view-toolbar-content py-15 overflow-hidden">
			<v-container class="pa-0">
				<div class="app-tab-content p-relative">
					<div class="tab-content-items active" data-item="content">
						<h2 class="font-600 dark-text">
							<I18nVue t="Documents.Title1" />
						</h2>
						<v-divider style="border-color: rgba(var(--border-color), 1)" class="mt-5 mb-8" />
						<v-row>
							<template v-for="(item) of documentsList">
								<template v-if="item.type === 'individual'">
									<template v-if="!item.file">
										<v-col md="6" :key="item.id">
											<a target="_blank"
											   rel="noopener noreferrer"
											   class="app-slide-card pa-6 mb-6 rounded-lg  overflow-hidden p-relative  d-block  text-decoration-none"
											   style="min-height: auto">
												<div class="d-flex align-center">
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

													<div class="flex-1">
														<h3 class="dark-text font-600">
															<I18nVue :uz="item.title_uz" :en="item.title_en"
															         :ru="item.title_ru" />
														</h3>
													</div>
												</div>
											</a>
										</v-col>
									</template>

									<template v-else>
										<v-col md="6" :key="item.id">
											<a target="_blank" rel="noopener noreferrer" :href="$http.defaults.baseURL + item.file.url"
											   class="app-slide-card pa-6  mb-6 rounded-lg overflow-hidden p-relative d-block text-decoration-none "
											   style="min-height: auto">
												<div class="d-flex align-center">
													<div class="mr-5 p-relative">
														<v-avatar color="#fff" size="75">
															<svg id="icon-file" viewBox="0 0 64 64" class="size-lg">
																<path
																	d="M53.98 9.143h-3.97c-.082 0-.155.028-.232.047V5.023C49.778 2.253 47.473 0 44.64 0H10.217C7.384 0 5.08 2.253 5.08 5.023v46.843c0 2.77 2.305 5.023 5.138 5.023h6.037v2.268c0 2.67 2.216 4.843 4.941 4.843H53.98c2.725 0 4.942-2.173 4.942-4.843v-45.17c0-2.671-2.217-4.844-4.942-4.844zM7.11 51.866V5.023c0-1.649 1.394-2.991 3.106-2.991H44.64c1.712 0 3.106 1.342 3.106 2.99v46.844c0 1.649-1.394 2.991-3.106 2.991H10.217c-1.712 0-3.106-1.342-3.106-2.99zm49.778 7.29c0 1.551-1.306 2.812-2.91 2.812H21.195c-1.604 0-2.91-1.26-2.91-2.811v-2.268H44.64c2.833 0 5.138-2.253 5.138-5.023V11.128c.077.018.15.047.233.047h3.968c1.604 0 2.91 1.26 2.91 2.811v45.17z"
																/>
																<path
																	d="M38.603 13.206H16.254a1.015 1.015 0 1 0 0 2.032h22.35a1.015 1.015 0 1 0 0-2.032zM38.603 21.333H16.254a1.015 1.015 0 1 0 0 2.032h22.35a1.015 1.015 0 1 0 0-2.032zM38.603 29.46H16.254a1.015 1.015 0 1 0 0 2.032h22.35a1.015 1.015 0 1 0 0-2.032zM28.444 37.587h-12.19a1.015 1.015 0 1 0 0 2.032h12.19a1.015 1.015 0 1 0 0-2.032z"
																/>
															</svg>
														</v-avatar>
													</div>
													<div class="flex-1">
														<h3 class="dark-text font-600">
															<I18nVue :uz="item.title_uz" :en="item.title_en"
															         :ru="item.title_ru" />
														</h3>
													</div>
													<div class="download-icon pr-10 transition-all">
														<download-icon size="1.8x" class="custom-class" />
													</div>
												</div>
											</a>
										</v-col>
									</template>
								</template>
							</template>
						</v-row>
					</div>
					<div class="tab-content-items" data-item="content">
						<h2 class="font-600 dark-text">
							<I18nVue t="Documents.Title2" />
						</h2>
						<v-divider style="border-color: rgba(var(--border-color), 1)" class="mt-5 mb-8" />
						<v-row>
							<template v-for="(item) of documentsList">
								<template v-if="item.type === 'corporate'">
									<template v-if="!item.file">
										<v-col md="6" :key="item.id">
											<a target="_blank"
											   rel="noopener noreferrer"
											   class="app-slide-card pa-6 mb-6 rounded-lg  overflow-hidden p-relative  d-block  text-decoration-none"
											   style="min-height: auto">
												<div class="d-flex align-center">
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

													<div class="flex-1">
														<h3 class="dark-text font-600">
															<I18nVue :uz="item.title_uz" :en="item.title_en"
															         :ru="item.title_ru" />
														</h3>
													</div>
												</div>
											</a>
										</v-col>
									</template>

									<template v-else>
										<v-col md="6" :key="item.id">
											<a target="_blank" rel="noopener noreferrer" :href="$http.defaults.baseURL + item.file.url"
											   class="app-slide-card pa-6  mb-6 rounded-lg overflow-hidden p-relative d-block text-decoration-none "
											   style="min-height: auto">
												<div class="d-flex align-center">
													<div class="mr-5 p-relative">
														<v-avatar color="#fff" size="75">
															<svg id="icon-file" viewBox="0 0 64 64" class="size-lg">
																<path
																	d="M53.98 9.143h-3.97c-.082 0-.155.028-.232.047V5.023C49.778 2.253 47.473 0 44.64 0H10.217C7.384 0 5.08 2.253 5.08 5.023v46.843c0 2.77 2.305 5.023 5.138 5.023h6.037v2.268c0 2.67 2.216 4.843 4.941 4.843H53.98c2.725 0 4.942-2.173 4.942-4.843v-45.17c0-2.671-2.217-4.844-4.942-4.844zM7.11 51.866V5.023c0-1.649 1.394-2.991 3.106-2.991H44.64c1.712 0 3.106 1.342 3.106 2.99v46.844c0 1.649-1.394 2.991-3.106 2.991H10.217c-1.712 0-3.106-1.342-3.106-2.99zm49.778 7.29c0 1.551-1.306 2.812-2.91 2.812H21.195c-1.604 0-2.91-1.26-2.91-2.811v-2.268H44.64c2.833 0 5.138-2.253 5.138-5.023V11.128c.077.018.15.047.233.047h3.968c1.604 0 2.91 1.26 2.91 2.811v45.17z"
																/>
																<path
																	d="M38.603 13.206H16.254a1.015 1.015 0 1 0 0 2.032h22.35a1.015 1.015 0 1 0 0-2.032zM38.603 21.333H16.254a1.015 1.015 0 1 0 0 2.032h22.35a1.015 1.015 0 1 0 0-2.032zM38.603 29.46H16.254a1.015 1.015 0 1 0 0 2.032h22.35a1.015 1.015 0 1 0 0-2.032zM28.444 37.587h-12.19a1.015 1.015 0 1 0 0 2.032h12.19a1.015 1.015 0 1 0 0-2.032z"
																/>
															</svg>
														</v-avatar>
													</div>
													<div class="flex-1">
														<h3 class="dark-text font-600">
															<I18nVue :uz="item.title_uz" :en="item.title_en"
															         :ru="item.title_ru" />
														</h3>
													</div>
													<div class="download-icon pr-10 transition-all">
														<download-icon size="1.8x" class="custom-class" />
													</div>
												</div>
											</a>
										</v-col>
									</template>
								</template>
							</template>
						</v-row>
					</div>
					<div class="tab-content-items" data-item="content">
						<h2 class="font-600 dark-text">
							<I18nVue t="Documents.Title3" />
						</h2>
						<v-divider style="border-color: rgba(var(--border-color), 1)" class="mt-5 mb-8" />
						<v-row>
							<template v-for="(item) of documentsList">
								<template v-if="item.type === 'legal'">
									<template v-if="!item.file">
										<v-col md="6" :key="item.id">
											<a target="_blank"
											   rel="noopener noreferrer"
											   class="app-slide-card pa-6 mb-6 rounded-lg  overflow-hidden p-relative  d-block  text-decoration-none"
											   style="min-height: auto">
												<div class="d-flex align-center">
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

													<div class="flex-1">
														<h3 class="dark-text font-600">
															<I18nVue :uz="item.title_uz" :en="item.title_en"
															         :ru="item.title_ru" />
														</h3>
													</div>
												</div>
											</a>
										</v-col>
									</template>

									<template v-else>
										<v-col md="6" :key="item.id">
											<a target="_blank" rel="noopener noreferrer" :href="$http.defaults.baseURL + item.file.url"
											   class="app-slide-card pa-6  mb-6 rounded-lg overflow-hidden p-relative d-block text-decoration-none "
											   style="min-height: auto">
												<div class="d-flex align-center">
													<div class="mr-5 p-relative">
														<v-avatar color="#fff" size="75">
															<svg id="icon-file" viewBox="0 0 64 64" class="size-lg">
																<path
																	d="M53.98 9.143h-3.97c-.082 0-.155.028-.232.047V5.023C49.778 2.253 47.473 0 44.64 0H10.217C7.384 0 5.08 2.253 5.08 5.023v46.843c0 2.77 2.305 5.023 5.138 5.023h6.037v2.268c0 2.67 2.216 4.843 4.941 4.843H53.98c2.725 0 4.942-2.173 4.942-4.843v-45.17c0-2.671-2.217-4.844-4.942-4.844zM7.11 51.866V5.023c0-1.649 1.394-2.991 3.106-2.991H44.64c1.712 0 3.106 1.342 3.106 2.99v46.844c0 1.649-1.394 2.991-3.106 2.991H10.217c-1.712 0-3.106-1.342-3.106-2.99zm49.778 7.29c0 1.551-1.306 2.812-2.91 2.812H21.195c-1.604 0-2.91-1.26-2.91-2.811v-2.268H44.64c2.833 0 5.138-2.253 5.138-5.023V11.128c.077.018.15.047.233.047h3.968c1.604 0 2.91 1.26 2.91 2.811v45.17z"
																/>
																<path
																	d="M38.603 13.206H16.254a1.015 1.015 0 1 0 0 2.032h22.35a1.015 1.015 0 1 0 0-2.032zM38.603 21.333H16.254a1.015 1.015 0 1 0 0 2.032h22.35a1.015 1.015 0 1 0 0-2.032zM38.603 29.46H16.254a1.015 1.015 0 1 0 0 2.032h22.35a1.015 1.015 0 1 0 0-2.032zM28.444 37.587h-12.19a1.015 1.015 0 1 0 0 2.032h12.19a1.015 1.015 0 1 0 0-2.032z"
																/>
															</svg>
														</v-avatar>
													</div>
													<div class="flex-1">
														<h3 class="dark-text font-600">
															<I18nVue :uz="item.title_uz" :en="item.title_en"
															         :ru="item.title_ru" />
														</h3>
													</div>
													<div class="download-icon pr-10 transition-all">
														<download-icon size="1.8x" class="custom-class" />
													</div>
												</div>
											</a>
										</v-col>
									</template>
								</template>
							</template>
						</v-row>
					</div>
					<div class="tab-content-items" data-item="content">
						<h2 class="font-600 dark-text">
							<I18nVue t="Documents.Title4" />
						</h2>
						<v-divider style="border-color: rgba(var(--border-color), 1)" class="mt-5 mb-8" />
						<v-row>
							<template v-for="(item) of documentsList">
								<template v-if="item.type === 'inner'">
									<template v-if="!item.file">
										<v-col md="6" :key="item.id">
											<a target="_blank"
											   rel="noopener noreferrer"
											   class="app-slide-card pa-6 mb-6 rounded-lg  overflow-hidden p-relative  d-block  text-decoration-none"
											   style="min-height: auto">
												<div class="d-flex align-center">
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

													<div class="flex-1">
														<h3 class="dark-text font-600">
															<I18nVue :uz="item.title_uz" :en="item.title_en"
															         :ru="item.title_ru" />
														</h3>
													</div>
												</div>
											</a>
										</v-col>
									</template>

									<template v-else>
										<v-col md="6" :key="item.id">
											<a target="_blank" rel="noopener noreferrer" :href="$http.defaults.baseURL + item.file.url"
											   class="app-slide-card pa-6  mb-6 rounded-lg overflow-hidden p-relative d-block text-decoration-none "
											   style="min-height: auto">
												<div class="d-flex align-center">
													<div class="mr-5 p-relative">
														<v-avatar color="#fff" size="75">
															<svg id="icon-file" viewBox="0 0 64 64" class="size-lg">
																<path
																	d="M53.98 9.143h-3.97c-.082 0-.155.028-.232.047V5.023C49.778 2.253 47.473 0 44.64 0H10.217C7.384 0 5.08 2.253 5.08 5.023v46.843c0 2.77 2.305 5.023 5.138 5.023h6.037v2.268c0 2.67 2.216 4.843 4.941 4.843H53.98c2.725 0 4.942-2.173 4.942-4.843v-45.17c0-2.671-2.217-4.844-4.942-4.844zM7.11 51.866V5.023c0-1.649 1.394-2.991 3.106-2.991H44.64c1.712 0 3.106 1.342 3.106 2.99v46.844c0 1.649-1.394 2.991-3.106 2.991H10.217c-1.712 0-3.106-1.342-3.106-2.99zm49.778 7.29c0 1.551-1.306 2.812-2.91 2.812H21.195c-1.604 0-2.91-1.26-2.91-2.811v-2.268H44.64c2.833 0 5.138-2.253 5.138-5.023V11.128c.077.018.15.047.233.047h3.968c1.604 0 2.91 1.26 2.91 2.811v45.17z"
																/>
																<path
																	d="M38.603 13.206H16.254a1.015 1.015 0 1 0 0 2.032h22.35a1.015 1.015 0 1 0 0-2.032zM38.603 21.333H16.254a1.015 1.015 0 1 0 0 2.032h22.35a1.015 1.015 0 1 0 0-2.032zM38.603 29.46H16.254a1.015 1.015 0 1 0 0 2.032h22.35a1.015 1.015 0 1 0 0-2.032zM28.444 37.587h-12.19a1.015 1.015 0 1 0 0 2.032h12.19a1.015 1.015 0 1 0 0-2.032z"
																/>
															</svg>
														</v-avatar>
													</div>
													<div class="flex-1">
														<h3 class="dark-text font-600">
															<I18nVue :uz="item.title_uz" :en="item.title_en"
															         :ru="item.title_ru" />
														</h3>
													</div>
													<div class="download-icon pr-10 transition-all">
														<download-icon size="1.8x" class="custom-class" />
													</div>
												</div>
											</a>
										</v-col>
									</template>
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
import { DownloadIcon } from "vue-feather-icons";
import { appTab } from "@/utils/frontend";
import I18nVue from "@/I18nVue";

export default {
	name: "index",
	components: { I18nVue, DownloadIcon },
	data: () => ({ documentsList: null }),
	mounted() {
		const $tabHeaderItems = document.querySelectorAll("[data-item=\"header\"]");
		const $tabContentItems = document.querySelectorAll("[data-item=\"content\"]");
		appTab($tabHeaderItems, $tabContentItems);

		this.$http.get("/1/bank/documents/").then(({ data }) => {
			this.documentsList = data.results;

			// console.log(this.documentsList);
		});
	}
};
</script>

<style></style>
