<template>
	<branches-form :TYPE="$store.state.FORM_TYPE.UPDATE" />
</template>

<script>
import BranchesForm from './components/BranchesForm.vue'

export default {
	name: 'Update',
	components: {
		BranchesForm,
	},
}
</script>

<style></style>
