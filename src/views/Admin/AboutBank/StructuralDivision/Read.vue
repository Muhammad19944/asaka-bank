<template>
	<structure-form :TYPE="$store.state.FORM_TYPE.READ" />
</template>

<script>
import StructureForm from "./components/StructureForm";

export default {
	name: "Read",
	components: {
		StructureForm
	}
};
</script>

<style>

</style>