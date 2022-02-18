
<script>
import { debounceEvent } from "../../../utils/frontend";

export default {
	name: "AppLayoutScopeRenderless",
	props: {
		apiUrl: {
			type: String,
			default: null
		},
		type: {
			type: String,
			default: null
		},
		category: {
			type: [Number, String],
			default: null
		}
	},
	data() {
		return {
			filters: {
				search: null,
				status: null,
				card: null,
				cardType: null,
				credit: null,
				depositType: null,
				filial: null,
				filterByUrl: {
					title_uz: "Kredit uchun arizalar",
					title_ru: "Заявки на кредит",
					title_en: "Credit applications",
					value: "credit_application/action",
					block: 2
				}
			},
			list: [],
			listCount: 0,
			loading: true
		}
	},
	watch: {
		filters: {
			deep: true,
			handler(value) {
				window.addEventListener('keyup', this.debouncedSearch())
			}
		}
	},
	created() {
		this.debouncedSearch = debounceEvent(() => this.getAll(),500);

		this.getAll()
	},

	methods: {
		/*
		*
		* */
		getAll() {
			this.$http.get(`/${this.$store.state.auth.COMPANY_ID}/${this.apiUrl}/`, {
				params: {
					category: this.category,
					search: this.filters.search,
					status: this.filters.status,
					card: this.filters.card,
					card_type: this.filters.cardType,
					credit: this.filters.credit,
					type: this.filters.depositType,
					filial: this.filters.filial,
					page: this.$store.state.FILTER_OPTIONS.page,
					page_size: this.$store.state.FILTER_OPTIONS.page_size
				}
			})
			.then(({ data }) => {
				console.log(data);

				this.list = data.results
				this.listCount = data.count

				// Calculate pagination
				this.$store.state.FILTER_OPTIONS.page_length = Math.ceil(data.count / this.$store.state.FILTER_OPTIONS.page_size);
			})
			.finally(() => {
				this.loading = false
			})
		},

		/*
		*
		* */
		deleteRow(id) {
			if (!confirm("O'chirishni xoxlaysizmi ?")) {
				return void 0;
			}

			this.$http.delete(`/${this.$store.state.auth.COMPANY_ID}/${this.apiUrl}/${id}/`)
				.then(res => {
					this.$toast.success(`O'chirildi`);

					this.getAll();
				})
				.catch(() => {
					this.$toast.error(`O'chirishda xatolik`);
				});
		},

		/*
		*
		* */
		paginate(val) {
			this.$store.state.FILTER_OPTIONS.page = val;
			this.loading = true;

			this.getAll();
		},

		/*
		*
		* */
		exportToExcel() {
			this.loading = true

			this.$http.get(`/${this.$store.state.auth.COMPANY_ID}/export_apps_to_excel/`, {
				responseType: 'blob',
				params: {
					status: this.filters.status,
					card: this.filters.card,
					credit: this.filters.credit,
					filial: this.filters.filial,
					type: this.type
				}
			})
				.then(({ data }) => {
					const url = window.URL.createObjectURL(new Blob([data]));

					const link = document.createElement('a');
					link.href = url;
					link.setAttribute('download',  'application_documents' + '.xls');
					document.body.appendChild(link);
					link.click();
				})
				.finally(() => {
					this.loading = false
				})
		}
	},
	render() {
		return this.$scopedSlots.default({
			filters: this.filters,
			list: this.list,
			count: this.listCount,
			loading: this.loading,
			getAll: this.getAll,
			deleteRow: this.deleteRow,
			paginate: this.paginate,
			exportToExcel: this.exportToExcel
		})
	},
};
</script>

<style scoped>

</style>
