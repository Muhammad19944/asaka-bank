<template>
	<district-form :TYPE="$store.state.FORM_TYPE.CREATE" />
</template>

<script>
import DistrictForm from './components/DistrictForm'

export default {
	name: 'Create',
	components: {
		DistrictForm,
	},
}
</script>

<style></style>
