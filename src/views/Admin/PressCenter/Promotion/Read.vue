<template>
	<promotion-form :TYPE="$store.state.FORM_TYPE.READ" />
</template>

<script>
import PromotionForm from "../components/PromotionForm";

export default {
	name: "Read",
	components: {
		PromotionForm
	}
};
</script>

<style></style>
