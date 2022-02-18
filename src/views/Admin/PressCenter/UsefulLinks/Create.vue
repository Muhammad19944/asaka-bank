<template>
	<useful-create-form :TYPE="$store.state.FORM_TYPE.CREATE" />
</template>

<script>
import UsefulCreateForm from "../components/UsefulCreateForm";

export default {
	name: "Create",
	components: {
		UsefulCreateForm
	}
};
</script>

<style>

</style>