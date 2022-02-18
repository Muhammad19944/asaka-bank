<template>
    <div class="app-loader p-absolute w-100 h-100 d-flex align-center justify-center">
        <v-progress-circular indeterminate color="primary" />
    </div>
</template>

<script>
    export default {
        name: 'AppLoader',
    }
</script>

<style scoped>
    .app-loader {
        top: 0;
        z-index: 1;
        background: var(--theme-layout);
    }
</style>
