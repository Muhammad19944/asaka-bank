<template>
	<shareholder-form :TYPE="$store.state.FORM_TYPE.UPDATE" />
</template>

<script>
import ShareholderForm from "./components/ShareholderForm";

export default {
	name: "Update",
	components: {
		ShareholderForm
	}
};
</script>

<style>

</style>