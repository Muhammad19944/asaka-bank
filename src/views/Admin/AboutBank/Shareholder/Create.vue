<template>
	<shareholder-form :TYPE="$store.state.FORM_TYPE.CREATE" />
</template>

<script>
import ShareholderForm from "./components/ShareholderForm";

export default {
	name: "Create",
	components: {
		ShareholderForm
	}
};
</script>

<style>

</style>