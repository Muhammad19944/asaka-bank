<template>
	<documents-form :TYPE="$store.state.FORM_TYPE.UPDATE" />
</template>

<script>
import DocumentsForm from "./components/DocumentsForm";

export default {
	name: "Update",
	components: {
		DocumentsForm
	}
};
</script>

<style>

</style>