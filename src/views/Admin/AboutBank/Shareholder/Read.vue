<template>
	<shareholder-form :TYPE="$store.state.FORM_TYPE.READ" />
</template>

<script>
import ShareholderForm from "./components/ShareholderForm";

export default {
	name: "Read",
	components: {
		ShareholderForm
	}
};
</script>

<style>

</style>