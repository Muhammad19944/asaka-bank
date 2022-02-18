<template>
	<categories-form :TYPE="$store.state.FORM_TYPE.READ" />
</template>

<script>
import CategoriesForm from "./components/CategoriesForm";

export default {
	name: "Read",
	components: {
		CategoriesForm
	}
};
</script>

<style></style>
