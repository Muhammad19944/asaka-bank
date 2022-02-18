<template>
	<awards-form :TYPE="$store.state.FORM_TYPE.CREATE" />
</template>

<script>
import AwardsForm from "./components/AwardsForm";

export default {
	name: "Create",
	components: {
		AwardsForm
	}
};
</script>

<style>

</style>