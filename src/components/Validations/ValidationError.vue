<template>
    <div>
        <v-alert border="left" color="red" type="error" dense text outlined dismissible>
            {{ validationErrors }}
        </v-alert>
    </div>
</template>

<script>
    export default {
        name: 'AppValidationErrors',
        props: {
            validationErrors: {
                type: String,
                required: true,
            },
        },
    }
</script>
