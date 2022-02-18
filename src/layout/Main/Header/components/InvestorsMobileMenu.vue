<template>
	<v-row>
		<!-- For mobile -->
		<template v-if="isMobile">
			<v-col cols="12" class="px-0">
				<div class="primary-bg pa-4 text-white rounded text-center mb-3">
					<h4 class="font-600 d-block text-decoration-none">
						<I18nVue t="Nav.ShareholdersInvestors.title" />
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
											<I18nVue t="Nav.ShareholdersInvestors.title" />
										</h3>
									</div>
								</v-expansion-panel-header>

								<v-expansion-panel-content>
									<div class="mb-4">
										<router-link
											:to="{ name: 'FinancialIndicators' }"
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
												<I18nVue t="Nav.ShareholdersInvestors.Financial" />
											</span>
										</router-link>
									</div>

									<div class="mb-4">
										<router-link
											:to="{name: 'OpenData'}"
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
												<I18nVue t="Nav.ShareholdersInvestors.OpenInformation" />
											</span>
										</router-link>
									</div>

									<div class="mb-4">
										<router-link
											:to="{name: 'PartnerInformation'}"
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
												<I18nVue t="Nav.ShareholdersInvestors.FinancialInstitutions.tab1" />
											</span>
										</router-link>
									</div>

									<div class="mb-4">
										<router-link
											:to="{name: 'TreasuryOperations'}"
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
												<I18nVue t="Nav.ShareholdersInvestors.FinancialInstitutions.tab2" />
											</span>
										</router-link>
									</div>

									<!--						<div>-->
									<!--							&lt;!&ndash;							<v-col class='mb-8' md='3'>&ndash;&gt;-->
									<!--							&lt;!&ndash;								<div class='grid-menu-items'>&ndash;&gt;-->
									<!--							&lt;!&ndash;									<div class='mb-4'>&ndash;&gt;-->
									<!--							&lt;!&ndash;										<router-link&ndash;&gt;-->
									<!--							&lt;!&ndash;											:to="{ name:'FinancialIndicators' }"&ndash;&gt;-->
									<!--							&lt;!&ndash;											v-on:click.native='close'&ndash;&gt;-->
									<!--							&lt;!&ndash;											class='&ndash;&gt;-->
									<!--							&lt;!&ndash;                                        navigation-link&ndash;&gt;-->
									<!--							&lt;!&ndash;                                        text-decoration-none text&#45;&#45;h3&ndash;&gt;-->
									<!--							&lt;!&ndash;                                        font-600&ndash;&gt;-->
									<!--							&lt;!&ndash;                                        transition-all&ndash;&gt;-->
									<!--							&lt;!&ndash;                                        pull-left&ndash;&gt;-->
									<!--							&lt;!&ndash;                                        d-inline-block&ndash;&gt;-->
									<!--							&lt;!&ndash;                                    '&ndash;&gt;-->
									<!--							&lt;!&ndash;										>&ndash;&gt;-->
									<!--							&lt;!&ndash;											<span>Moliyaviy ko'rsatkichlar</span>&ndash;&gt;-->
									<!--							&lt;!&ndash;										</router-link>&ndash;&gt;-->
									<!--							&lt;!&ndash;									</div>&ndash;&gt;-->

									<!--							&lt;!&ndash;									<div class='mb-4'>&ndash;&gt;-->
									<!--							&lt;!&ndash;										<router-link&ndash;&gt;-->
									<!--							&lt;!&ndash;											:to="{ name:'FinancialIndicators' }"&ndash;&gt;-->
									<!--							&lt;!&ndash;											v-on:click.native='close'&ndash;&gt;-->
									<!--							&lt;!&ndash;											class='&ndash;&gt;-->
									<!--							&lt;!&ndash;                                        navigation-link&ndash;&gt;-->
									<!--							&lt;!&ndash;                                        text-decoration-none text&#45;&#45;h4&ndash;&gt;-->
									<!--							&lt;!&ndash;                                        transition-all&ndash;&gt;-->
									<!--							&lt;!&ndash;                                        pull-left&ndash;&gt;-->
									<!--							&lt;!&ndash;                                        d-inline-block&ndash;&gt;-->
									<!--							&lt;!&ndash;                                    '&ndash;&gt;-->
									<!--							&lt;!&ndash;										>&ndash;&gt;-->
									<!--							&lt;!&ndash;											<span>Moliyaviy hisobot</span>&ndash;&gt;-->
									<!--							&lt;!&ndash;										</router-link>&ndash;&gt;-->
									<!--							&lt;!&ndash;									</div>&ndash;&gt;-->

									<!--							&lt;!&ndash;									<div class='mb-4'>&ndash;&gt;-->
									<!--							&lt;!&ndash;										<router-link&ndash;&gt;-->
									<!--							&lt;!&ndash;											:to="{ name:'AuditReport' }"&ndash;&gt;-->
									<!--							&lt;!&ndash;											v-on:click.native='close'&ndash;&gt;-->
									<!--							&lt;!&ndash;											class='&ndash;&gt;-->
									<!--							&lt;!&ndash;                                            navigation-link&ndash;&gt;-->
									<!--							&lt;!&ndash;                                            text-decoration-none text&#45;&#45;h4&ndash;&gt;-->
									<!--							&lt;!&ndash;                                            transition-all&ndash;&gt;-->
									<!--							&lt;!&ndash;                                            pull-left&ndash;&gt;-->
									<!--							&lt;!&ndash;                                            d-inline-block&ndash;&gt;-->
									<!--							&lt;!&ndash;                                        '&ndash;&gt;-->
									<!--							&lt;!&ndash;										>&ndash;&gt;-->
									<!--							&lt;!&ndash;											<span>Auditorlik xulosalari</span>&ndash;&gt;-->
									<!--							&lt;!&ndash;										</router-link>&ndash;&gt;-->
									<!--							&lt;!&ndash;									</div>&ndash;&gt;-->

									<!--							&lt;!&ndash;									<div class='mb-4'>&ndash;&gt;-->
									<!--							&lt;!&ndash;										<router-link&ndash;&gt;-->
									<!--							&lt;!&ndash;											:to="{ name:'BankPerformance' }"&ndash;&gt;-->
									<!--							&lt;!&ndash;											v-on:click.native='close'&ndash;&gt;-->
									<!--							&lt;!&ndash;											class='&ndash;&gt;-->
									<!--							&lt;!&ndash;                                            navigation-link&ndash;&gt;-->
									<!--							&lt;!&ndash;                                            text-decoration-none text&#45;&#45;h4&ndash;&gt;-->
									<!--							&lt;!&ndash;                                            transition-all&ndash;&gt;-->
									<!--							&lt;!&ndash;                                            pull-left&ndash;&gt;-->
									<!--							&lt;!&ndash;                                            d-inline-block&ndash;&gt;-->
									<!--							&lt;!&ndash;                                        '&ndash;&gt;-->
									<!--							&lt;!&ndash;										>&ndash;&gt;-->
									<!--							&lt;!&ndash;											<span>Faoliyatning asosiy ko'rsatkichlari</span>&ndash;&gt;-->
									<!--							&lt;!&ndash;										</router-link>&ndash;&gt;-->
									<!--							&lt;!&ndash;									</div>&ndash;&gt;-->

									<!--							&lt;!&ndash;									<div class='mb-4'>&ndash;&gt;-->
									<!--							&lt;!&ndash;										<router-link&ndash;&gt;-->
									<!--							&lt;!&ndash;											:to="{ name:'StatisticGraphs' }"&ndash;&gt;-->
									<!--							&lt;!&ndash;											v-on:click.native='close'&ndash;&gt;-->
									<!--							&lt;!&ndash;											class='&ndash;&gt;-->
									<!--							&lt;!&ndash;                                            navigation-link&ndash;&gt;-->
									<!--							&lt;!&ndash;                                            text-decoration-none text&#45;&#45;h4&ndash;&gt;-->
									<!--							&lt;!&ndash;                                            transition-all&ndash;&gt;-->
									<!--							&lt;!&ndash;                                            pull-left&ndash;&gt;-->
									<!--							&lt;!&ndash;                                            d-inline-block&ndash;&gt;-->
									<!--							&lt;!&ndash;                                        '&ndash;&gt;-->
									<!--							&lt;!&ndash;										>&ndash;&gt;-->
									<!--							&lt;!&ndash;											<span>Statistik grafikalar</span>&ndash;&gt;-->
									<!--							&lt;!&ndash;										</router-link>&ndash;&gt;-->
									<!--							&lt;!&ndash;									</div>&ndash;&gt;-->

									<!--							&lt;!&ndash;									<div class='mb-4'>&ndash;&gt;-->
									<!--							&lt;!&ndash;										<router-link&ndash;&gt;-->
									<!--							&lt;!&ndash;											:to="{ name:'DevelopmentDynamics' }"&ndash;&gt;-->
									<!--							&lt;!&ndash;											v-on:click.native='close'&ndash;&gt;-->
									<!--							&lt;!&ndash;											class='&ndash;&gt;-->
									<!--							&lt;!&ndash;                                            navigation-link&ndash;&gt;-->
									<!--							&lt;!&ndash;                                            text-decoration-none text&#45;&#45;h4&ndash;&gt;-->
									<!--							&lt;!&ndash;                                            transition-all&ndash;&gt;-->
									<!--							&lt;!&ndash;                                            pull-left&ndash;&gt;-->
									<!--							&lt;!&ndash;                                            d-inline-block&ndash;&gt;-->
									<!--							&lt;!&ndash;                                        '&ndash;&gt;-->
									<!--							&lt;!&ndash;										>&ndash;&gt;-->
									<!--							&lt;!&ndash;											<span>Rivojlanish dinamikasi</span>&ndash;&gt;-->
									<!--							&lt;!&ndash;										</router-link>&ndash;&gt;-->
									<!--							&lt;!&ndash;									</div>&ndash;&gt;-->
									<!--							&lt;!&ndash;								</div>&ndash;&gt;-->
									<!--							&lt;!&ndash;							</v-col>&ndash;&gt;-->

									<!--							&lt;!&ndash;							<v-col class='mb-8' md='3'>&ndash;&gt;-->
									<!--							&lt;!&ndash;								<div class='grid-menu-items'>&ndash;&gt;-->
									<!--							&lt;!&ndash;									<div class='mb-4'>&ndash;&gt;-->
									<!--							&lt;!&ndash;										<router-link&ndash;&gt;-->
									<!--							&lt;!&ndash;											:to="{ name: 'OpenData' }"&ndash;&gt;-->
									<!--							&lt;!&ndash;											v-on:click.native='close'&ndash;&gt;-->
									<!--							&lt;!&ndash;											class='&ndash;&gt;-->
									<!--							&lt;!&ndash;                                        navigation-link&ndash;&gt;-->
									<!--							&lt;!&ndash;                                        text-decoration-none text&#45;&#45;h3&ndash;&gt;-->
									<!--							&lt;!&ndash;                                        font-600&ndash;&gt;-->
									<!--							&lt;!&ndash;                                        transition-all&ndash;&gt;-->
									<!--							&lt;!&ndash;                                        pull-left&ndash;&gt;-->
									<!--							&lt;!&ndash;                                        d-inline-block&ndash;&gt;-->
									<!--							&lt;!&ndash;                                    '&ndash;&gt;-->
									<!--							&lt;!&ndash;										>&ndash;&gt;-->
									<!--							&lt;!&ndash;											<span>Ochiq ma'lumotlar</span>&ndash;&gt;-->
									<!--							&lt;!&ndash;										</router-link>&ndash;&gt;-->
									<!--							&lt;!&ndash;									</div>&ndash;&gt;-->

									<!--							&lt;!&ndash;									<div class='mb-4'>&ndash;&gt;-->
									<!--							&lt;!&ndash;										<router-link&ndash;&gt;-->
									<!--							&lt;!&ndash;											:to="{ name: 'InternalDocuments' }"&ndash;&gt;-->
									<!--							&lt;!&ndash;											v-on:click.native='close'&ndash;&gt;-->
									<!--							&lt;!&ndash;											class='&ndash;&gt;-->
									<!--							&lt;!&ndash;                                        navigation-link&ndash;&gt;-->
									<!--							&lt;!&ndash;                                        text-decoration-none text&#45;&#45;h4&ndash;&gt;-->
									<!--							&lt;!&ndash;                                        transition-all&ndash;&gt;-->
									<!--							&lt;!&ndash;                                        pull-left&ndash;&gt;-->
									<!--							&lt;!&ndash;                                        d-inline-block&ndash;&gt;-->
									<!--							&lt;!&ndash;                                    '&ndash;&gt;-->
									<!--							&lt;!&ndash;										>&ndash;&gt;-->
									<!--							&lt;!&ndash;											<span>Muhim faktlar</span>&ndash;&gt;-->
									<!--							&lt;!&ndash;										</router-link>&ndash;&gt;-->
									<!--							&lt;!&ndash;									</div>&ndash;&gt;-->


									<!--							&lt;!&ndash;									<div class='mb-4'>&ndash;&gt;-->
									<!--							&lt;!&ndash;										<router-link&ndash;&gt;-->
									<!--							&lt;!&ndash;											:to="{ name: 'Affiliates' }"&ndash;&gt;-->
									<!--							&lt;!&ndash;											v-on:click.native='close'&ndash;&gt;-->
									<!--							&lt;!&ndash;											class='&ndash;&gt;-->
									<!--							&lt;!&ndash;                                        navigation-link&ndash;&gt;-->
									<!--							&lt;!&ndash;                                        text-decoration-none text&#45;&#45;h4&ndash;&gt;-->
									<!--							&lt;!&ndash;                                        transition-all&ndash;&gt;-->
									<!--							&lt;!&ndash;                                        pull-left&ndash;&gt;-->
									<!--							&lt;!&ndash;                                        d-inline-block&ndash;&gt;-->
									<!--							&lt;!&ndash;                                    '&ndash;&gt;-->
									<!--							&lt;!&ndash;										>&ndash;&gt;-->
									<!--							&lt;!&ndash;											<span>Affilangan shaxslar</span>&ndash;&gt;-->
									<!--							&lt;!&ndash;										</router-link>&ndash;&gt;-->
									<!--							&lt;!&ndash;									</div>&ndash;&gt;-->
									<!--							&lt;!&ndash;								</div>&ndash;&gt;-->
									<!--							&lt;!&ndash;							</v-col>&ndash;&gt;-->
									<!--						</div> &lt;!&ndash; UNUSED COLUMNS &ndash;&gt;-->
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
							to="/"
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
									<I18nVue t="Nav.ShareholdersInvestors.title" />
								</span>
						</router-link>
					</div>

					<div class="mb-4">
						<router-link
							:to="{ name: 'FinancialIndicators' }"
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
									<I18nVue t="Nav.ShareholdersInvestors.Financial" />
								</span>
						</router-link>
					</div>

					<div class="mb-4">
						<router-link
							:to="{name: 'OpenData'}"
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
									<I18nVue t="Nav.ShareholdersInvestors.OpenInformation" />
								</span>
						</router-link>
					</div>

					<div class="mb-4">
						<router-link
							:to="{name: 'PartnerInformation'}"
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
									<I18nVue t="Nav.ShareholdersInvestors.FinancialInstitutions.tab1" />
								</span>
						</router-link>
					</div>

					<div class="mb-4">
						<router-link
							:to="{name: 'TreasuryOperations'}"
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
									<I18nVue t="Nav.ShareholdersInvestors.FinancialInstitutions.tab2" />
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

export default {
	name: "InvestorsMobileMenu",
	components: {
		I18nVue
	},
	data() {
		return {
			isMobile: false
		}
	},
	mounted() {
		if(document.body.clientWidth < 600) {
			this.isMobile = true
		}
	},
};
</script>

<style scoped>

</style>
