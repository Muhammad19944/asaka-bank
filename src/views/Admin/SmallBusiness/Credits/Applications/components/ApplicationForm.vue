<template>
    <div class="application-form-view">
        <app-card>
            <div class="form-wrap pa-5 px-6">
                <div class="d-flex align-center mb-8">
                    <h4 class="text--primary text-uppercase font-700 mr-4">Ko'rish</h4>

                    <v-divider style="border-color: rgb(var(--border-color), 1)"></v-divider>
                </div>

                <div class="form-wrap-body">
                    <v-row>
                        <v-col md="3">
                            <div class="app-form-group app-form-group__small no-shadow mb-2">
                                <h5 class="font-600 dark-text mb-1">F.I.O</h5>

                                <v-text-field outlined hide-details> </v-text-field>
                            </div>
                        </v-col>

                        <v-col md="3">
                            <div class="app-form-group app-form-group__small no-shadow mb-2">
                                <h5 class="font-600 dark-text mb-1">Telefon</h5>

                                <v-text-field outlined hide-details> </v-text-field>
                            </div>
                        </v-col>

                        <v-col md="3">
                            <div class="app-form-group app-form-group__small no-shadow mb-2">
                                <h5 class="font-600 dark-text mb-1">E-mail</h5>

                                <v-text-field outlined hide-details> </v-text-field>
                            </div>
                        </v-col>

                        <v-col md="3">
                            <div class="app-form-group app-form-group__small no-shadow mb-2">
                                <h5 class="font-600 dark-text mb-1">STIR</h5>

                                <v-text-field outlined hide-details> </v-text-field>
                            </div>
                        </v-col>

                        <v-col md="3">
                            <div class="app-form-group app-form-group__small no-shadow mb-2">
                                <h5 class="font-600 dark-text mb-1">Karta</h5>

                                <v-text-field outlined hide-details> </v-text-field>
                            </div>
                        </v-col>

                        <v-col md="3">
                            <div class="app-form-group app-form-group__small no-shadow mb-2">
                                <h5 class="font-600 dark-text mb-1">Viloyat</h5>

                                <v-text-field outlined hide-details> </v-text-field>
                            </div>
                        </v-col>

                        <v-col md="3">
                            <div class="app-form-group app-form-group__small no-shadow mb-2">
                                <h5 class="font-600 dark-text mb-1">Filial</h5>

                                <v-text-field outlined hide-details> </v-text-field>
                            </div>
                        </v-col>

                        <v-col md="3">
                            <div class="app-form-group app-form-group__small no-shadow mb-2">
                                <h5 class="font-600 dark-text mb-1">Status</h5>

                                <v-select :items="['Active', 'Inactive']" outlined hide-details>
                                    <template v-slot:append>
                                        <chevron-down-icon size="1.35x" class="text-secondary-dark"></chevron-down-icon>
                                    </template>
                                </v-select>
                            </div>
                        </v-col>

                        <v-col md="3">
                            <div class="app-form-group app-form-group__small no-shadow mb-2">
                                <h5 class="font-600 dark-text mb-1">Pasport</h5>

                                <v-file-input prepend-icon="" outlined hide-details>
                                    <template v-slot:append>
                                        <file-text-icon size="1.5x" class="text-secondary-dark"></file-text-icon>
                                    </template>
                                </v-file-input>
                            </div>
                        </v-col>

                        <v-col md="3">
                            <div class="app-form-group app-form-group__small no-shadow mb-2">
                                <h5 class="font-600 dark-text mb-1">Fayl</h5>

                                <v-file-input prepend-icon="" outlined hide-details>
                                    <template v-slot:append>
                                        <file-text-icon size="1.5x" class="text-secondary-dark"></file-text-icon>
                                    </template>
                                </v-file-input>
                            </div>
                        </v-col>

                        <v-col md="4"></v-col>

                        <v-col md="6">
                            <div class="app-form-group app-form-group__small no-shadow mb-2">
                                <h5 class="font-600 dark-text mb-1">Xabar</h5>

                                <v-textarea outlined hide-details no-resize> </v-textarea>
                            </div>
                        </v-col>

                        <v-col md="12">
                            <go-back-button />

                            <send-button />
                        </v-col>
                    </v-row>
                </div>
            </div>
        </app-card>
    </div>
</template>

<script>
    import AppCard from '../../../BaseComponents/AppCard'
    import SendButton from '../../../BaseComponents/SendButton'
    import GoBackButton from '../../../BaseComponents/GoBackButton'
    import { FileTextIcon, ChevronDownIcon } from 'vue-feather-icons'

    export default {
        name: 'ApplicationForm',
        props: {
            TYPE: {
                type: String,
                default: '',
            },
        },
        components: {
            AppCard,
            SendButton,
            GoBackButton,
            FileTextIcon,
            ChevronDownIcon,
        },
    }
</script>

<style></style>
