<template>
	<div class="map-widget credit-widget d-flex flex-column px-7 py-8 rounded-lg">
		<div class="map-widget-google flex-1">
			<div ref="googleMap" style="height: 390px"></div>
		</div>

		<div>
			<div class="d-flex align-center my-5">
				<map-pin-icon size="2x" class="primary-text mr-3" />
				<h2 class="font-600 dark-text">
					<I18nVue t="ExchangeRates.footer_title" />
				</h2>
			</div>

			<div class="d-flex flex-wrap flex-sm-nowrap align-center">
				<p class="mb-0">
					<I18nVue t="ExchangeRates.footer_body" />
				</p>
				<v-spacer class="d-none d-sm-block" />
				<v-btn
					:to="{name: 'BankOffice'}"
					depressed
					dark
					color="rgba(var(--main-primary), 1)"
					min-width="192"
					min-height="50"
					rounded
					class="font-700 ml-sm-13 mt-5 mt-sm-0"
				>
					<I18nVue t="ExchangeRates.footer_btn" />
				</v-btn>
			</div>
		</div>
	</div>
</template>

<script>
import I18nVue from "../I18nVue";
import { MapPinIcon } from "vue-feather-icons"

export default {
	name: "GoogleMapWidget",
	components: {
		I18nVue,
		MapPinIcon
	},
	data() {
		return {
			selected: ["mini_bank", "filial", "service_center", "automate_trans_machine", "information_center", "exchange_center"],
			switches: [],
			switchToggle: false,
			bounds: new google.maps.LatLngBounds(), // Авто масштабирование карты
			mapOptions: {
				// center: {lat: 42.509232, lng: 64.116735},
				// zoom: 16,
				// minZoom: 16,
				gestureHandling: "cooperative",
				styles: [
					{ elementType: "geometry.fill", stylers: [{ color: "#f8f8f8" }] },
					{ elementType: "geometry.stroke", stylers: [{ color: "#dbdbdb" }] },
					{ elementType: "labels.text.fill", stylers: [{ color: "#4d4d50" }] },
					{ elementType: "labels.text.stroke", stylers: [{ color: "#ffffff" }] },
					{
						featureType: "administrative",
						elementType: "geometry",
						stylers: [{ color: "#000000" }]
					}
				]
			},
			mapLocationsList: [],
			locationsConfig: {
				condition: "active",
				district: ""
			},
			districtList: []
		};
	},
	mounted() {
		this.getLocationsList();
		this.getDistrictList();

		setTimeout(() => {
			this.initMap();
		}, 2000);
	},
	methods: {
		/*
		*
		* */
		getLocationsList() {
			this.$http.get("/1/filial/", {
				params: {
					page_size: 500,
					condition: this.locationsConfig.condition,
					district: this.locationsConfig.district,
					type: this.selected.join(",")
				}
			})
				.then(({ data }) => {
					this.mapLocationsList = data.results;
				});
		},

		/*
		*
		* */
		getDistrictList() {
			this.$http.get("/1/district")
				.then(({ data }) => {
					this.districtList = data.results;
				});
		},

		/*
		*
		* */
		initMap() {
			// create map
			const originalMapCenter = new google.maps.LatLng(-25.363882, 131.044922);

			const map = new google.maps.Map(this.$refs.googleMap, {
				center: originalMapCenter,
				...this.mapOptions
			});

			const infoWindow = new google.maps.InfoWindow();

			// create Markers
			let markers = this.mapLocationsList.map((location) => {
				// set locations for auto zoom map
				const setLocations = new google.maps.LatLng(location.lat, location.lng);
				this.bounds.extend(setLocations);

				const marker = new google.maps.Marker({
					position: location,
					map: map,
					icon: location.type === "mini_bank"
						? "/images/minibank.png"
						: location.type === "filial"
							? "/images/branch.png"
							: location.type === "service_center"
								? "/images/infokiosk.png"
								: location.type === "automate_trans_machine"
									? "/images/atm.png"
									: location.type === "exchange_center"
										? "/images/atm.png"
										: "/images/minibank.png"
				});

				// set Markers on Map
				return marker;
			});

			// create MarkerClusterer and add Image
			let markerCluster = new MarkerClusterer(map, markers, {
				styles: [
					{
						url: "/images/cluster.png",
						width: 60,
						height: 60,
						textColor: "#ffffff"
					}
				]
			});

			// авто масштабирование
			map.fitBounds(this.bounds);
		}
	}
};
</script>

<style>
.map-widget {
	min-height: 586px;
}
</style>
