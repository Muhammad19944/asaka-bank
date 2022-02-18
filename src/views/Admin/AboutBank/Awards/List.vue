<template>
	<div class="shareholder-view">
		<app-layout-scope-renderless
			api-url="bank/awards"
		>
			<template slot-scope="{ filters, list, count, loading, getAll, deleteRow, paginate }">
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

					<app-card :title="$t('Dashboard.sidebar.about_bank.awards.text')" class="mb-13">
						<template #add-view>
							<v-btn :to="{ name: 'DashboardAwardsCreate' }" depressed color="primary">
								<div class="d-flex align-center">
									<plus-icon size="1.5x" class="mr-1"/>
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
											:src="item.file && ($http.defaults.baseURL + item.file.url)"
											alt="Card image"
											class="d-block table-image"
										/>
									</td>
									<td class="admin-table-td" width="350">
										<h5 class="font-600">
											<I18nVue
												:uz='item.title_uz'
												:ru='item.title_ru'
												:en='item.title_en'
											/>
										</h5>
										<span class="text-small font-600 text-secondary-dark">{{ $t("Dashboard.sidebar.about_bank.awards.name") }}</span>
									</td>
									<td class="admin-table-td">
										<h5 class="font-600">
											<I18nVue
												:uz='item.description_uz'
												:ru='item.description_ru'
												:en='item.description_en'
											/>
										</h5>
										<span class="text-small font-600 text-secondary-dark">{{ $t("Dashboard.sidebar.about_bank.awards.description") }}</span>
									</td>
									<td class="admin-table-td" width="250">
										<h5 class="font-600">{{ item.modified_date | filterDateAndTimeHour }}</h5>
										<span class="text-small font-600 text-secondary-dark">{{ $t("Dashboard.data") }}</span>
									</td>
									<td class="admin-table-td" width="160">
										<v-btn
											:to="{ name: 'DashboardAwardsRead', params: { id: item.id } }"
											depressed
											icon
											color="info"
										>
											<eye-icon size="1.5x" class="custom-class"/>
										</v-btn>

										<v-btn
											:to="{ name: 'DashboardAwardsUpdate', params: { id: item.id } }"
											depressed
											icon
											color="warning"
											class="mx-2"
										>
											<edit-icon size="1.35x" class="custom-class"/>
										</v-btn>

										<v-btn @click="deleteRow(item.id)" depressed icon color="danger">
											<trash-2-icon size="1.35x" />
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
import AppLayoutScopeRenderless from "../../BaseComponents/AppLayoutScopeRenderless";
import AppFilter from "../../BaseComponents/AppFilter";
import AppCard from "../../BaseComponents/AppCard";
import AppPagination from "../../BaseComponents/AppPagination";
import AppLoader from "../../BaseComponents/AppLoader";
import I18nVue from "../../../../I18nVue";
import NotFound from "../../BaseComponents/NotFound";
import { EyeIcon, EditIcon, Trash2Icon, PlusIcon, ChevronDownIcon } from "vue-feather-icons";

export default {
	name: "List",
	components: {
		AppLayoutScopeRenderless,
		AppFilter,
		AppCard,
		AppPagination,
		AppLoader,
		I18nVue,
		NotFound,
		PlusIcon,
		EyeIcon,
		EditIcon,
		Trash2Icon,
		ChevronDownIcon
	}
};
</script>

<style>

</style>
