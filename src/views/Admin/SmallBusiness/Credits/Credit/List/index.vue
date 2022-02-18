<template>
  <div class="cards-view">
    <app-layout-scope-renderless
        api-url="credit"
        category="7"
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

          <app-card :title="$t('Dashboard.sidebar.list_of_loans')" class="mb-13">
            <template #add-view>
              <v-btn :to="{ name: 'AdminSmallBusinessCreditsCreate' }" depressed color="primary">
                <div class="d-flex align-center">
                  <plus-icon size="1.5x" class="mr-1"></plus-icon>
                  <span class="text-transform-reset">{{ $t('Dashboard.add_new') }}</span>
                </div>
              </v-btn>
            </template>

            <app-loader v-if="loading"/>

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

                    <span class="text-small font-600 text-secondary-dark">{{ $t('Dashboard.credits.name') }}</span>
                  </td>
                  <td class="admin-table-td" width="250">
                    <h5 class="font-600">{{ item.category && item.category.title_uz }}</h5>
                    <span class="text-small font-600 text-secondary-dark">{{ $t('Dashboard.category') }}</span>
                  </td>
                  <td class="admin-table-td" width="250">
                    <h5 class="font-600">{{ item.credit_period }} oy</h5>
                    <span class="text-small font-600 text-secondary-dark">{{ $t('Dashboard.credits.period') }}</span>
                  </td>
                  <td class="admin-table-td">
                    <h5 class="font-600">{{ item.credit_initial_fee }}</h5>
                    <span class="text-small font-600 text-secondary-dark">{{
                        $t('Dashboard.credits.initial_fee')
                      }}</span>
                  </td>
                  <td class="admin-table-td">
                    <h5 class="font-600">{{ item.modified_date | filterDateAndTimeHour }}</h5>
                    <span class="text-small font-600 text-secondary-dark">{{ $t('Dashboard.data') }}</span>
                  </td>
                  <td class="admin-table-td" width="160">
                    <v-btn
                        :to="{ name: 'AdminSmallBusinessCreditsRead', params: { id: item.id } }"
                        depressed
                        icon
                        color="info"
                    >
                      <eye-icon size="1.5x" class="custom-class"></eye-icon>
                    </v-btn>

                    <v-btn
                        :to="{ name: 'AdminSmallBusinessCreditsUpdate', params: { id: item.id } }"
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
import AppLayoutScopeRenderless from "../../../../BaseComponents/AppLayoutScopeRenderless";
import AppCard from '../../../../BaseComponents/AppCard'
import AppLoader from '../../../../BaseComponents/AppLoader'
import AppPagination from '../../../../BaseComponents/AppPagination'
import AppFilter from '../../../../BaseComponents/AppFilter'
import NotFound from "../../../../BaseComponents/NotFound";
import I18nVue from "../../../../../../I18nVue";
import {EyeIcon, EditIcon, Trash2Icon, PlusIcon, ChevronDownIcon} from 'vue-feather-icons'

export default {
  name: 'index',
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

<style></style>
