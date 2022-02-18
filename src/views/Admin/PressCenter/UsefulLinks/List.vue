<template>
	<div class="useful-view">
		<app-filter />

		<app-card :title="$t('Dashboard.sidebar.useful_links.useful_links_text')" class="mb-13">
			<template #add-view>
				<v-btn :to="{ name: 'DashboardUsefulLinksCreate' }" depressed color="primary">
					<div class="d-flex align-center">
						<plus-icon size="1.5x" class="mr-1"></plus-icon>
						<span class="text-transform-reset">{{ $t('Dashboard.add_new') }}</span>
					</div>
				</v-btn>
			</template>

			<app-loader v-if="!isLoaded" />

			<template v-if="usefulList.length">
				<v-simple-table class="admin-table">
					<tbody>
						<tr class="transition-fast-out-slow-in" v-for="item in usefulList" :key="item.id">
							<td class="admin-table-td" width="110">
								<img
									:src="$http.defaults.baseURL + item.image.url"
									alt="Card image"
									class="d-block table-image"
								/>
							</td>
							<td class="admin-table-td" width="300">
								<h5 class="font-600">
									<I18nVue :uz='item.name_uz' :ru='item.name_ru' :en='item.name_en'/>
								</h5>
								<span class="text-small font-600 text-secondary-dark">Havola sarlavhasi</span>
							</td>
							<td class="admin-table-td">
								<h5 class="font-600">{{ item.link }}</h5>
								<span class="text-small font-600 text-secondary-dark">Havola nomi</span>
							</td>
							<td class="admin-table-td" width="300">
								<h5 class="font-600">
									{{ item.modified_date ? item.modified_date : '' | filterDateAndTimeHour }}
								</h5>
								<span class="text-small font-600 text-secondary-dark">Sana</span>
							</td>
							<td class="admin-table-td" width="160">
								<v-btn
									:to="{ name: 'DashboardUsefulLinksRead', params: { id: item.id } }"
									depressed
									icon
									color="info"
								>
									<eye-icon size="1.5x" class="custom-class"></eye-icon>
								</v-btn>

								<v-btn
									:to="{ name: 'DashboardUsefulLinksUpdate', params: { id: item.id } }"
									depressed
									icon
									color="warning"
									class="mx-2"
								>
									<edit-icon size="1.35x" class="custom-class"></edit-icon>
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

<script>
import AppFilter from "../../BaseComponents/AppFilter";
import AppCard from "../../BaseComponents/AppCard";
import AppLoader from "../../BaseComponents/AppLoader";
import NotFound from "../../BaseComponents/NotFound";
import AppPagination from "../../BaseComponents/AppPagination";
import { EyeIcon, EditIcon, Trash2Icon, PlusIcon } from "vue-feather-icons";
import I18nVue from '@/I18nVue'

export default {
	name: "List",
	components: {
		I18nVue,
		AppFilter,
		AppCard,
		AppLoader,
		NotFound,
		AppPagination,
		EyeIcon,
		EditIcon,
		Trash2Icon,
		PlusIcon
	},
	data() {
		return {
			isLoaded: false,
			usefulList: []
		}
	},
	mounted() {
		this.getAll();
	},
	methods: {
		/*
		 *
		 * */
		getAll() {
			this.$http.get(`/${this.$store.state.auth.COMPANY_ID}/link/`).then(({ data }) => {
				this.usefulList = data.results;
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

			this.$http
				.delete(`/${this.$store.state.auth.COMPANY_ID}/link/${id}/`)
				.then(() => {
					this.$toast.success(`O'chirildi`);

					this.getAll();
				})
				.catch(() => {
					this.$toast.error(`O'chirishda xatolik`);
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

<style>

</style>
