<template>
	<news-create-form
		:TYPE="$store.state.FORM_TYPE.UPDATE"
		:CATEGORY_ID="14"
		REDIRECT_ROUTE="DashboardPhotosList"
		GALLERY
	/>
</template>

<script>
import NewsCreateForm from '../components/NewsCreateForm'

export default {
	name: 'Update',
	components: {
		NewsCreateForm,
	},
}
</script>

<style></style>
