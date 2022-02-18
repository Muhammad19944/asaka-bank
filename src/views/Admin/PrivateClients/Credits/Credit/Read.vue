<template>
	<credit-form :TYPE="$store.state.FORM_TYPE.READ" />
</template>

<script>
import CreditForm from "./components/CreditForm";

export default {
	name: "Read",
	components: {
		CreditForm
	}
};
</script>

<style></style>
