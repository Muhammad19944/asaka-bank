<template>
    <div v-if="$store.state.FILTER_OPTIONS.page_length > 0" class="app-pagination">
        <v-pagination
            @input="$emit('emit:up', $store.state.FILTER_OPTIONS.page)"
            v-model="$store.state.FILTER_OPTIONS.page"
            :length="$store.state.FILTER_OPTIONS.page_length"
            :total-visible="7"
            class="tres"
        ></v-pagination>
    </div>
</template>

<script>
    export default {
        name: 'AppPagination',
    }
</script>

<style>
    .app-pagination .v-pagination {
        justify-content: flex-start;
    }

    .app-pagination .v-pagination__item,
    .app-pagination .v-pagination__navigation {
        height: 40px;
        min-width: 40px;
        box-shadow: none !important;
        outline: transparent !important;
        border: 1px solid rgba(var(--border-color), 1);
    }
</style>
