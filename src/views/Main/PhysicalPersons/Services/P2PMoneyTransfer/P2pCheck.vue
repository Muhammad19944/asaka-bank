<template>
  <v-dialog v-if="card_info_data" v-model="checkDialog" max-width="500px">
    <div class="printSave">
      <vue-html2pdf
        :show-layout="false"
        :float-layout="true"
        :enable-download="true"
        :preview-modal="true"
        :paginate-elements-by-height="1400"
        filename="check"
        :pdf-quality="2"
        :manual-pagination="false"
        pdf-format="a5"
        ref="html2Pdf"
      >
        <section slot="pdf-content">
          <v-card-text>
            <v-container>
              <div class="print-wrapper">
                <div class="print-item">
                  <I18nVue t="P2p.Check.ServiceName" />
                </div>
                <div class="print-item print-item__right">
                  <h6>
                    <I18nVue t="P2p.Check.MoneyTransfer" />
                  </h6>
                </div>
                <div class="print-item" v-if="card_info_data.receiver.cardHolder">
                  <I18nVue t="P2p.Check.Receiver" />
                </div>
                <div class="print-item print-item__right">
                  <h6>
                    {{ card_info_data.receiver.cardHolder }}
                  </h6>
                </div>
                <div class="print-item" v-if="card_info_data.receiver.bankName">
                  <I18nVue t="P2p.Check.ReceivingBank" />
                </div>
                <div class="print-item print-item__right">
                  <h6>
                    {{ card_info_data.receiver.bankName + " " }} &nbsp;
                    <img :src="card_info_data.receiver.bankLogo.logo" style="max-width: 15px" alt="Logo">
                  </h6>
                </div>
                <div class="print-item" v-if="card_info_data.receiver.cardNumber">
                  <I18nVue t="P2p.Check.ReceivingCard" />
                </div>
                <div class="print-item print-item__right">
                  <h6>
                    {{ card_info_data.receiver.cardNumber }}
                  </h6>
                </div>
                <div class="print-item" v-if="card_info_data.sender.cardNumber">
                  <I18nVue t="P2p.Check.CardNumber" />
                </div>
                <div class="print-item print-item__right">
                  <h6>
                    {{ card_info_data.sender.cardNumber }}
                  </h6>
                </div>
                <div class="print-item" v-if="wu_success_data.trx">
                  <I18nVue t="P2p.Check.SystemTransferID" />
                </div>
                <div class="print-item print-item__right">
                  <h6>
                    {{ wu_success_data.trx }}
                  </h6>
                </div>
                <div class="print-item" v-if="wu_success_data.date">
                  <I18nVue t="P2p.Check.TransferTime" />
                </div>
                <div class="print-item print-item__right">
                  <h6>
                    {{ wu_success_data.date }}
                  </h6>
                </div>
                <div class="print-item" v-if="wu_success_data.amount">
                  <I18nVue t="P2p.Check.Shortcoming" />
                </div>
                <div class="print-item print-item__right">
                  <h6>
                    {{ Math.floor(wu_success_data.amount / 100 * card_info_data.serviceCharge.value / 100) }}
                    <I18nVue t="P2p.Check.Sum" />
                    ({{ card_info_data.serviceCharge.value }} %)
                  </h6>
                </div>
                <hr class="line" />
                <div class="print-item">
                  <I18nVue t="P2p.Check.PaymentAmount" />
                </div>
                <div class="print-item print-item__right">
                  <h3>
                    {{ Math.floor(wu_success_data.amount / 100) }}    <I18nVue t="P2p.Check.Sum" />
                  </h3>
                </div>
                <hr class="line" />
                <div class="print-item" v-if="wu_success_data.amount">
                  <h4>
                    <PhoneCallIcon size="0.6x" />
                    1152
                  </h4>
                </div>
                <div class="print-item print-item__right">
                  <h4>
                    <GlobeIcon size="0.5x" />
                    www.asakabank.uz
                  </h4>
                </div>
              </div>
            </v-container>
          </v-card-text>
        </section>
      </vue-html2pdf>
    </div>
    <form class="app-form-group payment-modal-wrap pa-4 d-print" id="print" ref="content">
      <v-card-title id="checkIcon">
        <img src="/images/logo.svg" alt="Logo" style="width: 100px">
        <button @click.prevent="checkDialog = !checkDialog" class="d-inline-block outline-transparent size-md float-right d-print-none">
          <x-icon size="1.5x" />
        </button>
      </v-card-title>
      <v-card-text>
        <v-container>
          <div class="print-wrapper">
            <div class="print-item">
              <I18nVue t="P2p.Check.ServiceName" />
            </div>
            <div class="print-item print-item__right">
              <I18nVue t="P2p.Check.MoneyTransfer" />
            </div>
            <div class="print-item" v-if="card_info_data.receiver.cardHolder">
              <I18nVue t="P2p.Check.Receiver" />
            </div>
            <div class="print-item print-item__right">
              <h6>
                {{ card_info_data.receiver.cardHolder }}
              </h6>
            </div>
            <div class="print-item" v-if="card_info_data.receiver.bankName">
              <I18nVue t="P2p.Check.ReceivingBank" />
            </div>
            <div class="print-item print-item__right">
              <h6>
                {{ card_info_data.receiver.bankName + " " }} &nbsp;
                <img :src="card_info_data.receiver.bankLogo.logo" style="max-width: 15px" alt="Logo">
              </h6>
            </div>
            <div class="print-item" v-if="card_info_data.receiver.cardNumber">
              <I18nVue t="P2p.Check.ReceivingCard" />
            </div>
            <div class="print-item print-item__right">
              <h6>
                {{ card_info_data.receiver.cardNumber }}
              </h6>
            </div>
            <div class="print-item" v-if="card_info_data.sender.cardNumber">
              <I18nVue t="P2p.Check.CardNumber" />
            </div>
            <div class="print-item print-item__right">
              <h6>
                {{ card_info_data.sender.cardNumber }}
              </h6>
            </div>
            <div class="print-item" v-if="wu_success_data.trx">
              <I18nVue t="P2p.Check.SystemTransferID" />
            </div>
            <div class="print-item print-item__right">
              <h6>
                {{ wu_success_data.trx }}
              </h6>
            </div>
            <div class="print-item" v-if="wu_success_data.date">
              <I18nVue t="P2p.Check.TransferTime" />
            </div>
            <div class="print-item print-item__right">
              <h6>
                {{ wu_success_data.date }}
              </h6>
            </div>
            <div class="print-item" v-if="wu_success_data.amount">
              <I18nVue t="P2p.Check.Shortcoming" />
            </div>
            <div class="print-item print-item__right">
              <h6>
                {{ Math.floor(wu_success_data.amount / 100 * card_info_data.serviceCharge.value / 100) }}
                <I18nVue t="P2p.Check.Sum" />
                ({{ card_info_data.serviceCharge.value }} %)
              </h6>
            </div>
            <hr class="line" />
            <div class="print-item">
              <I18nVue t="P2p.Check.PaymentAmount" />
            </div>
            <div class="print-item print-item__right">
              <h3>
                {{ Math.floor(wu_success_data.amount / 100) }}
                <I18nVue t="P2p.MoneyTransfer.Sum" />
              </h3>
            </div>
            <hr class="line" />
            <div class="print-item" v-if="wu_success_data.amount">
              <h4>
                <PhoneCallIcon size="0.6x" />
                1152
              </h4>
            </div>
            <div class="print-item print-item__right">
              <h4>
                <GlobeIcon size="0.5x" />
                www.asakabank.uz
              </h4>
            </div>
          </div>
          <div>
            <v-btn
                depressed
                rounded
                color="danger"
                min-width="192"
                min-height="50"
                @click.prevent="printPage"
                class="text-white d-print-none"
            >
              <save-icon size="1.5x" class="mr-4" />
              <I18nVue t="P2p.Check.Print" />
            </v-btn>
          </div>
        </v-container>
      </v-card-text>
    </form>
  </v-dialog>
