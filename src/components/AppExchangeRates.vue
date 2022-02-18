<template>
	<section class="exchange-view section">
		<v-container>
			<v-row>
				<v-col lg="4">
					<div class="credit-widget px-7 py-10 rounded-lg">
						<h1 class="font-600 text-center dark-text mb-7">
							<I18nVue t="ExchangeRates.title" />
						</h1>
						<div class="app-tab">
							<div class="app-tab-header mb-8">
								<div class="tab-header-items text-center active" data-item="header">
									<a
										class="
                                            navigation-link navigation-link__hover
                                            p-relative
                                            text--h4
                                            py-1
                                            mb-1
                                            main-grey
                                            d-inline-block
                                        "
									>
										<I18nVue t="ExchangeRates.tab1" />
									</a>
								</div>
								<div class="tab-header-items text-center" data-item="header">
									<a
										class="
                                            navigation-link navigation-link__hover
                                            p-relative
                                            text--h4
                                            py-1
                                            mb-1
                                            main-grey
                                            d-inline-block
                                        "
									>
										<I18nVue t="ExchangeRates.tab2" />
									</a>
								</div>
								<div class="tab-header-items text-center" data-item="header">
									<a
										class="
                                            navigation-link navigation-link__hover
                                            p-relative
                                            text--h4
                                            py-1
                                            mb-1
                                            main-grey
                                            d-inline-block
                                        "
									>
										<I18nVue t="ExchangeRates.tab3" />
									</a>
								</div>
							</div>

							<div class="app-tab-content p-relative">
								<div class="tab-content-items active" data-item="content">
									<v-simple-table class="app-table app-table__auto">
										<template v-slot:default>
											<thead>
											<tr>
												<th>
													<h4 class="font-600 dark-text">
														<I18nVue t="ExchangeRates.th1" />
													</h4>
												</th>
												<th class="text-right">
													<h4 class="font-600 dark-text">
														<I18nVue t="ExchangeRates.th2" />
													</h4>
												</th>
												<th class="text-right">
													<h4 class="font-600 dark-text">
														<I18nVue t="ExchangeRates.th3" />
													</h4>
												</th>
											</tr>
											</thead>
											<tbody v-for="item of ind">
											<tr>
												<td>
													<h4 class="font-700">{{ item.name }}</h4>
												</td>
												<td class="text-right">
													<h4>{{ item.buy | filterMoneyGB }}</h4>
												</td>
												<td class="text-right">
													<h4>{{ item.sell | filterMoneyGB }}</h4>
												</td>
											</tr>
											</tbody>
										</template>
									</v-simple-table>
									<v-divider class="mt-10 mb-8" style="border-color: rgba(var(--border-color))" />

									<span class="text-small font-600 d-block">
                                        <I18nVue t="ExchangeRates.information" />
                                        {{ ind[0] && ind[0].created_date | filterDate }}
                                    </span>
								</div>
								<div class="tab-content-items" data-item="content">
									<v-simple-table class="app-table app-table__auto">
										<template v-slot:default>
											<thead>
											<tr>
												<th>
													<h4 class="font-600 dark-text">
														<I18nVue t="ExchangeRates.th1" />
													</h4>
												</th>
												<th class="text-right">
													<h4 class="font-600 dark-text">
														<I18nVue t="ExchangeRates.th2" />
													</h4>
												</th>
												<th class="text-right">
													<h4 class="font-600 dark-text">
														<I18nVue t="ExchangeRates.th3" />
													</h4>
												</th>
											</tr>
											</thead>
											<tbody v-for="item of corp">
											<tr>
												<td>
													<h4 class="font-700">{{ item.name }}</h4>
												</td>
												<td class="text-right">
													<h4>{{ item.buy | filterMoneyGB }}</h4>
												</td>
												<td class="text-right">
													<h4>{{ item.sell | filterMoneyGB }}</h4>
												</td>
											</tr>
											</tbody>
										</template>
									</v-simple-table>
									<v-divider class="mt-10 mb-8" style="border-color: rgba(var(--border-color))" />

									<span class="text-small font-600 d-block">
                                        <I18nVue t="ExchangeRates.information" />
                                        {{ cb[0] && cb[0].date | filterDate }}
                                    </span>
								</div>
								<div class="tab-content-items" data-item="content">
									<v-simple-table class="app-table app-table__auto">
										<template v-slot:default>
											<thead>
											<tr>
												<th>
													<h4 class="font-600 dark-text">
														<I18nVue t="ExchangeRates.th1" />
													</h4>
												</th>
											</tr>
											</thead>
											<tbody v-for="item of cb">
											<tr>
												<td>
													<h4 class="font-700">{{ item.name }}</h4>
												</td>
												<td class="text-right">
													<h4>{{ item.rate }}</h4>
												</td>
											</tr>
											</tbody>
										</template>
									</v-simple-table>

									<v-divider class="mt-10 mb-8" style="border-color: rgba(var(--border-color))" />

									<span class="text-small font-600 d-block">
                                        <I18nVue t="ExchangeRates.information" />
                                        {{ cb[0] && cb[0].date | filterDate }}
                                    </span>
								</div>
							</div>
						</div>

						<v-btn
							depressed
							color="rgba(var(--main-primary), 1)"
							dark
							rounded
							min-width="280"
							min-height="50"
							class="font-700 mt-6"
						>
							<I18nVue t="ExchangeRates.btn_rate" />
						</v-btn>
					</div>
				</v-col>

				<v-col lg="8">
					<div class="credit-widget pa-7 rounded-lg mb-8">
						<v-row>
							<v-col md="6">
								<div class="d-flex align-center mb-6">
									<svg style="width: 2rem; height: 2rem" id="icon-translation" viewBox="0 0 488 488">
										<path
											d="M213.769 111.58c-5.499 0-9.999 4.501-9.999 10.003v51.216h-10.498v-.7-.2c-3.5-34.911-36.995-63.02-71.79-60.219-5.499.4-9.599 5.302-9.199 10.803.4 5.502 5.299 9.603 10.798 9.203 23.597-1.901 47.193 17.606 50.093 41.213H71.09c-2.8 0-5.499 1.2-7.399 3.301a9.902 9.902 0 0 0-2.5 7.702c1.7 17.005 10.698 33.211 24.596 44.614 12.098 9.803 26.796 15.205 41.294 15.205 2 0 4.099-.1 6.099-.3 27.996-3.001 51.193-24.308 58.092-50.416h12.498v40.513c0 5.502 4.499 10.003 9.999 10.003 5.499 0 9.999-4.501 9.999-10.003V121.884c0-5.802-4.499-10.304-9.999-10.304zm-82.688 111.836c-10.998 1.2-22.897-2.601-32.695-10.503-6.699-5.402-11.798-12.404-14.698-20.006h86.688c-6.2 16.004-21.397 28.608-39.295 30.509zM405.742 329.049l-50.293-99.432a9.99 9.99 0 0 0-8.899-5.502 9.88 9.88 0 0 0-8.899 5.502L286.559 331.35c-2.5 4.902-.5 10.903 4.399 13.404 1.4.7 3 1.1 4.499 1.1 3.699 0 7.199-2.001 8.899-5.502l17.597-35.011h49.393l16.598 32.81c2.5 4.902 8.499 6.902 13.398 4.401 4.9-2.599 6.899-8.601 4.4-13.503zm-73.79-43.814l14.598-29.009 14.698 29.009h-29.296z"
										/>
										<path
											d="M486.33 272.631c-4.799-31.31-20.097-60.319-43.094-81.826-43.494-40.613-106.985-49.516-159.377-23.808-7.899-71.023-68.09-126.54-141.08-126.54-38.094 0-73.889 14.705-100.885 41.513C14.898 108.779 0 144.591 0 182.803c0 38.112 14.898 73.924 41.894 100.832 26.896 26.809 62.791 41.513 100.885 41.513 22.097 0 43.094-5.102 61.791-14.205 6.399 58.118 48.093 107.334 105.685 122.539h.1c11.498 2.801 22.997 4.201 34.395 4.201 51.293 0 99.986-27.709 125.482-74.124 15.298-27.507 20.897-59.818 16.098-90.928zm-343.55 32.511c-67.59 0-122.682-54.817-122.682-122.339 0-67.421 55.092-122.339 122.682-122.339 67.29 0 121.982 54.917 121.982 122.339S210.07 305.142 142.78 305.142zm310.055 48.815c-26.796 48.816-83.288 73.523-137.48 60.119-52.492-13.904-89.587-60.619-91.487-114.436 35.195-24.608 58.692-64.721 60.791-110.335 46.493-27.209 105.385-20.907 144.979 16.205 40.794 38.012 50.293 99.032 23.197 148.447zM193.172 425.88v-.1c-.1-.4-.2-.8-.3-1.1v-.1c-.1-.3-.2-.7-.4-1 0-.1-.1-.2-.2-.3-.1-.2-.3-.5-.4-.7-.1-.1-.1-.2-.2-.3l-.6-.9c-.2-.3-.5-.6-.8-.9l-.2-.2c-.2-.2-.5-.4-.7-.6-.1-.1-.2-.1-.3-.2-.2-.2-.5-.3-.7-.5-.1-.1-.2-.1-.3-.2-.3-.2-.7-.4-1-.5l-51.093-20.607c-5.099-2.101-10.898.4-12.998 5.502s.4 10.903 5.499 13.004l34.195 13.804c-18.797 10.103-41.494 10.903-61.191 1.5h-.1c-24.896-11.504-40.594-36.912-39.994-64.921.1-5.502-4.199-10.103-9.799-10.203-5.499-.1-10.099 4.201-10.199 9.803-.9 35.911 19.397 68.622 51.493 83.527 11.998 5.702 24.796 8.503 37.595 8.503 10.898 0 21.797-2.101 32.095-6.102l-9.099 22.207c-2.1 5.102.4 11.004 5.499 13.004 1.2.5 2.5.7 3.799.7 3.899 0 7.699-2.301 9.299-6.202l20.597-50.516c0-.1.1-.2.1-.3-.1-.1-.1-.2 0-.3.1-.3.2-.6.2-.8 0-.1 0-.2.1-.3.1-.4.1-.8.2-1.2v-1.1-.3c0-.3-.1-.6-.1-.9l.002-.203zM295.458 62.265v.1c.1.4.2.8.3 1.1v.1c.1.3.2.7.4 1 0 .1.1.2.2.3.1.2.3.5.4.7.1.1.1.2.2.3l.6.9c.2.3.5.6.8.9l.2.2c.2.2.5.4.7.6.1.1.2.1.3.2.2.2.5.3.7.5.1.1.2.1.3.2.3.2.7.4 1 .5l51.093 20.607c5.099 2.101 10.898-.4 12.998-5.502 2.1-5.102-.4-10.903-5.499-13.004l-34.195-13.804c18.797-10.103 41.494-10.903 61.191-1.5h.1c24.896 11.504 40.594 36.912 39.994 64.921-.1 5.502 4.199 10.103 9.799 10.203h.2c5.399 0 9.899-4.301 9.999-9.803.8-36.011-19.397-68.822-51.593-83.627-22.297-10.603-47.393-11.104-69.59-2.401l9.099-22.207c2.1-5.102-.4-11.003-5.499-13.004-5.099-2.101-10.998.4-12.998 5.502L296.06 56.762c0 .1-.1.2-.1.3s-.1.3-.1.4c-.1.3-.2.6-.2.8 0 .1 0 .2-.1.3-.1.4-.1.8-.2 1.2V61.162c0 .3.1.6.1.9l-.002.203z"
										/>
									</svg>

									<h1 class="font-600 dark-text ml-3">
										<I18nVue t="ExchangeRates.convertor" />
									</h1>

								</div>
							</v-col>

							<v-col md="6">
								<div class="app-form-group app-form-group__small">
									<template v-if='$i18n.locale === "uz"'>
										<v-select
											v-model="convert_types_selected"
											outlined
											hide-details
											:items="converter_types"
											item-text="text_uz"
											item-value="value"
											return-object
										>
											<template v-slot:append>
												<chevron-down-icon size="1.5x" class="grey--text" />
											</template>
										</v-select>
									</template>

									<template v-if='$i18n.locale === "ru"'>
										<v-select
											v-model="convert_types_selected"
											outlined
											hide-details
											:items="converter_types"
											item-text="text_ru"
											item-value="value"
											return-object
										>
											<template v-slot:append>
												<chevron-down-icon size="1.5x" class="grey--text" />
											</template>
										</v-select>
									</template>

									<template v-if='$i18n.locale === "en"'>
										<v-select
											v-model="convert_types_selected"
											outlined
											hide-details
											:items="converter_types"
											item-text="text_en"
											item-value="value"
											return-object
										>
											<template v-slot:append>
												<chevron-down-icon size="1.5x" class="grey--text" />
											</template>
										</v-select>
									</template>
								</div>
							</v-col>
						</v-row>

						<template v-if="convert_types_selected.value === 'ind_persons'">
							<v-row>
								<v-col md="4">
									<div class="app-form-group app-form-group__small">
										<v-text-field
											v-model="amount_one"
											outlined
											hide-details
											reverse
										/>
										<!--                                            @keypress='validateNumber'-->

										<!-- oninput = "value=value.replace(/[^\d]/g,'')"-->


									</div>
								</v-col>

								<v-col md="2">
									<div class="app-form-group app-form-group__small">
										<v-select
											:items="indName"
											v-model="currencySelected"
											item-text="name"
											item-value="buy"
											outlined
											hide-details
										>
											<template v-slot:append>
												<chevron-down-icon size="1.5x" class="grey--text" />
											</template>
										</v-select>
									</div>
								</v-col>

								<v-col md="4">
									<div class="app-form-group app-form-group__small">
										<v-text-field
											v-model="amount_two"
											readonly
											outlined
											hide-details
											reverse
										/>
									</div>
								</v-col>

								<v-col md="2">
									<div class="app-form-group app-form-group__small">
										<v-select
											placeholder="UZS"
											readonly
											outlined
											hide-details>
											<template v-slot:append>
												<chevron-down-icon size="1.5x" class="grey--text" />
											</template>
										</v-select>
									</div>
								</v-col>
							</v-row>
						</template>

						<template v-else>
							<v-row>
								<v-col md="4">
									<div class="app-form-group app-form-group__small">
										<v-text-field
											v-model="amount_one"
											outlined
											hide-details reverse />
									</div>
								</v-col>

								<v-col md="2">
									<div class="app-form-group app-form-group__small">
										<v-select
											:items="corpName"
											v-model="currencySelected"
											item-text="name"
											item-value="buy"
											outlined
											hide-details
										>
											<template v-slot:append>
												<chevron-down-icon size="1.5x" class="grey--text" />
											</template>
										</v-select>
									</div>
								</v-col>
								<v-col md="4">
									<div class="app-form-group app-form-group__small">
										<v-text-field
											v-model="amount_two"
											readonly
											outlined
											hide-details
											reverse
										/>
									</div>
								</v-col>

								<v-col md="2">
									<div class="app-form-group app-form-group__small">
										<v-select
											placeholder="UZS"
											readonly
											outlined
											hide-details>
											<template v-slot:append>
												<chevron-down-icon size="1.5x" class="grey--text" />
											</template>
										</v-select>
									</div>
								</v-col>
							</v-row>
						</template>
					</div>

					<google-map-widget />
				</v-col>
			</v-row>
		</v-container>
	</section>
