<template>
	<aside class="widget-view rounded py-4 px-5 bg-white">
		<div class="widget-search p-relative">
			<input
				v-model="search"
				type="text"
				placeholder="Search here..."
				class="border-all rounded py-2 pl-3 pr-8 d-block w-100 outline-transparent font-600"
			/>
			<search-icon size="1x" class="p-absolute" />
		</div>

		<div class="widget-block mt-10">
			<h6 class="font-600 text-uppercase font-700 text-13 mb-3">{{ $t("Dashboard.recent_posts") }}</h6>

			<template v-for="item in newsList">
				<v-row>
					<v-col md="4">
						<router-link
							:to="{ name: 'NewsShow', params: { id: item.id } }"
							v-slot="{ href }"
							custom
							class="text-decoration-none d-block border-all pa-2 rounded"
						>
							<a :href="href" target="_blank" rel="noopener noreferrer">
								<v-img
									lazy-src="https://picsum.photos/id/11/10/6"
									height="60"
									width="80"
									src="/images/logo.svg"
								></v-img>
							</a>
						</router-link>
					</v-col>
					<v-col md="8">
						<router-link
							:to="{ name: 'NewsShow', params: { id: item.id } }"
							v-slot="{ href }"
							custom
							class="text-decoration-none d-block"
						>
							<a :href="href" target="_blank" rel="noopener noreferrer">
								<h5 class="font-600 dark-text mb-1">
									<I18nVue :uz="item.title_uz" :ru="item.title_ru" :en="item.title_en" />
								</h5>

								<h6 class="font-600 text-secondary-dark">{{ item.date_added | filterDate}} {{ item.modified_date | filterTime }}</h6>
							</a>
						</router-link>
					</v-col>
				</v-row>
			</template>
		</div>
	</aside>
</template>

<script>
import I18nVue from "../../../../I18nVue";
import { SearchIcon, WatchIcon } from "vue-feather-icons";
import { debounceEvent } from "@/utils/frontend";

export default {
	name: "Widget",
	props: {
		CATEGORY_ID: {
			type: [String, Number]
		}
	},
	components: {
		I18nVue,
		SearchIcon,
		WatchIcon
	},
	data() {
		return {
			categoryList: [],
			newsList: [],
			search: ''
		};
	},
	watch: {
		search() {
			window.addEventListener('keyup', this.debouncedGetAnswerEPOS())
		}
	},
	created() {
		this.debouncedGetAnswerEPOS = debounceEvent(() => this.getAll(),750);
	},
	mounted() {
		this.getCategoryList();
		this.getAll()
	},
	methods: {
		/*
		 *
		 * */
		getCategoryList() {
			this.$http.get(`/${this.$store.state.auth.COMPANY_ID}/category/`).then(({ data }) => {
				this.categoryList = data.results;
			});
		},

		/*
		*
		* */
		getAll() {
			this.$http
				.get(`/${this.$store.state.auth.COMPANY_ID}/news/`, {
					params: {
						page_size: 5,
						category: this.CATEGORY_ID,
						search: this.search
					},
				})
				.then(({ data }) => {
					this.newsList = data.results
				})
		}
	}
};
</script>

<style>
.widget-view {
	position: sticky;
	top: 0;
}

.widget-search input {
	font-size: 14px;
	line-height: 1;
}

.widget-search svg {
	top: 10px;
	right: 10px;
}
</style>
