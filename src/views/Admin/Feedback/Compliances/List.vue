<template>
	<div class="category-view">
		<app-filter />

		<app-card title="Апелляции" class="mb-13">

			<app-loader v-if="!isLoaded" />

			<template v-if="appealList.length">
				<v-simple-table class="admin-table">
					<tbody>
					<tr class="transition-fast-out-slow-in" v-for="item in appealList" :key="item.id">
						<td class="admin-table-td" width="400">
							<h5 class="font-600">{{ item.full_name }}</h5>
							<span class="text-small font-600 text-secondary-dark">{{ $t('LastCorrections.name') }}</span>
						</td>
						<td class="admin-table-td" width="400">
							<input
								v-model="item.phone"
								v-mask="'+998 XX XXX XX XX'"
								type="text"
								readonly
								class="text--h5 font-600 outline-transparent"
							/>
							<span class="text-small font-600 text-secondary-dark d-block">{{ $t("Services.OpenCard.phone") }}</span>
						</td>
						<td class="admin-table-td">
							<v-chip
								:color="item.is_completed ? 'primary' : item.is_deleted ? 'danger' : item.is_read ? 'warning' : 'success'"
								text-color="white"
								small
								class="mb-1 mr-2 text-capitalize"
							>
								<template v-if="item.is_completed">
									{{ $t('Dashboard.completed') }}
								</template>

								<template v-else-if="item.is_deleted">
									{{ $t('Dashboard.deleted') }}
								</template>

								<template v-else-if="item.is_read">
									{{ $t('Dashboard.read') }}
								</template>

								<template v-else>
									{{ $t('Dashboard.new') }}
								</template>
							</v-chip>
							<span class="text-small font-600 text-secondary-dark d-block">{{ $t('LastCorrections.status') }}</span>
						</td>
						<td class="admin-table-td" width="350">
							<h5 class="font-600">{{ item.modified_date | filterDateAndTimeHour }}</h5>
							<span class="text-small font-600 text-secondary-dark">{{ $t('LastCorrections.date') }}</span>
						</td>
						<td class="admin-table-td" width="75">
							<v-btn :to="{ name: 'FeedbackComplianceRead', params: { id: item.id } }" depressed icon
							       color="info">
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

<script>
import AppFilter from '../../BaseComponents/AppFilter'
import AppCard from '../../BaseComponents/AppCard'
import AppLoader from '../../BaseComponents/AppLoader'
import AppPagination from '../../BaseComponents/AppPagination'
import NotFound from '../../BaseComponents/NotFound'
import I18nVue from "../../../../I18nVue";
import { PlusIcon, EyeIcon, EditIcon, Trash2Icon } from 'vue-feather-icons'

export default {
	name: 'List',
	components: {
		AppFilter,
		AppCard,
		AppPagination,
		AppLoader,
		NotFound,
		I18nVue,
		PlusIcon,
		EyeIcon,
		EditIcon,
		Trash2Icon,
	},
	data() {
		return {
			isLoaded: false,
			appealList: [],
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
			this.$http.get(`/${this.$store.state.auth.COMPANY_ID}/compliance/action/`).then(({ data }) => {
				this.appealList = data.results
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
				return void 0
			}

			this.$http
				.delete(`/${this.$store.state.auth.COMPANY_ID}/compliance/roles/${id}/`)
				.then(() => {
					this.$toast.success(`O'chirildi`)

					this.getAll()
				})
				.catch(() => {
					this.$toast.error(`O'chirishda xatolik`)
				})
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
