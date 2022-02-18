<template>
	<div class="press-center-view">
		<div class="view-space pb-8 pt-15">
			<v-container>
				<div class="view-title">
					<h1 class="font-600 dark-text align-self-center pressCEnterTabH1">{{ $t("press_center") }}</h1>
				</div>
				<v-row class="mt-16">
					<template v-if="!isLoaded">
						<app-loader style="min-height: 500px; position: relative;" />
					</template>

					<template v-else>
						<v-col lg="3" md="6" sm="6" v-for="i in pressCenterList" :key="i.index">
							<router-link
								v-if="!i.link"
								:to="{ name: 'NewsShow', params: { id: i.id } }"
								class="app-card border-all d-flex flex-column text-decoration-none rounded overflow-hidden h-100"
							>
								<div class="app-card-header">
									<v-responsive :aspect-ratio="3 / 2">
										<div class="card-header-img p-absolute w-100 h-100 d-flex pa-7">
											<img src="/images/logo.svg" alt="App logo"
											     class="ma-auto transition-all" />
										</div>
									</v-responsive>
								</div>
								<div class="app-card-body pa-6 flex-1 d-flex flex-column">
									<div class="card-body-meta d-flex mb-5">
										<div class="card-date mr-6">
											<h2 class="text-center mb-1">
												{{ i.date_added | filterOnlyDate }}
											</h2>
											<span class="text-capitalize">{{ i.date_added | filterOnlyMonth }}</span>
										</div>

										<div class="card-text main-grey">
											<h5 class="line-truncate">
												<I18nVue :uz="i.title_uz" :ru="i.title_ru"
												         :en="i.title_en" />
											</h5>
										</div>
									</div>
									<div class="card-anchor d-flex align-center mt-auto">
										<h4 class="font-600 mr-4">
											<I18nVue t="more" />
										</h4>
										<div
											class="card-anchor-circle d-flex align-center justify-center transition-all">
											<chevron-right-icon size="1.2x"
											                    class="primary-text transition-all" />
										</div>
									</div>
								</div>
							</router-link>

							<a v-else :href="i.link" target="_blank"
							   class="d-flex text--h1 flex-column align-center justify-center text-center text-decoration-none"
							>
								<v-avatar size="100" class="mr-5">
									<img :src="$http.defaults.baseURL + i.image.url" :alt="i.image.name">
								</v-avatar>
								<I18nVue
									classes="text-center ma-4 pa-2 text--h1 font-300"
									:uz="i.name_uz"
									:ru="i.name_ru"
									:en="i.name_en"
								/>
							</a>
						</v-col>
					</template>
				</v-row>
			</v-container>
		</div>
		<div class="card-footer align-content-center mb-10">
			<app-pagination v-if="$store.state.FILTER_OPTIONS.page_length !== 1" @emit:up="paginate" />
		</div>
	</div>
</template>

<script>

import I18nVue from "@/I18nVue";
import { ChevronRightIcon } from "vue-feather-icons";
import AppPagination from "@/views/Admin/BaseComponents/AppPagination";
import AppLoader from "../../../Admin/BaseComponents/AppLoader";

export default {
	name: "index",
	components: {
		I18nVue,
		ChevronRightIcon,
		AppPagination,
		AppLoader
	},
	data() {
		return {
			pressCenterCategoryList: [],
			pressCenterList: [],
			isLoaded: false
		};
	},
	mounted() {
		this.getCategoryList();
		this.getNewsList();
	},
	methods: {
		getCategoryList() {
			this.$http.get(`/1/category/`)
				.then(({ data }) => {
					this.pressCenterCategoryList = data.results;
				});
		},
		/*
		*
		* */
		getNewsList() {
			this.isLoaded = false;

			this.$http.get(`/1/news/`, {
				params: {
					page_size: 8,
					page: this.$store.state.FILTER_OPTIONS.page
				}
			})
				.then(({ data }) => {
					this.pressCenterList = data.results;
					this.$store.state.FILTER_OPTIONS.page_length = Math.ceil(
						data.count / 8
					);
				})
				.finally(() => {
					this.isLoaded = true;
				});
		},
		/*
		*
		* */

		paginate(val) {
			this.$store.state.FILTER_OPTIONS.page = val;

			this.getNewsList();
			this.getCategoryList();
		}
	}
};
</script>

<style>
.app-pagination .v-pagination {
	justify-content: center !important;
}

.v-application .primary {
	background-color: red !important;
	border-color: red !important;
}

.text--h1 {
	font-size: 20px !important;
}
</style>
