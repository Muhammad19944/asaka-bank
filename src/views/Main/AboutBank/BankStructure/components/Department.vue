<template>
	<div>
		<template v-for="item in list">
			<div :key="item.id" class="app-collapse mt-0 mt-md-0 mb-5">
				<div class="app-collapse-item credit-widget rounded-lg">
					<v-expansion-panels accordion>
						<v-expansion-panel>
							<v-expansion-panel-header>
								<h4 class="font-600">
									<I18nVue :uz="item.name_uz" :ru="item.name_ru" :en="item.name_en" />
								</h4>
							</v-expansion-panel-header>
							<v-expansion-panel-content>
								<v-row class="py-2">
									<template v-for="child in item.members">
										<v-col :key="child.id" md="6">
											<div class="credit-widget pa-4 pa-sm-8 rounded-lg overflow-hidden h-100">
												<h5>
													<I18nVue :uz="child.position_uz" :ru="child.position_ru"
													         :en="child.position_en" />
												</h5>
												<h2 class="font-600 dark-text mt-2 mb-4">
													<I18nVue :uz="child.full_name_uz" :ru="child.full_name_ru"
													         :en="child.full_name_en" />
												</h2>
												<h5 v-if='child.phone' class="font-600 dark-grey mb-1">
													<I18nVue t="SHAREHOLDERS_AND_INVESTORS.bank_structure.text10" /> &nbsp;
													<a :href="`tel: ${child.phone}`" class="text-decoration-none font-700">
														{{ child.phone }}
													</a>
												</h5>
												<h5 v-if='child.email' class="font-600 dark-grey">
													<I18nVue t="SHAREHOLDERS_AND_INVESTORS.bank_structure.text12" />
													{{ child.email }}
												</h5>
											</div>
										</v-col>
									</template>
								</v-row>
							</v-expansion-panel-content>
						</v-expansion-panel>
					</v-expansion-panels>
				</div>
			</div>
		</template>
	</div>
</template>

<script>
import I18nVue from "@/I18nVue";

export default {
	name: "Department",
	props: {
		list: {
			type: Array,
			default: () => []
		}
	},
	components: {
		I18nVue
	}
};
</script>

<style>

</style>
