<template>
	<div class='about-bank-home'>
		<div class='hero-banner d-flex align-center'>
			<v-container>
				<v-row>
					<v-col lg='6' align-self='center' class='dark-text'>
						<h1 class='font-600 text-extra-large-3 mb-3'>
							<I18nVue t='asaka_bank' />
						</h1>

						<h2 class='font-300 dark-text'>
							<I18nVue t='AboutBank.your_bank' />
						</h2>

						<v-divider style='border-color: rgba(var(--border-color), 1)' class='mt-8 mb-10' />

						<h4>
							<I18nVue t='AboutBank.your_bank_sub' />
						</h4>

						<div class='credit-meta d-flex flex-wrap mb-13 w-100 mt-10'>
							<template>
								<div class='credit-meta-items d-flex align-center pb-3 dark-text'>
									<h1 class='text-extra-large-4 mr-3 line-base font-300 primary-text'>~ 22</h1>
									<div class='d-flex flex-column h-100'>
										<h5 class='font-600'>
											<I18nVue t='AboutBank.filial' />
										</h5>
										<span class='text-small d-block font-600 line-base pb-1 mt-auto'
										>
                                            <I18nVue t='AboutBank.around_republic' />
                                        </span
                                        >
									</div>
								</div>
							</template>

							<template>
								<div class='credit-meta-items d-flex align-center pb-3 dark-text'>
									<h1 class='text-extra-large-4 mr-3 line-base font-300 primary-text'>~ 22</h1>
									<div class='d-flex flex-column h-100'>
										<h5 class='font-600'>
											<I18nVue t='AboutBank.bank' />
										</h5>
										<span class='text-small d-block font-600 line-base pb-1 mt-auto'
										>
                                            <I18nVue t='AboutBank.service_centers' />
                                        </span
                                        >
									</div>
								</div>
							</template>

							<template>
								<div class='credit-meta-items d-flex align-center pb-3 dark-text'>
									<h1 class='text-extra-large-4 mr-3 line-base font-300 primary-text'>~ 6</h1>
									<div class='d-flex flex-column h-100'>
										<h5 class='font-600'>
											<I18nVue t='AboutBank.minibank' />
										</h5>
										<span class='text-small d-block font-600 line-base pb-1 mt-auto'
										>
                                            <I18nVue t='AboutBank.around_republic' />
                                        </span
                                        >
									</div>
								</div>
							</template>

							<template>
								<div class='credit-meta-items d-flex align-center pb-3 dark-text'>
									<h1 class='text-extra-large-4 mr-3 line-base font-300 primary-text'>~ 149</h1>
									<div class='d-flex flex-column h-100'>
										<h5 class='font-600'>
											<I18nVue t='AboutBank.bankomat' />
										</h5>
										<span class='text-small d-block font-600 line-base pb-1 mt-auto'
										>
                                            <I18nVue t='AboutBank.around_republic' />
                                        </span
                                        >
									</div>
								</div>
							</template>
						</div>
					</v-col>

					<v-spacer />

					<v-col lg='5' class='d-none d-lg-block'>
						<v-responsive :aspect-ratio='3 / 2.5'>
