<template>
	<v-row>
		<v-col md="6" v-for="item of list" :key="item.id">
			<div class="credit-widget pa-4 pa-sm-8 rounded-lg overflow-hidden mr-4 h-100">
				<h5>
					<I18nVue :uz="item.position_uz" :ru="item.position_ru" :en="item.position_en" />
				</h5>
				<h2 class="font-600 dark-text mt-2 mb-5">
					<I18nVue :uz="item.full_name_uz" :ru="item.full_name_ru"
					         :en="item.full_name_en" />
				</h2>
				<p class="mb-0">
					<I18nVue :uz="item.description_uz" :ru="item.description_ru"
					         :en="item.description_en" />
				</p>
			</div>
		</v-col>
	</v-row>
</template>

<script>
import I18nVue from "@/I18nVue";

export default {
	name: "BankCouncil",
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
