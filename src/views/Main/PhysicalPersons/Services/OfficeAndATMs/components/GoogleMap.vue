<template>
  <div class="map-wrap-container section w-100 p-relative">
    <v-container class="mt-15">
      <v-row>
        <v-col lg="4" md="6">
          <div class="map-aside">
            <div class="aside-container credit-widget w-100 rounded pa-4 pa-sm-7">
              <h3 class="font-600 dark-text mb-7">
                <I18nVue t="Services.Map.title"/>
              </h3>

              <div class="app-form-group app-form-group__small mb-6">
                <h5 class="font-600 dark-text">
                  <I18nVue t="Services.Map.label"/>
                </h5>

                <v-divider class="mt-2 mb-4" style="border-color: rgba(var(--border-color), 1)"/>

                <v-select
                    v-model="locationsConfig.district"
                    :items="districtList"
                    :item-text="$i18n.locale === 'uz' ? 'name_uz' : $i18n.locale === 'ru' ? 'name_ru' : 'name_en'"
                    item-value="id"
                    outlined
                    hide-details
                    clearable
                    :placeholder="$t('Services.Map.pl')"
                >
                  <template v-slot:append>
                    <chevron-down-icon size="1.5x" class="grey--text"/>
                  </template>
                </v-select>
              </div>

              <v-checkbox v-model="selected" color="danger" value="mini_bank" hide-details>
                <template v-slot:label>
                  <h4 class="font-600 dark-text">
                    <I18nVue t="Services.Map.ch1"/>
                  </h4>
                </template>
              </v-checkbox>

              <v-checkbox v-model="selected" color="danger" value="filial" hide-details>
                <template v-slot:label>
                  <h4 class="font-600 dark-text">
                    <I18nVue t="Services.Map.ch2"/>
                  </h4>
                </template>
              </v-checkbox>

              <v-checkbox v-model="selected" color="danger" value="service_center" hide-details>
                <template v-slot:label>
                  <h4 class="font-600 dark-text">
                    <I18nVue t="Services.Map.ch3"/>
                  </h4>
                </template>
              </v-checkbox>

              <v-checkbox v-model="selected" color="danger" value="automate_trans_machine" hide-details>
                <template v-slot:label>
                  <h4 class="font-600 dark-text">
                    <I18nVue t="Services.Map.ch4"/>
                  </h4>
                </template>
              </v-checkbox>

              <v-checkbox v-model="selected" color="danger" value="information_center" hide-details>
                <template v-slot:label>
                  <h4 class="font-600 dark-text">
                    <I18nVue t="Services.Map.ch5"/>
                  </h4>
                </template>
              </v-checkbox>

              <v-checkbox v-model="selected" color="danger" value="exchange_center" hide-details>
                <template v-slot:label>
                  <h4 class="font-600 dark-text">
                    <I18nVue t="Services.Map.ch6"/>
                  </h4>
                </template>
              </v-checkbox>

              <v-divider style="border-color: rgba(var(--border-color), 0.75)" class="mt-5"/>

              <!--				<v-switch v-model="switches" inset color="danger" hide-details>-->
              <!--					<template v-slot:label>-->
              <!--						<h4 class="font-600 dark-text">Barcha banklar</h4>-->
              <!--					</template>-->
              <!--				</v-switch>-->

              <v-switch
                  @change="$emit('emit:up', {
									locations: mapLocationsList,
									isMap: !switchToggle
								})"
                  v-model="switchToggle"
                  inset
                  color="danger"
                  hide-details
              >
                <template v-slot:label>
                  <h4 class="font-600 dark-text">{{
                      switchToggle ? $t('Services.Map.ch7') : $t('Services.Map.ch8')
                    }}</h4>
                </template>
              </v-switch>
            </div>
          </div>
        </v-col>

        <template v-if="switchToggle">
          <v-col lg="8" md="6">
            <div class="p-relative" style="z-index: 1;">
              <v-row>
                <template v-for="item in mapLocationsList">
                  <v-col :key="item.id" lg="6" md="6">
                    <div class="credit-widget pa-8 rounded-lg overflow-hidden mb-8">
                      <h4 class="font-600 dark-grey">
                        <I18nVue t="Services.Offices.bank"/>
                      </h4>
                      <h2 class="font-600 dark-text mb-6 mt-1">
                        <I18nVue
                            :ru="item.name_ru"
                            :en="item.name_en"
                            :uz="item.name_uz"
                        />
                      </h2>

                      <div class="d-flex align-center mb-4">
                        <map-pin-icon class="size-sm primary-text mr-3"/>

                        <a class="text-decoration-none font-600 navigation-link dark-grey flex-1">
												<span>
													<I18nVue
                              :ru="item.address_ru"
                              :en="item.address_en"
                              :uz="item.address_uz"
                          />
												</span>
                        </a>
                      </div>

                      <template v-if="item.type === 'head_office'">
                        <div class="d-flex align-center mb-4">
                          <phone-icon class="size-sm primary-text mr-3"/>

                          <a href="'tel:1152" class="text-decoration-none font-600 navigation-link dark-grey flex-1">
                            <span>1152</span>
                          </a>
                        </div>

                        <div v-if='item.phone_number_2' class="d-flex align-center mb-4">
                          <phone-icon class="size-sm primary-text mr-3"/>

                          <a :href="'tel:' + item.phone_number_2"
                             class="text-decoration-none font-600 navigation-link dark-grey flex-1">
                            <span>{{ item.phone_number_2 }}</span>
                          </a>
                        </div>

                        <div class="d-flex align-center mb-4">
                          <FaxIcon class="size-sm fill-primary mr-3"/>

                          <a href="tel:120247" class="text-decoration-none font-600 navigation-link dark-grey flex-1">
                            <span>120247</span>
                          </a>
                        </div>
                      </template>

                      <template v-else>
                        <div v-if='item.phone_number' class="d-flex align-center mb-4">
                          <phone-icon class="size-sm primary-text mr-3"/>

                          <a :href="'tel:' + item.phone_number"
                             class="text-decoration-none font-600 navigation-link dark-grey flex-1">
                            <span>{{ item.phone_number }}</span>
                          </a>
                        </div>

                        <div v-if='item.phone_number_2' class="d-flex align-center mb-4">
                          <phone-icon class="size-sm primary-text mr-3"/>

                          <a :href="'tel:' + item.phone_number_2"
                             class="text-decoration-none font-600 navigation-link dark-grey flex-1">
                            <span>{{ item.phone_number_2 }}</span>
                          </a>
                        </div>

                        <div v-if='item.fax' class="d-flex align-center mb-4">
                          <FaxIcon class="size-sm fill-primary mr-3"/>

                          <a href="tel:+03677708245"
                             class="text-decoration-none font-600 navigation-link dark-grey flex-1">
                            <span>{{ item.fax }}</span>
                          </a>
                        </div>
                      </template>

                      <div v-if='item.email' class="d-flex align-center">
                        <mail-icon class="size-sm primary-text mr-3"/>

                        <a href="mailto:office@asakabank.uz"
                           class="text-decoration-none font-600 navigation-link dark-grey">
                          <span>{{ item.email }}</span>
                        </a>
                      </div>

                      <div v-if='item.number_exchange_office' class="d-flex align-center mt-4">
                        <archive-icon class="size-sm primary-text mr-3"/>

                        <a class="text-decoration-none font-600 navigation-link dark-grey">
                            <span>{{ $t("LastCorrections.number_exchange_office") }}  <b>{{
                                item.number_exchange_office
                              }}</b></span>
                        </a>
                      </div>

                      <!--If type is Filial -->
                      <div v-if="item.type === 'filial' || item.type === 'exchange_center'"
                           class="d-flex align-center mt-4">
                        <clock-icon style="width: 2.4rem;" class="primary-text mr-3"/>

                        <span class="text-decoration-none font-600 dark-grey">
                      <span v-if="$i18n.locale === 'uz'">
                        Bank filiallarida valyuta va kassa operatsiyalari <b>9:00 dan 17:00 gacha</b> ish faoliyatini olib boradi
                      </span>
                      <span v-if="$i18n.locale === 'ru'">
                        Валютно-обменные и кассовые операции в филиалах банка открыты <b>с 9:00 до 17:00</b>
                      </span>
                      <span v-if="$i18n.locale === 'en'">
                        Currency exchange and cash transactions in the branches of the bank are open <b>from 9:00 to 17:00</b>
                      </span>
                    </span>
                      </div>

                      <!--If type is Head Office -->
                      <div v-if="item.type === 'head_office'" class="d-flex align-center mt-4">
                        <user-x-icon style="width: 2.4rem;" class="primary-text mr-3"/>

                        <span class="text-decoration-none font-600 dark-grey">
                      <span v-if="$i18n.locale === 'uz'">
                        Jismoniy shaxslar uchun valyuta ayirboshlash va kassa operatsiyalari xizmat ko'rsatmaydi!
                      </span>
                      <span v-if="$i18n.locale === 'ru'">
                        Валютно-обменные и кассовые операции не обслуживаются для физических лиц!
                      </span>
                      <span v-if="$i18n.locale === 'en'">
                        Currency exchange and cash transactions are not serviced for individuals!
                      </span>
                    </span>
                      </div>

                      <div v-if="item.is_for_exchange" class="d-flex align-center mt-4">
                        <clock-icon class="primary-text mr-3 size-sm"/>

                        <span class="text-decoration-none font-600 dark-grey">
                      <I18nVue v-if="item.id == 276" t="LastCorrections.mon-sat"/>
                      <I18nVue v-else t="LastCorrections.mon_fri"/>
                    </span>
                      </div>

                    </div>
                  </v-col>
                </template>
              </v-row>
            </div>
          </v-col>
        </template>
      </v-row>
    </v-container>

    <div v-show="!switchToggle" class="map-wrap p-absolute w-100 h-100">
      <div id="map" ref="googleMap" class="google-map w-100 h-100"></div>
    </div>
  </div>
