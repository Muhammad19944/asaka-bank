<template>
    <div class="mobile-bank">
        <v-container class="mb-16">
            <v-row>
	            <v-col lg="7" class="order-lg-1 mb-0">
		            <div class="credit-widget video-slider-wrap d-flex justify-center py-8">
			            <div class="video-slider-cover">
				            <carousel
					            :loop="true"
					            @navigation-click="pauseVideo"
					            @change="pauseVideo"
					            :navigationEnabled="true"
					            :perPageCustom="[[320, 1],[578, 1],[1300, 1],[1600, 1]]"
				            >
								<slide>
									<div class="slide-wrap-video">
										<div class="slide-wrap-video d-flex justify-center mt-4">
											<template v-if="$i18n.locale === 'uz'">
												<video src="https://back.asakabank.uz/media/files/how-to-transfer.mp4"
												       class="d-block img-cover"
												       ref="headerVideo"
												       poster="/images/mobile-bank/how_to_transfer_uz.jpg"
												       controls
												       muted
												>
												</video>
											</template>
											<template v-else>
												<video src="https://back.asakabank.uz/media/files/how-to-transfer-funds.MP4"
												       class="d-block img-cover"
												       ref="headerVideo"
												       poster="/images/mobile-bank/how_to_transfer_ru.jpg"
												       controls
												       muted
												>
												</video>
											</template>
										</div>
									</div>
								</slide>
					            <slide>
						            <div class="slide-wrap-video">
							            <v-divider style="border-color: rgb(var(--border-color), 1)"></v-divider>
							            <div class="slide-wrap-video d-flex justify-center mt-4">
								            <template v-if="$i18n.locale === 'uz'">
									            <video src="https://back.asakabank.uz/media/files/how-to-make-payments.mp4"
									                   class="d-block img-cover"
									                   ref="headerVideo"
									                   poster="/images/mobile-bank/how_to_make_payments_uz.jpg"
									                   controls
									                   muted
									            >
									            </video>
								            </template>
								            <template v-else>
									            <video src="https://back.asakabank.uz/media/files/how-to-make-payments.MP4"
									                   class="d-block img-cover"
									                   ref="headerVideo"
									                   poster="/images/mobile-bank/how_to_make_payments_ru.jpg"
									                   controls
									                   muted
									            >
									            </video>
								            </template>
							            </div>
						            </div>
					            </slide>
					            <slide>
						            <div class="slide-wrap-video">
							            <v-divider style="border-color: rgb(var(--border-color), 1)"></v-divider>
							            <div class="slide-wrap-video d-flex justify-center mt-4">
								            <template v-if="$i18n.locale === 'uz'">
									            <video src="https://back.asakabank.uz/media/files/how-to-get-credit.mp4"
									                   class="d-block img-cover"
									                   ref="headerVideo"
									                   poster="/images/mobile-bank/how_to_get_credit_uz.jpg"
									                   controls
									                   muted
									            >
									            </video>
								            </template>
								            <template v-else>
									            <video src="https://back.asakabank.uz/media/files/how-to-get-credit.MP4"
									                   class="d-block img-cover"
									                   ref="headerVideo"
									                   poster="/images/mobile-bank/how_to_get_credit_ru.jpg"
									                   controls
									                   muted
									            >
									            </video>
								            </template>
							            </div>
						            </div>
					            </slide>
					            <slide>
						            <div class="slide-wrap-video">
							            <v-divider style="border-color: rgb(var(--border-color), 1)"></v-divider>
							            <div class="slide-wrap-video d-flex justify-center mt-4">
								            <template v-if="$i18n.locale === 'uz'">
									            <video src="https://back.asakabank.uz/media/files/how-to-open-deposit-uz.mp4"
									                   class="d-block img-cover"
									                   ref="headerVideo"
									                   poster="/images/mobile-bank/how_to_make_deposit_uz.jpg"
									                   controls
									                   muted
									            >
									            </video>
								            </template>
								            <template v-else>
									            <video src="https://back.asakabank.uz/media/files/how-to-open-deposit.MP4"
									                   class="d-block img-cover"
									                   ref="headerVideo"
									                   poster="/images/mobile-bank/how_to_make_deposit_ru.jpg"
									                   controls
									                   muted
									            >
									            </video>
								            </template>
							            </div>
						            </div>
					            </slide>
					            <slide>
						            <div class="slide-wrap-video">
							            <v-divider style="border-color: rgb(var(--border-color), 1)"></v-divider>
							            <div class="slide-wrap-video d-flex justify-center mt-4">
								            <video src="https://back.asakabank.uz/media/files/how-to-pay_u4yHK3G.MP4"
								                   class="d-block img-cover"
								                   ref="headerVideo"
								                   :poster="$i18n.locale === 'uz' ? '/images/mobile-bank/how_to_pay_uz.jpg' : '/images/mobile-bank/how_to_pay_ru.jpg'"
								                   controls
								                   muted
								            >
								            </video>
							            </div>
						            </div>
					            </slide>
				            </carousel>
			            </div>
		            </div>
	            </v-col>

	            <v-col lg="5">
		            <div class="credit-widget pa-7 rounded-lg overflow-hidden mb-8">
			            <h3 class="font-600 dark-text mb-2">
				            <I18nVue t='Services.Mobile_banking.finance'/>
			            </h3>

			            <h4>
				            <I18nVue t='Services.Mobile_banking.finance_sub'/>
			            </h4>
		            </div>

		            <div class="credit-widget pa-7 rounded-lg overflow-hidden mb-8">
			            <h3 class="font-600 dark-text mb-2">
				            <I18nVue t='Services.Mobile_banking.payment_for_services'/>
			            </h3>

			            <h4>
				            <I18nVue t='Services.Mobile_banking.payment_for_services_sub'/>
			            </h4>
		            </div>

		            <div class="credit-widget pa-7 rounded-lg overflow-hidden mb-8">
			            <h3 class="font-600 dark-text mb-2">
				            <I18nVue t='Services.Mobile_banking.important'/>
			            </h3>

			            <h4>
				            <I18nVue t='Services.Mobile_banking.important_sub'/>
			            </h4>
		            </div>
	            </v-col>

	            <v-spacer />
            </v-row>
        </v-container>

        <section class="section section-grey">
            <v-container>
                <h1 class="font-600 text-extra-large-4 dark-text mb-2">
                    <I18nVue t='Services.Mobile_banking.install'/>
                </h1>

                <h4 class="dark-grey mb-10">
                    <I18nVue t='Services.Mobile_banking.install_sub'/>
                </h4>

                <v-row>
                    <v-col md="6">
                        <div class="credit-widget pa-md-8 pa-5 rounded-lg overflow-hidden mb-8">
                            <h3 class="font-600 dark-text mb-7">
                                <I18nVue t='Services.Mobile_banking.IOS'/>
                            </h3>

                            <v-btn
                                href="https://apps.apple.com/uz/app/asakabank/id1574165416"
                                color="danger"
                                target="_blank"
                                rel="noopener noreferrer"
                                depressed
                                rounded
                                min-width="155"
                                min-height="50"
                                class="text-transform-reset"
                            >
                                <div class="d-flex align-center w-100">
                                    <div class="size-md">
                                        <svg id="icon-app-store" viewBox="0 0 305 305" style="fill: #fff">
                                            <path
                                                id="XMLID_229_"
                                                d="M40.738,112.119c-25.785,44.745-9.393,112.648,19.121,153.82C74.092,286.523,88.502,305,108.239,305 c0.372,0,0.745-0.007,1.127-0.022c9.273-0.37,15.974-3.225,22.453-5.984c7.274-3.1,14.797-6.305,26.597-6.305 c11.226,0,18.39,3.101,25.318,6.099c6.828,2.954,13.861,6.01,24.253,5.815c22.232-0.414,35.882-20.352,47.925-37.941 c12.567-18.365,18.871-36.196,20.998-43.01l0.086-0.271c0.405-1.211-0.167-2.533-1.328-3.066c-0.032-0.015-0.15-0.064-0.183-0.078 c-3.915-1.601-38.257-16.836-38.618-58.36c-0.335-33.736,25.763-51.601,30.997-54.839l0.244-0.152 c0.567-0.365,0.962-0.944,1.096-1.606c0.134-0.661-0.006-1.349-0.386-1.905c-18.014-26.362-45.624-30.335-56.74-30.813 c-1.613-0.161-3.278-0.242-4.95-0.242c-13.056,0-25.563,4.931-35.611,8.893c-6.936,2.735-12.927,5.097-17.059,5.097 c-4.643,0-10.668-2.391-17.645-5.159c-9.33-3.703-19.905-7.899-31.1-7.899c-0.267,0-0.53,0.003-0.789,0.008 C78.894,73.643,54.298,88.535,40.738,112.119z"
                                            ></path>
                                            <path
                                                id="XMLID_230_"
                                                d="M212.101,0.002c-15.763,0.642-34.672,10.345-45.974,23.583c-9.605,11.127-18.988,29.679-16.516,48.379 c0.155,1.17,1.107,2.073,2.284,2.164c1.064,0.083,2.15,0.125,3.232,0.126c15.413,0,32.04-8.527,43.395-22.257 c11.951-14.498,17.994-33.104,16.166-49.77C214.544,0.921,213.395-0.049,212.101,0.002z"
                                            ></path>
                                        </svg>
                                    </div>

                                    <div class="text-white ml-2">
                                        <span class="font-600 text-13"><I18nVue t='Services.Mobile_banking.download'/></span>
                                        <h6 class="font-700 line-base">App Store</h6>
                                    </div>
                                </div>
                            </v-btn>
                        </div>
                    </v-col>

                    <v-col md="6">
                        <div class="credit-widget pa-md-8 pa-5 rounded-lg overflow-hidden mb-8">
                            <h3 class="font-600 dark-text mb-7">
                                <I18nVue t='Services.Mobile_banking.android'/>
                            </h3>

                            <v-btn
                                href="https://play.google.com/store/apps/details?id=uz.asakabank.myasaka"
                                color="danger"
                                target="_blank"
                                rel="noopener noreferrer"
                                depressed
                                rounded
                                min-width="155"
                                min-height="50"
                                class="text-transform-reset"
                            >
                                <div class="d-flex align-center w-100">
                                    <div class="size-md">
                                        <svg id="icon-google-play" viewBox="0 0 24 24" style="fill: #fff">
                                            <path d="m18.168 15.838-2.866-2.818-10.521 10.375z"></path>
                                            <path d="m18.168 8.167-13.387-7.557 10.521 10.375z"></path>
                                            <path
                                                d="m22.363 13.427c.858-.67.858-2.18-.057-2.85l-2.808-1.598-3.133 3.024 3.133 3.024z"
                                            ></path>
                                            <path
                                                d="m2.034 24 12.234-12.002-12.234-11.997v-.001c-.619.319-1.034.9-1.034 1.655v20.69c0 .755.415 1.336 1.034 1.655z"
                                            ></path>
                                        </svg>
                                    </div>

                                    <div class="text-white ml-2">
                                        <span class="font-600 text-13">
	                                        <I18nVue t='Services.Mobile_banking.download'/>
                                        </span>
                                        <h6 class="font-700 line-base">Google Play</h6>
                                    </div>
                                </div>
                            </v-btn>
                        </div>
                    </v-col>
                </v-row>
            </v-container>
        </section>
    </div>
</template>

<script>
    import I18nVue from '@/I18nVue'
    export default {
        name: 'index',
        components: {
            I18nVue,
        },
	    mounted() {
		    setTimeout(() => {
			    let prev = document.querySelector('.VueCarousel-navigation-prev')
			    let next = document.querySelector('.VueCarousel-navigation-next')

			    prev.innerHTML = `
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-left"><polyline points="15 18 9 12 15 6"/></svg>
				`

			    next.innerHTML = `
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"/></svg>
				`
		    }, 1000)
	    },
	    methods:{
		    pauseVideo(){
			    this.$refs.headerVideo.pause()
		    }
	    }
    }
</script>

<style>
	.video-slider-wrap{
		padding: 0 64px;
	}
	.VueCarousel{
		padding: 0 5px!important;
	}
	@media (max-width: 400px) {
		.slide-wrap-video{
			overflow: hidden;
		}
		.VueCarousel-navigation-button{
			width: 35px!important;
			height: 35px!important;
		}
		.video-slider-wrap{
			padding: 0 45px;
		}
	}


</style>
