<template>
	<div class="credits-list-view">
		<div class="view-toolbar mt-16">
			<v-container class="pa-0">
				<div class="app-tab-header px-5 d-flex">
					<div class="tab-header-items text-center active" data-item="header">
						<a
							class="navigation-link navigation-link__hover p-relative text--h4 py-6 font-600 d-inline-block mr-8"
						>
							<I18nVue t="CorporateCustomers.Cards.TradeAcquiring.TAB1.tab1" />
						</a>
					</div>
					<div class="tab-header-items text-center" data-item="header">
						<a
							class="navigation-link navigation-link__hover p-relative text--h4 py-6 font-600 d-inline-block mr-8"
						>
							<I18nVue t="CorporateCustomers.Cards.TradeAcquiring.TAB2.tab2" />
						</a>
					</div>
					<div class="tab-header-items text-center" data-item="header">
						<a
							class="navigation-link navigation-link__hover p-relative text--h4 py-6 font-600 d-inline-block mr-8"
						>
							<I18nVue t="CorporateCustomers.Cards.TradeAcquiring.TAB3.tab3" />
						</a>
					</div>
				</div>
			</v-container>
		</div>


		<div class="view-toolbar-content py-15 overflow-hidden">
			<v-container>
				<div class="app-tab-content p-relative">
					<div class="tab-content-items active" data-item="content">
						<h1 class="font-600 dark-text mb-3">
							<I18nVue t="CorporateCustomers.Cards.TradeAcquiring.TAB1.header1" />
						</h1>
						<span class="text--h3 grey--text d-block mt-2 mb-10">
                            <I18nVue t="CorporateCustomers.Cards.TradeAcquiring.TAB1.header1_sub" />
                        </span>

						<v-row class="mb-16">
							<v-col lg="6" md="6">
								<div
									class="app-slide-card pa-4 px-sm-8 py-sm-6 rounded-lg overflow-hidden p-relative h-100 mr-0 mr-md-3 mb-3"
									style="min-height: auto"
								>
									<div class="d-flex align-center">
										<v-avatar color="danger" size="80" class="mr-8">
											<svg
												id="icon-declaration"
												viewBox="0 0 512 512"
												class="size-lg"
												style="fill: #fff"
											>
												<path
													d="M387.21 195.239c-5.523 0-10 4.477-10 10v247.216H134.792v-20.002c0-5.523-4.477-10-10-10s-10 4.477-10 10v30.002c0 5.523 4.477 10 10 10H387.21c5.522 0 10-4.477 10-10V205.239c0-5.522-4.478-10-10-10z"
												/>
												<path
													d="M426.753 45.693H338.32c-9.629-8.596-22.316-13.835-36.209-13.835h-5.459C292.158 13.591 275.636 0 256.001 0c-19.635 0-36.157 13.591-40.652 31.859h-5.46c-13.893 0-26.58 5.238-36.208 13.835H85.247c-5.523 0-10 4.477-10 10V502c0 5.523 4.477 10 10 10h341.507c5.523 0 10-4.477 10-10V55.693c-.001-5.523-4.478-10-10.001-10zm-202.612 6.166c5.523 0 10-4.477 10-10C234.141 29.806 243.947 20 256 20c12.054 0 21.859 9.806 21.859 21.859 0 5.523 4.478 10 10 10h14.252c9.662 0 18.401 4.005 24.661 10.435.085.097.154.203.243.297 7.538 7.952 9.493 17.561 9.516 28.122.003 1.508.016 3.017.016 4.524v4.531H175.454v-4.531c0-12.153.701-23.378 9.531-32.646.089-.094.159-.201.244-.297 6.259-6.43 14.999-10.435 24.66-10.435h14.252zM416.753 492H95.247V65.693h64.265c-.024.06-.045.121-.069.182a54.851 54.851 0 0 0-3.963 19.362h-30.688c-5.523 0-10 4.477-10 10v257.217c0 5.523 4.477 10 10 10s10-4.477 10-10V105.237h20.662v4.531c0 5.523 4.477 10 10 10h181.094c5.522 0 10-4.477 10-10v-4.531h20.662v20.002c0 5.523 4.477 10 10 10 5.522 0 10-4.477 10-10V95.237c0-5.523-4.478-10-10-10h-30.688a54.462 54.462 0 0 0-3.977-19.396c-.021-.049-.037-.099-.057-.147h64.265V492z"
												/>
												<path
													d="M256.001 376.329c53.752 0 97.482-43.731 97.482-97.483s-43.73-97.482-97.482-97.482-97.482 43.73-97.482 97.482c-.001 53.752 43.73 97.483 97.482 97.483zm0-174.965c42.724 0 77.482 34.758 77.482 77.482 0 42.725-34.759 77.483-77.482 77.483-42.724 0-77.482-34.759-77.482-77.483-.001-42.724 34.757-77.482 77.482-77.482z"
												/>
												<path
													d="M235.671 320.435c1.953 1.953 4.512 2.929 7.071 2.929s5.119-.977 7.071-2.929l53.032-53.033c3.905-3.905 3.905-10.237 0-14.142-3.906-3.904-10.236-3.905-14.143 0l-45.961 45.962-19.446-19.445c-3.905-3.904-10.237-3.905-14.142 0-3.905 3.905-3.905 10.237.001 14.142l26.517 26.516zM124.792 402.453c5.508 0 10-4.492 10-10s-4.492-10-10-10-10 4.492-10 10 4.492 10 10 10zM387.21 155.239c-5.508 0-10 4.492-10 10s4.492 10 10 10c5.507 0 10-4.492 10-10s-4.494-10-10-10z"
												/>
											</svg>
										</v-avatar>

										<div>
											<h3 class="dark-text font-600 mb-3">
												<I18nVue t="CorporateCustomers.Cards.TradeAcquiring.TAB1.card1" />
											</h3>

											<h4 class="grey--text">
												<I18nVue t="CorporateCustomers.Cards.TradeAcquiring.TAB1.card12" />
											</h4>
										</div>
									</div>
								</div>
							</v-col>
							<v-col lg="6" md="6">
								<div
									class="app-slide-card pa-4 px-sm-8 py-sm-6 rounded-lg overflow-hidden p-relative h-100 mr-0 mr-md-3 mb-3"
									style="min-height: auto"
								>
									<div class="d-flex align-center">
										<v-avatar color="danger" size="80" class="mr-8">
											<svg
												id="icon-declaration"
												viewBox="0 0 512 512"
												class="size-lg"
												style="fill: #fff"
											>
												<path
													d="M387.21 195.239c-5.523 0-10 4.477-10 10v247.216H134.792v-20.002c0-5.523-4.477-10-10-10s-10 4.477-10 10v30.002c0 5.523 4.477 10 10 10H387.21c5.522 0 10-4.477 10-10V205.239c0-5.522-4.478-10-10-10z"
												/>
												<path
													d="M426.753 45.693H338.32c-9.629-8.596-22.316-13.835-36.209-13.835h-5.459C292.158 13.591 275.636 0 256.001 0c-19.635 0-36.157 13.591-40.652 31.859h-5.46c-13.893 0-26.58 5.238-36.208 13.835H85.247c-5.523 0-10 4.477-10 10V502c0 5.523 4.477 10 10 10h341.507c5.523 0 10-4.477 10-10V55.693c-.001-5.523-4.478-10-10.001-10zm-202.612 6.166c5.523 0 10-4.477 10-10C234.141 29.806 243.947 20 256 20c12.054 0 21.859 9.806 21.859 21.859 0 5.523 4.478 10 10 10h14.252c9.662 0 18.401 4.005 24.661 10.435.085.097.154.203.243.297 7.538 7.952 9.493 17.561 9.516 28.122.003 1.508.016 3.017.016 4.524v4.531H175.454v-4.531c0-12.153.701-23.378 9.531-32.646.089-.094.159-.201.244-.297 6.259-6.43 14.999-10.435 24.66-10.435h14.252zM416.753 492H95.247V65.693h64.265c-.024.06-.045.121-.069.182a54.851 54.851 0 0 0-3.963 19.362h-30.688c-5.523 0-10 4.477-10 10v257.217c0 5.523 4.477 10 10 10s10-4.477 10-10V105.237h20.662v4.531c0 5.523 4.477 10 10 10h181.094c5.522 0 10-4.477 10-10v-4.531h20.662v20.002c0 5.523 4.477 10 10 10 5.522 0 10-4.477 10-10V95.237c0-5.523-4.478-10-10-10h-30.688a54.462 54.462 0 0 0-3.977-19.396c-.021-.049-.037-.099-.057-.147h64.265V492z"
												/>
												<path
													d="M256.001 376.329c53.752 0 97.482-43.731 97.482-97.483s-43.73-97.482-97.482-97.482-97.482 43.73-97.482 97.482c-.001 53.752 43.73 97.483 97.482 97.483zm0-174.965c42.724 0 77.482 34.758 77.482 77.482 0 42.725-34.759 77.483-77.482 77.483-42.724 0-77.482-34.759-77.482-77.483-.001-42.724 34.757-77.482 77.482-77.482z"
												/>
												<path
													d="M235.671 320.435c1.953 1.953 4.512 2.929 7.071 2.929s5.119-.977 7.071-2.929l53.032-53.033c3.905-3.905 3.905-10.237 0-14.142-3.906-3.904-10.236-3.905-14.143 0l-45.961 45.962-19.446-19.445c-3.905-3.904-10.237-3.905-14.142 0-3.905 3.905-3.905 10.237.001 14.142l26.517 26.516zM124.792 402.453c5.508 0 10-4.492 10-10s-4.492-10-10-10-10 4.492-10 10 4.492 10 10 10zM387.21 155.239c-5.508 0-10 4.492-10 10s4.492 10 10 10c5.507 0 10-4.492 10-10s-4.494-10-10-10z"
												/>
											</svg>
										</v-avatar>

										<div>
											<h3 class="dark-text font-600 mb-3">
												<I18nVue t="CorporateCustomers.Cards.TradeAcquiring.TAB1.card2" />
											</h3>

											<h4 class="grey--text">
												<I18nVue t="CorporateCustomers.Cards.TradeAcquiring.TAB1.card21" />
											</h4>
										</div>
									</div>
								</div>
							</v-col>
							<v-col lg="6" md="6">
								<div
									class="app-slide-card pa-4 px-sm-8 py-sm-6 rounded-lg overflow-hidden p-relative h-100 mr-0 mr-md-3 mb-3"
									style="min-height: auto"
								>
									<div class="d-flex align-center">
										<v-avatar color="danger" size="80" class="mr-8">
											<svg
												id="icon-declaration"
												viewBox="0 0 512 512"
												class="size-lg"
												style="fill: #fff"
											>
												<path
													d="M387.21 195.239c-5.523 0-10 4.477-10 10v247.216H134.792v-20.002c0-5.523-4.477-10-10-10s-10 4.477-10 10v30.002c0 5.523 4.477 10 10 10H387.21c5.522 0 10-4.477 10-10V205.239c0-5.522-4.478-10-10-10z"
												/>
												<path
													d="M426.753 45.693H338.32c-9.629-8.596-22.316-13.835-36.209-13.835h-5.459C292.158 13.591 275.636 0 256.001 0c-19.635 0-36.157 13.591-40.652 31.859h-5.46c-13.893 0-26.58 5.238-36.208 13.835H85.247c-5.523 0-10 4.477-10 10V502c0 5.523 4.477 10 10 10h341.507c5.523 0 10-4.477 10-10V55.693c-.001-5.523-4.478-10-10.001-10zm-202.612 6.166c5.523 0 10-4.477 10-10C234.141 29.806 243.947 20 256 20c12.054 0 21.859 9.806 21.859 21.859 0 5.523 4.478 10 10 10h14.252c9.662 0 18.401 4.005 24.661 10.435.085.097.154.203.243.297 7.538 7.952 9.493 17.561 9.516 28.122.003 1.508.016 3.017.016 4.524v4.531H175.454v-4.531c0-12.153.701-23.378 9.531-32.646.089-.094.159-.201.244-.297 6.259-6.43 14.999-10.435 24.66-10.435h14.252zM416.753 492H95.247V65.693h64.265c-.024.06-.045.121-.069.182a54.851 54.851 0 0 0-3.963 19.362h-30.688c-5.523 0-10 4.477-10 10v257.217c0 5.523 4.477 10 10 10s10-4.477 10-10V105.237h20.662v4.531c0 5.523 4.477 10 10 10h181.094c5.522 0 10-4.477 10-10v-4.531h20.662v20.002c0 5.523 4.477 10 10 10 5.522 0 10-4.477 10-10V95.237c0-5.523-4.478-10-10-10h-30.688a54.462 54.462 0 0 0-3.977-19.396c-.021-.049-.037-.099-.057-.147h64.265V492z"
												/>
												<path
													d="M256.001 376.329c53.752 0 97.482-43.731 97.482-97.483s-43.73-97.482-97.482-97.482-97.482 43.73-97.482 97.482c-.001 53.752 43.73 97.483 97.482 97.483zm0-174.965c42.724 0 77.482 34.758 77.482 77.482 0 42.725-34.759 77.483-77.482 77.483-42.724 0-77.482-34.759-77.482-77.483-.001-42.724 34.757-77.482 77.482-77.482z"
												/>
												<path
													d="M235.671 320.435c1.953 1.953 4.512 2.929 7.071 2.929s5.119-.977 7.071-2.929l53.032-53.033c3.905-3.905 3.905-10.237 0-14.142-3.906-3.904-10.236-3.905-14.143 0l-45.961 45.962-19.446-19.445c-3.905-3.904-10.237-3.905-14.142 0-3.905 3.905-3.905 10.237.001 14.142l26.517 26.516zM124.792 402.453c5.508 0 10-4.492 10-10s-4.492-10-10-10-10 4.492-10 10 4.492 10 10 10zM387.21 155.239c-5.508 0-10 4.492-10 10s4.492 10 10 10c5.507 0 10-4.492 10-10s-4.494-10-10-10z"
												/>
											</svg>
										</v-avatar>

										<div>
											<h3 class="dark-text font-600 mb-3">
												<I18nVue t="CorporateCustomers.Cards.TradeAcquiring.TAB1.card3" />
											</h3>

											<h4 class="grey--text">
												<I18nVue t="CorporateCustomers.Cards.TradeAcquiring.TAB1.card31" />
											</h4>
										</div>
									</div>
								</div>
							</v-col>
							<v-col lg="6" md="6">
								<div
									class="app-slide-card pa-4 px-sm-8 py-sm-6 rounded-lg overflow-hidden p-relative h-100 mr-0 mr-md-3 mb-3"
									style="min-height: auto"
								>
									<div class="d-flex align-center">
										<v-avatar color="danger" size="80" class="mr-8">
											<svg
												id="icon-declaration"
												viewBox="0 0 512 512"
												class="size-lg"
												style="fill: #fff"
											>
												<path
													d="M387.21 195.239c-5.523 0-10 4.477-10 10v247.216H134.792v-20.002c0-5.523-4.477-10-10-10s-10 4.477-10 10v30.002c0 5.523 4.477 10 10 10H387.21c5.522 0 10-4.477 10-10V205.239c0-5.522-4.478-10-10-10z"
												/>
												<path
													d="M426.753 45.693H338.32c-9.629-8.596-22.316-13.835-36.209-13.835h-5.459C292.158 13.591 275.636 0 256.001 0c-19.635 0-36.157 13.591-40.652 31.859h-5.46c-13.893 0-26.58 5.238-36.208 13.835H85.247c-5.523 0-10 4.477-10 10V502c0 5.523 4.477 10 10 10h341.507c5.523 0 10-4.477 10-10V55.693c-.001-5.523-4.478-10-10.001-10zm-202.612 6.166c5.523 0 10-4.477 10-10C234.141 29.806 243.947 20 256 20c12.054 0 21.859 9.806 21.859 21.859 0 5.523 4.478 10 10 10h14.252c9.662 0 18.401 4.005 24.661 10.435.085.097.154.203.243.297 7.538 7.952 9.493 17.561 9.516 28.122.003 1.508.016 3.017.016 4.524v4.531H175.454v-4.531c0-12.153.701-23.378 9.531-32.646.089-.094.159-.201.244-.297 6.259-6.43 14.999-10.435 24.66-10.435h14.252zM416.753 492H95.247V65.693h64.265c-.024.06-.045.121-.069.182a54.851 54.851 0 0 0-3.963 19.362h-30.688c-5.523 0-10 4.477-10 10v257.217c0 5.523 4.477 10 10 10s10-4.477 10-10V105.237h20.662v4.531c0 5.523 4.477 10 10 10h181.094c5.522 0 10-4.477 10-10v-4.531h20.662v20.002c0 5.523 4.477 10 10 10 5.522 0 10-4.477 10-10V95.237c0-5.523-4.478-10-10-10h-30.688a54.462 54.462 0 0 0-3.977-19.396c-.021-.049-.037-.099-.057-.147h64.265V492z"
												/>
												<path
													d="M256.001 376.329c53.752 0 97.482-43.731 97.482-97.483s-43.73-97.482-97.482-97.482-97.482 43.73-97.482 97.482c-.001 53.752 43.73 97.483 97.482 97.483zm0-174.965c42.724 0 77.482 34.758 77.482 77.482 0 42.725-34.759 77.483-77.482 77.483-42.724 0-77.482-34.759-77.482-77.483-.001-42.724 34.757-77.482 77.482-77.482z"
												/>
												<path
													d="M235.671 320.435c1.953 1.953 4.512 2.929 7.071 2.929s5.119-.977 7.071-2.929l53.032-53.033c3.905-3.905 3.905-10.237 0-14.142-3.906-3.904-10.236-3.905-14.143 0l-45.961 45.962-19.446-19.445c-3.905-3.904-10.237-3.905-14.142 0-3.905 3.905-3.905 10.237.001 14.142l26.517 26.516zM124.792 402.453c5.508 0 10-4.492 10-10s-4.492-10-10-10-10 4.492-10 10 4.492 10 10 10zM387.21 155.239c-5.508 0-10 4.492-10 10s4.492 10 10 10c5.507 0 10-4.492 10-10s-4.494-10-10-10z"
												/>
											</svg>
										</v-avatar>

										<div>
											<h3 class="dark-text font-600 mb-3">
												<I18nVue t="CorporateCustomers.Cards.TradeAcquiring.TAB1.card4" />
											</h3>

											<h4 class="grey--text">
												<I18nVue t="CorporateCustomers.Cards.TradeAcquiring.TAB1.card41" />
											</h4>
										</div>
									</div>
								</div>
							</v-col>
							<v-col lg="6" md="6">
								<div
									class="app-slide-card pa-4 px-sm-8 py-sm-6 rounded-lg overflow-hidden p-relative h-100 mr-0 mr-md-3 mb-3"
									style="min-height: auto"
								>
									<div class="d-flex align-center">
										<v-avatar color="danger" size="80" class="mr-8">
											<svg
												id="icon-declaration"
												viewBox="0 0 512 512"
												class="size-lg"
												style="fill: #fff"
											>
												<path
													d="M387.21 195.239c-5.523 0-10 4.477-10 10v247.216H134.792v-20.002c0-5.523-4.477-10-10-10s-10 4.477-10 10v30.002c0 5.523 4.477 10 10 10H387.21c5.522 0 10-4.477 10-10V205.239c0-5.522-4.478-10-10-10z"
												/>
												<path
													d="M426.753 45.693H338.32c-9.629-8.596-22.316-13.835-36.209-13.835h-5.459C292.158 13.591 275.636 0 256.001 0c-19.635 0-36.157 13.591-40.652 31.859h-5.46c-13.893 0-26.58 5.238-36.208 13.835H85.247c-5.523 0-10 4.477-10 10V502c0 5.523 4.477 10 10 10h341.507c5.523 0 10-4.477 10-10V55.693c-.001-5.523-4.478-10-10.001-10zm-202.612 6.166c5.523 0 10-4.477 10-10C234.141 29.806 243.947 20 256 20c12.054 0 21.859 9.806 21.859 21.859 0 5.523 4.478 10 10 10h14.252c9.662 0 18.401 4.005 24.661 10.435.085.097.154.203.243.297 7.538 7.952 9.493 17.561 9.516 28.122.003 1.508.016 3.017.016 4.524v4.531H175.454v-4.531c0-12.153.701-23.378 9.531-32.646.089-.094.159-.201.244-.297 6.259-6.43 14.999-10.435 24.66-10.435h14.252zM416.753 492H95.247V65.693h64.265c-.024.06-.045.121-.069.182a54.851 54.851 0 0 0-3.963 19.362h-30.688c-5.523 0-10 4.477-10 10v257.217c0 5.523 4.477 10 10 10s10-4.477 10-10V105.237h20.662v4.531c0 5.523 4.477 10 10 10h181.094c5.522 0 10-4.477 10-10v-4.531h20.662v20.002c0 5.523 4.477 10 10 10 5.522 0 10-4.477 10-10V95.237c0-5.523-4.478-10-10-10h-30.688a54.462 54.462 0 0 0-3.977-19.396c-.021-.049-.037-.099-.057-.147h64.265V492z"
												/>
												<path
													d="M256.001 376.329c53.752 0 97.482-43.731 97.482-97.483s-43.73-97.482-97.482-97.482-97.482 43.73-97.482 97.482c-.001 53.752 43.73 97.483 97.482 97.483zm0-174.965c42.724 0 77.482 34.758 77.482 77.482 0 42.725-34.759 77.483-77.482 77.483-42.724 0-77.482-34.759-77.482-77.483-.001-42.724 34.757-77.482 77.482-77.482z"
												/>
												<path
													d="M235.671 320.435c1.953 1.953 4.512 2.929 7.071 2.929s5.119-.977 7.071-2.929l53.032-53.033c3.905-3.905 3.905-10.237 0-14.142-3.906-3.904-10.236-3.905-14.143 0l-45.961 45.962-19.446-19.445c-3.905-3.904-10.237-3.905-14.142 0-3.905 3.905-3.905 10.237.001 14.142l26.517 26.516zM124.792 402.453c5.508 0 10-4.492 10-10s-4.492-10-10-10-10 4.492-10 10 4.492 10 10 10zM387.21 155.239c-5.508 0-10 4.492-10 10s4.492 10 10 10c5.507 0 10-4.492 10-10s-4.494-10-10-10z"
												/>
											</svg>
										</v-avatar>

										<div>
											<h3 class="dark-text font-600 mb-3">
												<I18nVue t="CorporateCustomers.Cards.TradeAcquiring.TAB1.card5" />
											</h3>

											<h4 class="grey--text">
												<I18nVue t="CorporateCustomers.Cards.TradeAcquiring.TAB1.card51" />
											</h4>
										</div>
									</div>
								</div>
							</v-col>
							<v-col lg="6" md="6">
								<div
									class="app-slide-card pa-4 px-sm-8 py-sm-6 rounded-lg overflow-hidden p-relative h-100 mr-0 mr-md-3 mb-3"
									style="min-height: auto"
								>
									<div class="d-flex align-center">
										<v-avatar color="danger" size="80" class="mr-8">
											<svg
												id="icon-declaration"
												viewBox="0 0 512 512"
												class="size-lg"
												style="fill: #fff"
											>
												<path
													d="M387.21 195.239c-5.523 0-10 4.477-10 10v247.216H134.792v-20.002c0-5.523-4.477-10-10-10s-10 4.477-10 10v30.002c0 5.523 4.477 10 10 10H387.21c5.522 0 10-4.477 10-10V205.239c0-5.522-4.478-10-10-10z"
												/>
												<path
													d="M426.753 45.693H338.32c-9.629-8.596-22.316-13.835-36.209-13.835h-5.459C292.158 13.591 275.636 0 256.001 0c-19.635 0-36.157 13.591-40.652 31.859h-5.46c-13.893 0-26.58 5.238-36.208 13.835H85.247c-5.523 0-10 4.477-10 10V502c0 5.523 4.477 10 10 10h341.507c5.523 0 10-4.477 10-10V55.693c-.001-5.523-4.478-10-10.001-10zm-202.612 6.166c5.523 0 10-4.477 10-10C234.141 29.806 243.947 20 256 20c12.054 0 21.859 9.806 21.859 21.859 0 5.523 4.478 10 10 10h14.252c9.662 0 18.401 4.005 24.661 10.435.085.097.154.203.243.297 7.538 7.952 9.493 17.561 9.516 28.122.003 1.508.016 3.017.016 4.524v4.531H175.454v-4.531c0-12.153.701-23.378 9.531-32.646.089-.094.159-.201.244-.297 6.259-6.43 14.999-10.435 24.66-10.435h14.252zM416.753 492H95.247V65.693h64.265c-.024.06-.045.121-.069.182a54.851 54.851 0 0 0-3.963 19.362h-30.688c-5.523 0-10 4.477-10 10v257.217c0 5.523 4.477 10 10 10s10-4.477 10-10V105.237h20.662v4.531c0 5.523 4.477 10 10 10h181.094c5.522 0 10-4.477 10-10v-4.531h20.662v20.002c0 5.523 4.477 10 10 10 5.522 0 10-4.477 10-10V95.237c0-5.523-4.478-10-10-10h-30.688a54.462 54.462 0 0 0-3.977-19.396c-.021-.049-.037-.099-.057-.147h64.265V492z"
												/>
												<path
													d="M256.001 376.329c53.752 0 97.482-43.731 97.482-97.483s-43.73-97.482-97.482-97.482-97.482 43.73-97.482 97.482c-.001 53.752 43.73 97.483 97.482 97.483zm0-174.965c42.724 0 77.482 34.758 77.482 77.482 0 42.725-34.759 77.483-77.482 77.483-42.724 0-77.482-34.759-77.482-77.483-.001-42.724 34.757-77.482 77.482-77.482z"
												/>
												<path
													d="M235.671 320.435c1.953 1.953 4.512 2.929 7.071 2.929s5.119-.977 7.071-2.929l53.032-53.033c3.905-3.905 3.905-10.237 0-14.142-3.906-3.904-10.236-3.905-14.143 0l-45.961 45.962-19.446-19.445c-3.905-3.904-10.237-3.905-14.142 0-3.905 3.905-3.905 10.237.001 14.142l26.517 26.516zM124.792 402.453c5.508 0 10-4.492 10-10s-4.492-10-10-10-10 4.492-10 10 4.492 10 10 10zM387.21 155.239c-5.508 0-10 4.492-10 10s4.492 10 10 10c5.507 0 10-4.492 10-10s-4.494-10-10-10z"
												/>
											</svg>
										</v-avatar>

										<div>
											<h3 class="dark-text font-600 mb-3">
												<I18nVue t="CorporateCustomers.Cards.TradeAcquiring.TAB1.card6" />
											</h3>

											<h4 class="grey--text">
												<I18nVue t="CorporateCustomers.Cards.TradeAcquiring.TAB1.card61" />
											</h4>
										</div>
									</div>
								</div>
							</v-col>
						</v-row>


						<section class="py-8">
							<v-container>
								<h1 class="font-600 dark-text">
									<I18nVue t="CorporateCustomers.Cards.TradeAcquiring.TAB1.header2" />
								</h1>
								<span class="text--h3 grey--text d-block mt-2 mb-10">
                                     <I18nVue t="CorporateCustomers.Cards.TradeAcquiring.TAB1.header2_sub" />
                                </span>

								<v-row>
									<v-col lg="3" sm="6">
										<div
											class="app-card-simple text-center transition-all py-10 px-7 rounded-lg h-100 mx-2">
											<h1 class="font-300 text-extra-large primary-text">1</h1>

											<v-divider style="border-color: rgba(var(--border-color), 1)"
											           class="my-10" />

											<h4 class="dark-text">
												<I18nVue t="CorporateCustomers.Cards.TradeAcquiring.TAB1.step1" />
											</h4>
										</div>
									</v-col>

									<v-col lg="3" sm="6">
										<div
											class="app-card-simple text-center transition-all py-10 px-7 rounded-lg h-100 mx-2">
											<h1 class="font-300 text-extra-large primary-text">2</h1>

											<v-divider style="border-color: rgba(var(--border-color), 1)"
											           class="my-10" />

											<h4 class="dark-text">
												<I18nVue t="CorporateCustomers.Cards.TradeAcquiring.TAB1.step2" />
											</h4>
										</div>
									</v-col>

									<v-col lg="3" sm="6">
										<div
											class="app-card-simple text-center transition-all py-10 px-7 rounded-lg h-100 mx-2">
											<h1 class="font-300 text-extra-large primary-text">3</h1>

											<v-divider style="border-color: rgba(var(--border-color), 1)"
											           class="my-10" />

											<h4 class="dark-text">
												<I18nVue t="CorporateCustomers.Cards.TradeAcquiring.TAB1.step3" />
											</h4>
										</div>
									</v-col>

									<v-col lg="3" sm="6">
										<div
											class="
                                                transition-all
                                                py-10
                                                px-7
                                                rounded-lg
                                                h-100
                                                mx-2
                                                primary-bg
                                                d-flex
                                                flex-column
                                                align-start
                                            "
										>
											<h2 class="font-600">
												<I18nVue
													t="CorporateCustomers.Cards.TradeAcquiring.TAB1.order_terminal" />
											</h2>

											<h5 class="font-300 my-4">
												<I18nVue
													t="CorporateCustomers.Cards.TradeAcquiring.TAB1.order_terminal_sub" />
											</h5>

											<v-btn
												:to="{ name: 'ApplicationForTerminal' }"
												depressed
												color="rgba(var(--main-primary), 1)"
												rounded
												min-width="192"
												min-height="50"
												class="mt-auto"
												style="background-color: #fff"
											>
                                    <span class="primary-text font-700">
                                        <I18nVue t="CorporateCustomers.Cards.TradeAcquiring.TAB1.order" />
                                    </span>
											</v-btn>
										</div>
									</v-col>
								</v-row>
							</v-container>
						</section>


					</div>

					<div class="tab-content-items" data-item="content">
						<h2 class="font-600 dark-text mb-8">
							<I18nVue t="CorporateCustomers.Cards.TradeAcquiring.TAB2.header" />
						</h2>

						<v-row>
							<v-col lg="6" md="6">
								<div class="credit-widget pa-7 rounded-lg overflow-hidden mb-8">
									<div class="app-ul">
										<ul>
