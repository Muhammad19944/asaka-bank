<template>
	<div class="deposit-boxes-view">
		<app-filter />

		<app-card :title="$t('Dashboard.sidebar.list_of_saving_boxes')" class="mb-13">
			<template #add-view>
				<v-btn :to="{ name: 'DashboardDepositsBoxesCreate' }" depressed color="primary">
					<div class="d-flex align-center">
						<plus-icon size="1.5x" class="mr-1"></plus-icon>
						<span class="text-transform-reset">{{ $t("Dashboard.add_new") }}</span>
					</div>
				</v-btn>
			</template>

			<app-loader v-if="!isLoaded" />

			<template v-if="depositBoxesList.length">
				<v-simple-table class="admin-table">
					<tbody>
					<tr class="transition-fast-out-slow-in" v-for="item in depositBoxesList" :key="item.id">
						<td class="admin-table-td" width="350">
							<h5 class="font-600">{{ item.name_uz }}</h5>
							<span class="text-small font-600 text-secondary-dark">{{ $t("LastCorrections.depositName") }}</span>
						</td>
						<td class="admin-table-td" width="250">
							<h5 class="font-600">{{ item.box_size }}</h5>
							<span class="text-small font-600 text-secondary-dark">O'lchami</span>
						</td>
						<td class="admin-table-td" width="250">
							<h5 class="font-600">{{ item.rent_price | filterNumberFormatThousands }}</h5>
							<span class="text-small font-600 text-secondary-dark">Ijara narxi</span>
						</td>
						<td class="admin-table-td">
							<h5 class="font-600">{{ item.period[0].toUpperCase() + item.period.slice(1) }}</h5>
							<span class="text-small font-600 text-secondary-dark">Ijara vaqti</span>
						</td>
						<td class="admin-table-td">
							<h5 class="font-600">{{ item.modified_date | filterDateAndTimeHour }}</h5>
							<span class="text-small font-600 text-secondary-dark">Sana</span>
						</td>
						<td class="admin-table-td" width="160">
							<v-btn
								:to="{ name: 'DashboardDepositsBoxesRead', params: { id: item.id } }"
								depressed
								icon
								color="info"
							>
								<eye-icon size="1.5x" class="custom-class"></eye-icon>
							</v-btn>

							<v-btn
								:to="{ name: 'DashboardDepositsBoxesUpdate', params: { id: item.id } }"
								depressed
								icon
								color="warning"
								class="mx-2"
							>
								<edit-icon size="1.35x" class="custom-class"></edit-icon>
							</v-btn>

							<v-btn @click="deleteRow(item.id)" depressed icon color="danger">
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

<script>
import AppCard from "../../../BaseComponents/AppCard";
import AppLoader from "../../../BaseComponents/AppLoader";
import AppPagination from "../../../BaseComponents/AppPagination";
import AppFilter from "../../../BaseComponents/AppFilter";
import NotFound from "../../../BaseComponents/NotFound";
import { EyeIcon, EditIcon, Trash2Icon, PlusIcon } from "vue-feather-icons";

export default {
	name: "List",
	components: {
		AppCard,
		AppLoader,
		AppPagination,
		AppFilter,
		NotFound,
		EyeIcon,
		EditIcon,
		Trash2Icon,
		PlusIcon
	},
	data() {
		return {
			depositBoxesList: [],
			isLoaded: false
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
			this.$http
				.get(`/${this.$store.state.auth.COMPANY_ID}/depository_box_type/`, {
					params: {
						page: this.$store.state.FILTER_OPTIONS.page,
						page_size: this.$store.state.FILTER_OPTIONS.page_size
					}
				})
				.then(({ data }) => {
					this.depositBoxesList = data.results;
					this.$store.state.FILTER_OPTIONS.page_length = Math.floor(
						data.count / this.$store.state.FILTER_OPTIONS.page_size
					);

					this.isLoaded = true;
				});
		},

		/*
		 *
		 * */
		deleteRow(id) {
			if (!confirm(`O'chirishni xoxlaysizmi ?`)) {
				return void 0;
			}

			this.$http.delete(`/${this.$store.state.auth.COMPANY_ID}/depository_box_type/${id}/`).then((res) => {
				this.$toast.success(`Omonat o'chirildi`);

				this.getAll();
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

<style></style>
