<template>
    <div class="project-financing-view">
        <v-container>
            <div class="app-content-view">
                <h3 class="font-600 dark-text mb-3">
                    <I18nVue t='InternationalCooperation.ProjectFinancing.header1'/>
                </h3>

                <p>
                    <I18nVue t='InternationalCooperation.ProjectFinancing.text1'/>
                </p>

                <div class="app-ul">
                    <ul>
                        <li>
                            <I18nVue t='InternationalCooperation.ProjectFinancing.li1'/>
                        </li>

                        <li>
                            <I18nVue t='InternationalCooperation.ProjectFinancing.li2'/>
                        </li>

                        <li>
                            <I18nVue t='InternationalCooperation.ProjectFinancing.li3'/>
                        </li>
                    </ul>
                </div>

                <h3 class="font-600 dark-text mb-3 mt-16">
                    <I18nVue t='InternationalCooperation.ProjectFinancing.header2'/>
                </h3>

                <p>
                    <I18nVue t='InternationalCooperation.ProjectFinancing.text2'/>
                </p>

                <p>
                    <I18nVue t='InternationalCooperation.ProjectFinancing.text3'/>
                </p>

                <p>
                    <I18nVue t='InternationalCooperation.ProjectFinancing.text4'/>
                </p>

                <p>
                    <I18nVue t='InternationalCooperation.ProjectFinancing.text5'/>
                </p>

                <p>
                    <I18nVue t='InternationalCooperation.ProjectFinancing.text6'/>
                </p>
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
        }
    }
</script>

<style></style>
