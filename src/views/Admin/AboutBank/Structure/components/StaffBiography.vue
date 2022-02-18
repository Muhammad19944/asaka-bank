<template>
	<div class="form-wrap-body">
		<v-row>
			<template v-if="$store.state.isStaffBankManagement !== 'bank_board'">
				<v-col md="12">
					<v-alert type="error">
						<I18nVue classes="font-700 text-small" t="Dashboard.AboutBank.bOnly" />
					</v-alert>
				</v-col>
			</template>

			<v-col md="4">
				<div class="app-form-group app-form-group__small no-shadow mb-2">
					<h5 class="font-600 dark-text mb-1">
						<I18nVue classes="font-700 text-small" t="Dashboard.AboutBank.work_place" />
						(UZ)
					</h5>

					<v-text-field
						v-model="$store.state.BIOGRAPHY_MODEL.work_place_uz"
						:readonly="TYPE === 'Read' || !(!!$store.state.CREATED_STAFF_ID && !!$store.state.isStaffBankManagement)"
						outlined
						hide-details
					>
					</v-text-field>
				</div>
			</v-col>

			<v-col md="4">
				<div class="app-form-group app-form-group__small no-shadow mb-2">
					<h5 class="font-600 dark-text mb-1">
						<I18nVue classes="font-700 text-small" t="Dashboard.AboutBank.work_place" />
						(RU)
					</h5>

					<v-text-field
						v-model="$store.state.BIOGRAPHY_MODEL.work_place_ru"
						:readonly="TYPE === 'Read' || !(!!$store.state.CREATED_STAFF_ID && !!$store.state.isStaffBankManagement)"
						outlined
						hide-details
					>
					</v-text-field>
				</div>
			</v-col>

			<v-col md="4">
				<div class="app-form-group app-form-group__small no-shadow mb-2">
					<h5 class="font-600 dark-text mb-1">
						<I18nVue classes="font-700 text-small" t="Dashboard.AboutBank.work_place" />
						(EN)
					</h5>

					<v-text-field
						v-model="$store.state.BIOGRAPHY_MODEL.work_place_en"
						:readonly="TYPE === 'Read' || !(!!$store.state.CREATED_STAFF_ID && !!$store.state.isStaffBankManagement)"
						outlined
						hide-details
					/>
				</div>
			</v-col>

			<v-col md="4">
				<div class="app-form-group app-form-group__small no-shadow mb-2">
					<h5 class="font-600 dark-text mb-1">
						<I18nVue classes="font-700 text-small" t="Dashboard.AboutBank.birth_place" />
						(UZ)
					</h5>

					<v-text-field
						v-model="$store.state.BIOGRAPHY_MODEL.birth_place_uz"
						:readonly="TYPE === 'Read' || !(!!$store.state.CREATED_STAFF_ID && !!$store.state.isStaffBankManagement)"
						outlined
						hide-details
					/>
				</div>
			</v-col>

			<v-col md="4">
				<div class="app-form-group app-form-group__small no-shadow mb-2">
					<h5 class="font-600 dark-text mb-1">
						<I18nVue classes="font-700 text-small" t="Dashboard.AboutBank.birth_place" />
						(RU)
					</h5>

					<v-text-field
						v-model="$store.state.BIOGRAPHY_MODEL.birth_place_ru"
						:readonly="TYPE === 'Read' || !(!!$store.state.CREATED_STAFF_ID && !!$store.state.isStaffBankManagement)"
						outlined
						hide-details
					/>
				</div>
			</v-col>

			<v-col md="4">
				<div class="app-form-group app-form-group__small no-shadow mb-2">
					<h5 class="font-600 dark-text mb-1">
						<I18nVue classes="font-700 text-small" t="Dashboard.AboutBank.birth_place" />
						(EN)
					</h5>

					<v-text-field
						v-model="$store.state.BIOGRAPHY_MODEL.birth_place_en"
						:readonly="TYPE === 'Read' || !(!!$store.state.CREATED_STAFF_ID && !!$store.state.isStaffBankManagement)"
						outlined
						hide-details
					/>
				</div>
			</v-col>

			<v-col md="4">
				<div class="app-form-group app-form-group__small no-shadow mb-2">
					<h5 class="font-600 dark-text mb-1">
						<I18nVue classes="font-700 text-small" t="Dashboard.AboutBank.nationality" />
						(UZ)
					</h5>

					<v-text-field
						v-model="$store.state.BIOGRAPHY_MODEL.nationality_uz"
						:readonly="TYPE === 'Read' || !(!!$store.state.CREATED_STAFF_ID && !!$store.state.isStaffBankManagement)"
						outlined
						hide-details
					/>
				</div>
			</v-col>

			<v-col md="4">
				<div class="app-form-group app-form-group__small no-shadow mb-2">
					<h5 class="font-600 dark-text mb-1">
						<I18nVue classes="font-700 text-small" t="Dashboard.AboutBank.nationality" />
						(RU)
					</h5>
					<v-text-field
						v-model="$store.state.BIOGRAPHY_MODEL.nationality_ru"
						:readonly="TYPE === 'Read' || !(!!$store.state.CREATED_STAFF_ID && !!$store.state.isStaffBankManagement)"
						outlined
						hide-details
					/>
				</div>
			</v-col>

			<v-col md="4">
				<div class="app-form-group app-form-group__small no-shadow mb-2">
					<h5 class="font-600 dark-text mb-1">
						<I18nVue classes="font-700 text-small" t="Dashboard.AboutBank.nationality" />
						(EN)
					</h5>

					<v-text-field
						v-model="$store.state.BIOGRAPHY_MODEL.nationality_en"
						:readonly="TYPE === 'Read' || !(!!$store.state.CREATED_STAFF_ID && !!$store.state.isStaffBankManagement)"
						outlined
						hide-details
					/>
				</div>
			</v-col>




      <v-col md="12">
        <div class="admin-tabs mb-1">
          <v-tabs
              height="56"
              v-model="tab1"
              hide-slider
              class="mb-0 mb-5"
          >
            <v-tab class="transition-ease-in-out">
              <h5 class="font-600 dark-text text-transform-reset no-spacing px-2">
                <I18nVue classes="font-700 text-small" t="Dashboard.AboutBank.education" />
                (UZ)
              </h5>
            </v-tab>
            <v-tab class="transition-ease-in-out">
              <h5 class="font-600 dark-text text-transform-reset no-spacing px-2">
                <I18nVue classes="font-700 text-small" t="Dashboard.AboutBank.education" />
                (RU)
              </h5>
            </v-tab>
            <v-tab class="transition-ease-in-out">
              <h5 class="font-600 dark-text text-transform-reset no-spacing px-2">
                <I18nVue classes="font-700 text-small" t="Dashboard.AboutBank.education" />
                (EN)
              </h5>
            </v-tab>
          </v-tabs>
          <v-tabs-items v-model="tab1">
            <v-tab-item>
              <div class="app-editor">
                <quill-editor
                    v-model="$store.state.BIOGRAPHY_MODEL.education_uz"
                    :disabled="TYPE === 'Read'"
                >
                </quill-editor>
              </div>
            </v-tab-item>

            <v-tab-item>
              <div class="app-editor">
                <quill-editor
                    v-model="$store.state.BIOGRAPHY_MODEL.education_ru"
                    :disabled="TYPE === 'Read'"
                >
                </quill-editor>
              </div>
            </v-tab-item>
            <v-tab-item>
              <div class="app-editor">
                <quill-editor
                    v-model="$store.state.BIOGRAPHY_MODEL.education_en"
                    :disabled="TYPE === 'Read'"
                >
                </quill-editor>
              </div>
            </v-tab-item>
          </v-tabs-items>
        </div>
      </v-col>

      <v-col md="12">
        <div class="admin-tabs mb-1">
          <v-tabs
              height="56"
              v-model="tab2"
              hide-slider
              class="mb-0 mb-5"
          >
            <v-tab class="transition-ease-in-out">
              <h5 class="font-600 dark-text text-transform-reset no-spacing px-2">
                <I18nVue classes="font-700 text-small" t="Dashboard.AboutBank.speciality" />
                (UZ)
              </h5>
            </v-tab>
            <v-tab class="transition-ease-in-out">
              <h5 class="font-600 dark-text text-transform-reset no-spacing px-2">
                <I18nVue classes="font-700 text-small" t="Dashboard.AboutBank.speciality" />
                (RU)
              </h5>
            </v-tab>
            <v-tab class="transition-ease-in-out">
              <h5 class="font-600 dark-text text-transform-reset no-spacing px-2">
                <I18nVue classes="font-700 text-small" t="Dashboard.AboutBank.speciality" />
                (EN)
              </h5>
            </v-tab>
          </v-tabs>
          <v-tabs-items v-model="tab2">
            <v-tab-item>
              <div class="app-editor">
                <quill-editor
                    v-model="$store.state.BIOGRAPHY_MODEL.speciality_uz"
                    :disabled="TYPE === 'Read'"
                >
                </quill-editor>
              </div>
            </v-tab-item>

            <v-tab-item>
              <div class="app-editor">
                <quill-editor
                    v-model="$store.state.BIOGRAPHY_MODEL.speciality_ru"
                    :disabled="TYPE === 'Read'"
                >
                </quill-editor>
              </div>
            </v-tab-item>
            <v-tab-item>
              <div class="app-editor">
                <quill-editor
                    v-model="$store.state.BIOGRAPHY_MODEL.speciality_en"
                    :disabled="TYPE === 'Read'"
                >
                </quill-editor>
              </div>
            </v-tab-item>
          </v-tabs-items>
        </div>
      </v-col>

      <!-- TEXT FIELDS FOR EDUCATION -->
			<template>
