<template>
	<div class="user-applications-view">
		<app-layout-scope-renderless :api-url="initialPathName">
			<template slot-scope="{ filters, list, count, loading, paginate }">
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

						<v-col md="3">
							<div class="app-form-group no-shadow app-form-group__xs">
								<v-select
									v-model="filters.status"
									:items="getStatusList"
									:item-text="
										$i18n.locale === 'uz' ? 'name_uz' :
										$i18n.locale === 'ru' ? 'name_ru' :
										'name_en'
									"
									item-value="id"
									outlined
									hide-details
									clearable
									:placeholder="$t('LastCorrections.filter_by_status')">
									<template v-slot:append>
										<chevron-down-icon size="1.2x" class="mt-1"/>
									</template>
								</v-select>
							</div>
						</v-col>
					</app-filter>

					<app-card :title="$t('Dashboard.sidebar.list_of_loans') + ' (' + count + ')'" class="mb-13">
						<app-loader v-if="loading" />

						<template v-if="list.length">
							<v-simple-table class="admin-table">
								<tbody>
									<tr
										class="transition-fast-out-slow-in"
										v-for="item in list"
										:key="item.id"
									>
										<td class="admin-table-td" width="300">
											<h5 class="font-600">
												{{ item.full_name }}
											</h5>

											<span class="text-small font-600 text-secondary-dark d-block">F.I.O</span>
										</td>
										<td class="admin-table-td" width="300">
											<template v-if="item.vacancy_title">
												<h5 class="font-600">
													{{ item.vacancy_title }}
												</h5>
											</template>

											<template v-else>
												<h5 class="font-600">{{ $t('LastCorrections.notSelected') }}</h5>
											</template>

											<span class="text-small font-600 text-secondary-dark d-block">Vakansiya nomi</span>
										</td>
										<td class="admin-table-td" width="350">
											<template v-if="item.district">
												<h5 class="font-600">
													<I18nVue
														:uz="item.district.name_uz"
														:ru="item.district.name_ru"
														:en="item.district.name_en"
													/>
												</h5>
											</template>
											<template v-else>
												<h5 class="font-600">{{ $t('LastCorrections.notSelected') }}</h5>
											</template>
											<span class="text-small font-600 text-secondary-dark d-block">{{ $t("LastCorrections.region") }}</span>
										</td>
										<td class="admin-table-td" width="200">
											<template v-if="item.status">
												<v-chip
													color="primary"
													text-color="white"
													small
													class="mb-1 text-capitalize mr-2"
												>
													<I18nVue
														:uz="item.status.name_uz"
														:ru="item.status.name_ru"
														:en="item.status.name_en"
													/>
												</v-chip>
											</template>
											<span class="text-small font-600 text-secondary-dark d-block">{{ $t("LastCorrections.status") }}</span>
										</td>
										<td class="admin-table-td" width="250">
											<h5 class="font-600">{{ item.created_date | filterDateAndTimeHour }}</h5>
											<span class="text-small font-600 text-secondary-dark d-block">
												<I18nVue t='LastCorrections.date'/>
											</span>
										</td>
										<td class="admin-table-td" width="100">
											<v-btn
												:to="{name: 'AdminHRApplicationsRead', params: { id: item.id }}"
												depressed
												icon
												color="info"
											>
												<eye-icon size="1.5x" class="custom-class"></eye-icon>
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
import AppLoader from "../../BaseComponents/AppLoader";
import NotFound from "../../BaseComponents/NotFound";
import AppPagination from "../../BaseComponents/AppPagination";
import { EyeIcon, PlusIcon, ChevronDownIcon } from "vue-feather-icons"
import I18nVue from "../../../../I18nVue";
import { mapGetters } from "vuex";

export default {
	name: "List",
	components: {
		AppLayoutScopeRenderless,
		AppFilter,
		AppCard,
		AppLoader,
		NotFound,
		AppPagination,
		EyeIcon,
		PlusIcon,
		ChevronDownIcon,
		I18nVue
	},
	data() {
		return {
			initialPathName: "job_app/action"
		}
	},
	computed: {
		...mapGetters({
			getStatusList: "getStatusList",
		})
	},
	methods: {
		filterByUrl(value) {
			this.initialPathName = value.value
		}
	}
};
</script>

<style>

</style>
