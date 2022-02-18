<template>
    <div class="international-activity-view">
        <v-container>
            <div class="app-content-view">
                <p>
                    <I18nVue t='InternationalCooperation.InternationalActivity.text1'/>
                </p>

                <p>
                    <I18nVue t='InternationalCooperation.InternationalActivity.text2'/>
                </p>

                <p>
                    <I18nVue t='InternationalCooperation.InternationalActivity.text3'/>
                </p>

                <p>
                    <I18nVue t='InternationalCooperation.InternationalActivity.text4'/>
                </p>

                <p>
                    <I18nVue t='InternationalCooperation.InternationalActivity.text5'/>
                </p>

                <p>
                    <I18nVue t='InternationalCooperation.InternationalActivity.text6'/>
                </p>
            </div>
        </v-container>
    </div>
</template>

<script>
    import I18nVue from '@/I18nVue'
    export default {
        name: 'index',
        components:{
            I18nVue
        }
    }
</script>

<style></style>
