<template>
    <div class="statistic-graphs-view">
        <v-container>
            <div class="app-content-view">
                <v-row>
                    <!--Динамика активов, млн. сум -->
                    <v-col md="6">
                        <h1 class="mb-4">
                            <I18nVue t="SHAREHOLDERS_AND_INVESTORS.StatisticGraphs.title1"/>
                        </h1>
                        <div class="credit-widget pa-5 rounded-lg overflow-hidden">
                            <apexchart type="line" height="350" :options="chartOptions" :series="series"/>
                        </div>
                    </v-col>
                    <!--Динамика обязательств, млн. сум-->
                    <v-col md="6">
                        <h1 class="mb-4">
                            <I18nVue t="SHAREHOLDERS_AND_INVESTORS.StatisticGraphs.title2"/>
                        </h1>
                        <div class="credit-widget pa-5 rounded-lg overflow-hidden">
                            <apexchart type="line" height="350" :options="chartOptions5" :series="series5"/>
                        </div>
                    </v-col>
                    <!--Динамика Капитала, млн.сум-->
                    <v-col md="6">
                        <h1 class="mb-4">
                            <I18nVue t="SHAREHOLDERS_AND_INVESTORS.StatisticGraphs.title3"/>
                        </h1>
                        <div class="credit-widget pa-5 rounded-lg overflow-hidden">
                            <apexchart type="line" height="350" :options="chartOptions1" :series="series1"/>
                        </div>
                    </v-col>
                    <!--Струтура активов за 2021 год, %-->
                    <v-col md="6">
                        <h1 class="mb-4">
                            <I18nVue t="SHAREHOLDERS_AND_INVESTORS.StatisticGraphs.title4"/>
                        </h1>
                        <div class="credit-widget pa-5 rounded-lg overflow-hidden">
                            <apexchart type="bar" height="350" :options="chartOptions2" :series="series2"/>
                        </div>
                    </v-col>
                    <!--Струтура обязательств за 2021 год, %-->
                    <v-col md="6">
                        <h1 class="mb-4">
                            <I18nVue t="SHAREHOLDERS_AND_INVESTORS.StatisticGraphs.title5"/>
                        </h1>
                        <div class="credit-widget pa-5 rounded-lg overflow-hidden">
                            <apexchart type="bar" height="350" :options="chartOptions3" :series="series3"/>
                        </div>
                    </v-col>
                    <!--Рентабельность активов и капитала, %-->
                    <v-col md="6">
                        <h1 class="mb-4">
                            <I18nVue t="SHAREHOLDERS_AND_INVESTORS.StatisticGraphs.title6"/>
                        </h1>
                        <div class="credit-widget pa-5 rounded-lg overflow-hidden">
                            <apexchart type="line" height="350" :options="chartOptions4" :series="series4"/>
                        </div>
                    </v-col>
                </v-row>
            </div>
        </v-container>
    </div>
</template>

