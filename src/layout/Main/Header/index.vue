<template>
	<div class="header-view-all">
		<header class="app-header d-flex p-fixed w-100">
			<router-link to="/" class="header-logo d-flex justify-center py-9 px-3 p-relative text-decoration-none">
				<img src="/images/logo.svg" alt="App logo" class="medium-logo" />

				<img src="/asaka-logo.png" alt="App logo" class="small-logo" />
			</router-link>

			<div class="header-navigation border-bottom d-flex flex-column flex-1">
				<div class="navigation-top flex-1 border-bottom d-flex align-center pl-3 pr-4">
					<ul class="px-0 list-style-none d-flex align-center">
						<li class="navigation-top-1">
							<router-link
								:to="{ name: 'HomePhysicalPersons' }"
								class="navigation-link navigation-link__hover text-decoration-none text-uppercase dark-grey font-700 py-5 px-2 px-xl-3 p-relative"
							>
								<I18nVue t="Nav.PrivateClients.title" />
							</router-link>
						</li>
						<li class="navigation-top-2">
							<router-link
								:to="{ name: 'SmallBusiness' }"
								class="navigation-link navigation-link__hover text-decoration-none text-uppercase dark-grey font-700 py-5 px-2 px-xl-3 p-relative"
							>
								<I18nVue t="Nav.SmallBusiness.title" />
							</router-link>
						</li>
						<li class="navigation-top-3">
							<router-link
								:to="{ name: 'CorporateCustomers' }"
								class="navigation-link navigation-link__hover text-decoration-none text-uppercase dark-grey font-700 py-5 px-2 px-xl-3 p-relative"
							>
								<I18nVue t="Nav.CorporateClients.title" />
							</router-link>
						</li>
						<li class="navigation-top-4">
							<router-link
								:to="{ name: 'AboutBank' }"
								class="navigation-link navigation-link__hover text-decoration-none text-uppercase dark-grey font-700 py-5 px-2 px-xl-3 p-relative"
							>
								<I18nVue t="Nav.AboutBank.title" />
							</router-link>
						</li>
						<li class="navigation-top-5">
							<router-link
								:to="{ name: 'PressCenterClient' }"
								class="navigation-link navigation-link__hover text-decoration-none text-uppercase dark-grey font-700 py-5 px-2 px-xl-3 p-relative"
							>
								<I18nVue t="Nav.PressCenter.title" />
							</router-link>
						</li>
						<li class="navigation-top-6">
							<router-link
								:to="{ name: 'ShareholderAndInvestor' }"
								class="navigation-link navigation-link__hover text-decoration-none text-uppercase dark-grey font-700 py-5 px-2 px-xl-3 p-relative"
							>
								<I18nVue t="Nav.ShareholdersInvestors.title" />
							</router-link>
						</li>
					</ul>

					<!-- Mobile, Tablet Menu -->
					<header-top-mobile-menu />
					<!-- End Mobile, Tablet Menu -->

					<v-spacer />

					<v-btn
						:to="{ name: 'MobileBank' }"
						depressed
						rounded
						color="danger"
						min-width="110"
						min-height="30"
						max-width="192"
						max-height="50"
						id="mobile-bank"
						class="mx-auto text-transform-reset"
					>
                    <span class="font-600 text-white no-spacing">
                        {{ $t("Nav.PrivateClients.Services.tab1") }}
                    </span>
					</v-btn>

					<ul class="navigation-top-right px-0 list-style-none d-flex align-center">
						<li>
							<router-link
								:to="{ name: 'Promo' }"
								class="navigation-link text-decoration-none dark-grey py-5 px-2 px-xl-3 d-flex align-center"
							>
								<I18nVue classes="text-small font-600 ml-2" t="Promotions" />
							</router-link>
						</li>
						<li>
							<router-link
								:to="{name: 'BankOffice'}"
								class="navigation-link text-decoration-none dark-grey py-5 px-2 px-xl-3 d-flex align-center"
							>
								<map-pin-icon size="1.35x" class="primary-text" />
								<I18nVue classes="text-small font-600 ml-2" t="branches_and_ATMs" />
							</router-link>
						</li>
						<li>
							<AppSpecial />
						</li>
					</ul>

					<app-language />

					<app-grid-menu class="ml-2" />
				</div>


				<div class="navigation-bottom flex-1 pl-3 pr-2 d-flex align-center">
					<!-- physical-persons route -->
					<template v-if="initialPathName === 'physical-persons'">
						<div class="navigation-bottom-menu flex-1 list-style-none d-flex align-center ml-n1">
							<v-menu @input="open" offset-y min-width="1500" content-class="navigation-link-menu">
								<template v-slot:activator="{ on }">
									<v-btn
										v-on="on"
										depressed
										:ripple="false"
										plain
										text
										id="physical-link-1"
										class="px-0 text-transform-reset reset-size"
									>
										<div class="navigation-link py-5 pl-4 d-flex align-center">
											<I18nVue t="Nav.PrivateClients.Loans.title" classes="font-600 mr-2" />
											<chevron-down-icon size="1.2x" class="d-block" />
										</div>
									</v-btn>
								</template>

								<div class="navigation-menu-content">
									<div class="navigation-content-in">
										<div @click="notClose" class="navigation-menu-wrap d-flex h-100">
											<div class="navigation-scroll">
												<v-row>
													<v-col md="6">
														<div class="navigation-menu-items">
															<router-link
																:to="{ name: 'Credits' }"
																class="navigation-link font-600 text--h3 py-2 d-block text-decoration-none pull-left transition-all"
															>
																<I18nVue t="Nav.PrivateClients.Loans.title" />
															</router-link>

															<template v-for="credit in creditList">
																<router-link
																	v-if="credit.is_available"
																	:to="{name: 'CreditsDetail', params: {id: credit.id}}"
																	class="navigation-link text--h4 py-2 d-block text-decoration-none pull-left transition-all"
																>
																	<I18nVue
																		:uz="credit.title_uz"
																		:ru="credit.title_ru"
																		:en="credit.title_en"
																	/>
																</router-link>
															</template>
														</div>
													</v-col>

													<v-col md="6">
														<div class="navigation-menu-items">
															<h3
																class="font-600 dark-text py-2 d-block text-decoration-none"
															>
																<I18nVue
																	t="Nav.PrivateClients.InteractiveServices.title" />
															</h3>

															<router-link
																:to="{ name: 'CreditCalc' }"
																class="navigation-link text--h4 py-2 d-block text-decoration-none pull-left transition-all"
															>
																<I18nVue
																	t="Nav.PrivateClients.InteractiveServices.CreditCalculator" />
															</router-link>

															<router-link
																:to="{ name: 'OnlineCredit' }"
																class="navigation-link text--h4 py-2 d-block text-decoration-none pull-left transition-all"
															>
																<I18nVue
																	t="Nav.PrivateClients.InteractiveServices.OnlineLoan" />
															</router-link>

															<router-link
																:to="{ name: 'Scoring' }"
																class="navigation-link text--h4 py-2 d-block text-decoration-none pull-left transition-all"
															>
																<I18nVue
																	t="Nav.PrivateClients.InteractiveServices.Scoring" />
															</router-link>

															<router-link
																:to="{ name: 'ClientOnlinePolls' }"
																class="navigation-link text--h4 py-2 d-block text-decoration-none pull-left transition-all"
															>
																<I18nVue
																	t="online_polls" />
															</router-link>

															<router-link
																:to="{ name: 'FAQ' }"
																class="navigation-link text--h4 py-2 d-block text-decoration-none pull-left transition-all"
															>
																<I18nVue
																	t="Nav.PrivateClients.InteractiveServices.QuestionsAnswers" />
															</router-link>
														</div>
													</v-col>
												</v-row>
											</div>
											<div class="navigation-menu-carousel flex-1">
												<header-slider ref="slider" :physicalPerson="physicalPerson.credit" />
											</div>
										</div>
									</div>
								</div>
							</v-menu>

							<v-menu @input="open" offset-y min-width="1500" content-class="navigation-link-menu">
								<template v-slot:activator="{ on }">
									<v-btn
										v-on="on"
										depressed
										:ripple="false"
										plain
										text
										id="physical-link-2"
										class="px-0 text-transform-reset reset-size"
									>
										<div class="navigation-link py-5 pl-4 d-flex align-center">
											<I18nVue t="Nav.PrivateClients.Cards.title" classes="font-600 mr-2" />
											<chevron-down-icon size="1.2x" class="d-block" />
										</div>
									</v-btn>
								</template>

								<div class="navigation-menu-content">
									<div class="navigation-content-in">
										<div @click="notClose" class="navigation-menu-wrap d-flex h-100">
											<div class="navigation-scroll">
												<v-row>
													<v-col md="6">
														<div class="navigation-menu-items">
															<router-link
																:to="{ name: 'Cards' }"
																class="navigation-link font-600 text--h3 py-2 d-block text-decoration-none pull-left transition-all"
															>
																<I18nVue t="Nav.PrivateClients.Cards.title"
																         classes="font-600 mr-2" />
															</router-link>

															<template v-for="card in plasticCardList">
																<router-link
																	v-if="card.is_available"
																	:to="{name: 'CardsDetail', params: {id: card.id}}"
																	class="navigation-link text--h4 py-2 d-block text-decoration-none pull-left transition-all"
																>
																	<I18nVue
																		:uz="card.name_uz"
																		:ru="card.name_ru"
																		:en="card.name_en"
																	/>
																</router-link>
															</template>
														</div>
													</v-col>

													<v-col md="6">
														<div class="navigation-menu-items">
															<h3 class="font-600 dark-text py-2 d-block text-decoration-none">
																<I18nVue
																	t="Nav.PrivateClients.InteractiveServices.title" />
															</h3>

															<router-link :to="{ name: 'SMSNotification' }"
															             class="navigation-link text--h4 py-2 d-block text-decoration-none pull-left transition-all">
																<I18nVue
																	t="Nav.PrivateClients.InteractiveServices.SMSInforming" />
															</router-link>

															<router-link :to="{ name: 'MobileBank' }"
															             class="navigation-link text--h4 py-2 d-block text-decoration-none pull-left transition-all">
																<I18nVue
																	t="Nav.PrivateClients.InteractiveServices.MobileBank" />
															</router-link>

															<router-link :to="{ name: 'CardOpen' }"
															             class="navigation-link text--h4 py-2 d-block text-decoration-none pull-left transition-all">
																<I18nVue
																	t="Nav.PrivateClients.InteractiveServices.OpenPlasticCard" />
															</router-link>

															<!--															<router-link :to="{ name: 'P2PMoneyTransfer' }"-->
															<!--															             class="navigation-link text&#45;&#45;h4 py-2 d-block text-decoration-none pull-left transition-all">-->
															<!--																<I18nVue-->
															<!--																	t="Nav.PrivateClients.InteractiveServices.TransferCard" />-->
															<!--															</router-link>-->

															<router-link :to="{ name: 'IndividualDesignCard' }"
															             class="navigation-link text--h4 py-2 d-block text-decoration-none pull-left transition-all">
																<I18nVue
																	t="Nav.PrivateClients.InteractiveServices.CustomizedCard" />
															</router-link>

															<router-link :to="{ name: 'FAQ' }"
															             class="navigation-link text--h4 py-2 d-block text-decoration-none pull-left transition-all">
																<I18nVue
																	t="Nav.PrivateClients.InteractiveServices.QuestionsAnswers" />
															</router-link>

															<router-link :to="{ name: 'CardRequisites' }"
															             class="navigation-link text--h4 py-2 d-block text-decoration-none pull-left transition-all">
																<I18nVue
																	t="Nav.PrivateClients.InteractiveServices.CardRequisites" />
															</router-link>
														</div>
													</v-col>
												</v-row>
											</div>

											<div class="navigation-menu-carousel flex-1">
												<header-slider ref="slider" :physicalPerson="physicalPerson.card" />
											</div>
										</div>
									</div>
								</div>
							</v-menu>

							<v-menu @input="open" offset-y min-width="1500" content-class="navigation-link-menu">
								<template v-slot:activator="{ on }">
									<v-btn
										v-on="on"
										depressed
										:ripple="false"
										plain
										text
										id="physical-link-3"
										class="px-0 text-transform-reset reset-size"
									>
										<div class="navigation-link py-5 pl-4 d-flex align-center">
											<I18nVue t="Nav.PrivateClients.Contributions.title"
											         classes="font-600 mr-2" />
											<chevron-down-icon size="1.2x" class="d-block" />
										</div>
									</v-btn>
								</template>

								<div class="navigation-menu-content">
									<div class="navigation-content-in">
										<div @click="notClose" class="navigation-menu-wrap d-flex h-100">
											<div class="navigation-scroll">
												<v-row>
													<v-col md="6">
														<div class="navigation-menu-items">
															<router-link :to="{ name: 'Deposits' }"
															             class="navigation-link font-600 text--h3 py-2 d-block text-decoration-none pull-left transition-all">
																<I18nVue t="Nav.PrivateClients.Contributions.tab1" />
															</router-link>

															<template v-for="deposit in getNationalDeposit">
																<router-link
																	v-if="deposit.is_available"
																	:to="{name: 'DepositsDetail', params: {id: deposit.id}}"
																	class="navigation-link text--h4 py-2 d-block text-decoration-none pull-left transition-all"
																>
																	<I18nVue
																		:uz="deposit.title_uz"
																		:ru="deposit.title_ru"
																		:en="deposit.title_en"
																	/>
																</router-link>
															</template>

															<router-link :to="{ name: 'Deposits' }"
															             class="navigation-link font-600 text--h3 py-2 d-block text-decoration-none pull-left transition-all">
																<I18nVue t="Nav.PrivateClients.Contributions.tab5" />
															</router-link>

															<template v-for="deposit in getInternationalDeposit">
																<router-link
																	v-if="deposit.is_available"
																	:to="{name: 'DepositsDetail', params: {id: deposit.id}}"
																	class="navigation-link text--h4 py-2 d-block text-decoration-none pull-left transition-all"
																>
																	<div>
																		<I18nVue
																			:uz="deposit.title_uz"
																			:ru="deposit.title_ru"
																			:en="deposit.title_en"
																		/>
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
															</template>
														</div>
													</v-col>

													<v-col md="6">
														<div class="navigation-menu-items">
															<h3 class="font-600 dark-text py-2 d-block text-decoration-none">
																<I18nVue
																	t="Nav.PrivateClients.InteractiveServices.title" />
															</h3>
															<router-link :to="{ name: 'DepositCalc' }"
															             class="navigation-link text--h4 py-2 d-block text-decoration-none pull-left transition-all">
																<I18nVue
																	t="Nav.PrivateClients.InteractiveServices.DepositCalculator" />
															</router-link>

															<router-link :to="{ name: 'DepositOpen' }"
															             class="navigation-link text--h4 py-2 d-block text-decoration-none pull-left transition-all">
																<I18nVue
																	t="Nav.PrivateClients.InteractiveServices.OpenDeposit" />
															</router-link>

															<router-link :to="{ name: 'FAQ' }"
															             class="navigation-link text--h4 py-2 d-block text-decoration-none pull-left transition-all">
																<I18nVue
																	t="Nav.PrivateClients.InteractiveServices.QuestionsAnswers" />
															</router-link>
														</div>
													</v-col>
												</v-row>
											</div>

											<div class="navigation-menu-carousel flex-1">
												<header-slider ref="slider" :physicalPerson="physicalPerson.deposit" />
											</div>
										</div>
									</div>
								</div>
							</v-menu>

							<v-menu @input="open" offset-y min-width="1500" content-class="navigation-link-menu">
								<template v-slot:activator="{ on }">
									<v-btn
										v-on="on"
										depressed
										:ripple="false"
										plain
										text
										id="physical-link-4"
										class="px-0 text-transform-reset reset-size"
									>
                    <span class="money-transfer-online-text">
                                online
                      </span>
										<div class="navigation-link py-5 pl-4 d-flex align-center">
											<I18nVue t="Nav.PrivateClients.MoneyTransfers.title"
											         classes="font-600 mr-2" />
											<chevron-down-icon size="1.2x" class="d-block" />
										</div>
									</v-btn>
								</template>

								<div class="navigation-menu-content">
									<div class="navigation-content-in">
										<div @click="notClose" class="navigation-menu-wrap d-flex h-100">
											<div class="navigation-scroll">
												<v-row>
													<v-col md="6">
														<div class="navigation-menu-items mb-10">
															<router-link :to="{ name: 'MoneyTransfer' }"
															             class="navigation-link font-600 text--h3 py-2 d-block text-decoration-none pull-left transition-all">
																<I18nVue t="Nav.PrivateClients.MoneyTransfers.title" />
															</router-link>

															<template v-for="transfer in transferList">
																<router-link
																	v-if="transfer.is_available"
																	:to="{name: 'MoneyTransferDetail', params: {id: transfer.id}}"
																	class="navigation-link text--h4 py-2 d-block text-decoration-none pull-left transition-all"
																>
																	<I18nVue
																		:uz="transfer.title_uz"
																		:ru="transfer.title_ru"
																		:en="transfer.title_en"
																	/>
																</router-link>
															</template>
														</div>
