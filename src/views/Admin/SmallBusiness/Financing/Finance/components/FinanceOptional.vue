<template>
  <div class="form-wrap-body">
    <v-row>
      <v-col md="4">
        <div class="app-form-group app-form-group__small no-shadow mb-2">
          <h5 class="font-600 dark-text mb-1">Nomi <span
              class="font-700 text-small">(UZ)</span></h5>

          <v-text-field
              v-model="$v.financeModel.title_uz.$model"
              :error="$v.financeModel.title_uz.$error"
              :readonly="TYPE === 'Read'"
              outlined
              hide-details
          >
          </v-text-field>
        </div>
      </v-col>
      <v-col md="4">
        <div class="app-form-group app-form-group__small no-shadow mb-2">
          <h5 class="font-600 dark-text mb-1">Nomi <span
              class="font-700 text-small">(RU)</span></h5>

          <v-text-field
              v-model="$v.financeModel.title_ru.$model"
              :error="$v.financeModel.title_ru.$error"
              :readonly="TYPE === 'Read'"
              outlined
              hide-details
          >
          </v-text-field>
        </div>
      </v-col>
      <v-col md="4">
        <div class="app-form-group app-form-group__small no-shadow mb-2">
          <h5 class="font-600 dark-text mb-1">Nomi <span
              class="font-700 text-small">(EN)</span></h5>

          <v-text-field
              v-model="$v.financeModel.title_en.$model"
              :error="$v.financeModel.title_en.$error"
              :readonly="TYPE === 'Read'"
              outlined
              hide-details
          >
          </v-text-field>
        </div>
      </v-col>

      <v-col md="4">
        <file-upload
            ref="creditFile"
            @emit:up="upload"
            :value="financeFile"
            :disabled="TYPE === 'Read'"
            :label="$t('Dashboard.upload_file')"
        />
      </v-col>

      <v-col md="12">
        <div class="admin-tabs mb-1">
          <v-tabs
              height="56"
              v-model="tab1"
              hide-slider
              class="mb-0 mb-5"
          >
            <v-tab class="transition-ease-in-out">
              <h5 class="font-600 dark-text text-transform-reset no-spacing px-2">
                Moliyalash haqida ma'lumot
                <span class="font-700 text-small">(UZ)</span></h5>
            </v-tab>
            <v-tab class="transition-ease-in-out">
              <h5 class="font-600 dark-text text-transform-reset no-spacing px-2">
                Moliyalash haqida ma'lumot
                <span class="font-700 text-small">(RU)</span></h5>
            </v-tab>
            <v-tab class="transition-ease-in-out">
              <h5 class="font-600 dark-text text-transform-reset no-spacing px-2">
                Moliyalash haqida ma'lumot
                <span class="font-700 text-small">(EN)</span></h5>
            </v-tab>
          </v-tabs>
          <v-tabs-items v-model="tab1">
            <v-tab-item>
              <div class="app-editor">
                <quill-editor
                    v-model="financeModel.description_uz"
                    :disabled="TYPE === 'Read'"
                >
                </quill-editor>
              </div>
            </v-tab-item>

            <v-tab-item>
              <div class="app-editor">
                <quill-editor
                    v-model="financeModel.description_ru"
                    :disabled="TYPE === 'Read'"
                >
                </quill-editor>
              </div>
            </v-tab-item>
            <v-tab-item>
              <div class="app-editor">
                <quill-editor
                    v-model="financeModel.description_en"
                    :disabled="TYPE === 'Read'"
                >
                </quill-editor>
              </div>
            </v-tab-item>
          </v-tabs-items>
        </div>
      </v-col>

      <v-col md="12">
        <div class="admin-tabs mb-1">
          <v-tabs
              height="56"
              v-model="tab2"
              hide-slider
              class="mb-0 mb-5"
          >
            <v-tab class="transition-ease-in-out">
              <h5 class="font-600 dark-text text-transform-reset no-spacing px-2">
                Shart va talablar
                <span class="font-700 text-small">(UZ)</span></h5>
            </v-tab>
            <v-tab class="transition-ease-in-out">
              <h5 class="font-600 dark-text text-transform-reset no-spacing px-2">
                Shart va talablar
                <span class="font-700 text-small">(RU)</span></h5>
            </v-tab>
            <v-tab class="transition-ease-in-out">
              <h5 class="font-600 dark-text text-transform-reset no-spacing px-2">
                Shart va talablar
                <span class="font-700 text-small">(EN)</span></h5>
            </v-tab>
          </v-tabs>
          <v-tabs-items v-model="tab2">
            <v-tab-item>
              <div class="app-editor">
                <quill-editor
                    v-model="financeModel.condition_uz"
                    :disabled="TYPE === 'Read'"
                >
                </quill-editor>
              </div>
            </v-tab-item>

            <v-tab-item>
              <div class="app-editor">
                <quill-editor
                    v-model="financeModel.condition_ru"
                    :disabled="TYPE === 'Read'"
                >
                </quill-editor>
              </div>
            </v-tab-item>
            <v-tab-item>
              <div class="app-editor">
                <quill-editor
                    v-model="financeModel.condition_en"
                    :disabled="TYPE === 'Read'"
                >
                </quill-editor>
              </div>
            </v-tab-item>
          </v-tabs-items>
        </div>
      </v-col>

      <v-col md="4">
        <div class="app-form-group app-form-group__small no-shadow mb-2">
          <h5 class="font-600 dark-text mb-1">Mavjudligi</h5>
          <v-switch
              v-model="financeModel.is_available"
              :readonly="TYPE === 'Read'"
              color="rgba(var(--primary), 1)"
              inset
              hide-details
              class="mt-0"
          ></v-switch>
        </div>
      </v-col>


    </v-row>
    <template v-if="TYPE !== 'Create'">
      <go-back-button/>
      <template v-if="TYPE !== 'Read'">
        <send-button
            @emit:up="update"
            :text="$t('Dashboard.update')"
        />
      </template>
    </template>
    <template v-else>
      <go-back-button/>
      <template v-if="!isCreated">
        <send-button @emit:up="send" :text="$t('Dashboard.add_new')"/>
      </template>
      <template v-else>
        <send-button
            @emit:up="update"
            :text="$t('Dashboard.update')"
        />
      </template>
    </template>
  </div>

