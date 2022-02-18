<template>
	<v-menu v-model="$store.state.MENU_DROPDOWN" offset-y min-width="1500" content-class="navigation-link-menu">
		<template v-slot:activator="{ on }">
			<v-btn
				@click="open"
				depressed
				:ripple="false"
				plain
				text
				id="search-dropdown"
				class="px-0 text-transform-reset reset-size"
			>
				<div class="navigation-link text-decoration-none text-uppercase text-small py-5 pl-4 d-flex align-center">
					<search-icon size="1.2x" class="d-block" />
					<I18nVue classes="font-700 text--13 ml-3" t="search" />
				</div>
			</v-btn>
		</template>

		<div class="navigation-menu-content">
			<div @click="notClose" class="search-wrapper d-flex align-center justify-center h-100">
				<div class="search-block w-100">
					<div class="search-input d-flex align-center w-100 rounded-lg bg-white">
						<search-icon
							size="1.2x"
							class="d-block ml-4"
						/>
						<input
							@change="search"
							v-model="input"
							type="text"
							:placeholder="$i18n.locale === 'uz' ? 'Matnni kiriting...' : $i18n.locale === 'ru' ? 'Введите текст...' : 'Enter text...'"
							class="flex-fill pa-4 outline-transparent"
						/>
					</div>

					<div class="search-results w-100 rounded-lg bg-white mt-1">
						<!-- News -->
						<template v-if="newsList.length">
							<h4 class="text--h5 font-600 px-4 pt-3 mb-1">{{ $t('news') }}</h4>

							<template v-for="item in newsList">
								<router-link :to="{name: 'NewsShow', params: { id: item.id }}" class="result-templates d-flex align-center text-decoration-none px-4 py-3">
									<v-icon class="mr-4">
										mdi-newspaper-variant-outline
									</v-icon>

									<div class="d-flex align-center w-100">
										<h5 class="flex-1 text--h5 font-600 text-clamp clamp-1">
											<I18nVue
												:uz="item.title_uz"
												:ru="item.title_ru"
												:en="item.title_en"
											/>
										</h5>

										<template v-if="item.category">
											<v-chip color="danger">
												<I18nVue
													:uz="item.category && item.category.name_uz"
													:ru="item.category && item.category.name_ru"
													:en="item.category && item.category.name_en"
													class="text-white"
												/>
											</v-chip>
										</template>
									</div>
								</router-link>
							</template>

							<v-divider class="mt-1" />
						</template>
						<!-- End News -->

						<!-- Credit -->
						<template v-if="credit.length">
							<h4 class="text--h5 font-600 px-4 pt-3 mb-1">{{ $t('Nav.PrivateClients.Loans.title') }}</h4>

							<template v-for="item in credit">
								<!-- Physical person -->
								<template v-if="item.category && item.category.id === 5">
									<router-link :to="{name: 'CreditsDetail', params: { id: item.id }}" class="result-templates d-flex align-center text-decoration-none px-4 py-3">
										<v-icon class="mr-4">
											mdi-credit-card-outline
										</v-icon>

										<div class="d-flex align-center w-100">
											<h5 class="flex-1 text--h5 font-600 text-clamp clamp-1">
												<I18nVue
													:uz="item.title_uz"
													:ru="item.title_ru"
													:en="item.title_en"
												/>
											</h5>

											<template v-if="item.category">
												<v-chip color="danger">
													<I18nVue
														:uz="item.category && item.category.title_uz"
														:ru="item.category && item.category.title_ru"
														:en="item.category && item.category.title_en"
														class="text-white"
													/>
												</v-chip>
											</template>
										</div>
									</router-link>
								</template>
								<!-- End Physical person -->

								<!-- Corporate customers -->
								<template v-if="item.category && item.category.id === 6">
									<router-link :to="{name: 'CreditsCorporateDetail', params: { id: item.id }}" class="result-templates d-flex align-center text-decoration-none px-4 py-3">
										<v-icon class="mr-4">
											mdi-credit-card-outline
										</v-icon>

										<div class="d-flex align-center w-100">
											<h5 class="flex-1 text--h5 font-600 text-clamp clamp-1">
												<I18nVue
													:uz="item.title_uz"
													:ru="item.title_ru"
													:en="item.title_en"
												/>
											</h5>

											<template v-if="item.category">
												<v-chip color="danger">
													<I18nVue
														:uz="item.category && item.category.title_uz"
														:ru="item.category && item.category.title_ru"
														:en="item.category && item.category.title_en"
														class="text-white"
													/>
												</v-chip>
											</template>
										</div>
									</router-link>
								</template>
								<!-- End Corporate customers -->

								<!-- Small business -->
								<template v-if="item.category && item.category.id === 7">
									<router-link :to="{name: 'SmallBusinessCreditsDetail', params: { id: item.id }}" class="result-templates d-flex align-center text-decoration-none px-4 py-3">
										<v-icon class="mr-4">
											mdi-credit-card-outline
										</v-icon>

										<div class="d-flex align-center w-100">
											<h5 class="flex-1 text--h5 font-600 text-clamp clamp-1">
												<I18nVue
													:uz="item.title_uz"
													:ru="item.title_ru"
													:en="item.title_en"
												/>
											</h5>

											<template v-if="item.category">
												<v-chip color="danger">
													<I18nVue
														:uz="item.category && item.category.title_uz"
														:ru="item.category && item.category.title_ru"
														:en="item.category && item.category.title_en"
														class="text-white"
													/>
												</v-chip>
											</template>
										</div>
									</router-link>
								</template>
								<!-- End Small business -->
							</template>

							<v-divider class="mt-1" />
						</template>
						<!-- End Credit -->

						<!-- Debit card -->
						<template v-if="debitCard.length">
							<h4 class="text--h5 font-600 px-4 pt-3 mb-1">{{ $t('Dashboard.cards.debit_cards') }}</h4>

							<template v-for="item in debitCard">
								<!-- Physical person -->
								<template v-if="item.category && item.category.id === 5">
									<router-link :to="{name: 'CardsDetail', params: { id: item.id }}" class="result-templates d-flex align-center text-decoration-none px-4 py-3">
										<v-icon class="mr-4">
											mdi-credit-card-outline
										</v-icon>

										<div class="d-flex align-center w-100">
											<h5 class="flex-1 text--h5 font-600 text-clamp clamp-1">
												<I18nVue
													:uz="item.name_uz"
													:ru="item.name_ru"
													:en="item.name_en"
												/>
											</h5>

											<template v-if="item.category">
												<v-chip color="danger">
													<I18nVue
														:uz="item.category && item.category.title_uz"
														:ru="item.category && item.category.title_ru"
														:en="item.category && item.category.title_en"
														class="text-white"
													/>
												</v-chip>
											</template>

											<template v-if="item.card_currency">
												<v-chip color="danger" class="ml-2">
													<span class="text-white" style="font-size: 12px">{{ item.card_currency }}</span>
												</v-chip>
											</template>
										</div>
									</router-link>
								</template>
								<!-- End Physical person -->

								<!-- Corporate customers -->
								<template v-if="item.category && item.category.id === 6">
									<router-link :to="{name: 'CardsCorporateDetail', params: { id: item.id }}" class="result-templates d-flex align-center text-decoration-none px-4 py-3">
										<v-icon class="mr-4">
											mdi-credit-card-outline
										</v-icon>

										<div class="d-flex align-center w-100">
											<h5 class="flex-1 text--h5 font-600 text-clamp clamp-1">
												<I18nVue
													:uz="item.name_uz"
													:ru="item.name_ru"
													:en="item.name_en"
												/>
											</h5>

											<template v-if="item.category">
												<v-chip color="danger">
													<I18nVue
														:uz="item.category && item.category.title_uz"
														:ru="item.category && item.category.title_ru"
														:en="item.category && item.category.title_en"
														class="text-white"
													/>
												</v-chip>
											</template>

											<template v-if="item.card_currency">
												<v-chip color="danger" class="ml-2">
													<span class="text-white" style="font-size: 12px">{{ item.card_currency }}</span>
												</v-chip>
											</template>
										</div>
									</router-link>
								</template>
								<!-- End Corporate customers -->

								<!-- Small business -->
								<template v-if="item.category && item.category.id === 7">
									<router-link :to="{name: 'SmallBusinessCardsDetail', params: { id: item.id }}" class="result-templates d-flex align-center text-decoration-none px-4 py-3">
										<v-icon class="mr-4">
											mdi-credit-card-outline
										</v-icon>

										<div class="d-flex align-center w-100">
											<h5 class="flex-1 text--h5 font-600 text-clamp clamp-1">
												<I18nVue
													:uz="item.name_uz"
													:ru="item.name_ru"
													:en="item.name_en"
												/>
											</h5>

											<template v-if="item.category">
												<v-chip color="danger">
													<I18nVue
														:uz="item.category && item.category.title_uz"
														:ru="item.category && item.category.title_ru"
														:en="item.category && item.category.title_en"
														class="text-white"
													/>
												</v-chip>
											</template>

											<template v-if="item.card_currency">
												<v-chip color="danger" class="ml-2">
													<span class="text-white" style="font-size: 12px">{{ item.card_currency }}</span>
												</v-chip>
											</template>
										</div>
									</router-link>
								</template>
								<!-- End Small business -->
							</template>

							<v-divider class="mt-1" />
						</template>
						<!-- End Debit card -->

						<!-- Transfer card -->
						<template v-if="transferList.length">
							<h4 class="text--h5 font-600 px-4 pt-3 mb-1">Pul o'tqazmalar</h4>

							<template v-for="item in transferList">
								<!-- Physical person -->
								<template v-if="item.category && item.category.id === 5">
									<router-link :to="{name: 'MoneyTransferDetail', params: { id: item.id }}" class="result-templates d-flex align-center text-decoration-none px-4 py-3">
										<v-icon class="mr-4">
											mdi-credit-card-outline
										</v-icon>

										<div class="d-flex align-center w-100">
											<h5 class="flex-1 text--h5 font-600 text-clamp clamp-1">
												<I18nVue
													:uz="item.title_uz"
													:ru="item.title_ru"
													:en="item.title_en"
												/>
											</h5>

											<template v-if="item.category">
												<v-chip color="danger">
													<I18nVue
														:uz="item.category && item.category.title_uz"
														:ru="item.category && item.category.title_ru"
														:en="item.category && item.category.title_en"
														class="text-white"
													/>
												</v-chip>
											</template>

											<template v-if="item.card_currency">
												<v-chip color="danger" class="ml-2">
													<span class="text-white" style="font-size: 12px">{{ item.card_currency }}</span>
												</v-chip>
											</template>
										</div>
									</router-link>
								</template>
								<!-- End Physical person -->
							</template>

							<v-divider class="mt-1" />
						</template>
						<!-- End Transfer card -->
					</div>
				</div>
			</div>
		</div>
	</v-menu>
