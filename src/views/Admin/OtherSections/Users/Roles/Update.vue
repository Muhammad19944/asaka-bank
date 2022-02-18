<template>
	<roles-form :TYPE="$store.state.FORM_TYPE.UPDATE" />
</template>

<script>
import RolesForm from "./components/RolesForm";

export default {
	name: "Update",
	components: {
		RolesForm
	}
};
</script>

<style></style>
