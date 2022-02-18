<template>
	<v-row>
		<v-col md="6" v-for="item of list" :key="item.id">
			<div class="credit-widget rounded-lg overflow-hidden mr-4 h-100">
				<div class="pa-8 pb-6">
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
														{{ item.resume.birth_year }}
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
														Millati
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
														Ma’lumot
													</h5>
												</td>
												<td class="py-4">
													<h5 class="font-600">
														<I18nVue
															:uz="item.resume.education_uz"
															:ru="item.resume.education_ru"
															:en="item.resume.education_en" />
													</h5>
												</td>
											</tr>
											<tr>
												<td width="350" class="py-4">
													<h5 class="font-600">
														Mutaxassisligi
													</h5>
												</td>
												<td class="py-4">
													<h5 class="font-600">
														<I18nVue
															:uz="item.resume.speciality_uz"
															:ru="item.resume.speciality_ru"
															:en="item.resume.speciality_en" />
													</h5>
												</td>
											</tr>
											<tr>
												<td width="350" class="py-4">
													<h5 class="font-600">
														Bank tizimida ish staji
													</h5>
												</td>
												<td class="py-4">
													<template v-if="$i18n.locale === 'uz'">
														<h5 class="font-600">
															{{ item.resume.work_experience }} {{ $t('Credits.from') }}
														</h5>
													</template>

													<template v-if="$i18n.locale === 'ru'">
														<h5 class="font-600">
															{{ $t('Credits.from') }} {{ item.resume.work_experience }}
														</h5>
													</template>

													<template v-if="$i18n.locale === 'en'">
														<h5 class="font-600">
															{{ $t('Credits.from') }} {{ item.resume.work_experience }}
														</h5>
													</template>
												</td>
											</tr>

											<tr>
												<td width="350" class="py-4">
													<h5 class="font-600">
														Egallab turgan lavozimida
													</h5>
												</td>
												<td class="py-4">
													<template v-if="$i18n.locale === 'uz'">
														<h5 class="font-600">
															{{ item.resume.current_position_held_year }} {{ $t('Credits.from') }}
														</h5>
													</template>

													<template v-if="$i18n.locale === 'ru'">
														<h5 class="font-600">
															{{ $t('Credits.from') }} {{ item.resume.current_position_held_year }}
														</h5>
													</template>

													<template v-if="$i18n.locale === 'en'">
														<h5 class="font-600">
															{{ $t('Credits.from') }} {{ item.resume.current_position_held_year }}
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
		</v-col>
	</v-row>
</template>

<script>
import I18nVue from "@/I18nVue";
import { UserIcon } from "vue-feather-icons";

export default {
	name: "BankBoard",
	props: {
		list: {
			type: Array,
			default: () => []
		}
	},
	components: {
		I18nVue,
		UserIcon
	}
};
</script>

<style>

</style>
