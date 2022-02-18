<template>
  <v-container>
    <h1 style="font-size: 2.7em;line-height: 1;font-weight: bold; margin-bottom: 30px">
      <I18nVue t="Comp.h1" />
    </h1>
    <h5 style="margin: 15px 0">
      <I18nVue t="Comp.h5" />
    </h5>
    <p class="grey--text mb-10">
      <I18nVue t="Comp.text1" />
      <br><br>
      <I18nVue t="Comp.text2" />
      <br><br>
      <I18nVue t="Comp.text3" />
      <br><br>
      <span class='font-600' style='color: black;'><I18nVue t="Comp.text4" /></span>
	    <br><br>
	    <span class='font-600' style='color: black;'><I18nVue t="Comp.text5" /></span>
    </p>
    <v-row>
      <v-col md="12">
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
            :placeholder="this.$t('Services.OpenCard.FISH_sub')"
          >
          </v-text-field>
        </div>
      </v-col>

      <v-col md="12">
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
            :placeholder="this.$t('Services.OpenCard.phone_sub')"
          >
          </v-text-field>
        </div>
      </v-col>

      <v-col md="12">
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
            :placeholder="this.$t('Services.OpenCard.mail')"
          >
          </v-text-field>
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
            :placeholder="this.$t('Services.OpenCard.message')"
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
            <v-checkbox
              v-model="checkbox"
              hide-details
              color="danger"
              class="ma-0"
            />

            <h4 class="font-600 dark-text">
              <I18nVue t="Services.OpenCard.oferta_sub" /> &nbsp;
              <router-link to="/" class="text-decoration-none primary-text">
                <I18nVue t="Services.OpenCard.oferta_sub" />
              </router-link
              >
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
        <I18nVue classes="text-white font-700" t="Services.OpenCard.sendApplication" />
      </v-btn>

      <app-snackbar ref="appSnackBar" />

    </v-row>
  </v-container>
</template>

<script>
import AppSnackbar from "@/components/AppSnackbar";
import I18nVue from "@/I18nVue";
import { email, required } from "vuelidate/lib/validators";
import { appTab } from "@/utils/frontend";
import { ChevronDownIcon, FileTextIcon } from "vue-feather-icons";

export default {
  name: "Compliance",
  components: { AppSnackbar, FileTextIcon, ChevronDownIcon, I18nVue },
  data() {
    return {
      formRequestModel: {
        full_name: "",
        phone: "",
        email: "",
        text: ""
      },
      checkbox: false
    };
  },
  validations: {
    formRequestModel: {
      full_name: { required },
      phone: { required },
      email: { required, email },
      text: { required }
    }
  },
  methods: {
    send() {
      this.$v.$touch();
      const { appSnackBar } = this.$refs;
      if (this.$v.$invalid) {
        return;
      }

      this.formRequestModel.phone = this.formRequestModel.phone.replace(/\D/g, "");

      this.$http.post("/compliance/appeal/create/", this.formRequestModel)
        .then(({ data }) => {
          this.$toast.success(`Murojaat muvaffaqiyatli yuborildi! Murojaat raqami: ${data.id}`);
          this.formRequestModel = {};
          this.fileInputModel = null;

          for (let key in this.formRequestModel) {
            this.formRequestModel[key] = "";
          }
          this.$v.$reset();
        })
        .then(()=>this.$router.push('/'))
        .catch(err =>  appSnackBar.text = err.data.message)
    }
  }
};
</script>