<template>
	<div class="bank-shareholders-view">
		<v-container>
			<div class="app-content-view">
				<h4 class="font-600 dark-text mb-3">
					<I18nVue t='AboutBank.bankShareholders.title' />
				</h4>

				<v-simple-table class="app-table app-table__border">
					<template v-slot:default>
						<thead>
						<tr>
							<th>
								<h5 class="font-600 dark-text">№</h5>
							</th>
							<th>
								<h5 class="font-600 dark-text">
									<I18nVue t='AboutBank.bankShareholders.table.th1' />
								</h5>
							</th>
							<th>
								<h5 class="font-600 dark-text">
									<I18nVue t='AboutBank.bankShareholders.table.th2' />
								</h5>
							</th>
							<th>
								<h5 class="font-600 dark-text">
									<I18nVue t='AboutBank.bankShareholders.table.th3' />
								</h5>
							</th>
						</tr>
						</thead>
						<tbody>
						<tr v-for="(item, index) in sortedList" :key="item.id">
							<td width="100" class="py-3">
								<h5>{{ index + 1 }}</h5>
							</td>
							<td width="500" class="py-3">
								<h5>
									<I18nVue :uz="item.title_uz" :ru="item.title_ru" :en="item.title_en" />
								</h5>
							</td>
							<td class="py-3">
								<h5>
									<I18nVue :uz="item.address_uz" :ru="item.address_ru" :en="item.address_en" />
								</h5>
							</td>
							<td width="150" class="py-3">
								<h5>{{ item.share_percent }} %</h5>
							</td>
						</tr>
						</tbody>
					</template>
				</v-simple-table>
			</div>
		</v-container>
	</div>
</template>

<script>
	import I18nVue from "@/I18nVue";

	export default {
		name: "index",
		components: { I18nVue },
		data() {
			return {
				shareholdersList: []
			}
		},
    computed: {
		  sortedList(){
		    let collator = new Intl.Collator("en", { numeric: true, sensitivity: 'base' })

        let sorted = this.shareholdersList.sort((a, b) => collator.compare(b.share_percent, a.share_percent))

        return sorted;
      }
    },
		mounted() {
			this.getShareholdersList();
		},
		methods: {
			getShareholdersList(){
				this.$http.get(`/1/bank/shareholders/`, {
					params: {
						page_size: 50
					}
				})
				.then(({ data }) => {
					this.shareholdersList = data.results
				})
			}
		}
	};
</script>
