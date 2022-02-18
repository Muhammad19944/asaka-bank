<template>
	<div class="news-view">
		<div class="d-flex align-center mb-5">
			<h5 class="app-card-title font-600 text-secondary-dark">{{ $t('Dashboard.sidebar.videos.videos_text') }}</h5>

			<v-spacer />

			<v-btn :to="{ name: 'DashboardVideosCreate' }" depressed color="primary">
				<div class="d-flex align-center">
					<plus-icon size="1.5x" class="mr-1"></plus-icon>
					<span class="text-transform-reset">{{ $t('Dashboard.add_new') }}</span>
				</div>
			</v-btn>
		</div>

		<v-row>
			<v-col md="9">
				<v-row>
					<template v-for="item in newsList">
						<v-col md="4" :key="item.id">
							<div
								class="
                                    app-card
                                    border-all
                                    d-flex
                                    flex-column
                                    text-decoration-none
                                    rounded
                                    overflow-hidden
                                    h-100
                                "
							>
								<div class="app-card-header p-relative">
									<v-responsive :aspect-ratio="3 / 2">
										<div class="card-header-img p-absolute w-100 h-100 d-flex pa-7">
											<img src="/images/logo.svg" alt="App logo" class="ma-auto transition-all" />
										</div>
									</v-responsive>

									<div
										class="
                                            app-card-overlay
                                            p-absolute
                                            w-100
                                            h-100
                                            d-flex
                                            align-center
                                            justify-space-around
                                            px-10
                                            transition-ease-in-out
                                        "
									>
										<router-link
											:to="{ name: 'DashboardVideosRead', params: { id: item.id } }"
											type="button"
											class="
                                                rounded-circle
                                                d-flex
                                                align-center
                                                justify-center
                                                border-all
                                                outline-transparent
                                                transition-ease-in-out
                                            "
										>
											<button type="button" class="d-flex align-center justify-center">
												<eye-icon size="1.1x" class="text-white" />
											</button>
										</router-link>

										<router-link
											:to="{ name: 'DashboardVideosUpdate', params: { id: item.id } }"
											type="button"
											class="
                                                rounded-circle
                                                d-flex
                                                align-center
                                                justify-center
                                                border-all
                                                outline-transparent
                                                transition-ease-in-out
                                            "
										>
											<button
												type="button"
												class="
                                                    rounded-circle
                                                    d-flex
                                                    align-center
                                                    justify-center
                                                    transition-ease-in-out
                                                "
											>
												<edit-icon size="1.1x" class="text-white" />
											</button>
										</router-link>

										<button
											@click="deleteRow(item.id)"
											type="button"
											class="
                                                rounded-circle
                                                d-flex
                                                align-center
                                                justify-center
                                                border-all
                                                outline-transparent
                                                transition-ease-in-out
                                            "
										>
											<trash2-icon size="1.1x" class="text-white" />
										</button>
									</div>
								</div>

								<div class="app-card-body pa-6 flex-1 d-flex flex-column bg-white">
									<div class="card-body-meta d-flex mb-5">
										<div class="card-date mr-6">
											<h2 class="text-center mb-1">{{ item.date_added | filterOnlyDate }}</h2>
											<span class="text-capitalize">{{
													item.date_added | filterOnlyMonth
												}}</span>
										</div>

										<div class="card-text main-grey">
											<h5 class="line-truncate">
												<I18nVue :uz='item.title_uz' :ru='item.title_ru' :en='item.title_en' />
											</h5>
										</div>
									</div>
								</div>
							</div>
						</v-col>
					</template>

					<v-col md="12" class="text-center">
						<template v-if="!isAllLoaded">
							<send-button
								@emit:up="loadMore"
								:text="$t('Dashboard.load_more')"
							>
								<download-cloud-icon size="1.3x" class="text-white" />
							</send-button>
						</template>
					</v-col>
				</v-row>
			</v-col>

			<v-col md="3">
				<widget :CATEGORY_ID="11" />
			</v-col>
		</v-row>
	</div>
</template>

<script>
import SendButton from '../../BaseComponents/SendButton'
import Widget from '../components/Widget'
import { PlusIcon, ChevronRightIcon, DownloadCloudIcon, EyeIcon, EditIcon, Trash2Icon } from 'vue-feather-icons'
import I18nVue from '@/I18nVue'

export default {
	name: 'index',
	components: {
		SendButton,
		Widget,
		PlusIcon,
		ChevronRightIcon,
		DownloadCloudIcon,
		EyeIcon,
		EditIcon,
		Trash2Icon,
		I18nVue
	},
	data() {
		return {
			newsList: [],
			pageCounter: 1,
			isAllLoaded: false
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
			this.$http
				.get(`/${this.$store.state.auth.COMPANY_ID}/news/`, {
					params: {
						page: this.pageCounter,
						page_size: this.$store.state.FILTER_OPTIONS.page_size,
						category: 11
					},
				})
				.then(({ data }) => {
					if(!data.next) {
						this.isAllLoaded = true
					}

					data.results.forEach(item => {
						this.newsList.push(item)
					})
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
				.delete(`/${this.$store.state.auth.COMPANY_ID}/news/${id}/`)
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
		loadMore() {
			this.pageCounter = this.pageCounter + 1

			this.getAll()
		}
	},
}
</script>

<style></style>
