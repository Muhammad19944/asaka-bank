<template>
	<div>
		<div v-for="item of list" :key="item.id"
		     class="credit-widget pa-4 pa-sm-8 rounded-lg overflow-hidden h-100 mb-8">
			<h2 class="font-600 dark-text mb-4">
				<I18nVue :uz="item.full_name_uz" :ru="item.full_name_ru" :en="item.full_name_en" />
			</h2>
			<h4 class="font-600 dark-grey">
				<I18nVue :uz="item.position_uz" :ru="item.position_ru" :en="item.position_en" />
			</h4>
		</div>
	</div>
</template>

<script>
import I18nVue from "@/I18nVue";

export default {
	name: "AuditCommission",
	components: {
		I18nVue
	},
	props: {
		list: {
			type: Array,
			default: () => []
		}
	}
};
</script>

<style>

</style>
