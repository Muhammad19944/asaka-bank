<template>
	<div class="cards-view">
		<app-filter />

		<app-card :title="$t('Dashboard.sidebar.list_of_loans')" class="mb-13">
			<!-- VAQTINCHALIK ISHLAMAYDI BO'LIM ISHLAMAYDI (NOT READY YET) -->

			<app-loader v-if="!isLoaded" />

			<template v-if="creditApplicationList.length">
				<v-simple-table class="admin-table">
					<tbody>
					<tr
						class="transition-fast-out-slow-in"
						v-for="(item, index) in creditApplicationList"
						:key="index"
					>
						<td class="admin-table-td" width="350">
							<h5 class="font-600">Odinayev Muhammad</h5>
							<span class="text-small font-600 text-secondary-dark">F.I.O</span>
						</td>
						<td class="admin-table-td" width="250">
							<h5 class="font-600">
								<a href="tel: +998 90 945 35 35" class="text-decoration-none">+998 90 945 35 35</a>
							</h5>
							<span class="text-small font-600 text-secondary-dark">Nomer</span>
						</td>
						<td class="admin-table-td" width="300">
							<h5 class="font-600">example@gmail.com</h5>
							<span class="text-small font-600 text-secondary-dark">E-mail</span>
						</td>
						<td class="admin-table-td" width="300">
							<h5 class="font-600">Surxondaryo</h5>
							<span class="text-small font-600 text-secondary-dark">Viloyat</span>
						</td>
						<td class="admin-table-td">
							<h5 class="font-600">test-filial</h5>
							<span class="text-small font-600 text-secondary-dark">Filial</span>
						</td>
						<td class="admin-table-td" width="160">
							<v-btn
								:to="{ name: 'DashboardCreditsApplicationsRead', params: { id: 1 } }"
								depressed
								icon
								color="info"
							>
								<eye-icon size="1.5x" class="custom-class"></eye-icon>
							</v-btn>

							<v-btn
								:to="{ name: 'DashboardCreditsApplicationsUpdate', params: { id: 1 } }"
								depressed
								icon
								color="warning"
								class="mx-2"
							>
								<edit-icon size="1.35x" class="custom-class"></edit-icon>
							</v-btn>

							<v-btn depressed icon color="danger">
								<trash-2-icon size="1.35x"></trash-2-icon>
							</v-btn>
						</td>
					</tr>
					</tbody>
				</v-simple-table>
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
import { EyeIcon, EditIcon, Trash2Icon, PlusIcon } from "vue-feather-icons";

export default {
	name: "index",
	components: {
		AppCard,
		AppLoader,
		AppPagination,
		AppFilter,
		EyeIcon,
		EditIcon,
		Trash2Icon,
		PlusIcon
	},
	data() {
		return {
			creditApplicationList: [],
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
