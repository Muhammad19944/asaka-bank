<template>
	<card-form :TYPE="$store.state.FORM_TYPE.CREATE" />
</template>

<script>
import CardForm from "./components/CardForm";

export default {
	name: "Create",
	components: {
		CardForm
	}
};
</script>

<style></style>
