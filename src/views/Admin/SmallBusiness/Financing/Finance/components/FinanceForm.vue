<template>
  <div class="card-form-view">
    <app-card>
      <div class="form-wrap pa-5 px-6">
        <div class="d-flex align-center mb-8">
          <h4 class="text--primary text-uppercase font-700 mr-4">
            {{ TYPE === 'Create' ? $t('Dashboard.add_new') : TYPE === 'Update' ? $t('Dashboard.update') : $t('Dashboard.read') }}
          </h4>
          <v-divider style="border-color: rgb(var(--border-color), 1)"></v-divider>
        </div>
        <div class="app-collapse--advanced mb-10">
          <v-expansion-panels v-model="panel" accordion multiple class="border-all">
            <!-- Finance models -->
            <v-expansion-panel>
              <v-expansion-panel-header class="py-5 font-600 reset-size">
                Moliyalash
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <finance-optional :TYPE="TYPE"/>
              </v-expansion-panel-content>
            </v-expansion-panel>
            <!-- End Finance models -->
            <!-- Finance Reference model -->
            <v-expansion-panel>
              <v-expansion-panel-header class="py-5 font-600 reset-size">
                Reference qo'shish
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <finance-reference :TYPE="TYPE"/>
              </v-expansion-panel-content>
            </v-expansion-panel>
            <!-- End Finance Reference model -->
          </v-expansion-panels>
        </div>
      </div>
    </app-card>
  </div>
</template>

<script>
import FinanceOptional from "@/views/Admin/SmallBusiness/Financing/Finance/components/FinanceOptional";
import FinanceReference from "@/views/Admin/SmallBusiness/Financing/Finance/components/FinanceReference";
import AppCard from "@/views/Admin/BaseComponents/AppCard";
export default {
  name: "FinanceForm",
  components:{
    FinanceOptional,
    FinanceReference,
    AppCard
  },
  data() {
    return {
      panel: [0]
    };
  },
  props: {
    TYPE: {
      type: String,
      default: ""
    }
  },
}
</script>

<style scoped>

</style>