<template>
	<v-row>
		<v-col md="12">
			<div class="d-flex align-center">
				<h4 class="text--primary text-uppercase font-700 mr-4">{{ $t("Dashboard.credits.credit_calc_step_text1")
					}}</h4>

				<v-divider style="border-color: rgb(var(--border-color), 1)"></v-divider>
			</div>
		</v-col>

		<template v-for="(item, index) in realStateList">
			<v-col md="3">
				<div class="app-form-group app-form-group__small no-shadow mb-2">
					<h5 class="font-600 dark-text mb-1">{{ index + 1 }}. {{ $t("Dashboard.credits.real_estate") }}
						(UZ)</h5>

					<v-text-field
						v-model="realStateList[index].title_uz"
						:readonly="$store.state.CREATED_CREDIT_ID === null || TYPE === 'Read'"
						outlined
						hide-details
					>
					</v-text-field>
				</div>
			</v-col>

			<v-col md="3">
				<div class="app-form-group app-form-group__small no-shadow mb-2">
					<h5 class="font-600 dark-text mb-1">{{ $t("Dashboard.credits.real_estate") }} (RU)</h5>

					<v-text-field
						v-model="realStateList[index].title_ru"
						:readonly="$store.state.CREATED_CREDIT_ID === null || TYPE === 'Read'"
						outlined
						hide-details
					>
					</v-text-field>
				</div>
			</v-col>

			<v-col md="3">
				<div class="app-form-group app-form-group__small no-shadow mb-2">
					<h5 class="font-600 dark-text mb-1">{{ $t("Dashboard.credits.real_estate") }} (EN)</h5>

					<v-text-field
						v-model="realStateList[index].title_en"
						:readonly="$store.state.CREATED_CREDIT_ID === null || TYPE === 'Read'"
						outlined
						hide-details
					>
					</v-text-field>
				</div>
			</v-col>

			<template v-if="realStateList.length !== index + 1">
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
							:text="$t('Dashboard.add_new')"
							:disabled="$store.state.CREATED_CREDIT_ID === null || TYPE === 'Read'"
						>
							<plus-circle-icon size="1.3x" class="text-white"></plus-circle-icon>
						</send-button>
					</div>
				</v-col>
			</template>

			<v-col md="3">
				<div class="app-form-group app-form-group__small no-shadow mb-2">
					<h5 class="font-600 dark-text mb-1">Foiz biriktirish</h5>

					<v-text-field
						v-model="realStateList[index].percent"
						:readonly="$store.state.CREATED_CREDIT_ID === null || TYPE === 'Read'"
						outlined
						hide-details
					>
					</v-text-field>
				</div>
			</v-col>

			<v-col md="9" />
		</template>

		<!--		<v-col md="12" class="mt-2">-->
		<!--			<go-back-button />-->
		<!--			<send-button @emit:up="send" text="Yangi yaratish" />-->
		<!--		</v-col>-->
	</v-row>
</template>

<script>
import SendButton from "../../../../../BaseComponents/SendButton";
import GoBackButton from "../../../../../BaseComponents/GoBackButton";
import { ChevronDownIcon, PlusCircleIcon, Trash2Icon } from "vue-feather-icons";

export default {
	name: "RealStateMarket",
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
		GoBackButton,
		PlusCircleIcon,
		Trash2Icon
	},
	data() {
		return {};
	},
	computed: {
		realStateList: {
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
			this.realStateList.push({
				title_uz: "",
				title_ru: "",
				title_en: "",
				percent: ""
			});
		},

		/*
		 *
		 * */
		deleteRow(index) {
			if (!confirm(`O'chirishni xoxlaysizmi ?`)) {
				return void 0;
			}

			this.realStateList.splice(index, 1);
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