</template>

<script>
import AppTreeSelect from "../../../../BaseComponents/AppTreeSelect";
import SendButton from "../../../../BaseComponents/SendButton";
import GoBackButton from "../../../../BaseComponents/GoBackButton";
import FileUpload from "../../../../BaseComponents/FileUpload";
import { ChevronDownIcon } from 'vue-feather-icons'
import {required} from "vuelidate/lib/validators";

export default {
  name: "FinanceOptional",
  props: {
    TYPE: {
      type: String,
      default: ''
    }
  },
  components: {
    AppTreeSelect,
    SendButton,
    GoBackButton,
    FileUpload,
    ChevronDownIcon
  },
  data(){
    return {
      financeModel:{
        title_uz: "",
        title_ru: "",
        title_en: "",
        description_uz: "",
        description_ru: "",
        description_en: "",
        image: null,
        is_available: true,
        condition_uz: "",
        condition_ru: "",
        condition_en: ""
      },
      tab1: null,
      tab2:null,
      financeFile: null,
      isCreated: false
    }
  },
  validations: {
    financeModel: {
      title_uz: {required},
      title_ru: {required},
      title_en: {required}
    },
  },
  mounted() {
    if (this.$route.params.id) {
      this.getOne()
    }
  },
  methods: {
    send() {
      this.$v.$touch();

      if (this.$v.$invalid) {
        this.$toast.warning(`Field to'ldirilishi shart`)

        return;
      }

      this.financeModel.image = this.financeFile.id

      this.$http.post(`/${this.$store.state.auth.COMPANY_ID}/finance/retail/`, this.financeModel)
          .then(({data}) => {
            this.$toast.success(`Moliyalash yaratildi`)

            this.$store.state.CREATED_FINANCE_ID = data.id

            this.isCreated = true
          })
    },
    /*
    *
    * */
    getOne() {
      this.$store.state.CREATED_FINANCE_ID = this.$route.params.id

      this.$http.get(`/${this.$store.state.auth.COMPANY_ID}/finance/retail/${this.$store.state.CREATED_FINANCE_ID}/`)
          .then(({data}) => {
            this.financeModel = data
            this.financeFile = data.image
          })
    },
    /*
    *
    * */
    update() {
      this.$v.$touch();

      if (this.$v.$invalid) {
        this.$toast.warning(`Field to'ldirilishi kerak`);

        return;
      }

      this.financeModel.image = this.financeFile.id

      if (this.$route.params.id) {
        this.$store.state.CREATED_FINANCE_ID = this.$route.params.id
      }

      this.$http.put(`/${this.$store.state.auth.COMPANY_ID}/finance/retail/${this.$store.state.CREATED_FINANCE_ID}/`, this.financeModel)
          .then(({data}) => {
            this.$toast.success(`Moliyalash yangilandi`)
          })
          .catch(err => {
            this.$toast.error(`Yangilashda xatolik`)
          })
    },
    /*
    *
    * */
    upload(file) {
      this.financeFile = file
    }
  }
}
</script>

<style scoped>

</style>