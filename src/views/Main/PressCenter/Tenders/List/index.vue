<template>
	<div class='press-center-view'>
		<div class='view-space pb-10'>
			<v-container>
				<div class='view-title' style='position: relative'>
					<v-row>
						<v-col v-for='tender in tendersList' lg='3' md='4' sm="6">
							<router-link
								:to="{ name: 'TendersDetail', params: { id: tender.id } }"
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
												{{ tender.modified_date | filterOnlyDate }}
											</h2>
											<span class="text-capitalize">
	                                               {{ tender.modified_date | filterOnlyMonth }}
												</span>
										</div>

										<div class='card-text main-grey'>
											<h5 class='line-truncate'>
												<I18nVue :uz='tender.title_uz' :ru='tender.title_ru' :en='tender.title_en' />
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
	name: "index",
	components: {
		I18nVue,
		ChevronRightIcon
	},
	data() {
		return {
			tendersList: []
		}
	},
	mounted() {
		this.getTendersList();
	},
	methods: {
		getTendersList(){
			this.$http.get(`/1/bank/finance_indication_title/`, {
				params: {
					page_size: 600,
					type: "tender"
				}
			})
			.then(({ data }) => {
				this.tendersList = data.results
			})
		}
	}
}
</script>

<style scoped>

</style>
