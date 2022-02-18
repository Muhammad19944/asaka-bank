<template>
	<user-application-form :TYPE="$store.state.FORM_TYPE.READ" />
</template>

<script>
import UserApplicationForm from "../components/UserApplicationForm";

export default {
	name: "Read",
	components: {
		UserApplicationForm
	}
};
</script>

<style>

</style>
