<template>
	<v-row>
		<v-col md="12">
			<div class="d-flex align-center">
				<h4 class="text--primary text-uppercase font-700 mr-4">{{ $t("Dashboard.credits.grace_period") }}</h4>

				<v-divider style="border-color: rgb(var(--border-color), 1)"></v-divider>
			</div>
		</v-col>

		<template v-for="(item, index) in periodList">
			<v-col md="3">
				<div class="app-form-group app-form-group__small no-shadow mb-2">
					<h5 class="font-600 dark-text mb-1">
						{{ index + 1 }}. {{ $t("Dashboard.credits.grace_period") }} <span class="red--text">(oy)</span>
					</h5>

					<v-text-field
						v-model="periodList[index].month"
						:readonly="$store.state.CREATED_CREDIT_ID === null || TYPE === 'Read'"
						outlined
						hide-details
					>
					</v-text-field>
				</div>
			</v-col>

			<template v-if="periodList.length !== index + 1">
				<v-col md="3">
					<div class="app-form-group app-form-group__small no-shadow mb-2">
						<h5 class="font-600 dark-text mb-1" style="opacity: 0">Hidden text</h5>

						<send-button
							@emit:up="deleteRow(index)"
							:disabled="$store.state.CREATED_CREDIT_ID === null || TYPE === 'Read'"
							color="danger"
							:text="$t('Dashboard.delete')"
						>
							<trash2-icon size="1.3x" class="text-white d-block"></trash2-icon>
						</send-button>
					</div>
				</v-col>
			</template>

			<template v-else>
				<v-col md="3">
					<div class="app-form-group app-form-group__small no-shadow mb-2">
						<h5 class="font-600 dark-text mb-1" style="opacity: 0">Hidden text</h5>

						<send-button
							@emit:up="addRow"
							:disabled="$store.state.CREATED_CREDIT_ID === null || TYPE === 'Read'"
							:text="$t('Dashboard.add_new')"
						>
							<plus-circle-icon size="1.3x" class="text-white"></plus-circle-icon>
						</send-button>
					</div>
				</v-col>
			</template>

			<v-col md="6"></v-col>
		</template>
	</v-row>
</template>

<script>
import SendButton from "../../../../../BaseComponents/SendButton";
import { ChevronDownIcon, PlusCircleIcon, Trash2Icon } from "vue-feather-icons";

export default {
	name: "GracePeriod",
	props: {
		TYPE: {
			type: String,
			default: ""
		},
		value: {
			type: Array,
			default: () => []
		}
	},
	components: {
		SendButton,
		ChevronDownIcon,
		PlusCircleIcon,
		Trash2Icon
	},
	data() {
		return {};
	},
	mounted() {
		if (this.value.length === 0) {
			this.addRow();
		}
	},
	computed: {
		periodList: {
			get() {
				return this.value;
			},
			set(value) {
				this.$emit("input", value);
			}
		}
	},
	methods: {
		/*
		 *
		 * */
		addRow() {
			this.periodList.push({
				month: null
			});
		},

		/*
		 *
		 * */
		deleteRow(index) {
			if (!confirm(`O'chirishni xoxlaysizmi ?`)) {
				return void 0;
			}

			this.periodList.splice(index, 1);
		},

		/*
		 *
		 * */
		// update() {
		// 	console.log("update");
		// },

		/*
		 *
		 * */
		// send() {
		// 	console.log("send");
		// }
	}
};
</script>

<style></style>
