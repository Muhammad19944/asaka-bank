<template>
	<slides-form :TYPE="$store.state.FORM_TYPE.CREATE" />
</template>

<script>
import SlidesForm from "./components/SlidesForm";

export default {
	name: "Create",
	components: {
		SlidesForm
	}
};
</script>

<style></style>
