<template>
	<div class="foreign-activity-view">
		<v-container>
			<div class="app-view-content">
				<p>
                    <I18nVue t='Cooperative.FInancing.p1'/>
                </p>

				<p>
                    <I18nVue t='Cooperative.FInancing.p2'/>
                </p>

				<p>
                    <I18nVue t='Cooperative.FInancing.p3'/>
                </p>

                <p>
                    <I18nVue t='Cooperative.FInancing.p4'/>
                </p>

                <p>
                    <I18nVue t='Cooperative.FInancing.p5'/>
                </p>

                <p>
                    <I18nVue t='Cooperative.FInancing.p6'/>
                </p>
			</div>
		</v-container>

		<section class="section section-grey mt-16">
			<v-container>
                <h1 class="font-600 dark-text mb-16" style='font-weight: bold!important; font-size: 40px'>

                        <I18nVue t='Cooperative.FInancing.services_list'/>

                </h1>
				<v-row>
					<v-col lg="6" class="mb-10">
						<h1 class="font-600 dark-text mb-5">
                            <I18nVue t='Cooperative.FInancing.open_account'/>
                        </h1>

						<div class="credit-widget pa-6 rounded-lg overflow-hidden">
							<div class="app-ul">
								<ul>
									<li><I18nVue t='Cooperative.FInancing.open_account_1'/></li>
                                    <li><I18nVue t='Cooperative.FInancing.open_account_2'/></li>
                                    <li><I18nVue t='Cooperative.FInancing.open_account_3'/></li>
                                    <li><I18nVue t='Cooperative.FInancing.open_account_4'/></li>
								</ul>
							</div>
						</div>
					</v-col>

					<v-col lg="6" class="mb-10">
						<h1 class="font-600 dark-text mb-5">
                            <I18nVue t='Cooperative.FInancing.document_operations'/>
                        </h1>

						<div class="credit-widget pa-6 rounded-lg overflow-hidden mb-5">
							<div class="app-ul">
								<ul>
									<li><I18nVue t='Cooperative.FInancing.document_operations_1'/></li>
                                    <li><I18nVue t='Cooperative.FInancing.document_operations_2'/></li>
								</ul>
							</div>
						</div>
					</v-col>

					<v-col lg="6">
						<h1 class="font-600 dark-text mb-5">
                            <I18nVue t='Cooperative.FInancing.foreign_operations'/>
                        </h1>

						<div class="credit-widget pa-6 rounded-lg overflow-hidden mb-5">
							<div class="app-ul">
								<ul>
									<li><I18nVue t='Cooperative.FInancing.foreign_operations_1'/></li>
                                    <li><I18nVue t='Cooperative.FInancing.foreign_operations_2'/></li>
                                    <li><I18nVue t='Cooperative.FInancing.foreign_operations_3'/></li>
                                    <li><I18nVue t='Cooperative.FInancing.foreign_operations_4'/></li>
                                    <li><I18nVue t='Cooperative.FInancing.foreign_operations_5'/></li>
								</ul>
							</div>
						</div>
					</v-col>
				</v-row>
			</v-container>
		</section>

		<div class="faq-content my-16">
			<v-container>
				<h1 class="dark-text font-600 mb-2">
                    <I18nVue t='Cooperative.FInancing.tariffs'/>
                </h1>

				<h3><I18nVue t='Cooperative.FInancing.tariffs_sub'/></h3>




				<div class="app-collapse mt-8">
					<div class="app-collapse-item credit-widget rounded-lg">
						<v-expansion-panels accordion>
							<v-expansion-panel>
								<v-expansion-panel-header>
									<h4 class="font-600">
                                        <I18nVue t='Cooperative.FInancing.document_operations'/>
                                    </h4>
								</v-expansion-panel-header>

								<v-expansion-panel-content>
									<v-simple-table class="app-table app-table__border">
										<template v-slot:default>
											<tbody>
												<tr>
													<td width="1000" class="py-4">
														<h4 class="font-weight-bold font-italic"><I18nVue t='Cooperative.FInancing.column'/></h4>
													</td>
													<td class="py-4">
														<h5 class="font-weight-bold font-italic"><I18nVue t='Cooperative.FInancing.stavka'/></h5>
													</td>
												</tr>
												<tr>
													<td width="1000" class="py-4">
														<h4 class="font-weight-bold"><I18nVue t='Cooperative.FInancing.column1'/></h4>
													</td>
													<td class="py-4">
														<h5 class="font-600">

														</h5>
													</td>
												</tr>

												<tr>
													<td width="1000" class="py-4">
														<h4 class="font-600"><I18nVue t='Cooperative.FInancing.column2'/></h4>
													</td>
													<td class="py-4">
														<h5 class="font-600">
                                                            <I18nVue t='Cooperative.FInancing.Dropdown1.row31'/>
														</h5>
													</td>
												</tr>

                                                <tr>
                                                    <td width="1000" class="py-4">
                                                        <h4 class="font-600"><I18nVue t='Cooperative.FInancing.Dropdown1.row1'/></h4>
                                                    </td>
                                                    <td class="py-4">
                                                        <h5 class="font-600">
                                                            <I18nVue t='Cooperative.FInancing.Dropdown1.row12'/>
                                                        </h5>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td width="1000" class="py-4">
                                                        <h4 class="font-600"><I18nVue t='Cooperative.FInancing.Dropdown1.row2'/></h4>
                                                    </td>
                                                    <td class="py-4">
                                                        <h5 class="font-600">
                                                            <I18nVue t='Cooperative.FInancing.Dropdown1.row21'/>
                                                        </h5>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td width="1000" class="py-4">
                                                        <h4 class="font-600"><I18nVue t='Cooperative.FInancing.Dropdown1.row3'/></h4>
                                                    </td>
                                                    <td class="py-4">
                                                        <h5 class="font-600">
                                                            <I18nVue t='Cooperative.FInancing.Dropdown1.row31'/>
                                                        </h5>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td width="1000" class="py-4">
                                                        <h4 class="font-weight-bold font-italic"><I18nVue t='Cooperative.FInancing.Dropdown1.row4'/></h4>
                                                    </td>
                                                    <td class="py-4">
                                                        <h5 class="font-600">

                                                        </h5>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td width="1000" class="py-4">
                                                        <b><h4 class="font-600"><I18nVue t='Cooperative.FInancing.Dropdown1.row5'/></h4></b>
                                                    </td>
                                                    <td class="py-4">
                                                        <h5 class="font-600">
                                                            <I18nVue t='Cooperative.FInancing.Dropdown1.row51'/>
                                                        </h5>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td width="1000" class="py-4">
                                                        <b><h4 class="font-600"><I18nVue t='Cooperative.FInancing.Dropdown1.row6'/></h4></b>
                                                    </td>
                                                    <td class="py-4">
                                                        <h5 class="font-600">
                                                            <I18nVue t='Cooperative.FInancing.Dropdown1.row61'/>
                                                        </h5>
                                                    </td>
                                                </tr>



											</tbody>
										</template>
									</v-simple-table>
								</v-expansion-panel-content>
							</v-expansion-panel>
						</v-expansion-panels>
					</div>
				</div>


                <div class="app-collapse mt-8">
                    <div class="app-collapse-item credit-widget rounded-lg">
                        <v-expansion-panels accordion>
                            <v-expansion-panel>
                                <v-expansion-panel-header>
                                    <h4 class="font-600">
                                        <I18nVue t='Cooperative.FInancing.Dropdown2.header'/>
                                    </h4>
                                </v-expansion-panel-header>

                                <v-expansion-panel-content>
                                    <v-simple-table class="app-table app-table__border">
                                        <template v-slot:default>
                                            <tbody>
                                            <tr>
                                                <td width="1000" class="py-4">
                                                    <h4 class="font-weight-bold font-italic"><I18nVue t='Cooperative.FInancing.column'/></h4>
                                                </td>
                                                <td class="py-4">
                                                    <h5 class="font-weight-bold font-italic"><I18nVue t='Cooperative.FInancing.stavka'/></h5>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td width="1000" class="py-4">
                                                    <h4 class="font-600">
                                                        <I18nVue t='Cooperative.FInancing.Dropdown2.row1'/>
                                                    </h4>
                                                </td>
                                                <td class="py-4">
                                                    <h5 class="font-600">
                                                        <I18nVue t='Cooperative.FInancing.Dropdown2.row12'/>
                                                    </h5>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td width="1000" class="py-4">
                                                    <h4 class="font-600">
                                                        <I18nVue t='Cooperative.FInancing.Dropdown2.row2'/>
                                                    </h4>
                                                </td>
                                                <td class="py-4">
                                                    <h5 class="font-600">
                                                        <I18nVue t='Cooperative.FInancing.Dropdown2.row21'/>
                                                    </h5>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td width="1000" class="py-4">
                                                    <h4 class="font-600">
                                                        <I18nVue t='Cooperative.FInancing.Dropdown2.row3'/>
                                                    </h4>
                                                </td>
                                                <td class="py-4">
                                                    <h5 class="font-600">
                                                        <I18nVue t='Cooperative.FInancing.Dropdown2.row31'/>
                                                    </h5>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td width="1000" class="py-4">
                                                    <h4 class="font-600">
                                                        <I18nVue t='Cooperative.FInancing.Dropdown2.row4'/>
                                                    </h4>
                                                </td>
                                                <td class="py-4">
                                                    <h5 class="font-600">
                                                        <I18nVue t='Cooperative.FInancing.Dropdown2.row41'/>
                                                    </h5>
                                                </td>
                                            </tr>



                                            </tbody>
                                        </template>
                                    </v-simple-table>
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                        </v-expansion-panels>
                    </div>
                </div>

                <div class="app-collapse mt-8">
                    <div class="app-collapse-item credit-widget rounded-lg">
                        <v-expansion-panels accordion>
                            <v-expansion-panel>
                                <v-expansion-panel-header>
                                    <h4 class="font-600">
                                        <I18nVue t='Cooperative.FInancing.Dropdown3.header'/>
                                    </h4>
                                </v-expansion-panel-header>

                                <v-expansion-panel-content>
                                    <v-simple-table class="app-table app-table__border">
                                        <template v-slot:default>
                                            <tbody>
                                            <tr>
                                                <td width="1000" class="py-4">
                                                    <h4 class="font-weight-bold font-italic"><I18nVue t='Cooperative.FInancing.column'/></h4>
                                                </td>
                                                <td class="py-4">
                                                    <h5 class="font-weight-bold font-italic"><I18nVue t='Cooperative.FInancing.stavka'/></h5>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td width="1000" class="py-4">
                                                    <h4 class="font-weight-bold">
                                                        <I18nVue t='Cooperative.FInancing.Dropdown3.row1'/>
                                                    </h4>
                                                </td>
                                                <td class="py-4">
                                                    <h5 class="font-600">

                                                    </h5>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td width="1000" class="py-4">
                                                    <h4 class="font-600">
                                                        <I18nVue t='Cooperative.FInancing.Dropdown3.row2'/>
                                                    </h4>
                                                </td>
                                                <td class="py-4">
                                                    <h5 class="font-600">
                                                        <I18nVue t='Cooperative.FInancing.Dropdown3.row21'/>
                                                    </h5>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td width="1000" class="py-4">
                                                    <h4 class="font-600">
                                                        <I18nVue t='Cooperative.FInancing.Dropdown3.row3'/>
                                                    </h4>
                                                </td>
                                                <td class="py-4">
                                                    <h5 class="font-600">
                                                        <I18nVue t='Cooperative.FInancing.Dropdown3.row31'/>
                                                    </h5>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td width="1000" class="py-4">
                                                    <h4 class="font-weight-bold">
                                                        <I18nVue t='Cooperative.FInancing.Dropdown3.row4'/>
                                                    </h4>
                                                </td>
                                                <td class="py-4">
                                                    <h5 class="font-600">

                                                    </h5>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td width="1000" class="py-4">
                                                    <h4 class="font-600">
                                                        <I18nVue t='Cooperative.FInancing.Dropdown3.row5'/>
                                                    </h4>
                                                </td>
                                                <td class="py-4">
                                                    <h5 class="font-600">
                                                        <I18nVue t='Cooperative.FInancing.Dropdown3.row51'/>
                                                    </h5>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td width="1000" class="py-4">
                                                    <h4 class="font-600">
                                                        <I18nVue t='Cooperative.FInancing.Dropdown3.row6'/>
                                                    </h4>
                                                </td>
                                                <td class="py-4">
                                                    <h5 class="font-600">
                                                        <I18nVue t='Cooperative.FInancing.Dropdown3.row61'/>
                                                    </h5>
                                                </td>
                                            </tr>



                                            </tbody>
                                        </template>
                                    </v-simple-table>
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                        </v-expansion-panels>
                    </div>
                </div>



			</v-container>
		</div>
	</div>
</template>

<script>
    import I18nVue from '@/I18nVue'
export default {
	name: "ForeignEconomicActivity",
    components:{
	    I18nVue
    }
}
</script>

<style>

</style>