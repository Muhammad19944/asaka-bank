<template>
	<div class="category-view">
		<app-filter />

		<app-card :title="$t('online_polls')" class="mb-13">
			<template #add-view>
				<v-btn :to="{ name: 'OtherSectionPollsCreate' }" depressed color="primary">
					<div class="d-flex align-center">
						<plus-icon size="1.5x" class="mr-1"></plus-icon>
						<span class="text-transform-reset">{{ $t('Dashboard.add_new') }}</span>
					</div>
				</v-btn>
			</template>

			<app-loader v-if="!isLoaded" />

			<template v-if="pollsList.length">
				<v-simple-table class="admin-table">
					<tbody>
						<tr class="transition-fast-out-slow-in" v-for="item in pollsList" :key="item.id">
							<td class="admin-table-td" width="525">
								<template v-if="$i18n.locale === 'uz'">
									<h5 class="font-600">{{ item.name_uz }}</h5>
								</template>

								<template v-if="$i18n.locale === 'ru'">
									<h5 class="font-600">{{ item.name_ru }}</h5>
								</template>

								<template v-if="$i18n.locale === 'en'">
									<h5 class="font-600">{{ item.name_en }}</h5>
								</template>

								<span class="text-small font-600 text-secondary-dark">Заголовок</span>
							</td>

							<td class="admin-table-td" width="225">
								<v-chip
									:color="item.is_active ? 'primary' : 'danger'"
									text-color="white"
									small
									class="mb-1"
								>
									<template v-if="item.is_active">
										Активный
									</template>

									<template v-else>
										Не активный
									</template>
								</v-chip>
								<span class="text-small font-600 text-secondary-dark d-block">Статус</span>
							</td>

							<td class="admin-table-td" width="250">
								<h5 class="font-600">{{ item.modified_date | filterDateAndTimeHour }}</h5>
								<span class="text-small font-600 text-secondary-dark">Sana</span>
							</td>

							<td class="admin-table-td" width="120">
								<v-btn
									:to="{ name: 'OtherSectionPollsRead', params: { id: item.id } }"
									depressed
									icon
									color="info"
									class="mr-2"
								>
									<eye-icon size="1.5x" class="custom-class"></eye-icon>
								</v-btn>

								<v-btn
									:to="{ name: 'OtherSectionPollsUpdate', params: { id: item.id } }"
									depressed
									icon
									color="deep-orange"
									class="mr-2"
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
import AppFilter from '../../BaseComponents/AppFilter'
import AppCard from '../../BaseComponents/AppCard'
import AppLoader from '../../BaseComponents/AppLoader'
import AppPagination from '../../BaseComponents/AppPagination'
import NotFound from '../../BaseComponents/NotFound'
import { PlusIcon, EyeIcon, EditIcon, Trash2Icon } from 'vue-feather-icons'

export default {
	name: 'List',
	components: {
		AppFilter,
		AppCard,
		AppPagination,
		AppLoader,
		NotFound,
		PlusIcon,
		EyeIcon,
		EditIcon,
		Trash2Icon
	},
	data() {
		return {
			isLoaded: false,
			pollsList: [],
		}
	},
	mounted() {
		this.getAll()
	},
	methods: {
		/*
		 *
		 * */
		getAll() {
			this.$http.get(`/${this.$store.state.auth.COMPANY_ID}/poll/`).then(({ data }) => {
				this.pollsList = data.results
				this.$store.state.FILTER_OPTIONS.page_length = Math.floor(
					data.count / this.$store.state.FILTER_OPTIONS.page_size
				)

				this.isLoaded = true
			})
		},

		/*
		*
		* */
		deleteRow(id) {
			if (!confirm(`O'chirishni xoxlaysizmi ?`)) {
				return void 0;
			}

			this.$http.delete(`/${this.$store.state.auth.COMPANY_ID}/poll/${id}/`).then((res) => {
				this.$toast.success(`So'rovnoma o'chirildi`);

				this.getAll();
			});
		},

		/*
		 *
		 * */
		paginate(val) {
			this.$store.state.FILTER_OPTIONS.page = val
			this.isLoaded = false

			this.getAll()
		},
	},
}
</script>

<style></style>
