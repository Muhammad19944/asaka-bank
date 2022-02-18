<template>
	<public-offer-form :TYPE="$store.state.FORM_TYPE.READ" />
</template>

<script>
	import PublicOfferForm from "./components/PublicOfferForm"
	export default {
		name: "Read",
		components: {
			PublicOfferForm
		}
	}
</script>

<style scoped>

</style>