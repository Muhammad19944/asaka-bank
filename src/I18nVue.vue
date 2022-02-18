<template>
    <span :class="classes" v-if="t" v-bind="$attrs">{{ $t(t) }}</span>
    <span :class="classes" v-else v-bind="$attrs">
	    {{ $i18n.locale === 'en' ? en : $i18n.locale === 'ru' ? ru : uz }}
	    <slot name="prefix" />
    </span>
</template>

<script>
    export default {
        name: 'I18nVue',
        props: ['uz', 'ru', 'en', 't', 'classes'],
    }
</script>
