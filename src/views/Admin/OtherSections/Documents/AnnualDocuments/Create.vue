<template>
	<annual-documents-form :TYPE="$store.state.FORM_TYPE.CREATE" />
</template>

<script>
import AnnualDocumentsForm from "./components/AnnualDocumentsForm";

export default {
	name: "Create",
	components: {
		AnnualDocumentsForm
	}
};
</script>

<style>

</style>