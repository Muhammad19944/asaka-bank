<template>
  <div class="financing-view">
    <v-container>
      <div class="app-view-content">
        <p>
          <I18nVue t='Cooperative.FInancing.text1'/>
        </p>

        <p>
          <I18nVue t='Cooperative.FInancing.text2'/>
        </p>

        <p>
          <I18nVue t='Cooperative.FInancing.text3'/>
        </p>

        <p>
          <I18nVue t='Cooperative.FInancing.text4'/>
        </p>

        <p>
          <I18nVue t='Cooperative.FInancing.text5'/>
        </p>

        <p>
          <I18nVue t='Cooperative.FInancing.text6'/>
        </p>

        <p>
          <I18nVue t='Cooperative.FInancing.text7'/>
        </p>
      </div>
    </v-container>

    <div class="faq-content my-16">
      <v-container>
        <h1 class="dark-text font-600 mb-2"><I18nVue t='Cooperative.FInancing.financing_projects'/></h1>

        <h3><I18nVue t='Cooperative.FInancing.financing_projects_sub'/></h3>

        <div class="app-collapse mt-8">
          <div class="app-collapse-item credit-widget rounded-lg">
            <v-expansion-panels accordion>
              <v-expansion-panel>
                <v-expansion-panel-header>
                  <h4 class="font-600">
                    <I18nVue t='Cooperative.FInancing.table_header'/>
                  </h4>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  <v-simple-table class="app-table app-table__border">
                    <template v-slot:default>
                      <tbody>
                      <tr>
                        <td width="300" class="py-4">
                          <h4 class="font-600"><I18nVue t='Cooperative.FInancing.table_td'/></h4>
                        </td>
                        <td class="py-4">
                          <h5 class="font-600">
                            <I18nVue t='Cooperative.FInancing.table_td2'/>
                          </h5>
                        </td>
                      </tr>
                      <tr>
                        <td width="300" class="py-4">
                          <h4 class="font-600"><I18nVue t='Cooperative.FInancing.table_td3'/></h4>
                        </td>
                        <td class="py-4">
                          <h5 class="font-600">
                            <I18nVue t='Cooperative.FInancing.table_td4'/>
                          </h5>
                        </td>
                      </tr>
                      </tbody>
                    </template>
                  </v-simple-table>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </div>
        </div>
      </v-container>
    </div>

<!--    <section class="pt-12">-->
<!--      <v-container>-->
<!--        <h1 class="dark-text font-600 mb-2"><I18nVue t='Cooperative.FInancing.increase_energy'/></h1>-->

<!--        <h3 class="mb-8"><I18nVue t='Cooperative.FInancing.increase_energy_sub'/></h3>-->

<!--        <p>-->
<!--          <I18nVue t='Cooperative.FInancing.increase_energy_sub_text1'/>-->
<!--        </p>-->

<!--        <p>-->
<!--          <I18nVue t='Cooperative.FInancing.increase_energy_sub_text2'/>-->
<!--        </p>-->
<!--      </v-container>-->
<!--    </section>-->
  </div>
</template>

<script>
import I18nVue from '@/I18nVue'
export default {
  name: "index",
  components: {
    I18nVue
  }
}
</script>

<style scoped>

</style>