</template>
<script>
import { XIcon, PrinterIcon, SaveIcon, PhoneCallIcon, GlobeIcon } from "vue-feather-icons";
import I18nVue from "@/I18nVue";
import VueHtml2pdf from "vue-html2pdf";

export default {
  name: "P2pCheck",
  components: { I18nVue, XIcon, PrinterIcon, SaveIcon, PhoneCallIcon, GlobeIcon, VueHtml2pdf },
  props: {
    checkDialog: {
      type: Boolean,
      required: true
    },
    card_info_data: {
      type: Object,
      required: true
    },
    wu_success_data: {
      type: Object,
      required: true
    }
  },
  methods: {
    printPage() {
      let printContents = document.getElementById("print").innerHTML;
      let originalContents = document.body.innerHTML;
      document.body.innerHTML = printContents;
      window.print();
      document.body.innerHTML = originalContents;
    },
    // download() {
    //   this.$refs.html2Pdf.generatePdf();
    // }
  }
};
</script>
<style>
@media screen {
  .line {
    width: 100%;
    border-color: red;
    margin-bottom: 10px;
  }

  .print-wrapper {
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    position: relative;
    width: 410px !important;
    border-radius: 3px;
    margin: 0 auto 30px;
    padding: 20px 14px 24px;
    background: #fff;
    border: 1px solid #000;
  }

  .print-item {
    width: 50%;
    padding-top: 10px;
    padding-bottom: 10px;
  }

  .print-item p {
    margin-bottom: 0 !important;
  }

  .print-item__right {
    text-align: right;
  }
}

