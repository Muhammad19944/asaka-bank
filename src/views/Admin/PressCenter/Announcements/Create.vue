<template>
	<news-create-form
		:TYPE="$store.state.FORM_TYPE.CREATE"
		:CATEGORY_ID="15"
		REDIRECT_ROUTE="DashboardAnnouncementsList"
	/>
</template>

<script>
	import NewsCreateForm from '../components/NewsCreateForm'
	export default {
		name: 'Create',
		components: {
			NewsCreateForm,
		},
	}
</script>

<style scoped>

</style>