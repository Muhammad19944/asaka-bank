<template>
	<deposit-box-view-form :TYPE="$store.state.FORM_TYPE.READ" />
</template>

<script>
import DepositBoxViewForm from "./components/DepositBoxViewForm";

export default {
	name: "Create",
	components: {
		DepositBoxViewForm
	}
};
</script>

<style>

</style>