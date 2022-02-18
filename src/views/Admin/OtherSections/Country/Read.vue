<template>
	<country-form :TYPE="$store.state.FORM_TYPE.READ" />
</template>

<script>
import CountryForm from './components/CountryForm'

export default {
	name: 'Read',
	components: {
		CountryForm,
	},
}
</script>

<style></style>