.btn {
  cursor: pointer;
  color: #222633;
  outline: none;
  max-width: 352px;
  width: auto;
  padding: 0;
  border-radius: 30px;
  border: 1px solid #f3f3f5;
  background-color: initial;
  display: inline-block;
  align-items: center;
  min-width: 80px;
  transition: all .1s ease-in-out;
  -webkit-transition: all .1s ease-in-out;
}

.btn svg {
  content: "";
  top: -1px;
  left: -1px;
  right: -1px;
  bottom: -1px;
  border-radius: 50%;
  border: 2px solid #f3f3f5;
  cursor: pointer;
  color: #222633;
  width: 24px;
  height: 24px;
  background-position: 50%;
  background-repeat: no-repeat;
  min-width: 30px;
  display: inline-block;
  background-color: #f3f3f5;
  background-size: 20px;
  position: relative;
  transition: all .2s ease-in-out;
}

.btn svg {
  content: "";
  position: absolute;
  top: -1px;
  left: -15px;
  right: -1px;
  bottom: -1px;
  border-radius: 50%;
  border: 2px solid #f3f3f5;
}

.btn span {
  font-weight: 500;
  font-size: 13px;
  line-height: 18px;
  color: #222633;
  width: 100%;
  padding: 2px 0 2px 8px;
}

.btn:hover {
  border-color: red !important;
  transform: scale(0.98);
}

.btn:hover svg {
  padding: 0;
  margin: 0;
  color: #ff5757;
  transform: scale(0.98);
}

#checkIcon {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  align-content: center;
  justify-content: center;
  position: relative;
}

#checkIcon button {
  position: absolute;
  right: 2%;
  top: 30%
}

.line {
  width: 100%;
  border: 1px solid red;
  margin-bottom: 10px;
}

.print-wrapper {
  display: flex;
  flex-wrap: wrap;
  border-radius: 3px;
  position: relative;
  margin-bottom: 30px;
  padding: 20px 14px 24px;
  background: #fff;
  width: 100%;
  box-shadow: 0 2px 15px rgb(0 0 0 / 12%);
}

.print-item {
  width: 50%;
  padding-top: 10px;
  padding-bottom: 10px;
  margin: auto;
}

.print-item p {
  margin-bottom: 0 !important;
}

.print-item__right {
  text-align: right;
}


@media print {
  #checkIcon {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    margin: 0 auto 16px;
    align-content: center;
    justify-content: center;
    position: relative;
  }

  .line {
    width: 100%;
    border-color: red;
    margin-bottom: 10px;
  }

  #checkIcon button {
    display: none;
  }

  .d-print-none {
    display: none !important;
  }

  .print-wrapper {
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    position: relative;
    width: 350px !important;
    border-radius: 3px;
    margin: 0 auto 30px;
    padding: 20px 14px 24px;
    background: #fff;
    border: 1px solid #000;
  }

  .print-item {
    width: 50%;
    padding-top: 10px;
    padding-bottom: 10px;
  }

  .print-item p {
    margin-bottom: 0 !important;
  }

  .print-item__right {
    text-align: right;
  }
}
</style>