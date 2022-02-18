<template>
  <div class="category-view">
    <app-layout-scope-renderless
        api-url="employee"
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
          </app-filter>


          <app-card :title="$t('Dashboard.sidebar.users.users_list')" class="mb-13">
            <template #add-view>
              <v-btn :to="{ name: 'OtherSectionUsersCreate' }" depressed color="primary">
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
                  <td class="admin-table-td" width="225">
                    <h5 class="font-600">{{ item.username }}</h5>
                    <span class="text-small font-600 text-secondary-dark">Username</span>
                  </td>

                  <td class="admin-table-td" width="225">
                    <template v-if="item.company">
                      <template v-if="$i18n.locale === 'uz'">
                        <h5 class="font-600">{{ item.company.name_uz }}</h5>
                      </template>

                      <template v-if="$i18n.locale === 'ru'">
                        <h5 class="font-600">{{ item.company.name_ru }}</h5>
                      </template>

                      <template v-if="$i18n.locale === 'en'">
                        <h5 class="font-600">{{ item.company.name_en }}</h5>
                      </template>

                      <span class="text-small font-600 text-secondary-dark">Company</span>
                    </template>
                  </td>

                  <td class="admin-table-td" width="225">
                    <v-chip
                        :color="item.is_active ? 'primary' : 'danger'"
                        text-color="white"
                        small
                        class="mb-1"
                    >
                      <template v-if="item.is_active">
                        Активный
                      </template>

                      <template v-else>
                        Не активный
                      </template>
                    </v-chip>
                    <span class="text-small font-600 text-secondary-dark d-block">
								{{ $t("LastCorrections.status") }}
							</span>
                  </td>

                  <td class="admin-table-td" width="225">
                    <v-chip
                        :color="!item.is_deleted ? 'warning' : 'danger'"
                        text-color="white"
                        small
                        class="mb-1"
                    >
                      <template v-if="item.is_deleted">
                        Удалён
                      </template>

                      <template v-else>
                        <span>Не удалён</span>
                      </template>
                    </v-chip>
                    <span class="text-small font-600 text-secondary-dark d-block">{{
                        $t("LastCorrections.status")
                      }}</span>
                  </td>

                  <td class="admin-table-td" width="200">
                    <h5 class="font-600">{{ item.modified_date | filterDateAndTimeHour }}</h5>
                    <span class="text-small font-600 text-secondary-dark">{{ $t("LastCorrections.date") }}</span>
                  </td>

                  <td class="admin-table-td" width="225">
                    <v-btn
                        :to="{ name: 'OtherSectionUsersRead', params: { id: item.id } }"
                        depressed
                        icon
                        color="info"
                        class="mr-2"
                    >
                      <eye-icon size="1.5x" class="custom-class"></eye-icon>
                    </v-btn>

                    <v-btn
                        :to="{ name: 'OtherSectionUsersUpdate', params: { id: item.id } }"
                        depressed
                        icon
                        color="deep-orange"
                        class="mr-2"
                    >
                      <edit-icon size="1.35x" class="custom-class"></edit-icon>
                    </v-btn>

                    <v-btn
                        :to="{ name: 'OtherSectionUsersPasswordUpdate', params: { id: item.id } }"
                        depressed
                        icon
                        color="deep-orange"
                        class="mr-2"
                    >
                      <refresh-cw-icon size="1.35x" class="custom-class"></refresh-cw-icon>
                    </v-btn>

                    <template v-if="item.is_active">
                      <v-btn
                          @click="deactivate(item.id)"
                          depressed
                          icon
                          color="teal"
                          class="mr-2"
                      >
                        <lock-icon size="1.35x" class="custom-class"></lock-icon>
                      </v-btn>
                    </template>

                    <template v-else>
                      <v-btn
                          @click="activate(item.id)"
                          depressed
                          icon
                          color="teal"
                          class="mr-2"
                      >
                        <unlock-icon size="1.35x" class="custom-class"></unlock-icon>
                      </v-btn>
                    </template>

                    <template v-if="!item.is_deleted">
                      <v-btn
                          @click="activeDelete(item.id)"
                          depressed
                          icon
                          color="danger"
                          class="mr-2"
                      >
                        <user-x-icon size="1.35x" class="custom-class"></user-x-icon>
                      </v-btn>
                    </template>

                    <template v-else>
                      <v-btn
                          @click="inactiveDelete(item.id)"
                          depressed
                          icon
                          color="danger"
                          class="mr-2"
                      >
                        <user-check-icon size="1.35x" class="custom-class"></user-check-icon>
                      </v-btn>
                    </template>
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
import AppLoader from "../../../BaseComponents/AppLoader";
import AppPagination from "../../../BaseComponents/AppPagination";
import NotFound from "../../../BaseComponents/NotFound";
import {
  PlusIcon,
  EyeIcon,
  EditIcon,
  RefreshCwIcon,
  LockIcon,
  UnlockIcon,
  UserXIcon,
  UserCheckIcon,
} from "vue-feather-icons";
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
    RefreshCwIcon,
    LockIcon,
    UnlockIcon,
    UserXIcon,
    UserCheckIcon
  }
  // data() {
  //   return {
  //     isLoaded: false,
  //     usersList: []
  //   };
  // },
  // mounted() {
  //   this.getAll();
  // },
  // methods: {
  //   /*
  //    *
  //    * */
  //   getAll() {
  //     this.$http.get(`/${this.$store.state.auth.COMPANY_ID}/employee/`, {
  //       params: {
  //         page_size: this.$store.state.FILTER_OPTIONS.page_size,
  //         page: this.$store.state.FILTER_OPTIONS.page,
  //         ordering: 'id'
  //       }
  //     }).then(({data}) => {
  //       this.usersList = data.results;
  //       this.$store.state.FILTER_OPTIONS.page_length = Math.ceil(
  //           data.count / this.$store.state.FILTER_OPTIONS.page_size
  //       );
  //
  //       this.isLoaded = true;
  //     });
  //   },
  //
  //   /*
  //   *
  //   * */
  //   deactivate(id) {
  //     if (!confirm(`Foydalanuvchini bloklashni xoxlaysizmi ?`)) {
  //       return void 0;
  //     }
  //
  //     this.$http.put(`/${this.$store.state.auth.COMPANY_ID}/employee/${id}/block_employee/`)
  //         .then(() => {
  //           this.$toast.success(`Bloklandi`);
  //
  //           this.getAll();
  //         })
  //         .catch(() => {
  //           this.$toast.error(`Bloklashda xatolik`);
  //         });
  //   },
  //
  //   /*
  //   *
  //   * */
  //   activate(id) {
  //     if (!confirm(`Foydalanuvchini aktiv qilishni xoxlaysizmi ?`)) {
  //       return void 0;
  //     }
  //
  //     this.$http.delete(`/${this.$store.state.auth.COMPANY_ID}/employee/${id}/block_employee/`)
  //         .then(() => {
  //           this.$toast.success(`Blokdan chiqarildi`);
  //
  //           this.getAll();
  //         })
  //         .catch(() => {
  //           this.$toast.error(`Blokdan chiqarishda xatolik`);
  //         });
  //   },
  //
  //   /*
  //   *
  //   * */
  //   activeDelete(id) {
  //     if (!confirm(`Foydalanuvchini o'chirishni xoxlaysizmi ?`)) {
  //       return void 0;
  //     }
  //
  //     this.$http.put(`/${this.$store.state.auth.COMPANY_ID}/employee/${id}/soft_delete_employee/`)
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
  //   *
  //   * */
  //   inactiveDelete(id) {
  //     if (!confirm(`Foydalanuvchini qayta tiklashni xoxlaysizmi ?`)) {
  //       return void 0;
  //     }
  //
  //     this.$http.delete(`/${this.$store.state.auth.COMPANY_ID}/employee/${id}/soft_delete_employee/`)
  //         .then(() => {
  //           this.$toast.success(`Foydalanuvchi qayta tiklandi`);
  //
  //           this.getAll();
  //         })
  //         .catch(() => {
  //           this.$toast.error(`Qayta tiklashda xatolik`);
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
