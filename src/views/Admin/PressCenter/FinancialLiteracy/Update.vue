<template>
	<news-create-form
		:TYPE="$store.state.FORM_TYPE.UPDATE"
		:CATEGORY_ID="8"
		REDIRECT_ROUTE="FinancialLiteracyList"
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
