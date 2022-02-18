<template>
	<div class='detail-view'>
		<v-container>
			<div class='detail-view-content'>
				<v-row>
					<v-col lg='6'>
						<v-responsive :aspect-ratio='4 / 3'>
							<img :src='detailModel.image && ($http.defaults.baseURL + detailModel.image.url)'
							     alt='Credit image'
							     class='p-absolute img-contain' />
						</v-responsive>
					</v-col>

					<v-col lg='6'>
						<div class="pl-lg-16">
							<p class="text-lg-right">
								<I18nVue t="updated" />
								{{ detailModel.modified_date && detailModel.modified_date | filterDate }}
							</p>

							<h1 class='font-700 text-extra-large-4 dark-text'>
								<span v-if='$i18n.locale === "en"' v-html='detailModel.title_en' />
								<span v-if='$i18n.locale === "ru"' v-html='detailModel.title_ru' />
								<span v-if='$i18n.locale === "uz"' v-html='detailModel.title_uz' />
							</h1>

							<v-divider class='my-8' />

							<h4>
								<span v-if='$i18n.locale === "en"' v-html='detailModel.description_en' />
								<span v-if='$i18n.locale === "ru"' v-html='detailModel.description_ru' />
								<span v-if='$i18n.locale === "uz"' v-html='detailModel.description_uz' />
							</h4>

							<div class='credit-meta d-flex flex-wrap mb-13 w-100 mt-10'>
								<template v-for='item in referenceList'>
									<div class='credit-meta-items d-flex align-center dark-text'>
										<h1 class='text-extra-large-4 mr-3 line-base font-300'>
											<span v-if="$i18n.locale === 'uz'" v-html='item.text_left_uz'></span>
											<span v-if="$i18n.locale === 'ru'" v-html='item.text_left_ru'></span>
											<span v-if="$i18n.locale === 'en'" v-html='item.text_left_en'></span>
										</h1>

										<div class='d-flex flex-column h-100'>
											<h5 class='font-600'>
												<I18nVue :uz='item.text_right_top_uz' :ru='item.text_right_top_ru' :en='item.text_right_top_en'/>
											</h5>
											<I18nVue :uz='item.text_bottom_uz' :ru='item.text_bottom_ru' :en='item.text_bottom_en'/>
										</div>
									</div>
								</template>
							</div>
						</div>
					</v-col>
				</v-row>
			</div>
		</v-container>

    <template v-if="this.$route.params.id == 3">
      <div class='view-toolbar my-16' style="height: 70px;">
      </div>

      <mobile-slide />
    </template>

		<template v-else>
      <div class='view-toolbar mt-16'>
        <v-container class='py-0'>
          <div class='app-tab-header d-flex'>
            <div class='tab-header-items text-center mr-7 active' data-item='header'>
              <a class='navigation-link navigation-link__hover p-relative text--h4 py-6 font-600 d-inline-block'>
							<span>
                                <I18nVue t='Transfers.about_transfer' />
                            </span>
              </a>
            </div>
            <div class='tab-header-items text-center mr-7' data-item='header'>
              <a class='navigation-link navigation-link__hover p-relative text--h4 py-6 font-600 d-inline-block'>
							<span>
                                <I18nVue t='tariffs_and_conditions' />
                            </span>
              </a>
            </div>
            <div class='tab-header-items text-center mr-7' data-item='header'>
              <a class='navigation-link navigation-link__hover p-relative text--h4 py-6 font-600 d-inline-block'>
                <span><I18nVue t='documents' /></span>
              </a>
            </div>
          </div>
        </v-container>
      </div>

      <div class='view-toolbar-content py-16 overflow-hidden'>
        <v-container class='py-0'>
          <div class='app-tab-content p-relative'>
            <div class='tab-content-items active' data-item='content'>

              <div class='pb-16'>
                <h1 v-if='$i18n.locale === "en"' class='font-600 dark-text align-self-center mb-10'>
                  Advantages of
                  <span v-html='detailModel.title_en' />
                </h1>
                <h1 v-if='$i18n.locale === "ru"' class='font-600 dark-text align-self-center mb-10'>
                  Преимущества
                  <span v-html='detailModel.title_ru' />
                </h1>
                <h1 v-if='$i18n.locale === "uz"' class='font-600 dark-text align-self-center mb-10'>
                  <span v-html='detailModel.title_uz' /> afzalliklari
                </h1>


                <v-row>
                  <template v-for='item in detailModelProp'>
                    <v-col :key='item.id' lg='4' md="6">
                      <app-information-card>
                        <template #image>
                          <img :src='item.icon && ($http.defaults.baseURL + item.icon.url)'
                               alt='' class='size-lg'>
                        </template>

                        <template #title>
                          <span v-if='$i18n.locale === "en"' v-html='item.property_en' />
                          <span v-if='$i18n.locale === "ru"' v-html='item.property_ru' />
                          <span v-if='$i18n.locale === "uz"' v-html='item.property_uz' />
                        </template>
                      </app-information-card>
                    </v-col>
                  </template>
                </v-row>
              </div>

              <h1 class='font-600 dark-text'>
                <I18nVue t='Transfers.to_perform' />
              </h1>
              <span class='text--h3 grey--text d-block mt-2 mb-10'>
                            <I18nVue t='Transfers.transfer_information' />
                        </span>

              <v-row>
                <v-col lg='3' sm="6">
                  <div
                      class='app-card-simple text-center transition-all py-10 px-7 rounded-lg h-100 mx-2'
                  >
                    <h1 class='font-300 text-extra-large primary-text'>1</h1>

                    <v-divider style='border-color: rgba(var(--border-color), 1)' class='my-10' />

                    <h4 class='dark-text'>
                      <I18nVue t='Transfers.proof' />
                    </h4>
                  </div>
                </v-col>

                <v-col lg='3' sm="6">
                  <div
                      class='app-card-simple text-center transition-all py-10 px-7 rounded-lg h-100 mx-2'
                  >
                    <h1 class='font-300 text-extra-large primary-text'>2</h1>

                    <v-divider style='border-color: rgba(var(--border-color), 1)' class='my-10' />

                    <h4 class='dark-text'>
                      <I18nVue t='Transfers.recipient' />
                    </h4>
                  </div>
                </v-col>

                <v-col lg='3' sm="6">
                  <div
                      class='app-card-simple text-center transition-all py-10 px-7 rounded-lg h-100 mx-2'
                  >
                    <h1 class='font-300 text-extra-large primary-text'>3</h1>

                    <v-divider style='border-color: rgba(var(--border-color), 1)' class='my-10' />

                    <h4 class='dark-text'>
                      <I18nVue t='Transfers.state' />
                    </h4>
                  </div>
                </v-col>

                <v-col lg='3' sm="6">
                  <div
                      class='transition-all py-10 px-7 rounded-lg h-100 mx-2 primary-bg d-flex flex-column align-start'>
                    <h2 class='font-600'>
                      <I18nVue t='Transfers.send_money' />
                    </h2>

                    <h5 class='font-300 my-4'>
                      <I18nVue t='Transfers.advantages' />
                    </h5>
                  </div>
                </v-col>
              </v-row>
            </div>

            <div class='tab-content-items' data-item='content'>
              <template v-if='detailTariffsModel'>
                <v-row>
                  <v-col md='7'>
                    <h1 class='font-600 dark-text mb-8'>
                      <I18nVue t='Transfers.rates' />
                    </h1>

                    <div class='app-form-group mb-10'>
                      <template v-if="$i18n.locale === 'uz'">
                        <v-select
                            v-model='tariffSelect'
                            :items='detailTariffsModel.transfer_countries'
                            item-text='country.name_uz'
                            item-value='transfer_countries'
                            return-object
                            outlined
                            hide-details
                            placeholder='Davlatni tanlang'
                        >
                          <template v-slot:append>
                            <chevron-down-icon size='1.5x'
                                               class='grey--text'></chevron-down-icon>
                          </template>
                        </v-select>
                      </template>
                      <template v-if="$i18n.locale === 'ru'">
                        <v-select
                            v-model='tariffSelect'
                            :items='detailTariffsModel.transfer_countries'
                            item-text='country.name_ru'
                            item-value='transfer_countries'
                            return-object
                            outlined
                            hide-details
                            placeholder='Выберите страну'
                        >
                          <template v-slot:append>
                            <chevron-down-icon size='1.5x'
                                               class='grey--text'></chevron-down-icon>
                          </template>
                        </v-select>
                      </template>
                      <template v-if="$i18n.locale === 'en'">
                        <v-select
                            v-model='tariffSelect'
                            :items='detailTariffsModel.transfer_countries'
                            item-text='country.name_en'
                            item-value='transfer_countries'
                            return-object
                            outlined
                            hide-details
                            placeholder='Select country'
                        >
                          <template v-slot:append>
                            <chevron-down-icon size='1.5x'
                                               class='grey--text'></chevron-down-icon>
                          </template>
                        </v-select>
                      </template>
                    </div>

                    <v-simple-table v-if='tariffSelect' class='app-table__border'>
                      <template v-slot:default>
                        <thead>
                        <tr>
                          <th>
                            <h4 class='font-600 dark-text'>
                              <I18nVue t='Transfers.summa' />
                            </h4>
                          </th>
                          <th>
                            <h4 class='font-600 dark-text'>
                              <I18nVue t='Transfers.tariff' />
                            </h4>
                          </th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-if='tariffSelect.transfer_amt_min'>
                          <td>
                            <h4 class='font-600'><I18nVue t='Transfers.minimum' /></h4>
                          </td>
                          <td>
                            <h4>{{ tariffSelect.transfer_amt_min }}</h4>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h4 class='font-600'>
                              <I18nVue t='Transfers.regardless' />
                            </h4>
                          </td>
                          <td>
                            <h4>
                              <template v-if="$i18n.locale === 'ru'">
																<span
                                    v-if='tariffSelect.commission_fee_min'>от {{ tariffSelect.commission_fee_min
                                  }} </span>
                                <span
                                    v-if='tariffSelect.commission_fee_max'>до {{ tariffSelect.commission_fee_max
                                  }}</span>
                              </template>
                              <template v-if="$i18n.locale === 'uz'">
																<span
                                    v-if='tariffSelect.commission_fee_min'>{{ tariffSelect.commission_fee_min
                                  }} dan </span>
                                <span
                                    v-if='tariffSelect.commission_fee_max'>{{ tariffSelect.commission_fee_max
                                  }} gacha</span>
                              </template>
                              <template v-if="$i18n.locale === 'en'">
																<span
                                    v-if='tariffSelect.commission_fee_min'>from {{ tariffSelect.commission_fee_min
                                  }} </span>
                                <span
                                    v-if='tariffSelect.commission_fee_max'>upto {{ tariffSelect.commission_fee_max
                                  }}</span>
                              </template>
                            </h4>
                          </td>
                        </tr>
                        </tbody>
                      </template>
                    </v-simple-table>
                  </v-col>

                  <v-spacer />

                  <v-col md='4'>
                    <h1 class='font-600 dark-text mb-8'>
                      <I18nVue t='Transfers.conditions' />
                    </h1>

                    <div class='credit-widget pa-7 rounded-lg overflow-hidden border-all'>
                      <h4 class='font-weight-bold dark-text mb-1'>
                        <I18nVue t='Transfers.transfer_currency' />
                      </h4>
                      <p>{{ detailTariffsModel.transfer_currency }}</p>

                      <h4 class='font-weight-bold dark-text mb-1'>
                        <I18nVue t='Transfers.transfer_countries' />
                      </h4>

                      <p>
                        <template v-for='item in detailTariffsModel.transfer_countries'>
												<span v-if="$i18n.locale === 'uz'"
                              :key='item.id'>{{ item.country.name_uz }}, </span>
                          <span v-if="$i18n.locale === 'ru'"
                                :key='item.id'>{{ item.country.name_ru }}, </span>
                          <span v-if="$i18n.locale === 'en'"
                                :key='item.id'>{{ item.country.name_en }}, </span>
                        </template>
                      </p>
                      <h4 class='font-weight-bold dark-text mb-1'>
                        <I18nVue t='Transfers.commission' />
                      </h4>
                      <p v-if="$i18n.locale === 'uz'">{{ detailModel.commission_fee_min }}% dan</p>
                      <p v-if="$i18n.locale === 'ru'">От {{ detailModel.commission_fee_min }}%</p>
                      <p v-if="$i18n.locale === 'en'">From {{ detailModel.commission_fee_min }}%</p>
                    </div>
                  </v-col>
                </v-row>
              </template>
            </div>

            <div class='tab-content-items' data-item='content'>
              <documents />
            </div>
          </div>
        </v-container>
      </div>
    </template>
	</div>
