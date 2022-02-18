<template>
	<careers-form :TYPE="$store.state.FORM_TYPE.CREATE" />
</template>

<script>
import CareersForm from "./components/CareersForm";

export default {
	name: "Create",
	components: {
		CareersForm
	}
};
</script>

<style>

</style>