<!--        <v-col md="4">-->
<!--          <div class="app-form-group app-form-group__small no-shadow mb-2">-->
<!--            <h5 class="font-600 dark-text mb-1">-->
<!--              <I18nVue classes="font-700 text-small" t="Dashboard.AboutBank.education" />-->
<!--              (UZ)-->
<!--            </h5>-->

<!--            <v-text-field-->
<!--                v-model="$store.state.BIOGRAPHY_MODEL.education_uz"-->
<!--                :readonly="TYPE === 'Read' || !(!!$store.state.CREATED_STAFF_ID && !!$store.state.isStaffBankManagement)"-->
<!--                outlined-->
<!--                hide-details-->
<!--            />-->
<!--          </div>-->
<!--        </v-col>-->

<!--        <v-col md="4">-->
<!--          <div class="app-form-group app-form-group__small no-shadow mb-2">-->
<!--            <h5 class="font-600 dark-text mb-1">-->
<!--              <I18nVue classes="font-700 text-small" t="Dashboard.AboutBank.education" />-->
<!--              (RU)-->
<!--            </h5>-->

<!--            <v-text-field-->
<!--                v-model="$store.state.BIOGRAPHY_MODEL.education_ru"-->
<!--                :readonly="TYPE === 'Read' || !(!!$store.state.CREATED_STAFF_ID && !!$store.state.isStaffBankManagement)"-->
<!--                outlined-->
<!--                hide-details-->
<!--            />-->
<!--          </div>-->
<!--        </v-col>-->

