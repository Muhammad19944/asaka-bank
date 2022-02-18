<template>
	<useful-create-form :TYPE="$store.state.FORM_TYPE.UPDATE" />
</template>

<script>
import UsefulCreateForm from "../components/UsefulCreateForm";

export default {
	name: "Update",
	components: {
		UsefulCreateForm
	}
};
</script>

<style>

</style>