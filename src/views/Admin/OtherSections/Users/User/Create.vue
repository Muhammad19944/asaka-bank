<template>
	<user-form :TYPE="$store.state.FORM_TYPE.CREATE" />
</template>

<script>
import UserForm from "./components/UserForm";

export default {
	name: "Create",
	components: {
		UserForm
	}
};
</script>

<style></style>
