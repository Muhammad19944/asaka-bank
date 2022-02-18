<template>
    <div class="dealing-operations-view">
        <v-container>
            <div class="app-view-content">
                <h1 class='font-weight-bold font-300 mb-8'>
                    <I18nVue t='Cooperative.FInancing.Dealing.header1'/>
                </h1>
                <p>
                    <I18nVue t='Cooperative.FInancing.Dealing.text1'/>
                </p>

                <p>
                    <I18nVue t='Cooperative.FInancing.Dealing.text2'/>
                </p>

                <p>
                    <I18nVue t='Cooperative.FInancing.Dealing.text3'/>
                </p>

                <p>
                    <I18nVue t='Cooperative.FInancing.Dealing.text4'/>
                </p>


                <h1 class='font-weight-bold font-300 mb-8 mt-16'>
                    <I18nVue t='Cooperative.FInancing.Dealing.header2'/>
                </h1>
                <p>
                    <I18nVue t='Cooperative.FInancing.Dealing.text5'/>
                </p>

                <p>
                    <I18nVue t='Cooperative.FInancing.Dealing.text6'/>
                </p>

                <p>
                    <I18nVue t='Cooperative.FInancing.Dealing.text7'/>
                </p>

                <p>
                    <I18nVue t='Cooperative.FInancing.Dealing.text8'/>
                </p>
            </div>

        </v-container>
    </div>
</template>

<script>
    import I18nVue from '@/I18nVue'
    export default {
        name: 'DealingOperations',
        components:{
            I18nVue
        }
    }
</script>

<style></style>
