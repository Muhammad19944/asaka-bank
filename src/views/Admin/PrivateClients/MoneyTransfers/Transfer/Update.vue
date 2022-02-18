<template>
	<transfer-form :TYPE="$store.state.FORM_TYPE.UPDATE" />
</template>

<script>
import TransferForm from "./components/TransferForm";

export default {
	name: "Update",
	components: {
		TransferForm
	}
};
</script>

<style></style>
