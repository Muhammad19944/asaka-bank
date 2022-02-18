<template>
	<div class="mobile-view">
		<ul id="mobile-menu" class="list-style-none align-center">
			<li>
				<v-menu offset-y>
					<template v-slot:activator="{ on, attrs }">
						<v-btn
							depressed
							color="danger"
							dark
							v-bind="attrs"
							v-on="on"
							id="mobile-menu-button"
							class="text-transform-reset font-600"
						>
							<span class="mr-1">Доп. меню</span>
							<grid-icon size="1.35x" />
						</v-btn>
					</template>
					<v-list>
						<v-list-item class="mobile-menu mobile-menu-1 py-1" link :to="{ name: 'HomePhysicalPersons' }">
							<v-list-item-title class="navigation-link text-12 text-decoration-none text-uppercase dark-grey font-700">
								<I18nVue t="Nav.PrivateClients.title" />
							</v-list-item-title>
						</v-list-item>

						<v-list-item class="mobile-menu mobile-menu-2 py-1" link :to="{ name: 'SmallBusiness' }">
							<v-list-item-title class="navigation-link text-12 text-decoration-none text-uppercase dark-grey font-700">
								<I18nVue t="Nav.SmallBusiness.title" />
							</v-list-item-title>
						</v-list-item>

						<v-list-item class="mobile-menu mobile-menu-3 py-1" link :to="{ name: 'CorporateCustomers' }">
							<v-list-item-title class="navigation-link text-12 text-decoration-none text-uppercase dark-grey font-700">
								<I18nVue t="Nav.CorporateClients.title" />
							</v-list-item-title>
						</v-list-item>

						<v-list-item class="mobile-menu mobile-menu-4 py-1" link :to="{ name: 'AboutBank' }">
							<v-list-item-title class="navigation-link text-12 text-decoration-none text-uppercase dark-grey font-700">
								<I18nVue t="Nav.AboutBank.title" />
							</v-list-item-title>
						</v-list-item>

						<v-list-item class="mobile-menu mobile-menu-5 py-1" link :to="{ name: 'PressCenterClient' }">
							<v-list-item-title class="navigation-link text-12 text-decoration-none text-uppercase dark-grey font-700">
								<I18nVue t="Nav.PressCenter.title" />
							</v-list-item-title>
						</v-list-item>

						<v-list-item class="mobile-menu mobile-menu-6 py-1" link :to="{ name: 'ShareholderAndInvestor' }">
							<v-list-item-title class="navigation-link text-12 text-decoration-none text-uppercase dark-grey font-700">
								<I18nVue t="Nav.ShareholdersInvestors.title" />
							</v-list-item-title>
						</v-list-item>

						<v-list-item class="mobile-menu mobile-menu-7 py-1" link :to="{ name: 'Promo' }">
							<v-list-item-title class="navigation-link text-12 text-decoration-none text-uppercase dark-grey font-700">
								<I18nVue t="Promotions" />
							</v-list-item-title>
						</v-list-item>

						<v-list-item class="mobile-menu mobile-menu-6 py-1" link :to="{ name: 'MobileBank' }">
							<v-list-item-title class="navigation-link text-12 text-decoration-none text-uppercase dark-grey font-700">
								{{ $t("Nav.PrivateClients.Services.tab1") }}
							</v-list-item-title>
						</v-list-item>
					</v-list>
				</v-menu>
			</li>
		</ul>
	</div>
</template>

<script>
import I18nVue from "../../../../I18nVue";
import { GridIcon } from "vue-feather-icons"

export default {
	name: "MobileMenu",
	components: {
		I18nVue,
		GridIcon
	}
};
</script>

<style>

</style>
