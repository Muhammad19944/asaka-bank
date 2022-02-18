<template>
	<district-form :TYPE="$store.state.FORM_TYPE.READ" />
</template>

<script>
import DistrictForm from './components/DistrictForm'

export default {
	name: 'Read',
	components: {
		DistrictForm,
	},
}
</script>

<style></style>