<!--							<img-->
<!--								src='/images/about_main-slide.png'-->
<!--								alt='App logo'-->
<!--								class='p-absolute w-100 h-100 img-cover'-->
<!--							/>-->
						</v-responsive>
					</v-col>
				</v-row>
			</v-container>
		</div>

		<section class='section section-grey'>
			<v-container>
				<v-row align='center'>
					<v-col md='4'>
						<div class='border-all rounded bg-white pa-8'>
							<h2 class='font-600 dark-text mb-2'>
								<I18nVue t='AboutBank.bank_customers' />
							</h2>

							<p class='mb-0'>
								<I18nVue t='AboutBank.bank_customers_sub' />
							</p>
						</div>
					</v-col>

					<v-col md='4' class='text-center'>
						<h1 class='text-extra-large-3 font-600 dark-text mb-2 primary-text'>+2 000 000</h1>

						<h3 class='dark-text font-600'>
							<I18nVue t='AboutBank.physical_persons' />
						</h3>
					</v-col>

					<v-col md='4' class='text-center'>
						<h1 class='text-extra-large-3 font-600 dark-text mb-2 primary-text'>+49 600</h1>

						<h3 class='dark-text font-600'>
							<I18nVue t='AboutBank.corporative' />
						</h3>
					</v-col>
				</v-row>
			</v-container>
		</section>

		<section class='section'>
			<v-container>
				<v-row align='center'>
					<v-col md='6'>
						<v-responsive :aspect-ratio='16 / 9'>
							<img
								src='/images/about_finance-slide.png'
								alt='Card image'
								class='p-absolute w-100 h-100 img-contain'
							/>
						</v-responsive>
					</v-col>

					<v-spacer />

					<v-col md='5'>
						<h1 class='text-extra-large-4 font-600 dark-text mb-4'>
							<I18nVue t='AboutBank.financial_indicators' />
						</h1>

						<p>
							<I18nVue t='AboutBank.financial_indicators_sub' />
						</p>

						<router-link :to="{name: 'FinancialIndicators'}"
						             class='app-card d-inline-block text-decoration-none mt-5'>
							<div class='card-anchor d-flex align-center'>
								<h4 class='font-600 mr-4'>
									<I18nVue t='more_details' />
								</h4>
								<div class='card-anchor-circle d-flex align-center justify-center transition-all'>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										width='1.2em'
										height='1.2em'
										viewBox='0 0 24 24'
										fill='none'
										stroke='currentColor'
										stroke-width='2'
										stroke-linecap='round'
										stroke-linejoin='round'
										class='primary-text transition-all feather feather-chevron-right'
									>
										<polyline points='9 18 15 12 9 6'></polyline>
									</svg>
								</div>
							</div>
						</router-link>
					</v-col>
				</v-row>
			</v-container>
		</section>

		<section class='section section-grey'>
			<v-container>
				<v-row>
					<v-col lg='5'>
						<h1 class='text-extra-large-4 font-600 dark-text mb-4'>
							<I18nVue t='AboutBank.bank_ach' />
						</h1>

						<p>
							<I18nVue t='AboutBank.bank_ach_sub' />
						</p>

						<router-link :to='{name: "BankAwards"}' class='app-card d-inline-block text-decoration-none mt-5'>
							<div class='card-anchor d-flex align-center'>
								<h4 class='font-600 mr-4'>
									<I18nVue t='AboutBank.other_ach' />
								</h4>
								<div class='card-anchor-circle d-flex align-center justify-center transition-all'>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										width='1.2em'
										height='1.2em'
										viewBox='0 0 24 24'
										fill='none'
										stroke='currentColor'
										stroke-width='2'
										stroke-linecap='round'
										stroke-linejoin='round'
										class='primary-text transition-all feather feather-chevron-right'
									>
										<polyline points='9 18 15 12 9 6'></polyline>
									</svg>
								</div>
							</div>
						</router-link>
					</v-col>

					<v-spacer />

					<v-col lg='6'>
						<v-row>
							<v-col sm='6'>
								<router-link
									:to='{name: "BankAwards"}'
									class='app-slide-card d-block text-decoration-none pa-6 rounded-lg overflow-hidden p-relative'
									style='min-height: auto'
								>
									<div class='d-flex align-center'>
										<v-avatar color='danger' size='60' class='mr-5'>
											<svg
												id='icon-favorites'
												viewBox='0 0 294.843 294.843'
												class='fill-white'
												style='width: 2rem; height: 2rem; border-radius: initial'
											>
												<path
													d='M199.628 175.487a4.818 4.818 0 0 1 1.741-5.358l37.422-27.455c5.958-4.371 8.333-11.736 6.049-18.763-2.283-7.028-8.533-11.591-15.922-11.625l-46.413-.215a4.818 4.818 0 0 1-4.558-3.311L163.4 64.684c-2.316-7.017-8.586-11.55-15.975-11.551-7.389 0-13.66 4.534-15.976 11.55l-6.557 19.859a5.999 5.999 0 0 0 3.816 7.578 5.999 5.999 0 0 0 7.579-3.816l6.557-19.859c1.014-3.073 3.762-3.312 4.581-3.312.818 0 3.566.239 4.58 3.312l14.547 44.077a16.807 16.807 0 0 0 15.897 11.55l46.413.215c3.236.015 4.313 2.555 4.565 3.333.253.778.875 3.465-1.734 5.379l-37.423 27.455a16.808 16.808 0 0 0-6.072 18.689l14.143 44.222c.986 3.083-1.097 4.892-1.759 5.372-.662.481-3.025 1.904-5.652.013l-37.677-27.114a16.81 16.81 0 0 0-19.654 0l-37.684 27.119c-2.627 1.89-4.991.468-5.652-.012-.662-.481-2.745-2.289-1.76-5.371l14.139-44.229a16.808 16.808 0 0 0-6.072-18.688L63.149 133c-2.609-1.914-1.987-4.602-1.734-5.379.253-.778 1.33-3.318 4.565-3.333l46.416-.215a6.001 6.001 0 0 0-.028-12h-.028l-46.416.215c-7.389.034-13.639 4.597-15.922 11.625-2.283 7.028.091 14.393 6.048 18.764l37.421 27.455a4.82 4.82 0 0 1 1.741 5.358l-14.138 44.229c-2.25 7.038.159 14.392 6.137 18.734 3 2.179 6.442 3.269 9.886 3.269 3.419 0 6.84-1.075 9.829-3.225l37.683-27.119a4.818 4.818 0 0 1 5.635 0l37.677 27.114c5.998 4.316 13.736 4.3 19.715-.044 5.979-4.343 8.387-11.697 6.136-18.736l-14.144-44.225z' />
												<path
													d='M147.421 0C66.133 0 0 66.133 0 147.421s66.133 147.421 147.421 147.421a6 6 0 0 0 0-12C72.75 282.843 12 222.093 12 147.421S72.75 12 147.421 12s135.421 60.75 135.421 135.421c0 46.48-23.42 89.182-62.65 114.228a6 6 0 0 0 6.457 10.115c42.7-27.262 68.193-73.745 68.193-124.342C294.843 66.133 228.71 0 147.421 0z' />
											</svg>
										</v-avatar>

										<div>
											<h4 class='dark-text font-600'>
												<I18nVue t='AboutBank.ach' />
											</h4>
										</div>
									</div>
								</router-link>
							</v-col>

							<v-col sm='6'>
								<router-link
									:to='{name: "Ratings"}'
									class='app-slide-card d-block text-decoration-none pa-6 rounded-lg overflow-hidden p-relative'
									style='min-height: auto'
								>
									<div class='d-flex align-center'>
										<v-avatar color='danger' size='60' class='mr-5'>
											<svg
												id='icon-positive-vote'
												viewBox='-4 0 511 512'
												class='fill-white'
												style='width: 2rem; height: 2rem; border-radius: initial'
											>
												<path
													d='M498.43 219.34c-5.309-8.016-13.356-13.54-22.711-15.633 6.035-11.543 5.789-25.945-1.899-37.55-5.468-8.262-13.718-13.598-22.699-15.618a37.03 37.03 0 0 0 3.492-9.828c1.961-9.668.047-19.52-5.402-27.742-5.309-8.02-13.356-13.543-22.711-15.633 6.035-11.543 5.79-25.945-1.898-37.555-11.239-16.972-34.2-21.64-51.176-10.398l-36.758 24.344a229.7 229.7 0 0 0-62.063-21.004c-6.835-10.38-14.785-20.028-23.683-28.653L235.715 9.332C224.578-1.465 207.113-3.086 194.184 5.48c-15.297 10.13-19.5 30.817-9.371 46.114.398.605.789 1.215 1.175 1.824-49.847 10.086-95.277 36.539-128.902 75.3C20.598 170.786.5 224.66.5 280.419c0 10.687.73 21.394 2.176 31.816 11.137 81.02 65.105 150.84 140.84 182.22C171.602 506.093 201.402 512 232.078 512c48.582 0 95.086-14.879 134.488-43.023 38.547-27.54 67.387-65.543 83.407-109.903A7.96 7.96 0 0 0 435 353.668c-14.918 41.309-41.781 76.7-77.691 102.352-36.684 26.207-79.989 40.058-125.23 40.058-23.392 0-46.231-3.691-68.09-10.973l64.773-42.894c.004-.004.008-.004.011-.008.004 0 .004-.004.008-.008l53.832-35.648h.004a21.586 21.586 0 0 0 9.29-13.777c1.156-5.684.03-11.48-3.173-16.313l-.71-1.078 10.456-6.926a35.462 35.462 0 0 1 25.27-5.46 51.33 51.33 0 0 0 36.582-7.911l86.734-57.437a216.133 216.133 0 0 1-2.933 22.359 7.958 7.958 0 0 0 6.375 9.281c.488.094.98.137 1.46.137a7.963 7.963 0 0 0 7.817-6.512c2.207-11.87 3.477-24.031 3.805-36.207l24.441-16.187c8.223-5.446 13.836-13.77 15.797-23.434 1.965-9.668.047-19.52-5.398-27.742zM321.21 83.96l-24.323 16.11-4.79-12.902c-2-5.383-4.292-10.66-6.831-15.824A213.7 213.7 0 0 1 321.21 83.96zM69.114 139.153c32.317-37.254 76.336-62.297 124.492-70.98 7.727 18.719 9.579 39.633 4.961 59.566l-19.41 83.856a21.52 21.52 0 0 0-11.472-6.41 21.537 21.537 0 0 0-16.313 3.171l-54.98 36.407c-.004 0-.004 0-.008.004 0 0-.004 0-.004.004L17.082 297.28a218.43 218.43 0 0 1-.66-16.863c0-51.922 18.715-102.094 52.691-141.266zm207.192 250.442a5.766 5.766 0 0 1-2.485 3.68h.004l-47.281 31.308-87.754-130.871a7.96 7.96 0 0 0-13.223 8.867l87.7 130.797-67.496 44.7c-67.07-29.337-115.067-91.29-126.606-163.38l79.39-52.402 9.137 13.633a7.962 7.962 0 0 0 6.622 3.527 7.962 7.962 0 0 0 6.605-12.395l-9.074-13.535 48.32-31.894a5.723 5.723 0 0 1 4.344-.844 5.775 5.775 0 0 1 3.68 2.48L275.46 385.25a5.74 5.74 0 0 1 .844 4.344zM488.227 243.91a20.862 20.862 0 0 1-8.989 13.332l-27.941 18.504c-.008.004-.016.012-.027.016l-99.73 66.047a35.443 35.443 0 0 1-25.27 5.46 51.358 51.358 0 0 0-36.583 7.91l-10.457 6.926-87.859-132.668 22.711-98.105c5.848-25.273 2.766-51.895-8.375-75.086a7.8 7.8 0 0 0-.336-.707 112.61 112.61 0 0 0-7.285-12.738c-5.281-7.977-3.09-18.762 4.89-24.047 6.743-4.465 15.852-3.621 21.657 2.008l15.207 14.742c16.45 15.95 29.36 35.73 37.328 57.207l8.281 22.309.047.117.063.156c.058.137.113.262.171.367.16.336.336.668.547.985a7.956 7.956 0 0 0 11.032 2.242l84.91-56.227c9.656-6.394 22.715-3.742 29.11 5.914s3.741 22.715-5.915 29.11l-7.371 4.882s-.004 0-.008.004l-16.441 10.89c-.024.017-.04.032-.063.044-.094.066-.183.129-.258.191-3.398 2.496-4.277 7.242-1.921 10.797a7.959 7.959 0 0 0 11.035 2.242l16.453-10.898a20.872 20.872 0 0 1 15.77-3.063 20.854 20.854 0 0 1 13.327 8.989 20.863 20.863 0 0 1 3.075 15.777 20.862 20.862 0 0 1-8.989 13.332l-23.82 15.777a7.954 7.954 0 0 0-2.242 11.032 7.953 7.953 0 0 0 11.031 2.242l3.688-2.442 12.757-8.449c9.66-6.394 22.715-3.742 29.11 5.914 6.394 9.66 3.742 22.715-5.914 29.114l-11.899 7.878c-.062.04-.125.083-.187.125l-11.735 7.77a7.959 7.959 0 0 0-2.242 11.035 7.953 7.953 0 0 0 11.032 2.242l3.687-2.441s0-.004.004-.004l12.758-8.445a20.84 20.84 0 0 1 15.777-3.07c5.5 1.113 10.235 4.308 13.332 8.984a20.876 20.876 0 0 1 3.067 15.777zm0 0'
												></path>
											</svg>
										</v-avatar>

										<div>
											<h4 class='dark-text font-600'>
												<I18nVue t='AboutBank.ratings' />
											</h4>
										</div>
									</div>
								</router-link>
							</v-col>

							<v-col sm='6'>
								<router-link
									:to='{name: "AboutBankImportantFacts"}'
									class='app-slide-card d-block text-decoration-none pa-6 rounded-lg overflow-hidden p-relative'
									style='min-height: auto'
								>
									<div class='d-flex align-center'>
										<v-avatar color='danger' size='60' class='mr-5'>
											<svg
												id='icon-check-square'
												viewBox='0 0 249.425 249.425'
												class='fill-white'
												style='width: 2rem; height: 2rem; border-radius: initial'
											>
												<path
													d='M206.79 81.505a6 6 0 0 0-6 6v149.919H12V48.635h146.792a6 6 0 0 0 0-12H6a6 6 0 0 0-6 6v200.789a6 6 0 0 0 6 6h200.79a6 6 0 0 0 6-6V87.505a6 6 0 0 0-6-6z'
												></path>
												<path
													d='M247.667 1.758a5.998 5.998 0 0 0-8.485 0L80.416 160.523 41.023 121.13a5.998 5.998 0 0 0-8.485 0 5.999 5.999 0 0 0 0 8.484l43.636 43.636c1.171 1.172 2.707 1.758 4.243 1.758s3.071-.586 4.243-1.758L247.667 10.243a5.998 5.998 0 0 0 0-8.485z'
												></path>
											</svg>
										</v-avatar>

										<div>
											<h4 class='dark-text font-600'>
												<I18nVue t='AboutBank.important_facts' />
											</h4>
										</div>
									</div>
								</router-link>
							</v-col>

							<v-col sm='6'>
								<router-link
									:to='{name: "QualitySystem"}'
									class='app-slide-card d-block text-decoration-none pa-6 rounded-lg overflow-hidden p-relative'
									style='min-height: auto'
								>
									<div class='d-flex align-center'>
										<v-avatar color='danger' size='60' class='mr-5'>
											<svg
												id='icon-note'
												viewBox='0 0 294.842 294.842'
												class='fill-white'
												style='width: 2rem; height: 2rem; border-radius: initial'
											>
												<path
													d='M288.842 0H6a6 6 0 0 0-6 6v282.842a6 6 0 0 0 6 6h240.421a6 6 0 0 0 0-12H12V12h270.842v276.842a6 6 0 0 0 12 0V6a6 6 0 0 0-6-6z'
												></path>
												<path
													d='M65.815 62.421c-12.683 0-23 10.317-23 23s10.317 23 23 23 23-10.317 23-23-10.317-23-23-23zm0 34c-6.065 0-11-4.935-11-11s4.935-11 11-11 11 4.935 11 11-4.934 11-11 11zM246.815 79.421h-140a6 6 0 0 0 0 12h140a6 6 0 0 0 0-12zM65.815 124.421a6 6 0 0 0 0 12c6.065 0 11 4.935 11 11s-4.935 11-11 11-11-4.935-11-11a6 6 0 0 0-12 0c0 12.683 10.317 23 23 23s23-10.317 23-23-10.317-23-23-23zM246.815 141.421h-140a6 6 0 0 0 0 12h140a6 6 0 0 0 0-12zM65.815 186.421c-12.683 0-23 10.317-23 23s10.317 23 23 23 23-10.317 23-23-10.317-23-23-23zm0 34c-6.065 0-11-4.935-11-11s4.935-11 11-11 11 4.935 11 11-4.934 11-11 11zM246.815 203.421h-140a6 6 0 0 0 0 12h140a6 6 0 0 0 0-12z'
												></path>
											</svg>
										</v-avatar>

										<div>
											<h4 class='dark-text font-600'>
												<I18nVue t='AboutBank.menej_test' />
											</h4>
										</div>
									</div>
								</router-link>
							</v-col>
						</v-row>
					</v-col>
				</v-row>
			</v-container>
		</section>

		<!-- BEST OFFERS SECTION -->
		<section class='section'>
			<v-container class='p-relative'>
				<div class='view-title' data-pull='left'>
					<div class='d-flex align-center justify-space-between'>
						<h1 class='font-600 dark-text align-self-center mb-3'>
							<I18nVue t='AboutBank.bank_shareholders' />
						</h1>

						<div class='slide-arrows d-flex'>
							<button
								@click.prevent='slidePrev'
								class='slide-arrow d-flex align-center justify-center outline-transparent mr-5'
							>
								<chevron-left-icon size='1.5x' class='custom-class' />
							</button>

							<button
								@click.prevent='slideNext'
								class='slide-arrow d-flex align-center justify-center outline-transparent'
							>
								<chevron-right-icon size='1.5x' class='custom-class'></chevron-right-icon>
							</button>
						</div>
					</div>
				</div>
			</v-container>

			<div class='drag-left-space' data-pull='content'>
				<hooper :settings='hooperSettings' ref='carousel' class='outline-transparent'>
					<template v-for='item in shareHoldersList'>
						<slide style="height: auto" class="pb-8">
							<a :href='item.link' target="_blank" class='app-card text-decoration-none d-flex h-100'>
								<div class='credit-widget pa-8 mx-4 my-8 rounded-lg overflow-hidden d-flex flex-column w-100'>
									<h4 class='font-600 dark-text mb-8'>
										<span v-if='$i18n.locale === "en"' v-html='item.title_en' />
										<span v-if='$i18n.locale === "ru"' v-html='item.title_ru' />
										<span v-if='$i18n.locale === "uz"' v-html='item.title_uz' />
									</h4>

									<div class='app-card-external d-flex align-center justify-space-between mt-auto'>
										<div
											class='card-anchor-circle size-lg rounded-circle d-flex align-center justify-center transition-all'
										>
											<globe-icon size='1.5x' class='dark-grey'></globe-icon>
										</div>

										<div>
											<h1 class='text-extra-large-3 main-grey d-flex font-300'>
												{{ item.share_percent }} <span class='text--h3 ml-1 dark-text font-600'>%</span>
											</h1>
										</div>
									</div>
								</div>
							</a>
						</slide>
					</template>
				</hooper>
			</div>
		</section>
		<!-- END BEST OFFERS SECTION -->

		<section class='section-service section'>
			<v-container>
				<v-row>
					<v-col lg='4' sm='6'>
						<router-link
							:to="{ name: 'SMSNotification' }"
							class='app-slide-card pa-8 mx-2 rounded-lg overflow-hidden d-flex flex-column text-decoration-none p-relative'
						>
							<svg id='icon-investor' viewBox='0 -37 474 474'>
								<path
									d='M422.926 303H400v-10.848c2-1.992 4.992-4.156 7.293-6.515A72.308 72.308 0 0 0 428 234.977v-20.895c2.71.625 5.484.95 8.266.965 16.015.02 30.187-10.371 34.988-25.649 4.805-15.28-.875-31.906-14.024-41.054-13.125-9.149-30.746-8.09-43.28 1.289A70.505 70.505 0 0 0 396 132.664V92.973C396 71.809 379.04 55 358.656 55H280V38.8C280 17.64 263.164 0 242.777 0h-89.8C132.59 0 116 17.64 116 38.8V55H37.094C16.71 55 0 71.809 0 92.969v205.383C0 319.512 16.71 337 37.094 337h208.601A47.865 47.865 0 0 0 243 353.605v37.97c0 4.425 3.387 8.425 7.809 8.425h215.066c4.523-.188 8.098-3.898 8.125-8.426v-37.969C474 325.512 451.02 303 422.926 303zM384 306.21l-26.207 16.423L333 306.324v-3.691a65.136 65.136 0 0 0 24.242 4.457A70.184 70.184 0 0 0 384 301.633zm11.79-31.733c-10.11 10.609-24.126 16.613-38.782 16.613s-28.672-6.004-38.785-16.613a56.456 56.456 0 0 1-16.223-39.5v-21.32a146.689 146.689 0 0 0 21.137 1.62c3.191 0 6.554-.113 9.984-.386 24.711-1.961 44.723-11.29 58.535-27.2A59.566 59.566 0 0 0 412 208.5v26.48a56.435 56.435 0 0 1-16.21 39.497zm36.663-116.114a20.237 20.237 0 0 1 15.613 3.102c8.766 6.039 11.489 17.762 6.286 27.047-5.204 9.289-16.625 13.086-26.352 8.761v-5.222a70.461 70.461 0 0 0-6.027-28.422 22.055 22.055 0 0 1 10.48-5.266zm-20.746 29.508a47.002 47.002 0 0 1-10.727-18.11 7.996 7.996 0 0 0-6.644-5.98 8.002 8.002 0 0 0-8.04 3.914c-10.776 18.618-29 29.118-54.034 31.211-10.11.754-20.274.258-30.262-1.472v-5.383c.035-29.504 23.363-53.711 52.844-54.832 29.48-1.125 54.586 21.238 56.863 50.652zM132 38.801C132 26.46 141.41 16 152.973 16h89.804C254.34 16 264 26.46 264 38.8V55H132zM16 92.969C16 80.633 25.531 71 37.094 71h321.562C370.22 71 380 80.633 380 92.973v31.922a71.592 71.592 0 0 0-22.871-3.727c-39.086 0-71.129 31.8-71.129 70.883V219H37.094C25.53 219 16 209.437 16 197.102zM37.094 321C25.53 321 16 310.691 16 298.352V228.68A35.882 35.882 0 0 0 37.094 235h249.035a72.633 72.633 0 0 0 20.883 50.398c3.047 3.133 5.988 6.164 9.988 8.641V303h-23.242a50.925 50.925 0 0 0-38.88 18zM259 353.605A34.534 34.534 0 0 1 293.758 319h28.449L349 336.45V384h-90zM458 384h-93v-47.438L394.21 319h28.716A34.807 34.807 0 0 1 458 353.605zm0 0'
								></path>
								<path
									d='M340.898 226.398a8 8 0 0 0-8 8 2.732 2.732 0 1 1-5.46 0 8 8 0 0 0-16 0c0 10.348 8.386 18.735 18.73 18.735s18.73-8.387 18.73-18.735a8 8 0 0 0-8-8zm0 0M394.563 226.398a8 8 0 0 0-8 8c0 1.512-1.227 2.735-2.735 2.735s-2.73-1.223-2.73-2.735a8 8 0 0 0-16 0c0 10.348 8.386 18.735 18.73 18.735 10.348 0 18.735-8.387 18.735-18.735a8 8 0 0 0-8-8zm0 0M169 152h58a8 8 0 0 0 0-16h-58a8 8 0 0 0 0 16zm0 0'
								></path>
							</svg>

							<div class='pr-16 mt-auto'>
								<h2 class='font-600 dark-text my-2'>
									<I18nVue t='AboutBank.to_investors' />
								</h2>

								<h5 class='mb-0 main-grey'>
									<I18nVue t='AboutBank.to_investors_sub' />
								</h5>
							</div>

							<div class='slide-card-angle d-flex align-center justify-center'>
								<chevron-right-icon size='2x' class='text-white'></chevron-right-icon>
							</div>
						</router-link>
					</v-col>
					<v-col lg='4' sm='6'>
						<router-link
							:to="{ name: 'Career' }"
							class='app-slide-card pa-8 mx-2 rounded-lg overflow-hidden d-flex flex-column text-decoration-none p-relative'
						>
							<svg id='icon-career' viewBox='0 0 512 512'>
								<path
									d='M451.463 201.635l-.082-.336c-1.327-5.361-6.748-8.63-12.108-7.304-5.36 1.327-8.631 6.747-7.304 12.109l.06.243c1.109 4.576 5.2 7.645 9.709 7.645.78 0 1.573-.092 2.364-.284 5.366-1.302 8.663-6.707 7.361-12.073zM186.688 326.253c-24.86-15-39.702-41.266-39.702-70.26 0-8.962 1.435-17.768 4.264-26.172 1.762-5.233-1.053-10.905-6.286-12.666-5.233-1.76-10.904 1.054-12.666 6.287-3.522 10.464-5.308 21.416-5.308 32.552 0 36.063 18.456 68.73 49.368 87.383a9.995 9.995 0 0 0 13.726-3.397c2.853-4.728 1.333-10.873-3.396-13.727zM298.883 181.727c-18.987-17.877-43.813-27.723-69.904-27.723-12.219 0-24.175 2.142-35.535 6.364-5.176 1.925-7.812 7.68-5.888 12.857 1.924 5.177 7.679 7.813 12.857 5.888 9.124-3.392 18.734-5.112 28.567-5.112 20.975 0 40.932 7.914 56.194 22.285a9.96 9.96 0 0 0 6.852 2.72 9.971 9.971 0 0 0 7.282-3.145c3.785-4.02 3.594-10.349-.425-14.134z'
								></path>
								<path
									d='M502.001 259.006h-75.226V238.32c0-10.055-8.181-18.236-18.236-18.236h-13.423c-6.874-31.95-22.705-61.05-45.94-84.286-39.427-39.427-95.76-57.01-150.693-47.043-5.433.986-9.039 6.19-8.053 11.624.986 5.434 6.191 9.036 11.624 8.053 48.479-8.798 98.193 6.718 132.981 41.508 19.479 19.479 33.065 43.621 39.574 70.145h-54.586c-10.055 0-18.236 8.181-18.236 18.236v20.686h-75.226c-5.522 0-9.999 4.478-9.999 9.999v61.339c0 9.386 3.655 17.929 9.608 24.299v51.314c-39.008-.666-75.437-16.097-103.246-43.907-35.695-35.695-50.987-86.578-40.906-136.114 1.101-5.411-2.393-10.691-7.804-11.792-5.413-1.102-10.691 2.393-11.792 7.804C51 278.078 68.33 335.738 108.782 376.191c31.126 31.126 73.519 48.994 117.387 49.749v36.233c0 .938.063 1.86.174 2.768-114.021-1.418-206.346-94.595-206.346-208.946 0-35.757 9.095-70.709 26.37-101.683l33.737 33.897a10 10 0 0 0 7.087 2.946h62.89l61.653 61.653a9.967 9.967 0 0 0 7.07 2.929 9.962 9.962 0 0 0 7.07-2.929c3.905-3.905 3.905-10.236 0-14.142l-61.654-61.653v-62.89a9.998 9.998 0 0 0-2.938-7.079l-33.831-33.748c30.934-17.217 65.828-26.281 101.524-26.281 81.116 0 155.58 47.573 189.709 121.199a9.999 9.999 0 0 0 9.078 5.796 9.96 9.96 0 0 0 4.199-.93c5.01-2.323 7.189-8.267 4.867-13.277-18.119-39.088-46.821-72.211-83.006-95.787-37.147-24.205-80.319-36.998-124.846-36.998-41.022 0-81.088 10.929-116.198 31.641l-28.777-28.71a9.998 9.998 0 0 0-17.06 7.078v56.667H10.099a9.997 9.997 0 0 0-7.087 17.052l28.733 28.869C10.965 174.772 0 214.901 0 255.994c0 61.162 23.818 118.664 67.066 161.912 43.248 43.249 100.75 67.066 161.912 67.066l250.603.011c12.578 0 22.811-10.232 22.811-22.811V354.648c6.2-6.62 9.608-15.207 9.608-24.322v-61.322c0-5.521-4.477-9.998-9.999-9.998zM86.938 61.126l57.286 57.144v38.704L86.938 99.559V61.126zm-14.147 52.567l57.292 57.46H91.347l-57.189-57.46h38.633zm248.993 126.389h84.991v18.924h-84.991v-18.924zm160.609 176.9h-65.618c-5.522 0-9.999 4.478-9.999 9.999 0 5.521 4.477 9.999 9.999 9.999h65.618v25.191a2.816 2.816 0 0 1-2.812 2.814H261.237c-.072-.001-.141-.011-.213-.011h-12.152a2.81 2.81 0 0 1-2.706-2.802v-96.726c1.957.334 3.965.518 6.015.518h82.464c1.773 14.782 14.383 26.28 29.635 26.28 15.275 0 27.901-11.534 29.643-26.349l82.432.052h.023c2.037 0 4.046-.18 6.014-.513v51.548zm-127.97-54.594v-17.577h19.716v17.577c0 5.436-4.423 9.858-9.858 9.858-5.435 0-9.858-4.422-9.858-9.858zm137.579-32.062c0 4.176-1.626 8.1-4.58 11.051a15.52 15.52 0 0 1-11.044 4.573h-.01l-82.232-.052v-9.164c0-6.573-5.347-11.921-11.921-11.921h-35.871c-6.573 0-11.921 5.347-11.921 11.921v9.232h-82.242c-8.615 0-15.623-7.009-15.623-15.623v-51.339h255.443v51.322z'
								></path>
								<path
									d='M374.854 419.912a10.075 10.075 0 0 0-7.069-2.93c-2.64 0-5.209 1.069-7.079 2.93a10.065 10.065 0 0 0-2.92 7.069c0 2.63 1.06 5.209 2.92 7.068a10.1 10.1 0 0 0 7.079 2.931c2.63 0 5.2-1.07 7.069-2.931a10.071 10.071 0 0 0 2.93-7.068c0-2.629-1.07-5.209-2.93-7.069z'
								></path>
							</svg>

							<div class='pr-16 mt-auto'>
								<h2 class='font-600 dark-text my-2'>
									<I18nVue t='AboutBank.career' />
								</h2>

								<h5 class='mb-0 main-grey'>
									<I18nVue t='AboutBank.to_investors_sub' />
								</h5>
							</div>

							<div class='slide-card-angle d-flex align-center justify-center'>
								<chevron-right-icon size='2x' class='text-white'></chevron-right-icon>
							</div>
						</router-link>
					</v-col>

					<v-col lg='4' sm='6'>
						<router-link
							:to="{ name: 'Scoring' }"
							class='app-slide-card pa-8 mx-2 rounded-lg overflow-hidden d-flex flex-column text-decoration-none p-relative'
						>
							<svg id='icon-rating' viewBox='0 0 512 512'>
								<path
									d='M502 0H10C4.478 0 0 4.477 0 10v438c0 5.522 4.478 10 10 10h207.5c5.522 0 10-4.478 10-10s-4.478-10-10-10H20V91.949c.33.033.665.051 1.004.051H492v346h-19.468c-5.522 0-10 4.478-10 10s4.478 10 10 10H502c5.522 0 10-4.478 10-10V10c0-5.523-4.478-10-10-10zm-10 72H21.004c-.339 0-.674.018-1.004.051V20h472v52z'
								></path>
								<path
									d='M267.069 440.93C265.21 439.069 262.63 438 260 438s-5.21 1.069-7.07 2.93c-1.86 1.861-2.93 4.44-2.93 7.07s1.069 5.21 2.93 7.069c1.86 1.86 4.44 2.931 7.07 2.931s5.21-1.07 7.069-2.931C268.93 453.21 270 450.63 270 448s-1.07-5.21-2.931-7.07zM448 36H222.065c-5.522 0-10 4.477-10 10s4.478 10 10 10H448c5.522 0 10-4.477 10-10s-4.478-10-10-10zM111.069 38.93C109.21 37.07 106.63 36 104 36s-5.21 1.07-7.07 2.93C95.069 40.79 94 43.37 94 46s1.069 5.21 2.93 7.07C98.791 54.93 101.37 56 104 56s5.21-1.07 7.069-2.93C112.93 51.21 114 48.63 114 46s-1.07-5.21-2.931-7.07zM71.069 38.93C69.21 37.07 66.63 36 64 36s-5.21 1.07-7.07 2.93C55.069 40.79 54 43.37 54 46s1.069 5.21 2.93 7.07C58.791 54.93 61.37 56 64 56s5.21-1.07 7.069-2.93C72.93 51.21 74 48.63 74 46s-1.07-5.21-2.931-7.07zM151.069 38.93C149.21 37.07 146.63 36 144 36s-5.21 1.07-7.07 2.93S134 43.37 134 46s1.069 5.21 2.93 7.07c1.861 1.86 4.44 2.93 7.07 2.93s5.21-1.07 7.069-2.93C152.93 51.21 154 48.63 154 46s-1.07-5.21-2.931-7.07zM313.58 308.146a11.927 11.927 0 0 0-9.689-8.166l-25.659-3.722-11.48-23.247-.002-.004a11.927 11.927 0 0 0-10.758-6.683h-.005a11.927 11.927 0 0 0-10.758 6.692l-11.468 23.253-25.661 3.735a11.927 11.927 0 0 0-9.682 8.171 11.929 11.929 0 0 0 3.04 12.3l18.571 18.092-4.377 25.56a11.928 11.928 0 0 0 4.777 11.731 11.961 11.961 0 0 0 7.04 2.303c1.907 0 3.826-.46 5.6-1.393l22.945-12.071 22.953 12.06a11.919 11.919 0 0 0 12.636-.917c3.722-2.703 5.55-7.2 4.772-11.737l-4.39-25.554 18.562-18.102a11.927 11.927 0 0 0 3.033-12.301zm-38.569 19.022a11.984 11.984 0 0 0-3.448 10.623l2.357 13.723-12.334-6.48a11.99 11.99 0 0 0-11.161.008l-12.322 6.482 2.35-13.723A12.004 12.004 0 0 0 237 327.178l-9.974-9.716 13.777-2.006a11.991 11.991 0 0 0 9.035-6.567l6.158-12.487 6.164 12.481a12 12 0 0 0 9.038 6.565l13.779 1.998-9.966 9.722zM172.046 308.146a11.927 11.927 0 0 0-9.689-8.166l-25.659-3.722-11.48-23.247-.002-.004a11.927 11.927 0 0 0-10.758-6.683h-.005a11.927 11.927 0 0 0-10.758 6.692l-11.468 23.253-25.661 3.735a11.927 11.927 0 0 0-9.682 8.171 11.929 11.929 0 0 0 3.04 12.3l18.571 18.092-4.377 25.56a11.928 11.928 0 0 0 4.777 11.731 11.961 11.961 0 0 0 7.04 2.303c1.907 0 3.826-.46 5.6-1.393l22.945-12.071 22.953 12.06a11.919 11.919 0 0 0 12.636-.917 11.923 11.923 0 0 0 4.771-11.738l-4.39-25.553 18.562-18.103a11.923 11.923 0 0 0 3.034-12.3zm-38.569 19.022a11.998 11.998 0 0 0-3.449 10.623l2.357 13.722-12.333-6.479a11.99 11.99 0 0 0-11.161.008l-12.322 6.482 2.35-13.723a12.004 12.004 0 0 0-3.453-10.623l-9.974-9.716 13.777-2.006a11.991 11.991 0 0 0 9.035-6.567l6.158-12.487 6.164 12.481a12 12 0 0 0 9.038 6.565l13.779 1.998-9.966 9.722zM455.116 308.177a11.927 11.927 0 0 0-9.686-8.171l-25.657-3.735-11.469-23.255a11.926 11.926 0 0 0-10.757-6.69h-.005a11.926 11.926 0 0 0-10.758 6.683l-.002.004-11.48 23.247-25.661 3.722a11.927 11.927 0 0 0-9.688 8.166 11.927 11.927 0 0 0 3.033 12.301l18.563 18.103-4.392 25.556a11.927 11.927 0 0 0 4.772 11.735 11.926 11.926 0 0 0 12.637.917l22.952-12.06 22.949 12.073a11.995 11.995 0 0 0 5.595 1.391c2.478 0 4.938-.775 7.041-2.303a11.924 11.924 0 0 0 4.776-11.734l-4.376-25.557 18.572-18.093a11.927 11.927 0 0 0 3.041-12.3zm-38.584 19.005a11.998 11.998 0 0 0-3.45 10.617l2.35 13.725-12.317-6.48a12.018 12.018 0 0 0-11.174-.006l-12.325 6.476 2.357-13.723a11.998 11.998 0 0 0-3.448-10.622l-9.968-9.722 13.783-1.999a11.992 11.992 0 0 0 9.032-6.562l6.166-12.484 6.156 12.483a11.993 11.993 0 0 0 9.036 6.571l13.778 2.006-9.976 9.72zM448 118H64c-5.522 0-10 4.477-10 10v107.974c0 5.523 4.478 10 10 10h384c5.522 0 10-4.477 10-10V128c0-5.523-4.478-10-10-10zm-10 107.974H74V182h148.065c5.522 0 10-4.477 10-10s-4.478-10-10-10H74v-24h364v87.974z'
								></path>
								<path
									d='M472.532 465.87a33.828 33.828 0 0 0-16.299 4.164c-4.907-12.782-17.302-21.883-31.791-21.883-9.378 0-17.882 3.812-24.045 9.966-6.163-6.155-14.667-9.966-24.045-9.966-5.007 0-9.76 1.095-14.045 3.044v-58.997c0-18.772-15.272-34.045-34.046-34.045-18.772 0-34.045 15.272-34.045 34.045V502c0 5.522 4.478 10 10 10s10-4.478 10-10V392.199c0-7.744 6.301-14.045 14.045-14.045 7.745 0 14.046 6.301 14.046 14.045V502c0 5.522 4.478 10 10 10s10-4.478 10-10v-19.804c0-7.744 6.301-14.045 14.045-14.045s14.045 6.301 14.045 14.045V502c0 5.522 4.478 10 10 10s10-4.478 10-10v-19.804c0-7.744 6.301-14.045 14.045-14.045s14.045 6.301 14.045 14.045V502c0 5.522 4.478 10 10 10s10-4.478 10-10v-2.085c0-7.744 6.301-14.045 14.045-14.045 7.745 0 14.046 6.301 14.046 14.045 0 5.522 4.478 10 10 10s10-4.478 10-10c0-18.772-15.272-34.045-34.046-34.045zM274.069 164.93C272.21 163.07 269.63 162 267 162s-5.21 1.07-7.07 2.93c-1.86 1.86-2.93 4.44-2.93 7.07s1.069 5.21 2.93 7.07c1.861 1.86 4.44 2.93 7.07 2.93s5.21-1.07 7.069-2.93c1.86-1.86 2.931-4.44 2.931-7.07s-1.07-5.21-2.931-7.07z'
								></path>
							</svg>
							<div class='pr-16 mt-auto'>
								<h2 class='font-600 dark-text my-2'>
									<I18nVue t='AboutBank.tariffs' />
								</h2>

								<h5 class='mb-0 main-grey'>
									<I18nVue t='AboutBank.tariffs_sub' />
								</h5>
							</div>

							<div class='slide-card-angle d-flex align-center justify-center'>
								<chevron-right-icon size='2x' class='text-white'></chevron-right-icon>
							</div>
						</router-link>
					</v-col>
				</v-row>
			</v-container>
		</section>

		<section class='section'>
			<v-container>
				<v-row>
					<v-col lg='3'>
						<v-responsive :aspect-ratio='5 / 6.5'>
							<img
								src='/images/license.jpg'
								alt='License'
								class='p-absolute img-contain'
							/>
						</v-responsive>

						<div class='d-flex flex-wrap justify-center mt-1'>
							<a
								href="https://back.asakabank.uz/media/files/license.jpg"
								target="_blank"
								style="text-decoration: none"
							>
								<v-btn
									depressed
									color='danger'
									rounded min-width='130'
									min-height='50'
									class='mr-5 mt-5'>
                                <span class='font-700 text-white text-13'>
                                    <I18nVue t='AboutBank.see' />
                                </span>
								</v-btn>
							</a>

							<v-btn outlined color='danger' rounded min-width='175' min-height='50' class='mt-5'>
								<span class='font-700 text-13'><I18nVue t='AboutBank.other_docs' /></span>
							</v-btn>
						</div>
					</v-col>

					<v-col lg='9'>
						<google-map-widget />
					</v-col>
				</v-row>
			</v-container>
		</section>
	</div>
