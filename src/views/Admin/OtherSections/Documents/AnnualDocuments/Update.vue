<template>
	<annual-documents-form :TYPE="$store.state.FORM_TYPE.UPDATE" />
</template>

<script>
import AnnualDocumentsForm from "./components/AnnualDocumentsForm";

export default {
	name: "Update",
	components: {
		AnnualDocumentsForm
	}
};
</script>

<style>

</style>