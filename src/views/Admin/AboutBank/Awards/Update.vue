<template>
	<awards-form :TYPE="$store.state.FORM_TYPE.UPDATE" />
</template>

<script>
import AwardsForm from "./components/AwardsForm";

export default {
	name: "Update",
	components: {
		AwardsForm
	}
};
</script>

<style>

</style>