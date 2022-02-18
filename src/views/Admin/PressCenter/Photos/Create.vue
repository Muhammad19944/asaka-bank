<template>
	<news-create-form
		:TYPE="$store.state.FORM_TYPE.CREATE"
		:CATEGORY_ID="14"
		REDIRECT_ROUTE="DashboardPhotosList"
		:GALLERY="true"
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

<style></style>
