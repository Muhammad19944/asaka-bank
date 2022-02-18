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
                            <template v-if='$i18n.locale === "uz"'>
	                            <h1 class="font-700 mb-5 text-extra-large">
		                            Modulli kreditlar
	                            </h1>
	                            <h3>
		                            "Modulli kreditlar" biznes xo'jaliklarining joriy faoliyatini qo'llab - quvvatlaydi.
	                            </h3>
	                            <v-divider class="my-6 my-lg-10 w-100" style="border-color: rgba(var(--border-color), 1)" />
                                <div class='credit-meta d-flex flex-wrap flex-lg-nowrap mb-5 mb-sm-13 w-100'>
                                    <div class='credit-meta-items d-flex align-center pb-3'>
                                        <h1 class='text-extra-large-3 mr-3 line-base font-300'>2</h1>
                                        <div class='d-flex flex-column h-100'>
                                            <h5 class='font-600'>
	                                            mlrd.soʼm
                                            </h5>
                                            <span class='text-small d-block font-600 line-base pb-1 mt-auto main-grey'>
                                             Kreditning eng ko'p miqdori
											</span>
                                        </div>
                                    </div>

                                    <div class='credit-meta-items d-flex align-center pb-3'>
                                        <h1 class='text-extra-large-3 mr-3 line-base font-300'>23%
                                            <span class="text--h2 font-600"></span>
                                        </h1>
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
	                            <h1 class="font-700 mb-5 text-extra-large">
		                            Модульные кредиты
	                            </h1>
	                            <h3>
		                            «Модульные кредиты» для поддержки текущей деятельности предприятий
	                            </h3>
	                            <v-divider class="my-6 my-lg-10 w-100" style="border-color: rgba(var(--border-color), 1)" />
                                <div class='credit-meta d-flex flex-wrap flex-lg-nowrap mb-5 mb-sm-13 w-100'>
                                    <div class='credit-meta-items d-flex align-center pb-3'>
	                                    <h1 class='text-extra-large-3 mr-3 line-base font-300'>2</h1>
	                                    <div class='d-flex flex-column h-100'>
		                                    <h5 class='font-600'>
			                                    млрд. сумов
		                                    </h5>
		                                    <span class='text-small d-block font-600 line-base pb-1 mt-auto main-grey'>
                                             максимальная сумма кредита
											</span>
	                                    </div>
                                    </div>

                                    <div class='credit-meta-items d-flex align-center pb-3'>
                                        <h1 class='text-extra-large-3 mr-3 line-base font-300'>23</h1>
                                        <div class='d-flex flex-column h-100'>
                                            <h5 class='font-600'>% </h5>
                                            <span class='text-small d-block font-600 line-base pb-1 mt-auto main-grey'>
                                                процентная ставка
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </template>

                            <template v-if='$i18n.locale === "en"'>
	                            <h1 class="font-700 mb-5 text-extra-large">
		                            Modular loans
	                            </h1>
	                            <h3>
		                            "Modular loans" to support the current activities of business entities
	                            </h3>
	                            <v-divider class="my-6 my-lg-10 w-100" style="border-color: rgba(var(--border-color), 1)" />
                                <div class='credit-meta d-flex flex-wrap flex-lg-nowrap mb-5 mb-sm-13 w-100'>
                                    <div class='credit-meta-items d-flex align-center pb-3'>
	                                    <h1 class='text-extra-large-3 mr-3 line-base font-300'>2</h1>
	                                    <div class='d-flex flex-column h-100'>
		                                    <h5 class='font-600'>
			                                    billion UZS
		                                    </h5>
		                                    <span class='text-small d-block font-600 line-base pb-1 mt-auto main-grey'>
                                             maximum loan amount
											</span>
	                                    </div>
                                    </div>

                                    <div class='credit-meta-items d-flex align-center pb-3'>
                                        <h1 class='text-extra-large-3 mr-3 line-base font-300'>23</h1>
                                        <div class='d-flex flex-column h-100'>
                                            <h5 class='font-600'>% </h5>
                                            <span class='text-small d-block font-600 line-base pb-1 mt-auto main-grey'>
                                                interest rate
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </template>

                            <div>
                                <v-btn
                                        :to="{name: 'SmallBusinessCreditsDetail', params: {id: 11}}"
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
                                        :to="{name: 'SmallBusinessCredits'}"
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
                                <img src="/images/smallBusinessBanner1.png" style="max-width: 110%" alt="Slide Image" />
                            </div>
                        </div>
                    </div>
                </slide>

                <slide>
                    <div class="hero-slide-item d-flex">
                        <div class="slide-item-left d-flex align-start flex-column justify-center dark-text">

                            <template v-if='$i18n.locale === "uz"'>
	                            <h1 class="font-700 mb-5 text-extra-large">
		                            Kontokorrent kreditlar
	                            </h1>
	                            <h3>
		                            Kreditlar “Asaka” bank tizimida xizmat ko'rsatilayotgan yoki boshqa bankda xizmat ko'rsatiluvchi tadbirkorlik sub'ektlarining joriy faoliyatnini qo'llab-quvvatlash uchun “kontokorrent” xisob raqam bo'yicha ajratiladi. buning uchun, mijoz bankning “asaka-biznes” mobil ilovasi, yoki korporativ internet banking tizimiga o'langan bo'lishi kerak.
	                            </h3>
	                            <v-divider class="my-6 my-lg-10 w-100" style="border-color: rgba(var(--border-color), 1)" />
                                <div class='credit-meta d-flex flex-wrap flex-lg-nowrap mb-5 mb-sm-13 w-100'>
                                    <div class='credit-meta-items d-flex align-center pb-3'>
                                        <h1 class='text-extra-large-3 mr-3 line-base font-300'>10</h1>
                                        <div class='d-flex flex-column h-100'>
                                            <h5 class='font-600'>mln.soʼm</h5>
                                            <span class='text-small d-block font-600 line-base pb-1 mt-auto main-grey'>
                                                kreditning eng kam miqdori
                                            </span>
                                        </div>
                                    </div>

                                    <div class='credit-meta-items d-flex align-center pb-3'>
                                        <h1 class='text-extra-large-3 mr-3 line-base font-300'>23</h1>
                                        <div class='d-flex flex-column h-100'>
                                            <h5 class='font-600'>%</h5>
                                            <span class='text-small d-block font-600 line-base pb-1 mt-auto main-grey'>
                                                foiz stavkasi
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </template>

                            <template v-if='$i18n.locale === "ru"'>
	                            <h1 class="font-700 mb-5 text-extra-large">
		                            Контокоррентные кредиты
	                            </h1>
	                            <h3>
		                            Кредиты по контокоррентному счету выдаются на поддержку текущей деятельности х субъектов Малого бизнеса обслуживающихся в АО «Асакабанк» или обслуживающихся в других банках. Для этого клиент должен быть подключен к мобильному приложению «Асака-Бизнес» или к Корпоративному Интернет Банкингу
	                            </h3>
	                            <v-divider class="my-6 my-lg-10 w-100" style="border-color: rgba(var(--border-color), 1)" />
                                <div class='credit-meta d-flex flex-wrap flex-lg-nowrap mb-5 mb-sm-13 w-100'>
                                    <div class='credit-meta-items d-flex align-center pb-3'>
                                        <h1 class='text-extra-large-3 mr-3 line-base font-300'>10</h1>
                                        <div class='d-flex flex-column h-100'>
                                            <h5 class='font-600'>млн. сумов</h5>
                                            <span class='text-small d-block font-600 line-base pb-1 mt-auto main-grey'>
                                                минимальная сумма кредита
                                            </span>
                                        </div>
                                    </div>

                                    <div class='credit-meta-items d-flex align-center pb-3'>
                                        <h1 class='text-extra-large-3 mr-3 line-base font-300'>23</h1>
                                        <div class='d-flex flex-column h-100'>
                                            <h5 class='font-600'>%</h5>
                                            <span class='text-small d-block font-600 line-base pb-1 mt-auto main-grey'>
                                                процентная ставка
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </template>

                            <template v-if='$i18n.locale === "en"'>
	                            <h1 class="font-700 mb-5 text-extra-large">
		                            Kontokorrent Loans
	                            </h1>
	                            <h3>
		                            Loans are allocated on a "overdraft" account to support the current activities of business entities serviced in the banking system "Asaka" or serviced by another bank. To do this, the client must be connected to the bank's "asaka-business" mobile application, or corporate internet banking system.
	                            </h3>
	                            <v-divider class="my-6 my-lg-10 w-100" style="border-color: rgba(var(--border-color), 1)" />
                                <div class='credit-meta d-flex flex-wrap flex-lg-nowrap mb-5 mb-sm-13 w-100'>
                                    <div class='credit-meta-items d-flex align-center pb-3'>
                                        <h1 class='text-extra-large-3 mr-3 line-base font-300'>10</h1>
                                        <div class='d-flex flex-column h-100'>
                                            <h5 class='font-600'>mln. UZS</h5>
                                            <span class='text-small d-block font-600 line-base pb-1 mt-auto main-grey'>
                                                minimum amount of loan
                                            </span>
                                        </div>
                                    </div>

                                    <div class='credit-meta-items d-flex align-center pb-3'>
                                        <h1 class='text-extra-large-3 mr-3 line-base font-300'>23</h1>
                                        <div class='d-flex flex-column h-100'>
                                            <h5 class='font-600'>%</h5>
                                            <span class='text-small d-block font-600 line-base pb-1 mt-auto main-grey'>
                                                interest rate
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </template>

                            <div>
                                <v-btn
                                        :to="{name: 'SmallBusinessCreditsDetail', params: {id: 12}}"
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
                                        :to="{name: 'SmallBusinessCredits'}"
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
                                <img src="/images/smallBusinessBanner2.png" alt="Slide Image" />
                            </div>
                        </div>
                    </div>
                </slide>

                <slide>
                    <div class="hero-slide-item d-flex">
                        <div class="slide-item-left d-flex align-start flex-column justify-center dark-text">
                            <template v-if='$i18n.locale === "uz"'>
	                            <h1 class="font-700 mb-5 text-extra-large">
		                            Biznes uchun qulay tariflar
	                            </h1>
	                            <h3>
		                            Sizning biznesingiz bank xizmatiga katta mablag ' sarflayaptimi ? <br>
		                            Yuridik shaxslar uchun belgilangan tariflarni taklif etamiz
	                            </h3>
	                            <v-divider class="my-6 my-lg-10 w-100" style="border-color: rgba(var(--border-color), 1)" />
	                            <div class='credit-meta d-flex flex-wrap flex-lg-nowrap mb-5 mb-sm-13 w-100'>
		                            <div class='credit-meta-items d-flex align-center pb-3'>
			                            <h1 class='text-extra-large-3 mr-3 line-base font-300'>50</h1>
			                            <div class='d-flex flex-column h-100'>
				                            <h5 class='font-600'>mln. so'mdan</h5>
				                            <span class='text-small d-block font-600 line-base pb-1 mt-auto main-grey'>
                                                bepul tranzaktsiyalar
                                            </span>
			                            </div>
		                            </div>

		                            <div class='credit-meta-items d-flex align-center pb-3'>
			                            <h1 class='text-extra-large-3 mr-3 line-base font-300'>100</h1>
			                            <div class='d-flex flex-column h-100'>
				                            <h5 class='font-600'>ming so'mdan</h5>
				                            <span class='text-small d-block font-600 line-base pb-1 mt-auto main-grey'>
                                                oyiga
                                            </span>
			                            </div>
		                            </div>
	                            </div>
                            </template>

                            <template v-if='$i18n.locale === "ru"'>
	                            <h1 class="font-700 mb-5 text-extra-large">
		                            Выгодные тарифы для бизнеса
	                            </h1>
	                            <h3>
		                            Ваш бизнес тратит большие средства на обслуживание банка ? <br> Предлагаем фиксированные тарифы для юридических лиц
	                            </h3>
	                            <v-divider class="my-6 my-lg-10 w-100" style="border-color: rgba(var(--border-color), 1)" />
	                            <div class='credit-meta d-flex flex-wrap flex-lg-nowrap mb-5 mb-sm-13 w-100'>
		                            <div class='credit-meta-items d-flex align-center pb-3'>
			                            <h1 class='text-extra-large-3 mr-3 line-base font-300'><span class="text--h2 font-600">от</span> 50</h1>
			                            <div class='d-flex flex-column h-100'>
				                            <h5 class='font-600'>млн. сум транзакции</h5>
				                            <span class='text-small d-block font-600 line-base pb-1 mt-auto main-grey'>
                                                БЕСПЛАТНО
                                            </span>
			                            </div>
		                            </div>

		                            <div class='credit-meta-items d-flex align-center pb-3'>
			                            <h1 class='text-extra-large-3 mr-3 line-base font-300'><span class="text--h2 font-600">от</span> 100</h1>
			                            <div class='d-flex flex-column h-100'>
				                            <h5 class='font-600'>тыс. сум</h5>
				                            <span class='text-small d-block font-600 line-base pb-1 mt-auto main-grey'>
                                                в месяц
                                            </span>
			                            </div>
		                            </div>
	                            </div>
                            </template>

                            <template v-if='$i18n.locale === "en"'>
	                            <h1 class="font-700 mb-5 text-extra-large">
		                            Favorable rates for business
	                            </h1>
	                            <h3>
		                            Does your business spend a lot of money on banking services?<br>
		                            We offer fixed rates for legal entities
	                            </h3>
	                            <v-divider class="my-6 my-lg-10 w-100" style="border-color: rgba(var(--border-color), 1)" />
	                            <div class='credit-meta d-flex flex-wrap flex-lg-nowrap mb-5 mb-sm-13 w-100'>
		                            <div class='credit-meta-items d-flex align-center pb-3'>
			                            <h1 class='text-extra-large-3 mr-3 line-base font-300'><span class="text--h2 font-600">from</span> 50</h1>
			                            <div class='d-flex flex-column h-100'>
				                            <h5 class='font-600'>million soums</h5>
				                            <span class='text-small d-block font-600 line-base pb-1 mt-auto main-grey'>
                                                transactions are free
                                            </span>
			                            </div>
		                            </div>

		                            <div class='credit-meta-items d-flex align-center pb-3'>
			                            <h1 class='text-extra-large-3 mr-3 line-base font-300'><span class="text--h2 font-600">from</span> 100</h1>
			                            <div class='d-flex flex-column h-100'>
				                            <h5 class='font-600'>thousand soums</h5>
				                            <span class='text-small d-block font-600 line-base pb-1 mt-auto main-grey'>
                                                per month
                                            </span>
			                            </div>
		                            </div>
	                            </div>
                            </template>


                            <div>
                                <v-btn
                                        :to="{name: 'Tariffs'}"
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
                            </div>
                        </div>
                        <div class="slide-item-right p-relative">
                            <div class="circle-shape">
                                <img src="/images/smallBusinessBanner3.png" style="max-width: 80%" alt="Slide Image" />
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
        name: "SmallBusinessHeroSlider",
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
                    autoPlay: false,
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
