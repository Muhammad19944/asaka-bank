<template>
	<card-form :TYPE="$store.state.FORM_TYPE.UPDATE" />
</template>

<script>
import CardForm from "./components/CardForm";

export default {
	name: "Update",
	components: {
		CardForm
	}
};
</script>

<style></style>
