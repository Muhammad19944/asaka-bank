<template>
	<promotion-form :TYPE="$store.state.FORM_TYPE.CREATE" />
</template>

<script>
import PromotionForm from "../components/PromotionForm";

export default {
	name: "Create",
	components: {
		PromotionForm
	}
};
</script>

<style></style>
