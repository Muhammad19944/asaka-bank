<template>
	<div class='branches-view'>
		<app-filter />

		<app-card :title="$t('Dashboard.sidebar.list_of_branches')" class='mb-13'>
			<template #add-view>
				<v-btn :to="{ name: 'OtherSectionBranchesCreate' }" depressed color='primary'>
					<div class=
						     'd-flex align-center'>
						<plus-icon size='1.5x' class='mr-1' />
						<span class='text-transform-reset'>{{ $t('Dashboard.add_new') }}</span>
					</div>
				</v-btn>
			</template>

			<app-loader v-if='!isLoaded' />

			<template v-if='filialList.length'>
				<v-simple-table class='admin-table'>
					<tbody>
					<tr class='transition-fast-out-slow-in' v-for='item in filialList' :key='item.id'>
						<td class='admin-table-td' width='250'>
							<h5 class='font-600'>
								<I18nVue :uz='item.name_uz' :ru='item.name_ru' :en='item.name_en' />
							</h5>
							<I18nVue t='Dashboard.branch.name'
							         classes='text-small font-600 text-secondary-dark' />
						</td>
						<td class='admin-table-td' width='250'>
							<h5 class='font-600' v-if='item.district'>
								<I18nVue :uz='item.district.name_uz' :ru='item.district.name_ru'
								         :en='item.district.name_en' />
							</h5>
							<I18nVue t='Dashboard.region.name'
							         classes='text-small font-600 text-secondary-dark' />
						</td>
						<td class='admin-table-td' width='350'>
							<h5 class='font-600'>
								<I18nVue :uz='item.address_uz' :ru='item.address_ru' :en='item.address_en' />
							</h5>
							<I18nVue t='Dashboard.branch.address' classes='text-small font-600 text-secondary-dark' />
						</td>
						<td class='admin-table-td'>
							<template v-if='!item.is_for_depository'>
								<v-chip
									color='primary'
									text-color='white'
									small
									class='mb-1 text-capitalize'
									style='letter-spacing: 0.05rem'
								>
									{{ item.type }}
								</v-chip>
							</template>

							<template v-else>
								<v-chip
									color='primary'
									text-color='white'
									small
									class='mb-1 text-capitalize'
									style='letter-spacing: 0.05rem'
								>
									<I18nVue t='Dashboard.Branches.deposit'
									         classes='text-small font-600 text-secondary-dark' />
								</v-chip>
							</template>
							<br>
							<I18nVue t='Dashboard.branch.type' classes='text-small font-600 text-secondary-dark' />
						</td>
						<td class='admin-table-td' width='300'>
							<h5 class='font-600'>
								{{ item.modified_date ? item.modified_date : '' | filterDateAndTimeHour }}
							</h5>
							<I18nVue t='LastCorrections.date' classes='text-small font-600 text-secondary-dark' />
						</td>
						<td class='admin-table-td' width='160'>
							<v-btn
								:to="{ name: 'OtherSectionBranchesRead', params: { id: item.id } }"
								depressed
								icon
								color='info'
							>
								<eye-icon size='1.5x' class='custom-class' />
							</v-btn>

							<v-btn
								:to="{ name: 'OtherSectionBranchesUpdate', params: { id: item.id } }"
								depressed
								icon
								color='warning'
								class='mx-2'
							>
								<edit-icon size='1.35x' class='custom-class' />
							</v-btn>

							<v-btn @click='deleteRow(item.id)' depressed icon color='danger'>
								<trash-2-icon size='1.35x' />
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

		<div class='card-footer'>
			<app-pagination @emit:up='paginate' />
		</div>
	</div>
</template>

<script>
	import AppFilter from '../../BaseComponents/AppFilter'
	import AppCard from '../../BaseComponents/AppCard'
	import AppPagination from '../../BaseComponents/AppPagination'
	import AppLoader from '../../BaseComponents/AppLoader'
	import NotFound from '../../BaseComponents/NotFound'
	import { EyeIcon, EditIcon, Trash2Icon, PlusIcon } from 'vue-feather-icons'
	import I18nVue from '../../../../I18nVue'

	export default {
		name: 'List',
		components: {
			I18nVue,
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
				filialList: []
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
				this.$http.get(`/${this.$store.state.auth.COMPANY_ID}/filial/`, {
					params: {
						page: this.$store.state.FILTER_OPTIONS.page
					}
				})
					.then(({ data }) => {
						this.filialList = data.results
						this.$store.state.FILTER_OPTIONS.page_length = Math.ceil(
							data.count / this.$store.state.FILTER_OPTIONS.page_size
						)

						this.isLoaded = true
					})
			},

			/*
			 *
			 * */
			deleteRow(id) {
				if (!confirm(this.$t('Dashboard.d'))) {
					return void 0
				}

				this.$http
					.delete(`/${this.$store.state.auth.COMPANY_ID}/filial/${id}/`)
					.then(() => {
						this.$toast.success(this.$t('Dashboard.d1'))

						this.getAll()
					})
					.catch(() => {
						this.$toast.error(this.$t('Dashboard.d2'))
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
