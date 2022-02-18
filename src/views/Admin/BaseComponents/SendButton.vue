<template>
    <v-btn
        @click="click"
        :loading="loading"
        :disabled="loading"
        depressed
        :color="color"
        min-width="135"
        min-height="45"
    >
        <div class="d-flex align-center">
            <span class="text-transform-reset reset-size font-600 text-white mr-3">{{ text }}</span>
            <slot>
                <send-icon size="1.3x" class="text-white"/>
            </slot>
        </div>
    </v-btn>
</template>

<script>
    import { SendIcon } from 'vue-feather-icons'

    export default {
        name: 'SendButton',
        props: {
            text: {
                type: String,
                default: 'Yuborish',
            },
            color: {
                type: String,
                default: 'rgba(var(--primary), 1)',
            },
        },
        components: {
            SendIcon,
        },
        data() {
            return {
                loader: null,
                loading: false,
            }
        },
        watch: {
            loader() {
                const l = this.loader
                this[l] = !this[l]

                setTimeout(() => (this[l] = false), 1000)

                this.loader = null
            },
        },
        methods: {
            click() {
                this.loader = 'loading'

                this.$emit('emit:up')
            },
        },
    }
</script>