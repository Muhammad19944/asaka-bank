<template>
	<div class="credits-view">
		<app-layout-scope-renderless
			api-url="credit_application/action"
			type="credit"
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

						<v-col md="3">
							<div class="app-form-group no-shadow app-form-group__xs">
								<v-select
									v-model="filters.credit"
									:items="getCreditList"
									:item-text="
										$i18n.locale === 'uz' ? 'title_uz' :
										$i18n.locale === 'ru' ? 'title_ru' :
										'title_en'
									"
									item-value="id"
									outlined
									hide-details
									clearable
									:placeholder="$t('Services.OpenCard.TypeOfLoan')">
									<template v-slot:append>
										<chevron-down-icon size="1.2x" class="mt-1"/>
									</template>
								</v-select>
							</div>
						</v-col>

						<v-col md="3">
							<div class="app-form-group no-shadow app-form-group__xs">
								<v-select
									v-model="filters.filial"
									:items="getBranchesList"
									:item-text="
											$i18n.locale === 'uz' ? 'name_uz' :
											$i18n.locale === 'ru' ? 'name_ru' :
											'name_en'
										"
									item-value="id"
									outlined
									hide-details
									clearable
									:placeholder="$t('LastCorrections.filter_by_filial')">
									<template v-slot:append>
										<chevron-down-icon size="1.2x" class="mt-1"/>
									</template>
								</v-select>
							</div>
						</v-col>
					</app-filter>

					<app-card :title="$t('Dashboard.sidebar.list_of_loans') + ' (' + count + ')'" class="mb-13">
						<template #add-view>
							<v-btn @click="exportToExcel" depressed color="primary">
								<div class="d-flex align-center">
									<file-text-icon size="1.35x" class="mr-1"></file-text-icon>
									<span class="text-transform-reset">Export excel</span>
								</div>
							</v-btn>
						</template>

						<app-loader v-if="loading" />

						<template v-if="list.length">
							<v-simple-table class="admin-table">
								<tbody>
								<tr
									class="transition-fast-out-slow-in"
									v-for="item in list"
									:key="item.id"
								>
									<td class="admin-table-td" width="100">
										<h5 class="font-600">№ {{ item.id }}</h5>
										<span class="text-small font-600 text-secondary-dark">ID</span>
									</td>

									<td class="admin-table-td" width="350">
										<h5 class="font-600">{{ item.full_name }}</h5>
										<span class="text-small font-600 text-secondary-dark">{{ $t("Dashboard.fio") }}</span>
									</td>

									<td class="admin-table-td" width="275">
										<template v-if="item.credit">
											<template v-if="$i18n.locale === 'uz'">
												<h5 class="font-600">{{ item.credit.title_uz }}</h5>
											</template>

											<template v-if="$i18n.locale === 'ru'">
												<h5 class="font-600">{{ item.credit.title_ru }}</h5>
											</template>

											<template v-if="$i18n.locale === 'en'">
												<h5 class="font-600">{{ item.credit.title_en }}</h5>
											</template>
										</template>

										<span class="text-small font-600 text-secondary-dark">{{ $t('Dashboard.credits.name') }}</span>
									</td>

									<td class="admin-table-td" width="275">
										<template v-if="item.district">
											<template v-if="$i18n.locale === 'uz'">
												<h5 class="font-600">{{ item.district.name_uz }}</h5>
											</template>

											<template v-if="$i18n.locale === 'ru'">
												<h5 class="font-600">{{ item.district.name_ru }}</h5>
											</template>

											<template v-if="$i18n.locale === 'en'">
												<h5 class="font-600">{{ item.district.name_en }}</h5>
											</template>
										</template>
										<span class="text-small font-600 text-secondary-dark">{{ $t('Dashboard.branches') }}</span>
									</td>

									<td class="admin-table-td">
										<template v-if="item.filial">
											<template v-if="$i18n.locale === 'uz'">
												<h5 class="font-600">{{ item.filial.name_uz }}</h5>
											</template>

											<template v-if="$i18n.locale === 'ru'">
												<h5 class="font-600">{{ item.filial.name_ru }}</h5>
											</template>

											<template v-if="$i18n.locale === 'en'">
												<h5 class="font-600">{{ item.filial.name_en }}</h5>
											</template>
										</template>
										<span class="text-small font-600 text-secondary-dark">{{ $t('Services.OpenCard.filial') }}</span>
									</td>

									<td class="admin-table-td" width="150">
										<template v-if="item.status">
											<v-chip
												:color="item.status.name_en === 'New' ? 'primary' : item.status.name_en === 'Rejected' ? 'danger' : item.status.name_en === 'In progress' ? 'warning' : 'success'"
												text-color="white"
												small
												class="mb-1 mr-2 text-capitalize"
											>
												<I18nVue :uz="item.status.name_uz" :ru="item.status.name_ru" :en="item.status.name_en"/>
											</v-chip>
										</template>

										<span class="text-small font-600 text-secondary-dark d-block">Status</span>
									</td>

									<td class="admin-table-td" width="90">
										<v-btn
											:to="{ name: 'PrivateClientsCreditApplicationsRead', params: { id: item.id } }"
											depressed
											icon
											color="info"
										>
											<eye-icon size="1.5x" class="custom-class"></eye-icon>
										</v-btn>

										<!--								<v-btn-->
										<!--									:to="{ name: 'PrivateClientsCreditApplicationsUpdate', params: { id: item.id } }"-->
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
import I18nVue from "../../../../../I18nVue";
import { EyeIcon, EditIcon, Trash2Icon, FileTextIcon, ChevronDownIcon } from "vue-feather-icons";
import { mapActions, mapGetters } from "vuex";

export default {
	name: "List",
	components: {
		AppLayoutScopeRenderless,
		AppCard,
		AppLoader,
		AppPagination,
		AppFilter,
		NotFound,
		I18nVue,
		EyeIcon,
		EditIcon,
		Trash2Icon,
		FileTextIcon,
		ChevronDownIcon
	},
	computed: {
		...mapGetters({
			getStatusList: "getStatusList",
			getCreditList: "getCreditList",
			getBranchesList: "getBranchesList"
		})
	},
	created() {
		this.fetchCreditsList({ category: 5 })
	},
	methods: {
		...mapActions({
			fetchCreditsList: "fetchCreditsList",
		}),
	}
};
</script>

<style></style>
