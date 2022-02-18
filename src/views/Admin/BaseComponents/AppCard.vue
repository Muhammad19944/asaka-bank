<template>
	<div class="app-card-wrap">
		<template v-if="title">
			<div class="d-flex align-center mb-2">
				<h5 class="app-card-title font-600 text-secondary-dark">
					{{ title }}
				</h5>

				<v-spacer />

				<slot name="add-view"/>
			</div>
		</template>
		<div class="admin-app-card app-card__scrollable rounded-lg">
			<div class="app-card__scrollable--view p-relative">
				<slot/>
			</div>
		</div>
	</div>
</template>

<script>
import I18nVue from "../../../I18nVue";

export default {
	name: "AppCard",
	props: {
		title: {
			type: String,
			default: ""
		}
	},
	components: {
		I18nVue
	}
};
</script>

<style scoped>
.app-card-wrap {
	flex: 1;
	height: 0;
}

.admin-app-card {
	background: var(--theme-layout);
}

.app-card__scrollable {
	display: flex;
	flex-direction: column;
	height: 100%;
}

.app-card__scrollable--view {
	overflow-y: auto;
	height: 100%;
}

.default-items.active {
	border-color: #1b1e24;
	color: var(--primary-dark) !important;
}

.default-items {
	border-bottom: 2px solid transparent;
	margin-bottom: -1px;
}
</style>
