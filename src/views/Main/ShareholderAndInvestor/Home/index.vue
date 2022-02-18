<template>
  <div class="investors-view">
    <div class="hero-banner d-flex align-center p-relative">
      <div class="view-background p-absolute w-100 h-100">
        <img src="/images/123.jpg" alt="Background" class="w-100 h-100 img-cover" />
      </div>

      <v-container class="p-relative">
        <v-row>
          <v-col md="6" align-self="center" class="text-white text-center text-md-left">
            <h1 class="font-600 text-extra-large mb-2">
              <I18nVue t="SHAREHOLDERS_AND_INVESTORS.Index.text1" />
            </h1>
            <h2>
              <I18nVue t="SHAREHOLDERS_AND_INVESTORS.Index.text2" />
            </h2>
            <v-divider style="border-color: #fff" class="mt-8 mb-10" />
            <h4>
              <I18nVue t="SHAREHOLDERS_AND_INVESTORS.Index.text3" />
            </h4>
            <v-btn :to="{ name: 'FinancialIndicators' }" depressed color="danger" min-width="192" min-height="50" rounded class="mt-8">
              <I18nVue classes="font-700 text-white" t="SHAREHOLDERS_AND_INVESTORS.Index.btn" />
            </v-btn>
          </v-col>
          <v-spacer />
          <v-col md="6" class="d-md-block d-none">
	          <img v-if="$i18n.locale === 'uz'" src="/images/chart_uz-min.png" alt="Chart" style="transform: scale(1.25)">
	          <img v-if="$i18n.locale === 'ru'" src="/images/chart_ru-min.png" alt="Chart" style="transform: scale(1.25)">
	          <img v-if="$i18n.locale === 'en'" src="/images/chart_en-min.png" alt="Chart" style="transform: scale(1.25)">
          </v-col>
        </v-row>
      </v-container>
    </div>
    <section class="section section-grey">
      <v-container>
        <v-row>
          <v-col lg="5">
            <div class="credit-widget pa-4 pa-sm-10 rounded-lg overflow-hidden">
              <v-row>
                <v-col md="2">
                  <img src="/images/logo.svg" style="max-width: 100px; max-height: 100px;" class="mt-2">
                </v-col>
                <v-col md="10">
                  <h1 class="font-600 dark-text">
                    <I18nVue t="SHAREHOLDERS_AND_INVESTORS.Index.text4" />
                  </h1>
                  <div class="mt-5">
                    <router-link :to="{ name: 'BankStructure' }" class="navigation-link text--h4 font-600 text-decoration-none d-inline-block mb-4">
                      <I18nVue t="SHAREHOLDERS_AND_INVESTORS.Index.link1" />
                    </router-link>
                  </div>