</template>

<script>
import { SearchIcon } from "vue-feather-icons"
import I18nVue from "../../../../I18nVue";
import { debounceEvent } from "@/utils/frontend";

export default {
	name: "Search",
	components: {
		I18nVue,
		SearchIcon
	},
	data() {
		return {
			menuDown: false,
			input: "",
			newsList: [],
			credit: [],
			debitCard: [],
			transferList: []
		}
	},
	watch: {
		input(value) {
			if(value) {
				window.addEventListener('keyup', this.debouncedGetAnswer())
			}
		}
	},
	created() {
		this.debouncedGetAnswer = debounceEvent(() => this.search(), 750);
	},
	methods: {
		/*
		*
		* */
		search() {
			this.$http.get('/search/', {
				params: {
					search: this.input
				}
			})
			.then(({ data }) => {
				this.resetAll()

				data.results.forEach(items => {
					switch (items.search_type) {
						case "news":
							this.newsList.push(items)
							break;
						case "credit":
							this.credit.push(items)
							break;
						case "transfer":
							this.transferList.push(items)
							break;
						case "debit_card":
							this.debitCard.push(items)
							break;
						default:
							return false
					}
				})
			})
		},

		resetAll() {
			this.newsList = []
			this.credit = []
			this.transferList = []
			this.debitCard = []
		},

		open() {
			this.$store.state.MENU_DROPDOWN = !this.$store.state.MENU_DROPDOWN
			this.input = ""
			this.resetAll()
		},

		/*
		*
		* */
		notClose(event) {
			if (event.target.closest(".search-block")) {
				event.stopPropagation();
				event.stopImmediatePropagation();
			}
		}
	}
};
</script>

<style>
.search-wrapper {
	background: rgb(0 0 0 / 35%);
}

.search-block {
	max-width: 750px;
}

.search-results {
	max-height: 60vh;
	overflow-y: auto;
}

.result-templates:hover {
	background: rgb(0 0 0 / 5%);
}
</style>
