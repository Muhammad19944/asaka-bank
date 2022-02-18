<template>
	<div class="card-form-view">
		<app-card>
			<div class="form-wrap pa-5 px-6">
				<div class="d-flex align-center mb-8">
					<h4 class="text--primary text-uppercase font-700 mr-4">
						{{ TYPE === 'Create' ? $t('Dashboard.add_new') : TYPE === 'Update' ? $t('Dashboard.update') : $t('Dashboard.read') }}
					</h4>

                    <v-divider style="border-color: rgb(var(--border-color), 1)"></v-divider>
                </div>


				<div class="app-collapse--advanced mb-10">
					<v-expansion-panels v-model="panel" accordion multiple class="border-all">
						<!-- Credit models -->
						<v-expansion-panel>
							<v-expansion-panel-header class="py-5 font-600 reset-size">
								{{ $t('Dashboard.credits.create_credit_text') }}
							</v-expansion-panel-header>
							<v-expansion-panel-content>
								<credit-optional :TYPE="TYPE" />
							</v-expansion-panel-content>
						</v-expansion-panel>
						<!-- End Credit models -->

                        <!-- Credit properties -->
                        <v-expansion-panel>
                            <v-expansion-panel-header class="py-5 font-600 reset-size">
	                            {{ $t('Dashboard.credits.credit_prop') }}
                            </v-expansion-panel-header>
                            <v-expansion-panel-content>
                                <credit-props :TYPE="TYPE" />
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                        <!-- End Credit properties -->

                        <!-- Credit documents -->
                        <v-expansion-panel>
                            <v-expansion-panel-header class="py-5 font-600 reset-size">
	                            {{ $t('Dashboard.documents') }}
                            </v-expansion-panel-header>
                            <v-expansion-panel-content>
                                <credit-documents :TYPE="TYPE" />
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                        <!-- End Credit documents -->

                        <!-- Credit documents -->
                        <v-expansion-panel>
                            <v-expansion-panel-header class="py-5 font-600 reset-size">
	                            {{ $t('Dashboard.credits.create_calculator') }}
                            </v-expansion-panel-header>
                            <v-expansion-panel-content>
                                <credit-calc :TYPE="TYPE" />
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                        <!-- End Credit documents -->

						<!-- Transfer Reference model -->
						<v-expansion-panel>
							<v-expansion-panel-header class="py-5 font-600 reset-size">
								Reference qo'shish
							</v-expansion-panel-header>
							<v-expansion-panel-content>
								<credit-reference :TYPE="TYPE" />
							</v-expansion-panel-content>
						</v-expansion-panel>
						<!-- End Transfer Reference model -->
                    </v-expansion-panels>
                </div>
            </div>
        </app-card>
    </div>
</template>

<script>
import AppCard from "../../../../BaseComponents/AppCard";
import CreditOptional from "./CreditOptional";
import CreditProps from "./CreditProps";
import CreditDocuments from "./CreditDocuments";
import CreditCalc from "./CreditCalc";
import CreditReference from "@/views/Admin/PrivateClients/Credits/Credit/components/CreditReference"

export default {
	name: "CardForm",
	props: {
		TYPE: {
			type: String,
			default: ""
		}
	},
	components: {
		AppCard,
		CreditOptional,
		CreditProps,
		CreditDocuments,
		CreditCalc,
		CreditReference
	},
	data() {
		return {
			panel: [0]
		};
	},
	mounted() {
		if (this.$route.params.id) {
			this.$store.state.CREATED_CREDIT_ID = +this.$route.params.id;
		}
	}
};
</script>

<style>

</style>