<!--TO'LOVLAR NAVIGATIONI-->
														<template>
<!--                              <div class="navigation-menu-items mb-10">-->
<!--                                <router-link-->
<!--                                    :to="{ name: 'PaymentRoute', params: { id: 1 } }"-->
<!--                                    class="navigation-link font-600 text&#45;&#45;h3 py-2 d-block text-decoration-none pull-left transition-all">-->
<!--                                  <I18nVue t="Nav.PrivateClients.MoneyTransfers.tab5" />-->
<!--                                </router-link>-->

<!--                                <router-link :to="{name: 'PaymentRoute', params: { id: 1 }}"-->
<!--                                             class="navigation-link text&#45;&#45;h4 py-2 d-block text-decoration-none pull-left transition-all">-->
<!--                                  <I18nVue t="Nav.PrivateClients.MoneyTransfers.tab6" />-->
<!--                                </router-link>-->

<!--                                <router-link :to="{name: 'PaymentRoute', params: { id: 2 }}"-->
<!--                                             class="navigation-link text&#45;&#45;h4 py-2 d-block text-decoration-none pull-left transition-all">-->
<!--                                  <I18nVue t="Nav.PrivateClients.MoneyTransfers.tab7" />-->
<!--                                </router-link>-->

<!--                                <router-link :to="{name: 'PaymentRoute', params: { id: 3 }}"-->
<!--                                             class="navigation-link text&#45;&#45;h4 py-2 d-block text-decoration-none pull-left transition-all">-->
<!--                                  <I18nVue t="Nav.PrivateClients.MoneyTransfers.tab8" />-->
<!--                                </router-link>-->

<!--                                <router-link :to="{name: 'PaymentRoute', params: { id: 4 }}"-->
<!--                                             class="navigation-link text&#45;&#45;h4 py-2 d-block text-decoration-none pull-left transition-all">-->
<!--                                  <I18nVue t="Nav.PrivateClients.MoneyTransfers.tab9" />-->
<!--                                </router-link>-->

<!--                                <router-link :to="{name: 'PaymentRoute', params: { id: 5 }}"-->
<!--                                             class="navigation-link text&#45;&#45;h4 py-2 d-block text-decoration-none pull-left transition-all">-->
<!--                                  <I18nVue t="Nav.PrivateClients.MoneyTransfers.tab10" />-->
<!--                                </router-link>-->

<!--                                <router-link :to="{name: 'PaymentRoute', params: { id: 6 }}"-->
<!--                                             class="navigation-link text&#45;&#45;h4 py-2 d-block text-decoration-none pull-left transition-all">-->
<!--                                  <I18nVue t="Nav.PrivateClients.MoneyTransfers.tab11" />-->
<!--                                </router-link>-->

<!--                                <router-link :to="{name: 'PaymentRoute', params: { id: 9 }}"-->
<!--                                             class="navigation-link text&#45;&#45;h4 py-2 d-block text-decoration-none pull-left transition-all">-->
<!--                                  <I18nVue t="Nav.PrivateClients.MoneyTransfers.tab12" />-->
<!--                                </router-link>-->

<!--                                <router-link-->
<!--                                    :to="{name: 'PaymentRoute', params: { id: 12 }}"-->
<!--                                    class="navigation-link text&#45;&#45;h4 py-2 d-block text-decoration-none pull-left transition-all">-->
<!--                                  <I18nVue t="Nav.PrivateClients.MoneyTransfers.tab13" />-->
<!--                                </router-link>-->

<!--                                <router-link-->
<!--                                    :to="{name: 'PaymentRoute', params: { id: 14 }}"-->
<!--                                    class="navigation-link text&#45;&#45;h4 py-2 d-block text-decoration-none pull-left transition-all">-->
<!--                                  <I18nVue t="Nav.PrivateClients.MoneyTransfers.tab19" />-->
<!--                                </router-link>-->

<!--                                <router-link-->
<!--                                    :to="{name: 'PaymentRoute', params: { id: 17 }}"-->
<!--                                    class="navigation-link text&#45;&#45;h4 py-2 d-block text-decoration-none pull-left transition-all">-->
<!--                                  <I18nVue t="Nav.PrivateClients.MoneyTransfers.tab14" />-->
<!--                                </router-link>-->

<!--                                <router-link-->
<!--                                    :to="{name: 'PaymentRoute', params: { id: 21 }}"-->
<!--                                    class="navigation-link text&#45;&#45;h4 py-2 d-block text-decoration-none pull-left transition-all">-->
<!--                                  <I18nVue t="Nav.PrivateClients.MoneyTransfers.tab15" />-->
<!--                                </router-link>-->
<!--                              </div>-->
                            </template>
													</v-col>

													<v-col md="6">
														<div class="navigation-menu-items mb-10">
															<h3 class="font-600 dark-text py-2 d-block text-decoration-none">
																<I18nVue
																	t="Nav.PrivateClients.InteractiveServices.title" />
															</h3>

															<router-link :to="{ name: 'SMSNotification' }"
															             class="navigation-link text--h4 py-2 d-block text-decoration-none pull-left transition-all">
																<I18nVue
																	t="Nav.PrivateClients.InteractiveServices.SMSInforming" />
															</router-link>

															<router-link :to="{ name: 'MobileBank' }"
															             class="navigation-link text--h4 py-2 d-block text-decoration-none pull-left transition-all">
																<I18nVue
																	t="Nav.PrivateClients.InteractiveServices.MobileBank" />
															</router-link>

															<a href="https://cib.asakabank.uz:3443/cib/index.jsp"
															             class="navigation-link text--h4 py-2 d-block text-decoration-none pull-left transition-all">
																<I18nVue
																	t="Nav.PrivateClients.InteractiveServices.InternetBanking" />
															</a>

															<!--															<router-link :to="{ name: 'P2PMoneyTransfer' }"-->
															<!--															             class="navigation-link text--h4 py-2 d-block text-decoration-none pull-left transition-all">-->
															<!--																<I18nVue-->
															<!--																	t="Nav.PrivateClients.InteractiveServices.TransferCard" />-->
															<!--															</router-link>-->

															<!--															<router-link :to="{ name: 'MoneySend' }"-->
															<!--															             class="navigation-link text--h4 py-2 d-block text-decoration-none pull-left transition-all">-->
															<!--																Money Send-->
															<!--															</router-link>-->

															<router-link :to="{ name: 'FAQ' }"
															             class="navigation-link text--h4 py-2 d-block text-decoration-none pull-left transition-all">
																<I18nVue
																	t="Nav.PrivateClients.InteractiveServices.QuestionsAnswers" />
															</router-link>
														</div>

														<div class="navigation-menu-items">
															<router-link :to="{ name: 'CurrencyExchange' }"
															             class="navigation-link font-600 text--h3 py-2 d-block text-decoration-none pull-left transition-all">
																<I18nVue t="Nav.PrivateClients.MoneyTransfers.tab16" />
															</router-link>
														</div>
													</v-col>
												</v-row>
											</div>

											<div class="navigation-menu-carousel flex-1">
												<header-slider ref="slider"
												               :physicalPerson="physicalPerson.moneyTransfers" />
											</div>
										</div>
									</div>
								</div>
							</v-menu>

							<router-link
								:to="{ name: 'SaveMoney' }"
								id="physical-link-5"
								class="navigation-link text-decoration-none py-5 pl-4 d-flex align-center"
							>
								<I18nVue t="Nav.PrivateClients.StorageValuables" classes="font-600 mr-2" />
							</router-link>

							<v-menu @input="open" offset-y min-width="1500" content-class="navigation-link-menu">
								<template v-slot:activator="{ on }">
									<v-btn
										v-on="on"
										depressed
										:ripple="false"
										plain
										text
										id="physical-link-6"
										class="px-0 text-transform-reset reset-size"
									>
										<div class="navigation-link py-5 pl-4 d-flex align-center">
											<I18nVue t="Nav.PrivateClients.Services.title" classes="font-600 mr-2" />
											<chevron-down-icon size="1.2x" class="d-block" />
										</div>
									</v-btn>
								</template>

								<div class="navigation-menu-content">
									<div class="navigation-content-in">
										<div @click="notClose" class="navigation-menu-wrap d-flex h-100">
											<div class="navigation-scroll">
												<v-row>
													<v-col md="6">
														<div class="navigation-menu-items mb-10">
															<router-link
																:to="{ name: 'ServicesList' }"
																class="navigation-link font-600 text--h3 py-2 d-block text-decoration-none pull-left transition-all"
															>
																<I18nVue t="Nav.PrivateClients.Services.title" />
															</router-link>

															<router-link
																:to="{ name: 'MobileBank' }"
																class="navigation-link text--h4 py-2 d-block text-decoration-none pull-left transition-all"
															>
																<I18nVue t="Nav.PrivateClients.Services.tab1" />
															</router-link>

															<router-link
																:to="{ name: 'SMSNotification' }"
																class="navigation-link text--h4 py-2 d-block text-decoration-none pull-left transition-all"
															>
																<I18nVue t="Nav.PrivateClients.Services.tab2" />
															</router-link>

															<!--															<router-link-->
															<!--																:to="{ name: 'P2PMoneyTransfer' }"-->
															<!--																class="navigation-link text&#45;&#45;h4 py-2 d-block text-decoration-none pull-left transition-all"-->
															<!--															>-->
															<!--																<I18nVue t="Nav.PrivateClients.Services.tab3" />-->
															<!--															</router-link>-->

															<router-link
																:to="{ name: 'CreditCalc' }"
																class="navigation-link text--h4 py-2 d-block text-decoration-none pull-left transition-all"
															>
																<I18nVue t="Nav.PrivateClients.Services.tab4" />
															</router-link>

															<router-link
																:to="{ name: 'DepositCalc' }"
																class="navigation-link text--h4 py-2 d-block text-decoration-none pull-left transition-all"
															>
																<I18nVue t="Nav.PrivateClients.Services.tab5" />
															</router-link>

															<router-link
																:to="{ name: 'CardOpen' }"
																class="navigation-link text--h4 py-2 d-block text-decoration-none pull-left transition-all"
															>
																<I18nVue t="Nav.PrivateClients.Services.tab6" />
															</router-link>

															<router-link
																:to="{ name: 'DepositOpen' }"
																class="navigation-link text--h4 py-2 d-block text-decoration-none pull-left transition-all"
															>
																<I18nVue t="Nav.PrivateClients.Services.tab7" />
															</router-link>

															<router-link
																:to="{ name: 'StatusApplication' }"
																class="navigation-link text--h4 py-2 d-block text-decoration-none pull-left transition-all"
															>
																<I18nVue t="Nav.PrivateClients.Services.tab8" />
															</router-link>
														</div>
													</v-col>

													<v-col md="6">
														<div class="navigation-menu-items">
															<h3 class="font-600 dark-text py-2 d-block text-decoration-none">
																<I18nVue t="Nav.PrivateClients.Services.tab9" />
															</h3>

															<router-link
																:to="{ name: 'BankOffice' }"
																class="navigation-link text--h4 py-2 d-block text-decoration-none pull-left transition-all"
															>
																<I18nVue t="Nav.PrivateClients.Services.tab10" />
															</router-link>

															<router-link
																:to="{ name: 'CurrencyExchange' }"
																class="navigation-link text--h4 py-2 d-block text-decoration-none pull-left transition-all"
															>
																<I18nVue t="Nav.PrivateClients.Services.tab11" />
															</router-link>

															<router-link
																:to="{ name: 'SaveMoney' }"
																class="navigation-link text--h4 py-2 d-block text-decoration-none pull-left transition-all"
															>
																<I18nVue t="Nav.PrivateClients.Services.tab12" />
															</router-link>

