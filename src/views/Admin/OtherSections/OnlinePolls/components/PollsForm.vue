<template>
	<div class="category-form-view">
		<app-card>
			<div class="form-wrap d-flex flex-column m-h-100 pa-5 px-6">
				<div class="d-flex align-center mb-8">
					<h4 class="text--primary text-uppercase font-700 mr-4">
						{{ TYPE === "Create" ? $t("Dashboard.add_new") : TYPE === "Update" ? $t("Dashboard.update") : $t("Dashboard.read")
						}}
					</h4>

					<v-divider style="border-color: rgb(var(--border-color), 1)"></v-divider>
				</div>

				<div class="flex-1">
					<div class="app-collapse--advanced mb-10">
						<v-expansion-panels v-model="panel" accordion multiple class="border-all">
						<!-- Polls create -->
							<v-expansion-panel>
								<v-expansion-panel-header class="py-5 font-600 reset-size">
									Polls create
								</v-expansion-panel-header>
								<v-expansion-panel-content>
									<polls-create :TYPE="TYPE" />
								</v-expansion-panel-content>
							</v-expansion-panel>
						<!-- End Polls create -->

							<!-- Polls create -->
							<v-expansion-panel>
								<v-expansion-panel-header class="py-5 font-600 reset-size">
									Poll options create
								</v-expansion-panel-header>
								<v-expansion-panel-content>
									<poll-options-create :TYPE="TYPE" />
								</v-expansion-panel-content>
							</v-expansion-panel>
							<!-- End Polls create -->
						</v-expansion-panels>
					</div>
				</div>
			</div>
		</app-card>
	</div>
</template>

<script>
import PollsCreate from "./PollsCreate";
import PollOptionsCreate from "./PollOptionsCreate";
import AppCard from "../../../BaseComponents/AppCard";
import { ChevronDownIcon } from 'vue-feather-icons'

export default {
	name: "PromotionForm",
	props: {
		TYPE: {
			type: String,
			default: ""
		}
	},
	components: {
		PollsCreate,
		PollOptionsCreate,
		AppCard,
		ChevronDownIcon
	},
	data() {
		return {
			panel: [0]
		}
	}
};
</script>

<style></style>
