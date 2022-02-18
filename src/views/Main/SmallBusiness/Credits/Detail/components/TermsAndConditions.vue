<template>
	<div class="terms-view">
		<h2 class="font-600 dark-text mb-8">
			<I18nVue t="TermsAndConditionsTitle" />
		</h2>
		<div class="credit-widget pa-7 rounded-lg overflow-hidden">
			<div v-if="property" class="app-ul">
				<span v-for="item of property" v-if="$i18n.locale === 'en'" v-html="item.condition_en" />
				<span v-for="item of property" v-if="$i18n.locale === 'ru'" v-html="item.condition_ru" />
				<span v-for="item of property" v-if="$i18n.locale === 'uz'" v-html="item.condition_uz" />
			</div>
		</div>
	</div>
</template>

<script>
import I18nVue from "@/I18nVue";

export default {
	name: "TermsAndConditions",
	components: { I18nVue },
	props: ["property"]
};
</script>

<style></style>
