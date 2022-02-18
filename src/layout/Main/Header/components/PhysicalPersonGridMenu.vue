<template>
	<v-row>
		<!-- For mobile -->
		<template v-if="isMobile">
			<v-col cols="12" class="px-0">
				<div class="primary-bg pa-4 text-white rounded text-center mb-4">
					<h4 class="font-600 d-block text-decoration-none">
						<I18nVue t="Nav.PrivateClients.title" />
					</h4>
				</div>
			</v-col>

			<v-col lg="3" md="4" sm="6" class="pa-0">
				<div class="grid-menu-items">
					<div class="app-collapse collapse-button-small">
						<v-expansion-panels accordion>
							<v-expansion-panel>
								<v-expansion-panel-header>
									<div class="d-flex align-center">
										<h3 class="font-600 d-block text-decoration-none">
											<I18nVue t="Nav.PrivateClients.Loans.title" />
										</h3>
									</div>
								</v-expansion-panel-header>

								<v-expansion-panel-content>
									<div class="mb-4">
										<router-link
											:to="{ name: 'Credits' }"
											v-on:click.native="close"
											class="
		                                        navigation-link
		                                        text-decoration-none text--h3
		                                        font-600
		                                        transition-all
		                                        pull-left
		                                        d-inline-block
		                                    "
										>
											<span>
												<I18nVue t="Nav.PrivateClients.Loans.title" />
											</span>
										</router-link>
									</div>

									<template v-for="credit in creditList">
										<div class="mb-4">
											<router-link
												v-on:click.native="close"
												v-if="credit.is_available"
												:to="{name: 'CreditsDetail', params: {id: credit.id}}"
												class="
													navigation-link
			                                        text-decoration-none text--h4
			                                        transition-all
			                                        pull-left
			                                        d-inline-block
												"
											>
												<I18nVue
													:uz="credit.title_uz"
													:ru="credit.title_ru"
													:en="credit.title_en"
												/>
											</router-link>
										</div>
									</template>

									<div class="mb-4">
										<h3 class="font-600 dark-text py-2 d-block text-decoration-none">
											<I18nVue t="Nav.PrivateClients.InteractiveServices.title" />
										</h3>
									</div>

									<div class="mb-4">
										<router-link
											:to="{name: 'CreditCalc'}"
											v-on:click.native="close"
											class="
		                                        navigation-link
		                                        text-decoration-none text--h4
		                                        transition-all
		                                        pull-left
		                                        d-inline-block
		                                    "
										>
											<span>
												<I18nVue t="Nav.PrivateClients.InteractiveServices.CreditCalculator" />
											</span>
										</router-link>
									</div>

									<div class="mb-4">
										<router-link
											:to="{name: 'OnlineCredit'}"
											v-on:click.native="close"
											class="
		                                        navigation-link
		                                        text-decoration-none text--h4
		                                        transition-all
		                                        pull-left
		                                        d-inline-block
		                                    "
										>
											<span>
												<I18nVue t="Nav.PrivateClients.InteractiveServices.OnlineLoan" />
											</span>
										</router-link>
									</div>

									<div class="mb-4">
										<router-link
											:to="{name: 'Scoring'}"
											v-on:click.native="close"
											class="
		                                        navigation-link
		                                        text-decoration-none text--h4
		                                        transition-all
		                                        pull-left
		                                        d-inline-block
		                                    "
										>
											<span>
												<I18nVue t="Nav.PrivateClients.InteractiveServices.Scoring" />
											</span>
										</router-link>
									</div>

									<div class="mb-4">
										<router-link
											:to="{name: 'ClientOnlinePolls'}"
											v-on:click.native="close"
											class="
		                                        navigation-link
		                                        text-decoration-none text--h4
		                                        transition-all
		                                        pull-left
		                                        d-inline-block
		                                    "
										>
											<span>
												<I18nVue t="online_polls" />
											</span>
										</router-link>
									</div>

									<div class="mb-4">
										<router-link
											:to="{name: 'FAQ'}"
											v-on:click.native="close"
											class="
		                                        navigation-link
		                                        text-decoration-none text--h4
		                                        transition-all
		                                        pull-left
		                                        d-inline-block
		                                    "
										>
											<span>
												<I18nVue t="Nav.PrivateClients.InteractiveServices.QuestionsAnswers" />
											</span>
										</router-link>
									</div>
								</v-expansion-panel-content>
							</v-expansion-panel>
						</v-expansion-panels>
					</div>
				</div>
			</v-col>

			<v-col lg="3" md="4" sm="6" class="pa-0">
				<div class="app-collapse collapse-button-small">
					<v-expansion-panels accordion>
						<v-expansion-panel>
							<v-expansion-panel-header>
								<div class="d-flex align-center">
									<h3 class="font-600 d-block text-decoration-none">
										<I18nVue t="Nav.PrivateClients.Cards.title" />
									</h3>
								</div>
							</v-expansion-panel-header>

							<v-expansion-panel-content>
								<div class="grid-menu-items">
									<div class="mb-4">
										<router-link
											:to="{ name: 'Cards' }"
											v-on:click.native="close"
											class="
		                                        navigation-link
		                                        text-decoration-none text--h3
		                                        font-600
		                                        transition-all
		                                        pull-left
		                                        d-inline-block
		                                    "
										>
											<span>
												<I18nVue t="Nav.PrivateClients.Cards.title" />
											</span>
										</router-link>
									</div>

									<template v-for="card in plasticCardList">
										<div class="mb-4">
											<router-link
												v-if="card.is_available"
												:to="{name: 'CardsDetail', params: {id: card.id}}"
												class="
													navigation-link
			                                        text-decoration-none text--h4
			                                        transition-all
			                                        pull-left
			                                        d-inline-block
												"
											>
												<I18nVue
													:uz="card.name_uz"
													:ru="card.name_ru"
													:en="card.name_en"
												/>
											</router-link>
										</div>
									</template>

									<!-- 2n -->
									<div class="mb-4">
										<h3 class="font-600 dark-text py-2 d-block text-decoration-none">
											<I18nVue t="Nav.PrivateClients.InteractiveServices.title" />
										</h3>
									</div>

									<div class="mb-4">
										<router-link
											:to="{ name: 'SMSNotification'}"
											v-on:click.native="close"
											class="
		                                        navigation-link
		                                        text-decoration-none text--h4
		                                        transition-all
		                                        pull-left
		                                        d-inline-block
		                                    "
										>
											<span>
												<I18nVue t="Nav.PrivateClients.InteractiveServices.SMSInforming" />
											</span>
										</router-link>
									</div>

									<div class="mb-4">
										<router-link
											:to="{ name: 'MobileBank'}"
											v-on:click.native="close"
											class="
		                                        navigation-link
		                                        text-decoration-none text--h4
		                                        transition-all
		                                        pull-left
		                                        d-inline-block
		                                    "
										>
											<span>
												<I18nVue t="Nav.PrivateClients.InteractiveServices.MobileBank" />
											</span>
										</router-link>
									</div>

									<div class="mb-4">
										<router-link
											:to="{ name: 'CardOpen'}"
											v-on:click.native="close"
											class="
		                                        navigation-link
		                                        text-decoration-none text--h4
		                                        transition-all
		                                        pull-left
		                                        d-inline-block
		                                    "
										>
											<span>
												<I18nVue t="Nav.PrivateClients.InteractiveServices.OpenPlasticCard" />
											</span>
										</router-link>
									</div>

									<div class="mb-4">
										<router-link
											:to="{ name: 'IndividualDesignCard'}"
											v-on:click.native="close"
											class="
		                                        navigation-link
		                                        text-decoration-none text--h4
		                                        transition-all
		                                        pull-left
		                                        d-inline-block
		                                    "
										>
											<span>
												<I18nVue t="Nav.PrivateClients.InteractiveServices.CustomizedCard" />
											</span>
										</router-link>
									</div>

									<div class="mb-4">
										<router-link
											:to="{ name: 'FAQ'}"
											v-on:click.native="close"
											class="
		                                        navigation-link
		                                        text-decoration-none text--h4
		                                        transition-all
		                                        pull-left
		                                        d-inline-block
		                                    "
										>
											<span>
												<I18nVue t="Nav.PrivateClients.InteractiveServices.QuestionsAnswers" />
											</span>
										</router-link>
									</div>

									<div class="mb-4">
										<router-link
											:to="{ name: 'CardRequisites'}"
											v-on:click.native="close"
											class="
		                                        navigation-link
		                                        text-decoration-none text--h4
		                                        transition-all
		                                        pull-left
		                                        d-inline-block
		                                    "
										>
											<span>
												<I18nVue t="Nav.PrivateClients.InteractiveServices.CardRequisites" />
											</span>
										</router-link>
									</div>
								</div>
							</v-expansion-panel-content>
						</v-expansion-panel>
					</v-expansion-panels>
				</div>
			</v-col>

			<v-col lg="3" md="4" sm="6" class="pa-0">
				<div class="app-collapse collapse-button-small">
					<v-expansion-panels accordion>
						<v-expansion-panel>
							<v-expansion-panel-header>
								<div class="d-flex align-center">
									<h3 class="font-600 d-block text-decoration-none">
										<I18nVue t="Nav.PrivateClients.Contributions.title" />
									</h3>
								</div>
							</v-expansion-panel-header>

							<v-expansion-panel-content>
								<div class="grid-menu-items">
									<div class="mb-4">
										<router-link
											:to="{ name: 'Deposits' }"
											v-on:click.native="close"
											class="
		                                        navigation-link
		                                        text-decoration-none text--h3
		                                        font-600
		                                        transition-all
		                                        pull-left
		                                        d-inline-block
		                                    "
										>
											<span>
												<I18nVue t="Nav.PrivateClients.Contributions.tab1" />
											</span>
										</router-link>
									</div>

									<template v-for="deposit in depositList">
										<div class="mb-4">
											<router-link
												v-on:click.native="close"
												v-if="deposit.is_available"
												:to="{name: 'DepositsDetail', params: {id: deposit.id}}"
												class="
													navigation-link
			                                        text-decoration-none text--h4
			                                        transition-all
			                                        pull-left
			                                        d-inline-block
												"
											>
												<div>
													<I18nVue
														:uz="deposit.title_uz"
														:ru="deposit.title_ru"
														:en="deposit.title_en"
													/>
													<template v-if="deposit.type === 'milliy_valyutada'">
														<span v-if="$i18n.locale === 'uz'" class="font-600">(Milliy valyutada)</span>
														<span v-if="$i18n.locale === 'ru'" class="font-600">(В нац. валюте)</span>
														<span v-if="$i18n.locale === 'en'" class="font-600">(In the national currency)</span>
													</template>

													<template v-if="deposit.type === 'aqsh_dollarida'">
														<span v-if="$i18n.locale === 'uz'" class="font-600">(AQSH dollarida)</span>
														<span v-if="$i18n.locale === 'ru'" class="font-600">(в USD)</span>
														<span v-if="$i18n.locale === 'en'" class="font-600">(in USD)</span>
													</template>

													<template v-if="deposit.type === 'yevroda_omonatlar'">
														<span v-if="$i18n.locale === 'uz'" class="font-600">(Yevroda omonatlar)</span>
														<span v-if="$i18n.locale === 'ru'" class="font-600">(в EURO)</span>
														<span v-if="$i18n.locale === 'en'" class="font-600">(in EURO)</span>
													</template>
												</div>
											</router-link>
										</div>
									</template>

									<!-- 3n -->
									<div class="mb-4">
										<h3 class="font-600 dark-text py-2 d-block text-decoration-none">
											<I18nVue t="Nav.PrivateClients.InteractiveServices.title" />
										</h3>
									</div>

									<div class="mb-4">
										<router-link
											:to="{ name: 'DepositCalc'}"
											v-on:click.native="close"
											class="
		                                        navigation-link
		                                        text-decoration-none text--h4
		                                        transition-all
		                                        pull-left
		                                        d-inline-block
		                                    "
										>
											<span>
												<I18nVue t="Nav.PrivateClients.InteractiveServices.DepositCalculator" />
											</span>
										</router-link>
									</div>

									<div class="mb-4">
										<router-link
											:to="{ name: 'DepositOpen'}"
											v-on:click.native="close"
											class="
		                                        navigation-link
		                                        text-decoration-none text--h4
		                                        transition-all
		                                        pull-left
		                                        d-inline-block
		                                    "
										>
											<span>
												<I18nVue t="Nav.PrivateClients.InteractiveServices.OpenDeposit" />
											</span>
										</router-link>
									</div>

									<div class="mb-4">
										<router-link
											:to="{ name: 'FAQ'}"
											v-on:click.native="close"
											class="
		                                        navigation-link
		                                        text-decoration-none text--h4
		                                        transition-all
		                                        pull-left
		                                        d-inline-block
		                                    "
										>
											<span>
												<I18nVue t="Nav.PrivateClients.InteractiveServices.QuestionsAnswers" />
											</span>
										</router-link>
									</div>
								</div>
							</v-expansion-panel-content>
						</v-expansion-panel>
					</v-expansion-panels>
				</div>
			</v-col>

			<v-col lg="3" md="4" sm="6" class="pa-0">
				<div class="app-collapse collapse-button-small">
					<v-expansion-panels accordion>
						<v-expansion-panel>
							<v-expansion-panel-header class="">
								<div class="d-flex align-center">
									<h3 class="font-600 d-block text-decoration-none">
										<I18nVue t="Nav.PrivateClients.MoneyTransfers.title" />
									</h3>
								</div>
							</v-expansion-panel-header>

							<v-expansion-panel-content>
								<div class="grid-menu-items">
									<div class="mb-4">
										<router-link
											:to="{ name: 'MoneyTransfer' }"
											v-on:click.native="close"
											class="
		                                        navigation-link
		                                        text-decoration-none text--h3
		                                        font-600
		                                        transition-all
		                                        pull-left
		                                        d-inline-block
		                                    "
										>
											<span>
												<I18nVue t="Nav.PrivateClients.MoneyTransfers.title" />
											</span>
										</router-link>
									</div>

									<template v-for="transfer in transferList">
										<div class="mb-4">
											<router-link
												v-on:click.native="close"
												v-if="transfer.is_available"
												:to="{name: 'MoneyTransferDetail', params: {id: transfer.id}}"
												class="
													navigation-link
			                                        text-decoration-none text--h4
			                                        transition-all
			                                        pull-left
			                                        d-inline-block
												"
											>
												<I18nVue
													:uz="transfer.title_uz"
													:ru="transfer.title_ru"
													:en="transfer.title_en"
												/>
											</router-link>
										</div>
									</template>

									<!-- 2n -->
									<div class="mb-4">
										<h3 class="font-600 dark-text py-2 d-block text-decoration-none">
											<I18nVue t="Nav.PrivateClients.MoneyTransfers.tab5" />
										</h3>
									</div>

									<div class="mb-4">
										<router-link
											:to="{ name: 'PaymentRoute', params: { id: 1 } }"
											v-on:click.native="close"
											class="
		                                        navigation-link
		                                        text-decoration-none text--h4
		                                        transition-all
		                                        pull-left
		                                        d-inline-block
		                                    "
										>
											<span>
												<I18nVue t="Nav.PrivateClients.MoneyTransfers.tab6" />
											</span>
										</router-link>
									</div>

									<div class="mb-4">
										<router-link
											:to="{ name: 'PaymentRoute', params: { id: 2 } }"
											v-on:click.native="close"
											class="
		                                        navigation-link
		                                        text-decoration-none text--h4
		                                        transition-all
		                                        pull-left
		                                        d-inline-block
		                                    "
										>
											<span>
												<I18nVue t="Nav.PrivateClients.MoneyTransfers.tab7" />
											</span>
										</router-link>
									</div>

									<div class="mb-4">
										<router-link
											:to="{ name: 'PaymentRoute', params: { id: 3 } }"
											v-on:click.native="close"
											class="
		                                        navigation-link
		                                        text-decoration-none text--h4
		                                        transition-all
		                                        pull-left
		                                        d-inline-block
		                                    "
										>
											<span>
												<I18nVue t="Nav.PrivateClients.MoneyTransfers.tab8" />
											</span>
										</router-link>
									</div>

									<div class="mb-4">
										<router-link
											:to="{ name: 'PaymentRoute', params: { id: 4 } }"
											v-on:click.native="close"
											class="
		                                        navigation-link
		                                        text-decoration-none text--h4
		                                        transition-all
		                                        pull-left
		                                        d-inline-block
		                                    "
										>
											<span>
												<I18nVue t="Nav.PrivateClients.MoneyTransfers.tab9" />
											</span>
										</router-link>
									</div>

									<div class="mb-4">
										<router-link
											:to="{ name: 'PaymentRoute', params: { id: 5 } }"
											v-on:click.native="close"
											class="
		                                        navigation-link
		                                        text-decoration-none text--h4
		                                        transition-all
		                                        pull-left
		                                        d-inline-block
		                                    "
										>
											<span>
												<I18nVue t="Nav.PrivateClients.MoneyTransfers.tab10" />
											</span>
										</router-link>
									</div>

									<div class="mb-4">
										<router-link
											:to="{ name: 'PaymentRoute', params: { id: 6 } }"
											v-on:click.native="close"
											class="
		                                        navigation-link
		                                        text-decoration-none text--h4
		                                        transition-all
		                                        pull-left
		                                        d-inline-block
		                                    "
										>
											<span>
												<I18nVue t="Nav.PrivateClients.MoneyTransfers.tab11" />
											</span>
										</router-link>
									</div>

									<div class="mb-4">
										<router-link
											:to="{ name: 'PaymentRoute', params: { id: 9 } }"
											v-on:click.native="close"
											class="
		                                        navigation-link
		                                        text-decoration-none text--h4
		                                        transition-all
		                                        pull-left
		                                        d-inline-block
		                                    "
										>
											<span>
												<I18nVue t="Nav.PrivateClients.MoneyTransfers.tab12" />
											</span>
										</router-link>
									</div>

									<div class="mb-4">
										<router-link
											:to="{ name: 'PaymentRoute', params: { id: 12 } }"
											v-on:click.native="close"
											class="
		                                        navigation-link
		                                        text-decoration-none text--h4
		                                        transition-all
		                                        pull-left
		                                        d-inline-block
		                                    "
										>
											<span>
												<I18nVue t="Nav.PrivateClients.MoneyTransfers.tab13" />
											</span>
										</router-link>
									</div>

									<div class="mb-4">
										<router-link
											:to="{ name: 'PaymentRoute', params: { id: 14 } }"
											v-on:click.native="close"
											class="
		                                        navigation-link
		                                        text-decoration-none text--h4
		                                        transition-all
		                                        pull-left
		                                        d-inline-block
		                                    "
										>
											<span>
												<I18nVue t="Nav.PrivateClients.MoneyTransfers.tab19" />
											</span>
										</router-link>
									</div>

									<div class="mb-4">
										<router-link
											:to="{ name: 'PaymentRoute', params: { id: 17 } }"
											v-on:click.native="close"
											class="
		                                        navigation-link
		                                        text-decoration-none text--h4
		                                        transition-all
		                                        pull-left
		                                        d-inline-block
		                                    "
										>
											<span>
												<I18nVue t="Nav.PrivateClients.MoneyTransfers.tab14" />
											</span>
										</router-link>
									</div>

									<div class="mb-4">
										<router-link
											:to="{ name: 'PaymentRoute', params: { id: 21 } }"
											v-on:click.native="close"
											class="
		                                        navigation-link
		                                        text-decoration-none text--h4
		                                        transition-all
		                                        pull-left
		                                        d-inline-block
		                                    "
										>
											<span>
												<I18nVue t="Nav.PrivateClients.MoneyTransfers.tab15" />
											</span>
										</router-link>
									</div>
									<!-- End 2n -->

									<!-- 3n -->
									<div class="mb-4">
										<h3 class="font-600 dark-text py-2 d-block text-decoration-none">
											<I18nVue t="Nav.PrivateClients.InteractiveServices.title" />
										</h3>
									</div>

									<div class="mb-4">
										<router-link
											:to="{ name: 'SMSNotification'}"
											v-on:click.native="close"
											class="
		                                        navigation-link
		                                        text-decoration-none text--h4
		                                        transition-all
		                                        pull-left
		                                        d-inline-block
		                                    "
										>
											<span>
												<I18nVue t="Nav.PrivateClients.InteractiveServices.SMSInforming" />
											</span>
										</router-link>
									</div>

									<div class="mb-4">
										<router-link
											:to="{ name: 'MobileBank'}"
											v-on:click.native="close"
											class="
		                                        navigation-link
		                                        text-decoration-none text--h4
		                                        transition-all
		                                        pull-left
		                                        d-inline-block
		                                    "
										>
											<span>
												<I18nVue t="Nav.PrivateClients.InteractiveServices.MobileBank" />
											</span>
										</router-link>
									</div>

									<div class="mb-4">
										<router-link
											:to="{ name: 'CardOpen'}"
											v-on:click.native="close"
											class="
		                                        navigation-link
		                                        text-decoration-none text--h4
		                                        transition-all
		                                        pull-left
		                                        d-inline-block
		                                    "
										>
											<span>
												<I18nVue t="Nav.PrivateClients.InteractiveServices.InternetBanking" />
											</span>
										</router-link>
									</div>

									<div class="mb-4">
										<router-link
											:to="{ name: 'FAQ'}"
											v-on:click.native="close"
											class="
		                                        navigation-link
		                                        text-decoration-none text--h4
		                                        transition-all
		                                        pull-left
		                                        d-inline-block
		                                    "
										>
											<span>
												<I18nVue t="Nav.PrivateClients.InteractiveServices.QuestionsAnswers" />
											</span>
										</router-link>
									</div>
									<!-- End 3n -->

									<!-- 4n -->
									<div class="mb-4">
										<router-link
											:to="{ name: 'CurrencyExchange' }"
											v-on:click.native="close"
											class="
		                                        navigation-link
		                                        text-decoration-none text--h3
		                                        font-600
		                                        transition-all
		                                        pull-left
		                                        d-inline-block
		                                    "
										>
											<span>
												<I18nVue t="Nav.PrivateClients.MoneyTransfers.tab16" />
											</span>
										</router-link>
									</div>
								</div>
							</v-expansion-panel-content>
						</v-expansion-panel>
					</v-expansion-panels>
				</div>
			</v-col>

			<v-col lg="3" md="4" sm="6" class="pa-0">
				<div class="app-collapse collapse-button-small">
					<v-expansion-panels accordion>
						<v-expansion-panel>
							<v-expansion-panel-header class="">
								<div class="d-flex align-center">
									<h3 class="font-600 d-block text-decoration-none">
										<I18nVue t="Nav.PrivateClients.StorageValuables" />
									</h3>
								</div>
							</v-expansion-panel-header>

							<v-expansion-panel-content>
								<div class="grid-menu-items">
									<div class="mb-4">
										<router-link
											:to="{ name: 'Securities' }"
											v-on:click.native="close"
											class="
		                                        navigation-link
		                                        text-decoration-none text--h4
		                                        transition-all
		                                        pull-left
		                                        d-inline-block
		                                    "
											>
												<span>
													<I18nVue t="Nav.PrivateClients.StorageValuables" />
												</span>
										</router-link>
									</div>
								</div>
							</v-expansion-panel-content>
						</v-expansion-panel>
					</v-expansion-panels>
				</div>
			</v-col>
		</template>

		<!-- For large devices -->
		<template v-else>
			<v-col lg="3" md="4" sm="6">
				<div class="grid-menu-items">
					<div class="mb-4">
						<router-link
							:to="{ name: 'Credits' }"
							v-on:click.native="close"
							class="
                                navigation-link
                                text-decoration-none text--h3
                                font-600
                                transition-all
                                pull-left
                                d-inline-block
                            "
						>
							<span>
								<I18nVue t="Nav.PrivateClients.Loans.title" />
							</span>
						</router-link>
					</div>

					<template v-for="credit in creditList">
						<div class="mb-4">
							<router-link
								v-on:click.native="close"
								v-if="credit.is_available"
								:to="{name: 'CreditsDetail', params: {id: credit.id}}"
								class="navigation-link text--h4 pull-left d-inline-block text-decoration-none transition-all"
							>
								<I18nVue
									:uz="credit.title_uz"
									:ru="credit.title_ru"
									:en="credit.title_en"
								/>
							</router-link>
						</div>
					</template>
				</div>
			</v-col>

			<v-col lg="3" md="4" sm="6">
				<div class="grid-menu-items">
					<div class="mb-4">
						<router-link
							:to="{ name: 'Cards' }"
							v-on:click.native="close"
							class="
                                navigation-link
                                text-decoration-none text--h3
                                font-600
                                transition-all
                                pull-left
                                d-inline-block
                            "
						>
							<span>
								<I18nVue t="Nav.PrivateClients.Cards.title" />
							</span>
						</router-link>
					</div>

					<template v-for="card in plasticCardList">
						<div class="mb-4">
							<router-link
								v-on:click.native="close"
								v-if="card.is_available"
								:to="{name: 'CardsDetail', params: {id: card.id}}"
								class="navigation-link text--h4 pull-left d-inline-block text-decoration-none transition-all"
							>
								<I18nVue
									:uz="card.name_uz"
									:ru="card.name_ru"
									:en="card.name_en"
								/>
							</router-link>
						</div>
					</template>
				</div>
			</v-col>

			<v-col lg="3" md="4" sm="6">
				<div class="grid-menu-items">
					<div class="mb-4">
						<router-link
							:to="{ name: 'Deposits' }"
							v-on:click.native="close"
							class="
                                navigation-link
                                text-decoration-none text--h3
                                font-600
                                transition-all
                                pull-left
                                d-inline-block
                            "
						>
							<span>
								<I18nVue t="Nav.PrivateClients.Contributions.title" />
							</span>
						</router-link>
					</div>

					<template v-for="deposit in depositList">
						<div class="mb-4">
							<router-link
								v-on:click.native="close"
								v-if="deposit.is_available"
								:to="{name: 'DepositsDetail', params: {id: deposit.id}}"
								class="navigation-link text--h4 pull-left d-inline-block text-decoration-none transition-all"
							>
								<div>
									<I18nVue
										:uz="deposit.title_uz"
										:ru="deposit.title_ru"
										:en="deposit.title_en"
									/>
									<template v-if="deposit.type === 'milliy_valyutada'">
										<span v-if="$i18n.locale === 'uz'" class="font-600">(Milliy valyutada)</span>
										<span v-if="$i18n.locale === 'ru'" class="font-600">(В нац. валюте)</span>
										<span v-if="$i18n.locale === 'en'" class="font-600">(In the national currency)</span>
									</template>

									<template v-if="deposit.type === 'aqsh_dollarida'">
										<span v-if="$i18n.locale === 'uz'" class="font-600">(AQSH dollarida)</span>
										<span v-if="$i18n.locale === 'ru'" class="font-600">(в USD)</span>
										<span v-if="$i18n.locale === 'en'" class="font-600">(in USD)</span>
									</template>

									<template v-if="deposit.type === 'yevroda_omonatlar'">
										<span v-if="$i18n.locale === 'uz'" class="font-600">(Yevroda omonatlar)</span>
										<span v-if="$i18n.locale === 'ru'" class="font-600">(в EURO)</span>
										<span v-if="$i18n.locale === 'en'" class="font-600">(in EURO)</span>
									</template>
								</div>
							</router-link>
						</div>
					</template>
				</div>
			</v-col>

      <!--PUL o'TKAZMALARI-->
			<v-col lg="3" md="4" sm="6">
				<div class="grid-menu-items">
					<div class="mb-4">
						<router-link
							:to="{ name: 'MoneyTransfer' }"
							v-on:click.native="close"
							class="
                                navigation-link
                                text-decoration-none text--h3
                                font-600
                                transition-all
                                pull-left
                                d-inline-block
                            "
						>
							<span>
								<I18nVue t="Nav.PrivateClients.MoneyTransfers.title" />
							</span>
						</router-link>
					</div>

					<template v-for="transfer in transferList">
						<div class="mb-4">
							<router-link
								v-on:click.native="close"
								v-if="transfer.is_available"
								:to="{name: 'MoneyTransferDetail', params: {id: transfer.id}}"
								class="navigation-link text--h4 pull-left d-inline-block text-decoration-none transition-all"
							>
								<I18nVue
									:uz="transfer.title_uz"
									:ru="transfer.title_ru"
									:en="transfer.title_en"
								/>
							</router-link>
						</div>
					</template>
				</div>
			</v-col>

			<v-col lg="3" md="4" sm="6">
				<div class="grid-menu-items">
					<div class="mb-4">
						<router-link
							:to="{ name: 'PaymentRoute', params: { id: 1 } }"
							v-on:click.native="close"
							class="
                                navigation-link
                                text-decoration-none text--h3
                                font-600
                                transition-all
                                pull-left
                                d-inline-block
                            "
						>
							<span>
								<I18nVue t="Nav.PrivateClients.MoneyTransfers.tab5" />
							</span>
						</router-link>
					</div>

					<div class="mb-4">
						<router-link
							:to="{ name: 'PaymentRoute', params: { id: 1 } }"
							v-on:click.native="close"
							class="
                                navigation-link
                                text-decoration-none text--h4
                                transition-all
                                pull-left
                                d-inline-block
                            "
						>
							<span>
								<I18nVue t="Nav.PrivateClients.MoneyTransfers.tab6" />
							</span>
						</router-link>
					</div>

					<div class="mb-4">
						<router-link
							:to="{ name: 'PaymentRoute', params: { id: 2 } }"
							v-on:click.native="close"
							class="
                                navigation-link
                                text-decoration-none text--h4
                                transition-all
                                pull-left
                                d-inline-block
                            "
						>
							<span>
								<I18nVue t="Nav.PrivateClients.MoneyTransfers.tab7" />
							</span>
						</router-link>
					</div>

					<div class="mb-4">
						<router-link
							:to="{ name: 'PaymentRoute', params: { id: 3 } }"
							v-on:click.native="close"
							class="
                                navigation-link
                                text-decoration-none text--h4
                                transition-all
                                pull-left
                                d-inline-block
                            "
						>
							<span>
								<I18nVue t="Nav.PrivateClients.MoneyTransfers.tab8" />
							</span>
						</router-link>
					</div>

					<div class="mb-4">
						<router-link
							:to="{ name: 'PaymentRoute', params: { id: 4 } }"
							v-on:click.native="close"
							class="
                                navigation-link
                                text-decoration-none text--h4
                                transition-all
                                pull-left
                                d-inline-block
                            "
						>
							<span>
								<I18nVue t="Nav.PrivateClients.MoneyTransfers.tab9" />
							</span>
						</router-link>
					</div>

					<div class="mb-4">
						<router-link
							:to="{ name: 'PaymentRoute', params: { id: 5 } }"
							v-on:click.native="close"
							class="
                                navigation-link
                                text-decoration-none text--h4
                                transition-all
                                pull-left
                                d-inline-block
                            "
						>
							<span>
								<I18nVue t="Nav.PrivateClients.MoneyTransfers.tab10" />
							</span>
						</router-link>
					</div>

					<div class="mb-4">
						<router-link
							:to="{ name: 'PaymentRoute', params: { id: 6 } }"
							v-on:click.native="close"
							class="
                                navigation-link
                                text-decoration-none text--h4
                                transition-all
                                pull-left
                                d-inline-block
                            "
						>
							<span>
								<I18nVue t="Nav.PrivateClients.MoneyTransfers.tab11" />
							</span>
						</router-link>
					</div>

					<div class="mb-4">
						<router-link
							:to="{ name: 'PaymentRoute', params: { id: 9 } }"
							v-on:click.native="close"
							class="
                                navigation-link
                                text-decoration-none text--h4
                                transition-all
                                pull-left
                                d-inline-block
                            "
						>
							<span>
								<I18nVue t="Nav.PrivateClients.MoneyTransfers.tab12" />
							</span>
						</router-link>
					</div>

					<div class="mb-4">
						<router-link
							:to="{ name: 'PaymentRoute', params: { id: 12 } }"
							v-on:click.native="close"
							class="
                                navigation-link
                                text-decoration-none text--h4
                                transition-all
                                pull-left
                                d-inline-block
                            "
						>
							<span>
								<I18nVue t="Nav.PrivateClients.MoneyTransfers.tab13" />
							</span>
						</router-link>
					</div>

					<div class="mb-4">
						<router-link
							:to="{ name: 'PaymentRoute', params: { id: 14 } }"
							v-on:click.native="close"
							class="
                                navigation-link
                                text-decoration-none text--h4
                                transition-all
                                pull-left
                                d-inline-block
                            "
						>
							<span>
								<I18nVue t="Nav.PrivateClients.MoneyTransfers.tab19" />
							</span>
						</router-link>
					</div>

					<div class="mb-4">
						<router-link
							:to="{ name: 'PaymentRoute', params: { id: 17 } }"
							v-on:click.native="close"
							class="
                                navigation-link
                                text-decoration-none text--h4
                                transition-all
                                pull-left
                                d-inline-block
                            "
						>
							<span>
								<I18nVue t="Nav.PrivateClients.MoneyTransfers.tab14" />
							</span>
						</router-link>
					</div>

					<div class="mb-4">
						<router-link
							:to="{ name: 'PaymentRoute', params: { id: 21 } }"
							v-on:click.native="close"
							class="
                                navigation-link
                                text-decoration-none text--h4
                                transition-all
                                pull-left
                                d-inline-block
                            "
						>
							<span>
								<I18nVue t="Nav.PrivateClients.MoneyTransfers.tab15" />
							</span>
						</router-link>
					</div>
				</div>
			</v-col>

			<v-col lg="3" md="4" sm="6">
				<div class="grid-menu-items">
					<div class="mb-4">
						<router-link
							:to='{name: "ServicesList"}'
							class="
                                navigation-link
                                text-decoration-none text--h3
                                font-600
                                transition-all
                                pull-left
                                d-inline-block
                            "
						>
							<span>
								<I18nVue t="Nav.PrivateClients.Services.title" />
							</span>
						</router-link>
					</div>

					<div class="mb-4">
						<router-link
							:to="{ name: 'CreditCalc' }"
							v-on:click.native="close"
							class="
                                navigation-link
                                text-decoration-none text--h4
                                transition-all
                                pull-left
                                d-inline-block
                            "
						>
							<span>
								<I18nVue t="Nav.PrivateClients.Services.tab4" />
							</span>
						</router-link>
					</div>

					<div class="mb-4">
						<router-link
							:to="{ name: 'OnlineCredit' }"
							v-on:click.native="close"
							class="
                                navigation-link
                                text-decoration-none text--h4
                                transition-all
                                pull-left
                                d-inline-block
                            "
						>
							<span>
								<I18nVue t="Nav.PrivateClients.InteractiveServices.OnlineLoan" />
							</span>
						</router-link>
					</div>

					<div class="mb-4">
						<router-link
							:to="{ name: 'BankOffice' }"
							v-on:click.native="close"
							class="
                                navigation-link
                                text-decoration-none text--h4
                                transition-all
                                pull-left
                                d-inline-block
                            "
						>
							<span>
								<I18nVue t="Nav.PrivateClients.Services.tab10" />
							</span>
						</router-link>
					</div>

					<div class="mb-4">
						<router-link
							:to="{ name: 'CurrencyExchange' }"
							v-on:click.native="close"
							class="
                                navigation-link
                                text-decoration-none text--h4
                                transition-all
                                pull-left
                                d-inline-block
                            "
						>
							<span>
								<I18nVue t="Nav.PrivateClients.Services.tab11" />
							</span>
						</router-link>
					</div>

					<div class="mb-4">
						<router-link
							:to="{ name: 'SaveMoney' }"
							v-on:click.native="close"
							class="
                                navigation-link
                                text-decoration-none text--h4
                                transition-all
                                pull-left
                                d-inline-block
                            "
						>
							<span>
								<I18nVue t="Nav.PrivateClients.Services.tab12" />
							</span>
						</router-link>
					</div>

          <!--PUL O'TKAZMALARI-->

					<div class="mb-4">
						<router-link
							:to="{ name: 'MoneyTransfer' }"
							v-on:click.native="close"
							class="
                                navigation-link
                                text-decoration-none text--h4
                                transition-all
                                pull-left
                                d-inline-block
                            "
						>
							<span>
								<I18nVue t="Nav.PrivateClients.MoneyTransfers.title" />
							</span>
						</router-link>
					</div>

					<div class="mb-4">
						<router-link
							:to="{ name: 'Tariffs' }"
							v-on:click.native="close"
							class="
	                            navigation-link
	                            text-decoration-none text--h4
	                            transition-all
	                            pull-left
	                            d-inline-block
	                        "
						>
							<span>
								<I18nVue t="Nav.PrivateClients.Services.tab14" />
							</span>
						</router-link>
					</div>

					<div class="mb-4">
						<router-link
							:to="{ name: 'Scoring' }"
							v-on:click.native="close"
							class="
	                            navigation-link
	                            text-decoration-none text--h4
	                            transition-all
	                            pull-left
	                            d-inline-block
	                        "
						>
							<span>
								<I18nVue t="Nav.PrivateClients.InteractiveServices.Scoring" />
							</span>
						</router-link>
					</div>

					<div class="mb-4">
						<router-link
							:to="{ name: 'FAQ' }"
							v-on:click.native="close"
							class="
                                navigation-link
                                text-decoration-none text--h4
                                transition-all
                                pull-left
                                d-inline-block
                            "
						>
							<span>
								<I18nVue t="Nav.PrivateClients.InteractiveServices.QuestionsAnswers" />
							</span>
						</router-link>
					</div>
				</div>
			</v-col>

			<v-col lg="3" md="4" sm="6">
				<div class="grid-menu-items">
					<div class="mb-4">
						<router-link
							:to="{ name: 'Securities' }"
							v-on:click.native="close"
							class="
                                navigation-link
                                text-decoration-none text--h3
                                font-600
                                transition-all
                                pull-left
                                d-inline-block
                            "
						>
							<span>
								<I18nVue t="Nav.PrivateClients.StorageValuables" />
							</span>
						</router-link>
					</div>
				</div>
			</v-col>
		</template>
	</v-row>
</template>

<script>
import I18nVue from "@/I18nVue";
import { mapGetters, mapMutations } from "vuex";

export default {
	name: "PhysicalPersonGridMenu",
	components: {
		I18nVue
	},
	data() {
		return {
			isMobile: false
		}
	},
	computed: {
		...mapGetters({
			creditList: "getCreditList",
			plasticCardList: "getPlasticCardList",
			depositList: "getDepositList",
			transferList: "getTransferList"
		}),
	},
	mounted() {
		if(document.body.clientWidth < 600) {
			this.isMobile = true
		}
	},
	methods: {
		...mapMutations({
			TOGGLE_GRID_MENU: "TOGGLE_GRID_MENU"
		}),

		close() {
			this.TOGGLE_GRID_MENU(false)

			document.querySelector("html").classList.remove("active");
		}
	}
};
</script>
