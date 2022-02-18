<template>
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
            </v-row>
                <div class="app-form-group mb-7 mt-8">
                    <h4 class="font-600 dark-text">
                        <I18nVue t="Services.OpenCard.filial" />
                    </h4>

                    <v-divider class="mt-3 mb-7" style="border-color: rgba(var(--border-color), 1)" />

                    <v-select
                        v-model="$v.formRequestModel.filial.$model"
                        :error="$v.formRequestModel.filial.$error"
                        :items="filialList"
                        :item-text="this.$i18n.locale === 'uz' ? 'name_uz' : this.$i18n.locale === 'ru' ? 'name_ru' : 'name_en'"
                        item-value="id"
                        outlined
                        hide-details
                        no-data-text="Ma'lumot yo'q"
                        :placeholder="$t('Services.OpenCard.filial_sub')"
                    >
                        <template v-slot:append>
                            <chevron-down-icon size="1.5x" class="grey--text"></chevron-down-icon>
                        </template>
                    </v-select>
                </div>


            <v-col v-if='$i18n.locale === "uz"' md="12">
                <div class="app-form-group mb-7">
                    <h4 class="font-600 dark-text">Ommaviy oferta</h4>

                    <v-divider class="mt-3 mb-7" style="border-color: rgba(var(--border-color), 1)" />

                    <div class="d-flex align-start">
                        <v-checkbox v-model="checkbox" hide-details color="danger" class="ma-0"></v-checkbox>
                        <h4 class="font-600 dark-text">
                            <router-link
	                            :to="{ name: 'PublicOffer' }"
	                            class="text-decoration-none primary-text"
                            >ommaviy oferta
                            </router-link>
                            shartlari bilan tanishdim

                        </h4>
                    </div>
                </div>
            </v-col>

            <v-col v-if='$i18n.locale === "en"' md="12">
                <div class="app-form-group mb-7">
                    <h4 class="font-600 dark-text">Public offer</h4>

                    <v-divider class="mt-3 mb-7" style="border-color: rgba(var(--border-color), 1)" />

                    <div class="d-flex align-start">
                        <v-checkbox v-model="checkbox" hide-details color="danger" class="ma-0"></v-checkbox>
                        <h4 class="font-600 dark-text">
                            I got acquainted with the conditions of
                            <router-link
	                            :to="{ name: 'PublicOffer' }"
	                            class="text-decoration-none primary-text"
                            >public offer
                            </router-link>
                        </h4>
                    </div>
                </div>
            </v-col>

            <v-col v-if='$i18n.locale === "ru"' md="12">
                <div class="app-form-group mb-7">
                    <h4 class="font-600 dark-text">Публичная оферта</h4>

                    <v-divider class="mt-3 mb-7" style="border-color: rgba(var(--border-color), 1)" />

                    <div class="d-flex align-start">
                        <v-checkbox v-model="checkbox" hide-details color="danger" class="ma-0"></v-checkbox>
                        <h4 class="font-600 dark-text">
                            Я ознакомился(-ась) с условиями
                            <router-link
	                            :to="{ name: 'PublicOffer' }"
	                            class="text-decoration-none primary-text"
                            >публичная оферта
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
                        <span class="text-white font-700">
                            <I18nVue t="Services.OpenCard.application" />
                        </span>
            </v-btn>
        </div>
        <app-snackbar ref="appSnackbar" />
    </v-container>

</template>

<script>
    import I18nVue from '@/I18nVue'
    import VueMask from 'v-mask'
    import AppSnackbar from "@/components/AppSnackbar";
    import { required, email } from "vuelidate/lib/validators";
    import { ChevronDownIcon, FileTextIcon } from "vue-feather-icons";
    export default {
        name: 'index',
        components:{
            AppSnackbar,
            I18nVue,
            VueMask,
            ChevronDownIcon
        },

        data() {
            return{
                checkbox: false,
                formRequestModel: {
                    full_name: "",
                    phone: "",
                    email: "",
                    tax_inn: "",
                    filial: null
                },
                filialList: []
            }
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
          this.getFilialList()
        },

        methods:{
            getFilialList(){
                this.$http.get("/1/filial/", {
                    params: {
                        is_for_acquiring: true
                    }
                })
                .then(({ data }) => {
                    this.filialList = data.results;
                })
            },

            send() {
                /*this.$v.$touch();

                if (this.$v.$invalid) {
                    return;
                }*/

                // Удаляем плюс и пробелы из номера
                this.formRequestModel.phone = this.formRequestModel.phone.replace(/\D/g, "");

                this.$http.post("/acquiring/create/", this.formRequestModel).then((res) => {
                    const { appSnackbar } = this.$refs;

                    appSnackbar.snackbar = true;
                    appSnackbar.text = "Murojat muvaffaqiyatli yuborildi";

                    for (let key in this.formRequestModel) {
                        this.formRequestModel[key] = "";
                    }

                    this.$v.$reset();
                });
            },
        }
    }
</script>

<style scoped>

</style>