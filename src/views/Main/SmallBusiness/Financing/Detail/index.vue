<template>
  <div class="pre-exporting-view">
    <v-container>
      <div class="detail-view-content">
        <v-row>
          <v-col md="6">
            <v-responsive :aspect-ratio="4 / 3">
              <img
                  :src="getOneModel.image && $http.defaults.baseURL + getOneModel.image.url"
                  alt="Credit image"
                  class="p-absolute img-contain"
              />
            </v-responsive>
          </v-col>

          <v-col md="6">
            <div class="pl-lg-16">
              <p class="text-lg-right">
                <I18nVue t="updated" />
                {{ getOneModel.modified_date && getOneModel.modified_date | filterDate }}
              </p>

              <h1 class="font-700 text-extra-large-4 dark-text">
                <I18nVue
                    :uz="getOneModel.title_uz"
                    :ru="getOneModel.title_ru"
                    :en="getOneModel.title_en"
                />
              </h1>

              <v-divider class="my-8" />

              <template v-if="this.$i18n.locale === 'uz'">
                <span v-html="getOneModel.description_uz"></span>
              </template>

              <template v-if="this.$i18n.locale === 'ru'">
                <span v-html="getOneModel.description_ru"></span>
              </template>

              <template v-if="this.$i18n.locale === 'en'">
                <span v-html="getOneModel.description_en"></span>
              </template>

              <div class="credit-meta d-flex flex-wrap mb-13 w-100 mt-10">
                <template v-for="item in getOneReferenceList">
                  <div class="credit-meta-items d-flex align-center dark-text">
                    <h1 class="text-extra-large-4 mr-3 line-base font-300">
                      <span v-if="$i18n.locale === 'uz'" v-html="item.text_left_uz"></span>
                      <span v-if="$i18n.locale === 'ru'" v-html="item.text_left_ru"></span>
                      <span v-if="$i18n.locale === 'en'" v-html="item.text_left_en"></span>
                    </h1>

                    <div class="d-flex flex-column h-100">
                      <h5 class="font-600">
                        <I18nVue :uz="item.text_right_top_uz" :ru="item.text_right_top_ru"
                                 :en="item.text_right_top_en" />
                      </h5>
                      <I18nVue :uz="item.text_bottom_uz" :ru="item.text_bottom_ru"
                               :en="item.text_bottom_en" />
                    </div>
                  </div>
                </template>
              </div>
            </div>
          </v-col>
        </v-row>
      </div>
    </v-container>

    <div class="view-toolbar mt-16">
      <v-container class="py-0">
        <div class="app-tab-header d-flex">
          <div class="tab-header-items text-center mr-7 active" data-item="header">
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
              <I18nVue t="Credit_Detail.tab5" />
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
              <I18nVue t="Credit_Detail.tab2" />
            </a>
          </div>
          <!--					<div class="tab-header-items text-center mr-7" data-item="header">-->
          <!--						<a-->
          <!--							class="-->
          <!--                                navigation-link navigation-link__hover-->
          <!--                                p-relative-->
          <!--                                text&#45;&#45;h4-->
          <!--                                py-6-->
          <!--                                font-600-->
          <!--                                d-inline-block-->
          <!--                            "-->
          <!--						>-->
          <!--							<I18nVue t="Credit_Detail.tab3" />-->
          <!--						</a>-->
          <!--					</div>-->
        </div>
      </v-container>
    </div>

    <div class="view-toolbar-content py-16 overflow-hidden">
      <v-container class="py-0">
        <div class="app-tab-content p-relative">
          <div class="tab-content-items active" data-item="content">
            <v-row align="center">
              <v-col md="5">
                <template v-if="this.$i18n.locale === 'uz'">
                  <span v-html="getOneModel.description_uz"></span>
                </template>

                <template v-if="this.$i18n.locale === 'ru'">
                  <span v-html="getOneModel.description_ru"></span>
                </template>

                <template v-if="this.$i18n.locale === 'en'">
                  <span v-html="getOneModel.description_en"></span>
                </template>
              </v-col>

              <v-spacer />

              <v-col md="6">
                <v-responsive :aspect-ratio="3 / 2">
                  <img
                      :src="getOneModel.image && $http.defaults.baseURL + getOneModel.image.url"
                      alt="Credit image"
                      class="p-absolute img-contain"
                  />
                </v-responsive>
              </v-col>
            </v-row>
          </div>

          <div class="tab-content-items" data-item="content">
            <div class="terms-view">
              <v-row>
                <v-col md="6">
                  <h2 class="font-600 dark-text mb-8">
                    <I18nVue v-if="$route.params.id == 4" t="Nav.SmallBusiness.Financing.PreExport.TermsAndConditions.title2"/>
                    <I18nVue v-if="$route.params.id == 3" t="Nav.SmallBusiness.Financing.PreExport.TermsAndConditions.title3"/>
                  </h2>

                  <div class="credit-widget pa-4 pa-sm-7 rounded-lg overflow-hidden">
                    <div class="app-ul">
                      <template v-if="this.$i18n.locale === 'uz'">
                        <span v-html="getOneModel.condition_uz"></span>
                      </template>

                      <template v-if="this.$i18n.locale === 'ru'">
                        <span v-html="getOneModel.condition_ru"></span>
                      </template>

                      <template v-if="this.$i18n.locale === 'en'">
                        <span v-html="getOneModel.condition_en"></span>
                      </template>
                    </div>
                  </div>
                </v-col>
              </v-row>
            </div>
          </div>

          <!--					<div class="tab-content-items" data-item="content">-->
          <!--						<div class="documents-view">-->
          <!--							<v-row>-->
          <!--								<v-col md="6">-->
          <!--									<h1 class="font-600 dark-text mb-8">-->
          <!--										<I18nVue t="Cards.detail.required_documents" />-->
          <!--									</h1>-->

          <!--									<div-->
          <!--										class="app-slide-card pa-6 mb-6 rounded-lg overflow-hidden p-relative"-->
          <!--										style="min-height: auto"-->
          <!--									>-->
          <!--										<div class="d-flex align-center">-->
          <!--											<div class="mr-5 p-relative">-->
          <!--												<v-avatar color="#fff" size="75">-->
          <!--													<svg id="icon-file" viewBox="0 0 64 64" class="size-lg">-->
          <!--														<path-->
          <!--															d="M53.98 9.143h-3.97c-.082 0-.155.028-.232.047V5.023C49.778 2.253 47.473 0 44.64 0H10.217C7.384 0 5.08 2.253 5.08 5.023v46.843c0 2.77 2.305 5.023 5.138 5.023h6.037v2.268c0 2.67 2.216 4.843 4.941 4.843H53.98c2.725 0 4.942-2.173 4.942-4.843v-45.17c0-2.671-2.217-4.844-4.942-4.844zM7.11 51.866V5.023c0-1.649 1.394-2.991 3.106-2.991H44.64c1.712 0 3.106 1.342 3.106 2.99v46.844c0 1.649-1.394 2.991-3.106 2.991H10.217c-1.712 0-3.106-1.342-3.106-2.99zm49.778 7.29c0 1.551-1.306 2.812-2.91 2.812H21.195c-1.604 0-2.91-1.26-2.91-2.811v-2.268H44.64c2.833 0 5.138-2.253 5.138-5.023V11.128c.077.018.15.047.233.047h3.968c1.604 0 2.91 1.26 2.91 2.811v45.17z"-->
          <!--														/>-->
          <!--														<path-->
          <!--															d="M38.603 13.206H16.254a1.015 1.015 0 1 0 0 2.032h22.35a1.015 1.015 0 1 0 0-2.032zM38.603 21.333H16.254a1.015 1.015 0 1 0 0 2.032h22.35a1.015 1.015 0 1 0 0-2.032zM38.603 29.46H16.254a1.015 1.015 0 1 0 0 2.032h22.35a1.015 1.015 0 1 0 0-2.032zM28.444 37.587h-12.19a1.015 1.015 0 1 0 0 2.032h12.19a1.015 1.015 0 1 0 0-2.032z"-->
          <!--														/>-->
          <!--													</svg>-->
          <!--												</v-avatar>-->
          <!--											</div>-->

          <!--											<div>-->
          <!--												<h3 class="dark-text font-600">-->
          <!--													<I18nVue t="Nav.SmallBusiness.Financing.PreExport.Documents.text1"/>-->
          <!--												</h3>-->
          <!--												<I18nVue t="Nav.SmallBusiness.Financing.PreExport.Documents.text1sub"/>-->
          <!--											</div>-->
          <!--										</div>-->
          <!--									</div>-->

          <!--									<div-->
          <!--										class="app-slide-card pa-6 mb-6 rounded-lg overflow-hidden p-relative"-->
          <!--										style="min-height: auto"-->
          <!--									>-->
          <!--										<div class="d-flex align-center">-->
          <!--											<div class="mr-5 p-relative">-->
          <!--												<v-avatar color="#fff" size="75">-->
          <!--													<svg id="icon-file" viewBox="0 0 64 64" class="size-lg">-->
          <!--														<path-->
          <!--															d="M53.98 9.143h-3.97c-.082 0-.155.028-.232.047V5.023C49.778 2.253 47.473 0 44.64 0H10.217C7.384 0 5.08 2.253 5.08 5.023v46.843c0 2.77 2.305 5.023 5.138 5.023h6.037v2.268c0 2.67 2.216 4.843 4.941 4.843H53.98c2.725 0 4.942-2.173 4.942-4.843v-45.17c0-2.671-2.217-4.844-4.942-4.844zM7.11 51.866V5.023c0-1.649 1.394-2.991 3.106-2.991H44.64c1.712 0 3.106 1.342 3.106 2.99v46.844c0 1.649-1.394 2.991-3.106 2.991H10.217c-1.712 0-3.106-1.342-3.106-2.99zm49.778 7.29c0 1.551-1.306 2.812-2.91 2.812H21.195c-1.604 0-2.91-1.26-2.91-2.811v-2.268H44.64c2.833 0 5.138-2.253 5.138-5.023V11.128c.077.018.15.047.233.047h3.968c1.604 0 2.91 1.26 2.91 2.811v45.17z"-->
          <!--														/>-->
          <!--														<path-->
          <!--															d="M38.603 13.206H16.254a1.015 1.015 0 1 0 0 2.032h22.35a1.015 1.015 0 1 0 0-2.032zM38.603 21.333H16.254a1.015 1.015 0 1 0 0 2.032h22.35a1.015 1.015 0 1 0 0-2.032zM38.603 29.46H16.254a1.015 1.015 0 1 0 0 2.032h22.35a1.015 1.015 0 1 0 0-2.032zM28.444 37.587h-12.19a1.015 1.015 0 1 0 0 2.032h12.19a1.015 1.015 0 1 0 0-2.032z"-->
          <!--														/>-->
          <!--													</svg>-->
          <!--												</v-avatar>-->
          <!--											</div>-->

          <!--											<div>-->
          <!--												<h3 class="dark-text font-600">-->
          <!--													<I18nVue t="Nav.SmallBusiness.Financing.PreExport.Documents.text2"/>-->
          <!--												</h3>-->
          <!--												<I18nVue t="Nav.SmallBusiness.Financing.PreExport.Documents.text2sub"/>-->
          <!--											</div>-->
          <!--										</div>-->
          <!--									</div>-->

          <!--									<div-->
          <!--										class="app-slide-card pa-6 mb-6 rounded-lg overflow-hidden p-relative"-->
          <!--										style="min-height: auto"-->
          <!--									>-->
          <!--										<div class="d-flex align-center">-->
          <!--											<div class="mr-5 p-relative">-->
          <!--												<v-avatar color="#fff" size="75">-->
          <!--													<svg id="icon-file" viewBox="0 0 64 64" class="size-lg">-->
          <!--														<path-->
          <!--															d="M53.98 9.143h-3.97c-.082 0-.155.028-.232.047V5.023C49.778 2.253 47.473 0 44.64 0H10.217C7.384 0 5.08 2.253 5.08 5.023v46.843c0 2.77 2.305 5.023 5.138 5.023h6.037v2.268c0 2.67 2.216 4.843 4.941 4.843H53.98c2.725 0 4.942-2.173 4.942-4.843v-45.17c0-2.671-2.217-4.844-4.942-4.844zM7.11 51.866V5.023c0-1.649 1.394-2.991 3.106-2.991H44.64c1.712 0 3.106 1.342 3.106 2.99v46.844c0 1.649-1.394 2.991-3.106 2.991H10.217c-1.712 0-3.106-1.342-3.106-2.99zm49.778 7.29c0 1.551-1.306 2.812-2.91 2.812H21.195c-1.604 0-2.91-1.26-2.91-2.811v-2.268H44.64c2.833 0 5.138-2.253 5.138-5.023V11.128c.077.018.15.047.233.047h3.968c1.604 0 2.91 1.26 2.91 2.811v45.17z"-->
          <!--														/>-->
          <!--														<path-->
          <!--															d="M38.603 13.206H16.254a1.015 1.015 0 1 0 0 2.032h22.35a1.015 1.015 0 1 0 0-2.032zM38.603 21.333H16.254a1.015 1.015 0 1 0 0 2.032h22.35a1.015 1.015 0 1 0 0-2.032zM38.603 29.46H16.254a1.015 1.015 0 1 0 0 2.032h22.35a1.015 1.015 0 1 0 0-2.032zM28.444 37.587h-12.19a1.015 1.015 0 1 0 0 2.032h12.19a1.015 1.015 0 1 0 0-2.032z"-->
          <!--														/>-->
          <!--													</svg>-->
          <!--												</v-avatar>-->
          <!--											</div>-->

          <!--											<div>-->
          <!--												<h3 class="dark-text font-600">-->
          <!--													<I18nVue t="Nav.SmallBusiness.Financing.PreExport.Documents.text3"/>-->
          <!--												</h3>-->
          <!--												<I18nVue t="Nav.SmallBusiness.Financing.PreExport.Documents.text3sub"/>-->
          <!--											</div>-->
          <!--										</div>-->
          <!--									</div>-->

          <!--									<div-->
          <!--										class="app-slide-card pa-6 mb-6 rounded-lg overflow-hidden p-relative"-->
          <!--										style="min-height: auto"-->
          <!--									>-->
          <!--										<div class="d-flex align-center">-->
          <!--											<div class="mr-5 p-relative">-->
          <!--												<v-avatar color="#fff" size="75">-->
          <!--													<svg id="icon-file" viewBox="0 0 64 64" class="size-lg">-->
          <!--														<path-->
          <!--															d="M53.98 9.143h-3.97c-.082 0-.155.028-.232.047V5.023C49.778 2.253 47.473 0 44.64 0H10.217C7.384 0 5.08 2.253 5.08 5.023v46.843c0 2.77 2.305 5.023 5.138 5.023h6.037v2.268c0 2.67 2.216 4.843 4.941 4.843H53.98c2.725 0 4.942-2.173 4.942-4.843v-45.17c0-2.671-2.217-4.844-4.942-4.844zM7.11 51.866V5.023c0-1.649 1.394-2.991 3.106-2.991H44.64c1.712 0 3.106 1.342 3.106 2.99v46.844c0 1.649-1.394 2.991-3.106 2.991H10.217c-1.712 0-3.106-1.342-3.106-2.99zm49.778 7.29c0 1.551-1.306 2.812-2.91 2.812H21.195c-1.604 0-2.91-1.26-2.91-2.811v-2.268H44.64c2.833 0 5.138-2.253 5.138-5.023V11.128c.077.018.15.047.233.047h3.968c1.604 0 2.91 1.26 2.91 2.811v45.17z"-->
          <!--														/>-->
          <!--														<path-->
          <!--															d="M38.603 13.206H16.254a1.015 1.015 0 1 0 0 2.032h22.35a1.015 1.015 0 1 0 0-2.032zM38.603 21.333H16.254a1.015 1.015 0 1 0 0 2.032h22.35a1.015 1.015 0 1 0 0-2.032zM38.603 29.46H16.254a1.015 1.015 0 1 0 0 2.032h22.35a1.015 1.015 0 1 0 0-2.032zM28.444 37.587h-12.19a1.015 1.015 0 1 0 0 2.032h12.19a1.015 1.015 0 1 0 0-2.032z"-->
          <!--														/>-->
          <!--													</svg>-->
          <!--												</v-avatar>-->
          <!--											</div>-->

          <!--											<div>-->
          <!--												<h3 class="dark-text font-600">-->
          <!--													<I18nVue t="Nav.SmallBusiness.Financing.PreExport.Documents.text4"/>-->
          <!--												</h3>-->
          <!--												<I18nVue t="Nav.SmallBusiness.Financing.PreExport.Documents.text4sub"/>-->
          <!--											</div>-->
          <!--										</div>-->
          <!--									</div>-->

          <!--									<div-->
          <!--										class="app-slide-card pa-6 mb-6 rounded-lg overflow-hidden p-relative"-->
          <!--										style="min-height: auto"-->
          <!--									>-->
          <!--										<div class="d-flex align-center">-->
          <!--											<div class="mr-5 p-relative">-->
          <!--												<v-avatar color="#fff" size="75">-->
          <!--													<svg id="icon-file" viewBox="0 0 64 64" class="size-lg">-->
          <!--														<path-->
          <!--															d="M53.98 9.143h-3.97c-.082 0-.155.028-.232.047V5.023C49.778 2.253 47.473 0 44.64 0H10.217C7.384 0 5.08 2.253 5.08 5.023v46.843c0 2.77 2.305 5.023 5.138 5.023h6.037v2.268c0 2.67 2.216 4.843 4.941 4.843H53.98c2.725 0 4.942-2.173 4.942-4.843v-45.17c0-2.671-2.217-4.844-4.942-4.844zM7.11 51.866V5.023c0-1.649 1.394-2.991 3.106-2.991H44.64c1.712 0 3.106 1.342 3.106 2.99v46.844c0 1.649-1.394 2.991-3.106 2.991H10.217c-1.712 0-3.106-1.342-3.106-2.99zm49.778 7.29c0 1.551-1.306 2.812-2.91 2.812H21.195c-1.604 0-2.91-1.26-2.91-2.811v-2.268H44.64c2.833 0 5.138-2.253 5.138-5.023V11.128c.077.018.15.047.233.047h3.968c1.604 0 2.91 1.26 2.91 2.811v45.17z"-->
          <!--														/>-->
          <!--														<path-->
          <!--															d="M38.603 13.206H16.254a1.015 1.015 0 1 0 0 2.032h22.35a1.015 1.015 0 1 0 0-2.032zM38.603 21.333H16.254a1.015 1.015 0 1 0 0 2.032h22.35a1.015 1.015 0 1 0 0-2.032zM38.603 29.46H16.254a1.015 1.015 0 1 0 0 2.032h22.35a1.015 1.015 0 1 0 0-2.032zM28.444 37.587h-12.19a1.015 1.015 0 1 0 0 2.032h12.19a1.015 1.015 0 1 0 0-2.032z"-->
          <!--														/>-->
          <!--													</svg>-->
          <!--												</v-avatar>-->
          <!--											</div>-->

          <!--											<div>-->
          <!--												<h3 class="dark-text font-600">-->
          <!--													<I18nVue t="Nav.SmallBusiness.Financing.PreExport.Documents.text5"/>-->
          <!--												</h3>-->
          <!--												<I18nVue t="Nav.SmallBusiness.Financing.PreExport.Documents.text5sub"/>-->
          <!--											</div>-->
          <!--										</div>-->
          <!--									</div>-->
          <!--								</v-col>-->
          <!--							</v-row>-->
          <!--						</div>-->
          <!--					</div>-->
        </div>
      </v-container>
    </div>

    <section class="py-8">
      <v-container>
        <h1 class="font-600 dark-text">
	        <template v-if="getOneModel.id == 2">
		        {{ $t('guarantee') }}
	        </template>

	        <template v-if="getOneModel.id == 3">
		        {{ $t('letter_of_credit') }}
	        </template>

	        <template v-if="getOneModel.id == 4">
		        {{ $t('factoring') }}
	        </template>
