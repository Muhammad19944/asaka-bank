<template>
	<v-navigation-drawer
		v-model="drawerSettings.drawer"
		:mini-variant.sync="drawerSettings.mini"
		:permanent="drawerSettings.permanent"
		app
		width="275"
		class="app-drawer"
	>
		<template v-if="getUser">
			<v-list-item class="logo-list-item logo py-3 px-4">
				<router-link to="/" class="drawer-logo d-block text-decoration-none">
					Asaka bank
				</router-link>
			</v-list-item>

			<v-list dense class="content-list-item py-0">
				<template v-for="item in menuPrimaryList">
					<!-- Checking if have child items -->
					<template v-if="item.children">
						<template
							v-if="
								getUser.role_name === 'admin' ||
								item.role.includes(getUser.role_name)
							"
						>
							<v-expansion-panels class="list-item-expand">
								<v-expansion-panel>
									<v-expansion-panel-header expand-icon="" class="pa-0">
										<v-list-item :ripple="false" class="py-2 pl-5">
											<div class="anchor-line-before" />

											<v-list-item-icon class="mr-4">
												<div class="list-icon d-flex align-center" v-html="item.icon" />
											</v-list-item-icon>

											<v-list-item-content>
												<v-list-item-title>{{ item.text }}</v-list-item-title>
											</v-list-item-content>

											<v-list-item-icon class="ml-5 align-center">
												<chevron-down-icon
													style="color: #565360"
													size="1.3x"
													class="transition-ease-in-out"
												></chevron-down-icon>
											</v-list-item-icon>
										</v-list-item>
									</v-expansion-panel-header>

									<v-expansion-panel-content class="mt-1">
										<template v-for="subItem in item.children">
											<template
												v-if="
												getUser.role_name === 'admin' ||
												subItem.role.includes(getUser.role_name)
											"
											>
												<v-list-item
													:key="subItem.url"
													:ripple="false"
													:to="{ name: subItem.url }"
													class="py-2 pl-5"
													link
													active-class="active"
												>
													<div class="anchor-line-before" />

													<v-list-item-icon class="mr-4">
														<div class="d-flex align-center ma-auto">
															<circle-icon size="0.75x" class="primary-text"></circle-icon>
														</div>
													</v-list-item-icon>

													<v-list-item-content>
														<v-list-item-title>{{ subItem.text }}</v-list-item-title>
													</v-list-item-content>
												</v-list-item>
											</template>
										</template>
									</v-expansion-panel-content>
								</v-expansion-panel>
							</v-expansion-panels>
						</template>
					</template>

					<template v-else-if="!item.hasOwnProperty('prefixText')">
						<template
							v-if="
								getUser.role_name === 'admin' ||
								item.role.includes(getUser.role_name)
							"
						>
							<v-list-item :key="item.url" :ripple="false" :to="{ name: item.url }" class="py-2 pl-5" link>
								<div class="anchor-line-before" />
								<v-list-item-icon class="mr-4">
									<div class="list-icon d-flex align-center" v-html="item.icon" />
								</v-list-item-icon>

								<v-list-item-content>
									<v-list-item-title>{{ item.text }}</v-list-item-title>
								</v-list-item-content>
							</v-list-item>
						</template>
					</template>

					<template v-else>
						<template
							v-if="
								getUser.role_name === 'admin' ||
								item.role.includes(getUser.role_name)
							"
						>
							<h6 class="list-item-prefix text-truncate font-600 pl-5 mt-3 mb-2">{{ item.text }}</h6>
						</template>
					</template>
				</template>
			</v-list>
		</template>
	</v-navigation-drawer>
</template>

<script>
import {
	Dashboard,
	CreditCard,
	Percent,
	Dollar,
	Box,
	Refresh,
	Map,
	Bookmark,
	Star,
	File,
	Copy,
	Gift,
	Users,
	Mail,
	Phone,
	Message,
	Category
} from "@/components/Icons/Icons";
import { ChevronDownIcon, CircleIcon } from "vue-feather-icons";
import { mapGetters } from "vuex";

