<template>
	<user-form :TYPE="$store.state.FORM_TYPE.READ" />
</template>

<script>
import UserForm from "./components/UserForm";

export default {
	name: "Read",
	components: {
		UserForm
	}
};
</script>

<style></style>