<!--        <v-col md="4">-->
<!--          <div class="app-form-group app-form-group__small no-shadow mb-2">-->
<!--            <h5 class="font-600 dark-text mb-1">-->
<!--              <I18nVue classes="font-700 text-small" t="Dashboard.AboutBank.education" />-->
<!--              (EN)-->
<!--            </h5>-->

<!--            <v-text-field-->
<!--                v-model="$store.state.BIOGRAPHY_MODEL.education_en"-->
<!--                :readonly="TYPE === 'Read' || !(!!$store.state.CREATED_STAFF_ID && !!$store.state.isStaffBankManagement)"-->
<!--                outlined-->
<!--                hide-details-->
<!--            />-->
<!--          </div>-->
<!--        </v-col>-->
      </template>

      <!-- TEXT FIELDS FOR SPECIALITY -->
			<template>
<!--        <v-col md="4">-->
<!--          <div class="app-form-group app-form-group__small no-shadow mb-2">-->
<!--            <h5 class="font-600 dark-text mb-1">-->
<!--              <I18nVue classes="font-700 text-small" t="Dashboard.AboutBank.speciality" />-->
<!--              (UZ)-->
<!--            </h5>-->

<!--            <v-text-field-->
<!--                v-model="$store.state.BIOGRAPHY_MODEL.speciality_uz"-->
<!--                :readonly="TYPE === 'Read' || !(!!$store.state.CREATED_STAFF_ID && !!$store.state.isStaffBankManagement)"-->
<!--                outlined-->
<!--                hide-details-->
<!--            />-->
<!--          </div>-->
<!--        </v-col>-->

