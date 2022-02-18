<template>
	<v-row>
		<v-col md="12">
			<div class="d-flex align-center">
				<h4 class="text--primary text-uppercase font-700 mr-4">Kalkulyator turi</h4>

				<v-divider style="border-color: rgb(var(--border-color), 1)"></v-divider>
			</div>
		</v-col>

		<v-col md="3">
			<div class="app-form-group app-form-group__small no-shadow mb-2">
				<h5 class="font-600 dark-text mb-1">Kalkulyator turi</h5>

				<template v-if="$i18n.locale === 'uz'">
					<v-select
						v-model="creditCalcType"
						:items="$store.state.CREDIT_CALC_TYPE"
						item-text="title_uz"
						item-value="value"
						:readonly="$store.state.CREATED_CREDIT_ID === null || TYPE === 'Read'"
						outlined
						hide-details
					>
						<template v-slot:append>
							<chevron-down-icon size="1.2x" class="mt-1"></chevron-down-icon>
						</template>
					</v-select>
				</template>

				<template v-if="$i18n.locale === 'ru'">
					<v-select
						v-model="creditCalcType"
						:items="$store.state.CREDIT_CALC_TYPE"
						item-text="title_ru"
						item-value="value"
						:readonly="$store.state.CREATED_CREDIT_ID === null || TYPE === 'Read'"
						outlined
						hide-details
					>
						<template v-slot:append>
							<chevron-down-icon size="1.2x" class="mt-1"></chevron-down-icon>
						</template>
					</v-select>
				</template>

				<template v-if="$i18n.locale === 'en'">
					<v-select
						v-model="creditCalcType"
						:items="$store.state.CREDIT_CALC_TYPE"
						item-text="title_en"
						item-value="value"
						:readonly="$store.state.CREATED_CREDIT_ID === null || TYPE === 'Read'"
						outlined
						hide-details
					>
						<template v-slot:append>
							<chevron-down-icon size="1.2x" class="mt-1"></chevron-down-icon>
						</template>
					</v-select>
				</template>
			</div>
		</v-col>
	</v-row>
</template>

<script>
import { ChevronDownIcon } from "vue-feather-icons";

export default {
	name: "CreditCalcType",
	props: {
		TYPE: {
			type: String,
			default: ""
		},
		value: {
			type: String,
			default: () => ""
		}
	},
	components: {
		ChevronDownIcon
	},
	computed: {
		creditCalcType: {
			get() {
				return this.value;
			},
			set(value) {
				this.$emit("input", value);
			}
		}
	}
};
</script>

<style>

</style>
