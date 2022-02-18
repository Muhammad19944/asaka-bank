<template>
	<div class="header-hooper-wrap">
		<hooper
			@slide="updateCarousel"
			:settings="headerHooperSettings"
			ref="hooper"
			class="p-relative outline-transparent mx-auto mx-sm-auto"
		>
			<slide v-for="item in physicalPerson" :key="item.id">
				<div class="img-container rounded-lg overflow-hidden">
					<div class='video_container'>
						<video :src="item.videoUrl"
						       class="d-block img-cover"
						       ref="headerVideo"
						       v-if='item.hasVideo'
						       :poster="item.videoPoster"
						       muted
						>
						</video>
<!--						<img v-if='item.hasVideo === true' src="https://asakabank.uz/media/images/mdls/155/_1604646466.1089.jpg" alt="Mockup img" class="d-block img-cover" />
						<img v-if='item.hasVideo === false' src="/images/animals-1.jpg" alt="Mockup img" class="d-block img-cover" />
						<v-btn v-if='item.hasVideo === true' class="video_button">
							<v-icon color="red" aria-hidden="false">

								mdi-play
							</v-icon>
						</v-btn>-->
						<v-btn
							@click='playVideo'
							depressed
							color='danger'
							v-if='item.hasVideo'
							class="video_button"
							:class="isPlaying ? 'video_button_not_display' : ''"
						>
							<v-icon color="#fff" aria-hidden="false">
								mdi-play
							</v-icon>
						</v-btn>
						<img v-if='!item.hasVideo' :src="item.image" />
					</div>
				</div>
				<I18nVue
					:uz="item.title.title_uz"
					:ru="item.title.title_ru"
					:en="item.title.title_en"
					classes="text--h3 font-600 mt-7 mb-3 d-block"
				/>

				<I18nVue
					:uz="item.description.description_uz"
					:ru="item.description.description_ru"
					:en="item.description.description_en"
					classes="mb-6 d-block"
				/>
			</slide>
		</hooper>

		<div class="slide-aside h-100 d-flex">
			<button
				v-for="(item, index) in physicalPerson"
				:key="item.id"
				@click="setSlideTo(index)"
				:class="carouselData === index ? 'active' : ''"
				class="slide-aside-items d-flex align-center justify-center justify-sm-start"
			>
				<span class="icon-circle mr-4">
					<svg class="icon-circle-svg" viewBox="-5 -5 95 95" width="20" height="20">
						<circle cx="41.5" cy="41.5" r="41"></circle>
					</svg>
				</span>
			</button>
		</div>
	</div>
</template>

<script>
import I18nVue from "../../I18nVue";
import { Hooper, Slide } from "hooper";
import "hooper/dist/hooper.css";

export default {
	name: "HooperPhysical",
	props: {
		physicalPerson: {
			type: Array
		}
	},
	components: {
		Hooper,
		Slide,
		I18nVue
	},
	data() {
		return {
			isPlaying: false,
			headerHooperSettings: {
				itemsToShow: 1,
				// wheelControl: false,
				// touchDrag: false,
				// mouseDrag: false,
				playSpeed: 6000,
				autoPlay: true
			},
			carouselData: 0,
			carouselList: null
		};
	},
	/*
	*
	* */
	mounted() {
		// console.log(this.physicalPerson);
	},
	/*
	*
	* */
	methods: {
		/*
		*
		* */
		setSlideTo(val) {
			const $items = document.querySelectorAll(".slide-aside-items");

			$items.forEach((item) => item.classList.remove("active"));

			$items[val].classList.add("active");

			this.$refs.hooper.slideTo(val);
		},

		/*
		*
		* */
		updateCarousel(payload) {
			this.carouselData = payload.currentSlide;

			this.$refs.hooper.restartTimer();

			if (this.isPlaying){
				this.$refs.headerVideo[0].pause()
				this.isPlaying = false
			}
		},
		/*
		*
		* */
		playVideo(){
			this.$refs.headerVideo[0].play()
			this.isPlaying = true
		}
	}
};
</script>

<style>
.header-hooper-wrap {
	width: 400px;
}

.img-container {
	height: 250px;
}
.video_container{
	position: relative;
	width: 100%;
	max-width: 400px;
	height: 100%;
}
.video_button{
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	/*background-color: #555;*/
	color: white;
	font-size: 16px;
	padding: 12px 24px;
	border: none;
	cursor: pointer;
	border-radius: 5px;
	text-align: center;
}
.video_button:hover {
	background-color: black;
}

.video_button_not_display{
	display: none;
}
</style>
