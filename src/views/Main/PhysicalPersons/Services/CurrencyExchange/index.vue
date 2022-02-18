<template>
  <div class='currency-exchange-view'>
    <v-container>
      <div class='my-16'>
        <v-row>
          <v-col lg='6' order-lg="1">
            <div class=''>
              <v-responsive :aspect-ratio='4 / 3'>
                <img
                    src='/images/valyuta_ayirboshlash.png'
                    alt='Card image'
                    class='d-block p-absolute img-contain'
                />
              </v-responsive>
            </div>
          </v-col>

          <v-col lg='5'>
            <h3 class='font-600 dark-text'>
              <I18nVue t='Services.CurrencyExchange.exchange_services'/>
            </h3>

            <div class='app-ul mt-6'>
              <ul>
                <li>
                                    <span>
                                        <I18nVue t='Services.CurrencyExchange.text1'/>
                                    </span
                                    >
                </li>
                <li>
                                    <span>
                                        <I18nVue t='Services.CurrencyExchange.text2'/>
                                    </span
                                    >
                </li>
                <li>
                                    <span>
                                        <I18nVue t='Services.CurrencyExchange.text3'/>
                                    </span
                                    >
                </li>
                <li>
                                    <span>
                                        <I18nVue t='Services.CurrencyExchange.text4'/>
                                    </span>
                </li>
                <li>
                                    <span>
                                        <I18nVue t='Services.CurrencyExchange.text5'/>
                                    </span>
                </li>
              </ul>
            </div>
          </v-col>

          <v-spacer/>
        </v-row>
      </div>

      <div class='pt-10 mb-16'>
        <h1 class='dark-text font-700 text-extra-large-4 mt-5 mb-6'>
          <I18nVue t='Services.CurrencyExchange.branches'/>
        </h1>

        <h3 class='dark-grey mb-10'>
          <I18nVue t='Services.CurrencyExchange.where'/>
        </h3>


        <v-row>
          <v-col v-for='item in filialList' md='6'>
            <div class='credit-widget pa-6 rounded-lg overflow-hidden mb-8'>
              <h2 class='font-600 dark-text mb-5'>
                <I18nVue :uz='item.name_uz'
                         :ru='item.name_ru'
                         :en='item.name_en'
                />
              </h2>

              <div class='d-flex align-center mb-4'>
                <map-pin-icon class='size-sm primary-text mr-3'/>

                <a class='text-decoration-none font-600 navigation-link dark-grey'>
                                    <span>
                                        <I18nVue :uz='item.address_uz'
                                                 :ru='item.address_ru'
                                                 :en='item.address_en'
                                        />
                                    </span>
                </a>
              </div>

              <div v-if="item.phone_number" class='d-flex align-center mb-4'>
                <phone-icon class='size-sm primary-text mr-3'/>

                <a
                    href='tel:+998735426104'
                    class='text-decoration-none font-600 navigation-link dark-grey'
                >
                                    <span>
                                        {{ item.phone_number }}
                                    </span>
                </a>
              </div>

              <div v-if="item.phone_number_2" class='d-flex align-center mb-4'>
                <FaxIcon class='size-sm fill-primary mr-3'/>

                <a
                    href='tel:+998781208247'
                    class='text-decoration-none font-600 navigation-link dark-grey'
                >
                                    <span>
                                        {{ item.phone_number_2 }}
                                    </span>
                </a>
              </div>

              <div v-if="item.email" class='d-flex align-center'>
                <mail-icon class='size-sm primary-text mr-3'/>

                <a
                    href='mailto:office@asakabank.uz'
                    class='text-decoration-none font-600 navigation-link dark-grey'
                >
                  <span>{{ item.email }}</span>
                </a>
              </div>

              <div v-if='item.number_exchange_office' class="d-flex align-center mt-4">
                <archive-icon class="size-sm primary-text mr-3"/>

                <a class="text-decoration-none font-600 navigation-link dark-grey">
                  <span>{{ $t("LastCorrections.number_exchange_office") }}  <b>{{
                      item.number_exchange_office
                    }}</b></span>
                </a>
              </div>
              <div class="d-flex align-center mt-4">
                <clock-icon class="primary-text mr-3 size-sm"/>

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

              <div class="d-flex align-center mt-4">
                <clock-icon class="primary-text mr-3 size-sm"/>

                <span class="text-decoration-none font-600 dark-grey">
                  <I18nVue v-if="item.id == 276" t="LastCorrections.mon-sat"/>
                  <I18nVue v-else t="LastCorrections.mon_fri"/>
                </span>
              </div>
            </div>
          </v-col>
        </v-row>
      </div>
    </v-container>

    <app-exchange-rates/>
  </div>
</template>

<script>
import AppExchangeRates from '@/components/AppExchangeRates'
import {PhoneIcon, MailIcon, MapPinIcon, ArchiveIcon, ClockIcon} from 'vue-feather-icons'
import FaxIcon from '@/components/Icons/FaxIcon'
import I18nVue from '@/I18nVue'

export default {
  name: 'index',
  components: {
    AppExchangeRates,
    PhoneIcon,
    MailIcon,
    MapPinIcon,
    ArchiveIcon,
    ClockIcon,
    FaxIcon,
    I18nVue
  },

  data() {
    return {
      filialList: []
    }
  },

  mounted() {
    this.getList()
  },

  methods: {
    getList() {
      this.$http.get('4020/filial/?is_for_exchange=true', {
        params:{
          page_size: 500
        }
      })
        .then(({data}) => {
          this.filialList = data.results
        })
    }
  }
}
</script>

<style></style>
