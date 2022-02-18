<template>
	<transfer-form :TYPE="$store.state.FORM_TYPE.READ" />
</template>

<script>
import TransferForm from "./components/TransferForm";

export default {
	name: "Read",
	components: {
		TransferForm
	}
};
</script>

<style></style>
