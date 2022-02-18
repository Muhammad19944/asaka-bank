<template>
	<careers-form :TYPE="$store.state.FORM_TYPE.READ" />
</template>

<script>
import CareersForm from "./components/CareersForm";

export default {
	name: "Read",
	components: {
		CareersForm
	}
};
</script>

<style>

</style>