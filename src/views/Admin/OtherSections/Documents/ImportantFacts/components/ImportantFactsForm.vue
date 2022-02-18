<template>
	<div class="documents-form-view">
		<app-card>
			<div class="form-wrap pa-5 px-6 d-flex flex-column m-h-100">
				<div class="d-flex align-center mb-8">
					<h4 class="text--primary text-uppercase font-700 mr-4">
						{{ TYPE === "Create" ? $t("Dashboard.add_new") : TYPE === "Update" ? $t("Dashboard.update") : $t("Dashboard.read") }}
					</h4>

					<v-divider style="border-color: rgb(var(--border-color), 1)"></v-divider>
				</div>

				<div class="app-collapse--advanced mb-10">
					<v-expansion-panels v-model="panel" accordion multiple class="border-all">
						<!-- DOCUMENT YEARS -->
						<v-expansion-panel>
							<v-expansion-panel-header class="py-5 font-600 reset-size">
								YILLAR
							</v-expansion-panel-header>
							<v-expansion-panel-content>
								<documents-optional :TYPE="TYPE" />
							</v-expansion-panel-content>
						</v-expansion-panel>
						<!-- END DOCUMENT YEARS -->

						<!-- DOCUMENT FILES -->
						<v-expansion-panel>
							<v-expansion-panel-header class="py-5 font-600 reset-size">
								HUJJATLAR
							</v-expansion-panel-header>
							<v-expansion-panel-content>
								<documents-files :TYPE="TYPE" />
							</v-expansion-panel-content>
						</v-expansion-panel>
						<!-- END DOCUMENT FILES -->
					</v-expansion-panels>
				</div>
			</div>
		</app-card>
	</div>
</template>

<script>
import AppCard from "../../../../BaseComponents/AppCard";
import DocumentsOptional from './DocumentsOptional'
import DocumentsFiles from './DocumentsFiles'

export default {
	name: "AnnualDocumentsForm",
	props: {
		TYPE: {
			type: String,
			default: ""
		}
	},
	components: {
		AppCard,
		DocumentsOptional,
		DocumentsFiles
	},
	data() {
		return {
			panel: [0]
		};
	}
};
</script>

<style></style>
