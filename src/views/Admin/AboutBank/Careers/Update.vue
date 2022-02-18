<template>
	<careers-form :TYPE="$store.state.FORM_TYPE.UPDATE" />
</template>

<script>
import CareersForm from "./components/CareersForm";

export default {
	name: "Update",
	components: {
		CareersForm
	}
};
</script>

<style>

</style>