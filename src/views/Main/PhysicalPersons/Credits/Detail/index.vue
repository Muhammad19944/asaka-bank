<template>
  <div class="detail-view">
    <v-container>
      <div class="detail-view-content">
        <v-row>
          <v-col lg="6">
            <v-responsive :aspect-ratio="16 / 9">
              <img
                  :src="creditDetailModel.image && this.$http.defaults.baseURL + creditDetailModel.image.url"
                  alt="Credit image"/>
            </v-responsive>
          </v-col>

          <v-col lg="6">
            <div class="pl-lg-16">
              <p class="text-lg-right">
                <I18nVue t="updated"/>
                {{ creditDetailModel.modified_date && creditDetailModel.modified_date | filterDate }}
              </p>
              <h1 class="font-700 text-extra-large-4 dark-text">
                <I18nVue
                    :ru="creditDetailModel.title_ru"
                    :en="creditDetailModel.title_en"
                    :uz="creditDetailModel.title_uz"
                />
              </h1>
              <v-divider class="my-8"/>
              <span v-if="$i18n.locale === 'en'" v-html="creditDetailModel.description_en"/>
              <span v-if="$i18n.locale === 'ru'" v-html="creditDetailModel.description_ru"/>
              <span v-if="$i18n.locale === 'uz'" v-html="creditDetailModel.description_uz"/>

              <div class="credit-meta d-flex flex-wrap mb-13 w-100 mt-10">
                <template v-for="item in referenceList">
                  <div class="credit-meta-items d-flex align-center dark-text">
                    <h1 class="text-extra-large-4 mr-3 line-base font-300">
                      <span v-if="$i18n.locale === 'uz'" v-html="item.text_left_uz"></span>
                      <span v-if="$i18n.locale === 'ru'" v-html="item.text_left_ru"></span>
                      <span v-if="$i18n.locale === 'en'" v-html="item.text_left_en"></span>
                    </h1>

                    <div class="d-flex flex-column h-100">
                      <h5 class="font-600">
                        <I18nVue :uz="item.text_right_top_uz" :ru="item.text_right_top_ru"
                                 :en="item.text_right_top_en"/>
                      </h5>
                      <I18nVue :uz="item.text_bottom_uz" :ru="item.text_bottom_ru"
                               :en="item.text_bottom_en"/>
                    </div>
                  </div>
                </template>
              </div>
            </div>
          </v-col>
        </v-row>
      </div>

      <!-- Additional content for car loan credit -->
      <template v-if="$route.params.id == 33">
        <div class="car-loan-template mt-16">
          <carousel
              :navigationEnabled="true"
              :perPageCustom="[[320, 1],[578, 2],[1300, 3],[1600, 4]]"
          >
            <template v-for="car in carsList">
              <slide :key="car.photo_sha">
                <div
                    @click="carSelected(car)"
                    :class="car.model_id === carCurrentSelected.model_id ? 'active' : ''"
                    class="slide-wrap app-slide-card pointer rounded-lg d-flex flex-column p-relative pa-4 my-7 mx-2"
                >
                  <img src="/images/logo.png" alt="Chevrolet cars image"
                       class="car-logo-hero d-block"/>

                  <img
                      :src="`https://test-dealer.uzavtosanoat.uz/b/core/m$load_image?sha=${car.photo_sha}&height=300&width=300`"
                      alt="Chevrolet cars image"
                      class="slide-item-images d-block"
                  />

                  <div class="slide-wrap-description">
                    <h3 class="font-700 main-grey mb-1">
                      Мин. цена
                      <span style="color: rgba(var(--main-primary), 1)">
												{{ car.min_price | filterNumberFormatThousands }}
											</span>
                    </h3>
                    <h5 class="font-600">{{ car.name }}</h5>
                    <span class="d-block">
											Сумма ежемес. выплат:
											<span
                          class="font-700"
                          style="color: rgba(var(--main-primary), 1)"
                      >
												{{ car.payPerMonth }}
											</span>
										</span>
                  </div>
                </div>
              </slide>
            </template>
          </carousel>

          <div class="car-selected-wrap rounded-lg">
            <div class="app-slide-card rounded-lg d-flex flex-column p-relative overflow-visible">
              <div class="d-flex flex-wrap">
                <template v-if="carCurrentSelected.photo_sha">
                  <img
                      :src="`https://test-dealer.uzavtosanoat.uz/b/core/m$load_image?sha=${carCurrentSelected.photo_sha}&height=800&width=1100`"
                      alt="Chevrolet cars image" class="car-selected-hero d-block"/>
                </template>

                <template v-else>
                  <div class="w-100 d-flex align-center justify-center">
                    <h1 class="text-extra-large-4 font-600">Image not found</h1>
                  </div>
                </template>
                <div class="car-selected-variation p-relative ml-auto pt-lg-16 pt-0 pr-0 pr-lg-16">
                  <template v-for="color in carCurrentSelected.colors">
                    <div
                        @click="colorSelected(color)"
                        :key="color.color_id"
                        :class="color.color_id === carColorSelected.color_id ? 'active' : ''"
                        class="variation-item mb-3"
                    >
                      <div :style="{'background' : color.hex_value}"
                           class="variation-circle"></div>
                    </div>
                  </template>
                </div>
              </div>

              <div class="car-characteristic my-10 mx-5 mx-md-10">
                <v-row>
                  <template v-for="modification in carCurrentSelected.modifications">
                    <v-col @click="modificationSelected(modification)"
                           :key="modification.modification_id" lg="4" sm="6" col>
                      <div
                          class="characteristic-item py-4 px-5 pointer"
                          :class="modification.modification_id === carModificationModel.modification_id ? 'active' : ''"
                      >
                        <h3 class="text--h3 font-600 mb-3">{{ modification.name }}</h3>

                        <div class="d-flex align-center mb-2">
                          <img src="/images/cars/engine.svg" alt="Engine icon">
                          <span v-if="modification.horsepower" class="text--h5 font-600 ml-2">{{
                              modification.horsepower
                            }}</span>
                          <span v-else class="text--h5 font-600 ml-2">Характеристика отсутствует</span>
                        </div>

                        <div class="d-flex align-center">
                          <img src="/images/cars/gear.svg" alt="Engine icon"
                               style="width: 20px">
                          <span v-if="modification.fuel_consumption"
                                class="text--h5 font-600 ml-2">{{
                              modification.fuel_consumption
                            }}</span>
                          <span v-else class="text--h5 font-600 ml-2">Характеристика отсутствует</span>
                        </div>
                      </div>
                    </v-col>
                  </template>
                </v-row>
              </div>

              <div class="mx-5 mx-md-10 mb-10 characteristics-wrap">
                <div class="app-collapse">
                  <div class="app-collapse-item">
                    <v-expansion-panels accordion>
                      <v-expansion-panel>
                        <v-expansion-panel-header class="expansion-header-width">
                          <h3 class="font-600">
                            Характеристики
                          </h3>
                        </v-expansion-panel-header>

                        <v-expansion-panel-content>
                          <div class="mx-n5 mt-4 characteristics-content-wrap">
                            <v-row>
                              <v-col lg="3" md="4" sm="6" col class="mt-0">
                                <span class="grey--text text--h4 d-block">Цена</span>
                                <span v-if="carModificationModel.min_price"
                                      class="font-600 text--h3">{{
                                    carModificationModel.min_price | filterNumberFormatThousands
                                  }}</span>
                                <span v-else
                                      class="text--h5 font-600">Цена отсутствует</span>
                              </v-col>

                              <v-col lg="3" md="4" sm="6" col class="mt-0 mt-sm-6">
																<span
                                    class="grey--text text--h4 d-block">Тип кузова</span>
                                <span class="font-600 text--h3">4х-дверный</span>
                              </v-col>

                              <v-col lg="3" md="4" sm="6" col class="mt-0 mt-sm-6">
																<span
                                    class="grey--text text--h4 d-block">Расход топлива</span>
                                <span v-if="carModificationModel.fuel_consumption"
                                      class="font-600 text--h3">{{
                                    carModificationModel.fuel_consumption
                                  }}</span>
                                <span v-else class="text--h5 font-600">Характеристика отсутствует</span>
                              </v-col>

                              <v-col lg="3" md="4" sm="6" col class="mt-0 mt-sm-6">
																<span
                                    class="grey--text text--h4 d-block">Лошадиные силы</span>
                                <span v-if="carModificationModel.horsepower"
                                      class="font-600 text--h3">{{
                                    carModificationModel.horsepower
                                  }}</span>
                                <span v-else class="text--h5 font-600">Характеристика отсутствует</span>
                              </v-col>

                              <v-col lg="3" md="4" sm="6" col class="mt-0 mt-sm-6">
                                <span class="grey--text text--h4 d-block">Разгон</span>
                                <span v-if="carModificationModel.acceleration"
                                      class="font-600 text--h3">{{
                                    carModificationModel.acceleration
                                  }} сек. - достигает до 100 км/ч</span>
                                <span v-else class="text--h5 font-600">Характеристика отсутствует</span>
                              </v-col>

                              <v-col lg="3" md="4" sm="6" col class="mt-0 mt-sm-6">
                                <span class="grey--text text--h4 d-block">Коробка передач</span>
                                <span v-if="carModificationModel.transmission"
                                      class="font-600 text--h3">{{
                                    carModificationModel.transmission
                                  }}</span>
                                <span v-else class="text--h5 font-600">Характеристика отсутствует</span>
                              </v-col>

                              <v-col lg="3" md="4" sm="6" col class="mt-0 mt-sm-6">
																<span
                                    class="grey--text text--h4 d-block">Описания</span>
                                <span v-if="carModificationModel.descriptions"
                                      class="font-600 text--h3">{{
                                    carModificationModel.descriptions
                                  }}</span>
                                <span v-else class="text--h5 font-600">Характеристика отсутствует</span>
                              </v-col>

                              <v-col lg="3" md="4" sm="6" col class="mt-0 mt-sm-6">
																<span
                                    class="grey--text text--h4 d-block">Параметры</span>

                                <template v-if="carModificationModel.options">
																	<span
                                      v-for="(option, index) in carModificationModel.options"
                                      :key="index"
                                      class="font-600 text--h3 d-block"
                                  >
																		{{ index + 1 }}. {{ option }}
																	</span>
                                </template>
                                <span v-else class="text--h5 font-600">Характеристика отсутствует</span>
                              </v-col>
                            </v-row>
                          </div>
                        </v-expansion-panel-content>
                      </v-expansion-panel>
                    </v-expansion-panels>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
      <!-- End additional content for car loan credit -->

    </v-container>

    <div class="view-toolbar mt-16">
      <v-container class="py-0">
        <div class="app-tab-header d-flex">
          <div class="tab-header-items text-center mr-7 active" data-item="header">
            <a
                class="
                                navigation-link__hover
                                p-relative
                                text--h4
                                py-6
                                font-600
                                d-inline-block
                            "
            >
              <I18nVue t="Credit_Detail.tab1"/>
            </a>
          </div>
          <div class="tab-header-items text-center mr-7" data-item="header">
            <a
                class="
                                navigation-link navigation-link__hover
                                p-relative
                                text--h4
                                py-6
                                font-600
                                d-inline-block
                            "
            >
              <I18nVue t="Credit_Detail.tab2"/>
            </a>
          </div>
          <div class="tab-header-items text-center mr-7" data-item="header">
            <a
                class="
                                navigation-link navigation-link__hover
                                p-relative
                                text--h4
                                py-6
                                font-600
                                d-inline-block
                            "
            >
              <I18nVue t="Credit_Detail.tab3"/>
            </a>
          </div>
          <div class="tab-header-items text-center mr-7" data-item="header">
            <a
                class="
                                navigation-link navigation-link__hover
                                p-relative
                                text--h4
                                py-6
                                font-600
                                d-inline-block
                            "
            >
              <I18nVue t="Credit_Detail.tab4"/>
            </a>
          </div>
        </div>
      </v-container>
    </div>

    <div class="view-toolbar-content py-16 overflow-hidden">
      <v-container class="py-0">
        <div class="app-tab-content p-relative">
          <div class="tab-content-items active" data-item="content">
            <app-online-credit-calc @emit:up="generateTable" :creditID="$route.params.id"/>
          </div>
          <div class="tab-content-items" data-item="content">
            <terms-and-conditions :property="property" :IDList="IDList"/>
          </div>
          <div class="tab-content-items" data-item="content">
            <documents :documents="documents"/>
          </div>
          <div class="tab-content-items" data-item="content">
            <payment-methods :property="property"/>
          </div>
        </div>
      </v-container>
    </div>

    <section class="py-8">
      <v-container>
        <h1 class="font-600 dark-text">
          <I18nVue t="Credit_Detail.step_text"/>
        </h1>
        <I18nVue t="Credit_Detail.step_body" class="text--h3 grey--text d-block mt-2 mb-10"/>

        <v-row>
          <v-col lg="3" sm="6">
            <div class="app-card-simple text-center transition-all py-10 px-7 rounded-lg h-100 mx-2">
              <h1 class="font-300 text-extra-large primary-text">1</h1>

              <v-divider style="border-color: rgba(var(--border-color), 1)" class="my-10"/>

              <h4 class="dark-text">
                <I18nVue t="Credit_Detail.step1"/>
              </h4>
            </div>
          </v-col>

          <v-col lg="3" sm="6">
            <div class="app-card-simple text-center transition-all py-10 px-7 rounded-lg h-100 mx-2">
              <h1 class="font-300 text-extra-large primary-text">2</h1>

              <v-divider style="border-color: rgba(var(--border-color), 1)" class="my-10"/>

              <h4 class="dark-text">
                <I18nVue t="Credit_Detail.step2"/>
              </h4>
            </div>
          </v-col>

          <v-col lg="3" sm="6">
            <div class="app-card-simple text-center transition-all py-10 px-7 rounded-lg h-100 mx-2">
              <h1 class="font-300 text-extra-large primary-text">3</h1>

              <v-divider style="border-color: rgba(var(--border-color), 1)" class="my-10"/>

              <h4 class="dark-text">
                <I18nVue t="Credit_Detail.step3"/>
              </h4>
            </div>
          </v-col>

          <v-col lg="3" sm="6">
            <div
                class="
                                transition-all
                                py-10
                                px-7
                                rounded-lg
                                h-100
                                mx-2
                                primary-bg
                                d-flex
                                flex-column
                                align-start
                            "
            >
              <h2 class="font-600">
                <I18nVue t="Credit_Detail.step4"/>
              </h2>

              <h5 class="font-300 my-4">
                <I18nVue t="Credit_Detail.step5"/>
              </h5>

              <v-btn
                  :to="{ name: 'OnlineCredit' }"
                  depressed
                  color="rgba(var(--main-primary), 1)"
                  rounded
                  min-width="192"
                  min-height="50"
                  class="mt-auto"
                  style="background-color: #fff"
                  :disabled="creditDetailModel.is_available && !creditDetailModel.is_available"
              >
                <I18nVue t="application_form" class="primary-text font-700"/>
              </v-btn>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>


    <!-- CREDIT GENERATED TABLE -->
    <transition name="fade">
      <template v-if="generateTableModel.isTableGenerated">
        <div class="generated-table-modal p-fixed w-100 h-100 d-flex align-center justify-center">
          <div class="generated-table w-100 overflow-y-auto rounded">
            <div class="generated-table-content pa-8">
              <div class="d-flex align-center justify-space-between mb-5">
                <h2 class="font-600">
                  <I18nVue t='CreditCalculator.payment_table'/>
                </h2>

                <v-btn @click="generateTableModel.isTableGenerated = false" icon depressed color="danger" large>
                  <x-icon size="2x" class="custom-class"></x-icon>
                </v-btn>
              </div>

              <div class="app-table mb-7">
                <v-simple-table class="app-table app-table__border">
                  <template v-slot:default>
                    <tbody>
                    <template v-if="generateTableModel.tableHeader.creditType">
                      <tr>
                        <td class="text-left py-4">
                          <h5 class="font-600">
                            <I18nVue t='CreditCalculator.credit_type'/>
                            :
                          </h5>
                        </td>
                        <td class="text-left py-4">
                          <template v-if="$i18n.locale === 'uz'">
                            <h5 class="font-600">{{ generateTableModel.tableHeader.creditType.title_uz }}</h5>
                          </template>

                          <template v-if="$i18n.locale === 'ru'">
                            <h5 class="font-600">{{ generateTableModel.tableHeader.creditType.title_ru }}</h5>
                          </template>

                          <template v-if="$i18n.locale === 'en'">
                            <h5 class="font-600">{{ generateTableModel.tableHeader.creditType.title_en }}</h5>
                          </template>
                        </td>
                      </tr>
                    </template>
                    <tr>
                      <td class="py-4">
                        <h5 class="font-600">
                          <I18nVue t='CreditCalculator.credit_period'/>
                          :
                        </h5>
                      </td>
                      <td class="py-4">
                        <template v-if="generateTableModel.tableHeader.creditPeriod">
                          <template v-if="$i18n.locale === 'uz'">
                            <h5 class="font-600">{{ generateTableModel.tableHeader.creditPeriod.month }} oy</h5>
                          </template>

                          <template v-if="$i18n.locale === 'ru'">
                            <h5 class="font-600">{{ generateTableModel.tableHeader.creditPeriod.month }} месяц</h5>
                          </template>

                          <template v-if="$i18n.locale === 'en'">
                            <h5 class="font-600">{{ generateTableModel.tableHeader.creditPeriod.month }} month</h5>
                          </template>
                        </template>
                      </td>
                    </tr>
                    <tr>
                      <td class="py-4">
                        <h5 class="font-600">
                          <I18nVue t='CreditCalculator.annual_rate'/>
                          :
                        </h5>
                      </td>
                      <td class="py-4">
                        <h5 v-if='generateTableModel.tableHeader.interestRate.percent' class="font-600">
                          {{ generateTableModel.tableHeader.interestRate.percent }}%</h5>
                        <h5 v-else class="font-600">{{ generateTableModel.tableHeader.generalPercent }}%</h5>
                      </td>
                    </tr>
                    <tr>
                      <td class="py-4">
                        <h5 class="font-600">
                          <I18nVue t='CreditCalculator.initial_payment'/>
                          :
                        </h5>
                      </td>
                      <td class="py-4">
                        <h5 v-if='generateTableModel.tableHeader.initialPayment.value' class="font-600">
                          {{ generateTableModel.tableHeader.initialPayment.value }}%</h5>
                        <h5 v-else>-</h5>
                      </td>
                    </tr>
                    <tr>
                      <td class="py-4">
                        <h5 class="font-600">
                          <I18nVue t='CreditCalculator.privilege_period'/>
                          :
                        </h5>
                      </td>
                      <td class="py-4">
                        <template v-if="$i18n.locale === 'uz'">
                          <h5 v-if='generateTableModel.tableHeader.gracePeriod.month' class="font-600">
                            {{ generateTableModel.tableHeader.gracePeriod.month }} oy</h5>
                          <h5 v-else>Mavjud emas</h5>
                        </template>

                        <template v-if="$i18n.locale === 'ru'">
                          <h5 v-if='generateTableModel.tableHeader.gracePeriod.month' class="font-600">
                            {{ generateTableModel.tableHeader.gracePeriod.month }} месяц</h5>
                          <h5 v-else>Недоступен</h5>
                        </template>

                        <template v-if="$i18n.locale === 'en'">
                          <h5 v-if='generateTableModel.tableHeader.gracePeriod.month' class="font-600">
                            {{ generateTableModel.tableHeader.gracePeriod.month }} month</h5>
                          <h5 v-else>Not available</h5>
                        </template>
                      </td>
                    </tr>
                    </tbody>
                  </template>
                </v-simple-table>
              </div>

              <div class="app-table">
                <v-simple-table class="app-table app-table__border text-center">
                  <template v-slot:default>
                    <thead>
                    <tr>
                      <th width="75" class="text-center py-4">
                        <h5 class="font-600">№</h5>
                      </th>
                      <th width="200" class="text-center py-4">
                        <h5 class="font-600">
                          <I18nVue t='CreditCalculator.payment_period'/>
                        </h5>
                      </th>
                      <th width="150" class="text-center py-4">
                        <h5 class="font-600">
                          <I18nVue t='CreditCalculator.date'/>
                        </h5>
                      </th>
                      <th width="375" class="text-center py-4">
                        <h5 class="font-600">
                          <I18nVue t='CreditCalculator.base_debt_payment'/>
                        </h5>
                      </th>
                      <th width="325" class="text-center py-4">
                        <h5 class="font-600">
                          <I18nVue t='CreditCalculator.interest_rate_payment'/>
                        </h5>
                      </th>
                      <!--												<template v-if='generateTableModel.tableHeader.gracePeriod.month'>-->
                      <!--													<th width="325"  class="text-center py-4">-->
                      <!--														<h5 class="font-600"><I18nVue t='CreditCalculator.privilege_period'/></h5>-->
                      <!--													</th>-->
                      <!--												</template>-->
                      <th width="250" class="text-center py-4">
                        <h5 class="font-600">
                          <I18nVue t='CreditCalculator.total_payment'/>
                        </h5>
                      </th>
                      <th width="275" class="text-center py-4">
                        <h5 class="font-600">
                          <I18nVue t='CreditCalculator.debt'/>
                        </h5>
                      </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="(item, index) in generateTableModel.tableContent">
                      <td class="py-4">
                        <h5 class="font-600">{{ index + 1 }}</h5>
                      </td>
                      <td class="py-4">
                        <h5 class="font-600">{{ item.dateFormat }}</h5>
                      </td>
                      <td class="py-4">
                        <h5 class="font-600">{{ item.date }}</h5>
                      </td>
                      <td class="py-4">
                        <h5 class="font-600">{{ item.loanPayment }}</h5>
                      </td>
                      <td class="py-4">
                        <h5 class="font-600">{{ item.interestPayment }}</h5>
                      </td>
                      <!--												<template v-if='generateTableModel.tableHeader.gracePeriod.month'>-->
                      <!--													<td class="py-4">-->
                      <!--														<h5 class="font-600">{{ item.gracePeriodPayment }}</h5>-->
                      <!--													</td>-->
                      <!--												</template>-->
                      <td class="py-4">
                        <h5 class="font-600">{{ item.total }}</h5>
                      </td>
                      <td class="py-4">
                        <h5 class="font-600">{{ item.amountPayment }}</h5>
                      </td>
                    </tr>
                    </tbody>
                    <tfoot>
                    <tr>
                      <td></td>
                      <td class="py-4 text-left" colspan="2">
                        <h4 class="font-700">
                          <I18nVue t='CreditCalculator.total'/>
                          :
                        </h4>
                      </td>
                      <td class="py-4">
                        <h4 class="font-700">
                          {{ generateTableModel.tableFooter.amountPayment }}
                        </h4>
                      </td>
                      <td class="py-4">
                        <h4 class="font-700">
                          {{ generateTableModel.tableFooter.additionalPayment }}
                        </h4>
                      </td>
                      <!--												<template v-if='generateTableModel.tableHeader.gracePeriod.month'>-->
                      <!--													<td></td>-->
                      <!--												</template>-->
                      <td class="py-4">
                        <h4 class="font-700">
                          {{ generateTableModel.tableFooter.total }}
                        </h4>
                      </td>
                      <td></td>
                    </tr>
                    </tfoot>
                  </template>
                </v-simple-table>
              </div>
            </div>
          </div>
        </div>
      </template>
    </transition>
    <!-- END CREDIT GENERATED TABLE -->
  </div>
