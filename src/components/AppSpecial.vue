<template>
	<v-menu :close-on-content-click="false" offset-y min-width="250" content-class="elevation-0">
		<template v-slot:activator="{ on }">
			<v-btn
				v-on="on"
				depressed
				:ripple="false"
				plain
				text
				class="px-0 text-transform-reset reset-size navigation-link text-decoration-none dark-grey py-5 px-2 px-xl-3 d-flex align-center"
			>
				<eye-icon size="1.2x" class="primary-text" />
				<I18nVue classes="text-small font-600 ml-2" t="special_opportunities" />
			</v-btn>
		</template>

		<div class="navigation-menu-content">
			<div class="pt-3 mr-16">
				<div class="content-in border-all pa-2 d-flex rounded">
<!--					<a class="act transition-all">-->
<!--						<volume2Icon />-->
<!--					</a>-->
					<a class="act transition-all">
						<template v-if="!isGrayscaleMode">
							<eye-icon @click="grayscaleMode" />
						</template>

						<template v-else>
							<eye-off-icon @click="grayscaleMode" />
						</template>
					</a>
					<a ref="decrease" class="act transition-all font-600 text-center">
						A-
					</a>
					<a ref="inherit" class="act transition-all font-600 text-center">
						A
					</a>
					<a ref="increase" class="act transition-all font-600 text-center">
						A+
					</a>
				</div>
			</div>
		</div>
	</v-menu>
</template>


<script>
import I18nVue from "@/I18nVue";
import { EyeIcon, Volume2Icon, EyeOffIcon } from "vue-feather-icons";

export default {
	name: "AppSpecial",
	components: { EyeIcon, Volume2Icon, EyeOffIcon, I18nVue },
	data() {
		return {
			isGrayscaleMode: false
		};
	},
	mounted() {
		const tagArray = ["span", "p", "h1", "h2", "h3", "h4", "h5", "h6", "i", "b", "a"];
		const $container = document.querySelectorAll(".container");

		const interval = setInterval(() => {
			const { decrease, inherit, increase } = this.$refs;

			if (increase || decrease || inherit) {
				/*
				* Increase
				* */
				increase.addEventListener("click", function() {
					$container.forEach((el) => {
						const style = getComputedPropertyValue(el, "max-width");

						el.style.maxWidth = parseFloat(style) + 75 + "px";
					});

					tagArray.forEach((tag) => {
						const elArray = document.querySelectorAll(tag);

						elArray.forEach((el) => {
							const style = getComputedPropertyValue(el, "font-size");
							el.style.fontSize = parseFloat(style) + 1 + "px";
						});
					});
				});

				/*
				* Inherit
				* */
				inherit.addEventListener("click", function() {
					$container.forEach((el) => {
						el.style.maxWidth = "";
					});

					tagArray.forEach((tag) => {
						const elArray = document.querySelectorAll(tag);

						elArray.forEach((el) => {
							el.style.fontSize = "";
						});
					});
				});

				/*
				* Decrease
				* */
				decrease.addEventListener("click", function() {
					$container.forEach((el) => {
						const style = getComputedPropertyValue(el, "max-width");

						el.style.maxWidth = parseFloat(style) - 75 + "px";
					});

					tagArray.forEach((tag) => {
						const elArray = document.querySelectorAll(tag);

						elArray.forEach((el) => {
							const style = getComputedPropertyValue(el, "font-size");
							el.style.fontSize = parseFloat(style) - 1 + "px";
						});
					});
				});

				clearInterval(interval);
			}
		}, 50);

		function getComputedPropertyValue(el, prop) {
			return window.getComputedStyle(el, null).getPropertyValue(prop);
		}
	},
	// updated() {
	// 	console.log("update");
	// },
	methods: {
		grayscaleMode() {
			const $html = document.querySelector("html");
			this.isGrayscaleMode = !this.isGrayscaleMode;

			this.isGrayscaleMode ? $html.classList.add("grayscale-mode") : $html.classList.remove("grayscale-mode");
		}
	}
};
</script>
<style>
.act {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-content: center;
	padding: 10px;
	margin: 0 5px;
	font-size: 24px;
}

.act:hover {
	transform: scale(1.15);
	color: #D70C17;
}
</style>
