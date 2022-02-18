<template>
	<div class="cards-view">
		<app-layout-scope-renderless
			api-url="deposit/application/action"
			type="card"
		>
			<template slot-scope="{ filters, list, count, loading, paginate, exportToExcel }">
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

					<app-card :title="$t('Dashboard.sidebar.card_applies')" class="mb-13">
						<app-loader v-if="loading" />

						<template v-if="list.length">
							<v-simple-table class="admin-table">
								<tbody>
								<tr class="transition-fast-out-slow-in" v-for="item in list" :key="item.id">
									<td class="admin-table-td" width="100">
										<h5 class="font-600">№ {{ item.id }}</h5>
										<span class="text-small font-600 text-secondary-dark">ID</span>
									</td>
									<td class="admin-table-td" width="350">
										<h5 class="font-600">{{ item.full_name }}</h5>
										<span class="text-small font-600 text-secondary-dark">F.I.O</span>
									</td>
									<td class="admin-table-td" width="300">
										<h5 class="font-600">
											<input
												type="text"
												v-model="item.phone"
												v-mask="'+XXX (XX) XXX XX XX'"
												readonly
												class="outline-transparent"
											/>
										</h5>
										<span class="text-small font-600 text-secondary-dark">Nomer</span>
									</td>
									<td class="admin-table-td" width="300">
										<h5 class="font-600">{{ item.district.name_uz }}</h5>
										<span class="text-small font-600 text-secondary-dark">Viloyat</span>
									</td>
									<td class="admin-table-td">
										<h5 class="font-600">{{ item.filial.name_uz }}</h5>
										<span class="text-small font-600 text-secondary-dark">Filial</span>
									</td>
									<td class="admin-table-td" width="300">
										<v-chip color="primary" text-color="white" small class="mb-1">
											{{ item.status && item.status.name_uz }}
										</v-chip>
										<span class="text-small font-600 text-secondary-dark d-block">Status</span>
									</td>
									<td class="admin-table-td" width="75">
										<v-btn
											:to="{ name: 'PrivateClientsDepositsApplicationsRead', params: { id: item.id } }"
											depressed
											icon
											color="info"
										>
											<eye-icon size="1.5x" class="custom-class"></eye-icon>
										</v-btn>

										<!--								<v-btn-->
										<!--									:to="{ name: 'DashboardCreditsApplicationsUpdate', params: { id: 1 } }"-->
										<!--									depressed-->
										<!--									icon-->
										<!--									color="warning"-->
										<!--									class="mx-2"-->
										<!--								>-->
										<!--									<edit-icon size="1.35x" class="custom-class"></edit-icon>-->
										<!--								</v-btn>-->

										<!--								<v-btn depressed icon color="danger">-->
										<!--									<trash-2-icon size="1.35x"></trash-2-icon>-->
										<!--								</v-btn>-->
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
import AppPagination from "../../../BaseComponents/AppPagination";
import AppFilter from "../../../BaseComponents/AppFilter";
import NotFound from "../../../BaseComponents/NotFound";
import { EyeIcon, EditIcon, Trash2Icon, PlusIcon, ChevronDownIcon } from "vue-feather-icons";

export default {
	name: "List",
	components: {
		AppLayoutScopeRenderless,
		AppCard,
		AppLoader,
		AppPagination,
		AppFilter,
		NotFound,
		EyeIcon,
		EditIcon,
		Trash2Icon,
		PlusIcon,
		ChevronDownIcon
	}
};
</script>

<style></style>
