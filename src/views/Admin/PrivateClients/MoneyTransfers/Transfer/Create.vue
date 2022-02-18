<template>
	<transfer-form :TYPE="$store.state.FORM_TYPE.CREATE" />
</template>

<script>
import TransferForm from "./components/TransferForm";

export default {
	name: "Create",
	components: {
		TransferForm
	}
};
</script>

<style></style>
