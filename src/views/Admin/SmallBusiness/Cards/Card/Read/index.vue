<template>
    <card-form :TYPE="$store.state.FORM_TYPE.READ" />
</template>

<script>
    import CardForm from '../components/CardForm'

    export default {
        name: 'index',
        components: {
            CardForm,
        },
    }
</script>

<style></style>
