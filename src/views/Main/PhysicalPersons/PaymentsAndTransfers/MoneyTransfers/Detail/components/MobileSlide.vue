<template>
  <section class="pt-10 section">
    <v-container>
      <!--            <div class="view-title mb-16 pb-5">
                      <h1 class="font-600 dark-text align-self-center mb-3">Need fish text Lorem ipsum dolor sit amet.</h1>

                      <div class="d-flex align-center justify-space-between">
                          <p class="text&#45;&#45;h3 font-400 dark-text mb-0">Barcha holatlar uchun mahsulot va xizmatlar</p>
                      </div>
                  </div>-->

      <v-row no-gutters>
        <v-col lg="3" md="4" sm="6">
          <div class="mobile-hooper-wrap">
            <hooper
                @slide="updateCarousel"
                :settings="mobileHooperSettings"
                ref="mobileCarousel"
                class="mobile-hooper p-relative outline-transparent mx-auto mx-sm-auto"
            >
              <slide>
                <div class="mockup-slide-item">
                  <img v-if="$i18n.locale === 'ru'" src="/images/money-send-mobile-slide/1.PNG"   alt="Mockup img"/>
                  <img v-if="$i18n.locale === 'uz'" src="/images/money-send-mobile-slide/1-1.PNG"   alt="Mockup img"/>
                  <img v-if="$i18n.locale === 'en'" src="/images/money-send-mobile-slide/1-2.PNG"   alt="Mockup img"/>
                </div>
              </slide>
              <slide>
                <div class="mockup-slide-item">
                  <img v-if="$i18n.locale === 'ru'" src="/images/money-send-mobile-slide/2.PNG"   alt="Mockup img"/>
                  <img v-if="$i18n.locale === 'uz'" src="/images/money-send-mobile-slide/2-1.PNG"   alt="Mockup img"/>
                  <img v-if="$i18n.locale === 'en'" src="/images/money-send-mobile-slide/2-2.PNG"   alt="Mockup img"/>
                </div>
              </slide>
              <slide>
                <div class="mockup-slide-item">
                  <img v-if="$i18n.locale === 'ru'" src="/images/money-send-mobile-slide/3.PNG"   alt="Mockup img"/>
                  <img v-if="$i18n.locale === 'uz'" src="/images/money-send-mobile-slide/3-1.PNG"   alt="Mockup img"/>
                  <img v-if="$i18n.locale === 'en'" src="/images/money-send-mobile-slide/3-2.PNG"   alt="Mockup img"/>
                </div>
              </slide>
              <slide>
                <div class="mockup-slide-item">
                  <img v-if="$i18n.locale === 'ru'" src="/images/money-send-mobile-slide/4.PNG"   alt="Mockup img"/>
                  <img v-if="$i18n.locale === 'uz'" src="/images/money-send-mobile-slide/4-1.PNG"   alt="Mockup img"/>
                  <img v-if="$i18n.locale === 'en'" src="/images/money-send-mobile-slide/4-2.PNG"   alt="Mockup img"/>
                </div>
              </slide>
              <slide>
                <div class="mockup-slide-item">
                  <img v-if="$i18n.locale === 'ru'" src="/images/money-send-mobile-slide/5.PNG"   alt="Mockup img"/>
                  <img v-if="$i18n.locale === 'uz'" src="/images/money-send-mobile-slide/5-1.PNG"   alt="Mockup img"/>
                  <img v-if="$i18n.locale === 'en'" src="/images/money-send-mobile-slide/5-2.PNG"   alt="Mockup img"/>
                </div>
              </slide>
            </hooper>
          </div>
        </v-col>

        <v-col lg="4" md="4" sm="6" class="mt-16 mt-sm-0 text-sm-left">
          <div class="slide-aside h-100 d-flex flex-column justify-center">
            <div
                @click="setSlideTo(0)"
                :class="carouselData === 0 ? 'active' : ''"
                class="slide-aside-items d-flex mb-5 justify-sm-start align-start"
            >
                <div class="mt-1">
                  <span class="icon-circle mr-4">
                    <svg class="icon-circle-svg" viewBox="-5 -5 95 95" width="20" height="20">
                        <circle cx="41.5" cy="41.5" r="41"></circle>
                    </svg>
                </span>
                </div>

              <div class="d-flex flex-column">
                <a class="navigation-link text--h4 font-600">
                  <span>
                    <I18nVue t='MobileSlide.authorization'/>
                  </span>
                </a>
                <p class="grey--text pr-16">
                  <I18nVue t='MobileSlide.auth_sub'/>
                </p>
              </div>

            </div>


            <div
                @click="setSlideTo(1)"
                :class="carouselData === 1 ? 'active' : ''"
                class="slide-aside-items d-flex align-start mb-5 justify-sm-start"
            >
              <div class="mt-1">
                  <span class="icon-circle mr-4">
                    <svg class="icon-circle-svg" viewBox="-5 -5 95 95" width="20" height="20">
                        <circle cx="41.5" cy="41.5" r="41"></circle>
                    </svg>
                </span>
              </div>

              <div class="d-flex flex-column">
                <a class="navigation-link text--h4 font-600">
                  <span>
                    <I18nVue t='MobileSlide.choose_section'/>
                  </span>
                </a>
                <p class="grey--text pr-16">
                  <I18nVue t='MobileSlide.choose_section_sub'/>
                </p>
              </div>
            </div>

            <div
                @click="setSlideTo(2)"
                :class="carouselData === 2 ? 'active' : ''"
                class="slide-aside-items d-flex align-start mb-5 justify-sm-start"
            >
              <div class="mt-1">
                  <span class="icon-circle mr-4">
                    <svg class="icon-circle-svg" viewBox="-5 -5 95 95" width="20" height="20">
                        <circle cx="41.5" cy="41.5" r="41"></circle>
                    </svg>
                </span>
              </div>

              <div class="d-flex flex-column">
                <a class="navigation-link text--h4 font-600">
                  <span>
                    <I18nVue t='MobileSlide.moneysend_system'/>
                  </span>
                </a>
                <p class="grey--text pr-16">
                  <I18nVue t='MobileSlide.moneysend_system_sub'/>
                </p>
              </div>
            </div>

            <div
                @click="setSlideTo(3)"
                :class="carouselData === 3 ? 'active' : ''"
                class="slide-aside-items d-flex align-start mb-5 justify-sm-start"
            >
              <div class="mt-1">
                  <span class="icon-circle mr-4">
                    <svg class="icon-circle-svg" viewBox="-5 -5 95 95" width="20" height="20">
                        <circle cx="41.5" cy="41.5" r="41"></circle>
                    </svg>
                </span>
              </div>

              <div class="d-flex flex-column">
                <a class="navigation-link text--h4 font-600">
                  <span>
                    <I18nVue t='MobileSlide.enter_info'/>
                  </span>
                </a>
                <p class="grey--text pr-16">
                  <I18nVue t='MobileSlide.enter_info_sub'/>
                  <br>
                  <I18nVue t='MobileSlide.li1'/>
                  <br>
                  <I18nVue t='MobileSlide.li2'/>
                  <br>
                  <I18nVue t='MobileSlide.li3'/>
                </p>
              </div>
            </div>

            <div
                @click="setSlideTo(4)"
                :class="carouselData === 4 ? 'active' : ''"
                class="slide-aside-items d-flex align-center mb-5 justify-sm-start"
            >
                <span class="icon-circle mr-4">
                    <svg class="icon-circle-svg" viewBox="-5 -5 95 95" width="20" height="20">
                        <circle cx="41.5" cy="41.5" r="41"></circle>
                    </svg>
                </span>

              <a class="navigation-link text--h4 font-600">
                <span><I18nVue t='MobileSlide.success_sent'/></span>
              </a>
            </div>
          </div>
        </v-col>

        <v-col lg="4" md="4" sm="12" align-self="center" class="mt-16 mt-lg-0 text-lg-left mx-4">
          <h1 class="text-extra-large-3 mb-8">
            MoneySend
          </h1>
          <h3 class="text-secondary-dark-2 mb-4">
            <I18nVue t="MobileSlide.for_transfer" />
          </h3>

          <div class="flex-direction-column d-flex mb-4">
            <div class="d-flex mr-2">
              <span class="d-flex justify-center align-center money-send-install-span pa-3 mr-2">1</span>
              <p class="text-12 font-weight-bold"><I18nVue t="MobileSlide.install_asakabank" /></p>
            </div>
            <div class="d-flex">
              <span class="d-flex justify-center align-center money-send-install-span pa-3 mr-2">2</span>
              <p class="text-12 font-weight-bold">
                <I18nVue t="MobileSlide.required" /> <br>
                <span class="grey--text"><I18nVue t="MobileSlide.required_sub" /></span>
              </p>
            </div>
          </div>

          <div class="d-flex flex-direction-column">
            <div class="d-flex flex-column align-start">
              <v-btn
                  href="https://apps.apple.com/uz/app/asakabank/id1574165416"
                  color="danger"
                  target="_blank"
                  rel="noopener noreferrer"
                  depressed
                  rounded
                  min-width="155"
                  min-height="50"
                  class="text-transform-reset mb-4 mx-small-auto mr-large-4"
              >
                <div class="d-flex align-center w-100">
                  <div class="size-md">
                    <svg id="icon-app-store" viewBox="0 0 305 305" style="fill: #fff">
                      <path
                          id="XMLID_229_"
                          d="M40.738,112.119c-25.785,44.745-9.393,112.648,19.121,153.82C74.092,286.523,88.502,305,108.239,305 c0.372,0,0.745-0.007,1.127-0.022c9.273-0.37,15.974-3.225,22.453-5.984c7.274-3.1,14.797-6.305,26.597-6.305 c11.226,0,18.39,3.101,25.318,6.099c6.828,2.954,13.861,6.01,24.253,5.815c22.232-0.414,35.882-20.352,47.925-37.941 c12.567-18.365,18.871-36.196,20.998-43.01l0.086-0.271c0.405-1.211-0.167-2.533-1.328-3.066c-0.032-0.015-0.15-0.064-0.183-0.078 c-3.915-1.601-38.257-16.836-38.618-58.36c-0.335-33.736,25.763-51.601,30.997-54.839l0.244-0.152 c0.567-0.365,0.962-0.944,1.096-1.606c0.134-0.661-0.006-1.349-0.386-1.905c-18.014-26.362-45.624-30.335-56.74-30.813 c-1.613-0.161-3.278-0.242-4.95-0.242c-13.056,0-25.563,4.931-35.611,8.893c-6.936,2.735-12.927,5.097-17.059,5.097 c-4.643,0-10.668-2.391-17.645-5.159c-9.33-3.703-19.905-7.899-31.1-7.899c-0.267,0-0.53,0.003-0.789,0.008 C78.894,73.643,54.298,88.535,40.738,112.119z"
                      ></path>
                      <path
                          id="XMLID_230_"
                          d="M212.101,0.002c-15.763,0.642-34.672,10.345-45.974,23.583c-9.605,11.127-18.988,29.679-16.516,48.379 c0.155,1.17,1.107,2.073,2.284,2.164c1.064,0.083,2.15,0.125,3.232,0.126c15.413,0,32.04-8.527,43.395-22.257 c11.951-14.498,17.994-33.104,16.166-49.77C214.544,0.921,213.395-0.049,212.101,0.002z"
                      ></path>
                    </svg>
                  </div>

                  <div class="text-white ml-2">
                    <span class="font-600 text-13"><I18nVue t='Services.Mobile_banking.download'/> </span>
                    <h6 class="font-700 line-base">App Store</h6>
                  </div>
                </div>
              </v-btn>

              <v-btn
                  href="https://play.google.com/store/apps/details?id=uz.asakabank.myasaka"
                  color="danger"
                  target="_blank"
                  rel="noopener noreferrer"
                  depressed
                  rounded
                  min-width="155"
                  min-height="50"
                  class="text-transform-reset mx-small-auto"
              >
                <div class="d-flex align-center w-100">
                  <div class="size-md">
                    <svg id="icon-google-play" viewBox="0 0 24 24" style="fill: #fff">
                      <path d="m18.168 15.838-2.866-2.818-10.521 10.375z"></path>
                      <path d="m18.168 8.167-13.387-7.557 10.521 10.375z"></path>
                      <path
                          d="m22.363 13.427c.858-.67.858-2.18-.057-2.85l-2.808-1.598-3.133 3.024 3.133 3.024z"
                      ></path>
                      <path
                          d="m2.034 24 12.234-12.002-12.234-11.997v-.001c-.619.319-1.034.9-1.034 1.655v20.69c0 .755.415 1.336 1.034 1.655z"
                      ></path>
                    </svg>
                  </div>

                  <div class="text-white ml-2">
                    <span class="font-600 text-13"><I18nVue t='Services.Mobile_banking.download'/></span>
                    <h6 class="font-700 line-base">Google Play</h6>
                  </div>
                </div>
              </v-btn>
            </div>

            <v-btn
                :to="{ name: 'CardListType', params: {type: 'mastercard'} }"
                depressed
                rounded
                color="danger"
                min-width="150"
                min-height="50"
                max-width="210"
                max-height="75"
                class="text-transform-reset mt-small-4 mx-small-auto"
            >
              <h5 class="font-600 text-white d-flex align-center">
                <globe-icon size="22" class="mr-2"/>
                {{ $t("MobileSlide.apply_card") }}
              </h5>
            </v-btn>
          </div>
        </v-col>

      </v-row>
    </v-container>
  </section>
</template>

<script>
import {Hooper, Slide} from 'hooper'
import 'hooper/dist/hooper.css'
import I18nVue from '@/I18nVue'
import {GlobeIcon} from "vue-feather-icons"

export default {
  name: "MobileSlide",
  components: {
    Hooper,
    Slide,
    I18nVue,
    GlobeIcon
  },
  data() {
    return {
      mobileHooperSettings: {
        itemsToShow: 1,
        wheelControl: false,
        touchDrag: false,
        mouseDrag: false,
        playSpeed: 5000,
        autoPlay: true,
      },
      carouselData: 0,
    }
  },
  methods: {
    setSlideTo(val) {
      const $items = document.querySelectorAll('.slide-aside-items')

      $items.forEach((item) => item.classList.remove('active'))

      // $items[val].classList.add('active')

      this.$refs.mobileCarousel.slideTo(val)
    },
    updateCarousel(payload) {
      this.carouselData = payload.currentSlide

      this.$refs.mobileCarousel.restartTimer()
    },
  },
}
</script>

<style>

</style>