<template>
	<v-row>
		<v-col md="6">
			<template
				v-for="item of newHalf">
				<div :key="item.id" class="credit-widget d-flex flex-column rounded-lg overflow-hidden mb-8">
					<div class="flex-1 pa-4 pa-sm-8">
						<h5>
							<I18nVue :uz="item.position_uz" :ru="item.position_ru"
							         :en="item.position_en" />
						</h5>
						<h2 class="font-600 dark-text mt-2 mb-4">
							<I18nVue :uz="item.full_name_uz" :ru="item.full_name_ru"
							         :en="item.full_name_en" />
						</h2>
						<h5 class="font-600 dark-grey mb-1">
							<I18nVue t="SHAREHOLDERS_AND_INVESTORS.bank_structure.text10" /> &nbsp;
							<a :href="`tel: ${item.phone}`" class="text-decoration-none font-700">
								{{ item.phone }}
							</a>
						</h5>
						<h5 class="font-600 dark-grey">
							<I18nVue t="SHAREHOLDERS_AND_INVESTORS.bank_structure.text12" />
							{{ item.email }}
						</h5>
					</div>

					<div class="app-collapse section-grey">
						<v-expansion-panels accordion>
							<v-expansion-panel>
								<v-expansion-panel-header>
									<div class="d-flex align-center">
										<user-icon size="1.2x" class="custom-class" />
										<h5 class="font-700 ml-2">
											<I18nVue
												t="SHAREHOLDERS_AND_INVESTORS.bank_structure.text13" />
										</h5>
									</div>
								</v-expansion-panel-header>
								<v-expansion-panel-content class="py-2">
									<template v-if="item.resume">
										<v-simple-table
											class="app-table app-table__border app-table__auto">
											<template v-slot:default>
												<tbody>
												<tr>
													<td width="350" class="py-4">
														<h5 class="font-600">
															<I18nVue
																t="SHAREHOLDERS_AND_INVESTORS.bank_structure.text14" />
														</h5>
													</td>
													<td class="py-4">
														<h5 class="font-600">
															<I18nVue
																:uz="item.resume.work_place_uz"
																:ru="item.resume.work_place_ru"
																:en="item.resume.work_place_en"
															/>
														</h5>
													</td>
												</tr>
												<tr>
													<td width="350" class="py-4">
														<h5 class="font-600">
															<I18nVue
																t="SHAREHOLDERS_AND_INVESTORS.bank_structure.text16" />
														</h5>
													</td>
													<td class="py-4">
														<h5 class="font-600">
															{{ item.resume.birth_year | filterDate }}
														</h5>
													</td>
												</tr>
												<tr>
													<td width="350" class="py-4">
														<h5 class="font-600">
															<I18nVue
																t="SHAREHOLDERS_AND_INVESTORS.bank_structure.text18" />
														</h5>
													</td>
													<td class="py-4">
														<h5 class="font-600">
															<I18nVue
																:uz="item.resume.birth_place_uz"
																:ru="item.resume.birth_place_ru"
																:en="item.resume.birth_place_en" />
														</h5>
													</td>
												</tr>
												<tr>
													<td width="350" class="py-4">
														<h5 class="font-600">
															{{ $t("LastCorrections.nationality") }}
														</h5>
													</td>
													<td class="py-4">
														<h5 class="font-600">
															<I18nVue
																:uz="item.resume.nationality_uz"
																:ru="item.resume.nationality_ru"
																:en="item.resume.nationality_en" />
														</h5>
													</td>
												</tr>
												<tr>
													<td width="350" class="py-4">
														<h5 class="font-600">
                              {{ $t("LastCorrections.education") }}
														</h5>
													</td>
													<td class="py-4">
														<h5 class="font-600">
                              <span v-if='$i18n.locale === "uz"' v-html="item.resume.education_uz" />
                              <span v-if='$i18n.locale === "ru"' v-html="item.resume.education_ru" />
                              <span v-if='$i18n.locale === "en"' v-html="item.resume.education_en" />
														</h5>
													</td>
												</tr>
												<tr>
													<td width="350" class="py-4">
														<h5 class="font-600">
                              {{ $t("LastCorrections.specialization") }}
														</h5>
													</td>
													<td class="py-4">
														<h5 class="font-600">
                              <span v-if='$i18n.locale === "uz"' v-html="item.resume.speciality_uz" />
                              <span v-if='$i18n.locale === "ru"' v-html="item.resume.speciality_ru" />
                              <span v-if='$i18n.locale === "en"' v-html="item.resume.speciality_en" />
														</h5>
													</td>
												</tr>
												<tr>
													<td width="350" class="py-4">
														<h5 class="font-600">
                              {{ $t("LastCorrections.experience_in_bank") }}
														</h5>
													</td>
													<td class="py-4">
														<template v-if="$i18n.locale === 'uz'">
															<h5 class="font-600">
																{{ item.resume.work_experience }} {{ $t("Credits.from") }}
															</h5>
														</template>

														<template v-if="$i18n.locale === 'ru'">
															<h5 class="font-600">
																{{ $t("Credits.from") }} {{ item.resume.work_experience }}
															</h5>
														</template>

														<template v-if="$i18n.locale === 'en'">
															<h5 class="font-600">
																{{ $t("Credits.from") }} {{ item.resume.work_experience }}
															</h5>
														</template>
													</td>
												</tr>

												<tr>
													<td width="350" class="py-4">
														<h5 class="font-600">
                              {{ $t("LastCorrections.in_position") }}
														</h5>
													</td>
													<td class="py-4">
														<template v-if="$i18n.locale === 'uz'">
															<h5 class="font-600">
																{{ item.resume.current_position_held_year }}
																{{ $t("Credits.from") }}
															</h5>
														</template>

														<template v-if="$i18n.locale === 'ru'">
															<h5 class="font-600">
																{{ $t("Credits.from") }}
																{{ item.resume.current_position_held_year }}
															</h5>
														</template>

														<template v-if="$i18n.locale === 'en'">
															<h5 class="font-600">
																{{ $t("Credits.from") }}
																{{ item.resume.current_position_held_year }}
															</h5>
														</template>
													</td>
												</tr>
												</tbody>
											</template>
										</v-simple-table>
									</template>
								</v-expansion-panel-content>
							</v-expansion-panel>
						</v-expansion-panels>
					</div>
				</div>
			</template>
		</v-col>

		<v-col md="6">
			<template v-for="item of newRestHalf">
				<div :key="item.id" class="credit-widget d-flex flex-column rounded-lg overflow-hidden mb-8">
					<div class="flex-1 pa-4 pa-sm-8">
						<h5>
							<I18nVue :uz="item.position_uz" :ru="item.position_ru"
							         :en="item.position_en" />
						</h5>
						<h2 class="font-600 dark-text mt-2 mb-4">
							<I18nVue :uz="item.full_name_uz" :ru="item.full_name_ru"
							         :en="item.full_name_en" />
						</h2>
						<h5 class="font-600 dark-grey mb-1">
							<I18nVue t="SHAREHOLDERS_AND_INVESTORS.bank_structure.text10" /> &nbsp;
							<a :href="`tel: ${item.phone}`" class="text-decoration-none font-700">
								{{ item.phone }}
							</a>
						</h5>
						<h5 class="font-600 dark-grey">
							<I18nVue t="SHAREHOLDERS_AND_INVESTORS.bank_structure.text12" />
							{{ item.email }}
						</h5>
					</div>

					<div class="app-collapse section-grey">
						<v-expansion-panels accordion>
							<v-expansion-panel>
								<v-expansion-panel-header>
									<div class="d-flex align-center">
										<user-icon size="1.2x" class="custom-class" />
										<h5 class="font-700 ml-2">
											<I18nVue
												t="SHAREHOLDERS_AND_INVESTORS.bank_structure.text13" />
										</h5>
									</div>
								</v-expansion-panel-header>
								<v-expansion-panel-content class="py-2">
									<template v-if="item.resume">
										<v-simple-table
											class="app-table app-table__border app-table__auto">
											<template v-slot:default>
												<tbody>
												<tr>
													<td width="350" class="py-4">
														<h5 class="font-600">
															<I18nVue
																t="SHAREHOLDERS_AND_INVESTORS.bank_structure.text14" />
														</h5>
													</td>
													<td class="py-4">
														<h5 class="font-600">
															<I18nVue
																:uz="item.resume.work_place_uz"
																:ru="item.resume.work_place_ru"
																:en="item.resume.work_place_en"
															/>
														</h5>
													</td>
												</tr>
												<tr>
													<td width="350" class="py-4">
														<h5 class="font-600">
															<I18nVue
																t="SHAREHOLDERS_AND_INVESTORS.bank_structure.text16" />
														</h5>
													</td>
													<td class="py-4">
														<h5 class="font-600">
															{{ item.resume.birth_year | filterDate }}
														</h5>
													</td>
												</tr>
												<tr>
													<td width="350" class="py-4">
														<h5 class="font-600">
															<I18nVue
																t="SHAREHOLDERS_AND_INVESTORS.bank_structure.text18" />
														</h5>
													</td>
													<td class="py-4">
														<h5 class="font-600">
															<I18nVue
																:uz="item.resume.birth_place_uz"
																:ru="item.resume.birth_place_ru"
																:en="item.resume.birth_place_en" />
														</h5>
													</td>
												</tr>
												<tr>
													<td width="350" class="py-4">
														<h5 class="font-600">
                              {{ $t("LastCorrections.nationality") }}
														</h5>
													</td>
													<td class="py-4">
														<h5 class="font-600">
															<I18nVue
																:uz="item.resume.nationality_uz"
																:ru="item.resume.nationality_ru"
																:en="item.resume.nationality_en" />
														</h5>
													</td>
												</tr>
												<tr>
													<td width="350" class="py-4">
														<h5 class="font-600">
                              {{ $t("LastCorrections.education") }}
														</h5>
													</td>
													<td class="py-4">
														<h5 class="font-600">
                              <span v-if='$i18n.locale === "uz"' v-html="item.resume.education_uz" />
                              <span v-if='$i18n.locale === "ru"' v-html="item.resume.education_ru" />
                              <span v-if='$i18n.locale === "en"' v-html="item.resume.education_en" />
														</h5>
													</td>
												</tr>
												<tr>
													<td width="350" class="py-4">
														<h5 class="font-600">
                              {{ $t("LastCorrections.specialization") }}
														</h5>
													</td>
													<td class="py-4">
														<h5 class="font-600">
                              <span v-if='$i18n.locale === "uz"' v-html="item.resume.speciality_uz" />
                              <span v-if='$i18n.locale === "ru"' v-html="item.resume.speciality_ru" />
                              <span v-if='$i18n.locale === "en"' v-html="item.resume.speciality_en" />
														</h5>
													</td>
												</tr>
												<tr>
													<td width="350" class="py-4">
														<h5 class="font-600">
                              {{ $t("LastCorrections.experience_in_bank") }}
														</h5>
													</td>
													<td class="py-4">
														<template v-if="$i18n.locale === 'uz'">
															<h5 class="font-600">
																{{ item.resume.work_experience }} {{ $t("Credits.from") }}
															</h5>
														</template>

														<template v-if="$i18n.locale === 'ru'">
															<h5 class="font-600">
																{{ $t("Credits.from") }} {{ item.resume.work_experience }}
															</h5>
														</template>

														<template v-if="$i18n.locale === 'en'">
															<h5 class="font-600">
																{{ $t("Credits.from") }} {{ item.resume.work_experience }}
															</h5>
														</template>
													</td>
												</tr>

												<tr>
													<td width="350" class="py-4">
														<h5 class="font-600">
                              {{ $t("LastCorrections.in_position") }}
														</h5>
													</td>
													<td class="py-4">
														<template v-if="$i18n.locale === 'uz'">
															<h5 class="font-600">
																{{ item.resume.current_position_held_year }}
																{{ $t("Credits.from") }}
															</h5>
														</template>

														<template v-if="$i18n.locale === 'ru'">
															<h5 class="font-600">
																{{ $t("Credits.from") }}
																{{ item.resume.current_position_held_year }}
															</h5>
														</template>

														<template v-if="$i18n.locale === 'en'">
															<h5 class="font-600">
																{{ $t("Credits.from") }}
																{{ item.resume.current_position_held_year }}
															</h5>
														</template>
													</td>
												</tr>
												</tbody>
											</template>
										</v-simple-table>
									</template>
								</v-expansion-panel-content>
							</v-expansion-panel>
						</v-expansion-panels>
					</div>
				</div>
			</template>
		</v-col>
	</v-row>
</template>

<script>
import I18nVue from "@/I18nVue";
import { UserIcon } from "vue-feather-icons";

export default {
	name: "BankBoard",
  data() {
	  return {
	    boardList: [],
	    newHalf: [],
      newRestHalf: [],
    }
  },
	components: {
		I18nVue,
		UserIcon
	},
  mounted() {
	  this.getList();
  },
  methods: {
    getList() {
      this.$http.get("/1/bank/structure/", {
        params: {
          type: 'bank_board'
        }
      })
          .then(({ data }) => {
            this.boardList = data.results;

            this.boardList.sort((a, b) => (a.rank > b.rank ? 1 : -1));

            this.even(this.boardList);
          });
    },
	  even(a) {
      for (let i = 0; i < a.length; i++) {
        if(i % 2 === 0) { // index is even
          this.newHalf.push(a[i]);
        }else {
          this.newRestHalf.push(a[i]);
        }
      }
    },
  }
};
</script>

<style>

</style>
