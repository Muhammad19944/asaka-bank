<template>
	<country-form :TYPE="$store.state.FORM_TYPE.CREATE" />
</template>

<script>
import CountryForm from './components/CountryForm'

export default {
	name: 'index',
	components: {
		CountryForm,
	},
}
</script>

<style></style>
