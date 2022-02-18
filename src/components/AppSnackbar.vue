<template>
    <v-snackbar v-model="snackbar">
        {{ text }}

        <template v-slot:action="{ attrs }">
            <v-btn color="pink" text v-bind="attrs" @click="snackbar = false">
                <x-icon size="1.5x" class="custom-class"/>
            </v-btn>
        </template>
    </v-snackbar>
</template>

<script>
    import { XIcon } from 'vue-feather-icons'

    export default {
        name: 'AppSnackbar',
        components: {
            XIcon,
        },
        data() {
            return {
                snackbar: false,
                text: `Hello, I'm a snackbar`,
            }
        },
    }
</script>

<style></style>
