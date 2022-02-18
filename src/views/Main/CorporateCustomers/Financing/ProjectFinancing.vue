<template>
    <div class="project-financing-view">
        <v-container>
            <div class="app-view-content">
                <p>
                    <I18nVue t='Cooperative.FInancing.Projects.text1'/>
                </p>

                <p>
                    <I18nVue t='Cooperative.FInancing.Projects.text2'/>
                </p>

                <p>
                    <I18nVue t='Cooperative.FInancing.Projects.text3'/>
                </p>

                <p>
                    <I18nVue t='Cooperative.FInancing.Projects.text4'/>
                </p>

                <h4 class="dark-text mb-2 mt-8 font-weight-bold">
                    <I18nVue t='Cooperative.FInancing.Projects.header'/>:
                </h4>

                <div class="app-ul">
                    <ul>
                        <li><I18nVue t='Cooperative.FInancing.Projects.header_li1'/></li>
                        <li><I18nVue t='Cooperative.FInancing.Projects.header_li2'/></li>
                        <li><I18nVue t='Cooperative.FInancing.Projects.header_li3'/></li>
                        <li><I18nVue t='Cooperative.FInancing.Projects.header_li4'/></li>
                        <li><I18nVue t='Cooperative.FInancing.Projects.header_li5'/></li>
                        <li><I18nVue t='Cooperative.FInancing.Projects.header_li6'/></li>
                        <li><I18nVue t='Cooperative.FInancing.Projects.header_li7'/></li>
                    </ul>
                </div>

                <h4 class="dark-text mb-2 mt-8 font-weight-bold">
                    <I18nVue t='Cooperative.FInancing.Projects.header2'/>
                </h4>

                <div class="app-ul">
                    <ul>
                        <li><I18nVue t='Cooperative.FInancing.Projects.header2_li1'/></li>
                        <li><I18nVue t='Cooperative.FInancing.Projects.header2_li2'/></li>
                        <li><I18nVue t='Cooperative.FInancing.Projects.header2_li3'/></li>
                        <li><I18nVue t='Cooperative.FInancing.Projects.header2_li4'/></li>
                    </ul>
                </div>
            </div>
        </v-container>
    </div>
</template>

<script>
    import I18nVue from '@/I18nVue'
    export default {
        name: 'ProjectFinancing',
        components:{
            I18nVue
        }
    }
</script>

<style></style>
