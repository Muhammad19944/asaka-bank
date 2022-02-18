<template>
  <finance-form :TYPE="$store.state.FORM_TYPE.CREATE" />
</template>

<script>
import FinanceForm from "@/views/Admin/SmallBusiness/Financing/Finance/components/FinanceForm";
export default {
  name: "index",
  components: {
    FinanceForm
  }
}
</script>

<style scoped>

</style>