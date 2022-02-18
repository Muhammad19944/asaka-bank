<template>
	<v-row>
		<!-- For mobile -->
		<template v-if="isMobile">
			<v-col cols="12" class="px-0">
				<div class="primary-bg pa-4 text-white rounded text-center mb-3">
					<h4 class="font-600 d-block text-decoration-none">
						<I18nVue t="Nav.AboutBank.title" />
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
											<I18nVue t="Nav.AboutBank.GeneralInfo.tab1" />
										</h3>
									</div>
								</v-expansion-panel-header>

								<v-expansion-panel-content>
									<div class="mb-4">
										<router-link
											:to="{ name: 'Mission' }"
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
												<I18nVue t="Nav.AboutBank.GeneralInfo.tab2" />
											</span>
										</router-link>
									</div>

									<div class="mb-4">
										<router-link
											:to="{name: 'BusinessPlan'}"
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
												<I18nVue t="Nav.AboutBank.GeneralInfo.tab3" />
											</span>
										</router-link>
									</div>

									<div class="mb-4">
										<router-link
											:to="{ name: 'ChairmanBoard' }"
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
												<I18nVue t="Nav.AboutBank.GeneralInfo.tab5" />
											</span>
										</router-link>
									</div>

									<div class="mb-4">
										<router-link
											:to="{ name: 'BankHistory' }"
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
												<I18nVue t="Nav.AboutBank.GeneralInfo.tab4" />
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
											<I18nVue t="Nav.AboutBank.GeneralInfo.tab6" />
										</h3>
									</div>
								</v-expansion-panel-header>

								<v-expansion-panel-content>
