<template>
  <news-create-form
      :TYPE="$store.state.FORM_TYPE.UPDATE"
      :CATEGORY_ID="16"
      REDIRECT_ROUTE="DashboardToPartnersList"
  />
</template>

<script>
import NewsCreateForm from '../components/NewsCreateForm'
export default {
  name: "Update",
  components: {
    NewsCreateForm,
  },
}
</script>

<style scoped>

</style>