</template>

<script>
import AppBreadCrumb from "@/components/AppBreadCrumb"
import AppOnlineCreditCalc from "@/components/AppOnlineCreditCalc"
import TermsAndConditions from "./components/TermsAndConditions"
import Documents from "./components/Documents"
import PaymentMethods from "./components/PaymentMethods"

import {Share2Icon, PrinterIcon, FacebookIcon, TwitterIcon, ChevronRightIcon, XIcon} from "vue-feather-icons"
import {appTab} from "@/utils/frontend"
import I18nVue from "@/I18nVue"

export default {
  name: "index",
  components: {
    I18nVue,
    AppBreadCrumb,
    AppOnlineCreditCalc,
    TermsAndConditions,
    Documents,
    PaymentMethods,
    Share2Icon,
    PrinterIcon,
    FacebookIcon,
    TwitterIcon,
    ChevronRightIcon,
    XIcon
  },
  data() {
    return {
      creditDetailModel: {
        image: {
          url: {}
        }
      },
      IDList: null,
      property: null,
      documents: null,
      generateTableModel: {
        isTableGenerated: false,
        creditTypeText: null,
        tableHeader: {},
        tableContent: []
      },
      carsList: [],
      carCurrentSelected: {},
      carColorSelected: {},
      carModificationModel: {},
      referenceList: [],
      carPerMonthPay: [
        // Malibu
        "7 375 987,56",
        // Cobalt
        "2 371 924,47",
        // Equinox
        "8 506 013,51",
        // Spark
        "1 942 370,79",
        // Gentra
        "2 837 926,62",
        // Damas
        "1 551 279,08",
        // Nexia-3
        "2 240 019,62",
        // Tracker
        "3 900 400,06",
        // Tahoe
        "",
        // Trailblazer
        "8 177 278,69",
        // Travers
        ""
      ]
    }

  },
  mounted() {
    this.getReferenceList()
    this.IDList = this.$route.params.id

    const $tabHeaderItems = document.querySelectorAll("[data-item=\"header\"]")
    const $tabContentItems = document.querySelectorAll("[data-item=\"content\"]")

    appTab($tabHeaderItems, $tabContentItems)

    this.$http.get(`/1/credit/${this.$route.params.id}/`).then(({data}) => {
      this.creditDetailModel = data
    })

    this.$http.get(`/1/credit/${this.$route.params.id}/property/`).then(({data}) => {
      this.property = data.results
    })

    this.$http.get(`/1/credit/${this.$route.params.id}/documents/`).then(({data}) => {
      this.documents = data.results
    })

    if (this.$route.params.id == "33") {
      this.carLoanList()

      setTimeout(() => {
        let prev = document.querySelector(".VueCarousel-navigation-prev")
        let next = document.querySelector(".VueCarousel-navigation-next")

        prev.innerHTML = `
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-left"><polyline points="15 18 9 12 15 6"/></svg>
				`

        next.innerHTML = `
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"/></svg>
				`
      }, 1000)
    }
  },
  methods: {
    /*
    *
    * */
    generateTable(arg) {
      this.generateTableModel.isTableGenerated = arg.isTableGenerated
      this.generateTableModel.tableHeader = arg.tableHeader
      this.generateTableModel.tableContent = arg.tableContent
      this.generateTableModel.tableFooter = arg.tableFooter
      this.creditTypeText = arg.creditTypeText
    },

    /*
    *
    * */
    carLoanList() {
      this.$http.get("/car_models/")
          .then(({data}) => {
            this.carsList = data

            this.carsList = this.carsList.map((item, index) => {
              return {
                ...item,
                payPerMonth: this.carPerMonthPay[index]
              }
            })

            this.carCurrentSelected = this.carsList[2]
            this.carModificationModel = this.carCurrentSelected.modifications[0]

            // if(this.carCurrentSelected.colors.length > 0) {
            // 	this.carColorSelected = this.carCurrentSelected.colors[0]
            // }
          })
    },

    /*
    *
    * */
    carSelected(car) {
      this.carCurrentSelected = car
      this.carModificationModel = car.modifications[0]

      // Reset
      this.carColorSelected = {}

      // if(car.colors.length > 0) {
      // 	this.carColorSelected = car.colors[0]
      // }
    },

    /*
    *
    * */
    colorSelected(color) {
      this.carColorSelected = color

      this.carCurrentSelected = {
        ...this.carCurrentSelected,
        photo_sha: color.photo_sha
      }
    },

    /*
    *
    * */
    modificationSelected(modification) {
      this.carModificationModel = modification
    },
    /*
    *
    * */
    getReferenceList() {
      if (this.$route.params.id) {
        this.$store.state.CREATED_CREDIT_ID = this.$route.params.id
      }

      this.$http.get(`/1/credit/${this.$store.state.CREATED_CREDIT_ID}/reference/`)
          .then(({data}) => {

            this.referenceList = data.results

          })
    }
  }
}
</script>

<style>
.credit-meta-items {
  flex-grow: 0 !important;
}
</style>
