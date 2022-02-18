<template>
	<important-facts-form :TYPE="$store.state.FORM_TYPE.READ" />
</template>

<script>
import ImportantFactsForm from "./components/ImportantFactsForm";

export default {
	name: "Read",
	components: {
		ImportantFactsForm
	}
};
</script>

<style>

</style>
