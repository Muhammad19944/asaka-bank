<template>
  <div class="cards-view">
    <app-layout-scope-renderless
        api-url="finance/retail"
    >
      <template slot-scope="{ filters, list, count, loading, getAll, deleteRow, paginate }">
        <div class="d-flex flex-column h-100">
          <app-filter>
            <v-col md="3">
              <div class="app-form-group no-shadow app-form-group__xs">
                <v-text-field
                    v-model="filters.search"
                    outlined
                    hide-details
                    clearable
                    placeholder="Search..."
                />
              </div>
            </v-col>
          </app-filter>
          <app-card title="Moliyalash ro'yxati" class="mb-13">
            <template #add-view>
              <v-btn :to="{ name: 'AdminSmallBusinessFinancingCreate' }" depressed color="primary">
                <div class="d-flex align-center">
                  <plus-icon size="1.5x" class="mr-1"></plus-icon>
                  <span class="text-transform-reset">{{ $t('Dashboard.add_new') }}</span>
                </div>
              </v-btn>
            </template>

            <app-loader v-if="loading" />

            <template v-if="list.length">
              <v-simple-table class="admin-table">
                <tbody>
                <tr class="transition-fast-out-slow-in" v-for="item in list" :key="item.id">
                  <td class="admin-table-td" width="110">
                    <img
                        :src="item.image && ($http.defaults.baseURL + item.image.url)"
                        alt="Card image"
                        class="d-block table-image"
                    />
                  </td>
                  <td class="admin-table-td" width="350">
                    <I18nVue
                        :uz="item.title_uz"
                        :ru="item.title_ru"
                        :en="item.title_en"
                        classes="font-600 d-block text--h5"
                    />

                    <span class="text-small font-600 text-secondary-dark">nomi</span>
                  </td>
                  <td class="admin-table-td">
                    <h5 class="font-600">{{ item.modified_date | filterDateAndTimeHour }}</h5>
                    <span class="text-small font-600 text-secondary-dark">{{ $t('Dashboard.data') }}</span>
                  </td>
                  <td class="admin-table-td" width="160">
                    <v-btn
                        :to="{ name: 'AdminSmallBusinessFinancingRead', params: { id: item.id } }"
                        depressed
                        icon
                        color="info"
                    >
                      <eye-icon size="1.5x" class="custom-class"></eye-icon>
                    </v-btn>

                    <v-btn
                        :to="{ name: 'AdminSmallBusinessFinancingUpdate', params: { id: item.id } }"
                        depressed
                        icon
                        color="warning"
                        class="mx-2"
                    >
                      <edit-icon size="1.35x" class="custom-class"></edit-icon>
                    </v-btn>

                    <v-btn @click="deleteRow(item.id)" depressed icon color="danger">
                      <trash-2-icon size="1.35x"/>
                    </v-btn>
                  </td>
                </tr>
                </tbody>
              </v-simple-table>
            </template>
            <template v-else>
              <not-found/>
            </template>
          </app-card>
          <div class="card-footer">
            <app-pagination @emit:up="paginate"/>
          </div>
        </div>
      </template>
    </app-layout-scope-renderless>
  </div>
</template>

<script>
import AppLayoutScopeRenderless from "@/views/Admin/BaseComponents/AppLayoutScopeRenderless";
import AppCard from "@/views/Admin/BaseComponents/AppCard";
import AppLoader from "@/views/Admin/BaseComponents/AppLoader";
import AppPagination from "@/views/Admin/BaseComponents/AppPagination";
import AppFilter from "@/views/Admin/BaseComponents/AppFilter";
import NotFound from "@/views/Admin/BaseComponents/NotFound";
import I18nVue from "@/I18nVue";
import {EyeIcon, EditIcon, Trash2Icon, PlusIcon, ChevronDownIcon} from 'vue-feather-icons'
export default {
  name: "index",
  components: {
    AppLayoutScopeRenderless,
    AppCard,
    AppLoader,
    AppPagination,
    AppFilter,
    NotFound,
    I18nVue,
    EyeIcon,
    EditIcon,
    Trash2Icon,
    PlusIcon,
    ChevronDownIcon
  }
}
</script>

<style scoped>

</style>