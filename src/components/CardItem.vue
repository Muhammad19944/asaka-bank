<template>
	<div class="app-card-horizontal credit-widget d-flex flex-wrap flex-lg-nowrap mb-15">
<!--		<div>-->
<!--			<img src="/images/service-not-working.png" alt="Service not working image">-->
<!--			<div>-->
<!--				<span>11</span>-->
<!--				<span>22</span>-->
<!--			</div>-->
<!--		</div>-->

		<div class="card-horizontal__left" :class="{'pa-5 pa-sm-8' : imageCompact}">
			<slot name="card-left-image">
				<img :src="item.image.url && $http.defaults.baseURL +  item.image.url" alt=""
				     class="d-block img-cover img-right" />
			</slot>
		</div>

		<div class="card-horizontal__mid flex-1 d-flex flex-column py-6 py-sm-10 px-6 px-sm-12">
			<slot name="card-title">
				<div class="d-flex align-center justify-space-between mb-4">
					<h2 class="dark-text font-700">
						<I18nVue
							:ru="item.title_ru"
							:uz="item.title_uz"
							:en="item.title_en"
						/>
					</h2>

					<slot name="card-currency" />
				</div>
			</slot>

			<h4 class="font-500 main-grey text-clamp mb-5">
				<span v-if='$i18n.locale === "en"' v-html="item.description_en" />
				<span v-if='$i18n.locale === "ru"' v-html="item.description_ru" />
				<span v-if='$i18n.locale === "uz"' v-html="item.description_uz" />
			</h4>

			<div class="d-flex flex-wrap align-center mt-auto grid-gap-1">
				<template v-if="item.is_available">
					<slot name="card-buttons" />
				</template>

				<template v-else>
					<h4 v-if="$i18n.locale === 'uz'" class="font-700 primary-text">Xizmat vaqtinchalik ish faoliyatida emas</h4>
					<h4 v-if="$i18n.locale === 'ru'" class="font-700 primary-text">Сервис временно не работает</h4>
					<h4 v-if="$i18n.locale === 'en'" class="font-700 primary-text">The service is temporarily not working</h4>
				</template>
			</div>
		</div>

		<div class="card-horizontal__right pt-6 pb-8 px-8">
			<slot name="card-right-props" />
		</div>
	</div>
</template>

<script>
import I18nVue from "../I18nVue";

export default {
	name: "CardItem",
	props: {
		item: {
			type: Object,
			default: () => {}
		},
		imageCompact: {
			type: Boolean,
			default: false
		}
	},
	components: {
		I18nVue
	}
};
</script>

<style>

</style>
