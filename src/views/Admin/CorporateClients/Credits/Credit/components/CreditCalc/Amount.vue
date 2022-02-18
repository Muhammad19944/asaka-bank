<template>
	<v-row>
		<v-col md="12">
			<div class="d-flex align-center">
				<h4 class="text--primary text-uppercase font-700 mr-4">{{ $t("Dashboard.credits.quantity") }}</h4>
				<v-divider style="border-color: rgb(var(--border-color), 1)"></v-divider>
			</div>
		</v-col>

		<v-col md="4">
			<div class="app-form-group app-form-group__small no-shadow mb-2">
				<h5 class="font-600 dark-text mb-1">{{ $t("Dashboard.credits.quantity") }} <span class="red--text">(minimum)</span>
				</h5>

				<v-text-field
					v-model="amount.min"
					:readonly="$store.state.CREATED_CREDIT_ID === null || TYPE === 'Read'"
					outlined
					hide-details
				>
				</v-text-field>
			</div>
		</v-col>

		<v-col md="4">
			<div class="app-form-group app-form-group__small no-shadow mb-2">
				<h5 class="font-600 dark-text mb-1">{{ $t("Dashboard.credits.quantity") }} <span class="red--text">(maksimum)</span>
				</h5>

				<v-text-field
					v-model="amount.max"
					:readonly="$store.state.CREATED_CREDIT_ID === null || TYPE === 'Read'"
					outlined
					hide-details
				>
				</v-text-field>
			</div>
		</v-col>
	</v-row>
</template>

<script>
import SendButton from "../../../../../BaseComponents/SendButton";

export default {
	name: "Amount",
	props: {
		TYPE: {
			type: String,
			default: ""
		},
		value: {
			type: Object,
			default: () => {
			}
		}
	},
	components: {
		SendButton
	},
	computed: {
		amount: {
			get() {
				return this.value;
			},
			set(value) {
				this.$emit("input", value);
			}
		}
	},
	watch: {
		"amount.min"(val) {
			/*
			 * Форматируем числа
			 * 100, 1 000, 10 000, 100 000, ...
			 * */
			this.amount.min = this.$options.filters.filterNumberFormatThousands(val);
		},
		"amount.max"(val) {
			/*
			 * Форматируем числа
			 * 100, 1 000, 10 000, 100 000, ...
			 * */
			this.amount.max = this.$options.filters.filterNumberFormatThousands(val);
		}
	}
};
</script>

<style></style>
