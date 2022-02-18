<template>
	<important-facts-form :TYPE="$store.state.FORM_TYPE.CREATE" />
</template>

<script>
import ImportantFactsForm from "./components/ImportantFactsForm";

export default {
	name: "Create",
	components: {
		ImportantFactsForm
	}
};
</script>

<style>

</style>
