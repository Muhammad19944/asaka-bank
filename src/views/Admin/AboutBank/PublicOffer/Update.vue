<template>
	<public-offer-form :TYPE="$store.state.FORM_TYPE.UPDATE" />
</template>

<script>
	import PublicOfferForm from "./components/PublicOfferForm"
	export default {
		name: "Update",
		components: {
			PublicOfferForm
		}
	}
</script>

<style scoped>

</style>