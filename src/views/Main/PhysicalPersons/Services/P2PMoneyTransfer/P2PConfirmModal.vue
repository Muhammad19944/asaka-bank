<template>
  <v-dialog v-model="confirmModel.dialog" max-width="500px">
    <form class="app-form-group payment-modal-wrap pa-4">
      <v-card-title>
        <h1 class="d-inline-block mr-auto">
          <I18nVue t="P2p.ConfirmModal.ConfirmationOfPayment" />
        </h1>
        <button @click.prevent="confirmModel.dialog = !confirmModel.dialog"
                class="d-inline-block outline-transparent size-md float-right">
          <x-icon size="1.5x" />
        </button>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12">
              <I18nVue t="P2p.ConfirmModal.SMSCodeWillBeSentToThisNumber" />
              {{ confirmModel.data.smsPhone && confirmModel.data.smsPhone }}
            </v-col>
            <v-col v-if="expiresIn !== null || 0" cols="12">
              <vue-countdown :time="expiresIn" :interval="100" v-slot="{ hours, minutes, seconds }">
                <I18nVue t="P2p.ConfirmModal.ApprovalTime" />
                {{ hours }}
                <I18nVue t="P2p.ConfirmModal.Hour" />
                {{ minutes }}
                <I18nVue t="P2p.ConfirmModal.Minute" />
                {{ seconds }}
                <I18nVue t="P2p.ConfirmModal.Second" />
              </vue-countdown>
            </v-col>
            <v-col cols="12">
              <hr class="w-100" />
            </v-col>
            <v-col cols="12">
              <label>
                <I18nVue t="P2p.ConfirmModal.ConfirmationCode" />
                <v-text-field
                  v-model="wu_confirm_data.verifyCode"
                  outlined
                  hide-details
                  class="font-600 dark-text my-2"
                />
              </label>
              <v-btn
                @click.prevent="handleSubmit()"
                type="submit"
                depressed
                color="danger"
                min-width="192"
                min-height="50"
                rounded
                class="mt-5"
              >
                <I18nVue classes="font-700 text-white" t="btn_pay" />
              </v-btn>
              <p2p-check
                :checkDialog="checkDialog"
                :wu_success_data="wu_success_data"
                :card_info_data="card_info_data&&card_info_data"
              />
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
    </form>
  </v-dialog>
</template>

<script>
import I18nVue from "@/I18nVue";
import { XIcon } from "vue-feather-icons";
import VueCountdown from "@chenfengyuan/vue-countdown";
import p2p from "@/api/p2p";
import P2pCheck from "@/views/Main/PhysicalPersons/Services/P2PMoneyTransfer/P2pCheck";

export default {
  name: "P2PConfirmModal",
  components: { P2pCheck, I18nVue, XIcon, VueCountdown },
  props: {
    confirmModel: {
      required: true,
      type: Object
    },
    card_info_data: {
      required: true
    }
  },
  data() {
    return {
      wu_confirm_data: {
        confirmId: "",
        verifyCode: null
      },
      wu_success_data: {},
      expiresIn: null,
      checkDialog: false
    };
  },
  methods: {
    handleSubmit() {
      p2p.wu_confirm(this.wu_confirm_data)
        .then(
          ({ data }) => {
            this.wu_success_data = data;
            this.confirmModel.dialog = false;
            this.checkDialog = !this.checkDialog;
          } )
        .catch((err) => {
	        console.log("wu_confirm Catch error", err);
	        this.$toast.error(err.toString())
        })
    }
  },
  updated() {
    this.confirmModel.data.expiresIn ? this.expiresIn = this.confirmModel.data.expiresIn * 1000 : this.expiresIn = null;
    this.confirmModel.data.confirmId ? this.wu_confirm_data.confirmId = this.confirmModel.data.confirmId : this.confirmId = null;
  }
};
</script>