<!--                  <div class="mt-5">-->
<!--                    <router-link-->
<!--                      to="/"-->
<!--                      class="navigation-link text&#45;&#45;h4 font-600 text-decoration-none d-inline-block"-->
<!--                    >-->
<!--                      <I18nVue t="SHAREHOLDERS_AND_INVESTORS.Index.link2" />-->
<!--                    </router-link>-->
<!--                  </div>-->

                  <div class="mt-5">
                    <router-link
                      :to="{name: 'InternalDocuments'}" class="navigation-link text--h4 font-600 text-decoration-none d-inline-block mb-4">
                      <I18nVue t="SHAREHOLDERS_AND_INVESTORS.Index.link3" />
                    </router-link>
                  </div>

                  <div class="mt-5">
                    <router-link :to="{ name: 'BankPerformance' }" class="navigation-link text--h4 font-600 text-decoration-none d-inline-block mb-4">
                      <I18nVue t="SHAREHOLDERS_AND_INVESTORS.Index.link4" />
                    </router-link>
                  </div>
                </v-col>
              </v-row>
            </div>
          </v-col>

          <v-col lg="7">
            <v-row>
              <v-col lg="6" md="6">
                <router-link
                  :to="{ name: 'FinancialIndicators' }"
                  class="app-slide-card d-block text-decoration-none pa-4 pa-sm-10 rounded-lg overflow-hidden p-relative h-100"
                  style="min-height: auto"
                >
                  <div class="d-flex align-center">
                    <v-avatar color="danger" size="80" class="mr-5">
                      <svg id="icon-open" viewBox="0 0 64 64" class="size-lg" style="fill: #fff">
                        <path d="m61.142 21.272.323-.323c.99-.99 1.536-2.307 1.536-3.707-.001-2.89-2.353-5.242-5.244-5.242-1.4 0-2.717.545-3.707 1.536l-5.05 5.05v-17.586h-48v62h35.414l12.586-12.586v-17l9.707-9.707.379-.379c.212-.211.493-.328.793-.328.618 0 1.121.503 1.121 1.121 0 .3-.117.581-.328.793l-8.379 8.379 1.414 1.414 8.379-8.379c.589-.589.914-1.373.914-2.207 0-1.271-.766-2.362-1.858-2.849zm-24.142 9.314v-17.586h6v11.586zm6-19.586h-12v-4h12zm-14 0h-14v-4h14zm-16 0h-6v-4h6zm-6 2h6v20h-6zm8 0h6v20h-6zm8 0h6v20h-6zm8 0h4v19.586l-.414.414h-3.586zm.707 27.122c.076-.53.239-1.046.477-1.523l4.218 4.218c-.478.238-.993.401-1.523.477l-3.7.528zm6.293 1.464-4.586-4.586 16.586-16.586 4.586 4.586zm-1 18v-8.586h8.586zm10-10.586h-12v12h-32v-58h44v17.586l-2 2v-17.586h-40v30h27.586l-.879.879c-1.064 1.063-1.767 2.47-1.979 3.959l-.906 6.34 6.34-.906c1.49-.212 2.896-.916 3.959-1.979l7.879-7.879zm9-25.414-4.586-4.586 4.05-4.05c.613-.612 1.427-.95 2.293-.95 1.788 0 3.243 1.455 3.243 3.243 0 .866-.337 1.68-.95 2.293l-2.378 2.378-.379.379z" />
                        <path d="m16 45c.551 0 1 .449 1 1h2c0-1.302-.839-2.402-2-2.816v-2.184h-2v2h-2v3c0 1.654 1.346 3 3 3 .551 0 1 .449 1 1v1h-1c-.551 0-1-.449-1-1h-2c0 1.302.839 2.402 2 2.816v2.184h2v-2h2v-3c0-1.654-1.346-3-3-3-.551 0-1-.449-1-1v-1z"></path>
                        <circle cx="10" cy="48" r="1" />
                        <circle cx="22" cy="48" r="1" />
                        <path d="m16 37c-6.065 0-11 4.935-11 11s4.935 11 11 11 11-4.935 11-11-4.935-11-11-11zm0 20c-4.962 0-9-4.038-9-9s4.038-9 9-9 9 4.038 9 9-4.038 9-9 9z" />
                        <path d="m31 57h2v2h-2z" />
                        <path d="m31 53h2v2h-2z" />
                        <path d="m31 49h2v2h-2z" />
                      </svg>
                    </v-avatar>
                    <div>
                      <h3 class="dark-text font-600">
                        <I18nVue t="SHAREHOLDERS_AND_INVESTORS.Index.link5" />
                      </h3>
                    </div>
                  </div>
                </router-link>
              </v-col>

              <v-col lg="6" md="6">
                <router-link
                  :to="{ name: 'StatisticGraphs' }"
                  class="app-slide-card d-block text-decoration-none pa-4 pa-sm-10 rounded-lg overflow-hidden p-relative h-100"
                  style="min-height: auto"
                >
                  <div class="d-flex align-center">
                    <v-avatar color="danger" size="80" class="mr-5">
                      <svg id="icon-open" viewBox="0 0 64 64" class="size-lg" style="fill: #fff">
                        <path d="m61.142 21.272.323-.323c.99-.99 1.536-2.307 1.536-3.707-.001-2.89-2.353-5.242-5.244-5.242-1.4 0-2.717.545-3.707 1.536l-5.05 5.05v-17.586h-48v62h35.414l12.586-12.586v-17l9.707-9.707.379-.379c.212-.211.493-.328.793-.328.618 0 1.121.503 1.121 1.121 0 .3-.117.581-.328.793l-8.379 8.379 1.414 1.414 8.379-8.379c.589-.589.914-1.373.914-2.207 0-1.271-.766-2.362-1.858-2.849zm-24.142 9.314v-17.586h6v11.586zm6-19.586h-12v-4h12zm-14 0h-14v-4h14zm-16 0h-6v-4h6zm-6 2h6v20h-6zm8 0h6v20h-6zm8 0h6v20h-6zm8 0h4v19.586l-.414.414h-3.586zm.707 27.122c.076-.53.239-1.046.477-1.523l4.218 4.218c-.478.238-.993.401-1.523.477l-3.7.528zm6.293 1.464-4.586-4.586 16.586-16.586 4.586 4.586zm-1 18v-8.586h8.586zm10-10.586h-12v12h-32v-58h44v17.586l-2 2v-17.586h-40v30h27.586l-.879.879c-1.064 1.063-1.767 2.47-1.979 3.959l-.906 6.34 6.34-.906c1.49-.212 2.896-.916 3.959-1.979l7.879-7.879zm9-25.414-4.586-4.586 4.05-4.05c.613-.612 1.427-.95 2.293-.95 1.788 0 3.243 1.455 3.243 3.243 0 .866-.337 1.68-.95 2.293l-2.378 2.378-.379.379z" />
                        <path d="m16 45c.551 0 1 .449 1 1h2c0-1.302-.839-2.402-2-2.816v-2.184h-2v2h-2v3c0 1.654 1.346 3 3 3 .551 0 1 .449 1 1v1h-1c-.551 0-1-.449-1-1h-2c0 1.302.839 2.402 2 2.816v2.184h2v-2h2v-3c0-1.654-1.346-3-3-3-.551 0-1-.449-1-1v-1z" />
                        <circle cx="10" cy="48" r="1" />
                        <circle cx="22" cy="48" r="1" />
                        <path d="m16 37c-6.065 0-11 4.935-11 11s4.935 11 11 11 11-4.935 11-11-4.935-11-11-11zm0 20c-4.962 0-9-4.038-9-9s4.038-9 9-9 9 4.038 9 9-4.038 9-9 9z" />
                        <path d="m31 57h2v2h-2z" />
                        <path d="m31 53h2v2h-2z" />
                        <path d="m31 49h2v2h-2z" />
                      </svg>
                    </v-avatar>

                    <div>
                      <h3 class="dark-text font-600">
                        <I18nVue t="SHAREHOLDERS_AND_INVESTORS.Index.link6" />
                      </h3>
                    </div>
                  </div>
                </router-link>
              </v-col>

              <v-col lg="6" md="6">
                <router-link
                  :to="{ name: 'OpenData' }"
                  class="app-slide-card d-block text-decoration-none pa-4 pa-sm-10 rounded-lg overflow-hidden p-relative h-100"
                  style="min-height: auto"
                >
                  <div class="d-flex align-center">
                    <v-avatar color="danger" size="80" class="mr-5">
                      <svg id="icon-open" viewBox="0 0 64 64" class="size-lg" style="fill: #fff">
                        <path d="m61.142 21.272.323-.323c.99-.99 1.536-2.307 1.536-3.707-.001-2.89-2.353-5.242-5.244-5.242-1.4 0-2.717.545-3.707 1.536l-5.05 5.05v-17.586h-48v62h35.414l12.586-12.586v-17l9.707-9.707.379-.379c.212-.211.493-.328.793-.328.618 0 1.121.503 1.121 1.121 0 .3-.117.581-.328.793l-8.379 8.379 1.414 1.414 8.379-8.379c.589-.589.914-1.373.914-2.207 0-1.271-.766-2.362-1.858-2.849zm-24.142 9.314v-17.586h6v11.586zm6-19.586h-12v-4h12zm-14 0h-14v-4h14zm-16 0h-6v-4h6zm-6 2h6v20h-6zm8 0h6v20h-6zm8 0h6v20h-6zm8 0h4v19.586l-.414.414h-3.586zm.707 27.122c.076-.53.239-1.046.477-1.523l4.218 4.218c-.478.238-.993.401-1.523.477l-3.7.528zm6.293 1.464-4.586-4.586 16.586-16.586 4.586 4.586zm-1 18v-8.586h8.586zm10-10.586h-12v12h-32v-58h44v17.586l-2 2v-17.586h-40v30h27.586l-.879.879c-1.064 1.063-1.767 2.47-1.979 3.959l-.906 6.34 6.34-.906c1.49-.212 2.896-.916 3.959-1.979l7.879-7.879zm9-25.414-4.586-4.586 4.05-4.05c.613-.612 1.427-.95 2.293-.95 1.788 0 3.243 1.455 3.243 3.243 0 .866-.337 1.68-.95 2.293l-2.378 2.378-.379.379z" />
                        <path d="m16 45c.551 0 1 .449 1 1h2c0-1.302-.839-2.402-2-2.816v-2.184h-2v2h-2v3c0 1.654 1.346 3 3 3 .551 0 1 .449 1 1v1h-1c-.551 0-1-.449-1-1h-2c0 1.302.839 2.402 2 2.816v2.184h2v-2h2v-3c0-1.654-1.346-3-3-3-.551 0-1-.449-1-1v-1z" />
                        <circle cx="10" cy="48" r="1" />
                        <circle cx="22" cy="48" r="1" />
                        <path d="m16 37c-6.065 0-11 4.935-11 11s4.935 11 11 11 11-4.935 11-11-4.935-11-11-11zm0 20c-4.962 0-9-4.038-9-9s4.038-9 9-9 9 4.038 9 9-4.038 9-9 9z" />
                        <path d="m31 57h2v2h-2z" />
                        <path d="m31 53h2v2h-2z" />
                        <path d="m31 49h2v2h-2z" />
                      </svg>
                    </v-avatar>

                    <div>
                      <h3 class="dark-text font-600">
                        <I18nVue t="SHAREHOLDERS_AND_INVESTORS.Index.link7" />
                      </h3>
                    </div>
                  </div>
                </router-link>
              </v-col>

              <v-col lg="6" md="6">
                <router-link
                  :to="{ name: 'Affiliates' }"
                  class="app-slide-card d-block text-decoration-none pa-4 pa-sm-10 rounded-lg overflow-hidden p-relative h-100"
                  style="min-height: auto"
                >
                  <div class="d-flex align-center">
                    <v-avatar color="danger" size="80" class="mr-5">
                      <svg id="icon-open" viewBox="0 0 64 64" class="size-lg" style="fill: #fff">
                        <path d="m61.142 21.272.323-.323c.99-.99 1.536-2.307 1.536-3.707-.001-2.89-2.353-5.242-5.244-5.242-1.4 0-2.717.545-3.707 1.536l-5.05 5.05v-17.586h-48v62h35.414l12.586-12.586v-17l9.707-9.707.379-.379c.212-.211.493-.328.793-.328.618 0 1.121.503 1.121 1.121 0 .3-.117.581-.328.793l-8.379 8.379 1.414 1.414 8.379-8.379c.589-.589.914-1.373.914-2.207 0-1.271-.766-2.362-1.858-2.849zm-24.142 9.314v-17.586h6v11.586zm6-19.586h-12v-4h12zm-14 0h-14v-4h14zm-16 0h-6v-4h6zm-6 2h6v20h-6zm8 0h6v20h-6zm8 0h6v20h-6zm8 0h4v19.586l-.414.414h-3.586zm.707 27.122c.076-.53.239-1.046.477-1.523l4.218 4.218c-.478.238-.993.401-1.523.477l-3.7.528zm6.293 1.464-4.586-4.586 16.586-16.586 4.586 4.586zm-1 18v-8.586h8.586zm10-10.586h-12v12h-32v-58h44v17.586l-2 2v-17.586h-40v30h27.586l-.879.879c-1.064 1.063-1.767 2.47-1.979 3.959l-.906 6.34 6.34-.906c1.49-.212 2.896-.916 3.959-1.979l7.879-7.879zm9-25.414-4.586-4.586 4.05-4.05c.613-.612 1.427-.95 2.293-.95 1.788 0 3.243 1.455 3.243 3.243 0 .866-.337 1.68-.95 2.293l-2.378 2.378-.379.379z" />
                        <path d="m16 45c.551 0 1 .449 1 1h2c0-1.302-.839-2.402-2-2.816v-2.184h-2v2h-2v3c0 1.654 1.346 3 3 3 .551 0 1 .449 1 1v1h-1c-.551 0-1-.449-1-1h-2c0 1.302.839 2.402 2 2.816v2.184h2v-2h2v-3c0-1.654-1.346-3-3-3-.551 0-1-.449-1-1v-1z" />
                        <circle cx="10" cy="48" r="1" />
                        <circle cx="22" cy="48" r="1" />
                        <path d="m16 37c-6.065 0-11 4.935-11 11s4.935 11 11 11 11-4.935 11-11-4.935-11-11-11zm0 20c-4.962 0-9-4.038-9-9s4.038-9 9-9 9 4.038 9 9-4.038 9-9 9z" />
                        <path d="m31 57h2v2h-2z" />
                        <path d="m31 53h2v2h-2z" />
                        <path d="m31 49h2v2h-2z" />
                      </svg>
                    </v-avatar>
                    <div>
                      <h3 class="dark-text font-600">
                        <I18nVue t="SHAREHOLDERS_AND_INVESTORS.Index.link8" />
                      </h3>
                    </div>
                  </div>
                </router-link>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </div>
