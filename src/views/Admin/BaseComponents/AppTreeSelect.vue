<template>
	<div class="app-form-group app-form-group__small no-shadow mb-2">
		<h5 class="font-600 dark-text mb-1">{{ $t('Dashboard.category') }}</h5>

        <tree-select
            v-model="treeModel"
            :options="menuList"
            :disabled="disabled"
            :normalizer="normalizer"
        />
<!--		:disable-branch-nodes="true"-->
    </div>
</template>

<script>
import TreeSelect from '@riophae/vue-treeselect'

export default {
	name: "AppTreeSelect",
    props: {
        value: {
            type: [Number, String]
        },
	    disabled: {
        	type: Boolean
	    },
	    url: {
        	type: String,
		    default: 'menu'
	    }
    },
	components: {
		TreeSelect
	},
	data() {
		return {
			menuList: [],
			menu: null
		}
	},
	mounted() {
		this.getMenuList()
	},
	computed: {
		treeModel: {
			get() { return this.value },
			set(value) {this.$emit('input', value)}
		}
	},
	methods: {
		/*
		*
		* */
		getMenuList() {
			this.$http.get(`/1/${this.url}/`)
				.then(({ data }) => {
					this.menuList = data.results
				})
		},

		/*
		*
		* */
		normalizer(node) {
			return {
				id: node.id,
				label: this.$i18n.locale === 'uz' ? node.title_uz : this.$i18n.locale === 'ru' ? node.title_ru : node.title_en,
				children: node.children,
			}
		}
	}
}
</script>