</template>

<script>
import I18nVue from "@/I18nVue";
import FaxIcon from "@/components/Icons/FaxIcon";
import {ChevronDownIcon, MapPinIcon, PhoneIcon, MailIcon, ClockIcon, UserXIcon, ArchiveIcon} from "vue-feather-icons";

export default {
  name: "GoogleMap",
  components: {
    I18nVue,
    FaxIcon,
    ChevronDownIcon,
    MapPinIcon,
    PhoneIcon,
    MailIcon,
    ClockIcon,
    UserXIcon,
    ArchiveIcon
  },
  data() {
    return {
      selected: ["head_office", "mini_bank", "filial", "service_center", "automate_trans_machine", "information_center", "exchange_center"],
      switches: [],
      switchToggle: false,
      bounds: new google.maps.LatLngBounds(), // Авто масштабирование карты
      mapOptions: {
        // center: {lat: 42.509232, lng: 64.116735},
        // zoom: 16,
        // minZoom: 16,
        gestureHandling: "cooperative",
        styles: [
          {elementType: "geometry.fill", stylers: [{color: "#f8f8f8"}]},
          {elementType: "geometry.stroke", stylers: [{color: "#dbdbdb"}]},
          {elementType: "labels.text.fill", stylers: [{color: "#4d4d50"}]},
          {elementType: "labels.text.stroke", stylers: [{color: "#ffffff"}]},
          {
            featureType: "administrative",
            elementType: "geometry",
            stylers: [{color: "#000000"}]
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
  watch: {
    locationsConfig: {
      handler() {
        this.refreshMap();
      },
      deep: true
    },
    selected: {
      handler() {
        this.refreshMap();
      }
    },
    switchToggle: {
      handler() {
        this.refreshMap();
      }
    },
    mapLocationsList: {
      handler(val) {
        this.$emit("emit:up", {
          locations: this.mapLocationsList,
          isMap: !this.switchToggle
        });
      },
      deep: true
    }
  },
  mounted() {
    this.getLocationsList();
    this.getDistrictList();

    setTimeout(() => {
      this.initMap();
    }, 2000);
    // `${this.$i18n.locale} === 'uz' ? 'aa' : 'bb'` 40.103011, 65.373823
  },
  methods: {
    // initMap() {
    //   let points = [];
    //   let addresses = [];
    //   this.mapLocationsList.map((location) => {
    //     points.push([location.lat, location.lng]);
    //     addresses.push({
    //       name: location.name_uz,
    //       address: location.address_uz,
    //       phone: location.phone_number
    //     })
    //   });
    //
    //   ymaps.ready(function () {
    //     const myMap = new ymaps.Map('map', {
    //           center: [40.103011, 65.373823],
    //           zoom: 7,
    //           controls: ["zoomControl"]
    //         }, {
    //           searchControlProvider: 'yandex#search'
    //         }),
    //         clusterer = new ymaps.Clusterer({
    //           preset: 'islands#invertedRedClusterIcons',
    //           clusterHideIconOnBalloonOpen: false,
    //           geoObjectHideIconOnBalloonOpen: false
    //         });
    //
    //     /**
    //      * Кластеризатор расширяет коллекцию, что позволяет использовать один обработчик
    //      * для обработки событий всех геообъектов.
    //      * Будем менять цвет иконок и кластеров при наведении.
    //      */
    //     clusterer.events
    //         // Можно слушать сразу несколько событий, указывая их имена в массиве.
    //         .add(['mouseenter', 'mouseleave'], function (e) {
    //           const target = e.get('target'),
    //               type = e.get('type');
    //           if (typeof target.getGeoObjects != 'undefined') {
    //             // Событие произошло на кластере.
    //             if (type == 'mouseenter') {
    //               target.options.set('preset', 'islands#invertedPinkClusterIcons');
    //             } else {
    //               target.options.set('preset', 'islands#invertedRedClusterIcons');
    //             }
    //           } else {
    //             // Событие произошло на геообъекте.
    //             if (type == 'mouseenter') {
    //               target.options.set('preset', 'islands#redIcon');
    //             } else {
    //               target.options.set('preset', 'islands#redIcon');
    //             }
    //           }
    //         });
    //
    //     const getPointData = function (location) {
    //           console.log(location);
    //
    //           return {
    //             balloonContentBody: 'placemark <strong>balloon ' + location.name + '</strong>',
    //            // clusterCaption: 'placemark <strong>' + index + '</strong>'
    //           };
    //         },
    //         getPointOptions = function () {
    //           return {
    //             preset: 'islands#redIcon'
    //           };
    //         },
    //         geoObjects = [];
    //
    //     for(let i = 0; i < points.length; i++) {
    //       geoObjects[i] = new ymaps.Placemark(points[i], getPointData(addresses[i]), getPointOptions());
    //     }
    //
    //     clusterer.add(geoObjects);
    //     myMap.geoObjects.add(clusterer);
    //
    //     myMap.setBounds(clusterer.getBounds(), {
    //       checkZoomRange: true
    //     });
    //   });
    //
    //
    // },
    /*
    *
    * */
    getLocationsList() {
      this.$http.get("/1/filial/", {
        params: {
          page_size: 500,
          condition: this.locationsConfig.condition,
          district: this.locationsConfig.district,
          type: this.selected.join(","),
          ordering: "id"
        }
      })
          .then(({data}) => {
            this.mapLocationsList = data.results;
          });
    },

    /*
    *
    * */
    getDistrictList() {
      this.$http.get("/1/district")
          .then(({data}) => {
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
              : location.type === "filial" || location.type === "head_office"
                  ? "/images/branch.png"
                  : location.type === "service_center"
                      ? "/images/infokiosk.png"
                      : location.type === "automate_trans_machine"
                          ? "/images/atm.png"
                          : location.type === "exchange_center"
                              ? "/images/atm.png"
                              : "/images/minibank.png"
        });

        // Attach click event to the marker.
        ((marker, location) => {
          google.maps.event.addListener(marker, "click", () => {
            //Wrap the content inside an HTML DIV in order to set height and width of InfoWindow.
            infoWindow.setContent(`
							<div style="width: 325px; border: none; box-shadow: none" class="credit-widget pa-2 rounded-lg overflow-hidden">
								<h5 class="font-600 dark-grey">Asakabank</h5>
								<h4 class="font-600 dark-text mb-1">
									${location.name_uz}
								</h4>

								<div class="font-600 navigation-link dark-grey flex-1 mb-2" style="font-size: 15px">
									<strong class="font-700">Address:</strong>
									<span> ${location.address_uz}</span>
								</div>

								<div class="font-600 navigation-link dark-grey flex-1" style="font-size: 15px">
									<strong class="font-700">Telefon:</strong>
									<span>${location.phone_number}</span>
								</div>
							</div>
						`);
            infoWindow.open(map, marker);
          });
        })(marker, location);

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
    },

    /*
    *
    * */
    refreshMap() {
      this.getLocationsList();

      setTimeout(() => {
        this.initMap();
      }, 1000);
    }
  }
};
</script>

<style>
.map-aside {
  position: relative;
  height: 100%;
  /*max-width: 450px;*/
  width: 100%;
  z-index: 1;
}

.aside-container {
  background: #fff;
}

.map-wrap {
  top: 0;
  left: 0;
}
</style>
