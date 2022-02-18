<template>
  <div class="salary-project-view">
    <v-container>
      <div class="detail-view-content">
        <v-row>
          <v-col md="6" align-self="center">
            <h1 class="font-600 dark-text mb-5">
              <I18nVue t="CorporateCustomers.SalaryProject.text25" />
            </h1>
            <div class="app-ul">
              <ul>
                <li>
                  <I18nVue t="CorporateCustomers.SalaryProject.text24" />
                </li>
                <li>
                  <I18nVue t="CorporateCustomers.SalaryProject.text23" />
                </li>
                <li>
                  <I18nVue t="CorporateCustomers.SalaryProject.text22" />
                </li>
                <li>
                  <I18nVue t="CorporateCustomers.SalaryProject.text21" />
                </li>
                <li>
                  <I18nVue t="CorporateCustomers.SalaryProject.text20" />
                </li>
                <li>
                  <I18nVue t="CorporateCustomers.SalaryProject.text19" />
                </li>
                <li>
                  <I18nVue t="CorporateCustomers.SalaryProject.text18" />
                </li>
              </ul>
            </div>
          </v-col>

          <v-col md="6">
            <div class="pr-16">
              <v-responsive :aspect-ratio="16 / 9">
                <img src="/images/salary.png" alt="Salary image" class="" />
              </v-responsive>
            </div>
          </v-col>
        </v-row>

        <div class="section">
          <v-row>
            <v-col md="6">
              <h1 class="font-600 dark-text mb-5">
                <I18nVue t="CorporateCustomers.SalaryProject.text17" />
              </h1>
              <div class="credit-widget pa-6 rounded-lg overflow-hidden">
                <div class="app-ul">
                  <ul>
                    <li>
                      <I18nVue t="CorporateCustomers.SalaryProject.text16" />
                      <strong>
                        <I18nVue t="CorporateCustomers.SalaryProject.text15" />
                    </strong>
                    </li>
                    <li>
                      <I18nVue t="CorporateCustomers.SalaryProject.text14" />
                      <strong>
                        <I18nVue t="CorporateCustomers.SalaryProject.text13" />
                      </strong>
                    </li>
                    <li>
                      <I18nVue t="CorporateCustomers.SalaryProject.text12" />
                      <strong>
                        <I18nVue t="CorporateCustomers.SalaryProject.text11" />
                      </strong>
                    </li>
                  </ul>
                </div>
              </div>
            </v-col>

            <v-col md="6">
              <h1 class="font-600 dark-text mb-5">
                <I18nVue t="CorporateCustomers.SalaryProject.text10" />
              </h1>
              <div class="credit-widget pa-6 rounded-lg overflow-hidden mb-5">
                <p>
                  <I18nVue t="CorporateCustomers.SalaryProject.text9" />
                </p>
                <p>
                  <I18nVue t="CorporateCustomers.SalaryProject.text8" />
                </p>
              </div>
            </v-col>
          </v-row>
        </div>

        <h1 class="text-extra-large-4 font-700 dark-text mb-2">
          <I18nVue t="CorporateCustomers.SalaryProject.text7" />
        </h1>

        <h3 class="grey-light-2 mb-15">
          <I18nVue t="CorporateCustomers.SalaryProject.text6" />
        </h3>

        <v-row>
          <v-col lg="3" md="6">
            <div class="app-card-simple text-center transition-all py-10 px-7 rounded-lg h-100 mx-2">
              <h1 class="font-300 text-extra-large primary-text">1</h1>

              <v-divider style="border-color: rgba(var(--border-color), 1)" class="my-10" />

              <h4 class="dark-text">
                <I18nVue t="CorporateCustomers.SalaryProject.text5" />
              </h4>
            </div>
          </v-col>

          <v-col lg="3" md="6">
            <div class="app-card-simple text-center transition-all py-10 px-7 rounded-lg h-100 mx-2">
              <h1 class="font-300 text-extra-large primary-text">2</h1>

              <v-divider style="border-color: rgba(var(--border-color), 1)" class="my-10" />

              <h4 class="dark-text">
                <I18nVue t="CorporateCustomers.SalaryProject.text4" />
              </h4>
            </div>
          </v-col>

          <v-col lg="3" md="6">
            <div class="app-card-simple text-center transition-all py-10 px-7 rounded-lg h-100 mx-2">
              <h1 class="font-300 text-extra-large primary-text">3</h1>

              <v-divider style="border-color: rgba(var(--border-color), 1)" class="my-10" />

              <h4 class="dark-text">
                <I18nVue t="CorporateCustomers.SalaryProject.text3" />
              </h4>
            </div>
          </v-col>

          <v-col lg="3" md="6">
            <div class="transition-all py-10 px-7 rounded-lg h-100 mx-2 primary-bg d-flex flex-column align-start">
              <h2 class="font-600">
                <I18nVue t="CorporateCustomers.SalaryProject.text2" />
              </h2>
              <h5 class="font-300 my-4">
                <I18nVue t="CorporateCustomers.SalaryProject.text1" />
              </h5>
              <v-btn
                href="#form"
                depressed
                color="rgba(var(--main-primary), 1)"
                rounded
                min-width="192"
                min-height="50"
                class="mt-auto"
                style="background-color: #fff"
              >
                <I18nVue classes="primary-text font-700" t="CorporateCustomers.btn2" />
              </v-btn>
            </div>
          </v-col>
        </v-row>

        <div class="section">
          <h1 class="font-600 dark-text">
            <I18nVue t="CorporateCustomers.SalaryProject.FormTitle" />
          </h1>

          <div class="online-credit-content py-10" id="form">
            <v-row>
              <v-col md="6">
                <div class="app-form-group mb-7">
                  <h4 class="font-600 dark-text">
                    <I18nVue t="Services.OpenCard.FISH" />
                  </h4>

                  <v-divider class="mt-3 mb-7" style="border-color: rgba(var(--border-color), 1)" />

                  <v-text-field
                    v-model="$v.formRequestModel.full_name.$model"
                    :error="$v.formRequestModel.full_name.$error"
                    outlined
                    hide-details
                    :placeholder="$t('Services.OpenCard.FISH_sub')"
                  >
                  </v-text-field>
                </div>
              </v-col>

              <v-col md="6">
                <div class="app-form-group mb-7">
                  <h4 class="font-600 dark-text">
                    <I18nVue t="Services.OpenCard.phone" />
                  </h4>

                  <v-divider class="mt-3 mb-7" style="border-color: rgba(var(--border-color), 1)" />

                  <v-text-field
                    v-model="$v.formRequestModel.phone.$model"
                    :error="$v.formRequestModel.phone.$error"
                    v-mask="'+998 (##) ### ## ##'"
                    outlined
                    hide-details
                    :placeholder="$t('Services.OpenCard.phone_sub')"
                  />
                </div>
              </v-col>

              <v-col md="6">
                <div class="app-form-group mb-7">
                  <h4 class="font-600 dark-text">
                    <I18nVue t="Services.OpenCard.mail" />
                  </h4>

                  <v-divider class="mt-3 mb-7" style="border-color: rgba(var(--border-color), 1)" />

                  <v-text-field
                    v-model="$v.formRequestModel.email.$model"
                    :error="$v.formRequestModel.email.$error"
                    outlined
                    hide-details
                    :placeholder="$t('Services.OpenCard.mail')"
                  >
                  </v-text-field>
                </div>
              </v-col>

              <v-col md="6">
                <div class="app-form-group mb-7">
                  <h4 class="font-600 dark-text">
                    <I18nVue t="Services.OpenCard.stir" />
                  </h4>

                  <v-divider class="mt-3 mb-7" style="border-color: rgba(var(--border-color), 1)" />

                  <v-text-field
                    v-model="$v.formRequestModel.tax_inn.$model"
                    :error="$v.formRequestModel.tax_inn.$error"
                    outlined
                    hide-details
                    maxlength="9"
                    :placeholder="$t('Services.OpenCard.stir')"
                  >
                  </v-text-field>
                </div>
              </v-col>

              <v-col md="12">
                <div class="app-form-group mb-7">
                  <h4 class="font-600 dark-text">
                    <I18nVue t="Services.OpenCard.OrganizationName" />
                  </h4>
                  <v-divider class="mt-3 mb-7" style="border-color: rgba(var(--border-color), 1)" />
                  <v-text-field
                    v-model="$v.formRequestModel.organization_name.$model"
                    :error="$v.formRequestModel.organization_name.$error"
                    outlined
                    hide-details
                    :placeholder="$t('Services.OpenCard.ForExample')"
                  />
                </div>
              </v-col>

              <v-col md="12">
                <div class="app-form-group mb-7">
                  <h4 class="font-600 dark-text">
                    <I18nVue t="Services.OpenCard.filial" />
                  </h4>
                  <v-divider class="mt-3 mb-7" style="border-color: rgba(var(--border-color), 1)" />
                  <v-select
                    v-model="$v.formRequestModel.filial.$model"
                    :error="$v.formRequestModel.filial.$error"
                    :items="branchesList"
                    item-text="name_uz"
                    item-value="id"
                    outlined
                    hide-details
                    no-data-text="Ma'lumot yo'q"
                    :placeholder="$t('Services.OpenCard.filial_sub')"
                  >
                    <template v-slot:append>
                      <chevron-down-icon size="1.5x" class="grey--text" />
                    </template>
                  </v-select>
                </div>
              </v-col>
              <v-col md="12">
                <div class="app-form-group mb-7">
                  <h4 class="font-600 dark-text">
                    <I18nVue t="Services.OpenCard.message" />
                  </h4>
                  <v-divider class="mt-3 mb-7" style="border-color: rgba(var(--border-color), 1)" />
                  <v-textarea
                    v-model="formRequestModel.text"
                    outlined
                    hide-details
                    :placeholder="$t('Services.OpenCard.message')"
                  />
                </div>
              </v-col>

              <v-col md="12">
                <div class="app-form-group mb-7">
                  <h4 class="font-600 dark-text">
                    <I18nVue t="Services.OpenCard.oferta" />
                  </h4>

                  <v-divider class="mt-3 mb-7" style="border-color: rgba(var(--border-color), 1)" />

                  <div class="d-flex align-start">
                    <v-checkbox
                      v-model="checkbox"
                      hide-details
                      color="danger"
                      class="ma-0"
                    />
                    <h4 class="font-600 dark-text">
                      <I18nVue t="Services.OpenCard.oferta_sub" />
                      <router-link to="/" class="text-decoration-none primary-text">
                        &nbsp;<I18nVue t="Services.OpenCard.oferta" />
                      </router-link>
                    </h4>
                  </div>
                </div>
              </v-col>

              <v-btn
                @click="send"
                :disabled="!checkbox"
                depressed
                color="danger"
                rounded
                min-width="192"
                min-height="50"
              >
                <I18nVue classes="text-white font-700" t="Services.OpenCard.application" />
              </v-btn>
            </v-row>
          </div>

          <app-snackbar ref="appSnackbar" />
        </div>
      </div>
    </v-container>
  </div>