<!--        <v-col md="4">-->
<!--          <div class="app-form-group app-form-group__small no-shadow mb-2">-->
<!--            <h5 class="font-600 dark-text mb-1">-->
<!--              <I18nVue classes="font-700 text-small" t="Dashboard.AboutBank.speciality" />-->
<!--              (RU)-->
<!--            </h5>-->

<!--            <v-text-field-->
<!--                v-model="$store.state.BIOGRAPHY_MODEL.speciality_ru"-->
<!--                :readonly="TYPE === 'Read' || !(!!$store.state.CREATED_STAFF_ID && !!$store.state.isStaffBankManagement)"-->
<!--                outlined-->
<!--                hide-details-->
<!--            />-->
<!--          </div>-->
<!--        </v-col>-->

<!--        <v-col md="4">-->
<!--          <div class="app-form-group app-form-group__small no-shadow mb-2">-->
<!--            <h5 class="font-600 dark-text mb-1">-->
<!--              <I18nVue classes="font-700 text-small" t="Dashboard.AboutBank.speciality" />-->
<!--              (EN)-->
<!--            </h5>-->

<!--            <v-text-field-->
<!--                v-model="$store.state.BIOGRAPHY_MODEL.speciality_en"-->
<!--                :readonly="TYPE === 'Read' || !(!!$store.state.CREATED_STAFF_ID && !!$store.state.isStaffBankManagement)"-->
<!--                outlined-->
<!--                hide-details-->
<!--            >-->
<!--            </v-text-field>-->
<!--          </div>-->
<!--        </v-col>-->
      </template>

			<v-col md="4">
				<div class="app-form-group app-form-group__small no-shadow mb-2">
					<h5 class="font-600 dark-text mb-1">
						<I18nVue t="Dashboard.AboutBank.birth_year" />
					</h5>

					<v-dialog
						ref="dialog"
						:disabled="TYPE === 'Read' || !(!!$store.state.CREATED_STAFF_ID && !!$store.state.isStaffBankManagement)"
						v-model="birthModal"
						:return-value.sync="$store.state.BIOGRAPHY_MODEL.birth_year"
						width="290px"
					>
						<template v-slot:activator="{ on, attrs }">
							<v-text-field
								v-model="$store.state.BIOGRAPHY_MODEL.birth_year"
								:readonly="TYPE === 'Read' || !(!!$store.state.CREATED_STAFF_ID && !!$store.state.isStaffBankManagement)"
								outlined
								hide-details
								append-icon="mdi-calendar"
								v-bind="attrs"
								v-on="on"
							/>
						</template>
						<v-date-picker
							v-model="$store.state.BIOGRAPHY_MODEL.birth_year"
							scrollable
						>
							<v-spacer/>
							<v-btn
								text
								color="primary"
								@click="birthModal = false"
							>
								Cancel
							</v-btn>
							<v-btn
								text
								color="primary"
								@click="$refs.dialog.save($store.state.BIOGRAPHY_MODEL.birth_year)"
							>
								OK
							</v-btn>
						</v-date-picker>
					</v-dialog>
				</div>
			</v-col>

			<v-col md="4">
				<div class="app-form-group app-form-group__small no-shadow mb-2">
					<h5 class="font-600 dark-text mb-1">
						<I18nVue t="Dashboard.AboutBank.work_experience" />
					</h5>

					<v-text-field
						v-model="$store.state.BIOGRAPHY_MODEL.work_experience"
						:readonly="TYPE === 'Read' || !(!!$store.state.CREATED_STAFF_ID && !!$store.state.isStaffBankManagement)"
						outlined
						hide-details
					/>
				</div>
			</v-col>

			<v-col md="4">
				<div class="app-form-group app-form-group__small no-shadow mb-2">
					<h5 class="font-600 dark-text mb-1">
						<I18nVue t="Dashboard.AboutBank.current_position_held_year" />
					</h5>

					<v-text-field
						v-model="$store.state.BIOGRAPHY_MODEL.current_position_held_year"
						:readonly="TYPE === 'Read' || !(!!$store.state.CREATED_STAFF_ID && !!$store.state.isStaffBankManagement)"
						outlined
						hide-details
					>
					</v-text-field>
				</div>
			</v-col>
		</v-row>

		<template v-if="TYPE !== 'Create'">
			<v-row>
				<v-col md="12" class="mt-2">
					<go-back-button />

					<template
						v-if="TYPE !== 'Read' && (!!$store.state.CREATED_STAFF_ID && !!$store.state.isStaffBankManagement)">
						<template v-if="$store.state.HAS_STAFF_RESUME">
							<send-button
								@emit:up="update"
								:text="$t('Dashboard.update')"
							/>
						</template>

						<template v-else>
							<send-button
								@emit:up="send"
								:text="$t('Dashboard.add_new')"
							/>
						</template>
					</template>
				</v-col>
			</v-row>
		</template>

		<template v-else>
			<v-row>
				<v-col md="12" class="mt-5">
					<go-back-button />
					<template v-if="(!!$store.state.CREATED_STAFF_ID && !!$store.state.isStaffBankManagement)">
						<send-button @emit:up="send" :text="$t('Dashboard.add_new')" />
					</template>
				</v-col>
			</v-row>
		</template>
	</div>
