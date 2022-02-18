<template>
	<div class="status-application-view">
		<v-container>
			<v-row>
				<v-col md="5">
					<div class="app-form-group mb-10">
						<h4 class="font-600 dark-text">
							<I18nVue t="Services.CheckApplication.phone" />
						</h4>

						<v-divider class="mt-3 mb-7" style="border-color: rgba(var(--border-color), 1)" />

						<v-text-field
							v-model="$v.phone.$model"
							:error="$v.phone.$error"
							v-mask="'+998 (##) ### ## ##'"
							outlined
							hide-details
							:placeholder="$t('Services.CheckApplication.phone')"
						>
						</v-text-field>
					</div>

					<v-btn @click="send" color="danger" depressed rounded min-height="50" min-width="192">
                        <span class="font-700 text-white">
                            <I18nVue t="Services.CheckApplication.check" />
                        </span>
					</v-btn>
				</v-col>

				<v-spacer />

				<v-col v-if="layout" md="6" align-self="center">
					<template v-if="applicationList.length">
						<div class="app-form-group mb-10">
							<h4 class="font-600 dark-text">
								<I18nVue t="Services.CheckApplication.list" />
								:
							</h4>

							<v-divider class="mt-3 mb-4" style="border-color: rgba(var(--border-color), 1)" />

							<h3 class="font-600 dark-text mb-2">
								<I18nVue t="Services.CheckApplication.query_status" />
								:
							</h3>

							<template v-for="item in applicationList">
								<v-alert :key="item.created_date" text color="info">
									<h4 class="font-600 dark-text mb-1">
										<I18nVue t="Services.CheckApplication.sent_time" />
										:
										<span class="font-700">{{ item.created_date | filterDateAndTime }}</span>
									</h4>

									<h4 class="font-600 dark-text mb-1">
										<I18nVue t="Services.CheckApplication.type" />
										:

										<template v-if='item.type === "plastic"'>
											<span class="font-700" v-if='$i18n.locale === "en"'>Open card</span>
											<span class="font-700" v-if='$i18n.locale === "ru"'>Открыть карту</span>
											<span class="font-700" v-if='$i18n.locale === "uz"'>Karta ochish</span>
										</template>

										<template v-else-if='item.type === "deposit"'>
											<span class="font-700" v-if='$i18n.locale === "en"'>Open deposit</span>
											<span class="font-700" v-if='$i18n.locale === "ru"'>Открыть депозит</span>
											<span class="font-700" v-if='$i18n.locale === "uz"'>Omonat ochish</span>
										</template>

										<template v-else>
											<span class="font-700" v-if='$i18n.locale === "en"'>Appeal</span>
											<span class="font-700" v-if='$i18n.locale === "ru"'>Обращаться</span>
											<span class="font-700" v-if='$i18n.locale === "uz"'>Murojaat</span>
										</template>
									</h4>

									<h4 class="font-600 dark-text">
										<I18nVue t="Services.CheckApplication.status" />
										:

										<template v-if="item.status">
											<span class="font-700" v-if='$i18n.locale === "en"'>{{ item.status.name_en
												}}</span>
											<span class="font-700" v-if='$i18n.locale === "ru"'>{{ item.status.name_ru
												}}</span>
											<span class="font-700" v-if='$i18n.locale === "uz"'>{{ item.status.name_uz
												}}</span>
										</template>

										<template v-else>
											<span class="font-700" v-if='$i18n.locale === "en"'>Status not found</span>
											<span class="font-700" v-if='$i18n.locale === "ru"'>Статус не нейден</span>
											<span class="font-700" v-if='$i18n.locale === "uz"'>Status topilmadi</span>
										</template>
									</h4>
								</v-alert>
							</template>
						</div>
					</template>

					<template v-else>
						<h2 class="font-600 dark-text text-center">
							<I18nVue t="Services.CheckApplication.not_found" />
							:(
						</h2>
					</template>
				</v-col>
			</v-row>
		</v-container>
	</div>
</template>

<script>
import { ChevronDownIcon } from "vue-feather-icons";
import { required } from "vuelidate/lib/validators";
import I18nVue from "@/I18nVue";

export default {
	name: "AppStatusApplication",
	components: {
		ChevronDownIcon,
		I18nVue
	},
	data() {
		return {
			phone: "",
			sendPhone: "",
			layout: false,
			applicationList: []
		};
	},
	validations: {
		phone: { required }
	},
	methods: {
		/*
		 * Отправка формы
		 * */
		send() {
			this.$v.$touch();

			if (this.$v.$invalid) {
				return;
			}

			// Удаляем плюс и пробелы из номера
			this.sendPhone = this.phone.replace(/\D/g, "");

			this.$http.get(`/application/status/${this.sendPhone}/`).then(({ data }) => {
				this.layout = true;

				this.applicationList = data.results;
			});
		}
	}
};
</script>

<style></style>