<!--															<router-link-->
<!--																:to="{ name: 'MoneyTransfer' }"-->
<!--																class="navigation-link text&#45;&#45;h4 py-2 d-block text-decoration-none pull-left transition-all"-->
<!--															>-->
<!--																<I18nVue t="Nav.PrivateClients.Services.tab13" />-->
<!--															</router-link>-->
														</div>
													</v-col>
												</v-row>
											</div>

											<div class="navigation-menu-carousel flex-1">
												<header-slider ref="slider" :physicalPerson="physicalPerson.services" />
											</div>
										</div>
									</div>
								</div>
							</v-menu>
						</div>
					</template>
					<!-- end physical-persons route -->

					<!-- small-business -->
					<template v-if="initialPathName === 'small-business'">
						<div class="navigation-bottom-menu flex-1 list-style-none d-flex align-center ml-n1">
							<v-menu @input="open" offset-y min-width="1500" content-class="navigation-link-menu">
								<template v-slot:activator="{ on }">
									<v-btn
										v-on="on"
										depressed
										:ripple="false"
										plain
										text
										id="small-business-link-1"
										class="px-0 text-transform-reset reset-size"
									>
										<div class="navigation-link py-5 pl-4 d-flex align-center">
											<I18nVue t="Nav.SmallBusiness.Loans.title" classes="font-600 mr-2" />
											<chevron-down-icon size="1.2x" class="d-block" />
										</div>
									</v-btn>
								</template>

								<div class="navigation-menu-content">
									<div class="navigation-content-in">
										<div @click="notClose" class="navigation-menu-wrap d-flex h-100">
											<div class="navigation-scroll">
												<v-row>
													<v-col md="6">
														<div class="navigation-menu-items">
															<router-link
																:to="{ name: 'SmallBusinessCredits' }"
																class="navigation-link font-600 text--h3 py-2 d-block text-decoration-none pull-left transition-all"
															>
																<I18nVue t="Nav.SmallBusiness.Loans.title" />
															</router-link>

															<template v-for="credit in creditList">
																<router-link
																	v-if="credit.is_available"
																	:to="{name: 'SmallBusinessCreditsDetail', params: {id: credit.id}}"
																	class="navigation-link text--h4 py-2 d-block text-decoration-none pull-left transition-all"
																>
																	<I18nVue
																		:uz="credit.title_uz"
																		:ru="credit.title_ru"
																		:en="credit.title_en"
																	/>
																</router-link>
															</template>
														</div>
													</v-col>
												</v-row>
											</div>
											<div class="navigation-menu-carousel flex-1">
												<header-slider ref="slider" :physicalPerson="smallBusiness.credit" />
											</div>
										</div>
									</div>
								</div>
							</v-menu>

							<v-menu @input="open" offset-y min-width="1500" content-class="navigation-link-menu">
								<template v-slot:activator="{ on }">
									<v-btn
										v-on="on"
										depressed
										:ripple="false"
										plain
										text
										id="small-business-link-1"
										class="px-0 text-transform-reset reset-size"
									>
										<div class="navigation-link py-5 pl-4 d-flex align-center">
											<I18nVue t="Nav.SmallBusiness.Cards.title" classes="font-600 mr-2" />
											<chevron-down-icon size="1.2x" class="d-block" />
										</div>
									</v-btn>
								</template>

								<div class="navigation-menu-content">
									<div class="navigation-content-in">
										<div @click="notClose" class="navigation-menu-wrap d-flex h-100">
											<div class="navigation-scroll">
												<v-row>
													<v-col md="6">
														<div class="navigation-menu-items">
															<router-link
																:to="{ name: 'SmallBusinessCards' }"
																class="navigation-link font-600 text--h3 py-2 d-block text-decoration-none pull-left transition-all"
															>
																<I18nVue t="Nav.SmallBusiness.Cards.title" />
															</router-link>

															<template v-for="card in plasticCardList">
																<router-link
																	v-if="card.is_available"
																	:to="{name: 'SmallBusinessCardsDetail', params: {id: card.id}}"
																	class="navigation-link text--h4 py-2 d-block text-decoration-none pull-left transition-all"
																>
																	<I18nVue
																		:uz="card.name_uz"
																		:ru="card.name_ru"
																		:en="card.name_en"
																	/>
																</router-link>
															</template>

															<router-link
																:to="{ name: 'SmallBusinessTradeAcquiring' }"
																class="navigation-link text--h4 py-2 d-block text-decoration-none pull-left transition-all"
															>
																<I18nVue t="Nav.SmallBusiness.Cards.tab1" />
															</router-link>

															<router-link
																:to="{ name: 'SmallBusinessApplicationForTerminal' }"
																class="navigation-link text--h4 py-2 d-block text-decoration-none pull-left transition-all"
															>
																<I18nVue t="Nav.SmallBusiness.Cards.tab5" />
															</router-link>

															<router-link
																:to="{ name: 'SmallBusinessTerminalMarta' }"
																class="navigation-link text--h4 py-2 d-block text-decoration-none pull-left transition-all"
															>
																<span>{{ $t('terminal_marta') }}</span>
															</router-link>
														</div>
													</v-col>
												</v-row>
											</div>
										</div>
									</div>
								</div>
							</v-menu>

							<v-menu @input="open" offset-y min-width="1500" content-class="navigation-link-menu">
								<template v-slot:activator="{ on }">
									<v-btn
										v-on="on"
										depressed
										:ripple="false"
										plain
										text
										id="small-business-link-3"
										class="px-0 text-transform-reset reset-size"
									>
										<div class="navigation-link py-5 pl-4 d-flex align-center">
											<I18nVue t="Nav.SmallBusiness.Financing.title" classes="font-600 mr-2" />
											<chevron-down-icon size="1.2x" class="d-block" />
										</div>
									</v-btn>
								</template>

								<div class="navigation-menu-content">
									<div class="navigation-content-in">
										<div @click="notClose" class="navigation-menu-wrap d-flex h-100">
											<div class="navigation-scroll">
												<v-row>
													<v-col md="6">
														<div class="navigation-menu-items">
															<router-link
																:to="{ name: 'SmallBusinessFinancing' }"
																class="navigation-link font-600 text--h3 py-2 d-block text-decoration-none pull-left transition-all"
															>
																<I18nVue t="Nav.SmallBusiness.Financing.title" />
															</router-link>

															<template v-for="finance in financingList">
																<router-link
																	v-if="finance.is_available"
																	:to="{name: 'SmallBusinessFinancingDetail', params: {id: finance.id}}"
																	class="navigation-link text--h4 py-2 d-block text-decoration-none pull-left transition-all"
																>
																	<I18nVue
																		:uz="finance.title_uz"
																		:ru="finance.title_ru"
																		:en="finance.title_en"
																	/>
																</router-link>
															</template>
														</div>
													</v-col>
												</v-row>
											</div>
											<div class="navigation-menu-carousel flex-1">
												<header-slider ref="slider" :physicalPerson="smallBusiness.financing" />
											</div>
										</div>
									</div>
								</div>
							</v-menu>

							<router-link
								:to="{name: 'SmallBusinessTariffs'}"
								id="small-business-link-4"
								class="navigation-link text-decoration-none py-5 pl-4 d-flex align-center font-600"
							>
								<I18nVue t="Nav.PrivateClients.Services.tab14" classes="font-600 mr-2" />
							</router-link>

							<v-menu @input="open" offset-y min-width="1500" content-class="navigation-link-menu">
								<template v-slot:activator="{ on }">
									<v-btn
										v-on="on"
										depressed
										:ripple="false"
										plain
										text
										id="physical-link-6"
										class="px-0 text-transform-reset reset-size"
									>
										<div class="navigation-link py-5 pl-4 d-flex align-center">
											<I18nVue t="Nav.PrivateClients.Services.title" classes="font-600 mr-2" />
											<chevron-down-icon size="1.2x" class="d-block" />
										</div>
									</v-btn>
								</template>

								<div class="navigation-menu-content">
									<div class="navigation-content-in">
										<div @click="notClose" class="navigation-menu-wrap d-flex h-100">
											<div class="navigation-scroll">
												<v-row>
													<v-col md="6">
														<div class="navigation-menu-items mb-10">
															<router-link
																:to="{ name: 'ServicesList' }"
																class="navigation-link font-600 text--h3 py-2 d-block text-decoration-none pull-left transition-all"
															>
																<I18nVue t="Nav.PrivateClients.Services.title" />
															</router-link>

															<router-link
																:to="{ name: 'CreditCalc' }"
																class="navigation-link text--h4 py-2 d-block text-decoration-none pull-left transition-all"
															>
																<I18nVue t="Nav.PrivateClients.Services.tab4" />
															</router-link>

															<router-link
																:to="{ name: 'SmallBusinessDocuments' }"
																class="navigation-link text--h4 py-2 d-block text-decoration-none pull-left transition-all"
															>
																<I18nVue t="Nav.SmallBusiness.Documents" />
															</router-link>

															<router-link
																:to="{ name: 'FAQ' }"
																class="navigation-link text--h4 py-2 d-block text-decoration-none pull-left transition-all"
															>
																<I18nVue t="Nav.PrivateClients.InteractiveServices.QuestionsAnswers" />
															</router-link>
														</div>
													</v-col>
												</v-row>
											</div>

											<div class="navigation-menu-carousel flex-1">
												<header-slider ref="slider" :physicalPerson="physicalPerson.services" />
											</div>
										</div>
									</div>
								</div>
							</v-menu>
						</div>
					</template>
					<!-- end small-business -->

					<!-- corporate-customers routes -->
					<template v-if="initialPathName === 'corporate-customers'">
						<div class="navigation-bottom-menu flex-1 list-style-none d-flex align-center ml-n1">
							<v-menu @input="open" offset-y min-width="1500" content-class="navigation-link-menu">
								<template v-slot:activator="{ on }">
									<v-btn
										v-on="on"
										depressed
										:ripple="false"
										plain
										text
										id="corporate-link-1"
										class="px-0 text-transform-reset reset-size"
									>
										<div class="navigation-link py-5 pl-4 d-flex align-center">
											<I18nVue classes="font-600 mr-2" t="Nav.CorporateClients.Loans.title" />
											<chevron-down-icon size="1.2x" class="d-block" />
										</div>
									</v-btn>
								</template>

								<div class="navigation-menu-content">
									<div class="navigation-content-in">
										<div @click="notClose" class="navigation-menu-wrap d-flex h-100">
											<div class="navigation-scroll">
												<v-row>
													<v-col md="6">
														<div class="navigation-menu-items">
															<router-link
																:to="{ name: 'CreditsCorporate' }"
																class="navigation-link font-600 text--h3 py-2 d-block text-decoration-none pull-left transition-all"
															>
																<I18nVue t="Nav.CorporateClients.Loans.title" />
															</router-link>

															<template v-for="credit in creditList">
																<router-link
																	v-if="credit.is_available"
																	:to="{name: 'CreditsCorporateDetail', params: {id: credit.id}}"
																	class="navigation-link text--h4 py-2 d-block text-decoration-none pull-left transition-all"
																>
																	<I18nVue
																		:uz="credit.title_uz"
																		:ru="credit.title_ru"
																		:en="credit.title_en"
																	/>
																</router-link>
															</template>
														</div>
													</v-col>

													<v-spacer />

													<v-col md="5">
														<div class="navigation-menu-items">
															<h3 class="font-600 dark-text py-2 d-block text-decoration-none">
																<I18nVue t="interactive_services" />
															</h3>

															<router-link
																:to="{ name: 'CreditCalc' }"
																class="navigation-link text--h4 py-2 d-block text-decoration-none pull-left transition-all"
															>
																<I18nVue t="credit_calculator" />
															</router-link>

															<router-link
																:to="{ name: 'FAQ' }"
																class="navigation-link text--h4 py-2 d-block text-decoration-none pull-left transition-all"
															>
																<I18nVue t="faq" />
															</router-link>
														</div>
													</v-col>
												</v-row>
											</div>

											<div class="navigation-menu-carousel flex-1">
												<header-slider ref="slider"
												               :physicalPerson="physicalPerson.corporateCredit" />
											</div>
										</div>
									</div>
								</div>
							</v-menu>

							<v-menu @input="open" offset-y min-width="1500" content-class="navigation-link-menu">
								<template v-slot:activator="{ on }">
									<v-btn
										v-on="on"
										depressed
										:ripple="false"
										plain
										text
										id="corporate-link-2"
										class="px-0 text-transform-reset reset-size"
									>
										<div class="navigation-link py-5 pl-4 d-flex align-center">
											<I18nVue classes="font-600 mr-2" t="Nav.CorporateClients.Cards.title" />
											<chevron-down-icon size="1.2x" class="d-block" />
										</div>
									</v-btn>
								</template>

								<div class="navigation-menu-content">
									<div class="navigation-content-in">
										<div @click="notClose" class="navigation-menu-wrap d-flex h-100">
											<div class="navigation-scroll">
												<v-row>
													<v-col md="6">
														<div class="navigation-menu-items">
															<router-link
																:to="{ name: 'CardsCorporateList' }"
																class="navigation-link font-600 text--h3 py-2 d-block text-decoration-none pull-left transition-all"
															>
																<I18nVue t="Nav.CorporateClients.Cards.title" />
															</router-link>

															<template v-for="card in plasticCardList">
																<router-link
																	v-if="card.is_available"
																	:to="{name: 'CardsCorporateDetail', params: {id: card.id}}"
																	class="navigation-link text--h4 py-2 d-block text-decoration-none pull-left transition-all"
																>
																	<I18nVue
																		:uz="card.name_uz"
																		:ru="card.name_ru"
																		:en="card.name_en"
																	/>
																</router-link>
															</template>

															<router-link
																:to="{name: 'SmallBusinessTradeAcquiring'}"
																class="navigation-link text--h4 py-2 d-block text-decoration-none pull-left transition-all"
															>
																<I18nVue t="Nav.CorporateClients.Cards.tab1" />
															</router-link>

															<router-link
																:to="{name: 'SmallBusinessApplicationForTerminal'}"
																class="navigation-link text--h4 py-2 d-block text-decoration-none pull-left transition-all"
															>
																<I18nVue t="Nav.CorporateClients.Cards.tab5" />
															</router-link>

														</div>
													</v-col>

													<v-col md="6">
														<div class="navigation-menu-items">
															<h3 class="font-600 dark-text py-2 d-block text-decoration-none">
																<I18nVue t="Nav.CorporateClients.Cards.tab6" />
															</h3>

															<router-link
																:to="{name: 'SMSNotification'}"
																class="navigation-link text--h4 py-2 d-block text-decoration-none pull-left transition-all"
															>
																<I18nVue t="Nav.CorporateClients.Cards.tab7" />
															</router-link>

															<router-link
																:to="{name: 'CorporateInternetBank'}"
																class="navigation-link text--h4 py-2 d-block text-decoration-none pull-left transition-all"
															>
																<I18nVue t="Nav.CorporateClients.Cards.tab8" />
															</router-link>
														</div>
													</v-col>
												</v-row>
											</div>

											<div class="navigation-menu-carousel flex-1">
												<header-slider ref="slider" :physicalPerson="physicalPerson.card" />
											</div>
										</div>
									</div>
								</div>
							</v-menu>

							<v-menu @input="open" offset-y min-width="1500" content-class="navigation-link-menu">
								<template v-slot:activator="{ on }">
									<v-btn
										v-on="on"
										depressed
										:ripple="false"
										plain
										text
										id="corporate-link-3"
										class="px-0 text-transform-reset reset-size"
									>
										<div class="navigation-link py-5 pl-4 d-flex align-center">
											<I18nVue classes="font-600 mr-2" t="Nav.CorporateClients.Financing.title" />
											<chevron-down-icon size="1.2x" class="d-block" />
										</div>
									</v-btn>
								</template>

								<div class="navigation-menu-content">
									<div class="navigation-content-in">
										<div @click="notClose" class="navigation-menu-wrap d-flex h-100">
											<div class="navigation-scroll">
												<v-row>
													<v-col md="6">
														<div class="navigation-menu-items">
															<router-link
																:to="{ name: 'Financing' }"
																class="navigation-link font-600 text--h3 py-2 d-block text-decoration-none pull-left transition-all"
															>
																<I18nVue t="Nav.CorporateClients.Financing.title" />
															</router-link>

															<router-link
																:to="{ name: 'CorporateTradeFinance' }"
																class="navigation-link text--h4 py-2 d-block text-decoration-none pull-left transition-all"
															>
																<I18nVue t="Nav.CorporateClients.Financing.tab1" />
															</router-link>

															<router-link
																:to="{ name: 'DealingOperations' }"
																class="navigation-link text--h4 py-2 d-block text-decoration-none pull-left transition-all"
															>
																<I18nVue t="CorporateCustomers.Home.TIF.link4" />
															</router-link>

															<router-link
																:to="{ name: 'ProjectFinancing' }"
																class="navigation-link text--h4 py-2 d-block text-decoration-none pull-left transition-all"
															>
																<I18nVue t="Cooperative.FInancing.financing_projects" />
															</router-link>

															<!--                            :to="{ name: 'DocumentaryTransactions' }"-->
															<!--                            <router-link-->
															<!--                              to="/"-->
															<!--                              class="navigation-link text&#45;&#45;h4 py-2 d-block text-decoration-none pull-left transition-all"-->
															<!--                            >-->
															<!--                              <I18nVue t="Nav.PrivateClients.Contributions.tab2" />-->
															<!--                              <span>Hujjatli operatsiyalar</span>-->
															<!--                            </router-link>-->

															<!--                            <router-link-->
															<!--                              :to="{ name: 'SFEA' }"-->
															<!--                              class="navigation-link text&#45;&#45;h4 py-2 d-block text-decoration-none pull-left transition-all"-->
															<!--                            >-->
															<!--                              <I18nVue t="Nav.PrivateClients.Contributions.tab2" />-->
															<!--                              <span>Tashqi iqtisodiy faoliyatni qo'llab-quvvatlash</span>-->
															<!--                            </router-link>-->
														</div>
													</v-col>

													<v-spacer />

