<template>
	<div class="header-language">
		<div class="app-form-group">
			<v-select
				@change="setLocal"
				v-model="language"
				:items="items"
				item-text="text"
				item-value="value"
				solo
				hide-details
				class="text-capitalize"
			>
				<template v-slot:append>
					<chevron-down-icon size="1.2x" class="primary-text" />
				</template>
			</v-select>
		</div>
	</div>
</template>

<script>
import { ChevronDownIcon } from 'vue-feather-icons'

export default {
	name: 'AppLanguage',
	components: {
		ChevronDownIcon,
	},
	data() {
		return {
			language: {
				text: 'Uz',
				value: 'uz'
			},
			items: [
				{
					text: 'Uz',
					value: 'uz'
				},
				{
					text: 'Ру',
					value: 'ru'
				},
				{
					text: 'En',
					value: 'en'
				},
			],
		}
	},
	mounted() {
		localStorage.getItem('locale') ? this.language = {text: this.$i18n.locale.toUpperCase(), value: this.$i18n.locale } : this.language = {text: 'Uz', value: 'uz' }
	},
	methods: {
		setLocal(locale) {
			this.$i18n.locale = locale
			localStorage.setItem('locale', locale)
			document.documentElement.setAttribute('lang', locale)
		},
	},
}
</script>

<style>
.header-language .v-select__selections {
	max-width: 27px;
	font-size: 14px;
	line-height: 25px;
}

.header-language .v-select__selection {
	font-family: var(--font-semiBold);
}
</style>
