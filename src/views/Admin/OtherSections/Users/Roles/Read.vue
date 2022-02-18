<template>
	<roles-form :TYPE="$store.state.FORM_TYPE.READ" />
</template>

<script>
import RolesForm from "./components/RolesForm";

export default {
	name: "Read",
	components: {
		RolesForm
	}
};
</script>

<style></style>
