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
									@change="filterByUrl"
									v-model="filters.filterByUrl"
									:items="$store.state.USER_APPLICATIONS_TYPE"
									:item-text="
										$i18n.locale === 'uz' ? 'title_uz' :
										$i18n.locale === 'ru' ? 'title_ru' :
										'title_en'
									"
									return-object
									outlined
									hide-details
									clearable
									:placeholder="$t('LastCorrections.myApplications')">
									<template v-slot:append>
										<chevron-down-icon size="1.2x" class="mt-1"/>
									</template>
								</v-select>
							</div>
						</v-col>
					</app-filter>

					<app-card :title="$t('Dashboard.sidebar.list_of_loans') + ' (' + count + ')'" class="mb-13">
						<template #add-view>
							<v-btn :to="{ name: 'AdminUserApplicationsCreate' }" depressed color="primary">
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
									<tr
										class="transition-fast-out-slow-in"
										v-for="item in list"
										:key="item.id"
									>
										<td class="admin-table-td" width="300">
											<template v-if="filters.filterByUrl.block === 0">
												<template v-if="item.deposit">
													<h5 class="font-600">
														<I18nVue
															:uz="item.deposit.title_uz"
															:ru="item.deposit.title_ru"
															:en="item.deposit.title_en"
														/>
													</h5>
												</template>
												<template v-else>
													<h5 class="font-600">{{ $t('LastCorrections.notSelected') }}</h5>
												</template>

												<span class="text-small font-600 text-secondary-dark d-block">{{ $t("LastCorrections.depositName") }}</span>
											</template>

											<template v-if="filters.filterByUrl.block === 1">
												<template v-if="item.debit_card">
													<h5 class="font-600">
														<I18nVue
															:uz="item.debit_card.name_uz"
															:ru="item.debit_card.name_ru"
															:en="item.debit_card.name_en"
														/>
													</h5>
												</template>
												<template v-else>
													<h5 class="font-600">{{ $t('LastCorrections.notSelected') }}</h5>
												</template>

												<span class="text-small font-600 text-secondary-dark d-block">{{ $t("Dashboard.cards.card_name") }}</span>
											</template>

											<template v-if="filters.filterByUrl.block === 2">
												<template v-if="item.credit">
													<h5 class="font-600">
														<I18nVue
															:uz="item.credit.title_uz"
															:ru="item.credit.title_ru"
															:en="item.credit.title_en"
														/>
													</h5>
												</template>
												<template v-else>
													<h5 class="font-600">{{ $t('LastCorrections.notSelected') }}</h5>
												</template>

												<span class="text-small font-600 text-secondary-dark d-block">{{ $t("Dashboard.credits.name") }}</span>
											</template>
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
										<td class="admin-table-td" width="350">
											<template v-if="item.filial">
												<h5 class="font-600">
													<I18nVue
														:uz="item.filial.name_uz"
														:ru="item.filial.name_ru"
														:en="item.filial.name_en"
													/>
												</h5>
											</template>
											<template v-else>
												<h5 class="font-600">{{ $t('LastCorrections.notSelected') }}</h5>
											</template>
											<span class="text-small font-600 text-secondary-dark d-block">{{ $t("LastCorrections.filial") }}</span>
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
												:to="{name: 'AdminUserApplicationsID', params: { id: item.id, type: item.type }}"
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
			initialPathName: "credit_application/action"
		}
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
