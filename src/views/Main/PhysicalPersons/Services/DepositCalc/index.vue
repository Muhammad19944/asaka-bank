<template>
	<div class="credit-calc-view">
		<div class="view-toolbar mt-16">
			<v-container class="py-0">
				<div class="app-tab-header d-flex">
					<div class="tab-header-items text-center mr-7 active" data-item="header">
						<a
							class="
                                navigation-link navigation-link__hover
                                p-relative
                                text--h4
                                py-6
                                font-600
                                d-inline-block
                            "
						>
							<span>
								<I18nVue t='Nav.PrivateClients.Services.tab5' />
							</span>
						</a>
					</div>
					<div class="tab-header-items text-center mr-7" data-item="header">
						<a
							class="
                                navigation-link navigation-link__hover
                                p-relative
                                text--h4
                                py-6
                                font-600
                                d-inline-block
                            "
						>
							<span>
								<I18nVue t='Nav.PrivateClients.Services.tab8' />
							</span>
						</a>
					</div>
				</div>
			</v-container>
		</div>

		<div class="view-toolbar-content py-16">
			<v-container class="py-0">
				<div class="app-tab-content p-relative">
					<div class="tab-content-items active" data-item="content">
						<app-deposit-calc />
					</div>
					<div class="tab-content-items" data-item="content">
						<app-status-application />
					</div>
				</div>
			</v-container>
		</div>
	</div>
</template>

<script>

    import AppDepositCalc from '@/components/AppDepositCalc'
import AppStatusApplication from "@/components/AppStatusApplication";
import { appTab } from "@/utils/frontend";
import I18nVue from '@/I18nVue'

export default {
	name: "index",
	components: {
		AppStatusApplication,
        AppDepositCalc,
		I18nVue
	},
	mounted() {
		const $tabHeaderItems = document.querySelectorAll("[data-item=\"header\"]");
		const $tabContentItems = document.querySelectorAll("[data-item=\"content\"]");

		appTab($tabHeaderItems, $tabContentItems);
	}
};
</script>

<style></style>