</template>

<script>
	import Documents from './components/Documents'
	import AppInformationCard from "../../../../../../components/AppInformationCard";
	import I18nVue from '@/I18nVue'
	import AppBreadCrumb from '@/components/AppBreadCrumb'
  import MobileSlide
    from "@/views/Main/PhysicalPersons/PaymentsAndTransfers/MoneyTransfers/Detail/components/MobileSlide";
	import {
		Share2Icon,
		PrinterIcon,
		FacebookIcon,
		TwitterIcon,
		ChevronRightIcon,
		ChevronDownIcon,
		DownloadIcon,
	} from 'vue-feather-icons'
	import { appTab } from '@/utils/frontend'

	export default {
		name: 'index',
		components: {
			AppBreadCrumb,
			Documents,
			AppInformationCard,
			Share2Icon,
			PrinterIcon,
			FacebookIcon,
			TwitterIcon,
			ChevronRightIcon,
			ChevronDownIcon,
			DownloadIcon,
			I18nVue,
      MobileSlide
		},
		data() {
			return {
				detailModel: {},
				detailTariffsModel: [],
				tariffSelect: '',
				detailDownloadDocsList: [],
				detailModelProp: [],
				referenceList: []
			}
		},
		mounted() {
			const $tabHeaderItems = document.querySelectorAll('[data-item="header"]')
			const $tabContentItems = document.querySelectorAll('[data-item="content"]')

			appTab($tabHeaderItems, $tabContentItems)

			this.getOne()
			this.getOneProp()
			this.getOneTariffs()
			this.getOneDocs()
			this.getReferenceList()
		},
		methods: {
			/*
			 *
			 * */
			getOne() {
				this.$http.get(`/1/transfer/${this.$route.params.id}/`).then(({ data }) => {
					this.detailModel = data

					// console.log(this.detailModel)
				})
			},

			/*
			 *
			 * */
			getOneProp() {
				this.$http.get(`/1/transfer/${this.$route.params.id}/property/`).then(({ data }) => {
					this.detailModelProp = data.results

					// console.log(this.detailModelProp);
				})
			},

			/*
			 *
			 * */
			getOneTariffs() {
				this.$http.get(`/1/transfer/${this.$route.params.id}/tariffs/`).then(({ data }) => {
					this.detailTariffsModel = data.results[0]
				})
			},

			/*
			 *
			 * */
			getOneDocs() {
				this.$http.get(`/1/transfer/${this.$route.params.id}/documents/`).then(({ data }) => {
					this.detailDownloadDocsList = data.results
				})
			},
			/*
			*
			* */
			getReferenceList() {
				if (this.$route.params.id){
					this.$store.state.CREATED_TRANSFER_ID = this.$route.params.id
				}

				this.$http.get(`/1/transfer/${this.$store.state.CREATED_TRANSFER_ID}/reference/`)
				.then(({ data }) => {

					this.referenceList = data.results

					console.log(data.results)
				})
			}
		}
	}
</script>
