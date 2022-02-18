<template>
	<open-information-form :TYPE="$store.state.FORM_TYPE.UPDATE" />
</template>

<script>
	import OpenInformationForm from './components/OpenInformationForm'
	export default {
		name: 'Update',
		components: {
			OpenInformationForm
		}
	}
</script>

<style>

</style>