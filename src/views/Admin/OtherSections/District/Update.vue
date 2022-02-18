<template>
	<district-form :TYPE="$store.state.FORM_TYPE.UPDATE" />
</template>

<script>
import DistrictForm from './components/DistrictForm'

export default {
	name: 'Update',
	components: {
		DistrictForm,
	},
}
</script>

<style></style>
