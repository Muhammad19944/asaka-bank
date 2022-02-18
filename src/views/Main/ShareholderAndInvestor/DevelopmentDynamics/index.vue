<template>
  <div class="development-dynamics-view">
    <v-container>
      <div class="app-content-view mb-10">
        <I18nVue t="SHAREHOLDERS_AND_INVESTORS.DevelopmentDynamics.text1" />
        <br>
        <br>
        <I18nVue t="SHAREHOLDERS_AND_INVESTORS.DevelopmentDynamics.text2" />
        <br>
        <br>
        <I18nVue t="SHAREHOLDERS_AND_INVESTORS.DevelopmentDynamics.text3" />
      </div>
    </v-container>

    <section class="section section-grey">
      <v-container>
        <h1 class="font-600 dark-text mb-1">
          <I18nVue t="SHAREHOLDERS_AND_INVESTORS.DevelopmentDynamics.text4" />
        </h1>
        <h4 class="font-600 dark-grey mb-6">
          <I18nVue t="SHAREHOLDERS_AND_INVESTORS.DevelopmentDynamics.text5" />
        </h4>

        <div class="app-collapse">
          <div class="app-collapse-item credit-widget rounded-lg">
            <v-expansion-panels accordion>
              <v-expansion-panel>
                <v-expansion-panel-header>
                  <h4 class="font-600">
                    <I18nVue t="SHAREHOLDERS_AND_INVESTORS.DevelopmentDynamics.text6" />
                  </h4>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  <div class="pa-4 pt-0">
                    <h3 class="font-600 dark-text mb-3">
                      <I18nVue t="SHAREHOLDERS_AND_INVESTORS.DevelopmentDynamics.text7" />
                    </h3>
                    <p>
                      <I18nVue t="SHAREHOLDERS_AND_INVESTORS.DevelopmentDynamics.text8" />
                    </p>

                    <p>
                      <I18nVue t="SHAREHOLDERS_AND_INVESTORS.DevelopmentDynamics.text9" />
                    </p>

                    <p>
                      <I18nVue t="SHAREHOLDERS_AND_INVESTORS.DevelopmentDynamics.table1" />
                    </p>

                    <h3 class="font-600 dark-text">
                      <I18nVue t="SHAREHOLDERS_AND_INVESTORS.DevelopmentDynamics.tableTitle" />
                    </h3>
                  </div>
                  <v-simple-table class="app-table app-table__border">
                    <template v-slot:default>
                      <thead>
                      <tr>
                        <th>
                          <h5 class="font-700 dark-text">№</h5>
                        </th>
                        <th>
                          <h5 class="font-700 dark-text">
                            <I18nVue t="SHAREHOLDERS_AND_INVESTORS.DevelopmentDynamics.tableText1" />
                          </h5>
                        </th>
                        <th>
                          <h5 class="font-700 dark-text">
                            <I18nVue t="SHAREHOLDERS_AND_INVESTORS.DevelopmentDynamics.tableText2" />
                          </h5>
                        </th>
                      </tr>
                      </thead>
                      <tbody>
                      <template v-for="(item, index) in table">
                        <tr>
                          <td class="py-4">
                            <h5 class="font-600">{{ index + 1 }}</h5>
                          </td>
                          <td class="py-4">
                            <h5 class="font-600">
                              {{ item.name }}
                            </h5>
                          </td>
                          <td class="py-4">
                            <h5 class="font-600">{{ item.share }}</h5>
                          </td>
                        </tr>
                      </template>
                      </tbody>
                    </template>
                  </v-simple-table>
                  <h1 class="my-6">
                    <I18nVue t="SHAREHOLDERS_AND_INVESTORS.DevelopmentDynamics.text10" />
                  </h1>
                  <h3 class="my-6">
                    <I18nVue t="SHAREHOLDERS_AND_INVESTORS.DevelopmentDynamics.text11" />
                  </h3>
                  <ul class="list-style-none pa-0 grey--text">
                    <li class="mb-5">
                      <I18nVue t="SHAREHOLDERS_AND_INVESTORS.DevelopmentDynamics.text12" />
                    </li>
                    <li class="mb-5">
                      <I18nVue t="SHAREHOLDERS_AND_INVESTORS.DevelopmentDynamics.text13" />
                    </li>
                    <li class="mb-5">
                      <I18nVue t="SHAREHOLDERS_AND_INVESTORS.DevelopmentDynamics.text14" />
                    </li>
                    <li class="mb-5">
                      <I18nVue t="SHAREHOLDERS_AND_INVESTORS.DevelopmentDynamics.text15" />
                    </li>
                    <li class="mb-5">
                      <I18nVue t="SHAREHOLDERS_AND_INVESTORS.DevelopmentDynamics.text16" />
                    </li>
                    <li class="mb-5">
                      <I18nVue t="SHAREHOLDERS_AND_INVESTORS.DevelopmentDynamics.text17" />
                    </li>
                    <li class="mb-5">
                      <I18nVue t="SHAREHOLDERS_AND_INVESTORS.DevelopmentDynamics.text18" />
                    </li>
                    <li class="mb-5">
                      <I18nVue t="SHAREHOLDERS_AND_INVESTORS.DevelopmentDynamics.text19" />
                    </li>
                  </ul>
                  <h3>
                    <I18nVue t="SHAREHOLDERS_AND_INVESTORS.DevelopmentDynamics.text20" />
                  </h3>
                  <ul class="list-style-none pa-0 grey--text">
                    <li class="mb-5">
                      <I18nVue t="SHAREHOLDERS_AND_INVESTORS.DevelopmentDynamics.text21" />
                    </li>
                    <li class="mb-5">
                      <I18nVue t="SHAREHOLDERS_AND_INVESTORS.DevelopmentDynamics.text22" />
                    </li>
                    <li class="mb-5">
                      <I18nVue t="SHAREHOLDERS_AND_INVESTORS.DevelopmentDynamics.text23" />
                    </li>
                    <li class="mb-5">
                      <I18nVue t="SHAREHOLDERS_AND_INVESTORS.DevelopmentDynamics.text24" />
                    </li>
                  </ul>
                  <h3>
                    <I18nVue t="SHAREHOLDERS_AND_INVESTORS.DevelopmentDynamics.text25" />
                  </h3>
                  <ul class="list-style-none pa-0 grey--text">
                    <li class="mb-5">
                      <I18nVue t="SHAREHOLDERS_AND_INVESTORS.DevelopmentDynamics.text26" />
                    </li>
                    <li class="mb-5">
                      <I18nVue t="SHAREHOLDERS_AND_INVESTORS.DevelopmentDynamics.text27" />
                    </li>
                    <li class="mb-5">
                      <I18nVue t="SHAREHOLDERS_AND_INVESTORS.DevelopmentDynamics.text28" />
                    </li>
                    <li class="mb-5">
                      <I18nVue t="SHAREHOLDERS_AND_INVESTORS.DevelopmentDynamics.text29" />
                    </li>
                  </ul>
                  <h3>
                    <I18nVue t="SHAREHOLDERS_AND_INVESTORS.DevelopmentDynamics.text30" />
                  </h3>
                  <ul class="list-style-none pa-0 grey--text">
                    <li class="mb-5">
                      <I18nVue t="SHAREHOLDERS_AND_INVESTORS.DevelopmentDynamics.text31" />
                    </li>
                    <li class="mb-5">
                      <I18nVue t="SHAREHOLDERS_AND_INVESTORS.DevelopmentDynamics.text32" />
                    </li>
                    <li class="mb-5">
                      <I18nVue t="SHAREHOLDERS_AND_INVESTORS.DevelopmentDynamics.text33" />
                    </li>
                    <li class="mb-5">
                      <I18nVue t="SHAREHOLDERS_AND_INVESTORS.DevelopmentDynamics.text34" />
                    </li>
                  </ul>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </div>
        </div>
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
      table: [
        { name: this.$t('SHAREHOLDERS_AND_INVESTORS.DevelopmentDynamics.tableText3'), share: "71,23" },
        { name: this.$t('SHAREHOLDERS_AND_INVESTORS.DevelopmentDynamics.tableText4'), share: "20,25%" },
        { name: this.$t('SHAREHOLDERS_AND_INVESTORS.DevelopmentDynamics.tableText5'), share: "3,35%" },
        { name: this.$t('SHAREHOLDERS_AND_INVESTORS.DevelopmentDynamics.tableText6'), share: "1,58%" },
        { name: this.$t('SHAREHOLDERS_AND_INVESTORS.DevelopmentDynamics.tableText7'), share: "1,41%" },
        { name: this.$t('SHAREHOLDERS_AND_INVESTORS.DevelopmentDynamics.tableText8'), share: "0,61%" },
        { name: this.$t('SHAREHOLDERS_AND_INVESTORS.DevelopmentDynamics.tableText9'), share: "0,59%" },
        { name: this.$t('SHAREHOLDERS_AND_INVESTORS.DevelopmentDynamics.tableText10'), share: "0,31%" },
        { name: this.$t('SHAREHOLDERS_AND_INVESTORS.DevelopmentDynamics.tableText11'), share: "0,25%" },
        { name: this.$t('SHAREHOLDERS_AND_INVESTORS.DevelopmentDynamics.tableText12'), share: "0,25%" },
        { name: this.$t('SHAREHOLDERS_AND_INVESTORS.DevelopmentDynamics.tableText13'), share: "0,15%" },
        { name: this.$t('SHAREHOLDERS_AND_INVESTORS.DevelopmentDynamics.tableText14'), share: "0,03%" }
      ]
    }
  }
};
</script>

<style></style>
