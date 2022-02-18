<template>
	<div class="shareholder-view">
		<app-layout-scope-renderless
			api-url="department"
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

					<app-card
						:title="$t('Dashboard.sidebar.about_bank.structure_division.text')"
						class="mb-13"
					>
						<template #add-view>
							<v-btn :to="{ name: 'StructureDivisionCreate' }" depressed color="primary">
								<div class="d-flex align-center">
									<plus-icon size="1.5x" class="mr-1" />
									<span class="text-transform-reset">{{ $t("Dashboard.add_new") }}</span>
								</div>
							</v-btn>
						</template>

						<app-loader v-if="loading" />

						<template v-if="list.length">
							<v-simple-table class="admin-table">
								<tbody>
								<tr class="transition-fast-out-slow-in" v-for="item in list" :key="item.id">
									<td class="admin-table-td" width="450">
										<h5 class="font-600">
											<I18nVue
												:uz="item.name_uz"
												:ru="item.name_ru"
												:en="item.name_en"
											/>
										</h5>
										<I18nVue classes="text-small font-600 text-secondary-dark" t="Dashboard.AboutBank.name" />
									</td>
									<td class="admin-table-td">
										<template v-for="child in item.members">
											<v-chip
												color="primary"
												text-color="white"
												small
												class="mb-1 text-capitalize mr-2"
											>
												<I18nVue
													:uz="child.full_name_uz"
													:ru="child.full_name_ru"
													:en="child.full_name_en"
												/>
											</v-chip>
										</template>
										<I18nVue classes="text-small font-600 text-secondary-dark d-block"
										         t="Dashboard.AboutBank.members" />
									</td>
									<td class="admin-table-td" width="300">
										<h5 class="font-600">{{ item.modified_date | filterDateAndTimeHour }}</h5>
										<span class="text-small font-600 text-secondary-dark">{{ $t("Dashboard.data") }}</span>
									</td>
									<td class="admin-table-td" width="160">
										<v-btn
											:to="{ name: 'StructureDivisionRead', params: { id: item.id } }"
											depressed
											icon
											color="info"
										>
											<eye-icon size="1.5x" class="custom-class" />
										</v-btn>

										<v-btn
											:to="{ name: 'StructureDivisionUpdate', params: { id: item.id } }"
											depressed
											icon
											color="warning"
											class="mx-2"
										>
											<edit-icon size="1.35x" class="custom-class" />
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
	},
	data() {
		return {
			isLoaded: false,
			structureList: []
		};
	},
	mounted() {
		this.getAll();
	},
	methods: {
		/*
		 *
		 * */
		getAll() {
			this.$http.get(`/${this.$store.state.auth.COMPANY_ID}/department/`, {
				params: {
					page: this.$store.state.FILTER_OPTIONS.page,
					page_size: this.$store.state.FILTER_OPTIONS.page_size
				}
			})
				.then(({ data }) => {
						this.structureList = data.results;
						this.$store.state.FILTER_OPTIONS.page_length = Math.ceil(
							data.count / this.$store.state.FILTER_OPTIONS.page_size
						);

						this.isLoaded = true;
					}
				);
		},

		/*
		 *
		 * */
		deleteRow(id) {
			if (!confirm(this.$t("Dashboard.d"))) {
				return void 0;
			}

			this.$http
				.delete(`/${this.$store.state.auth.COMPANY_ID}/department/${id}/`)
				.then(() => {
					this.$toast.success(this.$t("Dashboard.d1"));

					this.getAll();
				})
				.catch(() => {
					this.$toast.error(this.$t("Dashboard.d2"));
				});
		},

		/*
		 *
		 * */
		paginate(val) {
			this.$store.state.FILTER_OPTIONS.page = val;
			this.isLoaded = false;

			this.getAll();
		}
	}
};
</script>
