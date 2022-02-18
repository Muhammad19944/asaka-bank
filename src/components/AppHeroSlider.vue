<template>
	<div class="hero-slider">
		<div class="hero-slide-container p-relative">
			<hooper
				@slide="updateCarousel"
				:settings="hooperSettings"
				ref="carousel"
				class="hero-slider-hooper outline-transparent"
			>
				<slide>
					<div class="hero-slide-item d-flex">
						<div class="slide-item-left d-flex align-start flex-column justify-center dark-text">
							<h1 class="font-700 mb-5 text-extra-large">
								<I18nVue t='Home.Slider.Second.credit' />
							</h1>
							<h3>
								<I18nVue t='Home.Slider.Second.sub_text' />
							</h3>

							<v-divider class="my-6 my-lg-10 w-100" style="border-color: rgba(var(--border-color), 1)" />


							<!--                                    <div class='credit-meta-items d-flex align-center mr-7 pb-3'>-->
							<!--                                        <h1 class='text-extra-large-3 mr-3 line-base font-300'>200</h1>-->
							<!--                                        <div class='d-flex flex-column h-100'>-->
							<!--                                            <h5 class='font-600'>BHM gacha</h5>-->
							<!--                                            <span class='text-small d-block font-600 line-base pb-1 mt-auto main-grey'>-->
							<!--                                                foiz stavkasi-->
							<!--                                            </span>-->
							<!--                                        </div>-->
							<!--                                    </div>-->

							<template v-if='$i18n.locale === "uz"'>
								<div class='credit-meta d-flex flex-wrap flex-lg-nowrap mb-5 mb-sm-13 w-100'>
									<div class='credit-meta-items d-flex align-center pb-3'>
										<h1 class='text-extra-large-3 mr-3 line-base font-300'>30%</h1>
										<div class='d-flex flex-column h-100'>
											<h5 class='font-600'>
												Boshlang'ich
											</h5>
											<span class='text-small d-block font-600 line-base pb-1 mt-auto main-grey'>
                                             to'lov
											</span>
										</div>
									</div>

									<div class='credit-meta-items d-flex align-center pb-3'>
										<h1 class='text-extra-large-3 mr-3 line-base font-300'>21% <span class="text--h2 font-600">dan</span></h1>
										<div class='d-flex flex-column h-100'>
											<h5 class='font-600'>Foiz</h5>
											<span class='text-small d-block font-600 line-base pb-1 mt-auto main-grey'>
                                                stavkasi
                                            </span>
										</div>
									</div>
								</div>
							</template>

							<template v-if='$i18n.locale === "ru"'>
								<div class='credit-meta d-flex flex-wrap flex-lg-nowrap mb-5 mb-sm-13 w-100'>
									<div class='credit-meta-items d-flex align-center pb-3'>

										<h1 class='text-extra-large-3 mr-3 line-base font-300'><span class="text--h2 font-600">не более</span> 70%</h1>
										<div class='d-flex flex-column h-100'>
											<span class='text-small d-block font-600 line-base pb-1 mt-auto main-grey'>
                                             от стоимости
											</span>
										</div>
									</div>

									<div class='credit-meta-items d-flex align-center pb-3'>
										<h1 class='text-extra-large-3 mr-3 line-base font-300'><span class="text--h2 font-600">до</span> 5</h1>
										<div class='d-flex flex-column h-100'>
											<h5 class='font-600'>лет </h5>
											<span class='text-small d-block font-600 line-base pb-1 mt-auto main-grey'>
                                                срок кредита
                                            </span>
										</div>
									</div>
								</div>
							</template>

							<template v-if='$i18n.locale === "en"'>
								<div class='credit-meta d-flex flex-wrap flex-lg-nowrap mb-5 mb-sm-13 w-100'>
									<div class='credit-meta-items d-flex align-center pb-3'>
										<h1 class='text-extra-large-3 mr-3 line-base font-300'><span class="text--h2 font-600">from</span> 30%</h1>
										<div class='d-flex flex-column h-100'>
											<h5 class='font-600'>
												Initial
											</h5>
											<span class='text-small d-block font-600 line-base pb-1 mt-auto main-grey'>
                                             payment
											</span>
										</div>
									</div>

									<div class='credit-meta-items d-flex align-center pb-3'>
										<h1 class='text-extra-large-3 mr-3 line-base font-300'><span class="text--h2 font-600">from</span> 21%</h1>
										<div class='d-flex flex-column h-100'>
											<h5 class='font-600'>Interest </h5>
											<span class='text-small d-block font-600 line-base pb-1 mt-auto main-grey'>
                                                rate
                                            </span>
										</div>
									</div>
								</div>
							</template>

							<div>
								<v-btn
									:to="{name: 'CreditsDetail', params: {id: 33}}"
									depressed
									dark
									color="rgba(var(--main-primary), 1)"
									min-width="192"
									min-height="50"
									rounded
									class="font-700 mr-2 mt-4 mt-sm-0"
								>
									<I18nVue t='Home.Slider.more' />
								</v-btn>

								<v-btn
									:to="{name: 'Credits'}"
									outlined
									dark
									color="rgba(var(--main-primary), 1)"
									min-width="192"
									min-height="50"
									rounded
									class="font-700 mt-4 mt-sm-0"
								>
									<I18nVue t='Home.Slider.Second.other_credits' />
								</v-btn>
							</div>
						</div>
						<div class="slide-item-right p-relative">
							<div class="circle-shape">
								<img src="/images/cars.png" style="max-width: 80%" alt="Slide Image" />
							</div>
						</div>
					</div>
				</slide>

				<slide>
					<div class="hero-slide-item d-flex">
						<div class="slide-item-left d-flex align-start flex-column justify-center dark-text">
							<h1 class="font-700 mb-5 text-extra-large">MasterCard</h1>
							<h3>
								<I18nVue t='Home.Slider.Third.sub_text' />
							</h3>

							<v-divider class="my-6 my-lg-10 w-100" style="border-color: rgba(var(--border-color), 1)" />


							<template v-if='$i18n.locale === "uz"'>
								<div class='credit-meta d-flex flex-wrap flex-lg-nowrap mb-5 mb-sm-13 w-100'>
									<div class='credit-meta-items d-flex align-center pb-3'>
										<h1 class='text-extra-large-3 mr-3 line-base font-300'>0,0</h1>
										<div class='d-flex flex-column h-100'>
											<h5 class='font-600'>so'm</h5>
											<span class='text-small d-block font-600 line-base pb-1 mt-auto main-grey'>
                                                kartani bepul chiqarish
                                            </span>
										</div>
									</div>

									<div class='credit-meta-items d-flex align-center pb-3'>
										<h1 class='text-extra-large-3 mr-3 line-base font-300'>5</h1>
										<div class='d-flex flex-column h-100'>
											<h5 class='font-600'>USD</h5>
											<span class='text-small d-block font-600 line-base pb-1 mt-auto main-grey'>
                                                Minimal qoldiq
                                            </span>
										</div>
									</div>
								</div>
							</template>

							<template v-if='$i18n.locale === "ru"'>
								<div class='credit-meta d-flex flex-wrap flex-lg-nowrap mb-5 mb-sm-13 w-100'>
									<div class='credit-meta-items d-flex align-center pb-3'>
										<h1 class='text-extra-large-3 mr-3 line-base font-300'>0,0</h1>
										<div class='d-flex flex-column h-100'>
											<h5 class='font-600'>сум</h5>
											<span class='text-small d-block font-600 line-base pb-1 mt-auto main-grey'>
                                                бесплатный выпуск карты
                                            </span>
										</div>
									</div>

									<div class='credit-meta-items d-flex align-center pb-3'>
										<h1 class='text-extra-large-3 mr-3 line-base font-300'>5</h1>
										<div class='d-flex flex-column h-100'>
											<h5 class='font-600'>USD</h5>
											<span class='text-small d-block font-600 line-base pb-1 mt-auto main-grey'>
                                                Минимальный баланс
                                            </span>
										</div>
									</div>
								</div>
							</template>

							<template v-if='$i18n.locale === "en"'>
								<div class='credit-meta d-flex flex-wrap flex-lg-nowrap mb-5 mb-sm-13 w-100'>
									<div class='credit-meta-items d-flex align-center pb-3'>
										<h1 class='text-extra-large-3 mr-3 line-base font-300'>0,0</h1>
										<div class='d-flex flex-column h-100'>
											<h5 class='font-600'>sum</h5>
											<span class='text-small d-block font-600 line-base pb-1 mt-auto main-grey'>
                                                free card issue
                                            </span>
										</div>
									</div>

									<div class='credit-meta-items d-flex align-center pb-3'>
										<h1 class='text-extra-large-3 mr-3 line-base font-300'>5</h1>
										<div class='d-flex flex-column h-100'>
											<h5 class='font-600'>USD</h5>
											<span class='text-small d-block font-600 line-base pb-1 mt-auto main-grey'>
                                                Minimum balance
                                            </span>
										</div>
									</div>
								</div>
							</template>

							<div>
								<v-btn
									:to="{name: 'CardsDetail', params: {id: 16}}"
									depressed
									dark
									color="rgba(var(--main-primary), 1)"
									min-width="192"
									min-height="50"
									rounded
									class="font-700 mr-2 mt-4 mt-sm-0"
								>
									<I18nVue t='Home.Slider.more' />
								</v-btn>

								<v-btn
									:to="{name: 'Cards'}"
									outlined
									dark
									color="rgba(var(--main-primary), 1)"
									min-width="192"
									min-height="50"
									rounded
									class="font-700 mt-4 mt-sm-0"
								>
									<I18nVue t='Home.Slider.Third.other_cards' />
								</v-btn>
							</div>
						</div>
						<div class="slide-item-right p-relative">
							<div class="circle-shape">
								<img src="/images/hero-slide-img-3.png" alt="Slide Image" />
							</div>
						</div>
					</div>
				</slide>

				<slide>
					<div class="hero-slide-item d-flex">
						<div class="slide-item-left d-flex align-start flex-column justify-center dark-text">
							<h1 class="font-700 mb-5 text-extra-large">
								<I18nVue t='Home.Slider.Fourth.text' />
							</h1>
							<h3>
								<I18nVue t='Home.Slider.Fourth.sub_text' />
							</h3>

							<v-divider class="my-6 my-lg-10 w-100" style="border-color: rgba(var(--border-color), 1)" />

							<template v-if='$i18n.locale === "uz"'>
								<div class='credit-meta d-flex flex-wrap flex-lg-nowrap mb-5 mb-sm-13 w-100'>
									<div class='credit-meta-items d-flex align-center mr-7 pb-3'>
										<h1 class='text-extra-large-3 mr-3 line-base font-300'>19%</h1>
										<div class='d-flex flex-column h-100'>
                                        <span class='text-small d-block font-600 line-base pb-1 mt-auto main-grey'>
                                            gacha foiz stavkasi
                                        </span>
										</div>
									</div>

									<div class='credit-meta-items d-flex align-center mr-7 pb-3 mt-4 mt-sm-7 mt-lg-0'>
										<h1 class='text-extra-large-3 mr-3 line-base font-300'>370</h1>
										<div class='d-flex flex-column h-100'>
											<h5 class='font-600'>kungacha</h5>
											<span class='text-small d-block font-600 line-base pb-1 mt-auto main-grey'>
                                                omonat muddati
                                            </span>
										</div>
									</div>
								</div>
							</template>

							<template v-if='$i18n.locale === "ru"'>
								<div class='credit-meta d-flex flex-wrap flex-lg-nowrap mb-5 mb-sm-13 w-100'>
									<div class='credit-meta-items d-flex align-center mr-7 pb-3'>
                                        <span class='text-small d-block font-600 line-base pb-1 mt-auto main-grey'>
                                            до
                                        </span>
										<h1 class='text-extra-large-3 mr-3 line-base font-300'>19%</h1>
										<div class='d-flex flex-column h-100'>
                                        <span class='text-small d-block font-600 line-base pb-1 mt-auto main-grey'>
                                            процентная ставка
                                        </span>
										</div>
									</div>

									<div class='credit-meta-items d-flex align-center mr-7 pb-3 mt-4 mt-sm-7 mt-lg-0'>
										<h5 class='font-600 mr-2'>до</h5>
										<h1 class='text-extra-large-3 mr-3 line-base font-300'>370</h1>
										<div class='d-flex flex-column h-100'>
											<h5 class='font-600'>дней</h5>
											<span class='text-small d-block font-600 line-base pb-1 mt-auto main-grey'>
                                                срок депозита
                                            </span>
										</div>
									</div>
								</div>
							</template>

							<template v-if='$i18n.locale === "en"'>
								<div class='credit-meta d-flex flex-wrap flex-lg-nowrap mb-5 mb-sm-13 w-100'>
									<div class='credit-meta-items d-flex align-center mr-7 pb-3'>
                                        <span class='text-small d-block font-600 line-base pb-1 mt-auto main-grey'>
                                            Upto
                                        </span>
										<h1 class='text-extra-large-3 mr-3 line-base font-300'>19%</h1>
										<div class='d-flex flex-column h-100'>
                                        <span class='text-small d-block font-600 line-base pb-1 mt-auto main-grey'>
                                            interest rate
                                        </span>
										</div>
									</div>

									<div class='credit-meta-items d-flex align-center mr-7 pb-3 mt-4 mt-sm-7 mt-lg-0'>
										<h5 class='font-600'>Upto</h5>
										<h1 class='text-extra-large-3 mr-3 line-base font-300'>370</h1>
										<div class='d-flex flex-column h-100'>
											<h5 class='font-600'>days</h5>
											<span class='text-small d-block font-600 line-base pb-1 mt-auto main-grey'>
                                                deposit period
                                            </span>
										</div>
									</div>
								</div>
							</template>


							<div>
								<v-btn
									:to="{name: 'DepositsDetail', params: {id: 1}}"
									depressed
									dark
									color="rgba(var(--main-primary), 1)"
									min-width="192"
									min-height="50"
									rounded
									class="font-700 mr-2 mt-4 mt-sm-0"
								>
									<I18nVue t='Home.Slider.more' />
								</v-btn>

								<v-btn
									:to="{name: 'Deposits'}"
									outlined
									dark
									color="rgba(var(--main-primary), 1)"
									min-width="192"
									min-height="50"
									rounded
									class="font-700 mt-4 mt-sm-0"
								>
									<I18nVue t='Home.Slider.Fourth.open_deposit' />
								</v-btn>
							</div>
						</div>
						<div class="slide-item-right p-relative">
							<div class="circle-shape">
								<img src="/images/hero-slide-img-4.png" alt="Slide Image" />
							</div>
						</div>
					</div>
				</slide>
			</hooper>


			<div class="slider-dots p-absolute w-100 py-15">
				<div class="slide-aside h-100 d-flex">
					<div
						@click="setSlideTo(0)"
						:class="carouselData === 0 ? 'active' : ''"
						class="slide-aside-items d-flex align-center pointer"
					>
                        <span class="icon-circle mr-5">
                            <svg class="icon-circle-svg" viewBox="-5 -5 95 95" width="20" height="20">
                                <circle cx="41.5" cy="41.5" r="41"></circle>
                            </svg>
                        </span>
					</div>

					<div
						@click="setSlideTo(1)"
						:class="carouselData === 1 ? 'active' : ''"
						class="slide-aside-items d-flex align-center pointer"
					>
                        <span class="icon-circle mr-5">
                            <svg class="icon-circle-svg" viewBox="-5 -5 95 95" width="20" height="20">
                                <circle cx="41.5" cy="41.5" r="41"></circle>
                            </svg>
                        </span>
					</div>

					<div
						@click="setSlideTo(2)"
						:class="carouselData === 2 ? 'active' : ''"
						class="slide-aside-items d-flex align-center pointer"
					>
                        <span class="icon-circle mr-5">
                            <svg class="icon-circle-svg" viewBox="-5 -5 95 95" width="20" height="20">
                                <circle cx="41.5" cy="41.5" r="41"></circle>
                            </svg>
                        </span>
					</div>

					<!--                    <div-->
					<!--                        @click="setSlideTo(3)"-->
					<!--                        :class="carouselData === 3 ? 'active' : ''"-->
					<!--                        class="slide-aside-items d-flex align-center pointer"-->
					<!--                    >-->
					<!--                        <span class="icon-circle mr-5">-->
					<!--                            <svg class="icon-circle-svg" viewBox="-5 -5 95 95" width="20" height="20">-->
					<!--                                <circle cx="41.5" cy="41.5" r="41"></circle>-->
					<!--                            </svg>-->
					<!--                        </span>-->
					<!--                    </div>-->
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import { Hooper, Slide } from "hooper";
	import "hooper/dist/hooper.css";
	import I18nVue from "@/I18nVue";

	export default {
		name: "AppHeroSlider",
		components: {
			Hooper,
			Slide,
			I18nVue
		},
		data() {
			return {
				initialPathName: "physical-persons",
				hooperSettings: {
					itemsToShow: 1,
					wheelControl: false,
					autoPlay: true,
					playSpeed: 5000
				},
				carouselData: 0
			};
		},
		watch: {
			$route(to) {
				this.initialPathName = to.path.split("/")[1]
			}
		},
		methods: {
			setSlideTo(val) {
				const $items = document.querySelectorAll(".slide-aside-items");

				$items.forEach((item) => item.classList.remove("active"));

				$items[val].classList.add("active");

				this.$refs.carousel.slideTo(val);
			},
			updateCarousel(payload) {
				this.carouselData = payload.currentSlide;

				this.$refs.carousel.restartTimer();
			}
		}
	};