export default {
	name: "Sidebar",
	components: {
		ChevronDownIcon,
		CircleIcon
	},
	data() {
		return {
			drawerSettings: {
				drawer: true,
				mini: false,
				permanent: true,
				temporary: false
			},
			menuPrimaryList: []
		};
	},
	computed: {
		...mapGetters(["getUser"])
	},
	mounted() {
		if (this.$vuetify.breakpoint.thresholds.sm < 965) {
			this.drawerSettings.drawer = false;
			this.drawerSettings.permanent = false;
		}

		this.updateSidebarMenuTranslate();
	},
	beforeUpdate() {
		this.updateSidebarMenuTranslate();
	},
	methods: {
		/*
		*
		* */
		updateSidebarMenuTranslate() {
			this.menuPrimaryList = [
				// =======================================================================================
				{
					text: this.$t("LastCorrections.userCabinet"),
					prefixText: true,
					role: ["client"]
				},

				{
					text: this.$t("LastCorrections.myApplications"),
					url: "AdminUserApplications",
					icon: Mail,
					role: ["client"]
				},

				// ===================================HR====================================================
				{
					text: "HR",
					prefixText: true,
					role: ["hr_manager"]
				},
				{
					text: "Kelgan rezyumelar",
					url: "AdminHRApplications",
					icon: File,
					role: ["hr_manager"]
				},
				// ===================================TENDERLAR===================================================
				{
					text: this.$t("Dashboard.sidebar.tenders.tenders_text"),
					prefixText: true,
					role: ["tender_manager"]
				},
				{
					text: this.$t("Dashboard.sidebar.card_applies"),
					url: "DashboardTendersList",
					icon: File,
					role: ["tender_manager"]
				},
				// ======================================================================================
				{
					text: "Частные клиенты",
					prefixText: true,
					role: ["plastic_card_officer", "card_deposit_credit_manager", "head_office_deposit_officer", "head_office_credit_officer", "head_office_plastic_card_officer"]
				},
				{
					text: this.$t("Dashboard.sidebar.cards"),
					icon: CreditCard,
					role: ["plastic_card_officer", "card_deposit_credit_manager", "head_office_plastic_card_officer"],
					children: [
						{
							text: this.$t("Dashboard.sidebar.cards_list"),
							url: "PrivateClientsCardsList",
							role: []
						},
						{
							text: this.$t("Dashboard.sidebar.card_applies"),
							url: "PrivateClientsCardsApplicationsList",
							role: ["plastic_card_officer", "card_deposit_credit_manager", "head_office_plastic_card_officer"]
						}
					]
				},
				{
					text: this.$t("Dashboard.sidebar.credit_department"),
					icon: Dollar,
					role: ["credit_officer", "card_deposit_credit_manager", "head_office_credit_officer"],
					children: [
						{
							text: this.$t("Dashboard.sidebar.list_of_loans"),
							url: "PrivateClientsCreditsList",
							role: []
						},
						{
							text: this.$t("Dashboard.sidebar.card_applies"),
							url: "PrivateClientsCreditApplicationsList",
							role: ["credit_officer", "card_deposit_credit_manager", "head_office_credit_officer"]
						}
					]
				},
				{
					text: this.$t("Dashboard.sidebar.deposit_department"),
					icon: Percent,
					role: ["deposit_officer", "card_deposit_credit_manager", "head_office_deposit_officer"],
					children: [
						{
							text: this.$t("Dashboard.sidebar.list_of_deposits"),
							url: "PrivateClientsDepositsList",
							role: []
						},
						{
							text: this.$t("Dashboard.sidebar.card_applies"),
							url: "PrivateClientsDepositsApplicationsList",
							role: ["deposit_officer", "card_deposit_credit_manager", "head_office_deposit_officer"]
						}
					]
				},
				{
					text: this.$t("Dashboard.sidebar.deposit_box_department"),
					icon: Box,
					role: [],
					children: [
						{
							text: this.$t("Dashboard.deposit_box.deposit_box_view"),
							url: "DashboardDepositsBoxView",
							role: []
						},
						{
							text: this.$t("Dashboard.sidebar.list_of_saving_boxes"),
							url: "DashboardDepositsBoxesList",
							role: []
						}
					]
				},
				{
					text: this.$t("Dashboard.sidebar.money_transfer_department"),
					icon: Refresh,
					role: [],
					children: [
						{
							icon: Dashboard,
							text: this.$t("Dashboard.sidebar.list_of_transfers"),
							url: "DashboardMoneyTransfersList",
							role: []
						}
					]
				},

				// =======================================================================================
				{
					text: "Малый бизнес",
					prefixText: true,
					role: []
				},
				{
					text: this.$t("Dashboard.sidebar.cards"),
					icon: CreditCard,
					role: [],
					children: [
						{
							text: this.$t("Dashboard.sidebar.cards_list"),
							url: "AdminSmallBusinessCardsList",
							role: []
						}
						// {
						// 	text: this.$t("Dashboard.sidebar.card_applies"),
						// 	url: "AdminSmallBusinessCarsApplicationsList",
						// 	role: []
						// }
					]
				},
				{
					text: this.$t("Dashboard.sidebar.credit_department"),
					icon: Dollar,
					role: [],
					children: [
						{
							text: this.$t("Dashboard.sidebar.list_of_loans"),
							url: "AdminSmallBusinessCreditsList",
							role: []
						}
						// {
						// 	text: this.$t("Dashboard.sidebar.card_applies"),
						// 	url: "AdminSmallBusinessCarsApplicationsList",
						// 	role: []
						// }
					]
				},
		        {
		            text: this.$t("LastCorrections.financing"),
		            icon: Star,
		            role: [],
		            children: [
		                {
		                    text: this.$t("LastCorrections.financing"),
		                    url: "AdminSmallBusinessFinancingList",
		                    role: []
		                }
		            ]
		        },
				{
					text: this.$t("Dashboard.sidebar.card_applies"),
					icon: File,
					role: [],
					url: "SmallBusinessApplications"
				},

				// =======================================================================================
				{
					text: "Корпоративные клиенты",
					prefixText: true,
					role: []
				},
				{
					text: this.$t("Dashboard.sidebar.cards"),
					icon: CreditCard,
					role: [],
					children: [
						{
							text: this.$t("Dashboard.sidebar.cards_list"),
							url: "AdminCorporateCardsList",
							role: []
						}
						// {
						// 	text: this.$t("Dashboard.sidebar.card_applies"),
						// 	url: "AdminCorporateApplicationsList",
						// 	role: ["plastic_card_officer", "card_deposit_credit_manager"]
						// }
					]
				},
				{
					text: this.$t("Dashboard.sidebar.credit_department"),
					icon: Dollar,
					role: [],
					children: [
						{
							text: this.$t("Dashboard.sidebar.list_of_loans"),
							url: "AdminCorporateCreditsList",
							role: []
						}
						// {
						// 	text: this.$t("Dashboard.sidebar.card_applies"),
						// 	url: "DashboardCreditsApplicationsList",
						// 	role: ["credit_officer", "card_deposit_credit_manager"]
						// }
					]
				},

				// =======================================================================================
				{
					text: "О банке",
					prefixText: true,
					role: []
				},
				{
					text: this.$t("Dashboard.sidebar.about_bank.text"),
					icon: Star,
					role: [],
					children: [
						{
							text: this.$t("Dashboard.sidebar.shareholder"),
							url: "DashboardShareholderList",
							role: []
						},
						{
							text: this.$t("Dashboard.sidebar.about_bank.awards.text"),
							url: "DashboardAwardsList",
							role: []
						},
						{
							text: this.$t("Dashboard.sidebar.about_bank.careers.text"),
							url: "DashboardCareersList",
							role: []
						},
						{
							text: this.$t("Dashboard.sidebar.about_bank.structure.text"),
							url: "DashboardStructureList",
							role: []
						},
						{
							text: this.$t("Dashboard.sidebar.about_bank.structure_division.text"),
							url: "StructureDivisionList",
							role: []
						},
						{
							text: this.$t("Services.OpenCard.oferta"),
							url: "PublicOffersList",
							role: []
						}
					]
				},

				// =======================================================================================
				{
					text: "Пресс-центр",
					prefixText: true,
					role: []
				},
				// {
				// 	text: this.$t('Dashboard.sidebar.main'),
				// 	url: 'NewsDashboard',
				// 	icon: Dashboard,
				// },
				{
					text: this.$t("Dashboard.sidebar.press_center"),
					icon: Bookmark,
					children: [
						{
							text: this.$t("Dashboard.sidebar.category_section"),
							url: "DashboardCategoryList",
							role: []
						},
						{
							text: this.$t("Dashboard.sidebar.news_section"),
							url: "DashboardNewsList",
							role: []
						},
						{
							text: this.$t("Dashboard.sidebar.young_policy.young_policy_text"),
							url: "DashboardYoungPolicyList",
							role: []
						},
						{
							text: this.$t("Dashboard.sidebar.financial_literacy.financial_literacy_text"),
							url: "FinancialLiteracyList",
							role: []
						},
						{
							text: this.$t("Dashboard.sidebar.useful_links.useful_links_text"),
							url: "DashboardUsefulLinksList",
							role: []
						},
						{
							text: this.$t("Dashboard.sidebar.videos.videos_text"),
							url: "DashboardVideosList",
							role: []
						},
						{
							text: this.$t("Dashboard.sidebar.photos.photos_text"),
							url: "DashboardPhotosList",
							role: []
						},
						{
							text: this.$t("Dashboard.sidebar.promotion.promotion_text"),
							url: "DashboardPromotionList",
							role: []
						},
						{
							text: "E'lonlar",
							url: "DashboardAnnouncementsList",
							role: []
						},
            {
              text: "Hamkorlarga",
              url: "DashboardToPartnersList",
              role: []
            }
					],
					role: []
				},

				// =======================================================================================
				{
					text: "Акционерам и инвесторам",
					prefixText: true,
					role: []
				},

				// =======================================================================================
				{
					text: "Обратная связь",
					prefixText: true,
					role: ["compliance_manager", "appeal_officer", "head_office_appeal_officer"]
				},
				{
					text: "Апелляции",
					url: "FeedbackAppealList",
					icon: Mail,
					role: ["appeal_officer", "head_office_appeal_officer"]
				},

				{
					text: this.$t("complains_manager"),
					url: "FeedbackComplianceList",
					icon: Phone,
					role: ["compliance_manager"]
				},

				// =======================================================================================
				{
					text: "Другие разделы",
					prefixText: true,
					role: []
				},
				{
					text: `${this.$t("Dashboard.sidebar.country")} & ${this.$t("Dashboard.sidebar.region")}`,
					icon: Map,
					role: [],
					children: [
						{
							text: this.$t("Dashboard.sidebar.list_of_country"),
							url: "OtherSectionCountryList",
							role: []
						},
						{
							text: this.$t("Dashboard.sidebar.list_of_regions"),
							url: "OtherSectionDistrictList",
							role: []
						},
						{
							text: this.$t("Dashboard.sidebar.list_of_branches"),
							url: "OtherSectionBranchesList",
							role: []
						}
					]
				},
				{
					text: this.$t("Dashboard.sidebar.users.users"),
					icon: Users,
					role: [],
					children: [
						{
							text: this.$t("Dashboard.sidebar.users.users_list"),
							url: "OtherSectionUsersList",
							role: []
						},
						{
							text: this.$t("Dashboard.sidebar.roles.roles_list"),
							url: "OtherSectionRolesList",
							role: []
						}
					]
				},
				{
					text: this.$t("Dashboard.sidebar.documents"),
					icon: File,
					role: [],
					children: [
						{
							text: this.$t("Dashboard.sidebar.documents"),
							url: "OtherSectionDocumentsList",
							role: []
						},
						{
							text: this.$t("Dashboard.sidebar.annual_documents"),
							url: "OtherSectionAnnualDocumentsList",
							role: []
						},
						{
							text: this.$t("AboutBank.important_facts"),
							url: "OtherSectionImportantFactsList",
							role: []
						},
						{
							text: "Ochiq ma'lumotlar",
							url: "OtherSectionOpenInformationList",
							role: []
						}
					]
				},
				{
					text: "Категория",
					icon: Category,
					url: "OtherSectionCategoryList",
					role: []
				},
				{
					text: this.$t("online_polls"),
					icon: Message,
					url: "OtherSectionPollsList",
					role: []
				},
				{
					text: this.$t("Dashboard.sidebar.slide_section"),
					icon: Copy,
					url: "OtherSectionSlidesList",
					role: []
				},
			];
		}
	}
};
</script>
