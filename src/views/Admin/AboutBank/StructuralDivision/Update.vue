<template>
	<structure-form :TYPE="$store.state.FORM_TYPE.UPDATE" />
</template>

<script>
import StructureForm from "./components/StructureForm";

export default {
	name: "Update",
	components: {
		StructureForm
	}
};
</script>

<style>

</style>