<!--													<v-col md="5">-->
<!--														<div class="navigation-menu-items">-->
<!--															<h3 class="font-600 dark-text py-2 d-block text-decoration-none">-->
<!--																<I18nVue t="interactive_services" />-->
<!--															</h3>-->

<!--															<router-link-->
<!--																:to="{name: 'CorporateDocuments'}"-->
<!--																class="navigation-link text&#45;&#45;h4 py-2 d-block text-decoration-none pull-left transition-all"-->
<!--															>-->
<!--																<I18nVue t="files" />-->
<!--															</router-link>-->

<!--															<router-link-->
<!--																:to="{ name: 'BankOffice' }"-->
<!--																class="navigation-link text&#45;&#45;h4 py-2 d-block text-decoration-none pull-left transition-all"-->
<!--															>-->
<!--																<I18nVue t="branches_and_ATMs" />-->
<!--															</router-link>-->
<!--														</div>-->
<!--													</v-col>-->

													<!--                        <v-col md="6">-->
													<!--                          <div class="navigation-menu-items">-->
													<!--                            <h2 class="font-600 dark-text py-2 d-block text-decoration-none">-->
													<!--                              <I18nVue t="Nav.PrivateClients.Contributions.tab2" />-->
													<!--                              <span>Interaktiv hizmatlar</span>-->
													<!--                            </h2>-->

													<!--                            <router-link-->
													<!--                              :to="{ name: 'BankOffice' }"-->
													<!--                              class="navigation-link text&#45;&#45;h4 py-2 d-block text-decoration-none pull-left transition-all"-->
													<!--                            >-->
													<!--                              <I18nVue t="Nav.PrivateClients.Contributions.tab2" />-->
													<!--                              <span>Filiallar va bankomatlar</span>-->
													<!--                            </router-link>-->

													<!--                            <router-link-->
													<!--                              :to="{ name: 'FAQ' }"-->
													<!--                              class="navigation-link text&#45;&#45;h4 py-2 d-block text-decoration-none pull-left transition-all"-->
													<!--                            >-->
													<!--                              <I18nVue t="Nav.PrivateClients.Contributions.tab2" />-->
													<!--                              <span>Savollar va javoblar</span>-->
													<!--                            </router-link>-->
													<!--                          </div>-->
													<!--                        </v-col>-->
												</v-row>
											</div>

											<div class="navigation-menu-carousel flex-1">
												<header-slider ref="slider"
												               :physicalPerson="physicalPerson.financing" />
											</div>
										</div>
									</div>
								</div>
							</v-menu>

							<!-- CorporateDocuments -->
							<router-link
								:to="{name: 'BankDocuments'}"
								id="corporate-link-4"
								class="navigation-link text-decoration-none py-5 pl-4 d-flex align-center font-600"
							>
								<I18nVue t="Nav.CorporateClients.Documents" />
							</router-link>
						</div>
					</template>
					<!-- end corporate-customers routes -->

					<!-- about bank route -->
					<template v-if="initialPathName === 'about-bank'">
						<div class="navigation-bottom-menu flex-1 list-style-none d-flex align-center ml-n1">
							<v-menu @input="open" offset-y min-width="1500" content-class="navigation-link-menu">
								<template v-slot:activator="{ on }">
									<v-btn
										v-on="on"
										depressed
										:ripple="false"
										plain
										text
										id="about-link-1"
										class="px-0 text-transform-reset reset-size"
									>
										<div class="navigation-link py-5 pl-4 d-flex align-center">
											<I18nVue classes="font-600 mr-2" t="Nav.AboutBank.GeneralInfo.title" />
											<chevron-down-icon size="1.2x" class="d-block" />
										</div>
									</v-btn>
								</template>

								<div class="navigation-menu-content">
									<div class="navigation-content-in">
										<div @click="notClose" class="navigation-menu-wrap d-flex h-100">
											<div class="navigation-scroll">
												<v-row>
													<v-col md="6">
														<div class="navigation-menu-items mb-5">
															<h3 class="font-600 dark-text py-2 d-block text-decoration-none">
																<I18nVue t="Nav.AboutBank.GeneralInfo.tab1" />
															</h3>

															<router-link
																:to="{ name: 'Mission' }"
																class="navigation-link text--h4 py-2 d-block text-decoration-none pull-left transition-all"
															>
																<I18nVue t="Nav.AboutBank.GeneralInfo.tab2" />
															</router-link>

															<router-link
																:to="{name: 'BusinessPlan'}"
																class="navigation-link text--h4 py-2 d-block text-decoration-none pull-left transition-all"
															>
																<I18nVue t="Nav.AboutBank.GeneralInfo.tab3" />
															</router-link>

															<router-link
																:to="{ name: 'ChairmanBoard' }"
																class="navigation-link text--h4 py-2 d-block text-decoration-none pull-left transition-all"
															>
																<I18nVue t="Nav.AboutBank.GeneralInfo.tab5" />
															</router-link>

															<router-link
																:to="{ name: 'BankHistory' }"
																class="navigation-link text--h4 py-2 d-block text-decoration-none pull-left transition-all"
															>
																<I18nVue t="Nav.AboutBank.GeneralInfo.tab4" />
															</router-link>
														</div>

														<div class="navigation-menu-items">
															<h3 class="font-600 dark-text py-2 d-block text-decoration-none">
																<I18nVue t="Nav.AboutBank.GeneralInfo.tab6" />
															</h3>

															<router-link
																:to="{ name: 'BankShareholders' }"
																class="navigation-link text--h4 py-2 d-block text-decoration-none pull-left transition-all"
															>
																<I18nVue t="Nav.AboutBank.GeneralInfo.tab7" />
															</router-link>

															<router-link
																:to="{name: 'BankStructure'}"
																class="navigation-link text--h4 py-2 d-block text-decoration-none pull-left transition-all"
															>
																<I18nVue t="Nav.AboutBank.GeneralInfo.tab8" />
															</router-link>

															<router-link
																:to="{name: 'BankBoard'}"
																class="navigation-link text--h4 py-2 d-block text-decoration-none pull-left transition-all"
															>
																<I18nVue t="Nav.AboutBank.GeneralInfo.tab9" />
															</router-link>

															<router-link
																:to="{name: 'StructuralUnits'}"
																class="navigation-link text--h4 py-2 d-block text-decoration-none pull-left transition-all"
															>
																<I18nVue t="Nav.AboutBank.GeneralInfo.tab10" />
															</router-link>

															<router-link
																:to="{name: 'BankStructureDiagram'}"
																class="navigation-link text--h4 py-2 d-block text-decoration-none pull-left transition-all"
															>
																<I18nVue t="Nav.AboutBank.GeneralInfo.tab11" />
															</router-link>

															<router-link
																:to="{name: 'BankAuditCommittee'}"
																class="navigation-link text--h4 py-2 d-block text-decoration-none pull-left transition-all"
															>
																<I18nVue t="Nav.AboutBank.GeneralInfo.tab12" />
															</router-link>

															<router-link
																:to="{ name: 'Affiliates' }"

																class="navigation-link text--h4 py-2 d-block text-decoration-none pull-left transition-all"
															>
																<I18nVue t="Nav.AboutBank.GeneralInfo.tab13" />
															</router-link>

															<router-link
																:to="{ name: 'BankCommittees' }"
																class="navigation-link text--h4 py-2 d-block text-decoration-none pull-left transition-all"
															>
																<I18nVue t="Nav.AboutBank.GeneralInfo.tab14" />
															</router-link>

															<router-link
																:to="{ name: 'InternalAuditDepartment' }"
																class="navigation-link text--h4 py-2 d-block text-decoration-none pull-left transition-all"
															>
																<I18nVue t="Nav.AboutBank.GeneralInfo.tab23" />
															</router-link>
														</div>
													</v-col>

													<v-col md="6">
														<div class="navigation-menu-items mb-5">
															<h3 class="font-600 dark-text py-2 d-block text-decoration-none">
																<I18nVue t="Nav.AboutBank.GeneralInfo.tab15" />
															</h3>

															<router-link
																:to="{ name: 'AboutActivity' }"
																class="navigation-link text--h4 py-2 d-block text-decoration-none pull-left transition-all"
															>
																<I18nVue t="Nav.AboutBank.GeneralInfo.tab16" />
															</router-link>

															<router-link
																:to="{ name: 'CharityActivity' }"
																class="navigation-link text--h4 py-2 d-block text-decoration-none pull-left transition-all"
															>
																<I18nVue t="Nav.AboutBank.GeneralInfo.tab17" />
															</router-link>

															<router-link
																:to="{ name: 'FinancialIndicators' }"
																class="navigation-link text--h4 py-2 d-block text-decoration-none pull-left transition-all"
															>
																<I18nVue t="Nav.AboutBank.GeneralInfo.tab18" />
															</router-link>

															<router-link
																:to="{ name: 'Tariffs' }"
																class="navigation-link text--h4 py-2 d-block text-decoration-none pull-left transition-all"
															>
																<I18nVue t="Nav.AboutBank.GeneralInfo.tab19" />
															</router-link>

															<router-link
																:to="{ name: 'Securities' }"
																class="navigation-link text--h4 py-2 d-block text-decoration-none pull-left transition-all"
															>
																<I18nVue t="Nav.AboutBank.GeneralInfo.tab20" />
															</router-link>

															<router-link
																:to="{ name: 'AboutBankAntiCorruption' }"
																class="navigation-link text--h4 py-2 d-block text-decoration-none pull-left transition-all"
															>
																{{ $t("anti_corruption") }}
															</router-link>
														</div>

														<div class="navigation-menu-items">
															<h3 class="font-600 dark-text py-2 d-block text-decoration-none">
																<I18nVue t="Nav.AboutBank.GeneralInfo.tab21" />
															</h3>
															<!--                            :to="{ name: 'BankDocuments' }"-->
															<router-link
																:to="{ name: 'BankOffice' }"
																class="navigation-link text--h4 py-2 d-block text-decoration-none pull-left transition-all"
															>
																<I18nVue t="Nav.AboutBank.GeneralInfo.tab22" />
															</router-link>

															<!--                            <router-link-->
															<!--                              to="/"-->
															<!--                              class="navigation-link text&#45;&#45;h4 py-2 d-block text-decoration-none pull-left transition-all"-->
															<!--                            >-->
															<!--                              <span>Filiallar va bankomatlar</span>-->
															<!--                            </router-link>-->

															<!--                            <router-link-->
															<!--                              :to="{ name: 'FAQ' }"-->
															<!--                              class="navigation-link text&#45;&#45;h4 py-2 d-block text-decoration-none pull-left transition-all"-->
															<!--                            >-->
															<!--                              <span>Savollar va javoblar</span>-->
															<!--                            </router-link>-->
														</div>
														<div class="navigation-menu-items pt-4">
															<h3 class="font-600 dark-text py-2 d-block text-decoration-none">
																{{ $t("for_info") }}
															</h3>
															<router-link
																:to="{ name: 'FAQ' }"
																class="navigation-link text--h4 py-2 d-block text-decoration-none pull-left transition-all"
															>
																{{ $t("faq") }}
															</router-link>
															<router-link
																:to="{ name: 'PublicOffer' }"
																class="navigation-link text--h4 py-2 d-block text-decoration-none pull-left transition-all"
															>
																{{ $t("Services.OpenCard.oferta") }}
															</router-link>
														</div>
													</v-col>
												</v-row>
											</div>

											<div class="navigation-menu-carousel flex-1">
												<header-slider ref="slider"
												               :physicalPerson="physicalPerson.generalInformation" />
											</div>
										</div>
									</div>
								</div>
							</v-menu>

							<router-link
								:to="{name: 'Career'}"
								id="about-link-2"
								class="navigation-link text-decoration-none py-5 pl-4 d-flex align-center font-600"
							>
								<I18nVue t="Nav.AboutBank.Career" />
							</router-link>

							<v-menu offset-y min-width="250" content-class="navigation-menu-more">
								<template v-slot:activator="{ on, attrs }">
									<v-btn
										v-on="on"
										depressed
										:ripple="false"
										plain
										text
										id="about-link-3"
										class="px-0 text-transform-reset reset-size"
									>
										<div class="navigation-link py-5 pl-4 d-flex align-center">
											<I18nVue classes="font-600 mr-2" t="Nav.AboutBank.Progress.title" />
											<chevron-down-icon size="1.2x" class="d-block" />
										</div>
									</v-btn>
								</template>
								<v-list>
									<v-list-item class="py-1" link :to="{ name: 'Ratings' }">
										<v-list-item-title class="navigation-link text-decoration-none font-600">
											<I18nVue classes="font-600" t="Nav.AboutBank.Progress.tab1" />
										</v-list-item-title>
									</v-list-item>

									<v-list-item class="py-1" link :to="{name: 'QualitySystem'}">
										<v-list-item-title class="navigation-link text-decoration-none font-600">
											<I18nVue classes="font-600" t="Nav.AboutBank.Progress.tab2" />
										</v-list-item-title>
									</v-list-item>

									<v-list-item class="py-1" link :to="{name: 'BankAwards'}">
										<v-list-item-title class="navigation-link text-decoration-none font-600">
											<I18nVue classes="font-600" t="Nav.AboutBank.Progress.tab3" />
										</v-list-item-title>
									</v-list-item>
								</v-list>
							</v-menu>

							<router-link
								:to="{name: 'BankDocuments'}"
								id="about-link-4"
								class="navigation-link text-decoration-none py-5 pl-4 d-flex align-center font-600"
							>
								<I18nVue t="Nav.AboutBank.InformationDocuments" />
							</router-link>

							<router-link
								:to="{name: 'BankAppeals'}"
								id="about-link-5"
								class="navigation-link text-decoration-none py-5 pl-4 d-flex align-center font-600"
							>
								<I18nVue t="Nav.AboutBank.Appeal" />
							</router-link>

							<!--            <router-link-->
							<!--              :to="{ name: 'PressCenter' }"-->
							<!--              class="navigation-link text-decoration-none py-5 pl-4 d-flex align-center"-->
							<!--            >-->
							<!--              <I18nVue t="Nav.PrivateClients.Contributions.tab2" />-->
							<!--              <span class="font-600 mr-2">Press markazi</span>-->
							<!--            </router-link>-->

							<!--            <router-link-->
							<!--              :to="{ name: 'Career' }"-->
							<!--              class="navigation-link text-decoration-none py-5 pl-4 d-flex align-center"-->
							<!--            >-->
							<!--              <I18nVue t="Nav.PrivateClients.Contributions.tab2" />-->
							<!--              <span class="font-600 mr-2">Karyera</span>-->
							<!--            </router-link>-->

							<!--            <router-link-->
							<!--              :to="{ name: 'BankDocuments' }"-->
							<!--              class="navigation-link text-decoration-none py-5 pl-4 d-flex align-center"-->
							<!--            >-->
							<!--              <I18nVue t="Nav.PrivateClients.Contributions.tab2" />-->
							<!--              <span class="font-600 mr-2">Hujjatlar</span>-->
							<!--            </router-link>-->

							<!--            <router-link-->
							<!--              :to="{ name: 'BankAppeals' }"-->
							<!--              class="navigation-link text-decoration-none py-5 pl-4 d-flex align-center"-->
							<!--            >-->
							<!--              <I18nVue t="Nav.PrivateClients.Contributions.tab2" />-->
							<!--              <span class="font-600 mr-2">Murojaatlar</span>-->
							<!--            </router-link>-->
						</div>
					</template>
					<!-- end about bank route -->

					<!-- press center route -->
					<template v-if="initialPathName === 'press-center'">
						<div class="navigation-bottom-menu flex-1 list-style-none d-flex align-center ml-n1">
							<router-link
								:to="{ name: 'NewsAndNotifications' }"
								id="press-center-link-1"
								class="navigation-link text-decoration-none py-5 pl-4 d-flex align-center font-600"
							>
								<I18nVue classes="font-600 mr-2" t="Nav.PressCenter.NewsAlerts" />
							</router-link>

							<router-link
								:to="{ name: 'Announcements' }"
								id="press-center-link-4"
								class="navigation-link text-decoration-none py-5 pl-4 d-flex align-center font-600"
							>
								<I18nVue classes="font-600 mr-2" t="Nav.PressCenter.announcements" />
							</router-link>

							<router-link
								:to="{ name: 'Promotions' }"
								id="press-center-link-2"
								class="navigation-link text-decoration-none py-5 pl-4 d-flex align-center font-600"
							>
								<I18nVue classes="font-600 mr-2" t="Nav.PressCenter.Stocks" />
							</router-link>

							<router-link
								:to="{ name: 'WorkingWithYouth' }"
								id="press-center-link-3"
								class="navigation-link text-decoration-none py-5 pl-4 d-flex align-center font-600"
							>
								<I18nVue classes="font-600 mr-2" t="Nav.PressCenter.YouthPolicy" />
							</router-link>

							<!--						<router-link-->
							<!--							:to="{ name: 'ClientFinancialLiteracy' }"-->
							<!--							id="press-center-link-4"-->
							<!--							class="navigation-link text-decoration-none py-5 pl-4 d-flex align-center font-600"-->
							<!--						>-->

							<!--							<I18nVue classes="font-600 mr-2" t="Nav.PressCenter.FinancialLiteracy" />-->
							<!--						</router-link>-->

							<router-link
								:to="{ name: 'Tenders' }"
								id="press-center-link-5"
								class="navigation-link text-decoration-none py-5 pl-4 d-flex align-center font-600"
							>
								<I18nVue classes="font-600 mr-2" t="Nav.PressCenter.Tenders" />
							</router-link>

							<v-menu offset-y min-width="250" content-class="navigation-menu-more">
								<template v-slot:activator="{ on, attrs }">
									<v-btn
										v-on="on"
										depressed
										:ripple="false"
										plain
										text
										id="press-center-link-6"
										class="px-0 text-transform-reset reset-size"
									>
										<div class="navigation-link py-5 pl-4 d-flex align-center">
											<I18nVue classes="font-600 mr-2" t="more2" />
											<chevron-down-icon size="1.2x" class="d-block" />
										</div>
									</v-btn>
								</template>
								<v-list>
									<v-list-item class="py-1"
									             link
									             :to="{ name: 'UsefulLinks' }"
									>
										<v-list-item-title class="navigation-link text-decoration-none font-600">
											<I18nVue classes="font-600" t="Nav.PressCenter.UsefulLinks" />
										</v-list-item-title>
									</v-list-item>

									<v-list-item class="py-1"
									             link
									             :to="{ name: 'VideoMaterials' }"
									>
										<v-list-item-title class="navigation-link text-decoration-none font-600">
											<I18nVue classes="font-600" t="Nav.PressCenter.VideoMaterials" />
										</v-list-item-title>
									</v-list-item>

									<v-list-item class="py-1"
									             link
									             :to="{ name: 'PhotoMaterials' }"
									>
										<v-list-item-title class="navigation-link text-decoration-none font-600">
											<I18nVue classes="font-600" t="Nav.PressCenter.PhotoMaterials" />
										</v-list-item-title>
									</v-list-item>
								</v-list>
							</v-menu>
						</div>
					</template>
					<!-- end press center route -->

					<!-- investors route -->
					<template v-if="initialPathName === 'investors'">
						<div class="navigation-bottom-menu flex-1 list-style-none d-flex align-center ml-n1">
							<router-link
								:to="{ name: 'FinancialIndicators' }"
								id="investors-link-2"
								class="navigation-link text-decoration-none py-5 pl-4 d-flex align-center font-600"
							>
								<I18nVue classes="font-600 mr-2" t="Nav.ShareholdersInvestors.Financial" />
							</router-link>

							<v-menu offset-y min-width="250" content-class="navigation-menu-more">
								<template v-slot:activator="{ on, attrs }">
									<v-btn
										v-on="on"
										depressed
										:ripple="false"
										plain
										text
										id="investors-link-3"
										class="px-0 text-transform-reset reset-size"
									>
										<div class="navigation-link py-5 pl-4 d-flex align-center">
											<I18nVue classes="font-600 mr-2" t="more2" />
											<chevron-down-icon size="1.2x" class="d-block" />
										</div>
									</v-btn>
								</template>
								<v-list>
									<v-list-item class="py-1" link :to="{name: 'OpenData'}">
										<v-list-item-title class="navigation-link text-decoration-none font-600">
											<I18nVue classes="font-600" t="Nav.ShareholdersInvestors.OpenInformation" />
										</v-list-item-title>
									</v-list-item>

									<v-list-item class="py-1" link :to="{name: 'PartnerInformation'}">
										<v-list-item-title class="navigation-link text-decoration-none font-600">
											<I18nVue classes="font-600"
											         t="Nav.ShareholdersInvestors.FinancialInstitutions.tab1" />
										</v-list-item-title>
									</v-list-item>

									<v-list-item class="py-1" link :to="{name: 'TreasuryOperations'}">
										<v-list-item-title class="navigation-link text-decoration-none font-600">
											<I18nVue classes="font-600"
											         t="Nav.ShareholdersInvestors.FinancialInstitutions.tab2" />
										</v-list-item-title>
									</v-list-item>
								</v-list>
							</v-menu>

							<!--						<v-menu offset-y min-width="1500" content-class="navigation-link-menu">-->
							<!--							<template v-slot:activator="{ on }">-->
							<!--								<v-btn-->
							<!--									v-on="on"-->
							<!--									depressed-->
							<!--									:ripple="false"-->
							<!--									plain-->
							<!--									text-->
							<!--									class="px-0 text-transform-reset reset-size"-->
							<!--								>-->
							<!--									<div class="navigation-link py-5 pl-4 d-flex align-center">-->
							<!--										<I18nVue classes="font-600 mr-2" t="Nav.ShareholdersInvestors.Info" />-->
							<!--									</div>-->
							<!--								</v-btn>-->
							<!--							</template>-->

							<!--							&lt;!&ndash;              <div class="navigation-menu-content">&ndash;&gt;-->
							<!--							&lt;!&ndash;                <div class="navigation-content-in">&ndash;&gt;-->
							<!--							&lt;!&ndash;                  <div class="navigation-menu-wrap d-flex h-100">&ndash;&gt;-->
							<!--							&lt;!&ndash;                    <div class="navigation-scroll">&ndash;&gt;-->
							<!--							&lt;!&ndash;                      <v-row>&ndash;&gt;-->
							<!--							&lt;!&ndash;                        <v-col md="6">&ndash;&gt;-->
							<!--							&lt;!&ndash;                          <div class="navigation-menu-items">&ndash;&gt;-->
							<!--							&lt;!&ndash;                            <router-link&ndash;&gt;-->
							<!--							&lt;!&ndash;                              :to="{ name: 'BankStructure' }"&ndash;&gt;-->
							<!--							&lt;!&ndash;                              class="navigation-link font-600 text&#45;&#45;h2 py-2 d-block text-decoration-none pull-left transition-all"&ndash;&gt;-->
							<!--							&lt;!&ndash;                            >&ndash;&gt;-->
							<!--							&lt;!&ndash;                              <I18nVue t="Nav.PrivateClients.Contributions.tab2" />&ndash;&gt;-->
							<!--							&lt;!&ndash;                              <span>Bank tuzilishi</span>&ndash;&gt;-->
							<!--							&lt;!&ndash;                            </router-link>&ndash;&gt;-->

							<!--							&lt;!&ndash;                            <router-link&ndash;&gt;-->
							<!--							&lt;!&ndash;                              :to="{ name: 'InternalDocuments' }"&ndash;&gt;-->
							<!--							&lt;!&ndash;                              class="navigation-link text&#45;&#45;h4 py-2 d-block text-decoration-none pull-left transition-all"&ndash;&gt;-->
							<!--							&lt;!&ndash;                            >&ndash;&gt;-->
							<!--							&lt;!&ndash;                              <I18nVue t="Nav.PrivateClients.Contributions.tab2" />&ndash;&gt;-->
							<!--							&lt;!&ndash;                              <span>Ichki hujjatlar</span>&ndash;&gt;-->
							<!--							&lt;!&ndash;                            </router-link>&ndash;&gt;-->
							<!--							&lt;!&ndash;                          </div>&ndash;&gt;-->
							<!--							&lt;!&ndash;                        </v-col>&ndash;&gt;-->

							<!--							&lt;!&ndash;                        <v-col md="6">&ndash;&gt;-->
							<!--							&lt;!&ndash;                          <div class="navigation-menu-items">&ndash;&gt;-->
							<!--							&lt;!&ndash;                            <h2&ndash;&gt;-->
							<!--							&lt;!&ndash;                              class="font-600 dark-text py-2 d-block text-decoration-none"&ndash;&gt;-->
							<!--							&lt;!&ndash;                            >&ndash;&gt;-->
							<!--							&lt;!&ndash;                              <I18nVue t="Nav.PrivateClients.Contributions.tab2" />&ndash;&gt;-->
							<!--							&lt;!&ndash;                              <span>Interaktiv hizmatlar</span>&ndash;&gt;-->
							<!--							&lt;!&ndash;                            </h2>&ndash;&gt;-->

							<!--							&lt;!&ndash;                            <router-link&ndash;&gt;-->
							<!--							&lt;!&ndash;                              :to="{ name: 'FAQ' }"&ndash;&gt;-->
							<!--							&lt;!&ndash;                              class="navigation-link text&#45;&#45;h4 py-2 d-block text-decoration-none pull-left transition-all"&ndash;&gt;-->
							<!--							&lt;!&ndash;                            >&ndash;&gt;-->
							<!--							&lt;!&ndash;                              <I18nVue t="Nav.PrivateClients.Contributions.tab2" />&ndash;&gt;-->
							<!--							&lt;!&ndash;                              <span>Savollar va javoblar</span>&ndash;&gt;-->
							<!--							&lt;!&ndash;                            </router-link>&ndash;&gt;-->
							<!--							&lt;!&ndash;                          </div>&ndash;&gt;-->
							<!--							&lt;!&ndash;                        </v-col>&ndash;&gt;-->
							<!--							&lt;!&ndash;                      </v-row>&ndash;&gt;-->
							<!--							&lt;!&ndash;                    </div>&ndash;&gt;-->

							<!--							&lt;!&ndash;                    <div class="navigation-menu-carousel flex-1">asdasd</div>&ndash;&gt;-->
							<!--							&lt;!&ndash;                  </div>&ndash;&gt;-->
							<!--							&lt;!&ndash;                </div>&ndash;&gt;-->
							<!--							&lt;!&ndash;              </div>&ndash;&gt;-->
							<!--						</v-menu>-->

							<!--						<v-menu offset-y min-width="1500" content-class="navigation-link-menu">-->
							<!--							<template v-slot:activator="{ on }">-->
							<!--								<v-btn-->
							<!--									v-on="on"-->
							<!--									depressed-->
							<!--									:ripple="false"-->
							<!--									plain-->
							<!--									text-->
							<!--									class="px-0 text-transform-reset reset-size"-->
							<!--								>-->
							<!--									<div class="navigation-link py-5 pl-4 d-flex align-center">-->
							<!--										<I18nVue classes="font-600 mr-2" t="Nav.ShareholdersInvestors.Financial" />-->
							<!--										&lt;!&ndash;                    <chevron-down-icon size="1.2x" class="d-block"/>&ndash;&gt;-->
							<!--									</div>-->
							<!--								</v-btn>-->
							<!--							</template>-->

							<!--							&lt;!&ndash;              <div class="navigation-menu-content">&ndash;&gt;-->
							<!--							&lt;!&ndash;                <div class="navigation-content-in">&ndash;&gt;-->
							<!--							&lt;!&ndash;                  <div class="navigation-menu-wrap d-flex h-100">&ndash;&gt;-->
							<!--							&lt;!&ndash;                    <div class="navigation-scroll">&ndash;&gt;-->
							<!--							&lt;!&ndash;                      <v-row>&ndash;&gt;-->
							<!--							&lt;!&ndash;                        <v-col md="6">&ndash;&gt;-->
							<!--							&lt;!&ndash;                          <div class="navigation-menu-items">&ndash;&gt;-->
							<!--							&lt;!&ndash;                            <router-link&ndash;&gt;-->
							<!--							&lt;!&ndash;                              :to="{ name: 'FinancialIndicators' }"&ndash;&gt;-->
							<!--							&lt;!&ndash;                              class="navigation-link font-600 text&#45;&#45;h2 py-2 d-block text-decoration-none pull-left transition-all"&ndash;&gt;-->
							<!--							&lt;!&ndash;                            >&ndash;&gt;-->
							<!--							&lt;!&ndash;                              <I18nVue t="Nav.PrivateClients.Contributions.tab2" />&ndash;&gt;-->
							<!--							&lt;!&ndash;                              <span>Moliyaviy ko'rsatkichlar</span>&ndash;&gt;-->
							<!--							&lt;!&ndash;                            </router-link>&ndash;&gt;-->

							<!--							&lt;!&ndash;                            <router-link&ndash;&gt;-->
							<!--							&lt;!&ndash;                              :to="{ name: 'AuditReport' }"&ndash;&gt;-->
							<!--							&lt;!&ndash;                              class="navigation-link text&#45;&#45;h4 py-2 d-block text-decoration-none pull-left transition-all"&ndash;&gt;-->
							<!--							&lt;!&ndash;                            >&ndash;&gt;-->
							<!--							&lt;!&ndash;                              <I18nVue t="Nav.PrivateClients.Contributions.tab2" />&ndash;&gt;-->
							<!--							&lt;!&ndash;                              <span>Auditorlik hulosalari</span>&ndash;&gt;-->
							<!--							&lt;!&ndash;                            </router-link>&ndash;&gt;-->

							<!--							&lt;!&ndash;                            <router-link&ndash;&gt;-->
							<!--							&lt;!&ndash;                              :to="{ name: 'BankPerformance' }"&ndash;&gt;-->
							<!--							&lt;!&ndash;                              class="navigation-link text&#45;&#45;h4 py-2 d-block text-decoration-none pull-left transition-all"&ndash;&gt;-->
							<!--							&lt;!&ndash;                            >&ndash;&gt;-->
							<!--							&lt;!&ndash;                              <I18nVue t="Nav.PrivateClients.Contributions.tab2" />&ndash;&gt;-->
							<!--							&lt;!&ndash;                              <span>Faoliyatning asosiy ko'rsatkichlari</span>&ndash;&gt;-->
							<!--							&lt;!&ndash;                            </router-link>&ndash;&gt;-->

							<!--							&lt;!&ndash;                            <router-link&ndash;&gt;-->
							<!--							&lt;!&ndash;                              :to="{ name: 'StatisticGraphs' }"&ndash;&gt;-->
							<!--							&lt;!&ndash;                              class="navigation-link text&#45;&#45;h4 py-2 d-block text-decoration-none pull-left transition-all"&ndash;&gt;-->
							<!--							&lt;!&ndash;                            >&ndash;&gt;-->
							<!--							&lt;!&ndash;                              <I18nVue t="Nav.PrivateClients.Contributions.tab2" />&ndash;&gt;-->
							<!--							&lt;!&ndash;                              <span>Statistik grafikalar</span>&ndash;&gt;-->
							<!--							&lt;!&ndash;                            </router-link>&ndash;&gt;-->

							<!--							&lt;!&ndash;                            <router-link&ndash;&gt;-->
							<!--							&lt;!&ndash;                              :to="{ name: 'DevelopmentDynamics' }"&ndash;&gt;-->
							<!--							&lt;!&ndash;                              class="navigation-link text&#45;&#45;h4 py-2 d-block text-decoration-none pull-left transition-all"&ndash;&gt;-->
							<!--							&lt;!&ndash;                            >&ndash;&gt;-->
							<!--							&lt;!&ndash;                              <I18nVue t="Nav.PrivateClients.Contributions.tab2" />&ndash;&gt;-->
							<!--							&lt;!&ndash;                              <span>Rivojlanish dinamikasi</span>&ndash;&gt;-->
							<!--							&lt;!&ndash;                            </router-link>&ndash;&gt;-->
							<!--							&lt;!&ndash;                          </div>&ndash;&gt;-->
							<!--							&lt;!&ndash;                        </v-col>&ndash;&gt;-->

							<!--							&lt;!&ndash;                        <v-col md="6">&ndash;&gt;-->
							<!--							&lt;!&ndash;                          <div class="navigation-menu-items">&ndash;&gt;-->
							<!--							&lt;!&ndash;                            <h2 class="font-600 dark-text py-2 d-block text-decoration-none">&ndash;&gt;-->
							<!--							&lt;!&ndash;                              <I18nVue t="Nav.PrivateClients.Contributions.tab2" />&ndash;&gt;-->
							<!--							&lt;!&ndash;                              <span>Interaktiv hizmatlar</span>&ndash;&gt;-->
							<!--							&lt;!&ndash;                            </h2>&ndash;&gt;-->

							<!--							&lt;!&ndash;                            <router-link&ndash;&gt;-->
							<!--							&lt;!&ndash;                              :to="{ name: 'BankDocuments' }"&ndash;&gt;-->
							<!--							&lt;!&ndash;                              class="navigation-link text&#45;&#45;h4 py-2 d-block text-decoration-none pull-left transition-all"&ndash;&gt;-->
							<!--							&lt;!&ndash;                            >&ndash;&gt;-->
							<!--							&lt;!&ndash;                              <I18nVue t="Nav.PrivateClients.Contributions.tab2" />&ndash;&gt;-->
							<!--							&lt;!&ndash;                              <span>Hujjatlar</span>&ndash;&gt;-->
							<!--							&lt;!&ndash;                            </router-link>&ndash;&gt;-->

							<!--							&lt;!&ndash;                            <router-link&ndash;&gt;-->
							<!--							&lt;!&ndash;                              :to="{ name: 'Tariffs' }"&ndash;&gt;-->
							<!--							&lt;!&ndash;                              class="navigation-link text&#45;&#45;h4 py-2 d-block text-decoration-none pull-left transition-all"&ndash;&gt;-->
							<!--							&lt;!&ndash;                            >&ndash;&gt;-->
							<!--							&lt;!&ndash;                              <I18nVue t="Nav.PrivateClients.Contributions.tab2" />&ndash;&gt;-->
							<!--							&lt;!&ndash;                              <span>Tariflar</span>&ndash;&gt;-->
							<!--							&lt;!&ndash;                            </router-link>&ndash;&gt;-->

							<!--							&lt;!&ndash;                            <router-link&ndash;&gt;-->
							<!--							&lt;!&ndash;                              :to="{ name: 'Requisites' }"&ndash;&gt;-->
							<!--							&lt;!&ndash;                              class="navigation-link text&#45;&#45;h4 py-2 d-block text-decoration-none pull-left transition-all"&ndash;&gt;-->
							<!--							&lt;!&ndash;                            >&ndash;&gt;-->
							<!--							&lt;!&ndash;                              <I18nVue t="Nav.PrivateClients.Contributions.tab2" />&ndash;&gt;-->
							<!--							&lt;!&ndash;                              <span>Rekvizitlar</span>&ndash;&gt;-->
							<!--							&lt;!&ndash;                            </router-link>&ndash;&gt;-->

							<!--							&lt;!&ndash;                            <router-link&ndash;&gt;-->
							<!--							&lt;!&ndash;                              :to="{ name: 'FAQ' }"&ndash;&gt;-->
							<!--							&lt;!&ndash;                              class="navigation-link text&#45;&#45;h4 py-2 d-block text-decoration-none pull-left transition-all"&ndash;&gt;-->
							<!--							&lt;!&ndash;                            >&ndash;&gt;-->
							<!--							&lt;!&ndash;                              <I18nVue t="Nav.PrivateClients.Contributions.tab2" />&ndash;&gt;-->
							<!--							&lt;!&ndash;                              <span>Savollar va javoblar</span>&ndash;&gt;-->
							<!--							&lt;!&ndash;                            </router-link>&ndash;&gt;-->
							<!--							&lt;!&ndash;                          </div>&ndash;&gt;-->
							<!--							&lt;!&ndash;                        </v-col>&ndash;&gt;-->
							<!--							&lt;!&ndash;                      </v-row>&ndash;&gt;-->
							<!--							&lt;!&ndash;                    </div>&ndash;&gt;-->

							<!--							&lt;!&ndash;                    <div class="navigation-menu-carousel flex-1">asdasd</div>&ndash;&gt;-->
							<!--							&lt;!&ndash;                  </div>&ndash;&gt;-->
							<!--							&lt;!&ndash;                </div>&ndash;&gt;-->
							<!--							&lt;!&ndash;              </div>&ndash;&gt;-->
							<!--						</v-menu>-->

							<!--						<v-menu offset-y min-width="1500" content-class="navigation-link-menu">-->
							<!--							<template v-slot:activator="{ on }">-->
							<!--								<v-btn-->
							<!--									v-on="on"-->
							<!--									depressed-->
							<!--									:ripple="false"-->
							<!--									plain-->
							<!--									text-->
							<!--									class="px-0 text-transform-reset reset-size"-->
							<!--								>-->
							<!--									<div class="navigation-link py-5 pl-4 d-flex align-center">-->
							<!--										<I18nVue classes="font-600 mr-2"-->
							<!--										         t="Nav.ShareholdersInvestors.OpenInformation" />-->
							<!--										&lt;!&ndash;                    <chevron-down-icon size="1.2x" class="d-block"/>&ndash;&gt;-->
							<!--									</div>-->
							<!--								</v-btn>-->
							<!--							</template>-->

							<!--							&lt;!&ndash;              <div class="navigation-menu-content">&ndash;&gt;-->
							<!--							&lt;!&ndash;                <div class="navigation-content-in">&ndash;&gt;-->
							<!--							&lt;!&ndash;                  <div class="navigation-menu-wrap d-flex h-100">&ndash;&gt;-->
							<!--							&lt;!&ndash;                    <div class="navigation-scroll">&ndash;&gt;-->
							<!--							&lt;!&ndash;                      <v-row>&ndash;&gt;-->
							<!--							&lt;!&ndash;                        <v-col md="6">&ndash;&gt;-->
							<!--							&lt;!&ndash;                          <div class="navigation-menu-items">&ndash;&gt;-->
							<!--							&lt;!&ndash;                            <router-link&ndash;&gt;-->
							<!--							&lt;!&ndash;                              :to="{ name: 'OpenData' }"&ndash;&gt;-->
							<!--							&lt;!&ndash;                              class="navigation-link font-600 text&#45;&#45;h2 py-2 d-block text-decoration-none pull-left transition-all"&ndash;&gt;-->
							<!--							&lt;!&ndash;                            >&ndash;&gt;-->
							<!--							&lt;!&ndash;                              <I18nVue t="Nav.PrivateClients.Contributions.tab2" />&ndash;&gt;-->
							<!--							&lt;!&ndash;                              <span>Ochiq ma'lumotlar</span>&ndash;&gt;-->
							<!--							&lt;!&ndash;                            </router-link>&ndash;&gt;-->

							<!--							&lt;!&ndash;                            <router-link&ndash;&gt;-->
							<!--							&lt;!&ndash;                              :to="{ name: 'InternalDocuments' }"&ndash;&gt;-->
							<!--							&lt;!&ndash;                              class="navigation-link text&#45;&#45;h4 py-2 d-block text-decoration-none pull-left transition-all"&ndash;&gt;-->
							<!--							&lt;!&ndash;                            >&ndash;&gt;-->
							<!--							&lt;!&ndash;                              <I18nVue t="Nav.PrivateClients.Contributions.tab2" />&ndash;&gt;-->
							<!--							&lt;!&ndash;                              <span>Muhim faktlar</span>&ndash;&gt;-->
							<!--							&lt;!&ndash;                            </router-link>&ndash;&gt;-->

							<!--							&lt;!&ndash;                            <router-link&ndash;&gt;-->
							<!--							&lt;!&ndash;                              :to="{ name: 'Affiliates' }"&ndash;&gt;-->
							<!--							&lt;!&ndash;                              class="navigation-link text&#45;&#45;h4 py-2 d-block text-decoration-none pull-left transition-all"&ndash;&gt;-->
							<!--							&lt;!&ndash;                            >&ndash;&gt;-->
							<!--							&lt;!&ndash;                              <I18nVue t="Nav.PrivateClients.Contributions.tab2" />&ndash;&gt;-->
							<!--							&lt;!&ndash;                              <span>Affilangan shaxslar</span>&ndash;&gt;-->
							<!--							&lt;!&ndash;                            </router-link>&ndash;&gt;-->
							<!--							&lt;!&ndash;                          </div>&ndash;&gt;-->
							<!--							&lt;!&ndash;                        </v-col>&ndash;&gt;-->

							<!--							&lt;!&ndash;                        <v-col md="6">&ndash;&gt;-->
							<!--							&lt;!&ndash;                          <div class="navigation-menu-items">&ndash;&gt;-->
							<!--							&lt;!&ndash;                            <h2&ndash;&gt;-->
							<!--							&lt;!&ndash;                              class="font-600 dark-text py-2 d-block text-decoration-none"&ndash;&gt;-->
							<!--							&lt;!&ndash;                            >&ndash;&gt;-->
							<!--							&lt;!&ndash;                              <I18nVue t="Nav.PrivateClients.Contributions.tab2" />&ndash;&gt;-->
							<!--							&lt;!&ndash;                              <span>Interaktiv hizmatlar</span>&ndash;&gt;-->
							<!--							&lt;!&ndash;                            </h2>&ndash;&gt;-->

							<!--							&lt;!&ndash;                            <router-link&ndash;&gt;-->
							<!--							&lt;!&ndash;                              :to="{ name: 'BankDocuments' }"&ndash;&gt;-->
							<!--							&lt;!&ndash;                              class="navigation-link text&#45;&#45;h4 py-2 d-block text-decoration-none pull-left transition-all"&ndash;&gt;-->
							<!--							&lt;!&ndash;                            >&ndash;&gt;-->
							<!--							&lt;!&ndash;                              <I18nVue t="Nav.PrivateClients.Contributions.tab2" />&ndash;&gt;-->
							<!--							&lt;!&ndash;                              <span>Hujjatlar</span>&ndash;&gt;-->
							<!--							&lt;!&ndash;                            </router-link>&ndash;&gt;-->

							<!--							&lt;!&ndash;                            <router-link&ndash;&gt;-->
							<!--							&lt;!&ndash;                              :to="{ name: 'Tariffs' }"&ndash;&gt;-->
							<!--							&lt;!&ndash;                              class="navigation-link text&#45;&#45;h4 py-2 d-block text-decoration-none pull-left transition-all"&ndash;&gt;-->
							<!--							&lt;!&ndash;                            >&ndash;&gt;-->
							<!--							&lt;!&ndash;                              <I18nVue t="Nav.PrivateClients.Contributions.tab2" />&ndash;&gt;-->
							<!--							&lt;!&ndash;                              <span>Tariflar</span>&ndash;&gt;-->
							<!--							&lt;!&ndash;                            </router-link>&ndash;&gt;-->

							<!--							&lt;!&ndash;                            <router-link&ndash;&gt;-->
							<!--							&lt;!&ndash;                              :to="{ name: 'Requisites' }"&ndash;&gt;-->
							<!--							&lt;!&ndash;                              class="navigation-link text&#45;&#45;h4 py-2 d-block text-decoration-none pull-left transition-all"&ndash;&gt;-->
							<!--							&lt;!&ndash;                            >&ndash;&gt;-->
							<!--							&lt;!&ndash;                              <I18nVue t="Nav.PrivateClients.Contributions.tab2" />&ndash;&gt;-->
							<!--							&lt;!&ndash;                              <span>Rekvizitlar</span>&ndash;&gt;-->
							<!--							&lt;!&ndash;                            </router-link>&ndash;&gt;-->

							<!--							&lt;!&ndash;                            <router-link&ndash;&gt;-->
							<!--							&lt;!&ndash;                              :to="{ name: 'FAQ' }"&ndash;&gt;-->
							<!--							&lt;!&ndash;                              class="navigation-link text&#45;&#45;h4 py-2 d-block text-decoration-none pull-left transition-all"&ndash;&gt;-->
							<!--							&lt;!&ndash;                            >&ndash;&gt;-->
							<!--							&lt;!&ndash;                              <I18nVue t="Nav.PrivateClients.Contributions.tab2" />&ndash;&gt;-->
							<!--							&lt;!&ndash;                              <span>Savollar va javoblar</span>&ndash;&gt;-->
							<!--							&lt;!&ndash;                            </router-link>&ndash;&gt;-->
							<!--							&lt;!&ndash;                          </div>&ndash;&gt;-->
							<!--							&lt;!&ndash;                        </v-col>&ndash;&gt;-->
							<!--							&lt;!&ndash;                      </v-row>&ndash;&gt;-->
							<!--							&lt;!&ndash;                    </div>&ndash;&gt;-->

							<!--							&lt;!&ndash;                    <div class="navigation-menu-carousel flex-1">asdasd</div>&ndash;&gt;-->
							<!--							&lt;!&ndash;                  </div>&ndash;&gt;-->
							<!--							&lt;!&ndash;                </div>&ndash;&gt;-->
							<!--							&lt;!&ndash;              </div>&ndash;&gt;-->
							<!--						</v-menu>-->


							<!--						<v-menu offset-y min-width="1500" content-class="navigation-link-menu">-->
							<!--							<template v-slot:activator="{ on }">-->
							<!--								<v-btn-->
							<!--									v-on="on"-->
							<!--									depressed-->
							<!--									:ripple="false"-->
							<!--									plain-->
							<!--									text-->
							<!--									class="px-0 text-transform-reset reset-size"-->
							<!--								>-->
							<!--									<div class="navigation-link py-5 pl-4 d-flex align-center">-->
							<!--										<I18nVue classes="font-600 mr-2"-->
							<!--										         t="Nav.ShareholdersInvestors.FinancialInstitutions.title" />-->
							<!--										<chevron-down-icon size="1.2x" class="d-block" />-->
							<!--									</div>-->
							<!--								</v-btn>-->
							<!--							</template>-->

							<!--							<div class="navigation-menu-content">-->
							<!--								<div class="navigation-content-in">-->
							<!--									<div class="navigation-menu-wrap d-flex h-100">-->
							<!--										<div class="navigation-scroll">-->
							<!--											<v-row>-->
							<!--												<v-col md="12">-->
							<!--													<div class="navigation-menu-items">-->
							<!--														<router-link-->
							<!--															to="/"-->
							<!--															class="navigation-link font-600 text&#45;&#45;h2 py-2 d-block text-decoration-none pull-left transition-all"-->
							<!--														>-->
							<!--															<I18nVue-->
							<!--																t="Nav.ShareholdersInvestors.FinancialInstitutions.title" />-->
							<!--														</router-link>-->

							<!--														<router-link-->
							<!--															to="/"-->
							<!--															class="navigation-link text&#45;&#45;h4 py-2 d-block text-decoration-none pull-left transition-all"-->
							<!--														>-->
							<!--															<I18nVue-->
							<!--																t="Nav.ShareholdersInvestors.FinancialInstitutions.tab1" />-->
							<!--														</router-link>-->

							<!--														<router-link-->
							<!--															to="/"-->
							<!--															class="navigation-link text&#45;&#45;h4 py-2 d-block text-decoration-none pull-left transition-all"-->
							<!--														>-->
							<!--															<I18nVue-->
							<!--																t="Nav.ShareholdersInvestors.FinancialInstitutions.tab2" />-->
							<!--														</router-link>-->
							<!--													</div>-->
							<!--												</v-col>-->
							<!--											</v-row>-->
							<!--										</div>-->

							<!--										<div class="navigation-menu-carousel flex-1">asdasd</div>-->
							<!--									</div>-->
							<!--								</div>-->
							<!--							</div>-->
							<!--						</v-menu>-->
						</div>
					</template>
					<!-- end investors route -->

					<ul class="ml-auto px-0 list-style-none d-flex align-center">
						<li>
							<div class="py-5 pl-4 d-flex align-center">
								<phone-icon size="1.2x" class="d-block primary-text" />
								<a href="tel:1152"
								   class="navigation-link primary-text font-700 text-decoration-none ml-3">1152</a>
							</div>
						</li>

						<li>
							<search-dropdown />
						</li>

						<li>
							<v-menu offset-y content-class="elevation-0">
								<template v-slot:activator="{ on }">
									<v-btn
										v-on="on"
										depressed
										:ripple="false"
										plain
										text
										id="feedback-dropdown"
										class="px-0 text-transform-reset reset-size"
									>
										<div
											class="navigation-link text-uppercase text-small py-5 pl-4 d-flex align-center"
										>
											<mail-icon size="1.2x" class="d-block" />
											<I18nVue classes="font-700 text--13 ml-3" t="feedback" />
										</div>
									</v-btn>
								</template>
								<div class="navigation-menu-content">
									<div class="pt-7 text-center">
										<div class="mb-3">
											<v-tooltip right>
												<template v-slot:activator="{ on, attrs }">
													<router-link :to="{name: 'BankAppealsForm'}">
														<v-avatar
															size="56"
															v-bind="attrs"
															v-on="on"
															class="social-circle border-all transition-all"
														>
															<mail-icon style="width: 1.5rem; height: 1.5rem"
															           class="rounded-0 primary-text" />
														</v-avatar>
													</router-link>
												</template>
												<I18nVue t="write_an_appeal" />
											</v-tooltip>
										</div>

										<div class="mb-3">
											<v-tooltip right>
												<template v-slot:activator="{ on, attrs }">
													<router-link :to="{name: 'Compliance'}">
														<v-avatar
															size="56"
															v-bind="attrs"
															v-on="on"
															class="social-circle border-all transition-all"
														>
															<users-icon style="width: 1.5rem; height: 1.5rem"
															            class="rounded-0 primary-text" />
														</v-avatar>
													</router-link>
												</template>
												<I18nVue t="complains_manager" />
											</v-tooltip>
										</div>

										<div class="mb-3">
											<v-tooltip right>
												<template v-slot:activator="{ on, attrs }">
													<a target="_blank"
													   rel="noopener noreferrer"
													   href="https://pm.gov.uz/uz#/authorities/15/157/_info">
														<v-avatar
															size="56"
															v-bind="attrs"
															v-on="on"
															class="social-circle border-all transition-all"
														>
															<file-text-icon style="width: 1.5rem; height: 1.5rem"
															                class="rounded-0 primary-text" />
														</v-avatar>
													</a>
												</template>
												<I18nVue t="virtual_reception" />
											</v-tooltip>
										</div>

										<div class="mb-3">
											<v-tooltip right>
												<template v-slot:activator="{ on, attrs }">
													<a target="_blank"
													   rel="noopener noreferrer"
													   href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fasakabank.uz%2Fuz">
														<v-avatar
															size="56"
															v-bind="attrs"
															v-on="on"
															class="social-circle border-all transition-all"
														>
															<facebook-icon style="width: 1.5rem; height: 1.5rem"
															               class="rounded-0 primary-text" />
														</v-avatar>
													</a>
												</template>
												<I18nVue t="share_on_facebook" />
											</v-tooltip>
										</div>

										<div class="mb-3">
											<v-tooltip right>
												<template v-slot:activator="{ on, attrs }">
													<a href="https://www.twitter.com/share?url=https%3A%2F%2Fasakabank.uz%2Fuz"
													   target="_blank"
													   rel="noopener noreferrer"
													>
														<v-avatar
															size="56"
															v-bind="attrs"
															v-on="on"
															class="social-circle border-all transition-all"
														>
															<twitter-icon
																style="width: 1.4rem; height: 1.4rem"
																class="rounded-0 primary-text"
															/>
														</v-avatar>
													</a>
												</template>
												<I18nVue t="share_on_twitter" />
											</v-tooltip>
										</div>
									</div>
								</div>
							</v-menu>
						</li>

						<li>
							<v-menu offset-y min-width="250" content-class="elevation-0">
								<template v-slot:activator="{ on }">
									<v-btn
										v-on="on"
										depressed
										:ripple="false"
										plain
										text
										id="internet_banking-dropdown"
										class="px-0 text-transform-reset reset-size"
									>
										<div
											class="navigation-link text-uppercase text-small py-5 pl-4 d-flex align-center">
											<log-in-icon size="1.2x" class="d-block" />
											<I18nVue classes="font-700 text--13 mx-3" t="internet_banking" />
										</div>
									</v-btn>
								</template>

								<div class="navigation-menu-content">
									<div class="pt-5">
										<div class="content-in border-all pa-6">
											<h4 class="font-600 mb-2">
												<I18nVue t="for_individuals" />
											</h4>

											<template v-if="!getCurrentUser">
												<router-link :to="{ name: 'Login' }"
												             class="pull-left transition-all d-flex align-center primary-text mb-5 mb-xl-6 text-decoration-none">
													<log-in-icon size="1.2x" class="d-block mr-2" />
													<h5 class="font-600">{{ $t("personal_cabinet") }}</h5>
												</router-link>
											</template>

											<template v-else>
												<router-link :to="{ name: 'Admin' }"
												             class="pull-left transition-all d-flex align-center primary-text mb-5 mb-xl-6 text-decoration-none">
													<log-in-icon size="1.2x" class="d-block mr-2" />
													<h5 class="font-600">{{ $t("personal_cabinet") }}</h5>
												</router-link>
											</template>

											<h4 class="font-600 mb-2">{{ $t("for_business") }}</h4>

											<a
												href="https://cib.asakabank.uz/cib/index.jsp"
												target="_blank"
												class="pull-left transition-all d-flex align-center primary-text mb-5 mb-xl-6 text-decoration-none"
											>
												<log-in-icon size="1.2x" class="d-block mr-2" />
												<h5 class="font-600">{{ $t("internet_banking") }}</h5>
											</a>

											<!--											<h4 class="font-600 mb-2">{{ $t("online_service") }}</h4>-->

											<!--											<router-link-->
											<!--												to="/"-->
											<!--												class="pull-left transition-all d-flex align-center primary-text text-decoration-none"-->
											<!--											>-->
											<!--												<log-in-icon size="1.2x" class="d-block mr-2" />-->
											<!--												<h5 class="font-600">{{ $t("asaka_web") }}</h5>-->
											<!--											</router-link>-->
										</div>
									</div>
								</div>
							</v-menu>
						</li>
					</ul>
				</div>
			</div>
		</header>
	</div>
