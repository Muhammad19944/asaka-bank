<template>
	<important-facts-form :TYPE="$store.state.FORM_TYPE.UPDATE" />
</template>

<script>
import ImportantFactsForm from "./components/ImportantFactsForm";

export default {
	name: "Update",
	components: {
		ImportantFactsForm
	}
};
</script>

<style>

</style>
