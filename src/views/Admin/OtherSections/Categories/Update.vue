<template>
	<categories-form :TYPE="$store.state.FORM_TYPE.UPDATE" />
</template>

<script>
import CategoriesForm from "./components/CategoriesForm";

export default {
	name: "Update",
	components: {
		CategoriesForm
	}
};
</script>

<style></style>
