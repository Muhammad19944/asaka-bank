<template>
	<user-application-form :TYPE="$store.state.FORM_TYPE.CREATE" />
</template>

<script>
import UserApplicationForm from "../components/UserApplicationForm";

export default {
	name: "Create",
	components: {
		UserApplicationForm
	}
};
</script>

<style>

</style>