</template>
<script>
import I18nVue from "@/I18nVue";

export default {
  name: "index",
  components: { I18nVue },
  data() {
    return {
      series: [1109, 220, 39, 41, 100],
      chartOptions: {
        labels: ["Промышленность  1109.4 млрд.", "Сельское хозяйство: 220 млрд.", "Строительство: 39.4 млрд.", "Социальная сфера: 41.1 млрд.", "Прочие направления: 100 млрд."],
        chart: {
          width: 380,
          type: "pie"
        },
        colors: ["rgba(111,111,111,0.5)"],
        legend: false,
        dataLabels: {
          style: {
            colors: ["transparent"]
          }
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              }
            }
          }
        ]
      }
    };
  }
};
</script>
<style>
.apexcharts-canvas{
  cursor: pointer;
}
.apexcharts-tooltip-series-group{
  min-width: 30px;
  max-width: 300px;
  height: auto;
  padding: 0 0.8vw;
  border-radius: 2px;
  color: #fff;
  font-size: 17px;
  text-shadow: 0 1px 5px #000;
  line-height: 1.3;
  letter-spacing: .06em;
}
.apexcharts-tooltip-series-group::before {
  content: "";
  top: 0.3vw;
  right: 100%;
  width: 0.5vw;
  height: 0.5vw;
  background-color: #D70C17;
  border-radius: 50%;
  box-sizing: inherit;
  margin-right: 10px;
}
</style>
