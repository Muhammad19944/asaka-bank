<template>
	<div class="user-application-form">
		<app-card>
			<div class="form-wrap pa-5 px-6">
				<div class="d-flex align-center mb-8">
					<h4 v-if='TYPE === "Create"' class="text--primary text-uppercase font-700 mr-4">
						{{ $t("application_form") }}
					</h4>
					<h4 v-else class="text--primary text-uppercase font-700 mr-4">
						{{ $t("Dashboard.read") }}
					</h4>

					<v-divider style="border-color: rgb(var(--border-color), 1)"></v-divider>
				</div>

				<div class="form-wrap-body">
					<template v-if="TYPE === 'Create'">
						<v-row class="mb-5">
							<!-- Template will show when user wanna create an application -->
							<template v-if="TYPE !== 'Read'">
								<v-col md="12">
									<div class="admin-tabs">
										<v-tabs
											height="56"
											v-model="tab1"
											hide-slider
											class="mb-0 mb-5 px-2"
										>
											<v-tab class="transition-ease-in-out">
												<h5 class="font-600 dark-text text-transform-reset no-spacing px-2">
													<I18nVue t='LastCorrections.appForDeposit' />
												</h5>
											</v-tab>
											<v-tab class="transition-ease-in-out">
												<h5 class="font-600 dark-text text-transform-reset no-spacing px-2">
													<I18nVue t='LastCorrections.appForCard' />
												</h5>
											</v-tab>
											<v-tab class="transition-ease-in-out">
												<h5 class="font-600 dark-text text-transform-reset no-spacing px-2">
													<I18nVue t='LastCorrections.appForCredit' />
												</h5>
											</v-tab>
										</v-tabs>

										<v-tabs-items v-model="tab1">
											<v-tab-item>
												<deposit-application-tab-item />
											</v-tab-item>

											<v-tab-item>
												<card-application-tab-item />
											</v-tab-item>
											<v-tab-item>
												<credit-application-tab-item />
											</v-tab-item>
										</v-tabs-items>
									</div>
								</v-col>
							</template>
							<!-- End Template will show when user wanna create an application -->
						</v-row>
					</template>

					<template v-if="TYPE === 'Read'">
						<v-row>
							<template v-if="formRequestModel.application_outcome">
								<v-col md="12">
									<v-alert type="info" class="mb-0">
										<h5 class="mb-1">{{ formRequestModel.application_outcome.text }}</h5>
										<span class="text-small">{{ formRequestModel.application_outcome.created_date | filterDateAndTime }}</span>
									</v-alert>
								</v-col>
							</template>

							<v-col md="4">
								<div class="app-form-group app-form-group__small no-shadow mb-2">
									<h5 class="font-600 dark-text mb-1">
										<I18nVue t='Services.OpenCard.FISH'/>
									</h5>

									<v-text-field
										v-model="formRequestModel.full_name"
										:readonly="TYPE === 'Read'"
										outlined
										hide-details
									>
									</v-text-field>
								</div>
							</v-col>

							<v-col md="4">
								<div class="app-form-group app-form-group__small no-shadow mb-2">
									<h5 class="font-600 dark-text mb-1">
										<I18nVue t='Services.OpenCard.phone'/>
									</h5>

									<v-text-field
										v-model="formRequestModel.phone"
										:readonly="TYPE === 'Read'"
										outlined
										hide-details
									>
									</v-text-field>
								</div>
							</v-col>

							<v-col md="4">
								<div class="app-form-group app-form-group__small no-shadow mb-2">
									<h5 class="font-600 dark-text mb-1">
										<I18nVue t='Services.OpenCard.mail'/>
									</h5>

									<v-text-field
										v-model="formRequestModel.email"
										:readonly="TYPE === 'Read'"
										outlined
										hide-details
									>
									</v-text-field>
								</div>
							</v-col>

							<v-col md="4">
								<div class="app-form-group app-form-group__small no-shadow mb-2">
									<h5 class="font-600 dark-text mb-1">
										<I18nVue t='Services.OpenCard.stir'/>
									</h5>

									<v-text-field
										v-model="formRequestModel.tax_inn"
										:readonly="TYPE === 'Read'"
										outlined
										hide-details
									>
									</v-text-field>
								</div>
							</v-col>

							<template v-if="$route.params.type === 'deposit'">
								<v-col md="4">
									<div class="app-form-group app-form-group__small no-shadow mb-2">
										<h5 class="font-600 dark-text mb-1">
											<I18nVue t='Services.OpenCard.deposit_type'/>
										</h5>

										<template v-if="$i18n.locale === 'uz'">
											<v-text-field
												v-model="formRequestModel.deposit && formRequestModel.deposit.title_uz"
												:readonly="TYPE === 'Read'"
												outlined
												hide-details
											>
											</v-text-field>
										</template>

										<template v-if="$i18n.locale === 'ru'">
											<v-text-field
												v-model="formRequestModel.deposit && formRequestModel.deposit.title_ru"
												item-text="name_ru"
												item-value="id"
												:readonly="TYPE === 'Read'"
												outlined
												hide-details
											>
											</v-text-field>
										</template>

										<template v-if="$i18n.locale === 'en'">
											<v-text-field
												v-model="formRequestModel.deposit && formRequestModel.deposit.title_en"
												item-text="name_en"
												item-value="id"
												:readonly="TYPE === 'Read'"
												outlined
												hide-details
											>
											</v-text-field>
										</template>
									</div>
								</v-col>
							</template>

							<template v-if="$route.params.type === 'plastic'">
								<v-col md="4">
									<div class="app-form-group app-form-group__small no-shadow mb-2">
										<h5 class="font-600 dark-text mb-1">
											<I18nVue t='Services.OpenCard.card_type'/>
										</h5>

										<template v-if="$i18n.locale === 'uz'">
											<v-text-field
												v-model="formRequestModel.debit_card && formRequestModel.debit_card.name_uz"
												:readonly="TYPE === 'Read'"
												outlined
												hide-details
											>
											</v-text-field>
										</template>

										<template v-if="$i18n.locale === 'ru'">
											<v-text-field
												v-model="formRequestModel.debit_card && formRequestModel.debit_card.name_ru"
												item-text="name_ru"
												item-value="id"
												:readonly="TYPE === 'Read'"
												outlined
												hide-details
											>
											</v-text-field>
										</template>

										<template v-if="$i18n.locale === 'en'">
											<v-text-field
												v-model="formRequestModel.debit_card && formRequestModel.debit_card.name_en"
												item-text="name_en"
												item-value="id"
												:readonly="TYPE === 'Read'"
												outlined
												hide-details
											>
											</v-text-field>
										</template>
									</div>
								</v-col>
							</template>

							<v-col md="4">
								<div class="app-form-group app-form-group__small no-shadow mb-2">
									<h5 class="font-600 dark-text mb-1">
										<I18nVue t='Services.OpenCard.residence'/>
									</h5>

									<template v-if="$i18n.locale === 'uz'">
										<v-text-field
											v-model="formRequestModel.district && formRequestModel.district.name_uz"
											:readonly="TYPE === 'Read'"
											outlined
											hide-details
										>
										</v-text-field>
									</template>

									<template v-if="$i18n.locale === 'ru'">
										<v-text-field
											v-model="formRequestModel.district && formRequestModel.district.name_ru"
											item-text="name_ru"
											item-value="id"
											:readonly="TYPE === 'Read'"
											outlined
											hide-details
										>
										</v-text-field>
									</template>

									<template v-if="$i18n.locale === 'en'">
										<v-text-field
											v-model="formRequestModel.district && formRequestModel.district.name_en"
											item-text="name_en"
											item-value="id"
											:readonly="TYPE === 'Read'"
											outlined
											hide-details
										>
										</v-text-field>
									</template>
								</div>
							</v-col>

							<v-col md="4">
								<div class="app-form-group app-form-group__small no-shadow mb-2">
									<h5 class="font-600 dark-text mb-1">
										<I18nVue t='Services.OpenCard.filial'/>
									</h5>

									<template v-if="$i18n.locale === 'uz'">
										<v-text-field
											v-model="formRequestModel.filial && formRequestModel.filial.name_uz"
											:readonly="TYPE === 'Read'"
											outlined
											hide-details
										>
										</v-text-field>
									</template>

									<template v-if="$i18n.locale === 'ru'">
										<v-text-field
											v-model="formRequestModel.filial && formRequestModel.filial.name_ru"
											item-text="name_ru"
											item-value="id"
											:readonly="TYPE === 'Read'"
											outlined
											hide-details
										>
										</v-text-field>
									</template>

									<template v-if="$i18n.locale === 'en'">
										<v-text-field
											v-model="formRequestModel.filial && formRequestModel.filial.name_en"
											item-text="name_en"
											item-value="id"
											:readonly="TYPE === 'Read'"
											outlined
											hide-details
										>
										</v-text-field>
									</template>
								</div>
							</v-col>

							<template v-if="$route.params.type === 'credit'">
								<v-col md="4">
									<div class="app-form-group app-form-group__small no-shadow mb-2">
										<h5 class="font-600 dark-text mb-1">
											<I18nVue t='date_of_birth'/>
										</h5>

										<v-text-field
											v-model="formRequestModel.date_of_birth"
											:readonly="TYPE === 'Read'"
											outlined
											hide-details
										>
										</v-text-field>
									</div>
								</v-col>

								<v-col md="4">
									<div class="app-form-group app-form-group__small no-shadow mb-2">
										<h5 class="font-600 dark-text mb-1">
											Kredit turi
										</h5>

										<template v-if="$i18n.locale === 'uz'">
											<v-text-field
												v-model="formRequestModel.credit && formRequestModel.credit.title_uz"
												:readonly="TYPE === 'Read'"
												outlined
												hide-details
											>
											</v-text-field>
										</template>

										<template v-if="$i18n.locale === 'ru'">
											<v-text-field
												v-model="formRequestModel.credit && formRequestModel.credit.title_ru"
												item-text="name_ru"
												item-value="id"
												:readonly="TYPE === 'Read'"
												outlined
												hide-details
											>
											</v-text-field>
										</template>

										<template v-if="$i18n.locale === 'en'">
											<v-text-field
												v-model="formRequestModel.credit && formRequestModel.credit.title_en"
												item-text="name_en"
												item-value="id"
												:readonly="TYPE === 'Read'"
												outlined
												hide-details
											>
											</v-text-field>
										</template>
									</div>
								</v-col>

								<v-col md="4">
									<div class="app-form-group app-form-group__small no-shadow mb-2">
										<h5 class="font-600 dark-text mb-1">
											<I18nVue t='DepositCalculator.amount'/>
										</h5>

										<v-text-field
											v-model="formRequestModel.credit_amount"
											:readonly="TYPE === 'Read'"
											outlined
											hide-details
										>
										</v-text-field>
									</div>
								</v-col>

								<v-col md="4">
									<div class="app-form-group app-form-group__small no-shadow mb-2">
										<h5 class="font-600 dark-text mb-1">
											Kredit muddati
										</h5>

										<v-text-field
											v-model="formRequestModel.credit_period"
											:readonly="TYPE === 'Read'"
											outlined
											hide-details
										>
										</v-text-field>
									</div>
								</v-col>
							</template>

							<template v-if="$route.params.type === 'deposit'">
								<v-col md="4">
									<div class="app-form-group app-form-group__small no-shadow mb-2">
										<h5 class="font-600 dark-text mb-1">
											<I18nVue t='DepositCalculator.amount'/>
										</h5>

										<v-text-field
											v-model="formRequestModel.deposit_amt"
											prepend-icon=""
											:readonly="TYPE === 'Read'"
											hide-details
											show-size
											outlined
											:placeholder="$t('DepositCalculator.amount')"
										></v-text-field>
									</div>
								</v-col>
							</template>

							<template v-if="$route.params.type === 'deposit'">
								<v-col md="4">
									<div class="app-form-group app-form-group__small no-shadow mb-2">
										<h5 class="font-600 dark-text mb-1">
											<I18nVue t='DepositCalculator.credit_period'/>
										</h5>

										<v-text-field
											v-model="formRequestModel.deposit_period"
											prepend-icon=""
											:readonly="TYPE === 'Read'"
											hide-details
											show-size
											outlined
											:placeholder="$t('DepositCalculator.credit_period')"
										></v-text-field>
									</div>
								</v-col>
							</template>

							<v-col md="4">
								<div class="app-form-group app-form-group__small no-shadow mb-2">
									<file-upload
										:label="$t('Services.OpenCard.passport')"
										:value="formRequestModel.passport"
										:disabled="TYPE === 'Read'"
									/>
								</div>
							</v-col>

							<template v-if="!formRequestModel.application_outcome">
								<v-col md="4">
									<div class="app-form-group app-form-group__small no-shadow mb-2">
										<h5 class="font-600 dark-text mb-1">
											Статус
										</h5>

										<v-btn
											color="primary"
											depressed
											height="46"
											class="text-transform-reset"
										>
											<h5>В процессе</h5>
										</v-btn>
									</div>
								</v-col>
							</template>

							<template v-if="$route.params.type === 'credit'">
								<v-col md="6">
									<div class="app-form-group no-shadow mb-2">
										<h5 class="font-600 dark-text mb-1">
											<I18nVue t='credit_purpose'/>
										</h5>

										<v-textarea
											v-model="formRequestModel.credit_purpose"
											:readonly="TYPE === 'Read'"
											outlined
											hide-details
											:placeholder="$t('Services.OpenCard.message')"
										>
										</v-textarea>
									</div>
								</v-col>
							</template>

							<template v-if="!!formRequestModel.individual_design">
								<v-col md="4">
									<h5 class="font-600 dark-text mb-1">Individual karta dizayn rasmi</h5>

									<!-- For uploaded images -->
									<template v-if="!!formRequestModel.individual_design.file">
										<div class="file-upload-wrap rounded overflow-hidden p-relative">
											<img :src="$http.defaults.baseURL + formRequestModel.individual_design.file.url" alt="Card image" class="d-block img-cover"/>

											<div class="file-upload-actions p-absolute w-100 h-100 d-flex align-center justify-space-around px-2 transition-ease-in-out">
												<a
													:href="$http.defaults.baseURL + formRequestModel.individual_design.file.url"
													download
													target="_blank"
													rel="noopener noreferrer"
													class="rounded-circle d-flex align-center justify-center outline-transparent"
												>
													<download-icon size="1.2x" class="text-white d-block"/>
												</a>
											</div>
										</div>
									</template>
									<!-- End for uploaded images -->

									<!-- For local images -->
									<template v-if="!!formRequestModel.individual_design.local_image_name">
										<div class="file-upload-wrap rounded overflow-hidden p-relative">
											<img :src="formRequestModel.individual_design.local_image_name" alt="Card image" class="d-block img-cover"/>

											<div class="file-upload-actions p-absolute w-100 h-100 d-flex align-center justify-space-around px-2 transition-ease-in-out">
												<a
													:href="formRequestModel.individual_design.local_image_name"
													download
													target="_blank"
													rel="noopener noreferrer"
													class="rounded-circle d-flex align-center justify-center outline-transparent"
												>
													<download-icon size="1.2x" class="text-white d-block"/>
												</a>
											</div>
										</div>
									</template>
									<!-- End for local images -->
								</v-col>
							</template>

							<template v-if="!!formRequestModel.individual_design">
								<v-col md="12">
									<div class="card-template-container card-template-container__small p-relative">
										<div
											id="canvas-container"
											data-card="image"
											class="card-template-wrap card-wrap-canvas p-relative rounded-xl overflow-hidden"
											:style="{
												backgroundImage: formRequestModel.individual_design.file ?
												`url(${$http.defaults.baseURL + formRequestModel.individual_design.file.url})` :
												`url(${formRequestModel.individual_design.local_image_name})`}
											"
										>
											<div class="canvas-ratio pa-6 p-absolute w-100 h-100">
												<h2
													class="font-700 text-white"
													:class="{
														'right' : formRequestModel.individual_design.logo_loc === 'top_right',
														'text-black' : formRequestModel.individual_design.logo_loc === 'black'
													}"
													data-card="title"
												>ASAKA BANK</h2>

												<template v-if="formRequestModel.individual_design.logo_color === 'white'">
													<img src="/images/card-design/uzcard-1.png" alt="Uzcard Logo" data-card="logo" />
												</template>

												<template v-if="formRequestModel.individual_design.logo_color === 'black_white'">
													<img src="/images/card-design/uzcard-2.png" alt="Uzcard Logo" data-card="logo" />
												</template>

												<template v-if="formRequestModel.individual_design.logo_color === 'black'">
													<img src="/images/card-design/uzcard-3.png" alt="Uzcard Logo" data-card="logo" />
												</template>

												<template v-if="formRequestModel.individual_design.logo_color === 'colorful'">
													<img src="/images/card-design/uzcard-4.png" alt="Uzcard Logo" data-card="logo" />
												</template>
											</div>
										</div>
									</div>
								</v-col>
							</template>

							<v-col md="6">
								<div class="app-form-group no-shadow mb-2">
									<h5 class="font-600 dark-text mb-1">
										<I18nVue t='Services.OpenCard.message'/>
									</h5>

									<v-textarea
										v-model="formRequestModel.text"
										:readonly="TYPE === 'Read'"
										outlined
										hide-details
										:placeholder="$t('Services.OpenCard.message')"
									>
									</v-textarea>
								</div>
							</v-col>
						</v-row>

						<div class="mt-5">
							<go-back-button />

							<template v-if="TYPE !== 'Read'">
								<send-button
									@emit:up="update"
									:text="$t('Dashboard.update')"
								/>
							</template>

							<template v-if="TYPE === 'Read'">
								<send-button
									@emit:up="generatePDF"
									:text="$t('download_pdf')"
									class="mr-5"
								>
									<template>
										<download-icon size="1.3x" class="text-white" />
									</template>
								</send-button>
							</template>
						</div>
					</template>
				</div>
			</div>
		</app-card>

		<generate-pdf ref="html2Pdf">
			<template>
				<section class="pdf-item">
					<div class="pdf-item__content">
						<div style="display: flex; align-items: center; margin-bottom: 20px">
							<img src="/logo2.png" alt="" style="width: 90px; height: 90px">

							<div style="margin-left: 15px">
								<h4>AsakaBank</h4>
								<hr style="margin: 4px 0" />

								<span>{{ $t('stock_company') }}</span>
							</div>
						</div>

						<h1 style="font-size: 30px; font-family: var(--font-bold); text-align: center;">
							{{ $t('application') }}
							<span style="font-size: 26px; font-family: var(--font-bold)">№ {{ formRequestModel.id }}</span>
						</h1>

						<div style="padding: 12px; background: #0009; text-align: center; color: #fff; margin: 36px 0;">
							{{ $t('application_information') }}
						</div>

						<table>
							<tr>
								<td style="width: 200px; text-align: right; font-family: var(--font-bold)">{{ $t('language') }}</td>
								<td style="padding: 6px">
									<template v-if="$i18n.locale === 'uz'">
										<div style="margin-left: 12px">O'zbek</div>
									</template>
									<template v-if="$i18n.locale === 'ru'">
										<div style="margin-left: 12px">Русский</div>
									</template>
									<template v-if="$i18n.locale === 'en'">
										<div style="margin-left: 12px">English</div>
									</template>
								</td>
							</tr>

							<tr>
								<td style="width: 200px; text-align: right; font-family: var(--font-bold)">{{ $t('status') }}</td>
								<td style="padding: 6px">
									<template v-if="formRequestModel.status">
										<template v-if="$i18n.locale === 'uz'">
											<div style="margin-left: 12px">{{ formRequestModel.status.name_uz }}</div>
										</template>

										<template v-if="$i18n.locale === 'ru'">
											<div style="margin-left: 12px">{{ formRequestModel.status.name_ru }}</div>
										</template>

										<template v-if="$i18n.locale === 'en'">
											<div style="margin-left: 12px">{{ formRequestModel.status.name_en }}</div>
										</template>
									</template>
								</td>
							</tr>

							<tr>
								<td style="width: 200px; text-align: right; font-family: var(--font-bold)">{{ $t('org_structure') }}</td>
								<td style="padding: 6px">
									<template v-if="formRequestModel.filial">
										<template v-if="$i18n.locale === 'uz'">
											<div style="margin-left: 12px">{{ formRequestModel.filial.name_uz }}</div>
										</template>

										<template v-if="$i18n.locale === 'ru'">
											<div style="margin-left: 12px">{{ formRequestModel.filial.name_ru }}</div>
										</template>

										<template v-if="$i18n.locale === 'en'">
											<div style="margin-left: 12px">{{ formRequestModel.filial.name_en }}</div>
										</template>
									</template>
								</td>
							</tr>

							<!-- For credit template -->
							<template v-if="formRequestModel.credit">
								<tr>
									<td style="width: 200px; text-align: right; font-family: var(--font-bold)">{{ $t('Dashboard.credits.name') }}</td>
									<td style="padding: 6px">
										<template v-if="formRequestModel.credit">
											<template v-if="$i18n.locale === 'uz'">
												<div style="margin-left: 12px">{{ formRequestModel.credit.title_uz }}</div>
											</template>

											<template v-if="$i18n.locale === 'ru'">
												<div style="margin-left: 12px">{{ formRequestModel.credit.title_ru }}</div>
											</template>

											<template v-if="$i18n.locale === 'en'">
												<div style="margin-left: 12px">{{ formRequestModel.credit.title_en }}</div>
											</template>
										</template>
									</td>
								</tr>
							</template>

							<template v-if="formRequestModel.credit_amount">
								<tr>
									<td style="width: 200px; text-align: right; font-family: var(--font-bold)">{{ $t('Credits.text3') }}</td>
									<td style="padding: 6px">
										<template v-if="formRequestModel.credit_amount">
											<div style="margin-left: 12px">{{ formRequestModel.credit_amount }}</div>
										</template>
									</td>
								</tr>
							</template>

							<template v-if="formRequestModel.credit_period">
								<tr>
									<td style="width: 200px; text-align: right; font-family: var(--font-bold)">{{ $t('Dashboard.credits.period') }}</td>
									<td style="padding: 6px">
										<template v-if="formRequestModel.credit_period">
											<div style="margin-left: 12px">{{ formRequestModel.credit_period }} oy</div>
										</template>
									</td>
								</tr>
							</template>

							<template v-if="formRequestModel.credit_purpose">
								<tr>
									<td style="width: 200px; text-align: right; font-family: var(--font-bold)">{{ $t('credit_purpose') }}</td>
									<td style="padding: 6px">
										<template v-if="formRequestModel.credit_purpose">
											<div style="margin-left: 12px">{{ formRequestModel.credit_purpose }}</div>
										</template>
									</td>
								</tr>
							</template>

							<template v-if="formRequestModel.credit_purpose">
								<tr>
									<td style="width: 200px; text-align: right; font-family: var(--font-bold)">{{ $t('Dashboard.credits.initial_fee') }}</td>
									<td style="padding: 6px">
										<template v-if="formRequestModel.initial_payment">
											<div style="margin-left: 12px">{{ formRequestModel.initial_payment }}%</div>
										</template>
									</td>
								</tr>
							</template>

							<!-- End For credit template -->

							<!-- For card template -->
							<template v-if="formRequestModel.debit_card">
								<tr>
									<td style="width: 200px; text-align: right; font-family: var(--font-bold)">{{ $t('type') }}</td>
									<td style="padding: 6px">
										<template v-if="formRequestModel.debit_card">
											<div style="margin-left: 12px">{{ formRequestModel.debit_card.type }}</div>
										</template>
									</td>
								</tr>
							</template>

							<template v-if="formRequestModel.debit_card">
								<tr>
									<td style="width: 200px; text-align: right; font-family: var(--font-bold)">{{ $t('Services.OpenCard.card') }}</td>
									<td style="padding: 6px">
										<template v-if="formRequestModel.debit_card">
											<div style="margin-left: 12px">{{ formRequestModel.debit_card.name_uz }}</div>
										</template>
									</td>
								</tr>
							</template>
							<!-- End For card template -->

							<!-- For deposit template -->
							<template v-if="formRequestModel.deposit">
								<tr>
									<td style="width: 200px; text-align: right; font-family: var(--font-bold)">{{ $t('Dashboard.deposit.name') }}</td>
									<td style="padding: 6px">
										<template v-if="formRequestModel.deposit">
											<template v-if="$i18n.locale === 'uz'">
												<div style="margin-left: 12px">{{ formRequestModel.deposit.title_uz }}</div>
											</template>

											<template v-if="$i18n.locale === 'ru'">
												<div style="margin-left: 12px">{{ formRequestModel.deposit.title_ru }}</div>
											</template>

											<template v-if="$i18n.locale === 'en'">
												<div style="margin-left: 12px">{{ formRequestModel.deposit.title_en }}</div>
											</template>
										</template>
									</td>
								</tr>
							</template>

							<template v-if="formRequestModel.deposit_amt">
								<tr>
									<td style="width: 200px; text-align: right; font-family: var(--font-bold)">{{ $t('Services.OpenCard.deposit_quantity') }}</td>
									<td style="padding: 6px">
										<template v-if="formRequestModel.deposit_amt">
											<div style="margin-left: 12px">{{ formRequestModel.deposit_amt }}</div>
										</template>
									</td>
								</tr>
							</template>

							<template v-if="formRequestModel.deposit_period">
								<tr>
									<td style="width: 200px; text-align: right; font-family: var(--font-bold)">{{ $t('Dashboard.deposit.deposit_period') }}</td>
									<td style="padding: 6px">
										<template v-if="formRequestModel.deposit_period">
											<div style="margin-left: 12px">{{ formRequestModel.deposit_period }} oy</div>
										</template>
									</td>
								</tr>
							</template>
							<!-- End For deposit template -->
						</table>

						<div style="padding: 12px; background: #0009; text-align: center; color: #fff; margin: 36px 0;">
							{{ $t('dates') }}
						</div>

						<table>
							<tr>
								<td style="width: 200px; text-align: right; font-family: var(--font-bold)">{{ $t('date_creation') }}</td>
								<td style="padding: 6px">
									<template v-if="formRequestModel.created_date">
										<div style="margin-left: 12px">{{ formRequestModel.created_date | filterDateAndTimeHour }}</div>
									</template>
								</td>
							</tr>
						</table>
					</div>
				</section>

				<div class="html2pdf__page-break"/>

				<section class="pdf-item">
					<div class="pdf-item__content">
						<div style="padding: 12px; background: #0009; text-align: center; color: #fff; margin: 36px 0;">
							{{ $t('applicant_information') }}
						</div>

						<table>
							<tr>
								<td style="width: 200px; text-align: right; font-family: var(--font-bold)">{{ $t('Dashboard.AboutBank.fio') }}</td>
								<td style="padding: 6px">
									<template v-if="formRequestModel.full_name">
										<div style="margin-left: 12px">{{ formRequestModel.full_name }}</div>
									</template>
								</td>
							</tr>

							<tr>
								<td style="width: 200px; text-align: right; font-family: var(--font-bold)">{{ $t('Services.OpenCard.phone') }}</td>
								<td style="padding: 6px">
									<template v-if="formRequestModel.phone">
										<div style="margin-left: 12px">
											{{ formRequestModel.phone | VMask('+### (##) ###-##-##') }}
										</div>
									</template>
								</td>
							</tr>

							<tr>
								<td style="width: 200px; text-align: right; font-family: var(--font-bold)">{{ $t('Services.OpenCard.mail') }}</td>
								<td style="padding: 6px">
									<template v-if="formRequestModel.email">
										<div style="margin-left: 12px">{{ formRequestModel.email }}</div>
									</template>
								</td>
							</tr>

							<tr>
								<td style="width: 200px; text-align: right; font-family: var(--font-bold)">Tug'ilgan sana</td>
								<td style="padding: 6px">
									<template v-if="formRequestModel.date_of_birth">
										<div style="margin-left: 12px">{{ formRequestModel.date_of_birth }}</div>
									</template>
								</td>
							</tr>

							<tr>
								<td style="width: 200px; text-align: right; font-family: var(--font-bold)">{{ $t('REQUISITES.Requisites.row5') }}</td>
								<td style="padding: 6px">
									<template v-if="formRequestModel.tax_inn">
										<div style="margin-left: 12px">{{ formRequestModel.tax_inn }}</div>
									</template>
								</td>
							</tr>

							<tr>
								<td style="width: 200px; text-align: right; font-family: var(--font-bold)">{{ $t('region') }}</td>
								<td style="padding: 6px">
									<template v-if="formRequestModel.district">
										<template v-if="$i18n.locale === 'uz'">
											<div style="margin-left: 12px">{{ formRequestModel.district.name_uz }}</div>
										</template>

										<template v-if="$i18n.locale === 'ru'">
											<div style="margin-left: 12px">{{ formRequestModel.district.name_ru }}</div>
										</template>

										<template v-if="$i18n.locale === 'en'">
											<div style="margin-left: 12px">{{ formRequestModel.district.name_en }}</div>
										</template>
									</template>
								</td>
							</tr>

							<tr>
								<td style="width: 200px; text-align: right; font-family: var(--font-bold)">{{ $t('Services.OpenCard.message') }}</td>
								<td style="padding: 6px">
									<template v-if="formRequestModel.text">
										<div style="margin-left: 12px">{{ formRequestModel.text }}</div>
									</template>
								</td>
							</tr>
						</table>
					</div>
				</section>
			</template>
		</generate-pdf>
	</div>
