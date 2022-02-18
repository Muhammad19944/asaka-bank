<template>
	<v-btn
		@click="$router.go(-1)"
		depressed
		color="warning"
		min-width="135"
		min-height="45"
		class="mr-5"
	>
		<div class="d-flex align-center justify-space-between w-100">
			<chevron-left-icon size="1.5x" class="ml-n1 mr-1"/>
			<span class="text-transform-reset reset-size font-600 text-white">{{ $t('Dashboard.back') }}</span>
		</div>
	</v-btn>
</template>

<script>
import { ChevronLeftIcon } from 'vue-feather-icons'

export default {
	name: "GoBackButton",
	components: {
		ChevronLeftIcon
	}
}
</script>