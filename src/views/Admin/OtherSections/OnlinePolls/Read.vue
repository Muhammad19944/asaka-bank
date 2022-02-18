<template>
	<polls-form :TYPE="$store.state.FORM_TYPE.READ" />
</template>

<script>
import PollsForm from "./components/PollsForm";

export default {
	name: "Read",
	components: {
		PollsForm
	}
};
</script>

<style></style>
