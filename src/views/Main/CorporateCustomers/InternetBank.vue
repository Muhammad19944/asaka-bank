<template>
	<div class="mobile-bank">
		<v-container>
			<v-row>
				<v-col md="5">
					<div class="credit-widget pa-7 rounded-lg overflow-hidden mb-8">
						<h3 class="font-600 dark-text mb-2">
							<I18nVue t='CorporateCustomers.CorporateInternetBank.header1'/>
						</h3>

						<h4>
							<I18nVue t='CorporateCustomers.CorporateInternetBank.header12'/>
						</h4>
					</div>

					<div class="credit-widget pa-7 rounded-lg overflow-hidden mb-8">
						<h3 class="font-600 dark-text mb-2">
							<I18nVue t='CorporateCustomers.CorporateInternetBank.header2'/>
						</h3>

						<h4>
							<I18nVue t='CorporateCustomers.CorporateInternetBank.header21'/>
						</h4>
					</div>
				</v-col>

				<v-spacer />

				<v-col md="5">
					<v-responsive :aspect-ratio="1">
						<img src="/images/service_02.png" alt="Card image" class="d-block" />
					</v-responsive>
				</v-col>
			</v-row>
		</v-container>

		<v-container>
			<h1 class="text-extra-large-4 font-700 dark-text mb-2">
				<I18nVue t='CorporateCustomers.CorporateInternetBank.title'/>
			</h1>
			<h3 class="grey-light-2 mb-15">
				<I18nVue t='CorporateCustomers.CorporateInternetBank.title_sub'/>
			</h3>

			<v-row>
				<v-col md='3'>
					<div class='app-card-simple text-center transition-all py-10 px-7 rounded-lg h-100 mx-2'>
						<h1 class='font-300 text-extra-large primary-text'>1</h1>

						<v-divider style='border-color: rgba(var(--border-color), 1)' class='my-10' />

						<h4 class='dark-text'>
							<I18nVue t='CorporateCustomers.CorporateInternetBank.one'/>
						</h4>
					</div>
				</v-col>

				<v-col md='3'>
					<div class='app-card-simple text-center transition-all py-10 px-7 rounded-lg h-100 mx-2'>
						<h1 class='font-300 text-extra-large primary-text'>2</h1>

						<v-divider style='border-color: rgba(var(--border-color), 1)' class='my-10' />

						<h4 class='dark-text'>
							<I18nVue t='CorporateCustomers.CorporateInternetBank.two'/>
						</h4>
					</div>
				</v-col>

				<v-col md='3'>
					<div class='app-card-simple text-center transition-all py-10 px-7 rounded-lg h-100 mx-2'>
						<h1 class='font-300 text-extra-large primary-text'>3</h1>

						<v-divider style='border-color: rgba(var(--border-color), 1)' class='my-10' />

						<h4 class='dark-text'>
							<I18nVue t='CorporateCustomers.CorporateInternetBank.three'/>
						</h4>
					</div>
				</v-col>

				<v-col md='3'>
					<div class='app-card-simple text-center transition-all py-10 px-7 rounded-lg h-100 mx-2'>
						<h1 class='font-300 text-extra-large primary-text'>4</h1>

						<v-divider style='border-color: rgba(var(--border-color), 1)' class='my-10' />

						<h4 class='dark-text'>
							<I18nVue t='CorporateCustomers.CorporateInternetBank.four'/>
						</h4>
					</div>
				</v-col>
			</v-row>
		</v-container>
	</div>
</template>

<script>
import I18nVue from "@/I18nVue";

export default {
	name: "InternetBank",
	components: {
		I18nVue
	}
};
</script>

<style></style>
