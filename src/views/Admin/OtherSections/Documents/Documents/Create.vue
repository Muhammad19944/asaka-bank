<template>
	<documents-form :TYPE="$store.state.FORM_TYPE.CREATE" />
</template>

<script>
import DocumentsForm from "./components/DocumentsForm";

export default {
	name: "Create",
	components: {
		DocumentsForm
	}
};
</script>

<style>

</style>