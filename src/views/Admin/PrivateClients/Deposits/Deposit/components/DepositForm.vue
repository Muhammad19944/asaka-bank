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
						<!-- Deposit cards -->
						<v-expansion-panel>
							<v-expansion-panel-header class="py-5 font-600 reset-size">
								{{ $t("Dashboard.deposit.create_deposit_name") }}
							</v-expansion-panel-header>
							<v-expansion-panel-content>
								<deposit-optional :TYPE="TYPE" />
							</v-expansion-panel-content>
						</v-expansion-panel>
						<!-- End Deposit cards -->

						<!-- Deposit props -->
						<v-expansion-panel>
							<v-expansion-panel-header class="py-5 font-600 reset-size">
								{{ $t("Dashboard.deposit.deposit_prop") }}
							</v-expansion-panel-header>
							<v-expansion-panel-content>
								<deposit-prop :TYPE="TYPE" />
							</v-expansion-panel-content>
						</v-expansion-panel>
						<!-- End Deposit props -->

						<!-- Create deposit period -->
						<v-expansion-panel>
							<v-expansion-panel-header class="py-5 font-600 reset-size">
								{{ $t("Dashboard.deposit.create_deposit_period") }}
							</v-expansion-panel-header>
							<v-expansion-panel-content>
								<create-deposit-period :TYPE="TYPE" />
							</v-expansion-panel-content>
						</v-expansion-panel>
						<!-- End Create deposit period -->

						<!-- Documents -->
						<v-expansion-panel>
							<v-expansion-panel-header class="py-5 font-600 reset-size">
								{{ $t("Dashboard.documents") }}
							</v-expansion-panel-header>

							<v-expansion-panel-content>
								<deposit-documents :TYPE="TYPE" />
							</v-expansion-panel-content>
						</v-expansion-panel>
						<!-- End Documents -->
						<!-- Deposit Reference model -->
						<v-expansion-panel>
							<v-expansion-panel-header class="py-5 font-600 reset-size">
								Reference qo'shish
							</v-expansion-panel-header>
							<v-expansion-panel-content>
								<deposit-reference :TYPE="TYPE" />
							</v-expansion-panel-content>
						</v-expansion-panel>
						<!-- End Deposit Reference model -->
					</v-expansion-panels>
				</div>
			</div>
		</app-card>
	</div>
</template>

<script>
import AppCard from "../../../../BaseComponents/AppCard";
import SendButton from "../../../../BaseComponents/SendButton";
import GoBackButton from "../../../../BaseComponents/GoBackButton";
import DepositOptional from "./DepositOptional";
import DepositProp from "./DepositProp";
import CreateDepositPeriod from "./CreateDepositPeriod";
import DepositDocuments from "./DepositDocuments";
import DepositReference from "@/views/Admin/PrivateClients/Deposits/Deposit/components/DepositReference"
import { ChevronDownIcon, PlusCircleIcon, Trash2Icon } from "vue-feather-icons";

export default {
	name: "DepositForm",
	props: {
		TYPE: {
			type: String,
			default: ""
		}
	},
	components: {
		AppCard,
		DepositOptional,
		DepositProp,
		CreateDepositPeriod,
		DepositDocuments,
		SendButton,
		GoBackButton,
		DepositReference,
		ChevronDownIcon,
		PlusCircleIcon,
		Trash2Icon
	},
	data() {
		return {
			panel: [0]
		};
	},
	mounted() {
		if (this.$route.params.id) {
			this.$store.state.CREATED_DEPOSIT_ID = +this.$route.params.id;
		}
	}
};
</script>

<style></style>
