<template>
	<public-offer-form :TYPE="$store.state.FORM_TYPE.CREATE" />
</template>

<script>
	import PublicOfferForm from "./components/PublicOfferForm"
	export default {
		name: "Create",
		components: {
			PublicOfferForm
		}
	}
</script>

<style scoped>

</style>