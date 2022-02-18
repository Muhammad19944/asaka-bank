<template>
	<documents-form :TYPE="$store.state.FORM_TYPE.READ" />
</template>

<script>
import DocumentsForm from "./components/DocumentsForm";

export default {
	name: "Read",
	components: {
		DocumentsForm
	}
};
</script>

<style>

</style>