<!--									<div class="mb-4">-->
<!--										<router-link-->
<!--											:to="{ name:'BankStructure' }"-->
<!--											v-on:click.native="close"-->
<!--											class="-->
<!--				                                navigation-link-->
<!--				                                text-decoration-none text&#45;&#45;h4-->
<!--				                                transition-all-->
<!--				                                pull-left-->
<!--				                                d-inline-block-->
<!--				                            "-->
<!--										>-->
<!--											<I18nVue t="Nav.AboutBank.GeneralInfo.tab6" />-->
<!--										</router-link>-->
<!--									</div>-->

									<div class="mb-4">
										<router-link
											:to="{ name: 'BankShareholders' }"
											v-on:click.native="close"
											class="
				                                navigation-link
				                                text-decoration-none text--h4
				                                transition-all
				                                pull-left
				                                d-inline-block
				                            "
										>
											<I18nVue t="Nav.AboutBank.GeneralInfo.tab7" />
										</router-link>
									</div>

									<div class="mb-4">
										<router-link
											:to="{name: 'BankStructure'}"
											v-on:click.native="close"
											class="
				                                navigation-link
				                                text-decoration-none text--h4
				                                transition-all
				                                pull-left
				                                d-inline-block
				                            "
										>
											<I18nVue t="Nav.AboutBank.GeneralInfo.tab8" />
										</router-link>
									</div>

									<div class="mb-4">
										<router-link
											:to="{name: 'BankBoard'}"
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
												<I18nVue t="Nav.AboutBank.GeneralInfo.tab9" />
											</span>
										</router-link>
									</div>

									<div class="mb-4">
										<router-link
											:to="{name: 'StructuralUnits'}"
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
												<I18nVue t="Nav.AboutBank.GeneralInfo.tab10" />
											</span>
										</router-link>
									</div>

									<div class="mb-4">
										<router-link
											:to="{name: 'BankStructureDiagram'}"
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
												<I18nVue t="Nav.AboutBank.GeneralInfo.tab11" />
											</span>
										</router-link>
									</div>

									<div class="mb-4">
										<router-link
											:to="{name: 'BankAuditCommittee'}"
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
												<I18nVue t="Nav.AboutBank.GeneralInfo.tab12" />
											</span>
										</router-link>
									</div>

									<div class="mb-4">
										<router-link
											:to="{ name: 'Affiliates' }"
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
												<I18nVue t="Nav.AboutBank.GeneralInfo.tab13" />
											</span>
										</router-link>
									</div>

									<div class="mb-4">
										<router-link
											:to="{ name: 'BankCommittees' }"
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
												<I18nVue t="Nav.AboutBank.GeneralInfo.tab14" />
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
											<I18nVue t="Nav.AboutBank.GeneralInfo.tab16" />
										</h3>
									</div>
								</v-expansion-panel-header>

								<v-expansion-panel-content>
									<div class="mb-4">
										<router-link
											:to="{ name: 'AboutActivity' }"
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
												<I18nVue t="Nav.AboutBank.GeneralInfo.tab16" />
											</span>
										</router-link>
									</div>

									<div class="mb-4">
										<router-link
											:to="{ name: 'CharityActivity' }"
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
											<I18nVue t="Nav.AboutBank.GeneralInfo.tab17" />
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
												<I18nVue t="Nav.AboutBank.GeneralInfo.tab18" />
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
												<I18nVue t="Nav.AboutBank.GeneralInfo.tab19" />
											</span>
										</router-link>
									</div>

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
												<I18nVue t="Nav.AboutBank.GeneralInfo.tab20" />
											</span>
										</router-link>
									</div>

									<div class="mb-4">
										<router-link
											:to="{ name: 'AboutBankAntiCorruption' }"
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
												{{ $t("anti_corruption") }}
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
											<I18nVue t="Nav.AboutBank.Progress.title" />
										</h3>
									</div>
								</v-expansion-panel-header>

								<v-expansion-panel-content>
									<div class="mb-4">
										<router-link
											:to="{ name: 'Ratings' }"
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
												<I18nVue t="Nav.AboutBank.Progress.tab1" />
											</span>
										</router-link>
									</div>

									<div class="mb-4">
										<router-link
											:to="{name: 'QualitySystem'}"
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
												<I18nVue t="Nav.AboutBank.Progress.tab2" />
											</span>
										</router-link>
									</div>

									<div class="mb-4">
										<router-link
											:to="{name: 'BankAwards'}"
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
												<I18nVue t="Nav.AboutBank.Progress.tab3" />
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
											<I18nVue t="Nav.AboutBank.GeneralInfo.tab21" />
										</h3>
									</div>
								</v-expansion-panel-header>

								<v-expansion-panel-content>
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
												<I18nVue t="Nav.AboutBank.GeneralInfo.tab22" />
											</span>
										</router-link>
									</div>

									<div class="mb-4">
										<router-link
											:to="{ name: 'Career' }"
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
												<I18nVue t="Nav.AboutBank.Career" />
											</span>
										</router-link>
									</div>

									<div class="mb-4">
										<router-link
											:to="{ name: 'BankDocuments' }"
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
												<I18nVue t="Nav.AboutBank.InformationDocuments" />
											</span>
										</router-link>
									</div>

									<div class="mb-4">
										<router-link
											:to="{ name: 'BankAppeals' }"
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
												<I18nVue t="Nav.AboutBank.Appeal" />
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
						<h3 class="font-600 dark-text py-2 d-block text-decoration-none">
							<span>
								<I18nVue t="Nav.AboutBank.GeneralInfo.tab1" />
							</span>
						</h3>
					</div>

					<div class="mb-4">
						<router-link
							:to="{ name: 'Mission' }"
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
									<I18nVue t="Nav.AboutBank.GeneralInfo.tab2" />
								</span>
						</router-link>
					</div>

					<div class="mb-4">
						<router-link
							:to="{name: 'BusinessPlan'}"
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
									<I18nVue t="Nav.AboutBank.GeneralInfo.tab3" />
								</span>
						</router-link>
					</div>

					<div class="mb-4">
						<router-link
							:to="{ name: 'ChairmanBoard' }"
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
									<I18nVue t="Nav.AboutBank.GeneralInfo.tab5" />
								</span>
						</router-link>
					</div>

					<div class="mb-4">
						<router-link
							:to="{ name: 'BankHistory' }"
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
									<I18nVue t="Nav.AboutBank.GeneralInfo.tab4" />
								</span>
						</router-link>
					</div>
				</div>
			</v-col>

			<v-col class="mb-8" md="3">
				<div class="grid-menu-items">
					<div class="mb-4">
						<router-link
							:to="{ name:'BankStructure' }"
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
								<I18nVue t="Nav.AboutBank.GeneralInfo.tab6" />
						</router-link>
					</div>

					<div class="mb-4">
						<router-link
							:to="{ name: 'BankShareholders' }"
							v-on:click.native="close"
							class="
                                navigation-link
                                text-decoration-none text--h4
                                transition-all
                                pull-left
                                d-inline-block
                            "
							>
								<I18nVue t="Nav.AboutBank.GeneralInfo.tab7" />
						</router-link>
					</div>

					<div class="mb-4">
						<router-link
							:to="{name: 'BankStructure'}"
							v-on:click.native="close"
							class="
                                navigation-link
                                text-decoration-none text--h4
                                transition-all
                                pull-left
                                d-inline-block
                            "
							>
								<I18nVue t="Nav.AboutBank.GeneralInfo.tab8" />
						</router-link>
					</div>

					<div class="mb-4">
						<router-link
							:to="{name: 'BankBoard'}"
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
									<I18nVue t="Nav.AboutBank.GeneralInfo.tab9" />
								</span>
						</router-link>
					</div>

					<div class="mb-4">
						<router-link
							:to="{name: 'StructuralUnits'}"
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
									<I18nVue t="Nav.AboutBank.GeneralInfo.tab10" />
								</span>
						</router-link>
					</div>

					<div class="mb-4">
						<router-link
							:to="{name: 'BankStructureDiagram'}"
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
									<I18nVue t="Nav.AboutBank.GeneralInfo.tab11" />
								</span>
						</router-link>
					</div>

					<div class="mb-4">
						<router-link
							:to="{name: 'BankAuditCommittee'}"
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
									<I18nVue t="Nav.AboutBank.GeneralInfo.tab12" />
								</span>
						</router-link>
					</div>

					<div class="mb-4">
						<router-link
							:to="{ name: 'Affiliates' }"
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
									<I18nVue t="Nav.AboutBank.GeneralInfo.tab13" />
								</span>
						</router-link>
					</div>

					<div class="mb-4">
						<router-link
							:to="{ name: 'BankCommittees' }"
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
									<I18nVue t="Nav.AboutBank.GeneralInfo.tab14" />
								</span>
						</router-link>
					</div>
				</div>
			</v-col>

			<v-col class="mb-8" md="3">
				<div class="grid-menu-items">
					<div class="mb-4">
						<h3 class="font-600 dark-text py-2 d-block text-decoration-none">
							<span>
								<I18nVue t="Nav.AboutBank.GeneralInfo.tab15" />
							</span>
						</h3>
					</div>

					<div class="mb-4">
						<router-link
							:to="{ name: 'AboutActivity' }"
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
									<I18nVue t="Nav.AboutBank.GeneralInfo.tab16" />
								</span>
						</router-link>
					</div>

					<div class="mb-4">
						<router-link
							:to="{ name: 'CharityActivity' }"
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
									<I18nVue t="Nav.AboutBank.GeneralInfo.tab17" />
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
									<I18nVue t="Nav.AboutBank.GeneralInfo.tab18" />
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
									<I18nVue t="Nav.AboutBank.GeneralInfo.tab19" />
								</span>
						</router-link>
					</div>

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
									<I18nVue t="Nav.AboutBank.GeneralInfo.tab20" />
								</span>
						</router-link>
					</div>

					<div class="mb-4">
						<router-link
							:to="{ name: 'AboutBankAntiCorruption' }"
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
								{{ $t("anti_corruption") }}
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
									<I18nVue t="Nav.AboutBank.GeneralInfo.tab22" />
								</span>
						</router-link>
					</div>
				</div>
			</v-col>

			<v-col class="mb-8" md="3">
				<div class="grid-menu-items">
					<div class="mb-4">
						<h3 class="text-decoration-none text--h3 font-600">
							<span>
								<I18nVue t="Nav.AboutBank.Progress.title" />
							</span>
						</h3>
					</div>

					<div class="mb-4">
						<router-link
							:to="{ name: 'Ratings' }"
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
									<I18nVue t="Nav.AboutBank.Progress.tab1" />
								</span>
						</router-link>
					</div>

					<div class="mb-4">
						<router-link
							:to="{name: 'QualitySystem'}"
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
									<I18nVue t="Nav.AboutBank.Progress.tab2" />
								</span>
						</router-link>
					</div>

					<div class="mb-4">
						<router-link
							:to="{name: 'BankAwards'}"
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
									<I18nVue t="Nav.AboutBank.Progress.tab3" />
								</span>
						</router-link>
					</div>

					<!--								<div class='mb-4'>-->
					<!--									<router-link-->
					<!--										:to="{name: 'BankDocuments'}"-->
					<!--										v-on:click.native='close'-->
					<!--										class='-->
					<!--                                        navigation-link-->
					<!--                                        text-decoration-none text&#45;&#45;h4-->
					<!--                                        transition-all-->
					<!--                                        pull-left-->
					<!--                                        d-inline-block-->
					<!--                                    '-->
					<!--									>-->
					<!--										<span>-->
					<!--											<I18nVue t="Nav.AboutBank.InformationDocuments" />-->
					<!--										</span>-->
					<!--									</router-link>-->
					<!--								</div>-->
					<!--								<div class='mb-4'>-->
					<!--									<router-link-->
					<!--										:to="{name: 'BankAppeals'}"-->
					<!--										v-on:click.native='close'-->
					<!--										class='-->
					<!--                                        navigation-link-->
					<!--                                        text-decoration-none text&#45;&#45;h4-->
					<!--                                        font-600-->
					<!--                                        transition-all-->
					<!--                                        pull-left-->
					<!--                                        d-inline-block-->
					<!--                                    '-->
					<!--									>-->
					<!--										<span>-->
					<!--											<I18nVue t="Nav.AboutBank.Appeal" />-->
					<!--										</span>-->
					<!--									</router-link>-->
					<!--								</div>-->
				</div>
			</v-col>

			<v-col class="mb-8" md="3">
				<div class="grid-menu-items">
					<div class="mb-4">
						<h3 class="text-decoration-none text--h3 font-600">
							<span>
								<I18nVue t="Nav.AboutBank.GeneralInfo.tab21" />
							</span>
						</h3>
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
									<I18nVue t="Nav.AboutBank.GeneralInfo.tab22" />
								</span>
						</router-link>
					</div>

					<div class="mb-4">
						<router-link
							:to="{ name: 'Career' }"
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
									<I18nVue t="Nav.AboutBank.Career" />
								</span>
						</router-link>
					</div>

					<div class="mb-4">
						<router-link
							:to="{ name: 'BankDocuments' }"
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
									<I18nVue t="Nav.AboutBank.InformationDocuments" />
								</span>
						</router-link>
					</div>

					<div class="mb-4">
						<router-link
							:to="{ name: 'BankAppeals' }"
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
									<I18nVue t="Nav.AboutBank.Appeal" />
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
import { mapMutations } from "vuex";

export default {
	name: "AboutBankMobileMenu",
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

<style scoped>

</style>
