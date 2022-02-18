<template>
    <div class="payment-methods-view">
        <h2 class="font-600 dark-text mb-8">
            <I18nVue t="PaymentMethodsTitle" />
        </h2>
        <div v-if="property" class="app-ul">
            <span v-for="item of property" v-if="$i18n.locale === 'en'" v-html="item.redemption_type_en" />
            <span v-for="item of property" v-if="$i18n.locale === 'ru'" v-html="item.redemption_type_ru" />
            <span v-for="item of property" v-if="$i18n.locale === 'uz'" v-html="item.redemption_type_uz" />
        </div>
    </div>
</template>

<script>
    import I18nVue from '@/I18nVue'
    export default {
        name: 'PaymentMethods',
        components: { I18nVue },
        props: ['property'],
    }
</script>
