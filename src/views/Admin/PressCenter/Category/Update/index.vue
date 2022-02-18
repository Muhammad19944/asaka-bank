<template>
    <category-form :TYPE="$store.state.FORM_TYPE.UPDATE" />
</template>

<script>
    import CategoryForm from '../components/CategoryForm'

    export default {
        name: 'index',
        components: {
            CategoryForm,
        },
    }
</script>

<style></style>