</template>

<script>
import { Hooper, Slide } from "hooper";
import "hooper/dist/hooper.css";
import AppLanguage from "../../../components/AppLanguage";
import AppSpecial from "../../../components/AppSpecial";
import SearchDropdown from "./components/SearchDropdown";
import AppGridMenu from "./components/GridMenu";
import HeaderTopMobileMenu from "./components/HeaderTopMobileMenu";
import HeaderTopMobileAppDownload from "./components/HeaderTopMobileAppDownload";
import {
	MapPinIcon,
	EyeIcon,
	ChevronDownIcon,
	SearchIcon,
	MailIcon,
	UsersIcon,
	FileTextIcon,
	FacebookIcon,
	TwitterIcon,
	LogInIcon,
	PhoneIcon
} from "vue-feather-icons";
import I18nVue from "@/I18nVue";
import HeaderSlider from "@/components/HeaderSlider";

import { mapGetters, mapActions } from "vuex"

export default {
	name: "index",
	components: {
		I18nVue,
		AppSpecial,
		HeaderTopMobileMenu,
		SearchDropdown,
		MapPinIcon,
		EyeIcon,
		ChevronDownIcon,
		SearchIcon,
		MailIcon,
		UsersIcon,
		FileTextIcon,
		FacebookIcon,
		TwitterIcon,
		LogInIcon,
		PhoneIcon,
		AppLanguage,
		AppGridMenu,
		Hooper,
		Slide,
		HeaderSlider,
		HeaderTopMobileAppDownload
	},
	data() {
		return {
			initialPathName: "physical-persons",
			carouselData: 0,
			physicalPerson: {
				credit: [
					{
						id: 1,
						image: "",
						title: {
							title_uz: "Barcha kreditlar",
							title_ru: "Все кредиты",
							title_en: "All loans"
						},
						description: {
							description_uz: "Sizning maqsadlaringiz bizning vositamiz! Eng katta rejalar uchun pul oling.",
							description_ru: "Ваши цели – наши средства! Получите деньги на самые большие планы.",
							description_en: "Your goals are our tool! Get paid for the biggest plans."
						},
						hasVideo: true,
						videoUrl: "https://asakabank.uz/media/files/other/155/about_155_1about.mp4",
						videoPoster: "https://asakabank.uz/media/images/mdls/155/_1604646466.1089.jpg"
					},
					{
						id: 2,
						image: "https://asakabank.uz/media/images/mdls/155/_1594896778.4161.png",
						title: {
							title_uz: "Overdraft",
							title_ru: "Овердрафт",
							title_en: "Overdraft"
						},
						description: {
							description_uz: "Agar sizning kompaniyangiz bizning bankimizda xizmat ko'rsatsa, ish haqi kartasida o'rnatilgan qo'shimcha pul limiti.",
							description_ru: "Лимит дополнительных денег, который устанавливается на зарплатную карту, если ваша фирма обслуживается в нашем банке.",
							description_en: "If your company provides services in our bank, there is an additional money limit set on the salary card."
						},
						hasVideo: false,
						videoUrl: "",
						videoPoster: ""
					}
				],

				card: [
					{
						id: 1,
						image: "",
						title: {
							title_uz: "Barcha kartalar",
							title_ru: "Все карты",
							title_en: "All cards"
						},
						description: {
							description_uz: "Bizning kartalar bilan sotib olish oson va sarflash yoqimli.",
							description_ru: "С нашими картами легко купить и приятно тратить.",
							description_en: "It is easy to buy and pleasant to spend with our cards."
						},
						hasVideo: true,
						videoUrl: "https://asakabank.uz/media/files/other/155/about_155_1about.mp4",
						videoPoster: "https://asakabank.uz/media/images/mdls/156/_1594896729.7028.jpg"
					},
					{
						id: 2,
						image: "https://asakabank.uz/media/images/mdls/156/_1594898595.5199.png",
						title: {
							title_uz: "MasterCard Standard",
							title_ru: "MasterCard Standard",
							title_en: "MasterCard Standard"
						},
						description: {
							description_uz: "Onlayn xaridlarni amalga oshiring va to'lovlarni O'zbekiston Respublikasi chegaralaridan tashqarida amalga oshiring.",
							description_ru: "Совершайте онлайн покупки и проводите платежи на территории Республики Узбекистан за ее пределами ",
							description_en: "Make online purchases and make payments in the territory of the Republic of Uzbekistan outside its borders"
						},
						hasVideo: false,
						videoUrl: "",
						videoPoster: ""
					}
				],

				deposit: [
					{
						id: 1,
						image: "https://asakabank.uz/media/images/mdls/157/_1594900448.5784.jpg",
						title: {
							title_uz: "Barcha omonatlar",
							title_ru: "Все вклады",
							title_en: "All deposits"
						},
						description: {
							description_uz: "Bugun farzandlaringizning kelajagi haqida qayg'uring.",
							description_ru: "Позаботьтесь о будущем ваших детей уже сегодня",
							description_en: "Take care of your children's future today"
						},
						hasVideo: false,
						videoUrl: "",
						videoPoster: ""
					},
					{
						id: 2,
						image: "https://asakabank.uz/media/images/mdls/157/_1594897764.8764.png",
						title: {
							title_uz: "Online",
							title_ru: "Online",
							title_en: "Online"
						},
						description: {
							description_uz: "\"Asaka Mobile\" mobil ilovasi va infokiosklar orqali bank filiallarida depozit ochish",
							description_ru: "Открытие вклада в филиалах банка, через мобильное приложение \"Asaka Mobile\" и инфокиоски.",
							description_en: "Opening a deposit in the branches of the bank, through the mobile application \"Asaka Mobile\" and info kiosks"
						},
						hasVideo: false,
						videoUrl: "",
						videoPoster: ""
					}
				],

				moneyTransfers: [
					{
						id: 1,
						image: "",
						title: {
							title_uz: "Xalqaro o'tkazmalar",
							title_ru: "Международные переводы",
							title_en: "International transfers"
						},
						description: {
							description_uz: "Doim yoningizda, doim o'z vaqtida!",
							description_ru: "Всегда рядом, всегда вовремя!",
							description_en: "Always near you, always on time!"
						},
						hasVideo: true,
						videoUrl: "https://asakabank.uz/media/files/other/155/about_155_1about.mp4",
						videoPoster: "https://asakabank.uz/media/images/mdls/163/_1594897635.6983.jpg"
					},
					{
						id: 2,
						image: "https://asakabank.uz/media/images/mdls/163/_1578913355.9607.png",
						title: {
							title_uz: "Western Union",
							title_ru: "Western Union",
							title_en: "Western Union"
						},
						description: {
							description_uz: "Dunyo bo'ylab pul o'tkazmalarining eng tezkor usuli",
							description_ru: "Самый быстрый способ перевести деньги по всему миру",
							description_en: "The fastest way to transfer money around the world"
						},
						hasVideo: false,
						videoUrl: "",
						videoPoster: ""
					}
				],

				services: [
					{
						id: 1,
						image: "https://asakabank.uz/media/images/mdls/164/_1595241361.7254.png",
						title: {
							title_uz: "Online kredit",
							title_ru: "Онлайн кредит",
							title_en: "Online credit"
						},
						description: {
							description_uz: "Yangi muvaffaqiyatli xaridlar uchun",
							description_ru: "Для новых удачных покупок",
							description_en: "For new successful purchases"
						},
						hasVideo: false,
						videoUrl: "",
						videoPoster: ""
					},
					{
						id: 2,
						image: "https://asakabank.uz/media/images/mdls/164/_1595241095.5907.png",
						title: {
							title_uz: "Mobil bank",
							title_ru: "Мобильный банк",
							title_en: "Mobile banking"
						},
						description: {
							description_uz: "Barcha pullaringiz cho'ntagingizda",
							description_ru: "Все финансы в вашем кармане",
							description_en: "All finances in your pocket"
						},
						hasVideo: false,
						videoUrl: "",
						videoPoster: ""
					}
				],

				corporateCredit: [
					{
						id: 1,
						image: "",
						title: {
							title_uz: "Barcha kreditlar",
							title_ru: "Все кредиты",
							title_en: "All loans"
						},
						description: {
							description_uz: "Sizning maqsadlaringiz bizning vositamiz! Eng katta rejalar uchun pul oling.",
							description_ru: "Ваши цели – наши средства! Получите деньги на самые большие планы.",
							description_en: "Your goals are our tool! Get paid for the biggest plans."
						},
						hasVideo: true,
						videoUrl: "https://asakabank.uz/media/files/other/155/about_155_1about.mp4",
						videoPoster: "https://asakabank.uz/media/images/mdls/166/_1594899624.0836.jpg"
					},
					{
						id: 2,
						image: "https://asakabank.uz/media/images/mdls/166/_1594899614.6252.png",
						title: {
							title_uz: "Mikrokredit",
							title_ru: "Микрокредитование",
							title_en: "Microcredit"
						},
						description: {
							description_uz: "Kichik biznes va xususiy tadbirkorlikni o'z mablag'lari hisobidan milliy valyutada mikrokreditlash.",
							description_ru: "Микрокредитование субъектов малого бизнеса и частного предпринимательства за счет собственных средств в национальной валюте.",
							description_en: "Microcrediting small businesses and private entrepreneurship at their own expense in national currency."
						},
						hasVideo: false,
						videoUrl: "",
						videoPoster: ""
					}
				],

				generalInformation: [
					{
						id: 1,
						image: "",
						title: {
							title_uz: "Bank haqida",
							title_ru: "О банке",
							title_en: "About bank"
						},
						description: {
							description_uz: "Moliya bozoridagi ishonchli sherikingiz!",
							description_ru: "Ваш надежный партнер на финансовом рынке!",
							description_en: "Your reliable partner in the financial market!"
						},
						hasVideo: true,
						videoUrl: "https://asakabank.uz/media/files/other/175/about2_175_1about[2].mp4",
						videoPoster: "https://asakabank.uz/media/images/mdls/175/_1595225548.105.jpg"
					},
					{
						id: 2,
						image: "https://asakabank.uz/media/images/mdls/175/_1595228230.2899.png",
						title: {
							title_uz: "Bank tarixi",
							title_ru: "История банка",
							title_en: "Bank history"
						},
						description: {
							description_uz: "23 yildan ortiq vaqt mobaynida biz etakchi mavqeimizni ishonchli egallab kelmoqdamiz!",
							description_ru: "Более 23 лет уверенно удерживаем свои лидирующие позиции!",
							description_en: "For more than 23 years we have been confidently holding our leading positions!"
						},
						hasVideo: false,
						videoUrl: "",
						videoPoster: ""
					},
					{
						id: 3,
						image: "https://asakabank.uz/media/images/mdls/175/_1595226653.6497.png",
						title: {
							title_uz: "Yutuqlar",
							title_ru: "Достижения",
							title_en: "Achievements"
						},
						description: {
							description_uz: "O'zbekistondagi yilning eng yaxshi banki deb qayta-qayta tan olinishi",
							description_ru: "Неоднократное признание Лучшим банком года в Узбекистане",
							description_en: "Repeated recognition as the Best Bank of the Year in Uzbekistan"
						},
						hasVideo: false,
						videoUrl: "",
						videoPoster: ""
					}
				],

				financing: [
					{
						id: 1,
						image: "",
						title: {
							title_uz: "TIF",
							title_ru: "ВЭД",
							title_en: "FEA"
						},
						description: {
							description_uz: "Tashqi iqtisodiy faoliyat",
							description_ru: "Внешнеэкономическая деятельность",
							description_en: "Foreign economic activity"
						},
						hasVideo: true,
						videoUrl: "https://asakabank.uz/media/files/other/175/about2_175_1about[2].mp4",
						videoPoster: "https://asakabank.uz/media/images/mdls/170/_1594897258.3143.jpg"
					}
				]
			},
			smallBusiness: {
				card: [
					{
						id: 1,
						image: "",
						title: {
							title_uz: "Barcha kartalar",
							title_ru: "Все карты",
							title_en: "All cards"
						},
						description: {
							description_uz: "Bizning kartalar bilan sotib olish oson va sarflash yoqimli.",
							description_ru: "С нашими картами легко купить и приятно тратить.",
							description_en: "It is easy to buy and pleasant to spend with our cards."
						},
						hasVideo: true,
						videoUrl: "https://asakabank.uz/media/files/other/155/about_155_1about.mp4",
						videoPoster: "https://asakabank.uz/media/images/mdls/156/_1594896729.7028.jpg"
					},
					{
						id: 2,
						image: "https://asakabank.uz/media/images/mdls/156/_1594898595.5199.png",
						title: {
							title_uz: "MasterCard Business",
							title_ru: "MasterCard Business",
							title_en: "MasterCard Business"
						},
						description: {
							description_uz: "Onlayn xaridlarni amalga oshiring va to'lovlarni O'zbekiston Respublikasi chegaralaridan tashqarida amalga oshiring.",
							description_ru: "Совершайте онлайн покупки и проводите платежи на территории Республики Узбекистан за ее пределами ",
							description_en: "Make online purchases and make payments in the territory of the Republic of Uzbekistan outside its borders"
						},
						hasVideo: false,
						videoUrl: "",
						videoPoster: ""
					}
				],
				financing: [
					{
						id: 1,
						image: "https://asakabank.uz/media/images/mdls/170/_1594897258.3143.jpg",
						title: {
							title_uz: "TIF",
							title_ru: "ВЭД",
							title_en: "FEA"
						},
						description: {
							description_uz: "Bankning tashqi iqtisodiy faoliyati",
							description_ru: "Внешнеэкономическая деятельность банка",
							description_en: "Foreign economic activity of the bank"
						},
						hasVideo: false
					}
				],
				credit: [
					{
						id: 1,
						image: "",
						title: {
							title_uz: "Barcha kreditlar",
							title_ru: "Все кредиты",
							title_en: "All loans"
						},
						description: {
							description_uz: "Sizning maqsadlaringiz bizning vositamiz! Eng katta rejalar uchun pul oling.",
							description_ru: "Ваши цели – наши средства! Получите деньги на самые большие планы.",
							description_en: "Your goals are our tool! Get paid for the biggest plans."
						},
						hasVideo: true,
						videoUrl: "https://asakabank.uz/media/files/other/155/about_155_1about.mp4",
						videoPoster: "https://asakabank.uz/media/images/mdls/166/_1594899624.0836.jpg"
					},
					{
						id: 2,
						image: "https://asakabank.uz/media/images/mdls/155/_1594896778.4161.png",
						title: {
							title_uz: "Modulli kreditlar",
							title_ru: "Модульные кредиты",
							title_en: "Modular loans"
						},
						description: {
							description_uz: "\"Modulli kreditlar\" biznes xo'jaliklarining joriy faoliyatini qo'llab -quvvatlaydi.",
							description_ru: "«Модульные кредиты» для поддержки текущей деятельности предприятий.",
							description_en: "\"Modular loans\" to support the current activities of business entities."
						},
						hasVideo: false,
						videoUrl: "",
						videoPoster: ""
					}
				]
			}
		};
	},
	computed: {
		...mapGetters({
			creditList: "getCreditList",
			plasticCardList: "getPlasticCardList",
			depositList: "getDepositList",
			transferList: "getTransferList",
			financingList: "getFinancingList",
		}),

		getCurrentUser() {
			return this.$store.getters.getUser;
		},

		getNationalDeposit() {
			return this.depositList.filter(item => item.type === "milliy_valyutada")
		},

		getInternationalDeposit() {
			return this.depositList.filter(item => item.type === "yevroda_omonatlar" || item.type === "aqsh_dollarida")
		}
	},
	watch: {
		$route(to) {
			this.initialPathName = to.path.split("/")[1];

			this.getCreditListCategory()
		}
	},
	mounted() {
		this.initialPathName = this.$route.path.split("/")[1];

		this.getCreditListCategory()

		const $body = document.querySelector("body");
		const $headerNavigation = document.querySelector(".app-header");
		let lastScrollTop = 0;

		// Mouse wheel
		$body.addEventListener("mousewheel", () => {
			let st = window.pageYOffset || document.documentElement.scrollTop;

			if (st > lastScrollTop) {
				$headerNavigation.classList.add("active");
			} else {
				$headerNavigation.classList.remove("active");
			}

			lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling

		}, false);

		// Mobile touch
		$body.addEventListener("touchstart", () => {
			let st = window.pageYOffset || document.documentElement.scrollTop;

			if (st > lastScrollTop) {
				$headerNavigation.classList.add("active");
			} else {
				$headerNavigation.classList.remove("active");
			}

			lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
		}, false);
	},
	methods: {
		...mapActions({
			fetchCreditsList: "fetchCreditsList",
			fetchPlasticCardList: "fetchPlasticCardList",
			fetchDepositList: "fetchDepositList",
			fetchTransferList: "fetchTransferList",
			fetchFinancingList: "fetchFinancingList"
		}),

		/*
		*
		* */
		getCreditListCategory() {
			switch (this.initialPathName) {
				case "physical-persons":
					this.fetchCreditsList({ category: 5 })
					this.fetchPlasticCardList({ category: 5 })
					this.fetchDepositList({ category: 5 })
					this.fetchTransferList({ category: 5 })
					break;
				case "corporate-customers":
					this.fetchCreditsList({ category: 6 })
					this.fetchPlasticCardList({ category: 6 })
					this.fetchDepositList({ category: 6 })
					this.fetchTransferList({ category: 6 })
					break;
				case "small-business":
					this.fetchCreditsList({ category: 7 })
					this.fetchPlasticCardList({ category: 7 })
					this.fetchDepositList({ category: 7 })
					this.fetchTransferList({ category: 7 })
					this.fetchFinancingList()
					break;
				default:
					this.fetchCreditsList({ category: null })
					this.fetchPlasticCardList({ category: null })
					this.fetchDepositList({ category: null })
					this.fetchTransferList({ category: null })
			}
		},
		/*
		*
		* */
		open() {
			setTimeout(() => {
				const { slider } = this.$refs;

				slider.$refs.hooper.restart();
			}, 200);
		},

		/*
		*
		* */
		notClose(event) {
			if (!event.target.closest(".navigation-link")) {
				event.stopPropagation();
				event.stopImmediatePropagation();
			}
		}
	}
};
</script>


