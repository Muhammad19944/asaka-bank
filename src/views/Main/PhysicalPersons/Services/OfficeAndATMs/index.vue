<template>
	<div class="bank-office-view">
		<section class="map-section best-offers-view p-relative pa-0 overflow-hidden">
			<google-map @emit:up="switchToggleUp" />
		</section>

		<template v-if="isMap">
			<v-container>
				<div class="pt-10 mb-16">
					<h1 class="dark-text font-700 text-extra-large-4 mt-5 mb-2">
						<I18nVue t="Services.Offices.title"/>
					</h1>

					<h3 class="dark-grey mb-10">
						<I18nVue t="Services.Offices.desc"/>
					</h3>

					<v-row>
						<template v-for="item in mapLocationsList">
							<v-col :key="item.id" lg="4" md="6">
								<div class="credit-widget pa-8 h-100 rounded-lg overflow-hidden mb-8">
									<h4 class="font-600 dark-grey">
										<I18nVue t="Services.Offices.bank"/>
									</h4>
									<h2 class="font-600 dark-text mb-6 mt-1">
										<I18nVue
											:uz='item.name_uz'
											:ru='item.name_ru'
											:en='item.name_en'
										/>
									</h2>

									<div class="d-flex align-center mb-4">
										<map-pin-icon class="size-sm primary-text mr-3"/>

										<a class="text-decoration-none font-600 navigation-link dark-grey flex-1">
										<span>
											<I18nVue
												:uz='item.address_uz'
												:ru='item.address_ru'
												:en='item.address_en'
											/>
										</span>
										</a>
									</div>

                  <template v-if="item.type === 'head_office'">
                    <div class="d-flex align-center mb-4">
                      <phone-icon class="size-sm primary-text mr-3"/>

                      <a href="'tel:1152" class="text-decoration-none font-600 navigation-link dark-grey flex-1">
                        <span>1152</span>
                      </a>
                    </div>

                    <div v-if='item.phone_number_2' class="d-flex align-center mb-4">
                      <phone-icon class="size-sm primary-text mr-3"/>

                      <a :href="'tel:' + item.phone_number_2" class="text-decoration-none font-600 navigation-link dark-grey flex-1">
                        <span>{{ item.phone_number_2 }}</span>
                      </a>
                    </div>

                    <div class="d-flex align-center mb-4">
                      <FaxIcon class="size-sm fill-primary mr-3" />

                      <a href="tel:120247" class="text-decoration-none font-600 navigation-link dark-grey flex-1">
                        <span>120247</span>
                      </a>
                    </div>
                  </template>

									<template v-else>
                    <div v-if='item.phone_number' class="d-flex align-center mb-4">
                      <phone-icon class="size-sm primary-text mr-3"/>

                      <a :href="'tel:' + item.phone_number" class="text-decoration-none font-600 navigation-link dark-grey flex-1">
                        <span>{{ item.phone_number }}</span>
                      </a>
                    </div>

                    <div v-if='item.phone_number_2' class="d-flex align-center mb-4">
                      <phone-icon class="size-sm primary-text mr-3"/>

                      <a :href="'tel:' + item.phone_number_2" class="text-decoration-none font-600 navigation-link dark-grey flex-1">
                        <span>{{ item.phone_number_2 }}</span>
                      </a>
                    </div>

                    <div v-if='item.fax' class="d-flex align-center mb-4">
                      <FaxIcon class="size-sm fill-primary mr-3" />

                      <a href="tel:+03677708245" class="text-decoration-none font-600 navigation-link dark-grey flex-1">
                        <span>{{ item.fax }}</span>
                      </a>
                    </div>
                  </template>

									<div v-if='item.email' class="d-flex align-center">
										<mail-icon class="size-sm primary-text mr-3"/>

										<a href="mailto:office@asakabank.uz" class="text-decoration-none font-600 navigation-link dark-grey">
											<span>{{ item.email }}</span>
										</a>
									</div>

                  <div v-if='item.number_exchange_office' class="d-flex align-center mt-4">
                    <archive-icon class="size-sm primary-text mr-3"/>

                    <a href="" class="text-decoration-none font-600 navigation-link dark-grey">
                      <span>{{ $t("LastCorrections.number_exchange_office") }}  <b>{{ item.number_exchange_office }}</b></span>
                    </a>
                  </div>


                  <!--If type is Filial -->
                  <div v-if="item.type === 'filial' || item.type === 'exchange_center'" class="d-flex align-center mt-4">
                    <clock-icon style="width: 2.4rem;" class="primary-text mr-3"/>

                    <span class="text-decoration-none font-600 dark-grey">
                      <span v-if="$i18n.locale === 'uz'">
                        Bank filiallarida valyuta va kassa operatsiyalari <b>9:00 dan 17:00 gacha</b> ish faoliyatini olib boradi
                      </span>
                      <span v-if="$i18n.locale === 'ru'">
                        Валютно-обменные и кассовые операции в филиалах банка открыты <b>с 9:00 до 17:00</b>
                      </span>
                      <span v-if="$i18n.locale === 'en'">
                        Currency exchange and cash transactions in the branches of the bank are open <b>from 9:00 to 17:00</b>
                      </span>
                    </span>
                  </div>

                  <!--If type is Head Office -->
                  <div v-if="item.type === 'head_office'" class="d-flex align-center mt-4">
                    <user-x-icon style="width: 2.4rem;" class="primary-text mr-3"/>

                    <span class="text-decoration-none font-600 dark-grey">
                      <span v-if="$i18n.locale === 'uz'">
                        Jismoniy shaxslar uchun valyuta ayirboshlash va kassa operatsiyalari xizmat ko'rsatmaydi!
                      </span>
                      <span v-if="$i18n.locale === 'ru'">
                        Валютно-обменные и кассовые операции не обслуживаются для физических лиц!
                      </span>
                      <span v-if="$i18n.locale === 'en'">
                        Currency exchange and cash transactions are not serviced for individuals!
                      </span>
                    </span>
                  </div>

                  <div v-if="item.is_for_exchange" class="d-flex align-center mt-4">
                    <clock-icon class="primary-text mr-3 size-sm"/>

                    <span class="text-decoration-none font-600 dark-grey">
                      <I18nVue v-if="item.id == 276" t="LastCorrections.mon-sat"/>
                      <I18nVue v-else t="LastCorrections.mon_fri"/>
                    </span>
                  </div>
								</div>
							</v-col>
						</template>
					</v-row>
				</div>
			</v-container>
		</template>
	</div>
</template>

<script>
import FaxIcon from "@/components/Icons/FaxIcon";
import { ChevronDownIcon, MapPinIcon, PhoneIcon, MailIcon, ClockIcon, UserXIcon, ArchiveIcon } from 'vue-feather-icons'
import GoogleMap from "./components/GoogleMap";
import I18nVue from "../../../../../I18nVue";

export default {
	name: "index",
	components: {
		GoogleMap,
		ChevronDownIcon,
		MapPinIcon,
		PhoneIcon,
		MailIcon,
    ClockIcon,
    UserXIcon,
    ArchiveIcon,
		FaxIcon,
		I18nVue
	},
	data() {
		return {
			mapLocationsList: [],
			isMap: false
		}
	},
	methods: {
		/*
		*
		* */
		switchToggleUp(val) {
			this.mapLocationsList = val.locations
			this.isMap = val.isMap
		}
	}
}
</script>

<style>
.map-section {
	min-height: 900px;
}
</style>
