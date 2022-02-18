<template>
	<deposit-form :TYPE="$store.state.FORM_TYPE.CREATE" />
</template>

<script>
import DepositForm from "./components/DepositForm";

export default {
	name: "Create",
	components: {
		DepositForm
	}
};
</script>

<style></style>
