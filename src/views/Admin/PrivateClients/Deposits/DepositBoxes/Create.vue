<template>
    <deposit-boxes :TYPE="$store.state.FORM_TYPE.CREATE" />
</template>

<script>
    import DepositBoxes from './components/DepositBoxes'

    export default {
        name: 'Create',
        components: {
            DepositBoxes,
        },
    }
</script>

<style></style>