</template>

<script>
	import SendButton from "../../../BaseComponents/SendButton";
	import GoBackButton from "../../../BaseComponents/GoBackButton";
	import { ChevronDownIcon } from "vue-feather-icons";
	import I18nVue from "../../../../../I18nVue";

	export default {
		name: "StaffBiography",
		props: {
			TYPE: {
				type: String,
				default: ""
			}
		},
		components: {
			I18nVue,
			SendButton,
			GoBackButton,
			ChevronDownIcon
		},
		data() {
			return {
				birthModal: false,
        tab1: null,
        tab2:null
			};
		},
		mounted() {
			if (this.$route.params.id) {
				this.getOne();
			}
		},
		methods: {
			/*
			*
			* */
			send() {
				this.$store.state.BIOGRAPHY_MODEL.structure = this.$store.state.CREATED_STAFF_ID;

				this.$http
					.post(`/${this.$store.state.auth.COMPANY_ID}/biography/`, this.$store.state.BIOGRAPHY_MODEL)
					.then(({ data }) => {
						this.$toast.success(this.$t("Dashboard.n"));

						this.$store.state.CREATED_STAFF_BIOGRAPHY_ID = data.id;
						this.$store.state.HAS_STAFF_RESUME = true;

						setTimeout(() => {
							this.$router.push({ name: "DashboardStructureList" });
						}, 2000);
					})
					.catch(() => {
						this.$toast.error(this.$t("Dashboard.e"));
					});
			},

			/*
			*
			* */
			update() {
				this.$store.state.BIOGRAPHY_MODEL.structure = this.$route.params.id;


        this.$http
					.put(`/${this.$store.state.auth.COMPANY_ID}/biography/${this.$store.state.CREATED_STAFF_BIOGRAPHY_ID}`, this.$store.state.BIOGRAPHY_MODEL)
					.then(({ data }) => {
						this.$toast.success(this.$t("Dashboard.n"));

						this.$store.state.CREATED_STAFF_BIOGRAPHY_ID = data.id;
						this.$store.state.HAS_STAFF_RESUME = true;

						setTimeout(() => {
							this.$router.push({ name: "DashboardStructureList" });
						}, 2000);
					})
					.catch(() => {
						this.$toast.error(this.$t("Dashboard.e"));
					});
			},

			/*
			*
			* */
			getOne() {
				this.$http
					.post(`/${this.$store.state.auth.COMPANY_ID}/biography/${this.$store.state.CREATED_STAFF_BIOGRAPHY_ID}`)
					.then(({ data }) => {
						this.$store.state.BIOGRAPHY_MODEL = data;
					});
			}
		}
	};
</script>
