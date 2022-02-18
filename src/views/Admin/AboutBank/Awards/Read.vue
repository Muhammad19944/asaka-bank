<template>
	<awards-form :TYPE="$store.state.FORM_TYPE.READ" />
</template>

<script>
import AwardsForm from "./components/AwardsForm";

export default {
	name: "Read",
	components: {
		AwardsForm
	}
};
</script>

<style>

</style>