<template>
	<div class="press-center-view py-10">
		<div class="view-space py-5">
			<v-container>
				<div class="view-title" style="position: relative">
					<h1 class="font-600 dark-text align-self-center pressCEnterTabH1">{{ $t("press_center") }}</h1>
					<v-tabs
						center-active
						show-arrows
						class="app-tabs appTabs2"
						color="rgba(var(--main-primary), 1)"
						hide-slider
					>
						<template v-if="pressCenterCategoryList" v-for="item of pressCenterCategoryList">
							<v-tab
								:key="item.id"
								:ripple="false"
								class="navigation-link navigation-link__hover text-transform-reset reset-size px-0 ml-4 appTabs2"
								@click="getCategoryHandler(item.id)"
								style="justify-content: flex-end;transform: translateX(0px);"
							>
								<I18nVue
									class="text--h4 font-600"
									:uz="item.name_uz"
									:ru="item.name_ru"
									:en="item.name_en" />
							</v-tab>
						</template>
						<v-tab-item class="d-block" :transition="false">
							<carousel
								:loop="true"
								:paginationEnabled="false"
								:perPageCustom="[[320, 1],[578, 2],[1300, 3],[1600, 4]]"
							>
								<template v-for="i in pressCenterList">
									<slide :key="i.id" class="mr-10">
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
															<I18nVue
																:uz="i.title_uz"
																:ru="i.title_ru"
																:en="i.title_en"
															/>
														</h5>
													</div>
												</div>
												<div class="card-anchor d-flex align-center mt-auto">
													<h4 class="font-600 mr-4">
														<I18nVue t="more" />
													</h4>
													<div
														class="card-anchor-circle d-flex align-center justify-center transition-all">
														<chevron-right-icon
															size="1.2x"
															class="primary-text transition-all"
														/>
													</div>
												</div>
											</div>
										</router-link>
										<a v-else :href="i.link" target="_blank"
										   rel="noopener noreferrer"
										   class="d-flex flex-column align-center justify-center text-center text-decoration-none">
											<v-avatar size="100" class="mr-5">
												<img :src="$http.defaults.baseURL + i.image.url" :alt="i.image.name">
											</v-avatar>
											<I18nVue
												class="text-center ma-4 pa-2 text--h1 font-300"
												:uz="i.name_uz"
												:ru="i.name_ru"
												:en="i.name_en"
											/>
										</a>
									</slide>
								</template>
							</carousel>
						</v-tab-item>
					</v-tabs>
				</div>
			</v-container>
		</div>
	</div>
</template>

<script>
import { ChevronRightIcon } from "vue-feather-icons";
import { get_press_center_category, get_press_center_id, get_press_center_link } from "@/api/pressCenter";
import I18nVue from "@/I18nVue";

export default {
	name: "index",
	components: { I18nVue, ChevronRightIcon },
	data() {
		return {
			pressCenterList: [],
			pressCenterCategoryList: []
		};
	},
	mounted() {
		this.getCategoryHandler();
		get_press_center_category()
			.then(({ data }) => {
				this.pressCenterCategoryList = data.results;
			});
	},
	methods: {
		getCategoryHandler(id) {
			if (id === 10) {
				get_press_center_link().then(({ data }) => {
					this.pressCenterList = [];
					this.pressCenterList = data.results;
				});
			} else {
				get_press_center_id(id ? id : 6).then(({ data }) => {
					this.pressCenterList = [];
					this.pressCenterList = data.results;
				});
			}
		}
	}
};
</script>
<style>

.pressCEnterTabH1 {
	position: absolute;
	z-index: 1;
	padding-top: 8px;
}

.appTabs2 {
	padding-left: 275px;
}


@media (min-width: 0) {
	.pressCEnterTabH1 {
		padding-top: 0;
		margin-top: -15px;
		margin-left: 15px;

	}

	.appTabs2 {
		padding-left: 0;
	}

	.appTabs2 .v-window__container {
		margin: auto;
	}
}

@media (min-width: 960px) {
	.pressCEnterTabH1 {
		padding-top: 20px;
	}

	.appTabs2 .v-item-group {
		padding-left: 275px;
	}

	.appTabs2 .v-window__container {
		margin-left: -275px;
	}
}

</style>
