<template>
	<div class="news-form-view">
		<app-card>
			<div class="form-wrap pa-5 px-6">
				<div class="d-flex align-center mb-8">
					<h4 class="text--primary text-uppercase font-700 mr-4">
						{{ TYPE === "Create" ? $t("Dashboard.add_new") : TYPE === "Update" ? $t("Dashboard.update") : $t("Dashboard.read") }}
					</h4>

					<v-divider style="border-color: rgb(var(--border-color), 1)"/>
				</div>

				<div class="app-collapse--advanced mb-10">
					<v-expansion-panels v-model="panel" accordion multiple class="border-all">
						<!-- Add staff -->
						<v-expansion-panel>
							<v-expansion-panel-header class="py-5 font-600 reset-size">
								<I18nVue classes="font-700 text-small" t="Dashboard.AboutBank.add" />
							</v-expansion-panel-header>
							<v-expansion-panel-content>
								<add-staff :TYPE="TYPE" />
							</v-expansion-panel-content>
						</v-expansion-panel>
						<!-- End Add staff -->

						<!-- Staff biography -->
						<v-expansion-panel>
							<v-expansion-panel-header class="py-5 font-600 reset-size">
								<I18nVue classes="font-700 text-small" t="Dashboard.AboutBank.bio" />
							</v-expansion-panel-header>
							<v-expansion-panel-content>
								<staff-biography :TYPE="TYPE" />
							</v-expansion-panel-content>
						</v-expansion-panel>
						<!-- End Staff biography -->
					</v-expansion-panels>
				</div>
			</div>
		</app-card>
	</div>
</template>

<script>
import AppCard from "../../../BaseComponents/AppCard";
import AddStaff from "./AddStaff";
import StaffBiography from "./StaffBiography";
import SendButton from "../../../BaseComponents/SendButton";
import FileUpload from "../../../BaseComponents/FileUpload";
import GoBackButton from "../../../BaseComponents/GoBackButton";
import { ChevronDownIcon } from "vue-feather-icons";
import I18nVue from "../../../../../I18nVue";

export default {
	name: "ShareholderForm",
	props: {
		TYPE: {
			type: String,
			default: ""
		}
	},
	components: {
		I18nVue,
		AppCard,
		AddStaff,
		StaffBiography,
		SendButton,
		FileUpload,
		GoBackButton,
		ChevronDownIcon
	},
	data() {
		return {
			panel: [0]
		};
	},
	mounted() {
		if (this.$route.params.id) {
			this.$store.state.CREATED_STAFF_ID = +this.$route.params.id;
		}
	}
};
</script>