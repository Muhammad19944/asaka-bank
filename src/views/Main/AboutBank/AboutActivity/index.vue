<template>
    <div class="about-activity-view">
        <v-container>
            <div class="app-content-view">
                <v-simple-table class="app-table app-table__border">
                    <template v-slot:default>
                        <thead>
                            <tr>
                                <th>
                                    <h5 class="font-700 dark-text">№</h5>
                                </th>
                                <th>
                                    <h5 class="font-700 dark-text">{{ $t("Nav.AboutBank.GeneralInfo.OpenInfo.openInfo") }}</h5>
                                </th>
                                <th>
                                    <h5 class="font-700 dark-text">{{ $t("Nav.AboutBank.GeneralInfo.OpenInfo.format") }}</h5>
                                </th>
                                <th>
                                    <h5 class="font-700 dark-text">{{ $t("Nav.AboutBank.GeneralInfo.OpenInfo.renewal") }}</h5>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for='(item, index) in documentsList' :key='item.id'>
                                <td width="100" class="py-3">
                                    <h5>{{ index + 1 }}</h5>
                                </td>
                                <td width="500" class="py-3">
                                    <h5>
	                                    <I18nVue :uz='item.title_uz' :ru='item.title_ru' :en='item.title_en' />
                                    </h5>
                                </td>
                                <td class="py-3">
                                    <a
	                                    download
	                                    target='_blank'
	                                    v-for='child in item.attachments'
	                                    :href="$http.defaults.baseURL + child.url"
	                                    class="d-inline-block text-decoration-none mr-3"
                                    >
                                        <v-chip color="red" text-color="white" class="px-5 pointer"> {{ child.ext }} </v-chip>
                                    </a>
	                                <a
		                                download
		                                target='_blank'
		                                v-for='child2 in item.generated_links'
		                                :href="child2.link"
		                                class="d-inline-block text-decoration-none mr-3"
	                                >
		                                <v-chip color="red" text-color="white" class="px-5 pointer"> .{{ child2.extension }} </v-chip>
	                                </a>
                                </td>
                                <td width="200" class="py-3">
                                    <h5>
	                                    <I18nVue :uz='item.renewal_period_uz' :ru='item.renewal_period_ru' :en='item.renewal_period_en' />
                                    </h5>
                                </td>
                            </tr>
                        </tbody>
                    </template>
                </v-simple-table>
            </div>
        </v-container>
    </div>
</template>

<script>
	import I18nVue from '@/I18nVue'
    export default {
        name: 'index',
	    components: {
            I18nVue
	    },
	    data(){
        	return {
        		documentsList: []
	        }
	    },
	    mounted() {
        	this.getAll()
	    },
	    methods: {
        	getAll() {
        		this.$http.get(`${this.$store.state.auth.COMPANY_ID}/bank/open_documents`, {
        			params: {
        				ordering: "id",
				        page_size: 500
			        }
		        })
		        .then(({ data }) => {
		        	this.documentsList = data.results
		        })
	        }
	    }
    }
</script>

<style></style>
