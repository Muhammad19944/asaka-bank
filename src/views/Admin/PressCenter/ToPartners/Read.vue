<template>
  <news-create-form :TYPE="$store.state.FORM_TYPE.READ" />
</template>

<script>
import NewsCreateForm from '../components/NewsCreateForm'
export default {
  name: "Read",
  components: {
    NewsCreateForm,
  },
}
</script>

<style scoped>

</style>