<template>
	<country-form :TYPE="$store.state.FORM_TYPE.UPDATE" />
</template>

<script>
import CountryForm from './components/CountryForm'

export default {
	name: 'Update',
	components: {
		CountryForm,
	},
}
</script>

<style></style>
