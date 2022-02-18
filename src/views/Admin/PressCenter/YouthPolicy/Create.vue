<template>
	<news-create-form
		:TYPE="$store.state.FORM_TYPE.CREATE"
		:CATEGORY_ID="7"
		REDIRECT_ROUTE="DashboardYoungPolicyList"
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
