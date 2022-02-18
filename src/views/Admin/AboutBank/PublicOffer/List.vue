<template>
	<div class="public-offer-view">
		<app-card :title="this.$t('Services.OpenCard.oferta')" class="mb-13">
			<template #add-view>
				<v-btn :to="{ name: 'PublicOffersCreate' }" depressed color="primary">
					<div class="d-flex align-center">
						<plus-icon size="1.5x" class="mr-1"></plus-icon>
						<span class="text-transform-reset">{{ $t("Dashboard.add_new") }}</span>
					</div>
				</v-btn>
			</template>


			<template v-if="publicOfferList.length">
				<v-simple-table class="admin-table">
					<tbody>
					<tr class="transition-fast-out-slow-in" v-for="item in publicOfferList">
						<td class="admin-table-td">
							<h5 class="font-600">
								<span v-if="item.id === 1">{{ $t('PublicOffer.new') }}</span>
								<span v-else>{{ $t('PublicOffer.old') }}</span>
							</h5>
							<span class="text-small font-600 text-secondary-dark">{{ $t('Dashboard.AboutBank.type') }}</span>
						</td>
						<td class="admin-table-td" width="300">
							<h5 class="font-600">
								{{ item.modified_date | filterDateAndTimeHour }}
							</h5>
							<span class="text-small font-600 text-secondary-dark">{{ $t("LastCorrections.date") }}</span>
						</td>
						<td class="admin-table-td" width="160">
							<v-btn
								:to="{ name: 'PublicOffersRead', params: { id: item.id }}"
								depressed
								icon
								color="info"
							>
								<eye-icon size="1.5x" class="custom-class"></eye-icon>
							</v-btn>

							<v-btn
								:to="{ name: 'PublicOffersUpdate', params: { id: item.id }}"
								depressed
								icon
								color="warning"
								class="mx-2"
							>
								<edit-icon size="1.35x" class="custom-class"></edit-icon>
							</v-btn>

							<v-btn depressed icon color="danger">
								<trash-2-icon size="1.35x" />
							</v-btn>
						</td>
					</tr>
					</tbody>
				</v-simple-table>
			</template>
		</app-card>
	</div>
</template>

<script>
	import AppFilter from "../../BaseComponents/AppFilter";
	import AppCard from "../../BaseComponents/AppCard";
	import AppPagination from "../../BaseComponents/AppPagination";
	import AppLoader from "../../BaseComponents/AppLoader";
	import NotFound from "../../BaseComponents/NotFound";
	import { EyeIcon, EditIcon, Trash2Icon, PlusIcon } from "vue-feather-icons";
	import I18nVue from '@/I18nVue'
	export default {
		name: "List",
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
				publicOfferList: []
			};
		},
		mounted() {
			this.getAll();
		},
		methods: {
			/*
			 *
			 * */
			getAll() {
				this.$http.get(`/${this.$store.state.auth.COMPANY_ID}/bank/public_offer/`)
					.then(({ data }) => {
							this.publicOfferList = data.results;
						}
					);
			},

			/*
			 *
			 * */
			deleteRow(id) {
				if (!confirm(this.$t("Dashboard.d"))) {
					return void 0;
				}

				this.$http
					.delete(`/${this.$store.state.auth.COMPANY_ID}/bank/public_offer/${id}/`)
					.then(() => {
						this.$toast.success(this.$t("Dashboard.d1"));

						this.getAll();
					})
					.catch(() => {
						this.$toast.error(this.$t("Dashboard.d2"));
					});
			},
		}
	}
</script>

<style scoped>

</style>
