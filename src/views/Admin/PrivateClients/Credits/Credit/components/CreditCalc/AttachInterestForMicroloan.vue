<template>
	<v-row>
		<v-col md="12">
			<div class="d-flex align-center">
				<h4 class="text--primary text-uppercase font-700 mr-4">Foiz biriktirish</h4>

				<v-divider style="border-color: rgb(var(--border-color), 1)"></v-divider>
			</div>
		</v-col>

		<template v-for="(item, index) in attachInterestList">
			<v-col md="4">
				<div class="app-form-group app-form-group__small no-shadow mb-2">
					<h5 class="font-600 dark-text mb-1">
						{{ index + 1 }}. Foiz
					</h5>

					<v-text-field
						v-model="attachInterestList[index].percent"
						:readonly="$store.state.CREATED_CREDIT_ID === null || TYPE === 'Read'"
						outlined
						hide-details
					>
					</v-text-field>
				</div>
			</v-col>

			<v-col md="4">
				<div class="app-form-group app-form-group__small no-shadow mb-2">
					<h5 class="font-600 dark-text mb-1">
						Kredit muddati
					</h5>

					<v-select
						v-model="attachInterestList[index].month"
						:items="periodList"
						item-text="month"
						item-value="month"
						:readonly="$store.state.CREATED_CREDIT_ID === null || TYPE === 'Read'"
						outlined
						hide-details
					>
						<template v-slot:append>
							<chevron-down-icon size="1.2x" class="mt-1"></chevron-down-icon>
						</template>
					</v-select>
				</div>
			</v-col>

			<v-col md="4">
				<div class="app-form-group app-form-group__small no-shadow mb-2">
					<h5 class="font-600 dark-text mb-1">
						To'lovni qaytarish sxemasi
					</h5>

					<v-select
						v-model="attachInterestList[index].type"
						:items="refundScheme"
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
				</div>
			</v-col>



			<template v-if="attachInterestList.length !== index + 1">
				<v-col md="3">
					<div class="app-form-group app-form-group__small no-shadow mb-2">
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
						<send-button
							@emit:up="addRow"
							:text="$t('Dashboard.add_new')"
							:disabled="$store.state.CREATED_CREDIT_ID === null || TYPE === 'Read'"
						>
							<plus-circle-icon size="1.3x" class="text-white"></plus-circle-icon>
						</send-button>
					</div>
				</v-col>
			</template>

			<!-- Empty space -->
			<v-col md="9"></v-col>

		</template>
	</v-row>
</template>

<script>
	import SendButton from "../../../../../BaseComponents/SendButton";
	import GoBackButton from "../../../../../BaseComponents/GoBackButton";
	import { ChevronDownIcon, PlusCircleIcon, Trash2Icon } from "vue-feather-icons";

	export default {
		name: "AttachInterestForMicroloan",
		props: {
			TYPE: {
				type: String,
				default: ""
			},
			value: {
				type: Array,
				default: () => []
			},
			periodList: {
				type: Array,
				default: () => []
			}
		},
		components: {
			SendButton,
			ChevronDownIcon,
			GoBackButton,
			PlusCircleIcon,
			Trash2Icon
		},
		data() {
			return {
				refundScheme: [
					{
						title_uz: 'Annuitet',
						title_ru: 'Аннуитет',
						title_en: 'Annuity',
						value: 'annuity'
					},
					{
						title_uz: 'Differensial',
						title_ru: 'Дифференциальный',
						title_en: 'Differential',
						value: 'differential'
					},
				]
			};
		},
		computed: {
			attachInterestList: {
				get() {
					return this.value;
				},
				set(value) {
					this.$emit("input", value);
				}
			}
		},
		mounted() {
			if (this.value.length === 0) {
				this.addRow();
			}
		},
		methods: {
			/*
			 *
			 * */
			addRow() {
				this.attachInterestList.push({
					percent: "",
					month: "",
					type: ""
				});
			},

			/*
			 *
			 * */
			deleteRow(index) {
				if (!confirm(`O'chirishni xoxlaysizmi ?`)) {
					return void 0;
				}

				this.attachInterestList.splice(index, 1);
			}
		}
	}
</script>

<style scoped>

</style>