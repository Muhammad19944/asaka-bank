<template>
  <div class="accounting-cash-service-view">
    <v-container>
      <div class="detail-view-content">
        <v-row>
          <v-col md="6">
            <div class="pr-16">
              <v-responsive :aspect-ratio="4/4">
                <img :src="accountModel.image.url&&$http.defaults.baseURL+accountModel.image.url" alt="Credit image" class="p-absolute" />
              </v-responsive>
            </div>
          </v-col>
          <v-col md="6">
            <h1 class="font-700 text-extra-large-4 dark-text">
              <I18nVue :uz="accountModel.title_uz" :ru="accountModel.title_ru" :en="accountModel.title_en" />
            </h1>
            <v-divider class="my-8" />
            <span v-if='$i18n.locale === "en"' v-html="accountModel.content_en" />
            <span v-if='$i18n.locale === "ru"' v-html="accountModel.content_ru" />
            <span v-if='$i18n.locale === "uz"' v-html="accountModel.content_uz" />
          </v-col>
        </v-row>
      </div>
    </v-container>

    <div class="view-toolbar mt-16">
      <v-container class="pa-0">
        <div class="app-tab-header px-4 d-flex">
          <div class="tab-header-items text-center mr-7 active" data-item="header">
            <a class="navigation-link navigation-link__hover p-relative text--h4 py-6 font-600 d-inline-block">
              <I18nVue t="CorporateCustomers.SettlementAndCashService.tab1" />
            </a>
          </div>
          <div class="tab-header-items text-center mr-7 " data-item="header">
            <a class="navigation-link navigation-link__hover p-relative text--h4 py-6 font-600 d-inline-block">
              <I18nVue t="CorporateCustomers.SettlementAndCashService.tab2" />
            </a>
          </div>
        </div>
      </v-container>
    </div>
    <!--    <pre>{{JSON.stringify(item, null, 2)}}</pre>-->
    <div class="view-toolbar-content py-16 overflow-hidden">
      <v-container>
        <div class="app-tab-content p-relative">
          <div class="tab-content-items active" data-item="content">
            <h1 class="text-extra-large-4 font-700 dark-text mb-2">{{ accountModel.advantage.title }}</h1>

            <h3 class="grey-light-2 mb-12">{{ accountModel.advantage.sub_title }}</h3>

            <v-row class="mb-15 pb-10">
              <template v-for="item in accountModel.advantage.cards">
                <v-col :key="item.id" lg="4" md="6">
                  <div class="app-slide-card pa-4 pa-sm-10 rounded-lg overflow-hidden p-relative h-100"
                       style="min-height: auto">
                    <div class="d-flex align-center">
                      <v-avatar color="danger" size="80" class="mr-5">
                        <svg id="icon-open" viewBox="0 0 64 64" class="size-lg" style="fill: #fff">
                          <path
                            d="m61.142 21.272.323-.323c.99-.99 1.536-2.307 1.536-3.707-.001-2.89-2.353-5.242-5.244-5.242-1.4 0-2.717.545-3.707 1.536l-5.05 5.05v-17.586h-48v62h35.414l12.586-12.586v-17l9.707-9.707.379-.379c.212-.211.493-.328.793-.328.618 0 1.121.503 1.121 1.121 0 .3-.117.581-.328.793l-8.379 8.379 1.414 1.414 8.379-8.379c.589-.589.914-1.373.914-2.207 0-1.271-.766-2.362-1.858-2.849zm-24.142 9.314v-17.586h6v11.586zm6-19.586h-12v-4h12zm-14 0h-14v-4h14zm-16 0h-6v-4h6zm-6 2h6v20h-6zm8 0h6v20h-6zm8 0h6v20h-6zm8 0h4v19.586l-.414.414h-3.586zm.707 27.122c.076-.53.239-1.046.477-1.523l4.218 4.218c-.478.238-.993.401-1.523.477l-3.7.528zm6.293 1.464-4.586-4.586 16.586-16.586 4.586 4.586zm-1 18v-8.586h8.586zm10-10.586h-12v12h-32v-58h44v17.586l-2 2v-17.586h-40v30h27.586l-.879.879c-1.064 1.063-1.767 2.47-1.979 3.959l-.906 6.34 6.34-.906c1.49-.212 2.896-.916 3.959-1.979l7.879-7.879zm9-25.414-4.586-4.586 4.05-4.05c.613-.612 1.427-.95 2.293-.95 1.788 0 3.243 1.455 3.243 3.243 0 .866-.337 1.68-.95 2.293l-2.378 2.378-.379.379z" />
                          <path
                            d="m16 45c.551 0 1 .449 1 1h2c0-1.302-.839-2.402-2-2.816v-2.184h-2v2h-2v3c0 1.654 1.346 3 3 3 .551 0 1 .449 1 1v1h-1c-.551 0-1-.449-1-1h-2c0 1.302.839 2.402 2 2.816v2.184h2v-2h2v-3c0-1.654-1.346-3-3-3-.551 0-1-.449-1-1v-1z" />
                          <circle cx="10" cy="48" r="1" />
                          <circle cx="22" cy="48" r="1" />
                          <path
                            d="m16 37c-6.065 0-11 4.935-11 11s4.935 11 11 11 11-4.935 11-11-4.935-11-11-11zm0 20c-4.962 0-9-4.038-9-9s4.038-9 9-9 9 4.038 9 9-4.038 9-9 9z" />
                          <path d="m31 57h2v2h-2z" />
                          <path d="m31 53h2v2h-2z" />
                          <path d="m31 49h2v2h-2z" />
                        </svg>
                      </v-avatar>
                      <div>
                        <h3 class="dark-text font-600">
                          <I18nVue :uz="item.title_uz" :ru="item.title_ru" :en="item.title_en" />
                        </h3>
                        <h5>
                          <I18nVue :uz="item.description_uz" :ru="item.description_ru" :en="item.description_en" />
                        </h5>
                      </div>
                    </div>
                  </div>
                </v-col>
              </template>
            </v-row>

            <h1 class="text-extra-large-4 font-700 dark-text mb-2">
              <I18nVue t="CorporateCustomers.SettlementAndCashService.text1" />
            </h1>

            <h3 class="grey-light-2 mb-15">
              <I18nVue t="CorporateCustomers.SettlementAndCashService.text2" />
            </h3>

            <v-row>
              <v-col lg="3" md="6">
                <div
                  class="app-card-simple text-center transition-all py-10 px-7 rounded-lg h-100 mx-2">
                  <h1 class="font-300 text-extra-large primary-text">1</h1>

                  <v-divider style="border-color: rgba(var(--border-color), 1)" class="my-10" />

                  <h4 class="dark-text">
                    <I18nVue t="CorporateCustomers.SettlementAndCashService.text3" />
                  </h4>
                </div>
              </v-col>

              <v-col lg="3" md="6">
                <div
                  class="app-card-simple text-center transition-all py-10 px-7 rounded-lg h-100 mx-2">
                  <h1 class="font-300 text-extra-large primary-text">2</h1>

                  <v-divider style="border-color: rgba(var(--border-color), 1)" class="my-10" />

                  <h4 class="dark-text">
                    <I18nVue t="CorporateCustomers.SettlementAndCashService.text4" />
                  </h4>
                </div>
              </v-col>

              <v-col lg="3" md="6">
                <div
                  class="app-card-simple text-center transition-all py-10 px-7 rounded-lg h-100 mx-2">
                  <h1 class="font-300 text-extra-large primary-text">3</h1>

                  <v-divider style="border-color: rgba(var(--border-color), 1)" class="my-10" />

                  <h4 class="dark-text">
                    <I18nVue t="CorporateCustomers.SettlementAndCashService.text5" />
                  </h4>
                </div>
              </v-col>

              <v-col lg="3" md="6">
                <div
                  class="transition-all py-10 px-7 rounded-lg h-100 mx-2 primary-bg d-flex flex-column align-start">
                  <h2 class="font-600">
                    <I18nVue t="CorporateCustomers.SettlementAndCashService.text6" />
                  </h2>

                  <h5 class="font-300 my-4">
                    <I18nVue t="CorporateCustomers.SettlementAndCashService.text7" />
                  </h5>
                  <v-btn
                    :to="{name: 'AccountOpen'}"
                    depressed
                    color="rgba(var(--main-primary), 1)"
                    rounded
                    min-width="192"
                    min-height="50"
                    class="mt-auto"
                    style="background-color: #fff"
                  >
                    <I18nVue classes="primary-text font-700" t="CorporateCustomers.btn1" />
                  </v-btn>
                </div>
              </v-col>
            </v-row>

          </div>

          <div class="tab-content-items" data-item="content">
            <v-row>
              <v-col md="6">
                <h1 class="font-600 dark-text mb-8">
                  <I18nVue t="CorporateCustomers.SettlementAndCashService.text8" />
                </h1>
                <template v-for="(item, idx) in accountModel.required_documents.docs">
                  <!--                  <pre>{{JSON.stringify(item,null,2)}}</pre>-->
                  <div
                    :key="idx"
                    class="app-slide-card pa-6 mb-6 rounded-lg overflow-hidden p-relative"
                    style="min-height: auto">
                    <div class="d-flex align-center">
                      <div class="mr-5 p-relative">
                        <v-avatar color="#fff" size="75">
                          <svg id="icon-file" viewBox="0 0 64 64" class="size-lg">
                            <path
                              d="M53.98 9.143h-3.97c-.082 0-.155.028-.232.047V5.023C49.778 2.253 47.473 0 44.64 0H10.217C7.384 0 5.08 2.253 5.08 5.023v46.843c0 2.77 2.305 5.023 5.138 5.023h6.037v2.268c0 2.67 2.216 4.843 4.941 4.843H53.98c2.725 0 4.942-2.173 4.942-4.843v-45.17c0-2.671-2.217-4.844-4.942-4.844zM7.11 51.866V5.023c0-1.649 1.394-2.991 3.106-2.991H44.64c1.712 0 3.106 1.342 3.106 2.99v46.844c0 1.649-1.394 2.991-3.106 2.991H10.217c-1.712 0-3.106-1.342-3.106-2.99zm49.778 7.29c0 1.551-1.306 2.812-2.91 2.812H21.195c-1.604 0-2.91-1.26-2.91-2.811v-2.268H44.64c2.833 0 5.138-2.253 5.138-5.023V11.128c.077.018.15.047.233.047h3.968c1.604 0 2.91 1.26 2.91 2.811v45.17z"></path>
                            <path
                              d="M38.603 13.206H16.254a1.015 1.015 0 1 0 0 2.032h22.35a1.015 1.015 0 1 0 0-2.032zM38.603 21.333H16.254a1.015 1.015 0 1 0 0 2.032h22.35a1.015 1.015 0 1 0 0-2.032zM38.603 29.46H16.254a1.015 1.015 0 1 0 0 2.032h22.35a1.015 1.015 0 1 0 0-2.032zM28.444 37.587h-12.19a1.015 1.015 0 1 0 0 2.032h12.19a1.015 1.015 0 1 0 0-2.032z"></path>
                          </svg>
                        </v-avatar>
                      </div>

                      <div>
                        <h3 class="dark-text font-600">
                          <I18nVue :uz="item.title_uz" :ru="item.title_ru" :en="item.title_en" />
                        </h3>

                        <h5>
                          <I18nVue :uz="item.description_uz" :ru="item.description_ru" :en="item.description_en" />
                        </h5>
                      </div>
                    </div>
                  </div>
                </template>
              </v-col>

              <v-col md="6">
                <h1 class="font-600 dark-text mb-8">
                  <I18nVue t="CorporateCustomers.SettlementAndCashService.text9" />
                </h1>

                <template v-for="item in accountModel.required_documents.for_download">
                  <!--                   <pre>{{JSON.stringify(item,null,2)}}</pre>-->
                  <a
                    :href="$http.defaults.baseURL + item.url"
                    :key="item.title_uz"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="app-slide-card pa-6 mb-6 rounded-lg overflow-hidden p-relative d-block text-decoration-none"
                    style="min-height: auto"
                  >
                    <div class="d-flex align-center">
                      <div class="mr-5 p-relative">
                        <v-avatar color="#fff" size="75">
                          <svg id="icon-file" viewBox="0 0 64 64" class="size-lg">
                            <path
                              d="M53.98 9.143h-3.97c-.082 0-.155.028-.232.047V5.023C49.778 2.253 47.473 0 44.64 0H10.217C7.384 0 5.08 2.253 5.08 5.023v46.843c0 2.77 2.305 5.023 5.138 5.023h6.037v2.268c0 2.67 2.216 4.843 4.941 4.843H53.98c2.725 0 4.942-2.173 4.942-4.843v-45.17c0-2.671-2.217-4.844-4.942-4.844zM7.11 51.866V5.023c0-1.649 1.394-2.991 3.106-2.991H44.64c1.712 0 3.106 1.342 3.106 2.99v46.844c0 1.649-1.394 2.991-3.106 2.991H10.217c-1.712 0-3.106-1.342-3.106-2.99zm49.778 7.29c0 1.551-1.306 2.812-2.91 2.812H21.195c-1.604 0-2.91-1.26-2.91-2.811v-2.268H44.64c2.833 0 5.138-2.253 5.138-5.023V11.128c.077.018.15.047.233.047h3.968c1.604 0 2.91 1.26 2.91 2.811v45.17z" />
                            <path
                              d="M38.603 13.206H16.254a1.015 1.015 0 1 0 0 2.032h22.35a1.015 1.015 0 1 0 0-2.032zM38.603 21.333H16.254a1.015 1.015 0 1 0 0 2.032h22.35a1.015 1.015 0 1 0 0-2.032zM38.603 29.46H16.254a1.015 1.015 0 1 0 0 2.032h22.35a1.015 1.015 0 1 0 0-2.032zM28.444 37.587h-12.19a1.015 1.015 0 1 0 0 2.032h12.19a1.015 1.015 0 1 0 0-2.032z" />
                          </svg>
                        </v-avatar>
                      </div>

                      <div class="flex-1">
                        <h3 class="dark-text font-600">
                          <I18nVue :uz="item.title_uz" :ru="item.title_ru" :en="item.title_en" />
                        </h3>

                        <h5>
                          <I18nVue :uz="item.description_uz" :ru="item.description_ru" :en="item.description_en" />
                        </h5>
                      </div>

                      <div class="download-icon pr-10 transition-all">
                        <download-icon size="1.8x" class="custom-class" />
                      </div>
                    </div>
                  </a>
                </template>
              </v-col>
            </v-row>
          </div>
        </div>
      </v-container>
    </div>
  </div>
</template>

<script>
import { DownloadIcon } from "vue-feather-icons";
import { appTab } from "@/utils/frontend";
import I18nVue from "@/I18nVue";

export default {
  name: "index",
  components: { I18nVue, DownloadIcon },
  data() {
    return {
      accountModel: {
        advantage: {},
        image: {},
        required_documents: {}
      }
    };
  },
  mounted() {
    const $tabHeaderItems = document.querySelectorAll("[data-item=\"header\"]");
    const $tabContentItems = document.querySelectorAll("[data-item=\"content\"]");

    appTab($tabHeaderItems, $tabContentItems);

    this.$http.get("/1/account/")
      .then(({ data }) => {
        this.accountModel = data.results[0];
        // console.log(this.accountModel);
      });
  }
};
</script>

<style>

</style>
