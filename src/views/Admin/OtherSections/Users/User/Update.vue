<template>
	<user-form :TYPE="$store.state.FORM_TYPE.UPDATE" />
</template>

<script>
import UserForm from "./components/UserForm";

export default {
	name: "Update",
	components: {
		UserForm
	}
};
</script>

<style></style>
