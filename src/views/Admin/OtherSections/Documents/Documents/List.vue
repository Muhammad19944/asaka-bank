<template>
  <div class="district-view">
    <app-layout-scope-renderless
        api-url="bank/documents"
        category="5"
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
                    :placeholder="$t('search') + '...'"
                />
              </div>
            </v-col>

            <v-col md="3">
              <div class="app-form-group no-shadow app-form-group__xs">
                <v-select
                    v-model="filters.depositType"
                    :items="$store.state.DOCUMENT_TYPES"
                    :item-text="
										$i18n.locale === 'uz' ? 'title_uz' :
										$i18n.locale === 'ru' ? 'title_ru' :
										'title_en'
									"
                    item-value="value"
                    outlined
                    hide-details
                    clearable
                    :placeholder="$t('LastCorrections.document_type')">
                  <template v-slot:append>
                    <chevron-down-icon size="1.2x" class="mt-1"/>
                  </template>
                </v-select>
              </div>
            </v-col>
          </app-filter>

          <app-card :title="$t('Dashboard.sidebar.documents')" class="mb-13">
            <template #add-view>
              <v-btn :to="{ name: 'OtherSectionDocumentsCreate' }" depressed color="primary">
                <div class="d-flex align-center">
                  <plus-icon size="1.5x" class="mr-1"></plus-icon>
                  <span class="text-transform-reset">{{ $t("Dashboard.add_new") }}</span>
                </div>
              </v-btn>
            </template>

            <app-loader v-if="loading"/>

            <template v-if="list.length">
              <v-simple-table class="admin-table">
                <tbody>
                <tr class="transition-fast-out-slow-in" v-for="item in list" :key="item.id">
                  <td class="admin-table-td">
                    <h5 class="font-600">
                      <I18nVue :uz='item.title_uz' :ru='item.title_ru' :en='item.title_en'/>
                    </h5>
                    <span class="text-small font-600 text-secondary-dark">{{ $t('Dashboard.document.title') }}</span>
                  </td>
                  <td class="admin-table-td" width="300">
                    <v-chip
                        color="primary"
                        text-color="white"
                        small
                        class="mb-1 text-capitalize"
                    >
                      <template v-if="item.type">
                        {{ item.type }}
                      </template>
                    </v-chip>
                    <span class="text-small font-600 text-secondary-dark d-block">{{
                        $t("Dashboard.branch.type")
                      }}</span>
                  </td>
                  <td class="admin-table-td" width="300">
                    <h5 class="font-600">
                      {{ item.modified_date ? item.modified_date : "" | filterDateAndTimeHour }}
                    </h5>
                    <span class="text-small font-600 text-secondary-dark">{{ $t("Dashboard.data") }}</span>
                  </td>
                  <td class="admin-table-td" width="160">
                    <v-btn
                        :to="{ name: 'OtherSectionDocumentsRead', params: { id: item.id } }"
                        depressed
                        icon
                        color="info"
                    >
                      <eye-icon size="1.5x" class="custom-class"></eye-icon>
                    </v-btn>

                    <v-btn
                        :to="{ name: 'OtherSectionDocumentsUpdate', params: { id: item.id } }"
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
import AppFilter from "../../../BaseComponents/AppFilter";
import AppCard from "../../../BaseComponents/AppCard";
import AppPagination from "../../../BaseComponents/AppPagination";
import AppLoader from "../../../BaseComponents/AppLoader";
import NotFound from "../../../BaseComponents/NotFound";
import {EyeIcon, EditIcon, Trash2Icon, PlusIcon, ChevronDownIcon} from "vue-feather-icons";
import I18nVue from '@/I18nVue'
import AppLayoutScopeRenderless from "@/views/Admin/BaseComponents/AppLayoutScopeRenderless";

export default {
  name: "List",
  components: {
    AppFilter,
    AppCard,
    AppPagination,
    AppLoader,
    NotFound,
    AppLayoutScopeRenderless,
    PlusIcon,
    EyeIcon,
    EditIcon,
    Trash2Icon,
    ChevronDownIcon,
    I18nVue
  },
  // data() {
  //   return {
  //     isLoaded: false,
  //     documentsList: []
  //   };
  // },
  // mounted() {
  //   this.getAll();
  // },
  // methods: {
  //
  //   /*
  //    *
  //    * */
  //   getAll() {
  //     this.$http.get(`/${this.$store.state.auth.COMPANY_ID}/bank/documents/`, {
  //       params: {
  //         page: this.$store.state.FILTER_OPTIONS.page,
  //         page_size: this.$store.state.FILTER_OPTIONS.page_size,
  //       }
  //     }).then(({data}) => {
  //       this.documentsList = data.results;
  //       this.$store.state.FILTER_OPTIONS.page_length = Math.ceil(
  //           data.count / this.$store.state.FILTER_OPTIONS.page_size
  //       );
  //       this.isLoaded = true;
  //     });
  //   },
  //
  //   /*
  //    *
  //    * */
  //   deleteRow(id) {
  //     if (!confirm(`O'chirishni xoxlaysizmi ?`)) {
  //       return void 0;
  //     }
  //
  //     this.$http
  //         .delete(`/${this.$store.state.auth.COMPANY_ID}/bank/documents/${id}/`)
  //         .then(() => {
  //           this.$toast.success(`O'chirildi`);
  //
  //           this.getAll();
  //         })
  //         .catch(() => {
  //           this.$toast.error(`O'chirishda xatolik`);
  //         });
  //   },
  //
  //   /*
  //    *
  //    * */
  //   paginate(val) {
  //     this.$store.state.FILTER_OPTIONS.page = val;
  //     this.isLoaded = false;
  //
  //     this.getAll();
  //   }
  // }
};
</script>

<style></style>
