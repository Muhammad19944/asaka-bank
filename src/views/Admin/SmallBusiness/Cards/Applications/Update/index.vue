<template>
    <application-form :TYPE="$store.state.FORM_TYPE.UPDATE" />
</template>

<script>
    import ApplicationForm from '../components/ApplicationForm'

    export default {
        name: 'index',
        components: {
            ApplicationForm,
        },
    }
</script>

<style></style>
