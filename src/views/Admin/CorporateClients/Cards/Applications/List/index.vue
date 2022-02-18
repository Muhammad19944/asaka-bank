<template>
    <div class="cards-view">
        <app-filter />

		<app-card :title="$t('Dashboard.sidebar.card_applies')" class="mb-13">
			<app-loader v-if="!isLoaded"/>

			<template v-if="cardApplicationList.length">
				<v-simple-table class="admin-table">
					<tbody>
						<tr
							v-for="item in cardApplicationList"
							:key="item.id"
							class="transition-fast-out-slow-in"
						>
							<td class="admin-table-td" width="350">
								<h5 class="font-600">{{ item.full_name }}</h5>
								<span class="text-small font-600 text-secondary-dark">{{ $t('Dashboard.fio') }}</span>
							</td>
							<td class="admin-table-td" width="300">
								<h5 class="font-600">
									<input
										type="text"
										v-model="item.phone"
										v-mask="'+XXX (XX) XXX XX XX'"
										readonly
										class="outline-transparent"
									/>
								</h5>
								<span class="text-small font-600 text-secondary-dark">{{ $t('Dashboard.phone') }}</span>
							</td>
							<td class="admin-table-td" width="300">
								<template v-if="item.district">
									<h5 class="font-600">{{ item.district.name_uz }}</h5>
								</template>
								<span class="text-small font-600 text-secondary-dark">{{ $t('Dashboard.sidebar.region') }}</span>
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
								<span class="text-small font-600 text-secondary-dark">{{ $t('Dashboard.branches') }}</span>
							</td>
							<td class="admin-table-td" width="300">
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
								<span class="text-small font-600 text-secondary-dark d-block">{{ $t('Dashboard.status') }}</span>
							</td>
							<td class="admin-table-td" width="75">
								<v-btn :to="{ name: 'DashboardCarsApplicationsRead', params: { id: item.id } }" depressed icon
								       color="info">
									<eye-icon size="1.5x" class="custom-class"></eye-icon>
								</v-btn>

	<!--							<v-btn-->
	<!--								:to="{ name: 'DashboardCarsApplicationsUpdate', params: { id: item.id } }"-->
	<!--								depressed-->
	<!--								icon-->
	<!--								color="warning"-->
	<!--								class="mx-2"-->
	<!--							>-->
	<!--								<edit-icon size="1.35x" class="custom-class"></edit-icon>-->
	<!--							</v-btn>-->

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

<script>
import AppCard from '../../../../BaseComponents/AppCard'
import AppLoader from '../../../../BaseComponents/AppLoader'
import AppPagination from '../../../../BaseComponents/AppPagination'
import AppFilter from '../../../../BaseComponents/AppFilter'
import NotFound from "../../../../BaseComponents/NotFound";
import I18nVue from "../../../../../../I18nVue";
import {EyeIcon, EditIcon, Trash2Icon, PlusIcon} from 'vue-feather-icons'

export default {
	name: 'index',
	components: {
		AppCard,
		AppLoader,
		AppPagination,
		AppFilter,
		NotFound,
		I18nVue,
		EyeIcon,
		EditIcon,
		Trash2Icon,
		PlusIcon,
	},
	data() {
		return {
			cardApplicationList: [],
			isLoaded: false
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
			this.$http.get(`/${this.$store.state.auth.COMPANY_ID}/plastic_card/application/action/`, {
				params: {
					page: this.$store.state.FILTER_OPTIONS.page,
					page_size: this.$store.state.FILTER_OPTIONS.page_size
				}
			})
				.then(({data}) => {
					this.cardApplicationList = data.results
					this.$store.state.FILTER_OPTIONS.page_length = Math.floor(data.count / this.$store.state.FILTER_OPTIONS.page_size)
					this.isLoaded = true
				})
		},

		/*
		*
		* */
		paginate(val) {
			this.$store.state.FILTER_OPTIONS.page = val
			this.isLoaded = false

			this.getAll()
		}
	}
}
</script>

<style></style>
