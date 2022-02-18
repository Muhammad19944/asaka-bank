<template>
	<div class="career-view">
		<v-container>
			<div class="detail-view-content">
				<v-row>
					<v-col lg="5" order-lg="1">
						<v-responsive :aspect-ratio="4 / 3">
							<img
								src="/images/carreer.png"
								alt="Career"
								class="p-absolute w-100 h-100 img-contain"
							/>
						</v-responsive>
					</v-col>

					<v-col lg="6" align-self="center" class="dark-text">
						<h1 class="font-600 text-extra-large-3 mb-3">
							<I18nVue t="AboutBank.Career.career" />
						</h1>

						<h2 class="font-300 dark-text">
							<I18nVue t="AboutBank.Career.turn_our_team" />
						</h2>

						<v-divider style="border-color: rgba(var(--border-color), 1)" class="mt-8 mb-10" />

						<h4>
							<I18nVue t="AboutBank.Career.text" />
						</h4>

						<div class="credit-meta d-flex flex-wrap mb-13 w-100 mt-10">
							<template>
								<div class="credit-meta-items d-flex align-center pb-3 dark-text">
									<h1 class="text-extra-large-4 mr-3 line-base font-300 primary-text">2900</h1>
									<div class="d-flex flex-column h-100">
										<h5 class="font-600">
											<I18nVue t="AboutBank.Career.emp" />
										</h5>
										<span class="text-small d-block font-600 line-base pb-1 mt-auto"
										>
                                            <I18nVue t="AboutBank.Career.around_rep" />
                                        </span
                                        >
									</div>
								</div>
							</template>

							<template>
								<div class="credit-meta-items d-flex align-center pb-3 dark-text">
									<h1 class="text-extra-large-4 mr-3 line-base font-300 primary-text">50,5%</h1>
									<div class="d-flex flex-column h-100">
										<h5 class="font-600">
											<I18nVue t="AboutBank.Career.emp" />
										</h5>
										<span class="text-small d-block font-600 line-base pb-1 mt-auto">
                                            <I18nVue t="AboutBank.Career.youth" />
                                        </span>
									</div>
								</div>
							</template>

							<template>
								<div class="credit-meta-items d-flex align-center pb-3 dark-text">
									<h1 class="text-extra-large-4 mr-3 line-base font-300 primary-text">1600</h1>
									<div class="d-flex flex-column h-100">
										<h5 class="font-600">
											<I18nVue t="AboutBank.Career.specialist" />
										</h5>
										<span class="text-small d-block font-600 line-base pb-1 mt-auto"
										>
                                            <I18nVue t="AboutBank.Career.high_edu" />
                                        </span
                                        >
									</div>
								</div>
							</template>

							<template>
								<div class="credit-meta-items d-flex align-center pb-3 dark-text">
									<h1 class="text-extra-large-4 mr-3 line-base font-300 primary-text">1311</h1>
									<div class="d-flex flex-column h-100">
										<h5 class="font-600">
											<I18nVue t="AboutBank.Career.specialist" />
										</h5>
										<span class="text-small d-block font-600 line-base pb-1 mt-auto"
										>
                                            <I18nVue t="AboutBank.Career.bank_work" />
                                        </span
                                        >
									</div>
								</div>
							</template>
						</div>
					</v-col>

					<v-spacer />
				</v-row>
			</div>

			<section class="section" style="padding-bottom: 3vw">
				<img src="/images/hiring-proccess-min.png" alt="hiring-proccess-min" class="d-block">
			</section>

			<section class="section">
				<h1 class="dark-text font-600 mb-10">
					<I18nVue t="AboutBank.Career.vacancy" />
				</h1>

				<v-row>
					<template v-for="vacancy in vacanciesList">
						<v-col sm="6">
							<router-link
								:key="vacancy.id"
								:to="{ name: 'CareerID', params: { id: vacancy.id } }"
								class="app-card border-all d-flex flex-column text-decoration-none rounded overflow-hidden pa-5"
							>
								<h3 class="font-600">{{ vacancy.name }}</h3>

								<template v-if="vacancy">
									<ul class="d-flex flex-wrap pa-0 list-style-none my-2">
										<li class="d-flex mr-4 my-2">
											<div class="d-flex" style="width: 25px; padding-top: 3px;">
												<v-icon size="20" color="rgba(var(--main-dark), 1)">mdi-office-building-outline</v-icon>
											</div>
											<span class="flex-1">{{ vacancy.employer.name }}</span>
										</li>
										<li class="d-flex mr-4 my-2">
											<div class="d-flex" style="width: 25px; padding-top: 3px;">
												<map-pin-icon size="1.1x"></map-pin-icon>
											</div>
											<span class="flex-1">{{ vacancy.area.name }}</span>
										</li>
									</ul>

									<hr style="border-color: rgba(var(--border-color), 0.25);" />

									<div class="app-ul mt-4" v-html="vacancy.description.split(' ').slice(0, 50).join(' ') + '...'"></div>
								</template>

<!--								<div class="app-card-header p-relative">-->
<!--									<v-responsive :aspect-ratio="3 / 2">-->
<!--										<div class="card-header-img p-absolute w-100 h-100 d-flex pa-7">-->
<!--											<img src="/images/logo.svg" alt="App logo" class="ma-auto transition-all" />-->
<!--										</div>-->
<!--									</v-responsive>-->

<!--									<template v-if="vacancy.area">-->
<!--										<div class="p-absolute" style="top: 10px; right: 10px">-->
<!--											<v-chip color="danger" dark>{{ vacancy.area.name }}</v-chip>-->
<!--										</div>-->
<!--									</template>-->
<!--								</div>-->

<!--								<div class="app-card-body pa-6 flex-1 d-flex flex-column">-->
<!--									<div class="card-body-meta d-flex mb-5">-->
<!--										<div class="card-date mr-6">-->
<!--											<h2 class="text-center mb-1">-->
<!--												{{ vacancy.created_at | filterOnlyDate }}-->
<!--											</h2>-->
<!--											<span>-->
<!--	                                        {{ vacancy.created_at | filterOnlyMonth }}-->
<!--	                                    </span>-->
<!--										</div>-->

<!--										<div class="card-text main-grey">-->
<!--											<h5 class="line-truncate">-->
<!--												<span>{{ vacancy.name }}</span>-->
<!--											</h5>-->
<!--										</div>-->
<!--									</div>-->
<!--									<div class="card-anchor d-flex align-center mt-auto">-->
<!--										<div class="card-anchor-circle d-flex align-center justify-center transition-all">-->
<!--											<chevron-right-icon size="1.2x" class="primary-text transition-all" />-->
<!--										</div>-->
<!--									</div>-->
<!--								</div>-->
							</router-link>
						</v-col>
					</template>
				</v-row>
			</section>
		</v-container>
	</div>
</template>

<script>
import AppPagination from "../../../Admin/BaseComponents/AppPagination";
import I18nVue from "@/I18nVue";
import { ChevronRightIcon, MapPinIcon, UserIcon, BriefcaseIcon } from "vue-feather-icons"

export default {
	name: "index",
	components: {
		AppPagination,
		I18nVue,
		ChevronRightIcon,
		MapPinIcon,
		UserIcon,
		BriefcaseIcon
	},
	data() {
		return {
			careersList: [],
			vacanciesList: []
		};
	},
	mounted() {
		this.getVacanciesList();
	},
	methods: {
		/*
		* Get vacancies list from hh.ru
		* */
		getVacanciesList() {
			this.$http.get("1/active_vacancies/").then(({ data }) => {
				this.vacanciesList = data.items;
			});
		}
	}
};
</script>

<style></style>
