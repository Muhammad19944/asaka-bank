<template>
    <div class="sfea-view">
        <v-container>
            <div class="app-view-content">
                <p>
                    <I18nVue t='Cooperative.FInancing.Foreign.text1'/>
                </p>

                <p>
                    <I18nVue t='Cooperative.FInancing.Foreign.text2'/>
                </p>

                <p>
                    <I18nVue t='Cooperative.FInancing.Foreign.text3'/>
                </p>

                <p>
                    <I18nVue t='Cooperative.FInancing.Foreign.text4'/>
                </p>
            </div>
        </v-container>
    </div>
</template>

<script>
    import I18nVue from '@/I18nVue'
    export default {
        name: 'SFEA',
        components:{
            I18nVue
        }
    }
</script>

<style></style>
