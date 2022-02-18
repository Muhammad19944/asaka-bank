<template>
  <div class="press-center-view">
    <div class="view-toolbar mt-16">
      <v-container class="pa-0">
        <div class="app-tab-header d-flex">
          <div
            v-for="item in categoryList"
            :key="item.id"
            class="tab-header-items text-center mr-7"
            :class='categorySelected === item.id ? "active": ""'
          >
            <a @click.prevent="getCategory(item.id)"
               class="navigation-link navigation-link__hover p-relative text--h4 py-6 font-600 d-inline-block">
              <span v-if='$i18n.locale === "en"' v-html="item.name_en" />
              <span v-if='$i18n.locale === "ru"' v-html="item.name_ru" />
              <span v-if='$i18n.locale === "uz"' v-html="item.name_uz" />
            </a>
          </div>

        </div>
      </v-container>
    </div>

    <div class="view-toolbar-content py-15 overflow-hidden">
      <v-container class="pa-0">
        <div class="app-tab-content p-relative">
          <div class="tab-content-items active">
            <v-row>
              <v-col v-for="item in newsList" :key="item.id" md="3">
                <router-link :to="{ name: 'NewsShow', params: { id: item.id } }" class="app-card border-all d-flex flex-column text-decoration-none rounded overflow-hidden h-100">
                  <div class="app-card-header">
                    <v-responsive :aspect-ratio="3 / 2">
                      <div class="card-header-img p-absolute w-100 h-100 d-flex pa-7">
                        <img src="/images/logo.svg" alt="App logo" class="ma-auto transition-all" />
                      </div>
                    </v-responsive>
                  </div>

                  <div class="app-card-body pa-6 flex-1 d-flex flex-column">
                    <div class="card-body-meta d-flex mb-5">
                      <div class="card-date mr-6">
                        <h2 class="text-center mb-1">{{ item.modified_date | filterOnlyDate }}</h2>
                        <span>{{ item.modified_date | filterOnlyMonth }}</span>
                      </div>

                      <div class="card-text main-grey">
                        <h5 class="line-truncate">
                          <span v-if='$i18n.locale === "en"' v-html="item.title_en" />
                          <span v-if='$i18n.locale === "ru"' v-html="item.title_ru" />
                          <span v-if='$i18n.locale === "uz"' v-html="item.title_uz" />
                        </h5>
                      </div>
                    </div>

                    <div class="card-anchor d-flex align-center mt-auto">
                      <h4 class="font-600 mr-4">
                        <I18nVue t="more" />
                      </h4>

                      <div class="card-anchor-circle d-flex align-center justify-center transition-all">
                        <chevron-right-icon size="1.2x" class="primary-text transition-all" />
                      </div>
                    </div>
                  </div>
                </router-link>
              </v-col>
            </v-row>
          </div>
        </div>
      </v-container>
    </div>
  </div>
</template>

<script>
import { ChevronRightIcon } from "vue-feather-icons";
import { appTab } from "@/utils/frontend";
import I18nVue from "@/I18nVue";

export default {
  name: "index",
  components: {
    ChevronRightIcon,
    I18nVue
  },
  data() {
    return {
      newsList: [],
      categoryList: [],
      categorySelected: null
    };
  },

  mounted() {
    const $tabHeaderItems = document.querySelectorAll("[data-item=\"header\"]");
    const $tabContentItems = document.querySelectorAll("[data-item=\"content\"]");

    appTab($tabHeaderItems, $tabContentItems);

    this.getCategoryList();

    setTimeout(() => {
      this.getList();
    }, 500);
  },

  methods: {
    getList() {
      // this.newsList = []

      this.$http.get("/1/news/", {
        params: {
          category: this.categorySelected
        }
      }).then(({ data }) => {
        this.newsList = data.results;

        // console.log(this.newsList);
      });
    },

    /*
    *
    * */
    getCategoryList() {
      this.$http.get("1/category")
        .then(({ data }) => {
          this.categoryList = data.results;

          this.categorySelected = this.categoryList[0].id;
        });
    },

    /*
    *
    * */
    getCategory(id) {
      this.categorySelected = id;
      this.getList();
    }
  }
};
</script>

<style></style>
