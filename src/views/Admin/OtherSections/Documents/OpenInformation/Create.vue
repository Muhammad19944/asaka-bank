<template>
	<open-information-form :TYPE="$store.state.FORM_TYPE.CREATE" />
</template>

<script>
	import OpenInformationForm from './components/OpenInformationForm'
	export default {
		name: 'Create',
		components: {
			OpenInformationForm
		}
	}
</script>

<style scoped>

</style>