<!--											<li>-->
<!--												<I18nVue t="CorporateCustomers.Cards.TradeAcquiring.TAB2.li1" />-->
<!--											</li>-->
<!--											<li>-->
<!--												<I18nVue t="CorporateCustomers.Cards.TradeAcquiring.TAB2.li2" />-->
<!--											</li>-->
											<li>
												<I18nVue t="CorporateCustomers.Cards.TradeAcquiring.TAB2.li3" />
											</li>
										</ul>
									</div>
								</div>
							</v-col>
						</v-row>
					</div>

					<div class="tab-content-items" data-item="content">
						<h2 class="font-600 dark-text mb-8">
							<I18nVue t="CorporateCustomers.Cards.TradeAcquiring.TAB3.header" />
						</h2>
						<v-row>
							<v-col lg="6" md="6">
								<div class="credit-widget pa-7 rounded-lg overflow-hidden mb-8 d-flex align-center">
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
											<I18nVue t="CorporateCustomers.Cards.TradeAcquiring.TAB3.name" />
										</h3>
										<h5 class="grey--text font-600 mt-1">
											<I18nVue t="CorporateCustomers.Cards.TradeAcquiring.TAB3.name_sub" />
										</h5>
									</div>
								</div>
							</v-col>
						</v-row>
					</div>
				</div>
			</v-container>
		</div>
	</div>
</template>

<script>
import I18nVue from "@/I18nVue";
import { appTab } from "@/utils/frontend";

export default {
	name: "index",
	components: {
		I18nVue
	},
	mounted() {
		const $tabHeaderItems = document.querySelectorAll("[data-item=\"header\"]");
		const $tabContentItems = document.querySelectorAll("[data-item=\"content\"]");

		appTab($tabHeaderItems, $tabContentItems);
	}
};
</script>

<style scoped>

</style>