</template>

<script>
	import GoogleMapWidget from "../../../../components/GoogleMapWidget";
	import { ChevronRightIcon, ChevronLeftIcon, MapPinIcon, GlobeIcon } from "vue-feather-icons";
	import { Hooper, Slide } from "hooper";
	import "hooper/dist/hooper.css";
	import I18nVue from "@/I18nVue";

	export default {
		name: "index",
		components: {
			GoogleMapWidget,
			ChevronRightIcon,
			ChevronLeftIcon,
			MapPinIcon,
			GlobeIcon,
			Hooper,
			Slide,
			I18nVue
		},
		data() {
			return {
				hooperSettings: {
					itemsToShow: 4,
					wheelControl: false,
					infiniteScroll: true,
					breakpoints: {
						1600: {
							itemsToShow: 4
						},
						1264: {
							itemsToShow: 3
						},
						768: {
							itemsToShow: 2
						},
						0: {
							itemsToShow: 1
						}
					}
				},

				shareHoldersList: []
			};
		},
		mounted() {
			const $left = document.querySelector("[data-pull=\"left\"]").getBoundingClientRect();
			const $content = document.querySelector("[data-pull=\"content\"]");

			$content.style.paddingLeft = `${$left.left}px`;

			this.getList();
		},
		methods: {
			slidePrev() {
				this.$refs.carousel.slidePrev();
			},
			slideNext() {
				this.$refs.carousel.slideNext();
			},

			getList() {
				this.$http.get("/1/bank/shareholders/").then(({ data }) => {
					this.shareHoldersList = data.results;
					// console.log(this.shareHoldersList)
				});
			}
		}
	};
</script>

<style></style>
