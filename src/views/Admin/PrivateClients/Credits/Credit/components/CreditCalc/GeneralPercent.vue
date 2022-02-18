<template>
	<v-row>
		<v-col md="12">
			<div class="d-flex align-center">
				<h4 class="text--primary text-uppercase font-700 mr-4">Foiz stavka</h4>

				<v-divider style="border-color: rgb(var(--border-color), 1)"></v-divider>
			</div>
		</v-col>

		<v-col md="3">
			<div class="app-form-group app-form-group__small no-shadow mb-2">
				<h5 class="font-600 dark-text mb-1">Foiz stavka</h5>

				<v-text-field
					v-model="generalPercent"
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
export default {
	name: "GeneralPercent",
	props: {
		TYPE: {
			type: String,
			default: ""
		},
		value: {
			type: String,
			default: ""
		}
	},
	computed: {
		generalPercent: {
			get() {
				return this.value;
			},
			set(value) {
				this.$emit("input", value);
			}
		}
	},
};
</script>

<style>

</style>
