<template>
	<div class="user-applications-view">
		<div class="d-flex flex-column h-100">
			<app-card :title="$t('Dashboard.sidebar.card_applies')">
				<template>
					<v-simple-table class="admin-table pa-4">
						<tbody>
						<tr
							v-for="item in tenderDetailsList"
							:key="item.id"
							class="transition-fast-out-slow-in"
						>
							<td class="admin-table-td" width="550">
								<h5 class="font-600">
									{{ item.organization_name }}
								</h5>

								<span class="text-small font-600 text-secondary-dark d-block">{{ $t('LastCorrections.org_name') }}</span>
							</td>
							<td class="admin-table-td" width="400">
								<a
									v-for="document in item.documents"
									:key="document.id"
									:href="$http.defaults.baseURL + document.url"
									target="_blank"
								>
									<v-chip
										color="primary"
										text-color="white"
										small
										class="mb-1 text-capitalize mr-2 pointer"
									>
										<file-text-icon style="padding: 3px;"/>
									</v-chip>
								</a>
								<span class="text-small font-600 text-secondary-dark d-block">
									<I18nVue t='documents'/>
								</span>
							</td>
							<td class="admin-table-td" width="250">
								<h5 class="font-600">
									{{ item.created_date | filterDateAndTimeHour }}
								</h5>
								<span class="text-small font-600 text-secondary-dark d-block">
												<I18nVue t='LastCorrections.date'/>
											</span>
							</td>
						</tr>
						</tbody>
					</v-simple-table>
				</template>
			</app-card>
		</div>
	</div>
</template>

<script>
import AppCard from "@/views/Admin/BaseComponents/AppCard";
import I18nVue from "@/I18nVue";
import { FileTextIcon } from "vue-feather-icons";

export default {
	name: 'Read',
	components: {
		AppCard,
		I18nVue,
		FileTextIcon
	},
	data() {
		return {
			tenderDetailsList: []
		}
	},
	mounted() {
		this.getTenderDetail();
	},
	methods: {
		getTenderDetail() {
			this.$http.get(`/${this.$store.state.auth.COMPANY_ID}/tender_application/`)
			.then(({ data }) => {
				this.tenderDetailsList = data.results
			})
		}
	}
}
</script>

<style></style>
