<template>
	<credit-form :TYPE="$store.state.FORM_TYPE.CREATE" />
</template>

<script>
import CreditForm from "./components/CreditForm";

export default {
	name: "Create",
	components: {
		CreditForm
	}
};
</script>

<style></style>
