<template>
	<polls-form :TYPE="$store.state.FORM_TYPE.CREATE" />
</template>

<script>
import PollsForm from "./components/PollsForm";

export default {
	name: "Create",
	components: {
		PollsForm
	}
};
</script>

<style></style>
