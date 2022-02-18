<template>
	<div class="card-form-view">
		<app-card>
			<div class="form-wrap pa-5 px-6">
				<div class="d-flex align-center mb-8">
					<h4 class="text--primary text-uppercase font-700 mr-4">
						{{ TYPE === "Create" ? $t("Dashboard.add_new") : TYPE === "Update" ? $t("Dashboard.update") : $t("Dashboard.read")
						}}
					</h4>

					<v-divider style="border-color: rgb(var(--border-color), 1)"></v-divider>
				</div>

				<div class="app-collapse--advanced mb-10">
					<v-expansion-panels v-model="panel" accordion multiple class="border-all">
						<!-- Debit cards -->
						<v-expansion-panel>
							<v-expansion-panel-header class="py-5 font-600 reset-size">
								{{ $t("Dashboard.cards.debit_cards") }}
							</v-expansion-panel-header>
							<v-expansion-panel-content>
								<card-optional :TYPE="TYPE" />
							</v-expansion-panel-content>
						</v-expansion-panel>
						<!-- End Debit cards -->

						<!-- Card properties -->
						<v-expansion-panel>
							<v-expansion-panel-header class="py-5 font-600 reset-size">
								{{ $t("Dashboard.cards.card_properties") }}
							</v-expansion-panel-header>
							<v-expansion-panel-content>
								<card-props :TYPE="TYPE" />
							</v-expansion-panel-content>
						</v-expansion-panel>
						<!-- End Card properties -->

						<!-- Required documents -->
						<v-expansion-panel>
							<v-expansion-panel-header class="py-5 font-600 reset-size">
								{{ $t("Dashboard.documents") }}
							</v-expansion-panel-header>
							<v-expansion-panel-content>
								<card-documents :TYPE="TYPE" />
							</v-expansion-panel-content>
						</v-expansion-panel>
						<!-- End Required documents -->
					</v-expansion-panels>
				</div>
			</div>
		</app-card>
	</div>
</template>

<script>
import AppCard from "../../../../BaseComponents/AppCard";
import { ChevronDownIcon } from "vue-feather-icons";
import CardOptional from "./CardOptional";
import CardProps from "./CardProps";
import CardDocuments from "./CardDocuments";

export default {
	name: "CardForm",
	props: {
		TYPE: {
			type: String,
			default: ""
		}
	},
	components: {
		AppCard,
		CardOptional,
		CardProps,
		CardDocuments,
		ChevronDownIcon
	},
	data() {
		return {
			panel: [0]
		};
	},
	mounted() {
		if (this.$route.params.id) {
			this.$store.state.CREATED_CARD_ID = +this.$route.params.id;

			// console.log(this.$store.state.CREATED_CARD_ID);
		}
	}
};
</script>

<style></style>
