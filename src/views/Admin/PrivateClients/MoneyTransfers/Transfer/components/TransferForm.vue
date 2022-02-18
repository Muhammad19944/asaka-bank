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
						<!-- Transfer money model -->
						<v-expansion-panel>
							<v-expansion-panel-header class="py-5 font-600 reset-size">
								{{ $t("Dashboard.transfers.transfer_create") }}
							</v-expansion-panel-header>
							<v-expansion-panel-content>
								<transfer-optional :TYPE="TYPE" />
							</v-expansion-panel-content>
						</v-expansion-panel>
						<!-- End Transfer money model -->

						<!-- Transfer Reference model -->
						<v-expansion-panel>
							<v-expansion-panel-header class="py-5 font-600 reset-size">
								Reference qo'shish
							</v-expansion-panel-header>
							<v-expansion-panel-content>
								<transfer-reference :TYPE="TYPE" />
							</v-expansion-panel-content>
						</v-expansion-panel>
						<!-- End Transfer Reference model -->

						<!-- Transfer prop -->
						<v-expansion-panel>
							<v-expansion-panel-header class="py-5 font-600 reset-size">
								{{ $t("Dashboard.transfers.transfer_prop") }}
							</v-expansion-panel-header>
							<v-expansion-panel-content>
								<transfer-prop :TYPE="TYPE" />
							</v-expansion-panel-content>
						</v-expansion-panel>
						<!-- End Transfer prop -->

						<!-- Transfer tariff -->
						<v-expansion-panel>
							<v-expansion-panel-header class="py-5 font-600 reset-size">
								{{ $t("Dashboard.transfers.transfer_tariff") }}
							</v-expansion-panel-header>
							<v-expansion-panel-content>
								<transfer-tariff :TYPE="TYPE" />
							</v-expansion-panel-content>
						</v-expansion-panel>
						<!-- End Transfer tariff -->

						<!-- Transfer country -->
						<v-expansion-panel>
							<v-expansion-panel-header class="py-5 font-600 reset-size">
								{{ $t("Dashboard.transfers.transfer_country") }}
							</v-expansion-panel-header>
							<v-expansion-panel-content>
								<transfer-country :TYPE="TYPE" />
							</v-expansion-panel-content>
						</v-expansion-panel>
						<!-- End Transfer country -->

						<!-- Transfer documents -->
						<v-expansion-panel>
							<v-expansion-panel-header class="py-5 font-600 reset-size">
								{{ $t("Dashboard.documents") }}
							</v-expansion-panel-header>
							<v-expansion-panel-content>
								<transfer-documents :TYPE="TYPE" />
							</v-expansion-panel-content>
						</v-expansion-panel>
						<!-- End Transfer documents -->
					</v-expansion-panels>
				</div>
			</div>
		</app-card>
	</div>
</template>

<script>
import AppCard from "../../../../BaseComponents/AppCard";
import TransferOptional from "./TransferOptional";
import TransferProp from "./TransferProp";
import TransferTariff from "./TransferTariff";
import TransferCountry from "./TransferCountry";
import TransferDocuments from "./TransferDocuments";
import TransferReference from './TransferReference'

export default {
	name: "TransferForm",
	props: {
		TYPE: {
			type: String,
			default: ""
		}
	},
	components: {
		AppCard,
		TransferOptional,
		TransferProp,
		TransferTariff,
		TransferCountry,
		TransferDocuments,
		TransferReference
	},
	data() {
		return {
			panel: [0]
		};
	},
	mounted() {
		if (this.$route.params.id) {
			this.$store.state.CREATED_TRANSFER_ID = +this.$route.params.id;
		}
	}
};
</script>

<style></style>
