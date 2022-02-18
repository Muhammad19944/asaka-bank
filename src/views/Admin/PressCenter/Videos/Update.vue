<template>
	<news-create-form :TYPE="$store.state.FORM_TYPE.UPDATE" />
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
