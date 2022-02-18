<template>
	<div class="deposits-view">
		<div class="view-toolbar">
			<v-container class="pa-0">
				<div class="app-tab-header px-5 d-flex">
					<div class="tab-header-items text-center" data-navigation="items">
						<router-link :to="{name: 'DepositListType', params: { type: 'all' }}"
							class="navigation-link navigation-link__hover text-decoration-none p-relative text--h4 py-6 font-600 d-inline-block mr-8"
						>
							<I18nVue t="all_deposits" />
						</router-link>
					</div>
					<div class="tab-header-items text-center" data-navigation="items">
						<router-link :to="{name: 'DepositListType', params: { type: 'milliy_valyutada' }}"
							class="navigation-link navigation-link__hover text-decoration-none p-relative text--h4 py-6 font-600 d-inline-block mr-8"
						>
							<I18nVue t="deposit_type.sum" />
						</router-link>
					</div>
					<div class="tab-header-items text-center" data-navigation="items">
						<router-link :to="{name: 'DepositListType', params: { type: 'aqsh_dollarida' }}"
							class="navigation-link navigation-link__hover text-decoration-none p-relative text--h4 py-6 font-600 d-inline-block mr-8"
						>
							<I18nVue t="deposit_type.dollar" />
						</router-link>
					</div>
					<div class="tab-header-items text-center" data-navigation="items">
						<router-link :to="{name: 'DepositListType', params: { type: 'yevroda_omonatlar' }}"
							class="navigation-link navigation-link__hover text-decoration-none p-relative text--h4 py-6 font-600 d-inline-block mr-8"
						>
							<I18nVue t="deposit_type.euro" />
						</router-link>
					</div>
				</div>
			</v-container>
		</div>

		<div class="view-toolbar-content py-16 overflow-hidden">
			<v-container class="pa-0">
				<div class="app-tab-content p-relative">
					<transition name="fade">
						<router-view :key="$route.fullPath" />
					</transition>
				</div>
			</v-container>
		</div>
	</div>
</template>

<script>
import CardItem from "../../../../../components/CardItem";
import I18nVue from "@/I18nVue";
import AppBreadCrumb from "@/components/AppBreadCrumb";
import { ChevronRightIcon } from "vue-feather-icons";
import { addClass } from "@/utils/frontend";

export default {
	name: "index",
	components: {
		CardItem,
		I18nVue,
		AppBreadCrumb,
		ChevronRightIcon
	},
	data() {
		return {
			depositList: [],
			layout: false,
			tabNavText: ""
		};
	},
	mounted() {
		this.getList();

		const $navItems = document.querySelectorAll("[data-navigation=\"items\"]");

		addClass($navItems);
	},
	methods: {
		/*
		 * Получение лист депозита
		 * */
		getList() {
			this.$http.get("/1/deposit/", {
				params: {
					category: 5
				}
			}).then(({ data }) => {
				this.depositList = data.results;

				this.layout = true
				this.tabNavText = '';
			});
		},

		/*
		* Получаем один из типов депозитов
		* */
		getType(val) {
			this.layout = false;

			// Предотвращаем несколько кликов на том же элементе
			if (this.tabNavText === val) {
				this.layout = true;
				return false;
			}

			this.$http
				.get("/1/deposit", {
					params: {
						type: val,
						category: 5
					}
				})
				.then(({ data }) => {
					this.depositList = data.results;

					this.layout = true;
					this.tabNavText = val;
				});
		}
	}
};
</script>
