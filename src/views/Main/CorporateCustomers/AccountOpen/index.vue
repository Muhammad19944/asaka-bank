<template>
  <div class="card-open-view">
    <v-container>
      <div class="online-credit-content py-10">
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
              >
              </v-text-field>
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
                outlined hide-details
                :placeholder="$t('Services.OpenCard.message')"
              >
              </v-textarea>
            </div>
          </v-col>

          <v-col md="12">
            <div class="app-form-group mb-7">
              <h4 class="font-600 dark-text">
                <I18nVue t="Services.OpenCard.oferta" />
              </h4>

              <v-divider class="mt-3 mb-7" style="border-color: rgba(var(--border-color), 1)" />

              <div class="d-flex align-start">
                <v-checkbox v-model="checkbox" hide-details color="danger" class="ma-0" />
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
    </v-container>
    <app-snackbar ref="appSnackbar" />
  </div>
</template>

<script>
import AppSnackbar from "@/components/AppSnackbar";
import { ChevronDownIcon, FileTextIcon } from "vue-feather-icons";
import { required, email } from "vuelidate/lib/validators";
import I18nVue from "@/I18nVue";

export default {
  name: "index",
  components: {
    I18nVue,
    AppSnackbar,
    ChevronDownIcon,
    FileTextIcon
  },
  data() {
    return {
      formRequestModel: {
        full_name: "",
        phone: "",
        email: "",
        tax_inn: "",
        filial: null,
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
     * Отправка формы
     * */
    send() {
      this.$v.$touch();

      if (this.$v.$invalid) {
        return;
      }

      // Удаляем плюс и пробелы из номера
      this.formRequestModel.phone = this.formRequestModel.phone.replace(/\D/g, "");

      this.$http.post("/open/account/", this.formRequestModel).then((res) => {
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

<style></style>
