<template>
	<div class="online-polls-view">
		<v-container>
			<div class="online-polls-content">
				<template v-for="item in pollList">
					<div :key="item.id" class="credit-widget pa-4 pa-sm-6 rounded-lg overflow-hidden no-shadow mb-8">
						<I18nVue
							:uz="item.name_uz"
							:ru="item.name_ru"
							:en="item.name_en"
							classes="text--h3 font-600"
						/>

						<div class="d-sm-flex align-center mt-3">
							<v-alert type="info" text class="py-3 px-4 mr-sm-4" icon="mdi-calendar">
								<span class="font-600 ml-n1">{{ item | filterDate }}</span>
							</v-alert>

							<v-alert type="warning" text class="py-3 px-4" icon="mdi-vote-outline">
								<span class="font-600 ml-n1">{{ $t("OnlinePolls.votes") }}: {{ item.count }}</span>
							</v-alert>
						</div>

						<h5 class="font-600">{{ $t("OnlinePolls.results") }}</h5>

						<template v-for="progress in item.poll_options">
							<v-progress-linear
								:key="progress.id"
								color="primary"
								height="28"
								:value="item.count > 0 ? Math.floor((progress.count / item.count) * 100) : 0"
								rounded
								class="app-polls mt-3"
							>
								<template v-slot:default="{ value }">
									<I18nVue
										:uz="progress.name_uz"
										:ru="progress.name_ru"
										:en="progress.name_en"
										classes="font-600 text-left text-white"
									>
										<template v-slot:prefix>
											<span class="d-inline-block ml-2">{{ item.count > 0 ? Math.floor((progress.count / item.count) * 100) : 0 }} %</span>
										</template>
									</I18nVue>
								</template>
							</v-progress-linear>
						</template>

						<v-btn
							@click="showVoteModal(item)"
							depressed
							color="primary"
							min-width="150"
							min-height="44"
							class="mt-7"
						>
                        <span class="font-700 text-white">
                            {{ $t("OnlinePolls.to_vote") }}
                        </span>
						</v-btn>
					</div>
				</template>
			</div>

			<transition name="fade">
				<template v-if="show">
					<div class="polls-modal-wrap p-fixed w-100 h-100 d-flex align-center justify-center">
						<div class="modal--overlay p-fixed w-100 h-100" @click="show = !show"></div>
						<div class="modal--content p-relative bg-white rounded pa-6 ma-4 w-100">
							<I18nVue
								:uz="selectedOnePoll.name_uz"
								:ru="selectedOnePoll.name_ru"
								:en="selectedOnePoll.name_en"
								classes="text--h3 font-600"
							/>

							<v-radio-group class="app-polls-radio" v-model="pollSelected" row>
								<v-radio
									v-for="poll in selectedOnePoll.poll_options"
									:key="poll.id"
									:value="poll.id"
								>
									<template v-slot:label>
										<I18nVue
											:uz="poll.name_uz"
											:ru="poll.name_ru"
											:en="poll.name_en"
											classes="font-600 dark-text"
										/>
									</template>
								</v-radio>
							</v-radio-group>

							<v-btn
								@click="sendVote"
								depressed
								color="primary"
								min-width="150"
								min-height="44"
								class="mt-2"
							>
		                        <span class="font-700 text-white">
		                            {{ $t("LastCorrections.send") }}
		                        </span>
							</v-btn>
						</div>
					</div>
				</template>
			</transition>
		</v-container>
	</div>
</template>

<script>
import I18nVue from "@/I18nVue";

export default {
	name: "index",
	components: {
		I18nVue
	},
	data() {
		return {
			show: false,
			pollSelected: null,
			pollList: [],
			selectedOnePoll: {}
		}
	},
	mounted() {
		this.getAll()
	},
	methods: {
		/*
		*
		* */
		getAll() {
			this.$http.get('/1/poll/')
			.then(({ data }) => {
				this.pollList = data.results
			})
		},

		/*
		*
		* */
		showVoteModal(item) {
			this.show = !this.show
			this.selectedOnePoll = item
		},

		/*
		*
		* */
		sendVote() {
			this.$http.put(`/8/poll/${this.selectedOnePoll.id}/rate/${this.pollSelected}/`)
			.then(() => {
				this.getAll()

				this.show = !this.show
				this.$toast.success(`So'rovnoma yuborildi`);
			})
			.catch(() => {
				this.$toast.error(`Yuborishda xatolik`);
			})
		}
	}
};
</script>

<style>

</style>
