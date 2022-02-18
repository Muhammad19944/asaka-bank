<template>
	<open-information-form :TYPE='$store.state.FORM_TYPE.READ' />
</template>

<script>
	import OpenInformationForm from './components/OpenInformationForm'
	export default {
		name: 'Read',
		components: {
			OpenInformationForm
		}
	}
</script>

<style scoped>

</style>