</script>

<style>
	.hero-slider {
		min-height: 100vh;
		/*padding-top: 135px;*/
	}
	.hero-slide-item {
		height: calc(100vh - 165px);
	}
	.slide-item-left,
	.slide-item-right {
		width: 50%;
	}
	.slide-item-left > *,
	.slide-item-right .circle-shape {
		transform: translateY(45px);
		opacity: 0;
		transition: 0.25s ease-out;
	}
	.hero-slider-hooper .hooper-slide.is-active.is-current .slide-item-left > *,
	.hero-slider-hooper .hooper-slide.is-active.is-current .slide-item-right .circle-shape {
		opacity: 1;
		transform: translateY(0px);
		transition-duration: 0.4s;
	}
	.hero-slider-hooper .hooper-slide.is-active.is-current .slide-item-left > :nth-child(2) {
		transition-delay: 0.25s;
	}
	.hero-slider-hooper .hooper-slide.is-active.is-current .slide-item-left > :nth-child(3),
	.hero-slider-hooper .hooper-slide.is-active.is-current .slide-item-right .circle-shape {
		transition-delay: 0.45s;
	}
	.hero-slider-hooper .hooper-slide.is-active.is-current .slide-item-left > :nth-child(4) {
		transition-delay: 0.6s;
	}
	.hero-slider-hooper .hooper-slide.is-active.is-current .slide-item-left > :nth-child(5) {
		transition-delay: 0.75s;
	}
	.slider-dots {
		bottom: 0;
		left: 0;
	}
</style>
