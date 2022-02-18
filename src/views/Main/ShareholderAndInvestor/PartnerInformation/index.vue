<template>
  <div>
    <news-form :_id='16'/>
    <v-divider class="my-6 my-lg-10 w-100" style="border-color: rgba(var(--border-color), 1)" />
  </div>
</template>

<script>
import NewsForm from '@/views/Main/PressCenter/components/NewsForm'

	export default {
    name: "index",
    components: {
      NewsForm
    }
  }
</script>

<style></style>
