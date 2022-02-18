<template>
	<branches-form :TYPE="$store.state.FORM_TYPE.CREATE" />
</template>

<script>
import BranchesForm from './components/BranchesForm.vue'

export default {
	name: 'Create',
	components: {
		BranchesForm,
	},
}
</script>
