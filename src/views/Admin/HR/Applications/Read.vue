<template>
	<h-r-form :TYPE="$store.state.FORM_TYPE.READ" />
</template>

<script>
import HRForm from "../components/HRForm";

export default {
	name: "Read",
	components: {
		HRForm
	}
};
</script>

<style>

</style>
