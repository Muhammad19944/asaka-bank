<template>
	<v-row>
		<!-- For mobile -->
		<template v-if="isMobile">
			<v-col cols="12" class="px-0">
				<div class="primary-bg pa-4 text-white rounded text-center mb-3">
					<h4 class="font-600 d-block text-decoration-none">
						<I18nVue t="Nav.CorporateClients.title" />
					</h4>
				</div>
			</v-col>

			<v-col lg="3" md="4" sm="6" class="pa-0">
				<div class="grid-menu-items">
					<div class="app-collapse collapse-button-small">
						<v-expansion-panels accordion>
							<v-expansion-panel>
								<v-expansion-panel-header class="">
									<div class="d-flex align-center">
										<h3 class="font-600 d-block text-decoration-none">
											<I18nVue t="Nav.CorporateClients.Loans.title" />
										</h3>
									</div>
								</v-expansion-panel-header>

								<v-expansion-panel-content>
									<div class="mb-4">
										<router-link
											:to="{ name: 'CreditsCorporate' }"
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
												<I18nVue t="Nav.CorporateClients.Loans.title" />
											</span>
										</router-link>
									</div>

									<template v-for="credit in creditList">
										<div class="mb-4">
											<router-link
												v-on:click.native="close"
												v-if="credit.is_available"
												:to="{name: 'CreditsCorporateDetail', params: {id: credit.id}}"
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
								</v-expansion-panel-content>
							</v-expansion-panel>
						</v-expansion-panels>
					</div>
				</div>
			</v-col>

			<v-col lg="3" md="4" sm="6" class="pa-0">
				<div class="grid-menu-items">
					<div class="app-collapse collapse-button-small">
						<v-expansion-panels accordion>
							<v-expansion-panel>
								<v-expansion-panel-header class="">
									<div class="d-flex align-center">
										<h3 class="font-600 d-block text-decoration-none">
											<I18nVue t="Nav.CorporateClients.Cards.title" />
										</h3>
									</div>
								</v-expansion-panel-header>

								<v-expansion-panel-content>
									<div class="mb-4">
										<router-link
											:to="{ name: 'CardsCorporate' }"
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
												<I18nVue t="Nav.CorporateClients.Cards.title" />
											</span>
										</router-link>
									</div>

									<template v-for="card in plasticCardList">
										<div class="mb-4">
											<router-link
												v-if="card.is_available"
												:to="{name: 'CardsCorporateDetail', params: {id: card.id}}"
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

									<div class="mb-4">
										<router-link
											:to="{ name: 'TradeAcquiring' }"
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
												<I18nVue t="Nav.CorporateClients.Cards.tab1" />
											</span>
										</router-link>
									</div>

									<div class="mb-4">
										<router-link
											:to="{name: 'SmallBusinessApplicationForTerminal'}"
											v-on:click.native="close"
											class="
				                                navigation-link
				                                text-decoration-none text--h4
				                                transition-all
				                                pull-left
				                                d-inline-block
				                            "
										>
											<I18nVue t="Nav.CorporateClients.Cards.tab5" />
										</router-link>
									</div>
								</v-expansion-panel-content>
							</v-expansion-panel>
						</v-expansion-panels>
					</div>
				</div>
			</v-col>

			<v-col lg="3" md="4" sm="6" class="pa-0">
				<div class="grid-menu-items">
					<div class="app-collapse collapse-button-small">
						<v-expansion-panels accordion>
							<v-expansion-panel>
								<v-expansion-panel-header class="">
									<div class="d-flex align-center">
										<h3 class="font-600 d-block text-decoration-none">
											<I18nVue t="Nav.CorporateClients.Financing.title" />
										</h3>
									</div>
								</v-expansion-panel-header>

								<v-expansion-panel-content>
									<div class="mb-4">
										<router-link
											:to="{ name: 'Financing' }"
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
												<I18nVue t="Nav.CorporateClients.Financing.title" />
											</span>
										</router-link>
									</div>

									<div class="mb-4">
										<router-link
											:to="{ name: 'TradeFinance' }"
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
											<I18nVue t="Nav.CorporateClients.Financing.tab1" />
										</span>
										</router-link>
									</div>

									<div class="mb-4">
										<router-link
											:to="{ name: 'DealingOperations' }"
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
												<I18nVue t="Nav.CorporateClients.Financing.tab2" />
											</span>
										</router-link>
									</div>

									<div class="mb-4">
										<router-link
											:to="{ name: 'ProjectFinancing' }"
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
												<I18nVue t="Nav.CorporateClients.Financing.tab3" />
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
				<div class="grid-menu-items">
					<div class="app-collapse collapse-button-small">
						<v-expansion-panels accordion>
							<v-expansion-panel>
								<v-expansion-panel-header class="">
									<div class="d-flex align-center">
										<h3 class="font-600 d-block text-decoration-none">
											<I18nVue t="Nav.PrivateClients.Services.title" />
										</h3>
									</div>
								</v-expansion-panel-header>

								<v-expansion-panel-content>
									<div class="mb-4">
										<router-link
											:to='{name: "CorporateDocuments"}'
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

									<div class="mb-4">
										<router-link
											:to="{ name: 'SmallBusinessDocuments' }"
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
												<I18nVue t="Nav.SmallBusiness.Documents" />
											</span>
										</router-link>
									</div>
								</v-expansion-panel-content>
							</v-expansion-panel>
						</v-expansion-panels>
					</div>
				</div>
			</v-col>
		</template>

		<!-- For large devices -->
		<template v-else>
			<v-col class="mb-8" md="3">
				<div class="grid-menu-items">
					<div class="mb-4">
						<router-link
							:to="{ name: 'CreditsCorporate' }"
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
									<I18nVue t="Nav.CorporateClients.Loans.title" />
								</span>
						</router-link>
					</div>

					<template v-for="credit in creditList">
						<div class="mb-4">
							<router-link
								v-on:click.native="close"
								v-if="credit.is_available"
								:to="{name: 'CreditsCorporateDetail', params: {id: credit.id}}"
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

			<v-col class="mb-8" md="3">
				<div class="grid-menu-items">
					<div class="mb-4">
						<router-link
							:to="{ name: 'CardsCorporate' }"
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
									<I18nVue t="Nav.CorporateClients.Cards.title" />
								</span>
						</router-link>
					</div>

					<template v-for="card in plasticCardList">
						<div class="mb-4">
							<router-link
								v-if="card.is_available"
								:to="{name: 'CardsCorporateDetail', params: {id: card.id}}"
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

					<div class="mb-4">
						<router-link
							:to="{ name: 'TradeAcquiring' }"
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
									<I18nVue t="Nav.CorporateClients.Cards.tab1" />
								</span>
						</router-link>
					</div>

					<div class="mb-4">
						<router-link
							:to="{name: 'SmallBusinessApplicationForTerminal'}"
							v-on:click.native="close"
							class="
                                navigation-link
                                text-decoration-none text--h4
                                transition-all
                                pull-left
                                d-inline-block
                            "
							>
							<I18nVue t="Nav.CorporateClients.Cards.tab5" />
						</router-link>
					</div>
				</div>
			</v-col>

			<v-col class="mb-8" md="3">
				<div class="grid-menu-items">
					<div class="mb-4">
						<router-link
							:to="{ name: 'Financing' }"
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
									<I18nVue t="Nav.CorporateClients.Financing.title" />
								</span>
						</router-link>
					</div>

					<div class="mb-4">
						<router-link
							:to="{ name: 'TradeFinance' }"
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
									<I18nVue t="Nav.CorporateClients.Financing.tab1" />
								</span>
						</router-link>
					</div>

					<div class="mb-4">
						<router-link
							:to="{ name: 'DealingOperations' }"
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
								<I18nVue t="Nav.CorporateClients.Financing.tab2" />
							</span>
						</router-link>
					</div>

					<div class="mb-4">
						<router-link
							:to="{ name: 'ProjectFinancing' }"
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
								<I18nVue t="Nav.CorporateClients.Financing.tab3" />
							</span>
						</router-link>
					</div>
				</div>
			</v-col>

			<v-col class="mb-8" md="3">
				<div class="grid-menu-items">
					<div class="mb-4">
						<router-link
							:to='{name: "CorporateDocuments"}'
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

					<div class="mb-4">
						<router-link
							:to="{ name: 'SmallBusinessDocuments' }"
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
								<I18nVue t="Nav.SmallBusiness.Documents" />
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
	name: "CorporateCustomersMobileMenu",
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
			plasticCardList: "getPlasticCardList"
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
}
</script>

<style scoped>

</style>
