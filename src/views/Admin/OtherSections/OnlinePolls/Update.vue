<template>
	<polls-form :TYPE="$store.state.FORM_TYPE.UPDATE" />
</template>

<script>
import PollsForm from "./components/PollsForm";

export default {
	name: "Update",
	components: {
		PollsForm
	}
};
</script>

<style></style>
