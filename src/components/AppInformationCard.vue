<template>
	<div
		class='app-slide-card d-flex pa-5 px-sm-8 py-sm-6 rounded-lg overflow-hidden p-relative h-100'
		style='min-height: auto'
	>
		<div class='d-flex align-center flex-wrap justify-center text-center flex-sm-nowrap justify-sm-start text-sm-left'>
			<template v-if="$slots.image">
				<v-avatar size='90' class='mx-auto mr-sm-2 ml-sm-0'>
					<slot name="image" />
				</v-avatar>
			</template>

			<div>
				<h3 class='dark-text font-600'>
					<slot name="title" />
				</h3>

				<template v-if="$slots.description">
					<h4 class="mt-3 mt-sm-0">
						<slot name="description" />
					</h4>
				</template>
			</div>
		</div>
	</div>
</template>

<script>

export default {
	name: "AppInformationCard"
};
</script>

<style scoped>

</style>
