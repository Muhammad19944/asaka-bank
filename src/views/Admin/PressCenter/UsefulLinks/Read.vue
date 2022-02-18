<template>
	<useful-create-form :TYPE="$store.state.FORM_TYPE.READ" />
</template>

<script>
import UsefulCreateForm from "../components/UsefulCreateForm";

export default {
	name: "Read",
	components: {
		UsefulCreateForm
	}
};
</script>

<style>

</style>