<style lang="scss">
.hero-slider {
	min-height: 100vh;
	/*padding-top: 135px;*/
}

.slide-item-left,
.slide-item-right {
}

.slide-item-left > *,
.slide-item-right .circle-shape {
	transform: translateY(45px);
	opacity: 0;
	transition: 0.25s ease-out;
}

.hero-slider-hooper .hooper-slide.is-active.is-current .slide-item-left > *,
.hero-slider-hooper .hooper-slide.is-active.is-current .slide-item-right .circle-shape {
	opacity: 1;
	transform: translateY(0px);
	transition-duration: 0.4s;
}

.hero-slider-hooper .hooper-slide.is-active.is-current .slide-item-left > :nth-child(2) {
	transition-delay: 0.25s;
}

.hero-slider-hooper .hooper-slide.is-active.is-current .slide-item-left > :nth-child(3),
.hero-slider-hooper .hooper-slide.is-active.is-current .slide-item-right .circle-shape {
	transition-delay: 0.45s;
}

.hero-slider-hooper .hooper-slide.is-active.is-current .slide-item-left > :nth-child(4) {
	transition-delay: 0.6s;
}

.hero-slider-hooper .hooper-slide.is-active.is-current .slide-item-left > :nth-child(5) {
	transition-delay: 0.75s;
}

.slider-dots {
	bottom: 0;
	left: 0;
}

.app-header {
	left: 0;
	z-index: 6;
	background: #fff;
}

.header-logo {
	width: 96px;
	background: rgba(var(--main-primary), 1);
	z-index: 2;
}


.header-logo .medium-logo {
	filter: brightness(0) invert(1);
}

.header-navigation {
	width: calc(100% - 96px);
}

</style>
