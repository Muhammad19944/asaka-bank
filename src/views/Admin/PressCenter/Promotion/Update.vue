<template>
	<promotion-form :TYPE="$store.state.FORM_TYPE.UPDATE" />
</template>

<script>
import PromotionForm from "../components/PromotionForm";

export default {
	name: "Update",
	components: {
		PromotionForm
	}
};
</script>

<style></style>
