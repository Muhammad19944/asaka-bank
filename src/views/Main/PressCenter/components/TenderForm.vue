<template>
	<div class='press-center-view mb-16'>
		<div class='view-space'>
			<v-container>
				<div class='view-title' style='position: relative'>
					<v-row>
						<v-col v-for='i in pressCenterList' lg='3' md='4' sm="6">
							<a :href="i.link" target="_blank" rel="noopener noreferrer"
							   class="d-flex flex-column align-center justify-center text-center text-decoration-none">
									<v-responsive
										aspect-ratio='3/2'
									>
										<img :src="$http.defaults.baseURL + i.image.url" :alt="i.image.name">
									</v-responsive>

								<I18nVue classes="text-center mt-5 text--h1 font-300 mt-2 mb-8" :uz="i.name_uz" :ru="i.name_ru"
								         :en="i.name_en" />
							</a>
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
		name: 'TenderForm',
		components: { I18nVue, ChevronRightIcon },
		data() {
			return {
				pressCenterList: [],
				pressCenterCategoryList: []
			}
		},
		mounted() {
			this.getCategoryHandler()
		},
		methods: {
			getCategoryHandler() {
				this.$http.get(`/1/link/`)
					.then(({data}) => {
						this.pressCenterList = data.results
					})
			}
		}
	}
</script>

<style scoped>

.text--h1{
	font-size: 22px;
}

</style>