</template>

<script>
import AppSnackbar from "@/components/AppSnackbar";
import { ChevronDownIcon } from "vue-feather-icons";
import { email, required } from "vuelidate/lib/validators";
import I18nVue from "@/I18nVue";

export default {
  name: "index",
  components: {
    I18nVue,
    AppSnackbar,
    ChevronDownIcon
  },
  data() {
    return {
      formRequestModel: {
        full_name: "",
        phone: "",
        email: "",
        tax_inn: "",
        filial: null,
        organization_name: "",
        text: ""
      },
      branchesList: [],
      checkbox: false
    };
  },
  validations: {
    formRequestModel: {
      full_name: { required },
      phone: { required },
      email: { required, email },
      tax_inn: { required },
      organization_name: { required },
      filial: { required }
    }
  },
  mounted() {
    this.getBranches();
  },
  methods: {
    /*
     * Получение список филиалов
     * */
    getBranches() {
      this.$http.get("/1/filial/").then(({ data }) => {
        this.branchesList = data.results;
      });
    },

    /*
     *
     * */
    send() {
      this.$v.$touch();

      if (this.$v.$invalid) {
        return;
      }

      // Удаляем плюс и пробелы из номера
      this.formRequestModel.phone = this.formRequestModel.phone.replace(/\D/g, "");

      this.$http.post("/payroll/create/", this.formRequestModel).then((res) => {
        const { appSnackbar } = this.$refs;

        appSnackbar.snackbar = true;
        appSnackbar.text = "Murojat muvaffaqiyatli yuborildi";

        // Сбросим все поля
        for (let key in this.formRequestModel) {
          this.formRequestModel[key] = "";
        }

        this.$v.$reset();
      });
    }
  }
};
</script>