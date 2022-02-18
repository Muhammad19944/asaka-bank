<template>
    <div class="charity-activity">
        <v-container>
            <div class="app-content-view">
                <I18nVue t='AboutBank.charityActivity' />
            </div>
        </v-container>
    </div>
</template>

<script>
    import I18nVue from "@/I18nVue";

    export default {
        name: "index",
        components: { I18nVue }
    };
</script>