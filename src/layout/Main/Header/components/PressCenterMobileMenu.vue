<template>
	<v-row>
		<!-- For mobile -->
		<template v-if="isMobile">
			<v-col cols="12" class="px-0">
				<div class="primary-bg pa-4 text-white rounded text-center mb-3">
					<h4 class="font-600 d-block text-decoration-none">
						<I18nVue t="Nav.PressCenter.title" />
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
											<I18nVue t="Nav.PressCenter.NewsAlerts" />
										</h3>
									</div>
								</v-expansion-panel-header>

								<v-expansion-panel-content>
									<div class="mb-4">
										<router-link
											:to="{ name: 'NewsAndNotifications' }"
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
												<I18nVue t="Nav.PressCenter.NewsAlerts" />
											</span>
										</router-link>
									</div>

									<div class="mb-4">
										<router-link
											:to="{ name: 'Promotions' }"
											v-on:click.native="close"
											class="
				                                navigation-link
				                                text-decoration-none text--h4
				                                transition-all
				                                pull-left
				                                d-inline-block
				                            "
										>
											<I18nVue t="Nav.PressCenter.Stocks" />
										</router-link>
									</div>

									<div class="mb-4">
										<router-link
											:to="{ name: 'WorkingWithYouth' }"
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
												<I18nVue t="Nav.PressCenter.YouthPolicy" />
											</span>
										</router-link>
									</div>

									<div class="mb-4">
										<router-link
											:to="{ name: 'Announcements' }"
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
												<I18nVue t="Nav.PressCenter.announcements" />
											</span>
										</router-link>
									</div>

									<div class="mb-4">
										<router-link
											:to="{ name: 'Tenders' }"
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
												<I18nVue t="Nav.PressCenter.Tenders" />
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
											<I18nVue t="more2" />
										</h3>
									</div>
								</v-expansion-panel-header>

								<v-expansion-panel-content>
									<div class="mb-4">
										<router-link
											:to="{ name: 'UsefulLinks' }"
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
												<I18nVue t="Nav.PressCenter.UsefulLinks" />
											</span>
										</router-link>
									</div>

									<div class="mb-4">
										<router-link
											:to="{ name: 'VideoMaterials' }"
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
												<I18nVue t="Nav.PressCenter.VideoMaterials" />
											</span>
										</router-link>
									</div>

									<div class="mb-4">
										<router-link
											:to="{ name: 'PhotoMaterials' }"
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
												<I18nVue t="Nav.PressCenter.PhotoMaterials" />
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
							:to="{ name: 'NewsAndNotifications' }"
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
									<I18nVue t="Nav.PressCenter.NewsAlerts" />
								</span>
						</router-link>
					</div>

					<div class="mb-4">
						<router-link
							:to="{ name: 'Promotions' }"
							v-on:click.native="close"
							class="
                                navigation-link
                                text-decoration-none text--h4
                                transition-all
                                pull-left
                                d-inline-block
                            "
							>
							<I18nVue t="Nav.PressCenter.Stocks" />
						</router-link>
					</div>

					<div class="mb-4">
						<router-link
							:to="{ name: 'WorkingWithYouth' }"
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
									<I18nVue t="Nav.PressCenter.YouthPolicy" />
								</span>
						</router-link>
					</div>

					<div class="mb-4">
						<router-link
							:to="{ name: 'Announcements' }"
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
								<I18nVue t="Nav.PressCenter.announcements" />
							</span>
						</router-link>
					</div>

					<div class="mb-4">
						<router-link
							:to="{ name: 'Tenders' }"
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
									<I18nVue t="Nav.PressCenter.Tenders" />
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
								<I18nVue t="more2" />
							</span>
						</h3>
					</div>

					<div class="mb-4">
						<router-link
							:to="{ name: 'UsefulLinks' }"
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
									<I18nVue t="Nav.PressCenter.UsefulLinks" />
								</span>
						</router-link>
					</div>

					<div class="mb-4">
						<router-link
							:to="{ name: 'VideoMaterials' }"
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
									<I18nVue t="Nav.PressCenter.VideoMaterials" />
								</span>
						</router-link>
					</div>

					<div class="mb-4">
						<router-link
							:to="{ name: 'PhotoMaterials' }"
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
									<I18nVue t="Nav.PressCenter.PhotoMaterials" />
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
	name: "PressCenterMobileMenu",
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