</template>

<script>
	import GoogleMapWidget from "./GoogleMapWidget";
	import { appTab } from "@/utils/frontend";
	import { MapPinIcon, ChevronDownIcon } from "vue-feather-icons";
	import I18nVue from "@/I18nVue";

	export default {
		name: "ExchangeRates",
		components: {
			GoogleMapWidget,
			I18nVue,
			MapPinIcon,
			ChevronDownIcon
		},
		data() {
			return {
				cb: [],
				corp: [],
				ind: [],
				indName: [],
				corpName: [],
				amount_one: "1",
				rate: "",
				currencySelected: null,
				converter_types: [
					{
						text_uz: "Xususiy mijozlar uchun",
						text_ru: "Для физических лиц",
						text_en: "For individuals",
						value: "ind_persons"
					},
					{
						text_uz: "Korporativ mijozlar uchun",
						text_ru: "Корпоративным клиентам",
						text_en: "For corporate clients",
						value: "corp_persons"
					}
				],
				convert_types_selected: { text: "Xususiy mijozlar uchun", value: "ind_persons" }
			};
		},
		computed: {
			amount_two() {
				/*
				 * Убераем все пробелы из суммы.
				 * */
				const removeWhiteSpaces = (this.currencySelected / 100) * this.amount_one.replace(/ /g, "");
				return this.$options.filters.filterNumberFormatThousands(removeWhiteSpaces);
			}
		},
		watch: {
			amount_one(val) {
				/*
				* Форматируем числа
				* 100, 1 000, 10 000, 100 000, ...
				* */
				const result = this.$options.filters.filterNumberFormatThousands(val);
				this.$nextTick(() => this.amount_one = result);
			}
		},
		mounted() {
			const $tabHeaderItems = document.querySelectorAll("[data-item=\"header\"]");
			const $tabContentItems = document.querySelectorAll("[data-item=\"content\"]");

			appTab($tabHeaderItems, $tabContentItems);

			this.getCbCourse();
			this.getCorpCourse();
			this.getIndCourse();
		},
		methods: {
			/*
			*
			* */
			getCbCourse() {
				this.$http
					.get("/1/currency/", {
						params: {
							type: "cbu",
							page_size: 6
						}
					})
					.then(({ data }) => (this.cb = data.results));
				// .catch((e) => console.log("CB error=>", e));
			},

			/*
			*
			* */
			getCorpCourse() {
				this.$http
					.get("/1/currency/", {
						params: {
							type: "asaka",
							currency_type: "corporate",
							page_size: 6
						}
					})
					.then(({ data }) => {
						this.corp = data.results;
						this.corp.forEach(item => this.corpName.push({ name: item.name, buy: item.buy }));
					});
				// .catch((e) => console.log("currency corporate error=>", e));
			},

			/*
			*
			* */
			getIndCourse() {
				this.$http
					.get("/1/currency/", {
						params: {
							type: "asaka",
							currency_type: "individual",
							page_size: 6
						}
					})
					.then(({ data }) => {
						this.ind = data.results;

						this.ind.forEach(item => this.indName.push({ name: item.name, buy: item.buy }));
					});
				// .catch((e) => console.log("currency individual error=>", e));
			}

		}
	};
</script>
