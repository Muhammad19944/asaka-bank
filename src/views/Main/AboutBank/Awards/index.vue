<template>
  <div class="awards-view">
    <section class="best-offers-view section">
      <v-container>
        <v-row>
          <template v-for="(item, index) in awardsList">
            <v-col md="4" :key="index">
              <div class="app-card border-all d-flex flex-column rounded overflow-hidden h-100 p-relative">
                <div class="app-card-header">
                  <v-responsive :aspect-ratio="3 / 2">
                    <div class="card-header-img p-absolute w-100 h-100 d-flex pa-7">
                      <img
                        v-if="item.file"
                        :src="$http.defaults.baseURL + item.file.url"
                        alt=""
                        class="transition-all p-absolute img-contain"
                        style="top: 0; max-width: initial"
                      />
                    </div>
                  </v-responsive>
                </div>
                <div class="app-card-body pa-8 flex-1 d-flex flex-column bg-white">
                  <h2 class="dark-text font-600 mb-2">
                    <I18nVue :uz="item.title_uz" :ru="item.title_ru" :en="item.title_en" />
                  </h2>
                  <h4>
                    <I18nVue :uz="item.description_uz" :ru="item.description_ru" :en="item.description_en" />
                  </h4>
                </div>
              </div>
            </v-col>
          </template>
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
    return{
      awardsList: null
    }
  },
  mounted() {
    this.getList();
  },
  methods: {
    getList() {
      this.$http.get("/1/bank/awards").then(({ data }) => this.awardsList = data.results)
    }
  }
};


</script>

<style></style>
