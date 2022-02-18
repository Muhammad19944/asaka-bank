<template>
	<div class="trade-finance-view">
		<v-container>
			<div class="app-content-view">
				<p>
					<I18nVue t="InternationalCooperation.TradeFInance.text1" />
				</p>

				<p>
					<I18nVue t="InternationalCooperation.TradeFInance.text2" />
				</p>
			</div>

			<!-- PARTNERS SECTION -->
			<section class="partners-section section">
				<v-container>
					<div class="view-title d-flex align-center justify-space-between mb-5">
						<h1 class="font-600 dark-text align-self-center mb-3">
							<I18nVue t="InternationalCooperation.Home.bank_partners" />
						</h1>

						<div class="slide-arrows d-flex">
							<button
								@click.prevent="slidePrev"
								class="slide-arrow d-flex align-center justify-center outline-transparent mr-5"
							>
								<chevron-left-icon size="1.5x" class="custom-class"></chevron-left-icon>
							</button>

							<button
								@click.prevent="slideNext"
								class="slide-arrow d-flex align-center justify-center outline-transparent"
							>
								<chevron-right-icon size="1.5x" class="custom-class"></chevron-right-icon>
							</button>
						</div>
					</div>

					<hooper :settings="hooperSettings" ref="carousel" class="outline-transparent">
						<slide class="my-8 mx-4 mx-sm-4" style="height: auto">
							<router-link
								to="/"
								class="text-decoration-none d-block h-100"
							>
								<div class="app-card credit-widget rounded-lg overflow-hidden h-100 d-flex flex-column">
									<div class="slide-header credit-widget d-flex align-center justify-center">
										<img src="/images/partner-1.jpg" alt="Partner Image" class="transition-all" />
									</div>
									<div class="slide-content pa-8">
										<h2 class="font-600 dark-text mb-4">
											<I18nVue t='CorporateCustomers.TradeFinance.BankPartners.name1' />
										</h2>
										<h5 class="dark-text my-1">
											<I18nVue t='CorporateCustomers.TradeFinance.BankPartners.cityLabel'/>
												&nbsp;
											<I18nVue t='CorporateCustomers.TradeFinance.BankPartners.state1'/></h5>
										<!--										<h5 class="dark-text">Valyuta: EUR / GBP / USD</h5>-->
									</div>
									<div class="card-anchor d-flex align-center mt-auto pa-8">
										<div class="navigation-link d-flex align-center">
											<span class="font-600 text--h4 mr-4">
												<I18nVue t='CorporateCustomers.TradeFinance.BankPartners.visit_site'/>
											</span>

											<div
												class="
                                                    card-anchor-circle
                                                    size-lg
                                                    rounded-circle
                                                    d-flex
                                                    align-center
                                                    justify-center
                                                    transition-all
                                                "
											>
												<globe-icon size="1.5x" class="primary-text"></globe-icon>
											</div>
										</div>
									</div>
								</div>
							</router-link>
						</slide>

						<slide class="my-8 mx-4 mx-sm-4" style="height: auto">
							<router-link to="/" class="text-decoration-none d-block h-100">
								<div class="app-card credit-widget rounded-lg overflow-hidden h-100 d-flex flex-column">
									<div class="slide-header credit-widget d-flex align-center justify-center">
										<img src="/images/partner-2.jpg" alt="Partner Image" class="transition-all" />
									</div>
									<div class="slide-content pa-8">
										<h2 class="font-600 dark-text mb-4">
											<I18nVue t='CorporateCustomers.TradeFinance.BankPartners.name2' />
										</h2>
										<h5 class="dark-text my-1">
											<I18nVue t='CorporateCustomers.TradeFinance.BankPartners.cityLabel'/>
											&nbsp;
											<I18nVue t='CorporateCustomers.TradeFinance.BankPartners.state2'/></h5>
										</h5>
										<!--										<h5 class="dark-text">Valyuta: EUR / GBP / USD</h5>-->
									</div>
									<div class="card-anchor d-flex align-center mt-auto pa-8">
										<div class="navigation-link d-flex align-center">
											<span class="font-600 text--h4 mr-4">
												<I18nVue t='CorporateCustomers.TradeFinance.BankPartners.visit_site'/>
											</span>

											<div
												class="
                                                    card-anchor-circle
                                                    size-lg
                                                    rounded-circle
                                                    d-flex
                                                    align-center
                                                    justify-center
                                                    transition-all
                                                "
											>
												<globe-icon size="1.5x" class="primary-text"></globe-icon>
											</div>
										</div>
									</div>
								</div>
							</router-link>
						</slide>

						<slide class="my-8 mx-4 mx-sm-4" style="height: auto">
							<router-link to="/" class="text-decoration-none d-block h-100">
								<div class="app-card credit-widget rounded-lg overflow-hidden h-100 d-flex flex-column">
									<div class="slide-header credit-widget d-flex align-center justify-center">
										<img src="/images/partner-3.jpg" alt="Partner Image" class="transition-all" />
									</div>
									<div class="slide-content pa-8">
										<h2 class="font-600 dark-text mb-4">
											<I18nVue t='CorporateCustomers.TradeFinance.BankPartners.name3' />
										</h2>
										<h5 class="dark-text my-1">
											<I18nVue t='CorporateCustomers.TradeFinance.BankPartners.cityLabel'/>
											&nbsp;
											<I18nVue t='CorporateCustomers.TradeFinance.BankPartners.state3'/></h5>
										</h5>
										<!--										<h5 class="dark-text">Valyuta: EUR / GBP / USD</h5>-->
									</div>
									<div class="card-anchor d-flex align-center mt-auto pa-8">
										<div class="navigation-link d-flex align-center">
											<span class="font-600 text--h4 mr-4">
												<I18nVue t='CorporateCustomers.TradeFinance.BankPartners.visit_site'/>
											</span>

											<div
												class="
                                                    card-anchor-circle
                                                    size-lg
                                                    rounded-circle
                                                    d-flex
                                                    align-center
                                                    justify-center
                                                    transition-all
                                                "
											>
												<globe-icon size="1.5x" class="primary-text"></globe-icon>
											</div>
										</div>
									</div>
								</div>
							</router-link>
						</slide>

						<slide class="my-8 mx-4 mx-sm-4" style="height: auto">
							<router-link to="/" class="text-decoration-none d-block h-100">
								<div class="app-card credit-widget rounded-lg overflow-hidden h-100 d-flex flex-column">
									<div class="slide-header credit-widget d-flex align-center justify-center">
										<img src="/images/partner-4.jpg" alt="Partner Image" class="transition-all" />
									</div>
									<div class="slide-content pa-8">
										<h2 class="font-600 dark-text mb-4">
											<I18nVue t='CorporateCustomers.TradeFinance.BankPartners.name4' />
										</h2>
										<h5 class="dark-text my-1">
											<I18nVue t='CorporateCustomers.TradeFinance.BankPartners.cityLabel'/>
											&nbsp;
											<I18nVue t='CorporateCustomers.TradeFinance.BankPartners.state4'/></h5>
										</h5>
										<!--										<h5 class="dark-text">Valyuta: EUR / GBP / USD</h5>-->
									</div>
									<div class="card-anchor d-flex align-center mt-auto pa-8">
										<div class="navigation-link d-flex align-center">
											<span class="font-600 text--h4 mr-4">
												<I18nVue t='CorporateCustomers.TradeFinance.BankPartners.visit_site'/>
											</span>

											<div
												class="
                                                    card-anchor-circle
                                                    size-lg
                                                    rounded-circle
                                                    d-flex
                                                    align-center
                                                    justify-center
                                                    transition-all
                                                "
											>
												<globe-icon size="1.5x" class="primary-text"></globe-icon>
											</div>
										</div>
									</div>
								</div>
							</router-link>
						</slide>
					</hooper>
				</v-container>
			</section>
			<!-- END PARTNERS SECTION -->
		</v-container>
	</div>
</template>

<script>
import { ChevronRightIcon, ChevronLeftIcon, GlobeIcon } from "vue-feather-icons";
import { Hooper, Slide } from "hooper";
import "hooper/dist/hooper.css";
import I18nVue from "@/I18nVue";

export default {
	name: "TradeFinance",
	components: {
		ChevronRightIcon,
		ChevronLeftIcon,
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
			}
		};
	},
	methods: {
		slidePrev() {
			this.$refs.carousel.slidePrev();
		},
		slideNext() {
			this.$refs.carousel.slideNext();
		}
	}
};
</script>

<style></style>
