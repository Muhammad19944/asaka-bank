<template>
	<div class='press-center-view'>
		<div class='view-space pb-10'>
			<v-container>
				<div class='view-title' style='position: relative'>
					<v-row>
						<v-col v-for='i in pressCenterList' lg='3' md='4' sm="6">
								<router-link
									v-if='!i.link'
									:to="{ name: 'NewsShow', params: { id: i.id } }"
									class='app-card border-all d-flex flex-column text-decoration-none rounded overflow-hidden h-100'
								>
									<div class='app-card-header'>
										<v-responsive :aspect-ratio='3 / 2'>
											<div class='card-header-img p-absolute w-100 h-100 d-flex pa-7'>
												<img src='/images/logo.svg' alt='App logo'
												     class='ma-auto transition-all' />
											</div>
										</v-responsive>
									</div>
									<div class='app-card-body pa-6 flex-1 d-flex flex-column'>
										<div class='card-body-meta d-flex mb-5'>
											<div class='card-date mr-6'>
												<h2 class='text-center mb-1'>
													{{ i.date_added | filterOnlyDate }}
												</h2>
												<span class="text-capitalize">
	                                               {{ i.date_added | filterOnlyMonth }}
												</span>
											</div>

											<div class='card-text main-grey'>
												<h5 class='line-truncate'>
													<I18nVue :uz='i.title_uz' :ru='i.title_ru' :en='i.title_en' />
												</h5>
											</div>
										</div>
										<div class='card-anchor d-flex align-center mt-auto'>
											<h4 class='font-600 mr-4'>
												<I18nVue t='more' />
											</h4>
											<div
												class='card-anchor-circle d-flex align-center justify-center transition-all'>
												<chevron-right-icon size='1.2x' class='primary-text transition-all' />
											</div>
										</div>
									</div>
								</router-link>
						</v-col>
					</v-row>
				</div>
			</v-container>
		</div>
	</div>
</template>

<script>
	import { ChevronRightIcon } from 'vue-feather-icons'
	import I18nVue from '@/I18nVue'
	export default {
		name: 'NewsForm',
		components: { I18nVue, ChevronRightIcon },
		props: {
			_id: {
				type: [String, Number]
			}
		},
		data() {
			return {
				pressCenterList: [],
				pressCenterCategoryList: []
			}
		},
		mounted() {
			this.getCategoryHandler();
		},
		methods: {
			getCategoryHandler() {
				this.$http.get(`/1/news/`, {
					params: {
						category: this._id
					}
				})
				.then(({data}) => {
					this.pressCenterList = data.results
				})
			}
		}
	}
</script>

<style scoped>

</style>