<!--          <I18nVue t="Credit_Detail.step_text" />-->
        </h1>
        <I18nVue t="Credit_Detail.step_body" class="text--h3 grey--text d-block mt-2 mb-10" />

        <v-row>
          <v-col lg="3" sm="6">
            <div class="app-card-simple text-center transition-all py-10 px-7 rounded-lg h-100 mx-2">
              <h1 class="font-300 text-extra-large primary-text">1</h1>

              <v-divider style="border-color: rgba(var(--border-color), 1)" class="my-10" />

              <h4 class="dark-text">
                <I18nVue t="Credit_Detail.step1" />
              </h4>
            </div>
          </v-col>

          <v-col lg="3" sm="6">
            <div class="app-card-simple text-center transition-all py-10 px-7 rounded-lg h-100 mx-2">
              <h1 class="font-300 text-extra-large primary-text">2</h1>

              <v-divider style="border-color: rgba(var(--border-color), 1)" class="my-10" />

              <h4 class="dark-text">
                <I18nVue t="Credit_Detail.step2" />
              </h4>
            </div>
          </v-col>

          <v-col lg="3" sm="6">
            <div class="app-card-simple text-center transition-all py-10 px-7 rounded-lg h-100 mx-2">
              <h1 class="font-300 text-extra-large primary-text">3</h1>

              <v-divider style="border-color: rgba(var(--border-color), 1)" class="my-10" />

              <h4 class="dark-text">
                <I18nVue t="Credit_Detail.step3" />
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
	              <template v-if="getOneModel.id == 2">
		              {{ $t('application_warranty') }}
	              </template>

	              <template v-if="getOneModel.id == 3">
		              {{ $t('application_letter_of_credit') }}
	              </template>

	              <template v-if="getOneModel.id == 4">
		              {{ $t('application_factoring') }}
	              </template>
              </h2>

              <h5 class="font-300 my-4">
                <I18nVue t="Credit_Detail.step5" />
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
              >
                <I18nVue t="application_form" class="primary-text font-700" />
              </v-btn>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </div>
</template>

<script>
import { appTab } from "@/utils/frontend";
import I18nVue from "@/I18nVue";
export default {
  name: "index",
  components: {
    I18nVue
  },
  data() {
    return {
      getOneModel: {},
      getOneReferenceList: []
    }
  },
  created() {

  },
  mounted() {
    const $tabHeaderItems = document.querySelectorAll("[data-item=\"header\"]");
    const $tabContentItems = document.querySelectorAll("[data-item=\"content\"]");
    if(this.$route.params.id) {
      this.getOne()
      this.getReference()
    }

    appTab($tabHeaderItems, $tabContentItems);
  },
  methods: {
    getOne() {
      this.$http.get(`/1/finance/retail/${this.$route.params.id}/`)
          .then(({ data }) => {
            this.getOneModel = data
          })
    },

    /*
    *
    * */
    getReference() {
      this.$http.get(`/1/finance/retail/${this.$route.params.id}/reference/`)
          .then(({ data }) => {
            this.getOneReferenceList = data.results
          })
    }
  }
}
</script>
