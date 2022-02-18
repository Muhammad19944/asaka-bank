<template>
	<credit-form :TYPE="$store.state.FORM_TYPE.UPDATE" />
</template>

<script>
import CreditForm from "./components/CreditForm";

export default {
	name: "Update",
	components: {
		CreditForm
	}
};
</script>

<style></style>
