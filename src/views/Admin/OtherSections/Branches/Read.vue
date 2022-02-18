<template>
	<branches-form :TYPE="$store.state.FORM_TYPE.READ" />
</template>

<script>
import BranchesForm from './components/BranchesForm.vue'

export default {
	name: 'Read',
	components: {
		BranchesForm,
	},
}
</script>

<style></style>
