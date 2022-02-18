<template>
	<div class="cards-view">
		<app-layout-scope-renderless
			api-url="plastic_card/application/action"
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
									v-model="filters.card"
									:items="getPlasticCardList"
									:item-text="
											$i18n.locale === 'uz' ? 'name_uz' :
											$i18n.locale === 'ru' ? 'name_ru' :
											'name_en'
										"
									item-value="id"
									outlined
									hide-details
									clearable
									:placeholder="$t('LastCorrections.filter_by_card')">
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

					<app-card
						:title="$t('Dashboard.sidebar.card_applies') + ' (' + count + ')'"
						class="mb-13"
					>
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
										v-for="item in list"
										:key="item.id"
										class="transition-fast-out-slow-in"
									>
										<td class="admin-table-td" width="100">
											<h5 class="font-600">№ {{ item.id }}</h5>
											<span class="text-small font-600 text-secondary-dark">ID</span>
										</td>

										<td class="admin-table-td" width="300">
											<h5 class="font-600">{{ item.full_name }}</h5>
											<span class="text-small font-600 text-secondary-dark">{{ $t("Dashboard.fio") }}</span>
										</td>

										<td class="admin-table-td" width="250">
											<h5 class="font-600">
												<template v-if="item.individual_design">
													<template v-if="$i18n.locale === 'uz'">Individual dizayndagi karta</template>
													<template v-if="$i18n.locale === 'ru'">Карта индивидуального дизайна</template>
													<template v-if="$i18n.locale === 'en'">Individual design card</template>
												</template>
												<template v-else>
													<template v-if="$i18n.locale === 'uz'">Oddiy karta</template>
													<template v-if="$i18n.locale === 'ru'">Простая карта</template>
													<template v-if="$i18n.locale === 'en'">Simple card</template>
												</template>
											</h5>
											<span class="text-small font-600 text-secondary-dark">Karta</span>
										</td>

										<td class="admin-table-td" width="250">
											<template v-if="item.status">
												<v-chip
													:color="item.is_paid ? 'primary' : 'danger'"
													text-color="white"
													small
													class="mb-1 mr-2 text-capitalize"
												>
													<template v-if="item.is_paid">
														<template v-if="$i18n.locale === 'uz'">To'langan</template>
														<template v-if="$i18n.locale === 'ru'">Оплачено</template>
														<template v-if="$i18n.locale === 'en'">Paid</template>
													</template>
													<template v-else>
														<template v-if="$i18n.locale === 'uz'">To'lanmagan</template>
														<template v-if="$i18n.locale === 'ru'">Не оплачено</template>
														<template v-if="$i18n.locale === 'en'">Not paid</template>
													</template>
												</v-chip>
											</template>
											<span class="text-small font-600 text-secondary-dark d-block">
												<template v-if="$i18n.locale === 'uz'">Karta uchun to'lov</template>
												<template v-if="$i18n.locale === 'ru'">Оплата за карту</template>
												<template v-if="$i18n.locale === 'en'">Payment for the card</template>
											</span>
										</td>

										<td class="admin-table-td">
											<template v-if="item.filial">
												<I18nVue
													:uz="item.filial.name_uz"
													:ru="item.filial.name_ru"
													:en="item.filial.name_en"
													classes="text--h5 d-block font-600"
												/>
											</template>
											<span class="text-small font-600 text-secondary-dark">{{ $t("Dashboard.branches") }}</span>
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
											<span class="text-small font-600 text-secondary-dark d-block">{{ $t("Dashboard.status")}}</span>
										</td>

										<td class="admin-table-td" width="200">
											<span class="text--h5 d-block font-600">
												{{ item.created_date | filterDateAndTimeHour }}
												<span class="text-small font-600 text-secondary-dark d-block">Yaratildi</span>
											</span>
										</td>

										<td class="admin-table-td" width="75">
											<v-btn
												:to="{ name: 'PrivateClientsCardsApplicationsRead', params: { id: item.id } }"
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
import AppLayoutScopeRenderless from "../../../BaseComponents/AppLayoutScopeRenderless";
import AppCard from "../../../BaseComponents/AppCard";
import AppLoader from "../../../BaseComponents/AppLoader";
import AppPagination from "../../../BaseComponents/AppPagination";
import AppFilter from "../../../BaseComponents/AppFilter";
import NotFound from "../../../BaseComponents/NotFound";
import I18nVue from "../../../../../I18nVue";
import { EyeIcon, FileTextIcon, ChevronDownIcon } from "vue-feather-icons";

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
		FileTextIcon,
		ChevronDownIcon
	},
	computed: {
		...mapGetters({
			getStatusList: "getStatusList",
			getPlasticCardList: "getPlasticCardList",
			getBranchesList: "getBranchesList"
		})
	},
	created() {
		this.fetchPlasticCardList({ category: 5 })
	},
	methods: {
		...mapActions({
			fetchPlasticCardList: "fetchPlasticCardList",
		}),
	}
};
</script>

<style></style>
