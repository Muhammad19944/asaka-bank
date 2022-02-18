<template>
	<card-form :TYPE="$store.state.FORM_TYPE.READ" />
</template>

<script>
import CardForm from "./components/DepositForm";

export default {
	name: "Read",
	components: {
		CardForm
	}
};
</script>

<style></style>
