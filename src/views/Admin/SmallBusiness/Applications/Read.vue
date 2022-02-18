<template>
	<application-form :TYPE="$store.state.FORM_TYPE.READ" />
</template>

<script>
import ApplicationForm from "./components/ApplicationForm";

export default {
	name: "Read",
	components: {
		ApplicationForm
	}
};
</script>

<style></style>
