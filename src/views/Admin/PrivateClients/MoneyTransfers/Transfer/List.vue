<template>
	<div class="cards-view">
		<app-layout-scope-renderless
			api-url="transfer"
			type="card"
		>
			<template slot-scope="{ filters, list, count, loading, paginate, deleteRow }">
				<div class="d-flex flex-column h-100">
					<app-filter>
						<v-col md="3">
							<div class="app-form-group no-shadow app-form-group__xs">
								<v-text-field
									v-model="filters.search"
									outlined
									hide-details
									clearable
									placeholder="Search..."
								/>
							</div>
						</v-col>
					</app-filter>

					<app-card :title="$t('Dashboard.sidebar.list_of_transfers')" class="mb-13">
						<template #add-view>
							<v-btn :to="{ name: 'DashboardMoneyTransfersCreate' }" depressed color="primary">
								<div class="d-flex align-center">
									<plus-icon size="1.5x" class="mr-1"></plus-icon>
									<span class="text-transform-reset">{{ $t("Dashboard.add_new") }}</span>
								</div>
							</v-btn>
						</template>

						<app-loader v-if="loading" />

						<template v-if="list.length">
							<v-simple-table class="admin-table">
								<tbody>
									<tr class="transition-fast-out-slow-in" v-for="item in list" :key="item.id">
										<td class="admin-table-td" width="110">
											<img
												:src="item.image && $http.defaults.baseURL + item.image.url"
												alt="Card image"
												class="d-block table-image"
											/>
										</td>
										<td class="admin-table-td" width="350">
											<h5 class="font-600">{{ item.title_uz }}</h5>
											<span class="text-small font-600 text-secondary-dark">{{ $t("Dashboard.transfers.name") }}</span>
										</td>
										<td class="admin-table-td" width="250">
											<h5 class="font-600">{{ item.category.title_uz }}</h5>
											<span class="text-small font-600 text-secondary-dark">{{ $t("Dashboard.category") }}</span>
										</td>
										<td class="admin-table-td">
											<h5 class="font-600">{{ item.commission_fee_min }}%</h5>
											<span class="text-small font-600 text-secondary-dark">{{ $t("commission") }} (min)</span>
										</td>
										<td class="admin-table-td">
											<h5 class="font-600">{{ item.commission_fee_max }}%</h5>
											<span class="text-small font-600 text-secondary-dark">{{ $t("commission") }} (max)</span>
										</td>
										<td class="admin-table-td">
											<h5 class="font-600">{{ item.modified_date | filterDateAndTimeHour }}</h5>
											<span class="text-small font-600 text-secondary-dark">{{ $t("LastCorrections.date") }}</span>
										</td>
										<td class="admin-table-td" width="160">
											<v-btn
												:to="{ name: 'DashboardMoneyTransfersRead', params: { id: item.id } }"
												depressed
												icon
												color="info"
											>
												<eye-icon size="1.5x" class="custom-class"></eye-icon>
											</v-btn>

											<v-btn
												:to="{ name: 'DashboardMoneyTransfersUpdate', params: { id: item.id } }"
												depressed
												icon
												color="warning"
												class="mx-2"
											>
												<edit-icon size="1.35x" class="custom-class"></edit-icon>
											</v-btn>

											<v-btn
												@click='deleteRow(item.id)'
												depressed
												icon
												color="danger">
												<trash-2-icon size="1.35x"></trash-2-icon>
											</v-btn>
										</td>
									</tr>
								</tbody>
							</v-simple-table>
						</template>

						<template v-else>
							<not-found />
						</template>
					</app-card>

					<div class="card-footer">
						<app-pagination @emit:up="paginate" />
					</div>
				</div>
			</template>
		</app-layout-scope-renderless>
	</div>
</template>

<script>
import AppLayoutScopeRenderless from "../../../BaseComponents/AppLayoutScopeRenderless";
import AppCard from "../../../BaseComponents/AppCard";
import AppLoader from "../../../BaseComponents/AppLoader";
import NotFound from "../../../BaseComponents/NotFound";
import AppPagination from "../../../BaseComponents/AppPagination";
import AppFilter from "../../../BaseComponents/AppFilter";
import { EyeIcon, EditIcon, Trash2Icon, PlusIcon, ChevronDownIcon } from "vue-feather-icons";

export default {
	name: "List",
	components: {
		AppLayoutScopeRenderless,
		AppCard,
		AppLoader,
		NotFound,
		AppPagination,
		AppFilter,
		EyeIcon,
		EditIcon,
		Trash2Icon,
		PlusIcon,
		ChevronDownIcon
	}
};
</script>

<style></style>
