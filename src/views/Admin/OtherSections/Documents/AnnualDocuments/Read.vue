<template>
	<annual-documents-form :TYPE="$store.state.FORM_TYPE.READ" />
</template>

<script>
import AnnualDocumentsForm from "./components/AnnualDocumentsForm";

export default {
	name: "Read",
	components: {
		AnnualDocumentsForm
	}
};
</script>

<style>

</style>