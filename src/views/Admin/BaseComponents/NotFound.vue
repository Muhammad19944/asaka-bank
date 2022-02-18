<template>
	<div class="empty-list d-flex align-center flex-column justify-center h-100">
		<img src="/images/dashboard/empty-block.svg"
		     alt="Empty image"
		     class="d-block mb-6"
		     style="transform: scale(0.9)"
		>
		<div class="d-flex align-center">
			<frown-icon size="1.8x" class="dark-text"/>
			<h2 class="font-600 ml-3 dark-text">{{ $t("Dashboard.no_information_found") }}</h2>
		</div>
	</div>
</template>

<script>
import { FrownIcon } from "vue-feather-icons";

export default {
	name: "NotFound",
	components: {
		FrownIcon
	}
};
</script>