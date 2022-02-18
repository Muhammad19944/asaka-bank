<template>
	<structure-form :TYPE="$store.state.FORM_TYPE.CREATE" />
</template>

<script>
import StructureForm from "./components/StructureForm";

export default {
	name: "Create",
	components: {
		StructureForm
	}
};
</script>

<style>

</style>