</template>

<script>
import AppCard from "../../BaseComponents/AppCard";
import GoBackButton from "../../BaseComponents/GoBackButton";
import SendButton from "../../BaseComponents/SendButton";
import I18nVue from "../../../../I18nVue";
import FileUpload from "../../BaseComponents/FileUpload";
import DepositApplicationTabItem from "./DepositApplicationTabItem";
import CardApplicationTabItem from "./CardApplicationTabItem";
import CreditApplicationTabItem from "./CreditApplicationTabItem";
import GeneratePdf from "../../BaseComponents/GeneratePDF";
import { DownloadIcon } from "vue-feather-icons"

export default {
	name: "UserApplicationForm",
	props: {
		TYPE: {
			type: String,
			default: ""
		}
	},
	components: {
		AppCard,
		GoBackButton,
		SendButton,
		I18nVue,
		FileUpload,
		DepositApplicationTabItem,
		CardApplicationTabItem,
		CreditApplicationTabItem,
		GeneratePdf,
		DownloadIcon
	},
	data() {
		return {
			tab1: null,
			formRequestModel: {},
		}
	},
	mounted() {
		if(this.$route.params.id) {
			this.getOneUrlType()
		}
	},
	methods: {
		/*
		*
		* */
		generatePDF() {
			const { html2Pdf } = this.$refs

			html2Pdf.$children[0].generatePdf();
		},

		/*
		*
		* */
		getOneUrlType() {
			switch (this.$route.params.type) {
				case "deposit":
					this.getOne('deposit/application/action/')
					break;
				case "plastic":
					this.getOne('plastic_card/application/action/')
					break;
				default:
					this.getOne('credit_application/action/')
			}
		},
		/*
		*
		* */
		getOne(url) {
			this.$http.get(`/1/${url}${this.$route.params.id}/`)
			.then(({ data }) => {
				this.formRequestModel = data

				this.formRequestModel.deposit_amt = this.$options.filters.filterNumberFormatThousands(this.formRequestModel.deposit_amt)
			})
		},
		/*
		*
		* */
		update() {
			console.log('11')
		}
	}
};
</script>

<style>

</style>
