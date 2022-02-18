<template>
	<roles-form :TYPE="$store.state.FORM_TYPE.CREATE" />
</template>

<script>
import RolesForm from "./components/RolesForm";

export default {
	name: "Create",
	components: {
		RolesForm
	}
};
</script>

<style></style>
