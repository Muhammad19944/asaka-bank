<template>
    <v-col lg="6" class="p-relative">
        <!--        <pre>{{ // JSON.stringify(merchant_list_id, null, 2) }}</pre>-->
        <v-row>
            <v-col v-for="item in merchant_list_id" sm="4" cols="6">
                <button
                    @click="openPaymentModal({ merchantId: item.merchantId })"
                    class="credit-widget pa-6 rounded-lg overflow-hidden text-center w-100 outline-transparent h-100"
                >
                    <img
                        :src="item.logoUrl && item.logoUrl"
                        alt="no icon"
                        class="d-block mx-auto mb-5 mt-2 img-contain rounded-lg"
                        style="width: 75px; height: 75px"
                    />
                    <I18nVue :uz="item.name.uz" :ru="item.name.ru" :en="item.name.en" classes="font-600 dark-text" />
                </button>
            </v-col>
        </v-row>

        <payment-modal ref="paymentModal" />
    </v-col>
</template>

<script>
    import paymentApi from '@/api/payment'
    import I18nVue from '@/I18nVue'
    import PaymentModal from './components/PaymentModal'

    export default {
        name: 'show',
        components: { I18nVue, PaymentModal },
        data() {
            return {
                merchant_list_id: [],
            }
        },
        mounted() {
            this.getMerchantById()
        },
        watch: {
            $route() {
                this.getMerchantById()
            },
        },
        methods: {
            getMerchantById() {
                paymentApi
                    .merchant_by_category_id(this.$route.params.id)
                    .then((r) => (this.merchant_list_id = r.data))
                    // .catch((err) => console.log('Error on Authentication: ', err.data))
            },
            openPaymentModal({ merchantId }) {
                const { paymentModal } = this.$refs
                paymentApi
                    .merchant_by_id(merchantId)
                    .then(({ data }) => {
                        paymentModal.data = data
                        paymentModal.paymentModel.account = {}
                        if (paymentModal.data.accountFields) {
                            paymentModal.data.accountFields.map((item) => {
                                const { key } = item
                                paymentModal.paymentModel.account[key] = ''
                            })
                            paymentModal.dialog = true
                        }
                    })
                    .catch((err) => console.error('Error on Authentication: ', err.data))
            }
        }
    }
</script>