<script>
    import I18nVue from "@/I18nVue";

    export default {
        name: "index",
        components: {I18nVue},
        data() {
            return {
                series: [{name: "", data: [10449, 24276, 30355, 34699, 45518, 50804]}],
                chartOptions: {
                    chart: {height: 350, type: "line", zoom: {enabled: false}},
                    colors: ["#d70c17"],
                    stroke: {curve: "smooth"},
                    markers: {size: 5},
                    grid: {row: {colors: ["#f3f3f3", "transparent"], opacity: 0.5}},
                    xaxis: {categories: ["2016", "2017", "2018", "2019", "2020", "2021"]},
                    yaxis: {show: false}
                },

                series5: [{name: "", data: [9425, 21193, 27187, 28571, 39093, 44300]}],
                chartOptions5: {
                    chart: {height: 350, type: "line", zoom: {enabled: false}},
                    colors: ["#d70c17"],
                    stroke: {curve: "smooth"},
                    markers: {size: 5},
                    grid: {row: {colors: ["#f3f3f3", "transparent"], opacity: 0.5}},
                    xaxis: {categories: ["2016", "2017", "2018", "2019", "2020", "2021"]},
                    yaxis: {show: false}
                },


                series1: [
                    {
                        name: this.$t("SHAREHOLDERS_AND_INVESTORS.StatisticGraphs.ch1"),
                        data: [1024, 3083, 3168, 6128, 6426, 6505]
                    },
                    {
                        name: this.$t("SHAREHOLDERS_AND_INVESTORS.StatisticGraphs.ch2"),
                        data: [516, 2099, 2099, 5683, 5633, 5633]
                    },
                    {
                        name: this.$t("SHAREHOLDERS_AND_INVESTORS.StatisticGraphs.ch3"),
                        data: [95, 51, 123, 167, 341, 100]
                    }
                ],
                chartOptions1: {
                    chart: {zoom: {enabled: false}},
                    stroke: {curve: "smooth"},
                    markers: {size: 5},
                    colors: ["#d70c17"],
                    xaxis: {categories: ["2016", "2017", "2018", "2019", "2020", "2021"]},
                    yaxis: {show: false}
                },


                series2: [{name: "", data: [9.6, 6.0, 1.6, 1.4, 72.4, 3.6, 5.4]}],
                chartOptions2: {
                    chart: {height: 350, type: "line", zoom: {enabled: false}},
                    colors: ["#d70c17"],
                    stroke: {curve: "smooth"},
                    markers: {size: 5},
                    grid: {row: {colors: ["#f3f3f3", "transparent"], opacity: 0.5}},
                    xaxis: {
                        categories: [
                            this.$t("SHAREHOLDERS_AND_INVESTORS.StatisticGraphs.ch6"),
                            this.$t("SHAREHOLDERS_AND_INVESTORS.StatisticGraphs.ch7"),
                            this.$t("SHAREHOLDERS_AND_INVESTORS.StatisticGraphs.ch8"),
                            this.$t("SHAREHOLDERS_AND_INVESTORS.StatisticGraphs.ch9"),
                            this.$t("SHAREHOLDERS_AND_INVESTORS.StatisticGraphs.ch10"),
                            this.$t("SHAREHOLDERS_AND_INVESTORS.StatisticGraphs.ch11"),
                            this.$t("SHAREHOLDERS_AND_INVESTORS.StatisticGraphs.ch12")
                        ]
                    }
                },


                series3: [{data: [20.8, 2.9, 39.7, 21.1, 2.7, 12.8]}],
                chartOptions3: {
                    chart: {height: 350, type: "line", zoom: {enabled: false}},
                    colors: ["#d70c17"],
                    stroke: {curve: "smooth"},
                    markers: {size: 5},
                    grid: {row: {colors: ["#f3f3f3", "transparent"], opacity: 0.5}},
                    xaxis: {
                        categories: [
                            this.$t("SHAREHOLDERS_AND_INVESTORS.StatisticGraphs.ch14"),
                            this.$t("SHAREHOLDERS_AND_INVESTORS.StatisticGraphs.ch15"),
                            this.$t("SHAREHOLDERS_AND_INVESTORS.StatisticGraphs.ch16"),
                            this.$t("SHAREHOLDERS_AND_INVESTORS.StatisticGraphs.ch17"),
                            this.$t("SHAREHOLDERS_AND_INVESTORS.StatisticGraphs.ch18"),
                            this.$t("SHAREHOLDERS_AND_INVESTORS.StatisticGraphs.ch19")
                        ]
                    }
                },


                series4: [
                    {
                        name: this.$t("SHAREHOLDERS_AND_INVESTORS.StatisticGraphs.ch4"),
                        data: [0.91, 0.21, 0.41, 0.48, 0.75, 0.20]
                    },
                    {
                        name: this.$t("SHAREHOLDERS_AND_INVESTORS.StatisticGraphs.ch5"),
                        data: [9.32, 1.65, 3.89, 2.72, 5.30, 1.54]
                    }
                ],
                chartOptions4: {
                    chart: {zoom: {enabled: false}},
                    stroke: {curve: "smooth"},
                    markers: {size: 5},
                    colors: ["#d70c17"],
                    xaxis: {categories: ["2016", "2017", "2018", "2019", "2020", "2021"]}
                }
            };
        }
    };
</script>
